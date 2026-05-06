import { Container } from "@/components/primitives/Container";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function CookiesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <section className="section-md">
      <Container>
        <h1 className="text-display-lg">{t("cookiesTitle")}</h1>
        <p className="text-mono uppercase text-[var(--color-ink)]/60 mt-2">
          {t("lastUpdated", { date: "2026-01-01" })}
        </p>
        <p className="text-body-lg mt-10 max-w-3xl text-[var(--color-ink)]/85">{t("intro")}</p>
      </Container>
    </section>
  );
}
