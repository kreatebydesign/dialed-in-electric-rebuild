import type { Metadata } from "next";
import Link from "next/link";
import PrototypePageClosing from "@/components/prototype/PrototypePageClosing";
import { DEFAULT_OG_IMAGE } from "@/lib/site";
import PrototypePageHero from "@/components/prototype/PrototypePageHero";
import {
  ProtoFactRow,
  ProtoInnerShell,
  ProtoLinkList,
  ProtoSection,
} from "@/components/prototype/PrototypeInner";

export const metadata: Metadata = {
  title: {
    absolute: "Electrician Service Areas | Roseburg, Sutherlin, Winston | Dialed In Electric",
  },
  description:
    "Dialed In Electric serves Roseburg and all of Douglas County, OR. Generator installation, panel upgrades, residential and commercial electrical work in Sutherlin, Winston, Myrtle Creek, and surrounding communities.",
  keywords: [
    "electrician Douglas County OR",
    "electrician service areas Roseburg Oregon",
    "generator installation Douglas County",
    "electrical contractor Sutherlin Winston OR",
  ],
  alternates: { canonical: "/service-areas" },
  openGraph: {
    title: "Electrician Service Areas | Douglas County, OR | Dialed In Electric",
    description:
      "Licensed electrician serving Roseburg and all of Douglas County. Generator installs, panel upgrades, residential and commercial electrical throughout the region.",
    url: "https://dialedinelectricroseburg.com/service-areas",
    images: [DEFAULT_OG_IMAGE],
  },
};

const cities = [
  { name: "Roseburg", slug: "roseburg", note: "Headquarters at 2819 Cleveland Hill Rd" },
  { name: "Sutherlin", slug: "sutherlin", note: "North of Roseburg on I-5" },
  { name: "Winston", slug: "winston", note: "South of Roseburg" },
  { name: "Green", slug: "green", note: "Southern Douglas County" },
  { name: "Melrose", slug: "melrose", note: "Umpqua Valley" },
  { name: "Garden Valley", slug: "garden-valley", note: "West of Roseburg" },
  { name: "Lookingglass", slug: "lookingglass", note: "Rural Douglas County" },
  { name: "Wilbur", slug: "wilbur", note: "Northeast of Roseburg" },
  { name: "Myrtle Creek", slug: "myrtle-creek", note: "I-5 corridor" },
  { name: "Oakland", slug: "oakland", note: "North Douglas County" },
  { name: "Glide", slug: "glide", note: "North Umpqua River area" },
  { name: "Canyonville", slug: "canyonville", note: "South Douglas County" },
];

export default function ServiceAreasPage() {
  return (
    <>
      <PrototypePageHero
        eyebrow="Service areas"
        title={
          <>
            DOUGLAS
            <br />
            COUNTY.
          </>
        }
        lead="Our crew is based in Roseburg. Generators, panel and service upgrades, new construction wiring, commercial electrical, and EV chargers throughout Douglas County."
        image="/images/gallery/commercial-electrical-service.jpg"
        imagePosition="center 45%"
      />

      <ProtoFactRow
        items={[
          { label: "Based in Roseburg", sub: "2819 Cleveland Hill Rd" },
          { label: "CCB# 228668", sub: "Oregon licensed and insured" },
          { label: "12 communities", sub: "Linked city pages below" },
          { label: "Generators and panels", sub: "Residential and commercial" },
        ]}
      />

      <ProtoInnerShell>
        <ProtoSection
          eyebrow="CITIES WE SERVE"
          title="Local pages"
          lead="Select a community for localized service details and internal links to generators, panels, and electrical services."
        >
          <ProtoLinkList
            items={cities.map((c) => ({
              label: c.name,
              href: `/service-areas/${c.slug}`,
              note: c.note,
            }))}
          />
        </ProtoSection>

        <ProtoSection eyebrow="CONTACT" title="Confirm your area">
          <p className="proto-inner-lead" style={{ marginBottom: 0 }}>
            Not sure whether your property is in range? Call with your address or use the contact
            form with location details.
          </p>
          <div className="proto-inner-actions">
            <a
              className="proto-btn"
              href="tel:15418176480"
              data-track="phone_click"
              data-track-location="service_areas_inline"
            >
              541 817 6480 <span>↗</span>
            </a>
            <Link
              className="proto-textlink"
              href="/contact"
              data-track="request_service_click"
              data-track-location="service_areas_inline"
            >
              REQUEST SERVICE <span className="arrow">→</span>
            </Link>
          </div>
        </ProtoSection>
      </ProtoInnerShell>

      <PrototypePageClosing trackLocation="service_areas_close" />
    </>
  );
}