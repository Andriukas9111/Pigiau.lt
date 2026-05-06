import { Container } from "@/components/primitives/Container";
import { LinkButton } from "@/components/primitives/LinkButton";
import { pageMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.about" });
  return pageMetadata({ title: t("title"), description: t("description"), path: "/about", locale });
}

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "about" });
  const tCommon = await getTranslations({ locale, namespace: "common" });

  return (
    <>
      <section className="section-md hairline-bottom">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <h1 className="md:col-span-4 text-display-lg">{t("title")}</h1>
            <p className="md:col-span-8 text-display-md text-pretty">{t("lede")}</p>
          </div>
        </Container>
      </section>

      <section className="section-md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <h2 className="md:col-span-4 text-heading-lg">{t("storyTitle")}</h2>
            <div className="md:col-span-8 grid md:grid-cols-2 gap-8 text-body-lg text-[var(--color-ink)]/85">
              <p>{t("story")}</p>
              <p className="hairline-top md:hairline-top md:border-t-0 pt-6 md:pt-0 md:border-l md:border-[var(--color-ink)]/15 md:pl-8">
                {t("equipmentLede")}
              </p>
            </div>
          </div>
        </Container>
      </section>

      <section className="section-md surface-paper hairline-top hairline-bottom">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
            <h2 className="md:col-span-4 text-heading-lg">{t("certificationsTitle")}</h2>
            <p className="md:col-span-8 text-body-lg text-[var(--color-ink)]/85">{t("certificationsLede")}</p>
          </div>
        </Container>
      </section>

      <section className="section-md">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
            <div className="md:col-span-7">
              <h2 className="text-display-md">{t("ctaTitle")}</h2>
              <p className="text-body-lg text-[var(--color-ink)]/70 mt-4 max-w-xl">{t("ctaBody")}</p>
            </div>
            <div className="md:col-span-5 flex justify-start md:justify-end">
              <LinkButton href="/contact" variant="primary" size="lg">
                {tCommon("bookCall")}
              </LinkButton>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
