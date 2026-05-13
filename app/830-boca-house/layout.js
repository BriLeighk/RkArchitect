import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/830-boca-house", {
  title: "Boca Raton House Build",
  description:
    "Disaster-resistant Boca Raton home by RK Architect, P.A. and RK Builders: precision construction and coastal-ready detailing.",
});

export default function Layout({ children }) {
  return children;
}
