import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteRight } from '@fortawesome/free-solid-svg-icons';

export default function Testimonials() {
  const [testimonials, setTestimonials] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const testimonialsPerPage = 2;

  useEffect(() => {
    const fetchTestimonials = async () => {
      const response = await fetch('/api/testimonials');
      const data = await response.json();
      setTestimonials(data.filter(testimonial => testimonial.rating === 5)); // Filter 5-star reviews
    };

    fetchTestimonials();
  }, []);

  const handlePageChange = (pageIndex) => {
    if (isAnimating) return;
    setIsAnimating(true);
    setTimeout(() => {
      setCurrentPage(pageIndex);
      setIsAnimating(false);
    }, 500); // Duration of the animation
  };

  const totalPages = Math.ceil(testimonials.length / testimonialsPerPage);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
        setIsAnimating(false);
      }, 500); // Duration of the animation
    }, 10000); // Change page every 10 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalPages]);

  return (
    <section className="relative isolate py-10 sm:py-24">
      <div className="mx-auto p-6 mx-6 lg:mx-14">
        <div className="relative mb-20">
          <h1 className="text-left p-2 text-3xl font-bold leading-8 text-white sm:text-4xl sm:leading-9">What My Clients <br /> Are Saying</h1>
          <div className="absolute -top-6 -left-4 lg:-top-8 lg:-left-8 bg-[#8E784D] text-white rounded-full h-12 w-12 lg:h-16 lg:w-16 flex items-center justify-center -z-10">
            <FontAwesomeIcon icon={faQuoteRight} />
          </div>
        </div>
        <div className="mt-8 overflow-hidden">
          <div className="flex transition-transform duration-1000" style={{ transform: `translateX(-${currentPage * 100}%)` }}>
            {Array.from({ length: totalPages }).map((_, pageIndex) => (
              <div key={pageIndex} className="flex-shrink-0 w-full grid grid-cols-1 sm:grid-cols-2 justify-center">
                {testimonials.slice(pageIndex * testimonialsPerPage, (pageIndex + 1) * testimonialsPerPage).map((testimonial, index) => (
                  <figure key={index} className="overflow-hidden relative group flex flex-col justify-start align-middle w-[80%] mx-auto">
                    <figcaption className='flex text-left'>
                      <div className="mb-4 flex flex-col">
                        <div className="font-semibold text-white text-2xl">{testimonial.name}</div>
                        <div className="text-gray-200 text-lg">{testimonial.location}</div>
                      </div>
                    </figcaption>
                    <blockquote className="text-left text-md text-gray-300 leading-5 sm:leading-6 overflow-hidden group-hover:overflow-visible group-hover:h-auto">
                      <p className="overflow-hidden text-ellipsis">{testimonial.text}</p>
                    </blockquote>
                  </figure>
                ))}
              </div>
            ))}
          </div>
        </div>
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => handlePageChange(pageIndex)}
              className={`w-2 h-2 rounded-full ${currentPage === pageIndex ? 'bg-[#8E784D]' : 'bg-transparent border border-[#936F27]'}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
