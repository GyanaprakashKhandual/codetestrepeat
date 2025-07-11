'use client';
import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Code,
  Bug,
  Database,
  Shield,
  Gamepad,
  Cpu,
  Brain,
  Network,
  Cloud,
  Server,
  Plus,
  Terminal,
  BarChart3,
  Lock,
  TestTube2,
  CircuitBoard,
  Sparkles
} from 'lucide-react';
import QA from '../../../public/guides/qa';

const GSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null); // Track selected skill

  useEffect(() => {
    setMounted(true);
    // Retrieve selected skill from localStorage if it exists
    const savedSkill = localStorage.getItem('selectedGSkill');
    if (savedSkill) {
      try {
        const parsedSkill = JSON.parse(savedSkill);
        // Find the matching skill in skillItems
        const foundSkill = skillItems.find(
          item => item.text === parsedSkill.text
        );
        if (foundSkill) {
          setSelectedSkill(foundSkill);
        }
      } catch (e) {
        console.error('Failed to parse saved skill', e);
      }
    }
  }, []);
  

  if (!mounted) return null;

  const skillItems = [
    { icon: Code, text: 'Web Developer', color: 'text-sky-500', bgGradient: 'bg-gradient-to-r from-sky-50 to-blue-100' },
    { icon: Bug, text: 'QA Engineer', color: 'text-lime-500', bgGradient: 'bg-gradient-to-r from-lime-50 to-green-100', component: <QA/> },
    { icon: BarChart3, text: 'Data Analyst', color: 'text-cyan-500', bgGradient: 'bg-gradient-to-r from-cyan-50 to-teal-100' },
    { icon: Shield, text: 'Cyber Security', color: 'text-blue-500', bgGradient: 'bg-gradient-to-r from-blue-50 to-indigo-100' },
    { icon: Gamepad, text: 'Game Engineer', color: 'text-emerald-500', bgGradient: 'bg-gradient-to-r from-emerald-50 to-teal-100' },
    { icon: Cpu, text: 'Computer Engineer', color: 'text-sky-600', bgGradient: 'bg-gradient-to-r from-sky-100 to-blue-100' },
    { icon: Brain, text: 'Machine Learning', color: 'text-lime-600', bgGradient: 'bg-gradient-to-r from-lime-100 to-green-100' },
    { icon: Network, text: 'Deep Learning', color: 'text-cyan-600', bgGradient: 'bg-gradient-to-r from-cyan-100 to-teal-100' },
    { icon: Cloud, text: 'Cloud Computing', color: 'text-blue-600', bgGradient: 'bg-gradient-to-r from-blue-100 to-indigo-100' },
    { icon: Terminal, text: 'DevOps', color: 'text-emerald-600', bgGradient: 'bg-gradient-to-r from-emerald-100 to-teal-100' },
    { icon: Server, text: 'System Engineer', color: 'text-sky-500', bgGradient: 'bg-gradient-to-r from-sky-50 to-blue-100' },
    { icon: CircuitBoard, text: 'Embedded Systems', color: 'text-lime-500', bgGradient: 'bg-gradient-to-r from-lime-50 to-green-100' },
    { icon: Database, text: 'Database Admin', color: 'text-cyan-500', bgGradient: 'bg-gradient-to-r from-cyan-50 to-teal-100' },
    { icon: TestTube2, text: 'SDET', color: 'text-blue-500', bgGradient: 'bg-gradient-to-r from-blue-50 to-indigo-100' },
    { icon: Lock, text: 'Security Engineer', color: 'text-emerald-500', bgGradient: 'bg-gradient-to-r from-emerald-50 to-teal-100' },
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
    localStorage.setItem('selectedGSkill', JSON.stringify({ text: skill.text }));
  };

  return (
    <div className="flex mt-14 bg-gradient-to-br from-sky-50 via-white to-lime-50 min-h-screen select-none">
      <div className='sticky top-14 self-start'>
        <div
          className={`flex flex-col bg-gradient-to-b from-white/95 via-sky-50/90 to-lime-50/95 border-r border-sky-200/50 shadow-lg transition-all duration-300 ${
            isOpen ? 'w-80' : 'w-20'
          }`}
          style={{ height: 'calc(100vh - 56px)' }}
        >
          {/* Header */}
          <div className="p-4 border-b border-sky-200/50">
            <div className="flex items-center justify-between">
              {isOpen && (
                <div className="space-y-1">
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-sky-600 via-cyan-600 to-lime-600 bg-clip-text text-transparent">
                    Tech Roles & Skills
                  </h2>
                </div>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-1 mt-1 p-2 rounded-lg bg-gradient-to-r from-sky-500 via-cyan-500 to-lime-500 text-white hover:shadow-lg transition-shadow duration-200"
              >
                {isOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* Skill Items */}
          <div className="flex-1 py-4 overflow-y-auto">
            <nav className="space-y-2 px-3">
              {skillItems.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedSkill && selectedSkill.text === item.text;
                return (
                  <div
                    key={item.text}
                    onClick={() => handleSkillClick(item)}
                    className={`rounded-lg cursor-pointer group transition-colors duration-200 ${isSelected ? 'bg-sky-100/70 border border-sky-300' : 'hover:bg-white/50'}`}
                  >
                    <div className="flex items-center p-3 space-x-3">
                      <div className={`${item.color} group-hover:scale-105 transition-transform duration-200`}>
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      {isOpen && (
                        <span className={`text-slate-700 font-medium text-sm group-hover:text-sky-700 transition-colors duration-200 ${isSelected ? 'text-sky-700 font-bold' : ''}`}>
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
          <div className="border-t border-sky-200/50 p-4">
            <div className="rounded-lg cursor-pointer group hover:bg-white/50 transition-colors duration-200">
              <div className="flex items-center p-3 space-x-3">
                <div className="text-sky-500 group-hover:text-lime-600 group-hover:scale-105 transition-all duration-200">
                  <Plus size={20} strokeWidth={1.5} />
                </div>
                {isOpen && (
                  <span className="text-slate-600 font-medium text-sm group-hover:text-sky-700 transition-colors duration-200">
                    Add New Skill
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-1 rounded-2xl overflow-auto">
        {selectedSkill ? (
          selectedSkill.component || (
            <div className="max-w-4xl mx-auto">
              <div className="bg-gradient-to-br from-white/90 via-sky-50/80 to-lime-50/90 rounded-xl shadow-lg p-8 border border-sky-200/30">
                <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-sky-600 via-cyan-600 to-lime-600 bg-clip-text text-transparent">
                  {selectedSkill.text}
                </h1>
                <p className="text-slate-600 text-lg leading-relaxed mb-8">
                  Content for {selectedSkill.text} will be displayed here.
                </p>
              </div>
            </div>
          )
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/90 via-sky-50/80 to-lime-50/90 rounded-xl shadow-lg p-8 border border-sky-200/30">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-sky-600 via-cyan-600 to-lime-600 bg-clip-text text-transparent">
                Tech Roles Explorer
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Explore various technical roles and their required skill sets. Click on any role to discover learning paths,
                recommended resources, and career opportunities in each specialization.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default GSidebar;