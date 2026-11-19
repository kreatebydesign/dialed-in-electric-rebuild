"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

const links = [
  { label: "Expertise", href: "/electrical-services" },
  { label: "Our work", href: "/projects" },
  { label: "Contact", href: "/contact" },
];

export default function PrototypeNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  return (
    <header className="proto-nav">
      <Link href="/" className="proto-brand" onClick={() => setOpen(false)}>
        <Image
          src="/brand/dialed-in-original.png"
          alt=""
          width={52}
          height={52}
          priority
        />
        <span>
          DIALED IN
          <br />
          ELECTRIC
        </span>
      </Link>

      <nav
        className={`proto-navlinks${open ? " open" : ""}`}
        aria-label="Main navigation"
      >
        {links.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            onClick={() => setOpen(false)}
            aria-current={pathname === link.href ? "page" : undefined}
            {...(link.href === "/contact"
              ? {
                  "data-track": "request_service_click",
                  "data-track-location": "header_nav",
                }
              : {})}
          >
            {link.label}
          </Link>
        ))}
        <Link href="/generators" onClick={() => setOpen(false)}>
          Generators
        </Link>
        <Link href="/panel-upgrades" onClick={() => setOpen(false)}>
          Panel upgrades
        </Link>
        <Link href="/service-areas" onClick={() => setOpen(false)}>
          Service areas
        </Link>
      </nav>

      <a
        className="proto-navphone"
        href="tel:15418176480"
        data-track="phone_click"
        data-track-location="header_desktop"
      >
        541 817 6480 ↗
      </a>

      <button
        type="button"
        className="proto-menu"
        aria-label="Toggle navigation"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
      >
        ☰
      </button>
    </header>
  );
}