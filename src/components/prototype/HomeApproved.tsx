"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRevealObserver } from "@/hooks/useReveal";
import { HOME_PROJECT_SLIDES } from "@/lib/projects-gallery";
import { INTRO_END_EVENT, introWasSeen, prefersReducedMotion } from "@/lib/home-intro";

const services = [
  {
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

  const projectStep = (delta: number) => {
    setProjectIndex(
      (projectIndex + delta + HOME_PROJECT_SLIDES.length) % HOME_PROJECT_SLIDES.length
    );
  };

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
              START A PROJECT <span>↗</span>
            </Link>
            <a className="proto-textlink" href="#expertise">
              EXPLORE OUR WORK <span className="arrow">→</span>
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

      <div className="proto-ticker">
        <span>GENERAC INSTALLATIONS</span>
        <span>◆</span>
        <span>SERVICE CHANGES</span>
        <span>◆</span>
        <span>PANEL UPGRADES</span>
        <span>◆</span>
        <span>DOUGLAS COUNTY, OREGON</span>
      </div>

      <section id="expertise">
        <div className="proto-section-intro proto-reveal">
          <div>
            <div className="proto-eyebrow proto-muted">01 / WHAT WE DO</div>
            <h2 className="proto-display">
              THE WORK
              <br />
              SPEAKS.
            </h2>
          </div>
          <p>
            From standby generators to complete electrical service upgrades, our work is
            focused on the details that matter. Explore the services below.
          </p>
        </div>

        <div className="proto-service-experience">
          <div className="proto-service-shell">
            <div className="proto-service-controls">
              {services.map((item, i) => (
                <button
                  key={item.link}
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
                  EXPLORE SERVICE <span className="arrow">→</span>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="proto-project" id="work">
        <div className="proto-project-image">
          <Image
            key={HOME_PROJECT_SLIDES[projectIndex].src}
            src={HOME_PROJECT_SLIDES[projectIndex].src}
            alt={HOME_PROJECT_SLIDES[projectIndex].alt}
            fill
            className="object-cover"
            sizes="100vw"
          />
        </div>
        <div className="proto-project-inner">
          <div>
            <div className="proto-eyebrow">
              02 / PROJECT VISUALS{" "}
              <span>
                {String(projectIndex + 1).padStart(2, "0")} —{" "}
                {String(HOME_PROJECT_SLIDES.length).padStart(2, "0")}
              </span>
            </div>
            <h2 className="proto-display">
              REAL WORK.
              <br />
              REAL DETAIL.
            </h2>
            <p>
              Field photography from Dialed In Electric installs across Douglas County.
              Generators, service upgrades, and panel work.
            </p>
            <Link className="proto-textlink" href="/projects">
              VIEW PROJECTS <span className="arrow">→</span>
            </Link>
          </div>
          <div className="proto-project-controls">
            <button
              type="button"
              className="proto-round"
              aria-label="Previous project"
              onClick={() => projectStep(-1)}
            >
              ←
            </button>
            <button
              type="button"
              className="proto-round"
              aria-label="Next project"
              onClick={() => projectStep(1)}
            >
              →
            </button>
          </div>
        </div>
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
            541 817 6480 ↗
          </a>
          <Link
            className="proto-btn"
            href="/contact"
            data-track="request_service_click"
            data-track-location="home_close"
          >
            REQUEST SERVICE <span>↗</span>
          </Link>
        </div>
      </section>
    </>
  );
}