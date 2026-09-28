import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: {
    absolute: "Projects in Roseburg, OR | Generators, Panels & Electrical Work",
  },
  description:
    "Real project photos from Dialed In Electric in Roseburg and Douglas County — Generac installs, panel upgrades, commercial wiring, and residential electrical work. CCB# 228668.",
  keywords: [
    "electrician projects Roseburg OR",
    "generator installation photos Roseburg",
    "electrical project gallery Oregon",
    "panel upgrade photos Roseburg",
  ],
  alternates: { canonical: "/projects" },
  openGraph: {
    title: "Projects | Dialed In Electric — Roseburg, OR",
    description:
      "Generator installs, panel upgrades, commercial wiring, and residential electrical. Real work from Dialed In Electric in Roseburg, OR.",
    url: "https://www.dialedinelectricroseburg.com/projects",
  },
};

/**
 * Captions limited to labels verified in notes/media-plan.md and notes/site-audit.md
 * (original Wix Projects gallery). No kW, amps, fuel inferences, or city-per-photo claims.
 */
type WorkImage = {
  src: string;
  alt: string;
  label: string;
  /** Optional one-line category for quiet caption context — not a case study. */
  kind: string;
  href?: string;
  /** Layout hint for editorial rhythm */
  span: "lead" | "wide" | "tall" | "standard";
};

const work: WorkImage[] = [
  {
    src: "/images/projects/generac-transfer-equipment.jpg",
    alt: "Generac generator and transfer equipment installed by Dialed In Electric",
    label: "Generac & Transfer Equipment",
    kind: "Standby Generator Installation",
    href: "/generators",
    span: "lead",
  },
  {
    src: "/images/projects/residential-generator.jpg",
    alt: "Residential generator set installation",
    label: "Residential Generator Set",
    kind: "Standby Generator Installation",
    href: "/generators",
    span: "standard",
  },
  {
    src: "/images/gallery/propane-generator-tank-install.jpg",
    alt: "Propane tank and generator pad installation",
    label: "Propane Tank & Generator Pad",
    kind: "Generator & Transfer Equipment",
    href: "/generators",
    span: "standard",
  },
  {
    src: "/images/projects/panel-service-work.jpg",
    alt: "Panel and service work",
    label: "Panel & Service Work",
    kind: "Electrical Panel Work",
    href: "/panel-upgrades",
    span: "wide",
  },
  {
    src: "/images/projects/service-upgrade-conduit.jpg",
    alt: "Service upgrade conduit work",
    label: "Service Upgrade — Conduit Work",
    kind: "Electrical Panel Work",
    href: "/panel-upgrades",
    span: "standard",
  },
  {
    src: "/images/projects/rough-in-subpanel.jpg",
    alt: "Rough-in subpanel and homeruns",
    label: "Rough-In Subpanel & Homeruns",
    kind: "Residential Electrical",
    href: "/new-home-wiring",
    span: "tall",
  },
  {
    src: "/images/projects/multi-meter-service-wall.jpg",
    alt: "Multi-meter service wall",
    label: "Multi-Meter Service Wall",
    kind: "Commercial Electrical",
    href: "/commercial",
    span: "standard",
  },
  {
    src: "/images/projects/switchgear-row.jpg",
    alt: "Switchgear row installation",
    label: "Switchgear Row",
    kind: "Commercial Electrical",
    href: "/commercial",
    span: "wide",
  },
  {
    src: "/images/projects/interior-disconnects.jpg",
    alt: "Interior fused disconnects",
    label: "Interior Fused Disconnects",
    kind: "Commercial Electrical",
    href: "/commercial",
    span: "standard",
  },
  {
    src: "/images/projects/service-equipment-array.jpg",
    alt: "Service equipment array",
    label: "Service Equipment Array",
    kind: "Residential Electrical",
    href: "/electrical-services",
    span: "standard",
  },
];

function spanClass(span: WorkImage["span"]) {
  switch (span) {
    case "lead":
      return "md:col-span-12 aspect-[16/10] md:aspect-[21/9]";
    case "wide":
      return "md:col-span-8 aspect-[4/3] md:aspect-[16/10]";
    case "tall":
      return "md:col-span-4 aspect-[4/5] md:aspect-auto md:min-h-[420px]";
    default:
      return "md:col-span-6 aspect-[4/3]";
  }
}

