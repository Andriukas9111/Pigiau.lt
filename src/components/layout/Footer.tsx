import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { Email } from "@/components/ui/Email";
import { BRAND } from "@/lib/data";
import { type Locale, T, localePath, trFor, tt } from "@/lib/i18n";
import Link from "next/link";
import type { ReactNode } from "react";

const QUICK = [
  { label: T("Services", "Paslaugos"), href: "/services" },
  { label: T("Prices", "Kainos"), href: "/prices" },
  { label: T("Locations", "Skyriai"), href: "/locations" },
  { label: T("About Us", "Apie mus"), href: "/about" },
  { label: T("FAQ & Help", "DUK ir pagalba"), href: "/faq" },
  { label: T("Contact", "Kontaktai"), href: "/contact" },
];

function ColTitle({ children }: { children: ReactNode }) {
  return (
    <div
      className="fh"
      style={{ fontWeight: 700, fontSize: 13, letterSpacing: "1.5px", color: "#fff", marginBottom: 16 }}
    >
      {children}
    </div>
  );
}

function Social({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        width: 38,
        height: 38,
        borderRadius: "50%",
        background: "rgba(255,255,255,.08)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
      }}
    >
      {children}
    </span>
  );
}

export function Footer({ lang }: { lang: Locale }) {
  const tr = trFor(lang);
  return (
    <footer
      style={{
        background: "linear-gradient(180deg,#0a1f4d,#081738)",
        color: "#cfe0ff",
        padding: "54px 18px 26px",
      }}
    >
      <div
        className="nw-foot"
        style={{
          maxWidth: 1440,
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "1.4fr 1fr 1.2fr 1fr 1.1fr",
          gap: 30,
        }}
      >
        {/* brand */}
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 14 }}>
            <span style={{ width: 34, height: 34, flex: "none" }}>
              <Illustration name="star" alt="" />
            </span>
            <span className="fh" style={{ fontWeight: 800, fontSize: 20, color: "#fff" }}>
              {BRAND.name}
            </span>
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#9FB6DD", margin: "0 0 16px", maxWidth: 230 }}>
            {tr(
              "Cosmic clean. Earth ready. Premium laundry, dry cleaning & cosmic care — delivered across Lithuania.",
              "Kosminė švara. Paruošta Žemei. Premium skalbimas, cheminis valymas ir kosminė priežiūra — visoje Lietuvoje.",
            )}
          </p>
          <div style={{ display: "flex", gap: 10 }}>
            <Social>
              <Icon name="facebook" c="#cfe0ff" size={17} />
            </Social>
            <Social>
              <Icon name="instagram" c="#cfe0ff" size={17} />
            </Social>
            <Social>
              <Icon name="tiktok" c="#cfe0ff" size={17} fill="#cfe0ff" />
            </Social>
            <Social>
              <Icon name="youtube" c="#cfe0ff" size={17} />
            </Social>
          </div>
        </div>

        {/* quick links */}
        <div>
          <ColTitle>{tr("QUICK LINKS", "NUORODOS")}</ColTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 13.5 }}>
            {QUICK.map((q) => (
              <Link
                key={q.href}
                href={localePath(q.href, lang)}
                className="nw-link"
                style={{ color: "#9FB6DD", textDecoration: "none" }}
              >
                {tt(q.label, lang)}
              </Link>
            ))}
          </div>
        </div>

        {/* contact */}
        <div>
          <ColTitle>{tr("CONTACT US", "KONTAKTAI")}</ColTitle>
          <div
            style={{ display: "flex", flexDirection: "column", gap: 12, fontSize: 13.5, color: "#9FB6DD" }}
          >
            <a
              href={`tel:${BRAND.phoneHref}`}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                color: "#9FB6DD",
                textDecoration: "none",
              }}
            >
              <Icon name="phone" c="#7FB2F0" size={17} /> {BRAND.phone}
            </a>
            <a
              href="mailto:hello@nordwash.lt"
              style={{
                display: "flex",
                alignItems: "center",
                gap: 9,
                color: "#9FB6DD",
                textDecoration: "none",
              }}
            >
              <Icon name="mail" c="#7FB2F0" size={17} /> <Email />
            </a>
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <Icon name="globe" c="#7FB2F0" size={17} /> {BRAND.web}
            </span>
            <span style={{ display: "flex", alignItems: "center", gap: 9 }}>
              <span style={{ color: "#B8F35A" }}>●</span>{" "}
              {tr("Live Chat — faster than light", "Tiesioginis pokalbis — greičiau nei šviesa")}
            </span>
          </div>
        </div>

        {/* hours */}
        <div>
          <ColTitle>{tr("HOURS", "DARBO LAIKAS")}</ColTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 13, color: "#9FB6DD" }}>
            {BRAND.hours.map((h) => (
              <span key={h.h}>
                {tt(h.d, lang)}
                <br />
                <b style={{ color: "#cfe0ff" }}>{h.h}</b>
              </span>
            ))}
          </div>
        </div>

        {/* we accept */}
        <div>
          <ColTitle>{tr("WE ACCEPT", "PRIIMAME")}</ColTitle>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 14 }}>
            <span
              className="fh"
              style={{
                background: "#fff",
                borderRadius: 7,
                padding: "6px 9px",
                fontWeight: 800,
                fontSize: 11,
                color: "#1A1F71",
              }}
            >
              VISA
            </span>
            <span
              className="fh"
              style={{
                background: "#fff",
                borderRadius: 7,
                padding: "6px 9px",
                fontWeight: 800,
                fontSize: 11,
                color: "#EB001B",
              }}
            >
              ●●
            </span>
            <span
              className="fh"
              style={{
                background: "#fff",
                borderRadius: 7,
                padding: "6px 9px",
                fontWeight: 800,
                fontSize: 11,
                color: "#000",
              }}
            >
              Pay
            </span>
            <span
              className="fh"
              style={{
                background: "#fff",
                borderRadius: 7,
                padding: "6px 9px",
                fontWeight: 800,
                fontSize: 11,
                color: "#003087",
              }}
            >
              PayPal
            </span>
          </div>
          <div style={{ fontSize: 11.5, color: "#7E97C4", lineHeight: 1.5, display: "flex", gap: 6 }}>
            <Icon name="lock" c="#7E97C4" size={13} sw={2} />
            <span>
              {tr("Secure payments.", "Saugūs mokėjimai.")}
              <br />
              {tr("No abductions. (We promise.)", "Jokių pagrobimų. (Pažadame.)")}
            </span>
          </div>
        </div>
      </div>

      <div
        style={{
          maxWidth: 1440,
          margin: "30px auto 0",
          paddingTop: 20,
          borderTop: "1px solid rgba(255,255,255,.1)",
          display: "flex",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 10,
          fontSize: 12,
          color: "#7E97C4",
        }}
      >
        <span>{tt(BRAND.copyright, lang)}</span>
        <span style={{ display: "inline-flex", gap: 18 }}>
          <Link
            href={localePath("/privacy", lang)}
            className="nw-link"
            style={{ color: "#9FB6DD", textDecoration: "none" }}
          >
            {tr("Privacy", "Privatumas")}
          </Link>
          <Link
            href={localePath("/terms", lang)}
            className="nw-link"
            style={{ color: "#9FB6DD", textDecoration: "none" }}
          >
            {tr("Terms", "Sąlygos")}
          </Link>
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
          {tr("Made with", "Sukurta su")}
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#76C043" aria-hidden="true">
            <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
          </svg>
          {tr("in the North.", "Šiaurėje.")}
        </span>
      </div>
    </footer>
  );
}
