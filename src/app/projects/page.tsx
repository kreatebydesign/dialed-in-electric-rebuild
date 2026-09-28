import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";

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
 * Project data model ready for future real case studies.
 * Optional fields (location, year, services, serviceHref, workPerformed)
 * can be filled when Jamie provides verified project details — leave empty until then.
 */
type Project = {
  id: string;
  src: string;
  alt: string;
  title: string;
  summary: string;
  category: "Generators" | "Service Upgrades" | "Commercial" | "Residential";
  location?: string;
  year?: string;
  services?: string[];
  serviceHref?: string;
  workPerformed?: string[];
};

const projects: Project[] = [
  {
    id: "generac-standby-install",
    src: "/images/gallery/generac-generator-install-01.jpg",
    alt: "Generac standby generator installation — Roseburg, OR",
    title: "Generac Standby Generator Install",
    summary: "Full install: concrete pad, transfer switch, gas coordination, and startup. Roseburg, OR.",
    category: "Generators",
    location: "Roseburg, OR",
    serviceHref: "/generators",
    workPerformed: [
      "Concrete pad poured and leveled",
      "Standby generator installed",
      "Automatic transfer switch wired in",
      "Gas contractor coordinated for hookup",
      "Startup, load test, and owner walkthrough",
    ],
  },
  {
    id: "transfer-switch-panel",
    src: "/images/gallery/generac-generator-install-02.jpg",
    alt: "Generac generator transfer switch panel integration",
    title: "Transfer Switch & Panel Integration",
    summary: "Automatic transfer switch wired into the main panel with load management.",
    category: "Generators",
    serviceHref: "/generators",
  },
  {
    id: "side-yard-generator",
    src: "/images/gallery/generator-install-side-yard.jpg",
    alt: "Generac generator set — side yard residential install",
    title: "Generator Set — Side Yard Install",
    summary: "Residential standby generator mounted in side yard. Clean conduit run, proper clearances.",
    category: "Generators",
    serviceHref: "/generators",
  },
  {
    id: "propane-generator-tank",
    src: "/images/gallery/propane-generator-tank-install.jpg",
    alt: "Propane-fueled standby generator with dedicated tank",
    title: "Propane Generator With Dedicated Tank",
    summary: "Propane fuel path with dedicated tank placement, gas line coordination, and generator startup.",
    category: "Generators",
    serviceHref: "/generators",
  },
  {
    id: "panel-upgrade-interior",
    src: "/images/gallery/electrical-panel-interior.jpg",
    alt: "200 amp electrical panel interior — labeled and organized",
    title: "200A Panel Upgrade — Interior",
    summary: "100→200A service upgrade. Every circuit labeled, grounding updated to current code.",
    category: "Service Upgrades",
    serviceHref: "/panel-upgrades",
  },
  {
    id: "residential-service-upgrade",
    src: "/images/gallery/residential-service-upgrade.jpg",
    alt: "Residential service upgrade — Roseburg, OR",
    title: "Residential Service Upgrade",
    summary: "Service entrance and meter base replacement for added home electrical capacity.",
    category: "Service Upgrades",
    location: "Roseburg, OR",
    serviceHref: "/panel-upgrades",
  },
  {
    id: "commercial-disconnect",
    src: "/images/gallery/commercial-disconnect-install.jpg",
    alt: "Commercial disconnect installation — Roseburg, OR",
    title: "Commercial Disconnect Installation",
    summary: "Exterior disconnect installation for a commercial tenant improvement.",
    category: "Commercial",
    location: "Roseburg, OR",
    serviceHref: "/commercial",
  },
  {
    id: "commercial-service",
    src: "/images/gallery/commercial-electrical-service.jpg",
    alt: "Commercial electrical service installation — Roseburg, OR",
    title: "Commercial Electrical Service",
    summary: "New service installation for a commercial building in Roseburg.",
    category: "Commercial",
    location: "Roseburg, OR",
    serviceHref: "/commercial",
  },
  {
    id: "multi-meter-service",
    src: "/images/gallery/commercial-meter-bank-install.jpg",
    alt: "Multi-meter service wall — commercial installation",
    title: "Multi-Meter Service Installation",
    summary: "Meter bank for a multi-unit commercial property. Clean conduit, properly labeled.",
    category: "Commercial",
    serviceHref: "/commercial",
  },
  {
    id: "new-construction-service",
    src: "/images/gallery/new-construction-service-install.jpg",
    alt: "New construction electrical service install — Douglas County",
    title: "New Construction Service Install",
    summary: "Temporary and permanent service installation for a new residential build in Douglas County.",
    category: "Residential",
    location: "Douglas County, OR",
    serviceHref: "/new-home-wiring",
  },
];

const categories = ["Generators", "Service Upgrades", "Commercial", "Residential"] as const;

const categoryColors: Record<string, string> = {
  Generators: "bg-amber text-charcoal-deep",
  "Service Upgrades": "bg-charcoal-deep text-white",
  Commercial: "bg-charcoal text-white",
  Residential: "bg-white/90 text-charcoal-deep",
};

