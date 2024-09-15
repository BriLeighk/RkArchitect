export default function Testimonials() {
    return (
      <section className="relative isolate overflow-hidden px-6 py-14 sm:py-24 lg:px-8 lg:mt-20">
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
        <div className="mx-auto max-w-2xl lg:max-w-4xl">
            <h1 className="text-center text-2xl font-bold leading-8 text-white sm:text-4xl sm:leading-9">Testimonials</h1>
          <figure className="mt-10">
            <blockquote className="text-center text-sm font-semibold leading-8 text-white sm:text-lg sm:leading-9">
              <p>
                <span className=" font-bold text-2xl">“ </span> We have been working with Robert on the construction of an extension to our home in North Miami Beach.  
                Referring to this merely as an extension, however, understates the scope of the work.  We are replacing and enhancing 
                our HVAC and septic systems, resurfacing much of the property's area and creating a visually attractive and inviting 
                frontage for the house.  Robert has been leading the way throughout.  No detail has been too small to escape his attention.  
                He has successfully navigated for us the mazes of the building codes and the demands of the building inspectors.  
                He is always accessible and responsive.  What started as an architectural assignment has continued through the 
                construction phase, with Robert's RK Builders partnering with Thompson Construction and Remodel to move the process 
                along professionally, expeditiously and in full legal compliance.  We could not be more pleased. <span className="font-bold text-2xl">”</span>
              </p>
            </blockquote>
            <figcaption className="mt-10">
              <div className="mt-4 flex items-center justify-center space-x-3 text-base flex-col text-center">
                <div className="font-semibold text-white text-xl">Debbie and Abbe Dienstag</div>
                <div className="text-gray-300">North Miami Beach, FL</div>
              </div>
            </figcaption>
          </figure>
        </div>
      </section>
    )
  }
