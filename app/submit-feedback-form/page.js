'use client'
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function SubmitTestimonial() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false); // New state for checkbox

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setMessage('You must agree to the disclaimer.');
      return;
    }
    const response = await fetch('/api/testimonials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, location, text, rating }),
    });

    if (response.ok) {
      setMessage('Testimonial submitted successfully!');
      setName('');
      setLocation('');
      setText('');
      setRating(0);
      setIsChecked(false); // Reset checkbox
    } else {
      setMessage('Failed to submit testimonial.');
    }
  };

  return (
    <div className="bg[#140D0C] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#1E1412] mt-48 m-10 p-10 relative isolate overflow-hidden mx-[10%] sm:mx-[14%] md:mx-[18%] lg:mx-[22%] py-0 shadow-lg rounded-lg">
          <div className="mx-auto max-w-2xl lg:max-w-4xl ">
            <h1 className="text-center text-2xl font-bold leading-8 text-white sm:text-3xl md:text-4xl sm:leading-9 mt-8">Feedback Form</h1>
            <p className="text-center text-gray-200 mt-4 text-xs sm:text-sm md:text-md lg:text-lg  mx-auto max-w-2xl">I sincerely appreciate the opportunity to work with you and bring your project to life. Your feedback is incredibly valuable to me as I continuously strive to provide the best service possible. If you have a few moments, I would greatly appreciate it if you could share your thoughts and experience by filling out the short form below.</p>
            <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-2xl mt-10">
              <div>
                <label className="block text-sm font-medium">Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm font-medium">Testimonial</label>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                  required
                />
              </div>
              <div className='grid grid-cols-3'>
                <label className="block text-xs font-medium grid-span-1 my-auto">Rating</label>
                <div className="rating flex flex-row-reverse justify-center grid-span-2">
                  {[...Array(5)].map((_, index) => {
                    const star = 5 - index;
                    return (
                      <React.Fragment key={star}>
                        <input
                          type="radio"
                          id={`star${star}`}
                          name="rate"
                          value={star}
                          checked={rating === star}
                          onChange={() => setRating(star)}
                          className="hidden"
                        />
                        <label
                          htmlFor={`star${star}`}
                          className="cursor-pointer text-xl text-gray-400 hover:text-[#936F27] "
                        >
                          
                        </label>
                      </React.Fragment>
                    );
                  })}
                </div>
              </div>
              <div>
                <div className='flex flex-row gap-2 mt-8'>
                <label className="container max-w-4">
                  <input
                    type="checkbox"
                    checked={isChecked}
                    onChange={(e) => setIsChecked(e.target.checked)}
                  />
                  <svg viewBox="0 0 64 64" height="1em sm:1.5em md:2em" width="1em sm:1.5em md:2em">
                      <path d="M 0 16 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 16 L 32 48 L 64 16 V 8 A 8 8 90 0 0 56 0 H 8 A 8 8 90 0 0 0 8 V 56 A 8 8 90 0 0 8 64 H 56 A 8 8 90 0 0 64 56 V 16" pathLength="575.0541381835938" className="path"></path>
                    </svg>
                 
                </label>
                  
                  <label className="block text-sm sm:text-md md:text-lg max-w-2xl">Disclaimer</label>

                </div>
              
                <p className="text-xs sm:text-sm md:text-md text-gray-400 ml-6">With your permission, your feedback may be featured in the Testimonials section of my website to help others understand what it’s like to work with me.</p>
                
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full py-2 px-4 text-white rounded-md border-2 border-[#936F27] transition-all duration-300 mt-4 mb-8 ${isChecked ? 'hover:border-[#1E1412] hover:bg-[#936F27] hover:text-white' : 'bg-[#666] border-[#6666]'}`}
                  disabled={!isChecked}
                >
                  Submit
                </button>
              </div>
            </form>
            {message && <p className="mt-4">{message}</p>}
          </div>
        </section>
      </main>
      <Footer />
      <style jsx>{`
        .rating input {
          position: absolute;
          appearance: none;
        }

        .rating label {
          float: right;
          cursor: pointer;
          font-size: 30px;
          color: #666;
        }

        .rating label:before {
          content: "★";
        }

        .rating input:checked + label:hover,
        .rating input:checked + label:hover ~ label,
        .rating input:checked ~ label:hover,
        .rating input:checked ~ label:hover ~ label,
        .rating label:hover ~ input:checked ~ label {
          color: #e58e09;
        }

        .rating label:hover,
        .rating label:hover ~ label {
          color: #936F27;
        }

        .rating input:checked ~ label {
          color: #ffa723;
        }

        .container {
          cursor: pointer;
        }

        .container input {
          display: none;
        }

        .container svg {
          overflow: visible;
        }

        .path {
          fill: none;
          stroke: white;
          stroke-width: 4;
          stroke-linecap: round;
          stroke-linejoin: round;
          transition: stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease;
          stroke-dasharray: 241 9999999;
          stroke-dashoffset: 0;
        }

        .container input:checked ~ svg .path {
          stroke-dasharray: 70.5096664428711 9999999;
          stroke-dashoffset: -262.2723388671875;
        }
      `}</style>
    </div>
  );
}