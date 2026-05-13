import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/1100-courtyard-home", {
  title: "1100 Courtyard Home",
  description:
    "Courtyard-centered custom home by RK Architect, P.A. and RK Builders: indoor-outdoor flow and refined Florida living.",
});

export default function Layout({ children }) {
  return children;
}
