"use client";

import { Icon } from "@/components/icons";
import { BRAND, SUBJECTS } from "@/lib/data";
import { type CSSProperties, type FormEvent, useState } from "react";

const inputStyle: CSSProperties = {
  width: "100%",
  fontFamily: "var(--font-display)",
  fontSize: 14,
  color: "#09245B",
  padding: "13px 14px",
  border: "1.5px solid #DDEAF8",
  borderRadius: 12,
  background: "#FbFdFF",
  outline: "none",
};
const labelStyle: CSSProperties = {
  display: "block",
  fontFamily: "var(--font-display)",
  fontWeight: 600,
  fontSize: 12,
  color: "#5B7194",
  marginBottom: 6,
};

type Status = "idle" | "sending" | "ok" | "fallback" | "error";
const empty = { name: "", email: "", phone: "", order: "", subject: "", message: "" };

export function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [f, setF] = useState(empty);
  const upd = (k: keyof typeof f) => (e: { target: { value: string } }) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  async function submit(e: FormEvent) {
    e.preventDefault();
    if (!f.name || !f.email || !f.subject || !f.message) return;
    setStatus("sending");
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(f),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; delivered?: boolean } | null;
      if (res.ok && data?.ok) setStatus(data.delivered ? "ok" : "fallback");
      else setStatus("error");
    } catch {
      setStatus("error");
    }
  }

  const reset = () => {
    setStatus("idle");
    setF(empty);
  };

  if (status === "ok" || status === "fallback") {
    const fallback = status === "fallback";
    return (
      <div
        className="nw-pad"
        style={{
          background: "#fff",
          border: "1px solid #E9F1FB",
          borderRadius: 30,
          boxShadow: "0 14px 44px rgba(31,109,200,.07)",
          padding: 40,
        }}
      >
        <div style={{ textAlign: "center", padding: "30px 10px" }}>
          <div
            style={{
              width: 72,
              height: 72,
              borderRadius: "50%",
              background: fallback ? "#FFF4E5" : "#EAF7EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 18px",
            }}
          >
            <Icon
              name={fallback ? "phone" : "check"}
              c={fallback ? "#F2A53B" : "#76C043"}
              size={34}
              sw={2.4}
            />
          </div>
          <h3 className="fh" style={{ fontWeight: 800, fontSize: 24, color: "#09245B", margin: "0 0 8px" }}>
            {fallback ? "Let's connect directly" : "Message received!"}
          </h3>
          {fallback ? (
            <p
              style={{
                fontSize: 14.5,
                color: "#5B7194",
                margin: "0 auto 22px",
                maxWidth: 400,
                lineHeight: 1.6,
              }}
            >
              Our online inbox isn't accepting messages right now. Reach our crew straight away and we'll help
              you fast:
              <br />
              <a href={`mailto:${BRAND.email}`} style={{ color: "#1E8BE8", fontWeight: 700 }}>
                {BRAND.email}
              </a>{" "}
              ·{" "}
              <a href={`tel:${BRAND.phoneHref}`} style={{ color: "#1E8BE8", fontWeight: 700 }}>
                {BRAND.phone}
              </a>
            </p>
          ) : (
            <p style={{ fontSize: 14.5, color: "#5B7194", margin: "0 auto 22px", maxWidth: 380 }}>
              Our crew will beam back a reply within one Earth day. Keep an eye on your inbox.
            </p>
          )}
          <button
            type="button"
            onClick={reset}
            className="nw-btn-ghost fh"
            style={{
              background: "#fff",
              color: "#09245B",
              fontWeight: 700,
              fontSize: 14,
              padding: "13px 26px",
              borderRadius: 999,
              border: "1.5px solid #cfe2f7",
              cursor: "pointer",
            }}
          >
            {fallback ? "Back to form" : "Send another"}
          </button>
        </div>
      </div>
    );
  }

  const sending = status === "sending";
  return (
    <form
      onSubmit={submit}
      className="nw-pad"
      style={{
        background: "#fff",
        border: "1px solid #E9F1FB",
        borderRadius: 30,
        boxShadow: "0 14px 44px rgba(31,109,200,.07)",
        padding: 40,
      }}
    >
      <h3 className="fh" style={{ fontWeight: 800, fontSize: 20, color: "#09245B", margin: "0 0 20px" }}>
        Send us a message
      </h3>
      <div
        className="nw-grid-2c"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}
      >
        <div>
          <label style={labelStyle}>Name</label>
          <input value={f.name} onChange={upd("name")} placeholder="Your name" required style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>Email</label>
          <input
            type="email"
            value={f.email}
            onChange={upd("email")}
            placeholder="you@email.com"
            required
            style={inputStyle}
          />
        </div>
      </div>
      <div
        className="nw-grid-2c"
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}
      >
        <div>
          <label style={labelStyle}>Phone</label>
          <input value={f.phone} onChange={upd("phone")} placeholder="+370 …" style={inputStyle} />
        </div>
        <div>
          <label style={labelStyle}>
            Order number <span style={{ color: "#9DB4D2" }}>(optional)</span>
          </label>
          <input value={f.order} onChange={upd("order")} placeholder="NW-…" style={inputStyle} />
        </div>
      </div>
      <div style={{ marginBottom: 14 }}>
        <label style={labelStyle}>Subject</label>
        <select
          value={f.subject}
          onChange={upd("subject")}
          required
          style={{ ...inputStyle, fontWeight: 600, cursor: "pointer" }}
        >
          <option value="">Choose a topic…</option>
          {SUBJECTS.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>
      <div style={{ marginBottom: 18 }}>
        <label style={labelStyle}>Message</label>
        <textarea
          value={f.message}
          onChange={upd("message")}
          placeholder="How can we help?"
          rows={4}
          required
          style={{ ...inputStyle, resize: "vertical" }}
        />
      </div>
      {status === "error" && (
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 10,
            background: "#FDECEC",
            border: "1px solid #F6C9C9",
            color: "#B4322B",
            borderRadius: 12,
            padding: "12px 14px",
            fontSize: 13.5,
            marginBottom: 16,
          }}
        >
          <span aria-hidden="true" style={{ fontSize: 16, lineHeight: 1, flex: "none" }}>
            ⚠️
          </span>
          <span>
            Something glitched in transit. Please try again, or email{" "}
            <a href={`mailto:${BRAND.email}`} style={{ color: "#B4322B", fontWeight: 700 }}>
              {BRAND.email}
            </a>
            .
          </span>
        </div>
      )}
      <button
        type="submit"
        disabled={sending}
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
          fontSize: 15,
          padding: 16,
          borderRadius: 14,
          border: "none",
          cursor: sending ? "wait" : "pointer",
          opacity: sending ? 0.75 : 1,
          boxShadow: "0 10px 24px rgba(184,243,90,.4)",
        }}
      >
        {sending ? "Sending…" : "Send message"}
        {!sending && <Icon name="arrow" c="#09245B" size={16} sw={2} />}
      </button>
    </form>
  );
}
