"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "handoff" | "error";

const BUSINESS_EMAIL = "Dialedinelectric@gmail.com";

const SERVICES = [
  "Generac generator installation",
  "Manual transfer switch / backup power",
  "Panel or service upgrade",
  "New home / construction wiring",
  "Commercial electrical",
  "EV charger installation",
  "Other electrical work",
] as const;

function buildMailto(payload: {
  name: string;
  phone: string;
  email: string;
  service: string;
  message: string;
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

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [started, setStarted] = useState(false);
  const [mailtoHref, setMailtoHref] = useState("");

  function markStarted() {
    if (started) return;
    setStarted(true);
    trackEvent("quote_form_start", { location: "contact_page" });
  }

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      service: String(data.get("service") || "").trim(),
      message: String(data.get("message") || "").trim(),
      website: String(data.get("website") || "").trim(),
    };

    // Honeypot — bots only
    if (payload.website) {
      setStatus("handoff");
      return;
    }

    if (!payload.name || !payload.phone || !payload.message) {
      setStatus("error");
      setErrorMessage("Please include your name, phone number, and a short project description.");
      trackEvent("quote_form_submit_error", {
        location: "contact_page",
        reason: "validation",
      });
      return;
    }

    const href = buildMailto(payload);
    setMailtoHref(href);
    setStatus("handoff");

    // Mailto opens the visitor's email app — this is a handoff, not confirmed delivery.
    // Do not fire quote_form_submit_success.
    window.location.href = href;
  }

  if (status === "handoff") {
    return (
        <div
        className="bg-white border border-edge rounded-sm p-7 lg:p-8 relative overflow-hidden"
        role="status"
        aria-live="polite"
      >
        <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
        <p className="text-[15px] font-extrabold text-charcoal-deep mb-2">
          Finish in your email app
        </p>
        <p className="text-[14px] text-muted leading-relaxed mb-4">
          Your email app should open with a message addressed to{" "}
          <span className="font-semibold text-charcoal">{BUSINESS_EMAIL}</span>. Send that
          message to complete your request.
        </p>
        <p className="text-[14px] text-muted leading-relaxed mb-5">
          If nothing opened, tap the button below, or call / email us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 mb-5">
          {mailtoHref && (
            <a
              href={mailtoHref}
              data-track="email_click"
              data-track-location="contact_form_handoff"
              className="inline-flex items-center justify-center h-12 px-7 bg-amber text-charcoal-deep font-semibold text-[15px] tracking-wide rounded-sm hover:bg-amber-dark transition-colors"
            >
              Open Email Again
            </a>
          )}
          <a
            href="tel:15418176480"
            data-track="phone_click"
            data-track-location="contact_form_handoff"
            className="inline-flex items-center justify-center h-12 px-7 bg-transparent text-charcoal border border-charcoal/25 font-semibold text-[15px] tracking-wide rounded-sm hover:bg-charcoal-deep hover:text-white hover:border-charcoal-deep transition-colors"
          >
            Call 541-817-6480
          </a>
        </div>
        <p className="text-[13px] text-muted mb-4">
          Or email{" "}
          <a
            href={`mailto:${BUSINESS_EMAIL}`}
            data-track="email_click"
            data-track-location="contact_form_handoff"
            className="text-amber font-semibold hover:underline"
          >
            {BUSINESS_EMAIL}
          </a>
        </p>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            setMailtoHref("");
          }}
          className="text-[13px] font-semibold text-charcoal underline underline-offset-2 hover:text-amber"
        >
          Edit request details
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={onSubmit}
      onFocus={markStarted}
      className="bg-white border border-edge rounded-sm p-7 lg:p-8 relative overflow-hidden"
      noValidate
    >
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
      <h2 className="text-[15px] font-extrabold text-charcoal-deep mb-1">Request a Quote</h2>
      <p className="text-[13px] text-muted leading-relaxed mb-6">
        Tell us about the job. We&apos;ll open your email app with the details filled in — or call{" "}
        <a
          href="tel:15418176480"
          data-track="phone_click"
          data-track-location="contact_form"
          className="text-amber font-semibold hover:underline"
        >
          541-817-6480
        </a>{" "}
        now.
      </p>

      {/* Honeypot — leave empty */}
      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="grid sm:grid-cols-2 gap-4 mb-4">
        <div>
          <label htmlFor="name" className="block text-[12px] font-semibold text-charcoal mb-1.5">
            Name <span className="text-amber">*</span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            autoComplete="name"
            className="w-full h-11 px-3 rounded-sm border border-edge bg-surface text-[14px] text-charcoal focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-[12px] font-semibold text-charcoal mb-1.5">
            Phone <span className="text-amber">*</span>
          </label>
          <input
            id="phone"
            name="phone"
            type="tel"
            required
            autoComplete="tel"
            className="w-full h-11 px-3 rounded-sm border border-edge bg-surface text-[14px] text-charcoal focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber"
          />
        </div>
      </div>

      <div className="mb-4">
        <label htmlFor="email" className="block text-[12px] font-semibold text-charcoal mb-1.5">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          autoComplete="email"
          className="w-full h-11 px-3 rounded-sm border border-edge bg-surface text-[14px] text-charcoal focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber"
        />
      </div>

      <div className="mb-4">
        <label htmlFor="service" className="block text-[12px] font-semibold text-charcoal mb-1.5">
          Service needed
        </label>
        <select
          id="service"
          name="service"
          defaultValue=""
          className="w-full h-11 px-3 rounded-sm border border-edge bg-surface text-[14px] text-charcoal focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber"
        >
          <option value="" disabled>
            Select a service
          </option>
          {SERVICES.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-5">
        <label htmlFor="message" className="block text-[12px] font-semibold text-charcoal mb-1.5">
          Project details <span className="text-amber">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Address/area, what you need, and any timing notes."
          className="w-full px-3 py-2.5 rounded-sm border border-edge bg-surface text-[14px] text-charcoal focus:outline-none focus:ring-2 focus:ring-amber focus:border-amber resize-y min-h-[110px]"
        />
      </div>

      {status === "error" && (
        <p className="text-[13px] mb-4 text-red-700" role="alert">
          {errorMessage}
        </p>
      )}

      <button
        type="submit"
        className="inline-flex items-center justify-center h-12 px-7 w-full sm:w-auto bg-amber text-charcoal-deep font-semibold text-[15px] tracking-wide rounded-sm hover:bg-amber-dark hover:-translate-y-px hover:shadow-md transition-all duration-200"
      >
        Send Request
      </button>
      <p className="text-[12px] text-muted mt-4">
        Opens your email to {BUSINESS_EMAIL} · Oregon CCB# 228668 · Serving Roseburg and Douglas
        County
      </p>
    </form>
  );
}
