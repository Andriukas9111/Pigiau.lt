import { Container } from "@/components/primitives/Container";
import { LinkButton } from "@/components/primitives/LinkButton";
import { useTranslations } from "next-intl";

export function BookingStrip() {
  const t = useTranslations("home");
  const tCommon = useTranslations("common");

  return (
    <section className="surface-ink relative noise text-[var(--color-bone)]">
      <Container>
        <div className="section-sm grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-7">
            <h2 className="text-display-md">{t("bookingStripTitle")}</h2>
            <p className="text-body-lg text-[var(--color-bone)]/75 mt-4 max-w-xl">{t("bookingStripBody")}</p>
          </div>
          <div className="md:col-span-5 flex flex-col sm:flex-row gap-4 justify-end">
            <LinkButton href="/contact" variant="primary" size="lg">
              {tCommon("bookCall")}
            </LinkButton>
            <LinkButton
              href="/calculator"
              variant="secondary"
              size="lg"
              className="border-[var(--color-bone)] text-[var(--color-bone)] hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)]"
            >
              {tCommon("getEstimate")}
            </LinkButton>
          </div>
        </div>
      </Container>
    </section>
  );
}
