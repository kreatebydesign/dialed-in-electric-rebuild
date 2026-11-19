import { submitContactInquiry } from "@/lib/contact-inquiry";
import { MAX_CONTACT_JSON_BYTES, RATE_LIMIT } from "@/lib/contact/constants";
import { checkRateLimit, clientIpFromRequest } from "@/lib/rate-limit";

export const runtime = "nodejs";

type ApiSuccess = {
  ok: true;
  delivered: boolean;
  messageId?: string;
};

type ApiError = {
  ok: false;
  code: string;
  message: string;
};

export async function POST(request: Request): Promise<Response> {
  const contentLength = Number(request.headers.get("content-length") || "0");
  if (contentLength > MAX_CONTACT_JSON_BYTES) {
    return json<ApiError>(
      {
        ok: false,
        code: "PAYLOAD_TOO_LARGE",
        message: "Request too large. Please shorten your message or call us.",
      },
      413
    );
  }

  const ip = clientIpFromRequest(request);
  const rate = checkRateLimit({
    key: `contact:${ip}`,
    limit: RATE_LIMIT.limit,
    windowMs: RATE_LIMIT.windowMs,
  });

  if (!rate.ok) {
    return json<ApiError>(
      {
        ok: false,
        code: "RATE_LIMITED",
        message: "Too many requests. Please wait a few minutes or call us directly.",
      },
      429,
      { "Retry-After": String(rate.retryAfterSeconds) }
    );
  }

  let body: unknown;
  try {
    const raw = await request.text();
    if (raw.length > MAX_CONTACT_JSON_BYTES) {
      return json<ApiError>(
        {
          ok: false,
          code: "PAYLOAD_TOO_LARGE",
          message: "Request too large. Please shorten your message or call us.",
        },
        413
      );
    }
    body = raw ? JSON.parse(raw) : {};
  } catch {
    return json<ApiError>(
      { ok: false, code: "INVALID_JSON", message: "Invalid request." },
      400
    );
  }

  const result = await submitContactInquiry(body as Record<string, unknown>);

  if (!result.ok) {
    if (result.logDetail) {
      console.error("[contact] delivery_failed", {
        code: result.code,
        detail: result.logDetail,
      });
    }
    return json<ApiError>(
      { ok: false, code: result.code, message: result.message },
      result.status
    );
  }

  if (result.honeypot) {
    return json<ApiSuccess>({ ok: true, delivered: false }, 200);
  }

  if (result.messageId) {
    console.info("[contact] delivered", { id: result.messageId });
  }

  return json<ApiSuccess>(
    {
      ok: true,
      delivered: true,
      messageId: result.messageId,
    },
    200
  );
}

function json<T>(
  payload: T,
  status: number,
  headers?: Record<string, string>
): Response {
  return Response.json(payload, { status, headers });
}