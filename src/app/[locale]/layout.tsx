import { Footer } from "@/components/layout/Footer";
import { Header } from "@/components/layout/Header";
import { SkipLink } from "@/components/primitives/SkipLink";
import { JsonLd, organizationLd } from "@/components/seo/JsonLd";
import { routing } from "@/i18n/routing";
import { pageMetadata } from "@/lib/seo";
import "@/styles/globals.css";
import { NextIntlClientProvider, hasLocale } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import { ViewTransitions } from "next-view-transitions";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.default" });
  return pageMetadata({
    title: t("title"),
    description: t("description"),
    path: "/",
    locale,
  });
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) notFound();
  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <ViewTransitions>
      <html lang={locale}>
        <body>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <SkipLink label="Praleisti į turinį" />
            <Header />
            <main id="main">{children}</main>
            <Footer />
            <JsonLd data={organizationLd()} />
          </NextIntlClientProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
