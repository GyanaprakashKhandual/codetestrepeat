'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiTerminal, FiFolder, FiFile, FiShield, FiCpu, FiGitBranch, FiPackage, FiGlobe, FiUsers, FiCode, FiClock, FiServer, FiDatabase } from 'react-icons/fi';

const CSGuide = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState('basic');
  const [expandedSection, setExpandedSection] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://port-backend-lh99.onrender.com/api/cs-guide');
        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }
        const jsonData = await response.json();
        setData(jsonData);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const toggleSection = (section) => {
    if (expandedSection === section) {
      setExpandedSection(null);
    } else {
      setExpandedSection(section);
    }
  };

  const getIconForSection = (section) => {
    switch (section) {
      case 'file_and_directory_operations':
        return <FiFolder className="mr-2" />;
      case 'file_viewing':
        return <FiFile className="mr-2" />;
      case 'permissions':
        return <FiShield className="mr-2" />;
      case 'package_management':
        return <FiPackage className="mr-2" />;
      case 'networking':
        return <FiGlobe className="mr-2" />;
      case 'process_management':
        return <FiCpu className="mr-2" />;
      case 'archiving_and_compression':
        return <FiDatabase className="mr-2" />;
      case 'user_management':
        return <FiUsers className="mr-2" />;
      case 'text_processing':
        return <FiCode className="mr-2" />;
      case 'crontab':
        return <FiClock className="mr-2" />;
      case 'ssh_and_copy':
        return <FiServer className="mr-2" />;
      case 'bash_scripting':
        return <FiTerminal className="mr-2" />;
      case 'system_monitoring':
        return <FiCpu className="mr-2" />;
      case 'git_and_docker':
        return <FiGitBranch className="mr-2" />;
      case 'firewall':
        return <FiShield className="mr-2" />;
      default:
        return <FiTerminal className="mr-2" />;
    }
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border-l-4 border-red-500 text-red-700 p-4" role="alert">
        <p className="font-bold">Error</p>
        <p>{error}</p>
      </div>
    );
  }

  if (!data) {
    return (
      <div className="bg-yellow-100 border-l-4 border-yellow-500 text-yellow-700 p-4" role="alert">
        <p className="font-bold">No Data</p>
        <p>Unable to load command guide data.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex items-center mb-8">
        <FiTerminal className="text-3xl text-blue-600 mr-3" />
        <h1 className="text-3xl font-bold text-gray-800">Command Line Reference Guide</h1>
      </div>

      <div className="mb-6">
        <div className="flex space-x-2 overflow-x-auto pb-2">
          {Object.keys(data).map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-md font-medium transition-colors ${activeTab === tab
                ? 'bg-blue-600 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className="space-y-6"
        >
          {data[activeTab] && Object.entries(data[activeTab]).map(([section, commands]) => (
            <div key={section} className="bg-white rounded-lg shadow-md overflow-hidden">
              <button
                onClick={() => toggleSection(section)}
                className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center">
                  {getIconForSection(section)}
                  <span className="capitalize">
                    {section.split('_').join(' ')}
                  </span>
                </div>
                <svg
                  className={`w-5 h-5 transform transition-transform ${expandedSection === section ? 'rotate-180' : ''}`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {expandedSection === section && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div className="px-6 pb-4 grid gap-4 md:grid-cols-2">
                      {commands.map((cmd, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-gray-50 p-4 rounded-md border border-gray-200"
                        >
                          <div className="font-mono bg-gray-800 text-green-400 p-3 rounded mb-2 overflow-x-auto">
                            {cmd.command}
                          </div>
                          <p className="text-gray-700 mb-2">{cmd.description}</p>
                          {cmd.example && (
                            <div className="text-sm">
                              <span className="text-gray-500">Example: </span>
                              <span className="font-mono text-gray-800">{cmd.example}</span>
                            </div>
                          )}
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default CSGuide;