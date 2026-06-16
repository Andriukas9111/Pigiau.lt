"use client";

import type { CSSProperties } from "react";

/** Checkbox-style extra toggle used by all three calculators. */
export function ExtraToggle({
  checked,
  label,
  price,
  onToggle,
  pad = "10px 13px",
  box = 19,
}: {
  checked: boolean;
  label: string;
  price: string;
  onToggle: () => void;
  pad?: string;
  box?: number;
}) {
  return (
    <button
      type="button"
      onClick={onToggle}
      aria-pressed={checked}
      className="fh"
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 8,
        padding: pad,
        borderRadius: 12,
        border: `1.5px solid ${checked ? "#1E8BE8" : "#E6EFFA"}`,
        background: checked ? "#F3F9FF" : "#FbFdFF",
        cursor: "pointer",
        width: "100%",
        textAlign: "left",
      }}
    >
      <span
        style={{
          display: "flex",
          alignItems: "center",
          gap: 9,
          fontWeight: 600,
          fontSize: 13,
          color: "#09245B",
        }}
      >
        <span
          style={{
            width: box,
            height: box,
            borderRadius: 6,
            border: `1.5px solid ${checked ? "#1E8BE8" : "#CFDDEE"}`,
            background: checked ? "#1E8BE8" : "#fff",
            display: "inline-flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#fff",
            fontSize: 12,
            flex: "none",
          }}
        >
          {checked ? "✓" : ""}
        </span>
        {label}
      </span>
      <span style={{ fontWeight: 700, fontSize: 12.5, color: "#1E8BE8", whiteSpace: "nowrap" }}>{price}</span>
    </button>
  );
}

/** −/value/+ stepper for bags & bedding sets. */
export function Stepper({
  label,
  value,
  onDec,
  onInc,
}: {
  label: string;
  value: number;
  onDec: () => void;
  onInc: () => void;
}) {
  const btn: CSSProperties = {
    width: 28,
    height: 28,
    borderRadius: 8,
    border: "1.5px solid #DDEAF8",
    background: "#fff",
    cursor: "pointer",
    fontSize: 16,
    color: "#1E8BE8",
    fontWeight: 700,
    lineHeight: 1,
  };
  return (
    <div
      style={{
        border: "1.5px solid #E6EFFA",
        borderRadius: 14,
        padding: "12px 14px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <span className="fh" style={{ fontWeight: 600, fontSize: 12.5, color: "#5B7194" }}>
        {label}
      </span>
      <span style={{ display: "flex", alignItems: "center", gap: 12 }}>
        <button type="button" aria-label={`Decrease ${label}`} onClick={onDec} style={btn}>
          −
        </button>
        <b className="fh" style={{ fontSize: 15, color: "#09245B", minWidth: 14, textAlign: "center" }}>
          {value}
        </b>
        <button type="button" aria-label={`Increase ${label}`} onClick={onInc} style={btn}>
          +
        </button>
      </span>
    </div>
  );
}

/** Pill toggle switch. */
export function Switch({ on }: { on: boolean }) {
  return (
    <span
      style={{
        width: 42,
        height: 24,
        borderRadius: 99,
        background: on ? "#1E8BE8" : "#CFDDEE",
        position: "relative",
        flex: "none",
        transition: "background .2s",
      }}
    >
      <span
        style={{
          position: "absolute",
          top: 2,
          left: on ? 20 : 2,
          width: 20,
          height: 20,
          borderRadius: "50%",
          background: "#fff",
          boxShadow: "0 1px 3px rgba(0,0,0,.2)",
          transition: "left .2s",
        }}
      />
    </span>
  );
}

/** Label + select wrapper. */
export function Field({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div>
      <label
        className="fh"
        style={{ display: "block", fontWeight: 600, fontSize: 12, color: "#5B7194", marginBottom: 6 }}
      >
        {label}
      </label>
      {children}
    </div>
  );
}

export const selectStyle: CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  fontSize: 13.5,
  color: "#09245B",
  padding: 12,
  border: "1.5px solid #DDEAF8",
  borderRadius: 12,
  background: "#FbFdFF",
  cursor: "pointer",
};
