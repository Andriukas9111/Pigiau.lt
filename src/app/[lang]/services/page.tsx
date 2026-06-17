import { Icon } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { StarBanner } from "@/components/sections/Banners";
import { SceneHero } from "@/components/sections/Hero";
import { Btn } from "@/components/ui/Button";
import { Card, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FABRICS, SERVICES, WHY_CHOOSE } from "@/lib/data";
import { type Locale, localePath, trFor, tt } from "@/lib/i18n";
import type { Metadata } from "next";
import Link from "next/link";

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const lt = lang === "lt";
  return {
    title: lt ? "Paslaugos" : "Services",
    description: lt
      ? "Šiaurinės žvaigždės skalbimas, garų lyginimas, maskuotės sausas valymas, dėmių gelbėjimas, antklodžių gaiva ir greitas lankstymas — aukščiausios klasės skalbimo ir cheminio valymo paslaugos visoje Lietuvoje."
      : "North Star Wash, steam press, disguise dry clean, stain rescue, blanket refresh & express fold — premium laundry & dry-cleaning services delivered across Lithuania.",
    alternates: {
      canonical: `/${lang}/services`,
      languages: { lt: "/lt/services", en: "/en/services", "x-default": "/lt/services" },
    },
  };
}

export default async function ServicesPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Locale;
  const tr = trFor(l);
  return (
    <div className="nw-fade">
      {/* 1) HERO */}
      <SceneHero
        lang={l}
        eyebrow={tr(
          "PREMIUM LAUNDRY FROM ANOTHER DIMENSION",
          "AUKŠČIAUSIOS KLASĖS SKALBIMAS IŠ KITOS DIMENSIJOS",
        )}
        title={tr("Cosmic Services", "Kosminės paslaugos")}
        subline={
          <>
            <span style={{ color: "#1E8BE8" }}>{tr("Clean clothes.", "Švarūs drabužiai.")}</span>{" "}
            <span style={{ color: "#76C043" }}>{tr("Happy planet.", "Laiminga planeta.")}</span>
          </>
        }
        subtitle={tr(
          "We wash. We steam. We refresh. We even clean your disguises. Because looking human is hard.",
          "Skalbiame. Lyginame garais. Gaiviname. Net išvalome jūsų maskuotes. Nes atrodyti kaip žmogui sunku.",
        )}
      />

      {/* 2) SERVICES GRID */}
      <Section>
        <Card>
          <div style={{ textAlign: "center", marginBottom: 36 }}>
            <Eyebrow>{tr("OUR COSMIC SERVICES", "MŪSŲ KOSMINĖS PASLAUGOS")}</Eyebrow>
          </div>
          <div
            className="nw-grid-4 nw-slider"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 20 }}
          >
            {SERVICES.map((s) => (
              <Link
                key={s.key}
                href={localePath("/booking", l)}
                className="nw-svc"
                style={{
                  background: "#FbFdFF",
                  border: "1px solid #EAF2FC",
                  borderRadius: 22,
                  padding: 20,
                  textAlign: "center",
                  textDecoration: "none",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(180deg,#F2F9FF,#E9F4FF)",
                    borderRadius: 18,
                    padding: 8,
                    marginBottom: 14,
                  }}
                >
                  <span style={{ display: "block", aspectRatio: "1" }}>
                    <Illustration name={s.img} />
                  </span>
                </div>
                <h2
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 16, margin: "0 0 7px", color: "#09245B" }}
                >
                  {tt(s.title, l)}
                </h2>
                <p style={{ fontSize: 13, lineHeight: 1.5, color: "#6E86A8", margin: "0 0 14px", flex: 1 }}>
                  {tt(s.desc, l)}
                </p>
                <span
                  style={{
                    marginTop: "auto",
                    fontStyle: "italic",
                    fontSize: 12,
                    color: "#6E86A8",
                    background: "#EFF6FF",
                    border: "1px solid #E1EDFA",
                    padding: "7px 14px",
                    borderRadius: 999,
                  }}
                >
                  {tt(s.quote, l)}
                </span>
              </Link>
            ))}
          </div>
        </Card>
      </Section>

      {/* 3) FABRICS */}
      <Section>
        <Card pad={40}>
          <h2 className="fh" style={{ fontWeight: 800, fontSize: 20, color: "#09245B", margin: "0 0 18px" }}>
            {tr("Fabrics we clean", "Audiniai, kuriuos valome")}{" "}
            <span style={{ color: "#9AAEC9", fontWeight: 600, fontSize: 15 }}>
              {tr("(basically everything)", "(iš esmės viską)")}
            </span>
          </h2>
          <div
            className="nw-two"
            style={{ display: "grid", gridTemplateColumns: "1fr .62fr", gap: 20, alignItems: "stretch" }}
          >
            <div
              className="nw-grid-4"
              style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 12 }}
            >
              {FABRICS.map((f) => (
                <div
                  key={f.name.en}
                  className="nw-chip"
                  style={{
                    background: "#FbFdFF",
                    border: "1px solid #EAF2FC",
                    borderRadius: 16,
                    padding: "14px 12px",
                    textAlign: "center",
                  }}
                >
                  <div
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: 12,
                      background: "linear-gradient(145deg,#5BB4F5 0%,#1E8BE8 60%,#1366B2 100%)",
                      boxShadow: "0 6px 14px rgba(30,139,232,.24)",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      margin: "0 auto 8px",
                    }}
                  >
                    <Icon name={f.icon} size={20} c="#fff" sw={2.2} />
                  </div>
                  <div className="fh" style={{ fontWeight: 700, fontSize: 13, color: "#09245B" }}>
                    {tt(f.name, l)}
                  </div>
                  <div style={{ fontSize: 11, color: "#8AA0C0", marginTop: 2 }}>{tt(f.note, l)}</div>
                </div>
              ))}
            </div>
            <div
              style={{
                background: "linear-gradient(135deg,#EAF4FF,#DBEEFF)",
                borderRadius: 18,
                padding: 24,
                display: "flex",
                alignItems: "center",
              }}
            >
              <div style={{ fontStyle: "italic", color: "#3C5A85", fontSize: 14, lineHeight: 1.55 }}>
                {tr(
                  "If it's wearable, washable, or questionably meteor-related,",
                  "Jei tai galima dėvėti, skalbti ar abejotinai susiję su meteoritu,",
                )}{" "}
                <b style={{ fontStyle: "normal", color: "#1E8BE8" }}>
                  {tr("we'll clean it.", "mes tai išvalysime.")}
                </b>{" "}
                {tr("When in doubt — abduct it.", "Jei abejoji — pagrobk tai.")}
              </div>
            </div>
          </div>
        </Card>
      </Section>

      {/* 4) WHY CHOOSE */}
      <Section>
        <Card pad={40}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Eyebrow>{tr("WHY CHOOSE NORDWASH", "KODĖL RINKTIS NORDWASH")}</Eyebrow>
          </div>
          <div
            className="nw-grid-4 nw-grid-2up"
            style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18 }}
          >
            {WHY_CHOOSE.map((w) => (
              <div
                key={w.title.en}
                style={{
                  background: "#FbFdFF",
                  border: "1px solid #EAF2FC",
                  borderRadius: 18,
                  padding: 20,
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
                    margin: "0 auto 12px",
                  }}
                >
                  <Icon name={w.icon} size={28} c="#fff" sw={2.2} />
                </div>
                <h3
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 15, margin: "0 0 6px", color: "#09245B" }}
                >
                  {tt(w.title, l)}
                </h3>
                <p style={{ fontSize: 12, lineHeight: 1.5, color: "#7089AB", margin: 0 }}>{tt(w.desc, l)}</p>
              </div>
            ))}
          </div>
        </Card>
      </Section>

      {/* 5) STAR BANNER */}
      <StarBanner lang={l} />

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
            <h2
              className="fh"
              style={{
                fontWeight: 800,
                fontSize: 28,
                color: "#09245B",
                margin: "0 0 8px",
                letterSpacing: "-.5px",
              }}
            >
              {tr("Your clothes have been through a lot.", "Jūsų drabužiai daug ką patyrė.")}
            </h2>
            <p style={{ fontSize: 16, color: "#48618A", margin: "0 0 20px" }}>
              {tr(
                "Let us take it from here. Book a pickup and meet the crew.",
                "Toliau pasirūpinsime mes. Užsisakyk paėmimą ir susipažink su komanda.",
              )}
            </p>
            <div className="nw-btnrow" style={{ display: "flex", gap: 14 }}>
              <Btn href={localePath("/booking", l)} icon="rocket">
                {tr("BOOK A PICKUP", "UŽSISAKYK PAĖMIMĄ")}
              </Btn>
              <Btn href={localePath("/prices", l)} variant="ghost">
                {tr("See prices", "Žiūrėti kainas")}
              </Btn>
            </div>
          </div>
          <span className="nw-float-s" style={{ width: 170, display: "block" }}>
            <Illustration name="fold" />
          </span>
        </div>
      </Section>
    </div>
  );
}
