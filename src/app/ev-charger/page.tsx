import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";
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
    url: "https://www.dialedinelectricroseburg.com/ev-charger",
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
    "@id": "https://www.dialedinelectricroseburg.com/#business",
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
  url: "https://www.dialedinelectricroseburg.com/ev-charger",
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://www.dialedinelectricroseburg.com/",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Electrical Services",
      item: "https://www.dialedinelectricroseburg.com/electrical-services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "EV Charger Installation",
      item: "https://www.dialedinelectricroseburg.com/ev-charger",
    },
  ],
};

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
    </svg>
  );
}

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path
        fillRule="evenodd"
        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
        clipRule="evenodd"
      />
    </svg>
  );
}

const installScope = [
  {
    label: "Panel capacity check",
    detail: "We verify your panel has room for a 40–60A dedicated circuit. If it doesn't, we'll tell you what a panel upgrade would add to the cost.",
  },
  {
    label: "Dedicated 240V circuit",
    detail: "EV chargers need their own dedicated circuit — typically 40A for most home chargers, 50A or 60A for faster units. We size it correctly for your charger.",
  },
  {
    label: "Outlet or hardwire connection",
    detail: "Most home chargers connect via a NEMA 14-50 outlet or are hardwired directly. We install whichever your unit requires.",
  },
  {
    label: "Conduit and wire run to garage",
    detail: "We route the circuit from your panel to your garage or carport — through the wall, attic, or exterior conduit depending on your home's layout.",
  },
  {
    label: "Breaker labeling",
    detail: "The new breaker is labeled clearly in your panel — not something you'll forget what it's for.",
  },
  {
    label: "Permit and inspection",
    detail: "Oregon requires a permit for new circuits. We pull it, schedule the inspection, and handle the paperwork.",
  },
];

