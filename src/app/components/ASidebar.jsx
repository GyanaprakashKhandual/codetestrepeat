'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Menu, X, User, Video, Github,
  Bookmark, Trophy, FileText, Heart,
  Share2, Rss, Mic, Camera, Plus
} from 'lucide-react';
import { showSuccess, showError } from '../utils/alert.jsx';
import About from '../../../public/about/about.jsx';
import GitHubPortfolio from '../../../public/about/git.jsx';

const ASidebar = () => {
  const [isOpen, setIsOpen] = useState(false); // Always start collapsed
  const [mounted, setMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);

  const triggerToast = () => {
    showSuccess("This is a success alert!", 3000); // Show for 3 seconds
    setTimeout(() => {
      showError("Now an error alert appears", 4000);
    }, 4000);
  }

  useEffect(() => {
    setMounted(true);
    // Retrieve selected menu item from localStorage if it exists
    const savedItem = localStorage.getItem('selectedSidebarItem');
    if (savedItem) {
      try {
        const parsedItem = JSON.parse(savedItem);
        // Find the matching item in menuItems
        const foundItem = menuItems.find(
          item => item.text === parsedItem.text
        );
        if (foundItem) {
          setSelectedItem(foundItem);
        }
      } catch (e) {
        console.error('Failed to parse saved sidebar item', e);
      }
    }
  }, []);


  const menuItems = [
    {
      icon: Github,
      text: 'GitHub',
      color: 'text-gray-800',
      bgGradient: 'bg-gradient-to-r from-gray-50 to-slate-100',
      link: 'https://github.com',
      component: <GitHubPortfolio />
    },
    {
      icon: User,
      text: 'Personal Info',
      color: 'text-purple-600',
      bgGradient: 'bg-gradient-to-r from-purple-50 to-violet-100',
      component: <About />
    },
    {
      icon: Video,
      text: 'Vlogs',
      color: 'text-red-600',
      bgGradient: 'bg-gradient-to-r from-red-50 to-rose-100',
      // component: <Vlogs /> 
    },
    {
      icon: Bookmark,
      text: 'Bookmarks',
      color: 'text-green-600',
      bgGradient: 'bg-gradient-to-r from-green-50 to-emerald-100',
      // component: <Bookmarks /> 
    },
    {
      icon: Trophy,
      text: 'Achievements',
      color: 'text-amber-600',
      bgGradient: 'bg-gradient-to-r from-amber-50 to-yellow-100',
      // component: <Achievements /> 
    },
    {
      icon: FileText,
      text: 'Resume',
      color: 'text-cyan-600',
      bgGradient: 'bg-gradient-to-r from-cyan-50 to-sky-100',
      // component: <Resume /> 
    },
    {
      icon: Heart,
      text: 'Interests',
      color: 'text-rose-600',
      bgGradient: 'bg-gradient-to-r from-rose-50 to-pink-100',
      // component: <Interests /> 
    },
    {
      icon: Share2,
      text: 'Social Media',
      color: 'text-sky-600',
      bgGradient: 'bg-gradient-to-r from-sky-50 to-cyan-100',
      // component: <Social /> 
    },
    {
      icon: Rss,
      text: 'Blog',
      color: 'text-orange-600',
      bgGradient: 'bg-gradient-to-r from-orange-50 to-amber-100',
      // component: <Blog /> 
    },
    {
      icon: Mic,
      text: 'Podcasts',
      color: 'text-lime-600',
      bgGradient: 'bg-gradient-to-r from-lime-50 to-green-100',
      // component: <Podcasts /> 
    },
    {
      icon: Camera,
      text: 'Gallery',
      color: 'text-cyan-600',
      bgGradient: 'bg-gradient-to-r from-cyan-50 to-teal-100',
      // component: <Gallery /> 
    },
  ];

  const handleItemClick = (item) => {
    if (item.external) {
      window.open(item.link, '_blank');
    } else {
      setSelectedItem(item);
      // Persist selected item in localStorage
      localStorage.setItem('selectedSidebarItem', JSON.stringify({ text: item.text }));
    }
  };

  if (!mounted) return null;

  return (
    <div className="flex mt-14 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 min-h-screen select-none">
      {/* Sticky Sidebar - Always Collapsed */}
      <div className="sticky top-14 self-start">
        <div
          className={`flex flex-col bg-gradient-to-b from-white/95 via-cyan-50/90 to-indigo-50/95 border-r border-cyan-200/50 shadow-lg transition-all duration-300 ${isOpen ? 'w-80' : 'w-20'
            }`}
          style={{ height: 'calc(100vh - 56px)' }}
        >
          {/* Header */}
          <div className="p-4 border-b border-cyan-200/50">
            <div className="flex items-center justify-between">
              {isOpen && (
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Personal Links
                  </h2>
                </div>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-1 mt-1 p-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white hover:shadow-lg transition-shadow duration-200"
              >
                {isOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* Menu Items */}
          <div className="flex-1 py-4 overflow-y-auto">
            <nav className="space-y-2 px-3">
              {menuItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(item.text)}
                    onMouseLeave={() => setHoveredItem(null)}
                  >
                    <div
                      onClick={() => handleItemClick(item)}
                      className="rounded-lg cursor-pointer group hover:bg-white/50 transition-colors duration-200"
                    >
                      <div className="flex items-center p-3 space-x-3">
                        <div className={`${item.color} group-hover:scale-105 transition-transform duration-200`}>
                          <Icon size={20} strokeWidth={1.5} />
                        </div>
                        {isOpen && (
                          <div className="flex-1">
                            <span className="text-slate-700 font-medium text-sm group-hover:text-cyan-700 transition-colors duration-200">
                              {item.text}
                            </span>
                          </div>
                        )}
                      </div>
                    </div>

                    {/* Tooltip - Only show when collapsed */}
                    <AnimatePresence>
                      {!isOpen && hoveredItem === item.text && (
                        <motion.div
                          initial={{ opacity: 0, x: -10 }}
                          animate={{ opacity: 1, x: 0 }}
                          exit={{ opacity: 0, x: -10 }}
                          transition={{ duration: 0.2 }}
                          className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 z-[9999]"
                        >
                          <div className="bg-slate-800 text-white text-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                            {item.text}
                            {/* Arrow */}
                            <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                              <div className="w-2 h-2 bg-slate-800 rotate-45"></div>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                );
              })}
            </nav>
          </div>

          {/* Add More */}
          <div className="border-t border-cyan-200/50 p-4">
            <div
              className="relative"
              onMouseEnter={() => setHoveredItem('Add New Link')}
              onMouseLeave={() => setHoveredItem(null)}
            >
              <div
                className="rounded-lg cursor-pointer group hover:bg-white/50 transition-colors duration-200"
                onClick={triggerToast}
              >
                <div className="flex items-center p-3 space-x-3">
                  <div className="text-cyan-500 group-hover:text-blue-600 group-hover:scale-105 transition-all duration-200">
                    <Plus size={20} strokeWidth={1.5} />
                  </div>
                  {isOpen && (
                    <span className="text-slate-600 font-medium text-sm group-hover:text-cyan-700 transition-colors duration-200">
                      Add New Link
                    </span>
                  )}
                </div>
              </div>

              {/* Tooltip for Add New Link - Only show when collapsed */}
              <AnimatePresence>
                {!isOpen && hoveredItem === 'Add New Link' && (
                  <motion.div
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute left-full top-1/2 transform -translate-y-1/2 ml-2 z-[9999]"
                  >
                    <div className="bg-slate-800 text-white text-sm px-3 py-2 rounded-lg shadow-xl whitespace-nowrap">
                      Add New Link
                      {/* Arrow */}
                      <div className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-1">
                        <div className="w-2 h-2 bg-slate-800 rotate-45"></div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto">
        <AnimatePresence mode="wait">
          {selectedItem ? (
            <motion.div
              key={selectedItem.text}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
            >
              {selectedItem.component}
            </motion.div>
          ) : (
            <motion.div
              key="default-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              <div className="max-w-4xl mx-auto">
                <div className="bg-gradient-to-br from-white/90 via-cyan-50/80 to-indigo-50/90 rounded-xl shadow-lg p-8 border border-cyan-200/30">
                  <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                    Personal Explorer
                  </h1>
                  <p className="text-slate-600 text-lg leading-relaxed mb-8">
                    Explore personal links, achievements, and more. Click on any item to visit the respective page or resource.
                  </p>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ASidebar;