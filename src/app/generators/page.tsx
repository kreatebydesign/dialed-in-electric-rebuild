import type { Metadata } from "next";
import Image from "next/image";
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
import FAQItem from "@/components/ui/FAQItem";

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: {
    absolute: "Generac Standby Generator Installation in Roseburg, OR | Dialed In Electric",
  },
  description:
    "Whole-home Generac standby generator installation in Roseburg and Douglas County — pad, automatic transfer switch, gas coordination, permits, and startup. Licensed. Call 541-817-6480.",
  keywords: [
    "generator installation Roseburg OR",
    "backup generator installation Roseburg",
    "Generac standby generator Roseburg",
    "whole home generator Roseburg",
    "Generac generator installer Roseburg",
    "generator installer Douglas County OR",
    "automatic standby generator Roseburg",
  ],
  alternates: { canonical: "/generators" },
  openGraph: {
    title: "Generac Standby Generator Installation in Roseburg, OR | Dialed In Electric",
    description:
      "Whole-home Generac standby installation in Roseburg and Douglas County. Pad, transfer switch, gas coordination, permits, and startup. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/generators",
    images: [{ url: "/images/gallery/generator-install-side-yard.jpg", width: 1200, height: 630 }],
  },
};

// ── Schema ──────────────────────────────────────────────────────────────────

const serviceSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Generac Standby Generator Installation",
  description:
    "Generac standby generator installation in Roseburg, OR. We handle the full install — site review, concrete pad, automatic transfer switch, electrical wiring, gas coordination, startup, and homeowner walkthrough.",
  provider: {
    "@type": "LocalBusiness",
    "@id": "https://dialedinelectricroseburg.com/#business",
    name: "Dialed In Electric Inc.",
    telephone: "+15418176480",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Roseburg",
      addressRegion: "OR",
      addressCountry: "US",
    },
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
  serviceType: "Generator Installation",
  url: "https://dialedinelectricroseburg.com/generators",
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
      name: "Generac Generator Installation",
      item: "https://dialedinelectricroseburg.com/generators",
    },
  ],
};

const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "What size Generac generator do I need for my home?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most homes in the 1,500–3,000 sq ft range run well on a 14–22kW generator, which can power essential loads including HVAC, refrigerator, well pump, lights, and outlets. Larger homes or those with electric heat may need a 24–26kW unit. We size your generator during the walkthrough based on your panel, load list, and fuel supply.",
      },
    },
    {
      "@type": "Question",
      name: "How long does a Generac generator installation take in Roseburg?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Most residential installations are completed in one to two days. If a concrete pad needs to cure first, we schedule the pad pour separately and return for the electrical and gas work. From your first call to a running generator is typically one to two weeks.",
      },
    },
    {
      "@type": "Question",
      name: "Do I need a permit for a standby generator in Oregon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. Generator installations in Oregon require an electrical permit, and gas work requires a separate mechanical or plumbing permit through your local jurisdiction. We pull all required permits, schedule inspections, and handle the paperwork — you don't have to manage any of it.",
      },
    },
    {
      "@type": "Question",
      name: "What fuel does a Generac standby generator use?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Generac standby generators run on either natural gas or propane (LP). If your home has a natural gas line, we connect directly to it. If not, we coordinate with a licensed propane provider to install a dedicated tank. Both options work well — the right choice depends on your property and local availability.",
      },
    },
    {
      "@type": "Question",
      name: "How much does generator installation cost in Roseburg, Oregon?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Total installed cost depends on generator size, pad work, gas line distance, and transfer switch layout. We provide an itemized quote after a site walkthrough so you can see each part of the scope before approving work.",
      },
    },
    {
      "@type": "Question",
      name: "What is the difference between a standby generator and a portable generator?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "A standby generator is permanently installed outside your home, connected to your electrical panel and fuel supply, and starts automatically within seconds of an outage — no action needed. A portable generator requires manual setup, extension cords, and fuel storage, and can only power a limited number of circuits at a time. For whole-home coverage and convenience, standby is the right choice for most homeowners.",
      },
    },
  ],
};

// ── Data ─────────────────────────────────────────────────────────────────────

const installScope = [
  { label: "Site review & pad placement", detail: "We assess clearances, placement, and utility access before anything is ordered." },
  { label: "Automatic transfer switch (ATS)", detail: "Installed at your main panel — switches your home to generator power within seconds." },
  { label: "Electrical wiring & grounding", detail: "All conductors are sized, labeled, and terminated to code." },
  { label: "Concrete pad pour", detail: "We handle pad work or coordinate with your concrete contractor." },
  { label: "Gas coordination", detail: "We work directly with your licensed gas provider for natural gas or propane connections." },
  { label: "Startup, load test & orientation", detail: "We run the system, verify all circuits, and walk you through the controls." },
  { label: "Permits & inspections", detail: "All required permits pulled and inspections scheduled. We handle the paperwork." },
];

