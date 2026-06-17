/**
 * Minimal transactional-email helper. Sends via the Resend REST API when
 * configured (no SDK dependency — just fetch). When the env vars are not set
 * it returns delivered:false so the UI can show an honest fallback instead of
 * a false "we got your message".
 *
 * Required env to actually deliver:
 *   RESEND_API_KEY  — your Resend API key
 *   CONTACT_TO      — inbox that receives notifications (e.g. hello@nordwash.lt)
 *   CONTACT_FROM    — verified sender (e.g. "NordWash <noreply@nordwash.lt>")
 */
export async function sendNotification(opts: {
  subject: string;
  html: string;
  replyTo?: string;
}): Promise<{ delivered: boolean }> {
  const key = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO;
  const from = process.env.CONTACT_FROM ?? "NordWash <onboarding@resend.dev>";
  if (!key || !to) return { delivered: false };

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${key}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        subject: opts.subject,
        html: opts.html,
        ...(opts.replyTo ? { reply_to: opts.replyTo } : {}),
      }),
    });
    return { delivered: res.ok };
  } catch {
    return { delivered: false };
  }
}

export const esc = (s: unknown) =>
  String(s ?? "").replace(
    /[&<>"]/g,
    (c) => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;" })[c] as string,
  );
