# FORGE — Creative Digital Agency

**Brand personality:** Bold, experimental, creative, unconventional.

## Design System

| Token | HEX | RGB |
|---|---|---|
| Primary | `#111111` | `rgb(17, 17, 17)` |
| Secondary | `#242424` | `rgb(36, 36, 36)` |
| Background | `#F2F0EA` | `rgb(242, 240, 234)` |
| Surface | `#E4E1D9` | `rgb(228, 225, 217)` |
| Text | `#111111` | `rgb(17, 17, 17)` |
| Muted Text | `#696762` | `rgb(105, 103, 98)` |
| Accent | `#FF4D00` | `rgb(255, 77, 0)` |
| Accent Light | `#FFB199` | `rgb(255, 177, 153)` |

## Usage Rules

- Black and off-white should dominate.
- Orange should be bold and intentional—use it for interactive elements, hover states, CTAs and creative visual moments.
- **60%** Background/neutral · **30%** Primary/Secondary · **10%** Accent.

## Stack

Built with **React (Vite)**. No UI framework — everything is hand-crafted CSS with an experimental, editorial feel.

## Getting Started

```bash
npm install
npm run dev      # start dev server
npm run build    # production build → dist/
npm run lint     # oxlint
```

> Live URL: http://localhost:5173

## Brand Mark

The FORGE emblem is an "F" being forged over a rising flame on a dark hearth — fire, force and typography in one mark. It lives as an animated SVG component (`src/components/Logo.jsx`), used in the nav, footer and favicon. On hover the flame flickers, glows and throws sparks.

## Structure

```
├── index.html              # entry + fonts (Space Grotesk, Inter, Archivo Black)
├── public/
│   ├── favicon.svg         # FORGE logo mark
│   └── images/             # real project + studio photography
└── src/
    ├── main.jsx            # React root
    ├── App.jsx             # page assembly (loader, cursor, nav, sections)
    ├── index.css           # design-token system + global styles
    ├── styles/             # per-component CSS
    ├── components/         # Navbar, Hero, Work, Services, Studio, Contact, Footer, Loader, Logo
    ├── hooks/              # useReveal (scroll animations), useMouseTrail (custom cursor)
    └── data/content.js     # projects (with imagery), services, nav links, stats
```

## Design & Interactions

- Custom cursor (dot + trailing ring with mix-blend-mode)
- Film-grain overlay + letterpress-style poster text
- Intro loader with per-letter reveal (orange "O" as the forge flame)
- Mouse-reactive 3D headline (`perspective` tilt)
- Rotating orbital core with animated stamp (BOLD / EXPERIMENTAL / CREATIVE / UNCONVENTIONAL)
- Tilt-on-hover work tiles over real photography, with live duotone preview rail
- Services accordion with spring-reveal body
- Sticky section titles, manifesto marquees, halftone/dotted textures
- Fully responsive + `prefers-reduced-motion` respected