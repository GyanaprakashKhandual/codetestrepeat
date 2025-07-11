'use client';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Cpu,
  Factory,
  Car,
  Shirt,
  Film,
  Plane,
  Brain,
  Wand2,
  Code,
  ShoppingBag,
  Camera,
  Globe,
  Plus,
  Rocket,
  CircuitBoard
} from 'lucide-react';

const BSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedIndustry, setSelectedIndustry] = useState(null);

  useEffect(() => {
    setMounted(true);
    // Retrieve selected industry from localStorage if it exists
    const savedIndustry = localStorage.getItem('selectedIndustry');
    if (savedIndustry) {
      try {
        const parsedIndustry = JSON.parse(savedIndustry);
        // Find the matching industry in industryItems
        const foundIndustry = industryItems.find(
          item => item.text === parsedIndustry.text
        );
        if (foundIndustry) {
          setSelectedIndustry(foundIndustry);
        }
      } catch (e) {
        console.error('Failed to parse saved industry', e);
      }
    }
  }, []);
 
  const handleIndustryClick = (item) => {
    setSelectedIndustry(item);
    localStorage.setItem('selectedIndustry', JSON.stringify({ text: item.text }));
  };

  if (!mounted) return null;

  const industryItems = [
    { icon: Code, text: 'Software Industry', color: 'text-blue-600', bgGradient: 'bg-gradient-to-r from-blue-50 to-indigo-100' },
    { icon: CircuitBoard, text: 'Hardware Industry', color: 'text-orange-600', bgGradient: 'bg-gradient-to-r from-orange-50 to-amber-100' },
    { icon: Car, text: 'Automobile Industry', color: 'text-red-600', bgGradient: 'bg-gradient-to-r from-red-50 to-rose-100' },
    { icon: Shirt, text: 'Fashion Industry', color: 'text-pink-600', bgGradient: 'bg-gradient-to-r from-pink-50 to-rose-100' },
    { icon: Film, text: 'Film Industry', color: 'text-purple-600', bgGradient: 'bg-gradient-to-r from-purple-50 to-violet-100' },
    { icon: Brain, text: 'Psychology', color: 'text-indigo-600', bgGradient: 'bg-gradient-to-r from-indigo-50 to-blue-100' },
    { icon: Wand2, text: 'Imagination', color: 'text-yellow-600', bgGradient: 'bg-gradient-to-r from-yellow-50 to-amber-100' },
    { icon: Factory, text: 'Manufacturing', color: 'text-gray-600', bgGradient: 'bg-gradient-to-r from-gray-50 to-slate-100' },
    { icon: Camera, text: 'Modeling', color: 'text-violet-600', bgGradient: 'bg-gradient-to-r from-violet-50 to-purple-100' },
    { icon: Globe, text: 'Traveling', color: 'text-cyan-600', bgGradient: 'bg-gradient-to-r from-cyan-50 to-teal-100' },
    { icon: Cpu, text: 'Electronics', color: 'text-amber-600', bgGradient: 'bg-gradient-to-r from-amber-50 to-yellow-100' },
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
                  Industries
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

        {/* Items */}
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-2 px-3">
            {industryItems.map((item) => {
              const Icon = item.icon;
              const isSelected = selectedIndustry && selectedIndustry.text === item.text;
              return (
                <div
                  key={item.text}
                  className={`rounded-lg cursor-pointer group transition-colors duration-200 ${isSelected ? 'bg-cyan-100/70 border border-cyan-300' : 'hover:bg-white/50'}`}
                  onClick={() => handleIndustryClick(item)}
                >
                  <div className="flex items-center p-3 space-x-3">
                    <div className={`${item.color} group-hover:scale-105 transition-transform duration-200`}>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    {isOpen && (
                      <span className={`text-slate-700 font-medium text-sm group-hover:text-cyan-700 transition-colors duration-200 ${isSelected ? 'text-cyan-700 font-bold' : ''}`}>
                        {item.text}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </nav>
        </div>

        {/* Add More */}
        <div className="border-t border-cyan-200/50 p-4">
          <div className="rounded-lg cursor-pointer group hover:bg-white/50 transition-colors duration-200">
            <div className="flex items-center p-3 space-x-3">
              <div className="text-cyan-500 group-hover:text-blue-600 group-hover:scale-105 transition-all duration-200">
                <Plus size={20} strokeWidth={1.5} />
              </div>
              {isOpen && (
                <span className="text-slate-600 font-medium text-sm group-hover:text-cyan-700 transition-colors duration-200">
                  Add New Industry
                </span>
              )}
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-4xl mx-auto">
          <div className="bg-gradient-to-br from-white/90 via-cyan-50/80 to-indigo-50/90 rounded-xl shadow-lg p-8 border border-cyan-200/30">
            <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Industry Explorer
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Explore various industries and their domains. Click on any industry to discover more about its opportunities and trends.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BSidebar;
