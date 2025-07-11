import { motion } from "framer-motion";
import { FiGithub, FiCode, FiCheckCircle, FiLayers } from "react-icons/fi";
import { FaJira, FaMicrosoft } from "react-icons/fa";
import { useState } from "react";
import { SiLobsters, SiMinutemailer } from "react-icons/si";

const QAProject = () => {
  const [projects] = useState([
    {
      name: "Code Editor",
      testingType: "Manual Testing",
      testType: [
        "Functional Testing",
        "User Interface Testing",
        "Load Testing",
        "User Acceptance Testing",
        "Requirement Testing"
      ],
      techStack: [
        "Microsoft Office",
        "Miro Mind Map",
        "Jira",
        "JMeter"
      ],
      work: [
        "Designed comprehensive test cases to validate core editor functionalities like syntax highlighting, auto-completion, and file operations.",
        "Performed end-to-end UI testing to ensure consistent cross-platform behavior and responsive layout.",
        "Executed requirement traceability by mapping each test case directly to functional specifications.",
        "Used JMeter to simulate multiple user sessions and analyze the load-handling capability of the code editor under stress."
      ],
      githubLink: "https://github.com/GyanaprakashKhandual/Project-Manual"
    },
    {
      name: "Orange HRM",
      testingType: "Automation Testing",
      testType: [
        "Functional Testing",
        "User Interface Testing",
        "Load Testing",
        "User Acceptance Testing",
        "Requirement Testing",
        "API Testing"
      ],
      techStack: [
        "Microsoft Office",
        "Miro Mind Map",
        "Jira",
        "Grafana",
        "Cypress",
        "Cucumber",
        "Page Object Model",
        "Allure Report",
        "Git and Git Hub"
      ],
      work: [
        "Developed automated test scripts using Cypress and Cucumber for HRM functionalities like employee management and leave tracking.",
        "Implemented Page Object Model for maintainable test automation framework.",
        "Created detailed test reports using Allure Report for better test result visualization.",
        "Performed API testing to validate HRM system endpoints and data integrity."
      ],
      githubLink: "https://github.com/GyanaprakashKhandual/Project-Cypress"
    },
    {
      name: "Pioneers Wine",
      testingType: "Automation Testing",
      testType: [
        "Functional Testing",
        "User Interface Testing",
        "Load Testing",
        "User Acceptance Testing",
        "Requirement Testing",
        "API Testing"
      ],
      techStack: [
        "Microsoft Office",
        "Miro Mind Map",
        "Jira",
        "Artillery",
        "Selenium",
        "Cucumber",
        "Page Object Model",
        "Extent Report",
        "Git and Git Hub"
      ],
      work: [
        "Automated e-commerce workflows using Selenium for wine selection and purchase processes.",
        "Used Artillery for load testing to ensure system stability during peak traffic.",
        "Created comprehensive Extent Reports for detailed test execution insights.",
        "Validated API endpoints for inventory management and order processing."
      ],
      githubLink: "https://github.com/GyanaprakashKhandual/Pioneers-Wine"
    },
    {
      name: "PISL Infra",
      testingType: "Automation and Manual Testing",
      testType: [
        "Functional Testing",
        "User Interface Testing",
        "Load Testing",
        "User Acceptance Testing",
        "Requirement Testing",
        "API Testing"
      ],
      techStack: [
        "Microsoft Office",
        "Miro Mind Map",
        "Zoho Projects",
        "K6",
        "Selenium",
        "Cucumber",
        "Page Object Model",
        "HTML Report",
        "Git and Git Hub"
      ],
      work: [
        "Conducted both manual and automated testing for infrastructure management features.",
        "Used K6 for performance testing of critical infrastructure components.",
        "Developed Selenium-based automation scripts with Cucumber for BDD testing.",
        "Generated HTML reports for clear visualization of test results."
      ],
      githubLink: "https://github.com/GyanaprakashKhandual/pisl"
    }
  ]);

  const getTechIcon = (tech) => {
    switch (tech) {
      case "Jira":
        return <FaJira className="text-purple-600" />;
      case "Microsoft Office":
        return <FaMicrosoft className="text-blue-600" />;
      case "Miro Mind Map":
        return <SiMinutemailer className="text-yellow-500" />;
      case "JMeter":
        return <SiLobsters className="text-green-600" />;
      case "Grafana":
        return <FiCode className="text-gray-600" />;
      case "Cypress":
        return <FiCode className="text-green-500" />;
      case "Cucumber":
        return <FiCode className="text-green-700" />;
      case "Page Object Model":
        return <FiCode className="text-blue-500" />;
      case "Allure Report":
        return <FiCode className="text-purple-500" />;
      case "Git and Git Hub":
        return <FiGithub className="text-gray-800" />;
      case "Artillery":
        return <FiCode className="text-red-500" />;
      case "Selenium":
        return <FiCode className="text-orange-500" />;
      case "Extent Report":
        return <FiCode className="text-blue-600" />;
      case "Zoho Projects":
        return <FiCode className="text-blue-400" />;
      case "K6":
        return <FiCode className="text-purple-400" />;
      case "HTML Report":
        return <FiCode className="text-red-400" />;
      default:
        return <FiCode className="text-purple-400" />;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <div className="grid gap-8">
      {projects.map((project, index) => (
        <motion.div
          key={index}
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
                {project.name}
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

            <motion.div 
              className="flex items-center mb-4"
              variants={itemVariants}
            >
              <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-0.5 rounded-full flex items-center">
                <FiCheckCircle className="mr-1" />
                {project.testingType}
              </span>
            </motion.div>

            <motion.div className="mb-4" variants={itemVariants}>
              <h4 className="text-sm font-semibold text-purple-700 mb-2 flex items-center">
                <FiLayers className="mr-1" /> Test Types:
              </h4>
              <div className="flex flex-wrap gap-2">
                {project.testType?.map((type, idx) => (
                  <span
                    key={idx}
                    className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                  >
                    {type}
                  </span>
                ))}
              </div>
            </motion.div>

            <motion.div className="mb-4" variants={itemVariants}>
              <h4 className="text-sm font-semibold text-purple-700 mb-2 flex items-center">
                <FiCode className="mr-1" /> Tech Stack:
              </h4>
              <div className="flex flex-wrap gap-3">
                {project.techStack?.map((tech, idx) => (
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

            <motion.div variants={itemVariants}>
              <h4 className="text-sm font-semibold text-purple-700 mb-2">Work Done:</h4>
              <ul className="space-y-2">
                {project.work?.map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <span className="text-green-500 mr-2 mt-1">•</span>
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default QAProject;