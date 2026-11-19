import type { Metadata } from "next";
import HomeApproved from "@/components/prototype/HomeApproved";
import { DEFAULT_OG_IMAGE } from "@/lib/site";

export const metadata: Metadata = {
  title: {
    absolute:
      "Generac Installer & Electrician in Roseburg, OR | Dialed In Electric",
  },
  description:
    "Generac standby generator installation, electrical service upgrades, and panel replacements in Roseburg and Douglas County. Oregon licensed CCB# 228668. Call 541-817-6480.",
  alternates: { canonical: "/" },
  openGraph: {
    title:
      "Generac Installer & Electrician in Roseburg, OR | Dialed In Electric",
    description:
      "Standby generator installs, 200-amp service upgrades, and panel work for Roseburg and Douglas County homeowners and businesses.",
    url: "https://dialedinelectricroseburg.com",
    images: [DEFAULT_OG_IMAGE],
  },
};

const homeServiceSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Primary electrical services in Roseburg, OR",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Generac standby generator installation",
      url: "https://dialedinelectricroseburg.com/generators",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Electrical panel and service upgrades",
      url: "https://dialedinelectricroseburg.com/panel-upgrades",
    },
  ],
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(homeServiceSchema) }}
      />
      <HomeApproved />
    </>
  );
}