"use client";
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';


export default function ArchitectureAndBuilds() {

  return (
    <div className="bg-[#140D0C]">
      <Header />


      {/* Hero Sectidon */}
      <div className="relative isolate px-6 pt-20 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:top-0"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#302a18] to-[#5A3A2F] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          />
        </div>
        
        <div className="py-10 sm:py-20 lg:py-20 flex justify-center items-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#F2F4E6' }}>
              Architecture & Builds
            </h1>
            <em className="text-xl font-bold"> Delivering Expertise, Efficiency, and Precision to Bring Your Vision to Life</em>

            <div className="max-w-4xl mx-auto bg-[#1E1412] rounded-lg shadow-lg px-5 pb-4 ">
              <h4 className="font-bold text-lg mt-10 pt-5 text-white"> <span className="text-[#8E784D]">✦</span> Trusted Expertise, Decades of Proven Experience</h4>
              <p className="text-md text-gray-300">
              With an extensive portfolio spanning multifamily buildings, commercial spaces, and custom homes, my expertise ensures that every project is handled with the highest level of professionalism and precision. My experience in the field allows me to anticipate potential challenges and offer solutions that lead to successful outcomes.
              </p>

              <h6 className="font-bold text-lg mt-10 text-white"> <span className="text-[#8E784D]">✦</span> Optimizing Processes to Save You Time & Money</h6>
              <p className="text-md text-gray-300">
              My commitment to efficiency and streamlined processes helps you avoid unnecessary delays and costly errors. I leverage my deep industry knowledge to make smart, cost-effective decisions at every stage of your project, delivering maximum value without compromising quality.
              </p>

              <h6 className="font-bold text-lg mt-10 text-whites"><span className="text-[#8E784D]">✦</span> Meticulous Attention to Every Detail</h6>
              <p className="text-md text-gray-300">
              I believe that the success of every project lies in the details. From design nuances to construction execution, I ensure that no aspect is overlooked, providing you with a finished product that meets the highest standards of quality and precision.
              </p>

              <h6 className="font-bold text-lg mt-10 text-whites"><span className="text-[#8E784D]">✦</span> Turning Client Visions into Tangible Realities</h6>
              <p className="text-md text-gray-300">
              Understanding and capturing your vision is at the core of what I do. I work closely with my clients to transform their ideas into beautiful, functional spaces that reflect their unique needs and preferences. My goal is to exceed expectations, delivering a final result that aligns with your vision.
              </p>


            
              <div className="grid grid-cols-3 gap-8 items-center">
                
              {/* 1100 Courtyard Home */}
              <div className="flex justify-center items-center flex-col gap-8 mt-20">
                  <a href="/1100-courtyard-home">
                    <img 
                        className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                        src="/hero-image.png"
                    ></img>
                  </a>
                  <div className="flex flex-col items-center lg:items-start text-center align-top h-[100px]">
                      <p className="text-md md:text-xl leading-6 text-gray-200 lg:self-start text-center lg:text-left">1100 Courtyard Home</p>
                      <p className="text-xs sm:text-md leading-6 text-gray-300 lg:self-start text-center">Architect</p>
                      
                      
                  </div> 
              </div>


              {/* ChenMed Primary Care Medical Centers */}
              <div className="flex justify-center items-center flex-col gap-8 mt-20">
                  <a href="/chenmed-primary-care-medical-centers">
                    <img 
                        className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                        src="/chenmed-center.jpg"
                    ></img>
                  </a>
                  <div className="flex flex-col items-center lg:items-start text-center align-top h-[100px]">
                      <p className="text-md md:text-xl leading-6 text-gray-200 lg:self-start text-center lg:text-left">ChenMed Centers</p>
                      <p className="text-xs sm:text-md leading-6 text-gray-300 lg:self-start text-center">Architect</p>
                      
                      
                  </div> 
              </div>


              {/* 1130 Ongoing Project */}
              <div className="flex justify-center items-center flex-col gap-8 mt-20">
                  <a href="/1130-ongoing-project">
                    <img 
                        className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                        src="/1130.jpg"
                    ></img>
                  </a>
                  <div className="flex flex-col items-center lg:items-start text-center align-top h-[100px]">
                      <p className="text-md md:text-xl leading-6 text-gray-200 lg:self-start text-center lg:text-left">1130 Home Design</p>
                      <p className="text-xs sm:text-md leading-6 text-gray-300 lg:self-start text-center">Architect & Builder</p>
                      
                      
                  </div> 
              </div>


              {/* 240 Codrington Ave */}
              <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/240-codrington-ave">
                    <img 
                        className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                        src="/240-codrington-ave.jpg"
                    ></img>
                  </a>
                  <div className="flex flex-col items-center lg:items-start text-center align-top h-[100px]">
                      <p className="text-md md:text-xl leading-6 text-gray-200 lg:self-start text-center lg:text-left">240 Codrington Ave</p>
                      <p className="text-xs sm:text-md leading-6 text-gray-300 lg:self-start text-center">Builder</p>
                      
                      
                  </div> 
              </div>

              {/* Large Hotel Resort */}
              <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/islands-hotel-resort">
                    <img 
                        className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                        src="/islands-hotel-resort.jpg"
                    ></img>
                  </a>
                  <div className="flex flex-col items-center lg:items-start text-center align-top h-[100px]">
                      <p className="text-md md:text-xl leading-6 text-gray-200 lg:self-start text-center lg:text-left">Island Hotel Resort</p>
                      <p className="text-xs sm:text-md leading-6 text-gray-300 lg:self-start text-center">Architect & Builder</p>
                      
                      
                  </div> 
              </div>

              {/* 830 Boca House */}
              <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/830-boca-house">
                    <img 
                        className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                        src="/830-boca-house.jpg"
                    ></img>
                  </a>
                  <div className="flex flex-col items-center lg:items-start text-center align-top h-[100px]">
                      <p className="text-md md:text-xl leading-6 text-gray-200 lg:self-start text-center lg:text-left">830 Boca Raton House</p>
                      <p className="text-xs sm:text-md leading-6 text-gray-300 lg:self-start text-center">Architect & Builder</p>
                  </div> 
              </div>

            </div>
            </div>

          </div>
        </div>
      </div>


      

     < Footer />

    </div>
  );
}
