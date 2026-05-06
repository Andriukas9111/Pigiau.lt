"use client";

import { ArrowRightIcon } from "@/components/icons";
import type { Service } from "@/content/services";
import { Link } from "@/i18n/navigation";
import { ease } from "@/lib/motion";
import { motion } from "framer-motion";
import { useLocale, useTranslations } from "next-intl";

export function ServiceCard({ service, index }: { service: Service; index: number }) {
  const tDetail = useTranslations(`serviceDetail.${service.i18nKey}`);
  const tCommon = useTranslations("common");
  const tCat = useTranslations("services");
  const locale = useLocale() as "lt" | "ru" | "en";

  const categoryLabel =
    service.category === "residential"
      ? tCat("filterResidential")
      : service.category === "commercial"
        ? tCat("filterCommercial")
        : tCat("filterIndustrial");

  return (
    <motion.div
      initial={{ opacity: 0, y: 24, filter: "blur(2px)" }}
      whileInView={{ opacity: 1, y: 0, filter: "blur(0)" }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ duration: 0.6, ease: ease.out, delay: index * 0.05 }}
      className="group hairline bg-[var(--color-paper)] flex flex-col"
    >
      <Link
        href={{ pathname: "/services/[slug]", params: { slug: service.slugs[locale] } }}
        className="block"
      >
        <div className="relative aspect-[16/11] overflow-hidden bg-[var(--color-mist)]">
          <div
            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ backgroundImage: `url(${service.hero.src})` }}
            aria-hidden
          />
        </div>
        <div className="p-6 flex flex-col gap-3">
          <div className="text-mono uppercase text-[var(--color-ink)]/60">
            #{String(index + 1).padStart(2, "0")} · {categoryLabel}
          </div>
          <h3 className="text-heading-lg">{tDetail("title")}</h3>
          <div className="text-body-md text-[var(--color-ink)]/70">
            {tCommon("from")}{" "}
            {(service.pricingTiers?.[service.pricingTiers.length - 1].pricePerM2 ?? service.basePricePerM2)
              .toFixed(2)
              .replace(".", ",")}{" "}
            €/m²
          </div>
          <div className="hairline-top pt-4 mt-2 flex items-center justify-between">
            <span className="text-body-sm">{tCat("card.moreInfo")}</span>
            <ArrowRightIcon className="transition-transform duration-300 group-hover:translate-x-2" />
          </div>
        </div>
      </Link>
    </motion.div>
  );
}
