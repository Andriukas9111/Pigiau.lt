import { Icon } from "@/components/icons";
import { Illustration, type IllustrationName } from "@/components/illustrations";
import { Btn } from "@/components/ui/Button";
import { Section } from "@/components/ui/Container";
import Link from "next/link";
import type { CSSProperties, ReactNode } from "react";
import { EyebrowPill } from "./Hero";

/** Starry overlay for navy panels. */
export function Starfield({ opacity = 0.6 }: { opacity?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute",
        inset: 0,
        backgroundImage:
          "radial-gradient(2px 2px at 20% 30%,#fff,transparent),radial-gradient(1.5px 1.5px at 60% 60%,#bcd4ff,transparent),radial-gradient(2px 2px at 80% 25%,#fff,transparent),radial-gradient(1.5px 1.5px at 35% 75%,#9fc2f5,transparent)",
        opacity,
      }}
    />
  );
}

/** Rebuilt page hero (replaces the baked-text banner PNGs — translatable markup). */
export function PageBanner({
  eyebrow,
  title,
  subtitle,
  illustrations,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  subtitle: string;
  illustrations: IllustrationName[];
  children?: ReactNode;
}) {
  return (
    <Section mt={10}>
      <div
        style={{
          background: "linear-gradient(120deg,#EAF4FF 0%,#DDF0FF 55%,#D2E9FF 100%)",
          border: "1px solid #DCEBFB",
          borderRadius: 28,
          overflow: "hidden",
          boxShadow: "0 18px 50px rgba(31,109,200,.12)",
        }}
      >
        <div
          className="nw-hero-grid"
          style={{ display: "grid", gridTemplateColumns: "1.1fr .9fr", gap: 12, alignItems: "center" }}
        >
          <div style={{ padding: "40px 18px 40px 46px" }}>
            <EyebrowPill>{eyebrow}</EyebrowPill>
            <h1
              className="nw-h1 fh"
              style={{
                fontWeight: 800,
                fontSize: 46,
                lineHeight: 1.05,
                letterSpacing: "-1.2px",
                margin: "16px 0 0",
                color: "#09245B",
              }}
            >
              {title}
            </h1>
            <p
              style={{
                fontSize: 16,
                lineHeight: 1.6,
                color: "#48618A",
                fontWeight: 500,
                margin: "14px 0 0",
                maxWidth: 460,
              }}
            >
              {subtitle}
            </p>
            {children && <div style={{ marginTop: 22 }}>{children}</div>}
          </div>
          <div className="nw-hero-art" style={{ position: "relative", minHeight: 220, padding: "16px 30px" }}>
            <span
              style={{
                position: "absolute",
                top: "12%",
                left: "16%",
                fontSize: 18,
                color: "#7FD0F5",
                animation: "nwTwinkle 2.6s ease-in-out infinite",
              }}
            >
              ✦
            </span>
            <span
              style={{
                position: "absolute",
                bottom: "16%",
                right: "18%",
                fontSize: 14,
                color: "#76C043",
                animation: "nwTwinkle 3s ease-in-out .5s infinite",
              }}
            >
              ✦
            </span>
            <div
              className="nw-float"
              style={{
                position: "absolute",
                left: illustrations.length > 1 ? "8%" : "50%",
                top: "14%",
                transform: illustrations.length > 1 ? undefined : "translateX(-50%)",
                width: "46%",
                maxWidth: 200,
              }}
            >
              <Illustration name={illustrations[0]} />
            </div>
            {illustrations[1] && (
              <div
                className="nw-float-s"
                style={{ position: "absolute", right: "8%", bottom: "8%", width: "40%", maxWidth: 160 }}
              >
                <Illustration name={illustrations[1]} />
              </div>
            )}
          </div>
        </div>
      </div>
    </Section>
  );
}

