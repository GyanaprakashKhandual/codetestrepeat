import { motion } from "framer-motion";
import { FiGithub, FiCode, FiCheckCircle, FiLayers } from "react-icons/fi";
import { FaJira, FaMicrosoft } from "react-icons/fa";
import { SiJameson, SiJmeter, SiMiro } from "react-icons/si";
import { useState, useEffect } from "react";

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
        return <FaJira className="text-purple-600" />;
      case "Microsoft Office":
        return <FaMicrosoft className="text-blue-600" />;
      case "Miro Mind Map":
        return <SiMiro className="text-yellow-500" />;
      case "JMeter":
        return <SiJameson className="text-green-600" />;
      default:
        return <FiCode className="text-purple-400" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.5,
      },
    },
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="grid gap-8">
      {Array.isArray(projects) && projects.length > 0 ? (
        projects.filter(Boolean).map((project, index) => (
          project ? (
            <motion.div
              key={project.id || index}
              className="bg-white overflow-hidden border border-purple-100 hover:shadow-purple-200 transition-all duration-300"
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              whileHover={{ y: -5 }}
            >
              <div className="p-6">
                <div className="flex justify-between items-start">
                  <motion.h3 
                    className="text-2xl font-bold text-purple-800 mb-2"
                    variants={itemVariants}
                  >
                    {project.name || 'Untitled Project'}
                  </motion.h3>
                  {project.githubLink && (
                    <motion.a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-600 hover:text-purple-800 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub size={24} />
                    </motion.a>
                  )}
                </div>

                {project.testingType && (
                  <motion.div 
                    className="flex items-center mb-4"
                    variants={itemVariants}
                  >
                    <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                      <FiCheckCircle className="mr-1" />
                      {project.testingType}
                    </span>
                  </motion.div>
                )}

                {Array.isArray(project.testType) && project.testType.length > 0 && (
                  <motion.div className="mb-4" variants={itemVariants}>
                    <h4 className="text-sm font-semibold text-purple-700 mb-2 flex items-center">
                      <FiLayers className="mr-1" /> Test Types:
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {project.testType.map((type, idx) => (
                        <span
                          key={idx}
                          className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                        >
                          {type}
                        </span>
                      ))}
                    </div>
                  </motion.div>
                )}

                {Array.isArray(project.techStack) && project.techStack.length > 0 && (
                  <motion.div className="mb-4" variants={itemVariants}>
                    <h4 className="text-sm font-semibold text-purple-700 mb-2 flex items-center">
                      <FiCode className="mr-1" /> Tech Stack:
                    </h4>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, idx) => (
                        <div
                          key={idx}
                          className="flex items-center bg-white border border-purple-200 rounded-lg px-3 py-1 shadow-sm"
                        >
                          {getTechIcon(tech)}
                          <span className="ml-2 text-sm text-gray-700">{tech}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {Array.isArray(project.work) && project.work.length > 0 && (
                  <motion.div variants={itemVariants}>
                    <h4 className="text-sm font-semibold text-purple-700 mb-2">Work Done:</h4>
                    <ul className="space-y-2">
                      {project.work.map((item, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-green-500 mr-2 mt-1">•</span>
                          <span className="text-gray-700">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                )}
              </div>
            </motion.div>
          ) : null
        ))
      ) : (
        <div className="text-center py-8">
          <p className="text-gray-500">No projects found.</p>
        </div>
      )}
    </div>
  );
};

export default QAProject;