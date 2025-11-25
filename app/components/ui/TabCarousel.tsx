'use client';

import React, { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';

// Define the structure for tab content
type TabContent = {
  id: string;
  title: string;
  heading: string;
  link?: string;
  bulletPoints: string[];
  image: React.ReactNode;
  bgColor: string;
};

// Props for the TabCarousel component
interface TabCarouselProps {
  tabs: TabContent[];
  autoPlayInterval?: number;
  initialTab?: string;
}

const TabCarousel: React.FC<TabCarouselProps> = ({
  tabs,
  autoPlayInterval = 6000,
  initialTab = tabs[0].id,
}) => {
  const [activeTab, setActiveTab] = useState(initialTab);
  const [prevTab, setPrevTab] = useState<string | null>(null);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const timerRef = useRef<number | null>(null);

  // Start the autoplay timer
  const startAutoPlayTimer = useCallback(() => {
    timerRef.current = window.setInterval(() => {
      const currentIndex = tabs.findIndex((tab) => tab.id === activeTab);
      const nextIndex = (currentIndex + 1) % tabs.length;
      
      setPrevTab(activeTab);
      setActiveTab(tabs[nextIndex].id);
      setIsTransitioning(true);
    }, autoPlayInterval);
  }, [activeTab, autoPlayInterval, tabs]);

  // Handle tab change
  const handleTabChange = (tabId: string) => {
    if (tabId !== activeTab && !isTransitioning) {
      setPrevTab(activeTab);
      setActiveTab(tabId);
      setIsTransitioning(true);
      
      // Reset the timer when manually changing tabs
      if (timerRef.current) {
        clearInterval(timerRef.current);
        startAutoPlayTimer();
      }
    }
  };

  // Handle animation end
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
  };

  // Setup autoplay
  useEffect(() => {
    startAutoPlayTimer();
    
    return () => {
      if (timerRef.current) {
        clearInterval(timerRef.current);
      }
    };
  }, [activeTab, startAutoPlayTimer]);

  return (
    <div className="relative overflow-hidden">
      {/* Content Container */}
      <div className="relative h-[700px] sm:h-[650px] md:h-[500px] overflow-hidden rounded-2xl">
        {tabs.map((tab) => {
          const isActive = tab.id === activeTab;
          const wasActive = tab.id === prevTab;
          
          return (
            <div
              key={tab.id}
              className={`absolute w-full h-full transition-all duration-700 ${tab.bgColor} ${
                isActive
                  ? 'translate-y-0 opacity-100 z-10'
                  : wasActive
                  ? '-translate-y-full opacity-0 z-0'
                  : 'translate-y-full opacity-0 z-0'
              }`}
              onTransitionEnd={isActive ? handleTransitionEnd : undefined}
            >
              <div className="container-custom h-full py-4 sm:py-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10 h-full items-center">
                  {/* Left column: Text content */}
                  <div className="space-y-6">
                    <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white">
                      {tab.link ? (
                        <a 
                          href={tab.link} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="hover:text-blue-400 transition-colors duration-300 inline-flex items-center gap-2"
                        >
                          {tab.heading}
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : tab.heading}
                    </h2>
                    <ul className="space-y-3 sm:space-y-4">
                      {tab.bulletPoints.map((point, index) => (
                        <li key={index} className="flex items-start">
                          <span className="mr-2 sm:mr-3 text-[#1A6262]">
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5 sm:h-6 sm:w-6"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </span>
                          <span className="text-gray-300 text-sm sm:text-base">{point}</span>
                        </li>
                      ))}
                    </ul>
                    {/* LEARN MORE BUTTON */}
                    {/* <Link 
                      href="#"
                      className="inline-flex items-center text-[#3DD598] font-medium hover:underline"
                    >
                      Learn more
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-1"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </Link>*/}
                  </div>
                  {/* Right column: Image/Visual */}
                  <div className="flex justify-center items-center overflow-x-auto">
                    <div className="min-w-[280px] sm:min-w-0">
                      {tab.image}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TabCarousel;
