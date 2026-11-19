"use client";

import Link from "next/link";

export default function PrototypeMobileBar() {
  return (
    <div className="proto-mobile-bar lg:hidden pb-[env(safe-area-inset-bottom)]">
      <a
        href="tel:15418176480"
        data-track="phone_click"
        data-track-location="mobile_call_bar"
        className="flex items-center justify-center h-12 text-[11px] font-bold tracking-wide uppercase border-r border-white/10"
      >
        Call ↗
      </a>
      <Link
        href="/contact"
        data-track="request_service_click"
        data-track-location="mobile_call_bar"
        className="flex items-center justify-center h-12 text-[11px] font-bold tracking-wide uppercase bg-[#f2f2f0] text-[#111]"
      >
        Request ↗
      </Link>
    </div>
  );
}