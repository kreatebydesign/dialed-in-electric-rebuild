import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import PrototypePageClosing from "@/components/prototype/PrototypePageClosing";
import PrototypePageHero from "@/components/prototype/PrototypePageHero";
import PrototypeInquiryBand from "@/components/prototype/PrototypeInquiryBand";
import {
  ProtoFactRow,
  ProtoInnerShell,
  ProtoLinkList,
  ProtoPoints,
  ProtoSection,
} from "@/components/prototype/PrototypeInner";
export const metadata: Metadata = {
  title: {
    absolute: "Electrical Services Roseburg OR | Panel, Wiring, EV Charger | Dialed In Electric",
  },
  description:
    "Full-service electrical contractor in Roseburg, OR. Panel upgrades, new home wiring, commercial wiring, generator installation, and EV charger installation. Licensed & insured. CCB# 228668.",
  keywords: [
    "electrician Roseburg OR",
    "electrical contractor Roseburg Oregon",
    "electrical services Roseburg",
    "licensed electrician Roseburg",
    "residential electrician Roseburg",
    "commercial electrician Roseburg",
    "Generac generator installation Roseburg",
  ],
  alternates: { canonical: "/electrical-services" },
  openGraph: {
    title: "Electrical Services Roseburg OR | Dialed In Electric",
    description:
      "Panel upgrades, new home wiring, commercial wiring, generator installation, and EV chargers. Licensed electrician in Roseburg, OR. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/electrical-services",
    images: [
      {
        url: "/images/gallery/commercial-electrical-service.jpg",
        width: 1200,
        height: 630,
        alt: "Commercial electrical service work in Roseburg, Oregon",
      },
    ],
  },
};

const services = [
  { label: "Generac standby generators", href: "/generators", note: "Pad, transfer switch, gas coordination, startup" },
  { label: "Manual transfer switches", href: "/backup-power", note: "Portable generator hookups" },
  { label: "Panel and service upgrades", href: "/panel-upgrades", note: "200-amp and meter work" },
  { label: "New home wiring", href: "/new-home-wiring", note: "Rough-in through trim-out" },
  { label: "Commercial electrical", href: "/commercial", note: "Shops and tenant improvements" },
  { label: "EV charger installation", href: "/ev-charger", note: "Level 2 home charging circuits" },
];

const workSteps = [
  {
    title: "Clear quote first",
    body: "We review the job, ask the right questions, and give you a written scope before any work begins.",
  },
  {
    title: "Permits handled",
    body: "We pull required permits, schedule inspections, and track paperwork when the job needs it.",
  },
  {
    title: "Labeled, inspectable work",
    body: "When we finish, circuits are labeled and organized for the inspector.",
  },
];

const residentialPoints = [
  { title: "New home wiring", body: "Rough-in and trim-out for new construction and additions." },
  { title: "Panel and service upgrades", body: "100 to 200A upgrades, meter bases, and labeling." },
  { title: "Standby generators", body: "Generac installation with transfer equipment and startup." },
  { title: "Transfer switches", body: "Safer portable generator connections." },
  { title: "EV charger circuits", body: "Dedicated Level 2 circuits sized to your panel." },
  { title: "Service and troubleshooting", body: "Circuits, repairs, and load evaluation." },
];

const commercialPoints = [
  { title: "Tenant improvements", body: "Circuits, lighting, and panel changes for tenant spaces." },
  { title: "Shops and warehouses", body: "Machine circuits, lighting, and service work." },
  { title: "Service entrances", body: "Metering, disconnects, and panel additions." },
  { title: "Coordination", body: "We work with GCs and other trades on schedule." },
];

const repairPoints = [
  {
    title: "Tripped breakers and overloads",
    body: "We trace why a breaker keeps tripping, check connection points, and advise whether the circuit or panel needs an upgrade.",
  },
  {
    title: "Flickering lights or partial power",
    body: "Loose connections, damaged conductors, and service equipment issues can cause intermittent power. We test at the panel and the affected circuits.",
  },
  {
    title: "Dead outlets and circuits",
    body: "Isolated outages are often a single failed device, breaker, or junction. We locate the fault and repair or replace what failed.",
  },
  {
    title: "Load evaluation before big changes",
    body: "Adding HVAC, a hot tub, EV charger, or generator starts with whether your panel and service can support the load. Panel upgrade work is documented on our panel upgrades page.",
  },
];

