'use client'
import React, { useState, useEffect } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';
import { getAuth, onAuthStateChanged } from 'firebase/auth';
import { auth } from '../../firebase'; // Adjust the path as necessary

export default function SubmitTestimonial() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState('');
  const [isChecked, setIsChecked] = useState(false); // New state for checkbox
  const [token, setToken] = useState('');
  const [showPopup, setShowPopup] = useState(false); // New state for popup

  const maxTextLength = 500; // Character limit for the text field

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if (user) {
        const token = await user.getIdToken();
        setToken(token);
      }
    });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!isChecked) {
      setMessage('You must agree to the disclaimer.');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
      return;
    }
    const response = await fetch('/api/testimonials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, location, text, rating, token }),
    });

    if (response.ok) {
      setMessage('Testimonial submitted successfully!');
      setName('');
      setLocation('');
      setText('');
      setRating(0);
      setIsChecked(false); // Reset checkbox
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    } else {
      setMessage('Failed to submit testimonial.');
      setShowPopup(true);
      setTimeout(() => setShowPopup(false), 3000); // Hide popup after 3 seconds
    }
  };

  return (
    <div className="bg[#140D0C] min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        <section className="bg-[#140D0C] mt-48 m-10 p-10 relative isolate overflow-hidden mx-[10%] sm:mx-[14%] md:mx-[18%] lg:mx-[22%] py-0 shadow-lg rounded-lg">
          <div className="mx-auto max-w-2xl lg:max-w-4xl ">
            <h1 className="text-center text-2xl font-bold leading-8 text-white sm:text-3xl md:text-4xl sm:leading-9 mt-8">Feedback Form</h1>
            <p className="text-center text-gray-200 mt-4 text-xs sm:text-sm md:text-md lg:text-lg  mx-auto max-w-2xl">I sincerely appreciate the opportunity to work with you and bring your project to life. Your feedback is incredibly valuable to me as I continuously strive to provide the best service possible. If you have a few moments, I would greatly appreciate it if you could share your thoughts and experience by filling out the short form below.</p>
            <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-2xl mt-10">
              <div>
                <label className="block text-sm text-white">Name</label>
                <p className='text-xs text-gray-300 text-left'>Please provide your name.</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white">Location</label>
                <p className='text-xs text-gray-300 text-left'>Please provide the location where the project was completed (City, State).</p>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                  required
                />
              </div>
              <div>
                <label className="block text-sm text-white">Feedback</label>
                <p className='text-xs text-gray-300 text-left'>It was a pleasure working with you. Please share your thoughts on my work.</p>
                <textarea
                  value={text}
                  onChange={(e) => setText(e.target.value.slice(0, maxTextLength))}
                  className="mt-1 block w-full border border-gray-300 rounded-md p-2 text-black"
                  required
                />
                <p className="text-xs text-gray-400">{text.length}/{maxTextLength} characters</p>
              </div>
              <div className=''>
              <label className="block text-sm text-white">Rating</label>
              <p className='text-xs text-gray-300 text-left'>Please rate your overall experience.</p>
               
                <div className="rating flex flex-row-reverse justify-center">
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
                  
                  <label className="block text-sm sm:text-md md:text-lg max-w-2xl text-white">Disclaimer</label>

                </div>
              
                <p className="text-xs sm:text-sm md:text-md text-gray-400 ml-6">
                By checking this box, you grant permission for your feedback to be featured in the Testimonials section of my website, helping others understand what it’s like to work with me.
                </p>
              </div>
              <div>
                <button
                  type="submit"
                  className={`w-full py-2 px-4 text-white rounded-md border-2 border-[#936F27] transition-all duration-300 mt-4 mb-8 ${isChecked ? 'hover:border-[#1E1412] hover:bg-[#936F27] hover:text-[#1E1412] font-bold' : 'bg-[#666] border-gray-500'}`}
                  disabled={!isChecked}
                >
                  Submit
                </button>
              </div>
            </form>
            {showPopup && (
              <div className="fixed bottom-4 right-4 bg-[#C69635] text-[#1E1412] p-4 rounded shadow-lg transition-opacity duration-300 ease-in-out z-50">
                {message}
              </div>
            )}
            
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