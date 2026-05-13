import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/chenmed-primary-care-medical-centers-intune", {
  title: "ChenMed Intune",
  description:
    "ChenMed Intune small-format medical center by RK Architect, P.A.: efficient layouts and patient-centered healthcare design.",
});

export default function Layout({ children }) {
  return children;
}
