import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { PageBanner } from "@/components/sections/Banners";
import { FaqAccordion } from "@/components/sections/FaqAccordion";
import { PriceCalculator } from "@/components/sections/PriceCalculator";
import { Btn } from "@/components/ui/Button";
import { Card, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { COMPARE_COLS, COMPARE_ROWS, PACKAGES, PRICE_FAQ } from "@/lib/data";
import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = { title: "Prices & Live Calculator" };

const STEPS = [
  { n: "1", t: "Choose", d: "Pick your service and options.", c: "#1E8BE8" },
  { n: "2", t: "Adjust", d: "Set weight, extras & urgency.", c: "#1E8BE8" },
  { n: "3", t: "See Price", d: "Watch your total update live.", c: "#1E8BE8" },
  { n: "4", t: "Book", d: "Confirm & we handle the rest.", c: "#76C043" },
];

function Packages() {
  return (
    <Section>
      <Card>
        <div style={{ textAlign: "center", marginBottom: 34 }}>
          <Eyebrow>POPULAR PACKAGES</Eyebrow>
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
            Pick a bundle, save a few light-years
          </h2>
        </div>
        <div className="nw-grid-5" style={{ display: "grid", gridTemplateColumns: "repeat(5,1fr)", gap: 14 }}>
          {PACKAGES.map((p) => {
            const popular = p.tag === "POPULAR";
            return (
              <div
                key={p.name}
                style={{
                  position: "relative",
                  background: "#FbFdFF",
                  border: `1.5px solid ${p.tag ? p.color : "#EAF2FC"}`,
                  borderRadius: 22,
                  padding: 20,
                  display: "flex",
                  flexDirection: "column",
                  boxShadow: popular ? "0 18px 40px rgba(118,192,67,.18)" : "0 6px 18px rgba(31,109,200,.05)",
                }}
              >
                {p.tag && (
                  <span
                    className="fh"
                    style={{
                      position: "absolute",
                      top: -11,
                      left: "50%",
                      transform: "translateX(-50%)",
                      background: p.color,
                      color: "#fff",
                      fontWeight: 800,
                      fontSize: 10,
                      letterSpacing: "1px",
                      padding: "5px 12px",
                      borderRadius: 999,
                      whiteSpace: "nowrap",
                    }}
                  >
                    {p.tag}
                  </span>
                )}
                <h3
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 17, color: "#09245B", margin: "6px 0 4px" }}
                >
                  {p.name}
                </h3>
                <div style={{ display: "flex", alignItems: "flex-end", gap: 4, marginBottom: 16 }}>
                  <span
                    className="fh"
                    style={{ fontWeight: 800, fontSize: 34, color: "#09245B", lineHeight: 1 }}
                  >
                    €{p.price}
                  </span>
                  <span style={{ fontSize: 12, color: "#9AAEC9", marginBottom: 4 }}>/ order</span>
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 9, flex: 1, marginBottom: 18 }}>
                  {p.feats.map((f) => (
                    <div
                      key={f}
                      style={{
                        display: "flex",
                        alignItems: "flex-start",
                        gap: 9,
                        fontSize: 12.5,
                        color: "#5B7194",
                        lineHeight: 1.4,
                      }}
                    >
                      <Icon name="check" c="#76C043" size={16} sw={2.4} style={{ marginTop: 1 }} />
                      {f}
                    </div>
                  ))}
                </div>
                <Link
                  href="/booking"
                  className="nw-btn-ghost fh"
                  style={{
                    width: "100%",
                    textAlign: "center",
                    background: popular ? "#B8F35A" : "#fff",
                    color: "#09245B",
                    fontWeight: 800,
                    fontSize: 13,
                    padding: 13,
                    borderRadius: 12,
                    border: `1.5px solid ${popular ? "#B8F35A" : "#cfe2f7"}`,
                    textDecoration: "none",
                  }}
                >
                  Choose {p.name}
                </Link>
              </div>
            );
          })}
        </div>
      </Card>
    </Section>
  );
}

