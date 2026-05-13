import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/news-articles", {
  title: "News & Articles",
  description:
    "Updates on disaster-resistant design, multifamily inspections, wildfire and hurricane resilience from RK Architect, P.A.",
});

export default function Layout({ children }) {
  return children;
}
