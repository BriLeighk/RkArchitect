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
import Head from 'next/head';

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
      <Head>
        <title>Islands Hotel Resort | RK Architect, PA & RK Builders</title>
        <meta name="description" content="Explore the Islands Hotel Resort by RK Architect, PA & RK Builders. Earthquake-ready and hurricane-resistant design." />
      </Head>

      <Header />
      <div className="relative isolate px-6 pt-20 lg:px-8">
        
        <div className="mt-24 lg:mt-32 mb-10  flex justify-center items-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: '#F2F4E6' }}>
              Islands Hotel Resort
            </h1>
            <em className="text-xl font-bold"> Earthquake-Ready and Hurricane-Resistant Design</em>
            <img src="/islands-hotel-resort.jpg" alt="Island Hotel Resort - architecture, architect, disaster resistant homes" className="w-full max-w-2xl mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8 mt-10" />
        
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
                      alt={`Island Hotel Resort Image ${index + 1} - architecture, architect, safety inspections`}
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
