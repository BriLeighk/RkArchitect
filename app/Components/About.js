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
    <div className="py-10 sm:py-20 p-4">
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10 mt-0">
        
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:grid lg:w-full lg:max-w-none lg:pl-20 lg:grid-cols-2 mx-auto">
          <div className="">
            <div className="">
              <h1 className="text-3xl font-bold tracking-tight text-[#F2F4E6] sm:text-4xl">About Me</h1>
              <p className="mt-6 text-lg leading-8 text-gray-300">
              I wanted to be an architect since the 7th grade. After applying to colleges my senior year in 
              high school, it took me 2 years and a semester to just get accepted into Architecture School at 
              Auburn University. After 7 years, and a semester, I graduated with a professional degree in Architecture.
                <br /> <br />
              Prior to graduation, I was recruited by a prestigious firm in Boston, MA, Jung Brannen Associates. 
              After leaving Boston, I practiced independently as an Architect and Building Contractor ever since.
                <br /> <br />
              I have always been fascinated by the idea of designing buildings, focusing on details, precision and accuracy, 
              and seeing my creation become a reality. When I design, I build the structure in my mind. When I build a home 
              or building that I designed, the process is efficient, as I can make decisions on the fly and avoid the dynamics 
              that occur between contractors & architects, requests for information, delays in waiting for information, etc.
                <br /> <br />
              Being on the job site during inspections, I often can respond to an inspector’s questions with information, 
              sign offs, etc., that results in a higher percentage of approved inspections. This capability saves a client 
              much time and expense during construction.
                
              </p>
            </div>
          </div>
        </div>
      
        <div className="lg:sticky lg:top-32 lg:col-start-2 lg:row-span-2 lg:row-start-1 flex-col w-full flex justify-center items-center" data-aos="fade-up">
            <img src="/profile-image.jpg" alt="about" className="w-[240px] sm:w-[300px] h-full object-cover rounded-lg shadow-lg border-2 border-[#F2F4E6]" />
            <p className="text-white text-2xl sm:text-4xl font-bold mt-4">Robert Kirchgessner</p>
            <p className="text-gray-300 text-xl sm:text-3xl">Architect | Builder</p>
            <div className="flex flex-col text-left mt-8">
              <p className="text-gray-300 text-sm sm:text-xl text-center">Licensed Architect in the States of <br /> FL, AZ, GA, IN, KY, NC, OH, SC, & VA</p>
              <p className="text-gray-300 text-sm sm:text-xl text-center mt-2">Building Contractor - FL</p>
            </div>
            
        </div>

        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-none lg:grid-cols-2 lg:pl-20 mt-2 text-center">
          <div className="lg:pr-4">
            <div className="max-w-none text-base leading-7 text-gray-300 lg:max-none">
              <h2 className="text-2xl font-bold tracking-tight text-[#F2F4E6]">My Values</h2>
              <p className="mt-6">
              One of the most important things for me is to design something the client loves, and exceed their expectations 
              on what is possible. It is always best to strive for the ideal, without having to compromise any feature the client desires. 
              <br/> <br/>
              As an Architect & Building Contractor, my focus has always been designing & building 
              for residential or commercial purposes, of uncompromising strength and reliability. 
              Practicing primarily in South Florida (the High Velocity Hurricane Zone) is a 
              perfect fit, since buildings here are disaster resistant – designed to withstand 170 
              mph to 185 mph Hurricanes.
              <br /> <br />
              As Hurricanes, Tornadoes, Fires, etc., become more common and intense, it is vital 
              that buildings, especially a person’s home, is designed and built to withstand natural disasters.
              A person’s home is their sanctuary, to feel secure, and safe, emotionally and physically.
              <br /> <br />
              My project portfolio includes the design and/or construction of multifamily buildings 
              (a large-scale 490 Unit Hotel Resort in the Caribbean Islands), restaurants, large medical 
              offices, and custom homes.
              </p>
            </div>
          </div>

          
        </div>
      </div>
    </div>
  )
}