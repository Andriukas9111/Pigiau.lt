"use client";

import { RevealText } from "@/components/motion/RevealText";
import { ScrollVideo } from "@/components/motion/ScrollVideo";
import { BRAND } from "@/config/brand";
import { useTranslations } from "next-intl";

export function HeroScrollVideo() {
  const t = useTranslations("home");
  return (
    <section className="relative">
      <ScrollVideo framesBase="/hero-video/desktop" totalFrames={180} posterIndex={90} format="avif" />
      <div className="pointer-events-none absolute inset-0 flex flex-col justify-end pb-16 md:pb-24">
        <div className="container-page">
          <div className="max-w-[20ch]">
            <RevealText
              as="h1"
              text={t("heroLine")}
              className="text-display-xl text-[var(--color-bone)] mix-blend-difference"
              amount={0.2}
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-6 left-6 right-6 md:left-16 md:right-16 flex items-end justify-between text-mono uppercase text-[var(--color-bone)] mix-blend-difference">
        <span>{t("heroMeta")}</span>
        <span>{BRAND.phoneHuman}</span>
      </div>
    </section>
  );
}
