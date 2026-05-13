import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/sun-and-lake-multifamily-inspection-repair", {
  title: "Sun & Lake Multifamily Repair",
  description:
    "Sun & Lake multifamily inspection and repair by RK Architect, P.A.: safety upgrades aligned with code and capital plans.",
});

export default function Layout({ children }) {
  return children;
}
