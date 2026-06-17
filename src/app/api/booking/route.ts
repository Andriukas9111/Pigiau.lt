import { esc, sendNotification } from "@/lib/email";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

interface BookingPayload {
  service?: string;
  size?: string;
  date?: string;
  time?: string;
  name?: string;
  phone?: string;
  street?: string;
  city?: string;
  note?: string;
  pay?: string;
  extras?: string[];
  total?: string;
}

export async function POST(req: Request) {
  let body: BookingPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request." }, { status: 400 });
  }

  const service = (body.service ?? "").trim();
  const time = (body.time ?? "").trim();
  const total = (body.total ?? "").trim();

  if (!service || !time) {
    return NextResponse.json({ ok: false, error: "Incomplete booking." }, { status: 400 });
  }

  const extras = Array.isArray(body.extras) ? body.extras.filter(Boolean) : [];
  const row = (label: string, value: string) =>
    `<tr><td style="padding:6px 16px 6px 0;color:#7089AB;font:600 13px sans-serif;vertical-align:top">${label}</td><td style="padding:6px 0;color:#09245B;font:14px sans-serif">${esc(value)}</td></tr>`;

  const address = [body.street, body.city].filter(Boolean).map(String).join(", ").trim();

  const html = `
    <div style="font-family:sans-serif;max-width:560px">
      <h2 style="color:#09245B;margin:0 0 4px">New booking 🚀</h2>
      <p style="color:#7089AB;margin:0 0 18px;font-size:13px">via nordwash.lt booking flow</p>
      <table style="border-collapse:collapse;width:100%">
        ${row("Service", service)}
        ${body.size ? row("Load size", String(body.size)) : ""}
        ${row("Pickup", [body.date, time].filter(Boolean).map(String).join(" · "))}
        ${extras.length ? row("Extras", extras.map(String).join(", ")) : ""}
        ${body.name ? row("Name", String(body.name)) : ""}
        ${body.phone ? row("Phone", String(body.phone)) : ""}
        ${address ? row("Address", address) : ""}
        ${body.note ? row("Note", String(body.note)) : ""}
        ${body.pay ? row("Payment", String(body.pay)) : ""}
      </table>
      <div style="margin-top:18px;padding:16px;background:#F2F9FF;border-radius:12px;border:1px solid #E3EEFA;text-align:center">
        <span style="color:#7089AB;font-size:13px">Estimated total</span>
        <div style="color:#1E8BE8;font-size:26px;font-weight:800">${esc(total || "—")}</div>
      </div>
    </div>`;

  const { delivered } = await sendNotification({
    subject: `Booking: ${service}${body.name ? ` — ${body.name}` : ""}`,
    html,
  });

  return NextResponse.json({ ok: true, delivered });
}
