/**
 * Single source for the public mailto address: set NEXT_PUBLIC_CONTACT_EMAIL in .env.local
 * (full address). Defaults to robert@rkarchitectpa.com when unset.
 */
const DEFAULT_CONTACT_EMAIL = "robert@rkarchitectpa.com";

export function getContactMailtoHref() {
  const addr =
    (typeof process !== "undefined" && process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim()) ||
    DEFAULT_CONTACT_EMAIL;
  return `mailto:${addr}`;
}
