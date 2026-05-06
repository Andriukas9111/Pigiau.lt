import { RevealBlock } from "@/components/motion/RevealBlock";
import { Container } from "@/components/primitives/Container";
import { testimonials } from "@/content/testimonials";
import { useLocale, useTranslations } from "next-intl";

export function TestimonialsRow() {
  const t = useTranslations("home");
  const locale = useLocale() as "lt" | "ru" | "en";

  return (
    <section className="section-md">
      <Container>
        <div className="mb-12">
          <span className="text-mono uppercase text-[var(--color-ink)]/60">06 / Atsiliepimai</span>
          <h2 className="text-display-lg mt-2">{t("testimonialsTitle")}</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((q) => {
            const text = locale === "ru" ? q.quoteRu : locale === "en" ? q.quoteEn : q.quoteLt;
            return (
              <RevealBlock key={q.id} className="hairline p-8 bg-[var(--color-paper)] flex flex-col">
                <p className="text-body-lg text-pretty">“{text}”</p>
                <div className="hairline-top pt-4 mt-auto flex justify-between text-body-sm text-[var(--color-ink)]/70">
                  <span>
                    {q.author}, {q.city}
                  </span>
                  <span className="text-mono">
                    {q.service} · {q.date}
                  </span>
                </div>
              </RevealBlock>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
