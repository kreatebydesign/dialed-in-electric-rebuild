import type { Metadata } from "next";
import { Suspense } from "react";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import MobileCallBar from "@/components/layout/MobileCallBar";
import AnalyticsBootstrap from "@/components/analytics/AnalyticsBootstrap";
import GoogleAnalytics from "@/components/analytics/GoogleAnalytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
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
    "CCB 228668",
  ],
  authors: [{ name: "Dialed In Electric Inc." }],
  creator: "Dialed In Electric Inc.",
  metadataBase: new URL("https://www.dialedinelectricroseburg.com"),
  // Canonicals are set per-page. Do not inherit "/" onto child routes.
  verification: {
    google: "dkQWFvw6CPfAhk-sDHzwxHYWHZNfK524ME-pf8pmJmI",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.dialedinelectricroseburg.com",
    siteName: "Dialed In Electric",
    title: "Electrician & Generac Installer in Roseburg, OR | Dialed In Electric",
    description:
      "Licensed electrician in Roseburg, OR. Generac generators, panel upgrades, EV chargers, new construction, and commercial electrical throughout Douglas County. CCB# 228668.",
    images: [
      {
        url: "/images/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Dialed In Electric — Roseburg, OR",
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

/** Only include fields verified in project content — no invented geo, hours, ratings, or priceRange. */
const structuredData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": ["Electrician", "LocalBusiness"],
      "@id": "https://www.dialedinelectricroseburg.com/#business",
      name: "Dialed In Electric Inc.",
      alternateName: "Dialed In Electric",
      description:
        "Licensed electrical contractor in Roseburg, OR specializing in Generac standby generator installation, panel upgrades, new home wiring, and commercial electrical services.",
      url: "https://www.dialedinelectricroseburg.com",
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
      image: "https://www.dialedinelectricroseburg.com/images/logo/dialed-in-electric-logo.png",
    },
    {
      "@type": "WebSite",
      "@id": "https://www.dialedinelectricroseburg.com/#website",
      url: "https://www.dialedinelectricroseburg.com",
      name: "Dialed In Electric",
      publisher: { "@id": "https://www.dialedinelectricroseburg.com/#business" },
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
    <html lang="en" className={inter.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className="pb-12 lg:pb-0">
        <GoogleAnalytics />
        <Suspense fallback={null}>
          <AnalyticsBootstrap />
        </Suspense>
        <Header />
        <main>{children}</main>
        <Footer />
        <MobileCallBar />
      </body>
    </html>
  );
}
