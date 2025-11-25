"use client";

import { useState } from "react";
import { MessageCircle, Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [contactModalOpen, setContactModalOpen] = useState(false);

  const handleSmoothScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    const targetId = href.replace('#', '');
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };

  const handleContactClick = () => {
    setContactModalOpen(true);
  };

  const navItems = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Experience", href: "#experience" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-[1000] backdrop-blur-md" style={{
      width: '100%',
      height: '64px',
      opacity: 1,
      paddingTop: '8px',
      paddingRight: 'clamp(16px, 4vw, 80px)',
      paddingBottom: '8px',
      paddingLeft: 'clamp(16px, 4vw, 80px)',
      background: 'rgba(0, 0, 0, 0.3)',
      backdropFilter: 'blur(12px)'
    }}>
      <div className="max-w-full mx-auto flex items-center justify-center h-full">
        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center justify-center">
          <div className="flex items-center space-x-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => handleSmoothScroll(e, item.href)}
                className="text-gray-300 hover:text-white transition-all duration-300 hover:scale-105 font-medium py-1 hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              >
                {item.name}
              </a>
            ))}
          </div>
        </nav>

        {/* Hamburger Icon */}
        <button
          className="lg:hidden flex items-center justify-center p-2 rounded focus:outline-none ml-auto"
          onClick={() => setMenuOpen((open) => !open)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X className="w-7 h-7 text-gray-300" /> : <Menu className="w-7 h-7 text-gray-300" />}
        </button>
      </div>

      {/* Mobile Menu with Transition */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-500 ease-in-out ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
          }`}
      >
        <div className="bg-[#0F0F11]/95 backdrop-blur-lg border-b border-gray-700/50 shadow-lg">
          <nav className="flex flex-col items-center space-y-4 py-6">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  handleSmoothScroll(e, item.href);
                  setMenuOpen(false);
                }}
                className="text-gray-300 hover:text-[#91C499] transition-all duration-300 font-medium text-lg hover:drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
      </div>
      
     
    </header>
  );
}
