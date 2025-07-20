'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  MapPin, 
  Calendar, 
  Briefcase, 
  CheckCircle, 
  ExternalLink, 
  Building, 
  Clock,
  Users,
  Code,
  TestTube
} from 'lucide-react';

const AIWorkExperience = () => {
  const [workData] = useState({
    name: 'Avidus Interactive',
    address: 'JP Nagar, Bengaluru, Karnataka',
    workType: 'Remote Work',
    designation: 'Quality Assurance Analyst',
    duration: 'April 2024 to Present',
    rolesAndResponsibilities: [
      'Design, document and execute manual and automated test cases for multiple projects.',
      'Collaborate closely with developers, product managers and UI/UX teams to ensure product quality in web applications.',
      'Develop test plans, identify test scenarios and ensure traceability of test cases to requirements.',
      'Perform cross-browser and cross-device testing to ensure consistent behavior and responsiveness.',
      'Report and track bugs using tools like Jira, ensuring timely resolution and regression testing.',
      'Write end-to-end test scripts using Selenium and Cypress for UI, API and performance testing.',
      'Lead smoke, sanity and regression testing cycles before deployment.',
      'Communicate quality metrics to the team and continuously improve test coverage and efficiency.'
    ],
    projects: {
      'PISL Infra': 'https://github.com/GyanaprakashKhandual/pisl',
      'Resolution Pro (Legal Case Management System)': 'https://github.com/GyanaprakashKhandual/resolutionpros',
      'Audit Pro (Compliance and Audit Management)': 'https://github.com/GyanaprakashKhandual/audit-pro',
      'Mega Jewelers (Inventory and Billing System)': 'https://github.com/GyanaprakashKhandual/mega-jewelers',
      'Get My Policy Online (Insurance Policy Portal)': 'https://github.com/GyanaprakashKhandual/get-my-policy-online',
      'REVX Capital (Financial and Lending Dashboard)': 'https://github.com/GyanaprakashKhandual/revx-capital'
    }
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="h-[calc(100vh-60px)] max-h-[calc(100vh-104px)] overflow-y-aut0">
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto  h-full flex flex-col"
      >

        {/* Company Info Card with Statistics */}
        <motion.div
          variants={itemVariants}
          className="bg-white/80 backdrop-blur-sm rounded-xl shadow-2xs border border-sky-100 p-4 mb-4 hover:shadow-xl transition-all duration-300 flex-shrink-0"
        >
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-gradient-to-br from-sky-400 to-sky-500 rounded-lg">
                <Building className="w-5 h-5 text-white" />
              </div>
              <div>
                <h2 className="text-lg sm:text-xl font-bold text-gray-800">{workData.name}</h2>
                <p className="text-emerald-600 font-semibold text-sm">{workData.designation}</p>
              </div>
            </div>
            

            {/* Statistics Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-3 border-t border-gray-100">
              {[
                { label: 'Total Projects', value: Object.keys(workData.projects).length, color: 'from-sky-400 to-sky-500', icon: Code },
                { label: 'Responsibilities', value: workData.rolesAndResponsibilities.length, color: 'from-emerald-400 to-emerald-500', icon: CheckCircle },
                { label: 'Work Type', value: 'Remote', color: 'from-violet-400 to-violet-500', icon: Clock },
                { label: 'Experience', value: '3+ Months', color: 'from-rose-400 to-rose-500', icon: Calendar }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  className="bg-gradient-to-br from-gray-50 to-white rounded-lg p-3 text-center border border-gray-100 hover:shadow-md transition-all duration-300"
                  whileHover={{ y: -2 }}
                >
                  <div className={`inline-flex p-1.5 rounded-lg bg-gradient-to-br ${stat.color} mb-1`}>
                    <stat.icon className="w-4 h-4 text-white" />
                  </div>
                  <div className="text-sm font-bold text-gray-800">{stat.value}</div>
                  <div className="text-xs text-gray-600">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 xl:grid-cols-2 gap-4 flex-1 min-h-0">
          {/* Roles and Responsibilities */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-emerald-100 p-4 hover:shadow-xl transition-all duration-300 flex flex-col min-h-0"
          >
            <div className="flex items-center gap-2 mb-3 flex-shrink-0">
              <div className="p-2 bg-gradient-to-br from-emerald-400 to-emerald-500 rounded-lg">
                <Users className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Roles and Responsibilities</h3>
            </div>
            
            <div className="space-y-2 overflow-y-auto flex-1 pr-2">
              {workData.rolesAndResponsibilities.map((role, index) => (
                <motion.div
                  key={index}
                  initial={{ x: -20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex gap-2 p-2 rounded-lg bg-gradient-to-r from-emerald-50 to-sky-50 hover:from-emerald-100 hover:to-sky-100 transition-all duration-300"
                >
                  <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 text-xs leading-relaxed">{role}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Projects */}
          <motion.div
            variants={itemVariants}
            className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-violet-100 p-4 hover:shadow-xl transition-all duration-300 flex flex-col min-h-0"
          >
            <div className="flex items-center gap-2 mb-3 flex-shrink-0">
              <div className="p-2 bg-gradient-to-br from-violet-400 to-violet-500 rounded-lg">
                <Code className="w-5 h-5 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-800">Projects</h3>
            </div>
            
            <div className="space-y-2 overflow-y-auto flex-1 pr-2">
              {Object.entries(workData.projects).map(([projectName, projectUrl], index) => (
                <motion.a
                  key={index}
                  href={projectUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ x: 20, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center justify-between p-3 rounded-lg bg-gradient-to-r from-violet-50 to-sky-50 hover:from-violet-100 hover:to-sky-100 transition-all duration-300 group hover:scale-[1.02]"
                  whileHover={{ x: 5 }}
                >
                  <div className="flex items-center gap-2">
                    <Briefcase className="w-4 h-4 text-violet-500" />
                    <span className="text-gray-700 font-medium text-xs">{projectName}</span>
                  </div>
                  <ExternalLink className="w-3 h-3 text-gray-400 group-hover:text-violet-500 transition-colors" />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default AIWorkExperience;