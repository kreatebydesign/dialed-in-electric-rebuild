import Link from "next/link";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from "@/lib/contact/constants";

export default function PrototypeFooter() {
  const year = new Date().getFullYear();

  return (
    <footer>
      <div className="proto-footer-bar">
        <span>DIALED IN ELECTRIC INC. · ROSEBURG, OREGON</span>
        <a
          href={`tel:${BUSINESS_PHONE_TEL}`}
          className="hover:text-white transition-colors"
          data-track="phone_click"
          data-track-location="footer"
        >
          {BUSINESS_PHONE_DISPLAY} ↗
        </a>
        <a
          href={`mailto:${BUSINESS_EMAIL}`}
          className="hover:text-white transition-colors normal-case tracking-normal"
          data-track="email_click"
          data-track-location="footer"
        >
          {BUSINESS_EMAIL}
        </a>
        <span>OREGON CCB #228668</span>
        <Link href="/privacy" className="hover:text-white transition-colors">
          Privacy
        </Link>
      </div>
      <div className="proto-kxd-credit">
        <span>© {year} Dialed In Electric Inc.</span>
        <div className="text-right">
          <span className="block text-[9px] tracking-[0.2em] text-[#5c5f62] mb-1">
            DIGITAL EXPERIENCE
          </span>
          <span>
            Designed &amp; Developed by{" "}
            <a
              href="https://www.kreatebydesign.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Kreate by Design
            </a>
          </span>
        </div>
      </div>
    </footer>
  );
}