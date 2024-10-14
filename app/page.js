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
        <title>RK Architect, PA | RK Builders, Inc. - Disaster Resistant Homes</title>
        <meta name="description" content="Robert Kirchgessner - Architect & Builder specializing in disaster-resistant homes, multifamily building inspections, and more." />
        <link rel="canonical" href="https://robertkarchitect.com" /> 
        <meta name="robots" content="index, follow" />
        
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-LFC9D8DQT9"></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());

            gtag('config', 'G-LFC9D8DQT9');
          `}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "RK Architect, PA & RK Builders",
            "description": "RK Architect, PA & RK Builders - Innovative architectural designs and construction solutions.",
            "url": "https://robertkarchitect.com",
            "publisher": {
              "@type": "Organization",
              "name": "RK Architect, PA & RK Builders",
              "logo": {
                "@type": "ImageObject",
                "url": "https://robertkarchitect.com/rk-architect-logo.jpg"
              }
            }
          })}
        </script>
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
      <div className="bg-[#140D0C] relative isolate px-6 pt-20 lg:px-8 z-[10]">
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
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#FFFFFF' }}>
              RK Architect, PA <br /> <span className="text-3xl text-gray-300">RK Builders, Inc. </span> 
            </h1>
            <h2 className="text-3xl font-bold tracking-tight text-[#F2F4E6] sm:text-4xl">Disaster Resistant Homes & Inspections</h2>
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
                alt="RK Architects"
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
