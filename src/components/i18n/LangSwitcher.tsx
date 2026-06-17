"use client";

import { Flag } from "@/components/i18n/Flag";
import { useLang } from "@/components/i18n/LangProvider";
import { LOCALES, LOCALE_LABEL, LOCALE_NAME, type Locale, isLocale } from "@/lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";

/** Replace the locale segment of the current path, preserving the rest. */
function pathFor(pathname: string, target: Locale): string {
  const parts = pathname.split("/");
  if (isLocale(parts[1])) parts[1] = target;
  else parts.splice(1, 0, target);
  const p = parts.join("/");
  return p || `/${target}`;
}

export function LangSwitcher({ onNavigate }: { onNavigate?: () => void }) {
  const { lang } = useLang();
  const pathname = usePathname() || `/${lang}`;

  return (
    <div
      role="group"
      aria-label={lang === "lt" ? "Kalbos pasirinkimas" : "Language"}
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 3,
        background: "rgba(31,109,200,.07)",
        border: "1px solid #E3EEFA",
        borderRadius: 999,
        padding: 3,
      }}
    >
      {LOCALES.map((l) => {
        const active = l === lang;
        return (
          <Link
            key={l}
            href={pathFor(pathname, l)}
            onClick={onNavigate}
            hrefLang={l}
            aria-label={LOCALE_NAME[l]}
            aria-current={active ? "true" : undefined}
            className="fh"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "5px 9px",
              borderRadius: 999,
              textDecoration: "none",
              fontWeight: 800,
              fontSize: 12,
              letterSpacing: ".3px",
              color: active ? "#09245B" : "#7089AB",
              background: active ? "#fff" : "transparent",
              boxShadow: active ? "0 2px 8px rgba(31,109,200,.16)" : "none",
              cursor: "pointer",
            }}
          >
            <Flag locale={l} h={13} />
            {LOCALE_LABEL[l]}
          </Link>
        );
      })}
    </div>
  );
}
