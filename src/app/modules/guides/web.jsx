'use client'

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FiCode, 
  FiMove, 
  FiMousePointer, 
  FiEye, 
  FiLayers, 
  FiSliders,
  FiZap,
  FiChevronDown,
  FiChevronUp
} from 'react-icons/fi';

const WebGuide = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [expandedCategory, setExpandedCategory] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/web-guide');
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

  const toggleCategory = (category) => {
    if (expandedCategory === category) {
      setExpandedCategory(null);
    } else {
      setExpandedCategory(category);
    }
  };

  const getIconForCategory = (category) => {
    switch (category) {
      case 'animationProps':
        return <FiCode className="mr-3 text-blue-500" />;
      case 'transitionProps':
        return <FiSliders className="mr-3 text-purple-500" />;
      case 'dragProps':
        return <FiMove className="mr-3 text-green-500" />;
      case 'gestureProps':
        return <FiMousePointer className="mr-3 text-yellow-500" />;
      case 'inViewProps':
        return <FiEye className="mr-3 text-red-500" />;
      case 'layoutProps':
        return <FiLayers className="mr-3 text-indigo-500" />;
      case 'motionValueProps':
        return <FiZap className="mr-3 text-pink-500" />;
      case 'advancedProps':
        return <FiCode className="mr-3 text-teal-500" />;
      default:
        return <FiCode className="mr-3 text-gray-500" />;
    }
  };

  const renderPropertyValue = (value) => {
    if (typeof value === 'string') {
      return value;
    } else if (typeof value === 'object' && value !== null) {
      return (
        <div className="ml-4 mt-2 pl-4 border-l-2 border-gray-200">
          {Object.entries(value).map(([key, val]) => (
            <div key={key} className="mb-2">
              <span className="font-mono text-sm text-gray-600">{key}:</span>
              <span className="ml-2 text-sm">{renderPropertyValue(val)}</span>
            </div>
          ))}
        </div>
      );
    }
    return JSON.stringify(value);
  };

  const filteredCategories = data ? Object.entries(data).filter(([category, props]) => {
    if (!searchTerm) return true;
    
    const lowerSearch = searchTerm.toLowerCase();
    return (
      category.toLowerCase().includes(lowerSearch) ||
      Object.entries(props).some(([prop, desc]) => 
        prop.toLowerCase().includes(lowerSearch) ||
        (typeof desc === 'string' && desc.toLowerCase().includes(lowerSearch)) ||
      (typeof props === 'object' && JSON.stringify(props).toLowerCase().includes(lowerSearch))
    ));
  }) : [];

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
        <p>Unable to load Framer Motion guide data.</p>
      </div>
    );
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
        <div className="flex items-center mb-4 md:mb-0">
          <FiCode className="text-3xl text-blue-600 mr-3" />
          <h1 className="text-3xl font-bold text-gray-800">Framer Motion API Reference</h1>
        </div>
        
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search properties..."
            className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <FiCode className="absolute left-3 top-3 text-gray-400" />
        </div>
      </div>

      <div className="space-y-4">
        {filteredCategories.map(([category, props]) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <button
              onClick={() => toggleCategory(category)}
              className="w-full flex items-center justify-between px-6 py-4 text-left font-semibold text-gray-800 hover:bg-gray-50 transition-colors"
            >
              <div className="flex items-center">
                {getIconForCategory(category)}
                <span className="capitalize text-lg">
                  {category.replace('Props', '').split(/(?=[A-Z])/).join(' ')}
                </span>
              </div>
              {expandedCategory === category ? (
                <FiChevronUp className="w-5 h-5 text-gray-500" />
              ) : (
                <FiChevronDown className="w-5 h-5 text-gray-500" />
              )}
            </button>

            <AnimatePresence>
              {expandedCategory === category && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="px-6 pb-4">
                    <div className="grid gap-4 md:grid-cols-2">
                      {Object.entries(props).map(([prop, desc]) => (
                        <motion.div
                          key={prop}
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          transition={{ delay: 0.05 }}
                          className="bg-gray-50 p-4 rounded-md border border-gray-200 hover:border-blue-300 transition-colors"
                        >
                          <div className="flex items-start">
                            <div className="flex-shrink-0 mt-1">
                              <div className="h-2 w-2 rounded-full bg-blue-500"></div>
                            </div>
                            <div className="ml-3">
                              <h3 className="font-mono text-blue-600 mb-1">{prop}</h3>
                              <div className="text-gray-700">
                                {renderPropertyValue(desc)}
                              </div>
                            </div>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {filteredCategories.length === 0 && (
        <div className="text-center py-12">
          <FiCode className="mx-auto h-12 w-12 text-gray-400" />
          <h3 className="mt-2 text-lg font-medium text-gray-900">No properties found</h3>
          <p className="mt-1 text-gray-500">Try a different search term</p>
        </div>
      )}
    </div>
  );
};

export default WebGuide;