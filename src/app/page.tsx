import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/components/ui/SectionWrapper";
import ServiceCard from "@/components/ui/ServiceCard";
import TestimonialCard from "@/components/ui/TestimonialCard";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: {
    absolute: "Electrician & Generac Installer in Roseburg, OR | Dialed In Electric",
  },
  description:
    "Licensed Roseburg electrician specializing in Generac generators, panel upgrades, EV chargers, new construction and commercial electrical work throughout Douglas County.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Electrician & Generac Installer in Roseburg, OR | Dialed In Electric",
    description:
      "Licensed Roseburg electrician specializing in Generac generators, panel upgrades, EV chargers, new construction and commercial electrical work throughout Douglas County.",
    url: "https://dialedinelectricroseburg.com",
  },
};

// ── Icons ──────────────────────────────────────────────────────────────────

function BoltIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M13 2L4.5 13.5H11L10 22L19.5 10.5H13L13 2Z" />
    </svg>
  );
}

function HomeIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
      <polyline points="9 22 9 12 15 12 15 22" />
    </svg>
  );
}

function BuildingIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="7" width="20" height="14" rx="2" />
      <path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16" />
    </svg>
  );
}

function EvIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" />
      <path d="M16 8h4l3 6v3h-7V8z" />
      <circle cx="5.5" cy="18.5" r="2.5" />
      <circle cx="18.5" cy="18.5" r="2.5" />
    </svg>
  );
}

function SwitchIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M9 9h6M9 12h6M9 15h4" />
      <circle cx="17" cy="15" r="1.5" fill="currentColor" />
    </svg>
  );
}

