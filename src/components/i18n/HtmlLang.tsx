"use client";

import type { Locale } from "@/lib/i18n";
import { useEffect } from "react";

/** Keeps <html lang> in sync with the active locale without forcing dynamic rendering. */
export function HtmlLang({ lang }: { lang: Locale }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return null;
}
