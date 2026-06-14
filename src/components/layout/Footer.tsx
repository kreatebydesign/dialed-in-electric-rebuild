import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const serviceLinks = [
  { label: "Generac Generators", href: "/generators" },
  { label: "Backup Power", href: "/backup-power" },
  { label: "Panel Upgrades", href: "/panel-upgrades" },
  { label: "New Home Wiring", href: "/new-home-wiring" },
  { label: "Commercial Wiring", href: "/commercial" },
  { label: "EV Charger Install", href: "/ev-charger" },
];

const companyLinks = [
  { label: "About", href: "/about" },
  { label: "Projects", href: "/projects" },
  { label: "Service Areas", href: "/service-areas" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
  { label: "Careers", href: "/careers" },
];

function BoltIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5" aria-hidden="true">
      <path d="M11.5 2L4 11.5h5.5L8 18l8-9h-5.5L11.5 2z" />
    </svg>
  );
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-charcoal text-white">
      {/* Main footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">

          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2.5 mb-5" aria-label="Dialed In Electric — Home">
              <span className="flex items-center justify-center w-10 h-10 bg-white rounded-lg shrink-0">
                <Image
                  src="/images/logo/dialed-in-electric-logo.png"
                  alt="Dialed In Electric logo"
                  width={30}
                  height={29}
                  className="w-auto h-7"
                />
              </span>
              <span className="font-bold text-white text-[15px] leading-tight">
                Dialed In Electric
              </span>
            </Link>
            <p className="text-sm text-muted leading-relaxed mb-5">
              Licensed electrician serving Roseburg and Douglas County, Oregon. Generac certified. Built to code.
            </p>
            <div className="flex flex-col gap-1 text-sm">
              <a href="tel:15418176480" className="text-amber hover:text-amber-light transition-colors font-semibold">
                541-817-6480
              </a>
              <a href="mailto:Dialedinelectric@gmail.com" className="text-muted hover:text-white transition-colors">
                Dialedinelectric@gmail.com
              </a>
            </div>
          </div>

          {/* Services column */}
          <div>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Services</h3>
            <ul className="flex flex-col gap-2">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company column */}
          <div>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Company</h3>
            <ul className="flex flex-col gap-2">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact column */}
          <div>
            <h3 className="text-xs font-semibold text-muted uppercase tracking-widest mb-4">Contact</h3>
            <address className="not-italic flex flex-col gap-3 text-sm text-white/70">
              <div>
                <p className="text-white font-medium">Dialed In Electric Inc.</p>
                <p>2819 Cleveland Hill Rd</p>
                <p>Roseburg, OR 97471</p>
              </div>
              <div>
                <a href="tel:15418176480" className="text-amber hover:text-amber-light transition-colors font-semibold block">
                  541-817-6480
                </a>
              </div>
              <Button
                as="link"
                href="/contact"
                variant="primary"
                size="md"
                className="mt-1 w-full justify-center"
              >
                Request Service
              </Button>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/40">
          <p>© {year} Dialed In Electric Inc. · Oregon CCB# 228668 · Licensed &amp; Insured</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/60 transition-colors">Privacy</Link>
            <span className="text-white/20">·</span>
            <a
              href="https://kreatebydesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/60 transition-colors"
            >
              Built by Kreate by Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
