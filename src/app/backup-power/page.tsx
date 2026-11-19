import type { Metadata } from "next";
import Link from "next/link";
import PrototypePageClosing from "@/components/prototype/PrototypePageClosing";
import PrototypePageHero from "@/components/prototype/PrototypePageHero";
import PrototypeInquiryBand from "@/components/prototype/PrototypeInquiryBand";
import {
  ProtoBulletGrid,
  ProtoFactRow,
  ProtoInnerShell,
  ProtoPoints,
  ProtoSection,
  ProtoSplit,
} from "@/components/prototype/PrototypeInner";
export const metadata: Metadata = {
  title: {
    absolute: "Manual Transfer Switch Installation Roseburg OR | Dialed In Electric",
  },
  description:
    "Manual transfer switch installation in Roseburg, OR. Connect your portable generator to your home's circuits safely. Licensed electrician. CCB# 228668. Call 541-817-6480.",
  keywords: [
    "manual transfer switch Roseburg OR",
    "portable generator hookup Roseburg",
    "generator transfer switch installation Roseburg",
    "backup power Roseburg Oregon",
    "generator interlock kit Roseburg",
  ],
  alternates: { canonical: "/backup-power" },
  openGraph: {
    title: "Manual Transfer Switch Installation Roseburg OR | Dialed In Electric",
    description:
      "Connect your portable generator to your home circuits safely. Licensed transfer switch installation in Roseburg, OR. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/backup-power",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Manual Transfer Switch Installation",
  description:
    "Manual transfer switch and interlock kit installation in Roseburg, OR. Safely connects a portable generator to essential home circuits during a power outage.",
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
  serviceType: "Transfer Switch Installation",
  url: "https://dialedinelectricroseburg.com/backup-power",
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
      name: "Backup Power",
      item: "https://dialedinelectricroseburg.com/backup-power",
    },
  ],
};

const installScope = [
  { label: "Transfer switch or interlock kit", detail: "We assess your panel and recommend the right option — dedicated transfer panel or an interlock kit that works with your existing breakers." },
  { label: "Generator inlet (power inlet box)", detail: "Installed on the exterior of your home. You plug your generator's cord directly into the inlet — no extension cords through windows or doors." },
  { label: "Wiring, grounding, and labeling", detail: "All circuits are properly sized, wired, and labeled so you know exactly what each breaker controls during an outage." },
  { label: "Homeowner walkthrough", detail: "We show you how to safely switch over to generator power and what loads your generator can handle." },
  { label: "Permit and inspection", detail: "We pull the required electrical permit, coordinate the inspection, and handle the paperwork." },
];

const essentialLoads = [
  "Well pump",
  "Sump pump",
  "Refrigerator and freezer",
  "Furnace or heating system",
  "Select lights and outlets",
  "Medical equipment",
];

const optionPoints = [
  {
    title: "Interlock kit",
    body: "Mounts to your existing panel and prevents the main breaker and generator breaker from being on at once. Works with your current breakers when the panel is compatible.",
  },
  {
    title: "Dedicated transfer panel",
    body: "A sub-panel with only the circuits you want on generator power. Better when you need to limit load to a smaller portable unit.",
  },
];

export default function BackupPowerPage() {
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
        eyebrow="Backup power"
        title={
          <>
            TRANSFER
            <br />
            SWITCHES.
          </>
        }
        lead="Manual transfer switch installation for portable generators in Roseburg and Douglas County. Safe circuit selection without backfeed. CCB# 228668."
        image="/images/gallery/generator-install-side-yard.jpg"
        imagePosition="center 40%"
      />

      <PrototypeInquiryBand
        label="Portable generator backup? Discuss transfer switch options for your panel."
        trackLocation="backup_power_inquiry"
      />

      <ProtoFactRow
        items={[
          { label: "CCB# 228668", sub: "Oregon licensed and insured" },
          { label: "Manual transfer", sub: "Portable generator hookups" },
          { label: "Permits", sub: "Pulled when required" },
          { label: "Douglas County", sub: "Roseburg and surrounding areas" },
        ]}
      />

      <ProtoInnerShell>
        <ProtoSection
          eyebrow="HOW IT WORKS"
          title="Portable generator, wired safely"
          lead="A manual transfer switch connects a portable generator to selected circuits without backfeed to the utility. No cords through windows, no unsafe panel ties."
        >
          <ProtoSplit
            image="/images/gallery/propane-generator-tank-install.jpg"
            imageAlt="Propane generator and pad at a Douglas County home"
            imagePosition="center 45%"
          >
            <p className="proto-inner-lead">Typical loads on a 5,000 to 7,500W portable generator:</p>
            <ProtoBulletGrid items={essentialLoads} />
          </ProtoSplit>
        </ProtoSection>

        <ProtoSection eyebrow="OPTIONS" title="Interlock vs dedicated transfer panel">
          <ProtoPoints items={optionPoints} />
          <p className="proto-inner-lead">
            We review your panel and generator size during the site visit and recommend the option that fits.
          </p>
        </ProtoSection>

        <ProtoSection eyebrow="SCOPE" title="What we install">
          <ProtoPoints
            items={installScope.map((item) => ({
              title: item.label,
              body: item.detail,
            }))}
          />
          <p className="proto-inner-lead" style={{ marginTop: 24 }}>
            Want automatic backup instead of manual switching?{" "}
            <Link href="/generators">See Generac standby generator installation</Link>.
          </p>
        </ProtoSection>
      </ProtoInnerShell>

      <PrototypePageClosing trackLocation="backup_power_close" />
    </>
  );
}
