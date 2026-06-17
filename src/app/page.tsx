import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { PromoBanner } from "@/components/sections/Banners";
import { SceneHero } from "@/components/sections/Hero";
import { HomeCalc } from "@/components/sections/HomeCalc";
import { Btn } from "@/components/ui/Button";
import { Card, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CITIES, REVIEWS, SERVICES } from "@/lib/data";
import Link from "next/link";

const STEPS = [
  { n: "1", img: "phone" as const, title: "Book Online", desc: "Choose your service and pick a time." },
  { n: "2", img: "ufo" as const, title: "We Pick Up", desc: "Our couriers swoop in faster than light." },
  {
    n: "3",
    img: "deliver" as const,
    title: "We Clean & Deliver",
    desc: "Fresh, folded and beamed to your door.",
  },
];

function ServicesPreview() {
  return (
    <Section>
      <Card>
        <div style={{ textAlign: "center", marginBottom: 30 }}>
          <Eyebrow>OUR COSMIC SERVICES</Eyebrow>
          <h2
            className="fh"
            style={{
              fontWeight: 800,
              fontSize: 30,
              color: "#09245B",
              margin: "10px 0 0",
              letterSpacing: "-.5px",
            }}
          >
            Whatever the mess, we beam it clean
          </h2>
        </div>
        <div
          className="nw-grid-6 nw-slider"
          style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14 }}
        >
          {SERVICES.slice(0, 6).map((s) => (
            <Link
              key={s.key}
              href="/services"
              className="nw-svc"
              style={{
                background: "#FbFdFF",
                border: "1px solid #EAF2FC",
                borderRadius: 22,
                padding: "18px 14px",
                textAlign: "center",
                textDecoration: "none",
                display: "block",
              }}
            >
              <span style={{ display: "block", aspectRatio: "1", marginBottom: 6 }}>
                <Illustration name={s.img} />
              </span>
              <h3
                className="fh"
                style={{ fontWeight: 700, fontSize: 14, margin: "0 0 6px", color: "#09245B" }}
              >
                {s.title}
              </h3>
              <p style={{ fontSize: 11.5, lineHeight: 1.5, color: "#6E86A8", margin: 0 }}>{s.desc}</p>
            </Link>
          ))}
        </div>
        <div style={{ textAlign: "center", marginTop: 30 }}>
          <Btn href="/services" variant="ghost" fontSize={14} padding="13px 26px">
            See all 8 services →
          </Btn>
        </div>
      </Card>
    </Section>
  );
}

function HowItWorks() {
  return (
    <Section id="how">
      <div
        className="nw-two"
        style={{ display: "grid", gridTemplateColumns: "1.05fr .95fr", gap: 22, alignItems: "stretch" }}
      >
        <Card pad={40}>
          <div style={{ textAlign: "center", marginBottom: 30 }}>
            <Eyebrow>HOW IT WORKS</Eyebrow>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between", gap: 8, position: "relative" }}>
            <div
              style={{
                position: "absolute",
                top: 62,
                left: "16%",
                right: "16%",
                borderTop: "2px dashed #CFE2F7",
                zIndex: 0,
              }}
            />
            {STEPS.map((st) => (
              <div key={st.n} style={{ flex: 1, textAlign: "center", position: "relative", zIndex: 1 }}>
                <div
                  style={{
                    width: 124,
                    height: 124,
                    borderRadius: "50%",
                    background: "#fff",
                    border: "2px solid #E3EEFA",
                    boxShadow: "0 8px 18px rgba(31,109,200,.10)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 10px",
                    overflow: "hidden",
                    padding: 6,
                  }}
                >
                  <Illustration name={st.img} />
                </div>
                <div
                  className="fh"
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: "50%",
                    background: "#1E8BE8",
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 13,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "-26px auto 12px",
                    border: "3px solid #fff",
                  }}
                >
                  {st.n}
                </div>
                <h4
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 14.5, margin: "0 0 6px", color: "#09245B" }}
                >
                  {st.title}
                </h4>
                <p style={{ fontSize: 12.5, lineHeight: 1.5, color: "#7089AB", margin: 0 }}>{st.desc}</p>
              </div>
            ))}
          </div>
        </Card>
        <Card pad={36}>
          <HomeCalc />
        </Card>
      </div>
    </Section>
  );
}

