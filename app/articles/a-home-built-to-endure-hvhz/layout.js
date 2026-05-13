import { createPageMetadata } from "../../lib/site-metadata";

export const metadata = createPageMetadata("/articles/a-home-built-to-endure-hvhz", {
  title: "A Home Built to Endure HVHZ",
  description:
    "Designing and building a home for Florida's High Velocity Hurricane Zone: impact glazing, pressures, and details.",
});

export default function Layout({ children }) {
  return children;
}
