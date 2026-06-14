import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import CTABanner from "@/components/ui/CTABanner";

export const metadata: Metadata = {
  title: "Projects | Electrical & Generator Work | Dialed In Electric",
  description:
    "Real project photos from Dialed In Electric in Roseburg, OR. Generator installs, panel upgrades, commercial wiring, and residential electrical work throughout Douglas County.",
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
    url: "https://dialedinelectricroseburg.com/projects",
  },
};

type Project = {
  src: string;
  alt: string;
  caption: string;
  detail: string;
  category: string;
};

const projects: Project[] = [
  // Generators
  {
    src: "/images/gallery/generac-generator-install-01.jpg",
    alt: "Generac standby generator installation — Roseburg, OR",
    caption: "Generac Standby Generator Install",
    detail: "Full install: concrete pad, transfer switch, gas coordination, and startup. Roseburg, OR.",
    category: "Generators",
  },
  {
    src: "/images/gallery/generac-generator-install-02.jpg",
    alt: "Generac generator transfer switch panel integration",
    caption: "Transfer Switch & Panel Integration",
    detail: "Automatic transfer switch wired into the main panel with load management.",
    category: "Generators",
  },
  {
    src: "/images/gallery/generator-install-side-yard.jpg",
    alt: "Generac generator set — side yard residential install",
    caption: "Generator Set — Side Yard Install",
    detail: "Residential standby generator mounted in side yard. Clean conduit run, proper clearances.",
    category: "Generators",
  },
  {
    src: "/images/gallery/propane-generator-tank-install.jpg",
    alt: "Propane-fueled standby generator with dedicated tank",
    caption: "Propane Generator With Dedicated Tank",
    detail: "Customer preferred propane over natural gas. Tank placement, gas line, and generator startup.",
    category: "Generators",
  },
  // Service Upgrades
  {
    src: "/images/gallery/electrical-panel-interior.jpg",
    alt: "200 amp electrical panel interior — labeled and organized",
    caption: "200A Panel Upgrade — Interior",
    detail: "100→200A service upgrade. Every circuit labeled, grounding updated to current code.",
    category: "Service Upgrades",
  },
  {
    src: "/images/gallery/residential-service-upgrade.jpg",
    alt: "Residential service upgrade — Roseburg, OR",
    caption: "Residential Service Upgrade",
    detail: "Service entrance and meter base replacement. Homeowner needed capacity for new HVAC.",
    category: "Service Upgrades",
  },
  // Commercial
  {
    src: "/images/gallery/commercial-disconnect-install.jpg",
    alt: "Commercial disconnect installation — Roseburg, OR",
    caption: "Commercial Disconnect Installation",
    detail: "Exterior disconnect installation for a commercial tenant improvement.",
    category: "Commercial",
  },
  {
    src: "/images/gallery/commercial-electrical-service.jpg",
    alt: "Commercial electrical service installation — Roseburg, OR",
    caption: "Commercial Electrical Service",
    detail: "New service installation for a commercial building in Roseburg.",
    category: "Commercial",
  },
  {
    src: "/images/gallery/commercial-meter-bank-install.jpg",
    alt: "Multi-meter service wall — commercial installation",
    caption: "Multi-Meter Service Installation",
    detail: "Meter bank for a multi-unit commercial property. Clean conduit, properly labeled.",
    category: "Commercial",
  },
  // Residential
  {
    src: "/images/gallery/new-construction-service-install.jpg",
    alt: "New construction electrical service install — Douglas County",
    caption: "New Construction Service Install",
    detail: "Temporary and permanent service installation for a new residential build in Douglas County.",
    category: "Residential",
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
      {/* Hero */}
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

      {/* Stats bar */}
      <div className="bg-charcoal border-b border-white/8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 divide-x divide-white/10">
            {[
              { label: "Generac Certified", sub: "Factory authorized installer" },
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

      {/* Featured project */}
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
                {featured.caption}
              </h2>
              <p className="text-[15px] text-muted leading-relaxed mb-6">
                {featured.detail}
              </p>
              <div className="flex flex-col gap-3 text-[13px] text-charcoal">
                {[
                  "Concrete pad poured and leveled",
                  "Generac 22kW air-cooled unit installed",
                  "Automatic transfer switch wired in",
                  "Gas contractor coordinated for hookup",
                  "Startup, load test, and owner walkthrough",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <div className="w-1.5 h-1.5 bg-amber rounded-full shrink-0" aria-hidden="true" />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Category sections */}
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
                    ? "grid-cols-2 lg:grid-cols-4"
                    : "grid-cols-1 sm:grid-cols-3"
                }`}
              >
                {catProjects.map((project, i) => (
                  <figure
                    key={project.src}
                    className={`group relative rounded-sm overflow-hidden ${
                      catProjects.length >= 4 && i === 0
                        ? "col-span-2 aspect-[16/9]"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-deep/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <figcaption className="absolute bottom-0 left-0 right-0 p-4 translate-y-2 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
                      <p className="text-[13px] font-semibold text-white leading-snug mb-0.5">
                        {project.caption}
                      </p>
                      <p className="text-[11px] text-white/70 leading-relaxed">
                        {project.detail}
                      </p>
                    </figcaption>
                    <div className="absolute top-3 left-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className={`px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider rounded-sm ${categoryColors[cat]}`}>
                        {cat}
                      </span>
                    </div>
                  </figure>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <CTABanner
        headline="Need Help With a Project Like This?"
        subtext="Send us a few details and we'll get back to you with a clear quote."
        primaryLabel="Request Service"
        primaryHref="/contact"
        secondaryLabel="Call 541-817-6480"
        secondaryHref="tel:15418176480"
        variant="dark"
      />
    </>
  );
}
