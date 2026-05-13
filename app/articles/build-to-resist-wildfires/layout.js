import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata("/articles/build-to-resist-wildfires", {
  title: "Build to Resist Wildfires",
  description:
    "Can homes resist extreme wildfires and fire tornadoes? RK Architect, P.A. on construction choices and community risk.",
});

export default function Layout({ children }) {
  return children;
}
