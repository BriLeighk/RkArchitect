import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/architecture-and-builds", {
  title: "Architecture & Builds",
  description:
    "Multifamily, medical, custom, and commercial Florida work by RK Architect, P.A. and RK Builders.",
});

export default function Layout({ children }) {
  return children;
}
