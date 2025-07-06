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
  Zap
} from 'lucide-react';

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

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      setLoading(true);
      const response = await fetch('http://localhost:5000/api/rest-assured');
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
      <div className={`min-h-screen bg-gradient-to-br from-green-50 to-white transition-all duration-300 ${
        sidebarOpen ? 'ml-80' : 'ml-20'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                className="w-12 h-12 mx-auto mb-3"
              >
                <Loader2 className="w-12 h-12 text-green-600" />
              </motion.div>
              <h2 className="text-lg font-semibold text-gray-700">Loading Rest Assured Resources...</h2>
              <p className="text-sm text-gray-500 mt-1">Please wait while we fetch the latest content</p>
            </motion.div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className={`min-h-screen bg-gradient-to-br from-green-50 to-white transition-all duration-300 ${
        sidebarOpen ? 'ml-80' : 'ml-20'
      }`}>
        <div className="w-full px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center min-h-[60vh]">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center"
            >
              <AlertCircle className="w-12 h-12 mx-auto mb-3 text-red-500" />
              <h2 className="text-lg font-semibold text-gray-700">Error Loading Data</h2>
              <p className="text-sm text-gray-500 mt-1">{error}</p>
              <button
                onClick={fetchData}
                className="mt-3 px-4 py-2 bg-green-600 text-white text-sm rounded-lg hover:bg-green-700 transition-colors"
              >
                Retry
              </button>
            </motion.div>
          </div>
        </div>
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
        <div className="w-full px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center gap-3">
            <motion.div
              whileHover={{ scale: 1.1, rotate: 5 }}
              className="p-2 bg-green-100 rounded-lg"
            >
              <Shield className="w-6 h-6 text-green-600" />
            </motion.div>
            <div>
              <h1 className="text-xl font-bold text-gray-800">Rest Assured Hub</h1>
              <p className="text-sm text-gray-600 mt-0.5">Your comprehensive guide to API testing with Rest Assured</p>
            </div>
          </div>
        </div>
      </motion.header>

      {/* Main Content */}
      <main className="w-full px-4 sm:px-6 lg:px-8 py-6">
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
                      <Code className="w-5 h-5" />
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