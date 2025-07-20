'use client';
import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, LineChart, Line } from 'recharts';
import { Briefcase, Calendar, MapPin, TrendingUp, Users, Award, Clock, Building } from 'lucide-react';
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
import dynamic from 'next/dynamic';

// Dynamically import the AIWorkExperience component to ensure proper loading
const AIWorkExperience = dynamic(() => import('../modules/work/AI'), {
  loading: () => <div>Loading experience...</div>,
  ssr: false
});



const MainContent = () => {
  const [selectedExperience, setSelectedExperience] = useState(null);

  // Sample work experience data
  const workExperience = [
    {
      id: 1,
      company: "Avidus Interactive",
      role: "Quality Assurance Enginner",
      duration: "2025 - Present",
      location: "Bhubanewar, India",
      type: "Full-time",
      skills: ["Cypress", "Grafana", "Rest Assured", "Burp Suite"],
      description: "Work with developer for resolve the issue and hep with debugging",
      achievements: ["Reduced deployment time by 60%", "Increased test coverage to 95%"]
    },
  ];

  // Dashboard statistics
  const stats = [
    { label: "Total Experience", value: "3+ Months", icon: Clock, color: "from-blue-500 to-cyan-500" },
    { label: "Companies", value: "1", icon: Building, color: "from-purple-500 to-pink-500" },
    { label: "Projects", value: "7+", icon: Briefcase, color: "from-green-500 to-emerald-500" },
    { label: "Team Members", value: "12", icon: Users, color: "from-orange-500 to-red-500" }
  ];

  // Skills distribution data
  const skillsData = [
    { name: "JavaScript", years: 1, color: "#f59e0b" },
    { name: "React", years: 1, color: "#3b82f6" },
    { name: "Node.js", years: 1, color: "#10b981" },
    { name: "Selenium", years: 1, color: "#8b5cf6" },
    { name: "K6", years: 1, color: "#f97316" }
  ];

  // Career progression data
  const careerData = [
    { year: "2025", level: 1, role: "Quality Assurance Engineer" }
  ];

  const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

  return (
    <div className="min-h-screen">
      <div className="max-w-full mx-auto space-y-4">
        {/* Header */}
        <div className="bg-gradient-to-r from-white/95 to-cyan-50/95 backdrop-blur-sm rounded-2xl p-8 border border-cyan-200/30">
          <div className="flex items-center gap-4 mb-4">
            <div className="p-3 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl text-white">
              <TrendingUp className="w-8 h-8" />
            </div>
            <div>
              <h1 className="text-4xl font-bold bg-gradient-to-r from-blue-600 via-cyan-600 to-indigo-600 bg-clip-text text-transparent">
                Work Experience Dashboard
              </h1>
              <p className="text-slate-600 text-lg mt-2">
                Interactive overview of professional journey and achievements
              </p>
            </div>
          </div>
        </div>

        {/* Stats Overview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const IconComponent = stat.icon;
            return (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl  p-6 border border-slate-200/50 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center justify-between mb-4">
                  <div className={`p-3 rounded-xl bg-gradient-to-r ${stat.color} text-white`}>
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-slate-800">{stat.value}</div>
                    <div className="text-slate-600 text-sm">{stat.label}</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Skills Chart */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <Award className="w-5 h-5 text-blue-500" />
              Core Skills Experience
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <BarChart data={skillsData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="name" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} 
                />
                <Bar dataKey="years" fill="#3b82f6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>

          {/* Career Progression */}
          <div className="bg-white/80 backdrop-blur-sm rounded-xl p-6 border border-slate-200/50">
            <h3 className="text-xl font-semibold text-slate-800 mb-4 flex items-center gap-2">
              <TrendingUp className="w-5 h-5 text-green-500" />
              Career Progression
            </h3>
            <ResponsiveContainer width="100%" height={250}>
              <LineChart data={careerData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e2e8f0" />
                <XAxis dataKey="year" stroke="#64748b" />
                <YAxis stroke="#64748b" />
                <Tooltip 
                  contentStyle={{ 
                    background: 'rgba(255, 255, 255, 0.95)', 
                    border: '1px solid #e2e8f0',
                    borderRadius: '8px',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }}
                  formatter={(value, name, props) => [props.payload.role, 'Role']}
                />
                <Line type="monotone" dataKey="level" stroke="#10b981" strokeWidth={3} dot={{ fill: '#10b981', strokeWidth: 2, r: 6 }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Experience Cards */}
        <div className="space-y-6">
          <h2 className="text-2xl font-bold text-slate-800 flex items-center gap-2">
            <Briefcase className="w-6 h-6 text-blue-500" />
            Professional Experience
          </h2>
          
          <div className="grid gap-6">
            {workExperience.map((exp) => (
              <div 
                key={exp.id}
                className={`bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-slate-200/50 hover:shadow-xl transition-all duration-300 cursor-pointer ${
                  selectedExperience?.id === exp.id ? 'ring-2 ring-blue-500 shadow-blue-100' : ''
                }`}
                onClick={() => setSelectedExperience(selectedExperience?.id === exp.id ? null : exp)}
              >
                <div className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-slate-800">{exp.role}</h3>
                      <p className="text-lg text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="text-right text-sm text-slate-600">
                      <div className="flex items-center gap-1 mb-1">
                        <Calendar className="w-4 h-4" />
                        {exp.duration}
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-4 h-4" />
                        {exp.location}
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-600 mb-4">{exp.description}</p>

                  <div className="flex flex-wrap gap-2 mb-4">
                    {exp.skills.map((skill, index) => (
                      <span key={index} className="px-3 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-medium">
                        {skill}
                      </span>
                    ))}
                  </div>

                  {selectedExperience?.id === exp.id && (
                    <div className="mt-6 pt-6 border-t border-slate-200">
                      <h4 className="font-semibold text-slate-800 mb-3">Key Achievements:</h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, index) => (
                          <li key={index} className="flex items-center gap-2 text-slate-600">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

// export default MainContent;

const WSidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);

  const workExperienceItems = [
    { 
      icon: SiTestinglibrary, 
      text: 'QA Analyst', 
      color: 'text-amber-600', 
      bgGradient: 'bg-gradient-to-r from-amber-50 to-yellow-100',
      component: <AIWorkExperience />
    },
  ];

  useEffect(() => {
    setMounted(true);
    const savedItem = localStorage.getItem('selectedWorkExperience');
    if (savedItem) {
      try {
        const parsedItem = JSON.parse(savedItem);
        const foundItem = workExperienceItems.find(item => item.text === parsedItem.text);
        if (foundItem) {
          setSelectedItem(foundItem);
        }
      } catch (e) {
        console.error('Failed to parse saved item', e);
      }
    }
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
    localStorage.setItem('selectedWorkExperience', JSON.stringify({ text: item.text }));
  };

  const handleHeaderClick = () => {
    setSelectedItem(null);
    localStorage.removeItem('selectedWorkExperience');
  };

  if (!mounted) return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
  );

  return (
    <div className="flex mt-14 bg-gradient-to-br from-cyan-50 via-white to-indigo-50 min-h-[calc(100vh-56px)] select-none">
      {/* Sidebar */}
      <div className='sticky top-14 self-start z-10'>
        <div
          className={`flex flex-col bg-gradient-to-b from-white/95 via-cyan-50/90 to-indigo-50/95 border-r border-cyan-200/50 shadow-lg transition-all duration-300 ${
            isOpen ? 'w-80' : 'w-20'
          } h-[calc(100vh-56px)]`}
        >
          {/* Header */}
          <div className="p-4 border-b border-cyan-200/50">
            <div className="flex items-center justify-between">
              {isOpen && (
                <div className="space-y-1 cursor-pointer" onClick={handleHeaderClick}>
                  <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent hover:opacity-80 transition-opacity">
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

          {/* Work Experience Items */}
          <div className="flex-1 py-4 overflow-y-auto">
            <nav className="space-y-2 px-3">
              {workExperienceItems.map((item) => {
                const Icon = item.icon;
                const isSelected = selectedItem && selectedItem.text === item.text;
                return (
                  <div
                    key={item.text}
                    className={`rounded-lg cursor-pointer group transition-colors duration-200 ${isSelected ? 'bg-cyan-100/70 border border-cyan-300' : 'hover:bg-white/50'}`}
                    onClick={() => handleItemClick(item)}
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
        {selectedItem ? (
          <div className="animate-fadeIn">
            {selectedItem.component}
          </div>
        ) : (
          <MainContent />
        )}
      </div>
    </div>
  );
};

export default WSidebar;