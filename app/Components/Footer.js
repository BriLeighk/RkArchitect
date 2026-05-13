import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { getContactMailtoHref } from "../lib/contact-email";

const year = new Date().getFullYear();

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#1E1412] relative grid grid-cols-3 items-center">
        <div className="text-[#8E784D] text-left p-4 text-xs pt-8">
          © {year} RK Architect, P.A.
        </div>

        <div className="grid grid-cols-3 gap-4 justify-items-center justify-self-center">
          <a href={getContactMailtoHref()} aria-label="Email us">
            <FaEnvelope className=" text-[#8E784D] text-lg sm:text-xl md:text-2xl hover:text-[#936F27] transition-all duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rkarchitect" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#8E784D] text-lg sm:text-xl md:text-2xl hover:text-[#936F27] transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com/rkarchitectpa/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#8E784D] text-lg sm:text-xl md:text-2xl hover:text-[#936F27] transition-all duration-300" />
          </a>
        </div>

        <div className="gap-4 text-[#8E784D] text-left p-4 text-xs pt-8 hover:text-[#936F27] transition-all overflow-hidden">
          <a href="https://shop.brianaleighstudio.com" target="_blank" rel="noopener noreferrer">
            <p className="whitespace-wrap text-center">Designed &amp; Developed by Briana Leigh Studio</p>
          </a>
        </div>
      </div>
    </footer>
  );
}
