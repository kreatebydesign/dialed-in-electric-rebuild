/**
 * Server-side lead notification via Resend. Secrets stay on the server.
 * RESEND_FROM_EMAIL must be a verified sender in the Resend dashboard.
 */

import { Resend } from "resend";
import { getLeadInboxEmail } from "@/lib/contact/constants";

export type LeadEmailPayload = {
  subject: string;
  replyTo?: string;
  text: string;
  html: string;
};

export type LeadEmailResult =
  | { ok: true; messageId?: string }
  | { ok: false; code: "EMAIL_NOT_CONFIGURED" | "EMAIL_PROVIDER_ERROR"; logDetail?: string };

export function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

export function isResendConfigured(): boolean {
  return Boolean(
    process.env.RESEND_API_KEY?.trim() && process.env.RESEND_FROM_EMAIL?.trim()
  );
}

export type SendLeadEmailDeps = {
  resendApiKey?: string;
  fromEmail?: string;
  toEmail?: string;
  sendEmail?: (args: {
    from: string;
    to: string[];
    replyTo?: string;
    subject: string;
    text: string;
    html: string;
  }) => Promise<{ id?: string; error?: { name?: string; message?: string } | null }>;
};

export async function sendLeadEmail(
  payload: LeadEmailPayload,
  deps: SendLeadEmailDeps = {}
): Promise<LeadEmailResult> {
  const apiKey = (deps.resendApiKey ?? process.env.RESEND_API_KEY ?? "").trim();
  const from = (deps.fromEmail ?? process.env.RESEND_FROM_EMAIL ?? "").trim();
  const to = (deps.toEmail ?? getLeadInboxEmail()).trim();

  if (!apiKey || !from) {
    return {
      ok: false,
      code: "EMAIL_NOT_CONFIGURED",
      logDetail: !apiKey ? "missing_api_key" : "missing_from_email",
    };
  }

  if (payload.replyTo && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(payload.replyTo)) {
    return {
      ok: false,
      code: "EMAIL_PROVIDER_ERROR",
      logDetail: "invalid_reply_to",
    };
  }

  const send =
    deps.sendEmail ??
    (async (args) => {
      const resend = new Resend(apiKey);
      const { data, error } = await resend.emails.send({
        from: args.from,
        to: args.to,
        replyTo: args.replyTo,
        subject: args.subject,
        text: args.text,
        html: args.html,
      });
      return { id: data?.id, error };
    });

  try {
    const result = await send({
      from,
      to: [to],
      replyTo: payload.replyTo,
      subject: payload.subject,
      text: payload.text,
      html: payload.html,
    });

    if (result.error) {
      return {
        ok: false,
        code: "EMAIL_PROVIDER_ERROR",
        logDetail: result.error.name || result.error.message || "resend_error",
      };
    }

    return { ok: true, messageId: result.id };
  } catch (error) {
    return {
      ok: false,
      code: "EMAIL_PROVIDER_ERROR",
      logDetail: error instanceof Error ? error.name : "send_exception",
    };
  }
}