import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/240-codrington-ave", {
  title: "240 Codrington Ave",
  description:
    "Hurricane-ready residence at 240 Codrington Ave by RK Architect, P.A. and RK Builders—structural integrity and coastal design.",
});

export default function Layout({ children }) {
  return children;
}
