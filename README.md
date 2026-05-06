# Pigiau.lt — High-pressure cleaning marketing site

Next.js 15 + React 19 + Tailwind CSS v4 + next-intl, trilingual (LT, RU, EN).

This repository implements the Sprint 1 foundation of the build specification: brand
config, typed catalogue, pure calculator with tests, full message bundles for all three
locales, primitives, layout, sections, every page wired up, basic SEO (sitemap, robots,
manifest, JSON-LD), and API endpoints for estimate / contact / booking-webhook.

## Local development

```bash
pnpm install
pnpm dev
```

Then open http://localhost:3000.

## Useful scripts

```bash
pnpm test          # run unit tests (calculator)
pnpm test:e2e      # run Playwright e2e
pnpm typecheck
pnpm lint
pnpm build
```

## Project shape

```
src/
  app/
    [locale]/      app router pages, all routes
    api/           booking, estimate, contact
    sitemap.ts robots.ts manifest.ts
  components/      primitives, layout, motion, sections, service, seo, icons
  content/         services, faq, coverage, process, testimonials  (single source of truth)
  config/brand.ts  every brand-level token in one place
  i18n/            routing, request, navigation, pathnames
  lib/             calc, motion, seo, cn, email
  messages/        lt.json, ru.json, en.json (identical key shape)
  styles/          globals.css with Tailwind v4 @theme tokens
tests/
  unit/            calc tests (vitest)
  e2e/             Playwright booking + calculator + language flows
```

## Brand decisions

Edit `src/config/brand.ts` to fill in legal name, VAT/company codes, phone, email,
domain, IBAN, working hours, social URLs, and the Cal.com username. Tokens shaped like
`{{LIKE_THIS}}` are placeholders; the build deliberately surfaces them where they appear
in copy until the owner replaces them.

## Booking integration

`src/components/sections/CalculatorPanel.tsx` builds a deep link to
`https://cal.com/{username}/{slug}` with the calculator's serviceId, area and total
prefilled into the booking notes. The contact page hosts a tabbed embed point — wire up
the actual `<Cal />` React embed once a Cal.com username exists. The webhook handler is
at `app/api/booking/route.ts` and verifies the `x-cal-signature-256` HMAC.

## Calculator

Pure function in `src/lib/calc.ts`, fully covered in `tests/unit/calc.spec.ts`. Tier
boundaries (50, 150, 500 m²), condition multipliers, every add-on, the graffiti minimum,
travel surcharge past 30 km, rush 15% applied to subtotal not base, VAT toggle, and the
minimum-order top-up are all asserted.

## What is intentionally still pending

- Real photography under `/public/work` and the hero frame sequence under
  `/public/hero-video/{desktop,mobile}`. The site references these paths; until they are
  uploaded the placeholders show the `--color-mist` block.
- The Lithuania SVG (`/public/lithuania.svg`) for the coverage map. The current
  implementation renders the 10 apskritys as a tiled grid; swap in the real geometry
  once the SVG is in place.
- The Cal.com `<Cal />` inline embed. The contact page renders a fallback link until a
  username is configured.
- Open Graph image generation per page per locale.
- GSAP-driven horizontal pinning for "How we work" on desktop. The current vertical
  reveal is acceptable on mobile but the desktop horizontal pin is the spec target.
- Lighthouse / Axe runs. Targets are baked into the spec; they require a deployed
  preview.

## Languages

`next-intl` is configured with `as-needed` localePrefix. LT is the default and serves
on the bare domain; RU and EN serve under `/ru` and `/en`. Localised slugs live in
`src/i18n/pathnames.ts`.

## Stack

- Next.js 15 (App Router, React Compiler)
- React 19
- Tailwind CSS v4 (CSS-first tokens via `@theme`)
- next-intl v4
- framer-motion 12
- gsap 3.13 (used by `<ScrollVideo />`)
- Lenis (smooth scroll)
- Resend (transactional email)
- Cal.com embed
- Vitest + Playwright
- Biome 1.9 (lint + format)
