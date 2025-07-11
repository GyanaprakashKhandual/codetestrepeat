'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  CheckCircle, 
  Copy, 
  Code, 
  BookOpen, 
  Lightbulb, 
  Terminal,
  AlertCircle,
  X,
  Loader2,
  Shield,
  Zap,
  Filter,
  Search
} from 'lucide-react';
import { FaCode } from 'react-icons/fa';

const Toast = ({ message, type = 'success', isVisible, onClose }) => {
  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        onClose();
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [isVisible, onClose]);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 0, y: -50, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -50, scale: 0.9 }}
          className="fixed top-4 right-4 z-50 flex items-center gap-2 px-4 py-3 rounded-lg shadow-lg border"
          style={{
            backgroundColor: type === 'success' ? '#10b981' : '#ef4444',
            color: 'white',
            border: type === 'success' ? '1px solid #059669' : '1px solid #dc2626'
          }}
        >
          {type === 'success' ? (
            <CheckCircle className="w-5 h-5" />
          ) : (
            <AlertCircle className="w-5 h-5" />
          )}
          <span className="text-sm font-medium">{message}</span>
          <button
            onClick={onClose}
            className="ml-2 p-1 rounded-full hover:bg-white hover:bg-opacity-20 transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

const RestAssuredComponent = ({ sidebarOpen = true }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [toast, setToast] = useState({ message: '', type: 'success', isVisible: false });
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedFilter, setSelectedFilter] = useState('all');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filterOptions = [
    { value: 'all', label: 'All Topics' },
    { value: 'cypress', label: 'Cypress' },
    { value: 'selenium', label: 'Selenium' },
    { value: 'rest-assured', label: 'Rest Assured' },
    { value: 'playwright', label: 'Playwright' },
    { value: 'appium', label: 'Appium' },
    { value: 'postman', label: 'Postman' },
    { value: 'jest', label: 'Jest' },
    { value: 'testng', label: 'TestNG' },
    { value: 'junit', label: 'JUnit' },
    { value: 'cucumber', label: 'Cucumber' },
    { value: 'api-testing', label: 'API Testing' },
    { value: 'ui-testing', label: 'UI Testing' },
    { value: 'mobile-testing', label: 'Mobile Testing' }
  ];

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      console.log('Searching for:', searchTerm);
      // Here you would typically trigger your search functionality
      alert(`Searching for: "${searchTerm}" with filter: "${selectedFilter}"`);
    }
  };

  const handleFilterChange = (value) => {
    setSelectedFilter(value);
    setIsFilterOpen(false);
    console.log('Filter changed to:', value);
    // Here you would typically trigger your filter functionality
  };

  const clearSearch = () => {
    setSearchTerm('');
  };

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('https://port-backend-lh99.onrender.com/api/qa-guide');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const result = await response.json();
      setData(result);
    } catch (err) {
      setError(err.message);
      showToast('Failed to fetch data', 'error');
    } finally {
      setLoading(false);
    }
  };

  const showToast = (message, type = 'success') => {
    setToast({ message, type, isVisible: true });
  };

  const hideToast = () => {
    setToast(prev => ({ ...prev, isVisible: false }));
  };

  const copyToClipboard = async (text, type) => {
    try {
      await navigator.clipboard.writeText(text);
      showToast(`${type} copied to clipboard!`, 'success');
    } catch (err) {
      showToast('Failed to copy to clipboard', 'error');
    }
  };

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
        type: "spring",
        stiffness: 100
      }
    }
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
    <div className={`min-h-screen bg-gradient-to-br from-green-50 to-white transition-all duration-300 ${
      sidebarOpen ? 'ml-0' : 'ml-0'
    }`}>
      <Toast 
        message={toast.message} 
        type={toast.type} 
        isVisible={toast.isVisible} 
        onClose={hideToast} 
      />
      
      {/* Header */}
      <motion.header
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-white border-b border-green-200"
      >
        <div className="w-full px-3 sm:px-6 lg:px-8 py-[12px]">
          <div className="flex items-center justify-between gap-4">
            {/* Logo and Title Section */}
            <div className="flex items-center gap-3 flex-shrink-0">
              <motion.div
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="p-2 bg-green-100 rounded-lg"
              >
                <Shield className="w-6 h-6 text-green-600" />
              </motion.div>
              <div>
                <h1 className="text-xl font-bold text-gray-800">QA Engineer Hub</h1>
              </div>
            </div>

            {/* Search and Filter Section */}
            <div className="flex items-center gap-3 flex-shrink-0">
              {/* Filter Dropdown */}
              <div className="relative">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setIsFilterOpen(!isFilterOpen)}
                  className="flex items-center gap-2 px-3 py-2 bg-gray-50 hover:bg-gray-100 border border-gray-200 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                >
                  <Filter className="w-4 h-4" />
                  {filterOptions.find(opt => opt.value === selectedFilter)?.label}
                </motion.button>

                {/* Filter Dropdown Menu */}
                {isFilterOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 rounded-lg shadow-lg z-10"
                  >
                    <div className="py-2 max-h-64 overflow-y-auto">
                      {filterOptions.map((option) => (
                        <button
                          key={option.value}
                          onClick={() => handleFilterChange(option.value)}
                          className={`w-full text-left px-4 py-2 text-sm hover:bg-gray-50 transition-colors ${
                            selectedFilter === option.value 
                              ? 'bg-green-50 text-green-700 font-medium' 
                              : 'text-gray-700'
                          }`}
                        >
                          {option.label}
                        </button>
                      ))}
                    </div>
                  </motion.div>
                )}
              </div>

              {/* Search Bar */}
              <div className="relative">
                <div className="flex items-center">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && handleSearch(e)}
                      placeholder="Search tutorials, guides..."
                      className="w-64 pl-10 pr-8 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent text-sm"
                    />
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                    
                    {/* Clear Search Button */}
                    {searchTerm && (
                      <button
                        type="button"
                        onClick={clearSearch}
                        className="absolute right-2 top-1/2 transform -translate-y-1/2 p-1 hover:bg-gray-100 rounded-full transition-colors"
                      >
                        <X className="w-3 h-3 text-gray-400" />
                      </button>
                    )}
                  </div>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={handleSearch}
                    className="ml-2 px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors text-sm"
                  >
                    Search
                  </motion.button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Click overlay to close filter dropdown */}
      {isFilterOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsFilterOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="w-full">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="space-y-6"
        >
          {/* Introduction */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 border border-green-100"
          >
            <div className="flex items-center gap-3 mb-3">
              <BookOpen className="w-5 h-5 text-green-600" />
              <h2 className="text-lg font-semibold text-gray-800">Getting Started</h2>
            </div>
            <p className="text-sm text-gray-600 leading-relaxed">
              Welcome to the Rest Assured Hub! Here you'll find comprehensive guides, ready-to-use code snippets, 
              and best practices for API testing with Rest Assured. Each section includes practical examples and 
              detailed explanations to help you master API testing.
            </p>
          </motion.div>

          {/* Content Cards */}
          <div className="grid gap-6">
            {data.map((item, index) => (
              <motion.article
                key={index}
                variants={itemVariants}
                whileHover={{ y: -3 }}
                className="bg-white rounded-lg overflow-hidden border border-green-100 hover:border-green-200 transition-all duration-300"
              >
                {/* Card Header */}
                <div className="bg-gradient-to-r from-green-600 to-green-700 p-4 text-white">
                  <div className="flex items-start gap-3">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      className="p-2 bg-white bg-opacity-20 rounded-lg"
                    >
                      <Code className="w-5 h-5 text-green-800" />
                    </motion.div>
                    <div className="flex-1">
                      <h3 className="text-lg font-semibold mb-2">{item.workName}</h3>
                      <p className="text-sm text-green-100 leading-relaxed">{item.workDescription}</p>
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-4">
                  {/* Prompt Section */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Lightbulb className="w-4 h-4 text-green-600" />
                      <h4 className="text-base font-semibold text-gray-800">Prompt Template</h4>
                    </div>
                    <div className="bg-gray-50 border border-gray-200 rounded-lg p-3 relative group">
                      <pre className="text-xs text-gray-700 whitespace-pre-wrap font-mono leading-relaxed">
                        {item.prompt}
                      </pre>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => copyToClipboard(item.prompt, 'Prompt')}
                        className="absolute top-2 right-2 p-1.5 bg-white border border-gray-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-gray-50"
                        title="Copy prompt"
                      >
                        <Copy className="w-3 h-3 text-gray-600" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Result Section */}
                  <div className="mb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <Terminal className="w-4 h-4 text-green-600" />
                      <h4 className="text-base font-semibold text-gray-800">Implementation Guide</h4>
                    </div>
                    <div className="bg-green-50 border border-green-200 rounded-lg p-3 relative group">
                      <p className="text-xs text-gray-700 leading-relaxed">
                        {item.result}
                      </p>
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => copyToClipboard(item.result, 'Implementation guide')}
                        className="absolute top-2 right-2 p-1.5 bg-white border border-green-300 rounded-md opacity-0 group-hover:opacity-100 transition-opacity hover:bg-green-50"
                        title="Copy implementation guide"
                      >
                        <Copy className="w-3 h-3 text-green-600" />
                      </motion.button>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-2 pt-3 border-t border-gray-100">
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(item.prompt, 'Prompt')}
                      className="flex items-center gap-2 px-3 py-1.5 bg-green-600 text-white text-xs rounded-md hover:bg-green-700 transition-colors"
                    >
                      <Copy className="w-3 h-3" />
                      Copy Prompt
                    </motion.button>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => copyToClipboard(item.result, 'Implementation guide')}
                      className="flex items-center gap-2 px-3 py-1.5 bg-white border border-green-600 text-green-600 text-xs rounded-md hover:bg-green-50 transition-colors"
                    >
                      <Zap className="w-3 h-3" />
                      Copy Guide
                    </motion.button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Footer */}
          <motion.div
            variants={itemVariants}
            className="bg-white rounded-lg p-6 border border-green-100 text-center"
          >
            <div className="flex items-center justify-center gap-3 mb-3">
              <CheckCircle className="w-5 h-5 text-green-600" />
              <h3 className="text-lg font-semibold text-gray-800">Ready to Start Testing?</h3>
            </div>
            <p className="text-sm text-gray-600 mb-4">
              Use the prompts and guides above to generate comprehensive test cases for your APIs. 
              Remember to customize them based on your specific API requirements and testing needs.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={fetchData}
              className="px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors font-medium"
            >
              Refresh Content
            </motion.button>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
};

export default RestAssuredComponent;