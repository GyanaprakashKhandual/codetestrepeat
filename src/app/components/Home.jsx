'use client';

import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation, useInView, useScroll, useTransform } from 'framer-motion';
import { 
  FaGithub, 
  FaLinkedin, 
  FaTwitter, 
  FaInstagram, 
  FaCode, 
  FaBug, 
  FaShieldAlt,
  FaChevronDown,
  FaAward,
  FaUsers,
  FaCoffee,
  FaHeart,
  FaGraduationCap,
} from 'react-icons/fa';
import {  
  SiNodedotjs, 
  SiMongodb, 
  SiTailwindcss,
  SiSelenium,
  SiCypress,
  SiPostman,
  SiTypescript,
  SiNextcloud,
  SiAdguard
} from 'react-icons/si';

const CounterAnimation = ({ end, duration = 2, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const increment = end / (duration * 60);
      const timer = setInterval(() => {
        start += increment;
        setCount(Math.floor(start));
        if (start >= end) {
          setCount(end);
          clearInterval(timer);
        }
      }, 1000 / 60);
      return () => clearInterval(timer);
    }
  }, [isInView, end, duration]);

  return (
    <div ref={ref}>
      <span className="text-4xl md:text-5xl font-bold text-green-600">
        {count}{suffix}
      </span>
    </div>
  );
};

const ProjectCard = ({ number, title, description, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 hover:bg-white/30 transition-all duration-300 hover:scale-105 hover:shadow-xl"
    >
      <CounterAnimation end={number} suffix="+" />
      <h3 className="text-xl font-semibold text-gray-800 mt-2">{title}</h3>
      <p className="text-gray-600 mt-1 text-sm">{description}</p>
    </motion.div>
  );
};

const SkillIcon = ({ Icon, name, delay = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay }}
      className="flex flex-col items-center group cursor-pointer"
    >
      <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/30 group-hover:bg-green-500 group-hover:text-white transition-all duration-300 group-hover:scale-110">
        <Icon className="text-2xl" />
      </div>
      <span className="text-sm mt-2 text-gray-700 group-hover:text-green-600 transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

