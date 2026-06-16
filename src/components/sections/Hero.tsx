import { Illustration, type IllustrationName } from "@/components/illustrations";
import { Btn } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import type { CSSProperties, ReactNode } from "react";

export function EyebrowPill({ children }: { children: ReactNode }) {
  return (
    <span
      className="fh"
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 8,
        background: "rgba(255,255,255,.7)",
        border: "1px solid #cfe2f7",
        color: "#1E8BE8",
        fontWeight: 700,
        fontSize: 11.5,
        letterSpacing: "1.2px",
        padding: "8px 15px",
        borderRadius: 999,
      }}
    >
      ✦ {children}
    </span>
  );
}

const TRUST = [
  { img: "van" as IllustrationName, t: "Free Pickup", s: "Across Lithuania" },
  { img: "stopwatch" as IllustrationName, t: "24h Express", s: "Alien Fast" },
  { img: "shield" as IllustrationName, t: "100% Satisfaction", s: "Or We Abduct (Kidding)" },
];

export function TrustRow({ style }: { style?: CSSProperties }) {
  return (
    <div className="nw-row-wrap" style={{ display: "flex", gap: 22, ...style }}>
      {TRUST.map((x) => (
        <div key={x.t} style={{ display: "flex", alignItems: "center", gap: 10 }}>
          <span style={{ width: 38, height: 38, flex: "none" }}>
            <Illustration name={x.img} />
          </span>
          <span>
            <b className="fh" style={{ display: "block", fontSize: 13.5, color: "#09245B" }}>
              {x.t}
            </b>
            <span style={{ fontSize: 12, color: "#7FA0C4" }}>{x.s}</span>
          </span>
        </div>
      ))}
    </div>
  );
}

export function SceneHero({
  eyebrow,
  title,
  subline,
  subtitle,
  tint = "#EAF4FF",
}: {
  eyebrow: string;
  title: ReactNode;
  subline?: ReactNode;
  subtitle: string;
  tint?: string;
}) {
  return (
    <Section mt={10}>
      <div
        className="nw-heroP"
        style={{
          background: `linear-gradient(115deg,${tint} 0%,#E6F1FF 42%,#DCEDFF 100%)`,
          border: "1px solid #DCEBFB",
          borderRadius: 34,
          boxShadow: "0 20px 60px rgba(31,109,200,.10)",
        }}
      >
        <img
          className="nw-heroImg"
          src="/assets/hero_scene.webp"
          alt="NordWash alien laundry crew at work"
          width={1054}
          height={821}
          loading="eager"
          fetchPriority="high"
        />
        <div className="nw-heroFade" aria-hidden="true" />
        <div className="nw-heroTxt">
          <EyebrowPill>{eyebrow}</EyebrowPill>
          <h1
            className="nw-h1 fh"
            style={{
              fontWeight: 800,
              fontSize: 54,
              lineHeight: 1.04,
              letterSpacing: "-1.4px",
              margin: "16px 0 0",
              color: "#09245B",
            }}
          >
            {title}
          </h1>
          {subline && (
            <div className="fh" style={{ fontWeight: 800, fontSize: 26, margin: "6px 0 0" }}>
              {subline}
            </div>
          )}
          <p
            style={{
              fontSize: 16.5,
              lineHeight: 1.55,
              color: "#48618A",
              fontWeight: 500,
              margin: "14px 0 22px",
              maxWidth: 410,
            }}
          >
            {subtitle}
          </p>
          <div className="nw-row-wrap" style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <Btn href="/booking" icon="rocket">
              BOOK A PICKUP
            </Btn>
            <Btn href="/prices" variant="ghost" icon="pin">
              VIEW PRICES
            </Btn>
          </div>
          <TrustRow style={{ marginTop: 24 }} />
        </div>
      </div>
    </Section>
  );
}
