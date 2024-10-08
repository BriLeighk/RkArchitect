import { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import { useState } from 'react';
import { faHome, faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Footer from './Footer';

export default function Contacts() {
    const [message, setMessage] = useState("");
    const [inquiryType, setInquiryType] = useState(""); // Set initial state to an empty string

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

      // Check if the message length is greater than 0
      if (userMessage.length === 0) {
        setMessage("Message cannot be empty.");
        return;
      }

      const templateParams = {
        from_name: name,
        from_email: email,
        message: userMessage,
        subject: inquiryType, // Pass inquiry type as subject
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
    <div className="bg-[#140D0C]">
      <div className=" relative isolate overflow-hidden">
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
          <div className="grid items-center grid-row-3 md:grid-cols-2 mt-20 items-center">
            <div className="flex flex-col px-4 mx-auto max-w-2xl mb-12 ">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold mb-4 text-white mx-2">Get in Touch</h2>
              <p className="text-sm md:text-md lg:text-lg text-gray-300 mb-10">
                Please use the form to share your inquiry with me. Thank you for considering my services, and I look forward to receiving your message and the opportunity to work together.
              </p>

              <div className="grid grid-cols-3 md:grid-cols-1 gap-y-2 md:gap-x-12">
                <div className="flex flex-col gap-4 md:gap-2 text-left mb-10 justify-center my-auto md:justify-start">
                  <div className="flex flex-row gap-2 text-left">
                      <FontAwesomeIcon icon={faHome} className="text-xs sm:text-sm md:text-md lg:text-lg text-[#8E784D]" />
                      <a 
                        href="https://www.google.com/maps?q=500+E+Broward+Blvd,+Suite+1710,+Fort+Lauderdale,+FL+33394" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-xs sm:text-sm leading-6 text-gray-300 hover:text-[#8E784D] transition-all duration-300"
                      >
                        500 E Broward Blvd, <br /> Suite 1710, Fort <br /> Lauderdale, FL 33394
                      </a>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon icon={faPhone} className="text-xs sm:text-sm md:text-md lg:text-lg text-[#8E784D]" />
                    <p href="tel:+15619805271" className="text-xs sm:text-sm leading-6 text-white hover:text-[#8E784D] cursor-pointer transition-all duration-300">
                      +1 (877) 390-2394
                    </p>
                  </div>

                  <div className="flex flex-row items-center gap-2">
                    <FontAwesomeIcon icon={faEnvelope} className="text-xs sm:text-sm md:text-md lg:text-lg text-[#8E784D]" />
                    <p href="mailto:rkarchitect24@gmail.com" className="text-xs sm:text-sm leading-6 text-gray-300 hover:text-[#8E784D] cursor-pointer transition-all duration-300">
                      rkarchitect24@gmail.com
                    </p>
                  </div>
                </div>
                <div className="col-span-2">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3529.563123456789!2d-80.137317684935!3d26.122438983471!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88d9b0b0b0b0b0b0b!2s500%20E%20Broward%20Blvd%2C%20Fort%20Lauderdale%2C%20FL%2033394%2C%20USA!5e0!3m2!1sen!2sus!4v1610000000000!5m2!1sen!2sus"
                      allowFullScreen=""
                      loading="lazy"
                      className="w-full h-42 sm:h-48 sm:w-[23em] md:w-full md:h-64 border-[#936F27] rounded-md shadow-lg shadow-black"
                    ></iframe>
              </div>
              </div>
          </div>
            
            
          
          <div className="flex justify-center md:mt-16">
            <div className="p-8 mx-4 lg:mx-10 mb-12 bg-[#1E1412] shadow-lg shadow-black rounded-sm my-auto w-full">
            
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
                <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 pl-2 h-8 shadow-lg shadow-black" required />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
                <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 pl-2 h-8 shadow-lg shadow-black" required />
              </div>
              <div>
                <label htmlFor="inquiry" className="block text-sm font-medium text-gray-300">General Inquiry</label>
                <select id="inquiry" name="inquiry" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 pl-2 h-8 shadow-lg shadow-black" value={inquiryType} onChange={(e) => setInquiryType(e.target.value)} required>
                  <option value="" disabled>Please Select</option> 
                  <option value="Architecture">Architecture</option>
                  <option value="Construction">Construction/Building</option>
                  <option value="Building">Stuctural Inspections</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
                <textarea id="message" name="message" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 pl-2 h-24 shadow-lg shadow-black" required></textarea>
              </div>
              <div >
                <button type="submit" className="w-full py-2 px-4 text-white rounded-md border-2 border-[#8E784D] hover:border-[#1E1412] hover:bg-[#8E784D] hover:text-[#1E1412] hover:font-bold transition-all duration-300 mt-10">Send</button>
              </div>
            </form>
            {message && <p className="mt-4 text-sm text-gray-300 transition-opacity duration-1000 ease-out">{message}</p>}
          </div>
        </div>
        </div> 
      </div>
    <Footer />
    </div>
  )
}