import type { MetadataRoute } from "next";

const BASE = "https://www.nordwash.lt";

export default function sitemap(): MetadataRoute.Sitemap {
  const main = ["", "/services", "/prices", "/locations", "/about", "/booking", "/faq", "/contact"];
  const legal = ["/privacy", "/terms"];
  const now = new Date();
  return [
    ...main.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "weekly" as const,
      priority: path === "" ? 1 : 0.7,
    })),
    ...legal.map((path) => ({
      url: `${BASE}${path}`,
      lastModified: now,
      changeFrequency: "yearly" as const,
      priority: 0.3,
    })),
  ];
}
