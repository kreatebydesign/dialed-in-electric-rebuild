"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRevealObserver } from "@/hooks/useReveal";
import { useGallerySwipe } from "@/hooks/useGallerySwipe";
import { HOME_PROJECT_SLIDES } from "@/lib/projects-gallery";
import { INTRO_END_EVENT, introWasSeen, prefersReducedMotion } from "@/lib/home-intro";
import {
  IconArrowNE,
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
} from "@/components/ui/ProtoIcons";

const services = [
  {
    id: "standby-generators",
    img: "/images/gallery/generac-generator-install-02.jpg",
    title: (
      <>
        STANDBY
        <br />
        GENERATORS.
      </>
    ),
    desc: "Generac standby generator installation for homes and properties throughout the Roseburg area.",
    link: "/generators",
  },
  {
    id: "panel-upgrades",
    img: "/images/projects/panel-service-work.jpg",
    title: (
      <>
        PANEL
        <br />
        UPGRADES.
      </>
    ),
    desc: "Panel replacements and upgrades to support changing electrical needs.",
    link: "/panel-upgrades",
  },
  {
    id: "service-changes",
    img: "/images/gallery/residential-service-upgrade.jpg",
    title: (
      <>
        SERVICE
        <br />
        CHANGES.
      </>
    ),
    desc: "Electrical service changes, meter bases, and 200-amp service upgrades.",
    link: "/panel-upgrades",
  },
] as const;

const keelServices = [
  { label: "Generac Installation", href: "/generators" },
  { label: "Service Changes", href: "/panel-upgrades" },
  { label: "Panel Upgrades", href: "/panel-upgrades" },
] as const;

