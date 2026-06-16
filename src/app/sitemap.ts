import type { MetadataRoute } from "next";

const BASE = "https://www.nordwash.lt";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = ["", "/services", "/prices", "/locations", "/about", "/booking", "/faq", "/contact"];
  const now = new Date();
  return routes.map((path) => ({
    url: `${BASE}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: path === "" ? 1 : 0.7,
  }));
}
