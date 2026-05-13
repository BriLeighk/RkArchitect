import Link from "next/link";
import { absoluteUrl } from "../lib/site";

/**
 * Accessible breadcrumbs + BreadcrumbList JSON-LD.
 * @param {{ name: string, href: string }[]} items
 */
export default function Breadcrumbs({ items, className = "" }) {
  if (!items?.length) return null;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: absoluteUrl(item.href),
    })),
  };

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <nav aria-label="Breadcrumb" className={`mx-auto max-w-4xl px-4 pb-4 pt-32 sm:pt-36 lg:px-8 ${className}`}>
        <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-gray-400">
          {items.map((item, i) => (
            <li key={`${item.href}-${i}`} className="flex items-center gap-2">
              {i > 0 ? <span aria-hidden="true" className="text-gray-600">/</span> : null}
              {i === items.length - 1 ? (
                <span className="font-medium text-gray-200">{item.name}</span>
              ) : (
                <Link href={item.href} className="text-[#8E784D] underline-offset-2 hover:text-[#C4A574] hover:underline">
                  {item.name}
                </Link>
              )}
            </li>
          ))}
        </ol>
      </nav>
    </>
  );
}
