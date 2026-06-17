import { type Locale, tt } from "@/lib/i18n";
import { CALC_EXTRAS, CALC_SERVICES, CTYPES, SERVICES, SIZES, URGENCY } from "./data";

export const money = (n: number) => `€${n.toFixed(2)}`;

/* ----------------------------------------------------------- home calc --- */
export interface HomeState {
  service: number; // index into SERVICES
  weight: number; // kg
  steam: boolean;
  stain: boolean;
  express: boolean;
}
export function homeExtras(s: HomeState) {
  let e = 0;
  if (s.steam) e += 2;
  if (s.stain) e += 2.5;
  if (s.express) e += 3;
  return e;
}
export function homeTotal(s: HomeState) {
  const svc = SERVICES[s.service];
  const w = Math.max(0, s.weight - 5);
  return svc.price + w + homeExtras(s);
}

/* ------------------------------------------------- full price calculator --- */
export interface CalcState {
  service: number; // index into CALC_SERVICES
  type: string; // CTYPES key
  weight: number; // kg
  urgency: string; // URGENCY key
  extras: Record<string, boolean>; // keyed by CALC_EXTRAS.key
  pickup: boolean;
  bags: number;
  sets: number;
}
export interface LineItem {
  label: string;
  amount: number;
}
export function calcLineItems(s: CalcState, lang: Locale): LineItem[] {
  const tr = (en: string, lt: string) => (lang === "lt" ? lt : en);
  const svc = CALC_SERVICES[s.service];
  const type = CTYPES.find((t) => t.key === s.type) ?? CTYPES[0];
  const w = Math.max(0, s.weight - 5) * 1.2;
  const svcLine = (svc.base + w) * type.mult * s.bags;
  const items: LineItem[] = [
    { label: `${tt(svc.name, lang)} · ${s.weight}kg${s.bags > 1 ? ` ×${s.bags}` : ""}`, amount: svcLine },
  ];
  for (const e of CALC_EXTRAS) {
    if (s.extras[e.key]) items.push({ label: tt(e.name, lang), amount: e.price });
  }
  if (s.sets > 0)
    items.push({ label: `${tr("Bedding sets", "Patalynės komplektai")} ×${s.sets}`, amount: s.sets * 6 });
  const urg = URGENCY.find((u) => u.key === s.urgency) ?? URGENCY[0];
  if (urg.price > 0)
    items.push({ label: `${tr("Urgency", "Skubumas")}: ${tt(urg.name, lang)}`, amount: urg.price });
  items.push({ label: tr("Pickup & Delivery", "Paėmimas ir pristatymas"), amount: s.pickup ? 4.5 : 0 });
  return items;
}
export function calcTotal(s: CalcState) {
  return calcLineItems(s, "en").reduce((a, b) => a + b.amount, 0);
}

/* -------------------------------------------------------- booking total --- */
export interface BookingExtrasState {
  bHypo: boolean;
  bScent: boolean;
  bStain: boolean;
  bFold: boolean;
  bExpress: boolean;
}
export function bookingExtrasTotal(s: BookingExtrasState) {
  let e = 0;
  if (s.bHypo) e += 2;
  if (s.bScent) e += 1.5;
  if (s.bStain) e += 2.5;
  if (s.bFold) e += 2;
  if (s.bExpress) e += 6;
  return e;
}
export function bookingSubtotal(serviceIndex: number, sizeKey: string) {
  const svc = SERVICES[serviceIndex];
  const size = SIZES.find((z) => z.key === sizeKey) ?? SIZES[0];
  return svc.price + size.adj;
}
export function bookingTotal(serviceIndex: number, sizeKey: string, extras: BookingExtrasState) {
  return bookingSubtotal(serviceIndex, sizeKey) + bookingExtrasTotal(extras);
}
