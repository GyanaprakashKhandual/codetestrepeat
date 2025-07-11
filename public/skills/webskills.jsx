'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Code, Zap, Trophy, TrendingUp, Star, Globe, Layers, Palette, Database, Settings } from 'lucide-react';

const WebSkillsDashboard = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch skills data from API
  useEffect(() => {
    const fetchSkills = async () => {
      try {
        const response = await fetch('https://port-backend-lh99.onrender.com/api/web-skills');
        if (!response.ok) {
          throw new Error('Failed to fetch skills data');
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

  // Icon mapping for different technologies
  const getIcon = (tech) => {
    const iconMap = {
      'HTML': Globe,
      'CSS': Palette,
      'JavaScript': Code,
      'React.js': Zap,
      'Next.js': Layers,
      'TypeScript': Settings,
      'Tailwind CSS': Palette,
      'Bootstrap': Layers,
      'Material UI': Palette,
      'Framer Motion': TrendingUp,
      'GSAP': TrendingUp,
      'Redux / Context API': Database,
      'Styled Components': Palette,
      'SASS / SCSS': Palette,
      'Lucide React': Star,
      'React Icons': Star
    };
    return iconMap[tech] || Code;
  };

  // Get color based on coverage percentage
  const getCoverageColor = (covered) => {
    const percentage = parseInt(covered);
    if (percentage >= 90) return 'from-green-400 to-emerald-500';
    if (percentage >= 80) return 'from-blue-400 to-cyan-500';
    if (percentage >= 70) return 'from-yellow-400 to-orange-500';
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

  const progressVariants = {
    hidden: { width: 0 },
    visible: (covered) => ({
      width: covered,
      transition: {
        duration: 1.5,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

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
          <div className="text-red-500 text-xl mb-4">Error loading skills</div>
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
              <Trophy className="w-8 h-8 text-yellow-500" />
            </motion.div>
            <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Web Development Skills
            </h1>
          </div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore my technical expertise and experience across various web technologies
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
            const IconComponent = getIcon(skill.tech);
            const coveragePercentage = parseInt(skill.covered);
            
            return (
              <motion.div
                key={skill.tech}
                variants={cardVariants}
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)"
                }}
                className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-lg border border-white/20 hover:border-blue-200 transition-all duration-300"
              >
                {/* Tech Icon and Name */}
                <div className="flex items-center mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${getCoverageColor(skill.covered)} mr-3`}>
                    <IconComponent className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-800 text-lg">{skill.tech}</h3>
                  </div>
                </div>

                {/* Stats */}
                <div className="space-y-3">
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Projects</span>
                    <span className="font-semibold text-blue-600">{skill.project}</span>
                  </div>
                  
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-600">Experience</span>
                    <span className="font-semibold text-green-600">{skill.experience}</span>
                  </div>

                  {/* Coverage Progress Bar */}
                  <div>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-sm text-gray-600">Coverage</span>
                      <span className="font-semibold text-purple-600">{skill.covered}</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                      <motion.div
                        variants={progressVariants}
                        initial="hidden"
                        animate="visible"
                        custom={`${coveragePercentage}%`}
                        className={`h-full bg-gradient-to-r ${getCoverageColor(skill.covered)} rounded-full`}
                      />
                    </div>
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
                  {skills.reduce((acc, skill) => acc + parseInt(skill.project.replace('+', '')), 0)}+
                </div>
                <div className="text-gray-600">Total Projects</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  {Math.round(skills.reduce((acc, skill) => acc + parseInt(skill.covered), 0) / skills.length)}%
                </div>
                <div className="text-gray-600">Avg Coverage</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  {skills.filter(skill => parseInt(skill.covered) >= 90).length}
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

export default WebSkillsDashboard;