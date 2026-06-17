"use client";

import { Icon, type IconName } from "@/components/icons";
import { Illustration } from "@/components/illustrations";
import { Section } from "@/components/ui/Container";
import { ExtraToggle } from "@/components/ui/Controls";
import { BOOKING_EXTRAS, BRAND, BSTEPS_SHORT, PAY_METHODS, SERVICES, SIZES, TIMES } from "@/lib/data";
import { bookingExtrasTotal, bookingSubtotal, bookingTotal, money } from "@/lib/pricing";
import { type CSSProperties, useEffect, useState } from "react";

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

const WHAT_NEXT: { ic: IconName; t: string; d: string }[] = [
  { ic: "truck", t: "We Collect", d: "Our driver picks up your laundry at the chosen time." },
  { ic: "sparkles", t: "We Clean", d: "Your items are cleaned with cosmic precision." },
  { ic: "basket", t: "We Deliver", d: "Fresh, folded and beamed back to your door." },
  { ic: "smile", t: "You Relax", d: "Enjoy more free time. You've earned it." },
];

function StepHead({ n, title, sub }: { n: number; title: string; sub?: string }) {
  return (
    <>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: sub ? 14 : 14 }}>
        <span
          className="fh"
          style={{
            width: 30,
            height: 30,
            borderRadius: "50%",
            background: "#1E8BE8",
            color: "#fff",
            fontWeight: 800,
            fontSize: 14,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "none",
          }}
        >
          {n}
        </span>
        <h2 className="fh" style={{ fontWeight: 800, fontSize: 19, color: "#09245B", margin: 0 }}>
          {title}
        </h2>
      </div>
      {sub && <p style={{ fontSize: 13, color: "#7089AB", margin: "-6px 0 18px", paddingLeft: 42 }}>{sub}</p>}
    </>
  );
}

const cardStyle: CSSProperties = {
  background: "#fff",
  border: "1px solid #E9F1FB",
  borderRadius: 26,
  boxShadow: "0 14px 44px rgba(31,109,200,.07)",
  padding: 30,
};

