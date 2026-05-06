import { BRAND } from "@/config/brand";
import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: BRAND.name,
    short_name: BRAND.name,
    description: "High-pressure cleaning across Lithuania.",
    start_url: "/",
    display: "standalone",
    background_color: "#F4F2EC",
    theme_color: "#1FA9CC",
    icons: [],
  };
}
