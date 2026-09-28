/**
 * Lead / conversion event abstraction.
 * Pushes to window.dataLayer when present (GTM-compatible).
 * Does not assume GA4 is configured — wire GTM/GA4 separately when IDs exist.
 */

export type AnalyticsEventName =
  | "phone_click"
  | "email_click"
  | "request_service_click"
  | "quote_form_start"
  | "quote_form_submit_success"
  | "quote_form_submit_error";

export type AnalyticsEventParams = Record<string, string | number | boolean | undefined>;

declare global {
  interface Window {
    dataLayer?: Record<string, unknown>[];
  }
}

export function trackEvent(
  event: AnalyticsEventName,
  params: AnalyticsEventParams = {}
): void {
  if (typeof window === "undefined") return;

  const payload = {
    event,
    ...params,
    event_source: "dialed_in_site",
  };

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(payload);

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", payload);
  }
}
