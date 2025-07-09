'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaHome, FaUser, FaGraduationCap, FaTools, FaBriefcase,
  FaBars, FaTimes, FaGuilded, FaBlog, FaSun, FaMoon, FaUserAlt,
  FaCode, FaSpinner, FaCoffee, FaCheck
} from 'react-icons/fa';
import { SiTestinglibrary, SiSuperuser } from 'react-icons/si';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [pathname, setPathname] = useState(null);
  const [showUserDropdown, setShowUserDropdown] = useState(false);

  const router = useRouter();
  const actualPathname = usePathname();

  const bgGradient = "bg-gradient-to-r from-amber-200 via-orange-200 to-pink-200";
  const darkBgGradient = "dark:bg-gradient-to-r dark:from-amber-800 dark:via-orange-800 dark:to-pink-800";

  useEffect(() => {
    setMounted(true);
    setPathname(actualPathname);
  }, [actualPathname]);

  useEffect(() => {
    if (isLoading && pathname) {
      const timer = setTimeout(() => {
        setIsLoading(false);
        setShowSuccess(true);
        setMenuOpen(false);
        setTimeout(() => setShowSuccess(false), 1500);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [pathname, isLoading]);

  const handleNavigation = (route) => {
    if (pathname !== route) {
      setIsLoading(true);
      setShowSuccess(false);
      setTimeout(() => {
        router.push(route);
      }, 100);
    }
  };

  const navItems = [
    { label: 'Home', icon: <FaHome />, route: '/' },
    { label: 'About', icon: <FaUser />, route: '/about' },
    { label: 'Education', icon: <FaGraduationCap />, route: '/education' },
    { label: 'Skills', icon: <FaTools />, route: '/skills' },
    { label: 'Blogs', icon: <FaBlog />, route: '/blogs' },
    { label: 'Guide', icon: <FaGuilded />, route: '/guide' },
    { label: 'Development', icon: <FaCode />, route: '/dev' },
    { label: 'Projects', icon: <SiTestinglibrary />, route: '/projects' },
    { label: 'Work', icon: <FaBriefcase />, route: '/work' },
    { label: 'Contact', icon: <FaUser />, route: '/contact' },
  ];

  if (!mounted || !pathname) return null;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className={`select-none w-full flex items-center justify-between px-6 py-3 fixed top-0 z-50 ${bgGradient} ${darkBgGradient} backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80`}
    >
      <motion.div
        className="flex items-center gap-2 cursor-pointer"
        onClick={() => handleNavigation('/')}
      >
        <FaCoffee className="text-amber-600 dark:text-amber-300 w-7 h-7" />
        <span className="text-xl font-bold text-amber-800 dark:text-amber-100">Build & Test & Repeat</span>
      </motion.div>

      <div className="hidden md:flex items-center gap-1">
        {navItems.map((item) => (
          <SummerLink
            key={item.route}
            item={item}
            isActive={pathname === item.route}
            onNavigate={handleNavigation}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loader"
            initial={{ opacity: 0, scale: 0.8, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            exit={{ opacity: 0, scale: 0.8, rotate: 180 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-2 rounded-full bg-amber-200 dark:bg-amber-700"
          >
            <FaSpinner className="animate-spin text-amber-800 dark:text-amber-100" size={16} />
          </motion.div>
        ) : showSuccess ? (
          <motion.div
            key="success"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.5 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="p-2 rounded-full bg-green-200 dark:bg-green-700"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.1, duration: 0.3, ease: "backOut" }}
            >
              <FaCheck className="text-green-800 dark:text-green-100" size={16} />
            </motion.div>
          </motion.div>
        ) : (
          <motion.div
            key="theme-toggle"
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <motion.div
              className="p-2 rounded-full bg-amber-200 dark:bg-amber-700 text-amber-800 dark:text-amber-100 cursor-pointer hover:bg-amber-300 dark:hover:bg-amber-600 transition-colors duration-200"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="User options"
              onClick={() => setShowUserDropdown(!showUserDropdown)}
            >
              <FaUser size={16} />
            </motion.div>

            <AnimatePresence>
              {showUserDropdown && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 z-50"
                >
                  <div className="py-1">
                    <button
                      onClick={() => {
                        handleNavigation('/login');
                        setShowUserDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-amber-700"
                    >
                      Login
                    </button>
                    <button
                      onClick={() => {
                        handleNavigation('/register');
                        setShowUserDropdown(false);
                      }}
                      className="block w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 hover:bg-amber-100 dark:hover:bg-amber-700"
                    >
                      Register
                    </button>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setMenuOpen(!menuOpen)}
        className="md:hidden p-2 rounded-lg text-amber-800 dark:text-amber-100 hover:bg-amber-300 dark:hover:bg-amber-700"
        aria-label="Toggle menu"
      >
        {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
      </button>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className={`md:hidden absolute top-16 right-6 left-6 ${bgGradient} ${darkBgGradient} rounded-xl shadow-lg overflow-hidden py-3 border-2 border-amber-300 dark:border-amber-600`}
          >
            {navItems.map((item) => (
              <SummerLink
                key={item.route}
                item={item}
                isActive={pathname === item.route}
                mobile
                onNavigate={handleNavigation}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}

function SummerLink({ item, isActive, mobile = false, onNavigate }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => onNavigate(item.route)}
      className={`
        ${mobile ? 'w-full px-6 py-3' : 'px-4 py-2 mx-1'}
        ${isActive
          ? 'bg-amber-500 dark:bg-amber-600 text-white font-semibold'
          : 'text-amber-800 dark:text-amber-100 hover:bg-amber-300 dark:hover:bg-amber-700'}
        flex items-center gap-3
        rounded-lg text-sm
        transition-all duration-200
      `}
    >
      <span className="text-lg">{item.icon}</span>
      {item.label}
    </motion.button>
  );
}