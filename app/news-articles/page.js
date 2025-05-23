"use client";
import Head from 'next/head'; // Import Head for SEO
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';
import { Transition } from '@headlessui/react';

export default function NewsInsights() {
  return (
    <div className="">
      <Head>
        <title>Architecture News & Insights | Safety Inspections & Disaster-Resistant Homes</title>
        <meta name="description" content="Stay informed with RK Architect, PA & RK Builders' latest news on architecture, safety inspections, and disaster-resistant home designs." />
      </Head>

      <Header />

      {/* Hero Section */}
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

        <div className="py-32 sm:py-20 lg:py-20 flex justify-center items-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#F2F4E6' }}>
              News & Articles
            </h1>

            {/* Destination Miami */}
            <div className="flex justify-center items-center flex-col lg:flex-row gap-12 mt-20">
              <div className="relative w-[22em] h-[12em] sm:w-[32em] sm:h-[18em] lg:w-[38em] lg:h-[21em] rounded-lg border-2 border-[#936F27] shadow-lg shadow-black">
                <iframe
                  className="w-full h-full rounded-lg"
                  src="https://www.youtube.com/embed/0a6D5G30RiE?vq=hd1080"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="flex flex-row gap-8">
                <div className="flex flex-col items-center lg:items-start mt-4 text-center align-top">
                  <p className="text-2xl leading-6 text-gray-200 lg:self-start">Destination Miami</p>

                  <div className="flex flex-col items-start mt-6">
                    <div className="flex flex-row items-center">
                      <img src="/CBS4.png" alt="CBS Miami Airing" className="w-16 h-auto text-white mx-auto" />
                      <div className="flex flex-col pl-4">
                        <p className="text-lg leading-6 text-gray-100 text-left">WFOR Ch. 4 (CBS - Miami)</p>
                        <p className="text-sm leading-6 text-gray-300 text-left">Saturday, April 29th, 2023 @ 12:30 pm EST</p>
                      </div>
                    </div>
                    <div className="flex flex-row items-center mt-4">
                      <img src="/igtv.png" alt="IGTV Airing" className="w-16 h-auto text-white mx-auto" />
                      <div className="flex flex-col pl-4">
                        <p className="text-lg leading-6 text-gray-100 text-left">IGTV: Thursday</p>
                        <p className="text-sm leading-6 text-gray-300 text-left">May 4th on @interiorselfie​</p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center gap-2 max-w-[400px] mt-6">
                    <p className="text-sm leading-6 text-gray-300 lg:text-left">
                      I was honored to be featured on Destination Miami through WFOR Channel 4 (CBS - Miami) on April 29th, 2023, where my work as an architect and builder was showcased. Additionally, my feature aired on IGTV on May 4th via the popular platform @interiorselfie, alongside other notable businesses in design, events, and architecture.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            

            <div className="grid grid-cols-3 gap-8 items-center">

            {/* Retrofitting Homes to Stop Embers in Their Tracks: Lessons from California's Wildfires */}
            <div className="flex justify-center items-center flex-col gap-8 mt-20">
                <img
                  className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black opacity-100 hover:opacity-70 transition-all duration-300 cursor-pointer"
                  src="/aerial-devastation-view.jpeg"
                  alt="Aerial Devastation View"
                  onClick={() => window.location.href = '/articles/wildfire-retrofitting'}
                />
                <div className="flex flex-col items-center lg:items-start text-center align-top h-[100px] max-w-sm">
                  <p className="text-sm sm:text-md md:text-lg lg:text-xl leading-6 text-gray-200 lg:self-start text-center lg:text-left">Retrofitting Homes to Stop Embers in Their Tracks: Lessons from California's Wildfires</p>

                  <div className="">
                    <div className="flex flex-row items-start mt-4 gap-2 mx-auto">
                      <a href="/articles/wildfire-retrofitting" className="flex flex-row gap-2">
                        <p className="text-white text-md leading-6 italic underline text-[#936F27] hover:text-[#8E784D] transition-all duration-300 cursor-pointer">Read More </p>
                        <FontAwesomeIcon icon={faSquareUpRight} className="text-[#936F27] text-2xl hover:text-[#8E784D] transition-all duration-300 cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>


              {/* Fire Resistant Homes */}
              <div className="flex justify-center items-center flex-col gap-8 mt-20">
                <img
                  className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black opacity-100 hover:opacity-70 transition-all duration-300 cursor-pointer"
                  src="/construction.jpg"
                  alt="Fire Resistant Homes"
                  onClick={() => window.location.href = '/articles/build-to-resist-wildfires'}
                />
                <div className="flex flex-col items-center lg:items-start text-center align-top h-[100px] max-w-sm">
                  <p className="text-sm sm:text-md md:text-lg lg:text-xl leading-6 text-gray-200 lg:self-start text-center lg:text-left">Can We Build to Resist Extreme Wildfires & Fire Tornadoes?</p>

                  <div className="">
                    <div className="flex flex-row items-start mt-4 gap-2 mx-auto">
                      <a href="/articles/build-to-resist-wildfires" className="flex flex-row gap-2">
                        <p className="text-white text-md leading-6 italic underline text-[#936F27] hover:text-[#8E784D] transition-all duration-300 cursor-pointer">Read More </p>
                        <FontAwesomeIcon icon={faSquareUpRight} className="text-[#936F27] text-2xl hover:text-[#8E784D] transition-all duration-300 cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* 𝐁𝐮𝐢𝐥𝐭 𝐭𝐨 𝐃𝐞𝐟𝐲 𝐍𝐚𝐭𝐮𝐫𝐞’𝐬 𝐅𝐮𝐫𝐲: 𝐀 𝐇𝐨𝐦𝐞 𝐭𝐡𝐚𝐭 𝐒𝐭𝐚𝐧𝐝𝐬 𝐒𝐭𝐫𝐨𝐧𝐠 𝐢𝐧 𝐭𝐡𝐞 𝐇𝐢𝐠𝐡 𝐕𝐞𝐥𝐨𝐜𝐢𝐭𝐲 𝐇𝐮𝐫𝐫𝐢𝐜𝐚𝐧𝐞 𝐙𝐨𝐧𝐞 (𝐇𝐕𝐇𝐙) */}
              <div className="flex justify-center items-center flex-col gap-8 mt-20">
                <img
                  className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black opacity-100 hover:opacity-70 transition-all duration-300 cursor-pointer"
                  src="/FireSameHomeBuild.jpg"
                  alt="Build to Defy Nature’s Fury – A Home that Stands Strong in the High Velocity Hurricane Zone (HVHZ)"
                  onClick={() => window.location.href = '/articles/a-home-built-to-endure-hvhz'}
                />
                <div className="flex flex-col items-center lg:items-start text-center align-top h-[100px] max-w-sm">
                  <p className="text-sm sm:text-md md:text-lg lg:text-xl leading-6 text-gray-200 lg:self-start text-center lg:text-left">Engineered for Extremes – A Home Built to Endure HVHZ</p>

                  <div className="">
                    <div className="flex flex-row items-start mt-4 gap-2 mx-auto">
                      <a href="/articles/a-home-built-to-endure-hvhz" className="flex flex-row gap-2">
                        <p className="text-white text-md leading-6 italic underline text-[#936F27] hover:text-[#8E784D] transition-all duration-300 cursor-pointer">Read More </p>
                        <FontAwesomeIcon icon={faSquareUpRight} className="text-[#936F27] text-2xl hover:text-[#8E784D] transition-all duration-300 cursor-pointer" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Importance of Building Maintenance */}
              <div className="flex justify-center items-center flex-col gap-8 mt-20">
                <img
                  className="w-full max-w-sm h-auto mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black opacity-100 hover:opacity-70 transition-all duration-300 cursor-pointer"
                  src="/BuildingMaintenance.png"
                  alt="Building Maintenance"
                  onClick={() => window.location.href = '/articles/importance-of-building-maintenance'}
                />
                <div className="flex flex-col items-center lg:items-start text-center align-top h-[100px] max-w-sm">
                  <p className="text-sm sm:text-md md:text-lg lg:text-xl leading-6 text-gray-200 lg:self-start text-center lg:text-left">Building Maintenance - Key to Safe Structures</p>

                  <div className="">
                    <div className="flex flex-row items-start mt-4 gap-2 mx-auto">
                      <a href="/articles/importance-of-building-maintenance" className="flex flex-row gap-2">
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

      <Footer />
    </div>
  );
}
