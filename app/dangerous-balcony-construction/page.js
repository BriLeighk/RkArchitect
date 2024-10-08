'use client'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

export default function DangerousBalconyConstruction() {
  return (
    <div className="bg-[#140D0C] text-gray-300">
      <Header />
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
        <div className="mt-24 lg:mt-32 mb-10  flex justify-center items-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: '#F2F4E6' }}>
              Dangerous Balcony Construction <br /> is a Huge Multifamily Liability Risk
            </h1>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#1E1412] rounded-lg">
      <img src="/DangerousBalcony.jpg" alt="Fire Resistant Home" className="w-full max-w-2xl mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8" />
        <div className="space-y-6">
          <p>
          Dangerous Balcony Structures may not be obvious when visually analyzing a Multifamily property, especially if damage is not yet present, unless you have some knowledge of construction, building permits, etc.
          </p>
          <p>
          As a Registered Architect and Licensed Building Contractor, I frequently notice inadequate structures or code violations that others often do not notice, especially if one does not have a design, engineering or construction background.
          </p>
          <p>
          For Example, the Balcony shown in the photographs above indicates an unsafe condition that is inherent in all the balconies at this multifamily complex.
          </p>
          <p>
          These Balconies are NOT Structurally adequate, were NOT Engineered or Permitted and were NOT Reconstructed with Engineering or Permits.
          </p>
            
            
                <div className="grid grid-cols-2 gap-8 items-center">
                    <div>
                        <div className="relative w-full max-w-4xl h-0 pb-[100%] mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black overflow-hidden">
                            <img src="/ReconstructionofImproperBalconySupport.png" alt="Fire Tornado" className="absolute top-0 left-0 w-full h-full object-cover" />
                        </div>
                        <p className="text-center mt-2 font-bold">Reconstruction of an Improper Balcony Support</p>
                    </div>

                    <div>
                        <div className="relative w-full max-w-4xl h-0 pb-[100%] mx-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black overflow-hidden">
                            <img src="/ProperlyEngineeredBalconyInProgress-1024x768.jpg" alt="Fire Safe Home" className="absolute top-0 left-0 w-full h-full object-cover" />
                        </div>
                        <p className="text-center mt-2 font-bold">Properly Engineered Balcony Supports in Progress</p>
                    </div>
                
                </div>

          <p>
          The balconies have an Eccentrically Loaded column (off center), and a small and weak column size with improper connections that were not engineered. 
          </p>
          <p>
          At a few other locations, some guardrail pickets were missing where a child could fall through, also indicating a lack of proper design and maintenance.
          </p>
          <p>
          Rebuilding these balconies properly (progress photos below), with proper engineering, permits and inspections, can impose a significant expense that may not be accounted for when purchasing a multifamily complex.
          </p>
          <p>
          If such a condition is not noted during due diligence by an inspector, or corrected in a timely manner, the liability could expose the new owner to serious lawsuits if an accident occurs.
          </p>
          
          <img src="/ProperlyEngineeredBalcony-1024x768.jpg" alt="Fire Safe Home Build" className="w-full max-w-2xl mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8" />
          
          <p>
          Life Safety is always paramount and care should be taken to investigate code violations or unpermitted work to eliminate liability.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}