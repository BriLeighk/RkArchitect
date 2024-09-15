import { useEffect, useRef } from 'react';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com';
import { useState } from 'react';

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
    <div className="relative isolate">
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
      <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:py-32">
        
        <h2 className="text-3xl font-bold text-center">Contact</h2>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-300">Full Name</label>
            <input type="text" id="name" name="name" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 pl-2 h-8" />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-300">Email</label>
            <input type="email" id="email" name="email" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 pl-2 h-8" />
          </div>
          <div>
            <label htmlFor="message" className="block text-sm font-medium text-gray-300">Message</label>
            <textarea id="message" name="message" className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm text-gray-900 pl-2 h-24"></textarea>
          </div>
          <div >
            <button type="submit" className="w-full py-2 px-4 text-white rounded-md border-2 border-[#936F27] hover:border-[#1E1412] hover:bg-[#936F27] hover:text-white transition-all duration-300">Send</button>
          </div>
        </form>
        {message && <p className="mt-4 text-sm text-gray-300 transition-opacity duration-1000 ease-out">{message}</p>}
      </div>
    </div>
  )
}