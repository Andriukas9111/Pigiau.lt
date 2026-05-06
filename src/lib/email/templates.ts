export function estimateEmailHtml(input: {
  name: string;
  email: string;
  phone?: string;
  message?: string;
  payload: Record<string, unknown>;
}) {
  const rows = Object.entries(input.payload)
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 12px;color:#666">${k}</td><td style="padding:6px 12px;font-family:monospace">${escape(
          String(v),
        )}</td></tr>`,
    )
    .join("");
  return `
  <div style="font-family:system-ui,sans-serif;color:#0E1114;max-width:560px">
    <h2 style="font-weight:500">Naujas kainos užklausimas</h2>
    <p>${escape(input.name)} (${escape(input.email)}${input.phone ? `, ${escape(input.phone)}` : ""})</p>
    ${input.message ? `<p>${escape(input.message)}</p>` : ""}
    <table style="border-collapse:collapse;border:1px solid #eee;width:100%">${rows}</table>
  </div>`;
}

export function contactEmailHtml(input: {
  name: string;
  email: string;
  phone: string;
  serviceId?: string;
  message?: string;
}) {
  return `
  <div style="font-family:system-ui,sans-serif;color:#0E1114;max-width:560px">
    <h2 style="font-weight:500">Nauja žinutė iš svetainės</h2>
    <p>${escape(input.name)} · ${escape(input.phone)} · ${escape(input.email)}</p>
    ${input.serviceId ? `<p style="color:#666">Paslauga: ${escape(input.serviceId)}</p>` : ""}
    ${input.message ? `<p>${escape(input.message)}</p>` : ""}
  </div>`;
}

function escape(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}
