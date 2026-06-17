"use client";

import { Illustration } from "@/components/illustrations";
import { ExtraToggle, Field, selectStyle } from "@/components/ui/Controls";
import { HOME_TYPES, SERVICES } from "@/lib/data";
import { type HomeState, homeTotal, money } from "@/lib/pricing";
import { useState } from "react";

const HOME_SERVICES = SERVICES.slice(0, 6);

export function HomeCalc() {
  const [s, setS] = useState<HomeState>({
    service: 0,
    weight: 5,
    steam: false,
    stain: false,
    express: false,
  });
  const [type, setType] = useState("mixed");

  return (
    <div>
      <div style={{ display: "flex", alignItems: "baseline", gap: 10, marginBottom: 18 }}>
        <div className="fh" style={{ fontWeight: 800, fontSize: 16, letterSpacing: "1px", color: "#1E8BE8" }}>
          INSTANT PRICE CALCULATOR
        </div>
        <span style={{ fontSize: 12.5, fontWeight: 600, color: "#9DB4D2", fontStyle: "italic" }}>
          Preview
        </span>
      </div>

      <div
        className="nw-grid-2c"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 12, marginBottom: 14 }}
      >
        <Field label="Service">
          <select
            value={s.service}
            onChange={(e) => setS({ ...s, service: +e.target.value })}
            style={selectStyle}
          >
            {HOME_SERVICES.map((o, i) => (
              <option key={o.key} value={i}>
                {o.title}
              </option>
            ))}
          </select>
        </Field>
        <Field label="Laundry Type">
          <select value={type} onChange={(e) => setType(e.target.value)} style={selectStyle}>
            {HOME_TYPES.map((t) => (
              <option key={t.key} value={t.key}>
                {t.name}
              </option>
            ))}
          </select>
        </Field>
      </div>

      <label
        className="fh"
        style={{
          display: "flex",
          justifyContent: "space-between",
          fontWeight: 600,
          fontSize: 12,
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
        max={15}
        step={1}
        value={s.weight}
        onChange={(e) => setS({ ...s, weight: +e.target.value })}
        aria-label="Weight in kilograms"
        style={{ width: "100%", cursor: "pointer", marginBottom: 16 }}
      />

      <div style={{ display: "flex", flexDirection: "column", gap: 8, marginBottom: 16 }}>
        <ExtraToggle
          checked={s.steam}
          label="Steam Finish"
          price="+€2.00"
          onToggle={() => setS({ ...s, steam: !s.steam })}
        />
        <ExtraToggle
          checked={s.stain}
          label="Stain Rescue"
          price="+€2.50"
          onToggle={() => setS({ ...s, stain: !s.stain })}
        />
        <ExtraToggle
          checked={s.express}
          label="Express (24h)"
          price="+€3.00"
          onToggle={() => setS({ ...s, express: !s.express })}
        />
      </div>

      <div
        style={{
          background: "linear-gradient(135deg,#EFF6FF,#E1EEFF)",
          border: "1px solid #D8E9FA",
          borderRadius: 16,
          padding: 18,
          display: "flex",
          alignItems: "center",
          gap: 14,
          flexWrap: "wrap",
          rowGap: 12,
        }}
      >
        <span style={{ width: 56, height: 56, flex: "none" }}>
          <Illustration name="basket" />
        </span>
        <div style={{ flex: 1, minWidth: 110 }}>
          <div style={{ fontSize: 11.5, color: "#7089AB", fontWeight: 600 }}>Estimated Total</div>
          <div className="fh" style={{ fontWeight: 800, fontSize: 30, lineHeight: 1.05, color: "#09245B" }}>
            {money(homeTotal(s))}
          </div>
        </div>
        <a
          href="/prices"
          className="nw-btn-primary fh"
          style={{
            background: "#B8F35A",
            color: "#09245B",
            fontWeight: 800,
            fontSize: 12.5,
            padding: "13px 16px",
            borderRadius: 12,
            whiteSpace: "nowrap",
            textDecoration: "none",
          }}
        >
          Full calculator →
        </a>
      </div>
    </div>
  );
}
