import { esc, sendNotification } from "@/lib/email";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  order?: string;
  subject?: string;
  message?: string;
}

const isEmail = (s: string) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(s);

export async function POST(req: Request) {
  let body: ContactPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const phone = (body.phone ?? "").trim();
  const order = (body.order ?? "").trim();
  const subject = (body.subject ?? "").trim();
  const message = (body.message ?? "").trim();

  if (!name || !email || !subject || !message) {
    return NextResponse.json({ ok: false, error: "Please fill in the required fields." }, { status: 400 });
  }
  if (!isEmail(email)) {
    return NextResponse.json({ ok: false, error: "Please enter a valid email." }, { status: 400 });
  }

  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#7089AB;font:600 13px sans-serif;vertical-align:top">${label}</td><td style="padding:6px 0;color:#09245B;font:14px sans-serif">${esc(value)}</td></tr>`;

  const html = `
    <div style="font-family:sans-serif;max-width:560px">
      <h2 style="color:#09245B;margin:0 0 4px">New contact message</h2>
      <p style="color:#7089AB;margin:0 0 18px;font-size:13px">via nordwash.lt contact form</p>
      <table style="border-collapse:collapse;width:100%">
        ${row("Subject", subject)}
        ${row("Name", name)}
        ${row("Email", email)}
        ${phone ? row("Phone", phone) : ""}
        ${order ? row("Order", order) : ""}
      </table>
      <div style="margin-top:18px;padding:16px;background:#F2F9FF;border-radius:12px;border:1px solid #E3EEFA">
        <div style="color:#7089AB;font-size:12px;font-weight:600;margin-bottom:6px">MESSAGE</div>
        <div style="color:#09245B;font-size:14px;line-height:1.6;white-space:pre-wrap">${esc(message)}</div>
      </div>
    </div>`;

  const { delivered } = await sendNotification({
    subject: `Contact: ${subject} — ${name}`,
    html,
    replyTo: email,
  });

  return NextResponse.json({ ok: true, delivered });
}
