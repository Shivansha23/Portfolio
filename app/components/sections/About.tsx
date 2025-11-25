"use client";

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

const About = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [displayedText, setDisplayedText] = useState('');
  const [hasAnimated, setHasAnimated] = useState(false);
  const fullText = 'ABOUT ME';
  const typingSpeed = 150; // milliseconds per character

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const startTypewriter = () => {
    if (hasAnimated) return;
    setHasAnimated(true);
    
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, typingSpeed);

    return () => clearInterval(timer);
  };

  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.6
      } 
    }
  };

  const skills = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Tailwind CSS',
    'TypeScript',
    'Next.js',
    'Node.js',
    'SQL',
    'GitHub',
    'Responsive Design',
    'SEO'
  ];

  return (
    <section id="about" className="relative py-20 bg-#2f2f2f overflow-hidden">
      {/* Animated Grid Background with Fade Edges */}
      <div className="absolute inset-0 pointer-events-none">
        <div 
          className="absolute inset-0 animate-pulse" 
          style={{
            backgroundImage: `
              linear-gradient(to right, rgba(75, 75, 75, 0.3) 1px, #202020 1px),
              linear-gradient(to bottom, rgba(75, 75, 75, 0.3) 1px, #202020 1px)
            `,
            backgroundSize: '50px 50px',
            maskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%,transparent 100%)',
            WebkitMaskImage: 'radial-gradient(ellipse 80% 70% at 50% 50%, black 40%, transparent 100%)',
            animation: 'gridMove 20s linear infinite'
          }}
        />
        {/* Moving gradient overlay */}
        <div 
          className="absolute inset-0"
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(145, 196, 153, 0.1) 0%, transparent 50%)',
            animation: 'gradientMove 8s ease-in-out infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gridMove {
          0% {
            background-position: 0 0;
          }
          100% {
            background-position: 50px 50px;
          }
        }
        
        @keyframes gradientMove {
          0%, 100% {
            transform: translate(0, 0) scale(1);
            opacity: 0.3;
          }
          50% {
            transform: translate(20px, 20px) scale(1.2);
            opacity: 0.5;
          }
        }
      `}</style>

      <div className="container-custom relative z-10">
        {/* Section Heading */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeInVariants}
          onViewportEnter={startTypewriter}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {displayedText}
            <span className="animate-pulse">|</span>
          </h2>
          
          
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Side - About Me */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
          >
            <h2 className="heading-lg text-white mb-6">Get to know me!</h2>
            
            <div className="space-y-4 text-content text-gray-300">
              <p>
                I'm a <span className="font-semibold text-white">Frontend Focused Web Developer</span> skilled in building clean, responsive, and high-performance user interfaces. I work across the MERN stack and AWS, creating smooth, secure, and scalable experiences—from frontend design to backend logic. You can explore some of my work in the <span className="font-semibold text-white">Projects</span> section.
              </p>
              <p>
                I also enjoy sharing insights from my journey in Web Development so they can help others in the developer community. Feel free to connect with me on {' '}
                <a 
                  href="https://www.linkedin.com/in/shivanshapathak23/" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 underline transition-colors"
                >
                  <span className="font-semibold text-white">Linkedin</span>
                </a>{' '}
                
                where I post useful content related to Web Development and Programming.
              </p>
              
              <p>
                I'm open to <span className="font-semibold text-white">Job</span> opportunities where I can contribute, learn and grow. If 
                you have a good opportunity that matches my skills and experience 
                then don't hesitate to <span className="font-semibold text-white">contact</span> me.
              </p>
            </div>
          </motion.div>

          {/* Right Side - Skills */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeInVariants}
            transition={{ delay: 0.2 }}
          >
            <h2 className="heading-lg text-white mb-6">My Skills</h2>
            
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="px-6 py-3 bg-gray-800/50 hover:bg-gray-700/50 text-gray-300 rounded-lg font-medium transition-all duration-300 hover:scale-105 backdrop-blur-sm border border-gray-700/30"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
