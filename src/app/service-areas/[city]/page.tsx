import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import CTABanner from "@/components/ui/CTABanner";
import Button from "@/components/ui/Button";

// ─── City data ────────────────────────────────────────────────────────────────

type CityData = {
  name: string;
  slug: string;
  region: string;
  distance: string;
  metaDescription: string;
  intro: string;
  localNote: string;
  primaryService: string; // featured service context for this area
};

const cities: CityData[] = [
  {
    name: "Roseburg",
    slug: "roseburg",
    region: "central Douglas County",
    distance: "our headquarters",
    metaDescription:
      "Electrician in Roseburg, OR. Generator installation, panel upgrades, new home wiring, commercial electrical, and EV chargers. Based in Roseburg. CCB# 228668. Call 541-817-6480.",
    intro:
      "Dialed In Electric is based in Roseburg — 2819 Cleveland Hill Rd. Our crew is here, which means most Roseburg jobs get scheduled quickly, often within the same week. We do generator installs, panel upgrades, new home wiring, commercial jobs, and EV chargers throughout the city and the neighborhoods around it.",
    localNote:
      "We know the local inspectors and utility requirements, which means less time waiting on permit approvals and inspection scheduling.",
    primaryService: "Generator Installation",
  },
  {
    name: "Sutherlin",
    slug: "sutherlin",
    region: "northern Douglas County",
    distance: "about 8 miles north of Roseburg on I-5",
    metaDescription:
      "Electrician in Sutherlin, OR. Generator installation, panel upgrades, and residential electrical in northern Douglas County. CCB# 228668. Call 541-817-6480.",
    intro:
      "Sutherlin is one of our busiest service areas outside of Roseburg. We do regular work there for homeowners, new construction, and small businesses. Generator installs are common in Sutherlin — the area sees outages from coastal storms, and a lot of homes there are on wells that stop working when the grid does.",
    localNote:
      "We're a short drive from Sutherlin and can usually schedule within the week for most electrical work.",
    primaryService: "Generator Installation",
  },
  {
    name: "Winston",
    slug: "winston",
    region: "southern Douglas County",
    distance: "about 10 miles south of Roseburg",
    metaDescription:
      "Electrician in Winston, OR. Generator installation, panel upgrades, transfer switches, and residential wiring. Licensed electrician in Douglas County. CCB# 228668.",
    intro:
      "We regularly work in Winston for residential electrical and generator installs. It's a short drive from our shop, so scheduling is rarely a problem. We do panel upgrades, transfer switches, and new home wiring for Winston homeowners and the occasional commercial property in the area.",
    localNote:
      "Winston homeowners with older panels often find they need an upgrade when adding a new HVAC system or generator — we can handle both in the same visit.",
    primaryService: "Panel Upgrades",
  },
  {
    name: "Green",
    slug: "green",
    region: "southern Douglas County",
    distance: "south of Roseburg in Douglas County",
    metaDescription:
      "Electrician in Green, OR. Generator installation, transfer switches, and panel upgrades for rural properties in Douglas County. CCB# 228668. Call 541-817-6480.",
    intro:
      "Green is a rural community in southern Douglas County. Properties out here tend to be on larger lots, and many homes run on well water — which means when the grid goes down, so does the water. We install Generac standby generators, manual transfer switches, and do panel work for homes throughout the Green area.",
    localNote:
      "Rural properties in Green often have older service equipment that hasn't been touched in decades. We can assess what you have and tell you honestly what needs updating.",
    primaryService: "Backup Power",
  },
  {
    name: "Melrose",
    slug: "melrose",
    region: "Umpqua Valley, west of Roseburg",
    distance: "west of Roseburg in the Umpqua Valley",
    metaDescription:
      "Electrician in Melrose, OR. Generator installation, panel upgrades, and residential electrical in the Umpqua Valley. Licensed electrician. CCB# 228668.",
    intro:
      "Melrose sits in the Umpqua Valley wine country west of Roseburg. We work with homeowners and small agricultural properties in the area. Older homes in the Melrose area often need panel upgrades to handle modern electrical loads, and rural properties benefit from standby generator coverage during winter outages.",
    localNote:
      "Agricultural properties and rural homes in the Melrose area often have unique electrical needs — we're familiar with working in rural settings and coordinate with utility companies in the valley.",
    primaryService: "Panel Upgrades",
  },
  {
    name: "Garden Valley",
    slug: "garden-valley",
    region: "rural Douglas County, west of Roseburg",
    distance: "west of Roseburg",
    metaDescription:
      "Electrician in Garden Valley, OR. Generator installation, panel upgrades, and residential electrical for rural properties. CCB# 228668. Call 541-817-6480.",
    intro:
      "Garden Valley is a rural community west of Roseburg. We do generator installs, panel work, and residential wiring for homes and properties in the area. Properties on wells with no backup power find out how important it is the first time a winter storm takes out the grid for a day or two — a standby generator removes that problem entirely.",
    localNote:
      "We service Garden Valley on a regular basis and can typically schedule within a week for generator and panel work.",
    primaryService: "Generator Installation",
  },
  {
    name: "Lookingglass",
    slug: "lookingglass",
    region: "southern Douglas County",
    distance: "south of Roseburg in Douglas County",
    metaDescription:
      "Electrician in Lookingglass, OR. Generator installation, panel upgrades, and residential electrical for rural Douglas County properties. CCB# 228668.",
    intro:
      "Lookingglass is a rural community in southern Douglas County. We serve homes and properties here for generator installation, panel upgrades, and general residential electrical. Rural properties in this area rely on wells for water, which makes backup power a practical necessity when the grid is down.",
    localNote:
      "Lookingglass properties are often on private roads with older electrical infrastructure. We're experienced with rural installs and the coordination they require.",
    primaryService: "Backup Power",
  },
  {
    name: "Wilbur",
    slug: "wilbur",
    region: "northeast Douglas County",
    distance: "northeast of Roseburg",
    metaDescription:
      "Electrician in Wilbur, OR. Generator installation, panel upgrades, transfer switches, and electrical service. Licensed electrician serving northeast Douglas County. CCB# 228668.",
    intro:
      "Wilbur is a small community northeast of Roseburg along the North Umpqua drainage. We service homes and properties here for electrical work including generator installs, panel upgrades, and transfer switches. Scheduling from our Roseburg shop is typically within the week for most jobs.",
    localNote:
      "Homes in the Wilbur area often have older service entrances that can be a limiting factor when adding a generator or new circuits — we assess this during the estimate.",
    primaryService: "Generator Installation",
  },
  {
    name: "Myrtle Creek",
    slug: "myrtle-creek",
    region: "southern Douglas County",
    distance: "about 25 miles south of Roseburg on I-5",
    metaDescription:
      "Electrician in Myrtle Creek, OR. Generator installation, panel upgrades, and residential and commercial electrical. Licensed Douglas County electrician. CCB# 228668.",
    intro:
      "Myrtle Creek is one of the larger communities we serve south of Roseburg. We make regular trips to the Myrtle Creek area for generator installs, panel upgrades, and residential electrical work. It's far enough from Roseburg that having a licensed electrician who knows the area makes scheduling easier for homeowners.",
    localNote:
      "We work in Myrtle Creek often enough that we batch jobs when scheduling allows, which can help keep travel costs reasonable for the work.",
    primaryService: "Generator Installation",
  },
  {
    name: "Oakland",
    slug: "oakland",
    region: "northern Douglas County",
    distance: "about 16 miles north of Roseburg on I-5",
    metaDescription:
      "Electrician in Oakland, OR. Generator installation, panel upgrades, and electrical service for homes in northern Douglas County. Licensed electrician. CCB# 228668.",
    intro:
      "Oakland is a small historic community north of Roseburg. We do generator installs and panel work for homeowners in Oakland and the surrounding area. Historic homes in Oakland are often on older service equipment — 60A or 100A panels that haven't been touched in 30 or 40 years. We help bring them up to current standards when the homeowner is ready.",
    localNote:
      "If you have a historic home in Oakland and aren't sure what you're working with, we can do a service walkthrough and give you a clear picture of the panel's condition.",
    primaryService: "Panel Upgrades",
  },
  {
    name: "Glide",
    slug: "glide",
    region: "North Umpqua River corridor",
    distance: "about 22 miles northeast of Roseburg",
    metaDescription:
      "Electrician in Glide, OR. Generator installation, transfer switches, and residential electrical along the North Umpqua. Licensed Douglas County electrician. CCB# 228668.",
    intro:
      "Glide is a rural community along the North Umpqua River east of Roseburg. Properties here are often on larger acreage and rely on wells for water. Winter storms in this corridor can knock out power for extended periods. We install Generac standby generators and manual transfer switches for homes in Glide and the North Umpqua area.",
    localNote:
      "For Glide-area properties, propane is often the preferred fuel for a standby generator since natural gas isn't available. We coordinate with your propane supplier as part of the install.",
    primaryService: "Generator Installation",
  },
  {
    name: "Canyonville",
    slug: "canyonville",
    region: "southern Douglas County",
    distance: "about 30 miles south of Roseburg on I-5",
    metaDescription:
      "Electrician in Canyonville, OR. Generator installation, panel upgrades, and electrical service in southern Douglas County. Licensed electrician. CCB# 228668. Call 541-817-6480.",
    intro:
      "Canyonville is one of the furthest communities we regularly serve south of Roseburg. We travel down for generator installs, panel upgrades, and electrical work when the scope fits. If you're a Canyonville homeowner looking for a licensed electrician, call us and we'll give you a straight answer on whether we can take the job.",
    localNote:
      "For Canyonville jobs, we typically batch scheduling with other work in the southern county area, which keeps trip costs manageable.",
    primaryService: "Generator Installation",
  },
];

