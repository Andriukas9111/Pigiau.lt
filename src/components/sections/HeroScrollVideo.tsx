"use client";

import { RevealText } from "@/components/motion/RevealText";
import { BRAND } from "@/config/brand";
import { useTranslations } from "next-intl";

// While the AVIF frame sequence under public/hero-video/ doesn't yet exist,
// render a tall static hero with the headline. Once the frames are in place
// swap the inner content for <ScrollVideo /> from components/motion/ScrollVideo.
export function HeroScrollVideo() {
  const t = useTranslations("home");
  return (
    <section className="relative min-h-[88vh] surface-ink overflow-hidden text-[var(--color-bone)] noise">
      {/* Subtle radial gradient backdrop in lieu of the real video */}
      <div
        aria-hidden
        className="absolute inset-0 opacity-80"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 110%, var(--color-aqua-deep) 0%, transparent 55%), radial-gradient(80% 60% at 10% 0%, color-mix(in oklch, var(--color-aqua) 30%, transparent) 0%, transparent 70%)",
        }}
      />
      <div className="relative h-full min-h-[88vh] container-page flex flex-col justify-between py-24 md:py-32">
        <div className="text-mono uppercase tracking-wide text-[var(--color-bone)]/70">{t("heroMeta")}</div>
        <div className="max-w-[22ch] mt-auto">
          <RevealText
            as="h1"
            text={t("heroLine")}
            className="text-display-xl text-[var(--color-bone)]"
            amount={0.2}
          />
        </div>
        <div className="mt-12 flex items-end justify-between text-mono uppercase tracking-wide text-[var(--color-bone)]/70">
          <span>{t("heroScrollHint")}</span>
          <a href={`tel:${BRAND.phoneE164}`} className="hover:text-[var(--color-bone)]">
            {BRAND.phoneHuman}
          </a>
        </div>
      </div>
    </section>
  );
}
