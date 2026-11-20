import Link from "next/link";
import {
  BUSINESS_EMAIL,
  BUSINESS_PHONE_DISPLAY,
  BUSINESS_PHONE_TEL,
} from "@/lib/contact/constants";
import { IconArrowNE } from "@/components/ui/ProtoIcons";

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
          {BUSINESS_PHONE_DISPLAY}
          <IconArrowNE className="proto-icon proto-icon--ne" size={11} />
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
        <p className="proto-kxd-credit__attribution">
          Digital experience designed and developed by{" "}
          <a
            href="https://www.kreatebydesign.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Kreate by Design
          </a>
        </p>
      </div>
    </footer>
  );
}