import { Container } from "@/components/primitives/Container";
import { LinkButton } from "@/components/primitives/LinkButton";
import { getTranslations } from "next-intl/server";

export default async function NotFound() {
  const t = await getTranslations("errors");
  return (
    <section className="section-md min-h-[70vh] flex items-center">
      <Container>
        <span className="text-mono uppercase text-[var(--color-ink)]/60">404</span>
        <h1 className="text-display-lg mt-4">{t("notFoundTitle")}</h1>
        <p className="text-body-lg text-[var(--color-ink)]/70 mt-4 max-w-xl">{t("notFoundBody")}</p>
        <div className="mt-8">
          <LinkButton href="/" variant="primary">
            {t("notFoundCta")}
          </LinkButton>
        </div>
      </Container>
    </section>
  );
}
