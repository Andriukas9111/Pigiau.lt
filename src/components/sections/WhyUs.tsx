import { RevealBlock } from "@/components/motion/RevealBlock";
import { Container } from "@/components/primitives/Container";
import { useTranslations } from "next-intl";

const items = [
  { key: "guarantee", icon: ShieldIcon },
  { key: "insured", icon: BadgeIcon },
  { key: "equipment", icon: PressureIcon },
  { key: "response", icon: BoltIcon },
] as const;

export function WhyUs() {
  const t = useTranslations("home");
  return (
    <section className="section-md hairline-top">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 mb-12">
          <div className="md:col-span-4">
            <span className="text-mono uppercase text-[var(--color-ink)]/60">09 / Pasitikėjimas</span>
            <h2 className="text-display-lg mt-2">{t("whyTitle")}</h2>
          </div>
          <p className="md:col-span-7 md:col-start-6 text-body-lg text-[var(--color-ink)]/75 self-end">
            {t("whyLede")}
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {items.map(({ key, icon: Icon }, i) => (
            <RevealBlock key={key} delay={i * 0.05}>
              <div className="hairline-top pt-6 flex flex-col gap-4 h-full">
                <Icon />
                <h3 className="text-heading-lg">{t(`why.${key}Title`)}</h3>
                <p className="text-body-md text-[var(--color-ink)]/70">{t(`why.${key}Body`)}</p>
              </div>
            </RevealBlock>
          ))}
        </div>
      </Container>
    </section>
  );
}

function ShieldIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width={36}
      height={36}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="text-[var(--color-aqua-deep)]"
    >
      <path d="M24 6 8 12v12c0 9 7 16 16 18 9-2 16-9 16-18V12L24 6Z" />
      <path d="m17 24 5 5 9-10" />
    </svg>
  );
}
function BadgeIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width={36}
      height={36}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="text-[var(--color-aqua-deep)]"
    >
      <circle cx="24" cy="20" r="12" />
      <path d="m17 28-3 14 10-6 10 6-3-14" />
    </svg>
  );
}
function PressureIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width={36}
      height={36}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="text-[var(--color-aqua-deep)]"
    >
      <path d="M10 30h10v8H10z" />
      <path d="M20 34h10l8-14M30 20l-2-6h6l2 6" />
      <circle cx="14" cy="20" r="6" />
    </svg>
  );
}
function BoltIcon() {
  return (
    <svg
      viewBox="0 0 48 48"
      width={36}
      height={36}
      fill="none"
      stroke="currentColor"
      strokeWidth={1.5}
      className="text-[var(--color-aqua-deep)]"
    >
      <path d="m26 4-16 24h12l-2 16 16-24H24l2-16Z" />
    </svg>
  );
}
