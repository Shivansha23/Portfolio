
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { AuroraBackground } from '@/app/components/ui/aurora-background';

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Trigger animations after component mounts
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  // Animation variants
  const imageVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } }
  };

  const headingVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 0.5 // Start after image animation
      } 
    }
  };

  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 1.0 // Start after heading animation
      } 
    }
  };

  const buttonVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        delay: 1.5 // Start after text animation
      } 
    }
  };

  return (
    <AuroraBackground className="h-auto min-h-screen pt-[64px]" showRadialGradient={true}>
      <section id="home" className="relative py-14 lg:py-14 overflow-hidden w-full">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-1 lg:order-1">
              <div className="max-w-2xl mx-auto lg:mx-0">
                <motion.h1 
                  className="heading-xl text-white"
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  variants={headingVariants}
                >
                  <span className="text-white">Shivansha Pathak </span><span className="text-7xl sm:text-5xl">Web Developer.</span>
                </motion.h1>
                <motion.p 
                  className="text-lead text-white"
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  variants={textVariants}
                >
                  A Result-Oriented Web Developer building and managing Websites and Web Applications that leads to the success of the overall product
                </motion.p>
                <motion.div 
                  className="flex flex-col sm:flex-row items-center gap-4 mt-6"
                  initial="hidden"
                  animate={isLoaded ? "visible" : "hidden"}
                  variants={buttonVariants}
                >
                  <Link href="https://drive.google.com/file/d/1UQqL9QWo5XQG9ITLHL9yBgZ1r4pC1Yqx/view?usp=drive_link" className="contact-button w-full sm:w-auto text-center">
                    Resume Download
                  </Link>
                </motion.div>
              </div>
            </div>
            <motion.div 
              className="order-2 lg:order-2"
              initial="hidden"
              animate={isLoaded ? "visible" : "hidden"}
              variants={imageVariants}
            >
              <div className="relative">
                  <div className="relative w-full h-[300px] sm:h-[400px] flex items-center justify-center">
                    <div className="relative w-[320px] h-[320px] sm:w-[380px] sm:h-[380px] rounded-full shadow-[0_0_20px_rgba(255,255,255,0.6),0_0_40px_rgba(255,255,255,0.4),0_0_60px_rgba(255,255,255,0.3)] ring-4 ring-white/30">
                      <Image 
                        src="/images/profile.jpg"
                        alt="Shivansha Pathak"
                        fill
                        className="object-cover rounded-full"
                      />
                    </div>
                  </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </AuroraBackground>
  );
};

export default Hero;
