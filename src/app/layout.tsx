import type { Metadata } from "next";
import { Suspense } from "react";
import { Barlow_Condensed, DM_Sans } from "next/font/google";
import "./globals.css";
import PrototypeNav from "@/components/prototype/PrototypeNav";
import PrototypeFooter from "@/components/prototype/PrototypeFooter";
import PrototypeMobileBar from "@/components/layout/PrototypeMobileBar";
import HomeIntroGate from "@/components/layout/HomeIntroGate";
import IntroBootShell from "@/components/intro/IntroBootShell";
import AnalyticsBootstrap from "@/components/analytics/AnalyticsBootstrap";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";
import { INTRO_BOOT_CSS, INTRO_BOOT_SCRIPT } from "@/lib/intro-boot";
import { SITE_URL } from "@/lib/site";

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: {
    default: "Electrician & Generac Installer in Roseburg, OR | Dialed In Electric",
    template: "%s | Dialed In Electric",
  },
  description:
    "Licensed electrician in Roseburg, OR. Generac generators, panel upgrades, EV chargers, new construction, and commercial electrical throughout Douglas County. Call 541-817-6480. CCB# 228668.",
  keywords: [
    "generator installation Roseburg OR",
    "backup generator Roseburg",
    "Generac standby generator Roseburg",
    "electrician Roseburg Oregon",
    "electrical contractor Roseburg OR",
    "panel upgrade Roseburg",
    "electrical service upgrade Roseburg",
    "meter base replacement Roseburg",
    "200 amp service upgrade Roseburg",
    "CCB 228668",
  ],
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon.svg", type: "image/svg+xml" },
    ],
    apple: [{ url: "/brand/dialed-in-bolt.png", sizes: "180x180" }],
  },
  authors: [{ name: "Dialed In Electric Inc." }],
  creator: "Dialed In Electric Inc.",
  metadataBase: new URL(SITE_URL),
  alternates: {
    canonical: "/",
  },
  verification: {
    google: "dkQWFvw6CPfAhk-sDHzwxHYWHZNfK524ME-pf8pmJmI",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "Dialed In Electric",
    title: "Electrician & Generac Installer in Roseburg, OR | Dialed In Electric",
    description:
      "Licensed electrician in Roseburg, OR. Generac generators, panel upgrades, EV chargers, new construction, and commercial electrical throughout Douglas County. CCB# 228668.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dialed In Electric — licensed electrician in Roseburg, Oregon",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Electrician & Generac Installer in Roseburg, OR | Dialed In Electric",
    description:
      "Licensed electrician in Roseburg, OR. Generac generators, panel upgrades, EV chargers, new construction, and commercial electrical throughout Douglas County.",
    images: ["/images/og-default.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Electrician", "LocalBusiness"],
      "@id": `${SITE_URL}/#business`,
      name: "Dialed In Electric Inc.",
      alternateName: "Dialed In Electric",
      description:
        "Licensed electrical contractor in Roseburg, OR specializing in Generac standby generator installation, panel upgrades, new home wiring, and commercial electrical services.",
      url: SITE_URL,
      telephone: "+15418176480",
      email: "Dialedinelectric@gmail.com",
      foundingDate: "2019",
      address: {
        "@type": "PostalAddress",
        streetAddress: "2819 Cleveland Hill Rd",
        addressLocality: "Roseburg",
        addressRegion: "OR",
        postalCode: "97471",
        addressCountry: "US",
      },
      areaServed: [
        { "@type": "City", name: "Roseburg", containedInPlace: { "@type": "State", name: "Oregon" } },
        { "@type": "AdministrativeArea", name: "Douglas County", containedInPlace: { "@type": "State", name: "Oregon" } },
        "Sutherlin, OR",
        "Winston, OR",
        "Green, OR",
        "Melrose, OR",
        "Garden Valley, OR",
        "Lookingglass, OR",
        "Wilbur, OR",
        "Myrtle Creek, OR",
        "Canyonville, OR",
        "Glide, OR",
        "Oakland, OR",
      ],
      hasCredential: "Oregon CCB# 228668",
      image: `${SITE_URL}/brand/dialed-in-logo-white.png`,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      url: SITE_URL,
      name: "Dialed In Electric",
      publisher: { "@id": `${SITE_URL}/#business` },
      inLanguage: "en-US",
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${dmSans.variable} ${barlowCondensed.variable}`}>
      <head>
        <script dangerouslySetInnerHTML={{ __html: INTRO_BOOT_SCRIPT }} />
        <style dangerouslySetInnerHTML={{ __html: INTRO_BOOT_CSS }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="pb-12 lg:pb-0 antialiased bg-[var(--proto-bg)] text-[var(--proto-text)]">
        <IntroBootShell />
        <HomeIntroGate />
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <AnalyticsBootstrap />
        </Suspense>
        <PrototypeNav />
        <main>{children}</main>
        <PrototypeFooter />
        <PrototypeMobileBar />
      </body>
    </html>
  );
}