function ReviewsLocations() {
  return (
    <Section>
      <div
        className="nw-two"
        style={{ display: "grid", gridTemplateColumns: "1fr 1.04fr", gap: 22, alignItems: "stretch" }}
      >
        {/* reviews */}
        <Card pad={34} style={{ display: "flex", flexDirection: "column" }}>
          <Eyebrow align="left" style={{ marginBottom: 22 }}>
            WHAT OUR CUSTOMERS SAY
          </Eyebrow>
          <div
            className="nw-grid-3 nw-slider"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12, flex: 1 }}
          >
            {REVIEWS.map((r) => (
              <div
                key={r.name}
                style={{
                  background: "#FbFdFF",
                  border: "1px solid #EAF2FC",
                  borderRadius: 18,
                  padding: 18,
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div style={{ color: "#FFB72B", fontSize: 13, letterSpacing: "2px", marginBottom: 10 }}>
                  ★★★★★
                </div>
                <p
                  style={{
                    fontSize: 12.5,
                    lineHeight: 1.5,
                    color: "#3C5680",
                    fontWeight: 500,
                    margin: "0 0 14px",
                    flex: 1,
                  }}
                >
                  “{r.quote}”
                </p>
                <div style={{ display: "flex", alignItems: "center", gap: 9 }}>
                  <div
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: "50%",
                      background: r.bg,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flex: "none",
                    }}
                  >
                    <Icon name={r.kind === "alien" ? "alien" : "user"} c="#1E8BE8" size={20} />
                  </div>
                  <div>
                    <b
                      className="fh"
                      style={{ fontSize: 12.5, color: "#09245B", display: "block", lineHeight: 1.2 }}
                    >
                      {r.name}
                    </b>
                    <span style={{ fontSize: 11, color: "#8AA0C0" }}>{r.city}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div
            className="fh"
            style={{ textAlign: "center", marginTop: 20, fontWeight: 700, color: "#09245B", fontSize: 14 }}
          >
            <span style={{ color: "#B8F35A" }}>★</span> Rated 4.9/5 from 1,248 Earthlings & Aliens
          </div>
        </Card>

        {/* locations */}
        <div
          className="nw-two"
          style={{
            display: "grid",
            gridTemplateColumns: ".92fr 1.12fr",
            gap: 0,
            background: "#fff",
            border: "1px solid #E9F1FB",
            borderRadius: 30,
            boxShadow: "0 14px 44px rgba(31,109,200,.07)",
            overflow: "hidden",
          }}
        >
          <div style={{ padding: 32, display: "flex", flexDirection: "column", justifyContent: "center" }}>
            <Eyebrow align="left" style={{ marginBottom: 18 }}>
              OUR LOCATIONS
            </Eyebrow>
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              {CITIES.map((c) => (
                <div key={c.name} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                  <span style={{ display: "flex", flex: "none" }}>
                    <Icon name="pin" c={c.color} size={22} />
                  </span>
                  <div>
                    <b
                      className="fh"
                      style={{ fontSize: 14.5, color: "#09245B", display: "block", lineHeight: 1.2 }}
                    >
                      {c.name}
                    </b>
                    <span style={{ fontSize: 12, color: "#8AA0C0" }}>{c.hub}</span>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 20 }}>
              <Btn href="/locations" variant="ghost" fontSize={12.5} padding="11px 18px">
                View all →
              </Btn>
            </div>
          </div>
          <div
            style={{
              background: "linear-gradient(135deg,#EAF4FF,#DBEEFF)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              padding: 16,
            }}
          >
            <span style={{ width: "100%", maxWidth: 280 }}>
              <Illustration name="map" />
            </span>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function HomePage() {
  return (
    <div className="nw-fade">
      <SceneHero
        eyebrow="PREMIUM LAUNDRY FROM ANOTHER DIMENSION"
        title={
          <>
            Cosmic Laundry
            <br />
            for <span style={{ color: "#1E8BE8" }}>Humans</span>{" "}
            <span style={{ color: "#76C043" }}>& Aliens</span>
          </>
        }
        subtitle="We wash. We steam. We refresh. We even clean your disguises. Because looking human is hard."
      />
      <ServicesPreview />
      <HowItWorks />
      <ReviewsLocations />
      <PromoBanner />
    </div>
  );
}
