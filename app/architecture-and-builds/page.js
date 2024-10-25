"use client";
import Head from 'next/head'; // Import Head for SEO
import Header from '../Components/Header';
import Footer from '../Components/Footer';

export default function ArchitectureAndBuilds() {
  return (
    <div className="">
      <Head>
        <title>Architecture & Builds | Multifamily & Custom Homes | Florida Architect</title>
        <meta name="description" content="Explore our portfolio of architecture and builds, including multifamily buildings, commercial spaces, and custom homes by RK Architect, PA & RK Builders." />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-20 lg:px-8">
       
        
        <div className="py-10 sm:py-20 lg:py-20 flex justify-center items-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#F2F4E6' }}>
              Architecture & Builds
            </h1>
            <em className="text-xl font-bold text-white"> Delivering Expertise, Efficiency, and Precision to Bring Your Vision to Life</em>

            <div className="max-w-4xl mx-auto bg-[#1E1412] rounded-lg shadow-lg px-5 pb-4 ">
              <h4 className="font-bold text-lg mt-10 pt-5 text-white"> <span className="text-[#8E784D]">✦</span> Trusted Expertise, Decades of Proven Experience</h4>
              <p className="text-md text-gray-300">
                With an extensive portfolio spanning multifamily buildings, commercial spaces, and custom homes, my expertise ensures that every project is handled with the highest level of professionalism and precision. My experience in the field allows me to anticipate potential challenges and offer solutions that lead to successful outcomes.
              </p>

              <h6 className="font-bold text-lg mt-10 text-white"> <span className="text-[#8E784D]">✦</span> Optimizing Processes to Save You Time & Money</h6>
              <p className="text-md text-gray-300">
                My commitment to efficiency and streamlined processes helps you avoid unnecessary delays and costly errors. I leverage my deep industry knowledge to make smart, cost-effective decisions at every stage of your project, delivering maximum value without compromising quality.
              </p>

              <h6 className="font-bold text-lg mt-10 text-white"><span className="text-[#8E784D]">✦</span> Meticulous Attention to Every Detail</h6>
              <p className="text-md text-gray-300">
                I believe that the success of every project lies in the details. From design nuances to construction execution, I ensure that no aspect is overlooked, providing you with a finished product that meets the highest standards of quality and precision.
              </p>

              <h6 className="font-bold text-lg mt-10 text-white"><span className="text-[#8E784D]">✦</span> Turning Client Visions into Tangible Realities</h6>
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
                      alt="1100 Courtyard Home"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">1100 Courtyard Home</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Architect</p>
                  </div> 
                </div>

                {/* ChenMed Intune Small Medical Center */}
                <div className="flex justify-center items-center flex-col gap-8 mt-20">
                  <a href="/chenmed-primary-care-medical-centers-intune">
                    <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                      src="/chenmed-intune.jpg"
                      alt="ChenMed Center - Intune Small Medical Center - architecture, architect, inspections"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">ChenMed - Intune Medical Center</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Architect</p>
                  </div> 
                </div>

                {/* ChenMed Majorca Medical Center */}
                <div className="flex justify-center items-center flex-col gap-8 mt-20">
                  <a href="/chenmed-primary-care-medical-centers-majorca">
                    <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                      src="/chenmed-majorca.jpg"
                      alt="ChenMed Center - Majorca Medical Center - architecture, architect, safety inspections"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">ChenMed - Majorca Medical Center</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Architect</p>
                  </div> 
                </div>

                {/* 1130 Ongoing Project */}
                <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/1130-ongoing-project">
                    <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                      src="/1130home.jpg"
                      alt="1130 Home Design - architecture, architect, disaster resistant homes"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">1130 Home Design</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Architect & Builder</p>
                  </div> 
                </div>

                {/* 240 Codrington Ave */}
                <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/240-codrington-ave">
                    <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                      src="/240house.jpg"
                      alt="240 Codrington Ave - architecture, architect, multifamily building due-diligence inspections"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">240 Codrington Ave</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Builder</p>
                  </div> 
                </div>

                {/* Large Hotel Resort */}
                <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/islands-hotel-resort">
                    <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                      src="/islands-hotel-resort.jpg"
                      alt="Island Hotel Resort - architecture, architect, 40-50 year building safety inspections"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">Island Hotel Resort</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Architect & Builder</p>
                  </div> 
                </div>

                {/* 830 Boca House */}
                <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/830-boca-house">
                    <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                      src="/house3.jpg"
                      alt="830 Boca Raton House - architecture, architect, safety inspections"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">830 Boca Raton House</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Architect & Builder</p>
                  </div> 
                </div>

                {/* 1036 Jefferson House */}
                <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/1036-jefferson-house">
                    <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                      src="/1036-jefferson-house.jpg"
                      alt="1036 Jefferson House - architecture, architect, disaster resistant homes"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">1036 Jefferson House</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Architect & Builder</p>
                  </div> 
                </div>

                {/* 42 NE 96th Street - Miami Renovation Home */}
                <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/42-ne-miami-renovation-house">
                    <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                      src="/ne-miami-renovation-home.jpg"
                      alt="42 NE Miami Renovation Home - architecture, architect, multifamily building due-diligence inspections"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">42 NE Miami Renovation Home</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Architect & Builder</p>
                  </div> 
                </div>


                {/* Johnny's Hungry Hoagies */}
                <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/johnnys-hungry-hoagies">
                    <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                      src="/jhh.jpg"
                      alt="Johnny's Hungry Hoagies Restaurant Design - architecture, architect, multifamily building due-diligence inspections"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">Johnny's Hungry Hoagies Restaurant Design</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Architect</p>
                  </div> 
                </div>


                {/* 5309 - Ground Up Build */}
                <div className="flex justify-center items-center flex-col gap-8 mt-10">
                  <a href="/5309-ground-up-build">
                    <img 
                      className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black hover:opacity-60 transition duration-300 ease-in-out"
                      src="/5309.jpg"
                      alt="Ground Up Construction Build - Contractor - architecture, architect, multifamily building due-diligence inspections"
                    />
                  </a>
                  <div className="flex flex-col items-center text-center align-top h-[100px]">
                    <p className="text-md md:text-xl leading-6 text-gray-200">5309 Ground Up Build</p>
                    <p className="text-xs sm:text-md leading-6 text-gray-300">Builder</p>
                  </div> 
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
