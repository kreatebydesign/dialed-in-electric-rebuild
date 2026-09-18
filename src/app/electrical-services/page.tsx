import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";
import ServiceCard from "@/components/ui/ServiceCard";

export const metadata: Metadata = {
  title: {
    absolute: "Electrical Services Roseburg OR | Panel, Wiring, EV Charger | Dialed In Electric",
  },
  description:
    "Full-service electrical contractor in Roseburg, OR. Panel upgrades, new home wiring, commercial wiring, generator installation, and EV charger installation. Licensed & insured. CCB# 228668.",
  keywords: [
    "electrician Roseburg OR",
    "electrical contractor Roseburg Oregon",
    "electrical services Roseburg",
    "licensed electrician Roseburg",
    "residential electrician Roseburg",
    "commercial electrician Roseburg",
  ],
  alternates: { canonical: "/electrical-services" },
  openGraph: {
    title: "Electrical Services Roseburg OR | Dialed In Electric",
    description:
      "Panel upgrades, new home wiring, commercial wiring, generator installation, and EV chargers. Licensed electrician in Roseburg, OR. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/electrical-services",
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
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
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
    description: "Connects your portable generator to your home's circuits safely. We size the transfer panel, pull the permit, and walk you through the operation.",
    href: "/backup-power",
  },
  {
    icon: <PanelIcon />,
    title: "Panel & Service Upgrades",
    description: "100→200A+ upgrades. New breakers, labeling, grounding, and riser work. Most residential upgrades are done in one day.",
    href: "/panel-upgrades",
  },
  {
    icon: <HomeIcon />,
    title: "New Home Wiring",
    description: "Rough-in through trim-out for new construction. We work directly with builders, GCs, and homeowners.",
    href: "/new-home-wiring",
  },
  {
    icon: <BuildingIcon />,
    title: "Commercial Wiring",
    description: "Shops, tenant improvements, machine circuits, and lighting. We pull permits and coordinate with your other trades.",
    href: "/commercial",
  },
  {
    icon: <EvIcon />,
    title: "EV Charger Installation",
    description: "Level 2 home charging circuit — properly sized, permitted, and labeled.",
    href: "/ev-charger",
  },
];

const workTypes = [
  { label: "Residential", items: ["New home wiring", "Panel and service upgrades", "Standby generator installation", "Transfer switch installation", "EV charger circuits", "Service calls and troubleshooting"] },
  { label: "Commercial", items: ["Tenant improvements", "Shop and warehouse wiring", "Machine and equipment circuits", "Lighting layout and installation", "Service entrance and metering", "Panel upgrades and additions"] },
];

export default function ElectricalServicesPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[52vh] flex items-center overflow-hidden bg-charcoal-deep">
        <div className="absolute inset-0">
          <Image
            src="/images/gallery/commercial-electrical-service.jpg"
            alt="Commercial electrical service in Roseburg, OR by Dialed In Electric"
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
              <span className="text-white/60">Electrical Services</span>
            </div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                Roseburg, OR · CCB# 228668
              </span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.06] tracking-tight mb-4">
              Electrical Services<br />in Roseburg, Oregon
            </h1>
            <p className="text-[16px] text-white/65 leading-relaxed max-w-lg mb-8">
              Residential and commercial electrical for homes, new construction, shops, and businesses throughout Douglas County. Licensed, insured, and available most weeks.
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
              { label: "Generac Certified", sub: "Factory authorized installer" },
              { label: "Residential & Commercial", sub: "Homes, shops, tenant improvements" },
              { label: "Douglas County", sub: "Roseburg and surrounding areas" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center text-center py-5 px-4">
                <span className="text-sm font-semibold text-amber tracking-wide">{item.label}</span>
                <span className="text-[11px] text-white/40 mt-0.5 tracking-wide">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Services grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mb-10 lg:mb-12">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-8 bg-amber" aria-hidden="true" />
              <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Services</span>
            </div>
            <h2 className="text-3xl lg:text-[40px] font-extrabold text-charcoal-deep tracking-tight mb-3">
              What We Do
            </h2>
            <p className="text-[15px] text-muted leading-relaxed">
              We&apos;re a licensed electrical contractor based in Roseburg. We do generator installs, panel work, new home wiring, and commercial jobs throughout Douglas County. Every job gets the same attention — residential or commercial, big or small.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <ServiceCard key={service.href} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Residential vs Commercial breakdown */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Scope of Work</span>
          </div>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {workTypes.map((type) => (
              <div key={type.label} className="p-6 lg:p-8 border border-edge rounded-sm border-t-2 border-t-amber">
                <h3 className="text-lg font-extrabold text-charcoal-deep mb-5">{type.label}</h3>
                <ul className="flex flex-col gap-3">
                  {type.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[14px] text-charcoal">
                      <CheckIcon className="w-4 h-4 text-amber shrink-0 mt-0.5" />
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
          <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">How We Work</span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight mb-5">
                Straightforward.<br />No Surprises.
              </h2>
              <p className="text-[15px] text-white/60 leading-relaxed mb-5">
                We give you a clear scope before anything starts. If the job changes, we tell you why before we do extra work. When we&apos;re done, everything is labeled and ready for the inspector.
              </p>
              <p className="text-[15px] text-white/60 leading-relaxed mb-8">
                We&apos;ve been doing this in Roseburg since 2019. We know the local inspectors, the utility requirements, and which permit offices move fast. That saves you time.
              </p>
              <Button as="link" href="/contact" variant="primary" size="md">
                Request a Quote
              </Button>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { n: "01", title: "Clear quote first", body: "We review the job, ask the right questions, and give you a written scope before any work begins." },
                { n: "02", title: "Permits handled", body: "We pull the required permits, schedule inspections, and track the paperwork. You don't have to manage it." },
                { n: "03", title: "Work done, labeled, inspected", body: "When we're finished, it's labeled, organized, and ready for the inspector — not something to finish later." },
              ].map((step) => (
                <div key={step.n} className="flex gap-4 p-5 border border-white/10 rounded-sm hover:border-amber/30 transition-colors">
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

      {/* Photo section */}
      <section className="py-16 lg:py-24 bg-charcoal">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="flex items-center gap-3 mb-3">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Recent Work</span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight">
                Work From the Field
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
          <div className="grid grid-cols-3 gap-3 lg:gap-4">
            {[
              { src: "/images/gallery/electrical-panel-interior.jpg", alt: "Electrical panel interior — labeled and organized", label: "Panel Upgrade" },
              { src: "/images/gallery/residential-service-upgrade.jpg", alt: "Residential service upgrade in Roseburg", label: "Service Upgrade" },
              { src: "/images/gallery/commercial-meter-bank-install.jpg", alt: "Commercial meter bank installation", label: "Commercial" },
            ].map((photo) => (
              <div key={photo.src} className="relative aspect-[4/3] rounded-sm overflow-hidden group">
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-transparent" />
                <div className="absolute bottom-3 left-3">
                  <span className="px-2 py-0.5 bg-charcoal-deep/80 text-white text-[10px] font-semibold rounded-sm uppercase tracking-wide">
                    {photo.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline="Need Electrical Work in Roseburg?"
        subtext="Send us a few details about your project and we'll get back to you."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
