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

/** Floating cosmic-laundry scene assembled from the illustration set. */
function HeroArt() {
  const float = (delay: number): CSSProperties => ({
    animation: `nwFloat 5s ease-in-out ${delay}s infinite`,
  });
  return (
    <div style={{ position: "relative", minHeight: 320, width: "100%" }} aria-hidden="true">
      {/* twinkles */}
      <span
        style={{
          position: "absolute",
          top: "6%",
          left: "12%",
          fontSize: 20,
          color: "#1E8BE8",
          animation: "nwTwinkle 2.6s ease-in-out infinite",
        }}
      >
        ✦
      </span>
      <span
        style={{
          position: "absolute",
          top: "20%",
          right: "10%",
          fontSize: 14,
          color: "#7FD0F5",
          animation: "nwTwinkle 3.1s ease-in-out .6s infinite",
        }}
      >
        ✦
      </span>
      <span
        style={{
          position: "absolute",
          bottom: "14%",
          left: "8%",
          fontSize: 16,
          color: "#76C043",
          animation: "nwTwinkle 2.2s ease-in-out .3s infinite",
        }}
      >
        ✦
      </span>
      <span
        style={{
          position: "absolute",
          top: "44%",
          right: "7%",
          width: 9,
          height: 9,
          borderRadius: "50%",
          background: "#B8F35A",
          boxShadow: "0 0 12px #B8F35A",
          animation: "nwTwinkle 2.8s ease-in-out .9s infinite",
        }}
      />

      {/* central washing machine */}
      <div style={{ position: "absolute", left: "26%", top: "8%", width: "48%", maxWidth: 260, ...float(0) }}>
        <Illustration name="wash" />
      </div>
      {/* orbiting characters */}
      <div
        style={{ position: "absolute", left: "2%", top: "30%", width: "30%", maxWidth: 150, ...float(0.8) }}
      >
        <Illustration name="alien" />
      </div>
      <div
        style={{ position: "absolute", right: "0%", top: "42%", width: "30%", maxWidth: 150, ...float(1.4) }}
      >
        <Illustration name="ufo" />
      </div>
      <div
        style={{
          position: "absolute",
          left: "16%",
          bottom: "0%",
          width: "26%",
          maxWidth: 130,
          ...float(0.4),
        }}
      >
        <Illustration name="basket" />
      </div>
      <div
        style={{
          position: "absolute",
          right: "14%",
          bottom: "2%",
          width: "24%",
          maxWidth: 120,
          ...float(1.1),
        }}
      >
        <Illustration name="tshirt" />
      </div>
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
        style={{
          background: `linear-gradient(115deg,${tint} 0%,#E6F1FF 42%,#DCEDFF 100%)`,
          border: "1px solid #DCEBFB",
          borderRadius: 34,
          overflow: "hidden",
          boxShadow: "0 20px 60px rgba(31,109,200,.10)",
        }}
      >
        <div
          className="nw-hero-grid"
          style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 12, alignItems: "center" }}
        >
          <div style={{ padding: "44px 18px 44px 46px" }}>
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
                maxWidth: 420,
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
            <TrustRow style={{ marginTop: 22 }} />
          </div>
          <div className="nw-hero-art" style={{ padding: "10px 30px 20px" }}>
            <HeroArt />
          </div>
        </div>
      </div>
    </Section>
  );
}
