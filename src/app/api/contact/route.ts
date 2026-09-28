import { NextResponse } from "next/server";

type ContactPayload = {
  name?: string;
  phone?: string;
  email?: string;
  service?: string;
  message?: string;
  website?: string;
};

const BUSINESS_EMAIL = "Dialedinelectric@gmail.com";

function buildMailto(payload: Required<Pick<ContactPayload, "name" | "phone" | "message">> & {
  email?: string;
  service?: string;
}) {
  const subject = encodeURIComponent(
    `Service request — ${payload.service || "Electrical work"} — ${payload.name}`
  );
  const body = encodeURIComponent(
    [
      `Name: ${payload.name}`,
      `Phone: ${payload.phone}`,
      payload.email ? `Email: ${payload.email}` : null,
      payload.service ? `Service: ${payload.service}` : null,
      "",
      "Project details:",
      payload.message,
    ]
      .filter(Boolean)
      .join("\n")
  );
  return `mailto:${BUSINESS_EMAIL}?subject=${subject}&body=${body}`;
}

export async function POST(request: Request) {
  let body: ContactPayload;
  try {
    body = (await request.json()) as ContactPayload;
  } catch {
    return NextResponse.json({ ok: false, error: "Invalid request body." }, { status: 400 });
  }

  // Honeypot filled → pretend success (bots)
  if (body.website && body.website.trim().length > 0) {
    return NextResponse.json({ ok: true, method: "endpoint" });
  }

  const name = (body.name || "").trim();
  const phone = (body.phone || "").trim();
  const email = (body.email || "").trim();
  const service = (body.service || "").trim();
  const message = (body.message || "").trim();

  if (!name || !phone || !message) {
    return NextResponse.json(
      { ok: false, error: "Name, phone, and project details are required." },
      { status: 400 }
    );
  }

  if (name.length > 120 || phone.length > 40 || email.length > 120 || message.length > 4000) {
    return NextResponse.json({ ok: false, error: "One or more fields are too long." }, { status: 400 });
  }

  const endpoint = process.env.CONTACT_FORM_ENDPOINT || process.env.FORMSPREE_ENDPOINT;

  if (endpoint) {
    try {
      const upstream = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          phone,
          email: email || undefined,
          service: service || undefined,
          message,
          _subject: `Dialed In Electric lead — ${service || "Service request"}`,
        }),
      });

      if (!upstream.ok) {
        const mailto = buildMailto({ name, phone, email, service, message });
        return NextResponse.json({
          ok: true,
          method: "mailto_fallback",
          mailto,
          error: "Form endpoint unavailable; falling back to email.",
        });
      }

      return NextResponse.json({ ok: true, method: "endpoint" });
    } catch {
      const mailto = buildMailto({ name, phone, email, service, message });
      return NextResponse.json({
        ok: true,
        method: "mailto_fallback",
        mailto,
      });
    }
  }

  // No third-party endpoint configured — open a prefilled mailto so the lead still reaches the business.
  return NextResponse.json({
    ok: true,
    method: "mailto_fallback",
    mailto: buildMailto({ name, phone, email, service, message }),
  });
}
