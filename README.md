# Iman Ektesabi portfolio replica

A static front-end replica of https://www.rishiashar.com/, the portfolio embedded in the supplied Wall of Portfolios link. Original identity, copy, typography, public images, layouts, and client interactions are retained as requested.

## Run

```sh
npm run dev
```

Open http://localhost:4173. No dependency installation is required. `npm run build` verifies local assets and client JavaScript syntax. `dist/` is the deployable site.

## Included

- Original agent chooser and generated opening sequence
- Hero, theme and sound controls, interactive Toronto image
- Work, Visuals, and Writing tabs
- Project previews, testimonials, tool strip, signature and footer
- Interactive About portrait graph and globe
- Draggable Play canvas and its illustration/video assets
- Public UniConnect case study and original locked Autodesk case-study screens

## Static-export boundaries

This is a replica of the publicly served front end, not the author's original editable Next.js repository. The shipped client bundles retain the original client behavior. `dist/replica.js` provides static navigation and handles the unavailable password endpoint without sending entered passwords anywhere. Protected case-study content and the original backend are unavailable. Deeper experiment and essay links open the original public site. The GitHub chart uses the observed November 18, 2026 snapshot. The optional recorded keyboard sound was unavailable; other synthesized UI sound behavior is retained. Third-party visitor analytics are disabled.

`mirror.py` records the public resource acquisition workflow; `finalize.py` imports browser-exported public assets and adapts image loading to static hosting. `reference/` is a local acquisition cache and is not needed to run the site. All original content and assets retain their respective ownership.
