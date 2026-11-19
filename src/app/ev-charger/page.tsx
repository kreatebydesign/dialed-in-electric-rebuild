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
} from "@/components/prototype/PrototypeInner";
import FAQItem from "@/components/ui/FAQItem";

export const metadata: Metadata = {
  title: {
    absolute: "EV Charger Installation in Roseburg, OR | Level 2 Home Charging",
  },
  description:
    "Level 2 home EV charger installation in Roseburg and Douglas County. Dedicated 240V circuit, panel capacity check, permit, and labeling. Call 541-817-6480. CCB# 228668.",
  keywords: [
    "EV charger installation Roseburg OR",
    "Level 2 EV charger Roseburg",
    "home EV charging station Roseburg",
    "electric vehicle charger Oregon",
    "EVSE installation Douglas County",
  ],
  alternates: { canonical: "/ev-charger" },
  openGraph: {
    title: "EV Charger Installation in Roseburg, OR | Dialed In Electric",
    description:
      "Level 2 home EV charger circuit in Roseburg and Douglas County — sized, permitted, and labeled. Panel capacity checked first. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/ev-charger",
  },
};

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "EV Charger Installation",
  description:
    "Level 2 home EV charger installation in Roseburg, OR. Includes 40–60A dedicated circuit, outlet or hardwire connection, labeling, and permit coordination.",
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
  serviceType: "EV Charger Installation",
  url: "https://dialedinelectricroseburg.com/ev-charger",
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
      name: "EV Charger Installation",
      item: "https://dialedinelectricroseburg.com/ev-charger",
    },
  ],
};

const installScope = [
  {
    title: "Panel capacity check",
    body: "We verify room for a 40–60A dedicated circuit and explain if a panel upgrade is needed.",
  },
  {
    title: "Dedicated 240V circuit",
    body: "Sized for your charger, typically 40A for most home units, up to 60A for faster chargers.",
  },
  {
    title: "Outlet or hardwire",
    body: "NEMA 14-50 receptacle or hardwired connection, depending on your EVSE.",
  },
  {
    title: "Conduit run",
    body: "Routing from panel to garage or carport via attic, wall, or exterior conduit.",
  },
  {
    title: "Labeling and permit",
    body: "Breaker labeled in the panel. Oregon permit and inspection when required.",
  },
];

const chargerTypes = [
  {
    title: "Tesla Wall Connector or NEMA 14-50",
    body: "We install the dedicated circuit your Tesla charging setup requires.",
  },
  {
    title: "Ford, Chevy, Rivian, and other EVs",
    body: "Most use a Level 2 EVSE on a dedicated 240V circuit.",
  },
  {
    title: "J1772 vehicles",
    body: "Standard Level 2 equipment works with the circuit we install.",
  },
];

const evFaqs = [
  {
    question: "Do I need a panel upgrade for an EV charger?",
    answer:
      "Not always. Many homes with a 200A panel have space for a dedicated 40–60A circuit. Homes on 100A service or with a full panel may need additional capacity. We evaluate your panel during the estimate and explain options before any work starts.",
  },
  {
    question: "What is the difference between a NEMA 14-50 outlet and hardwiring?",
    answer:
      "A NEMA 14-50 is a 240V receptacle many plug-in Level 2 chargers use. Hardwiring connects the charger directly to the circuit with no plug. We install whichever connection your charger requires.",
  },
  {
    question: "How long does a home EV charger install take in Roseburg?",
    answer:
      "Most residential Level 2 circuit installs take about a half-day once the scope is clear. Permitting and inspection are included in the process.",
  },
];

const evFaqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: evFaqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: { "@type": "Answer", text: faq.answer },
  })),
};

export default function EvChargerPage() {
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(evFaqSchema) }}
      />

      <PrototypePageHero
        eyebrow="EV charging"
        title={
          <>
            LEVEL 2
            <br />
            CHARGERS.
          </>
        }
        lead="Home EV charger circuits in Roseburg and Douglas County. Panel capacity review, dedicated circuit, permit, and labeling. CCB# 228668."
        image="/images/projects/panel-service-work.jpg"
        imagePosition="center 40%"
      />

      <PrototypeInquiryBand
        label="Adding a Level 2 charger at home? Start with a panel capacity check."
        trackLocation="ev_charger_inquiry"
      />

      <ProtoFactRow
        items={[
          { label: "CCB# 228668", sub: "Oregon licensed and insured" },
          { label: "Level 2 circuit", sub: "40–60A dedicated" },
          { label: "Panel review first", sub: "Capacity before install" },
          { label: "Douglas County", sub: "Roseburg and surrounding areas" },
        ]}
      />

      <ProtoInnerShell>
        <ProtoSection
          eyebrow="LEVEL 2"
          title="Why install a dedicated circuit"
          lead="Level 1 charging on a 120V outlet adds limited range per hour. Level 2 uses 240V and typically charges overnight. For daily EV use, a dedicated circuit is the practical upgrade."
        >
          <span className="sr-only">Level 2 overview</span>
        </ProtoSection>

        <ProtoSection eyebrow="VEHICLES" title="What we wire for">
          <ProtoPoints items={chargerTypes} />
        </ProtoSection>

        <ProtoSection eyebrow="SCOPE" title="What the install covers">
          <ProtoPoints items={installScope} />
          <p className="proto-inner-lead" style={{ marginTop: 20 }}>
            Total cost depends on panel location, conduit path, and any service upgrade needed. We provide an itemized quote after reviewing the site.
          </p>
          <p className="proto-inner-lead">
            <Link href="/panel-upgrades">Panel and service upgrades</Link> when capacity is the limiting factor.
          </p>
        </ProtoSection>

        <ProtoSection eyebrow="FAQ" title="EV charger questions">
          <div className="proto-faq">
            {evFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
        </ProtoSection>
      </ProtoInnerShell>

      <PrototypePageClosing trackLocation="ev_charger_close" />
    </>
  );
}