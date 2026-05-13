import { absoluteUrl } from "./site";
import { BUSINESS, businessPostalAddress, sameAsUrls, organizationLogoUrl } from "./business";

const SITE_LAST_UPDATED = "2026-05-01";

export function getSiteLastUpdatedIso() {
  return SITE_LAST_UPDATED;
}

/**
 * Rich JSON-LD for homepage / sitewide: Organization, ProfessionalService, Person (Architect).
 */
export function getSiteJsonLdGraph({ pageUrl, pageDescription }) {
  const url = pageUrl || absoluteUrl("/");
  const sameAs = sameAsUrls();

  const organization = {
    "@type": "Organization",
    "@id": `${absoluteUrl("/")}#organization`,
    name: BUSINESS.legalName,
    legalName: BUSINESS.legalName,
    alternateName: ["RK Builders, Inc."],
    url: absoluteUrl("/"),
    logo: organizationLogoUrl(),
    image: organizationLogoUrl(),
    telephone: BUSINESS.telephone,
    address: businessPostalAddress(),
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    ...(sameAs.length ? { sameAs } : {}),
  };

  const professionalService = {
    "@type": "ProfessionalService",
    "@id": `${absoluteUrl("/")}#professionalService`,
    name: BUSINESS.legalName,
    description: pageDescription || BUSINESS.description,
    url,
    image: organizationLogoUrl(),
    telephone: BUSINESS.telephone,
    address: businessPostalAddress(),
    areaServed: BUSINESS.areaServed.map((name) => ({ "@type": "AdministrativeArea", name })),
    provider: { "@id": organization["@id"] },
    ...(sameAs.length ? { sameAs } : {}),
  };

  const person = {
    "@type": "Person",
    "@id": `${absoluteUrl("/")}#robertKirchgessner`,
    name: BUSINESS.founderName,
    jobTitle: "Architect and builder",
    knowsAbout: [
      "Architecture",
      "Multifamily and condominium design",
      "Medical office architecture",
      "Custom residential design",
      "Building code and life safety",
      "Hurricane-resistant design",
    ],
    worksFor: { "@id": organization["@id"] },
    url: absoluteUrl("/"),
    ...(sameAs.length ? { sameAs } : {}),
  };

  const webPage = {
    "@type": "WebPage",
    "@id": `${url}#webpage`,
    url,
    name: `${BUSINESS.legalName} | South Florida architecture`,
    description: pageDescription || BUSINESS.description,
    dateModified: SITE_LAST_UPDATED,
    isPartOf: { "@id": `${absoluteUrl("/")}#website` },
    about: { "@id": professionalService["@id"] },
    publisher: { "@id": organization["@id"] },
  };

  const website = {
    "@type": "WebSite",
    "@id": `${absoluteUrl("/")}#website`,
    url: absoluteUrl("/"),
    name: BUSINESS.tradeName,
    publisher: { "@id": organization["@id"] },
    inLanguage: "en-US",
  };

  return {
    "@context": "https://schema.org",
    "@graph": [website, webPage, organization, professionalService, person],
  };
}
