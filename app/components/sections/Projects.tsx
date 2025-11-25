'use client';

import { useState, useEffect } from 'react';
import TabCarousel from '@/app/components/ui/TabCarousel';
import ScrollTabSection from '@/app/components/ui/ScrollTabSection';
import './layers.css';

const Projects = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    checkMobile();
    
   
    window.addEventListener('resize', checkMobile);
    
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);
 
  const tabContents = [
    {
      id: 'E-commerceWebsite',
      title: 'Website that sells eco-friendly goods',
      heading: 'GreenCart',
      link: 'https://github.com/Shivansha23/GreenCart',
      bulletPoints: [
        'Developed a responsive food delivery website "Tomato" using HTML, CSS, JavaScript, and React, focusing on clean UI and seamless UX for intuitive navigation.',
        'Supports manual entry, bulk uploads, and Tally sync — fast, simple, and error-free.',
        'Validates and structures data instantly — your single source of truth.'
      ],
      image: (
        <div className="bg-black p-2 sm:p-4 md:p-6 rounded-lg shadow-md border border-gray-700">
          <div className="flex justify-center items-center">
            <img 
              src="/images/GreenCart.jpg" 
              alt="Input Layer Visualization" 
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] h-auto"
            />
          </div>
        </div>
      ),
  bgColor: 'bg-black'
    },
    {
      id: 'SmartRecipeFinder',
      title: 'AI-Powered Culinary Assistant',
      heading: 'Smart Recipe Finder',
      link: 'https://github.com/Shivansha23/Smart-Recipe-Finder',
      bulletPoints: [
        'Built an AI-simulated Smart Recipe Finder that recommends personalized recipes based on user-provided ingredients.',
        'Added a “Surprise Me” generator and personalized recommendations to enhance user engagement and exploration.',
        'Developed a multi-filter recipe search supporting cuisine, difficulty, cook time, and dietary restrictions for precise results.'
      ],
      image: (
        <div className="bg-black p-2 sm:p-4 md:p-6 rounded-lg shadow-md border border-gray-700">
          <div className="flex justify-center items-center">
            <img 
              src="/images/recipe-finder.jpg" 
              alt="Input Layer Visualization" 
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] h-auto"
            />
          </div>
        </div>
      ),
  bgColor: 'bg-black'
    },
    {
      id: 'food-delivery-website',
      title: 'Food Delivery Website',
      heading: 'Tomato',
      link: 'https://github.com/Shivansha23/Tomato',
      bulletPoints: [
        'Developed a responsive food delivery website "Tomato" using HTML, CSS, JavaScript, and React, focusing on clean UI and seamless UX for intuitive navigation.',
        'Supports manual entry, bulk uploads, and Tally sync — fast, simple, and error-free.',
        'Validates and structures data instantly — your single source of truth.'
      ],
      image: (
        <div className="bg-black p-2 sm:p-4 md:p-6 rounded-lg shadow-md border border-gray-700">
          <div className="flex justify-center items-center">
            <img 
              src="/images/tomato.jpg" 
              alt="Input Layer Visualization" 
              className="w-full max-w-[280px] sm:max-w-[350px] md:max-w-[400px] h-auto"
            />
          </div>
        </div>
      ),
  bgColor: 'bg-black'
    }
    ];

  return (
    <section id="projects" className="py-16 lg:py-24 text-gray-100">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="heading-lg mb-6 text-white">Projects</h2>
        </div>
        
        
        {isMobile ? (
          
          <TabCarousel tabs={tabContents} />
        ) : (
          
          <ScrollTabSection tabs={tabContents} />
        )}
      </div>
    </section>
  );
};

export default Projects;
