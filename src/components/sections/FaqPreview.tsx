import { Accordion, AccordionItem } from "@/components/primitives/Accordion";
import { Container } from "@/components/primitives/Container";
import { LinkButton } from "@/components/primitives/LinkButton";
import { faqItems } from "@/content/faq";
import { useTranslations } from "next-intl";

export function FaqPreview() {
  const t = useTranslations("home");
  const tFaq = useTranslations("faq");
  const top = faqItems.slice(0, 5);

  return (
    <section className="section-md hairline-top">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="text-mono uppercase text-[var(--color-ink)]/60">08 / D.U.K</span>
            <h2 className="text-display-lg mt-2">{t("faqPreviewTitle")}</h2>
            <LinkButton href="/faq" variant="ghost" size="md" className="mt-6 px-0">
              {t("faqPreviewCta")} →
            </LinkButton>
          </div>
          <div className="md:col-span-8">
            <Accordion>
              {top.map((item, i) => (
                <AccordionItem key={item.id} question={tFaq(`items.${item.i18nKey}.q`)} defaultOpen={i === 0}>
                  {tFaq(`items.${item.i18nKey}.a`)}
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </Container>
    </section>
  );
}
