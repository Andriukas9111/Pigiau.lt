import { Container } from "@/components/primitives/Container";
import { BeforeAfterSlider } from "@/components/sections/BeforeAfterSlider";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.work" });
  return pageMetadata({ title: t("title"), description: t("description"), path: "/work", locale });
}

export default async function WorkPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "work" });

  const all = services.flatMap((s) =>
    s.beforeAfter.map((p) => ({ ...p, service: s.i18nKey, serviceId: s.id })),
  );

  return (
    <>
      <section className="section-sm hairline-bottom">
        <Container>
          <h1 className="text-display-xl">{t("title")}</h1>
          <p className="text-body-lg text-[var(--color-ink)]/70 mt-6 max-w-xl">{t("lede")}</p>
        </Container>
      </section>
      <section className="section-md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {all.map((p, i) => (
              <BeforeAfterSlider
                key={`${p.serviceId}-${i}`}
                before={p.before}
                after={p.after}
                caption={`${p.location} · ${p.serviceId}`}
              />
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
