import { Icon } from "@/components/icons";
import { Illustration, type IllustrationName } from "@/components/illustrations";
import { Section } from "@/components/ui/Container";
import Link from "next/link";

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

/** Full-width page-hero banner image (the original baked-text artwork). */
export function PageBanner({ image, alt }: { image: string; alt: string }) {
  return (
    <Section mt={10}>
      <img
        src={`/assets/${image}.webp`}
        alt={alt}
        width={1500}
        height={643}
        loading="eager"
        fetchPriority="high"
        style={{
          width: "100%",
          height: "auto",
          aspectRatio: "1500 / 643",
          display: "block",
          borderRadius: 28,
          boxShadow: "0 18px 50px rgba(31,109,200,.12)",
        }}
      />
    </Section>
  );
}

/** Clickable full-width banner image → Booking. */
function BannerLink({
  href,
  image,
  alt,
  label,
  pb = 0,
  mt = 30,
}: { href: string; image: string; alt: string; label: string; pb?: number; mt?: number }) {
  return (
    <Section mt={mt} pb={pb}>
      <Link href={href} aria-label={label} style={{ display: "block" }}>
        <img
          src={`/assets/${image}.webp`}
          alt={alt}
          width={1500}
          height={500}
          loading="lazy"
          style={{
            width: "100%",
            height: "auto",
            aspectRatio: "1500 / 500",
            display: "block",
            borderRadius: 22,
            boxShadow: "0 22px 60px rgba(10,31,77,.3)",
          }}
        />
      </Link>
    </Section>
  );
}

/** Home + contact promo: 10% off for Earthlings, code HELLOEARTH. */
export function PromoBanner() {
  return (
    <BannerLink
      href="/booking"
      image="banner_cta"
      alt="First order discount — 10% off for Earthlings, code HELLOEARTH"
      label="Claim 10% off your first order"
      pb={50}
    />
  );
}

/** Services page: Star Member perks. */
export function StarBanner() {
  return (
    <BannerLink
      href="/booking"
      image="banner_star"
      alt="NordWash Star Member — perks for loyal Earthlings"
      label="Become a NordWash Star Member"
    />
  );
}

/** Navy markup CTA used by some page bottoms (matches the prototype's markup banners). */
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
      <Link href={href} style={{ textDecoration: "none", color: "inherit", display: "block" }}>
        <div
          style={{
            position: "relative",
            background: "radial-gradient(120% 140% at 80% 10%, #143a86 0%, #0a1f4d 60%)",
            borderRadius: 30,
            overflow: "hidden",
            boxShadow: "0 22px 60px rgba(10,31,77,.3)",
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
              <h3 className="fh" style={{ fontWeight: 800, fontSize: 27, margin: "0 0 8px" }}>
                {title}
              </h3>
              <p style={{ fontSize: 15, color: "#cfe0ff", margin: "0 0 20px", maxWidth: 460 }}>{subtitle}</p>
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
            <span className="nw-float" style={{ width: 130, flex: "none", display: "block" }}>
              <Illustration name={illustration} />
            </span>
          </div>
        </div>
      </Link>
    </Section>
  );
}