export default function HomeApproved() {
  const [activeService, setActiveService] = useState(0);
  const [swap, setSwap] = useState(false);
  const [projectIndex, setProjectIndex] = useState(0);
  const [heroArrive, setHeroArrive] = useState(false);

  useRevealObserver();

  useEffect(() => {
    const start = () => setHeroArrive(true);
    if (introWasSeen() || prefersReducedMotion()) start();
    window.addEventListener(INTRO_END_EVENT, start);
    return () => window.removeEventListener(INTRO_END_EVENT, start);
  }, []);

  const pickService = useCallback((index: number) => {
    if (index === activeService) return;
    setSwap(true);
    window.setTimeout(() => {
      setActiveService(index);
      setSwap(false);
    }, 200);
  }, [activeService]);

  const service = services[activeService];

  const projectStep = useCallback((delta: number) => {
    setProjectIndex(
      (i) => (i + delta + HOME_PROJECT_SLIDES.length) % HOME_PROJECT_SLIDES.length
    );
  }, []);

  const projectSwipe = useGallerySwipe((d) => projectStep(d));

  useEffect(() => {
    function onKey(e: KeyboardEvent) {
      const tag = (e.target as HTMLElement)?.tagName;
      if (tag === "INPUT" || tag === "TEXTAREA" || tag === "SELECT") return;
      if (e.key === "ArrowRight") projectStep(1);
      if (e.key === "ArrowLeft") projectStep(-1);
    }
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [projectStep]);

  return (
    <>
      <section className="proto-hero" id="top">
        <div className={`proto-hero-image${heroArrive ? " proto-hero-image--arrive" : ""}`}>
          <Image
            src="/images/gallery/generator-install-side-yard.jpg"
            alt=""
            fill
            className="object-cover object-[center_44%]"
            sizes="100vw"
            priority
          />
        </div>
        <div className="proto-hero-content">
          <div className="proto-eyebrow">DIALED IN ELECTRIC / ROSEBURG, OR</div>
          <h1 className="proto-display">
            <span className="sr-only">
              Generac installer and electrical service upgrades in Roseburg, Oregon
            </span>
            <span aria-hidden="true">ELECTRICAL.</span>
            <span aria-hidden="true">DIALED IN.</span>
          </h1>
          <p>
            Generac standby generator installations, electrical service changes, and
            panel upgrades across Douglas County.
          </p>
          <div className="proto-hero-actions">
            <Link
              className="proto-btn"
              href="/contact"
              data-track="request_service_click"
              data-track-location="home_hero"
            >
              START A PROJECT
              <IconArrowNE className="proto-icon proto-icon--ne" />
            </Link>
            <a className="proto-textlink" href="#expertise">
              EXPLORE OUR WORK
              <IconArrowRight className="proto-icon proto-icon--cta" />
            </a>
          </div>
        </div>
        <div className="proto-side-note">
          GENERATORS
          <br />
          SERVICE CHANGES
          <br />
          PANEL UPGRADES
        </div>
        <div className="proto-hero-index">SCROLL TO EXPLORE — 01 / 04</div>
      </section>

      <section className="proto-keel" aria-label="Primary services">
        <div className="proto-keel__inner">
          <ul className="proto-keel__services">
            {keelServices.map((item) => (
              <li key={item.label}>
                <Link href={item.href} className="proto-keel__link">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <p className="proto-keel__region">Douglas County, Oregon</p>
        </div>
      </section>

      <section id="expertise">
        <div className="proto-section-intro proto-reveal">
          <div>
            <div className="proto-eyebrow proto-muted">01 / WHAT WE DO</div>
            <h2 className="proto-display">
              ELECTRICAL
              <br />
              SERVICES.
            </h2>
          </div>
          <p>
            Generac standby generators, panel replacements, meter and service upgrades, and
            related electrical work for homes and businesses in Roseburg and Douglas County.
          </p>
        </div>

        <div className="proto-service-experience">
          <div className="proto-service-shell">
            <div className="proto-service-controls">
              {services.map((item, i) => (
                <button
                  key={item.id}
                  type="button"
                  className={`proto-service-option${activeService === i ? " active" : ""}`}
                  onClick={() => pickService(i)}
                >
                  <small>{String(i + 1).padStart(2, "0")}</small>
                  <b>
                    {i === 0 && "Standby generators"}
                    {i === 1 && "Panel upgrades"}
                    {i === 2 && "Service changes"}
                  </b>
                </button>
              ))}
            </div>
            <div className="proto-service-view">
              <Image
                key={service.img}
                src={service.img}
                alt=""
                fill
                className={`object-cover ${swap ? "swap" : ""}`}
                sizes="66vw"
              />
              <div className="proto-service-overlay">
                <div className="proto-eyebrow">
                  SELECTED CAPABILITY / {String(activeService + 1).padStart(2, "0")}
                </div>
                <h3 className="proto-display">{service.title}</h3>
                <p>{service.desc}</p>
                <Link className="proto-textlink mt-4" href={service.link}>
                  EXPLORE SERVICE
                  <IconArrowRight className="proto-icon proto-icon--cta" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        className="proto-home-gallery"
        id="work"
        aria-roledescription="carousel"
        aria-label="Project photography"
        onTouchStart={projectSwipe.onTouchStart}
        onTouchEnd={projectSwipe.onTouchEnd}
      >
        <header className="proto-home-gallery__header proto-reveal">
          <div className="proto-eyebrow proto-muted">
            02 / PROJECT PHOTOGRAPHY{" "}
            <span className="proto-home-gallery__count">
              {String(projectIndex + 1).padStart(2, "0")} —{" "}
              {String(HOME_PROJECT_SLIDES.length).padStart(2, "0")}
            </span>
          </div>
          <h2 className="proto-home-gallery__title">Project photography</h2>
          <p className="proto-home-gallery__lead">
            Electrical installations and completed work from around Douglas County.
          </p>
        </header>

        <div className="proto-home-gallery__stage">
          <div
            className="proto-home-gallery__frame"
            data-reduce-motion={prefersReducedMotion() ? "true" : undefined}
          >
            <Image
              key={HOME_PROJECT_SLIDES[projectIndex].src}
              src={HOME_PROJECT_SLIDES[projectIndex].src}
              alt={HOME_PROJECT_SLIDES[projectIndex].alt}
              fill
              className="object-cover proto-home-gallery__photo"
              sizes="(max-width: 768px) 100vw, min(94vw, 1280px)"
              priority={projectIndex === 0}
            />
            <button
              type="button"
              className="proto-home-gallery__nav proto-home-gallery__nav--prev"
              aria-label="Previous project photograph"
              onClick={() => projectStep(-1)}
            >
              <IconChevronLeft className="proto-icon" size={22} />
            </button>
            <button
              type="button"
              className="proto-home-gallery__nav proto-home-gallery__nav--next"
              aria-label="Next project photograph"
              onClick={() => projectStep(1)}
            >
              <IconChevronRight className="proto-icon" size={22} />
            </button>
          </div>
        </div>

        <footer className="proto-home-gallery__footer">
          <div
            className="proto-project-dots"
            role="tablist"
            aria-label="Select project photograph"
          >
            {HOME_PROJECT_SLIDES.map((slide, i) => (
              <button
                key={slide.src}
                type="button"
                role="tab"
                aria-selected={i === projectIndex}
                aria-label={`Slide ${i + 1}: ${slide.alt}`}
                className={i === projectIndex ? "is-active" : undefined}
                onClick={() => setProjectIndex(i)}
              />
            ))}
          </div>
          <Link className="proto-textlink" href="/projects">
            VIEW PROJECTS
            <IconArrowRight className="proto-icon proto-icon--cta" />
          </Link>
        </footer>
      </section>

      <section className="proto-closing" id="contact">
        <div>
          <div className="proto-eyebrow proto-muted">03 / LET&apos;S GET TO WORK</div>
          <h2 className="proto-display">
            HAVE A
            <br />
            PROJECT?
          </h2>
        </div>
        <div className="proto-closing-right">
          <p>
            Planning a generator installation or electrical upgrade? Get in touch with Dialed
            In Electric in Roseburg.
          </p>
          <a
            className="proto-phone-big"
            href="tel:15418176480"
            data-track="phone_click"
            data-track-location="home_close"
          >
            <span className="proto-phone-big__label">
              541 817 6480
              <IconArrowNE className="proto-icon proto-icon--ne proto-icon--phone" size={14} />
            </span>
          </a>
          <Link
            className="proto-btn"
            href="/contact"
            data-track="request_service_click"
            data-track-location="home_close"
          >
            REQUEST SERVICE
            <IconArrowNE className="proto-icon proto-icon--ne" />
          </Link>
        </div>
      </section>
    </>
  );
}