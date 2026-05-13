import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/5309-ground-up-build", {
  title: "5309 Ground-Up Build",
  description:
    "Ground-up construction project led by RK Architect, P.A. and RK Builders with coordinated design and field execution.",
});

export default function Layout({ children }) {
  return children;
}
