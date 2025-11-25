'use client';

import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform, useMotionValueEvent, Variants, Easing } from 'framer-motion';

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

interface ScrollTabSectionProps {
  tabs: TabContent[];
}

const ScrollTabSection: React.FC<ScrollTabSectionProps> = ({ tabs }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  // Set up refs for each section using callback refs pattern
  const sectionRefs = useRef<(HTMLDivElement | null)[]>([]);
  
  // Initialize refs array based on number of tabs
  useEffect(() => {
    sectionRefs.current = Array(tabs.length).fill(null);
  }, [tabs.length]);
  
  // Custom easing
  const customEasing: Easing = [0.4, 0, 0.2, 1];
  const customEasing2: Easing = [0.25, 0.46, 0.45, 0.94];
  
  // Animation variants
  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40, scale: 0.9 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { 
        duration: 0.8, 
        ease: customEasing,
      } 
    },
    exit: { 
      opacity: 0,
      y: -40,
      scale: 0.9,
      transition: { 
        duration: 0.6, 
        ease: customEasing,
      } 
    }
  };
  
  const titleVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.5, 
        ease: customEasing2,
        delay: 0.1
      } 
    }
  };
  
  const headingVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: customEasing2,
        delay: 0.2
      } 
    }
  };
  
  const bulletVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({ 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6, 
        ease: customEasing2,
        delay: 0.3 + (i * 0.1) // Staggered delay starting after heading
      } 
    })
  };

  // Handle mouse movement for parallax effect
  const handleMouseMove = (event: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (event.clientX - left) / width - 0.5;
    const y = (event.clientY - top) / height - 0.5;
    
    setMousePosition({ x, y });
  };

  // Update active section based on scroll position
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = sectionRefs.current.findIndex((ref) => ref === entry.target);
            if (index !== -1) {
              setActiveSection(index);
            }
          }
        });
      },
      {
        root: null,
        rootMargin: "-50% 0px",
        threshold: 0
      }
    );

    sectionRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => {
      sectionRefs.current.forEach((ref) => {
        if (ref) observer.unobserve(ref);
      });
    };
  }, []);

  return (
    <div className="layers-container bg-black" ref={containerRef} onMouseMove={handleMouseMove}>
      {/* Scrollable Content */}
      <div className="layers-sticky-container">
        {tabs.map((tab, index) => (
          <div 
            key={tab.id}
            ref={el => {
              // Store the element in the refs array
              if (el) sectionRefs.current[index] = el;
            }}
            className="layer-section min-h-screen"
          >
            <div className="container-custom py-8 md:py-16 lg:py-24 relative">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-16 items-center">
                {/* Left column: Text content */}
                <div className="space-y-6">
                  {/* Layer title */}
                  <motion.h3
                    className="layer-title text-sm sm:text-base md:text-lg font-semibold text-[#1A6262]"
                    variants={titleVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                  >
                    {tab.title}
                  </motion.h3>
                  
                  {/* Layer heading */}
                  <motion.h2 
                    className="layer-heading text-xl sm:text-2xl md:text-3xl font-bold text-white"
                    variants={headingVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px" }}
                  >
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
                  </motion.h2>
                  
                  <ul className="space-y-3 sm:space-y-4">
                    {tab.bulletPoints.map((point, i) => (
                      <motion.li 
                        key={i} 
                        className="bullet-point-item flex items-start"
                        custom={i}
                        variants={bulletVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: false, margin: "-100px" }}
                      >
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
                      </motion.li>
                    ))}
                  </ul>
                </div>

                {/* Right column: Sticky card visual */}
                <div className="layers-sticky-element">
                  <motion.div 
                    className="layer-card w-full"
                    variants={cardVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: false, margin: "-100px", amount: 0.3 }}
                    animate={index === activeSection ? "visible" : undefined}
                    style={{
                      rotateY: index === activeSection ? mousePosition.x * 5 : 0,
                      rotateX: index === activeSection ? mousePosition.y * -5 : 0,
                    }}
                  >
                    <div className="card-glow"></div>
                    {tab.image}
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ScrollTabSection;