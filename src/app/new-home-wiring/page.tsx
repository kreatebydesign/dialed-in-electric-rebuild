import type { Metadata } from "next";
import Link from "next/link";
import PrototypePageClosing from "@/components/prototype/PrototypePageClosing";
import PrototypePageHero from "@/components/prototype/PrototypePageHero";
import PrototypeInquiryBand from "@/components/prototype/PrototypeInquiryBand";
import {
  ProtoFactRow,
  ProtoInnerShell,
  ProtoPoints,
  ProtoSection,
  ProtoSplit,
} from "@/components/prototype/PrototypeInner";

export const metadata: Metadata = {
  title: {
    absolute: "New Home Wiring & New Construction Electrician in Roseburg, OR | Dialed In Electric",
  },
  description:
    "New home wiring and new construction electrical in Roseburg and Douglas County. Rough-in through trim-out for builders, GCs, and owner-builders. CCB# 228668.",
  keywords: [
    "new home wiring Roseburg OR",
    "new construction electrician Roseburg",
    "rough in wiring Roseburg Oregon",
    "residential wiring contractor Roseburg",
    "home wiring Douglas County OR",
  ],
  alternates: { canonical: "/new-home-wiring" },
  openGraph: {
    title: "New Home Wiring in Roseburg, OR | Dialed In Electric",
    description:
      "New construction and home addition wiring in Roseburg and Douglas County. Rough-in through trim-out, permit included. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/new-home-wiring",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "New Home Wiring and New Construction Electrical",
  description:
    "New home wiring in Roseburg and Douglas County, OR. Rough-in through trim-out for new construction and additions. Work with builders, GCs, and owner-builders. Permits and inspections included.",
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
  serviceType: "New Construction Electrical",
  url: "https://dialedinelectricroseburg.com/new-home-wiring",
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
      name: "New Home Wiring",
      item: "https://dialedinelectricroseburg.com/new-home-wiring",
    },
  ],
};

const roughInScope = [
  { title: "Service entrance coordination", body: "We coordinate temporary and permanent service with the utility and jurisdiction." },
  { title: "Main panel installation", body: "Panel sized to square footage and planned loads. 200A is standard for most new homes." },
  { title: "Circuit layout and wire runs", body: "Lighting, outlets, kitchen, bath, HVAC, and appliance rough-in per plan." },
  { title: "Rough inspection", body: "Rough-in inspection scheduled before walls close." },
  { title: "Low-voltage rough-in", body: "Cat6, coax, or speaker wire when included in scope." },
];

const trimOutScope = [
  { title: "Devices and fixtures", body: "Outlets, switches, covers, and fixtures installed per specifications." },
  { title: "Panel labeling", body: "Every breaker identified by location." },
  { title: "Appliance circuits", body: "Range, dryer, dishwasher, and other dedicated circuits landed and tested." },
  { title: "Final inspection", body: "Final electrical inspection and punch-list items resolved." },
];

export default function NewHomeWiringPage() {
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
        eyebrow="New construction"
        title={
          <>
            NEW HOME
            <br />
            WIRING.
          </>
        }
        lead="Rough-in through trim-out for new homes and additions in Roseburg and Douglas County. Builders, GCs, and owner-builders. CCB# 228668."
        image="/images/gallery/new-construction-service-install.jpg"
        imagePosition="center 35%"
      />

      <PrototypeInquiryBand trackLocation="new_home_inquiry" />

      <ProtoFactRow
        items={[
          { label: "CCB# 228668", sub: "Oregon licensed and insured" },
          { label: "Rough-in to trim-out", sub: "Full construction scope" },
          { label: "Builders welcome", sub: "GC and owner-builder jobs" },
          { label: "Douglas County", sub: "Roseburg crew" },
        ]}
      />

      <ProtoInnerShell>
        <ProtoSection
          eyebrow="NEW CONSTRUCTION"
          title="Start to finish on site"
          lead="One electrician covers rough-in before drywall and trim-out after finish work. We pull permits, schedule inspections, and coordinate with framing and HVAC timing."
        >
          <ProtoSplit
            image="/images/gallery/electrical-panel-interior.jpg"
            imageAlt="Labeled panel for new home construction"
            imagePosition="center 40%"
          >
            <p>
              Owner-builders: we can explain inspection order and what must happen before walls close. GCs: call early so we can review plans before framing.
            </p>
          </ProtoSplit>
        </ProtoSection>

        <ProtoSection eyebrow="PHASE 1" title="Rough-in">
          <ProtoPoints items={roughInScope} />
        </ProtoSection>

        <ProtoSection eyebrow="PHASE 2" title="Trim-out">
          <ProtoPoints items={trimOutScope} />
        </ProtoSection>

        <ProtoSection eyebrow="RELATED" title="Other services">
          <p className="proto-inner-lead">
            <Link href="/electrical-services">All electrical services</Link>,{" "}
            <Link href="/panel-upgrades">panel upgrades</Link>, or{" "}
            <Link href="/commercial">commercial electrical</Link>.
          </p>
        </ProtoSection>
      </ProtoInnerShell>

      <PrototypePageClosing trackLocation="new_home_wiring_close" />
    </>
  );
}