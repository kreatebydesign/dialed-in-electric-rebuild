import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

export const metadata: Metadata = {
  title: {
    absolute: "About | Licensed Electrician in Roseburg, OR | Dialed In Electric",
  },
  description:
    "Dialed In Electric is a licensed electrical contractor based in Roseburg, OR. Generac certified, licensed since 2019, serving Douglas County. CCB# 228668.",
  keywords: [
    "about Dialed In Electric",
    "electrician Roseburg Oregon",
    "licensed electrician Douglas County",
    "Generac certified installer Roseburg",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Dialed In Electric | Roseburg, OR Electrician",
    description:
      "Licensed electrical contractor in Roseburg, OR since 2019. Generac certified, residential and commercial work throughout Douglas County. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/about",
  },
};

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

const services = [
  { label: "Standby Generator Installation", href: "/generators" },
  { label: "Manual Transfer Switches", href: "/backup-power" },
  { label: "Panel & Service Upgrades", href: "/panel-upgrades" },
  { label: "New Home Wiring", href: "/new-home-wiring" },
  { label: "Commercial Wiring", href: "/commercial" },
  { label: "EV Charger Installation", href: "/ev-charger" },
];

const serviceAreas = [
  "Roseburg",
  "Sutherlin",
  "Winston",
  "Green",
  "Melrose",
  "Garden Valley",
  "Lookingglass",
  "Wilbur",
  "Myrtle Creek",
  "Canyonville",
  "Glide",
  "Oakland",
];

