'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  const cardVariants = {
    hidden: { 
      scale: 0.95, 
      opacity: 0
    },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const aboutSections = [
    {
      icon: "🎯",
      title: "Background & Philosophy",
      content: "With a solid foundation in Physics and over 5 years of experience in the technology sector, I bring analytical precision to quality assurance and software development. My approach combines systematic problem-solving with innovative thinking to deliver reliable, high-quality solutions.",
      borderColor: "border-blue-200",
      accentColor: "text-blue-600"
    },
    {
      icon: "⚡",
      title: "Technical Expertise",
      content: "Specialized in test automation frameworks, quality assurance methodologies, and front-end development. I focus on creating robust systems that maintain excellence at scale, with expertise in modern testing tools and development practices that ensure product reliability.",
      borderColor: "border-green-200",
      accentColor: "text-green-600"
    },
    {
      icon: "🚀",
      title: "Professional Growth",
      content: "Committed to continuous learning and knowledge sharing within the tech community. I actively contribute to open-source projects, mentor emerging QA professionals, and stay current with industry best practices to deliver cutting-edge solutions.",
      borderColor: "border-purple-200",
      accentColor: "text-purple-600"
    }
  ];

  return (
    <div className="bg-white min-w-full mx-auto">
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,_rgba(0,0,0,0.05)_1px,_transparent_0)] bg-[size:24px_24px] opacity-30" />
      </div>

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center pt-16 pb-12 px-4 lg:px-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            variants={itemVariants}
            className="w-full"
          >
            <h1 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 tracking-tight">
              About Me
            </h1>
            <div className="w-16 h-0.5 bg-gray-900 mx-auto mb-6" />
            <p className="text-base text-gray-600 max-w-2xl mx-auto leading-relaxed">
              QA Engineer & Developer focused on delivering quality solutions through systematic testing and innovative development practices.
            </p>
          </motion.div>
        </motion.div>

        {/* Main Content */}
        <div className="w-full px-4 lg:px-8 pb-20" ref={ref}>
          <motion.div
            className="w-full"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            <div className="grid gap-6 lg:gap-8 w-full">
              {aboutSections.map((section, index) => (
                <motion.div
                  key={index}
                  className="group relative w-full"
                  variants={cardVariants}
                  whileHover={{ y: -2 }}
                  onHoverStart={() => setActiveSection(index)}
                >
                  <div className={`bg-white rounded-lg border-2 ${section.borderColor} p-6 lg:p-8 shadow-sm hover:shadow-md transition-all duration-300 w-full`}>
                    <div className="flex items-start gap-4 lg:gap-6 w-full">
                      {/* Icon */}
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center border border-gray-200">
                          <span className="text-xl">{section.icon}</span>
                        </div>
                      </div>

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <h3 className={`text-lg font-semibold ${section.accentColor} mb-3`}>
                          {section.title}
                        </h3>
                        <p className="text-sm text-gray-700 leading-relaxed">
                          {section.content}
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Skills Summary */}
            <motion.div
              className="mt-16 bg-gray-50 rounded-lg p-6 lg:p-8 border border-gray-200 w-full"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
            >
              <h3 className="text-lg font-semibold text-gray-900 mb-4 text-center">
                Core Competencies
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center w-full">
                {[
                  'Test Automation',
                  'Quality Assurance',
                  'Frontend Development',
                  'System Analysis',
                  'Process Optimization',
                  'Team Leadership',
                  'Technical Documentation',
                  'Continuous Integration'
                ].map((skill, index) => (
                  <motion.div
                    key={index}
                    className="bg-white px-3 py-2 rounded-md border border-gray-200 text-xs font-medium text-gray-700"
                    whileHover={{ scale: 1.05 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {skill}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Professional Statement */}
            <motion.div
              className="mt-12 text-center w-full"
              variants={itemVariants}
              initial="hidden"
              animate={controls}
            >
              <div className="bg-gradient-to-r from-gray-900 to-gray-800 text-white px-6 py-4 rounded-lg inline-block">
                <p className="text-sm font-medium">
                  Ready to contribute to your team's success through quality-driven development
                </p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;