'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaHome, FaUser, FaGraduationCap, FaTools, FaBriefcase, FaBars, FaTimes, FaGuilded, FaBlog, FaSun, FaMoon, FaDev, FaCoffee, FaCode, FaSpinner } from 'react-icons/fa';
import { SiTestinglibrary } from 'react-icons/si';
import { useRouter, usePathname } from 'next/navigation';

export default function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [darkMode, setDarkMode] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [mounted, setMounted] = useState(false); // Track if component is mounted
    const router = useRouter();
    const pathname = usePathname();

    // Summary gradient colors (light and dark variants)
    const bgGradient = "bg-gradient-to-r from-amber-200 via-orange-200 to-pink-200";
    const darkBgGradient = "dark:bg-gradient-to-r dark:from-amber-800 dark:via-orange-800 dark:to-pink-800";

    // Set initial dark mode state after component mounts
    useEffect(() => {
        setMounted(true);
        if (typeof window !== 'undefined') {
            setDarkMode(document.documentElement.classList.contains('dark'));
        }
    }, []);

    // Listen for route changes to handle loading state
    useEffect(() => {
        const handleRouteChangeStart = () => {
            setIsLoading(true);
        };

        const handleRouteChangeComplete = () => {
            setIsLoading(false);
            setMenuOpen(false);
        };

        const handleRouteChangeError = () => {
            setIsLoading(false);
        };

        router.events?.on('routeChangeStart', handleRouteChangeStart);
        router.events?.on('routeChangeComplete', handleRouteChangeComplete);
        router.events?.on('routeChangeError', handleRouteChangeError);

        return () => {
            router.events?.off('routeChangeStart', handleRouteChangeStart);
            router.events?.off('routeChangeComplete', handleRouteChangeComplete);
            router.events?.off('routeChangeError', handleRouteChangeError);
        };
    }, [router]);


    const handleNavigation = (route) => {
        setIsLoading(true);
        setTimeout(() => {
            router.push(route);
        }, 100);
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

    // Only render client-side content after mounting
    if (!mounted) {
        return (
            <nav className={`w-full flex items-center justify-between px-6 py-3 fixed top-0 z-50 ${bgGradient} ${darkBgGradient} backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80`}>
                <div className="flex items-center gap-2">
                    <FaCoffee className="text-amber-600 dark:text-amber-300 w-7 h-7" />
                    <span className="text-xl font-bold text-amber-800 dark:text-amber-100">Build & Test & Repeat</span>
                </div>
                <div className="p-2 rounded-full bg-amber-200 dark:bg-amber-700">
                    <FaSpinner className="animate-spin text-amber-800 dark:text-amber-100" size={16} />
                </div>
            </nav>
        );
    }

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
            className={`w-full flex items-center justify-between px-6 py-3 fixed top-0 z-50 ${bgGradient} ${darkBgGradient} backdrop-blur-sm bg-opacity-80 dark:bg-opacity-80`}
        >
            {/* Logo */}
            <motion.div
                whileHover={{ scale: 1.05 }}
                className="flex items-center gap-2 cursor-pointer"
                onClick={() => handleNavigation('/')}
            >
                <FaCoffee className="text-amber-600 dark:text-amber-300 w-7 h-7" />
                <span className="text-xl font-bold text-amber-800 dark:text-amber-100">Build & Test & Repeat</span>
            </motion.div>

            {/* Desktop Navigation */}
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

            {/* Theme Toggle or Loading Spinner */}
            <AnimatePresence mode="wait">
                {isLoading ? (
                    <motion.div
                        key="loader"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        className="p-2 rounded-full bg-amber-200 dark:bg-amber-700"
                    >
                        <FaSpinner 
                            className="animate-spin text-amber-800 dark:text-amber-100" 
                            size={16} 
                        />
                    </motion.div>
                ) : (
                    <motion.button
                        key="theme-toggle"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.2 }}
                        onClick={toggleTheme}
                        className="p-2 rounded-full bg-amber-200 text-amber-800 dark:text-amber-100 hover:bg-amber-300 dark:hover:bg-amber-700 transition-colors"
                        aria-label="Toggle theme"
                    >
                        {darkMode ? <FaSun size={16} /> : <FaMoon size={16} />}
                    </motion.button>
                )}
            </AnimatePresence>

            {/* Mobile Menu Button */}
            <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="md:hidden p-2 rounded-lg text-amber-800 dark:text-amber-100 hover:bg-amber-300 dark:hover:bg-amber-700"
                aria-label="Toggle menu"
            >
                {menuOpen ? <FaTimes size={20} /> : <FaBars size={20} />}
            </button>

            {/* Mobile Menu */}
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