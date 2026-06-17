# NordWash — notes / follow-ups

Running list of deferred work and owner actions. Newest first.

## Deferred (agreed to leave for later)

### Bilingual page-banner headlines
The inner-page hero banners are baked-text artwork (English text rendered into
the image): `public/assets/hero_{booking,prices,locations,about,faq,contact}.webp`.
On the Lithuanian (`/lt/...`) pages these headline graphics still read English
(e.g. "Book Your Wash", "Prices & Live Calculator"). Everything else on those
pages is translated, and each `PageBanner` already carries a translated
`sr-only` `<h1>` + `alt` for SEO/accessibility.

To finish later, pick one:
- Regenerate the 6 banner WebPs with Lithuanian headline text, OR
- Drop the baked text from the artwork and render the headline as a styled HTML
  overlay (like the home `SceneHero`), so it can be translated via `tr(...)`.

The home hero is already fully translated (its headline is live text, not baked
into `hero_scene.webp`).

> Status: intentionally deferred at the owner's request (bilingual launch shipped
> 2026-06-17 without it).

## Owner action pending

### Email delivery (contact + booking forms)
Forms POST to `/api/contact` and `/api/booking` but need a free Resend key set in
Vercel env: `RESEND_API_KEY`, `CONTACT_TO`, `CONTACT_FROM`. Until then the forms
show the honest "call/email us" fallback instead of silently failing.