const installProcess = [
  { step: "01", title: "Call or request a quote online", body: "Tell us your address, rough square footage, and whether you have natural gas or propane. That's all we need to get started." },
  { step: "02", title: "Site walkthrough & sizing", body: "We visit your property, review your panel, walk the generator placement, and nail down the size and scope." },
  { step: "03", title: "Scope & written proposal", body: "You receive an itemized scope covering generator model, pad work if needed, transfer switch, wiring, gas coordination, and permits." },
  { step: "04", title: "Schedule the install", body: "We set the install date once equipment, permits, and gas or propane coordination are aligned with your approval." },
  { step: "05", title: "Pad, transfer gear & wiring", body: "Installation day: pad work if needed, transfer switch at the panel, all wiring run and labeled." },
  { step: "06", title: "Gas connection", body: "Coordination with your licensed gas provider happens alongside or immediately after the electrical install." },
  { step: "07", title: "Startup, testing & orientation", body: "We run a full load test, confirm automatic transfer is working, and walk you through how to operate and monitor the system." },
];

const faqs = [
  {
    question: "What size Generac generator do I need for my home?",
    answer: "Most homes in the 1,500–3,000 sq ft range run well on a 14–22kW unit, which covers HVAC, refrigerator, well pump, lights, and outlets. Larger homes or those with electric heat may need 24–26kW. We size the generator during the site walkthrough based on your panel, load list, and fuel supply — never a guess.",
  },
  {
    question: "How long does installation take?",
    answer: "Most residential installs are completed in one to two days. If a concrete pad needs to cure, we schedule the pad pour and return for electrical and gas work. From your first call to a running generator is typically one to two weeks.",
  },
  {
    question: "Do I need a permit?",
    answer: "Yes. Generator installations in Oregon require an electrical permit, and gas work needs a separate permit through your local jurisdiction. We pull all required permits, schedule inspections, and handle the paperwork. You don't manage any of it.",
  },
  {
    question: "What fuel does a Generac standby generator use?",
    answer: "Generac standby generators run on natural gas or propane (LP). If your home has a gas line, we connect directly. If not, we coordinate with a licensed propane provider for a dedicated tank. Both work well — the right choice depends on your property and what's available.",
  },
  {
    question: "How much does generator installation cost in Roseburg?",
    answer: "Total cost depends on generator size, pad work, gas line distance, and transfer switch layout. We provide an itemized quote after a site walkthrough so each line item is clear before you approve the job.",
  },
  {
    question: "What's the difference between a standby and a portable generator?",
    answer: "A standby generator is permanently installed, connected to your panel and fuel supply, and starts automatically within seconds of an outage — no action needed. A portable generator requires manual setup, extension cords, and stored fuel, and can only power a limited number of circuits. For whole-home coverage, standby is the right choice for most Roseburg homeowners.",
  },
];

const outageReasons = [
  {
    title: "Storms and grid outages",
    body: "Ice, wind, and winter storms knock out power across Douglas County. A standby generator keeps heat, lights, and critical circuits on automatically.",
  },
  {
    title: "Wildfire season shutoffs",
    body: "Utility companies sometimes cut power during high fire danger. Those outages can last multiple days without notice.",
  },
  {
    title: "Rural and well properties",
    body: "No grid power often means no well water. A generator protects the pump, freezers, and medical equipment, not just the lights.",
  },
];

const whyGenerac = [
  { title: "Proven standby platform", body: "Generac is a widely installed home standby brand with strong parts availability in Oregon." },
  { title: "Automatic transfer", body: "Whole-home transfer equipment switches essential loads without manual cords or switching." },
  { title: "Natural gas or propane", body: "We size fuel supply with your licensed gas provider based on what is available at your property." },
];

const whyDialedIn = [
  { title: "Full install scope", body: "Pad, transfer switch, wiring, gas coordination, startup, and permits when the job requires them." },
  { title: "Local crew", body: "Based in Roseburg (CCB# 228668). We know Douglas County utilities, inspectors, and typical site constraints." },
  { title: "Labeled, inspectable work", body: "Panels and circuits are labeled. We coordinate inspections when permits apply." },
];

const fieldPhotos = [
  {
    src: "/images/gallery/generator-install-side-yard.jpg",
    alt: "Generac standby generator installed in a residential side yard, Roseburg OR",
    position: "center 40%",
  },
  {
    src: "/images/projects/generac-transfer-equipment.jpg",
    alt: "Automatic transfer switch and generator interconnect equipment",
    position: "center 35%",
  },
  {
    src: "/images/gallery/propane-generator-tank-install.jpg",
    alt: "Propane tank and generator pad at a Douglas County home",
    position: "center 45%",
  },
];

// ── Page ──────────────────────────────────────────────────────────────────────