export function BookingFlow() {
  const [step, setStep] = useState(1);
  const [confirmed, setConfirmed] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [delivered, setDelivered] = useState(false);
  const [showErrors, setShowErrors] = useState(false);
  const [service, setService] = useState(0);
  const [size, setSize] = useState("medium");
  const [date, setDate] = useState<number | null>(null);
  const [time, setTime] = useState("10:00 – 12:00");
  const [pay, setPay] = useState("card");
  const [form, setForm] = useState({ name: "", phone: "", street: "", city: "Vilnius", note: "" });
  const [extras, setExtras] = useState({
    bHypo: false,
    bScent: true,
    bStain: false,
    bFold: false,
    bExpress: false,
  });
  const [days, setDays] = useState<{ day: number; dow: string }[]>([]);

  useEffect(() => {
    const dow = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    setDays(
      [0, 1, 2, 3, 4, 5].map((i) => {
        const d = new Date();
        d.setDate(d.getDate() + i + 1);
        return { day: d.getDate(), dow: dow[d.getDay()] };
      }),
    );
  }, []);

  const subtotal = bookingSubtotal(service, size);
  const extrasTotal = bookingExtrasTotal(extras);
  const total = bookingTotal(service, size, extras);
  const svcTitle = SERVICES[service].title;
  const sizeName = SIZES.find((z) => z.key === size)?.name ?? "";

  const stepValid = (n: number) => {
    if (n === 2) return !!(form.name.trim() && form.phone.trim() && form.street.trim());
    if (n === 3) return date !== null;
    return true;
  };
  const goNext = () => {
    if (!stepValid(step)) {
      setShowErrors(true);
      return;
    }
    setShowErrors(false);
    setStep(Math.min(5, step + 1));
  };
  const goStep = (n: number) => {
    setShowErrors(false);
    setStep(n);
  };
  const reqStyle = (val: string): CSSProperties =>
    showErrors && !val.trim() ? { ...inputStyle, borderColor: "#E89B9B", background: "#FFF7F7" } : inputStyle;

  async function confirmBooking() {
    if (submitting) return;
    if (!stepValid(2) || !stepValid(3)) {
      setShowErrors(true);
      setStep(!stepValid(2) ? 2 : 3);
      return;
    }
    setSubmitting(true);
    const dayObj = days.find((d) => d.day === date);
    try {
      const res = await fetch("/api/booking", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          service: svcTitle,
          size: sizeName,
          date: dayObj ? `${dayObj.dow} ${dayObj.day}` : "",
          time,
          name: form.name,
          phone: form.phone,
          street: form.street,
          city: form.city,
          note: form.note,
          pay: PAY_METHODS.find((p) => p.key === pay)?.name ?? pay,
          extras: BOOKING_EXTRAS.filter((e) => extras[e.key]).map((e) => e.name),
          total: money(total),
        }),
      });
      const data = (await res.json().catch(() => null)) as { ok?: boolean; delivered?: boolean } | null;
      setDelivered(Boolean(res.ok && data?.ok && data.delivered));
    } catch {
      setDelivered(false);
    } finally {
      setSubmitting(false);
      setConfirmed(true);
    }
  }

  /* ---------------------------------------------------- progress bar --- */
  const progress = (
    <Section mt={24} style={{ maxWidth: 1100 }}>
      <div className="nw-scroll" style={{ overflowX: "auto" }}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: 6,
            minWidth: 520,
            position: "relative",
          }}
        >
          <div
            style={{
              position: "absolute",
              top: 19,
              left: "8%",
              right: "8%",
              borderTop: "2px solid #E3EEFA",
              zIndex: 0,
            }}
          />
          {BSTEPS_SHORT.map((name, i) => {
            const n = i + 1;
            const done = step > n;
            const active = step === n;
            return (
              <button
                key={name}
                type="button"
                onClick={() => goStep(n)}
                style={{
                  flex: 1,
                  textAlign: "center",
                  position: "relative",
                  zIndex: 1,
                  cursor: "pointer",
                  background: "none",
                  border: "none",
                }}
              >
                <div
                  className="fh"
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: "50%",
                    background: done ? "#76C043" : active ? "#1E8BE8" : "#fff",
                    color: done || active ? "#fff" : "#9DB4D2",
                    border: `2px solid ${done || active ? "transparent" : "#DDEAF8"}`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 8px",
                    fontWeight: 800,
                    fontSize: 15,
                    boxShadow: "0 4px 12px rgba(31,109,200,.12)",
                  }}
                >
                  {done ? "✓" : n}
                </div>
                <div
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 12.5, color: active ? "#09245B" : "#9DB4D2" }}
                >
                  {name}
                </div>
              </button>
            );
          })}
        </div>
      </div>
    </Section>
  );

  /* ----------------------------------------------------- confirmation --- */
  if (confirmed) {
    return (
      <>
        {progress}
        <Section mt={30} pb={50} style={{ maxWidth: 680 }}>
          <div
            className="nw-pad"
            style={{ ...cardStyle, borderRadius: 30, padding: 46, textAlign: "center" }}
          >
            <div
              style={{
                width: 84,
                height: 84,
                borderRadius: "50%",
                background: delivered ? "#EAF7EE" : "#FFF4E5",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                margin: "0 auto 20px",
                animation: "nwPulse 2s ease-out infinite",
              }}
            >
              <Icon
                name={delivered ? "check" : "phone"}
                c={delivered ? "#76C043" : "#F2A53B"}
                size={40}
                sw={2.4}
              />
            </div>
            <h2
              className="fh"
              style={{ fontWeight: 800, fontSize: 28, color: "#09245B", margin: "0 0 10px" }}
            >
              {delivered ? "Booking confirmed!" : "One quick step to lock it in"}
            </h2>
            <p
              style={{ fontSize: 15, color: "#5B7194", lineHeight: 1.6, margin: "0 auto 8px", maxWidth: 440 }}
            >
              {delivered ? (
                <>
                  Your <b style={{ color: "#09245B" }}>{svcTitle}</b> is scheduled for{" "}
                  <b style={{ color: "#09245B" }}>{time}</b>. Our crew will beam in to collect it.
                </>
              ) : (
                <>
                  We've saved your <b style={{ color: "#09245B" }}>{svcTitle}</b> for{" "}
                  <b style={{ color: "#09245B" }}>{time}</b>. To lock in your pickup, just call or text us and
                  our crew will beam straight over.
                </>
              )}
            </p>
            <div
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                background: "#F2F9FF",
                border: "1px solid #E3EEFA",
                borderRadius: 14,
                padding: "14px 22px",
                margin: "18px 0 24px",
              }}
            >
              <span style={{ fontSize: 13, color: "#7089AB" }}>Order total</span>
              <span className="fh" style={{ fontWeight: 800, fontSize: 22, color: "#1E8BE8" }}>
                {money(total)}
              </span>
            </div>
            <div className="nw-btnrow" style={{ display: "flex", gap: 14, justifyContent: "center" }}>
              {delivered ? (
                <a
                  href="/"
                  className="nw-btn-primary fh"
                  style={{
                    background: "#B8F35A",
                    color: "#09245B",
                    fontWeight: 800,
                    fontSize: 14.5,
                    padding: "15px 28px",
                    borderRadius: 999,
                    boxShadow: "0 10px 24px rgba(184,243,90,.4)",
                    textDecoration: "none",
                  }}
                >
                  Back to home
                </a>
              ) : (
                <a
                  href={`tel:${BRAND.phoneHref}`}
                  className="nw-btn-primary fh"
                  style={{
                    background: "#B8F35A",
                    color: "#09245B",
                    fontWeight: 800,
                    fontSize: 14.5,
                    padding: "15px 28px",
                    borderRadius: 999,
                    boxShadow: "0 10px 24px rgba(184,243,90,.4)",
                    textDecoration: "none",
                  }}
                >
                  Call {BRAND.phone}
                </a>
              )}
              <button
                type="button"
                onClick={() => {
                  setConfirmed(false);
                  setStep(1);
                }}
                className="nw-btn-ghost fh"
                style={{
                  background: "#fff",
                  color: "#09245B",
                  fontWeight: 700,
                  fontSize: 14.5,
                  padding: "14px 26px",
                  borderRadius: 999,
                  border: "1.5px solid #cfe2f7",
                  cursor: "pointer",
                }}
              >
                Book another
              </button>
            </div>
          </div>
        </Section>
      </>
    );
  }

  /* ------------------------------------------------------------ steps --- */
  return (
    <>
      {progress}
      <Section mt={24} pb={50}>
        <div
          className="nw-book"
          style={{ display: "grid", gridTemplateColumns: "1.5fr .85fr", gap: 22, alignItems: "start" }}
        >
          {/* step column */}
          <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
            {step === 1 && (
              <div style={cardStyle}>
                <StepHead
                  n={1}
                  title="Select Your Service"
                  sub="Choose what you need cleaned. We'll handle the rest."
                />
                <div
                  className="nw-grid-3 nw-grid-2up"
                  style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 12 }}
                >
                  {SERVICES.map((s, i) => {
                    const on = service === i;
                    return (
                      <button
                        key={s.key}
                        type="button"
                        onClick={() => setService(i)}
                        className="fh"
                        style={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          textAlign: "center",
                          gap: 6,
                          padding: "16px 12px",
                          borderRadius: 16,
                          border: `1.5px solid ${on ? "#1E8BE8" : "#EAF2FC"}`,
                          background: on ? "#F3F9FF" : "#fff",
                          cursor: "pointer",
                        }}
                      >
                        <span style={{ width: 54, height: 54, display: "block" }}>
                          <Illustration name={s.img} />
                        </span>
                        <b className="fh" style={{ fontSize: 12.5, color: "#09245B", lineHeight: 1.25 }}>
                          {s.title}
                        </b>
                        <span style={{ fontSize: 13, color: "#1E8BE8", fontWeight: 800 }}>
                          €{s.price.toFixed(2)}
                        </span>
                      </button>
                    );
                  })}
                </div>
                <label style={{ ...labelStyle, marginTop: 20 }}>Load size</label>
                <div
                  className="nw-grid-4 nw-grid-2up"
                  style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10 }}
                >
                  {SIZES.map((z) => {
                    const on = size === z.key;
                    return (
                      <button
                        key={z.key}
                        type="button"
                        onClick={() => setSize(z.key)}
                        className="fh"
                        style={{
                          padding: "14px 8px",
                          borderRadius: 14,
                          border: `1.5px solid ${on ? "#1E8BE8" : "#EAF2FC"}`,
                          background: on ? "#F3F9FF" : "#fff",
                          cursor: "pointer",
                          textAlign: "center",
                        }}
                      >
                        <b style={{ display: "block", fontSize: 13, color: "#09245B" }}>{z.name}</b>
                        <span style={{ fontSize: 11, color: "#8AA0C0" }}>{z.sub}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 2 && (
              <div style={cardStyle}>
                <StepHead n={2} title="Pickup Address" />
                <div
                  className="nw-grid-2c"
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14, marginBottom: 14 }}
                >
                  <div>
                    <label style={labelStyle}>Full name</label>
                    <input
                      value={form.name}
                      onChange={(e) => setForm({ ...form, name: e.target.value })}
                      placeholder="Your name"
                      aria-label="Full name"
                      style={reqStyle(form.name)}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Phone</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      placeholder="+370 …"
                      aria-label="Phone"
                      style={reqStyle(form.phone)}
                    />
                  </div>
                </div>
                <div style={{ marginBottom: 14 }}>
                  <label style={labelStyle}>Street address</label>
                  <input
                    value={form.street}
                    onChange={(e) => setForm({ ...form, street: e.target.value })}
                    placeholder="Street, building, apt."
                    aria-label="Street address"
                    style={reqStyle(form.street)}
                  />
                </div>
                {showErrors && !stepValid(2) && (
                  <p style={{ fontSize: 12.5, color: "#C9544C", margin: "12px 0 0", fontWeight: 600 }}>
                    Please add your name, phone and street so our crew can reach you.
                  </p>
                )}
                <div
                  className="nw-grid-2c"
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }}
                >
                  <div>
                    <label style={labelStyle}>City</label>
                    <input
                      value={form.city}
                      onChange={(e) => setForm({ ...form, city: e.target.value })}
                      aria-label="City"
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>
                      Note <span style={{ color: "#9DB4D2" }}>(optional)</span>
                    </label>
                    <input
                      value={form.note}
                      onChange={(e) => setForm({ ...form, note: e.target.value })}
                      placeholder="Door code, etc."
                      aria-label="Note (optional)"
                      style={inputStyle}
                    />
                  </div>
                </div>
              </div>
            )}

            {step === 3 && (
              <div style={cardStyle}>
                <StepHead n={3} title="Date & Time" />
                {showErrors && date === null && (
                  <p style={{ fontSize: 12.5, color: "#C9544C", margin: "0 0 12px", fontWeight: 600 }}>
                    Please pick a pickup day to continue.
                  </p>
                )}
                <label style={labelStyle}>Pick a day</label>
                <div style={{ display: "flex", gap: 10, flexWrap: "wrap", marginBottom: 20 }}>
                  {days.map((d) => {
                    const on = date === d.day;
                    return (
                      <button
                        key={d.day}
                        type="button"
                        onClick={() => setDate(d.day)}
                        className="fh"
                        style={{
                          width: 64,
                          padding: "12px 0",
                          borderRadius: 14,
                          border: `1.5px solid ${on ? "#1E8BE8" : "#EAF2FC"}`,
                          background: on ? "#1E8BE8" : "#fff",
                          cursor: "pointer",
                          textAlign: "center",
                        }}
                      >
                        <div style={{ fontSize: 11, color: on ? "#cfe0ff" : "#9DB4D2", fontWeight: 700 }}>
                          {d.dow}
                        </div>
                        <div
                          style={{
                            fontSize: 20,
                            fontWeight: 800,
                            color: on ? "#fff" : "#09245B",
                            lineHeight: 1.2,
                          }}
                        >
                          {d.day}
                        </div>
                      </button>
                    );
                  })}
                </div>
                <label style={labelStyle}>Choose a time slot</label>
                <div
                  className="nw-grid-3 nw-grid-2up"
                  style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 10 }}
                >
                  {TIMES.map((t) => {
                    const on = time === t;
                    return (
                      <button
                        key={t}
                        type="button"
                        onClick={() => setTime(t)}
                        className="fh"
                        style={{
                          padding: "13px 6px",
                          borderRadius: 12,
                          border: `1.5px solid ${on ? "#1E8BE8" : "#EAF2FC"}`,
                          background: on ? "#F3F9FF" : "#fff",
                          color: on ? "#1E8BE8" : "#5B7194",
                          cursor: "pointer",
                          fontWeight: 700,
                          fontSize: 12.5,
                        }}
                      >
                        {t}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {step === 4 && (
              <div style={cardStyle}>
                <StepHead n={4} title="Extras" sub="Add a little extra cosmic care. (Optional)" />
                <div
                  className="nw-grid-2c"
                  style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 10 }}
                >
                  {BOOKING_EXTRAS.map((e) => (
                    <ExtraToggle
                      key={e.key}
                      checked={extras[e.key]}
                      label={e.name}
                      price={`+€${e.price.toFixed(2)}`}
                      onToggle={() => setExtras({ ...extras, [e.key]: !extras[e.key] })}
                      pad="12px 14px"
                      box={20}
                    />
                  ))}
                </div>
              </div>
            )}

            {step === 5 && (
              <div style={cardStyle}>
                <StepHead n={5} title="Review & Pay" />
                <label style={labelStyle}>Payment method</label>
                <div
                  className="nw-grid-4 nw-grid-2up"
                  style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 10, marginBottom: 20 }}
                >
                  {PAY_METHODS.map((p) => {
                    const on = pay === p.key;
                    return (
                      <button
                        key={p.key}
                        type="button"
                        onClick={() => setPay(p.key)}
                        className="fh"
                        style={{
                          padding: "13px 8px",
                          borderRadius: 12,
                          border: `1.5px solid ${on ? "#1E8BE8" : "#EAF2FC"}`,
                          background: on ? "#F3F9FF" : "#fff",
                          color: on ? "#1E8BE8" : "#5B7194",
                          cursor: "pointer",
                          fontWeight: 700,
                          fontSize: 12.5,
                        }}
                      >
                        {p.name}
                      </button>
                    );
                  })}
                </div>
                <button
                  type="button"
                  onClick={confirmBooking}
                  disabled={submitting}
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
                    padding: 17,
                    borderRadius: 16,
                    border: "none",
                    cursor: submitting ? "wait" : "pointer",
                    opacity: submitting ? 0.75 : 1,
                    boxShadow: "0 10px 24px rgba(184,243,90,.4)",
                  }}
                >
                  {submitting ? "Confirming…" : `Confirm & Pay ${money(total)}`}
                  {!submitting && <Icon name="rocket" c="#09245B" size={17} sw={2} />}
                </button>
                <div style={{ textAlign: "center", fontSize: 11.5, color: "#9DB4D2", marginTop: 12 }}>
                  Your payment is secure & encrypted.
                </div>
              </div>
            )}

            {/* nav */}
            <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", gap: 12 }}>
              {step > 1 ? (
                <button
                  type="button"
                  onClick={() => goStep(Math.max(1, step - 1))}
                  className="nw-btn-ghost fh"
                  style={{
                    background: "#fff",
                    color: "#09245B",
                    fontWeight: 700,
                    fontSize: 14,
                    padding: "13px 24px",
                    borderRadius: 999,
                    border: "1.5px solid #cfe2f7",
                    cursor: "pointer",
                  }}
                >
                  ← Back
                </button>
              ) : (
                <span />
              )}
              <span style={{ flex: 1 }} />
              {step !== 5 && (
                <button
                  type="button"
                  onClick={goNext}
                  className="nw-btn-primary fh"
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 8,
                    background: "#B8F35A",
                    color: "#09245B",
                    fontWeight: 800,
                    fontSize: 14.5,
                    padding: "15px 30px",
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 10px 24px rgba(184,243,90,.4)",
                  }}
                >
                  Continue
                  <Icon name="arrow" c="#09245B" size={16} sw={2} />
                </button>
              )}
            </div>
          </div>

          {/* sidebar */}
          <div style={{ position: "sticky", top: 96, display: "flex", flexDirection: "column", gap: 16 }}>
            <div style={{ ...cardStyle, padding: 26 }}>
              <div
                className="fh"
                style={{ fontWeight: 800, fontSize: 17, color: "#09245B", marginBottom: 16 }}
              >
                Your Order Summary
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ width: 54, height: 54, flex: "none" }}>
                  <Illustration name={SERVICES[service].img} />
                </span>
                <div
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 14, color: "#09245B", lineHeight: 1.35 }}
                >
                  Clean clothes.
                  <br />
                  Happy planet.
                  <br />
                  No probe.
                </div>
              </div>
              <div
                style={{
                  borderTop: "1px solid #EEF4FB",
                  paddingTop: 14,
                  display: "flex",
                  flexDirection: "column",
                  gap: 10,
                  fontSize: 13,
                }}
              >
                <Row label="Service" value={svcTitle} />
                <Row label="Load size" value={sizeName} />
                <Row label="Pickup" value={date ? `${time} · ${date}th` : time} />
              </div>
              <div
                style={{
                  borderTop: "1px solid #EEF4FB",
                  marginTop: 14,
                  paddingTop: 14,
                  display: "flex",
                  flexDirection: "column",
                  gap: 9,
                  fontSize: 13,
                }}
              >
                <Row label="Subtotal" value={money(subtotal)} />
                <Row label="Extras" value={money(extrasTotal)} />
                <Row label="Pickup & Delivery" value="FREE" valueColor="#76C043" />
              </div>
              <div
                style={{
                  borderTop: "1px dashed #DCE8F6",
                  marginTop: 14,
                  paddingTop: 14,
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "space-between",
                }}
              >
                <span className="fh" style={{ fontWeight: 700, fontSize: 13, color: "#5B7194" }}>
                  Estimated Total
                </span>
                <span
                  className="fh"
                  style={{ fontWeight: 800, fontSize: 30, color: "#1E8BE8", lineHeight: 1 }}
                >
                  {money(total)}
                </span>
              </div>
            </div>

            {/* express upsell */}
            <div
              style={{
                position: "relative",
                background: "radial-gradient(130% 120% at 80% 0%, #143a86 0%, #0a1f4d 65%)",
                borderRadius: 22,
                boxShadow: "0 14px 40px rgba(10,31,77,.25)",
                padding: 24,
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
                    "radial-gradient(1.5px 1.5px at 25% 25%,#fff,transparent),radial-gradient(1.5px 1.5px at 70% 60%,#bcd4ff,transparent)",
                  opacity: 0.6,
                }}
              />
              <div style={{ position: "relative" }}>
                <div
                  className="fh"
                  style={{ fontWeight: 700, fontSize: 12, color: "#9Fc2f5", marginBottom: 4 }}
                >
                  Need it faster?
                </div>
                <div className="fh" style={{ fontWeight: 800, fontSize: 19, marginBottom: 6 }}>
                  Try Express Beam
                </div>
                <p style={{ fontSize: 12.5, color: "#cfe0ff", margin: "0 0 16px" }}>
                  Same-day pickup & delivery in select areas.
                </p>
                <button
                  type="button"
                  onClick={() => setExtras((e) => ({ ...e, bExpress: true }))}
                  className="fh"
                  style={{
                    background: "#B8F35A",
                    color: "#0a1f48",
                    fontWeight: 800,
                    fontSize: 12.5,
                    padding: "11px 18px",
                    borderRadius: 999,
                    border: "none",
                    cursor: "pointer",
                  }}
                >
                  UPGRADE TO EXPRESS
                </button>
              </div>
            </div>

            {/* what happens next */}
            <div style={{ ...cardStyle, padding: 22 }}>
              <div
                className="fh"
                style={{ fontWeight: 800, fontSize: 15, color: "#09245B", marginBottom: 16 }}
              >
                What happens next?
              </div>
              <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                {WHAT_NEXT.map((w) => (
                  <div key={w.t} style={{ display: "flex", gap: 12, alignItems: "flex-start" }}>
                    <div
                      style={{
                        width: 40,
                        height: 40,
                        borderRadius: 12,
                        background: "#F2F9FF",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flex: "none",
                      }}
                    >
                      <Icon name={w.ic} c="#1E8BE8" size={22} />
                    </div>
                    <div>
                      <b
                        className="fh"
                        style={{ fontWeight: 700, fontSize: 13.5, color: "#09245B", display: "block" }}
                      >
                        {w.t}
                      </b>
                      <span style={{ fontSize: 12, color: "#7089AB", lineHeight: 1.4 }}>{w.d}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}

function Row({
  label,
  value,
  valueColor = "#09245B",
}: { label: string; value: string; valueColor?: string }) {
  return (
    <div style={{ display: "flex", justifyContent: "space-between", gap: 8 }}>
      <span style={{ color: "#7089AB" }}>{label}</span>
      <b className="fh" style={{ color: valueColor, textAlign: "right" }}>
        {value}
      </b>
    </div>
  );
}
