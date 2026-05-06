import { Accordion, AccordionItem } from "@/components/primitives/Accordion";
import { Container } from "@/components/primitives/Container";
import { JsonLd, faqLd } from "@/components/seo/JsonLd";
import { type FaqGroupKey, faqItems } from "@/content/faq";
import { pageMetadata } from "@/lib/seo";
import { getTranslations, setRequestLocale } from "next-intl/server";

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "seo.faq" });
  return pageMetadata({ title: t("title"), description: t("description"), path: "/faq", locale });
}

const ORDER: FaqGroupKey[] = ["services", "pricing", "process", "payment", "warranty"];

export default async function FaqPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations({ locale, namespace: "faq" });

  const all = faqItems.map((it) => ({
    ...it,
    q: t(`items.${it.i18nKey}.q`),
    a: t(`items.${it.i18nKey}.a`),
  }));

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
          <div className="space-y-20">
            {ORDER.map((g) => {
              const items = all.filter((i) => i.group === g);
              if (items.length === 0) return null;
              return (
                <div key={g} className="grid grid-cols-1 md:grid-cols-12 gap-10">
                  <h2 className="md:col-span-4 text-display-md">{t(`groups.${g}`)}</h2>
                  <div className="md:col-span-8">
                    <Accordion>
                      {items.map((it) => (
                        <AccordionItem key={it.id} question={it.q}>
                          {it.a}
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
              );
            })}
          </div>
        </Container>
      </section>
      <JsonLd data={faqLd(all.map((it) => ({ question: it.q, answer: it.a })))} />
    </>
  );
}
