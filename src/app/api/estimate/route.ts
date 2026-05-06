import { BRAND } from "@/config/brand";
import { estimateEmailHtml } from "@/lib/email/templates";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import { z } from "zod";

const Schema = z.object({
  name: z.string().min(1).max(120),
  email: z.string().email(),
  phone: z.string().max(40).optional(),
  message: z.string().max(2000).optional(),
  payload: z.record(z.unknown()),
});

export const runtime = "nodejs";

export async function POST(req: Request) {
  const body = await req.json().catch(() => null);
  const parsed = Schema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: "invalid" }, { status: 400 });
  }
  const apiKey = process.env.RESEND_API_KEY;
  const notify = process.env.NOTIFY_EMAIL ?? BRAND.email;
  const html = estimateEmailHtml(parsed.data);

  if (apiKey && notify && !notify.includes("{{")) {
    const resend = new Resend(apiKey);
    await Promise.all([
      resend.emails.send({
        from: `Pigiau.lt <onboarding@resend.dev>`,
        to: notify,
        replyTo: parsed.data.email,
        subject: `Sąmata: ${parsed.data.name}`,
        html,
      }),
      resend.emails.send({
        from: `Pigiau.lt <onboarding@resend.dev>`,
        to: parsed.data.email,
        subject: "Jūsų preliminari sąmata",
        html,
      }),
    ]);
  } else {
    console.warn("[estimate] Resend not configured; skipping email send");
  }

  return NextResponse.json({ ok: true });
}
