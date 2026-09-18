import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Enforce apex hostname (www → non-www)
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.dialedinelectricroseburg.com" }],
        destination: "https://dialedinelectricroseburg.com/:path*",
        permanent: true,
      },
      // Legacy Wix URLs documented in notes/site-audit.md
      {
        source: "/services",
        destination: "/electrical-services",
        permanent: true,
      },
      {
        source: "/generac-standby-generators",
        destination: "/generators",
        permanent: true,
      },
      {
        source: "/manual-transfer-switch",
        destination: "/backup-power",
        permanent: true,
      },
      {
        source: "/panel-and-service-upgrades",
        destination: "/panel-upgrades",
        permanent: true,
      },
      {
        source: "/commercial-wiring",
        destination: "/commercial",
        permanent: true,
      },
      {
        source: "/new-electrical-services",
        destination: "/electrical-services",
        permanent: true,
      },
      {
        source: "/ev-charger-installation",
        destination: "/ev-charger",
        permanent: true,
      },
      {
        source: "/locations",
        destination: "/service-areas",
        permanent: true,
      },
      {
        source: "/reviews",
        destination: "/about",
        permanent: true,
      },
      {
        source: "/careers",
        destination: "/about",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
