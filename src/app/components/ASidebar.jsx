import React, { useState, useEffect } from 'react';
import {
  Menu,
  X,
  Code,
  Bug,
  Plus,
  User,
  Github
} from 'lucide-react';
import About from '../modules/about/about';
import Git from '../modules/about/git'



const ASidebar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSkill, setSelectedSkill] = useState(null);

  const skillItems = [
    { 
      icon: User, 
      text: 'Web Developer', 
      id: 'web-dev',
      color: 'text-blue-600', 
      bgGradient: 'bg-gradient-to-r from-blue-50 to-sky-100', 
      component: <About /> 
    },
    { 
      icon: Github, 
      text: 'QA Engineer', 
      id: 'qa-engineer',
      color: 'text-emerald-600', 
      bgGradient: 'bg-gradient-to-r from-emerald-50 to-green-100', 
      component: <Git /> 
    },
  ];

  const cardItems = [
    { 
      title: "Web Development", 
      desc: "Frontend, Backend & Fullstack", 
      gradient: "from-blue-100 to-sky-100", 
      border: "border-blue-200", 
      icon: Code, 
      component: <About />, 
      text: "Web Developer",
      id: 'web-dev'
    },
    { 
      title: "Quality Assurance", 
      desc: "Manual & Automated Testing", 
      gradient: "from-emerald-100 to-green-100", 
      border: "border-emerald-200", 
      icon: Bug, 
      component: <Git />, 
      text: "QA Engineer",
      id: 'qa-engineer'
    },
  ];

  // Initialize with first skill selected by default
  useEffect(() => {
    if (skillItems.length > 0 && !selectedSkill) {
      setSelectedSkill(skillItems[0]);
    }
  }, []);

  const handleSkillClick = (skill) => {
    setSelectedSkill(skill);
  };

  const isSkillActive = (skill) => {
    return selectedSkill?.id === skill.id || 
           selectedSkill?.text === skill.text || 
           selectedSkill?.title === skill.title;
  };

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
                <h2 className="text-xl font-semibold bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Tech Roles & Skills
                </h2>
              )}
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="ml-1 mt-1 p-2 rounded-lg bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white hover:shadow-lg transition-all duration-200 hover:scale-105"
              >
                {isOpen ? <X size={16} /> : <Menu size={16} />}
              </button>
            </div>
          </div>

          {/* Sidebar Items */}
          <div className="flex-1 py-4 overflow-y-auto">
            <nav className="space-y-2 px-3">
              {skillItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = isSkillActive(item);
                return (
                  <div
                    key={item.id}
                    onClick={() => handleSkillClick(item)}
                    className={`rounded-lg cursor-pointer group transition-all duration-200 ${
                      isActive 
                        ? 'bg-white shadow-md border border-cyan-300/70 transform scale-[1.02]' 
                        : 'hover:bg-white/50 hover:scale-[1.01]'
                    }`}
                  >
                    <div className="flex items-center p-3 space-x-3">
                      <div className={`${isActive ? 'text-cyan-600 scale-110' : item.color} group-hover:scale-105 transition-transform duration-200`}>
                        <Icon size={20} />
                      </div>
                      {isOpen && (
                        <span className={`font-medium text-sm transition-colors duration-200 ${
                          isActive 
                            ? 'text-cyan-700 font-semibold' 
                            : 'text-slate-700 group-hover:text-cyan-700'
                        }`}>
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
                  <Plus size={20} strokeWidth={1.5} />
                </div>
                {isOpen && (
                  <span className="text-slate-600 font-medium text-sm group-hover:text-cyan-700 transition-colors duration-200">
                    Add New Skill
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
          <div className="animate-fadeIn">
            {selectedSkill.component}
          </div>
        ) : (
          <div className="max-w-4xl mx-auto p-4">
            <div className="bg-gradient-to-br from-white/90 via-cyan-50/80 to-indigo-50/90 rounded-xl shadow-lg p-8 border border-cyan-200/30">
              <h1 className="text-3xl font-bold mb-4 bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 bg-clip-text text-transparent">
                Technical Skills Explorer
              </h1>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                Explore various technical roles and their required skill sets. Click on any role to discover learning paths,
                recommended resources, and career opportunities in each specialization.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {cardItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = isSkillActive(item);
                  return (
                    <div
                      key={item.id}
                      onClick={() => handleSkillClick(item)}
                      className={`bg-gradient-to-br ${item.gradient} p-6 rounded-lg border ${
                        isActive 
                          ? 'border-cyan-400 shadow-lg ring-2 ring-cyan-200 transform scale-105' 
                          : `${item.border} hover:shadow-md hover:scale-[1.02]`
                      } transition-all duration-200 cursor-pointer group`}
                    >
                      <div className="flex items-center mb-3">
                        <Icon className={`${
                          isActive 
                            ? 'text-cyan-600 scale-110' 
                            : 'text-cyan-600'
                        } mr-3 group-hover:scale-105 transition-transform duration-200`} size={24} />
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

      <style jsx>{`
        .animate-fadeIn {
          animation: fadeIn 0.3s ease-in-out;
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </div>
  );
};

export default ASidebar;