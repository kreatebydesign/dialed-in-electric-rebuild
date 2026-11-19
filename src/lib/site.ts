/** Approved production origin (apex canonical). */
export const SITE_URL = "https://dialedinelectricroseburg.com";

export function siteUrl(path = ""): string {
  if (!path || path === "/") return SITE_URL;
  return `${SITE_URL}${path.startsWith("/") ? path : `/${path}`}`;
}