function Compare() {
  return (
    <Section>
      <Card pad={40}>
        <div style={{ textAlign: "center", marginBottom: 24 }}>
          <Eyebrow>COMPARE PACKAGES</Eyebrow>
        </div>
        <div className="nw-scroll" style={{ overflowX: "auto" }}>
          <table style={{ width: "100%", borderCollapse: "collapse", minWidth: 640 }}>
            <thead>
              <tr>
                <th
                  className="fh"
                  style={{
                    textAlign: "left",
                    padding: "12px 14px",
                    fontWeight: 700,
                    fontSize: 12.5,
                    color: "#9AAEC9",
                  }}
                >
                  Feature
                </th>
                {COMPARE_COLS.map((c) => (
                  <th
                    key={c}
                    className="fh"
                    style={{
                      padding: "12px 10px",
                      fontWeight: 800,
                      fontSize: 12.5,
                      color: "#09245B",
                      textAlign: "center",
                    }}
                  >
                    {c}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {COMPARE_ROWS.map((r) => (
                <tr key={r.label} style={{ borderTop: "1px solid #EEF4FB" }}>
                  <td
                    className="fh"
                    style={{
                      textAlign: "left",
                      padding: "13px 14px",
                      fontWeight: 600,
                      fontSize: 13,
                      color: "#5B7194",
                    }}
                  >
                    {r.label}
                  </td>
                  {r.cells.map((cell, i) => (
                    <td key={i} style={{ padding: "13px 10px", textAlign: "center" }}>
                      {cell === "y" ? (
                        <Icon name="check" c="#76C043" size={17} sw={2.6} />
                      ) : (
                        <span
                          className="fh"
                          style={{
                            color: cell === "—" ? "#C2D2E6" : "#5B7194",
                            fontWeight: cell === "—" ? 400 : 700,
                            fontSize: 12.5,
                          }}
                        >
                          {cell}
                        </span>
                      )}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Card>
    </Section>
  );
}

function HowEstimate() {
  return (
    <Section>
      <div
        className="nw-two"
        style={{ display: "grid", gridTemplateColumns: "1.15fr .85fr", gap: 22, alignItems: "stretch" }}
      >
        <Card pad={36}>
          <div style={{ textAlign: "center", marginBottom: 26 }}>
            <Eyebrow>HOW THE ESTIMATE WORKS</Eyebrow>
          </div>
          <div
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, position: "relative" }}
          >
            <div
              style={{
                position: "absolute",
                top: 22,
                left: "12%",
                right: "12%",
                borderTop: "2px dashed #CFE2F7",
                zIndex: 0,
              }}
            />
            {STEPS.map((st) => (
              <div key={st.n} style={{ textAlign: "center", position: "relative", zIndex: 1 }}>
                <div
                  className="fh"
                  style={{
                    width: 46,
                    height: 46,
                    borderRadius: "50%",
                    background: st.c,
                    color: "#fff",
                    fontWeight: 800,
                    fontSize: 16,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 10px",
                    border: "3px solid #fff",
                    boxShadow: `0 4px 12px ${st.c === "#76C043" ? "rgba(118,192,67,.22)" : "rgba(31,109,200,.18)"}`,
                  }}
                >
                  {st.n}
                </div>
                <h4
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 13.5, color: "#09245B", margin: "0 0 5px" }}
                >
                  {st.t}
                </h4>
                <p style={{ fontSize: 11.5, color: "#7089AB", lineHeight: 1.45, margin: 0 }}>{st.d}</p>
              </div>
            ))}
          </div>
          <div
            style={{
              marginTop: 26,
              background: "linear-gradient(120deg,#F2F9FF,#E9F4FF)",
              borderRadius: 16,
              padding: "16px 20px",
              fontSize: 12.5,
              color: "#5B7194",
              textAlign: "center",
            }}
          >
            Prices include tax. Final price may vary slightly based on exact weight after the laundry check.
          </div>
        </Card>
        <div
          className="nw-pad"
          style={{
            background: "linear-gradient(135deg,#EAF4FF,#DBEEFF)",
            border: "1px solid #DCEBFB",
            borderRadius: 30,
            padding: 30,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
          }}
        >
          <div
            className="fh"
            style={{
              fontWeight: 800,
              color: "#1E8BE8",
              fontSize: 13,
              letterSpacing: "1px",
              marginBottom: 14,
            }}
          >
            PICKUP & DELIVERY ACROSS LITHUANIA
          </div>
          <span style={{ width: "100%", maxWidth: 300, marginBottom: 14, display: "block" }}>
            <Illustration name="map" />
          </span>
          <p style={{ fontSize: 13, color: "#3C5A85", lineHeight: 1.55, margin: "0 0 6px" }}>
            We pick up and deliver to your door anywhere in Lithuania.
          </p>
          <div className="fh" style={{ fontWeight: 800, fontSize: 15, color: "#09245B" }}>
            Flat rate €4.50{" "}
            <span style={{ fontWeight: 600, color: "#7089AB", fontSize: 13 }}>· one-way or round trip</span>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default function PricesPage() {
  return (
    <div className="nw-fade">
      <PageBanner
        eyebrow="PRICES & LIVE CALCULATOR"
        title="Build Your Wash"
        subtitle="Choose a service, set the details and watch your price update live. No asteroids, no hidden fees."
        illustrations={["basket", "stopwatch"]}
      />

      <Section>
        <div style={{ textAlign: "center", marginBottom: 26 }}>
          <Eyebrow>BUILD YOUR WASH · SEE YOUR PRICE INSTANTLY</Eyebrow>
        </div>
        <PriceCalculator />
      </Section>

      <Packages />
      <Compare />
      <HowEstimate />

      <Section>
        <Card pad={40}>
          <div style={{ textAlign: "center", marginBottom: 24 }}>
            <Eyebrow>PRICING QUESTIONS</Eyebrow>
          </div>
          <FaqAccordion items={PRICE_FAQ} />
        </Card>
      </Section>

      <Section pb={50}>
        <div
          className="nw-pad nw-two"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr auto",
            alignItems: "center",
            gap: 24,
            background: "linear-gradient(120deg,#EAF4FF,#DBEEFF)",
            border: "1px solid #DCEBFB",
            borderRadius: 30,
            padding: "40px 46px",
          }}
        >
          <div>
            <h3
              className="fh"
              style={{
                fontWeight: 800,
                fontSize: 26,
                color: "#09245B",
                margin: "0 0 8px",
                letterSpacing: "-.5px",
              }}
            >
              Happy with your estimate?
            </h3>
            <p style={{ fontSize: 16, color: "#48618A", margin: "0 0 20px" }}>
              Lock it in — book a pickup and our crew handles the rest.
            </p>
            <Btn href="/booking" icon="rocket">
              BOOK A PICKUP
            </Btn>
          </div>
          <span className="nw-float" style={{ width: 160, display: "block" }}>
            <Illustration name="pickup" />
          </span>
        </div>
      </Section>
    </div>
  );
}
