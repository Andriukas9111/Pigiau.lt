import { LOCALES } from "@/lib/i18n";
import type { MetadataRoute } from "next";

const BASE = "https://www.nordwash.lt";

export default function sitemap(): MetadataRoute.Sitemap {
  const main = ["", "/services", "/prices", "/locations", "/about", "/booking", "/faq", "/contact"];
  const legal = ["/privacy", "/terms"];
  const now = new Date();

  const entry = (path: string, priority: number, changeFrequency: "weekly" | "yearly") =>
    LOCALES.map((lang) => ({
      url: `${BASE}/${lang}${path}`,
      lastModified: now,
      changeFrequency,
      priority,
      alternates: {
        languages: {
          lt: `${BASE}/lt${path}`,
          en: `${BASE}/en${path}`,
          "x-default": `${BASE}/lt${path}`,
        },
      },
    }));

  return [
    ...main.flatMap((p) => entry(p, p === "" ? 1 : 0.7, "weekly")),
    ...legal.flatMap((p) => entry(p, 0.3, "yearly")),
  ];
}
