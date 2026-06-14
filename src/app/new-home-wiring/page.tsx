import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "New Home Wiring Roseburg OR | New Construction Electrician | Dialed In Electric",
  description:
    "New home wiring in Roseburg, OR. Rough-in through trim-out for new construction and additions. We work with builders, GCs, and owner-builders. Licensed electrician. CCB# 228668.",
  keywords: [
    "new home wiring Roseburg OR",
    "new construction electrician Roseburg",
    "rough in wiring Roseburg Oregon",
    "residential wiring contractor Roseburg",
    "home wiring Douglas County OR",
  ],
  alternates: { canonical: "/new-home-wiring" },
  openGraph: {
    title: "New Home Wiring Roseburg OR | Dialed In Electric",
    description:
      "New construction and home addition wiring in Roseburg, OR. Rough-in through trim-out, permit included. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/new-home-wiring",
  },
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

const roughInScope = [
  { label: "Service entrance coordination", detail: "We work with the utility and local jurisdiction to set up temporary and permanent service." },
  { label: "Main panel installation and sizing", detail: "Panel sized to the home's square footage and planned loads. 200A is standard for most new homes." },
  { label: "Circuit layout and wire runs", detail: "All circuits roughed in per the electrical plan — lighting, outlets, kitchen, bath, HVAC, appliances." },
  { label: "Rough inspection coordination", detail: "We schedule and pass the rough-in inspection before any walls are closed." },
  { label: "Low-voltage rough-in", detail: "Cat6, coax, and speaker wire if included in the scope." },
];

const trimOutScope = [
  { label: "Device and fixture installation", detail: "All outlets, switches, covers, and fixtures installed. Builder-grade or specified grade." },
  { label: "Panel wiring and labeling", detail: "All circuits landed, labeled, and organized. Every breaker identified by location." },
  { label: "Appliance circuits", detail: "Range, dryer, dishwasher, fridge, microwave — all circuits wired and confirmed." },
  { label: "Final inspection", detail: "We schedule the final electrical inspection and resolve any punch-list items." },
];

export default function NewHomeWiringPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden bg-charcoal-deep">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/new-construction-service-install.jpg"
            alt="New home electrical service installation — Roseburg, OR"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, #0F0F11 0%, #0F0F11 35%, rgba(15,15,17,0.85) 55%, rgba(15,15,17,0.4) 100%)",
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
              <span className="text-white/60">New Home Wiring</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                New Construction · Roseburg, OR
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.06] tracking-tight mb-4">
              New Home Wiring<br />
              <span className="text-amber">in Roseburg, OR</span>
            </h1>
            <p className="text-[16px] text-white/65 leading-relaxed max-w-lg mb-8">
              Rough-in through trim-out for new construction and home additions. We work with builders, general contractors, and owner-builders throughout Douglas County. Licensed &amp; insured. CCB# 228668.
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
              { label: "Builders & GCs Welcome", sub: "New construction experience" },
              { label: "Rough-In to Trim-Out", sub: "Full scope, start to finish" },
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

      {/* Overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">What We Do</span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-charcoal-deep tracking-tight leading-tight mb-5">
                Start to Finish on<br />New Construction
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                New home wiring covers two separate phases: rough-in (before the walls are closed) and trim-out (after drywall, when devices and fixtures go in). We do both, so there&apos;s one electrician responsible for the whole job.
              </p>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                We pull the electrical permit, schedule both inspections, and coordinate with your framing and HVAC contractors so the rough-in timing works with your build schedule. If you&apos;re an owner-builder, we can help you understand what the inspector needs and what order things have to happen in.
              </p>
              <div className="p-5 bg-surface rounded-sm border-l-2 border-amber">
                <p className="text-[13px] font-semibold text-charcoal mb-1">Working with a builder or GC?</p>
                <p className="text-[13px] text-muted leading-relaxed">
                  We&apos;re familiar with how construction schedules move in Douglas County and can work within your sequence. Call us early in the project — we can review plans and flag any electrical issues before framing starts.
                </p>
              </div>
            </div>

            <div className="relative rounded-sm overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[420px]">
              <Image
                src="/images/gallery/electrical-panel-interior.jpg"
                alt="Electrical panel — labeled and organized for new home construction"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      {/* Scope */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Scope of Work</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {/* Rough-in */}
            <div className="p-6 lg:p-8 bg-white border border-edge rounded-sm border-t-2 border-t-amber">
              <h3 className="text-lg font-extrabold text-charcoal-deep mb-1">Phase 1 — Rough-In</h3>
              <p className="text-[13px] text-muted mb-5 leading-relaxed">
                Done before drywall. All wire runs, boxes, and panels installed and inspected.
              </p>
              <ul className="flex flex-col divide-y divide-edge">
                {roughInScope.map((item) => (
                  <li key={item.label} className="flex gap-3 py-3.5 first:pt-0">
                    <CheckIcon className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-charcoal">{item.label}</p>
                      <p className="text-[12px] text-muted mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Trim-out */}
            <div className="p-6 lg:p-8 bg-white border border-edge rounded-sm border-t-2 border-t-charcoal-deep">
              <h3 className="text-lg font-extrabold text-charcoal-deep mb-1">Phase 2 — Trim-Out</h3>
              <p className="text-[13px] text-muted mb-5 leading-relaxed">
                Done after drywall and paint. Devices, fixtures, and panel wiring completed and inspected.
              </p>
              <ul className="flex flex-col divide-y divide-edge">
                {trimOutScope.map((item) => (
                  <li key={item.label} className="flex gap-3 py-3.5 first:pt-0">
                    <CheckIcon className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    <div>
                      <p className="text-[13px] font-semibold text-charcoal">{item.label}</p>
                      <p className="text-[12px] text-muted mt-0.5 leading-relaxed">{item.detail}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Wiring a New Home in Douglas County?"
        subtext="Send us the plans or a description of the project. We'll get back to you with a clear scope."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
