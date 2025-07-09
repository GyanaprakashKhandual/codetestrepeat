import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import { SiTestinglibrary } from "react-icons/si";
import { FaCode, FaProjectDiagram, FaTools, FaClock } from "react-icons/fa";

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/qa-skills");
        const data = await response.json();
        setSkills(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching skills:", error);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  // Animated SVG Background Component
  const AnimatedBackground = () => (
    <div className="absolute inset-0 overflow-hidden">
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1200 800"
        preserveAspectRatio="xMidYMid slice"
      >
        <defs>
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#667eea" stopOpacity="0.1" />
            <stop offset="50%" stopColor="#764ba2" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#f093fb" stopOpacity="0.1" />
          </linearGradient>
          <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#4facfe" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00f2fe" stopOpacity="0.12" />
          </linearGradient>
          <filter id="glow">
            <feGaussianBlur stdDeviation="3" result="coloredBlur"/>
            <feMerge> 
              <feMergeNode in="coloredBlur"/>
              <feMergeNode in="SourceGraphic"/>
            </feMerge>
          </filter>
        </defs>
        
        {/* Flowing waves */}
        <motion.path
          d="M0,300 Q300,200 600,300 T1200,300 V800 H0 Z"
          fill="url(#grad1)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, ease: "easeInOut" }}
        />
        
        <motion.path
          d="M0,400 Q400,300 800,400 T1200,400 V800 H0 Z"
          fill="url(#grad2)"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{ duration: 3, delay: 0.5, ease: "easeInOut" }}
        />

        {/* Floating geometric shapes */}
        <motion.circle
          cx="100"
          cy="100"
          r="3"
          fill="#667eea"
          opacity="0.3"
          animate={{ 
            cx: [100, 150, 100],
            cy: [100, 80, 100],
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        <motion.circle
          cx="900"
          cy="150"
          r="4"
          fill="#764ba2"
          opacity="0.4"
          animate={{ 
            cx: [900, 950, 900],
            cy: [150, 120, 150],
            scale: [1, 0.8, 1]
          }}
          transition={{ 
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1
          }}
        />

        <motion.path
          d="M200,200 L220,180 L240,200 L220,220 Z"
          fill="#4facfe"
          opacity="0.3"
          filter="url(#glow)"
          animate={{ 
            rotate: [0, 360],
            scale: [1, 1.1, 1]
          }}
          transition={{ 
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />

        {/* Connection lines */}
        <motion.path
          d="M100,300 Q300,250 500,300 Q700,350 900,300"
          stroke="#667eea"
          strokeWidth="1"
          fill="none"
          opacity="0.2"
          strokeDasharray="5,5"
          animate={{ 
            strokeDashoffset: [0, -20]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </div>
  );

  return (
    <section className="relative py-1 min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
      {/* Animated Background */}
      <AnimatedBackground />
      
      {/* Content */}
      <div className="relative w-full z-10">
       

        {loading ? (
          <div className="flex justify-center items-center h-32">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
              className="w-12 h-12 border-4 border-indigo-200 border-t-indigo-600 rounded-full"
            />
          </div>
        ) : (
          <div className="space-y-6">
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                viewport={{ once: true }}
                whileHover={{ 
                  y: -4, 
                  scale: 1.005,
                  transition: { duration: 0.3 }
                }}
                className="group relative w-full h-[120px] bg-white/90 backdrop-blur-sm rounded-2xl border border-white/30 overflow-hidden transition-all duration-300"
              >
                {/* Card Background Pattern */}
                <div className="absolute inset-0 opacity-5 group-hover:opacity-10 transition-opacity duration-300">
                  <svg width="100%" height="100%" viewBox="0 0 1200 120">
                    <defs>
                      <pattern id={`pattern-${index}`} patternUnits="userSpaceOnUse" width="30" height="30">
                        <path d="M0 15h30M15 0v30" stroke="#667eea" strokeWidth="0.5" />
                      </pattern>
                    </defs>
                    <rect width="100%" height="100%" fill={`url(#pattern-${index})`} />
                  </svg>
                </div>

                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-50/30 via-transparent to-purple-50/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                <div className="relative h-full flex items-center px-8">
                  {/* Skill Icon */}
                  <motion.div
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.5 }}
                    className="flex-shrink-0 p-3 rounded-xl bg-gradient-to-r from-indigo-500 to-purple-600 text-white mr-6"
                  >
                    <SiTestinglibrary className="w-6 h-6" />
                  </motion.div>

                  {/* Skill Name and Type */}
                  <div className="flex-shrink-0 mr-8 min-w-[200px]">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">
                      {Object.keys(skill)[1]}
                    </h3>
                    <p className="text-sm text-gray-600 font-medium">
                      {skill[Object.keys(skill)[1]]}
                    </p>
                  </div>

                  {/* Skills Information - Horizontal Layout */}
                  <div className="flex-1 flex items-center justify-between gap-6">
                    {/* Command */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-100 hover:border-blue-200 transition-all duration-300 min-w-[180px]"
                    >
                      <FaCode className="w-4 h-4 mr-2 text-blue-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-blue-700 uppercase tracking-wide">
                          Command
                        </p>
                        <p className="text-sm font-medium text-gray-800 truncate">
                          {skill.Command}
                        </p>
                      </div>
                    </motion.div>

                    {/* Integration */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-green-50 to-emerald-50 border border-green-100 hover:border-green-200 transition-all duration-300 min-w-[200px]"
                    >
                      <FaTools className="w-4 h-4 mr-2 text-green-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-green-700 uppercase tracking-wide">
                          Integration
                        </p>
                        <p className="text-sm font-medium text-gray-800 truncate">
                          {skill.Integration}
                        </p>
                      </div>
                    </motion.div>

                    {/* Projects */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-purple-50 to-pink-50 border border-purple-100 hover:border-purple-200 transition-all duration-300 min-w-[160px]"
                    >
                      <FaProjectDiagram className="w-4 h-4 mr-2 text-purple-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-purple-700 uppercase tracking-wide">
                          Projects
                        </p>
                        <p className="text-sm font-medium text-gray-800 truncate">
                          {skill.Project}
                        </p>
                      </div>
                    </motion.div>

                    {/* Experience */}
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      className="flex items-center px-4 py-2 rounded-lg bg-gradient-to-r from-orange-50 to-red-50 border border-orange-100 hover:border-orange-200 transition-all duration-300 min-w-[130px]"
                    >
                      <FaClock className="w-4 h-4 mr-2 text-orange-600 flex-shrink-0" />
                      <div>
                        <p className="text-xs font-semibold text-orange-700 uppercase tracking-wide">
                          Experience
                        </p>
                        <p className="text-sm font-medium text-gray-800">
                          {skill.Experience || skill.Expricence} years
                        </p>
                      </div>
                    </motion.div>
                  </div>
                </div>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Skills;