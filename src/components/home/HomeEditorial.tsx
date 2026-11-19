"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import EnergyRule from "@/components/ui/EnergyRule";
import Button from "@/components/ui/Button";
import { INTRO_END_EVENT, introWasSeen, prefersReducedMotion } from "@/lib/home-intro";

const serviceIndex = [
  {
    n: "01",
    title: "Generac standby generators",
    line: "Whole-home backup with automatic transfer equipment.",
    href: "/generators",
  },
  {
    n: "02",
    title: "Panel & service upgrades",
    line: "200-amp upgrades, meter bases, and main panel replacements.",
    href: "/panel-upgrades",
  },
  {
    n: "03",
    title: "Backup power",
    line: "Manual transfer switches and portable generator tie-ins.",
    href: "/backup-power",
  },
  {
    n: "04",
    title: "New construction wiring",
    line: "Rough-in through trim-out with labeled, inspector-ready panels.",
    href: "/new-home-wiring",
  },
  {
    n: "05",
    title: "Commercial electrical",
    line: "Tenant improvements, machine circuits, and shop lighting.",
    href: "/commercial",
  },
  {
    n: "06",
    title: "EV charging",
    line: "Level 2 circuits sized to your existing service.",
    href: "/ev-charger",
  },
] as const;

const workGallery = [
  {
    src: "/images/gallery/generac-generator-install-01.jpg",
    alt: "Generac standby generator and transfer switch installed in Roseburg",
    span: "lead",
    label: "Generator install",
  },
  {
    src: "/images/gallery/residential-service-upgrade.jpg",
    alt: "Residential electrical service upgrade in Douglas County",
    span: "tall",
    label: "Service upgrade",
  },
  {
    src: "/images/projects/service-upgrade-conduit.jpg",
    alt: "Service entrance conduit work by Dialed In Electric",
    span: "wide",
    label: "Service entrance",
  },
  {
    src: "/images/gallery/electrical-panel-interior.jpg",
    alt: "Labeled electrical panel after upgrade",
    span: "square",
    label: "Panel work",
  },
] as const;

function ArrowLink({
  href,
  children,
  className = "",
  track,
  trackLocation,
}: {
  href: string;
  children: React.ReactNode;
  className?: string;
  track?: string;
  trackLocation?: string;
}) {
  return (
    <Link
      href={href}
      className={`group inline-flex items-center gap-3 text-[13px] font-medium tracking-wide text-white/70 hover:text-white transition-colors ${className}`}
      {...(track
        ? { "data-track": track, "data-track-location": trackLocation }
        : {})}
    >
      <span className="h-px w-8 bg-white/30 group-hover:w-10 group-hover:bg-white/60 transition-all" />
      {children}
    </Link>
  );
}

