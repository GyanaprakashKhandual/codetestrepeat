'use client';
import React, { useState, useEffect } from 'react'; // ✅ useEffect imported
import {
  Menu,
  X,
  Code,
  Cpu,
  Database,
  GitBranch,
  Terminal,
  Layers,
  Type,
  Box,
  Zap,
  Shield,
  Globe,
  Package,
  Settings,
  Plus,
  HardDrive,
  Server
} from 'lucide-react';

const DSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false); // ✅ hydration flag

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // ✅ prevents hydration mismatch

  const menuItems = [
    { icon: Code, text: 'HTML5', color: 'text-orange-600', bgGradient: 'bg-gradient-to-r from-orange-50 to-amber-100' },
    { icon: Type, text: 'CSS3', color: 'text-blue-600', bgGradient: 'bg-gradient-to-r from-blue-50 to-indigo-100' },
    { icon: Terminal, text: 'JavaScript', color: 'text-yellow-600', bgGradient: 'bg-gradient-to-r from-yellow-50 to-amber-100' },
    { icon: Box, text: 'TypeScript', color: 'text-indigo-600', bgGradient: 'bg-gradient-to-r from-indigo-50 to-blue-100' },
    { icon: Cpu, text: 'React', color: 'text-cyan-600', bgGradient: 'bg-gradient-to-r from-cyan-50 to-sky-100' },
    { icon: Database, text: 'SQL', color: 'text-purple-600', bgGradient: 'bg-gradient-to-r from-purple-50 to-violet-100' },
    { icon: GitBranch, text: 'Git', color: 'text-red-600', bgGradient: 'bg-gradient-to-r from-red-50 to-rose-100' },
    { icon: Layers, text: 'Redux', color: 'text-pink-600', bgGradient: 'bg-gradient-to-r from-pink-50 to-rose-100' },
    { icon: Zap, text: 'Next.js', color: 'text-green-600', bgGradient: 'bg-gradient-to-r from-green-50 to-emerald-100' },
    { icon: Shield, text: 'Security', color: 'text-rose-600', bgGradient: 'bg-gradient-to-r from-rose-50 to-pink-100' },
    { icon: Globe, text: 'Web APIs', color: 'text-sky-600', bgGradient: 'bg-gradient-to-r from-sky-50 to-cyan-100' },
    { icon: Package, text: 'NPM', color: 'text-gray-600', bgGradient: 'bg-gradient-to-r from-gray-50 to-slate-100' },
    { icon: Settings, text: 'Webpack', color: 'text-amber-600', bgGradient: 'bg-gradient-to-r from-amber-50 to-yellow-100' },
    { icon: HardDrive, text: 'MongoDB', color: 'text-lime-600', bgGradient: 'bg-gradient-to-r from-lime-50 to-green-100' },
    { icon: Server, text: 'Node.js', color: 'text-cyan-600', bgGradient: 'bg-gradient-to-r from-cyan-50 to-teal-100' },
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
                  Dev Stack
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

        {/* Menu Items */}
        <div className="flex-1 py-4 overflow-y-auto">
          <nav className="space-y-2 px-3">
            {menuItems.map((item) => {
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
                  Add New Stack
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
              Dev Stack Explorer
            </h1>
            <p className="text-slate-600 text-lg leading-relaxed mb-8">
              Explore the development stack and tools. Click on any item to learn more about the technology or tool.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DSidebar;