export default function Portfolio() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '50%']);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  const achievements = [
    { icon: FaAward, title: "Bug Bounty Hunter", desc: "Found 50+ critical vulnerabilities" },
    { icon: FaUsers, title: "Team Lead", desc: "Led 5+ successful projects" },
    { icon: FaCoffee, title: "Code Enthusiast", desc: "10,000+ lines of code written" },
    { icon: FaGraduationCap, title: "Certified Tester", desc: "ISTQB & Selenium certified" }
  ];

  const services = [
    {
      icon: FaBug,
      title: "QA Testing",
      description: "Comprehensive testing strategies including manual, automated, and performance testing to ensure your applications are bug-free and user-friendly.",
      features: ["Manual Testing", "Automated Testing", "Performance Testing", "API Testing"]
    },
    {
      icon: FaCode,
      title: "Full Stack Development",
      description: "End-to-end web development using modern technologies like React, Node.js, and MongoDB to build scalable and responsive applications.",
      features: ["Frontend Development", "Backend Development", "Database Design", "API Integration"]
    },
    {
      icon: FaShieldAlt,
      title: "Ethical Hacking",
      description: "Security assessments and penetration testing to identify vulnerabilities and strengthen your digital infrastructure against cyber threats.",
      features: ["Penetration Testing", "Vulnerability Assessment", "Security Auditing", "Compliance Testing"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechCorp",
      message: "Chris's attention to detail in testing saved us from major production issues. His expertise in both development and security is invaluable.",
      rating: 5
    },
    {
      name: "Michael Chen",
      role: "CTO",
      company: "StartupXYZ",
      message: "Working with Chris was a game-changer. His full-stack skills and ethical hacking background provide a unique perspective on security.",
      rating: 5
    },
    {
      name: "Emily Rodriguez",
      role: "Development Team Lead",
      company: "InnovateLabs",
      message: "Chris combines technical excellence with great communication. His automation frameworks significantly improved our testing efficiency.",
      rating: 5
    }
  ];

  const FloatingCard = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 100, rotateX: -15 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      transition={{ duration: 0.8, delay }}
      whileHover={{ y: -10, rotateX: 5, transition: { duration: 0.3 } }}
      className="perspective-1000"
    >
      {children}
    </motion.div>
  );

  const TextReveal = ({ children, delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      className="overflow-hidden"
    >
      {children}
    </motion.div>
  );

  const ParticleFloat = ({ className = "", delay = 0 }) => (
    <motion.div
      initial={{ opacity: 0, scale: 0 }}
      animate={{
        opacity: 1,
        scale: 1,
        y: [0, -20, 0],
        x: [0, 10, 0],
        rotate: [0, 180, 360],
      }}
      transition={{
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut",
        delay,
      }}
      className={`absolute rounded-full bg-gradient-to-r from-green-400 to-sky-400 opacity-20 ${className}`}
    />
  );


  const projectStats = [
    { number: 1, title: "MERN Stack Projects", description: "Full-stack web applications" },
    { number: 4, title: "Full Stack Projects", description: "Complete web solutions" },
    { number: 8, title: "Frontend Projects", description: "Modern UI/UX designs" },
    { number: 10, title: "Testing Projects", description: "Comprehensive QA testing" },
    { number: 10, title: "Automation Frameworks", description: "Automated testing solutions" },
    { number: 5, title: "Backend Test Projects", description: "API & server testing" },
    { number: 6, title: "Vanilla Web Projects", description: "Pure HTML/CSS/JS projects" },
    { number: 2, title: "Data Analytics Projects", description: "Data-driven insights" }
  ];

  const skills = [
    { Icon: SiTypescript, name: "Type Script" },
    { Icon: SiNextcloud, name: "Next.js" },
    { Icon: SiNodedotjs, name: "Node.js" },
    { Icon: SiMongodb, name: "MongoDB" },
    { Icon: SiTailwindcss, name: "Tailwind" },
    { Icon: SiSelenium, name: "Selenium" },
    { Icon: SiCypress, name: "Cypress" },
    { Icon: SiAdguard, name: "New Map" }
  ];

  const socialLinks = [
    { Icon: FaGithub, href: "https://github.com", label: "GitHub" },
    { Icon: FaLinkedin, href: "https://linkedin.com", label: "LinkedIn" },
    { Icon: FaTwitter, href: "https://twitter.com", label: "Twitter" },
    { Icon: FaInstagram, href: "https://instagram.com", label: "Instagram" }
  ];





  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-white to-sky-100 relative overflow-hidden">
      {/* Floating Particles */}
      <ParticleFloat className="w-20 h-20 top-10 left-10" delay={0} />
      <ParticleFloat className="w-16 h-16 top-1/4 right-20" delay={0.5} />
      <ParticleFloat className="w-12 h-12 top-1/2 left-1/4" delay={1} />
      <ParticleFloat className="w-24 h-24 bottom-1/4 right-10" delay={1.5} />
      <ParticleFloat className="w-14 h-14 bottom-10 left-1/3" delay={2} />

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-0 relative">
        <motion.div style={{ y, opacity }} className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-lime-100/30 to-green-200/30 rounded-full blur-3xl transform -rotate-12 scale-150"></div>
        </motion.div>
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="text-center">
            <motion.div
              initial={{ opacity: 0, y: 100, scale: 0.8 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 1.2, type: "spring", stiffness: 100 }}
              className="mb-8"
            >
              <motion.h1 
                className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 0.5 }}
              >
                <motion.span 
                  className="text-gray-800"
                  initial={{ x: -100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.7 }}
                >
                  Hi, I'm{" "}
                </motion.span>
                <motion.span 
                  className="bg-gradient-to-r from-green-600 via-lime-500 to-sky-600 bg-clip-text text-transparent"
                  initial={{ x: 100, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ duration: 0.8, delay: 0.9 }}
                >
                  Gyana Prakash
                </motion.span>
              </motion.h1>
              <motion.p 
                className="text-xl md:text-2xl text-gray-600 mb-2"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 1.1 }}
              >
                Also known as <span className="text-green-600 font-semibold">Chris</span>
              </motion.p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.3 }}
              className="mb-8"
            >
              <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-lg md:text-xl text-gray-700">
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaBug className="text-green-600" />
                  <span>QA Tester</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1, rotate: -2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaCode className="text-sky-600" />
                  <span>Full Stack Developer</span>
                </motion.div>
                <motion.div 
                  className="flex items-center gap-2"
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <FaShieldAlt className="text-red-600" />
                  <span>Ethical Hacker</span>
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.5 }}
              className="mb-12"
            >
              <motion.p 
                className="text-lg text-gray-600 max-w-2xl mx-auto mb-8"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 1, delay: 1.7 }}
              >
                Passionate about creating robust web applications, ensuring quality through comprehensive testing, 
                and securing digital environments through ethical hacking practices.
              </motion.p>
              
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                {socialLinks.map(({ Icon, href, label }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    initial={{ opacity: 0, scale: 0, rotate: 180 }}
                    animate={{ opacity: 1, scale: 1, rotate: 0 }}
                    transition={{ 
                      duration: 0.6, 
                      delay: 1.9 + index * 0.1,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ 
                      scale: 1.2, 
                      rotate: 360,
                      transition: { duration: 0.3 }
                    }}
                    whileTap={{ scale: 0.9 }}
                    className="w-12 h-12 bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40 hover:bg-gradient-to-r hover:from-green-500 hover:to-sky-500 hover:text-white transition-all duration-500 hover:shadow-lg hover:shadow-green-500/25"
                  >
                    <Icon size={20} />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 2.3 }}
              className="animate-bounce"
            >
              <FaChevronDown size={32} className="text-green-600 hover:text-green-700 transition-colors mx-auto" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-lime-50 to-green-50">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                My <span className="text-green-600">Achievements</span>
              </motion.h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Milestones that showcase my dedication and expertise in the field
              </p>
            </div>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {achievements.map((achievement, index) => (
              <FloatingCard key={achievement.title} delay={index * 0.2}>
                <motion.div
                  className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/50 text-center group hover:bg-white/60 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-green-500 to-sky-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <achievement.icon className="text-2xl text-white" />
                  </motion.div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">{achievement.title}</h3>
                  <p className="text-gray-600 text-sm">{achievement.desc}</p>
                </motion.div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-green-50 via-white to-sky-50">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                My <span className="text-green-600">Skills</span>
              </motion.h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Technologies and tools I work with to build amazing digital experiences
              </p>
            </div>
          </TextReveal>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8">
            {skills.map((skill, index) => (
              <SkillIcon key={skill.name} {...skill} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-white via-green-50 to-lime-100">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                My <span className="text-green-600">Services</span>
              </motion.h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Comprehensive solutions to meet all your digital needs
              </p>
            </div>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <FloatingCard key={service.title} delay={index * 0.3}>
                <motion.div
                  className="bg-white/40 backdrop-blur-sm rounded-2xl p-8 border border-white/50 group hover:bg-white/60 transition-all duration-500 h-full"
                  whileHover={{ 
                    scale: 1.02,
                    rotateY: 2,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  <motion.div
                    className="w-16 h-16 bg-gradient-to-r from-green-500 to-sky-500 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                    whileHover={{ rotate: 360 }}
                    transition={{ duration: 0.6 }}
                  >
                    <service.icon className="text-2xl text-white" />
                  </motion.div>
                  <h3 className="text-2xl font-semibold text-gray-800 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <motion.li
                        key={feature}
                        className="flex items-center text-sm text-gray-700"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: idx * 0.1 }}
                      >
                        <FaHeart className="text-green-500 mr-2 text-xs" />
                        {feature}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-sky-50 via-white to-green-50">
        <div className="max-w-7xl mx-auto">
          <TextReveal>
            <div className="text-center mb-16">
              <motion.h2 
                className="text-3xl md:text-4xl font-bold text-gray-800 mb-4"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                What <span className="text-green-600">Clients Say</span>
              </motion.h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Feedback from satisfied clients and colleagues
              </p>
            </div>
          </TextReveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <FloatingCard key={testimonial.name} delay={index * 0.2}>
                <motion.div
                  className="bg-white/40 backdrop-blur-sm rounded-2xl p-6 border border-white/50 group hover:bg-white/60 transition-all duration-500"
                  whileHover={{ 
                    scale: 1.03,
                    rotateY: 3,
                    boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.15)"
                  }}
                >
                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.span
                        key={i}
                        className="text-yellow-400 text-lg"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        ★
                      </motion.span>
                    ))}
                  </div>
                  <p className="text-gray-600 mb-6 italic">"{testimonial.message}"</p>
                  <div className="flex items-center">
                    <div className="w-12 h-12 bg-gradient-to-r from-green-500 to-sky-500 rounded-full flex items-center justify-center mr-4">
                      <span className="text-white font-semibold">
                        {testimonial.name.split(' ').map(n => n[0]).join('')}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              </FloatingCard>
            ))}
          </div>
        </div>
      </section>

      {/* Project Stats Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Project <span className="text-green-600">Stats</span>
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A showcase of my work across different technologies and domains
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {projectStats.map((stat, index) => (
              <ProjectCard key={stat.title} {...stat} delay={index * 0.1} />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Let's Work <span className="text-green-600">Together</span>
            </h2>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
              I'm always interested in new opportunities and challenges. 
              Let's connect and build something amazing together!
            </p>
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="flex flex-wrap justify-center gap-4"
            >
              <a
                href="mailto:gyana@example.com"
                className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-full transition-colors duration-300 hover:scale-105 transform"
              >
                Get In Touch
              </a>
              <a
                href="#"
                className="bg-white/20 backdrop-blur-sm border border-white/30 hover:bg-white/30 text-gray-700 px-8 py-3 rounded-full transition-all duration-300 hover:scale-105 transform"
              >
                View Resume
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}