export default function HomeEditorial() {
  const [reveal, setReveal] = useState(() => {
    if (typeof window === "undefined") return true;
    return introWasSeen() || prefersReducedMotion();
  });

  useEffect(() => {
    function onIntroEnd() {
      setReveal(true);
    }
    window.addEventListener(INTRO_END_EVENT, onIntroEnd);

  const raf = requestAnimationFrame(() => {
      if (
        introWasSeen() ||
        prefersReducedMotion() ||
        !document.documentElement.hasAttribute("data-intro-active")
      ) {
        onIntroEnd();
      }
    });

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener(INTRO_END_EVENT, onIntroEnd);
    };
  }, []);

  return (
    <article className={reveal ? "home-revealed" : "home-awaiting-reveal"}>
      {/* ——— HERO ——— */}
      <section className="relative min-h-[100dvh] flex flex-col lg:block overflow-hidden">
        <div className="lg:absolute lg:inset-0 lg:grid lg:grid-cols-12">
          <div className="relative z-10 flex flex-col justify-end lg:justify-center px-5 sm:px-8 lg:px-10 lg:col-span-5 xl:col-span-4 py-10 lg:py-0 min-h-[46vh] lg:min-h-0 order-2 lg:order-none bg-obsidian lg:bg-transparent">
            <p className="home-reveal-item text-[10px] sm:text-[11px] font-medium tracking-[0.22em] uppercase text-white/42 mb-5 lg:mb-8">
              Roseburg · Douglas County · CCB# 228668
            </p>
            <h1 className="home-reveal-item font-display text-[clamp(2.1rem,6.5vw,3.85rem)] font-semibold leading-[1.02] tracking-[-0.02em] text-white text-balance max-w-[14ch] sm:max-w-none">
              Generac installs and electrical service upgrades
            </h1>
            <p className="home-reveal-item mt-6 text-[15px] lg:text-[16px] leading-relaxed text-white/52 max-w-md">
              Licensed contractor since 2019. Standby generators, panel replacements,
              and meter service work with permits and inspections handled in-house.
            </p>
            <div className="home-reveal-item mt-8 lg:mt-10 flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
              <a
                href="tel:15418176480"
                data-track="phone_click"
                data-track-location="home_hero"
                className="text-lg lg:text-xl font-display font-semibold tracking-tight text-white tabular-nums hover:text-white/80 transition-colors"
              >
                541-817-6480
              </a>
              <ArrowLink
                href="/contact"
                track="request_service_click"
                trackLocation="home_hero"
              >
                Request service
              </ArrowLink>
            </div>
          </div>

          <div className="relative h-[54vh] sm:h-[58vh] lg:h-auto lg:col-span-7 xl:col-span-8 order-1 lg:order-none home-reveal-media">
            <Image
              src="/images/gallery/generac-generator-install-01.jpg"
              alt="Generac standby generator installation in Roseburg, Oregon"
              fill
              className="object-cover object-[62%_45%] lg:object-center"
              sizes="(max-width: 1024px) 100vw, 66vw"
              priority
            />
            <div
              className="absolute inset-0 bg-gradient-to-b from-obsidian/20 via-transparent to-obsidian lg:bg-gradient-to-r lg:from-obsidian lg:via-obsidian/40 lg:to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
      </section>

      <EnergyRule variant="pulse" className="home-energy-intro" />

      {/* ——— GENERAC ——— */}
      <section className="relative bg-obsidian">
        <div className="max-w-[1600px] mx-auto">
          <div className="grid lg:grid-cols-12 gap-0">
            <div className="lg:col-span-7 relative min-h-[52vh] lg:min-h-[88vh]">
              <Image
                src="/images/gallery/generator-install-side-yard.jpg"
                alt="Residential Generac generator install at a Roseburg property"
                fill
                className="object-cover object-center home-parallax-slow"
                sizes="(max-width: 1024px) 100vw, 58vw"
              />
              <div className="absolute inset-0 bg-obsidian/25 lg:bg-transparent" aria-hidden="true" />
            </div>
            <div className="lg:col-span-5 flex flex-col justify-center px-5 sm:px-8 lg:pl-6 lg:pr-12 xl:pr-20 py-14 lg:py-24">
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/35 mb-6">
                01
              </span>
              <h2 className="font-display text-[clamp(1.85rem,4vw,2.65rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-white text-balance">
                Generac standby generator installation
              </h2>
              <p className="mt-6 text-[15px] leading-[1.7] text-white/52 max-w-lg">
                Automatic backup for Douglas County outages. We place the unit, install
                the transfer switch, wire the panel, coordinate gas, and run startup with
                you on site.
              </p>
              <ul className="mt-8 space-y-3 text-[14px] text-white/68 leading-relaxed max-w-lg">
                <li>Whole-home or essential-load configurations</li>
                <li>Natural gas and propane setups</li>
                <li>Permits, utility coordination, and inspection</li>
              </ul>
              <div className="mt-10 flex flex-wrap gap-x-8 gap-y-4">
                <ArrowLink href="/generators">Generator services</ArrowLink>
                <ArrowLink
                  href="/contact"
                  track="request_service_click"
                  trackLocation="home_generac"
                >
                  Generator inquiry
                </ArrowLink>
              </div>
            </div>
          </div>
        </div>
      </section>

      <EnergyRule className="opacity-60" />

      {/* ——— SERVICE UPGRADES ——— */}
      <section className="relative overflow-hidden bg-graphite">
        <div className="max-w-[1600px] mx-auto lg:grid lg:grid-cols-12">
          <div className="lg:col-span-5 flex flex-col justify-center px-5 sm:px-8 lg:px-12 xl:pl-16 py-14 lg:py-28 order-2 lg:order-1">
            <span className="font-mono text-[11px] tracking-[0.2em] text-white/35 mb-6">
              02
            </span>
            <h2 className="font-display text-[clamp(1.85rem,4vw,2.65rem)] font-semibold leading-[1.06] tracking-[-0.02em] text-white text-balance">
              Electrical service changes and panel work
            </h2>
            <p className="mt-6 text-[15px] leading-[1.7] text-white/52 max-w-lg">
              Upgrading outdated panels, meter bases, and service entrances for
              Roseburg homes. Load review first, then equipment sized for how you
              actually use power.
            </p>
            <ul className="mt-8 space-y-3 text-[14px] text-white/68 leading-relaxed max-w-lg">
              <li>200-amp service upgrades where applicable</li>
              <li>Main panel and meter-main replacements</li>
              <li>Labeled circuits for inspection and maintenance</li>
            </ul>
            <div className="mt-10">
              <ArrowLink href="/panel-upgrades">Panel & service upgrades</ArrowLink>
            </div>
          </div>
          <div className="lg:col-span-7 relative min-h-[48vh] lg:min-h-[85vh] order-1 lg:order-2 lg:-mr-[8vw]">
            <Image
              src="/images/projects/panel-service-work.jpg"
              alt="Electrical panel and service equipment upgrade"
              fill
              className="object-cover object-[40%_30%]"
              sizes="(max-width: 1024px) 100vw, 55vw"
            />
            <div
              className="hidden lg:block absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-graphite to-transparent"
              aria-hidden="true"
            />
          </div>
        </div>
        <div className="lg:absolute lg:right-12 lg:bottom-16 hidden lg:block w-[min(28vw,320px)] aspect-[3/4]">
          <Image
            src="/images/gallery/electrical-panel-interior.jpg"
            alt="Interior of upgraded electrical panel with labeled breakers"
            fill
            className="object-cover"
            sizes="320px"
          />
        </div>
      </section>

      {/* ——— WORK ——— */}
      <section className="py-16 lg:py-28 bg-obsidian">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6 mb-10 lg:mb-14">
            <div>
              <span className="font-mono text-[11px] tracking-[0.2em] text-white/35 block mb-4">
                03
              </span>
              <h2 className="font-display text-[clamp(1.75rem,3.5vw,2.35rem)] font-semibold tracking-[-0.02em] text-white">
                Selected installations
              </h2>
            </div>
            <Link
              href="/projects"
              className="text-[13px] text-white/50 hover:text-white transition-colors"
            >
              Full project archive →
            </Link>
          </div>

          <div className="work-mosaic">
            {workGallery.map((item) => (
              <figure
                key={item.src}
                className={`work-mosaic__item work-mosaic__item--${item.span} group relative overflow-hidden`}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.03]"
                  sizes={
                    item.span === "lead"
                      ? "(max-width: 1024px) 100vw, 50vw"
                      : "(max-width: 1024px) 50vw, 25vw"
                  }
                />
                <figcaption className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-obsidian/90 to-transparent">
                  <span className="text-[10px] font-medium tracking-[0.16em] uppercase text-white/70">
                    {item.label}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <EnergyRule className="opacity-50" />

      {/* ——— SERVICE INDEX ——— */}
      <section className="py-16 lg:py-24 bg-graphite">
        <div className="max-w-[900px] mx-auto px-5 sm:px-8 lg:px-12">
          <span className="font-mono text-[11px] tracking-[0.2em] text-white/35 block mb-4">
            Capabilities
          </span>
          <h2 className="font-display text-[clamp(1.5rem,3vw,2rem)] font-semibold tracking-[-0.02em] text-white mb-12">
            What we install and upgrade
          </h2>
          <ul className="divide-y divide-white/10">
            {serviceIndex.map((row) => (
              <li key={row.href}>
                <Link
                  href={row.href}
                  className="group flex gap-6 sm:gap-10 py-6 sm:py-7 items-baseline hover:bg-white/[0.02] -mx-4 px-4 transition-colors"
                >
                  <span className="font-mono text-[11px] text-white/30 shrink-0 w-6">
                    {row.n}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="font-display text-[17px] sm:text-[19px] font-medium text-white group-hover:text-white transition-colors">
                      {row.title}
                    </p>
                    <p className="mt-1 text-[13px] text-white/42 leading-relaxed">
                      {row.line}
                    </p>
                  </div>
                  <span
                    className="hidden sm:block text-white/25 group-hover:text-white/60 group-hover:translate-x-1 transition-all"
                    aria-hidden="true"
                  >
                    →
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="mt-10 text-[13px] text-white/40">
            Also serving{" "}
            <Link href="/service-areas/roseburg" className="text-white/65 hover:text-white">
              Roseburg
            </Link>
            ,{" "}
            <Link href="/service-areas/sutherlin" className="text-white/65 hover:text-white">
              Sutherlin
            </Link>
            ,{" "}
            <Link href="/service-areas/winston" className="text-white/65 hover:text-white">
              Winston
            </Link>
            , and{" "}
            <Link href="/service-areas" className="text-white/65 hover:text-white">
              surrounding Douglas County
            </Link>
            .
          </p>
        </div>
      </section>

      {/* ——— CLOSE ——— */}
      <section className="py-20 lg:py-32 bg-obsidian grain border-t border-white/8">
        <div className="max-w-[1600px] mx-auto px-5 sm:px-8 lg:px-12 text-center lg:text-left lg:flex lg:items-end lg:justify-between gap-12">
          <div>
            <h2 className="font-display text-[clamp(1.75rem,4vw,2.75rem)] font-semibold tracking-[-0.02em] text-white text-balance max-w-xl">
              Discuss a generator or service upgrade
            </h2>
            <p className="mt-4 text-[15px] text-white/48 max-w-md mx-auto lg:mx-0">
              Call or send a request with your address and what you need upgraded. We
              will follow up with practical next steps.
            </p>
          </div>
          <div className="mt-10 lg:mt-0 flex flex-col items-center lg:items-end gap-4">
            <a
              href="tel:15418176480"
              data-track="phone_click"
              data-track-location="home_close"
              className="font-display text-2xl sm:text-3xl font-semibold text-white tabular-nums hover:text-white/80 transition-colors"
            >
              541-817-6480
            </a>
            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="lg"
              data-track="request_service_click"
              data-track-location="home_close"
            >
              Request service
            </Button>
          </div>
        </div>
      </section>
    </article>
  );
}