const fieldPhotos = [
  {
    src: "/images/gallery/electrical-panel-interior.jpg",
    alt: "Labeled electrical panel interior, Roseburg OR",
  },
  {
    src: "/images/gallery/residential-service-upgrade.jpg",
    alt: "Residential service upgrade in Douglas County",
  },
  {
    src: "/images/gallery/commercial-meter-bank-install.jpg",
    alt: "Commercial meter bank installation",
  },
];

export default function ElectricalServicesPage() {
  return (
    <>
      <PrototypePageHero
        eyebrow="Electrical services"
        title={
          <>
            FULL-SERVICE
            <br />
            ELECTRICAL.
          </>
        }
        lead="Residential and commercial electrical in Roseburg and Douglas County: panel and service upgrades, generators, EV chargers, new construction, and commercial wiring. CCB# 228668."
        image="/images/gallery/commercial-electrical-service.jpg"
      />

      <PrototypeInquiryBand trackLocation="electrical_services_inquiry" />

      <ProtoFactRow
        items={[
          { label: "CCB# 228668", sub: "Oregon licensed and insured" },
          { label: "Generac standby", sub: "Installation focus" },
          { label: "Residential and commercial", sub: "Homes, shops, tenant improvements" },
          { label: "Douglas County", sub: "Roseburg and surrounding areas" },
        ]}
      />

      <ProtoInnerShell>
        <ProtoSection eyebrow="SERVICES" title="What we do">
          <p className="proto-inner-lead">
            Licensed electrical contractor based in Roseburg. Generator installs, panel work, new home wiring, and
            commercial jobs throughout Douglas County.
          </p>
          <ProtoLinkList items={services} />
        </ProtoSection>

        <ProtoSection eyebrow="RESIDENTIAL" title="Homes and rural properties">
          <ProtoPoints items={residentialPoints} />
        </ProtoSection>

        <ProtoSection eyebrow="REPAIRS" title="Troubleshooting and service calls">
          <p className="proto-inner-lead">
            Not every job is a full install. Homeowners and businesses call us for troubleshooting,
            repairs, and honest answers about whether equipment needs replacement versus a smaller fix.
          </p>
          <ProtoPoints items={repairPoints} />
          <p style={{ marginTop: 20 }}>
            Related services:{" "}
            <Link href="/panel-upgrades" className="proto-textlink">
              Panel upgrades <span className="arrow">→</span>
            </Link>
            ,{" "}
            <Link href="/generators" className="proto-textlink">
              Standby generators <span className="arrow">→</span>
            </Link>
            ,{" "}
            <Link href="/backup-power" className="proto-textlink">
              Backup power <span className="arrow">→</span>
            </Link>
            .
          </p>
        </ProtoSection>

        <ProtoSection eyebrow="COMMERCIAL" title="Shops and tenant work">
          <ProtoPoints items={commercialPoints} />
        </ProtoSection>

        <ProtoSection eyebrow="PROCESS" title="How we work">
          <ProtoPoints items={workSteps} />
          <div className="proto-inner-actions">
            <Link
              className="proto-btn"
              href="/contact"
              data-track="request_service_click"
              data-track-location="electrical_services_process"
            >
              REQUEST SERVICE <span>↗</span>
            </Link>
          </div>
        </ProtoSection>

        <ProtoSection eyebrow="FIELD PHOTOS" title="Recent work">
          <div
            className="proto-inner-split-media"
            style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
          >
            {fieldPhotos.map((photo) => (
              <Image
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                width={1200}
                height={900}
                className="proto-inner-photo"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            ))}
          </div>
          <p style={{ marginTop: 20 }}>
            <Link href="/projects" className="proto-textlink">
              More project photos <span className="arrow">→</span>
            </Link>
          </p>
        </ProtoSection>
      </ProtoInnerShell>

      <PrototypePageClosing trackLocation="electrical_services_close" />
    </>
  );
}