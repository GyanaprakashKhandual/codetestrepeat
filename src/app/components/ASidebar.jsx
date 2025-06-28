'use client';
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Code2, 
  User, 
  Video,
  Bookmark,
  Trophy,
  Briefcase,
  FileText,
  Star,
  Heart,
  Share2,
  Rss,
  Mic,
  Camera,
  Plus
} from 'lucide-react';

const ASidebar = () => {
  const [isOpen, setIsOpen] = useState(true);

  // Floating elements
  const floatingBlues = React.useMemo(() =>
    Array.from({ length: 8 }).map(() => ({
      x: Math.random() * 300,
      y: Math.random() * 800,
      left: Math.random() * 100 + '%',
      top: Math.random() * 100 + '%',
      duration: Math.random() * 15 + 10,
      delay: Math.random() * 5
    })), []);
  const floatingReds = React.useMemo(() =>
    Array.from({ length: 6 }).map(() => ({
      x: Math.random() * 300,
      y: Math.random() * 800,
      right: Math.random() * 100 + '%',
      bottom: Math.random() * 100 + '%',
      duration: Math.random() * 12 + 8,
      delay: Math.random() * 3
    })), []);

  const menuItems = [
    { icon: Github, text: 'GitHub', color: 'text-gray-800', bgGradient: 'from-gray-50 to-slate-100', link: 'https://github.com' },
    { icon: Linkedin, text: 'LinkedIn', color: 'text-blue-600', bgGradient: 'from-blue-50 to-sky-100', link: 'https://linkedin.com' },
    { icon: Code2, text: 'LeetCode', color: 'text-yellow-600', bgGradient: 'from-yellow-50 to-amber-100', link: 'https://leetcode.com' },
    { icon: User, text: 'Personal Info', color: 'text-purple-600', bgGradient: 'from-purple-50 to-violet-100', link: '/about' },
    { icon: Video, text: 'Vlogs', color: 'text-red-600', bgGradient: 'from-red-50 to-rose-100', link: '/vlogs' },
    { icon: Bookmark, text: 'Bookmarks', color: 'text-green-600', bgGradient: 'from-green-50 to-emerald-100', link: '/bookmarks' },
    { icon: Trophy, text: 'Achievements', color: 'text-amber-600', bgGradient: 'from-amber-50 to-yellow-100', link: '/achievements' },
    { icon: Briefcase, text: 'Projects', color: 'text-indigo-600', bgGradient: 'from-indigo-50 to-blue-100', link: '/projects' },
    { icon: FileText, text: 'Resume', color: 'text-cyan-600', bgGradient: 'from-cyan-50 to-sky-100', link: '/resume' },
    { icon: Star, text: 'Skills', color: 'text-pink-600', bgGradient: 'from-pink-50 to-rose-100', link: '/skills' },
    { icon: Heart, text: 'Interests', color: 'text-rose-600', bgGradient: 'from-rose-50 to-pink-100', link: '/interests' },
    { icon: Share2, text: 'Social Media', color: 'text-sky-600', bgGradient: 'from-sky-50 to-cyan-100', link: '/social' },
    { icon: Rss, text: 'Blog', color: 'text-orange-600', bgGradient: 'from-orange-50 to-amber-100', link: '/blog' },
    { icon: Mic, text: 'Podcasts', color: 'text-violet-600', bgGradient: 'from-violet-50 to-purple-100', link: '/podcasts' },
    { icon: Camera, text: 'Photography', color: 'text-emerald-600', bgGradient: 'from-emerald-50 to-teal-100', link: '/photos' },
  ];

  const sidebarVariants = {
    open: {
      width: 320,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    },
    closed: {
      width: 85,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 40
      }
    }
  };

  const textVariants = {
    open: {
      opacity: 1,
      x: 0,
      transition: {
        delay: 0.15,
        duration: 0.4,
        ease: "easeOut"
      }
    },
    closed: {
      opacity: 0,
      x: -20,
      transition: {
        duration: 0.2
      }
    }
  };

  const buttonVariants = {
    hover: {
      scale: 1.1,
      rotate: 5,
      transition: {
        type: "spring",
        stiffness: 400,
        damping: 10
      }
    },
    tap: {
      scale: 0.9,
      rotate: -5
    }
  };

  const itemVariants = {
    hover: {
      x: 8,
      scale: 1.02,
      transition: {
        type: "spring",
        stiffness: 300,
        damping: 20
      }
    }
  };

  const glowVariants = {
    animate: {
      boxShadow: [
        "0 0 20px rgba(59, 130, 246, 0.2)",
        "0 0 40px rgba(220, 38, 38, 0.3)",
        "0 0 20px rgba(59, 130, 246, 0.2)"
      ],
      transition: {
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };

  return (
    <div className="flex mt-14 bg-gradient-to-br from-blue-50 via-white to-red-50 min-h-screen-">
      <motion.div
        variants={sidebarVariants}
        animate={isOpen ? "open" : "closed"}
        className="relative flex flex-col backdrop-blur-xl bg-gradient-to-b from-white/95 via-blue-50/90 to-red-50/95 border-r border-blue-200/50 shadow-2xl"
        style={{ height: 'calc(100vh - 58px)' }}
      >
        {/* Animated Border */}
        <motion.div
          variants={glowVariants}
          animate="animate"
          className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-100/30 via-white/20 to-red-100/30 -z-10"
        />

        {/* Header */}
        <div className="p-5 border-b border-blue-200/50 relative overflow-hidden">
          {/* Decorative Elements */}
          <div className="absolute top-2 right-2 w-16 h-16 opacity-20">
            <motion.div
              animate={{
                rotate: 360,
                scale: [1, 1.2, 1]
              }}
              transition={{
                rotate: { duration: 20, repeat: Infinity, ease: "linear" },
                scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
              }}
              className="w-full h-full rounded-full bg-gradient-to-br from-blue-300 to-red-300"
            />
          </div>
          
          <div className="flex items-center justify-between">
            <AnimatePresence mode="wait">
              {isOpen && (
                <motion.div
                  variants={textVariants}
                  initial="closed"
                  animate="open"
                  exit="closed"
                  className="space-y-1"
                >
                  <h2 className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-gray-600 to-red-600 bg-clip-text text-transparent">
                    My Digital Space
                  </h2>
                </motion.div>
              )}
            </AnimatePresence>
            
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              onClick={() => setIsOpen(!isOpen)}
              className="relative p-3 rounded-xl bg-gradient-to-r from-blue-500 via-gray-500 to-red-500 text-white shadow-lg hover:shadow-2xl transition-all duration-300 group overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-blue-400 via-gray-400 to-red-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <motion.div
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
                className="relative z-10"
              >
                {isOpen ? <X size={14} /> : <Menu size={14} />}
              </motion.div>
            </motion.button>
          </div>
        </div>

        {/* Navigation Items with Custom Scrollbar */}
        <div 
          className="flex-1 py-4 overflow-y-auto custom-scrollbar"
          style={{
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(59, 130, 246, 0.5) rgba(239, 246, 255, 0.3)'
          }}
        >
          <style jsx>{`
            .custom-scrollbar::-webkit-scrollbar {
              width: 6px;
            }
            .custom-scrollbar::-webkit-scrollbar-track {
              background: rgba(239, 246, 255, 0.5);
              border-radius: 10px;
            }
            .custom-scrollbar::-webkit-scrollbar-thumb {
              background: linear-gradient(180deg, #3b82f6, #6b7280, #ef4444);
              border-radius: 10px;
              border: 1px solid rgba(255, 255, 255, 0.2);
            }
            .custom-scrollbar::-webkit-scrollbar-thumb:hover {
              background: linear-gradient(180deg, #60a5fa, #9ca3af, #f87171);
            }
          `}</style>
          
          <nav className="space-y-3 px-4">
            {menuItems.map((item, index) => (
              <motion.a
                key={item.text}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                variants={itemVariants}
                whileHover="hover"
                className="relative rounded-2xl cursor-pointer group overflow-hidden block"
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  rotateX: 0,
                  transition: { 
                    delay: index * 0.08,
                    duration: 0.6,
                    ease: "easeOut"
                  }
                }}
              >
                {/* Hover Background Effect */}
                <motion.div
                  className={`absolute inset-0 bg-gradient-to-r ${item.bgGradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl`}
                  initial={false}
                />
                
                {/* Shimmer Effect */}
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-out"
                  initial={false}
                />
                
                <div className="relative flex items-center p-4 space-x-4">
                  <motion.div
                    className={`${item.color} group-hover:scale-125 transition-all duration-300 relative`}
                    whileHover={{ 
                      rotate: [0, -10, 10, 0],
                      scale: 1.2 
                    }}
                    transition={{ duration: 0.6 }}
                  >
                    <item.icon size={26} strokeWidth={1.5} />
                    <motion.div
                      className="absolute inset-0 rounded-full opacity-0 group-hover:opacity-100"
                      animate={{
                        boxShadow: [
                          "0 0 0 0 currentColor",
                          "0 0 0 8px transparent",
                          "0 0 0 0 transparent"
                        ]
                      }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    />
                  </motion.div>
                  
                  <AnimatePresence mode="wait">
                    {isOpen && (
                      <motion.div
                        variants={textVariants}
                        initial="closed"
                        animate="open"
                        exit="closed"
                        className="flex-1"
                      >
                        <span className="text-slate-700 font-semibold text-lg group-hover:text-blue-700 transition-colors duration-300">
                          {item.text}
                        </span>
                        <motion.div
                          className="h-0.5 bg-gradient-to-r from-blue-400 to-gray-400 mt-1 origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300"
                        />
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.a>
            ))}
          </nav>
        </div>

        {/* Footer Section */}
        <div className="border-t border-blue-200/50 p-5">
          <motion.div
            variants={itemVariants}
            whileHover="hover"
            className="relative rounded-2xl cursor-pointer group overflow-hidden bg-gradient-to-r from-blue-50/50 to-gray-50/30 backdrop-blur-sm"
          >
            <motion.div
              className="absolute inset-0 bg-gradient-to-r from-blue-100/40 to-gray-100/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              initial={false}
            />
            
            <div className="relative flex items-center p-4 space-x-4">
              <motion.div
                className="text-blue-500 group-hover:text-gray-600 group-hover:scale-125 transition-all duration-300"
                whileHover={{ rotate: 180, scale: 1.3 }}
                transition={{ duration: 0.8 }}
              >
                <Plus size={26} strokeWidth={1.5} />
              </motion.div>
              
              <AnimatePresence mode="wait">
                {isOpen && (
                  <motion.span
                    variants={textVariants}
                    initial="closed"
                    animate="open"
                    exit="closed"
                    className="text-slate-600 font-semibold text-lg group-hover:text-blue-700 transition-colors duration-300"
                  >
                    Add More Links
                  </motion.span>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements Background */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {floatingBlues.map((item, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-blue-300/20 rounded-full"
              animate={{
                x: [0, item.x],
                y: [0, item.y],
                opacity: [0, 0.6, 0],
                scale: [0, 1, 0]
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "linear"
              }}
              style={{
                left: item.left,
                top: item.top
              }}
            />
          ))}
          {floatingReds.map((item, i) => (
            <motion.div
              key={`red-${i}`}
              className="absolute w-1.5 h-1.5 bg-red-300/25 rounded-full"
              animate={{
                x: [item.x, 0],
                y: [item.y, 0],
                opacity: [0, 0.8, 0],
                scale: [0, 1.2, 0]
              }}
              transition={{
                duration: item.duration,
                repeat: Infinity,
                delay: item.delay,
                ease: "linear"
              }}
              style={{
                right: item.right,
                bottom: item.bottom
              }}
            />
          ))}
        </div>
      </motion.div>

      {/* Enhanced Main Content Area */}
      <div className="flex-1 p-8 overflow-auto">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="relative bg-gradient-to-br from-white/90 via-blue-50/80 to-red-50/90 backdrop-blur-xl rounded-3xl shadow-2xl p-10 border border-blue-200/30 overflow-hidden"
          >
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
              <div className="absolute inset-0" style={{
                backgroundImage: `radial-gradient(circle at 25% 25%, #3b82f6 0%, transparent 50%), 
                                 radial-gradient(circle at 75% 75%, #ef4444 0%, transparent 50%)`,
                backgroundSize: '100px 100px'
              }} />
            </div>
            
            <div className="relative z-10">
              <motion.h1 
                className="text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-gray-600 to-red-600 bg-clip-text text-transparent"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9, duration: 0.6 }}
              >
                Professional Portfolio Hub
              </motion.h1>
              
              <motion.p 
                className="text-slate-600 text-xl leading-relaxed mb-10"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.1, duration: 0.6 }}
              >
                Access all your professional and personal digital spaces from one centralized hub. 
                Connect your GitHub, LinkedIn, LeetCode, and other profiles with beautiful animations.
              </motion.p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {[
                  { title: "Code Repositories", desc: "GitHub projects and contributions", gradient: "from-gray-100 to-slate-100", border: "border-gray-300", icon: Github },
                  { title: "Professional Network", desc: "LinkedIn connections and posts", gradient: "from-blue-100 to-sky-100", border: "border-blue-300", icon: Linkedin },
                  { title: "Coding Challenges", desc: "LeetCode solutions and progress", gradient: "from-yellow-100 to-amber-100", border: "border-yellow-300", icon: Code2 },
                  { title: "Personal Brand", desc: "About me and personal details", gradient: "from-purple-100 to-violet-100", border: "border-purple-300", icon: User },
                  { title: "Video Content", desc: "Vlogs and tutorials", gradient: "from-red-100 to-rose-100", border: "border-red-300", icon: Video },
                  { title: "Online Presence", desc: "All social media profiles", gradient: "from-sky-100 to-cyan-100", border: "border-sky-300", icon: Share2 }
                ].map((item, index) => (
                  <motion.a
                    href={menuItems[index].link}
                    target="_blank"
                    rel="noopener noreferrer"
                    key={item.title}
                    whileHover={{ 
                      scale: 1.05, 
                      y: -10,
                      rotateY: 5
                    }}
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ 
                      delay: 1.3 + index * 0.1,
                      duration: 0.6,
                      type: "spring",
                      stiffness: 100
                    }}
                    className={`relative bg-gradient-to-br ${item.gradient} backdrop-blur-sm p-8 rounded-2xl border ${item.border} hover:border-opacity-60 transition-all duration-300 cursor-pointer group overflow-hidden block`}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      initial={false}
                    />
                    <div className="relative z-10">
                      <div className="flex items-center mb-4">
                        <item.icon className="text-blue-600 mr-3" size={28} />
                        <h3 className="font-bold text-slate-700 text-xl">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ASidebar;