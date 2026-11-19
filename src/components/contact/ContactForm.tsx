"use client";

import { FormEvent, useRef, useState } from "react";
import { shouldFireQuoteSubmitSuccess } from "@/lib/analytics-events";
import { trackEvent } from "@/lib/analytics";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
  CONTACT_SERVICES,
} from "@/lib/contact/constants";

type Status = "idle" | "submitting" | "success" | "error";

type ApiSuccess = { ok: true; delivered: boolean; messageId?: string };
type ApiError = { ok: false; code?: string; message?: string };

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [started, setStarted] = useState(false);
  const successTracked = useRef(false);

  function markStarted() {
    if (started) return;
    setStarted(true);
    trackEvent("quote_form_start", { location: "contact_page" });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status === "submitting") return;

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

    if (!payload.name || !payload.phone || !payload.message) {
      setStatus("error");
      setErrorMessage("Please include your name, phone number, and a short project description.");
      trackEvent("quote_form_submit_error", {
        location: "contact_page",
        reason: "validation",
      });
      return;
    }

    setStatus("submitting");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      let json: ApiSuccess | ApiError | null = null;
      try {
        json = (await res.json()) as ApiSuccess | ApiError;
      } catch {
        json = null;
      }

      if (!res.ok || !json || !json.ok) {
        setStatus("error");
        const message =
          json && !json.ok && json.message
            ? json.message
            : "We could not send your request. Please call or email us directly.";
        setErrorMessage(message);
        trackEvent("quote_form_submit_error", {
          location: "contact_page",
          reason: json && !json.ok ? json.code || "api_error" : "http_error",
        });
        return;
      }

      setStatus("success");
      if (
        shouldFireQuoteSubmitSuccess({
          delivered: json.delivered,
          messageId: json.messageId,
          alreadyTracked: successTracked.current,
        })
      ) {
        successTracked.current = true;
        trackEvent("quote_form_submit_success", { location: "contact_page" });
      }
      form.reset();
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Check your connection or call us directly.");
      trackEvent("quote_form_submit_error", {
        location: "contact_page",
        reason: "network",
      });
    }
  }

  if (status === "success") {
    return (
      <div className="proto-form-handoff" role="status" aria-live="polite">
        <h2>Request received</h2>
        <p>
          Your message was sent to Dialed In Electric. We will follow up using the phone number you
          provided, usually within one business day.
        </p>
        <p>If the matter is urgent, call us directly.</p>
        <div className="proto-form-actions">
          <a
            href={`tel:${BUSINESS_PHONE_TEL}`}
            className="proto-btn"
            data-track="phone_click"
            data-track-location="contact_form_success"
          >
            {BUSINESS_PHONE_DISPLAY} <span>↗</span>
          </a>
        </div>
        <button
          type="button"
          onClick={() => {
            setStatus("idle");
            successTracked.current = false;
          }}
          className="proto-textlink border-0 bg-transparent cursor-pointer p-0"
        >
          Send another request <span className="arrow">→</span>
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={onSubmit} onFocus={markStarted} className="proto-form" noValidate>
      <h2 id="contact-form-heading">Service request</h2>
      <p className="proto-form-intro">
        Share a few details about the job. We deliver your request directly to our inbox. Oregon
        CCB# 228668.
      </p>

      <div className="absolute -left-[9999px] opacity-0" aria-hidden="true">
        <label htmlFor="website">Website</label>
        <input id="website" name="website" type="text" tabIndex={-1} autoComplete="off" />
      </div>

      <div className="proto-form-grid">
        <div className="proto-field">
          <label htmlFor="name">
            Name <span aria-hidden="true">*</span>
          </label>
          <input id="name" name="name" type="text" required autoComplete="name" disabled={status === "submitting"} />
        </div>
        <div className="proto-field">
          <label htmlFor="phone">
            Phone <span aria-hidden="true">*</span>
          </label>
          <input id="phone" name="phone" type="tel" required autoComplete="tel" disabled={status === "submitting"} />
        </div>
        <div className="proto-field proto-field--full">
          <label htmlFor="email">Email</label>
          <input id="email" name="email" type="email" autoComplete="email" disabled={status === "submitting"} />
        </div>
        <div className="proto-field proto-field--full">
          <label htmlFor="service">Service needed</label>
          <select id="service" name="service" defaultValue="" disabled={status === "submitting"}>
            <option value="">Select a service (optional)</option>
            {CONTACT_SERVICES.map((s) => (
              <option key={s} value={s}>
                {s}
              </option>
            ))}
          </select>
        </div>
        <div className="proto-field proto-field--full">
          <label htmlFor="message">
            Project details <span aria-hidden="true">*</span>
          </label>
          <textarea
            id="message"
            name="message"
            required
            rows={4}
            disabled={status === "submitting"}
            placeholder="Location, panel or generator details, and any timing notes."
          />
        </div>
      </div>

      {status === "error" && (
        <div role="alert">
          <p className="proto-form-error">{errorMessage}</p>
          <div className="proto-form-actions">
            <a
              href={`tel:${BUSINESS_PHONE_TEL}`}
              className="proto-btn"
              data-track="phone_click"
              data-track-location="contact_form_error"
            >
              {BUSINESS_PHONE_DISPLAY} <span>↗</span>
            </a>
            <a
              href={`mailto:${BUSINESS_EMAIL}`}
              className="proto-textlink"
              data-track="email_click"
              data-track-location="contact_form_error"
            >
              {BUSINESS_EMAIL} <span className="arrow">↗</span>
            </a>
          </div>
        </div>
      )}

      <button type="submit" className="proto-btn" disabled={status === "submitting"}>
        {status === "submitting" ? "SENDING…" : "SUBMIT REQUEST"}
        <span>↗</span>
      </button>
      <p className="proto-form-foot">
        Delivered securely to our team at {BUSINESS_EMAIL}. Roseburg and Douglas County.
      </p>
    </form>
  );
}