import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/accessibility", {
  title: "Accessibility Statement",
  description: "Accessibility commitment and options for visitors using assistive technologies on the RK Architect, P.A. website.",
});

export default function AccessibilityPage() {
  return (
    <div>
      <Header />
      <main className="relative isolate px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-gray-300">
          <h1 className="text-4xl font-bold tracking-tight text-[#F2F4E6]">Accessibility Statement</h1>
          <p className="mt-2 text-sm text-gray-500">Last reviewed: May 2026</p>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Our commitment</h2>
            <p>
              RK Architect, P.A. aims to provide a website that is welcoming and usable for the widest audience, including people who rely on assistive technologies. We work toward conformance with the Web Content Accessibility Guidelines (WCAG) 2.1 Level AA as a practical target, recognizing that accessibility is an ongoing effort.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">What we focus on</h2>
            <ul className="list-disc space-y-2 pl-5">
              <li>Clear page structure with headings and landmarks where feasible.</li>
              <li>Text alternatives for meaningful images and appropriate labeling for controls.</li>
              <li>Sufficient color contrast for primary text and interactive elements.</li>
              <li>Keyboard access for navigation and forms.</li>
            </ul>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Third-party tools</h2>
            <p>
              Some features (for example, embedded maps, scheduling widgets, or analytics) are provided by third parties. Their accessibility behavior may vary. If a third-party experience blocks you from completing a task, please reach out and we will do our best to provide an alternate path.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Feedback</h2>
            <p>
              If you encounter a barrier on this site, please tell us the page, the assistive technology you use (if any), and what you were trying to do. We take feedback seriously and will work to provide a reasonable improvement or workaround where we can.
            </p>
            <p>
              Contact us through the{" "}
              <a href="/#contact" className="text-[#8E784D] underline-offset-2 hover:underline">
                Contact
              </a>{" "}
              section or the phone number listed in the site footer.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
