"use client";

import { Icon } from "@/components/icons";
import { Card, Section } from "@/components/ui/Container";
import { FAQS, FAQ_CATS } from "@/lib/data";
import { useState } from "react";

export function FaqClient() {
  const [query, setQuery] = useState("");
  const [open, setOpen] = useState(0);

  const filtered = FAQS.map((f, i) => ({ ...f, i })).filter(
    (f) => !query || `${f.q} ${f.a}`.toLowerCase().includes(query.toLowerCase()),
  );

  return (
    <>
      {/* search */}
      <Section mt={26}>
        <div style={{ position: "relative", maxWidth: 620, margin: "0 auto" }}>
          <span style={{ position: "absolute", left: 18, top: "50%", transform: "translateY(-50%)" }}>
            <Icon name="search" c="#1E8BE8" size={20} />
          </span>
          <input
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setOpen(-1);
            }}
            placeholder="Search the cosmos for answers…"
            aria-label="Search FAQ"
            className="fh"
            style={{
              width: "100%",
              fontSize: 15,
              color: "#09245B",
              padding: "16px 18px 16px 48px",
              border: "1.5px solid #DDEAF8",
              borderRadius: 999,
              background: "#fff",
              outline: "none",
              boxShadow: "0 8px 24px rgba(31,109,200,.06)",
            }}
          />
        </div>
      </Section>

      {/* category cards */}
      <Section mt={26}>
        <div
          className="nw-grid-6 nw-slider"
          style={{ display: "grid", gridTemplateColumns: "repeat(6,1fr)", gap: 14 }}
        >
          {FAQ_CATS.map((c) => (
            <div
              key={c.name}
              className="nw-svc"
              style={{
                background: "#fff",
                border: "1px solid #E9F1FB",
                borderRadius: 18,
                boxShadow: "0 8px 24px rgba(31,109,200,.05)",
                padding: "20px 14px",
                textAlign: "center",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  width: 46,
                  height: 46,
                  borderRadius: 14,
                  background: "#F2F9FF",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  margin: "0 auto 10px",
                }}
              >
                <Icon name={c.icon} c="#1E8BE8" size={22} />
              </div>
              <div
                className="fh"
                style={{ fontWeight: 700, fontSize: 12.5, color: "#09245B", lineHeight: 1.3 }}
              >
                {c.name}
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* accordion */}
      <Section>
        <Card pad={40}>
          <h2
            className="fh"
            style={{
              fontWeight: 800,
              fontSize: 24,
              color: "#09245B",
              margin: "0 0 22px",
              textAlign: "center",
            }}
          >
            Frequently asked questions
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
            {filtered.length === 0 && (
              <p style={{ textAlign: "center", color: "#7089AB", fontSize: 14 }}>
                No answers in this galaxy — try another search, or contact our crew.
              </p>
            )}
            {filtered.map((f) => {
              const isOpen = open === f.i;
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
                    onClick={() => setOpen(isOpen ? -1 : f.i)}
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
                    <span
                      style={{ fontSize: 24, color: "#1E8BE8", fontWeight: 400, flex: "none", lineHeight: 1 }}
                    >
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
        </Card>
      </Section>
    </>
  );
}
