import { absoluteUrl } from "./site";

const OG_IMAGE_PATH = "/rk-architect-logo.jpg";

const siteName = "RK Architect, P.A. & RK Builders, Inc.";

/**
 * Per-route metadata with absolute canonical and social tags (Open Graph + Twitter).
 */
export function createPageMetadata(pathname, { title, description }) {
  const url = absoluteUrl(pathname);

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      type: "website",
      locale: "en_US",
      url,
      siteName,
      title,
      description,
      images: [
        {
          url: OG_IMAGE_PATH,
          width: 1200,
          height: 1200,
          alt: `${siteName} logo`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_PATH],
    },
  };
}
