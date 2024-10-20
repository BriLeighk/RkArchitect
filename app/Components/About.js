import { useEffect, useRef } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutSection() {
  const videoRef = useRef(null);

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
    if (videoRef.current) {
      videoRef.current.playbackRate = 2; // Set the playback rate
    }
  }, []);

  return (
    <div className=" relative isolate py-10 sm:py-20 p-4">
      
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 mt-0">
            
        
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:max-w-none lg:pl-20 lg:grid-cols-2 mx-auto">
          <div className="">
            <div className="">
              <h1 className="text-3xl font-bold tracking-tight text-[#F2F4E6] sm:text-4xl">About Me</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              My journey to becoming an architect began in the 7th grade. I always knew I wanted to design buildings that not only stand strong but also inspire. After a challenging college application process, I was accepted into the Architecture School at Auburn University, where I earned my professional degree after 7 years of study.
                <br /> <br />
                Before graduating, I had the privilege of being recruited by the prestigious firm Jung Brannen Associates in Boston, MA. This experience laid the foundation for my career, but my true passion has always been working independently, where I can combine my skills as both an Architect and a Building Contractor. For years, I’ve had the pleasure of bringing clients' visions to life, while ensuring precision, accuracy, and efficiency throughout every project.
                <br /> <br />
                When I design, I’m not just creating something on paper—I’m constructing the entire building in my mind. This allows me to anticipate challenges and streamline the construction process, making real-time decisions and avoiding the usual back-and-forth between architects and contractors. As a result, I’m able to complete projects more efficiently, saving my clients valuable time and money.
                <br /> <br />
                Being on-site during inspections allows me to directly address questions and ensure smoother approvals, further reducing delays and costs. This hands-on approach is one of the key ways I deliver real value to my clients during construction.
                
              </p>
            </div>
          </div>
        </div>
      
        <div className="lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1 flex-col w-full flex justify-center items-center" data-aos="fade-up">
            <img src="/profile-image.png" alt="Profile of Robert Kirchgessner" className="w-[240px] sm:w-[300px] h-full object-cover rounded-sm shadow-lg shadow-black border-2 border-[#8E784D]" />
            <p className="text-white text-2xl sm:text-4xl font-bold mt-4">Robert Kirchgessner</p>
            <p className="text-gray-300 text-xl sm:text-3xl">Architect | Builder</p>
            <div className="flex flex-col text-left mt-8">
              <p className="text-gray-300 text-sm sm:text-xl text-center">Licensed Architect in the States of <br /> <span className="text-gray-300"> FL, AZ, GA, IN, KY, NC, OH, SC, & VA </span> </p>
              <p className="text-gray-300 text-sm sm:text-xl text-center mt-2">Building Contractor - <span className="text-gray-300">FL</span></p>
              
            </div>
            
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-none lg:grid-cols-2 lg:pl-20 mt-2 text-left">
          <div className="lg:pr-4">
            <div className="max-w-none text-base leading-7 text-gray-300 lg:max-none">

              <h2 className="text-2xl font-bold tracking-tight text-[#F2F4E6] lg:mt-8">My Values</h2>
              
              <p className="mt-6">
              I believe the cornerstone of great architecture is designing something the client truly loves—while exceeding their expectations. I always strive to achieve the ideal outcome without compromising any features that matter to my clients.
              <br/> <br/>
              As both an Architect and a Building Contractor, my focus is on creating structures of uncompromising strength and reliability, whether they’re residential or commercial. Living and working in South Florida’s High Velocity Hurricane Zone has only strengthened my commitment to building disaster-resistant homes that can withstand the powerful hurricanes our region faces. I specialize in designing homes capable of withstanding winds from 170 mph to 185 mph, ensuring safety and security in an increasingly unpredictable climate.
              <br /> <br />
              With natural disasters like hurricanes, tornadoes, and fires becoming more frequent and severe, it’s more important than ever to design homes that offer sanctuary—places where people feel safe and secure, both physically and emotionally.
              </p>
              <br />
              <p>
                My work includes the design and construction of multifamily buildings, such as a large-scale 490-unit hotel resort in the Caribbean, as well as restaurants, medical offices, and custom homes. Every project I undertake reflects my commitment to excellence, whether it’s a disaster-resistant home or a commercial building built for long-term success.
                </p>
            </div>

            
          </div>

          
        </div>
      </div>
    </div>
  )
}
