/**
 * Curated portfolio — one entry per unique photograph.
 * Twenty files exist under public/images; MD5 audit shows 10 unique files (duplicate bytes, alternate filenames).
 */

export type PortfolioPhoto = {
  id: string;
  /** Canonical path (one file per unique image) */
  src: string;
  alt: string;
  category: string;
  caption: string;
  serviceHref?: string;
  width: number;
  height: number;
};

export const PORTFOLIO_PHOTOS: PortfolioPhoto[] = [
  {
    id: "standby-generator-pad",
    src: "/images/gallery/generator-install-side-yard.jpg",
    alt: "Standby generator on a pad next to a residence with exterior electrical equipment",
    category: "Standby generator",
    caption: "Standby generator on pad with exterior service equipment.",
    serviceHref: "/generators",
    width: 4000,
    height: 3000,
  },
  {
    id: "generac-exterior-transfer",
    src: "/images/projects/generac-transfer-equipment.jpg",
    alt: "Generac standby generator with transfer equipment mounted on the home exterior",
    category: "Standby generator",
    caption: "Generac generator with transfer equipment and conduit at the residence.",
    serviceHref: "/generators",
    width: 4000,
    height: 3000,
  },
  {
    id: "service-meter-generac-disconnect",
    src: "/images/gallery/generac-generator-install-01.jpg",
    alt: "Utility meter, service disconnect, and Generac transfer equipment on exterior siding",
    category: "Standby generator",
    caption: "Meter base, Generac disconnect, and service conduit at the wall.",
    serviceHref: "/generators",
    width: 4000,
    height: 3000,
  },
  {
    id: "propane-standby",
    src: "/images/gallery/propane-generator-tank-install.jpg",
    alt: "Propane tank and standby generator on separate concrete pads",
    category: "Standby generator",
    caption: "Propane tank with standby generator on gravel pad.",
    serviceHref: "/generators",
    width: 4000,
    height: 3000,
  },
  {
    id: "exterior-transfer-switches",
    src: "/images/projects/panel-service-work.jpg",
    alt: "Exterior Generac transfer switches and service equipment on residential siding",
    category: "Panel and service",
    caption: "Generac transfer switches with exterior service and conduit.",
    serviceHref: "/panel-upgrades",
    width: 4000,
    height: 3000,
  },
  {
    id: "fused-disconnects",
    src: "/images/gallery/electrical-panel-interior.jpg",
    alt: "Open fused disconnect switches with visible terminations and conduit",
    category: "Commercial",
    caption: "Fused disconnect switches with conduit risers.",
    serviceHref: "/commercial",
    width: 4000,
    height: 3000,
  },
  {
    id: "new-construction-service",
    src: "/images/gallery/new-construction-service-install.jpg",
    alt: "New construction framing with main service panel and subpanels rough-in",
    category: "New construction",
    caption: "Main service and subpanels rough-in at new construction.",
    serviceHref: "/new-home-wiring",
    width: 4000,
    height: 3000,
  },
  {
    id: "commercial-service-strut",
    src: "/images/gallery/commercial-disconnect-install.jpg",
    alt: "Commercial electrical panels mounted on strut against metal building siding",
    category: "Commercial",
    caption: "Commercial service panels on strut-mounted assembly.",
    serviceHref: "/commercial",
    width: 4000,
    height: 3000,
  },
  {
    id: "multi-meter-bank",
    src: "/images/gallery/commercial-meter-bank-install.jpg",
    alt: "Multiple meter sockets and main panel on exterior wall at construction",
    category: "Commercial",
    caption: "Multi-meter bank with main panel at new construction.",
    serviceHref: "/commercial",
    width: 4000,
    height: 3000,
  },
  {
    id: "commercial-distribution",
    src: "/images/gallery/commercial-electrical-service.jpg",
    alt: "Commercial Eaton disconnects and distribution panel on building exterior",
    category: "Commercial",
    caption: "Eaton disconnects and distribution panel with meter socket.",
    serviceHref: "/commercial",
    width: 4000,
    height: 3000,
  },
];

/** Prominent featured photograph (same install set as browser, no duplicate asset) */
export const FEATURED_PORTFOLIO_ID = "generac-exterior-transfer";

export function getFeaturedPhoto(): PortfolioPhoto {
  return PORTFOLIO_PHOTOS.find((p) => p.id === FEATURED_PORTFOLIO_ID) ?? PORTFOLIO_PHOTOS[0];
}