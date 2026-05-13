import { useState, useEffect } from "react";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faQuoteRight } from "@fortawesome/free-solid-svg-icons";

function CaseStudyCard({ testimonial }) {
  const projectType = testimonial.projectType?.trim();
  const challenge = testimonial.challenge?.trim();
  const role = testimonial.role?.trim();
  const outcome = testimonial.outcome?.trim();
  const rkRole = testimonial.rkRole?.trim();

  return (
    <article className="flex h-full flex-col rounded-lg border border-[#8E784D]/30 bg-[#1E1412]/80 p-6 shadow-lg shadow-black">
      <div className="mb-4 flex flex-col gap-1 border-b border-white/10 pb-4">
        {projectType ? (
          <p className="text-xs font-semibold uppercase tracking-wide text-[#8E784D]">{projectType}</p>
        ) : null}
        <h3 className="text-xl font-semibold text-white">{testimonial.name}</h3>
        {testimonial.location ? <p className="text-sm text-gray-400">{testimonial.location}</p> : null}
        {role ? <p className="text-sm text-gray-300">Role: {role}</p> : null}
      </div>

      {challenge ? (
        <div className="mb-3">
          <p className="text-xs font-semibold uppercase text-gray-500">Context</p>
          <p className="text-sm leading-6 text-gray-300">{challenge}</p>
        </div>
      ) : null}

      {rkRole ? (
        <div className="mb-3">
          <p className="text-xs font-semibold uppercase text-gray-500">RK Architect&apos;s role</p>
          <p className="text-sm leading-6 text-gray-300">{rkRole}</p>
        </div>
      ) : null}

      {outcome ? (
        <div className="mb-4">
          <p className="text-xs font-semibold uppercase text-gray-500">Outcome</p>
          <p className="text-sm leading-6 text-gray-300">{outcome}</p>
        </div>
      ) : null}

      <figure className="mt-auto">
        <blockquote className="text-left text-sm leading-6 text-gray-300">
          <p>{testimonial.text}</p>
        </blockquote>
        <figcaption className="mt-3 text-xs text-gray-500">Client perspective</figcaption>
      </figure>
    </article>
  );
}

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsPerPage = 2;

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch("/api/testimonials");
      const data = await response.json();
      setTestimonials(data.filter((t) => t.rating === 5));
    };

    fetchTestimonials();
  }, []);

  useEffect(() => {
    setCurrentPage(0);
  }, [testimonials.length]);

  const handlePageChange = (pageIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setIsAnimating(false);
    }, 500);
  };

  const totalPages = testimonials.length ? Math.ceil(testimonials.length / testimonialsPerPage) : 0;

  useEffect(() => {
    if (testimonials.length === 0 || totalPages <= 1) return undefined;
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        setIsAnimating(false);
      }, 500);
    }, 10000);

    return () => clearInterval(interval);
  }, [totalPages, testimonials.length]);

  return (
    <section className="relative isolate py-10 sm:py-24" aria-labelledby="case-studies-heading">
      <div className="mx-auto p-6 lg:mx-14">
        <div className="relative mb-12">
          <h2 id="case-studies-heading" className="p-2 text-left text-3xl font-bold leading-8 text-white sm:text-4xl sm:leading-9">
            Client stories
            <span className="mt-2 block text-lg font-normal text-gray-400">Selected feedback presented as short case-style highlights. Optional fields appear when provided.</span>
          </h2>
          <div className="absolute -left-4 -top-6 -z-10 flex h-12 w-12 items-center justify-center rounded-full bg-[#8E784D] text-white lg:-left-8 lg:-top-8 lg:h-16 lg:w-16">
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
        </div>

        {testimonials.length === 0 ? (
          <p className="text-center text-gray-400">Client highlights will appear here when available.</p>
        ) : (
          <>
            <div className="mt-8 overflow-hidden">
              <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
                {Array.from({ length: totalPages }).map((_, pageIndex) => (
                  <div key={pageIndex} className="grid w-full flex-shrink-0 grid-cols-1 justify-center gap-8 sm:grid-cols-2">
                    {testimonials.slice(pageIndex * testimonialsPerPage, (pageIndex + 1) * testimonialsPerPage).map((t) => (
                      <CaseStudyCard key={t.id || `${t.name}-${pageIndex}`} testimonial={t} />
                    ))}
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-6 flex justify-center space-x-2">
              {totalPages > 1
                ? Array.from({ length: totalPages }).map((_, pageIndex) => (
                    <button
                      key={pageIndex}
                      type="button"
                      aria-label={`Go to testimonial page ${pageIndex + 1}`}
                      onClick={() => handlePageChange(pageIndex)}
                      className={`h-2 w-2 rounded-full ${currentPage === pageIndex ? "bg-[#8E784D]" : "border border-[#936F27] bg-transparent"}`}
                    />
                  ))
                : null}
            </div>
          </>
        )}
        <p className="mt-10 text-center text-sm text-gray-400">
          Explore{" "}
          <Link href="/services" className="font-medium text-[#8E784D] underline-offset-2 hover:underline">
            architecture services
          </Link>{" "}
          to see how RK Architect, P.A. supports common South Florida project types.
        </p>
      </div>
    </section>
  );
}
