import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/islands-hotel-resort", {
  title: "Islands Hotel Resort",
  description:
    "Islands Hotel Resort by RK Architect, P.A. and RK Builders: earthquake-ready and hurricane-resistant hospitality design.",
});

export default function Layout({ children }) {
  return children;
}
