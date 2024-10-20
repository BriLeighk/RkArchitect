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

export default function SunAndLakeMultifamilyInspectionRepair() {
  const [imageUrls, setImageUrls] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'sun-and-lake-inspection-repair');
      const result = await listAll(storageRef);
      const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
      const urls = await Promise.all(urlPromises);
      setImageUrls(urls);
    };

    fetchImages();
  }, []);

  return (
    <div className="">
      <Head>
        <title>Sun & Lake Multifamily Inspection & Repair | RK Architect, PA & RK Builders</title>
        <meta name="description" content="Comprehensive safety inspection and tailored repair solution for structural and electrical integrity in multifamily buildings." />
      </Head>

      <Header />

      {/* Hero Section */}
      <div className=" relative isolate px-6 pt-20 lg:px-8">
       
        
        <div className="py-10 sm:py-20 lg:py-20 flex justify-center items-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#F2F4E6' }}>
              Sun & Lake Multifamily Inspection & Repair Project
            </h1>
            <em className="text-xl font-bold"> Comprehensive Safety Inspection and Tailored Repair Solution for Structural and Electrical Integrity</em>
            <img src="/SunAndLakeMF.jpg" alt="Sun & Lake Multifamily Inspection & Repair - architecture, architect, multifamily building due-diligence inspections" className="w-full max-w-2xl mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8 mt-10" />
        
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
                        alt={`Sun & Lake Image ${index + 1} - architecture, architect, safety inspections`}
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
                        alt={`Sun & Lake Image ${index + 5} - architecture, architect, 40-50 year building safety inspections`}
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
