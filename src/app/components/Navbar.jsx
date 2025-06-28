'use client';


import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaGraduationCap, FaTools, FaBriefcase, FaBars, FaTimes, FaGuilded, FaBlog, FaSun, FaMoon, FaDev, FaCoffee, FaCode } from 'react-icons/fa';
import { SiTestinglibrary } from 'react-icons/si';
import { useRouter } from 'next/navigation';


export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const router = useRouter();

    // Summery gradient colors (light and dark variants)
    const bgGradient = "bg-gradient-to-r from-amber-200 via-orange-200 to-pink-200";
    const darkBgGradient = "dark:bg-gradient-to-r dark:from-amber-800 dark:via-orange-800 dark:to-pink-800";

    // Toggle dark mode by adding/removing 'dark' class on <html>
    const toggleTheme = () => {
        setDarkMode((prev) => {
            const newMode = !prev;
            if (typeof window !== 'undefined') {
                const html = document.documentElement;
                if (newMode) {
                    html.classList.add('dark');
                } else {
                    html.classList.remove('dark');
                }
            }
            return newMode;
        });
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

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`w-full flex items-center justify-between px-6 py-3 fixed top-0 z-50 ${bgGradient} ${darkBgGradient} backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80`}
        >
            {/* Logo with summer vibe */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => router.push('/')}
            >
                <FaCoffee className="text-amber-600 dark:text-amber-300 w-7 h-7" />
                <span className="text-xl font-bold text-amber-800 dark:text-amber-100 ">Build & Test & Repeat</span>
            </motion.div>

            {/* Desktop Navigation - Summer Style Links */}
            <div className="hidden md:flex items-center gap-1">
                {navItems.map((item) => (
                    <SummerLink
                        key={item.route}
                        item={item}
                        isActive={router && router.pathname === item.route}
                    />
                ))}
            </div>
            {/* Theme Toggle Button */}
            <button
                onClick={toggleTheme}
                className="p-1 rounded-full flex bg-amber-200 text-amber-800 dark:text-amber-100 hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors"
                aria-label="Toggle theme"
            >
                <span
                    className={`inline-block transition-transform duration-500 ${darkMode ? "rotate-180" : "rotate-0"
                        }`}
                >
                    {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
                </span>
            </button>


            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg text-amber-800 dark:text-amber-100 hover:bg-amber-300 dark:hover:bg-amber-700"
                aria-label="Toggle menu"
            >
                {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Mobile Menu - Beach Wave Style */}
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
                                isActive={router && router.pathname === item.route}
                                mobile
                                onClick={() => setMenuOpen(false)}
                            />
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}

function SummerLink({ item, isActive, mobile = false, onClick }) {
    const router = useRouter();

    return (
        <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => {
                router.push(item.route);
                onClick?.();
            }}
            className={`
        ${mobile ? 'w-full px-6 py-3' : 'px-4 py-2 mx-1'}
        ${isActive
                    ? 'bg-amber-500 dark:bg-amber-600 text-white font-semibold'
                    : 'text-amber-800 dark:text-amber-100 hover:bg-amber-300 dark:hover:bg-amber-700'
                }
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