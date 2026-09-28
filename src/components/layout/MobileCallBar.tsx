"use client";

import Link from "next/link";

/**
 * Persistent mobile conversion bar — Call + Request Service.
 * Hidden on large screens where header CTAs are already visible.
 */
export default function MobileCallBar() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-white/10 bg-charcoal-deep/95 backdrop-blur-sm pb-[env(safe-area-inset-bottom)]"
      role="region"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2 gap-0">
        <a
          href="tel:15418176480"
          data-track="phone_click"
          data-track-location="mobile_call_bar"
          className="flex items-center justify-center gap-2 h-12 text-[13px] font-semibold text-amber hover:bg-white/5 transition-colors"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={2}
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 011.03 2.18 2 2 0 013 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 14.92v2z" />
          </svg>
          Call Now
        </a>
        <Link
          href="/contact"
          data-track="request_service_click"
          data-track-location="mobile_call_bar"
          className="flex items-center justify-center gap-2 h-12 text-[13px] font-semibold text-charcoal-deep bg-amber hover:bg-amber-dark transition-colors"
        >
          Request Service
        </Link>
      </div>
    </div>
  );
}
