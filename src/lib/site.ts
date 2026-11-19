/** Approved production origin (apex canonical). */
export const SITE_URL = "https://dialedinelectricroseburg.com";

export const DEFAULT_OG_IMAGE = {
  url: "/images/og-default.jpg",
  width: 1200,
  height: 630,
  alt: "Dialed In Electric — licensed electrician in Roseburg, Oregon",
} as const;

export function siteUrl(path = ""): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}