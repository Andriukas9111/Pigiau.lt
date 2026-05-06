import { Container } from "@/components/primitives/Container";
import { CalculatorPanel } from "@/components/sections/CalculatorPanel";
import { pageMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.calculator" });
  return pageMetadata({ title: t("title"), description: t("description"), path: "/calculator", locale });
}

export default async function CalculatorPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "calculator" });
  return (
    <>
      <section className="section-sm hairline-bottom">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <h1 className="text-display-xl">{t("title")}</h1>
              <p className="text-body-lg text-[var(--color-ink)]/70 mt-6 max-w-xl">{t("lede")}</p>
            </div>
          </div>
        </Container>
      </section>
      <section className="section-md">
        <CalculatorPanel />
      </section>
    </>
  );
}