const chargerTypes = [
  {
    label: "Tesla vehicles",
    note: "Wall Connector hardwire or NEMA 14-50 outlet — we install the circuit your unit needs",
  },
  {
    label: "Ford, Chevy, Rivian, and other major EVs",
    note: "Most use a Level 2 EVSE or NEMA 14-50 on a dedicated 240V circuit",
  },
  {
    label: "J1772 inlet vehicles",
    note: "Standard Level 2 EVSE works with the circuit we install",
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
      "A NEMA 14-50 is a 240V receptacle many portable or plug-in Level 2 chargers use. Hardwiring connects the charger directly to the circuit with no plug. We install whichever connection your charger requires.",
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

      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden bg-charcoal-deep">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/electrical-panel-interior.jpg"
            alt="Electrical panel for EV charger circuit installation — Roseburg, OR"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, #0F0F11 0%, #0F0F11 38%, rgba(15,15,17,0.88) 58%, rgba(15,15,17,0.4) 100%)",
            }}
          />
          <div className="absolute inset-0 bg-charcoal-deep/75 lg:hidden" />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber z-10" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-[580px] py-16 lg:py-24">
            <div className="flex items-center gap-2 mb-4 text-[12px] text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <Link href="/electrical-services" className="hover:text-white/70 transition-colors">Services</Link>
              <span>/</span>
              <span className="text-white/60">EV Charger</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                EV Charger Installation · Roseburg, OR
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.06] tracking-tight mb-4">
              EV Charger Installation<br />
              <span className="text-amber">in Roseburg, OR</span>
            </h1>
            <p className="text-[16px] text-white/65 leading-relaxed max-w-lg mb-8">
              Level 2 home charging circuit for homes in Roseburg and Douglas County — sized for your charger, permitted, and labeled. We check panel capacity first so you know exactly what the job involves. CCB# 228668.
            </p>
            <div className="flex flex-col sm:flex-row gap-3">
              <Button as="link" href="/contact" variant="primary" size="lg">
                <BoltIcon className="w-4 h-4" />
                Get a Quote
              </Button>
              <Button as="tel" href="tel:15418176480" variant="outline-white" size="lg">
                Call 541-817-6480
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-charcoal border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "CCB# 228668", sub: "Oregon licensed & insured" },
              { label: "Permit Included", sub: "Required in Oregon" },
              { label: "Level 2 Charging", sub: "40–60A dedicated circuit" },
              { label: "All Major EVs", sub: "Dedicated 240V circuit for your charger" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center text-center py-5 px-4">
                <span className="text-sm font-semibold text-amber tracking-wide">{item.label}</span>
                <span className="text-[11px] text-white/40 mt-0.5 tracking-wide">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Level 1 vs 2 explainer */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Level 1 vs Level 2</span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-charcoal-deep tracking-tight leading-tight mb-5">
                Why Level 2 Is Worth Installing
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                Level 1 charging uses a standard 120V outlet — the kind your EV probably came with a cord for. It adds about 3–5 miles of range per hour, which means most EVs take 24–40 hours to fully charge from empty on Level 1.
              </p>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                Level 2 charging uses a 240V circuit — the same type as a dryer or range outlet. It adds 20–30 miles per hour depending on your car. A full charge typically takes 4–8 hours overnight. For most EV owners, it&apos;s the difference between waking up to a full battery every morning and constantly worrying about range.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div className="p-4 bg-surface rounded-sm border border-edge">
                  <p className="text-[11px] font-bold text-muted uppercase tracking-wide mb-2">Level 1</p>
                  <p className="text-2xl font-extrabold text-charcoal-deep mb-1">3–5</p>
                  <p className="text-[12px] text-muted">miles of range added per hour</p>
                </div>
                <div className="p-4 bg-amber/8 rounded-sm border border-amber/20">
                  <p className="text-[11px] font-bold text-amber uppercase tracking-wide mb-2">Level 2</p>
                  <p className="text-2xl font-extrabold text-charcoal-deep mb-1">20–30</p>
                  <p className="text-[12px] text-muted">miles of range added per hour</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-5">
              <div className="p-6 bg-charcoal-deep rounded-sm relative overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
                <p className="text-[11px] font-bold text-amber tracking-[0.18em] uppercase mb-4">
                  Compatible With Your EV
                </p>
                <ul className="flex flex-col gap-3">
                  {chargerTypes.map((type) => (
                    <li key={type.label} className="flex flex-col gap-0.5">
                      <span className="text-[13px] font-semibold text-white">{type.label}</span>
                      <span className="text-[11px] text-white/45">{type.note}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-5 bg-surface rounded-sm border border-edge">
                <p className="text-[13px] font-semibold text-charcoal mb-1">Do I need a panel upgrade first?</p>
                <p className="text-[13px] text-muted leading-relaxed mb-3">
                  Many homes with a 200A panel have room for an EV charger circuit. Homes on 100A service or with a full panel may need additional capacity. We evaluate your panel during the estimate and explain what the job involves before any work starts.
                </p>
                <Link href="/panel-upgrades" className="text-[13px] font-semibold text-amber hover:text-amber-light transition-colors">
                  Learn about panel &amp; service upgrades →
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What's included */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">What&apos;s Included</span>
            </div>
            <h2 className="text-3xl lg:text-[38px] font-extrabold text-charcoal-deep tracking-tight mb-4">
              What the Install Covers
            </h2>
            <p className="text-[15px] text-muted leading-relaxed mb-8">
              Most home EV charger installs take a half-day. Here&apos;s what the job includes:
            </p>
            <ul className="flex flex-col divide-y divide-edge">
              {installScope.map((item) => (
                <li key={item.label} className="flex gap-4 py-4 first:pt-0">
                  <CheckIcon className="w-4 h-4 text-amber shrink-0 mt-1" />
                  <div>
                    <p className="text-[14px] font-semibold text-charcoal">{item.label}</p>
                    <p className="text-[13px] text-muted mt-0.5 leading-relaxed">{item.detail}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-8 p-5 bg-white rounded-sm border border-edge">
              <p className="text-[14px] font-semibold text-charcoal mb-1">What does it cost?</p>
              <p className="text-[13px] text-muted leading-relaxed">
                Most EV charger circuit installs in Roseburg run between{" "}
                <span className="font-semibold text-charcoal">$400 and $900</span>, depending on distance from the panel to the garage, conduit needs, and available panel space. You get an itemized quote after we review the job.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 lg:py-20 bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Common Questions</span>
          </div>
          <h2 className="text-2xl lg:text-3xl font-extrabold text-charcoal-deep tracking-tight mb-6">
            EV Charger FAQ
          </h2>
          <div className="flex flex-col gap-3">
            {evFaqs.map((faq) => (
              <FAQItem key={faq.question} question={faq.question} answer={faq.answer} />
            ))}
          </div>
          <p className="mt-8 text-sm text-muted">
            Related:{" "}
            <Link href="/panel-upgrades" className="text-amber hover:underline">
              panel upgrades
            </Link>
            ,{" "}
            <Link href="/electrical-services" className="text-amber hover:underline">
              electrical services
            </Link>
            , or{" "}
            <Link href="/service-areas/roseburg" className="text-amber hover:underline">
              electrician in Roseburg
            </Link>
            .
          </p>
        </div>
      </section>

      <CTABanner
        headline="Getting an EV in Douglas County?"
        subtext="Tell us where your panel is and where you park. We'll follow up with a clear scope."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
