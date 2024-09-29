'use client'
import React, { useState } from 'react';
import Footer from '../Components/Footer';
import Header from '../Components/Header';

export default function SubmitTestimonial() {
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');
  const [text, setText] = useState('');
  const [rating, setRating] = useState(0); // New state for rating
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch('/api/testimonials', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, location, text, rating }), // Include rating
    });

    if (response.ok) {
      setMessage('Testimonial submitted successfully!');
      setName('');
      setLocation('');
      setText('');
      setRating(0); // Reset rating
    } else {
      setMessage('Failed to submit testimonial.');
    }
  };

  return (
    <div className="bg[#140D0C] min-h-screen flex flex-col">
        <Header />

      <main className="flex-grow">
        <section className="bg-[#1E1412] mt-48 m-10 p-10 relative isolate overflow-hidden mx-[10%] py-0 shadow-lg">
          <div className="mx-auto max-w-2xl lg:max-w-4xl ">
            <h1 className="text-center text-2xl font-bold leading-8 text-white sm:text-3xl md:text-4xl sm:leading-9 mt-10">Submit Your Testimonial</h1>
            <form onSubmit={handleSubmit} className="space-y-4 mx-auto max-w-2xl mt-20">
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
              <div>
                <label className="block text-xs font-medium">Rating</label>
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
                <button type="submit" className="w-full py-2 px-4 text-white rounded-md border-2 border-[#936F27] hover:border-[#1E1412] hover:bg-[#936F27] hover:text-white transition-all duration-300 mt-16 mb-12">Submit</button>
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
          color: #ff9e0b;
        }

        .rating input:checked ~ label {
          color: #ffa723;
        }
      `}</style>
    </div>
  );
}
