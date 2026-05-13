import Link from "next/link";
import { FaInstagram, FaLinkedin, FaEnvelope } from "react-icons/fa";
import { getContactMailtoHref } from "../lib/contact-email";

const COPYRIGHT_YEAR = 2026;
const LAST_UPDATED_LABEL = "May 2026";

export default function Footer() {
  return (
    <footer className="border-t border-[#8E784D]/20 bg-[#1E1412]">
      <div className="mx-auto max-w-6xl px-4 py-10">
        <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-10 text-center md:flex-row md:items-start md:justify-center md:gap-12 lg:gap-16">
          <div className="flex w-full max-w-[280px] flex-col items-center md:items-stretch md:text-left">
            <p className="text-[#8E784D] font-semibold tracking-wide">RK Architect, P.A.</p>
            <p className="mt-2 text-sm text-gray-400">Fort Lauderdale, Florida</p>
            <p className="mt-1 text-sm text-gray-400">Last updated: {LAST_UPDATED_LABEL}</p>
            <p className="mt-3 text-xs text-gray-500">© {COPYRIGHT_YEAR} RK Architect, P.A. All rights reserved.</p>
          </div>

          <nav aria-label="Legal and policies" className="flex w-full max-w-[280px] flex-col items-center gap-2 text-sm text-gray-300 md:items-center">
            <span className="mb-1 text-xs font-medium uppercase tracking-wide text-gray-500">Policies</span>
            <Link href="/privacy-policy" className="hover:text-[#8E784D]">
              Privacy Policy
            </Link>
            <Link href="/terms" className="hover:text-[#8E784D]">
              Terms of Use
            </Link>
            <Link href="/accessibility" className="hover:text-[#8E784D]">
              Accessibility
            </Link>
            <Link href="/services" className="hover:text-[#8E784D]">
              Services
            </Link>
          </nav>

          <div className="flex w-full max-w-[280px] flex-col items-center gap-3 md:items-stretch md:text-left">
            <span className="text-xs font-medium uppercase tracking-wide text-gray-500">Connect</span>
            <div className="flex justify-center gap-4 md:justify-start">
              <a href={getContactMailtoHref()} aria-label="Email RK Architect, P.A." className="text-[#8E784D] hover:text-[#936F27]">
                <FaEnvelope className="text-2xl" />
              </a>
              <a href="https://www.linkedin.com/in/rkarchitect" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="text-[#8E784D] hover:text-[#936F27]">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="https://www.instagram.com/rkarchitectpa/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-[#8E784D] hover:text-[#936F27]">
                <FaInstagram className="text-2xl" />
              </a>
            </div>
          </div>
        </div>

        <div className="mx-auto mt-10 max-w-5xl border-t border-white/5 pt-6 text-center">
          <a href="https://shop.brianaleighstudio.com" target="_blank" rel="noopener noreferrer" className="text-xs text-[#8E784D] hover:text-[#936F27]">
            Designed &amp; Developed by Briana Leigh Studio
          </a>
        </div>
      </div>
    </footer>
  );
}
