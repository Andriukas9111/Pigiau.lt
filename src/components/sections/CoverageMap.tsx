"use client";

import { Container } from "@/components/primitives/Container";
import { regions } from "@/content/coverage";
import { ease } from "@/lib/motion";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export function CoverageMap() {
  const t = useTranslations("home");
  const locale = useLocale() as "lt" | "ru" | "en";

  const cities = regions.flatMap((r) => r.cities).slice(0, 24);

  return (
    <section className="section-md hairline-top">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-5">
            <span className="text-mono uppercase text-[var(--color-ink)]/60">05 / Aprėptis</span>
            <h2 className="text-display-lg mt-2">{t("coverageTitle")}</h2>
            <p className="text-body-lg text-[var(--color-ink)]/70 mt-4 max-w-sm">{t("coverageLede")}</p>
          </div>
          <div className="md:col-span-7">
            {/* Schematic Lithuania placeholder map: 10 region tiles. */}
            <div className="grid grid-cols-3 sm:grid-cols-5 gap-2">
              {regions.map((r, i) => {
                const name = locale === "ru" ? r.nameRu : locale === "en" ? r.nameEn : r.nameLt;
                return (
                  <motion.div
                    key={r.id}
                    initial={{ opacity: 0, backgroundColor: "var(--color-mist)" }}
                    whileInView={{ opacity: 1, backgroundColor: "var(--color-aqua-mist)" }}
                    viewport={{ once: true, amount: 0.5 }}
                    transition={{ duration: 0.5, ease: ease.out, delay: i * 0.06 }}
                    className="hairline aspect-square p-3 flex flex-col justify-between"
                  >
                    <span className="text-mono text-[var(--color-ink)]/60">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="text-body-sm leading-tight">{name}</span>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
        <div className="mt-12 hairline-top pt-8 flex flex-wrap gap-2">
          {cities.map((c) => (
            <span key={c} className="text-body-sm hairline px-3 py-1 bg-[var(--color-paper)]">
              {c}
            </span>
          ))}
        </div>
      </Container>
    </section>
  );
}
