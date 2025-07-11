'use client';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Rocket,
  Cpu,
  Code,
  BrainCircuit,
  Network,
  BarChart3,
  Shield,
  Globe,
  Server,
  Plus,
  Sparkles
} from 'lucide-react';

import { SiTestinglibrary } from 'react-icons/si';

const WSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ hydration-safe flag
  const [selectedAvidus, setSelectedAvidus] = useState(null);

  useEffect(() => {
    setMounted(true);
    // Retrieve selected avidus item from localStorage if it exists
    const savedAvidus = localStorage.getItem('selectedWAvidus');
    if (savedAvidus) {
      try {
        const parsedAvidus = JSON.parse(savedAvidus);
        // Find the matching item in avidusItems
        const foundAvidus = avidusItems.find(
          item => item.text === parsedAvidus.text
        );
        if (foundAvidus) {
          setSelectedAvidus(foundAvidus);
        }
      } catch (e) {
        console.error('Failed to parse saved avidus', e);
      }
    }
  }, []);

  const handleAvidusClick = (item) => {
    setSelectedAvidus(item);
    localStorage.setItem('selectedWAvidus', JSON.stringify({ text: item.text }));
  };

  if (!mounted) return null; // ✅ SSR-safe rendering

  const avidusItems = [
    { icon: SiTestinglibrary, text: 'QA Analyst', color: 'text-amber-600', bgGradient: 'bg-gradient-to-r from-amber-50 to-yellow-100' },
  ];

  return (
    <div className="flex mt-14 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 min-h-screen select-none">
      <div className='sticky top-14 self-start'>
      <div
        className={`flex flex-col bg-gradient-to-b from-white/95 via-cyan-50/90 to-indigo-50/95 border-r border-cyan-200/50 shadow-lg transition-all duration-300 ${
          isOpen ? 'w-80' : 'w-20'
        }`}
        style={{ height: 'calc(100vh - 56px)' }}
      >
        {/* Header */}
        <div className="p-4 border-b border-cyan-200/50">
          <div className="flex items-center justify-between">
            {isOpen && (
              <div className="space-y-1">
                <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Work Experience 
                </h2>
              </div>
            )}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="ml-1 mt-1 p-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white hover:shadow-lg transition-shadow duration-200"
            >
              {isOpen ? <X size={16} /> : <Menu size={16} />}
            </button>
          </div>
        </div>

        {/* Avidus Items */}
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-2 px-3">
            {avidusItems.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedAvidus && selectedAvidus.text === item.text;
              return (
                <div
                  key={item.text}
                  className={`rounded-lg cursor-pointer group transition-colors duration-200 ${isSelected ? 'bg-cyan-100/70 border border-cyan-300' : 'hover:bg-white/50'}`}
                  onClick={() => handleAvidusClick(item)}
                >
                  <div className="flex items-center p-3 space-x-3">
                    <div className={`${item.color} group-hover:scale-105 transition-transform duration-200`}>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    {isOpen && (
                      <div className="flex-1">
                        <span className={`text-slate-700 font-medium text-sm group-hover:text-cyan-700 transition-colors duration-200 ${isSelected ? 'text-cyan-700 font-bold' : ''}`}>
                          {item.text}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Add More Section */}
        <div className="border-t border-cyan-200/50 p-4">
          <div className="rounded-lg cursor-pointer group hover:bg-white/50 transition-colors duration-200">
            <div className="flex items-center p-3 space-x-3">
              <div className="text-cyan-500 group-hover:text-blue-600 group-hover:scale-105 transition-all duration-200">
                <Plus size={20} strokeWidth={1.5} />
              </div>
              {isOpen && (
                <span className="text-slate-600 font-medium text-sm group-hover:text-cyan-700 transition-colors duration-200">
                  Add New Item
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/90 via-cyan-50/80 to-indigo-50/90 rounded-xl shadow-lg p-8 border border-cyan-200/30">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Avidus Explorer
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Explore Avidus features and innovations. Click on any item to learn more about the area or technology.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WSidebar;
