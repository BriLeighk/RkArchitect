import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="relative flex flex-row items-center">
        <div className="text-[#8E784D] text-left p-4 text-xs pt-8"> @ 2022 RK Architect, PA</div>

        <div className="absolute inset-0 flex justify-center items-center gap-4 z-10">
          <a href="mailto:rkarchitect24@gmail.com">
            <FaEnvelope className="text-[#8E784D] text-lg sm:text-xl md:text-2xl hover:text-[#936F27] transition-all duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rkarchitect" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#8E784D] text-lg sm:text-xl md:text-2xl hover:text-[#936F27] transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com/robertkarchitect/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#8E784D] text-lg sm:text-xl md:text-2xl hover:text-[#936F27] transition-all duration-300" />
          </a>
        </div>
      </div>
    </footer>
  );
}