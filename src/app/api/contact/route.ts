import { BRAND } from "@/config/brand";
import { contactEmailHtml } from "@/lib/email/templates";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(1).max(120),
  phone: z.string().min(4).max(40),
  email: z.string().email(),
  serviceId: z.string().max(80).optional(),
  message: z.string().max(2000).optional(),
});

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = Schema.safeParse(body);
  if (!parsed.success) return NextResponse.json({ error: "invalid" }, { status: 400 });

  const apiKey = process.env.RESEND_API_KEY;
  const notify = process.env.NOTIFY_EMAIL ?? BRAND.email;
  const html = contactEmailHtml({
    name: parsed.data.name,
    email: parsed.data.email,
    phone: parsed.data.phone,
    serviceId: parsed.data.serviceId,
    message: parsed.data.message,
  });

  if (apiKey && notify && !notify.includes("{{")) {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from: `Pigiau.lt <onboarding@resend.dev>`,
      to: notify,
      replyTo: parsed.data.email,
      subject: `Žinutė: ${parsed.data.name}`,
      html,
    });
  } else {
    console.warn("[contact] Resend not configured; skipping email send");
  }

  return NextResponse.json({ ok: true });
}