export default function GeneratorsPage() {
  return (
    <>
      {/* Schema */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <PrototypePageHero
        eyebrow="Generac generators"
        title={
          <>
            STANDBY
            <br />
            GENERATORS.
          </>
        }
        lead="Generac standby generator installation for homes and businesses throughout Roseburg and Douglas County. Site review, pad, wiring, transfer switch, gas coordination, and startup. CCB# 228668."
        image="/images/gallery/generator-install-side-yard.jpg"
        imagePosition="center 40%"
      />

      <PrototypeInquiryBand trackLocation="generators_inquiry" />

      <ProtoFactRow
        items={[
          { label: "Generac standby", sub: "Whole-home automatic systems" },
          { label: "CCB# 228668", sub: "Oregon licensed and insured" },
          { label: "Douglas County", sub: "Roseburg and surrounding areas" },
          { label: "Full install scope", sub: "Pad, wiring, transfer switch, startup" },
        ]}
      />

      <ProtoInnerShell>
        <ProtoSection
          eyebrow="WHY STANDBY POWER"
          title="Outages are common in Douglas County"
          lead="Winter storms, downed lines, and wildfire-season shutoffs can leave rural properties without power for days. On a well, that also means no water until the grid returns."
        >
          <ProtoPoints items={outageReasons} />
        </ProtoSection>

        <ProtoSection eyebrow="INSTALL SCOPE" title="What we handle on site">
          <ProtoSplit
            image="/images/gallery/generator-install-side-yard.jpg"
            imageAlt="Generac standby generator on pad with utility clearances, Roseburg OR"
            imagePosition="center 40%"
          >
            <p className="proto-inner-lead">
              Installations cover the full project from first visit through startup, not only placing the generator. Typical scope items:
            </p>
            <ProtoPoints
              items={installScope.map((item) => ({
                title: item.label,
                body: item.detail,
              }))}
            />
          </ProtoSplit>
        </ProtoSection>

        <ProtoSection eyebrow="PRODUCT & CREW" title="Generac standby systems, installed locally">
          <p className="proto-inner-lead">
            We primarily install Generac standby generators for homes and businesses in Roseburg and Douglas County.
          </p>
          <ProtoPoints items={whyGenerac} />
          <ProtoPoints items={whyDialedIn} />
        </ProtoSection>

        <ProtoSection eyebrow="PROCESS" title="From first call to startup">
          <p className="proto-inner-lead">
            Site review, equipment selection, permit coordination when required, installation, and startup testing.
          </p>
          <ProtoPoints
            items={installProcess.map((step) => ({
              title: step.title,
              body: step.body,
            }))}
          />
          <ProtoActions>
            <Link className="proto-btn" href="/contact">
              REQUEST INSTALLATION ESTIMATE <span>↗</span>
            </Link>
            <a className="proto-textlink" href="tel:15418176480">
              541 817 6480 <span className="arrow">↗</span>
            </a>
          </ProtoActions>
        </ProtoSection>

        <ProtoSection eyebrow="FIELD PHOTOS" title="Recent generator work">
          <div className="proto-inner-split" style={{ gridTemplateColumns: "1fr" }}>
            <div
              className="proto-inner-split-media"
              style={{ display: "grid", gap: 16, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}
            >
              {fieldPhotos.map((photo) => (
                <Image
                  key={photo.src}
                  src={photo.src}
                  alt={photo.alt}
                  width={1600}
                  height={1200}
                  className="proto-inner-photo"
                  style={{ objectPosition: photo.position }}
                  sizes="(max-width: 900px) 100vw, 33vw"
                />
              ))}
            </div>
          </div>
          <p style={{ marginTop: 20 }}>
            <Link href="/projects" className="proto-textlink">
              More project photos <span className="arrow">→</span>
            </Link>
          </p>
        </ProtoSection>

        <ProtoSection eyebrow="PANEL & TRANSFER" title="Electrical capacity and switching">
          <p className="proto-inner-lead">
            A standby generator connects through an automatic transfer switch at your main panel. During the walkthrough we review breaker space, grounding, and whether your service can support the transfer equipment cleanly.
          </p>
          <p className="proto-inner-lead">
            Some homes need a panel or service upgrade in the same project. If you already run a portable generator, a manual transfer switch may be a better first step.
          </p>
          <div className="proto-inner-actions">
            <Link className="proto-textlink" href="/panel-upgrades">
              Panel upgrades <span className="arrow">→</span>
            </Link>
            <Link className="proto-textlink" href="/backup-power">
              Manual transfer switches <span className="arrow">→</span>
            </Link>
            <Link className="proto-textlink" href="/service-areas/roseburg">
              Roseburg service area <span className="arrow">→</span>
            </Link>
          </div>
        </ProtoSection>

        <ProtoSection eyebrow="FAQ" title="Generator questions" id="faq">
          <div className="proto-faq">
            {faqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <p className="proto-inner-lead" style={{ marginTop: 32 }}>
            Related: <Link href="/backup-power">backup power</Link>, <Link href="/panel-upgrades">panel upgrades</Link>,{" "}
            <Link href="/service-areas">service areas</Link>.
          </p>
        </ProtoSection>
      </ProtoInnerShell>
      <PrototypePageClosing trackLocation="generators_close" />
    </>
  );
}
