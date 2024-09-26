import { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';

export default function Contacts() {
    const [message, setMessage] = useState("");

    useEffect(() => {
      if (message) {
        const timer = setTimeout(() => {
          setMessage("");
        }, 3000);
        return () => clearTimeout(timer);
      }
    }, [message]);
  
    const handleSubmit = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const email = form.email.value;
      const userMessage = form.message.value;
  
      const templateParams = {
        from_name: name,
        from_email: email,
        message: userMessage,
      };
  
      emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        templateParams,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY
      )
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        setMessage("Message sent");
        form.reset(); // Clear the form
      }, (error) => {
        console.log('FAILED...', error);
        setMessage("Message failed to send. Try again later.");
      });
    };


  return (
    <div>
      <div className="relative isolate overflow-hidden">
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
        
          {/* Contact Section */}
          <div className="grid justify-start grid-cols-3 mt-20">
            <div className="flex flex-col p-4 mx-auto lg:mx-20">
              <h2 className="text-2xl sm:text-4xl font-bold mb-16 text-white">Get in Touch</h2>
            

            <div className="flex flex-col gap-2 text-left mb-20">
              <div className="flex flex-row gap-2 text-left">
                  <FontAwesomeIcon icon={faHome} className="text-md lg:text-lg text-[#8E784D]" />
                  <a 
                    href="https://www.google.com/maps?q=500+E+Broward+Blvd,+Suite+1710,+Fort+Lauderdale,+FL+33394" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="text-xs lg:text-sm leading-6 text-gray-300 hover:text-[#8E784D] transition-all duration-300"
                  >
                    500 E Broward Blvd, Suite 1710, <br /> Fort Lauderdale, FL 33394
                  </a>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <FontAwesomeIcon icon={faPhone} className="text-md lg:text-lg text-[#8E784D]" />
                  <p href="tel:+15619805271" className="text-xs lg:text-sm leading-6 text-white hover:text-[#8E784D] cursor-pointer transition-all duration-300">
                    +1 (561) 980-5271
                  </p>
                </div>

                <div className="flex flex-row items-center gap-2">
                  <FontAwesomeIcon icon={faEnvelope} className="text-md lg:text-lg text-[#8E784D]" />
                  <p href="mailto:rkarchitect24@gmail.com" className="text-xs lg:text-sm leading-6 text-gray-300 hover:text-[#8E784D] cursor-pointer transition-all duration-300">
                    rkarchitect24@gmail.com
                  </p>
                </div>
              
            </div>
              
            </div>
            
            
          
        <div className="px-8 lg:mx-10 mb-12 col-span-2">
          
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
              <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 pl-2 h-8 shadow-lg shadow-black" />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
              <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 pl-2 h-8 shadow-lg shadow-black" />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
              <textarea id="message" name="message" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 pl-2 h-24 shadow-lg shadow-black"></textarea>
            </div>
            <div >
              <button type="submit" className="w-full py-2 px-4 text-white rounded-md border-2 border-[#936F27] hover:border-[#1E1412] hover:bg-[#936F27] hover:text-white transition-all duration-300">Send</button>
            </div>
          </form>
          {message && <p className="mt-4 text-sm text-gray-300 transition-opacity duration-1000 ease-out">{message}</p>}
        </div>
        </div>
        
      </div>
    <Footer />
    </div>
  )
}