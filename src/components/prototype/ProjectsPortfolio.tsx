"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { PORTFOLIO_PHOTOS, getFeaturedPhoto, type PortfolioPhoto } from "@/lib/projects-portfolio";
import {
  IconArrowNE,
  IconArrowRight,
  IconChevronLeft,
  IconChevronRight,
  IconClose,
} from "@/components/ui/ProtoIcons";
import { useRevealObserver } from "@/hooks/useReveal";

export default function ProjectsPortfolio() {
  const featured = getFeaturedPhoto();
  const [index, setIndex] = useState(0);
  const [fullscreen, setFullscreen] = useState(false);
  const touchStartX = useRef<number | null>(null);
  useRevealObserver();

  const photo = PORTFOLIO_PHOTOS[index];

  function step(delta: number) {
    setIndex((i) => (i + delta + PORTFOLIO_PHOTOS.length) % PORTFOLIO_PHOTOS.length);
  }

  function openFullscreen() {
    setFullscreen(true);
  }

  function closeFullscreen() {
    setFullscreen(false);
  }

  useEffect(() => {
    if (!fullscreen) return;
    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setFullscreen(false);
      if (e.key === "ArrowRight") {
        setIndex((i) => (i + 1 + PORTFOLIO_PHOTOS.length) % PORTFOLIO_PHOTOS.length);
      }
      if (e.key === "ArrowLeft") {
        setIndex((i) => (i - 1 + PORTFOLIO_PHOTOS.length) % PORTFOLIO_PHOTOS.length);
      }
    }
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [fullscreen]);

  function onTouchStart(e: React.TouchEvent) {
    touchStartX.current = e.changedTouches[0]?.clientX ?? null;
  }

  function onTouchEnd(e: React.TouchEvent, onSwipe: (d: number) => void) {
    const start = touchStartX.current;
    const end = e.changedTouches[0]?.clientX;
    if (start === null || end === undefined) return;
    const delta = end - start;
    if (Math.abs(delta) < 48) return;
    onSwipe(delta < 0 ? 1 : -1);
    touchStartX.current = null;
  }

  return (
    <>
      <header className="proto-portfolio-intro proto-reveal">
        <div className="proto-eyebrow proto-muted">OUR WORK</div>
        <h1 className="proto-display">
          REAL WORK.
          <br />
          REAL DETAIL.
        </h1>
        <p>
          Field photography from completed electrical work in Douglas County. Generators, service
          upgrades, panels, and commercial installs.
        </p>
      </header>

      <section className="proto-portfolio-featured proto-reveal" aria-labelledby="featured-heading">
        <h2 id="featured-heading" className="proto-eyebrow proto-muted">
          FEATURED / {featured.category.toUpperCase()}
        </h2>
        <PortfolioFigure photo={featured} priority onOpen={openFullscreen} />
      </section>

      <section
        className="proto-portfolio-browser proto-reveal"
        aria-labelledby="browser-heading"
        onTouchStart={onTouchStart}
        onTouchEnd={(e) => onTouchEnd(e, step)}
      >
        <div className="proto-portfolio-browser-head">
          <div>
            <h2 id="browser-heading" className="proto-eyebrow proto-muted">
              PROJECT BROWSER /{" "}
              <span className="proto-portfolio-counter">
                {String(index + 1).padStart(2, "0")} — {String(PORTFOLIO_PHOTOS.length).padStart(2, "0")}
              </span>
            </h2>
            <p className="proto-portfolio-category">{photo.category}</p>
            <p className="proto-portfolio-caption">{photo.caption}</p>
            {photo.serviceHref && (
              <Link className="proto-textlink mt-4 inline-flex" href={photo.serviceHref}>
                RELATED SERVICE
                <IconArrowRight className="proto-icon proto-icon--cta" />
              </Link>
            )}
          </div>
          <div className="proto-project-controls" aria-label="Project navigation">
            <button
              type="button"
              className="proto-round"
              aria-label="Previous photograph"
              onClick={() => step(-1)}
            >
              <IconChevronLeft className="proto-icon" size={20} />
            </button>
            <button
              type="button"
              className="proto-round"
              aria-label="Next photograph"
              onClick={() => step(1)}
            >
              <IconChevronRight className="proto-icon" size={20} />
            </button>
          </div>
        </div>

        <button
          type="button"
          className="proto-portfolio-stage"
          onClick={openFullscreen}
          aria-label={`View fullscreen: ${photo.caption}`}
        >
          <PortfolioImage photo={photo} sizes="(max-width: 900px) 100vw, min(92vw, 1400px)" />
          <span className="proto-portfolio-expand">
            VIEW FULLSCREEN
            <IconArrowNE className="proto-icon proto-icon--ne" size={11} />
          </span>
        </button>

        <nav className="proto-portfolio-index" aria-label="Photograph list">
          <ul>
            {PORTFOLIO_PHOTOS.map((item, i) => (
              <li key={item.id}>
                <button
                  type="button"
                  className={i === index ? "is-active" : undefined}
                  aria-current={i === index ? "true" : undefined}
                  onClick={() => setIndex(i)}
                >
                  <span className="proto-portfolio-index-num">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="proto-portfolio-index-label">{item.category}</span>
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {fullscreen && (
        <div
          className="proto-portfolio-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={photo.caption}
          onTouchStart={onTouchStart}
          onTouchEnd={(e) => onTouchEnd(e, step)}
        >
          <div className="proto-portfolio-lightbox-bar">
            <span className="proto-portfolio-counter">
              {String(index + 1).padStart(2, "0")} / {String(PORTFOLIO_PHOTOS.length).padStart(2, "0")}
            </span>
            <span className="proto-portfolio-caption">{photo.caption}</span>
            <button
              type="button"
              className="proto-textlink border-0 bg-transparent cursor-pointer"
              onClick={closeFullscreen}
            >
              CLOSE
              <IconClose className="proto-icon" size={14} />
            </button>
          </div>
          <div className="proto-portfolio-lightbox-stage">
            <button
              type="button"
              className="proto-gallery-nav proto-gallery-nav--prev"
              onClick={() => step(-1)}
              aria-label="Previous photograph"
            >
              <IconChevronLeft className="proto-icon" size={22} />
            </button>
            <PortfolioImage photo={photo} sizes="100vw" priority />
            <button
              type="button"
              className="proto-gallery-nav proto-gallery-nav--next"
              onClick={() => step(1)}
              aria-label="Next photograph"
            >
              <IconChevronRight className="proto-icon" size={22} />
            </button>
          </div>
        </div>
      )}
    </>
  );
}

function PortfolioFigure({
  photo,
  priority,
  onOpen,
}: {
  photo: PortfolioPhoto;
  priority?: boolean;
  onOpen?: () => void;
}) {
  return (
    <figure className="proto-portfolio-figure">
      <button
        type="button"
        className="proto-portfolio-stage proto-portfolio-stage--featured"
        onClick={onOpen}
        aria-label={`View fullscreen: ${photo.caption}`}
      >
        <PortfolioImage photo={photo} priority={priority} sizes="(max-width: 900px) 100vw, 92vw" />
      </button>
      <figcaption>
        <p className="proto-portfolio-caption">{photo.caption}</p>
      </figcaption>
    </figure>
  );
}

function PortfolioImage({
  photo,
  priority,
  sizes,
}: {
  photo: PortfolioPhoto;
  priority?: boolean;
  sizes: string;
}) {
  return (
    <Image
      src={photo.src}
      alt={photo.alt}
      width={photo.width}
      height={photo.height}
      className="proto-portfolio-photo"
      sizes={sizes}
      priority={priority}
    />
  );
}
