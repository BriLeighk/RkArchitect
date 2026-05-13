import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/submit-feedback-form", {
  title: "Submit Feedback",
  description:
    "Share feedback or a testimonial for RK Architect, P.A. and RK Builders. Your experience helps improve our services.",
});

export default function Layout({ children }) {
  return children;
}
