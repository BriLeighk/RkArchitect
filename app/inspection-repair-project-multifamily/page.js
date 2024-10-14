"use client";
import Head from 'next/head'; // Import Head for SEO
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase'; // Adjust the path as necessary
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { IoIosArrowRoundBack } from "react-icons/io";

export default function InspectionRepairProjectMultifamilyBuilding() {
  const [imageUrls, setImageUrls] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'inspection-and-repair-multifamily-building');
      const result = await listAll(storageRef);
      const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
      const urls = await Promise.all(urlPromises);
      setImageUrls(urls);
    };

    fetchImages();
  }, []);

  return (
    <div className="bg-[#140D0C]">
      <Head>
        <title>Inspection & Repair Project of Multifamily Building | RK Architect, PA & RK Builders</title>
        <meta name="description" content="Comprehensive safety inspection and tailored repair solution for structural and electrical integrity in multifamily buildings." />
        <link rel="canonical" href="https://robertkarchitect.com/inspection-repair-project-multifamily" />
        <meta name="robots" content="index, follow" />
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}`}></script>
        <script>
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID}');
          `}
        </script>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Inspection & Repair Project of Multifamily Building",
            "description": "Comprehensive safety inspection and tailored repair solution for structural and electrical integrity in multifamily buildings.",
            "url": "https://robertkarchitect.com/inspection-repair-project-multifamily",
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

      <Header />

      {/* Hero Section */}
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
        
        <div className="py-10 sm:py-20 lg:py-20 flex justify-center items-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#F2F4E6' }}>
              Inspection & Repair Project of Multifamily Building
            </h1>
            <em className="text-xl font-bold"> Comprehensive Safety Inspection and Tailored Repair Solution for Structural and Electrical Integrity</em>
            <img src="/InspectionAndRepairMF.jpg" alt="Inspection and Repair" className="w-full max-w-2xl mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8 mt-10" />
        
            <div className=" mx-auto max-w-3xl grid grid-cols-2 justify-center items-center">
              <h4 className="font-bold text-lg mt-10 text-white"> <span className="text-[#8E784D]">✦</span> Structural & Electrical Safety Inspection</h4>

              <h6 className="font-bold text-lg mt-10 text-white"> <span className="text-[#8E784D]">✦</span> Required Repair Specifications & Protocol</h6>

              <div/>
            </div>

            <a href="/inspections-and-repairs">
            <IoIosArrowRoundBack className="mt-10 text-[#8E784D] text-4xl" style={{ strokeWidth: '20px' }} />
            </a>
            <div className="max-w-5xl mx-auto bg-[#1E1412] rounded-lg shadow-lg px-5 pb-4 pt-4 ">
              {imageUrls.length > 0 && (
                <>
                  <div className="grid grid-cols-4 gap-4 items-center">
                    {imageUrls.slice(0, 4).map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Image ${index + 1}`}
                        className="h-auto rounded-lg hover:scale-105 transition-all duration-300 hover:opacity-60 cursor-pointer"
                        onClick={() => {
                          setPhotoIndex(index);
                          setIsOpen(true);
                        }}
                      />
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-4 items-center mt-4">
                    {imageUrls.slice(4).map((url, index) => (
                      <img
                        key={index + 4}
                        src={url}
                        alt={`Image ${index + 5}`}
                        className="h-auto rounded-lg hover:scale-105 transition-all duration-300 hover:opacity-60 cursor-pointer"
                        onClick={() => {
                          setPhotoIndex(index + 4);
                          setIsOpen(true);
                        }}
                      />
                    ))}
                  </div>
                </>
              )}
            </div>
            {isOpen && (
              <Lightbox
                mainSrc={imageUrls[photoIndex]}
                nextSrc={imageUrls[(photoIndex + 1) % imageUrls.length]}
                prevSrc={imageUrls[(photoIndex + imageUrls.length - 1) % imageUrls.length]}
                onCloseRequest={() => setIsOpen(false)}
                onMovePrevRequest={() =>
                  setPhotoIndex((photoIndex + imageUrls.length - 1) % imageUrls.length)
                }
                onMoveNextRequest={() =>
                  setPhotoIndex((photoIndex + 1) % imageUrls.length)
                }
              />
            )}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}