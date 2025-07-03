'use client';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const footerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        ease: 'easeOut',
        staggerChildren: 0.2 
      }
    }
  };

  const iconVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: { 
      opacity: 1, 
      scale: 1,
      transition: { duration: 0.4 }
    },
    hover: { 
      scale: 1.2,
      transition: { duration: 0.3 }
    }
  };

  return (
    <motion.footer
      variants={footerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      className="bg-gray-900 text-white py-8"
    >
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-between md:flex-row">
          {/* Social Links */}
          <div className="flex space-x-6 mb-4 md:mb-0">
            <motion.a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="hover:text-blue-400 transition-colors"
            >
              <Github size={24} />
            </motion.a>
            <motion.a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="hover:text-blue-400 transition-colors"
            >
              <Linkedin size={24} />
            </motion.a>
            <motion.a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              variants={iconVariants}
              whileHover="hover"
              className="hover:text-blue-400 transition-colors"
            >
              <Twitter size={24} />
            </motion.a>
            <motion.a
              href="mailto:your.email@example.com"
              variants={iconVariants}
              whileHover="hover"
              className="hover:text-blue-400 transition-colors"
            >
              <Mail size={24} />
            </motion.a>
          </div>

          {/* Copyright */}
          <motion.div 
            variants={iconVariants}
            className="text-sm text-gray-400"
          >
            © {new Date().getFullYear()} Gyana prakash Khandual. All rights reserved.
          </motion.div>
        </div>
      </div>
    </motion.footer>
  );
};

export default Footer;