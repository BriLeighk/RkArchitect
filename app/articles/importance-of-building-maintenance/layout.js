import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata("/articles/importance-of-building-maintenance", {
  title: "Building Maintenance Matters",
  description:
    "Why proactive building maintenance prevents costly repairs and protects occupants—insights from RK Architect, P.A.",
});

export default function Layout({ children }) {
  return children;
}
