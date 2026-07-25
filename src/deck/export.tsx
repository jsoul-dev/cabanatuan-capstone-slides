import { createRoot } from 'react-dom/client';
import type { ReactElement, ReactNode } from 'react';
import { toJpeg } from 'html-to-image';
import { DeckCtx } from './DeckContext';
import Build from './Build';
// jspdf/pptxgenjs/jszip are dynamically imported below — they're only needed
// once the user actually exports, and jsPDF alone drags in a ~250kB
// html2canvas dependency we never call, so keep it out of the main bundle.

/* Export the deck as PDF / PPTX. Slides are arbitrary live web content
   (canvas, SVG, animation) — there's no way to turn that into editable
   PDF/PPTX shapes, so each slide is rasterized to a JPEG (reusing the same
   isStatic:true context Thumb uses for thumbnails, so entrance animations
   render in their final state with no waiting). <Build> click-reveals are
   the one animation PPTX can represent natively (its own click-advance
   animation model), so a slide with N builds is captured as N+1 layered
   images — one per click step — stacked on a single pptx slide and wired
   up with "appear on click" timing. PDF has no animation concept, so it
   only uses the final, fully-built layer. */

const W = 1920;
const H = 1080; // capture at a fixed 16:9 canvas regardless of window size

// How many click-builds a slide has, found by walking its element tree —
// no need to mount anything, and it sidesteps any uncertainty about
// useEffect timing during the offscreen capture below.
function maxBuildAt(node: ReactNode): number {
  if (node == null || typeof node !== 'object') return 0;
  if (Array.isArray(node)) {
    return node.reduce((m, c) => Math.max(m, maxBuildAt(c)), 0);
  }
  const el = node as ReactElement;
  if (!('type' in el) || !('props' in el)) return 0;
  let m = el.type === Build ? (el.props as { at?: number }).at ?? 1 : 0;
  const children = (el.props as { children?: ReactNode })?.children;
  if (children != null) m = Math.max(m, maxBuildAt(children));
  return m;
}

async function captureAt(
  slide: ReactElement,
  bg: string,
  clicks: number
): Promise<string> {
  // A zero-size, clipped wrapper hides this from the viewer without moving
  // the captured node off-screen — html-to-image clones inline styles into
  // an SVG foreignObject, so a `left:-10000px` node renders 10000px outside
  // the captured canvas and comes back blank. The host itself stays at a
  // normal (unpositioned) layout so its clone paints at the origin.
  const clip = document.createElement('div');
  clip.style.cssText =
    'position:fixed; top:0; left:0; width:0; height:0; overflow:hidden; pointer-events:none;';
  const host = document.createElement('div');
  host.style.cssText = `width:${W}px; height:${H}px; overflow:hidden;`;
  clip.appendChild(host);
  document.body.appendChild(clip);
  const root = createRoot(host);
  try {
    await new Promise<void>((resolve) => {
      root.render(
        <div
          className="deck export-capture"
          style={{ width: W, height: H, position: 'relative' }}
        >
          <DeckCtx.Provider value={{ clicks, isStatic: true }}>
            <div className="slide-stage" style={{ animation: 'none' }}>
              {slide}
            </div>
          </DeckCtx.Provider>
        </div>
      );
      // isStatic renders final state on first commit — two rAFs just give
      // the browser a paint before we snapshot.
      requestAnimationFrame(() => requestAnimationFrame(() => resolve()));
    });
    // The live app's dark theme comes from `body`'s background — an
    // ancestor this offscreen host doesn't have. html-to-image also doesn't
    // reliably inline the captured root's own background, and a CSS custom
    // property wouldn't resolve inside the isolated SVG it rasterizes
    // through, so pass the theme color pre-resolved to a literal value.
    // JPEG (not PNG): the canvas is fully opaque, so there's no alpha
    // channel worth keeping — jsPDF embeds PNG's RGBA essentially
    // uncompressed (a 26-slide deck came out at 200MB+), while JPEG gives
    // real compression and is a fraction of the size at this quality.
    return await toJpeg(host, { pixelRatio: 1, backgroundColor: bg, quality: 0.92 });
  } finally {
    root.unmount();
    clip.remove();
  }
}

interface SlideCapture {
  layers: string[]; // layers[i] = slide state after i clicks; length is buildCount+1
}

async function captureSlides(
  slides: ReactElement[],
  onProgress?: (done: number, total: number) => void
): Promise<SlideCapture[]> {
  await document.fonts?.ready;
  const bg = getComputedStyle(document.documentElement)
    .getPropertyValue('--bg')
    .trim();
  const results: SlideCapture[] = [];
  for (const slide of slides) {
    const buildCount = maxBuildAt(slide);
    const layers: string[] = [];
    for (let clicks = 0; clicks <= buildCount; clicks++) {
      layers.push(await captureAt(slide, bg, clicks));
    }
    results.push({ layers });
    onProgress?.(results.length, slides.length);
  }
  return results;
}

function deckFilename(): string {
  const name = document.title
    .trim()
    .replace(/[\\/:*?"<>|]+/g, '-')
    .slice(0, 80);
  return name || 'deck';
}

async function exportToPdf(captures: SlideCapture[], filename: string) {
  const { jsPDF } = await import('jspdf');
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [W, H] });
  captures.forEach((cap, i) => {
    if (i > 0) pdf.addPage([W, H], 'landscape');
    pdf.addImage(cap.layers[cap.layers.length - 1], 'JPEG', 0, 0, W, H);
  });
  pdf.save(filename + '.pdf');
}

