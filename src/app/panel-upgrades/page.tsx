import type { Metadata } from "next";
import { ProtoNeMark, ProtoTextArrow } from "@/components/ui/ProtoDecor";
import Link from "next/link";
import PrototypePageHero from "@/components/prototype/PrototypePageHero";
import PrototypeInquiryBand from "@/components/prototype/PrototypeInquiryBand";
import PrototypePageClosing from "@/components/prototype/PrototypePageClosing";
import {
  ProtoActions,
  ProtoFactRow,
  ProtoInnerShell,
  ProtoPoints,
  ProtoSection,
  ProtoSplit,
} from "@/components/prototype/PrototypeInner";
export const metadata: Metadata = {
  title: {
    absolute: "Panel & Service Upgrades in Roseburg, OR | Dialed In Electric",
  },
  description:
    "Electrical panel and 200-amp service upgrades in Roseburg and Douglas County. 100→200A upgrades, meter-main combos, permits, and inspection handled. Call 541-817-6480.",
  keywords: [
    "panel upgrade Roseburg OR",
    "200 amp panel upgrade Roseburg",
    "electrical service upgrade Roseburg",
    "breaker panel replacement Roseburg",
    "service upgrade Roseburg Oregon",
    "meter main combo Roseburg",
  ],
  alternates: { canonical: "/panel-upgrades" },
  openGraph: {
    title: "Panel & Service Upgrades in Roseburg, OR | Dialed In Electric",
    description:
      "Electrical panel and 200-amp service upgrades in Roseburg and Douglas County. Permits and inspection included. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/panel-upgrades",
    images: [
      {
        url: "/images/projects/panel-service-work.jpg",
        width: 1200,
        height: 630,
        alt: "Panel and service upgrade work in Roseburg, Oregon",
      },
    ],
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Electrical Panel and Service Upgrade",
  description:
    "Panel and service upgrades in Roseburg and Douglas County, OR. Includes load evaluation, permit, new panel, breakers, labeling, riser or service entrance work, and inspection coordination.",
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
  serviceType: "Panel Upgrade",
  url: "https://dialedinelectricroseburg.com/panel-upgrades",
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
      name: "Panel & Service Upgrades",
      item: "https://dialedinelectricroseburg.com/panel-upgrades",
    },
  ],
};

const upgradeReasons = [
  {
    title: "You're adding a large load",
    body: "A hot tub, EV charger, air conditioner, or shop equipment can push older or smaller services past their practical limit. A load evaluation tells you whether a 200A upgrade is needed — or whether your current service can support the new circuit.",
  },
  {
    title: "Your panel is old or damaged",
    body: "Panels from the 1960s–1980s, including some Federal Pacific Stab-Lok and Zinsco equipment, are often recommended for replacement after a professional evaluation. Capacity alone isn't the only factor — condition and breaker type matter too.",
  },
  {
    title: "You're remodeling or building an addition",
    body: "Most additions and major remodels require a load calculation. If your current service can't support the new square footage, an upgrade may be part of the permit process.",
  },
  {
    title: "You're installing a standby generator",
    body: "A generator with an automatic transfer switch needs room and a clean connection at your main panel. If the panel is full or undersized, the generator project may include a panel upgrade — we determine that during the walkthrough.",
  },
];

const installScope = [
  { label: "Load calculation", detail: "We calculate your home's actual electrical load before specifying the new panel size." },
  { label: "Electrical permit", detail: "Required in Oregon. We pull the permit, schedule the inspection, and handle the paperwork with your local jurisdiction." },
  { label: "New panel and breakers", detail: "We install a properly-sized panel with new breakers — no reusing old breakers in a new box." },
  { label: "Service riser or meter-main work", detail: "If the service entrance or meter base needs updating, we handle that as part of the job." },
  { label: "Grounding system update", detail: "We verify and update grounding and bonding to current code requirements." },
  { label: "Circuit labeling", detail: "Every circuit is labeled clearly. Not a single unlabeled breaker when we're done." },
  { label: "Inspection coordination", detail: "We schedule the inspection and are available for the walk-through." },
];

export default function PanelUpgradesPage() {
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
        eyebrow="Panel & service upgrades"
        title={
          <>
            PANEL
            <br />
            UPGRADES.
          </>
        }
        lead="Panel replacements, meter bases, and 200-amp service upgrades for Roseburg and Douglas County. Permits and inspection coordination included. CCB# 228668."
        image="/images/projects/panel-service-work.jpg"
        imagePosition="center 35%"
      />

      <PrototypeInquiryBand
        label="200-amp upgrade, meter base, or panel replacement in Douglas County?"
        trackLocation="panel_upgrades_inquiry"
      />

      <ProtoFactRow
        items={[
          { label: "CCB# 228668", sub: "Oregon licensed and insured" },
          { label: "Permits", sub: "Pulled and inspections coordinated" },
          { label: "200-amp focus", sub: "Service and panel upgrades" },
          { label: "Douglas County", sub: "Roseburg crew" },
        ]}
      />

      <ProtoInnerShell>
        <ProtoSection
          eyebrow="WHEN TO UPGRADE"
          title="Common reasons Roseburg homeowners upgrade"
          lead="Capacity or equipment condition may limit what you can add. A site review clarifies whether a 200-amp upgrade is the right step."
        >
          <ProtoSplit
            image="/images/gallery/residential-service-upgrade.jpg"
            imageAlt="Residential service upgrade in Roseburg OR"
            imagePosition="center 40%"
          >
            <ProtoPoints items={upgradeReasons} />
          </ProtoSplit>
        </ProtoSection>

        <ProtoSection eyebrow="SERVICE SIZE" title="100A vs 200A">
          <p className="proto-inner-lead">
            A 100-amp service was common in homes built before the 1980s. It may work for modest loads, but often falls short when you add air conditioning, an EV charger, or shop equipment. A 200-amp service is the current standard for modern homes in Douglas County.
          </p>
        </ProtoSection>

        <ProtoSection eyebrow="SCOPE" title="What the job covers">
          <p className="proto-inner-lead">
            Panel upgrades include permits, inspection coordination, and labeled breakers, not only the hardware swap.
          </p>
          <ProtoPoints
            items={installScope.map((item) => ({
              title: item.label,
              body: item.detail,
            }))}
          />
        </ProtoSection>

        <ProtoSection eyebrow="PRICING & TIMING" title="Quotes and schedule">
          <p className="proto-inner-lead">
            Total cost depends on panel size, service entrance condition, meter base work, and conduit or riser needs. We provide an itemized quote after a site review.
          </p>
          <ProtoPoints
            items={[
              {
                title: "Typical timeline",
                body: "Many residential upgrades complete in one day after permits and utility coordination. Power is off for part of the day during the switchover.",
              },
              {
                title: "EV charger or generator plans",
                body: "Large loads often drive a panel upgrade. We size service so you are not redoing work when you add a Level 2 charger or standby generator.",
              },
            ]}
          />
          <div className="proto-inner-actions">
            <Link className="proto-textlink" href="/ev-charger">
              EV charger installation <ProtoTextArrow />
            </Link>
            <Link className="proto-textlink" href="/generators">
              Generac standby generators <ProtoTextArrow />
            </Link>
          </div>
          <ProtoActions>
            <Link
              className="proto-btn"
              href="/contact"
              data-track="request_service_click"
              data-track-location="panel_upgrades_review"
            >
              REQUEST PANEL REVIEW <ProtoNeMark />
            </Link>
          </ProtoActions>
        </ProtoSection>
      </ProtoInnerShell>
      <PrototypePageClosing trackLocation="panel_upgrades_close" />
    </>
  );
}
