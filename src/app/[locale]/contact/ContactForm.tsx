"use client";

import { Button } from "@/components/primitives/Button";
import { Field, Input, Textarea } from "@/components/primitives/Input";
import { services } from "@/content/services";
import { useTranslations } from "next-intl";
import { useState } from "react";

export function ContactForm() {
  const t = useTranslations("contact.form");
  const tDetail = useTranslations("serviceDetail");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [message, setMessage] = useState("");
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, email, serviceId, message }),
      });
      if (!res.ok) throw new Error("failed");
      setSent(true);
    } finally {
      setSending(false);
    }
  };

  if (sent) {
    return (
      <div className="hairline p-6 bg-[var(--color-aqua-mist)]">
        <p className="text-heading-md">{t("sentTitle")}</p>
        <p className="text-body-md text-[var(--color-ink)]/80 mt-2">{t("sentBody")}</p>
      </div>
    );
  }

  return (
    <form onSubmit={submit} className="space-y-6">
      <Field label={t("name")}>
        <Input value={name} onChange={(e) => setName(e.target.value)} required />
      </Field>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Field label={t("phone")}>
          <Input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} required />
        </Field>
        <Field label={t("email")}>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </Field>
      </div>
      <Field label={t("service")}>
        <select
          className="w-full bg-transparent border-b border-[var(--color-ink)]/15 py-3 text-body-md outline-none focus:border-[var(--color-aqua-deep)]"
          value={serviceId}
          onChange={(e) => setServiceId(e.target.value)}
        >
          <option value="">{t("selectService")}</option>
          {services.map((s) => (
            <option key={s.id} value={s.id}>
              {tDetail(`${s.i18nKey}.title`)}
            </option>
          ))}
        </select>
      </Field>
      <Field label={t("message")}>
        <Textarea value={message} onChange={(e) => setMessage(e.target.value)} />
      </Field>
      <Button type="submit" disabled={sending} size="lg">
        {t("submit")}
      </Button>
    </form>
  );
}
