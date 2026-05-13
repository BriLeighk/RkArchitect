import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/chenmed-primary-care-medical-centers-majorca", {
  title: "ChenMed Majorca",
  description:
    "ChenMed Majorca medical center architecture by RK Architect, P.A.: accessible, code-compliant healthcare environments.",
});

export default function Layout({ children }) {
  return children;
}
