import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Manual Transfer Switch Installation Roseburg OR | Dialed In Electric",
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
  areaServed: { "@type": "City", name: "Roseburg", containedInPlace: { "@type": "State", name: "Oregon" } },
  serviceType: "Transfer Switch Installation",
  url: "https://dialedinelectricroseburg.com/backup-power",
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

export default function BackupPowerPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />

      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden bg-charcoal-deep">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/generator-install-side-yard.jpg"
            alt="Generator and transfer switch installation in Roseburg, OR"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background: "linear-gradient(105deg, #0F0F11 0%, #0F0F11 35%, rgba(15,15,17,0.85) 55%, rgba(15,15,17,0.4) 100%)",
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
              <span className="text-white/60">Backup Power</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                Backup Power · Roseburg, OR
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.06] tracking-tight mb-4">
              Manual Transfer Switch<br />
              <span className="text-amber">Installation</span> in Roseburg, OR
            </h1>
            <p className="text-[16px] text-white/65 leading-relaxed max-w-lg mb-8">
              Connect your portable generator to your home&apos;s essential circuits safely and legally. No extension cords through windows, no backfeed risk. Licensed electrician. CCB# 228668.
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
              { label: "Permit Included", sub: "We handle the paperwork" },
              { label: "Same-Week Scheduling", sub: "Most installs within a week" },
              { label: "Roseburg, OR", sub: "Serving Douglas County" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center text-center py-5 px-4">
                <span className="text-sm font-semibold text-amber tracking-wide">{item.label}</span>
                <span className="text-[11px] text-white/40 mt-0.5 tracking-wide">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* What it is */}
      <SectionWrapper variant="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">How It Works</span>
            </div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-charcoal-deep tracking-tight leading-tight mb-5">
              Your Portable Generator,<br />Wired In Properly
            </h2>
            <p className="text-[15px] text-muted leading-relaxed mb-4">
              If you already own a portable generator — or plan to get one — a manual transfer switch is how you connect it to your home without creating a hazard. Running extension cords through windows or connecting directly to your panel without a transfer switch can backfeed power onto the utility line, which is dangerous for line workers and can damage your equipment.
            </p>
            <p className="text-[15px] text-muted leading-relaxed mb-6">
              A properly installed transfer switch gives you a dedicated set of circuits you can run from the generator during an outage. You flip a switch, plug in the generator, and you have power where it matters.
            </p>
            <div className="p-5 bg-surface rounded-sm border-l-2 border-amber">
              <p className="text-[13px] font-semibold text-charcoal mb-3">What you can typically run on a 5,000–7,500W portable generator:</p>
              <ul className="grid grid-cols-2 gap-2">
                {essentialLoads.map((load) => (
                  <li key={load} className="flex items-center gap-2 text-[13px] text-charcoal">
                    <CheckIcon className="w-3.5 h-3.5 text-amber shrink-0" />
                    {load}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="relative rounded-sm overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[440px]">
            <Image
              src="/images/gallery/propane-generator-tank-install.jpg"
              alt="Generator and transfer switch installation — residential Roseburg, OR"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
            />
            <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
          </div>
        </div>
      </SectionWrapper>

      {/* Interlock vs dedicated */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Which Option Is Right</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            <div className="p-6 lg:p-8 bg-white border border-edge rounded-sm">
              <h3 className="text-lg font-extrabold text-charcoal-deep mb-2">Interlock Kit</h3>
              <p className="text-[13px] text-muted mb-4 leading-relaxed">
                A mechanical device that mounts to your existing panel and prevents the main breaker and generator breaker from being on at the same time. Less expensive, uses your existing breakers.
              </p>
              <p className="text-[13px] font-semibold text-charcoal mb-3">Good if:</p>
              <ul className="flex flex-col gap-2">
                {["Your panel is compatible (most are)", "You want to run your whole panel from the generator", "Budget is a primary concern"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-charcoal">
                    <CheckIcon className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="p-6 lg:p-8 bg-charcoal-deep rounded-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
              <h3 className="text-lg font-extrabold text-white mb-2">Dedicated Transfer Panel</h3>
              <p className="text-[13px] text-white/60 mb-4 leading-relaxed">
                A small sub-panel installed next to your main panel with only the circuits you want to run during an outage. More control, cleaner operation.
              </p>
              <p className="text-[13px] font-semibold text-white mb-3">Good if:</p>
              <ul className="flex flex-col gap-2">
                {["You want to select specific circuits (furnace, fridge, well)", "Your generator is smaller and can't run the full panel", "You want a purpose-built backup power setup"].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-[13px] text-white/80">
                    <CheckIcon className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <p className="mt-6 text-[13px] text-muted">
            Not sure which fits your situation? We&apos;ll look at your panel and generator during the estimate and tell you which option makes sense.
          </p>
        </div>
      </section>

      {/* What's included */}
      <SectionWrapper variant="white">
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">What&apos;s Included</span>
          </div>
          <h2 className="text-3xl lg:text-[38px] font-extrabold text-charcoal-deep tracking-tight mb-4">
            What We Do on Every Install
          </h2>
          <p className="text-[15px] text-muted leading-relaxed mb-8">
            Most transfer switch installs are completed in a few hours. Here&apos;s what the job covers:
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
          <div className="mt-8 p-5 bg-surface rounded-sm border border-edge">
            <p className="text-[14px] font-semibold text-charcoal mb-1">Thinking about a standby generator instead?</p>
            <p className="text-[13px] text-muted mb-3">
              A Generac standby generator starts automatically when the power goes out — no manual switching, no running the portable generator. If you&apos;re on a well, have medical equipment, or want coverage you don&apos;t have to manage, it&apos;s worth looking at.
            </p>
            <Link href="/generators" className="text-[13px] font-semibold text-amber hover:text-amber-light transition-colors">
              Learn about standby generator installation →
            </Link>
          </div>
        </div>
      </SectionWrapper>

      <CTABanner
        headline="Want to Connect Your Generator Properly?"
        subtext="Send us your address and generator size and we'll give you a straight answer on what the job looks like."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
