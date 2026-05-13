"use client";
import About from "./Components/About";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Header from "./Components/Header";
import Contacts from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Gallery from "./Components/Gallery";
import HeroCrossfade from "./Components/HeroCrossfade";
import { getContactMailtoHref } from "./lib/contact-email";

export default function Home() {
  const images = ["/hero-image.png", "/interior.jpg", "/interior2.jpg"];

  return (
    <div className="">
      <Header />

      <div className=" relative isolate px-6 pt-20 lg:px-8 z-[10]">
        <div className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-20" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: "#FFFFFF" }}>
              RK Architect, P.A. <br /> <span className="text-3xl text-gray-300">RK Builders, Inc. </span>
            </h1>
            <div className="relative mx-auto mt-10 rounded-sm border-2 border-[#8E784D] shadow-lg shadow-black overflow-hidden">
              <HeroCrossfade
                images={images}
                duration={2000}
                timingFunction="ease-in-out"
                style={{
                  width: "100%",
                  height: "auto",
                }}
                alt="RK Architect, P.A. — disaster-resistant architecture and interiors in Florida"
              />
            </div>

            <div className="flex justify-center items-center mt-4 gap-4">
              <a href={getContactMailtoHref()} aria-label="Email us">
                <FaEnvelope className="text-[#8E784D] text-3xl hover:text-[#936F27] transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/rkarchitect" target="_blank" rel="noopener noreferrer">
                <FaLinkedin className="text-[#8E784D] text-3xl hover:text-[#936F27] transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/rkarchitectpa/" target="_blank" rel="noopener noreferrer">
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
