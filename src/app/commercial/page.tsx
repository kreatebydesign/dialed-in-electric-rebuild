import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

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

const workTypes = [
  {
    category: "Shops & Warehouses",
    items: [
      "200A–400A service and panel installation",
      "Machine and equipment circuits (240V, 3-phase where needed)",
      "Lighting layout and installation",
      "Subpanel additions for shop expansions",
      "Compressor and welder outlets",
    ],
  },
  {
    category: "Tenant Improvements",
    items: [
      "Electrical plan review and coordination with GC",
      "Partition and office circuit additions",
      "Lighting layout per tenant requirements",
      "Exit and emergency lighting",
      "Panel modifications and circuit additions",
    ],
  },
  {
    category: "Service & Metering",
    items: [
      "Commercial service entrance upgrades",
      "Multi-meter installations",
      "Utility coordination and inspection",
      "Panel additions and load balancing",
      "Grounding and bonding updates",
    ],
  },
  {
    category: "Conduit & Wiring",
    items: [
      "EMT conduit runs for commercial environments",
      "MC cable where applicable",
      "Panel and junction box organization",
      "Circuit labeling and panel schedules",
      "Coordination with other trades",
    ],
  },
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

      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden bg-charcoal-deep">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/commercial-electrical-service.jpg"
            alt="Commercial electrical service installation in Roseburg, OR"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, #0F0F11 0%, #0F0F11 38%, rgba(15,15,17,0.85) 58%, rgba(15,15,17,0.4) 100%)",
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
              <span className="text-white/60">Commercial</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                Commercial · Roseburg &amp; Douglas County
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.06] tracking-tight mb-4">
              Commercial Electrical<br />
              <span className="text-amber">Contractor in Roseburg, OR</span>
            </h1>
            <p className="text-[16px] text-white/65 leading-relaxed max-w-lg mb-8">
              Shops, tenant improvements, warehouses, and commercial service work throughout Roseburg and Douglas County. We pull permits, coordinate with other trades, and handle the inspection. CCB# 228668.
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
              { label: "Permit & Inspection", sub: "We handle the paperwork" },
              { label: "Shops to TI Work", sub: "All commercial scopes" },
              { label: "Douglas County, OR", sub: "Roseburg and surrounding area" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center text-center py-5 px-4">
                <span className="text-sm font-semibold text-amber tracking-wide">{item.label}</span>
                <span className="text-[11px] text-white/40 mt-0.5 tracking-wide">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Commercial Work</span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-charcoal-deep tracking-tight leading-tight mb-5">
                Electrical for Businesses<br />in Douglas County
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                We do commercial electrical work for shops, small warehouses, tenant improvements, and commercial buildings throughout Roseburg and Douglas County. Most of our commercial clients are local business owners, property managers, or general contractors who need a licensed electrician that shows up, communicates, and gets the permit done.
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                We work primarily in the light commercial range — shops, TI work, and service upgrades — rather than large industrial or multi-story jobs. If you have a straightforward commercial project in Douglas County, call us.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="/images/gallery/commercial-meter-bank-install.jpg"
                  alt="Multi-meter commercial service installation — Roseburg, OR"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden">
                <Image
                  src="/images/gallery/commercial-disconnect-install.jpg"
                  alt="Commercial disconnect installation — Roseburg, OR"
                  fill
                  className="object-cover"
                  sizes="25vw"
                />
              </div>
              <div className="relative aspect-square rounded-sm overflow-hidden col-span-2">
                <Image
                  src="/images/gallery/commercial-electrical-service.jpg"
                  alt="Commercial electrical service — Dialed In Electric Roseburg"
                  fill
                  className="object-cover"
                  sizes="50vw"
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Work types grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">What We Do</span>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {workTypes.map((type) => (
              <div key={type.category} className="p-5 bg-white border border-edge rounded-sm border-t-2 border-t-amber">
                <h3 className="text-[14px] font-extrabold text-charcoal-deep mb-4">{type.category}</h3>
                <ul className="flex flex-col gap-2.5">
                  {type.items.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-[12px] text-muted leading-snug">
                      <CheckIcon className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How we work */}
      <section className="py-16 lg:py-24 bg-charcoal-deep relative overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">How We Work</span>
            </div>
            <h2 className="text-3xl lg:text-[38px] font-extrabold text-white tracking-tight leading-tight mb-5">
              What to Expect on a Commercial Job
            </h2>
            <div className="flex flex-col gap-5">
              {[
                {
                  n: "01",
                  title: "Review the scope and submit a quote",
                  body: "We review the plans or walk the job, ask the necessary questions, and give you a written quote. No vague estimates.",
                },
                {
                  n: "02",
                  title: "Pull the permit and coordinate",
                  body: "We file the electrical permit with the local jurisdiction and confirm the inspection schedule. We coordinate with your GC or other trades as needed.",
                },
                {
                  n: "03",
                  title: "Install, label, and inspect",
                  body: "Work is done with clean conduit runs, proper labeling, and organized panel work. We schedule and pass the inspection before calling the job complete.",
                },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 p-5 border border-white/10 rounded-sm">
                  <span className="text-[11px] font-bold text-amber tracking-widest shrink-0 mt-0.5">{step.n}</span>
                  <div>
                    <h3 className="text-[14px] font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-[13px] text-white/50 leading-relaxed">{step.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Commercial Project in Douglas County?"
        subtext="Describe the job and we'll get back to you with a clear scope and price."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
