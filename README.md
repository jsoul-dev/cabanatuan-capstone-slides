# 🏛️ Cabanatuan City Ordinance Information System — Capstone Defense Slides

Interactive Web-Based Final Capstone Defense Presentation Deck for **Group 1** (BSIT Web Systems Technology, College of Information and Communications Technology, Nueva Ecija University of Science and Technology).

## 🚀 Quick Start for Teammates & Reviewers

```bash
git clone https://github.com/jsoul-dev/cabanatuan-capstone-slides.git
cd cabanatuan-capstone-slides
npm install
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

- Press `F` for Fullscreen presentation
- Press `G` for Grid Overview of all 27 slides
- Press `P` for Presenter Mode with synchronized speaker notes and timer
- Press `S` for Sidebar thumbnail navigation
- Press `E` to export high-resolution presentation PDF

## 📖 Presentation Script

See [**`PRESENTATION_SCRIPT.md`**](./PRESENTATION_SCRIPT.md) for the complete word-for-word spoken defense script allocated across the 4 presenters (Manny Agulto, Reyven Calara, Chris Lacanilao, John Carlo Lemence), with slide transitions and panel defense cheat sheets.

---

## ⌨️ Presentation Keyboard Shortcuts

| Key | Action |
| --- | --- |
| `→` `↓` `Space` | Next (reveals builds first) |
| `←` `↑` | Previous (rewinds builds) |
| `Home` / `End` | First / last slide |
| `S` | Sidebar — thumbnail rail |
| `G` | Grid view — every slide at once |
| `A` | Annotate — pen, highlighter, shapes, eraser |
| `F` | Fullscreen |
| `P` | Presenter mode — synced new tab |
| `H` | Hide the UI dock |
| `E` | Export — download as PDF |
| `Esc` | Close overlays |

---

## 📁 Project Structure

```
context/               Defense outlines, figures, and research manuscript
public/                Logos, screenshots, team photos, and figures
src/
  ├── components/      Custom interactive visualizers (AI Chat, Use Case, Role Matrix, ISO/SUS/WCAG charts)
  ├── deck/            Deck engine, slide transitions, annotations, and export
  ├── styles/          Design tokens and theme styles
  └── App.tsx          Complete 27-slide final defense presentation
PRESENTATION_SCRIPT.md 4-Presenter spoken script with time allocations & Q&A shield
```

## 📄 License

MIT License
