import type { Metadata } from "next";
import Link from "next/link";
import PrototypePageClosing from "@/components/prototype/PrototypePageClosing";
import PrototypePageHero from "@/components/prototype/PrototypePageHero";
import {
  ProtoBulletGrid,
  ProtoFactRow,
  ProtoInnerShell,
  ProtoLinkList,
  ProtoPoints,
  ProtoSection,
  ProtoSplit,
} from "@/components/prototype/PrototypeInner";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute: "About | Licensed Electrician in Roseburg, OR | Dialed In Electric",
  },
  description:
    "Dialed In Electric is a licensed electrical contractor based in Roseburg, OR. Generac standby installs, licensed since 2019, serving Douglas County. CCB# 228668.",
  keywords: [
    "about Dialed In Electric",
    "electrician Roseburg Oregon",
    "licensed electrician Douglas County",
    "Generac generator installation Roseburg",
  ],
  alternates: { canonical: "/about" },
  openGraph: {
    title: "About Dialed In Electric | Roseburg, OR Electrician",
    description:
      "Licensed electrical contractor in Roseburg, OR since 2019. Standby generator installation, residential and commercial work throughout Douglas County. CCB# 228668.",
    url: "https://dialedinelectricroseburg.com/about",
    images: [DEFAULT_OG_IMAGE],
  },
};

const services = [
  { label: "Standby generator installation", href: "/generators" },
  { label: "Manual transfer switches", href: "/backup-power" },
  { label: "Panel and service upgrades", href: "/panel-upgrades" },
  { label: "New home wiring", href: "/new-home-wiring" },
  { label: "Commercial electrical", href: "/commercial" },
  { label: "EV charger installation", href: "/ev-charger" },
];

const serviceAreas = [
  "Roseburg",
  "Sutherlin",
  "Winston",
  "Green",
  "Melrose",
  "Garden Valley",
  "Lookingglass",
  "Wilbur",
  "Myrtle Creek",
  "Canyonville",
  "Glide",
  "Oakland",
];

const points = [
  {
    title: "Clear scope before work starts",
    body: "We review the panel, service size, and job details so you know what is included before we begin.",
  },
  {
    title: "Permits and inspections",
    body: "When a permit is required, we pull it and meet the inspector on site for the walkthrough.",
  },
  {
    title: "Labeled, accessible work",
    body: "Panels are labeled. Conduit runs are straight. Junction boxes stay accessible for future service.",
  },
  {
    title: "Direct communication",
    body: "If the scope changes during the job, we talk it through before additional work is done.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PrototypePageHero
        eyebrow="About"
        title={
          <>
            BASED IN
            <br />
            ROSEBURG.
          </>
        }
        lead="Dialed In Electric Inc. is an Oregon licensed electrical contractor serving Douglas County since 2019. Generators, panel upgrades, new construction, and commercial work. CCB# 228668."
        image="/images/gallery/new-construction-service-install.jpg"
        imagePosition="center 40%"
      />

      <ProtoFactRow
        items={[
          { label: "Licensed since 2019", sub: "Oregon CCB# 228668" },
          { label: "Standby generators", sub: "Generac installation focus" },
          { label: "Residential and commercial", sub: "Homes, shops, new construction" },
          { label: "Douglas County", sub: "Based in Roseburg" },
        ]}
      />

      <ProtoInnerShell>
        <ProtoSection eyebrow="WHO WE ARE" title="Electrical work without the runaround">
          <ProtoSplit
            image="/images/gallery/new-construction-service-install.jpg"
            imageAlt="New construction electrical service rough-in in Douglas County"
          >
            <p>
              We started Dialed In Electric in 2019 to handle electrical work with permits, inspections,
              and clean installs. Our shop is at 2819 Cleveland Hill Rd in Roseburg.
            </p>
            <p>
              Most of our work is in Douglas County: Generac standby generators, 200-amp service changes,
              meter and panel replacements, new home rough-in, commercial wiring, and EV chargers.
            </p>
            <p>
              If you are planning a project in the area, call or send a request with a short description
              of the job. We will tell you whether it fits our scope.
            </p>
          </ProtoSplit>
        </ProtoSection>

        <ProtoSection eyebrow="HOW WE WORK" title="What to expect on a job">
          <ProtoPoints items={points} />
        </ProtoSection>

        <ProtoSection eyebrow="SERVICES" title="What we install and wire">
          <p className="proto-inner-lead" style={{ marginBottom: 0 }}>
            Common requests from homeowners, builders, and commercial clients in Roseburg and Douglas
            County.
          </p>
          <ProtoLinkList items={services.map((s) => ({ label: s.label, href: s.href }))} />
          <p style={{ marginTop: 20 }}>
            <Link href="/electrical-services" className="proto-textlink">
              All electrical services <span className="arrow">→</span>
            </Link>
          </p>
        </ProtoSection>

        <ProtoSection eyebrow="SERVICE AREA" title="Douglas County">
          <p className="proto-inner-lead" style={{ marginBottom: 0 }}>
            Communities we serve from Roseburg. Visit your city page for localized service details.
          </p>
          <ProtoBulletGrid items={serviceAreas} />
          <p style={{ marginTop: 20 }}>
            <Link href="/service-areas" className="proto-textlink">
              Service area overview <span className="arrow">→</span>
            </Link>
          </p>
        </ProtoSection>

        <ProtoSection eyebrow="LICENSING" title="Credentials">
          <ul className="proto-inner-points" style={{ gridTemplateColumns: "1fr", gap: 12 }}>
            <li style={{ display: "block" }}>
              <p style={{ margin: 0, fontSize: 15, color: "#c8caca", lineHeight: 1.75 }}>
                Oregon CCB# 228668
                <br />
                Standby generator installation (Generac)
                <br />
                Licensed and insured in Oregon
              </p>
            </li>
          </ul>
          <div className="proto-inner-actions">
            <Link
              className="proto-btn"
              href="/contact"
              data-track="request_service_click"
              data-track-location="about_inline"
            >
              REQUEST SERVICE <span>↗</span>
            </Link>
            <a
              className="proto-textlink"
              href="tel:15418176480"
              data-track="phone_click"
              data-track-location="about_inline"
            >
              541 817 6480 <span className="arrow">↗</span>
            </a>
          </div>
        </ProtoSection>
      </ProtoInnerShell>

      <PrototypePageClosing trackLocation="about_close" />
    </>
  );
}