// PowerPoint's click-animation timing (p:timing/p:bldLst) has no library
// support — this hand-builds the minimal "Appear on click" OOXML for a list
// of shape ids, in click order. Each shape gets its own top-level <p:par>
// under mainSeq with an indefinite start condition, which is how PowerPoint
// represents "advance on click" steps.
function buildTimingXml(spids: number[]): string {
  let id = 3; // 1 and 2 are used by the root/mainSeq nodes below
  const pars = spids
    .map((spid) => {
      const outerId = id++;
      const effectId = id++;
      const setId = id++;
      return (
        `<p:par><p:cTn id="${outerId}" fill="hold">` +
        `<p:stCondLst><p:cond delay="indefinite"/></p:stCondLst>` +
        `<p:childTnLst><p:par><p:cTn id="${effectId}" presetID="1" presetClass="entr" presetSubtype="0" fill="hold" nodeType="clickEffect">` +
        `<p:stCondLst><p:cond delay="0"/></p:stCondLst>` +
        `<p:childTnLst><p:set><p:cBhvr>` +
        `<p:cTn id="${setId}" dur="1" fill="hold"><p:stCondLst><p:cond delay="0"/></p:stCondLst></p:cTn>` +
        `<p:tgtEl><p:spTgt spid="${spid}"/></p:tgtEl>` +
        `<p:attrNameLst><p:attrName>style.visibility</p:attrName></p:attrNameLst>` +
        `</p:cBhvr><p:to><p:strVal val="visible"/></p:to></p:set></p:childTnLst>` +
        `</p:cTn></p:par></p:childTnLst></p:cTn></p:par>`
      );
    })
    .join('');
  const bldPs = spids
    .map((spid, i) => `<p:bldP spid="${spid}" grpId="${i}"/>`)
    .join('');
  return (
    `<p:timing><p:tnLst><p:par><p:cTn id="1" dur="indefinite" restart="never" nodeType="tmRoot">` +
    `<p:childTnLst><p:seq concurrent="1" nextAc="seek"><p:cTn id="2" dur="indefinite" nodeType="mainSeq">` +
    `<p:childTnLst>${pars}</p:childTnLst></p:cTn>` +
    `<p:prevCondLst><p:cond evt="onPrev" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:prevCondLst>` +
    `<p:nextCondLst><p:cond evt="onNext" delay="0"><p:tgtEl><p:sldTgt/></p:tgtEl></p:cond></p:nextCondLst>` +
    `</p:seq></p:childTnLst></p:cTn></p:par></p:tnLst><p:bldLst>${bldPs}</p:bldLst></p:timing>`
  );
}

// Post-process the generated .pptx (itself a zip) to inject click-animation
// timing on slides with build layers. altText tags each layered image so
// the shape id assigned by pptxgenjs — not something we control — can be
// looked up reliably instead of assumed.
async function addClickAnimations(
  blob: Blob,
  slideNums: number[]
): Promise<Blob> {
  const { default: JSZip } = await import('jszip');
  const zip = await JSZip.loadAsync(blob);
  for (const n of slideNums) {
    const path = `ppt/slides/slide${n}.xml`;
    const file = zip.file(path);
    if (!file) continue;
    const xml = await file.async('string');
    const doc = new DOMParser().parseFromString(xml, 'application/xml');
    const spidByLayer = new Map<number, number>();
    const nodes = doc.getElementsByTagName('p:cNvPr');
    for (let i = 0; i < nodes.length; i++) {
      const descr = nodes[i].getAttribute('descr') || '';
      const m = /^bslide-layer-(\d+)$/.exec(descr);
      const idAttr = nodes[i].getAttribute('id');
      if (m && idAttr) spidByLayer.set(Number(m[1]), Number(idAttr));
    }
    // layer 0 is the always-visible base; layers 1..N-1 reveal on click
    const spids: number[] = [];
    for (let l = 1; l < spidByLayer.size; l++) {
      const spid = spidByLayer.get(l);
      if (spid != null) spids.push(spid);
    }
    if (spids.length === 0) continue;
    zip.file(path, xml.replace('</p:sld>', buildTimingXml(spids) + '</p:sld>'));
  }
  return zip.generateAsync({
    type: 'blob',
    mimeType:
      'application/vnd.openxmlformats-officedocument.presentationml.presentation',
  });
}

function downloadBlob(blob: Blob, filename: string) {
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = filename;
  a.click();
  URL.revokeObjectURL(url);
}

async function exportToPptx(captures: SlideCapture[], filename: string) {
  const { default: PptxGenJS } = await import('pptxgenjs');
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'DECK', width: W / 96, height: H / 96 }); // px → inches @96dpi
  pptx.layout = 'DECK';

  const animatedSlideNums: number[] = [];
  captures.forEach((cap, i) => {
    const slide = pptx.addSlide();
    cap.layers.forEach((img, layerIdx) => {
      slide.addImage({
        data: img,
        x: 0,
        y: 0,
        w: W / 96,
        h: H / 96,
        altText: `bslide-layer-${layerIdx}`,
      });
    });
    if (cap.layers.length > 1) animatedSlideNums.push(i + 1);
  });

  const blob = (await pptx.write({ outputType: 'blob' })) as Blob;
  const finalBlob = animatedSlideNums.length
    ? await addClickAnimations(blob, animatedSlideNums)
    : blob;
  downloadBlob(finalBlob, filename + '.pptx');
}

export type ExportKind = 'pdf' | 'pptx';

export async function exportDeck(
  kind: ExportKind,
  slides: ReactElement[],
  onProgress?: (done: number, total: number) => void
): Promise<void> {
  const captures = await captureSlides(slides, onProgress);
  const filename = deckFilename();
  if (kind === 'pdf') await exportToPdf(captures, filename);
  else await exportToPptx(captures, filename);
}
