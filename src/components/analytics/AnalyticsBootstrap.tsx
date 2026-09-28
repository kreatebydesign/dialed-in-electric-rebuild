"use client";

import { useEffect } from "react";
import { trackEvent, type AnalyticsEventName } from "@/lib/analytics";

const VALID_EVENTS = new Set<AnalyticsEventName>([
  "phone_click",
  "email_click",
  "request_service_click",
  "quote_form_start",
  "quote_form_submit_success",
  "quote_form_submit_error",
]);

/**
 * Delegates clicks on [data-track] elements so server-rendered
 * tel/mailto/CTA links can emit conversion events without becoming client trees.
 */
export default function AnalyticsBootstrap() {
  useEffect(() => {
    window.dataLayer = window.dataLayer || [];

    function onClick(e: MouseEvent) {
      const target = e.target as HTMLElement | null;
      if (!target) return;

      const el = target.closest<HTMLElement>("[data-track]");
      if (!el) return;

      const name = el.getAttribute("data-track") as AnalyticsEventName | null;
      if (!name || !VALID_EVENTS.has(name)) return;

      const location = el.getAttribute("data-track-location") || undefined;
      const href = el.getAttribute("href") || undefined;

      trackEvent(name, {
        location,
        href,
      });
    }

    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  return null;
}
