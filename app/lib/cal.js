/**
 * Public Cal.com booking path (username or username/event).
 * Env overrides default so staging can point elsewhere.
 */
export function getCalComPath() {
  const raw = process.env.NEXT_PUBLIC_CALCOM_EMBED_LINK;
  if (typeof raw === "string" && raw.trim()) {
    return raw.trim().replace(/^https?:\/\/(www\.)?cal\.com\//i, "").replace(/^\/+/, "");
  }
  return "rkarchitect";
}

export function getCalComUrl() {
  return `https://cal.com/${getCalComPath()}`;
}
