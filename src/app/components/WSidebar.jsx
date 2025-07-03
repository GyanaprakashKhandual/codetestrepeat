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

const WSidebar = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [mounted, setMounted] = useState(false); // ✅ hydration-safe flag

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ SSR-safe rendering

  const avidusItems = [
    { icon: Rocket, text: 'Innovation Lab', color: 'text-amber-600', bgGradient: 'bg-gradient-to-r from-amber-50 to-yellow-100' },
    { icon: Cpu, text: 'Tech Solutions', color: 'text-blue-600', bgGradient: 'bg-gradient-to-r from-blue-50 to-indigo-100' },
    { icon: Code, text: 'Dev Frameworks', color: 'text-green-600', bgGradient: 'bg-gradient-to-r from-green-50 to-emerald-100' },
    { icon: BrainCircuit, text: 'AI Research', color: 'text-purple-600', bgGradient: 'bg-gradient-to-r from-purple-50 to-violet-100' },
    { icon: Network, text: 'Connectivity', color: 'text-red-600', bgGradient: 'bg-gradient-to-r from-red-50 to-rose-100' },
    { icon: BarChart3, text: 'Data Insights', color: 'text-cyan-600', bgGradient: 'bg-gradient-to-r from-cyan-50 to-sky-100' },
    { icon: Shield, text: 'Cyber Security', color: 'text-lime-600', bgGradient: 'bg-gradient-to-r from-lime-50 to-green-100' },
    { icon: Globe, text: 'Global Reach', color: 'text-pink-600', bgGradient: 'bg-gradient-to-r from-pink-50 to-rose-100' },
    { icon: Server, text: 'Cloud Systems', color: 'text-indigo-600', bgGradient: 'bg-gradient-to-r from-indigo-50 to-blue-100' },
    { icon: Sparkles, text: 'Emerging Tech', color: 'text-orange-600', bgGradient: 'bg-gradient-to-r from-orange-50 to-amber-100' },
  ];

  return (
    <div className="flex mt-14 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 min-h-screen">
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
                  Avidus
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
              return (
                <div
                  key={item.text}
                  className="rounded-lg cursor-pointer group hover:bg-white/50 transition-colors duration-200"
                >
                  <div className="flex items-center p-3 space-x-3">
                    <div className={`${item.color} group-hover:scale-105 transition-transform duration-200`}>
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    {isOpen && (
                      <div className="flex-1">
                        <span className="text-slate-700 font-medium text-sm group-hover:text-cyan-700 transition-colors duration-200">
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
