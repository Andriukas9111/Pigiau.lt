"use client";

import { Icon } from "@/components/icons";
import { ExtraToggle, Field, Stepper, Switch, selectStyle } from "@/components/ui/Controls";
import { CALC_EXTRAS, CALC_SERVICES, CTYPES, URGENCY } from "@/lib/data";
import { type CalcState, calcLineItems, calcTotal, money } from "@/lib/pricing";
import { useState } from "react";

export function PriceCalculator() {
  const [s, setS] = useState<CalcState>({
    service: 0,
    type: "everyday",
    weight: 6,
    urgency: "standard",
    extras: { stain: true, hypo: false, scent: true, steam: false, eco: false },
    pickup: true,
    bags: 1,
    sets: 0,
  });
  const set = (patch: Partial<CalcState>) => setS((prev) => ({ ...prev, ...patch }));
  const toggleExtra = (k: string) =>
    setS((prev) => ({ ...prev, extras: { ...prev.extras, [k]: !prev.extras[k] } }));

  const items = calcLineItems(s);
  const total = calcTotal(s);

  return (
    <div
      className="nw-two"
      style={{ display: "grid", gridTemplateColumns: "1.3fr .85fr", gap: 22, alignItems: "start" }}
    >
      {/* form */}
      <div
        className="nw-pad"
        style={{
          background: "#fff",
          border: "1px solid #E9F1FB",
          borderRadius: 30,
          boxShadow: "0 14px 44px rgba(31,109,200,.07)",
          padding: 38,
        }}
      >
        <Field label="Service">
          <select
            value={s.service}
            onChange={(e) => set({ service: +e.target.value })}
            style={{ ...selectStyle, fontSize: 14.5, padding: 14, borderRadius: 13, marginBottom: 18 }}
          >
            {CALC_SERVICES.map((o, i) => (
              <option key={o.name} value={i}>
                {o.name}
              </option>
            ))}
          </select>
        </Field>

        <label
          className="fh"
          style={{ display: "block", fontWeight: 600, fontSize: 12.5, color: "#5B7194", marginBottom: 7 }}
        >
          Laundry type
        </label>
        <div
          className="nw-grid-4"
          style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 8, marginBottom: 18 }}
        >
          {CTYPES.map((t) => {
            const on = s.type === t.key;
            return (
              <button
                key={t.key}
                type="button"
                onClick={() => set({ type: t.key })}
                className="fh"
                style={{
                  fontWeight: 600,
                  fontSize: 12.5,
                  padding: "11px 4px",
                  borderRadius: 12,
                  cursor: "pointer",
                  border: `1.5px solid ${on ? "#1E8BE8" : "#DDEAF8"}`,
                  background: on ? "#EAF4FF" : "#fff",
                  color: on ? "#1E8BE8" : "#5B7194",
                }}
              >
                {t.name}
              </button>
            );
          })}
        </div>

        <label
          className="fh"
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontWeight: 600,
            fontSize: 12.5,
            color: "#5B7194",
            marginBottom: 8,
          }}
        >
          Weight
          <span style={{ color: "#1E8BE8", fontWeight: 800 }}>{s.weight} kg</span>
        </label>
        <input
          type="range"
          min={1}
          max={20}
          step={1}
          value={s.weight}
          onChange={(e) => set({ weight: +e.target.value })}
          aria-label="Weight in kilograms"
          style={{ width: "100%", cursor: "pointer" }}
        />
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            fontSize: 10,
            color: "#9DB4D2",
            margin: "5px 2px 18px",
            fontWeight: 600,
          }}
        >
          <span>1kg</span>
          <span>5kg</span>
          <span>10kg</span>
          <span>15kg</span>
          <span>20kg</span>
        </div>

        <label
          className="fh"
          style={{ display: "block", fontWeight: 600, fontSize: 12.5, color: "#5B7194", marginBottom: 8 }}
        >
          Urgency
        </label>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 8, marginBottom: 18 }}>
          {URGENCY.map((u) => {
            const on = s.urgency === u.key;
            return (
              <button
                key={u.key}
                type="button"
                onClick={() => set({ urgency: u.key })}
                className="fh"
                style={{
                  padding: "11px 6px",
                  borderRadius: 12,
                  cursor: "pointer",
                  border: `1.5px solid ${on ? "#1E8BE8" : "#DDEAF8"}`,
                  background: on ? "#EAF4FF" : "#fff",
                  color: on ? "#09245B" : "#5B7194",
                  textAlign: "center",
                }}
              >
                <div style={{ fontWeight: 700, fontSize: 12.5 }}>{u.name}</div>
                <div style={{ fontSize: 10.5, color: "#8AA0C0", marginTop: 2 }}>
                  {u.sub} · {u.price > 0 ? `+${money(u.price)}` : "Free"}
                </div>
              </button>
            );
          })}
        </div>

        <label
          className="fh"
          style={{ display: "block", fontWeight: 600, fontSize: 12.5, color: "#5B7194", marginBottom: 8 }}
        >
          Extras
        </label>
        <div
          className="nw-grid-2x"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 8, marginBottom: 18 }}
        >
          {CALC_EXTRAS.map((e) => (
            <ExtraToggle
              key={e.key}
              checked={!!s.extras[e.key]}
              label={e.name}
              price={`+${money(e.price)}`}
              onToggle={() => toggleExtra(e.key)}
              pad="11px 13px"
              box={20}
            />
          ))}
        </div>

        <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
          <button
            type="button"
            onClick={() => set({ pickup: !s.pickup })}
            className="fh"
            style={{
              flex: 1,
              minWidth: 200,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: 10,
              padding: "14px 16px",
              borderRadius: 14,
              border: `1.5px solid ${s.pickup ? "#1E8BE8" : "#E6EFFA"}`,
              background: s.pickup ? "#F3F9FF" : "#FbFdFF",
              cursor: "pointer",
            }}
          >
            <span style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <Icon name="truck" c="#1E8BE8" size={20} />
              <span style={{ textAlign: "left" }}>
                <b className="fh" style={{ display: "block", fontSize: 13, color: "#09245B" }}>
                  Pickup & Delivery
                </b>
                <span style={{ fontSize: 11, color: "#8AA0C0" }}>+€4.50 · or drop off free</span>
              </span>
            </span>
            <Switch on={s.pickup} />
          </button>
        </div>

        <div
          className="nw-grid-2c"
          style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginTop: 12 }}
        >
          <Stepper
            label="Bags"
            value={s.bags}
            onDec={() => set({ bags: Math.max(1, s.bags - 1) })}
            onInc={() => set({ bags: Math.min(9, s.bags + 1) })}
          />
          <Stepper
            label="Bedding sets"
            value={s.sets}
            onDec={() => set({ sets: Math.max(0, s.sets - 1) })}
            onInc={() => set({ sets: Math.min(9, s.sets + 1) })}
          />
        </div>
      </div>

      {/* live total */}
      <div
        style={{
          position: "relative",
          background: "radial-gradient(130% 120% at 80% 0%, #143a86 0%, #0a1f4d 65%)",
          borderRadius: 26,
          boxShadow: "0 18px 50px rgba(10,31,77,.28)",
          padding: 30,
          color: "#fff",
          overflow: "hidden",
        }}
      >
        <div
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage:
              "radial-gradient(1.5px 1.5px at 20% 20%,#fff,transparent),radial-gradient(1.5px 1.5px at 75% 35%,#bcd4ff,transparent),radial-gradient(1.5px 1.5px at 50% 80%,#9fc2f5,transparent)",
            opacity: 0.6,
          }}
        />
        <div style={{ position: "relative" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 20 }}>
            <div
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                background: "rgba(255,255,255,.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Icon name="basket" c="#B8F35A" size={26} sw={1.8} />
            </div>
            <div>
              <div className="fh" style={{ fontWeight: 800, fontSize: 15, letterSpacing: ".5px" }}>
                YOUR LIVE TOTAL
              </div>
              <div style={{ fontSize: 12, color: "#9Fc2f5" }}>Updates as you choose</div>
            </div>
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: 10, marginBottom: 18 }}>
            {items.map((li, i) => (
              <div
                key={i}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: 10,
                  fontSize: 13,
                  color: "#cfe0ff",
                }}
              >
                <span>{li.label}</span>
                <span style={{ fontWeight: 700, color: "#fff", whiteSpace: "nowrap" }}>
                  {money(li.amount)}
                </span>
              </div>
            ))}
          </div>

          <div
            style={{
              borderTop: "1px dashed rgba(255,255,255,.2)",
              paddingTop: 16,
              display: "flex",
              alignItems: "flex-end",
              justifyContent: "space-between",
              marginBottom: 18,
            }}
          >
            <span className="fh" style={{ fontWeight: 600, fontSize: 14, color: "#9Fc2f5" }}>
              Total
            </span>
            <span className="fh" style={{ fontWeight: 800, fontSize: 38, lineHeight: 1 }}>
              {money(total)}
            </span>
          </div>

          <a
            href="/booking"
            className="nw-btn-primary fh"
            style={{
              width: "100%",
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "#B8F35A",
              color: "#09245B",
              fontWeight: 800,
              fontSize: 14.5,
              padding: 16,
              borderRadius: 14,
              boxShadow: "0 10px 24px rgba(184,243,90,.35)",
              textDecoration: "none",
            }}
          >
            BOOK PICKUP
            <Icon name="arrow" c="#09245B" size={16} sw={2} />
          </a>
          <a
            href="/booking"
            className="fh"
            style={{
              width: "100%",
              marginTop: 10,
              display: "inline-flex",
              alignItems: "center",
              justifyContent: "center",
              gap: 8,
              background: "rgba(255,255,255,.08)",
              color: "#fff",
              fontWeight: 700,
              fontSize: 13.5,
              padding: 13,
              borderRadius: 14,
              border: "1.5px solid rgba(255,255,255,.18)",
              textDecoration: "none",
            }}
          >
            SAVE ESTIMATE
            <Icon name="save" c="#fff" size={15} sw={1.9} />
          </a>
          <div style={{ textAlign: "center", fontSize: 11, color: "#7E97C4", marginTop: 12 }}>
            First order? Use <b style={{ color: "#B8F35A" }}>HELLOEARTH</b> for 10% off.
          </div>
        </div>
      </div>
    </div>
  );
}
