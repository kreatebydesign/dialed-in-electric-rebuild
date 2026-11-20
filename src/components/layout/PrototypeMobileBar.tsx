"use client";

import Link from "next/link";
import { IconArrowNE } from "@/components/ui/ProtoIcons";

export default function PrototypeMobileBar() {
  return (
    <div className="proto-mobile-bar pb-[env(safe-area-inset-bottom)]">
      <a
        href="tel:15418176480"
        data-track="phone_click"
        data-track-location="mobile_call_bar"
        className="proto-mobile-bar__action"
      >
        Call
        <IconArrowNE className="proto-icon proto-icon--ne" size={11} />
      </a>
      <Link
        href="/contact"
        data-track="request_service_click"
        data-track-location="mobile_call_bar"
        className="proto-mobile-bar__action proto-mobile-bar__action--primary"
      >
        Request
        <IconArrowNE className="proto-icon proto-icon--ne" size={11} />
      </Link>
    </div>
  );
}