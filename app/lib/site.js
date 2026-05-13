/**
 * Canonical host for URLs, OG tags, and JSON-LD.
 * Set NEXT_PUBLIC_SITE_URL in .env.local to your live origin (with or without trailing slash),
 * e.g. https://robertkarchitect.com or https://www.robertkarchitect.com — must match how users reach the site.
 */
const DEFAULT_ORIGIN = "https://robertkarchitect.com";

export function getSiteOrigin() {
  const raw = process.env.NEXT_PUBLIC_SITE_URL || DEFAULT_ORIGIN;
  return raw.replace(/\/+$/, "");
}

/** Absolute URL for a pathname (e.g. "/contact" or "/"). */
export function absoluteUrl(pathname) {
  const origin = getSiteOrigin();
  if (!pathname || pathname === "/") {
    return `${origin}/`;
  }
  const path = pathname.startsWith("/") ? pathname : `/${pathname}`;
  return `${origin}${path}`;
}
