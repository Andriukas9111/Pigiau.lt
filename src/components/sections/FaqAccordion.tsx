"use client";

import type { FaqItem } from "@/lib/data";
import { useState } from "react";

export function FaqAccordion({ items, defaultOpen = -1 }: { items: FaqItem[]; defaultOpen?: number }) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <div
            key={f.q}
            style={{
              border: "1.5px solid #EAF2FC",
              borderRadius: 16,
              overflow: "hidden",
              background: "#FbFdFF",
            }}
          >
            <button
              type="button"
              onClick={() => setOpen(isOpen ? -1 : i)}
              aria-expanded={isOpen}
              className="fh"
              style={{
                width: "100%",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 12,
                padding: "18px 22px",
                background: "none",
                border: "none",
                cursor: "pointer",
                textAlign: "left",
                fontWeight: 700,
                fontSize: 15,
                color: "#09245B",
              }}
            >
              {f.q}
              <span style={{ fontSize: 23, color: "#1E8BE8", fontWeight: 400, flex: "none", lineHeight: 1 }}>
                {isOpen ? "–" : "+"}
              </span>
            </button>
            {isOpen && (
              <div style={{ padding: "0 22px 20px", fontSize: 14, lineHeight: 1.6, color: "#5B7194" }}>
                {f.a}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
