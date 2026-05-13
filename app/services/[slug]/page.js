import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "../../Components/Header";
import Footer from "../../Components/Footer";
import Breadcrumbs from "../../Components/Breadcrumbs";
import { SERVICES, SERVICE_SLUGS } from "../../lib/service-pages";
import { createPageMetadata } from "../../lib/site-metadata";

export function generateStaticParams() {
  return SERVICE_SLUGS.map((slug) => ({ slug }));
}

export function generateMetadata({ params }) {
  const data = SERVICES[params.slug];
  if (!data) return {};
  return createPageMetadata(`/services/${params.slug}`, {
    title: data.metaTitle,
    description: data.metaDescription,
  });
}

function SectionTitle({ children }) {
  return (
    <h2 className="flex items-start gap-2 text-left text-xl font-bold text-white sm:text-2xl">
      <span className="mt-0.5 shrink-0 text-[#8E784D]" aria-hidden>
        ✦
      </span>
      <span>{children}</span>
    </h2>
  );
}

export default function ServiceDetailPage({ params }) {
  const data = SERVICES[params.slug];
  if (!data) notFound();

  return (
    <div>
      <Header />
      <Breadcrumbs
        items={[
          { name: "Home", href: "/" },
          { name: "Services", href: "/services" },
          { name: data.h1, href: `/services/${params.slug}` },
        ]}
      />
      <article className="relative isolate px-6 pb-24 lg:px-8">
        <header className="mx-auto max-w-4xl px-2 text-center sm:px-4">
          <h1 className="text-4xl font-bold tracking-tight text-[#F2F4E6] sm:text-5xl">{data.h1}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">{data.intro}</p>
        </header>

        <div className="mx-auto mt-12 max-w-4xl rounded-lg border border-[#8E784D]/20 bg-[#1E1412] px-5 py-10 shadow-lg shadow-black/40 sm:px-8 sm:py-12">
          <div className="space-y-10">
            <section className="border-b border-white/5 pb-10">
              <SectionTitle>Who this is for</SectionTitle>
              <p className="mt-4 text-left text-base leading-7 text-gray-300">{data.forWho}</p>
            </section>

            <section className="border-b border-white/5 pb-10">
              <SectionTitle>Process</SectionTitle>
              <ul className="mt-6 space-y-4 text-left">
                {data.process.map((step) => (
                  <li key={step} className="flex gap-3 text-gray-300">
                    <span className="mt-1 shrink-0 text-[#8E784D]" aria-hidden>
                      ✦
                    </span>
                    <span className="leading-7">{step}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section className="border-b border-white/5 pb-10">
              <SectionTitle>Typical deliverables</SectionTitle>
              <ul className="mt-6 space-y-3 text-left">
                {data.deliverables.map((d) => (
                  <li key={d} className="flex gap-3 text-gray-300">
                    <span className="mt-1 shrink-0 text-[#8E784D]" aria-hidden>
                      ✦
                    </span>
                    <span className="leading-7">{d}</span>
                  </li>
                ))}
              </ul>
            </section>

            <section>
              <SectionTitle>Timeline expectations</SectionTitle>
              <p className="mt-4 text-left text-base leading-7 text-gray-300">{data.timeline}</p>
            </section>
          </div>
        </div>

        <div className="mx-auto mt-14 max-w-2xl rounded-lg border border-[#8E784D]/30 bg-[#1E1412]/60 px-6 py-8 text-center shadow-inner shadow-black/20">
          <p className="text-lg text-gray-200">Ready to talk through scope, schedule, and next steps?</p>
          <Link
            href="/#contact"
            className="mt-6 inline-flex items-center justify-center rounded-md border-2 border-[#8E784D] bg-transparent px-8 py-3 text-sm font-semibold text-white transition hover:bg-[#8E784D] hover:text-[#1E1412]"
          >
            Contact RK Architect, P.A.
          </Link>
        </div>
      </article>
      <Footer />
    </div>
  );
}
