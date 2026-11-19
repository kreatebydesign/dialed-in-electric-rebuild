import Link from "next/link";
import Image from "next/image";
import Button from "@/components/ui/Button";

const serviceLinks = [
  { label: "Generac Generators", href: "/generators" },
  { label: "Backup Power", href: "/backup-power" },
  { label: "Panel & Service Upgrades", href: "/panel-upgrades" },
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
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-graphite border-t border-edge text-white grain">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="inline-block mb-5" aria-label="Dialed In Electric — Home">
              <Image
                src="/brand/dialed-in-logo-white.png"
                alt="Dialed In Electric"
                width={140}
                height={140}
                className="w-auto h-14 opacity-95"
              />
            </Link>
            <p className="text-sm text-white/55 leading-relaxed mb-5 max-w-xs">
              Licensed electrical contractor in Roseburg and Douglas County. Generac standby
              generators, service upgrades, and code-ready installs since 2019.
            </p>
            <div className="flex flex-col gap-1.5 text-sm">
              <a
                href="tel:15418176480"
                data-track="phone_click"
                data-track-location="footer"
                className="text-white font-semibold hover:text-white/80 transition-colors tabular-nums"
              >
                541-817-6480
              </a>
              <a
                href="mailto:Dialedinelectric@gmail.com"
                data-track="email_click"
                data-track-location="footer"
                className="text-white/50 hover:text-white/80 transition-colors"
              >
                Dialedinelectric@gmail.com
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.18em] mb-4">
              Services
            </h3>
            <ul className="flex flex-col gap-2.5">
              {serviceLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.18em] mb-4">
              Company
            </h3>
            <ul className="flex flex-col gap-2.5">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/65 hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-[10px] font-semibold text-white/40 uppercase tracking-[0.18em] mb-4">
              Contact
            </h3>
            <address className="not-italic flex flex-col gap-3 text-sm text-white/60">
              <div>
                <p className="text-white font-medium">Dialed In Electric Inc.</p>
                <p>2819 Cleveland Hill Rd</p>
                <p>Roseburg, OR 97471</p>
              </div>
              <Button
                as="link"
                href="/contact"
                variant="primary"
                size="md"
                className="mt-1 w-full justify-center"
                data-track="request_service_click"
                data-track-location="footer"
              >
                Request Service
              </Button>
            </address>
          </div>
        </div>
      </div>

      <div className="border-t border-edge">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-white/35">
          <p>
            © {year} Dialed In Electric Inc. · Oregon CCB# 228668 · Licensed &amp; Insured
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white/55 transition-colors">
              Privacy
            </Link>
            <span className="text-white/15">·</span>
            <a
              href="https://kreatebydesign.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white/55 transition-colors"
            >
              Built by Kreate by Design
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}