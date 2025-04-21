'use client';

import React from 'react';
import Header from '../../Components/Header';
import Footer from '../../Components/Footer';

const BuildToResistWildfiresArticle = () => {
  return (
    <div className="min-h-screen">
      <Header/>
      
      <div className="pt-32 pb-8 bg-white">
        <article className="max-w-screen-2xl mx-auto px-4 lg:px-8">
          <div className="max-w-[970px] mx-auto mb-8">
            <div className="mb-4">
              <span className="text-sm font-sans uppercase tracking-wider text-gray-500">Climate & Construction</span>
            </div>

            <h1 className="text-[2rem] md:text-[3rem] lg:text-[3.5] leading-tight font-serif font-bold mb-6 text-gray-900">
              Can We Build to Resist Extreme Wildfires & Fire Tornadoes?
            </h1>

            <div className="mb-8 text-gray-500 font-sans text-xl">
              Exploring innovative construction techniques to withstand nature's most destructive forces
            </div>

            <div className="flex items-center space-x-4 text-sm text-gray-500 border-t border-b border-gray-200 py-4">
              <span className="font-sans">By Robert Kirchgessner</span>
              <span>•</span>
              <span className="font-sans">2024</span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            <div className="lg:col-span-8 lg:col-start-3">
              <div className="mb-12">
                <img
                  src="/construction.jpg"
                  alt="Fire Resistant Home Construction"
                  className="w-full h-auto rounded-lg"
                />
                <p className="text-sm text-gray-500 mt-2 italic">
                  Modern construction techniques and materials can help homes withstand extreme wildfires and fire tornadoes. Credit: RK Architect
                </p>
              </div>

              <div className="prose prose-lg max-w-none">
                <p className="font-serif text-gray-800 leading-relaxed mt-4">
                  Can homes be designed & built to withstand Extreme Wildfires? What about the Massive Fire Tornadoes that swirl and carry debris with hurricane force winds? <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  Fire tornadoes are real, extremely powerful and are becoming enormous. A recent terrifying Fire Tornado in California was so powerful it killed a 17 year veteran firefighter, Jeremy Stoke, and wiped out every building in it's path. This Fire Tornado was 1000 feet across (more than 3 football fields), extended 7.5 miles high with hurling winds & debris up to 165 mph, equivalent to a Category 5 Hurricane, and was unstoppable. Authorities anticipate that temperatures inside this Fire Tornado exceeded 2,700 degrees F. What would it take to design and build a structure to withstand this kind of natural phenomenon? <br />
                </p>

                <div className="my-12">
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full rounded-lg"
                      src="https://www.youtube.com/embed/jcKygdSWK4U?si=GqdTw7JZNIJtGtat" 
                      title="YouTube video player" 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                      allowFullScreen>
                    </iframe>
                  </div>
                  <p className="text-sm text-gray-500 mt-2 italic">
                    A powerful demonstration of fire tornadoes and their devastating impact on communities. Credit: YouTube
                  </p>
                </div>

                <p className="font-serif text-gray-800 leading-relaxed">
                  If this video terrifies you, it should, especially if you live in a house built with wood frame construction, which is the standard method of construction in many states currently experiencing extreme wildfires.
                </p>

                <div className="grid grid-cols-3 gap-8 my-12">
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <img src="/fire.png" alt="Fire Tornado" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <img src="/WildfireAftermathImage.png" alt="Wildfire Aftermath" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                  </div>
                  <div className="relative w-full h-0 pb-[56.25%]">
                    <img src="/woodframe.jpg" alt="Wood Frame Construction" className="absolute top-0 left-0 w-full h-full object-cover rounded-lg" />
                  </div>
                </div>

                <p className="font-serif text-gray-800 leading-relaxed">
                  Houses built with wood framing essentially provide a tremendous amount of fuel that wildfires need to grow out of control. Once a Wood Framed house starts to burn, it is nearly impossible for Firefighters to control it. Wood Frame construction significantly contributes to the extreme wildfires & devastating fire tornadoes seen in the video above. <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  When looking at photos of neighborhoods ravaged by an extreme wildfire, the odd thing you may notice is that all the houses have been reduced to ash, while trees, some naturally fire resistant, remain standing. This is clear evidence that wood framed homes are often the primary fuel source that a wildfire uses to become massive and unstoppable. <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  Recently on MSNBC news, 9-15-20, a couple in Oroville CA was interviewed who lost their 2nd home in the past 2 years to a wildfire. Yes, their 2nd Home to a wildfire. They lost their 1st home in the 2018 Paradise wildfire and now their 2nd home in 2020. It's hard to imagine someone losing 1 home to a wildfire, let alone 2. <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  This begs the question, why are Architects still designing, and builders still building, wood framed houses and structures in High Fire Risk areas, especially for those who have already lost their home to a wildfire? <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  It is somewhat puzzling when given the fact that it is possible to build true Fire Safe Homes given an architect's inherent ingenuity and out of the box thinking. Of course, availability of materials and cost is always a factor. However, what is the cost of NOT building to resist extreme wildfires and fire tornadoes when literally thousands of structures annually continue to burn down? The losses add up to billions annually.
                </p>

                <div className="my-12">
                  <img
                    src="/FireSameHomeBuild.jpg"
                    alt="Fire Safe Home Build"
                    className="w-full h-auto rounded-lg"
                  />
                  <p className="text-sm text-gray-500 mt-2 italic">
                    A home designed and built to withstand extreme wildfires and fire tornadoes. Credit: RK Architect
                  </p>
                </div>

                <p className="font-serif text-gray-800 leading-relaxed">
                  While there are varying degrees of fire resistance ranging from resisting minor fires and embers to full Fire Proof structures, design standards must strive to create structures that can withstand the extreme heat caused by wildfires and flying debris caused by fire tornadoes. <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  Challenges are many, especially when there is evidence of standard reinforced concrete failing when subject to extreme heat, even for just moderate amounts of time. <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  As many States are currently experiencing the devastation caused by extreme wildfires, their building codes and standards must change to require effective fire resistant features to protect property during natural disasters. <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  We can look toward the State of Florida, for example, as they drastically changed their building codes in 2001, requiring design and construction of buildings to withstand Category 5 Hurricanes, especially in the High Velocity Hurricane Zone (Broward & Miami-Dade Counties). These standards even required windows and doors to resist wind borne debris impact from flying objects (tested with missiles traveling at 80 feet per second) that these hurricanes produce. Category 5 Hurricanes have sustained wind speeds greater than 157 mph with 3 second gusts up to 185 mph. <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  Many thought that building to resist the threat of a powerful hurricane was not possible as the tremendous wind forces and flying debris created challenges for manufacturers to produce products that could withstand these elements. Initially, the cost for these products seemed high, however they are commonplace now and more affordable. In addition, homeowners save on their insurance premiums, so the actual cost is greatly minimized. Thankfully, Florida has achieved reliable Hurricane resistant buildings through strict codes and construction standards. <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  So, do you think homes can be designed and built to withstand Extreme Wildfires and Massive Fire Tornadoes, even when carrying debris with hurricane force winds? I think definitely yes! <br /> <br />
                </p>

                <p className="font-serif text-gray-800 leading-relaxed">
                  Hopefully, interest in building true Fire Safe / Fire Proof Homes, those that can withstand extreme heat and flying debris from Fire Tornadoes, will increase and become commonplace, so that families can feel safe no matter how extreme wildfires are. <br /> <br />
                </p>

            
              </div>
            </div>
          </div>
        </article>
      </div>
      <Footer/>
    </div>
  );
};

export default BuildToResistWildfiresArticle; 