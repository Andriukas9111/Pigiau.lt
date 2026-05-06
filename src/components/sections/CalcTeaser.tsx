"use client";

import { Container } from "@/components/primitives/Container";
import { LinkButton } from "@/components/primitives/LinkButton";
import { NumberStepper } from "@/components/primitives/NumberStepper";
import { services } from "@/content/services";
import { calc } from "@/lib/calc";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function CalcTeaser() {
  const t = useTranslations("home");
  const tc = useTranslations("calculator");
  const tDetail = useTranslations("serviceDetail");
  const [serviceId, setServiceId] = useState(services[0].id);
  const [m2, setM2] = useState(80);

  const result = calc({
    serviceId,
    m2,
    condition: "light",
    addons: {},
    region: "vilnius",
    withVat: true,
  });

  return (
    <section className="section-md">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-end">
          <div className="md:col-span-5">
            <span className="text-mono uppercase text-[var(--color-ink)]/60">07 / Kaina</span>
            <h2 className="text-display-lg mt-2">{t("calcTeaserTitle")}</h2>
            <p className="text-body-lg text-[var(--color-ink)]/70 mt-4 max-w-sm">{t("calcTeaserBody")}</p>
          </div>
          <div className="md:col-span-7 hairline bg-[var(--color-paper)] p-6 md:p-8 grid gap-6">
            <label className="grid gap-2">
              <span className="text-mono uppercase text-[var(--color-ink)]/60">{tc("step.service")}</span>
              <select
                className="w-full bg-transparent border-b border-[var(--color-ink)]/20 py-3 text-body-md outline-none"
                value={serviceId}
                onChange={(e) => setServiceId(e.target.value)}
              >
                {services.map((s) => (
                  <option key={s.id} value={s.id}>
                    {tDetail(`${s.i18nKey}.title`)}
                  </option>
                ))}
              </select>
            </label>
            <div className="grid gap-2">
              <span className="text-mono uppercase text-[var(--color-ink)]/60">
                {tc("step.area")} ({tc("step.areaUnit")})
              </span>
              <NumberStepper value={m2} min={10} max={2000} step={10} onChange={setM2} unit="m²" />
            </div>
            <div className="hairline-top pt-6 flex items-end justify-between gap-4">
              <div>
                <div className="text-mono uppercase text-[var(--color-ink)]/60">{tc("summary.total")}</div>
                <div className="text-display-md tabular-nums">
                  {result.total.toLocaleString("lt-LT", { minimumFractionDigits: 2 })} €
                </div>
              </div>
              <LinkButton href="/calculator" variant="primary" size="md">
                {t("calcTeaserCta")}
              </LinkButton>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
