import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  TestTube, 
  Code, 
  GitBranch, 
  Trophy, 
  Calendar,
  CheckCircle,
  Zap,
  Target
} from 'lucide-react';

const QASkills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

useEffect(() => {
  if (!mounted) return;
  
  // For testing - replace the fetch call with this:
  const data = [
    {
      "icon": "SiTestinglibrary",
      "Cypress": "Automation Frame Work",
      "Command": "100%",
      "Integration": "Cucumber, POM, Allure Report, Git",
      "Project": "5+",
      "Experience": "1+"
    },
    // ... rest of your test data
  ];
  setSkills(transformData(data));
  setLoading(false);
}, [mounted]);

const getIconComponent = (skillName) => {
  const iconMap = {
    'Cypress': Code,
    'Selenium': TestTube,
    'Playwright': Zap,
    'Appium': Target,
    'Puppeteer': GitBranch,
    'Nightwatch.js': CheckCircle
  };
  return iconMap[skillName] || TestTube;
};

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
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
        stiffness: 300,
        damping: 24
      }
    }
  };

  const hoverVariants = {
    hover: {
      scale: 1.05,
      y: -8,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 17
      }
    }
  };

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return null;
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-blue-50 to-purple-50 flex items-center justify-center">
        <motion.div 
          className="flex flex-col items-center space-y-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
        >
          <motion.div
            className="w-16 h-16 border-4 border-green-500 border-t-transparent rounded-full"
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
          <motion.p 
            className="text-lg font-medium text-gray-700"
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            Loading QA Skills...
          </motion.p>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-red-50 to-pink-50 flex items-center justify-center">
        <motion.div 
          className="text-center p-8 bg-white rounded-xl shadow-lg"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="text-red-500 text-6xl mb-4">⚠️</div>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Error Loading Skills</h2>
          <p className="text-gray-600">{error}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-sky-50 via-blue-50 to-purple-50 py-12 px-4">
      <motion.div 
        className="max-w-7xl mx-auto"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Header */}
        <motion.div 
          className="text-center mb-16"
          variants={cardVariants}
        >
          <motion.div 
            className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-blue-500 rounded-full mb-6"
            whileHover={{ rotate: 360 }}
            transition={{ duration: 0.6 }}
          >
            <TestTube className="w-10 h-10 text-white" />
          </motion.div>
          <h1 className="text-5xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-4">
            QA Automation Skills
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive test automation expertise across multiple frameworks and technologies
          </p>
        </motion.div>

        {/* Skills Grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {skills.map((skill, index) => {
            const IconComponent = getIconComponent(skill.name);

            return (
              <motion.div
                key={index}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20"
                variants={cardVariants}
                whileHover="hover"
                {...hoverVariants}
              >
                <div className="flex items-center justify-between mb-4">
                  <motion.div 
                    className="flex items-center justify-center w-14 h-14 bg-gradient-to-br from-green-400 to-blue-500 rounded-xl"
                    whileHover={{ scale: 1.1 }}
                  >
                    <IconComponent className="w-7 h-7 text-white" />
                  </motion.div>
                  <motion.div 
                    className="flex items-center space-x-1 bg-green-100 px-3 py-1 rounded-full"
                    whileHover={{ scale: 1.05 }}
                  >
                    <CheckCircle className="w-4 h-4 text-green-600" />
                    <span className="text-sm font-semibold text-green-700">{skill.command}</span>
                  </motion.div>
                </div>

                <h3 className="text-2xl font-bold text-gray-800 mb-2">{skill.name}</h3>
                <p className="text-gray-600 mb-4">{skill.description}</p>

                <div className="space-y-3">
                  <div className="flex items-center space-x-2">
                    <GitBranch className="w-4 h-4 text-blue-500" />
                    <span className="text-sm text-gray-700">
                      <strong>Integrations:</strong> {skill.integration}
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <Trophy className="w-4 h-4 text-purple-500" />
                      <span className="text-sm text-gray-700">
                        <strong>Projects:</strong> {skill.project}
                      </span>
                    </div>
                    
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4 text-green-500" />
                      <span className="text-sm text-gray-700">
                        <strong>{skill.experience}</strong> years
                      </span>
                    </div>
                  </div>
                </div>

                <motion.div 
                  className="mt-4 h-2 bg-gray-200 rounded-full overflow-hidden"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ delay: 0.5 + index * 0.1 }}
                >
                  <motion.div 
                    className="h-full bg-gradient-to-r from-green-500 to-blue-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: skill.command }}
                    transition={{ delay: 0.7 + index * 0.1, duration: 0.8 }}
                  />
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats Summary */}
        <motion.div 
          className="mt-16 bg-gradient-to-r from-green-500 via-blue-500 to-purple-500 rounded-2xl p-8 text-white"
          variants={cardVariants}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold mb-2">{skills.length}</div>
              <div className="text-green-100">Automation Frameworks</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold mb-2">
                {skills.reduce((total, skill) => total + parseInt(skill.project.replace('+', '')), 0)}+
              </div>
              <div className="text-blue-100">Total Projects</div>
            </motion.div>
            <motion.div whileHover={{ scale: 1.05 }}>
              <div className="text-3xl font-bold mb-2">100%</div>
              <div className="text-purple-100">Command Proficiency</div>
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};


export default QASkills;
