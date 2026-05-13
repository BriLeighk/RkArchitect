import { absoluteUrl } from "./site";

/** Public business facts for copy, JSON-LD, and footers (no secrets). */
export const BUSINESS = {
  legalName: "RK Architect, P.A.",
  tradeName: "RK Architect, P.A. & RK Builders, Inc.",
  founderName: "Robert Kirchgessner",
  description:
    "South Florida architecture practice led by a Florida registered architect, with architect-and-builder delivery for multifamily, condominium, medical, custom residential, and code and life-safety work.",
  streetAddress: "500 E Broward Blvd, Suite 900",
  addressLocality: "Fort Lauderdale",
  addressRegion: "FL",
  postalCode: "33394",
  addressCountry: "US",
  telephone: "+1-877-390-2394",
  emailPath: "contact",
  areaServed: [
    "South Florida",
    "Fort Lauderdale",
    "Miami-Dade County",
    "Broward County",
    "Palm Beach County",
    "Florida",
  ],
  /** Add profiles when available; empty strings are omitted from JSON-LD. */
  sameAs: {
    linkedIn: "https://www.linkedin.com/in/rkarchitect",
    instagram: "https://www.instagram.com/rkarchitectpa/",
    googleBusiness: "",
    facebook: "",
    houzz: "",
    buildZoom: "",
  },
};

export function businessPostalAddress() {
  return {
    "@type": "PostalAddress",
    streetAddress: BUSINESS.streetAddress,
    addressLocality: BUSINESS.addressLocality,
    addressRegion: BUSINESS.addressRegion,
    postalCode: BUSINESS.postalCode,
    addressCountry: BUSINESS.addressCountry,
  };
}

export function sameAsUrls() {
  return Object.values(BUSINESS.sameAs).filter((u) => typeof u === "string" && u.length > 0);
}

export function organizationLogoUrl() {
  return absoluteUrl("/rk-architect-logo.jpg");
}
