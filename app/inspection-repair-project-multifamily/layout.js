import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/inspection-repair-project-multifamily", {
  title: "Multifamily Inspection & Repair",
  description:
    "Multifamily inspection and repair case study: structural and electrical findings with clear repair protocols.",
});

export default function Layout({ children }) {
  return children;
}
