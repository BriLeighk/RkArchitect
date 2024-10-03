'use client'
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

export default function ImportanceOfBuildingMaintenance() {
  return (
    <div className="bg-[#1E1412] text-gray-300">
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
              The Importance of Building <br /> Maintenance
            </h1>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-10 bg-[#261916] rounded-lg">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <img src="/Maintenance_1.jpg" alt="Fire Resistant Home" className="w-full max-w-sm mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8" />
        <div className="space-y-6">
            <p>
            I often see building owners delay necessary maintenance due to either trying to save on costs, or they do not think it is necessary.
            </p>
            <p>
            While simple maintenance items like painting, resealing windows, reroofing etc., can be more expensive than most anticipate, the cost does not compare to the high cost of repairs that become necessary from delaying maintenance.
            </p>
            <p>
             I routinely find very expensive spalling repairs (rusted steel inside concrete) and water intrusion damage repairs that are far more expensive than painting or re-roofing, and the owner ends up having to paint and re-roof anyway!
            </p>
            
        </div>
        
      </div>
      
        <div className="space-y-2 mt-4 sm:mt-0 sm:text-center">
          
          <p>
          Shouldn’t properly owners properly maintain their buildings to avoid costly repairs later on?
          </p>
          <p>
          Does Insurance cover repairs from neglect? I don’t think so.
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}