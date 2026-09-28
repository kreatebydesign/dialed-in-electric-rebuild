/**
 * Site analytics abstraction — GA4 Google tag (gtag.js).
 * Keeps a single event API; also mirrors to dataLayer for debugging.
 * Do not add a second GTM/GA stack alongside this.
 */

export const GA_MEASUREMENT_ID = "G-CELWZ8FRQG";

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
    dataLayer?: unknown[];
    gtag?: (...args: unknown[]) => void;
  }
}

const PII_PARAM_KEYS = new Set([
  "name",
  "email",
  "phone",
  "message",
  "website",
  "user_email",
  "user_phone",
  "user_name",
  "form_message",
  "mailto",
]);

function currentPagePath(): string {
  if (typeof window === "undefined") return "";
  return `${window.location.pathname}${window.location.search}`;
}

/** Strip visitor PII and normalize params for GA4. */
export function sanitizeEventParams(
  params: AnalyticsEventParams = {}
): Record<string, string | number | boolean> {
  const out: Record<string, string | number | boolean> = {};

  for (const [key, value] of Object.entries(params)) {
    if (value === undefined) continue;
    if (PII_PARAM_KEYS.has(key)) continue;

    // Prefer GA4-friendly link_location; accept legacy `location`
    if (key === "location") {
      out.link_location = String(value);
      continue;
    }

    if (key === "href") {
      const href = String(value);
      if (href.startsWith("tel:")) {
        out.link_type = "tel";
      } else if (href.startsWith("mailto:")) {
        out.link_type = "mailto";
      } else if (href.startsWith("http") || href.startsWith("/")) {
        try {
          const url = href.startsWith("http")
            ? new URL(href)
            : new URL(href, window.location.origin);
          out.link_url = `${url.pathname}${url.search}`;
        } catch {
          out.link_url = href.split("?")[0];
        }
      }
      continue;
    }

    out[key] = value;
  }

  out.page_path = currentPagePath();
  out.event_source = "dialed_in_site";

  return out;
}

export function trackEvent(
  event: AnalyticsEventName,
  params: AnalyticsEventParams = {}
): void {
  if (typeof window === "undefined") return;

  const safeParams = sanitizeEventParams(params);

  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({ event, ...safeParams });

  if (typeof window.gtag === "function") {
    window.gtag("event", event, safeParams);
  }

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics]", event, safeParams);
  }
}

/**
 * Manual page_view for App Router client navigations.
 * Initial load page_view comes from gtag('config') — do not call this on first mount.
 */
export function trackPageView(url: string): void {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") return;

  window.gtag("event", "page_view", {
    page_path: url,
    page_location: `${window.location.origin}${url}`,
    page_title: document.title,
  });

  if (process.env.NODE_ENV === "development") {
    console.debug("[analytics] page_view", url);
  }
}
