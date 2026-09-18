import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

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
    "Licensed Roseburg electrician specializing in Generac generators, panel upgrades, EV chargers, new construction and commercial electrical work throughout Douglas County.",
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
  metadataBase: new URL("https://dialedinelectricroseburg.com"),
  // Canonicals are set per-page. Do not inherit "/" onto child routes.
  verification: {
    google: "dkQWFvw6CPfAhk-sDHzwxHYWHZNfK524ME-pf8pmJmI",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://dialedinelectricroseburg.com",
    siteName: "Dialed In Electric",
    title: "Electrician & Generac Installer in Roseburg, OR | Dialed In Electric",
    description:
      "Licensed Roseburg electrician specializing in Generac generators, panel upgrades, EV chargers, new construction and commercial electrical work throughout Douglas County.",
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
      "Licensed Roseburg electrician specializing in Generac generators, panel upgrades, EV chargers, new construction and commercial electrical work throughout Douglas County.",
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

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "Electrician"],
  "@id": "https://dialedinelectricroseburg.com/#business",
  name: "Dialed In Electric Inc.",
  description:
    "Licensed electrical contractor in Roseburg, OR specializing in Generac standby generator installation, panel upgrades, new home wiring, and commercial electrical services.",
  url: "https://dialedinelectricroseburg.com",
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
  geo: {
    "@type": "GeoCoordinates",
    latitude: 43.2165,
    longitude: -123.3688,
  },
  areaServed: [
    "Roseburg, OR",
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
    "Douglas County, OR",
  ],
  hasCredential: "Oregon CCB# 228668",
  priceRange: "$$",
  image: "https://dialedinelectricroseburg.com/images/logo/dialed-in-electric-logo.png",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
