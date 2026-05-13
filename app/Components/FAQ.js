const FAQ_ITEMS = [
  {
    q: "Do I need an architect for a renovation or addition?",
    a: "Often yes, when work affects structure, egress, occupancy, or the envelope. Sealed drawings and code coordination help avoid rework during permitting and construction.",
  },
  {
    q: "Can RK Architect help with permitting?",
    a: "Yes—construction documents, plan review responses, and clarifications through construction are part of typical engagements.",
  },
  {
    q: "Does RK Architect handle condo and multifamily projects?",
    a: "Yes, including associations, owners, and developers on renovations, repositioning, and new work—often phased in occupied buildings.",
  },
  {
    q: "Does RK Architect support 40-year or 50-year milestone inspection programs?",
    a: "Rules vary by locality and building type. The practice can align architectural documentation with your engineer and counsel when those programs apply—ask during a consultation.",
  },
  {
    q: "What makes an architect-builder different?",
    a: "Design and field experience in one place tends to mean details that build well—and faster answers when questions come up on site.",
  },
  {
    q: "What goes into hurricane-resistant design?",
    a: "Wind pressures, openings and protection, connections, water intrusion at openings, and durable materials—scaled to your site, products, and the code edition for your permit.",
  },
];

export default function FAQ() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQ_ITEMS.map((item) => ({
      "@type": "Question",
      name: item.q,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.a,
      },
    })),
  };

  return (
    <section className="relative isolate py-16 sm:py-24" aria-labelledby="faq-heading">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <h2 id="faq-heading" className="text-center text-3xl font-bold tracking-tight text-white sm:text-4xl">
          Frequently asked questions
        </h2>
        <p className="mt-4 text-center text-gray-400">
          Short answers to common questions about working with the practice.
        </p>
        <div className="mt-10 space-y-3">
          {FAQ_ITEMS.map((item) => (
            <details
              key={item.q}
              className="group overflow-hidden rounded-lg border border-[#8E784D]/25 bg-[#1E1412]/90 shadow-md shadow-black/20 transition-colors open:border-[#8E784D]/45"
            >
              <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-4 py-4 text-left text-base font-semibold text-[#F2F4E6] marker:content-none [&::-webkit-details-marker]:hidden">
                <span className="pr-2">{item.q}</span>
                <span className="shrink-0 text-[#8E784D] transition-transform duration-200 group-open:rotate-180" aria-hidden>
                  ▼
                </span>
              </summary>
              <div className="border-t border-white/5 px-4 pb-4 pt-1">
                <p className="text-sm leading-relaxed text-gray-300 sm:text-base sm:leading-7">{item.a}</p>
              </div>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
