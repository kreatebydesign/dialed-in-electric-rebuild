"use client";

import { useEffect, useRef } from "react";
import { usePathname, useSearchParams } from "next/navigation";
import {
  trackEvent,
  trackPageView,
  type AnalyticsEventName,
} from "@/lib/analytics";

const VALID_EVENTS = new Set<AnalyticsEventName>([
  "phone_click",
  "email_click",
  "request_service_click",
  "quote_form_start",
  "quote_form_submit_error",
]);

/**
 * - Delegates [data-track] clicks into trackEvent → gtag
 * - Sends page_view on App Router client navigations only (skips first mount
 *   so gtag config's initial page_view is not duplicated)
 */
export default function AnalyticsBootstrap() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const isFirstPath = useRef(true);

  useEffect(() => {
    const search = searchParams?.toString();
    const url = search ? `${pathname}?${search}` : pathname;

    if (isFirstPath.current) {
      isFirstPath.current = false;
      return;
    }

    trackPageView(url);
  }, [pathname, searchParams]);

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
