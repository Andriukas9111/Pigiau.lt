import { RevealBlock } from "@/components/motion/RevealBlock";
import { Container } from "@/components/primitives/Container";
import { processSteps } from "@/content/process";
import { useTranslations } from "next-intl";

export function ProcessTimeline() {
  const t = useTranslations("home");
  const tProcess = useTranslations("process");

  return (
    <section className="section-md surface-ink relative noise text-[var(--color-bone)]">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="text-mono uppercase text-[var(--color-bone)]/60">04 / Procesas</span>
            <h2 className="text-display-lg mt-2">{t("processTitle")}</h2>
            <p className="text-body-lg text-[var(--color-bone)]/70 mt-4 max-w-sm">{t("processLede")}</p>
          </div>
          <ol className="md:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-12">
            {processSteps.map((s) => (
              <RevealBlock key={s.i18nKey}>
                <li>
                  <div className="flex items-baseline gap-4 hairline-top border-[var(--color-bone)]/15 pt-5">
                    <span className="text-mono text-[var(--color-bone)]/60">
                      {String(s.index).padStart(2, "0")}
                    </span>
                    <h3 className="text-heading-lg">{tProcess(`${s.i18nKey}.title`)}</h3>
                  </div>
                  <p className="text-body-md text-[var(--color-bone)]/75 mt-3 max-w-md">
                    {tProcess(`${s.i18nKey}.body`)}
                  </p>
                </li>
              </RevealBlock>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