// ─── Static generation ────────────────────────────────────────────────────────

export function generateStaticParams() {
  return cities.map((city) => ({ city: city.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ city: string }>;
}): Promise<Metadata> {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) return {};

  return {
    title: `Electrician in ${city.name}, OR | Generator & Electrical Service | Dialed In Electric`,
    description: city.metaDescription,
    keywords: [
      `electrician ${city.name} OR`,
      `generator installation ${city.name} Oregon`,
      `electrical contractor ${city.name}`,
      `panel upgrade ${city.name} Oregon`,
    ],
    alternates: { canonical: `/service-areas/${city.slug}` },
    openGraph: {
      title: `Electrician in ${city.name}, OR | Dialed In Electric`,
      description: city.metaDescription,
      url: `https://dialedinelectricroseburg.com/service-areas/${city.slug}`,
    },
  };
}

// ─── Shared icons ─────────────────────────────────────────────────────────────

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

// ─── Services offered in every area ──────────────────────────────────────────

const services = [
  { label: "Generac Standby Generators", href: "/generators", detail: "Full install — pad, transfer switch, gas hookup, and startup." },
  { label: "Backup Power / Transfer Switches", href: "/backup-power", detail: "Connect a portable generator safely to your home's circuits." },
  { label: "Panel & Service Upgrades", href: "/panel-upgrades", detail: "100→200A upgrades, breakers, labeling, and inspection." },
  { label: "Residential Electrical", href: "/electrical-services", detail: "New circuits, outlets, switches, and general electrical work." },
  { label: "Commercial Electrical", href: "/commercial", detail: "Shops, tenant improvements, service work, and machine circuits." },
  { label: "EV Charger Installation", href: "/ev-charger", detail: "Level 2 home charging circuit — sized, permitted, and labeled." },
];

