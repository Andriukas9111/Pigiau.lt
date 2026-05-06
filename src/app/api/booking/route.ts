import crypto from "node:crypto";
import { BRAND } from "@/config/brand";
import { NextResponse } from "next/server";
import { Resend } from "resend";

export const runtime = "nodejs";

function verify(rawBody: string, signature: string | null, secret: string) {
  if (!signature) return false;
  const expected = crypto.createHmac("sha256", secret).update(rawBody).digest("hex");
  try {
    return crypto.timingSafeEqual(Buffer.from(expected), Buffer.from(signature));
  } catch {
    return false;
  }
}

export async function POST(req: Request) {
  const secret = process.env.CAL_WEBHOOK_SECRET;
  const sig = req.headers.get("x-cal-signature-256");
  const raw = await req.text();

  if (secret && !verify(raw, sig, secret)) {
    return NextResponse.json({ error: "invalid signature" }, { status: 401 });
  }

  const event = JSON.parse(raw) as {
    triggerEvent?: string;
    payload?: {
      title?: string;
      attendees?: { email?: string; name?: string }[];
      startTime?: string;
      additionalNotes?: string;
    };
  };

  if (event.triggerEvent !== "BOOKING_CREATED") {
    return NextResponse.json({ ok: true, ignored: true });
  }

  const apiKey = process.env.RESEND_API_KEY;
  const notify = process.env.NOTIFY_EMAIL ?? BRAND.email;
  if (apiKey && notify && !notify.includes("{{")) {
    const resend = new Resend(apiKey);
    const attendee = event.payload?.attendees?.[0];
    await resend.emails.send({
      from: `Pigiau.lt <onboarding@resend.dev>`,
      to: notify,
      subject: `Naujas užsakymas: ${event.payload?.title ?? "Booking"}`,
      html: `<p><strong>${attendee?.name ?? ""}</strong> (${attendee?.email ?? ""})</p>
             <p>${event.payload?.startTime ?? ""}</p>
             <p>${event.payload?.additionalNotes ?? ""}</p>`,
    });
  }

  return NextResponse.json({ ok: true });
}
