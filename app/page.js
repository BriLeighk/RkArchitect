"use client";
import Head from 'next/head'; // Import Head for SEO
import About from "./Components/About";
import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Header from "./Components/Header";
import Contacts from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Gallery from "./Components/Gallery";
import {useState, useEffect} from 'react';
import CrossfadeImage from 'react-crossfade-image';

export default function Home() {
  const images = ["/hero-image.png", "/interior.jpg", "/interior2.jpg"];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 12000); // Change image every 10 seconds

    return () => clearInterval(interval);
  }, [images.length]);
  
  return (
    <div className="">
      <Head>
        <title>RK Architect, PA | RK Builders, Inc. -  | Disaster Resistant Homes & Inspections | Florida Architect</title>
        <meta name="description" content="Discover RK Architect, PA & RK Builders, expert in disaster-resistant homes, multifamily building inspections, and safety compliance in Florida and many other states." />
      </Head>

      <style jsx>{`
        @keyframes zoomInOut {
          0%, 100% {
            transform: scale(1);
          }
          50% {
            transform: scale(1.1);
          }
        }
      `}</style>
      <Header />

      {/* Hero Section */}
      <div className=" relative isolate px-6 pt-20 lg:px-8 z-[10]">
        
        <div className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-20" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#FFFFFF' }}>
              RK Architect, PA <br /> <span className="text-3xl text-gray-300">RK Builders, Inc. </span> 
            </h1>
            <div className="relative mx-auto mt-10 rounded-sm border-2 border-[#8E784D] shadow-lg shadow-black overflow-hidden">
              <CrossfadeImage
                src={images[currentImageIndex]}
                duration={2000} // Duration of the crossfade
                timingFunction="ease-in-out"
                style={{
                  animation: 'zoomInOut 10s',
                  width: '100%',
                  height: 'auto',
                }} // Apply the zoom effect directly as inline styles
                alt="RK Architects - architecture, architect, disaster resistant homes"
              />
            </div>

            <div className="flex justify-center items-center mt-4 gap-4">
              <a href="mailto:rkarchitect24@gmail.com">
                <FaEnvelope className="text-[#8E784D] text-3xl hover:text-[#936F27] transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/rkarchitect" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#8E784D] text-3xl hover:text-[#936F27] transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/robertkarchitect/" target="_blank" rel="noopener noreferrer">
                <FaInstagram className="text-[#8E784D] text-3xl hover:text-[#936F27] transition-all duration-300" />
              </a>
            </div>
            
          </div>
        </div>
      </div>

      <div id="about" className="z-[-10]">
        <About />
      </div>
      <div id="gallery">
        <Gallery />
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
