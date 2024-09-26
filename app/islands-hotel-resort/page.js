"use client";
import Header from '../Components/Header';
import Footer from '../Components/Footer';

import { useEffect, useState } from 'react';
import { getStorage, ref, listAll, getDownloadURL } from "firebase/storage";
import { storage } from '../../firebase'; // Adjust the path as necessary
import Lightbox from 'react-18-image-lightbox';
import 'react-18-image-lightbox/style.css';
import { IoIosArrowRoundBack } from "react-icons/io";
import Masonry from 'react-masonry-css';
import '../page.css'; // Ensure this path is correct

export default function IslandsHotelResort() {
  const [imageUrls, setImageUrls] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);

  useEffect(() => {
    const fetchImages = async () => {
      const storageRef = ref(storage, 'hotel-resort');
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

      {/* Hero Sectidon */}
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
              Hotel Resort
            </h1>
            <em className="text-xl font-bold"> Earthquake-Ready and Hurricane-Resistant Design</em>
            <img src="/islands-hotel-resort.jpg" alt="Island Hotel Resort - Designed and Built" className="w-full max-w-2xl mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8 mt-10" />
        
            <div className=" mx-auto max-w-3xl grid grid-row-2 justify-center items-center">
              <h4 className=" text-lg mt-10 text-white"> <span className="text-[#8E784D]">✦</span> This large hotel resort was built using custom forms and earthquake pin connections, designed to withstand the forces of zone 2 earthquakes and 175 mph hurricane winds. The project’s structural integrity was a top priority, ensuring the resort is prepared for both seismic activity and extreme weather conditions.</h4>

              <h6 className=" text-lg mt-10 text-white"> <span className="text-[#8E784D]">✦</span> Thanks to meticulous attention to detail and a focus on efficiency, construction time was significantly reduced without compromising the strength or safety of the build. The result is a resort that offers both durability and reliability, perfectly suited to its environment.
              </h6>

              <div/>
            </div>

            <a href="/architecture-and-builds">
            <IoIosArrowRoundBack className="mt-10 text-[#8E784D] text-4xl" style={{ strokeWidth: '20px' }} />
            </a>
            <div className="max-w-5xl mx-auto bg-[#1E1412] rounded-lg shadow-lg px-5 pb-4 pt-4 ">
              {imageUrls.length > 0 && (
                <Masonry
                  breakpointCols={{ default: 4, 1100: 3, 700: 2 }}
                  className="my-masonry-grid"
                  columnClassName="my-masonry-grid_column"
                >
                  {imageUrls.map((url, index) => (
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


     < Footer />

    </div>
  );
}
