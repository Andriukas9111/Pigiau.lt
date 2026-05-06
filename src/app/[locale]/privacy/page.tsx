import { Container } from "@/components/primitives/Container";
import { BRAND } from "@/config/brand";
import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "legal" });

  return (
    <section className="section-md">
      <Container>
        <h1 className="text-display-lg">{t("privacyTitle")}</h1>
        <p className="text-mono uppercase text-[var(--color-ink)]/60 mt-2">
          {t("lastUpdated", { date: "2026-01-01" })}
        </p>
        <div className="prose mt-10 max-w-3xl text-body-lg space-y-6 text-[var(--color-ink)]/85">
          <p>{t("intro")}</p>
          <p>
            {BRAND.legalName}, PVM {BRAND.vatNumber}, {BRAND.address}. {BRAND.email}.
          </p>
        </div>
      </Container>
    </section>
  );
}
