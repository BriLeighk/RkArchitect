"use client";

import Link from "next/link";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1 flex flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <p className="text-sm font-semibold uppercase tracking-widest text-[#8E784D]">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight text-white sm:text-5xl">Page not found</h1>
        <p className="mt-6 max-w-md text-lg text-gray-300">
          The link may be broken or the page may have been moved. Return home to explore architecture, inspections, and
          resilient design.
        </p>
        <Link
          href="/"
          className="mt-10 inline-flex items-center justify-center rounded-sm border-2 border-[#8E784D] px-8 py-3 text-base font-semibold text-white transition-all duration-300 hover:border-[#1E1412] hover:bg-[#8E784D] hover:text-[#1E1412]"
        >
          Back to home
        </Link>
      </main>
      <Footer />
    </div>
  );
}
