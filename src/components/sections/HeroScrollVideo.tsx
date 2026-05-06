import { RevealText } from "@/components/motion/RevealText";
import { LinkButton } from "@/components/primitives/LinkButton";
import { BRAND } from "@/config/brand";
import { IMG } from "@/content/images";
import { getTranslations } from "next-intl/server";

export async function HeroScrollVideo() {
  const t = await getTranslations("home");
  const tCommon = await getTranslations("common");

  return (
    <section className="relative min-h-[92vh] overflow-hidden text-[var(--color-bone)]">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${IMG.hero})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        aria-hidden
      />
      <div
        aria-hidden
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(180deg, color-mix(in oklch, var(--color-ink) 35%, transparent) 0%, color-mix(in oklch, var(--color-ink) 65%, transparent) 50%, var(--color-ink) 100%)",
        }}
      />

      <div className="relative container-page flex flex-col justify-end min-h-[92vh] py-24 md:py-32 gap-12">
        <div className="flex items-center gap-3 text-mono uppercase tracking-wide text-[var(--color-bone)]/80">
          <span className="size-2 rounded-full bg-[var(--color-aqua)] inline-block" />
          {t("heroMeta")}
        </div>

        <div className="max-w-[24ch]">
          <RevealText
            as="h1"
            text={t("heroLine")}
            className="text-display-xl text-[var(--color-bone)]"
            amount={0.2}
          />
        </div>

        <p className="text-body-lg text-[var(--color-bone)]/85 max-w-2xl">{t("promise")}</p>

        <div className="flex flex-wrap gap-4">
          <LinkButton href="/calculator" variant="primary" size="lg">
            {tCommon("getEstimate")}
          </LinkButton>
          <LinkButton
            href="/work"
            variant="secondary"
            size="lg"
            className="border-[var(--color-bone)] text-[var(--color-bone)] hover:bg-[var(--color-bone)] hover:text-[var(--color-ink)]"
          >
            {t("workCta")}
          </LinkButton>
        </div>

        <div className="hairline-top border-[var(--color-bone)]/20 pt-6 mt-4 grid grid-cols-2 md:grid-cols-4 gap-6">
          <HeroStat label={t("stats.m2Title")} value="125 000" suffix={t("stats.m2Unit")} />
          <HeroStat label={t("stats.projectsTitle")} value="420+" />
          <HeroStat label={t("stats.ratingTitle")} value="4,9" suffix="/5" />
          <HeroStat label={tCommon("from")} value="1,30" suffix="€/m²" />
        </div>
      </div>
    </section>
  );
}

function HeroStat({ label, value, suffix }: { label: string; value: string; suffix?: string }) {
  return (
    <div>
      <div className="text-display-md tabular-nums text-[var(--color-bone)]">
        {value}
        {suffix ? <span className="text-heading-md text-[var(--color-bone)]/70 ml-1">{suffix}</span> : null}
      </div>
      <div className="text-body-sm text-[var(--color-bone)]/60 mt-1">{label}</div>
    </div>
  );
}
