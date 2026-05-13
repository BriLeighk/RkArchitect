import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/inspections-and-repairs", {
  title: "Inspections & Repairs",
  description:
    "Multifamily structural and electrical inspections, repair specifications, and compliance-focused solutions in Florida.",
});

export default function Layout({ children }) {
  return children;
}
