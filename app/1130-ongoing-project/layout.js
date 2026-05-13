import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/1130-ongoing-project", {
  title: "1130 Hurricane-Resistant Home",
  description:
    "Custom hurricane-resistant home design by RK Architect, P.A. and RK Builders for extreme wind and debris protection.",
});

export default function Layout({ children }) {
  return children;
}
