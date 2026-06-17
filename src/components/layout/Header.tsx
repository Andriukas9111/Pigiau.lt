"use client";

import { useLang } from "@/components/i18n/LangProvider";
import { LangSwitcher } from "@/components/i18n/LangSwitcher";
import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { BRAND, NAV } from "@/lib/data";
import { T, localePath } from "@/lib/i18n";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export function Header() {
  const [menu, setMenu] = useState(false);
  const { lang, tt } = useLang();
  const pathname = usePathname();
  const isActive = (href: string) => href !== "/#how" && pathname === localePath(href, lang);
  const mobileItems = [
    ...NAV.filter((n) => n.href !== "/#how"),
    { label: T("FAQ & Help", "DUK ir pagalba"), href: "/faq" },
  ];

  return (
    <header className="nw-head" style={{ position: "sticky", top: 0, zIndex: 50, padding: "14px 18px" }}>
      <div
        className="nw-headpill"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          background: "rgba(255,255,255,.86)",
          backdropFilter: "blur(14px)",
          WebkitBackdropFilter: "blur(14px)",
          border: "1px solid #E3EEFA",
          borderRadius: 22,
          boxShadow: "0 10px 34px rgba(31,109,200,.10)",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "12px 18px",
          gap: 14,
        }}
      >
        {/* logo */}
        <Link
          href={localePath("/", lang)}
          onClick={() => setMenu(false)}
          style={{ display: "flex", alignItems: "center", gap: 11, textDecoration: "none" }}
        >
          <span
            style={{
              width: 38,
              height: 38,
              filter: "drop-shadow(0 2px 5px rgba(30,139,232,.35))",
              flex: "none",
            }}
          >
            <Illustration name="star" alt="" />
          </span>
          <span style={{ textAlign: "left", lineHeight: 1 }}>
            <span
              className="fh nw-logo-name"
              style={{
                display: "block",
                fontWeight: 800,
                fontSize: 21,
                color: "#09245B",
                letterSpacing: "-.3px",
              }}
            >
              {BRAND.name}
            </span>
            <span
              className="nw-logo-tag"
              style={{
                display: "block",
                fontSize: 9,
                fontWeight: 700,
                letterSpacing: "1.6px",
                color: "#7FA0C4",
                marginTop: 3,
              }}
            >
              {tt(BRAND.tagline)}
            </span>
          </span>
        </Link>

        {/* desktop nav */}
        <nav
          className="nw-desktop-nav fh"
          style={{ display: "flex", alignItems: "center", gap: 30, fontWeight: 600, fontSize: 14.5 }}
        >
          {NAV.map((n) => (
            <Link
              key={n.href}
              href={localePath(n.href, lang)}
              className="nw-link"
              style={{
                color: isActive(n.href) ? "#1E8BE8" : "#3C5A85",
                textDecoration: "none",
                whiteSpace: "nowrap",
              }}
            >
              {tt(n.label)}
            </Link>
          ))}
        </nav>

        {/* right */}
        <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span className="nw-lang-desk">
            <LangSwitcher />
          </span>
          <Link
            href={localePath("/booking", lang)}
            className="nw-btn-primary fh nw-book-btn"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              background: "#B8F35A",
              color: "#09245B",
              fontWeight: 800,
              fontSize: 13.5,
              letterSpacing: ".4px",
              padding: "12px 20px",
              borderRadius: 999,
              boxShadow: "0 8px 18px rgba(184,243,90,.4)",
              textDecoration: "none",
            }}
          >
            {tt(T("BOOK A WASH", "UŽSISAKYTI"))}
            <Icon name="rocket" c="#09245B" size={16} sw={2} />
          </Link>
          <button
            type="button"
            aria-label={tt(T("Open menu", "Atidaryti meniu"))}
            className="nw-burger"
            onClick={() => setMenu((m) => !m)}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              borderRadius: 13,
              border: "1px solid #E3EEFA",
              background: "#fff",
              cursor: "pointer",
              color: "#09245B",
            }}
          >
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.4"
              strokeLinecap="round"
              aria-hidden="true"
            >
              <path d="M3 6h18M3 12h18M3 18h18" />
            </svg>
          </button>
        </div>
      </div>

      {/* mobile menu */}
      {menu && (
        <div
          className="fh"
          style={{
            maxWidth: 1440,
            margin: "8px auto 0",
            background: "#fff",
            border: "1px solid #E3EEFA",
            borderRadius: 18,
            boxShadow: "0 12px 30px rgba(31,109,200,.12)",
            padding: 10,
            display: "flex",
            flexDirection: "column",
            fontWeight: 600,
          }}
        >
          {mobileItems.map((n) => (
            <Link
              key={n.href}
              href={localePath(n.href, lang)}
              onClick={() => setMenu(false)}
              style={{ padding: "13px 16px", borderRadius: 12, color: "#09245B", textDecoration: "none" }}
            >
              {tt(n.label)}
            </Link>
          ))}
          <div style={{ padding: "12px 16px 4px" }}>
            <LangSwitcher onNavigate={() => setMenu(false)} />
          </div>
        </div>
      )}
    </header>
  );
}
