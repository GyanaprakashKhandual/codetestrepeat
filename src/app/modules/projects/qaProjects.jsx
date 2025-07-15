import { motion } from "framer-motion";
import { FiGithub, FiCode, FiCheckCircle, FiLayers, FiLoader } from "react-icons/fi";
import { FaJira, FaMicrosoft } from "react-icons/fa";
import { useState, useEffect } from "react";
import { SiLobsters, SiMinutemailer } from "react-icons/si";

const QAProject = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://port-backend-lh99.onrender.com/api/qa-projects');
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  const getTechIcon = (tech) => {
    switch (tech) {
      case "Jira":
        return <FaJira className="text-blue-600" />;
      case "Microsoft Office":
        return <FaMicrosoft className="text-blue-500" />;
      case "Miro Mind Map":
        return <SiMinutemailer className="text-yellow-500" />;
      case "JMeter":
        return <SiLobsters className="text-green-600" />;
      case "Grafana":
        return <FiCode className="text-orange-500" />;
      case "Cypress":
        return <FiCode className="text-green-500" />;
      case "Cucumber":
        return <FiCode className="text-green-700" />;
      case "Page Object Model":
        return <FiCode className="text-indigo-500" />;
      case "Allure Report":
        return <FiCode className="text-purple-500" />;
      case "Git and Git Hub":
        return <FiGithub className="text-gray-800" />;
      case "Artillery":
        return <FiCode className="text-red-500" />;
      case "Selenium":
        return <FiCode className="text-orange-600" />;
      case "Extent Report":
        return <FiCode className="text-blue-600" />;
      case "Zoho Projects":
        return <FiCode className="text-blue-400" />;
      case "K6":
        return <FiCode className="text-purple-400" />;
      case "HTML Report":
        return <FiCode className="text-red-400" />;
      default:
        return <FiCode className="text-slate-500" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <motion.div
          className="flex items-center space-x-2 text-slate-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FiLoader className="animate-spin" size={24} />
          <span className="text-lg">Loading projects...</span>
        </motion.div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex items-center justify-center min-h-96">
        <motion.div
          className="text-center text-red-600"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-lg font-semibold">Error loading projects</p>
          <p className="text-sm mt-2">{error}</p>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 pt-4">
      <div className="max-w-full mx-auto">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-4xl font-bold text-slate-800 mb-4">
            QA Testing <span className="text-indigo-600">Projects</span>
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Comprehensive testing solutions across manual and automated testing methodologies
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
          variants={staggerContainer}
          initial="hidden"
          animate="visible"
        >
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-500 overflow-hidden"
              variants={containerVariants}
              whileHover={{ y: -4, scale: 1.01 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <motion.div variants={itemVariants}>
                    <h3 className="text-xl font-bold text-slate-800 mb-2">
                      {project.name}
                    </h3>
                    <div className="flex items-center">
                      <span className="bg-gradient-to-r from-emerald-500 to-teal-500 text-white text-xs font-medium px-3 py-1 rounded-full flex items-center shadow-md">
                        <FiCheckCircle className="mr-1" size={12} />
                        {project.testingType}
                      </span>
                    </div>
                  </motion.div>
                  
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-slate-600 hover:text-indigo-600 transition-colors p-1 rounded-full hover:bg-indigo-50"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub size={20} />
                    </motion.a>
                  )}
                </div>

                <motion.div className="mb-4" variants={itemVariants}>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center">
                    <FiLayers className="mr-1 text-indigo-500" size={14} /> Test Types
                  </h4>
                  <div className="flex flex-wrap gap-1">
                    {project.testType?.map((type, idx) => (
                      <span
                        key={idx}
                        className="bg-indigo-50 text-indigo-700 text-xs px-2 py-1 rounded-md border border-indigo-200 hover:bg-indigo-100 transition-colors"
                      >
                        {type}
                      </span>
                    ))}
                  </div>
                </motion.div>

                <motion.div className="mb-4" variants={itemVariants}>
                  <h4 className="text-sm font-semibold text-slate-700 mb-2 flex items-center">
                    <FiCode className="mr-1 text-indigo-500" size={14} /> Tech Stack
                  </h4>
                  <div className="grid grid-cols-2 gap-2">
                    {project.techStack?.map((tech, idx) => (
                      <div
                        key={idx}
                        className="flex items-center bg-white border border-slate-200 rounded-lg px-2 py-1.5 shadow-sm hover:shadow-md transition-all duration-300 hover:border-indigo-300"
                      >
                        {getTechIcon(tech)}
                        <span className="ml-2 text-xs text-slate-700 font-medium truncate">{tech}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div variants={itemVariants}>
                  <h4 className="text-sm font-semibold text-slate-700 mb-3">Key Achievements</h4>
                  <div className="space-y-2">
                    {project.work?.map((item, idx) => (
                      <div key={idx} className="flex items-start group">
                        <span className="text-indigo-500 mr-2 mt-0.5 group-hover:text-indigo-600 transition-colors">
                          <FiCheckCircle size={12} />
                        </span>
                        <span className="text-xs text-slate-700 leading-relaxed group-hover:text-slate-800 transition-colors">
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>
              
              <div className="h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"></div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default QAProject;