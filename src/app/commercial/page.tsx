import type { Metadata } from "next";
import Image from "next/image";
import PrototypePageClosing from "@/components/prototype/PrototypePageClosing";
import PrototypePageHero from "@/components/prototype/PrototypePageHero";
import PrototypeInquiryBand from "@/components/prototype/PrototypeInquiryBand";
import {
  ProtoFactRow,
  ProtoInnerShell,
  ProtoPoints,
  ProtoSection,
} from "@/components/prototype/PrototypeInner";

export const metadata: Metadata = {
  title: {
    absolute: "Commercial Electrical Contractor in Roseburg, OR | Dialed In Electric",
  },
  description:
    "Commercial electrical contractor in Roseburg and Douglas County. Tenant improvements, shop wiring, machine circuits, lighting, and service work. CCB# 228668. Call 541-817-6480.",
  keywords: [
    "commercial electrician Roseburg OR",
    "commercial electrical contractor Roseburg",
    "commercial wiring Roseburg Oregon",
    "tenant improvement electrician Roseburg",
    "shop wiring Douglas County OR",
  ],
  alternates: { canonical: "/commercial" },
  openGraph: {
    title: "Commercial Electrical Contractor in Roseburg, OR | Dialed In Electric",
    description:
      "Commercial electrical in Roseburg and Douglas County. Tenant improvements, shops, machine circuits, and service work. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/commercial",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Commercial Electrical Services",
  description:
    "Commercial electrical contractor in Roseburg and Douglas County, OR. Tenant improvements, shop and warehouse wiring, machine circuits, lighting, service upgrades, and permit coordination.",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://dialedinelectricroseburg.com/#business",
  },
  areaServed: [
    {
      "@type": "City",
      name: "Roseburg",
      containedInPlace: { "@type": "State", name: "Oregon" },
    },
    {
      "@type": "AdministrativeArea",
      name: "Douglas County",
      containedInPlace: { "@type": "State", name: "Oregon" },
    },
  ],
  serviceType: "Commercial Electrical",
  url: "https://dialedinelectricroseburg.com/commercial",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://dialedinelectricroseburg.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Electrical Services",
      item: "https://dialedinelectricroseburg.com/electrical-services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "Commercial Electrical",
      item: "https://dialedinelectricroseburg.com/commercial",
    },
  ],
};

const workTypes = [
  {
    title: "Shops and warehouses",
    body: "Service and panel work, machine circuits, lighting, subpanels, and compressor or welder outlets.",
  },
  {
    title: "Tenant improvements",
    body: "Partition circuits, office lighting, exit lighting, and panel changes coordinated with your GC.",
  },
  {
    title: "Service and metering",
    body: "Commercial service entrances, multi-meter installs, grounding updates, and inspection coordination.",
  },
  {
    title: "Conduit and wiring",
    body: "EMT and MC runs, organized panels, circuit labeling, and trade coordination on site.",
  },
];

const processSteps = [
  {
    title: "Review scope and quote",
    body: "We walk the job or review plans, then provide a written scope before work starts.",
  },
  {
    title: "Permits and coordination",
    body: "Electrical permits are filed and inspections scheduled. We coordinate with other trades when needed.",
  },
  {
    title: "Install, label, inspect",
    body: "Clean conduit runs, labeled panels, and inspection before the job is closed out.",
  },
];

const fieldPhotos = [
  "/images/gallery/commercial-meter-bank-install.jpg",
  "/images/gallery/commercial-disconnect-install.jpg",
  "/images/gallery/commercial-electrical-service.jpg",
];

export default function CommercialPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PrototypePageHero
        eyebrow="Commercial"
        title={
          <>
            COMMERCIAL
            <br />
            ELECTRICAL.
          </>
        }
        lead="Shops, tenant improvements, warehouses, and service work in Roseburg and Douglas County. Permits, coordination with other trades, and inspections. CCB# 228668."
        image="/images/gallery/commercial-meter-bank-install.jpg"
        imagePosition="center 40%"
      />

      <PrototypeInquiryBand trackLocation="commercial_inquiry" />

      <ProtoFactRow
        items={[
          { label: "CCB# 228668", sub: "Oregon licensed and insured" },
          { label: "Light commercial", sub: "Shops and tenant improvements" },
          { label: "Permits", sub: "Inspection coordination included" },
          { label: "Douglas County", sub: "Roseburg crew" },
        ]}
      />

      <ProtoInnerShell>
        <ProtoSection
          eyebrow="COMMERCIAL WORK"
          title="Electrical for businesses in Douglas County"
          lead="We work with local business owners, property managers, and general contractors on shops, TI work, and service upgrades. We focus on light commercial scopes rather than large industrial projects."
        >
          <span className="sr-only">Commercial electrical overview</span>
        </ProtoSection>

        <ProtoSection eyebrow="SCOPE" title="What we do">
          <ProtoPoints items={workTypes} />
        </ProtoSection>

        <ProtoSection eyebrow="PROCESS" title="What to expect">
          <ProtoPoints items={processSteps} />
        </ProtoSection>

        <ProtoSection eyebrow="FIELD PHOTOS" title="Commercial installs">
          <div
            style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}
          >
            {fieldPhotos.map((src) => (
              <Image
                key={src}
                src={src}
                alt="Commercial electrical installation in Roseburg OR"
                width={1200}
                height={900}
                className="proto-inner-photo"
                sizes="(max-width: 900px) 100vw, 33vw"
              />
            ))}
          </div>
        </ProtoSection>
      </ProtoInnerShell>

      <PrototypePageClosing trackLocation="commercial_close" />
    </>
  );
}