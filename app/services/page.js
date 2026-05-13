import Link from "next/link";
import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Breadcrumbs from "../Components/Breadcrumbs";
import { SERVICE_SLUGS, SERVICES } from "../lib/service-pages";
import { createPageMetadata } from "../lib/site-metadata";

export const metadata = createPageMetadata("/services", {
  title: "Architecture Services | RK Architect, P.A.",
  description:
    "Explore RK Architect, P.A. services: multifamily and condominium design, amenity renovations, code and ADA support, medical offices, custom homes, and inspection-related architectural support.",
});

export default function ServicesIndexPage() {
  return (
    <div>
      <Header />
      <Breadcrumbs items={[{ name: "Home", href: "/" }, { name: "Services", href: "/services" }]} />
      <main className="relative isolate px-6 pb-24 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-[#F2F4E6] sm:text-5xl">Services</h1>
          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-gray-300">
            Select a service to see who it is for, how work typically proceeds, typical deliverables, and timeline expectations. When you are ready to discuss your project, use the contact section on the homepage.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-4xl rounded-lg border border-[#8E784D]/20 bg-[#1E1412] px-6 py-8 shadow-lg shadow-black/40 sm:px-10">
          <ul className="space-y-6 text-left">
            {SERVICE_SLUGS.map((slug) => {
              const s = SERVICES[slug];
              return (
                <li key={slug} className="border-b border-white/5 pb-6 last:border-0 last:pb-0">
                  <Link href={`/services/${slug}`} className="text-lg font-semibold text-[#8E784D] transition hover:text-[#C4A574] hover:underline">
                    {s.h1}
                  </Link>
                  <p className="mt-2 text-sm leading-relaxed text-gray-400">{s.metaDescription}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </main>
      <Footer />
    </div>
  );
}
