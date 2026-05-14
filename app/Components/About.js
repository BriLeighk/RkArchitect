import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image from 'next/image';

export default function AboutSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    if (videoRef.current) {
      videoRef.current.playbackRate = 2;
    }
  }, []);

  return (
    <div className=" relative isolate py-10 sm:py-20 p-4">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 mt-0">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:max-w-none lg:pl-20 lg:grid-cols-2 mx-auto">
          <div className="">
            <div className="">
              <h2 className="text-3xl font-bold tracking-tight text-[#F2F4E6] sm:text-4xl">About Me</h2>
              <p className="mt-6 text-lg leading-8 text-gray-300">
                My journey to becoming an architect began in the 7th grade. I always knew I wanted to design buildings that not only stand strong but also inspire. After a challenging college application process, I was accepted into the Architecture School at Auburn University, where I earned my professional degree after 7 years of study.
                <br /> <br />
                Before graduating, I had the privilege of being recruited by the prestigious firm Jung Brannen Associates in Boston, MA. This experience laid the foundation for my career, but my true passion has always been working independently, where I can combine my skills as both an Architect and a Building Contractor. For years, I&apos;ve had the pleasure of bringing clients&apos; visions to life while ensuring precision, accuracy, and efficiency throughout every project.
                <br /> <br />
                When I design, I&apos;m not just creating something on paper. I&apos;m constructing the entire building in my mind. This allows me to anticipate challenges, streamline the construction process, make real-time decisions, and reduce the usual back-and-forth between architects and contractors. As a result, I&apos;m able to help projects move more efficiently, saving clients valuable time and money.
                <br /> <br />
                Being on-site during inspections allows me to directly address questions and support smoother approvals, further reducing delays and costs. This hands-on approach is one of the key ways I deliver real value to my clients during construction.
              </p>
            </div>
          </div>
        </div>

        <div className="lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1 flex-col w-full flex justify-center items-center" data-aos="fade-up">
        <p className="text-white text-2xl sm:text-4xl font-bold mt-4">Robert Kirchgessner</p>
        <p className="text-gray-300 text-xl sm:text-3xl">Architect | Builder</p>

          <Image
            src="/profile-image.png"
            alt="Robert Kirchgessner, architect and owner of RK Architect, P.A."
            width={600}
            height={750}
            sizes="(max-width: 640px) 240px, 300px"
            className="h-auto w-[240px] max-w-full mt-8 rounded-sm border-2 border-[#8E784D] object-cover shadow-lg shadow-black sm:w-[300px]"
          />
          
          <div className="flex flex-col text-left mt-8">
            <p className="text-gray-300 text-md sm:text-xl text-center font-bold mb-2">
              Licensed Architect in the States of <br /> <span className="text-gray-300 italic"> FL, GA, VA, NC, & SC </span>
            </p>
            <p className="text-gray-300 text-sm sm:text-lg text-center mt-2">
              Florida Registered Architect - <span className="text-gray-300 italic">AR91920</span><br/>
              Florida Licensed Building Contractor - <span className="text-gray-300 italic">CBC060255</span><br/>
              NCARB Certificate - <span className="text-gray-300 italic">57615</span>
            </p>
          </div>
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-none lg:grid-cols-2 lg:pl-20 mt-2 text-left">
          <div className="lg:pr-4">
            <div className="max-w-none text-base leading-7 text-gray-300 lg:max-none">
              <h2 className="text-2xl font-bold tracking-tight text-[#F2F4E6] lg:mt-8">My Values</h2>

              <p className="mt-6">
                I believe the cornerstone of great architecture is designing something the client truly loves while exceeding their expectations. I always strive to achieve the ideal outcome without compromising the features that matter most to my clients.
                <br /> <br />
                As both an Architect and a Building Contractor, my focus is on creating structures of uncompromising strength and reliability, whether residential or commercial. Living and working in South Florida&apos;s High Velocity Hurricane Zone has strengthened my commitment to designing disaster-resistant homes and buildings that respond to the realities of our region.
                <br /> <br />
                With natural disasters like hurricanes, tornadoes, and fires becoming more frequent and severe, it is more important than ever to design buildings that offer safety, durability, and peace of mind.
              </p>
              <p className="mt-6">
                My work includes the design and construction of multifamily buildings, a large-scale 490-unit hotel resort in the Caribbean, restaurants, medical offices, custom homes, and complex renovations. Every project reflects my commitment to excellence, whether it is a disaster-resistant home or a commercial building designed for long-term success.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
