"use client";
import Head from 'next/head'; // Import Head for SEO
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

export default function InspectionsAndRepairs() {
  return (
    <div className="">
      <Head>
        <title>Inspections and Repairs | RK Architect, PA & RK Builders</title>
        <meta name="description" content="Comprehensive inspections and repair solutions for multifamily buildings. Ensure safety, compliance, and investment security." />
      </Head>

      <Header />


      <div className="relative isolate px-6 pt-20 lg:px-8">
        
        
        <div className="py-10 sm:py-20 lg:py-20 flex justify-center items-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#F2F4E6' }}>
              Multifamily Inspections & Safety Repairs
            </h1>
            <em className="text-xl font-bold"> Ensuring Safety, Compliance, and Long-Term Investment Success</em>

            <div className="max-w-4xl mx-auto bg-[#1E1412] rounded-lg shadow-lg px-5 pb-14 sm:pb-8 min-h-auto overflow-visible">
              <h4 className="font-bold text-lg mt-10 pt-5 text-white"> <span className="text-[#8E784D]">✦</span> Comprehensive Structural & Electrical Building Safety Inspections</h4>
              <p className="text-md text-gray-300">
              With decades of hands-on experience in inspecting multifamily buildings, I provide in-depth structural and electrical safety inspections to ensure your property complies with the highest safety standards. My inspections identify both visible and hidden issues to safeguard your investment from unexpected risks.
              </p>

              <h6 className="font-bold text-lg mt-10 text-white"> <span className="text-[#8E784D]">✦</span> Detailed Repair Specifications & Protocols</h6>
              <p className="text-md text-gray-300">
              After conducting thorough inspections, I specify the exact repair protocols needed to meet building codes and ensure structural integrity. I create customized solutions, offering guidance for every step—from repair recommendations to working with trusted contractors—to ensure long-term durability and safety for residents.
              </p>

              <h6 className="font-bold text-lg mt-10 text-whites"><span className="text-[#8E784D]">✦</span> Investment Security & Profitability</h6>
              <p className="text-md text-gray-300">
              I don't just focus on safety; I help you find multifamily properties that are safe, compliant, and primed to generate exceptional returns. My experience in building, inspecting, and assessing multifamily structures allows me to provide valuable insights into finding investments with minimal risk and maximum potential.
              </p>


              <div className="grid grid-cols-2 gap-8 items-center">

              {/* Inspection & Repair MF Building */}
              <div className="flex justify-center items-center flex-col gap-8 mt-20">
                  <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black opacity-100 hover:opacity-70 transition-all duration-300 cursor-pointer"
                      src="/InspectionAndRepairMF.jpg"
                      alt="Inspection and Repair Project of Multifamily Building - architecture, architect, safety inspections"
                      onClick={() => window.location.href = '/inspection-repair-project-multifamily'}
                  ></img>
                  <div className="flex flex-col items-start align-top h-[100px] max-w-sm">
                      <p className="text-lg sm:text-xl leading-6 text-gray-200 self-start text-left">Inspection & Repair of Multifamily Building</p>
                      
                      <div className="">
                      <div className="flex flex-row items-start mt-4 gap-2 mx-auto">
                      <a href="/inspection-repair-project-multifamily" className="flex flex-row gap-2">
                              <p className="text-white text-md leading-6 italic underline text-[#936F27] hover:text-[#8E784D] transition-all duration-300 cursor-pointer">Read More </p>
                              <FontAwesomeIcon icon={faSquareUpRight} className="text-[#936F27] text-2xl hover:text-[#8E784D] transition-all duration-300 cursor-pointer" />
                          </a>
                          
                      </div>

                      </div>
                  </div> 
              </div>


              {/* Sun & Lake MF Repair */}
              <div className="flex justify-center items-center flex-col gap-8 mt-20">
                  <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black opacity-100 hover:opacity-70 transition-all duration-300 cursor-pointer"
                      src="/SunAndLakeMF.jpg"
                      alt="Sun & Lake Multifamily Inspection & Repair - architecture, architect, multifamily building due-diligence inspections"
                      onClick={() => window.location.href = '/sun-and-lake-multifamily-inspection-repair'}
                  ></img>
                  <div className="flex flex-col items-start align-top h-[100px] max-w-sm">
                      <p className="text-lg sm:text-xl leading-6 text-gray-200 self-start text-left">Sun & Lake Multifamily Inspection & Repair</p>
                      
                      <div className="">
                      <div className="flex flex-row items-start mt-4 gap-2 mx-auto">
                          
                          <a href="/sun-and-lake-multifamily-inspection-repair" className="flex flex-row gap-2">
                              <p className="text-white text-md leading-6 italic underline text-[#936F27] hover:text-[#8E784D] transition-all duration-300 cursor-pointer">Read More </p>
                              <FontAwesomeIcon icon={faSquareUpRight} className="text-[#936F27] text-2xl hover:text-[#8E784D] transition-all duration-300 cursor-pointer" />
                          </a>
                          
                      </div>

                      </div>
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