function NavyCta({
  href,
  eyebrow,
  title,
  subtitle,
  cta,
  illustration,
  perks,
  style,
}: {
  href: string;
  eyebrow?: string;
  title: string;
  subtitle: ReactNode;
  cta: string;
  illustration: IllustrationName;
  perks?: { big: string; small: string }[];
  style?: CSSProperties;
}) {
  return (
    <Link href={href} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
      <div
        style={{
          position: "relative",
          background: "radial-gradient(120% 140% at 80% 10%, #143a86 0%, #0a1f4d 60%)",
          borderRadius: 24,
          overflow: "hidden",
          boxShadow: "0 22px 60px rgba(10,31,77,.3)",
          ...style,
        }}
      >
        <Starfield opacity={0.7} />
        <div
          className="nw-two"
          style={{
            position: "relative",
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 24,
            padding: "38px 46px",
            color: "#fff",
          }}
        >
          <div>
            {eyebrow && (
              <div
                className="fh"
                style={{
                  fontWeight: 800,
                  fontSize: 13,
                  letterSpacing: "1.5px",
                  color: "#B8F35A",
                  marginBottom: 8,
                }}
              >
                ✦ {eyebrow}
              </div>
            )}
            <h3 className="fh" style={{ fontWeight: 800, fontSize: 28, margin: "0 0 8px" }}>
              {title}
            </h3>
            <p style={{ fontSize: 15, color: "#cfe0ff", margin: "0 0 18px", maxWidth: 460 }}>{subtitle}</p>
            {perks && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 18, margin: "0 0 18px" }}>
                {perks.map((p) => (
                  <div key={p.big}>
                    <div
                      className="fh"
                      style={{ fontWeight: 800, fontSize: 18, color: "#B8F35A", lineHeight: 1 }}
                    >
                      {p.big}
                    </div>
                    <div style={{ fontSize: 12, color: "#9FB6DD", marginTop: 3 }}>{p.small}</div>
                  </div>
                ))}
              </div>
            )}
            <span
              className="nw-btn-primary fh"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                background: "#B8F35A",
                color: "#09245B",
                fontWeight: 800,
                fontSize: 14.5,
                padding: "14px 26px",
                borderRadius: 999,
                boxShadow: "0 10px 24px rgba(184,243,90,.4)",
              }}
            >
              {cta}
              <Icon name="rocket" c="#09245B" size={16} sw={2} />
            </span>
          </div>
          <div className="nw-float" style={{ width: 150, flex: "none" }}>
            <Illustration name={illustration} />
          </div>
        </div>
      </div>
    </Link>
  );
}

/** Home + contact promo: 10% off for Earthlings, code HELLOEARTH. */
export function PromoBanner() {
  return (
    <Section pb={50}>
      <NavyCta
        href="/booking"
        eyebrow="FIRST ORDER"
        title="10% off for Earthlings"
        subtitle={
          <>
            Use code <b style={{ color: "#fff" }}>HELLOEARTH</b> on your first cosmic order. Free pickup &
            delivery included.
          </>
        }
        cta="CLAIM 10% OFF"
        illustration="ufo"
      />
    </Section>
  );
}

/** Services page: Star Member perks. */
export function StarBanner() {
  return (
    <Section>
      <NavyCta
        href="/booking"
        eyebrow="NORDWASH STAR MEMBER"
        title="Join the Star crew"
        subtitle="Members save on every order and skip the queue — cosmic perks for loyal Earthlings."
        cta="BECOME A STAR MEMBER"
        illustration="star"
        perks={[
          { big: "10% OFF", small: "Every Order" },
          { big: "Priority", small: "No Queues" },
          { big: "Free Rewash", small: "Always" },
          { big: "Exclusive", small: "Perks & Drops" },
        ]}
      />
    </Section>
  );
}

/** Generic "navy CTA" used by several page bottoms. */
export function ClosingCta({
  title,
  subtitle,
  cta,
  href,
  illustration,
}: {
  title: string;
  subtitle: string;
  cta: string;
  href: string;
  illustration: IllustrationName;
}) {
  return (
    <Section pb={50}>
      <NavyCta href={href} title={title} subtitle={subtitle} cta={cta} illustration={illustration} />
    </Section>
  );
}