export default function ProjectsPage() {
  const featured = projects[0];

  return (
    <>
      <section className="bg-charcoal-deep py-16 lg:py-20 relative overflow-hidden">
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
            <span className="text-white/60">Projects</span>
          </div>
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">
              Real Work · Roseburg, OR
            </span>
          </div>
          <h1 className="text-4xl sm:text-5xl lg:text-[54px] font-extrabold text-white leading-[1.06] tracking-tight mb-4 max-w-2xl">
            Work From the Field
          </h1>
          <p className="text-[16px] text-white/60 leading-relaxed max-w-xl">
            Generator installs, panel upgrades, commercial service work, and new construction throughout Douglas County. Every photo is from a real job — no stock, no mockups.
          </p>
        </div>
      </section>

      <div className="bg-charcoal border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Generac Certified", sub: "Certified Generac installer" },
              { label: "Licensed & Insured", sub: "CCB# 228668 · Oregon" },
              { label: "4 Service Categories", sub: "Generators, panels, commercial, residential" },
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

      <section className="py-12 lg:py-16 bg-surface">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-7">
            <div className="h-px w-8 bg-amber" aria-hidden="true" />
            <span className="text-amber text-[11px] font-bold tracking-[0.18em] uppercase">Featured</span>
          </div>
          <div className="grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
            <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
              <div className="absolute top-3 left-3">
                <span className={`px-2.5 py-1 text-[10px] font-bold uppercase tracking-wider rounded-sm ${categoryColors[featured.category]}`}>
                  {featured.category}
                </span>
              </div>
            </div>
            <div className="lg:pl-4">
              <h2 className="text-2xl lg:text-3xl font-extrabold text-charcoal-deep tracking-tight mb-3">
                {featured.title}
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                {featured.summary}
              </p>
              {featured.workPerformed && (
                <div className="flex flex-col gap-3 text-[13px] text-charcoal">
                  {featured.workPerformed.map((item) => (
                    <div key={item} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-amber rounded-full shrink-0" aria-hidden="true" />
                      {item}
                    </div>
                  ))}
                </div>
              )}
              <p className="mt-6 text-[13px] text-muted">
                Planning similar work? See{" "}
                <Link href="/generators" className="text-amber font-semibold hover:underline">
                  Generac generator installation
                </Link>
                ,{" "}
                <Link href="/panel-upgrades" className="text-amber font-semibold hover:underline">
                  panel upgrades
                </Link>
                , or{" "}
                <Link href="/commercial" className="text-amber font-semibold hover:underline">
                  commercial electrical
                </Link>
                .
              </p>
            </div>
          </div>
        </div>
      </section>

      {categories.map((cat) => {
        const catProjects = projects.filter((p) => p.category === cat);
        if (catProjects.length === 0) return null;

        return (
          <section key={cat} className="py-12 lg:py-16 odd:bg-white even:bg-surface">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="flex items-center gap-3 mb-7">
                <div className="h-px w-8 bg-amber" aria-hidden="true" />
                <h2 className="text-[13px] font-bold text-charcoal tracking-[0.18em] uppercase">
                  {cat}
                </h2>
                <span className="text-[12px] text-muted">
                  {catProjects.length} {catProjects.length === 1 ? "project" : "projects"}
                </span>
              </div>
              <div
                className={`grid gap-4 ${
                  catProjects.length === 1
                    ? "grid-cols-1 max-w-lg"
                    : catProjects.length === 2
                    ? "grid-cols-1 sm:grid-cols-2"
                    : catProjects.length >= 4
                    ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-3"
                }`}
              >
                {catProjects.map((project, i) => (
                  <figure
                    key={project.id}
                    className={`group relative rounded-sm overflow-hidden bg-charcoal-deep ${
                      catProjects.length >= 4 && i === 0
                        ? "sm:col-span-2 aspect-[16/10]"
                        : "aspect-[4/3]"
                    }`}
                  >
                    <Image
                      src={project.src}
                      alt={project.alt}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                      sizes={
                        catProjects.length >= 4 && i === 0
                          ? "(max-width: 1280px) 100vw, 640px"
                          : "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      }
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/85 via-charcoal-deep/20 to-transparent" />
                    <div className="absolute top-3 left-3">
                      <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm ${categoryColors[cat]}`}>
                        {cat}
                      </span>
                    </div>
                    <figcaption className="absolute bottom-0 left-0 right-0 p-4">
                      <p className="text-[13px] font-semibold text-white leading-snug mb-0.5">
                        {project.title}
                      </p>
                      <p className="text-[11px] text-white/75 leading-relaxed">
                        {project.summary}
                      </p>
                      {project.serviceHref && (
                        <Link
                          href={project.serviceHref}
                          className="inline-block mt-2 text-[11px] font-semibold text-amber hover:text-amber-light"
                        >
                          Related service →
                        </Link>
                      )}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner
        headline="Need Help With a Project Like This?"
        subtext="Call or request service — tell us what you're planning and we'll walk through scope for Roseburg and Douglas County."
        primaryLabel="Request Service"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
