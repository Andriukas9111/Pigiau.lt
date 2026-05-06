import { Container } from "@/components/primitives/Container";
import { BookingStrip } from "@/components/sections/BookingStrip";
import { ServiceGrid } from "@/components/sections/ServiceGrid";
import { pageMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.services" });
  return pageMetadata({ title: t("title"), description: t("description"), path: "/services", locale });
}

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "services" });
  return (
    <>
      <section className="section-sm hairline-bottom">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <h1 className="text-display-xl">{t("title")}</h1>
              <p className="text-body-lg text-[var(--color-ink)]/70 mt-6 max-w-xl">{t("lede")}</p>
            </div>
            <dl className="md:col-span-5 grid grid-cols-3 gap-6 text-body-sm">
              <div>
                <dt className="text-mono uppercase text-[var(--color-ink)]/60">{t("stats.servicesCount")}</dt>
                <dd className="text-display-md mt-2">8</dd>
              </div>
              <div>
                <dt className="text-mono uppercase text-[var(--color-ink)]/60">{t("stats.surfaces")}</dt>
                <dd className="text-display-md mt-2">14</dd>
              </div>
              <div>
                <dt className="text-mono uppercase text-[var(--color-ink)]/60">{t("stats.responseTime")}</dt>
                <dd className="text-display-md mt-2">24h</dd>
              </div>
            </dl>
          </div>
        </Container>
      </section>
      <ServiceGrid />
      <BookingStrip />
    </>
  );
}
