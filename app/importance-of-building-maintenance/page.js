'use client'
import Head from 'next/head'; // Import Head for SEO
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSquareUpRight } from '@fortawesome/free-solid-svg-icons';

export default function ImportanceOfBuildingMaintenance() {
  return (
    <div className="text-gray-300">
      <Head>
        <title>The Importance of Building Maintenance | RK Architect, PA & RK Builders</title>
        <meta name="description" content="Learn about the importance of regular building maintenance to prevent costly repairs and ensure safety and compliance." />
      </Head>

      <Header />
      <div className="relative isolate px-6 pt-20 lg:px-8">
        
        <div className="mt-24 lg:mt-32 mb-10  flex justify-center items-center" data-aos="fade-up">
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl" style={{ color: '#F2F4E6' }}>
              The Importance of Building <br /> Maintenance
            </h1>
          </div>
        </div>
        
      </div>
      
      <div className="max-w-4xl mx-auto m-8 px-4 sm:px-6 lg:px-8 py-10 bg-[#1E1412] rounded-lg">
      
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center">
        <img src="/Maintenance_1.jpg" alt="Building Maintenance - architecture, architect, safety inspections" className="w-full max-w-sm mx-auto h-auto rounded-lg border-2 border-[#936F27] shadow-lg shadow-black mb-8" />
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
