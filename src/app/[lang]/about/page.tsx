import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { PageBanner, Starfield } from "@/components/sections/Banners";
import { Btn } from "@/components/ui/Button";
import { Card, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { CREW, STATS, STORY, VALUES } from "@/lib/data";
import { type Locale, localePath, trFor, tt } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const lt = lang === "lt";
  return {
    title: lt ? "Apie mus" : "About Us",
    description: lt
      ? "Susipažinkite su kosmine NordWash komanda — aukščiausios klasės skalbimo ir cheminio valymo paslaugos, gimusios prie Šiaurinės žvaigždės ir dabar pristatančios šviežius, sulankstytus skalbinius visoje Lietuvoje."
      : "Meet the cosmic crew behind NordWash — premium laundry & dry cleaning born under the North Star, now delivering fresh, folded laundry across Lithuania.",
    alternates: {
      canonical: `/${lang}/about`,
      languages: { lt: "/lt/about", en: "/en/about", "x-default": "/lt/about" },
    },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Locale;
  const tr = trFor(l);
  return (
    <div className="nw-fade">
      {/* 1) HERO */}
      <PageBanner
        image="hero_about"
        title={tr("About NordWash", "Apie NordWash")}
        alt={tr(
          "About NordWash — from the North Star, with freshness",
          "Apie NordWash — nuo Šiaurinės žvaigždės su šviežumu",
        )}
      />

      {/* 2) MEET THE CREW */}
      <Section>
        <Card>
          <div style={{ textAlign: "center", marginBottom: 34 }}>
            <Eyebrow>{tr("MEET THE CREW", "SUSIPAŽINKITE SU KOMANDA")}</Eyebrow>
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
              {tr("The aliens behind your fresh laundry", "Ateiviai, kuriantys jūsų šviežius skalbinius")}
            </h2>
          </div>
          <div
            className="nw-grid-4 nw-grid-2up"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}
          >
            {CREW.map((c) => (
              <div
                key={c.name}
                style={{
                  background: "#FbFdFF",
                  border: "1px solid #EAF2FC",
                  borderRadius: 22,
                  padding: 22,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(180deg,#F2F9FF,#E9F4FF)",
                    borderRadius: 18,
                    padding: 6,
                    marginBottom: 14,
                  }}
                >
                  <span style={{ display: "block", aspectRatio: "1" }}>
                    <Illustration name={c.img} />
                  </span>
                </div>
                <h3 className="fh" style={{ fontWeight: 700, fontSize: 18, color: "#09245B", margin: 0 }}>
                  {c.name}
                </h3>
                <div
                  className="fh"
                  style={{
                    display: "inline-block",
                    background: c.color,
                    color: "#fff",
                    fontWeight: 700,
                    fontSize: 10.5,
                    letterSpacing: ".5px",
                    padding: "4px 11px",
                    borderRadius: 999,
                    margin: "8px 0 10px",
                  }}
                >
                  {tt(c.role, l)}
                </div>
                <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "#6E86A8", margin: 0 }}>
                  {tt(c.bio, l)}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* 3) OUR STORY */}
      <Section>
        <Card>
          <div style={{ textAlign: "center", marginBottom: 34 }}>
            <Eyebrow>{tr("OUR STORY", "MŪSŲ ISTORIJA")}</Eyebrow>
          </div>
          <div style={{ position: "relative" }}>
            <div
              className="nw-grid-6"
              style={{ position: "relative", display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 12 }}
            >
              <div
                style={{
                  position: "absolute",
                  top: 35,
                  left: "9%",
                  right: "9%",
                  borderTop: "2px dashed #CFE2F7",
                  zIndex: 0,
                }}
              />
              {STORY.map((st) => (
                <div key={st.icon} style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <div
                    style={{
                      width: 72,
                      height: 72,
                      borderRadius: "50%",
                      background: "linear-gradient(145deg,#5BB4F5 0%,#1E8BE8 58%,#1366B2 100%)",
                      border: "4px solid #fff",
                      boxShadow: "0 10px 22px rgba(30,139,232,.32)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 12px",
                    }}
                  >
                    <Icon name={st.icon} size={32} c="#fff" sw={2.2} />
                  </div>
                  <div className="fh" style={{ fontWeight: 800, fontSize: 13.5, color: "#1E8BE8" }}>
                    {tt(st.year, l)}
                  </div>
                  <h4
                    className="fh"
                    style={{ fontWeight: 700, fontSize: 13.5, color: "#09245B", margin: "6px 0 6px" }}
                  >
                    {tt(st.title, l)}
                  </h4>
                  <p style={{ fontSize: 11.5, lineHeight: 1.5, color: "#7089AB", margin: 0 }}>
                    {tt(st.desc, l)}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Card>
      </Section>

      {/* 4) OUR VALUES */}
      <Section>
        <Card>
          <div style={{ textAlign: "center", marginBottom: 32 }}>
            <Eyebrow>{tr("OUR VALUES", "MŪSŲ VERTYBĖS")}</Eyebrow>
          </div>
          <div
            className="nw-grid-4 nw-grid-2up"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}
          >
            {VALUES.map((v) => (
              <div
                key={v.icon}
                style={{
                  background: "#FbFdFF",
                  border: "1px solid #EAF2FC",
                  borderRadius: 20,
                  padding: 24,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 58,
                    height: 58,
                    borderRadius: 18,
                    background: "linear-gradient(145deg,#5BB4F5 0%,#1E8BE8 60%,#1366B2 100%)",
                    boxShadow: "0 8px 18px rgba(30,139,232,.28)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  <Icon name={v.icon} size={28} c="#fff" sw={2.2} />
                </div>
                <h4
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 16, color: "#09245B", margin: "0 0 7px" }}
                >
                  {tt(v.title, l)}
                </h4>
                <p style={{ fontSize: 12.5, lineHeight: 1.55, color: "#7089AB", margin: 0 }}>
                  {tt(v.desc, l)}
                </p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* 5) STATS BANNER */}
      <Section>
        <div
          style={{
            position: "relative",
            background: "radial-gradient(120% 150% at 20% 0%, #143a86 0%, #0a1f4d 65%)",
            borderRadius: 30,
            overflow: "hidden",
            boxShadow: "0 22px 60px rgba(10,31,77,.3)",
            padding: "40px 30px",
          }}
        >
          <Starfield />
          <div
            className="nw-grid-5"
            style={{
              position: "relative",
              display: "grid",
              gridTemplateColumns: "repeat(5,1fr)",
              gap: 20,
              textAlign: "center",
            }}
          >
            {STATS.map((s) => (
              <div key={s.num}>
                <div
                  className="fh"
                  style={{ fontWeight: 800, fontSize: 40, color: "#B8F35A", lineHeight: 1 }}
                >
                  {s.num}
                </div>
                <div style={{ fontSize: 13.5, color: "#cfe0ff", marginTop: 8, fontWeight: 600 }}>
                  {tt(s.label, l)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* 6) BOTTOM CTA */}
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
              {tr("Want to meet the crew?", "Norite susipažinti su komanda?")}
            </h3>
            <p style={{ fontSize: 16, color: "#48618A", margin: "0 0 20px" }}>
              {tr(
                "Send your laundry our way — first contact is on us, with 10% off.",
                "Atsiųskite savo skalbinius mums — pirmasis kontaktas mūsų sąskaita, su 10% nuolaida.",
              )}
            </p>
            <div className="nw-btnrow" style={{ display: "flex", gap: 14 }}>
              <Btn href={localePath("/booking", l)}>{tr("Book a pickup", "Užsisakyti paėmimą")}</Btn>
              <Btn href={localePath("/contact", l)} variant="ghost">
                {tr("Say hello", "Pasisveikinti")}
              </Btn>
            </div>
          </div>
          <span className="nw-float-s" style={{ width: 160, display: "block" }}>
            <Illustration name="disguise" />
          </span>
        </div>
      </Section>
    </div>
  );
}
