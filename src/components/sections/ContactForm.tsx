"use client";

import { Icon } from "@/components/icons";
import { SUBJECTS } from "@/lib/data";
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

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const [f, setF] = useState({ name: "", email: "", phone: "", order: "", subject: "", message: "" });
  const upd = (k: keyof typeof f) => (e: { target: { value: string } }) =>
    setF((p) => ({ ...p, [k]: e.target.value }));

  function submit(e: FormEvent) {
    e.preventDefault();
    if (!f.name || !f.email || !f.subject || !f.message) return;
    setSent(true);
  }

  if (sent) {
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
              background: "#EAF7EE",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 18px",
            }}
          >
            <Icon name="check" c="#76C043" size={36} sw={2.4} />
          </div>
          <h3 className="fh" style={{ fontWeight: 800, fontSize: 24, color: "#09245B", margin: "0 0 8px" }}>
            Message received!
          </h3>
          <p style={{ fontSize: 14.5, color: "#5B7194", margin: "0 auto 22px", maxWidth: 380 }}>
            Our crew will beam back a reply within one Earth day. Keep an eye on your inbox.
          </p>
          <button
            type="button"
            onClick={() => {
              setSent(false);
              setF({ name: "", email: "", phone: "", order: "", subject: "", message: "" });
            }}
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
            Send another
          </button>
        </div>
      </div>
    );
  }

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
      <button
        type="submit"
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
          cursor: "pointer",
          boxShadow: "0 10px 24px rgba(184,243,90,.4)",
        }}
      >
        Send message
        <Icon name="arrow" c="#09245B" size={16} sw={2} />
      </button>
    </form>
  );
}
