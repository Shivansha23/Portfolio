import React from "react";

export const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-20 py-16">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white">
            Let's Work Together
          </h2>
        </div>

        {/* Main Footer Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24">
          
          {/* Left Section - Tagline, Legal Links, Contact */}
          <div className="lg:col-span-5 space-y-8">
            {/* Tagline */}
            <div className="space-y-6">
              <p className="text-gray-300 text-base leading-relaxed max-w-md font-light transition-all duration-300 hover:text-white hover:scale-105">
              Let's build something impactful together—whether it's your brand, your website, or your next big idea.
              </p>
            </div>

            

            {/* Contact Information */}
            <div className="flex items-center gap-8">
              
              {/* Email */}
              <div className="flex items-center gap-2 group">
                <div className="w-5 h-5 flex items-center justify-center">
                  <svg className="w-6 h-6 text-[#ffffff] group-hover:text-white transition-colors duration-300" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"/>
                    <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"/>
                  </svg>
                </div>
                <a 
                  href="mailto:shivanshapathak23@gmail.com" 
                  className="text-gray-300 hover:text-white transition-colors duration-300 text-md font-bold"
                >
                  : shivanshapathak23@gmail.com
                </a>
              </div>
            </div>
          </div>

          {/* Right Section - Navigation Links */}
          <div className="lg:col-span-7">
            {/*<h3 className="text-white font-semibold text-lg mb-8 tracking-wide">Quick Links</h3>*/}

            {/* Desktop Layout - 2 Column Grid */}
            <div className="hidden md:grid grid-cols-2 gap-x-12 gap-y-6">
              <div className="space-y-6">
                <a 
                  href="#home"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300 ">Home</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                <a 
                  href="#about"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">About</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>

                
              </div>
              
              <div className="space-y-6">
                <a 
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Project</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                <a 
                  href="#experience"
                  onClick={(e) => {
                    e.preventDefault();
                    document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-2 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
                >
                  <span className="group-hover:translate-x-1 transition-transform duration-300">Experience</span>
                  <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </a>
                
              </div>
            </div>

            {/* Mobile Layout - Single Column Stack */}
            <div className="md:hidden space-y-4">
              <a 
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('home')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Home</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a 
                href="#about"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('about')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">About</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a 
                href="#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }} 
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Projects</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
              <a 
                href="#experience"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('experience')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }} 
                className="group flex items-center justify-between text-gray-300 hover:text-white transition-all duration-300 text-sm font-normal py-3 px-4 rounded-lg hover:bg-gray-800/30 focus:outline-none focus:ring-2 focus:ring-[#1A6262] focus:ring-opacity-50 border-b border-gray-700/50"
              >
                <span className="group-hover:translate-x-1 transition-transform duration-300">Experience</span>
                <svg className="w-4 h-4 text-gray-500 group-hover:text-[#1A6262] group-hover:translate-x-1 transition-all duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
              
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/60 my-10"></div>

        
          

          {/* Social Media - Right Aligned */}
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 order-1 md:order-2">
            <span className="text-gray-400 text-md font-light whitespace-nowrap">Let's Connect:</span>
            
            <div className="flex items-center gap-5">
              <a
                href="https://github.com/Shivansha23"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow me on Github"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
              >
                <img 
                  src="/images/github.svg" 
                  alt="Github" 
                  className="w-7 h-7 text-gray-400 group-hover:text-[#1A6262] transition-colors duration-300"
                />
              </a>
              
              <a
                href="https://www.instagram.com/shivanshaaa_/?next=%2F"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow me on Instagram"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
              >
                <img 
                  src="/images/insta.svg" 
                  alt="Instagram" 
                  className="w-8 h-8 text-gray-400 group-hover:text-[#1A6262] transition-colors duration-300"
                />
              </a>
              
              <a
                href="https://www.linkedin.com/in/shivanshapathak23/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Follow me on LinkedIn"
                className="group flex items-center justify-center transition-all duration-300 transform hover:scale-110 focus:outline-none"
              >
                <img 
                  src="/images/linkedin.svg" 
                  alt="LinkedIn" 
                  className="w-8 h-8 text-gray-400 group-hover:text-[#1A6262] transition-colors duration-300"
                />
              </a>
            </div>
          </div>
        </div>
      
    </footer>
  );
};

export default Footer;
