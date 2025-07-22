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
  SubscriptIcon
} from 'lucide-react';
// import WebDeveloper from '../modules/web-developer.jsx';
import QAEngineer from '../modules/skills/qaSkills';
import WebSkils from '../modules/skills/webskills';
import DASkills from '../modules/skills/daSkills';
// import DataAnalyst from '../modules/data-analyst.jsx';
// import CyberSecurity from '../modules/cyber-security.jsx';
// import GameEngineer from '../modules/game-engineer.jsx';
// import ComputerEngineer from '../modules/computer-engineer.jsx';
// import MachineLearning from '../modules/machine-learning.jsx';
// import DeepLearning from '../modules/deep-learning.jsx';
// import CloudComputing from '../modules/cloud-computing.jsx';
// import DevOps from '../modules/devops.jsx';
// import SystemEngineer from '../modules/system-engineer.jsx';
// import EmbeddedSystems from '../modules/embedded-systems.jsx';
// import DatabaseAdmin from '../modules/database-admin.jsx';
// import SDET from '../modules/sdet.jsx';
// import SecurityEngineer from '../modules/security-engineer.jsx';

const ProfessionalSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);
  
    useEffect(() => {
      setMounted(true);
      // Retrieve selected skill from localStorage if it exists
      const savedSkill = localStorage.getItem('selectedSkill');
      if (savedSkill) {
        try {
          const parsedSkill = JSON.parse(savedSkill);
          // Find the matching skill in our items
          const foundSkill = [...skillItems, ...cardItems].find(
            item => item.text === parsedSkill.text || item.title === parsedSkill.text
          );
          if (foundSkill) {
            setSelectedSkill(foundSkill);
          }
        } catch (e) {
          console.error('Failed to parse saved skill', e);
        }
      }
    }, []);

  const skillItems = [
    { icon: Code, text: 'Web Developer', color: 'text-blue-600', bgGradient: 'bg-gradient-to-r from-blue-50 to-sky-100', component: <WebSkils/> },
    { icon: Bug, text: 'QA Engineer', color: 'text-emerald-600', bgGradient: 'bg-gradient-to-r from-emerald-50 to-green-100', component: <QAEngineer /> },
    { icon: BarChart3, text: 'Data Analyst', color: 'text-purple-600', bgGradient: 'bg-gradient-to-r from-purple-50 to-violet-100', component: <DASkills/>}, 
    { icon: Shield, text: 'Cyber Security', color: 'text-red-600', bgGradient: 'bg-gradient-to-r from-red-50 to-rose-100' }, // component: <CyberSecurity /> 
    { icon: Gamepad, text: 'Game Engineer', color: 'text-yellow-600', bgGradient: 'bg-gradient-to-r from-yellow-50 to-amber-100' }, // component: <GameEngineer /> 
    { icon: Cpu, text: 'Computer Engineer', color: 'text-gray-600', bgGradient: 'bg-gradient-to-r from-gray-50 to-slate-100' }, // component: <ComputerEngineer /> 
    { icon: Brain, text: 'Machine Learning', color: 'text-pink-600', bgGradient: 'bg-gradient-to-r from-pink-50 to-rose-100' }, // component: <MachineLearning /> 
    { icon: Network, text: 'Deep Learning', color: 'text-indigo-600', bgGradient: 'bg-gradient-to-r from-indigo-50 to-blue-100' }, // component: <DeepLearning /> 
    { icon: Cloud, text: 'Cloud Computing', color: 'text-sky-600', bgGradient: 'bg-gradient-to-r from-sky-50 to-cyan-100' }, // component: <CloudComputing /> 
    { icon: Terminal, text: 'DevOps', color: 'text-orange-600', bgGradient: 'bg-gradient-to-r from-orange-50 to-amber-100' }, // component: <DevOps /> 
    { icon: Lock, text: 'Security Engineer', color: 'text-rose-600', bgGradient: 'bg-gradient-to-r from-rose-50 to-pink-100' }, // component: <SecurityEngineer /> 
  ];

  const cardItems = [
    { title: "Web Development", desc: "Frontend, Backend & Fullstack", gradient: "from-blue-100 to-sky-100", border: "border-blue-200", icon: Code, component: <WebSkils/>}, // component: <WebDeveloper /> },
    { title: "Quality Assurance", desc: "Manual & Automated Testing", gradient: "from-emerald-100 to-green-100", border: "border-emerald-200", icon: Bug, component: <QAEngineer /> },
    { title: "Data Science", desc: "Analysis, Visualization & ML", gradient: "from-purple-100 to-violet-100", border: "border-purple-200", icon: BarChart3, component: <DASkills/>}, //component: <DataAnalyst /> },
    { title: "Cyber Security", desc: "Ethical Hacking & Defense", gradient: "from-red-100 to-rose-100", border: "border-red-200", icon: Shield}, //component: //<CyberSecurity /> },
    { title: "Game Development", desc: "Engines & Graphics Programming", gradient: "from-yellow-100 to-amber-100", border: "border-yellow-200", icon: Gamepad},// component: <GameEngineer /> },
    { title: "Cloud Engineering", desc: "AWS, Azure & GCP Solutions", gradient: "from-sky-100 to-cyan-100", border: "border-sky-200", icon: Cloud},// component: // <CloudComputing /> }
  ];

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  if (!mounted) return null;

  return (
    <div className="flex mt-14 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 min-h-screen select-none">
      <div className='sticky top-14 self-start'>
        <div
          className={`flex flex-col bg-gradient-to-b from-white/95 via-cyan-50/90 to-indigo-50/95 border-r border-cyan-200/50 transition-all duration-300 ${
            isOpen ? 'w-80' : 'w-20'
          }`}
          style={{ height: 'calc(100vh - 56px)' }}
        >
          {/* Header */}
          <div className="p-4 border-b border-cyan-200/50">
            <div className="flex items-center justify-between">
              {isOpen && (
                <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tech Roles & Skills
                </h2>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-1 mt-1 p-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white hover:shadow-lg transition-shadow duration-200"
              >
                {isOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* Sidebar Items */}
          <div className="flex-1 py-4 overflow-y-auto">
            <nav className="space-y-2 px-3">
              {skillItems.map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.text}
                    onClick={() => handleSkillClick(item)}
                    className="rounded-lg cursor-pointer group hover:bg-white/50 transition-colors duration-200"
                  >
                    <div className="flex items-center p-3 space-x-3">
                      <div className={`${item.color} group-hover:scale-105 transition-transform duration-200`}>
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      {isOpen && (
                        <span className="text-slate-700 font-medium text-sm group-hover:text-cyan-700 transition-colors duration-200">
                          {item.text}
                        </span>
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
                  <SubscriptIcon size={20} strokeWidth={1.5} />
                </div>
                {isOpen && (
                  <span className="text-slate-600 font-medium text-sm group-hover:text-cyan-700 transition-colors duration-200">
                    Subscribe
                  </span>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content Area */}
      <div className="flex-1 overflow-auto">
        {selectedSkill ? (
          selectedSkill.component
        ) : (
          <div className="max-w-4xl mx-auto">
            <div className="bg-gradient-to-br from-white/90 via-cyan-50/80 to-indigo-50/90 rounded-xl shadow-lg p-8 border border-cyan-200/30">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technical Skills Explorer
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Explore various technical roles and their required skill sets. Click on any role to discover learning paths,
                recommended resources, and career opportunities in each specialization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardItems.map((item) => {
                  const Icon = item.icon;
                  return (
                    <div
                      key={item.title}
                      onClick={() => handleSkillClick(item)}
                      className={`bg-gradient-to-br ${item.gradient} p-6 rounded-lg border ${item.border} hover:shadow-md transition-shadow duration-200 cursor-pointer group`}
                    >
                      <div className="flex items-center mb-3">
                        <Icon className="text-cyan-600 mr-3 group-hover:scale-105 transition-transform duration-200" size={24} />
                        <h3 className="font-semibold text-slate-700 text-lg">{item.title}</h3>
                      </div>
                      <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProfessionalSidebar;