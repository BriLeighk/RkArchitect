import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/architecture-and-builds", {
  title: "Architecture & Builds",
  description:
    "Portfolio of multifamily, medical, custom homes, and commercial architecture by RK Architect, P.A. and RK Builders in Florida.",
});

export default function Layout({ children }) {
  return children;
}
