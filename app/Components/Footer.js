import { FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa';

export default function Footer() {
  return (
    <footer>
      <div className="bg-[#1E1412] relative grid grid-cols-3 items-center">
        <div className="text-[#8E784D] text-left p-4 text-xs pt-8"> @ 2022 RK Architect, PA</div>

        <div className="grid grid-cols-3 gap-4 justify-items-center justify-self-center">
          <a href="mailto:rkarchitect24@gmail.com">
            <FaEnvelope className=" text-[#8E784D] text-lg sm:text-xl md:text-2xl hover:text-[#936F27] transition-all duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rkarchitect" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-[#8E784D] text-lg sm:text-xl md:text-2xl hover:text-[#936F27] transition-all duration-300" />
          </a>
          <a href="https://www.instagram.com/robertkarchitect/" target="_blank" rel="noopener noreferrer">
            <FaInstagram className="text-[#8E784D] text-lg sm:text-xl md:text-2xl hover:text-[#936F27] transition-all duration-300" />
          </a>
        </div>


          <div className="gap-4 text-[#8E784D] text-left p-4 text-xs pt-8 hover:text-[#936F27] transition-all overflow-hidden">
            <a href="https://www.linkedin.com/in/brileighk/" target="_blank" rel="noopener noreferrer">
            <p className="whitespace-wrap text-center">Designed & Developed by Bri Kirchgessner</p>            
            </a>
            
          </div>
      </div>
    </footer>
  );
}