import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

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
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

const upgradeReasons = [
  {
    title: "You're adding a large load",
    body: "A hot tub, EV charger, air conditioner, or shop equipment can push a 100A service past its limit. A 200A upgrade gives you room to add what you need.",
  },
  {
    title: "Your panel is old or damaged",
    body: "Panels from the 1960s–1980s often used obsolete breaker brands that are known fire hazards. Federal Pacific Stab-Lok and Zinsco panels should be replaced regardless of capacity.",
  },
  {
    title: "You're remodeling or building an addition",
    body: "Most additions and major remodels require a load calculation. If your current service can't support the new square footage, an upgrade is part of the permit process.",
  },
  {
    title: "You're installing a standby generator",
    body: "A generator with an automatic transfer switch requires room at your main panel. If your panel is full or undersized, the generator install includes a panel upgrade.",
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

      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden bg-charcoal-deep">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/electrical-panel-interior.jpg"
            alt="Electrical panel interior — panel upgrade in Roseburg, OR"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, #0F0F11 0%, #0F0F11 38%, rgba(15,15,17,0.88) 58%, rgba(15,15,17,0.4) 100%)",
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
              <span className="text-white/60">Panel Upgrades</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                Panel Upgrades · Roseburg &amp; Douglas County
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.06] tracking-tight mb-4">
              Panel &amp; Service Upgrades<br />
              <span className="text-amber">in Roseburg, OR</span>
            </h1>
            <p className="text-[16px] text-white/65 leading-relaxed max-w-lg mb-8">
              100→200A upgrades, panel replacements, and service entrance work for homes and shops throughout Roseburg and Douglas County. Permit included. Most residential jobs are done in one day. CCB# 228668.
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
              { label: "Permit Included", sub: "We pull it and coordinate inspection" },
              { label: "One-Day Job", sub: "Most residential upgrades" },
              { label: "Roseburg, OR", sub: "Douglas County crew" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center text-center py-5 px-4">
                <span className="text-sm font-semibold text-amber tracking-wide">{item.label}</span>
                <span className="text-[11px] text-white/40 mt-0.5 tracking-wide">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* When you need one */}
      <SectionWrapper variant="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">When to Upgrade</span>
            </div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-charcoal-deep tracking-tight leading-tight mb-5">
              Four Reasons Homeowners in<br />Roseburg Upgrade Their Panel
            </h2>
            <p className="text-[15px] text-muted leading-relaxed mb-8">
              A panel upgrade isn&apos;t always an emergency — but when you need one, it&apos;s usually blocking something you want to do. Here are the most common situations:
            </p>
            <div className="flex flex-col gap-4">
              {upgradeReasons.map((reason, i) => (
                <div key={reason.title} className="flex gap-4">
                  <span className="text-[11px] font-bold text-amber tracking-widest shrink-0 mt-1 w-5">
                    0{i + 1}
                  </span>
                  <div>
                    <h3 className="text-[14px] font-bold text-charcoal mb-1">{reason.title}</h3>
                    <p className="text-[13px] text-muted leading-relaxed">{reason.body}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col gap-4">
            {/* Photo */}
            <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
              <Image
                src="/images/gallery/residential-service-upgrade.jpg"
                alt="Residential service upgrade — Roseburg, OR"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
            </div>
            {/* 100A vs 200A explainer */}
            <div className="p-5 bg-surface rounded-sm border border-edge">
              <h3 className="text-[14px] font-bold text-charcoal mb-2">100A vs 200A — What That Means</h3>
              <p className="text-[13px] text-muted leading-relaxed">
                A 100-amp service was standard in homes built before the 1980s. It&apos;s often enough for a modest home with gas heat, but runs out quickly when you add air conditioning, an EV charger, or a shop. A 200-amp service is the current standard and gives you enough capacity for modern loads. Most homes in Douglas County that haven&apos;t had service work done in the last 30 years are still on 100A.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* What's included */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">What&apos;s Included</span>
              </div>
              <h2 className="text-3xl lg:text-[38px] font-extrabold text-charcoal-deep tracking-tight leading-tight mb-4">
                What the Job Covers
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-7">
                Every panel upgrade we do includes the permit, inspection coordination, and labeled breakers — not just the hardware swap.
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
            </div>

            <div className="flex flex-col gap-5">
              {/* Cost range */}
              <div className="p-6 bg-white border border-edge rounded-sm border-t-2 border-t-amber">
                <h3 className="text-[15px] font-extrabold text-charcoal-deep mb-2">What does it cost?</h3>
                <p className="text-[13px] text-muted leading-relaxed mb-3">
                  Most residential 200A panel upgrades in Roseburg run between <span className="font-semibold text-charcoal">$1,800 and $3,500</span>, depending on whether the service entrance needs work, the meter base, and whether there&apos;s any riser or conduit involved.
                </p>
                <p className="text-[13px] text-muted leading-relaxed">
                  Homes that need a meter-main combo or have an older service entrance can run higher. We give you an itemized quote after the site review — not a number off the top of our head.
                </p>
              </div>
              {/* Timeline */}
              <div className="p-6 bg-white border border-edge rounded-sm">
                <h3 className="text-[15px] font-extrabold text-charcoal-deep mb-2">How long does it take?</h3>
                <p className="text-[13px] text-muted leading-relaxed">
                  Most residential upgrades are done in one day. We typically schedule a utility hold 1–2 days before the install date. Your power is off for a portion of the day while we do the switchover, then back on once everything passes the rough-in inspection.
                </p>
              </div>
              {/* Photo */}
              <div className="relative rounded-sm overflow-hidden aspect-[16/9]">
                <Image
                  src="/images/gallery/commercial-meter-bank-install.jpg"
                  alt="Meter bank and service installation — Dialed In Electric"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need a Panel Upgrade in Roseburg?"
        subtext="Send us a few details about your home and what you&apos;re trying to add. We&apos;ll get back to you with a clear quote."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
