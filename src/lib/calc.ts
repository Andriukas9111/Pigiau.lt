import { services } from "@/content/services";

export type CalcCondition = "light" | "medium" | "heavy";

export type CalcAddons = {
  oilStains?: boolean;
  mossHeavy?: boolean;
  graffiti?: boolean;
  jointFillSand?: boolean;
  jointFillGranite?: boolean;
  sealClear?: boolean;
  sealColour?: boolean;
  saltNeutralise?: boolean;
  rush48h?: boolean;
};

export type CalcRegion =
  | "vilnius"
  | "kaunas"
  | "klaipeda"
  | "siauliai"
  | "panevezys"
  | "alytus"
  | "marijampole"
  | "other";

export type CalcInput = {
  serviceId: string;
  surface?: string;
  m2: number;
  condition: CalcCondition;
  addons: CalcAddons;
  region: CalcRegion;
  travelKm?: number;
  withVat?: boolean;
};

export type CalcLineKey =
  | "base"
  | "oilStains"
  | "mossHeavy"
  | "graffiti"
  | "jointFillSand"
  | "jointFillGranite"
  | "sealClear"
  | "sealColour"
  | "saltNeutralise"
  | "travel"
  | "minimumTopup"
  | "rush";

export type CalcLine = { key: CalcLineKey; amount: number };

export type CalcResult = {
  lines: CalcLine[];
  subtotal: number;
  vat: number;
  total: number;
  perM2Effective: number;
};

export const CONDITION_FACTOR: Record<CalcCondition, number> = {
  light: 1.0,
  medium: 1.2,
  heavy: 1.5,
};

export const ADDON_PRICE_PER_M2 = {
  oilStains: 0.8,
  mossHeavy: 0.4,
  graffiti: 2.5,
  jointFillSand: 0.6,
  jointFillGranite: 1.2,
  sealClear: 2.0,
  sealColour: 3.0,
  saltNeutralise: 0.5,
} as const;

export const GRAFFITI_MIN = 60;
export const TRAVEL_FREE_KM = 30;
export const TRAVEL_PER_KM = 0.5;
export const RUSH_MULTIPLIER = 1.15;
export const VAT_RATE = 0.21;

const round = (n: number) => Math.round(n * 100) / 100;

export function calc(input: CalcInput): CalcResult {
  const svc = services.find((s) => s.id === input.serviceId);
  if (!svc) throw new Error(`Unknown service ${input.serviceId}`);
  if (input.m2 <= 0) throw new Error("m2 must be positive");

  const tier = svc.pricingTiers?.find((t) => input.m2 <= t.upTo) ?? {
    upTo: Number.POSITIVE_INFINITY,
    pricePerM2: svc.basePricePerM2,
  };
  const base = tier.pricePerM2 * input.m2 * CONDITION_FACTOR[input.condition];

  const lines: CalcLine[] = [{ key: "base", amount: round(base) }];

  for (const [key, price] of Object.entries(ADDON_PRICE_PER_M2) as [
    keyof typeof ADDON_PRICE_PER_M2,
    number,
  ][]) {
    if (input.addons[key]) {
      let amount = price * input.m2;
      if (key === "graffiti") amount = Math.max(amount, GRAFFITI_MIN);
      lines.push({ key, amount: round(amount) });
    }
  }

  if (input.travelKm && input.travelKm > TRAVEL_FREE_KM) {
    const travel = (input.travelKm - TRAVEL_FREE_KM) * TRAVEL_PER_KM;
    lines.push({ key: "travel", amount: round(travel) });
  }

  let subtotal = lines.reduce((sum, l) => sum + l.amount, 0);

  if (subtotal < svc.minimumOrder) {
    const topup = svc.minimumOrder - subtotal;
    lines.push({ key: "minimumTopup", amount: round(topup) });
    subtotal = svc.minimumOrder;
  }

  if (input.addons.rush48h) {
    const rush = subtotal * (RUSH_MULTIPLIER - 1);
    lines.push({ key: "rush", amount: round(rush) });
    subtotal += rush;
  }

  const vat = input.withVat ? subtotal * VAT_RATE : 0;
  const total = subtotal + vat;

  return {
    lines: lines.map((l) => ({ ...l, amount: round(l.amount) })),
    subtotal: round(subtotal),
    vat: round(vat),
    total: round(total),
    perM2Effective: round(total / input.m2),
  };
}
