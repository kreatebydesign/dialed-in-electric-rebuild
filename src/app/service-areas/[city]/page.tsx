import type { Metadata } from "next";
import { notFound } from "next/navigation";
import PrototypePageClosing from "@/components/prototype/PrototypePageClosing";
import CityServiceAreaContent from "@/components/prototype/CityServiceAreaContent";

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
      "Dialed In Electric is based in Roseburg at 2819 Cleveland Hill Rd. We handle generator installs, panel upgrades, new home wiring, commercial jobs, and EV chargers throughout the city and surrounding neighborhoods.",
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
      "We travel to Sutherlin regularly from Roseburg for generator and panel work.",
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
      "We work in Garden Valley regularly for generator installs, panel upgrades, and residential electrical projects.",
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
      "Wilbur is a small community northeast of Roseburg along the North Umpqua drainage. We service homes and properties here for generator installs, panel upgrades, and transfer switches.",
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
    title: {
      absolute: `Electrician in ${city.name}, OR | Generator & Electrical Service | Dialed In Electric`,
    },
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

// ─── Page component ───────────────────────────────────────────────────────────

export default async function CityPage({
  params,
}: {
  params: Promise<{ city: string }>;
}) {
  const { city: slug } = await params;
  const city = cities.find((c) => c.slug === slug);
  if (!city) notFound();

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
        name: "Service Areas",
        item: "https://dialedinelectricroseburg.com/service-areas",
      },
      {
        "@type": "ListItem",
        position: 3,
        name: `Electrician in ${city.name}`,
        item: `https://dialedinelectricroseburg.com/service-areas/${city.slug}`,
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <CityServiceAreaContent
        city={city}
        otherCities={cities.filter((c) => c.slug !== city.slug).map((c) => ({ name: c.name, slug: c.slug }))}
      />
      <PrototypePageClosing trackLocation={`service_area_${city.slug}_close`} />
    </>
  );
}
