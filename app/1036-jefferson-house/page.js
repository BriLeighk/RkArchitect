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

export default function JeffersonHouse() {
  const [imageUrls, setImageUrls] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, '1036-jefferson-house');
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
             Jefferson Personal Home
            </h1>
            <em className="text-xl font-bold">A Family Legacy in Design and Build</em>
            <Image
              src="/1036-jefferson-house.jpg"
              alt="Jefferson personal home by RK Architect, P.A. and RK Builders"
              width={1200}
              height={800}
              sizes="(max-width: 768px) 100vw, 672px"
              className="w-full max-w-2xl mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8 mt-10"
            />
        
            <div className=" mx-auto max-w-3xl grid grid-row-2 justify-center items-center">
              <h4 className=" text-lg mt-10 text-white"> 
                <span className="text-[#8E784D]">✦</span> 
                As both the architect and builder of this custom home, I crafted a space that has been the heart of our family for over two decades. From the initial design to the final build, every detail was tailored to create a nurturing environment where my children grew up, and where my wife and I have cherished countless memories.
              </h4>

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
                      alt={`Jefferson home project photo ${index + 1} by RK Architect, P.A.`}
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
