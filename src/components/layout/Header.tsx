"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "@/components/ui/Button";

const navLinks = [
  { label: "Generators", href: "/generators" },
  { label: "Services", href: "/electrical-services" },
  { label: "Projects", href: "/projects" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "About", href: "/about" },
];

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-edge shadow-[0_1px_4px_rgba(0,0,0,0.06)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-[68px]">

          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 shrink-0 group"
            aria-label="Dialed In Electric — Home"
          >
            <Image
              src="/images/logo/dialed-in-electric-logo.png"
              alt="Dialed In Electric logo"
              width={44}
              height={43}
              className="w-auto h-10 group-hover:opacity-85 transition-opacity"
              priority
            />
            <span className="hidden sm:block font-bold text-charcoal text-[15px] tracking-tight leading-snug">
              Dialed In Electric
              <span className="block text-[11px] font-medium text-muted tracking-wider uppercase">
                Roseburg, Oregon
              </span>
            </span>
          </Link>

          {/* Desktop nav */}
          <nav className="hidden lg:flex items-center" aria-label="Main navigation">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-4 py-2.5 text-[13px] font-medium tracking-wide transition-colors ${
                  pathname === link.href
                    ? "text-amber"
                    : "text-charcoal/70 hover:text-charcoal"
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-4 right-4 h-0.5 bg-amber rounded-full" />
                )}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href="tel:15418176480"
              className="text-[13px] font-semibold text-charcoal hover:text-amber transition-colors tracking-wide"
            >
              541-817-6480
            </a>
            <Button as="link" href="/contact" variant="primary" size="md">
              Request Service
            </Button>
          </div>

          {/* Mobile */}
          <div className="flex lg:hidden items-center gap-3">
            <a
              href="tel:15418176480"
              className="text-[13px] font-bold text-amber"
              aria-label="Call Dialed In Electric"
            >
              541-817-6480
            </a>
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="p-2 text-charcoal rounded hover:bg-surface transition-colors"
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              {menuOpen ? (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-edge bg-white">
          <nav
            className="max-w-7xl mx-auto px-4 py-3 flex flex-col"
            aria-label="Mobile navigation"
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className={`px-3 py-3.5 text-sm font-medium border-b border-edge last:border-0 ${
                  pathname === link.href ? "text-amber" : "text-charcoal"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Button
              as="link"
              href="/contact"
              onClick={() => setMenuOpen(false)}
              variant="primary"
              size="md"
              className="mt-3 w-full justify-center"
            >
              Request Service
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
