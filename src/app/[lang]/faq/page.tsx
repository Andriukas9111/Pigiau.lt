import { Icon, type IconName } from "@/components/icons";
import { PageBanner } from "@/components/sections/Banners";
import { FaqClient } from "@/components/sections/FaqClient";
import { Btn } from "@/components/ui/Button";
import { Card, Section } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { BRAND, FAQS } from "@/lib/data";
import { type Locale, localePath, trFor, tt } from "@/lib/i18n";
import type { Metadata } from "next";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const lt = lang === "lt";
  return {
    title: lt ? "DUK ir pagalba" : "FAQ & Help",
    description: lt
      ? "Atsakymai apie NordWash paėmimą ir pristatymą, kainas, atlikimo laiką, audinių priežiūrą ir mokėjimus — premium skalbimas ir cheminis valymas visoje Lietuvoje."
      : "Answers about NordWash pickup & delivery, pricing, turnaround times, fabric care and payments — premium laundry & dry cleaning across Lithuania.",
    alternates: {
      canonical: `/${lang}/faq`,
      languages: { lt: "/lt/faq", en: "/en/faq", "x-default": "/lt/faq" },
    },
  };
}

const SUPPORT: {
  icon: IconName;
  color: string;
  bg: string;
  title: [string, string];
  sub: string;
  cta: [string, string];
}[] = [
  {
    icon: "chat",
    color: "#76C043",
    bg: "#EAF7EE",
    title: ["Live Chat", "Tiesioginis pokalbis"],
    sub: "",
    cta: ["Start chat", "Pradėti pokalbį"],
  },
  {
    icon: "phone",
    color: "#1E8BE8",
    bg: "#EAF3FD",
    title: ["Call Us", "Skambinkite"],
    sub: BRAND.phone,
    cta: ["Call now", "Skambinti"],
  },
  {
    icon: "mail",
    color: "#7C5BD6",
    bg: "#F3EEFB",
    title: ["Email Us", "Rašykite"],
    sub: "hello@nordwash.lt",
    cta: ["Send email", "Siųsti laišką"],
  },
];

export default async function FaqPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const l = lang as Locale;
  const tr = trFor(l);
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    inLanguage: l,
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: tt(f.q, l),
      acceptedAnswer: { "@type": "Answer", text: tt(f.a, l) },
    })),
  };

  return (
    <div className="nw-fade">
      {/* biome-ignore lint/security/noDangerouslySetInnerHtml: static FAQ schema, no user input */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <PageBanner
        image="hero_faq"
        title={tr("FAQ & Help Center", "DUK ir pagalbos centras")}
        alt={tr(
          "FAQ & Help Center — answers faster than light",
          "DUK ir pagalbos centras — atsakymai greičiau nei šviesa",
        )}
      />

      <FaqClient />

      <Section pb={50}>
        <Card pad={44}>
          <div style={{ textAlign: "center", marginBottom: 28 }}>
            <Eyebrow>{tr("STILL NEED HELP", "VIS DAR REIKIA PAGALBOS")}</Eyebrow>
            <h3 className="fh" style={{ fontWeight: 800, fontSize: 26, color: "#09245B", margin: "8px 0 0" }}>
              {tr("Our crew replies faster than light", "Mūsų komanda atsako greičiau nei šviesa")}
            </h3>
          </div>
          <div
            className="nw-grid-3"
            style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 18 }}
          >
            {SUPPORT.map((s) => (
              <div
                key={s.icon}
                style={{
                  background: "#FbFdFF",
                  border: "1px solid #EAF2FC",
                  borderRadius: 20,
                  padding: 26,
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    width: 54,
                    height: 54,
                    borderRadius: 16,
                    background: s.bg,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 14px",
                  }}
                >
                  <Icon name={s.icon} c={s.color} size={26} />
                </div>
                <h4
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 16, color: "#09245B", margin: "0 0 6px" }}
                >
                  {tr(s.title[0], s.title[1])}
                </h4>
                <p style={{ fontSize: 12.5, color: "#7089AB", margin: "0 0 14px" }}>
                  {s.sub || tr("Mon–Sun, faster than light.", "Pir–Sek, greičiau nei šviesa.")}
                </p>
                <Btn href={localePath("/contact", l)} variant="ghost" fontSize={13} padding="11px 20px">
                  {tr(s.cta[0], s.cta[1])}
                </Btn>
              </div>
            ))}
          </div>
        </Card>
      </Section>
    </div>
  );
}
