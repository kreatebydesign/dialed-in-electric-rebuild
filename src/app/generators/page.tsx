import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";
import FAQItem from "@/components/ui/FAQItem";

// ── Metadata ────────────────────────────────────────────────────────────────

export const metadata: Metadata = {
  title: "Generator Installation Roseburg OR | Generac Standby | Dialed In Electric",
  description:
    "Generac standby generator installation in Roseburg, OR. We handle the full install — pad, transfer switch, gas coordination, and startup. Licensed electrician. Call 541-817-6480.",
  keywords: [
    "generator installation Roseburg OR",
    "backup generator installation Roseburg",
    "Generac standby generator Roseburg",
    "whole home generator Roseburg",
    "Generac Certified electrician Roseburg",
    "generator installer Douglas County OR",
    "automatic standby generator Roseburg",
  ],
  alternates: { canonical: "/generators" },
  openGraph: {
    title: "Generator Installation Roseburg OR | Generac Standby | Dialed In Electric",
    description:
      "Generac standby generator installation in Roseburg, OR. We handle the full install — pad, transfer switch, gas coordination, and startup. Licensed. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/generators",
    images: [{ url: "/images/gallery/generac-generator-install-01.jpg", width: 1200, height: 630 }],
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
  areaServed: {
    "@type": "City",
    name: "Roseburg",
    containedInPlace: { "@type": "State", name: "Oregon" },
  },
  serviceType: "Generator Installation",
  url: "https://dialedinelectricroseburg.com/generators",
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
        text: "A typical whole-home Generac standby generator installation in Roseburg runs between $8,000 and $16,000 installed, depending on generator size, pad work, gas line distance, and transfer switch configuration. We provide a clear, itemized quote after a site walkthrough — no vague estimates.",
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
  { step: "03", title: "Scope & proposal within 48 hrs", body: "You get a clear, itemized quote — generator model, pad work if needed, transfer switch, wiring, gas coordination, and permits." },
  { step: "04", title: "Scheduling — usually within a week", body: "Most Roseburg installs are on the calendar within five to seven business days of accepting the proposal." },
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
    answer: "A typical whole-home Generac installation in Roseburg runs between $8,000 and $16,000 installed — depending on generator size, pad work, gas line distance, and transfer switch configuration. We provide a clear, itemized quote after a site walkthrough. No vague estimates, no surprise add-ons.",
  },
  {
    question: "What's the difference between a standby and a portable generator?",
    answer: "A standby generator is permanently installed, connected to your panel and fuel supply, and starts automatically within seconds of an outage — no action needed. A portable generator requires manual setup, extension cords, and stored fuel, and can only power a limited number of circuits. For whole-home coverage, standby is the right choice for most Roseburg homeowners.",
  },
];

// ── Icons ─────────────────────────────────────────────────────────────────────

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

function ShieldIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function TreeIcon() {
  return (
    <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.6} strokeLinecap="round" strokeLinejoin="round">
      <path d="M17 14V2M3 14h18M3 18h18M7 18v4M17 18v4M7 10l5-5 5 5" />
    </svg>
  );
}

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

      {/* ── 1. Hero ── */}
      <section className="relative min-h-[68vh] flex items-center overflow-hidden bg-charcoal-deep">
        {/* Background photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/generac-generator-install-01.jpg"
            alt="Generac standby generator installed by Dialed In Electric in Roseburg, OR"
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

        {/* Amber left accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber z-10" aria-hidden="true" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-[600px] py-20 lg:py-28">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 mb-5 text-[12px] text-white/40">
              <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
              <span>/</span>
              <span className="text-white/60">Generators</span>
            </div>

            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                Generac Certified · Roseburg, OR
              </span>
            </div>

            {/* H1 */}
            <h1 className="text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-white leading-[1.05] tracking-tight mb-5">
              Generac Standby Generator<br />
              <span className="text-amber">Installation</span> in Roseburg, OR
            </h1>

            <p className="text-[17px] text-white/65 leading-relaxed max-w-xl mb-9">
              We handle the full install — site review, pad, wiring, transfer switch, gas hookup, and startup. Licensed &amp; insured. CCB# 228668.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 mb-9">
              <Button as="link" href="/contact" variant="primary" size="lg">
                <BoltIcon className="w-4 h-4" />
                Request a Free Quote
              </Button>
              <Button as="tel" href="tel:15418176480" variant="outline-white" size="lg">
                Call 541-817-6480
              </Button>
            </div>

            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Generac Certified", "Same-Week Scheduling", "Permits Handled", "Fully Licensed"].map(
                (item) => (
                  <div key={item} className="flex items-center gap-1.5 text-[13px] text-white/50">
                    <CheckIcon className="w-3.5 h-3.5 text-amber shrink-0" />
                    {item}
                  </div>
                )
              )}
            </div>
          </div>
        </div>
      </section>

      {/* ── 2. Trust Bar ── */}
      <div className="bg-charcoal border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Generac Certified", sub: "Factory authorized installer" },
              { label: "CCB# 228668", sub: "Oregon licensed & insured" },
              { label: "Same-Week Scheduling", sub: "Most installs within 7 days" },
              { label: "Free Site Walkthrough", sub: "Clear quote in 48 hours" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center text-center py-5 px-4">
                <span className="text-sm font-semibold text-amber tracking-wide">{item.label}</span>
                <span className="text-[11px] text-white/40 mt-0.5 tracking-wide">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── 3. Why Backup Power Matters ── */}
      <SectionWrapper variant="white">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                Why It Matters
              </span>
            </div>
            <h2 className="text-3xl lg:text-[42px] font-extrabold text-charcoal-deep leading-[1.08] tracking-tight mb-5">
              Power Outages in Douglas County Are Not Rare
            </h2>
            <p className="text-[16px] text-muted leading-relaxed mb-4">
              Oregon winters bring ice storms, downed lines, and multi-day outages across Roseburg, Sutherlin, and the surrounding communities. Wildfire season adds smoke-related grid shutoffs. Rural properties on well systems lose water the moment the power goes out.
            </p>
            <p className="text-[16px] text-muted leading-relaxed mb-8">
              A Generac standby generator starts automatically within seconds of detecting an outage — no manual switching, no extension cords, no running to the garage. Your home keeps running. Your food stays cold. Your well pump keeps working.
            </p>
            <Button as="link" href="/contact" variant="primary" size="md">
              Talk to Us About Your Property
            </Button>
          </div>

          {/* Three reason cards */}
          <div className="grid gap-4">
            {[
              {
                icon: <ShieldIcon />,
                title: "Storms & Grid Outages",
                body: "Ice, wind, and winter storms knock out power across Douglas County. A standby generator keeps your heat, lights, and critical systems on automatically.",
              },
              {
                icon: <TreeIcon />,
                title: "Wildfire Season",
                body: "Utility companies preemptively cut power during high fire danger. Those shutoffs can last days. A generator keeps you running regardless.",
              },
              {
                icon: <HomeIcon />,
                title: "Rural & Well Properties",
                body: "No power means no water on a well system. A generator protects your well pump, sump, freezers, and medical equipment — not just the lights.",
              },
            ].map((card) => (
              <div key={card.title} className="flex gap-4 p-5 border border-edge rounded-sm hover:border-amber/40 transition-colors">
                <span className="shrink-0 text-amber mt-0.5">{card.icon}</span>
                <div>
                  <h3 className="text-[14px] font-bold text-charcoal mb-1.5">{card.title}</h3>
                  <p className="text-[13px] text-muted leading-relaxed">{card.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 4. What's Included — Full Install Scope ── */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">

            {/* Photo */}
            <div className="relative rounded-sm overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[520px]">
              <Image
                src="/images/gallery/generator-install-side-yard.jpg"
                alt="Complete generator installation — pad, transfer switch, and wiring in Roseburg, OR"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
              {/* Stat overlay */}
              <div className="absolute top-4 left-4 bg-charcoal-deep/85 backdrop-blur-sm border border-white/10 rounded-sm px-4 py-3">
                <p className="text-[22px] font-extrabold text-amber leading-none">&lt; 30s</p>
                <p className="text-[11px] text-white/60 mt-1">Automatic switchover time</p>
              </div>
            </div>

            {/* Scope list */}
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                  What's Included
                </span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-charcoal-deep tracking-tight leading-tight mb-4">
                Everything Included.<br />Nothing Left to Coordinate.
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-8">
                Every installation covers the full project from first visit to passing inspection — not just dropping off the generator. Here&apos;s what&apos;s included:
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

              <div className="mt-8">
                <Button as="link" href="/contact" variant="primary" size="lg">
                  <BoltIcon className="w-4 h-4" />
                  Get a Free Walkthrough Quote
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── 5. Why Generac + Why Us ── */}
      <SectionWrapper variant="white">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Why Generac */}
          <div className="p-7 lg:p-8 border border-edge rounded-sm border-l-2 border-l-amber">
            <div className="flex items-center gap-3 mb-4">
              <BoltIcon className="w-5 h-5 text-amber" />
              <h2 className="text-xl font-extrabold text-charcoal-deep tracking-tight">Why Generac</h2>
            </div>
            <p className="text-[15px] text-muted leading-relaxed mb-5">
              Generac is the most-installed home standby brand in the country — and for good reason. Their systems are proven, parts are available, and the dealer network means you&apos;re never waiting months for service.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "#1 selling home standby generator brand in the US",
                "Full-load transfer in seconds — no manual intervention",
                "Runs on natural gas or propane",
                "Remote monitoring via the MobileLink app",
                "Quiet, compact, and designed for residential installs",
                "Parts and service widely available in Oregon",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-charcoal">
                  <CheckIcon className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Why Dialed In */}
          <div className="p-7 lg:p-8 bg-charcoal-deep rounded-sm relative overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
            <div className="flex items-center gap-3 mb-4">
              <BoltIcon className="w-5 h-5 text-amber" />
              <h2 className="text-xl font-extrabold text-white tracking-tight">Why Dialed In Electric</h2>
            </div>
            <p className="text-[15px] text-white/60 leading-relaxed mb-5">
              We&apos;re Generac certified — not just a general electrician who occasionally installs a generator. We&apos;ve done this work in Roseburg since 2019 and we know the local utility coordination, permit requirements, and gas provider relationships that make installs go smoothly.
            </p>
            <ul className="flex flex-col gap-3">
              {[
                "Generac certified installer — factory trained",
                "Licensed & insured in Oregon (CCB# 228668)",
                "We pull all permits and schedule all inspections",
                "Local crew — Roseburg to Douglas County",
                "Same-week scheduling on most installs",
                "Work that passes inspection the first time, labeled and organized",
              ].map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-[13px] text-white/80">
                  <CheckIcon className="w-3.5 h-3.5 text-amber shrink-0 mt-0.5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </SectionWrapper>

      {/* ── 6. Installation Process ── */}
      <section className="py-16 lg:py-24 bg-charcoal-deep relative overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[480px] h-[480px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="text-center mb-12 lg:mb-14">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">How It Works</span>
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
            </div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-white tracking-tight mb-3">
              From Quote to Running Generator
            </h2>
            <p className="text-[15px] text-white/55 max-w-lg mx-auto">
              Every install follows the same clean process — no surprises, no handoffs to subcontractors.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-5 mb-12">
            {installProcess.map((step, i) => (
              <div
                key={step.step}
                className={`p-5 border border-white/10 rounded-sm hover:border-amber/30 transition-colors ${
                  i === installProcess.length - 1 ? "sm:col-span-2 lg:col-span-1 xl:col-span-1" : ""
                }`}
              >
                <span className="block text-[11px] font-bold text-amber tracking-[0.18em] uppercase mb-2">
                  Step {step.step}
                </span>
                <h3 className="text-[14px] font-bold text-white mb-2 leading-snug">{step.title}</h3>
                <p className="text-[12px] text-white/50 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <Button as="link" href="/contact" variant="primary" size="lg">
              <BoltIcon className="w-4 h-4" />
              Start the Process — Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* ── 7. Project Photos ── */}
      <section className="py-16 lg:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 lg:mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Real Work</span>
              </div>
              <h2 className="text-3xl lg:text-[38px] font-extrabold text-white tracking-tight">
                Generator Installs From the Field
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-amber hover:text-amber-light transition-colors shrink-0"
            >
              All projects
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>

          {/* Photo layout: 2+2 */}
          <div className="grid grid-cols-2 gap-3 lg:gap-4">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
              <Image
                src="/images/gallery/generac-generator-install-01.jpg"
                alt="Generac standby generator and automatic transfer switch — Roseburg, OR"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-3">
                <span className="px-2.5 py-1 bg-amber text-charcoal text-[11px] font-bold rounded-sm uppercase tracking-wide">
                  Generac Install
                </span>
              </div>
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
              <Image
                src="/images/gallery/generac-generator-install-02.jpg"
                alt="Completed Generac generator system with clean wiring"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
              <Image
                src="/images/gallery/propane-generator-tank-install.jpg"
                alt="Propane tank and generator pad installation — Roseburg residential"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
            </div>
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden group">
              <Image
                src="/images/gallery/generator-install-side-yard.jpg"
                alt="Generator installed in side yard — residential Douglas County"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="50vw"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── 8. FAQ ── */}
      <SectionWrapper variant="white" id="faq">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Common Questions</span>
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
            </div>
            <h2 className="text-3xl lg:text-[38px] font-extrabold text-charcoal-deep tracking-tight mb-3">
              Generator FAQ
            </h2>
            <p className="text-[15px] text-muted max-w-md mx-auto">
              Straight answers. If your question isn&apos;t here,{" "}
              <Link href="/contact" className="text-amber hover:underline font-medium">
                call us directly
              </Link>.
            </p>
          </div>

          <div className="border-t border-edge">
            {faqs.map((faq, i) => (
              <FAQItem
                key={faq.question}
                question={faq.question}
                answer={faq.answer}
                defaultOpen={i === 0}
              />
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* ── 9. Final CTA ── */}
      <CTABanner
        headline="Thinking About a Backup Generator?"
        subtext="Most installs in Roseburg are scheduled within a week. Send us a few details and we'll get back to you with a clear quote."
        primaryLabel="Request a Free Quote"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
