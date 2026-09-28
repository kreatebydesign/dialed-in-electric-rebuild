"use client";

import { FormEvent, useState } from "react";
import { trackEvent } from "@/lib/analytics";

type Status = "idle" | "submitting" | "success" | "error" | "mailto_fallback";

const SERVICES = [
  "Generac generator installation",
  "Manual transfer switch / backup power",
  "Panel or service upgrade",
  "New home / construction wiring",
  "Commercial electrical",
  "EV charger installation",
  "Other electrical work",
] as const;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [started, setStarted] = useState(false);

  function markStarted() {
    if (started) return;
    setStarted(true);
    trackEvent("quote_form_start", { location: "contact_page" });
  }

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") || "").trim(),
      phone: String(data.get("phone") || "").trim(),
      email: String(data.get("email") || "").trim(),
      service: String(data.get("service") || "").trim(),
      message: String(data.get("message") || "").trim(),
      website: String(data.get("website") || "").trim(), // honeypot
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

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      const json = (await res.json()) as {
        ok?: boolean;
        method?: string;
        mailto?: string;
        error?: string;
      };

      if (res.ok && json.ok && json.method === "endpoint") {
        setStatus("success");
        form.reset();
        setStarted(false);
        trackEvent("quote_form_submit_success", {
          location: "contact_page",
          method: "endpoint",
        });
        return;
      }

      if (res.ok && json.mailto) {
        setStatus("mailto_fallback");
        trackEvent("quote_form_submit_success", {
          location: "contact_page",
          method: "mailto_fallback",
        });
        window.location.href = json.mailto;
        return;
      }

      setStatus("error");
      setErrorMessage(json.error || "Something went wrong. Please call 541-817-6480.");
      trackEvent("quote_form_submit_error", {
        location: "contact_page",
        reason: "api",
      });
    } catch {
      setStatus("error");
      setErrorMessage("Network error. Please call 541-817-6480 or email Dialedinelectric@gmail.com.");
      trackEvent("quote_form_submit_error", {
        location: "contact_page",
        reason: "network",
      });
    }
  }

  if (status === "success") {
    return (
      <div
        className="bg-white border border-edge rounded-sm p-7 lg:p-8"
        role="status"
        aria-live="polite"
      >
        <p className="text-[15px] font-extrabold text-charcoal-deep mb-2">Request received</p>
        <p className="text-[14px] text-muted leading-relaxed mb-5">
          Thanks — we&apos;ll review your project details and get back to you. For faster help, call{" "}
          <a
            href="tel:15418176480"
            data-track="phone_click"
            data-track-location="contact_form_success"
            className="text-amber font-semibold hover:underline"
          >
            541-817-6480
          </a>
          .
        </p>
        <button
          type="button"
          onClick={() => setStatus("idle")}
          className="text-[13px] font-semibold text-charcoal underline underline-offset-2 hover:text-amber"
        >
          Send another request
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
        Tell us about the job. We&apos;ll follow up by phone or email — or call{" "}
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

      {(status === "error" || status === "mailto_fallback") && (
        <p
          className={`text-[13px] mb-4 ${status === "error" ? "text-red-700" : "text-charcoal"}`}
          role="alert"
        >
          {status === "mailto_fallback"
            ? "Opening your email app so the request reaches Dialed In Electric. If nothing opens, call 541-817-6480."
            : errorMessage}
        </p>
      )}

      <button
        type="submit"
        disabled={status === "submitting"}
        className="inline-flex items-center justify-center h-12 px-7 w-full sm:w-auto bg-amber text-charcoal-deep font-semibold text-[15px] tracking-wide rounded-sm hover:bg-amber-dark hover:-translate-y-px hover:shadow-md transition-all duration-200 disabled:opacity-60 disabled:pointer-events-none"
      >
        {status === "submitting" ? "Sending…" : "Send Request"}
      </button>
      <p className="text-[12px] text-muted mt-4">
        Oregon CCB# 228668 · Serving Roseburg and Douglas County
      </p>
    </form>
  );
}
