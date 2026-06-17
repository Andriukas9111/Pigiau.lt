import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { ClosingCta, PageBanner } from "@/components/sections/Banners";
import { Btn } from "@/components/ui/Button";
import { Card, Section } from "@/components/ui/Container";
import { BRANCH_CHARS, ROUTES, STATIONS } from "@/lib/data";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Locations",
  description:
    "Find your nearest NordWash station in Vilnius, Kaunas, Klaipėda, Šiauliai or Panevėžys — or book door-to-door laundry pickup & delivery across Lithuania.",
  alternates: { canonical: "/locations" },
};

export default function LocationsPage() {
  return (
    <div className="nw-fade">
      {/* 1) HERO */}
      <PageBanner
        image="hero_locations"
        title="Our Locations"
        alt="Our locations — find a NordWash station across Lithuania"
      />

      {/* 2) STATIONS + STICKY MAP */}
      <Section>
        <div
          className="nw-two"
          style={{ display: "grid", gridTemplateColumns: "1fr .9fr", gap: 22, alignItems: "start" }}
        >
          {/* LEFT: stations list */}
          <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
            {STATIONS.map((s) => (
              <div
                key={s.city}
                style={{
                  background: "#fff",
                  border: "1px solid #E9F1FB",
                  borderRadius: 20,
                  boxShadow: "0 8px 26px rgba(31,109,200,.06)",
                  padding: 22,
                  display: "flex",
                  gap: 16,
                  alignItems: "flex-start",
                }}
              >
                <div
                  style={{
                    width: 84,
                    height: 84,
                    borderRadius: 18,
                    background: "linear-gradient(180deg,#F2F9FF,#E9F4FF)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flex: "none",
                    padding: 6,
                  }}
                >
                  <span style={{ width: "100%", height: "100%", display: "block" }}>
                    <Illustration name={s.img} />
                  </span>
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
                    <h3 className="fh" style={{ fontWeight: 700, fontSize: 17, color: "#09245B", margin: 0 }}>
                      {s.city}{" "}
                      <span style={{ color: "#9AAEC9", fontWeight: 600, fontSize: 13 }}>· {s.name}</span>
                    </h3>
                    <span
                      className="fh"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 3,
                        fontWeight: 700,
                        fontSize: 12,
                        color: "#F2A53B",
                        flex: "none",
                      }}
                    >
                      ★ {s.rating}
                    </span>
                  </div>
                  <div style={{ fontSize: 13, color: "#6E86A8", margin: "6px 0" }}>{s.addr}</div>
                  <div
                    style={{
                      fontSize: 12.5,
                      color: "#5B7194",
                      display: "flex",
                      alignItems: "center",
                      gap: 7,
                      marginBottom: 12,
                    }}
                  >
                    <Icon name="clock" size={15} c="#1E8BE8" />
                    Open daily {s.hours}
                  </div>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
                    {s.tags.map((t) => (
                      <span
                        key={t}
                        style={{
                          background: "#F2F9FF",
                          border: "1px solid #E3EEFA",
                          color: "#3C5A85",
                          fontSize: 11,
                          fontWeight: 600,
                          padding: "5px 10px",
                          borderRadius: 999,
                        }}
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT: sticky map */}
          <div
            style={{
              position: "sticky",
              top: 96,
              background: "linear-gradient(135deg,#EAF4FF,#DBEEFF)",
              border: "1px solid #DCEBFB",
              borderRadius: 26,
              padding: 24,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <span style={{ width: "100%", maxWidth: 440, display: "block" }}>
              <Illustration name="map" />
            </span>
            <div style={{ marginTop: 8 }}>
              <Btn href="/booking">Book a pickup near you</Btn>
            </div>
          </div>
        </div>
      </Section>

      {/* 3) WE COME TO YOU */}
      <Section>
        <div
          className="nw-pad nw-two"
          style={{
            display: "grid",
            gridTemplateColumns: "auto 1fr",
            alignItems: "center",
            gap: 28,
            background: "#fff",
            border: "1px solid #E9F1FB",
            borderRadius: 30,
            boxShadow: "0 14px 44px rgba(31,109,200,.07)",
            padding: 40,
          }}
        >
          <span style={{ width: 180, display: "block" }}>
            <Illustration name="van" />
          </span>
          <div>
            <div
              className="fh"
              style={{
                fontWeight: 800,
                color: "#1E8BE8",
                fontSize: 14,
                letterSpacing: "1.5px",
                marginBottom: 6,
              }}
            >
              ✦ WE COME TO YOU
            </div>
            <h3
              className="fh"
              style={{
                fontWeight: 800,
                fontSize: 25,
                color: "#09245B",
                margin: "0 0 18px",
                letterSpacing: "-.5px",
              }}
            >
              Door-to-door, across the galaxy (and Lithuania)
            </h3>
            <div
              className="nw-grid-3"
              style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}
            >
              {[
                { n: 1, title: "Book a slot", desc: "Choose a 2-hour window that suits you." },
                { n: 2, title: "We collect", desc: "Our courier picks up — contact-free if you like." },
                { n: 3, title: "We return", desc: "Fresh, folded and beamed back to your door." },
              ].map((step) => (
                <div
                  key={step.n}
                  style={{
                    background: "#FbFdFF",
                    border: "1px solid #EAF2FC",
                    borderRadius: 16,
                    padding: 18,
                  }}
                >
                  <div className="fh" style={{ fontWeight: 800, fontSize: 22, color: "#1E8BE8" }}>
                    {step.n}
                  </div>
                  <b
                    className="fh"
                    style={{ fontSize: 14, color: "#09245B", display: "block", margin: "4px 0 4px" }}
                  >
                    {step.title}
                  </b>
                  <span style={{ fontSize: 12.5, color: "#7089AB" }}>{step.desc}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* 4) ROUTES + BRANCH CHARACTERS */}
      <Section>
        <div
          className="nw-two nw-loc2"
          style={{ display: "grid", gridTemplateColumns: "1fr 1.25fr", gap: 22, alignItems: "start" }}
        >
          {/* LEFT: routes */}
          <Card pad={36}>
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 18 }}>
              <span style={{ width: 54, height: 40, display: "block" }}>
                <Illustration name="van" />
              </span>
              <div
                className="fh"
                style={{ fontWeight: 800, color: "#1E8BE8", fontSize: 14, letterSpacing: "1px" }}
              >
                PICKUP & DELIVERY ROUTES
              </div>
            </div>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              {ROUTES.map((r) => (
                <div
                  key={r.name}
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    gap: 12,
                    borderBottom: "1px solid #EEF4FB",
                    paddingBottom: 14,
                  }}
                >
                  <span
                    style={{
                      width: 11,
                      height: 11,
                      borderRadius: "50%",
                      background: r.color,
                      marginTop: 4,
                      flex: "none",
                    }}
                  />
                  <div style={{ flex: 1 }}>
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                      <b className="fh" style={{ fontWeight: 700, fontSize: 14, color: "#09245B" }}>
                        {r.name}
                      </b>
                      <span
                        className="fh"
                        style={{ fontWeight: 700, fontSize: 12, color: r.color, whiteSpace: "nowrap" }}
                      >
                        {r.days}
                      </span>
                    </div>
                    <div style={{ fontSize: 12.5, color: "#7089AB", marginTop: 3 }}>{r.cities}</div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 18 }}>
              <Btn href="/booking" variant="ghost" full fontSize={13.5} padding="13px">
                View full routes
              </Btn>
            </div>
          </Card>

          {/* RIGHT: branch characters */}
          <Card pad={36}>
            <div
              className="fh"
              style={{ fontWeight: 800, color: "#1E8BE8", fontSize: 14, letterSpacing: "1px" }}
            >
              BRANCH CHARACTERS
            </div>
            <p style={{ fontSize: 13, color: "#7089AB", margin: "6px 0 22px" }}>
              Each station has its own alien in charge.
            </p>
            <div
              className="nw-grid-5 nw-slider"
              style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14 }}
            >
              {BRANCH_CHARS.map((b) => (
                <div
                  key={b.name}
                  style={{
                    background: "#FbFdFF",
                    border: "1px solid #EAF2FC",
                    borderRadius: 18,
                    padding: "14px 8px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      background: "linear-gradient(180deg,#F2F9FF,#E9F4FF)",
                      borderRadius: 14,
                      padding: 4,
                      marginBottom: 10,
                    }}
                  >
                    <span style={{ display: "block", aspectRatio: "1" }}>
                      <Illustration name={b.img} />
                    </span>
                  </div>
                  <b
                    className="fh"
                    style={{ fontWeight: 700, fontSize: 13.5, color: "#09245B", display: "block" }}
                  >
                    {b.name}
                  </b>
                  <span
                    style={{
                      fontSize: 10.5,
                      color: "#7089AB",
                      display: "block",
                      lineHeight: 1.3,
                      marginTop: 3,
                    }}
                  >
                    {b.role}
                  </span>
                  <span
                    className="fh"
                    style={{
                      fontWeight: 700,
                      fontSize: 10.5,
                      color: b.color,
                      display: "block",
                      marginTop: 5,
                    }}
                  >
                    {b.city}
                  </span>
                </div>
              ))}
            </div>
          </Card>
        </div>
      </Section>

      {/* 5) THREE INFO CARDS */}
      <Section>
        <div className="nw-grid-3" style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }}>
          {/* (a) Open late */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #E9F1FB",
              borderRadius: 24,
              boxShadow: "0 8px 26px rgba(31,109,200,.06)",
              padding: 28,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 15,
                background: "#EAF3FD",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <Icon name="clock" size={26} c="#1E8BE8" />
            </div>
            <h4 className="fh" style={{ fontWeight: 700, fontSize: 17, color: "#09245B", margin: "0 0 7px" }}>
              Open late for busy humans
            </h4>
            <p style={{ fontSize: 13, color: "#7089AB", lineHeight: 1.55 }}>
              Most stations open early and close late — because laundry doesn't sleep, and neither do we.
            </p>
          </div>

          {/* (b) Real humans */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #E9F1FB",
              borderRadius: 24,
              boxShadow: "0 8px 26px rgba(31,109,200,.06)",
              padding: 28,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 15,
                background: "#EAF7EE",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <Icon name="chat" size={26} c="#76C043" />
            </div>
            <h4 className="fh" style={{ fontWeight: 700, fontSize: 17, color: "#09245B", margin: "0 0 7px" }}>
              Real humans, real help
            </h4>
            <p style={{ fontSize: 13, color: "#7089AB", lineHeight: 1.55, marginBottom: 14 }}>
              Need help choosing a station or route? Our Earth-based team is here.
            </p>
            <Btn href="/contact" variant="ghost" fontSize={12.5} padding="10px 18px">
              Contact us
            </Btn>
          </div>

          {/* (c) Questions */}
          <div
            style={{
              background: "#fff",
              border: "1px solid #E9F1FB",
              borderRadius: 24,
              boxShadow: "0 8px 26px rgba(31,109,200,.06)",
              padding: 28,
            }}
          >
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: 15,
                background: "#F3EEFB",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                marginBottom: 14,
              }}
            >
              <Icon name="chat" size={26} c="#7C5BD6" />
            </div>
            <h4 className="fh" style={{ fontWeight: 700, fontSize: 17, color: "#09245B", margin: "0 0 7px" }}>
              Questions about locations?
            </h4>
            <p style={{ fontSize: 13, color: "#7089AB", lineHeight: 1.55, marginBottom: 14 }}>
              Check our FAQ or talk to our support squad — faster than light.
            </p>
            <Btn href="/faq" variant="ghost" fontSize={12.5} padding="10px 18px">
              View FAQ
            </Btn>
          </div>
        </div>
      </Section>

      {/* 6) CLOSING CTA */}
      <ClosingCta
        title="Not sure if we reach you?"
        subtitle="Drop us a message — we are expanding our beam network all the time."
        cta="Check my area"
        href="/contact"
        illustration="ufo"
      />
    </div>
  );
}