const reasons = [
  {
    title: "We give you a clear price before we start",
    body: "No open-ended quotes, no surprise add-ons. We scope the job, give you a written number, and stick to it unless something genuinely changes.",
  },
  {
    title: "We pull permits and handle inspections",
    body: "Every job that requires a permit gets one. We schedule the inspection and are on site for the walk-through. You don't have to track any of it.",
  },
  {
    title: "The work is clean and labeled",
    body: "Panels are labeled. Conduit runs are straight. Junction boxes are accessible. It's the kind of work that holds up for the next electrician who opens that panel.",
  },
  {
    title: "We communicate the whole way through",
    body: "If something unexpected comes up mid-job, we tell you before we do extra work. We don't have that conversation after the invoice.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-deep py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-5 text-[12px] text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">About</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
              Roseburg, OR · CCB# 228668
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.06] tracking-tight mb-4 max-w-2xl">
            Built in Roseburg.<br />Wired Right.
          </h1>
          <p className="text-[16px] text-white/60 leading-relaxed max-w-xl mb-8">
            Dialed In Electric is a licensed electrical contractor serving Roseburg and Douglas County since 2019. We do residential and commercial electrical work, standby generator installs, and panel upgrades.
          </p>
          <div className="flex flex-col sm:flex-row gap-3">
            <Button as="link" href="/contact" variant="primary" size="lg">
              Request Service
            </Button>
            <Button as="tel" href="tel:15418176480" variant="outline-white" size="lg">
              Call 541-817-6480
            </Button>
          </div>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-charcoal border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Licensed Since 2019", sub: "Oregon CCB# 228668" },
              { label: "Generac Certified", sub: "Factory authorized installer" },
              { label: "Residential & Commercial", sub: "Homes, shops, new construction" },
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

      {/* Company story */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Our Approach</span>
              </div>
              <h2 className="text-3xl lg:text-[40px] font-extrabold text-charcoal-deep tracking-tight leading-tight mb-5">
                Electrical Work Done<br />Without the Runaround
              </h2>
              {/* TODO: Replace the paragraph below with the owner's actual story — how they started the business, what brought them to electrical work, what makes them different from a homeowner's point of view. Keep it to 3–4 sentences, plain language. */}
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                We started Dialed In Electric in 2019 to do electrical work the right way — permitted, inspected, and labeled. We&apos;re based in Roseburg and do most of our work in Douglas County.
              </p>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                We do generators, panel upgrades, new home wiring, commercial jobs, and EV chargers. Most projects are scheduled within the week. We give you a price before we start and don&apos;t change it unless the job genuinely changes.
              </p>
              {/* TODO: Add a personal note here — something the owner wants potential customers to know about how they work or what they care about. 1–2 sentences in their own voice. */}
              <p className="text-[15px] text-muted leading-relaxed">
                If you&apos;re looking for an electrician in Roseburg, give us a call. We&apos;ll tell you straight whether the job is something we can help with.
              </p>
            </div>

            <div className="relative rounded-sm overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[420px]">
              <Image
                src="/images/gallery/new-construction-service-install.jpg"
                alt="Dialed In Electric crew — new construction service installation in Douglas County"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              {/* TODO: Replace this image with a crew or truck photo when available */}
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
              <div className="absolute bottom-3 right-3">
                <span className="px-2.5 py-1 bg-charcoal-deep/85 text-white text-[10px] font-semibold rounded-sm uppercase tracking-wide">
                  Roseburg, OR
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why choose us */}
      <section className="py-16 lg:py-24 bg-charcoal-deep relative overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Why Homeowners Choose Us</span>
          </div>
          <h2 className="text-3xl lg:text-[40px] font-extrabold text-white tracking-tight leading-tight mb-10 max-w-xl">
            What People Say About Working With Us
          </h2>
          <div className="grid sm:grid-cols-2 gap-5">
            {reasons.map((reason, i) => (
              <div
                key={reason.title}
                className="flex gap-4 p-6 border border-white/10 rounded-sm hover:border-amber/30 transition-colors"
              >
                <span className="text-[11px] font-bold text-amber tracking-widest shrink-0 mt-0.5">
                  0{i + 1}
                </span>
                <div>
                  <h3 className="text-[14px] font-bold text-white mb-2">{reason.title}</h3>
                  <p className="text-[13px] text-white/55 leading-relaxed">{reason.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What we do */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Services</span>
              </div>
              <h2 className="text-3xl lg:text-[38px] font-extrabold text-charcoal-deep tracking-tight leading-tight mb-5">
                What We Do
              </h2>
              <ul className="flex flex-col divide-y divide-edge">
                {services.map((service) => (
                  <li key={service.href}>
                    <Link
                      href={service.href}
                      className="flex items-center justify-between py-3.5 group"
                    >
                      <span className="flex items-center gap-3 text-[14px] font-medium text-charcoal group-hover:text-amber transition-colors">
                        <CheckIcon className="w-4 h-4 text-amber shrink-0" />
                        {service.label}
                      </span>
                      <svg
                        className="w-3.5 h-3.5 text-muted group-hover:text-amber group-hover:translate-x-0.5 transition-all"
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
                      </svg>
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="mt-6">
                <Button as="link" href="/electrical-services" variant="outline-dark" size="md">
                  View All Services
                </Button>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              {/* Service areas */}
              <div className="p-6 bg-white border border-edge rounded-sm">
                <div className="flex items-center gap-3 mb-4">
                  <div className="h-px w-6 bg-amber" aria-hidden="true" />
                  <h3 className="text-[11px] font-bold text-charcoal/50 tracking-[0.18em] uppercase">
                    Service Areas
                  </h3>
                </div>
                <ul className="grid grid-cols-2 gap-y-2 gap-x-3">
                  {serviceAreas.map((area) => (
                    <li key={area} className="flex items-center gap-2 text-[13px] text-charcoal">
                      <div className="w-1 h-1 bg-amber rounded-full shrink-0" aria-hidden="true" />
                      {area}
                    </li>
                  ))}
                </ul>
                <p className="text-[12px] text-muted mt-4">
                  Serving all of Douglas County, OR. Call to confirm availability in your area.
                </p>
              </div>

              {/* License info */}
              <div className="p-5 bg-charcoal-deep rounded-sm">
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber hidden" aria-hidden="true" />
                <p className="text-[11px] font-bold text-amber tracking-[0.18em] uppercase mb-3">Licensing</p>
                <div className="flex flex-col gap-2 text-[13px] text-white/70">
                  <p><span className="text-white font-semibold">Oregon CCB#</span> 228668</p>
                  <p><span className="text-white font-semibold">Generac Factory Certified</span> installer</p>
                  <p><span className="text-white font-semibold">Fully insured</span> — general liability and workers&apos; comp</p>
                  <p><span className="text-white font-semibold">Licensed</span> in the State of Oregon</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Have a Project in Roseburg or Douglas County?"
        subtext="Send us a few details. We'll give you a straight answer on scope and price."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
