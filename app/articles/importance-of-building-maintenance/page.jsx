'use client';

import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const ImportanceOfBuildingMaintenanceArticle = () => {
  return (
    <div className="min-h-screen">
      <Header/>
      
      <div className="pt-32 pb-8 bg-white">
        <article className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <div className="max-w-[970px] mx-auto mb-8">
            <div className="mb-4">
              <span className="text-sm font-sans uppercase tracking-wider text-gray-500">Building Safety</span>
            </div>

            <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5] leading-tight font-serif font-bold mb-6 text-gray-900">
              The Importance of Building Maintenance
            </h1>

            <div className="mb-8 text-gray-500 font-sans text-xl">
              Understanding the critical role of regular maintenance in preventing costly repairs and ensuring safety
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500 border-t border-b border-gray-200 py-4">
              <span className="font-sans">By Robert Kirchgessner</span>
              <span>•</span>
              <span className="font-sans">2024</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 lg:col-start-3">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 items-center mb-12">
                <div className="relative w-full h-0 pb-[100%]">
                  <img 
                    src="/Maintenance_1.jpg" 
                    alt="Building Maintenance" 
                    className="absolute top-0 left-0 w-full h-full object-cover rounded-lg"
                  />
                </div>
                <div className="space-y-6">
                  <p className="font-serif text-gray-800 leading-relaxed">
                    I often see building owners delay necessary maintenance due to either trying to save on costs, or they do not think it is necessary.
                  </p>
                  <p className="font-serif text-gray-800 leading-relaxed">
                    While simple maintenance items like painting, resealing windows, reroofing etc., can be more expensive than most anticipate, the cost does not compare to the high cost of repairs that become necessary from delaying maintenance.
                  </p>
                  <p className="font-serif text-gray-800 leading-relaxed">
                    I routinely find very expensive spalling repairs (rusted steel inside concrete) and water intrusion damage repairs that are far more expensive than painting or re-roofing, and the owner ends up having to paint and re-roof anyway!
                  </p>
                </div>
              </div>

              <div className="prose prose-lg max-w-none">
                <div className="space-y-6 text-center">
                  <p className="font-serif text-gray-800 leading-relaxed">
                    Shouldn't property owners properly maintain their buildings to avoid costly repairs later on?
                  </p>
                  <p className="font-serif text-gray-800 leading-relaxed">
                    Does Insurance cover repairs from neglect? I don't think so.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer/>
    </div>
  );
};

export default ImportanceOfBuildingMaintenanceArticle; 