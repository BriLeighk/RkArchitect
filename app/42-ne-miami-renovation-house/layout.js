import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/42-ne-miami-renovation-house", {
  title: "NE Miami Renovation",
  description:
    "Custom renovation in Northeast Miami by RK Architect, P.A. and RK Builders—functional layout and refined architectural detail.",
});

export default function Layout({ children }) {
  return children;
}
