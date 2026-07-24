import { createRoot } from 'react-dom/client';
import type { ReactElement } from 'react';
import { toPng } from 'html-to-image';
import { DeckCtx } from './DeckContext';
// jspdf/pptxgenjs are dynamically imported below — they're only needed once
// the user actually exports, and jsPDF alone drags in a ~250kB html2canvas
// dependency we never call, so keep it out of the main bundle.

/* Export the deck as PDF / PPTX. Slides are arbitrary live web content
   (canvas, SVG, animation) — there's no way to turn that into editable
   PDF/PPTX shapes, so each slide is rasterized to a PNG (reusing the same
   isStatic:true / clicks:9999 context Thumb uses for thumbnails, so builds
   and entrance animations render in their final state with no waiting) and
   the PNGs are laid one-per-page/slide into the output file. */

const W = 1920;
const H = 1080; // capture at a fixed 16:9 canvas regardless of window size

async function captureSlide(slide: ReactElement, bg: string): Promise<string> {
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
          <DeckCtx.Provider value={{ clicks: 9999, isStatic: true }}>
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
    return await toPng(host, { pixelRatio: 1, backgroundColor: bg });
  } finally {
    root.unmount();
    clip.remove();
  }
}

export async function captureSlides(
  slides: ReactElement[],
  onProgress?: (done: number, total: number) => void
): Promise<string[]> {
  await document.fonts?.ready;
  const bg = getComputedStyle(document.documentElement)
    .getPropertyValue('--bg')
    .trim();
  const images: string[] = [];
  for (const slide of slides) {
    images.push(await captureSlide(slide, bg));
    onProgress?.(images.length, slides.length);
  }
  return images;
}

function deckFilename(): string {
  const name = document.title
    .trim()
    .replace(/[\\/:*?"<>|]+/g, '-')
    .slice(0, 80);
  return name || 'deck';
}

async function exportToPdf(images: string[], filename: string) {
  const { jsPDF } = await import('jspdf');
  const pdf = new jsPDF({ orientation: 'landscape', unit: 'px', format: [W, H] });
  images.forEach((img, i) => {
    if (i > 0) pdf.addPage([W, H], 'landscape');
    pdf.addImage(img, 'PNG', 0, 0, W, H);
  });
  pdf.save(filename + '.pdf');
}

async function exportToPptx(images: string[], filename: string) {
  const { default: PptxGenJS } = await import('pptxgenjs');
  const pptx = new PptxGenJS();
  pptx.defineLayout({ name: 'DECK', width: W / 96, height: H / 96 }); // px → inches @96dpi
  pptx.layout = 'DECK';
  for (const img of images) {
    const slide = pptx.addSlide();
    slide.addImage({ data: img, x: 0, y: 0, w: W / 96, h: H / 96 });
  }
  pptx.writeFile({ fileName: filename + '.pptx' });
}

export type ExportKind = 'pdf' | 'pptx';

export async function exportDeck(
  kind: ExportKind,
  slides: ReactElement[],
  onProgress?: (done: number, total: number) => void
): Promise<void> {
  const images = await captureSlides(slides, onProgress);
  const filename = deckFilename();
  if (kind === 'pdf') await exportToPdf(images, filename);
  else await exportToPptx(images, filename);
}
