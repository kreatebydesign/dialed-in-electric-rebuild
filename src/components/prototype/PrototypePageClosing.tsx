import Link from "next/link";
import { ProtoNeMark } from "@/components/ui/ProtoDecor";

type PrototypePageClosingProps = {
  trackLocation?: string;
};

export default function PrototypePageClosing({
  trackLocation = "page_close",
}: PrototypePageClosingProps) {
  return (
    <section className="proto-closing border-t border-[var(--proto-line)]">
      <div>
        <div className="proto-eyebrow proto-muted">NEXT STEP</div>
        <h2 className="proto-display">
          HAVE A
          <br />
          PROJECT?
        </h2>
      </div>
      <div className="proto-closing-right">
        <p>
          Generator installs, panel work, or electrical service in Roseburg and Douglas
          County. Call or send a request with your project details.
        </p>
        <a
          className="proto-phone-big"
          href="tel:15418176480"
          data-track="phone_click"
          data-track-location={trackLocation}
        >
          <span className="proto-phone-big__label">
            541 817 6480
            <ProtoNeMark size={14} />
          </span>
        </a>
        <Link
          className="proto-btn"
          href="/contact"
          data-track="request_service_click"
          data-track-location={trackLocation}
        >
          REQUEST SERVICE
          <ProtoNeMark />
        </Link>
      </div>
    </section>
  );
}