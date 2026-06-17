"use client";

import type { Locale } from "@/lib/i18n";
import type { CSSProperties } from "react";
import { useId } from "react";

/**
 * Crisp SVG flags for the language switcher: the Lithuanian tricolour and an
 * accurate (counter-charged) Union Jack for English. Sized by height; width
 * follows each flag's real aspect ratio.
 */
export function Flag({ locale, h = 14 }: { locale: Locale; h?: number }) {
  const id = useId();
  const frame: CSSProperties = {
    display: "block",
    borderRadius: 2.5,
    boxShadow: "0 0 0 1px rgba(9,36,91,.14)",
  };

  if (locale === "lt") {
    const w = Math.round((h * 5) / 3);
    return (
      <svg width={w} height={h} viewBox="0 0 5 3" style={frame} aria-hidden="true">
        <rect width="5" height="1" y="0" fill="#FDB913" />
        <rect width="5" height="1" y="1" fill="#006A44" />
        <rect width="5" height="1" y="2" fill="#C1272D" />
      </svg>
    );
  }

  const w = h * 2;
  return (
    <svg width={w} height={h} viewBox="0 0 60 30" style={frame} aria-hidden="true">
      <clipPath id={`${id}-s`}>
        <path d="M0,0 v30 h60 v-30 z" />
      </clipPath>
      <clipPath id={`${id}-t`}>
        <path d="M30,15 h30 v15 z v15 h-30 z h-30 v-15 z v-15 h30 z" />
      </clipPath>
      <g clipPath={`url(#${id}-s)`}>
        <path d="M0,0 v30 h60 v-30 z" fill="#012169" />
        <path d="M0,0 L60,30 M60,0 L0,30" stroke="#fff" strokeWidth="6" />
        <path d="M0,0 L60,30 M60,0 L0,30" clipPath={`url(#${id}-t)`} stroke="#C8102E" strokeWidth="4" />
        <path d="M30,0 v30 M0,15 h60" stroke="#fff" strokeWidth="10" />
        <path d="M30,0 v30 M0,15 h60" stroke="#C8102E" strokeWidth="6" />
      </g>
    </svg>
  );
}
