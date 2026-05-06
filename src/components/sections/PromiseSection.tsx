import { RevealBlock } from "@/components/motion/RevealBlock";
import { RevealText } from "@/components/motion/RevealText";
import { Container } from "@/components/primitives/Container";
import { AVERAGE_RATING, M2_THIS_YEAR, PROJECTS_COMPLETED } from "@/config/brand";
import { useTranslations } from "next-intl";

export function PromiseSection() {
  const t = useTranslations("home");
  return (
    <section className="section-md surface-paper hairline-top hairline-bottom">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-2 md:pt-3">
            <span className="text-mono uppercase text-[var(--color-ink)]/60">01 / Pradžia</span>
          </div>
          <div className="md:col-span-9">
            <RevealText as="p" text={t("promise")} className="text-display-md text-pretty" />
            <RevealBlock className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <Stat
                label={t("stats.m2Title")}
                value={M2_THIS_YEAR}
                unit={t("stats.m2Unit")}
                placeholder={t("stats.valuePending")}
              />
              <Stat
                label={t("stats.projectsTitle")}
                value={PROJECTS_COMPLETED}
                placeholder={t("stats.valuePending")}
              />
              <Stat
                label={t("stats.ratingTitle")}
                value={AVERAGE_RATING}
                placeholder={t("stats.valuePending")}
              />
            </RevealBlock>
          </div>
        </div>
      </Container>
    </section>
  );
}

function Stat({
  label,
  value,
  unit,
  placeholder,
}: {
  label: string;
  value: number | null;
  unit?: string;
  placeholder: string;
}) {
  return (
    <div className="hairline-top pt-6">
      <div className="text-display-md tabular-nums">
        {value !== null ? value.toLocaleString("lt-LT") : placeholder}
        {unit && value !== null ? <span className="text-heading-md ml-1">{unit}</span> : null}
      </div>
      <div className="text-body-sm text-[var(--color-ink)]/60 mt-2">{label}</div>
    </div>
  );
}
