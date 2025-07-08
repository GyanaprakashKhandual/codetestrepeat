'use client';

import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useInView } from 'framer-motion';
import { useRef } from 'react';

const About = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const controls = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [controls, isInView]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
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
      scale: 0.8, 
      opacity: 0,
      rotateX: 45
    },
    visible: {
      scale: 1,
      opacity: 1,
      rotateX: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15
      }
    }
  };

  const floatingVariants = {
    animate: {
      y: [-10, 10, -10],
      rotate: [0, 5, -5, 0],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  const aboutSections = [
    {
      emoji: "🌟",
      title: "Dreamer Turned Creator",
      content: "Born and raised in the culturally rich state of Odisha, I was always fascinated by how things work. My journey in Physics gave me analytical superpowers that I now apply to technology and quality assurance. I believe every complex system can be understood and improved with the right approach.",
      gradient: "from-purple-100 via-violet-50 to-white",
      accentColor: "from-purple-400 to-violet-500"
    },
    {
      emoji: "💻",
      title: "Code. Test. Repeat.",
      content: "With over 5 years in the tech industry, I've mastered the art of building robust systems and breaking them (on purpose!). My expertise spans from crafting beautiful front-end experiences to implementing bulletproof test automation frameworks. I thrive in environments where quality and innovation intersect.",
      gradient: "from-sky-100 via-blue-50 to-white",
      accentColor: "from-sky-400 to-blue-500"
    },
    {
      emoji: "💚",
      title: "Passion Never Dies",
      content: "Beyond the screen, I'm an avid learner constantly exploring new technologies and methodologies. I'm passionate about mentoring aspiring QA engineers and contributing to open-source projects. When I'm not debugging code, you'll find me experimenting with new automation tools or sharing knowledge with the tech community.",
      gradient: "from-green-100 via-emerald-50 to-white",
      accentColor: "from-green-400 to-emerald-500"
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50 overflow-hidden relative">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-pink-200 to-rose-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute -bottom-40 -left-40 w-96 h-96 bg-gradient-to-br from-blue-200 to-sky-200 rounded-full opacity-20 blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            rotate: [360, 180, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-gradient-to-br from-green-200 to-emerald-200 rounded-full opacity-15 blur-2xl"
          animate={{
            x: [0, 100, -100, 0],
            y: [0, -100, 100, 0],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      {/* Mouse Follower */}
      <motion.div
        className="fixed w-6 h-6 bg-gradient-to-r from-pink-400 to-blue-400 rounded-full pointer-events-none z-50 mix-blend-difference"
        style={{
          left: mousePosition.x - 12,
          top: mousePosition.y - 12,
        }}
        animate={{
          scale: [1, 1.5, 1],
        }}
        transition={{
          duration: 0.5,
          repeat: Infinity,
        }}
      />

      <div className="relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center pt-20 pb-12"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="relative inline-block"
            variants={itemVariants}
          >
            <h1 className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-pink-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
              About Me
            </h1>
            <motion.div
              className="absolute -inset-4 bg-gradient-to-r from-pink-400 via-blue-400 to-green-400 rounded-full opacity-20 blur-xl"
              animate={{
                scale: [1, 1.1, 1],
                opacity: [0.2, 0.3, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </motion.div>
          
          <motion.p
            className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Passionate QA Engineer & Developer crafting digital experiences with precision and creativity
          </motion.p>
        </motion.div>

        {/* Main Content */}
        <div className="container mx-auto px-4 lg:px-8 pb-20" ref={ref}>
          <motion.div
            className="grid gap-8 lg:gap-12"
            variants={containerVariants}
            initial="hidden"
            animate={controls}
          >
            {aboutSections.map((section, index) => (
              <motion.div
                key={index}
                className="group relative"
                variants={cardVariants}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => setActiveSection(index)}
              >
                {/* Card Background with Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${section.gradient} rounded-3xl transform group-hover:scale-105 transition-transform duration-500`} />
                
                {/* Gradient Border */}
                <div className={`absolute inset-0 bg-gradient-to-r ${section.accentColor} rounded-3xl p-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}>
                  <div className={`w-full h-full bg-gradient-to-br ${section.gradient} rounded-3xl`} />
                </div>

                {/* Card Content */}
                <div className="relative bg-white/40 backdrop-blur-lg rounded-3xl p-8 lg:p-12 border border-white/20">
                  <div className="flex flex-col lg:flex-row items-start lg:items-center gap-8">
                    {/* Emoji Icon */}
                    <motion.div
                      className="relative"
                      variants={floatingVariants}
                      animate="animate"
                    >
                      <div className="w-24 h-24 lg:w-32 lg:h-32 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30">
                        <span className="text-4xl lg:text-6xl">{section.emoji}</span>
                      </div>
                      
                      {/* Pulsing Ring */}
                      <motion.div
                        className={`absolute inset-0 rounded-full bg-gradient-to-r ${section.accentColor} opacity-20`}
                        animate={{
                          scale: [1, 1.2, 1],
                          opacity: [0.2, 0.4, 0.2],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "easeInOut"
                        }}
                      />
                    </motion.div>

                    {/* Text Content */}
                    <div className="flex-1">
                      <motion.h2
                        className={`text-3xl lg:text-4xl font-bold mb-6 bg-gradient-to-r ${section.accentColor} bg-clip-text text-transparent`}
                        layoutId={`title-${index}`}
                      >
                        {section.title}
                      </motion.h2>
                      
                      <motion.p
                        className="text-gray-700 text-lg leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                      >
                        {section.content}
                      </motion.p>
                    </div>
                  </div>

                  {/* Decorative Elements */}
                  <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl" />
                  <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-white/20 to-white/5 rounded-full blur-xl" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Bottom CTA Section */}
          <motion.div
            className="mt-20 text-center"
            variants={itemVariants}
            initial="hidden"
            animate={controls}
          >
            <motion.div
              className="inline-flex items-center gap-4 bg-gradient-to-r from-pink-500 via-blue-500 to-green-500 text-white px-8 py-4 rounded-full font-semibold text-lg"
              whileHover={{ 
                scale: 1.05
              }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Let's Create Something Amazing Together</span>
              <motion.div
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                ✨
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default About;