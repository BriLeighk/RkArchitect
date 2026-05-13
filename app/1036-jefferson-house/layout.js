import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/1036-jefferson-house", {
  title: "1036 Jefferson House",
  description:
    "Jefferson personal residence by RK Architect, P.A. and RK Builders: tailored design and craftsmanship for family living.",
});

export default function Layout({ children }) {
  return children;
}
