import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import '../page.css';

export default function GallerySection() {

  return (
    <div className=" relative isolate py-20 lg:py-32 z-[10]">
      
      
      <div className="grid max-w-2xl lg:max-w-5xl mx-auto px-8 justify-items-center grid-cols-3 gap-y-4 gap-x-10 lg:gap-x-28 mt-0">
        {/* First Row */}
        <div></div> {/* Empty cell */}
        <div className="text-center text-gray-300">
          "The work of art does not represent; rather it presents; it brings something into presence."
          <div className="text-sm text-gray-500">Martin Heidegger</div>
        </div>
        <div></div> {/* Empty cell */}

        {/* Second Row */}
        <div className="relative group">
          <img src="/sculpture1.jpeg" alt="The Artistic sculpture" className="w-full h-full object-cover shadow-lg shadow-black border-[0.5px] border-[#8E784D]" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="p-4 text-xs sm:text-sm leading-tight sm:leading-normal overflow-y-auto max-h-full custom-scrollbar">
              "The Artistic" - This piece captures the interplay of structure and elevation, reflecting the duality of stability and aspiration. It invites contemplation on the boundaries and extensions of human creativity.
            </p>
          </div>
        </div>
        <div className="relative group">
          <img src="/sculpture2.jpeg" alt="Stone sculpture" className="w-full h-full object-cover shadow-lg shadow-black border-[0.5px] border-[#8E784D]" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="p-4 text-xs sm:text-sm leading-tight sm:leading-normal overflow-y-auto max-h-full custom-scrollbar">
              "Stone" - This sculpture embodies the contrast between smoothness and texture, symbolizing the harmony of simplicity and complexity. It reflects the enduring nature of existence through its timeless form.
            </p>
          </div>
        </div>
        <div className="relative group">
          <img src="/sculpture3.jpg" alt="The Archaic sculpture" className="w-full h-full object-cover shadow-lg shadow-black border-[0.5px] border-[#8E784D]" />
          <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            <p className="p-4 text-xs sm:text-sm leading-tight sm:leading-normal overflow-y-auto max-h-full custom-scrollbar">
              "The Archaic" - This artwork evokes a sense of nostalgia and introspection, capturing the essence of a lived-in space. It explores the intersection of comfort and discomfort, inviting viewers to ponder the passage of time and memory.
            </p>
          </div>
        </div>

        {/* Third Row */}
        <blockquote className="text-center text-gray-300 text-sm sm:text-base">
          "All of a sudden he will catch sight of something wonderfully beautiful in its nature."
          <div className="text-xs sm:text-sm text-gray-500">Plato, The Symposium</div>
        </blockquote>
        <div></div> {/* Empty cell */}
        <blockquote className="text-center text-gray-300 text-sm sm:text-base">
          "Great things are done by a series of small things brought together."
          <div className="text-xs sm:text-sm text-gray-500">Vincent Van Gogh</div>
        </blockquote>
      </div>
    </div>
  )
}
