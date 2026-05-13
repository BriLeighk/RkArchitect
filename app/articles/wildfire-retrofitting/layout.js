import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata("/articles/wildfire-retrofitting", {
  title: "Wildfire Retrofitting",
  description:
    "Retrofitting homes against embers and wind-driven wildfires: practical hardening strategies from RK Architect, P.A.",
});

export default function Layout({ children }) {
  return children;
}
