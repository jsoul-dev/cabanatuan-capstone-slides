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

async function captureSlide(slide: ReactElement): Promise<string> {
  const host = document.createElement('div');
  host.style.cssText = `position:fixed; left:-10000px; top:0; width:${W}px; height:${H}px; overflow:hidden;`;
  document.body.appendChild(host);
  const root = createRoot(host);
  try {
    await new Promise<void>((resolve) => {
      root.render(
        <div className="deck" style={{ width: W, height: H, position: 'relative' }}>
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
    return await toPng(host, { pixelRatio: 1 });
  } finally {
    root.unmount();
    host.remove();
  }
}

export async function captureSlides(
  slides: ReactElement[],
  onProgress?: (done: number, total: number) => void
): Promise<string[]> {
  await document.fonts?.ready;
  const images: string[] = [];
  for (const slide of slides) {
    images.push(await captureSlide(slide));
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
