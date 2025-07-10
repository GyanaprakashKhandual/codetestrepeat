'use client';

import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import { FaCode, FaProjectDiagram, FaTools, FaClock } from 'react-icons/fa';
import { SiTestinglibrary } from 'react-icons/si';

// Icon mapping for QA technologies
const getIcon = (tech) => {
  const iconMap = {
    'Selenium': FaTools,
    'Cypress': FaCode,
    'Playwright': FaCode,
    'Postman': FaTools,
    'JMeter': FaTools,
    'Appium': FaTools,
    'TestNG': SiTestinglibrary,
    'JUnit': SiTestinglibrary,
    'Cucumber': FaTools,
    'RestAssured': FaTools,
    'SoapUI': FaTools
  };
  return iconMap[tech] || SiTestinglibrary;
};

// Get color based on experience
const getExperienceColor = (experience) => {
  const years = parseInt(experience) || 0;
  if (years >= 5) return 'from-green-400 to-emerald-500';
  if (years >= 3) return 'from-blue-400 to-cyan-500';
  if (years >= 1) return 'from-yellow-400 to-orange-500';
  return 'from-red-400 to-pink-500';
};

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
};

const cardVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('https://port-backend-lh99.onrender.com/api/qa-skills');
        if (!response.ok) {
          throw new Error('Failed to fetch QA skills data');
        }
        const data = await response.json();
        setSkills(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchSkills();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
          className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full"
        />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-red-500 text-xl mb-4">Error loading QA skills</div>
          <div className="text-gray-600">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-white relative overflow-hidden">
      {/* Animated Background SVG */}
      <svg className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 1000 1000">
        <defs>
          <radialGradient id="grad1" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#10B981" stopOpacity="0.3" />
            <stop offset="100%" stopColor="#3B82F6" stopOpacity="0.1" />
          </radialGradient>
        </defs>
        <motion.circle
          cx="200"
          cy="200"
          r="150"
          fill="url(#grad1)"
          animate={{ 
            cx: [200, 800, 200], 
            cy: [200, 600, 200],
            r: [150, 200, 150]
          }}
          transition={{ 
            duration: 20, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
        <motion.circle
          cx="800"
          cy="800"
          r="100"
          fill="url(#grad1)"
          animate={{ 
            cx: [800, 200, 800], 
            cy: [800, 200, 800],
            r: [100, 180, 100]
          }}
          transition={{ 
            duration: 15, 
            repeat: Infinity, 
            ease: "linear" 
          }}
        />
      </svg>

      <div className="relative z-10 container mx-auto px-4 py-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="flex items-center justify-center mb-4">
            <motion.div
              animate={{ rotate: [0, 360] }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
              className="mr-3"
            >
              <SiTestinglibrary className="w-8 h-8 text-blue-500" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              QA Skills Dashboard
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my expertise in Quality Assurance tools and technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
        >
          {skills.map((skill, index) => {
            const IconComponent = getIcon(Object.keys(skill)[1]);
            const experienceYears = parseInt(skill.Experience || skill.Expricence) || 0;

            return (
              <motion.div
                key={index}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-blue-200 transition-all duration-300"
              >
                {/* Tech Icon and Name */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getExperienceColor(skill.Experience || skill.Expricence)} mr-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">{Object.keys(skill)[1]}</h3>
                    <p className="text-sm text-gray-600">{skill[Object.keys(skill)[1]]}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Command</span>
                    <span className="font-semibold text-blue-600">{skill.Command}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Integration</span>
                    <span className="font-semibold text-green-600">{skill.Integration}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Projects</span>
                    <span className="font-semibold text-purple-600">{skill.Project}</span>
                  </div>

                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Experience</span>
                    <span className="font-semibold text-orange-600">{skill.Experience || skill.Expricence} years</span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Footer Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 text-center"
        >
          <div className="bg-white/60 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/20 max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  {skills.length}
                </div>
                <div className="text-gray-600">Technologies</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-green-600 mb-2">
                  {skills.reduce((acc, skill) => acc + parseInt(skill.Project.replace('+', '') || 0), 0)}+
                </div>
                <div className="text-gray-600">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {Math.round(skills.reduce((acc, skill) => acc + (parseInt(skill.Experience || skill.Expricence) || 0), 0) / skills.length)}
                </div>
                <div className="text-gray-600">Avg Years</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {skills.filter(skill => (parseInt(skill.Experience || skill.Expricence) || 0) >= 5).length}
                </div>
                <div className="text-gray-600">Expert Level</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Skills;