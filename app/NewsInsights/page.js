"use client";
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Header from '../Components/Header';

export default function NewsInsights() {

  return (
    <div className="">
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-6xl pt-0" style={{ color: '#F2F4E6' }}>
              News & Insights
            </h1>
            <div className="flex justify-center items-center flex-col lg:flex-row gap-12 mt-20">
            <iframe 
                  width="560" 
                  height="315" 
                  src="https://www.youtube.com/embed/0a6D5G30RiE" 
                  title="YouTube video player" 
                  frameBorder="0" 
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                  allowFullScreen
                  className="mx-auto rounded-lg border-2 border-white"
                ></iframe>
                <div className="flex flex-col items-center lg:items-start mt-4 text-center align-top">
                    <p className="text-2xl leading-6 text-gray-200 lg:self-start">Destination Miami</p>
                    
                    <div className="flex flex-col items-start mt-8">
                        <div className="flex flex-row items-center">
                            <img src="/CBS4.png" alt="Airing" className="w-16 h-auto text-white mx-auto" />
                            <div className="flex flex-col pl-4">
                                <p className="text-lg leading-6 text-gray-100 text-left">WFOR Ch. 4 (CBS - Miami)</p>
                                <p className="text-sm leading-6 text-gray-300 text-left">Saturday, April 29th, 2023 @ 12:30 pm EST</p>
                            </div>
                        </div>
                        <div className="flex flex-row items-center mt-4">
                            <img src="/igtv.png" alt="Airing" className="w-16 h-auto text-white mx-auto" />
                            <div className="flex flex-col pl-4">
                                <p className="text-lg leading-6 text-gray-100 text-left">IGTV: Thursday</p>
                                <p className="text-sm leading-6 text-gray-300 text-left">May 4th on @interiorselfie​</p>
                            </div>
                        </div>

                    </div>
                    
                    
                </div>
                

            </div>
            
          </div>
        </div>
      </div>

    </div>
  );
}
