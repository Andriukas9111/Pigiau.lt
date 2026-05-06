import { Container } from "@/components/primitives/Container";
import { LinkButton } from "@/components/primitives/LinkButton";
import { services } from "@/content/services";
import { useTranslations } from "next-intl";
import { BeforeAfterSlider } from "./BeforeAfterSlider";

export function SignatureWork() {
  const t = useTranslations("home");
  const project = services[0].beforeAfter[0];

  return (
    <section className="section-md surface-paper hairline-top">
      <Container>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-mono uppercase text-[var(--color-ink)]/60">03 / Darbai</span>
            <h2 className="text-display-lg mt-2">{t("workTitle")}</h2>
          </div>
          <LinkButton href="/work" variant="secondary" size="md">
            {t("workCta")}
          </LinkButton>
        </div>
        <BeforeAfterSlider before={project.before} after={project.after} caption={project.location} />
      </Container>
    </section>
  );
}
