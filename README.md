# PSM Landing Page (Next.js)

Standalone Next.js (App Router + TypeScript) port of the PSM marketing landing page from the sales-crm project.

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000). The legacy route `/thepsm` serves the same page.

## Scripts

- `npm run dev` — start development server
- `npm run build` — production build
- `npm run start` — serve production build
- `npm run lint` — ESLint

## Project structure

```
src/
  app/              # Next.js App Router (layout, pages)
  components/landing/  # PSM landing sections
  data/             # Static content (slides, features, blog posts)
  lib/              # Image URL helpers
  styles/           # Landing CSS (Tailwind bundle + component styles)
public/
  assets/images/    # Local logo asset
```

## Dependencies

- **react-slick** / **slick-carousel** — hero, business logos, and blog carousels
- Landing images are bundled locally under `public/assets/images/` (the `thepsm.app` domain is parked and no longer serves assets)

## Requirements

- Node.js >= 20.9.0
