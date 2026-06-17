/**
 * Tiny i18n core for the bilingual (Lithuanian + English) site.
 *
 * Lithuanian is the default locale (a .lt business) and is served at the
 * site root via /lt; English lives under /en. Translatable copy is stored as
 * `Tx` ({ en, lt }) objects and read with `tt(value, lang)`. Because a `Tx`
 * object is not a valid React child, TypeScript flags any place a translated
 * string is rendered without `tt(...)`, which keeps translations complete.
 */
export const LOCALES = ["lt", "en"] as const;
export type Locale = (typeof LOCALES)[number];
export const DEFAULT_LOCALE: Locale = "lt";

export const LOCALE_LABEL: Record<Locale, string> = { lt: "LT", en: "EN" };
export const LOCALE_NAME: Record<Locale, string> = { lt: "Lietuvių", en: "English" };
/** BCP-47 tags for <html lang> / hreflang. */
export const LOCALE_HTML: Record<Locale, string> = { lt: "lt", en: "en" };

export function isLocale(v: string | undefined): v is Locale {
  return v === "lt" || v === "en";
}

/** A piece of translatable text. */
export type Tx = { en: string; lt: string };
/** Build a translatable value. */
export const T = (en: string, lt: string): Tx => ({ en, lt });

/** Read a translatable value (or pass a plain string through unchanged). */
export function tt(v: Tx | string, lang: Locale): string {
  return typeof v === "string" ? v : v[lang];
}

/** Inline reader for server components: `const tr = trFor(lang); tr("Hi","Labas")`. */
export const trFor =
  (lang: Locale) =>
  (en: string, lt: string): string =>
    lang === "lt" ? lt : en;

/** Prefix an internal path with the active locale, e.g. ("/booking","lt") -> "/lt/booking". */
export function localePath(path: string, lang: Locale): string {
  if (path === "/") return `/${lang}`;
  // keep hash-only or external as-is
  if (
    path.startsWith("#") ||
    /^https?:\/\//.test(path) ||
    path.startsWith("mailto:") ||
    path.startsWith("tel:")
  )
    return path;
  // split off a #hash so /#how -> /lt#how
  const [p, hash] = path.split("#");
  const base = p === "/" || p === "" ? `/${lang}` : `/${lang}${p}`;
  return hash ? `${base}#${hash}` : base;
}
