import Link from "next/link";
import { ProtoNeMark, ProtoTextArrow } from "@/components/ui/ProtoDecor";

type PrototypeInquiryBandProps = {
  label?: string;
  trackLocation?: string;
};

export default function PrototypeInquiryBand({
  label = "Standby generator install in Roseburg or Douglas County? Call or send project details.",
  trackLocation = "inquiry_band",
}: PrototypeInquiryBandProps) {
  return (
    <div className="proto-inquiry-band">
      <p>{label}</p>
      <div className="proto-inner-actions" style={{ marginTop: 0 }}>
        <a
          className="proto-btn"
          href="tel:15418176480"
          data-track="phone_click"
          data-track-location={trackLocation}
        >
          541 817 6480
          <ProtoNeMark />
        </a>
        <Link
          className="proto-textlink"
          href="/contact"
          data-track="request_service_click"
          data-track-location={trackLocation}
        >
          REQUEST SERVICE
          <ProtoTextArrow />
        </Link>
      </div>
    </div>
  );
}