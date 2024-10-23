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
import Masonry from 'react-masonry-css';
import '../page.css';

export default function CourtyardHome() {
  const [imageUrls, setImageUrls] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, '5309');
      const result = await listAll(storageRef);
      const urlPromises = result.items.map((imageRef) => getDownloadURL(imageRef));
      const urls = await Promise.all(urlPromises);
      setImageUrls(urls);
    };

    fetchImages();
  }, []);

  return (
    <>
      <div className="">
        <Header />

        {/* Hero Section */}
        <div className="relative isolate px-6 pt-20 lg:px-8">
          
          
          <div className="py-10 sm:py-20 lg:py-20 flex justify-center items-center" data-aos="fade-up">
            <div className="text-center">
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl pt-0" style={{ color: '#F2F4E6' }}>
                5309 - Ground Up Build
              </h1>
              <h2 className="text-xl font-bold">Seamless Execution, Inspection Success, and Investment Maximization</h2>
              <img src="/5309.jpg" alt="Ground Up Construction Build - Contractor -  by  RK Architect and Builder - architecture, architect, multifamily building due-diligence inspections" className="w-full max-w-2xl mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8 mt-10" />
            
              <div className=" mx-auto max-w-3xl grid grid-row-2 justify-center items-center">
                <h4 className=" text-lg mt-10 text-white">
                  <span className="text-[#8E784D]">✦</span> Constructing a building from the ground up requires more than just technical expertise—it's about ensuring a seamless process from start to finish. As both an architect and contractor, I specialize in managing every detail to keep your project on track. My focus isn't on being in the spotlight; it's on making sure your project runs smoothly, passes inspections, and maximizes your investment. This approach ensures a successful build that meets all your expectations.
                </h4>

                <div/>
              </div>

              <a href="/architecture-and-builds">
                <IoIosArrowRoundBack className="mt-10 text-[#8E784D] text-4xl" style={{ strokeWidth: '20px' }} />
              </a>
              <div className="max-w-5xl mx-auto bg-[#1E1412] rounded-lg shadow-lg px-5 pb-4 pt-4 ">
                {imageUrls.length > 0 && (
                  <Masonry
                    breakpointCols={{ default: 4, 1100: 4, 700: 3 }}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column"
                  >
                    {imageUrls.map((url, index) => (
                      <img
                        key={index}
                        src={url}
                        alt={`Architect and Builder Image ${index + 1} - architecture, architect, 40-50 year building safety inspections`}
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
    </>
  );
}
