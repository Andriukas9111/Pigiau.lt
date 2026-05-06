"use client";

import { Button } from "@/components/primitives/Button";
import { Container } from "@/components/primitives/Container";
import { Field, Input } from "@/components/primitives/Input";
import { LinkButton } from "@/components/primitives/LinkButton";
import { NumberStepper } from "@/components/primitives/NumberStepper";
import { RadioCard } from "@/components/primitives/RadioCard";
import { BRAND } from "@/config/brand";
import { services } from "@/content/services";
import {
  ADDON_PRICE_PER_M2,
  type CalcAddons,
  type CalcCondition,
  type CalcLineKey,
  type CalcRegion,
  calc,
} from "@/lib/calc";
import { useTranslations } from "next-intl";
import { useMemo, useState } from "react";

const CONDITIONS: CalcCondition[] = ["light", "medium", "heavy"];
const REGIONS: CalcRegion[] = [
  "vilnius",
  "kaunas",
  "klaipeda",
  "siauliai",
  "panevezys",
  "alytus",
  "marijampole",
  "other",
];
const ADDON_KEYS = Object.keys(ADDON_PRICE_PER_M2) as (keyof typeof ADDON_PRICE_PER_M2)[];

export function CalculatorPanel() {
  const t = useTranslations("calculator");
  const tCommon = useTranslations("common");
  const tDetail = useTranslations("serviceDetail");

  const [serviceId, setServiceId] = useState(services[0].id);
  const [m2, setM2] = useState(80);
  const [condition, setCondition] = useState<CalcCondition>("light");
  const [addons, setAddons] = useState<CalcAddons>({});
  const [region, setRegion] = useState<CalcRegion>("vilnius");
  const [travelKm, setTravelKm] = useState(0);
  const [withVat, setWithVat] = useState(true);
  const [estimateOpen, setEstimateOpen] = useState(false);

  const result = useMemo(
    () => calc({ serviceId, m2, condition, addons, region, travelKm, withVat }),
    [serviceId, m2, condition, addons, region, travelKm, withVat],
  );

  const totalFmt = result.total.toLocaleString("lt-LT", { minimumFractionDigits: 2 });
  const subtotalFmt = result.subtotal.toLocaleString("lt-LT", { minimumFractionDigits: 2 });
  const vatFmt = result.vat.toLocaleString("lt-LT", { minimumFractionDigits: 2 });

  return (
    <Container>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
        <div className="lg:col-span-7 space-y-10">
          <Panel index="01" title={t("step.service")}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {services.map((s) => (
                <RadioCard
                  key={s.id}
                  selected={serviceId === s.id}
                  onSelect={() => setServiceId(s.id)}
                  title={tDetail(`${s.i18nKey}.title`)}
                  description={tDetail(`${s.i18nKey}.priceFrom`)}
                />
              ))}
            </div>
          </Panel>

          <Panel index="02" title={t("step.area")}>
            <NumberStepper value={m2} min={10} max={5000} step={10} onChange={setM2} unit="m²" />
            <input
              type="range"
              min={10}
              max={2000}
              step={10}
              value={m2}
              onChange={(e) => setM2(Number(e.target.value))}
              className="w-full mt-6"
              aria-label={t("step.area")}
            />
          </Panel>

          <Panel index="03" title={t("step.condition")}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {CONDITIONS.map((c) => (
                <RadioCard
                  key={c}
                  selected={condition === c}
                  onSelect={() => setCondition(c)}
                  title={t(`condition.${c}`)}
                  meta={c === "light" ? "×1" : c === "medium" ? "×1.2" : "×1.5"}
                />
              ))}
            </div>
          </Panel>

          <Panel index="04" title={t("step.addons")}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              {ADDON_KEYS.map((k) => (
                <label
                  key={k}
                  className={`hairline p-4 cursor-pointer flex items-start justify-between gap-4 ${
                    addons[k]
                      ? "bg-[var(--color-aqua-mist)] border-l-4 border-l-[var(--color-aqua-deep)]"
                      : "border-l-4 border-l-transparent"
                  }`}
                >
                  <span>
                    <span className="block text-body-md">{t(`addons.${k}`)}</span>
                    <span className="block text-mono text-[var(--color-ink)]/60 mt-1">
                      +{ADDON_PRICE_PER_M2[k].toFixed(2).replace(".", ",")} €/m²
                    </span>
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={!!addons[k]}
                    onChange={(e) => setAddons((a) => ({ ...a, [k]: e.target.checked }))}
                  />
                </label>
              ))}
              <label
                className={`hairline p-4 cursor-pointer flex items-start justify-between gap-4 col-span-1 md:col-span-2 ${
                  addons.rush48h
                    ? "bg-[var(--color-aqua-mist)] border-l-4 border-l-[var(--color-aqua-deep)]"
                    : "border-l-4 border-l-transparent"
                }`}
              >
                <span>
                  <span className="block text-body-md">{t("addons.rush48h")}</span>
                  <span className="block text-mono text-[var(--color-ink)]/60 mt-1">+15%</span>
                </span>
                <input
                  type="checkbox"
                  className="sr-only"
                  checked={!!addons.rush48h}
                  onChange={(e) => setAddons((a) => ({ ...a, rush48h: e.target.checked }))}
                />
              </label>
            </div>
          </Panel>

          <Panel index="05" title={t("step.region")}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
              {REGIONS.map((r) => (
                <RadioCard
                  key={r}
                  selected={region === r}
                  onSelect={() => setRegion(r)}
                  title={t(`region.${r}`)}
                />
              ))}
            </div>
            <div className="mt-6 grid gap-2">
              <span className="text-mono uppercase text-[var(--color-ink)]/60">{t("step.travel")}</span>
              <NumberStepper value={travelKm} min={0} max={500} step={5} onChange={setTravelKm} unit="km" />
            </div>
          </Panel>

          <Panel index="06" title={t("step.vat")}>
            <div className="flex gap-3">
              <RadioCard
                selected={withVat}
                onSelect={() => setWithVat(true)}
                title={tCommon("withVat")}
                meta="+21%"
              />
              <RadioCard selected={!withVat} onSelect={() => setWithVat(false)} title={tCommon("exVat")} />
            </div>
          </Panel>
        </div>

        <aside className="lg:col-span-5">
          <div className="lg:sticky lg:top-24 hairline bg-[var(--color-paper)] p-6 md:p-8 space-y-6">
            <div>
              <span className="text-mono uppercase text-[var(--color-ink)]/60">{t("summary.title")}</span>
              <div className="text-display-md tabular-nums mt-2">{totalFmt} €</div>
              <div className="text-body-sm text-[var(--color-ink)]/60">
                {t("summary.perM2")} {result.perM2Effective.toFixed(2).replace(".", ",")} €/m²
              </div>
            </div>
            <ul className="space-y-2 text-body-md">
              {result.lines.map((l) => (
                <li key={l.key} className="flex justify-between hairline-bottom py-2">
                  <span>{t(`lines.${l.key as CalcLineKey}`)}</span>
                  <span className="tabular-nums">{l.amount.toFixed(2).replace(".", ",")} €</span>
                </li>
              ))}
            </ul>
            <div className="text-body-sm text-[var(--color-ink)]/70 space-y-1">
              <div className="flex justify-between">
                <span>{t("summary.subtotal")}</span>
                <span className="tabular-nums">{subtotalFmt} €</span>
              </div>
              {withVat ? (
                <div className="flex justify-between">
                  <span>{t("summary.vat")}</span>
                  <span className="tabular-nums">{vatFmt} €</span>
                </div>
              ) : null}
            </div>
            <p className="text-body-sm text-[var(--color-ink)]/60">{t("summary.note")}</p>
            <div className="grid gap-3">
              <a
                href={`https://cal.com/${BRAND.cal.username}/${BRAND.cal.onSiteSlug}?notes=${encodeURIComponent(
                  `Service: ${serviceId} | Area: ${m2} m² | Total: ${totalFmt} €`,
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center h-12 px-6 bg-[var(--color-aqua)] text-[var(--color-ink)] hover:bg-[var(--color-aqua-deep)] hover:text-[var(--color-bone)] transition-colors"
              >
                {t("summary.ctaBook")}
              </a>
              <Button variant="secondary" onClick={() => setEstimateOpen((v) => !v)}>
                {t("summary.ctaEmail")}
              </Button>
            </div>
            {estimateOpen ? (
              <EstimateForm
                payload={{
                  serviceId,
                  m2,
                  condition,
                  addons,
                  region,
                  travelKm,
                  withVat,
                  total: result.total,
                }}
                onSent={() => setEstimateOpen(false)}
              />
            ) : null}
          </div>
        </aside>
      </div>
    </Container>
  );
}

function Panel({
  index,
  title,
  children,
}: {
  index: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="hairline-top pt-6">
      <div className="flex items-baseline gap-4 mb-5">
        <span className="text-mono text-[var(--color-ink)]/60">{index}</span>
        <h3 className="text-heading-lg">{title}</h3>
      </div>
      {children}
    </div>
  );
}

function EstimateForm({
  payload,
  onSent,
}: {
  payload: Record<string, unknown>;
  onSent: () => void;
}) {
  const t = useTranslations("calculator.estimate");
  const tErr = useTranslations("errors.validation");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email) {
      setError(tErr("required"));
      return;
    }
    setSending(true);
    setError(null);
    try {
      const res = await fetch("/api/estimate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, phone, message, payload }),
      });
      if (!res.ok) throw new Error("Submission failed");
      setSent(true);
      setTimeout(onSent, 2000);
    } catch {
      setError("error");
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="hairline p-4 bg-[var(--color-aqua-mist)]">
        <p className="text-heading-md">{t("sentTitle")}</p>
        <p className="text-body-sm text-[var(--color-ink)]/70 mt-1">{t("sentBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-4 hairline-top pt-4">
      <Field label={t("name")}>
        <Input value={name} onChange={(e) => setName(e.target.value)} required />
      </Field>
      <Field label={t("email")}>
        <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
      </Field>
      <Field label={t("phone")}>
        <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
      </Field>
      <Field label={t("message")}>
        <Input value={message} onChange={(e) => setMessage(e.target.value)} />
      </Field>
      {error ? <p className="text-body-sm text-[var(--color-danger)]">{error}</p> : null}
      <Button type="submit" disabled={sending} className="w-full">
        {t("send")}
      </Button>
    </form>
  );
}
