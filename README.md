# Aperture — Photography Portfolio

A dark, cinematic one-page photography portfolio built with React + Vite.

## Getting started

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (defaults to `http://localhost:5173`).

```bash
npm run build    # production build -> dist/
npm run preview  # serve the production build locally
npm run lint      # oxlint
```

## Adding your own photo

`src/assets/photographer.jpg` is currently a generated dark placeholder so
the hero renders correctly out of the box. Swap in a real portrait at that
same path (or update the import in `src/components/Hero.jsx`) and the
existing grayscale filter + gradient overlay will apply automatically.
A portrait-oriented image (roughly 4:5, at least 1200px tall) crops best.

## Project structure

```
src/
├── components/
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ExperienceSection.jsx
│   └── Button.jsx
├── assets/
│   └── photographer.jpg
├── App.jsx
├── main.jsx
└── index.css   # design tokens + all component styles, organized by section
```

## Notes

- Nav items other than **Home** (About, Services, Portfolio, Blog, Contact)
  and both CTA buttons currently link to `#` — no other pages/sections
  exist yet. Wire them up to real routes or anchors as content is built out.
- Typography is Montserrat, loaded from Google Fonts in `index.html`.
- Icons are from `lucide-react`.
- Colors, spacing, and type sizes are all CSS custom properties at the top
  of `src/index.css` — start there to adjust the palette or scale.
