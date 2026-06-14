import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Electrician Service Areas | Roseburg, Sutherlin, Winston | Dialed In Electric",
  description:
    "Dialed In Electric serves Roseburg and all of Douglas County, OR. Generator installation, panel upgrades, residential and commercial electrical work in Sutherlin, Winston, Myrtle Creek, and surrounding communities.",
  keywords: [
    "electrician Douglas County OR",
    "electrician service areas Roseburg Oregon",
    "generator installation Douglas County",
    "electrical contractor Sutherlin Winston OR",
  ],
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Electrician Service Areas | Douglas County, OR | Dialed In Electric",
    description:
      "Licensed electrician serving Roseburg and all of Douglas County. Generator installs, panel upgrades, residential and commercial electrical throughout the region.",
    url: "https://dialedinelectricroseburg.com/service-areas",
  },
};

const cities = [
  { name: "Roseburg", slug: "roseburg", note: "Headquarters — fastest availability" },
  { name: "Sutherlin", slug: "sutherlin", note: "~8 miles north on I-5" },
  { name: "Winston", slug: "winston", note: "~10 miles south of Roseburg" },
  { name: "Green", slug: "green", note: "Rural, southern Douglas County" },
  { name: "Melrose", slug: "melrose", note: "Umpqua Valley, west of Roseburg" },
  { name: "Garden Valley", slug: "garden-valley", note: "Rural community, west of Roseburg" },
  { name: "Lookingglass", slug: "lookingglass", note: "Rural, southern Douglas County" },
  { name: "Wilbur", slug: "wilbur", note: "Northeast of Roseburg" },
  { name: "Myrtle Creek", slug: "myrtle-creek", note: "~25 miles south on I-5" },
  { name: "Oakland", slug: "oakland", note: "~16 miles north, historic district" },
  { name: "Glide", slug: "glide", note: "North Umpqua River corridor" },
  { name: "Canyonville", slug: "canyonville", note: "~30 miles south on I-5" },
];

function ArrowIcon() {
  return (
    <svg className="w-3.5 h-3.5" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true">
      <path d="M8.293 3.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L10.586 9H3a1 1 0 010-2h7.586L8.293 4.707a1 1 0 010-1.414z" />
    </svg>
  );
}

export default function ServiceAreasPage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-charcoal-deep py-16 lg:py-24 relative overflow-hidden">
        <div
          className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.06) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div
          className="absolute bottom-0 left-1/4 w-[600px] h-[300px] pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(245,166,35,0.03) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="absolute left-0 top-0 bottom-0 w-1 bg-amber" aria-hidden="true" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-2 mb-5 text-[12px] text-white/40">
            <Link href="/" className="hover:text-white/70 transition-colors">Home</Link>
            <span>/</span>
            <span className="text-white/60">Service Areas</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
              Douglas County, Oregon
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-extrabold text-white leading-[1.06] tracking-tight mb-4 max-w-2xl">
            Serving Roseburg and<br />Douglas County, Oregon
          </h1>
          <p className="text-[16px] text-white/60 leading-relaxed max-w-xl">
            Our crew is based in Roseburg. We do generator installs, panel upgrades, new home wiring, commercial electrical, and EV chargers throughout Douglas County and the surrounding communities listed below.
          </p>
        </div>
      </section>

      {/* Trust bar */}
      <div className="bg-charcoal border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Based in Roseburg", sub: "2819 Cleveland Hill Rd" },
              { label: "CCB# 228668", sub: "Oregon licensed & insured" },
              { label: "12 Communities", sub: "Across Douglas County" },
              { label: "Same-Week Scheduling", sub: "Most jobs within a week" },
            ].map((item) => (
              <div key={item.label} className="flex flex-col items-center justify-center text-center py-5 px-4">
                <span className="text-sm font-semibold text-amber tracking-wide">{item.label}</span>
                <span className="text-[11px] text-white/40 mt-0.5 tracking-wide">{item.sub}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* City grid */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Service Areas</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {cities.map((city) => (
              <Link
                key={city.slug}
                href={`/service-areas/${city.slug}`}
                className="group flex items-center justify-between p-5 bg-white border border-edge rounded-sm hover:border-amber hover:shadow-md transition-all duration-200 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-edge group-hover:bg-amber transition-colors duration-200" />
                <div>
                  <p className="text-[15px] font-bold text-charcoal-deep group-hover:text-amber transition-colors">
                    {city.name}
                  </p>
                  <p className="text-[12px] text-muted mt-0.5">{city.note}</p>
                </div>
                <span className="text-muted group-hover:text-amber group-hover:translate-x-1 transition-all duration-200 shrink-0 ml-4">
                  <ArrowIcon />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Coverage overview */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Coverage</span>
              </div>
              <h2 className="text-3xl lg:text-[38px] font-extrabold text-charcoal-deep tracking-tight leading-tight mb-5">
                Douglas County Is Our Home Area
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                We&apos;re not a company that serves everywhere from Portland. Our crew is based in Roseburg. Most of our work is within 30 miles of our shop, which means we can usually get to a job quickly and don&apos;t have to pad travel costs into the quote.
              </p>
              <p className="text-[15px] text-muted leading-relaxed mb-4">
                For most communities in Douglas County, scheduling within the week is typical. Rural areas further out — Glide, Canyonville, Lookingglass — we still serve, though scheduling may take a few extra days depending on what we have going.
              </p>
              <p className="text-[15px] text-muted leading-relaxed">
                If you&apos;re not sure whether we cover your area, call us. We&apos;ll tell you straight.
              </p>
            </div>

            <div className="relative rounded-sm overflow-hidden aspect-[4/3] lg:aspect-auto lg:h-[400px]">
              <Image
                src="/images/gallery/generac-generator-install-01.jpg"
                alt="Generator and electrical work in Douglas County, Oregon"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/60 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4">
                <span className="px-3 py-1 bg-charcoal-deep/85 text-white text-[11px] font-semibold rounded-sm uppercase tracking-wide">
                  Roseburg, OR
                </span>
              </div>
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber" aria-hidden="true" />
            </div>
          </div>
        </div>
      </section>

      <CTABanner
        headline="Work in Your Area?"
        subtext="Call us or send a request. We'll confirm availability and get back to you the same day."
        primaryLabel="Get a Quote"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