function PanelIcon() {
  return (
    <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round">
      <rect x="4" y="2" width="16" height="20" rx="2" />
      <line x1="4" y1="8" x2="20" y2="8" />
      <line x1="12" y1="8" x2="12" y2="22" />
      <line x1="8" y1="12" x2="10" y2="12" />
      <line x1="8" y1="16" x2="10" y2="16" />
      <line x1="14" y1="12" x2="16" y2="12" />
      <line x1="14" y1="16" x2="16" y2="16" />
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

// ── Data ───────────────────────────────────────────────────────────────────

const services = [
  {
    icon: <BoltIcon className="w-5 h-5" />,
    title: "Generac Standby Generators",
    description: "Full generator installs — pad, transfer switch, gas hookup, and startup. We handle everything from permit to first test run.",
    href: "/generators",
    featured: true,
  },
  {
    icon: <SwitchIcon />,
    title: "Manual Transfer Switches",
    description: "Connects your portable generator to your home's circuits safely. Essential loads covered, no backfeed risk.",
    href: "/backup-power",
  },
  {
    icon: <PanelIcon />,
    title: "Panel & Service Upgrades",
    description: "100→200A+ upgrades, meter-main combos, surge protection, and properly labeled breakers.",
    href: "/panel-upgrades",
  },
  {
    icon: <HomeIcon />,
    title: "New Home Wiring",
    description: "Rough-in through trim-out for new construction. Labeled panels, clean runs, inspector-ready.",
    href: "/new-home-wiring",
  },
  {
    icon: <BuildingIcon />,
    title: "Commercial Wiring",
    description: "Shops, tenant improvements, machine circuits, and lighting. We pull permits and coordinate inspections.",
    href: "/commercial",
  },
  {
    icon: <EvIcon />,
    title: "EV Charger Installation",
    description: "Level 2 home charging — 40–60A dedicated circuit, properly sized and permitted.",
    href: "/ev-charger",
  },
];

const testimonials = [
  {
    quote: "Cleanest panel I've seen. Passed inspection in minutes.",
    author: "J. Carter",
    service: "Panel Upgrade — Roseburg",
  },
  {
    quote: "Showed up on time, finished early, and left it spotless.",
    author: "J. Martinez",
    service: "New Home Wiring",
  },
  {
    quote: "Generator kicked on automatically. No more outage stress.",
    author: "S. Nguyen",
    service: "Generac Generator Install",
  },
];

const whyReasons = [
  {
    headline: "Generac Certified",
    body: "Factory-authorized installer. We've done this specific work — pad, transfer switch, gas hookup, startup — since 2019.",
  },
  {
    headline: "Work That Passes Inspection",
    body: "Labeled panels, organized wiring, proper grounding. Every job is ready for the inspector the first time.",
  },
  {
    headline: "Same-Week Scheduling",
    body: "Most projects get on the calendar within a week of your call. We don't have a months-long backlog.",
  },
  {
    headline: "Locally Owned Since 2019",
    body: "Roseburg crew. Douglas County roots. We live here, so our reputation depends on how every job goes.",
  },
];

// Editorial project grid — generator-priority order
const projectPhotos = [
  { src: "/images/gallery/generac-generator-install-01.jpg", alt: "Generac standby generator and transfer switch, Roseburg OR", category: "Generator Install" },
  { src: "/images/gallery/generac-generator-install-02.jpg", alt: "Completed Generac generator system", category: "Generator Install" },
  { src: "/images/gallery/generator-install-side-yard.jpg", alt: "Generator install — residential side yard", category: "Backup Power" },
  { src: "/images/gallery/propane-generator-tank-install.jpg", alt: "Propane tank and generator pad installation", category: "Generator Install" },
  { src: "/images/gallery/electrical-panel-interior.jpg", alt: "Clean electrical panel — labeled breakers", category: "Panel Upgrade" },
  { src: "/images/gallery/commercial-electrical-service.jpg", alt: "Commercial electrical service installation", category: "Commercial" },
];

const serviceAreas = [
  "Roseburg", "Sutherlin", "Winston", "Green",
  "Melrose", "Garden Valley", "Lookingglass", "Wilbur",
];

// ── Page ───────────────────────────────────────────────────────────────────

export default function HomePage() {
  return (
    <>
      {/* ─── 1. Hero — Cinematic full-bleed ─── */}
      <section className="relative min-h-[92vh] flex items-center overflow-hidden bg-charcoal-deep">
        {/* Full-bleed generator photo */}
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/generator-install-side-yard.jpg"
            alt="Generator installation in Roseburg, OR by Dialed In Electric"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          {/* Gradient: deep black left 45%, fade right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(100deg, #0F0F11 0%, #0F0F11 40%, rgba(15,15,17,0.88) 60%, rgba(15,15,17,0.45) 80%, rgba(15,15,17,0.15) 100%)",
            }}
          />
          {/* Mobile: full dark overlay */}
          <div className="absolute inset-0 bg-charcoal-deep/80 lg:hidden" />
        </div>

        {/* Amber left-edge vertical accent */}
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber z-10" aria-hidden="true" />

        {/* Content */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-[640px] py-24 lg:py-32">
            {/* Eyebrow */}
            <div className="flex items-center gap-3 mb-6">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                Roseburg, Oregon · CCB# 228668
              </span>
            </div>

            {/* H1 — large commanding type */}
            <h1 className="text-5xl sm:text-[60px] lg:text-[72px] font-extrabold text-white leading-[1.0] tracking-tight mb-6">
              Roseburg&apos;s<br />
              <span className="text-amber">Generator</span>{" "}&amp;<br />
              Electrical Pros
            </h1>

            {/* Sub */}
            <p className="text-[17px] text-white/60 leading-relaxed max-w-lg mb-9">
              Generator installs, transfer switches, panel upgrades, EV chargers, and electrical service for homes and businesses throughout Roseburg and Douglas County.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 mb-10">
              <Button as="link" href="/contact" variant="primary" size="lg">
                <BoltIcon className="w-4 h-4" />
                Request Service
              </Button>
              <Button as="link" href="/generators" variant="outline-white" size="lg">
                View Generator Services
              </Button>
            </div>

            {/* Trust row */}
            <div className="flex flex-wrap gap-x-6 gap-y-2">
              {["Generac Certified", "Oregon Licensed", "Same-Week Scheduling", "Free Quotes"].map(
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

        {/* Floating credentials card — bottom right, desktop only */}
        <div className="absolute bottom-8 right-8 hidden lg:flex items-center gap-3 bg-charcoal-deep/90 backdrop-blur-sm border border-white/10 rounded-sm px-5 py-3.5 z-10">
          <BoltIcon className="w-4 h-4 text-amber shrink-0" />
          <div>
            <p className="text-[13px] font-semibold text-white leading-tight">Generac Certified Installer</p>
            <p className="text-[11px] text-white/40 mt-0.5">Oregon CCB# 228668 · Founded 2019</p>
          </div>
        </div>
      </section>

      {/* ─── 2. Trust Bar ─── */}
      <div className="bg-charcoal border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Generac Certified", sub: "Factory authorized installer" },
              { label: "CCB# 228668", sub: "Oregon licensed & insured" },
              { label: "Founded 2019", sub: "Serving Douglas County" },
              { label: "Roseburg, Oregon", sub: "Same-week availability" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center text-center py-5 px-4">
                <span className="text-sm font-semibold text-amber tracking-wide">{item.label}</span>
                <span className="text-[11px] text-white/40 mt-0.5 tracking-wide">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ─── 3. Generator Feature — Primary Money Section ─── */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-[1fr_1.1fr] gap-12 lg:gap-16 items-start">

            {/* Copy */}
            <div className="lg:py-4">
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                  Generator Installation
                </span>
              </div>
              <h2 className="text-4xl lg:text-[48px] font-extrabold text-charcoal-deep leading-[1.0] tracking-tight mb-5">
                Generac Standby<br />
                <span className="text-amber">Generator Install</span><br />
                in Roseburg
              </h2>
              <p className="text-[16px] text-muted leading-relaxed mb-4">
                Power outages in Douglas County aren&apos;t rare — storms, grid issues, wildfire season. A Generac standby generator kicks on automatically within seconds. No extension cords. No manual switching.
              </p>
              <p className="text-[16px] text-muted leading-relaxed mb-8">
                We handle the full installation: site review, concrete pad, automatic transfer switch, electrical wiring, gas coordination, and a walkthrough when it&apos;s done.
              </p>

              {/* Feature list */}
              <ul className="flex flex-col gap-3.5 mb-8">
                {[
                  "Automatic switchover — no manual action needed",
                  "Runs on natural gas or propane",
                  "Generac certified installation & startup",
                  "Permits, inspections, and utility coordination",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-charcoal">
                    <CheckIcon className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>

              {/* Stat callouts */}
              <div className="grid grid-cols-3 gap-3 mb-9 p-5 bg-surface rounded-sm border-l-2 border-amber">
                {[
                  { n: "< 30s", label: "Auto switchover" },
                  { n: "7+", label: "Years serving Roseburg" },
                  { n: "Same week", label: "Typical scheduling" },
                ].map((s) => (
                  <div key={s.label} className="text-center">
                    <p className="text-[18px] font-extrabold text-charcoal tracking-tight">{s.n}</p>
                    <p className="text-[11px] text-muted mt-0.5 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>

              <Button as="link" href="/generators" variant="primary" size="lg">
                <BoltIcon className="w-4 h-4" />
                View Generator Services
              </Button>
            </div>

            {/* Photos */}
            <div className="flex flex-col gap-3">
              {/* Primary large photo */}
              <div className="relative rounded-sm overflow-hidden aspect-[4/3]">
                <Image
                  src="/images/gallery/generac-generator-install-01.jpg"
                  alt="Generac standby generator and automatic transfer switch installed by Dialed In Electric, Roseburg OR"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                  priority
                />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
              </div>
              {/* Two secondary photos */}
              <div className="grid grid-cols-2 gap-3">
                <div className="relative rounded-sm overflow-hidden aspect-square">
                  <Image
                    src="/images/gallery/generac-generator-install-02.jpg"
                    alt="Completed Generac generator installation"
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </div>
                <div className="relative rounded-sm overflow-hidden aspect-square">
                  <Image
                    src="/images/gallery/propane-generator-tank-install.jpg"
                    alt="Propane tank and generator pad installation — Roseburg, OR"
                    fill
                    className="object-cover"
                    sizes="30vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── 4. Services Grid ─── */}
      <SectionWrapper variant="surface">
        <div className="text-center mb-10 lg:mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">What We Do</span>
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
          </div>
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-charcoal-deep tracking-tight mb-3">
            Electrical Services
          </h2>
          <p className="text-[15px] text-muted max-w-lg mx-auto">
            Clean work, clear scope, first time every time.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((service) => (
            <ServiceCard key={service.href} {...service} />
          ))}
        </div>
      </SectionWrapper>

      {/* ─── 5. Why Dialed In — Dark section ─── */}
      <section className="py-16 lg:py-24 bg-charcoal-deep relative overflow-hidden">
        {/* Subtle amber glow top-right */}
        <div
          className="absolute -top-32 -right-32 w-96 h-96 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.08) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                  Why Dialed In
                </span>
              </div>
              <h2 className="text-3xl lg:text-[42px] font-extrabold text-white leading-[1.08] tracking-tight mb-5">
                Why Homeowners &amp;<br />Builders Choose Us
              </h2>
              <p className="text-[16px] text-white/55 leading-relaxed mb-9">
                We&apos;re a Roseburg crew. We show up on time, wire it clean, pass inspection, and don&apos;t leave a mess. That&apos;s the standard on every job — not just the ones we think you&apos;re watching.
              </p>
              <Button as="link" href="/about" variant="primary" size="md">
                About Dialed In Electric
              </Button>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {whyReasons.map((reason) => (
                <div
                  key={reason.headline}
                  className="flex flex-col gap-3 p-5 border border-white/10 rounded-sm hover:border-amber/40 transition-colors"
                >
                  <div className="flex items-center gap-2.5">
                    <span className="flex items-center justify-center w-8 h-8 bg-amber/10 rounded-sm shrink-0">
                      <BoltIcon className="w-4 h-4 text-amber" />
                    </span>
                    <h3 className="text-[14px] font-bold text-white tracking-tight">{reason.headline}</h3>
                  </div>
                  <p className="text-[13px] text-white/50 leading-relaxed">{reason.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── 6. Projects — Editorial Grid ─── */}
      <section className="py-16 lg:py-24 bg-charcoal relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8 lg:mb-10">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Recent Work</span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight">
                Clean Installs<br />From the Field
              </h2>
            </div>
            <Link
              href="/projects"
              className="hidden sm:flex items-center gap-1.5 text-[13px] font-semibold text-amber hover:text-amber-light transition-colors"
            >
              View all
              <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor">
                <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
              </svg>
            </Link>
          </div>

          {/* Editorial grid */}
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {/* Large lead image — spans 2 cols */}
            <div className="col-span-2 relative rounded-sm overflow-hidden group" style={{ height: "360px" }}>
              <Image
                src={projectPhotos[0].src}
                alt={projectPhotos[0].alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="66vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 flex items-center gap-2">
                <span className="px-2.5 py-1 bg-amber text-charcoal text-[11px] font-bold rounded-sm uppercase tracking-wide">
                  {projectPhotos[0].category}
                </span>
              </div>
            </div>

            {/* Right column — two stacked */}
            <div className="flex flex-col gap-3 lg:gap-4">
              {[projectPhotos[1], projectPhotos[2]].map((photo) => (
                <div
                  key={photo.src}
                  className="relative rounded-sm overflow-hidden group flex-1"
                  style={{ minHeight: "170px" }}
                >
                  <Image
                    src={photo.src}
                    alt={photo.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                    sizes="33vw"
                  />
                  <div className="absolute inset-0 bg-charcoal-deep/20 group-hover:bg-charcoal-deep/40 transition-colors" />
                  <div className="absolute bottom-2.5 left-2.5">
                    <span className="px-2 py-0.5 bg-charcoal-deep/80 text-white text-[10px] font-semibold rounded-sm uppercase tracking-wide">
                      {photo.category}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom row — three equal */}
            {[projectPhotos[3], projectPhotos[4], projectPhotos[5]].map((photo) => (
              <div
                key={photo.src}
                className="relative rounded-sm overflow-hidden group aspect-[4/3]"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-charcoal-deep/10 group-hover:bg-charcoal-deep/40 transition-colors" />
                <div className="absolute bottom-2.5 left-2.5 opacity-0 group-hover:opacity-100 transition-opacity">
                  <span className="px-2 py-0.5 bg-charcoal-deep/80 text-white text-[10px] font-semibold rounded-sm uppercase tracking-wide">
                    {photo.category}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-6 flex justify-center sm:hidden">
            <Button as="link" href="/projects" variant="outline-white" size="sm">
              View All Projects
            </Button>
          </div>
        </div>
      </section>

      {/* ─── 7. Testimonials ─── */}
      <SectionWrapper variant="surface">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Customer Feedback</span>
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
          </div>
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-charcoal-deep tracking-tight mb-3">
            What Customers Say
          </h2>
          <p className="text-[15px] text-muted max-w-md mx-auto">
            Feedback from homeowners and builders we&apos;ve worked with across Douglas County.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {testimonials.map((t) => (
            <TestimonialCard key={t.author} {...t} />
          ))}
        </div>
      </SectionWrapper>

      {/* ─── 8. Service Areas Strip ─── */}
      <div className="bg-white border-y border-edge py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-x-1 gap-y-2 justify-center">
            <span className="text-[11px] font-bold text-muted uppercase tracking-widest mr-3">
              Serving:
            </span>
            {serviceAreas.map((city, i) => (
              <span key={city} className="text-[13px] text-charcoal">
                {city}
                {i < serviceAreas.length - 1 && (
                  <span className="text-amber mx-2">·</span>
                )}
              </span>
            ))}
            <Link
              href="/service-areas"
              className="ml-3 text-[12px] font-bold text-amber hover:text-amber-light transition-colors tracking-wide"
            >
              View all areas →
            </Link>
          </div>
        </div>
      </div>

      {/* ─── 9. Final CTA ─── */}
      <CTABanner
        headline="Need Electrical Work or a Generator Quote?"
        subtext="Send us a few details about your project and we'll get back to you."
        primaryLabel="Request Service"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
