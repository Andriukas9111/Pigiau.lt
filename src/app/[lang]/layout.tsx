import { HtmlLang } from "@/components/i18n/HtmlLang";
import { LangProvider } from "@/components/i18n/LangProvider";
import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { ScrollAnim } from "@/components/motion/ScrollAnim";
import { JsonLd } from "@/components/seo/JsonLd";
import { LOCALES, type Locale, isLocale } from "@/lib/i18n";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return LOCALES.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const lt = lang === "lt";
  return {
    title: {
      default: lt
        ? "NordWash — Kosminė skalbykla žmonėms ir ateiviams"
        : "NordWash — Cosmic Laundry for Humans & Aliens",
      template: "%s · NordWash",
    },
    description: lt
      ? "Premium skalbimas, cheminis valymas ir kosminė priežiūra visoje Lietuvoje. Nemokamas paėmimas, 24 val. ekspresas, 100 % pasitenkinimas."
      : "Premium laundry, dry cleaning & cosmic care delivered across Lithuania. Free pickup, 24h express, 100% satisfaction.",
    alternates: {
      canonical: `/${lang}`,
      languages: { lt: "/lt", en: "/en", "x-default": "/lt" },
    },
    openGraph: {
      type: "website",
      siteName: "NordWash",
      url: `https://www.nordwash.lt/${lang}`,
      locale: lt ? "lt_LT" : "en_US",
      title: lt
        ? "NordWash — Kosminė skalbykla žmonėms ir ateiviams"
        : "NordWash — Cosmic Laundry for Humans & Aliens",
      description: lt
        ? "Premium skalbimas ir cheminis valymas visoje Lietuvoje. Nemokamas paėmimas, 24 val. ekspresas."
        : "Premium laundry & dry cleaning delivered across Lithuania. Free pickup, 24h express.",
      images: [{ url: "/og.png", width: 1200, height: 630, alt: "NordWash" }],
    },
    twitter: { card: "summary_large_image", images: ["/og.png"] },
  };
}

export default async function LangLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const locale: Locale = lang;

  return (
    <LangProvider lang={locale}>
      <HtmlLang lang={locale} />
      <a
        href="#main"
        style={{
          position: "absolute",
          left: -9999,
          top: 0,
          background: "#fff",
          padding: "10px 16px",
          borderRadius: 10,
          zIndex: 100,
        }}
        className="fh"
      >
        {locale === "lt" ? "Pereiti prie turinio" : "Skip to content"}
      </a>
      <Header />
      <main id="main">{children}</main>
      <Footer lang={locale} />
      <ScrollAnim />
      <JsonLd lang={locale} />
    </LangProvider>
  );
}
