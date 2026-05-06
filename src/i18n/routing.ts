import { defineRouting } from "next-intl/routing";
import { pathnames } from "./pathnames";

export const routing = defineRouting({
  locales: ["lt", "ru", "en"],
  defaultLocale: "lt",
  localePrefix: "as-needed",
  localeDetection: true,
  pathnames,
});

export type Locale = (typeof routing.locales)[number];
