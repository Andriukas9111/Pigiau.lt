# NordWash.lt — Cosmic Laundry for Humans & Aliens

A playful, premium marketing + booking website for a Lithuanian laundry / dry‑cleaning
service themed around friendly 3D aliens. Built from the `NordWash.dc.html` design
prototype as a real, production Next.js app.

**Stack:** Next.js 15 (App Router) · React 19 · TypeScript · Tailwind CSS v4 · Biome.

## Pages (real file‑based routing)

| Route | Page |
|-------|------|
| `/` | Home — hero, services preview, how‑it‑works + live mini‑calculator, reviews, locations, promo |
| `/services` | 8 service cards, fabrics, why‑choose, Star Member, CTA |
| `/prices` | Full **live price calculator**, popular packages, comparison table, pricing FAQ |
| `/booking` | **5‑step booking flow** (one step at a time, clickable progress bar, persistent order summary, confirmation) |
| `/locations` | Stations, pickup routes, branch characters, coverage |
| `/about` | Crew, story timeline, values, stats |
| `/faq` | Searchable FAQ accordion + support |
| `/contact` | Contact form (validation + success state) + info |

## Local development

```bash
pnpm install
pnpm dev            # http://localhost:3000
pnpm build          # production build
pnpm typecheck      # tsc --noEmit
pnpm lint           # biome check
```

## Project shape

```
src/
  app/                 one folder per route (home, services, prices, …) + sitemap/robots/404
  components/
    layout/            Header (sticky glass nav) + Footer
    sections/          Hero, Banners, calculators, BookingFlow, FAQ, ContactForm
    ui/                Container/Card, Eyebrow, Button, Controls, Email
    illustrations/     on‑brand inline‑SVG alien/laundry illustrations
    icons/             inline line‑icon set
  lib/
    data.ts            single source of truth for all content (services, packages, FAQ, …)
    pricing.ts         pure pricing functions (home mini‑calc, full calculator, booking)
  styles/globals.css   Tailwind v4 @theme tokens + keyframes + responsive helpers
```

## Design fidelity & assets

The layout, copy, colours, spacing and interactions are reproduced from the prototype
(content width **1440px**, headings **Poppins**, body **Nunito Sans**, the documented
colour tokens, and the exact pricing logic).

Per the design brief, the AI‑generated 3D alien PNGs and the baked‑text banner images
were **not** shipped. Instead:

- All characters / spot illustrations are **lightweight inline SVG** (`components/illustrations`) —
  crisp at any size, no broken images, easy to restyle.
- The page hero / promo banners are **rebuilt as responsive markup** (heading + illustration),
  so copy is editable and **translation‑ready** (a Lithuanian version is the likely next step).

Swap in final brand artwork by replacing the SVGs in `components/illustrations` (or pointing
them at `next/image` assets under `public/`).

## Contact constants

Phone **+370 681 25504** · Email **hello@nordwash.lt** · `www.nordwash.lt` ·
Hours Mon–Fri 08:00–20:00 · Sat 09:00–18:00 · Sun 10:00–16:00.

## What's still v1 / next up

- Lithuanian (LT) translation — content is centralised in `lib/data.ts` to make this easy.
- Wire the contact form + booking submission to a real endpoint (email service / CRM).
- Replace placeholder SVG illustrations with final licensed brand artwork before launch.
