import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/terms", {
  title: "Terms of Use",
  description: "Terms governing use of the RK Architect, P.A. website and informational content.",
});

export default function TermsPage() {
  return (
    <div>
      <Header />
      <main className="relative isolate px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-gray-300">
          <h1 className="text-4xl font-bold tracking-tight text-[#F2F4E6] mt-16">Terms of Use</h1>
          <p className="mt-2 text-sm text-gray-500">Effective date: May 1, 2026</p>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Agreement</h2>
            <p>
              By accessing this website, you agree to these Terms of Use. If you do not agree, please discontinue use of the site.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Informational use</h2>
            <p>
              Content on this site is provided for general information about RK Architect, P.A. and its services. It does not constitute architectural, engineering, legal, or other professional advice for your specific project. A formal engagement and appropriate consultants are required before design or construction decisions are made.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">No warranty</h2>
            <p>
              We strive for accuracy, but the site is provided &quot;as is&quot; without warranties of any kind, express or implied, including fitness for a particular purpose. Images, descriptions, and project lists may be summarized and are not a complete record of services or qualifications.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Intellectual property</h2>
            <p>
              Text, graphics, logos, and photography displayed on the site are owned by RK Architect, P.A. or used with permission. You may not copy, reproduce, or redistribute site content for commercial purposes without prior written consent.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Links</h2>
            <p>
              Links to third-party sites are provided for convenience. We are not responsible for the content or practices of third-party websites.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Limitation of liability</h2>
            <p>
              To the fullest extent permitted by law, RK Architect, P.A. and its principals shall not be liable for any indirect, incidental, special, consequential, or punitive damages arising from your use of the site.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Governing law</h2>
            <p>
              These terms are governed by the laws of the State of Florida, without regard to conflict-of-law principles. Venue for any dispute shall lie in courts located in Broward County, Florida, unless otherwise required by law.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p>
              For questions about these terms, please use the{" "}
              <a href="/#contact" className="text-[#8E784D] underline-offset-2 hover:underline">
                Contact
              </a>{" "}
              section.
            </p>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
