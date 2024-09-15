"use client";

import About from "./Components/About";
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Header from "./Components/Header";
import Contacts from "./Components/Contact";
import Testimonials from "./Components/Testimonials";

export default function Home() {

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
        <div className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-20" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#F2F4E6' }}>
              RK Architect, PA <br /> <span className="text-3xl">RK Builders, Inc. </span> 
            </h1>
            <img src="/hero-image.png" alt="RK Architects" className="mx-auto mt-10 rounded-lg border-2 border-[#936F27] shadow-lg shadow-black" />

            <div className="flex justify-center items-center mt-4 gap-4">
              <a href="mailto:rkarchitect24@gmail.com">
                <FaEnvelope className="text-white text-3xl hover:text-[#936F27] transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/rkarchitect" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-white text-3xl hover:text-[#936F27] transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/robertkarchitect/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-white text-3xl hover:text-[#936F27] transition-all duration-300" />
              </a>
            </div>
            
          </div>
        </div>
      </div>

      <div id="about">
        <About />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contacts />
      </div>
    </div>
  );
}
