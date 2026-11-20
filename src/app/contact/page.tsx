import type { Metadata } from "next";
import { ProtoNeMark, ProtoTextArrow } from "@/components/ui/ProtoDecor";
import Link from "next/link";
import ContactForm from "@/components/contact/ContactForm";
import PrototypePageHero from "@/components/prototype/PrototypePageHero";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "Contact | Request Electrical or Generator Service | Dialed In Electric",
  },
  description:
    "Call, email, or request a quote from Dialed In Electric for generator installation, panel upgrades, and electrical service in Roseburg and Douglas County, OR. CCB# 228668. 541-817-6480.",
  keywords: [
    "contact electrician Roseburg OR",
    "call electrician Roseburg",
    "generator quote Roseburg Oregon",
    "electrician quote Roseburg",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Dialed In Electric | Roseburg, OR Electrician",
    description:
      "Call 541-817-6480, email, or send a service request. Generator installation, panel upgrades, and electrical service throughout Douglas County. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/contact",
    images: [DEFAULT_OG_IMAGE],
  },
};

const serviceAreas = [
  { name: "Roseburg", slug: "roseburg" },
  { name: "Sutherlin", slug: "sutherlin" },
  { name: "Winston", slug: "winston" },
  { name: "Green", slug: "green" },
  { name: "Melrose", slug: "melrose" },
  { name: "Garden Valley", slug: "garden-valley" },
  { name: "Lookingglass", slug: "lookingglass" },
  { name: "Wilbur", slug: "wilbur" },
  { name: "Myrtle Creek", slug: "myrtle-creek" },
  { name: "Oakland", slug: "oakland" },
  { name: "Glide", slug: "glide" },
  { name: "Canyonville", slug: "canyonville" },
];

const steps = [
  {
    n: "01",
    title: "Reach out",
    body: "Call, use the form below, or email with a short description of the job and where the work is located.",
  },
  {
    n: "02",
    title: "Review the scope",
    body: "We ask questions about the panel, service size, generator location, or job specifics so we understand the work.",
  },
  {
    n: "03",
    title: "Schedule the work",
    body: "When the scope is clear and you are ready to move forward, we set a date and keep you updated through completion.",
  },
];

export default function ContactPage() {
  return (
    <>
      <PrototypePageHero
        eyebrow="Contact"
        title={
          <>
            GET IN
            <br />
            TOUCH.
          </>
        }
        lead="Call or send a request for generator installs, panel and service work, or electrical projects in Roseburg and Douglas County. CCB# 228668."
        image="/images/gallery/commercial-electrical-service.jpg"
      />

      <section className="proto-contact" aria-labelledby="contact-form-heading">
        <div className="proto-contact-grid">
          <div className="proto-contact-main">
            <ContactForm />

            <div className="proto-contact-phone">
              <p>
                Prefer to talk through the job on the phone? Call Dialed In Electric directly. If we
                are on a job site, leave a message and we will return your call.
              </p>
              <a
                className="proto-btn"
                href="tel:15418176480"
                data-track="phone_click"
                data-track-location="contact_page"
              >
                541 817 6480 <ProtoNeMark />
              </a>
              <p className="proto-form-foot" style={{ marginTop: 14 }}>
                Email:{" "}
                <a
                  href="mailto:Dialedinelectric@gmail.com"
                  className="proto-textlink"
                  data-track="email_click"
                  data-track-location="contact_page"
                >
                  Dialedinelectric@gmail.com
                </a>
              </p>
            </div>
          </div>

          <aside className="proto-contact-aside">
            <div className="proto-contact-block">
              <h2>Office</h2>
              <address>
                Dialed In Electric Inc.
                <br />
                2819 Cleveland Hill Rd
                <br />
                Roseburg, OR 97471
              </address>
            </div>

            <div className="proto-contact-block">
              <h2>Service areas</h2>
              <ul className="proto-contact-areas">
                {serviceAreas.map((area) => (
                  <li key={area.slug}>
                    <Link href={`/service-areas/${area.slug}`}>{area.name}</Link>
                  </li>
                ))}
              </ul>
              <p className="proto-form-foot" style={{ marginTop: 16 }}>
                <Link href="/service-areas" className="proto-textlink">
                  Douglas County overview <ProtoTextArrow />
                </Link>
              </p>
            </div>

            <div className="proto-contact-block">
              <h2>Licensing</h2>
              <p>
                CCB# 228668
                <br />
                Oregon licensed and insured
                <br />
                Generac standby generator installs
              </p>
            </div>

            <div className="proto-contact-block">
              <h2>Common requests</h2>
              <ul className="proto-contact-links">
                <li>
                  <Link href="/generators">Generac standby generator installation</Link>
                </li>
                <li>
                  <Link href="/panel-upgrades">Panel and 200-amp service upgrades</Link>
                </li>
                <li>
                  <Link href="/ev-charger">EV charger installation</Link>
                </li>
                <li>
                  <Link href="/electrical-services">Residential and commercial electrical</Link>
                </li>
              </ul>
            </div>
          </aside>
        </div>

        <section className="proto-contact-steps" aria-labelledby="contact-next-heading">
          <h2 id="contact-next-heading">What happens next</h2>
          <div className="proto-contact-step-list">
            {steps.map((step) => (
              <article key={step.n}>
                <span>{step.n}</span>
                <h3>{step.title}</h3>
                <p>{step.body}</p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </>
  );
}