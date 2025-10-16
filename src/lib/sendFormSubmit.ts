// src/lib/sendFormSubmit.ts
export type SendOptions = {
  to: string;                 // the inbox to receive the message
  subject: string;            // email subject
  template?: "table" | "box"; // optional FormSubmit template
  captcha?: boolean;          // disable/enable captcha
  autoresponse?: string;      // optional auto-reply text
};

export async function sendFormSubmit(
  fields: Record<string, string>,
  opts: SendOptions
): Promise<{ ok: boolean; error?: string }> {
  const form = new FormData();

  // your user fields
  Object.entries(fields).forEach(([k, v]) => form.append(k, v));

  // formsubmit controls
  form.append("_subject", opts.subject);
  form.append("_template", opts.template ?? "table");
  form.append("_captcha", String(!!opts.captcha)); // false = no captcha
  if (opts.autoresponse) form.append("_autoresponse", opts.autoresponse);

  // simple honeypot (spam protection)
  form.append("_honey", fields._honey ?? "");

  try {
    const res = await fetch(`https://formsubmit.co/ajax/${opts.to}`, {
      method: "POST",
      body: form,
      headers: { Accept: "application/json" },
    });
    if (!res.ok) {
      const data = await res.json().catch(() => ({}));
      return { ok: false, error: data?.message || `HTTP ${res.status}` };
    }
    return { ok: true };
  } catch (e) {
    return { ok: false, error: e?.message || "Network error" };
  }
}
