import Header from "../Components/Header";
import Footer from "../Components/Footer";
import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/privacy-policy", {
  title: "Privacy Policy",
  description:
    "How RK Architect, P.A. collects, uses, and protects personal information submitted through this website and related communications.",
});

export default function PrivacyPolicyPage() {
  return (
    <div>
      <Header />
      <main className="relative isolate px-6 pb-24 pt-28 lg:px-8">
        <div className="mx-auto max-w-3xl text-gray-300">
          <h1 className="text-4xl font-bold tracking-tight text-[#F2F4E6]">Privacy Policy</h1>
          <p className="mt-2 text-sm text-gray-500">Effective date: May 1, 2026</p>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Introduction</h2>
            <p>
              RK Architect, P.A. (“we,” “our,” or “us”) respects your privacy. This policy explains how information may be collected and used when you visit{" "}
              <span className="text-gray-200">robertkarchitect.com</span> or contact us through the site.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Information you provide</h2>
            <p>
              If you submit a contact form, schedule a meeting, or email us, we may receive your name, email address, phone number, project details, and other information you choose to include. We use this information to respond to inquiries and to provide professional services when an engagement is formed.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Analytics and cookies</h2>
            <p>
              We may use third-party analytics tools that set cookies or similar technologies to understand how visitors use the site (for example, aggregated traffic statistics). Those providers process data under their own policies.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Security</h2>
            <p>
              We take reasonable measures to protect information submitted through the site. No method of transmission over the Internet is completely secure; we encourage you not to send highly sensitive personal information by email unless appropriate for your situation.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Retention</h2>
            <p>
              We retain communications for as long as needed to respond to requests, manage client matters consistent with professional obligations, and meet applicable legal requirements.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Your choices</h2>
            <p>
              You may contact us to request access, correction, or deletion of personal information where applicable law provides such rights. We will respond consistent with legal and professional responsibilities.
            </p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Updates</h2>
            <p>We may update this policy from time to time. The effective date at the top of this page will change when revisions are posted.</p>
          </section>

          <section className="mt-10 space-y-4">
            <h2 className="text-xl font-semibold text-white">Contact</h2>
            <p>
              Questions about this policy may be directed to RK Architect, P.A. using the contact information shown in the site footer and on the{" "}
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
