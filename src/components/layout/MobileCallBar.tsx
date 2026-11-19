"use client";

import Link from "next/link";

export default function MobileCallBar() {
  return (
    <div
      className="fixed bottom-0 inset-x-0 z-40 lg:hidden border-t border-edge bg-obsidian/95 backdrop-blur-md pb-[env(safe-area-inset-bottom)]"
      role="region"
      aria-label="Quick contact"
    >
      <div className="grid grid-cols-2">
        <a
          href="tel:15418176480"
          data-track="phone_click"
          data-track-location="mobile_call_bar"
          className="flex items-center justify-center gap-2 h-12 text-[13px] font-semibold text-white border-r border-edge hover:bg-white/5 transition-colors"
        >
          <svg
            className="w-4 h-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.75}
            aria-hidden="true"
          >
            <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 10.8 19.79 19.79 0 011.03 2.18 2 2 0 013 0h3a2 2 0 012 1.72c.22.66.56 1.32.7 2.81a2 2 0 01-.45 2.11L7.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.85.24 1.72.43 2.81.7A2 2 0 0122 14.92v2z" />
          </svg>
          Call 541-817-6480
        </a>
        <Link
          href="/contact"
          data-track="request_service_click"
          data-track-location="mobile_call_bar"
          className="flex items-center justify-center gap-2 h-12 text-[13px] font-semibold text-charcoal-deep bg-white hover:bg-white/90 transition-colors"
        >
          Request Service
        </Link>
      </div>
    </div>
  );
}