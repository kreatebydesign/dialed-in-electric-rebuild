import {
  CONTACT_SERVICES,
  FIELD_LIMITS,
  type ContactService,
} from "@/lib/contact/constants";
import {
  escapeHtml,
  sendLeadEmail,
  type SendLeadEmailDeps,
} from "@/lib/lead-email";

export type ContactInquiryInput = {
  name?: unknown;
  phone?: unknown;
  email?: unknown;
  service?: unknown;
  message?: unknown;
  website?: unknown;
};

export type ParsedContactInquiry = {
  name: string;
  phone: string;
  email?: string;
  service?: ContactService;
  message: string;
};

export type SubmitContactResult =
  | {
      ok: true;
      delivered: true;
      messageId?: string;
      honeypot?: false;
    }
  | {
      ok: true;
      delivered: false;
      honeypot: true;
    }
  | {
      ok: false;
      code: "VALIDATION_ERROR" | "EMAIL_NOT_CONFIGURED" | "EMAIL_PROVIDER_ERROR";
      message: string;
      status: number;
      logDetail?: string;
    };

function asTrimmed(value: unknown, max: number): string {
  if (typeof value !== "string") return "";
  return value.trim().slice(0, max);
}

function isValidEmail(email: string): boolean {
  return email.length <= FIELD_LIMITS.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone: string): boolean {
  if (phone.length < 7) return false;
  const digits = phone.replace(/\D/g, "");
  return digits.length >= 10 && digits.length <= 15;
}

export function parseContactInquiry(
  body: ContactInquiryInput
):
  | { ok: true; data: ParsedContactInquiry; honeypot: boolean }
  | { ok: false; message: string } {
  const website = asTrimmed(body.website, FIELD_LIMITS.website);
  if (website) {
    return {
      ok: true,
      data: {
        name: "Spam",
        phone: "0000000000",
        message: "Honeypot",
      },
      honeypot: true,
    };
  }

  const name = asTrimmed(body.name, FIELD_LIMITS.name);
  const phone = asTrimmed(body.phone, FIELD_LIMITS.phone);
  const emailRaw = asTrimmed(body.email, FIELD_LIMITS.email);
  const message = asTrimmed(body.message, FIELD_LIMITS.message);
  const serviceRaw = asTrimmed(body.service, FIELD_LIMITS.service);

  if (!name || !phone || !message) {
    return { ok: false, message: "Name, phone, and project details are required." };
  }

  if (!isValidPhone(phone)) {
    return { ok: false, message: "Enter a valid phone number." };
  }

  if (emailRaw && !isValidEmail(emailRaw)) {
    return { ok: false, message: "Enter a valid email address or leave it blank." };
  }

  let service: ContactService | undefined;
  if (serviceRaw) {
    if (!CONTACT_SERVICES.includes(serviceRaw as ContactService)) {
      return { ok: false, message: "Invalid service selection." };
    }
    service = serviceRaw as ContactService;
  }

  return {
    ok: true,
    honeypot: false,
    data: {
      name,
      phone,
      email: emailRaw || undefined,
      service,
      message,
    },
  };
}

function buildEmailContent(data: ParsedContactInquiry): {
  subject: string;
  text: string;
  html: string;
} {
  const subject = `Service request — ${data.service || "Electrical work"} — ${data.name}`;
  const lines = [
    `Name: ${data.name}`,
    `Phone: ${data.phone}`,
    data.email ? `Email: ${data.email}` : null,
    data.service ? `Service: ${data.service}` : null,
    "",
    "Project details:",
    data.message,
    "",
    "Sent from dialedinelectricroseburg.com/contact",
  ].filter(Boolean) as string[];

  const text = lines.join("\n");

  const html = `<!DOCTYPE html>
<html><body style="font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,sans-serif;padding:24px;background:#f4f4f4;">
  <table style="max-width:560px;margin:0 auto;background:#fff;border:1px solid #ddd;padding:20px;">
    <h2 style="margin:0 0 16px;font-size:18px;color:#1a1a1a;">New service request</h2>
    <p style="margin:0 0 8px;font-size:14px;"><strong>Name:</strong> ${escapeHtml(data.name)}</p>
    <p style="margin:0 0 8px;font-size:14px;"><strong>Phone:</strong> ${escapeHtml(data.phone)}</p>
    ${data.email ? `<p style="margin:0 0 8px;font-size:14px;"><strong>Email:</strong> ${escapeHtml(data.email)}</p>` : ""}
    ${data.service ? `<p style="margin:0 0 8px;font-size:14px;"><strong>Service:</strong> ${escapeHtml(data.service)}</p>` : ""}
    <p style="margin:16px 0 8px;font-size:14px;font-weight:600;">Project details</p>
    <p style="margin:0;font-size:14px;line-height:1.6;white-space:pre-wrap;">${escapeHtml(data.message)}</p>
  </table>
</body></html>`;

  return { subject, text, html };
}

export async function submitContactInquiry(
  body: ContactInquiryInput,
  deps: SendLeadEmailDeps = {}
): Promise<SubmitContactResult> {
  const parsed = parseContactInquiry(body);
  if (!parsed.ok) {
    return {
      ok: false,
      code: "VALIDATION_ERROR",
      message: parsed.message,
      status: 400,
    };
  }

  if (parsed.honeypot) {
    return { ok: true, delivered: false, honeypot: true };
  }

  const { subject, text, html } = buildEmailContent(parsed.data);
  const emailResult = await sendLeadEmail(
    {
      subject,
      text,
      html,
      replyTo: parsed.data.email,
    },
    deps
  );

  if (!emailResult.ok) {
    const status = emailResult.code === "EMAIL_NOT_CONFIGURED" ? 503 : 503;
    return {
      ok: false,
      code: emailResult.code,
      message:
        emailResult.code === "EMAIL_NOT_CONFIGURED"
          ? "Service requests are temporarily unavailable. Please call us directly."
          : "We could not send your request right now. Please call or email us directly.",
      status,
      logDetail: emailResult.logDetail,
    };
  }

  return {
    ok: true,
    delivered: true,
    messageId: emailResult.messageId,
    honeypot: false,
  };
}