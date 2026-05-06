import { BRAND } from "@/config/brand";
import { services } from "@/content/services";
import { pathnames } from "@/i18n/pathnames";
import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

const SITE = process.env.NEXT_PUBLIC_SITE_URL ?? `https://${BRAND.domain}`;

function localisedUrl(path: string, locale: string) {
  return `${SITE}${locale === routing.defaultLocale ? "" : `/${locale}`}${path}`;
}

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const [, byLocale] of Object.entries(pathnames)) {
    const map = byLocale as Record<string, string>;
    const isDynamic = Object.values(map).some((p) => p.includes("[slug]"));
    if (isDynamic) continue;
    for (const [locale, path] of Object.entries(map)) {
      entries.push({
        url: localisedUrl(path, locale),
        changeFrequency: "monthly",
        priority: path === "/" ? 1 : 0.7,
      });
    }
  }

  for (const svc of services) {
    for (const [locale, slug] of Object.entries(svc.slugs)) {
      const localisedTemplate = (pathnames["/services/[slug]"] as Record<string, string>)[locale];
      const path = localisedTemplate.replace("[slug]", slug);
      entries.push({
        url: localisedUrl(path, locale),
        changeFrequency: "monthly",
        priority: 0.8,
      });
    }
  }

  return entries;
}
