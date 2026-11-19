"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Generators", href: "/generators" },
  { label: "Panel Upgrades", href: "/panel-upgrades" },
  { label: "Services", href: "/electrical-services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-[background,border-color,box-shadow] duration-300 ${
        scrolled
          ? "bg-obsidian/92 backdrop-blur-md border-b border-edge shadow-[0_1px_0_rgba(255,255,255,0.04)]"
          : "bg-obsidian/75 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[72px]">
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Dialed In Electric — Home"
          >
            <Image
              src="/brand/dialed-in-logo-white.png"
              alt="Dialed In Electric"
              width={120}
              height={120}
              className="w-auto h-11 sm:h-12 opacity-95 group-hover:opacity-100 transition-opacity"
              priority
            />
            <span className="hidden md:block font-display font-semibold text-white text-[14px] tracking-tight leading-snug">
              Dialed In Electric
              <span className="block text-[10px] font-medium text-white/45 tracking-[0.14em] uppercase mt-0.5">
                Roseburg · Douglas County
              </span>
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-0.5" aria-label="Main navigation">
            {navLinks.map((link) => {
              const active =
                pathname === link.href ||
                (link.href !== "/" && pathname.startsWith(link.href));
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`relative px-3.5 py-2 text-[13px] font-medium tracking-wide transition-colors rounded-sm ${
                    active
                      ? "text-white"
                      : "text-white/55 hover:text-white/90"
                  }`}
                >
                  {link.label}
                  {active && (
                    <span className="absolute bottom-0.5 left-3.5 right-3.5 h-px bg-white/70" />
                  )}
                </Link>
              );
            })}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href="tel:15418176480"
              data-track="phone_click"
              data-track-location="header_desktop"
              className="text-[13px] font-semibold text-white/80 hover:text-white transition-colors tabular-nums"
            >
              541-817-6480
            </a>
            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="md"
              data-track="request_service_click"
              data-track-location="header_desktop"
            >
              Request Service
            </Button>
          </div>

          <div className="flex lg:hidden items-center gap-2">
            <a
              href="tel:15418176480"
              data-track="phone_click"
              data-track-location="header_mobile"
              className="text-[12px] font-semibold text-white tabular-nums"
              aria-label="Call 541-817-6480"
            >
              Call
            </a>
            <button
              type="button"
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2.5 text-white rounded-sm border border-edge hover:bg-white/5 transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 7h16M4 12h16M4 17h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {menuOpen && (
        <div className="lg:hidden border-t border-edge bg-obsidian/98 backdrop-blur-md">
          <nav
            className="max-w-7xl mx-auto px-4 py-4 flex flex-col gap-1"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-3.5 text-sm font-medium rounded-sm border border-transparent ${
                  pathname === link.href
                    ? "text-white bg-white/5 border-edge"
                    : "text-white/75"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/service-areas"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3.5 text-sm font-medium text-white/75"
            >
              Service Areas
            </Link>
            <Link
              href="/contact"
              onClick={() => setMenuOpen(false)}
              className="px-3 py-3.5 text-sm font-medium text-white/75"
            >
              Contact
            </Link>
            <Button
              as="link"
              href="/contact"
              variant="primary"
              size="md"
              className="mt-2 w-full justify-center"
              data-track="request_service_click"
              data-track-location="header_mobile_menu"
            >
              Request Service
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}