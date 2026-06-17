"use client";

import { type Locale, type Tx, tt as ttRaw } from "@/lib/i18n";
import { type ReactNode, createContext, useCallback, useContext, useMemo } from "react";

const LangContext = createContext<Locale>("lt");

export function LangProvider({ lang, children }: { lang: Locale; children: ReactNode }) {
  return <LangContext.Provider value={lang}>{children}</LangContext.Provider>;
}

/** Active locale + bound readers (`tt` for Tx values, `tr` for inline pairs). */
export function useLang() {
  const lang = useContext(LangContext);
  // biome-ignore lint/correctness/useExhaustiveDependencies: lang is the only input
  const tt = useCallback((v: Tx | string) => ttRaw(v, lang), [lang]);
  const tr = useCallback((en: string, lt: string) => (lang === "lt" ? lt : en), [lang]);
  return useMemo(() => ({ lang, tt, tr }), [lang, tt, tr]);
}
