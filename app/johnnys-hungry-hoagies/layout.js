import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/johnnys-hungry-hoagies", {
  title: "Johnny's Hungry Hoagies",
  description:
    "Restaurant architecture for Johnny's Hungry Hoagies by RK Architect, P.A.: branding, flow, and efficient kitchen planning.",
});

export default function Layout({ children }) {
  return children;
}
