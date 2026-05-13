"use client";
import Link from "next/link";
import About from "./Components/About";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import Header from "./Components/Header";
import Contacts from "./Components/Contact";
import Testimonials from "./Components/Testimonials";
import Gallery from "./Components/Gallery";
import HeroCrossfade from "./Components/HeroCrossfade";
import { getContactMailtoHref } from "./lib/contact-email";
import CalFloatingButton from "./Components/CalFloatingButton";
import FAQ from "./Components/FAQ";

const heroSlides = [
  {
    src: "/hero-image.png",
    alt: "Architectural rendering and exterior design for a South Florida residential project by RK Architect, P.A.",
  },
  {
    src: "/interior.jpg",
    alt: "Interior architecture, materials, and lighting in a Florida residence by RK Architect, P.A.",
  },
  {
    src: "/interior2.jpg",
    alt: "High-rise condominium amenity renovation and interior architecture by RK Architect, P.A.",
  },
];

const servicePillClass =
  "inline-flex items-center justify-center rounded-full border border-[#8E784D]/45 bg-[#1E1412]/90 px-2 py-1 text-xs font-medium text-[#E8DCC8] shadow-sm shadow-black/30 transition duration-200 hover:border-[#8E784D] hover:bg-[#261916] hover:text-[#F2F4E6] hover:shadow-md hover:shadow-black/40 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#8E784D]";

export default function Home() {
  return (
    <div className="">
      <Header />

      <div className=" relative isolate px-6 pt-20 lg:px-8 z-[10]">
        <div className="mx-auto max-w-2xl py-10 sm:py-20 lg:py-20" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: "#FFFFFF" }}>
              RK Architect, P.A. <br /> <span className="text-3xl text-gray-300">RK Builders, Inc. </span>
            </h1>

            <p className="mx-auto mt-4 max-w-2xl text-md leading-8 text-gray-300">
              RK Architect, P.A. is a South Florida architecture practice led by Robert Kirchgessner, a licensed Architect and Florida Licensed Building Contractor.
            </p>

            <div className="relative mx-auto mt-8 overflow-hidden rounded-sm border-2 border-[#8E784D] shadow-lg shadow-black">
              <HeroCrossfade images={heroSlides} duration={2000} timingFunction="ease-in-out" zoomDurationSec={10} />
            </div>

            

            <p className="mx-auto mt-8 max-w-2xl text-md leading-8 text-gray-300">
              The firm works on multifamily, condominium, medical, commercial, hospitality, custom residential, and existing-building renovation projects, with a strong focus on code compliance, life safety, ADA accessibility, constructability, and hurricane-resistant design.
            </p>

            

            

            <div className="mt-10 flex items-center justify-center gap-4">
              <a href={getContactMailtoHref()} aria-label="Email us">
                <FaEnvelope className="text-[#8E784D] text-3xl hover:text-[#936F27] transition-all duration-300" />
              </a>
              <a href="https://www.linkedin.com/in/rkarchitect" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="text-[#8E784D] text-3xl hover:text-[#936F27] transition-all duration-300" />
              </a>
              <a href="https://www.instagram.com/rkarchitectpa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
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
      <div id="faq">
        <FAQ />
      </div>
      <div id="testimonials">
        <Testimonials />
      </div>
      <div id="contact">
        <Contacts />
      </div>
      <CalFloatingButton />
    </div>
  );
}
