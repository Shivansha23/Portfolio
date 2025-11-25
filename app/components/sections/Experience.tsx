"use client";

import { motion } from 'framer-motion';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface ExperienceItem {
  id: number;
  title: string;
  company: string;
  period: string;
  description: string;
  technologies: string[];
}

const Experience = () => {
  const [expandedId, setExpandedId] = useState<number | null>(1);

  const experiences: ExperienceItem[] = [
    {
      id: 1,
      title: "Frontend Developer Intern @ Sniperthink",
      company: "Sniperthink",
      period: "August 2025 - October 2025",
      description: "Developed and deployed fully responsive websites by converting high-fidelity UI/UX designs into interactive React interfaces. I optimized component structures and animations to enhance frontend performance across devices. I also collaborated with UI/UX and AI engineering teams to refine designs and integrate APIs for scalable, production-ready solutions.",
      technologies: ["React", "TypeScript", "JavaScript", "UI/UX", "Git and GitHub"]
    },
    {
      id: 2,
      title: "Artificial Intelligence Intern @ Evoastra Venturers PVT LTD",
      company: "Evoastra Venturers PVT LTD",
      period: "February 2025 - April 2025",
      description: "learned foundational AI concepts, explored basic model pipelines, and understood how clean and structured data improves model performance. This internship strengthened my understanding of AI fundamentals and enhanced my ability to work with real-world datasets.",
      technologies: ["Python", "Jupyter", "NumPy", "NLP", "Pandas"]
    }
  ];

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

  const toggleExpand = (id: number) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="relative py-20 overflow-hidden">
      {/* Animated Transitioning Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black">
        {/* Animated gradient layers */}
        <div 
          className="absolute inset-0 opacity-50"
          style={{
            background: 'linear-gradient(45deg, #1a1a1a 0%, #2d2d2d 25%, #404040 50%, #1a1a1a 75%, #2d2d2d 100%)',
            backgroundSize: '400% 400%',
            animation: 'gradientShift 15s ease infinite'
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-800/20 via-gray-700/20 to-gray-600/20 animate-pulse"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-700/30 via-transparent to-transparent"></div>
        
        {/* Floating particles effect */}
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.1) 1px, transparent 1px)',
            backgroundSize: '50px 50px',
            animation: 'particleFloat 20s linear infinite'
          }}
        />
      </div>

      <style jsx>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        @keyframes particleFloat {
          0% {
            transform: translateY(0) translateX(0);
          }
          100% {
            transform: translateY(-50px) translateX(50px);
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
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Professional Experience</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-white-500 to-gray-500 mx-auto mb-6"></div>
          <p className="text-gray-400 text-lg max-w-3xl mx-auto">
            My journey through various roles and companies, building amazing products
          </p>
        </motion.div>

        {/* Experience Timeline */}
        <div className="max-w-4xl mx-auto space-y-6">
          {experiences.map((exp, index) => (
            <motion.div
              key={exp.id}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeInVariants}
              transition={{ delay: index * 0.1 }}
              className="group"
            >
              {/* Experience Card Header */}
              <div
                onClick={() => toggleExpand(exp.id)}
                className={`cursor-pointer transition-all duration-300 ${
                  expandedId === exp.id 
                    ? 'bg-gradient-to-r from-blue-700 to-gray-600' 
                    : 'bg-gray-800 hover:bg-gray-700'
                } rounded-t-lg px-4 py-3`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-white text-lg md:text-xl font-semibold">{exp.title}</h3>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="text-white text-sm md:text-base font-medium">{exp.period}</span>
                    <ChevronDown 
                      className={`w-5 h-5 text-white transition-transform duration-300 ${
                        expandedId === exp.id ? 'rotate-180' : ''
                      }`}
                    />
                  </div>
                </div>
              </div>

              {/* Experience Card Body */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  expandedId === exp.id ? 'max-h-[800px] opacity-100' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-b-lg p-4 space-y-4">
                  {/* Description */}
                  <p className="text-gray-300 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Technologies */}
                  <div>
                    <h4 className="text-white font-semibold mb-2">Technologies & Skills</h4>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <motion.span
                          key={techIndex}
                          initial={{ opacity: 0, scale: 0.8 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ delay: techIndex * 0.05 }}
                          className="px-3 py-1.5 bg-blue-600/30 hover:bg-blue-600/50 text-blue-300 rounded-full text-sm font-medium transition-all duration-300 border border-blue-500/30"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
