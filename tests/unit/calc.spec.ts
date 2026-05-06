import { CONDITION_FACTOR, GRAFFITI_MIN, RUSH_MULTIPLIER, VAT_RATE, calc } from "@/lib/calc";
import { describe, expect, it } from "vitest";

const baseInput = {
  serviceId: "driveway-paver-cleaning",
  m2: 100,
  condition: "light" as const,
  addons: {},
  region: "vilnius" as const,
};

describe("calc", () => {
  it("uses tier pricing at boundary 50 m²", () => {
    const r = calc({ ...baseInput, m2: 50 });
    // 50 m² → 2.40 €/m² tier → 50 * 2.40 = 120
    expect(r.lines[0].amount).toBe(120);
  });

  it("uses next tier just past boundary 51 m²", () => {
    const r = calc({ ...baseInput, m2: 51 });
    // 51 m² → 1.80 €/m² tier → 51 * 1.80 = 91.80
    expect(r.lines[0].amount).toBeCloseTo(91.8, 2);
  });

  it("transitions tiers at 150 and 500 m²", () => {
    expect(calc({ ...baseInput, m2: 150 }).lines[0].amount).toBeCloseTo(150 * 1.8, 2);
    expect(calc({ ...baseInput, m2: 151 }).lines[0].amount).toBeCloseTo(151 * 1.5, 2);
    expect(calc({ ...baseInput, m2: 500 }).lines[0].amount).toBeCloseTo(500 * 1.5, 2);
    expect(calc({ ...baseInput, m2: 501 }).lines[0].amount).toBeCloseTo(501 * 1.3, 2);
  });

  it("applies condition multipliers", () => {
    const light = calc({ ...baseInput, condition: "light" }).lines[0].amount;
    const medium = calc({ ...baseInput, condition: "medium" }).lines[0].amount;
    const heavy = calc({ ...baseInput, condition: "heavy" }).lines[0].amount;
    expect(medium).toBeCloseTo(light * CONDITION_FACTOR.medium, 2);
    expect(heavy).toBeCloseTo(light * CONDITION_FACTOR.heavy, 2);
  });

  it("adds individual add-ons", () => {
    const r = calc({ ...baseInput, addons: { oilStains: true } });
    const oil = r.lines.find((l) => l.key === "oilStains");
    expect(oil?.amount).toBeCloseTo(0.8 * 100, 2);
  });

  it("enforces graffiti minimum", () => {
    const r = calc({ ...baseInput, m2: 10, addons: { graffiti: true } });
    const g = r.lines.find((l) => l.key === "graffiti");
    // 10 * 2.50 = 25 → bumped to 60
    expect(g?.amount).toBe(GRAFFITI_MIN);
  });

  it("applies rush surcharge to subtotal not just base", () => {
    const r = calc({ ...baseInput, addons: { oilStains: true, rush48h: true } });
    const base = r.lines.find((l) => l.key === "base")!.amount;
    const oil = r.lines.find((l) => l.key === "oilStains")!.amount;
    const rush = r.lines.find((l) => l.key === "rush")!.amount;
    expect(rush).toBeCloseTo((base + oil) * (RUSH_MULTIPLIER - 1), 2);
  });

  it("only charges travel beyond free radius", () => {
    expect(calc({ ...baseInput, travelKm: 25 }).lines.find((l) => l.key === "travel")).toBeUndefined();
    const r = calc({ ...baseInput, travelKm: 60 });
    const travel = r.lines.find((l) => l.key === "travel");
    expect(travel?.amount).toBeCloseTo(30 * 0.5, 2);
  });

  it("toggles VAT", () => {
    const noVat = calc({ ...baseInput, withVat: false });
    const withVat = calc({ ...baseInput, withVat: true });
    expect(noVat.vat).toBe(0);
    expect(noVat.total).toBe(noVat.subtotal);
    expect(withVat.total).toBeCloseTo(withVat.subtotal * (1 + VAT_RATE), 2);
  });

  it("tops up to minimum order when subtotal is short", () => {
    const r = calc({
      serviceId: "fence-cleaning",
      m2: 10,
      condition: "light",
      addons: {},
      region: "vilnius",
    });
    // base = 10 * 1.6 = 16, minimum = 60 → top up 44
    const topup = r.lines.find((l) => l.key === "minimumTopup");
    expect(topup?.amount).toBe(44);
    expect(r.subtotal).toBe(60);
  });

  it("everything-on smoke", () => {
    const r = calc({
      serviceId: "driveway-paver-cleaning",
      m2: 200,
      condition: "heavy",
      addons: {
        oilStains: true,
        mossHeavy: true,
        graffiti: true,
        jointFillSand: true,
        sealClear: true,
        saltNeutralise: true,
        rush48h: true,
      },
      region: "kaunas",
      travelKm: 100,
      withVat: true,
    });
    expect(r.total).toBeGreaterThan(0);
    expect(r.lines.length).toBeGreaterThan(5);
    expect(r.vat).toBeCloseTo(r.subtotal * VAT_RATE, 2);
  });

  it("throws on unknown service", () => {
    expect(() => calc({ ...baseInput, serviceId: "no-such" })).toThrow();
  });

  it("throws on non-positive m2", () => {
    expect(() => calc({ ...baseInput, m2: 0 })).toThrow();
  });
});
