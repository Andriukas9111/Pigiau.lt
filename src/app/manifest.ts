import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "NordWash — Cosmic Laundry for Humans & Aliens",
    short_name: "NordWash",
    description: "Premium laundry, dry cleaning & cosmic care delivered across Lithuania.",
    start_url: "/",
    display: "standalone",
    background_color: "#EAF3FF",
    theme_color: "#EAF3FF",
    lang: "en",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml", purpose: "any" }],
  };
}
