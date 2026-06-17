import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { Email } from "@/components/ui/Email";
import { BRAND } from "@/lib/data";
import Link from "next/link";
import type { ReactNode } from "react";

const QUICK = [
  { label: "Services", href: "/services" },
  { label: "Prices", href: "/prices" },
  { label: "Locations", href: "/locations" },
  { label: "About Us", href: "/about" },
  { label: "FAQ & Help", href: "/faq" },
  { label: "Contact", href: "/contact" },
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

export function Footer() {
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
              <Illustration name="star" />
            </span>
            <span className="fh" style={{ fontWeight: 800, fontSize: 20, color: "#fff" }}>
              {BRAND.name}
            </span>
          </div>
          <p style={{ fontSize: 13.5, lineHeight: 1.6, color: "#9FB6DD", margin: "0 0 16px", maxWidth: 230 }}>
            Cosmic clean. Earth ready. Premium laundry, dry cleaning & cosmic care — delivered across
            Lithuania.
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
          <ColTitle>QUICK LINKS</ColTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 11, fontSize: 13.5 }}>
            {QUICK.map((q) => (
              <Link
                key={q.href}
                href={q.href}
                className="nw-link"
                style={{ color: "#9FB6DD", textDecoration: "none" }}
              >
                {q.label}
              </Link>
            ))}
          </div>
        </div>

        {/* contact */}
        <div>
          <ColTitle>CONTACT US</ColTitle>
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
              <span style={{ color: "#B8F35A" }}>●</span> Live Chat — faster than light
            </span>
          </div>
        </div>

        {/* hours */}
        <div>
          <ColTitle>HOURS</ColTitle>
          <div style={{ display: "flex", flexDirection: "column", gap: 9, fontSize: 13, color: "#9FB6DD" }}>
            {BRAND.hours.map((h) => (
              <span key={h.d}>
                {h.d}
                <br />
                <b style={{ color: "#cfe0ff" }}>{h.h}</b>
              </span>
            ))}
          </div>
        </div>

        {/* we accept */}
        <div>
          <ColTitle>WE ACCEPT</ColTitle>
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
              Secure payments.
              <br />
              No abductions. (We promise.)
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
        <span>{BRAND.copyright}</span>
        <span style={{ display: "inline-flex", gap: 18 }}>
          <Link href="/privacy" className="nw-link" style={{ color: "#9FB6DD", textDecoration: "none" }}>
            Privacy
          </Link>
          <Link href="/terms" className="nw-link" style={{ color: "#9FB6DD", textDecoration: "none" }}>
            Terms
          </Link>
        </span>
        <span style={{ display: "inline-flex", alignItems: "center", gap: 5 }}>
          Made with
          <svg width="13" height="13" viewBox="0 0 24 24" fill="#76C043" aria-hidden="true">
            <path d="M12 21s-7-4.5-9.5-9A5 5 0 0 1 12 6a5 5 0 0 1 9.5 6c-2.5 4.5-9.5 9-9.5 9z" />
          </svg>
          in the North.
        </span>
      </div>
    </footer>
  );
}
