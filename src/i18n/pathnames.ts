export const pathnames = {
  "/": { lt: "/", ru: "/", en: "/" },
  "/services": { lt: "/paslaugos", ru: "/uslugi", en: "/services" },
  "/services/[slug]": {
    lt: "/paslaugos/[slug]",
    ru: "/uslugi/[slug]",
    en: "/services/[slug]",
  },
  "/calculator": { lt: "/kainos", ru: "/ceny", en: "/pricing" },
  "/work": { lt: "/darbai", ru: "/raboty", en: "/work" },
  "/about": { lt: "/apie", ru: "/o-nas", en: "/about" },
  "/contact": { lt: "/kontaktai", ru: "/kontakty", en: "/contact" },
  "/faq": { lt: "/duk", ru: "/voprosy", en: "/faq" },
  "/privacy": { lt: "/privatumo-politika", ru: "/politika-konfidencialnosti", en: "/privacy" },
  "/cookies": { lt: "/slapuku-politika", ru: "/cookies", en: "/cookies" },
} as const;

export type AppPathname = keyof typeof pathnames;