const whyUs = [
  "Clear quote before any work starts",
  "Permits pulled and inspections coordinated",
  "Work labeled and organized when we leave",
  "Local crew based in Roseburg — not a dispatch service",
  "Licensed since 2019 · Oregon CCB# 228668",
  "Generac factory certified installer",
];

// ─── Page component ───────────────────────────────────────────────────────────

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

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
            <Link href="/service-areas" className="hover:text-white/70 transition-colors">Service Areas</Link>
            <span>/</span>
            <span className="text-white/60">{city.name}</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
              {city.region} · CCB# 228668
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.06] tracking-tight mb-4 max-w-2xl">
            Electrician in {city.name},<br />
            <span className="text-amber">Oregon</span>
          </h1>
          <p className="text-[16px] text-white/60 leading-relaxed max-w-xl mb-8">
            {city.intro}
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
      </section>

      {/* Context strip */}
      <div className="bg-charcoal border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { label: city.name, sub: city.region },
              { label: city.distance.charAt(0).toUpperCase() + city.distance.slice(1), sub: "From our Roseburg shop" },
              { label: "CCB# 228668", sub: "Oregon licensed & insured" },
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

      {/* Services in this area */}
      <section className="py-16 lg:py-24 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-5">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
              Services Available in {city.name}
            </span>
          </div>
          <h2 className="text-3xl lg:text-[38px] font-extrabold text-charcoal-deep tracking-tight mb-8 max-w-xl">
            What We Do in {city.name}
          </h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group flex flex-col gap-2 p-5 bg-white border border-edge rounded-sm hover:border-amber hover:shadow-md transition-all duration-200 relative overflow-hidden"
              >
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-edge group-hover:bg-amber transition-colors duration-200" />
                <span className="text-[14px] font-bold text-charcoal-deep group-hover:text-amber transition-colors">
                  {service.label}
                </span>
                <span className="text-[12px] text-muted leading-snug">{service.detail}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Local note + Why us */}
      <section className="py-16 lg:py-24 bg-charcoal-deep relative overflow-hidden">
        <div
          className="absolute -top-32 -right-32 w-80 h-80 rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(245,166,35,0.07) 0%, transparent 70%)" }}
          aria-hidden="true"
        />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
                  About Working in {city.name}
                </span>
              </div>
              <h2 className="text-2xl lg:text-3xl font-extrabold text-white tracking-tight mb-4">
                Local Crew, Real Availability
              </h2>
              <p className="text-[15px] text-white/60 leading-relaxed mb-4">
                We&apos;re based in Roseburg, {city.distance}. We do a lot of work in {city.region} and are familiar with the types of jobs that come up in communities like {city.name}.
              </p>
              <p className="text-[15px] text-white/60 leading-relaxed">
                {city.localNote}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-3 mb-5">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Why Homeowners Call Us</span>
              </div>
              <ul className="flex flex-col gap-3">
                {whyUs.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[14px] text-white/75">
                    <CheckIcon className="w-4 h-4 text-amber shrink-0 mt-0.5" />
                    {item}
                  </li>
                ))}
              </ul>
              <div className="mt-7">
                <Button as="link" href="/contact" variant="primary" size="md">
                  Request Service in {city.name}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Nearby areas */}
      <section className="py-12 lg:py-16 bg-white border-b border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-[12px] font-semibold text-muted uppercase tracking-widest mb-4">
            Other Areas We Serve
          </p>
          <div className="flex flex-wrap gap-2">
            {cities
              .filter((c) => c.slug !== city.slug)
              .map((c) => (
                <Link
                  key={c.slug}
                  href={`/service-areas/${c.slug}`}
                  className="px-3 py-1.5 text-[12px] font-medium text-charcoal border border-edge rounded-sm hover:border-amber hover:text-amber transition-colors"
                >
                  {c.name}
                </Link>
              ))}
          </div>
        </div>
      </section>

      <CTABanner
        headline={`Need Electrical Work in ${city.name}?`}
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