export default function ProjectsPage() {
  return (
    <>
      {/* Hero — photography-led, minimal copy */}
      <section className="relative min-h-[58vh] md:min-h-[68vh] flex items-end overflow-hidden bg-charcoal-deep">
        <div className="absolute inset-0">
          <Image
            src="/images/projects/residential-generator.jpg"
            alt=""
            fill
            className="object-cover object-[center_40%]"
            sizes="100vw"
            priority
            aria-hidden="true"
          />
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(180deg, rgba(15,15,17,0.35) 0%, rgba(15,15,17,0.55) 45%, rgba(15,15,17,0.92) 100%)",
            }}
          />
        </div>
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber z-10" aria-hidden="true" />

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12 pt-28 md:pb-16 md:pt-40">
          <div className="flex items-center gap-2 mb-5 text-[12px] text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-white/60">Projects</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
              Real Work · Roseburg &amp; Douglas County
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[64px] font-extrabold text-white leading-[1.02] tracking-tight mb-4 max-w-3xl">
            Work From the Field
          </h1>
          <p className="text-[16px] md:text-[17px] text-white/65 leading-relaxed max-w-lg mb-6">
            Authentic installs from Dialed In Electric — generators, panels, and commercial work.
          </p>
          <p className="text-[12px] text-white/40 tracking-wide">
            Oregon CCB# 228668 · Generac Certified
          </p>
        </div>
      </section>

      {/* Editorial gallery */}
      <section className="bg-charcoal-deep py-10 md:py-16 lg:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-4 lg:gap-5">
            {work.map((item) => (
              <figure
                key={item.src}
                className={`group relative overflow-hidden bg-charcoal ${spanClass(item.span)}`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                  sizes={
                    item.span === "lead" || item.span === "wide"
                      ? "(max-width: 768px) 100vw, 100vw"
                      : "(max-width: 768px) 100vw, 50vw"
                  }
                />
                <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/90 via-charcoal-deep/15 to-transparent opacity-90 md:opacity-80 md:group-hover:opacity-95 transition-opacity" />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 md:p-5">
                  <p className="text-[11px] font-semibold text-amber tracking-[0.14em] uppercase mb-1">
                    {item.kind}
                  </p>
                  <p className="text-[15px] md:text-[16px] font-semibold text-white leading-snug">
                    {item.label}
                  </p>
                  {item.href && (
                    <Link
                      href={item.href}
                      className="inline-block mt-2 text-[12px] font-medium text-white/55 hover:text-amber transition-colors"
                    >
                      Related service
                    </Link>
                  )}
                </figcaption>
              </figure>
            ))}
          </div>

          <p className="mt-10 md:mt-14 text-center text-[13px] text-white/40 max-w-md mx-auto leading-relaxed">
            Photography from completed Dialed In Electric jobs across Douglas County.
            Every image is field work — no stock.
          </p>
        </div>
      </section>

      {/* Quiet service path — not a second gallery CTA */}
      <section className="bg-charcoal border-y border-white/8 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-[13px]">
            <span className="text-white/35 uppercase tracking-widest text-[11px] font-semibold">
              Services
            </span>
            {[
              { label: "Generators", href: "/generators" },
              { label: "Panel Upgrades", href: "/panel-upgrades" },
              { label: "Commercial", href: "/commercial" },
              { label: "New Home Wiring", href: "/new-home-wiring" },
              { label: "Electrical Services", href: "/electrical-services" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-white/70 hover:text-amber transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Single conversion close */}
      <section className="bg-charcoal-deep py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
              Next Project
            </span>
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-[44px] font-extrabold text-white tracking-tight mb-4">
            Have a project in mind?
          </h2>
          <p className="text-[15px] text-white/55 max-w-md mx-auto mb-9 leading-relaxed">
            Generators, panels, commercial, or residential electrical in Roseburg and Douglas County.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="lg"
              data-track="request_service_click"
              data-track-location="projects_cta"
            >
              Request Service
            </Button>
            <Button
              as="tel"
              href="tel:15418176480"
              variant="outline-white"
              size="lg"
              data-track="phone_click"
              data-track-location="projects_cta"
            >
              Call 541-817-6480
            </Button>
          </div>
        </div>
      </section>
    </>
  );
}
