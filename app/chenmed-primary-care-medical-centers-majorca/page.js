"use client";
import Image from "next/image";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase'; // Adjust the path as necessary
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import Masonry from 'react-masonry-css';
import '../page.css';

export default function ChenMedPrimaryCareMedicalCentersMajorca() {
  const [imageUrls, setImageUrls] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'chenmed-majorca');
      const result = await listAll(storageRef);
      const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
      const urls = await Promise.all(urlPromises);
      setImageUrls(urls);
    };

    fetchImages();
  }, []);

  return (
    <div className="">
      <Header />

      {/* Hero Section */}
      <div className="relative isolate px-6 pt-20 lg:px-8">
        
        
        <div className="py-10 sm:py-20 lg:py-20 flex justify-center items-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#F2F4E6' }}>
              ChenMed Primary Care Medical Centers - Majorca Medical Center
            </h1>
            <em className="text-xl font-bold">Precision, Compliance, and Accessibility</em>
            <Image
              src="/chenmed-majorca.jpg"
              alt="ChenMed Majorca medical center by RK Architect, P.A."
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 672px"
              className="w-full max-w-2xl mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8 mt-10"
            />
        
            <div className=" mx-auto max-w-3xl grid grid-row-2 justify-center items-center">
              <h4 className=" text-lg mt-10 text-white"> <span className="text-[#8E784D]">✦</span> Designing medical centers requires meticulous attention to detail, especially given the stringent code requirements for healthcare facilities. In this project, precision and accuracy were essential to ensure full compliance with the numerous regulations governing medical offices.</h4>

              <h6 className=" text-lg mt-10 text-white"> <span className="text-[#8E784D]">✦</span>A key focus of the design was ensuring ADA-compliant handicap access, making the medical centers easily accessible to all patients. This thoughtful approach to accessibility, combined with a commitment to safety and compliance, resulted in a space that meets the highest standards for both functionality and patient care.
              </h6>

              <div/>
            </div>

            <a href="/architecture-and-builds">
            <IoIosArrowRoundBack className="mt-10 text-[#8E784D] text-4xl" style={{ strokeWidth: '20px' }} />
            </a>
            <div className="max-w-5xl mx-auto bg-[#1E1412] rounded-lg shadow-lg px-5 pb-4 pt-4 ">
              {imageUrls.length > 0 && (
                <Masonry
                  breakpointCols={{ default: 3, 1100: 3, 700: 3 }}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {imageUrls.map((url, index) => (
                    <Image
                      key={url}
                      src={url}
                      alt={`ChenMed Majorca project photo ${index + 1} by RK Architect, P.A.`}
                      width={1200}
                      height={900}
                      sizes="(max-width: 700px) 33vw, (max-width: 1100px) 33vw, 25vw"
                      className="h-auto rounded-lg hover:scale-105 transition-all duration-300 hover:opacity-60 cursor-pointer"
                      onClick={() => {
                        setPhotoIndex(index);
                        setIsOpen(true);
                      }}
                    />
                  ))}
                </Masonry>
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
