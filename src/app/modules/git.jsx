'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Star, 
  Code, 
  ExternalLink, 
  Eye,
  BarChart3,
  Flame,
  GitBranch,
  Calendar,
  Users
} from 'lucide-react';

const GitHubPortfolio = () => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchGitHubData();
  }, []);

  const fetchGitHubData = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/git-hub');
      if (!response.ok) {
        throw new Error('Failed to fetch data');
      }
      const data = await response.json();
      setRepos(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const cardVariants = {
    hidden: { scale: 0.9, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.3
      }
    },
    hover: {
      scale: 1.02,
      transition: {
        duration: 0.2
      }
    }
  };

if (loading) {
    return (
      <div className="flex justify-center items-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-purple-500"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative" role="alert">
        <strong className="font-bold">Error: </strong>
        <span className="block sm:inline">{error}</span>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-100 via-pink-50 via-sky-100 via-white to-blue-50">
      <div className="container mx-auto px-4">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={containerVariants}
          className="space-y-8"
        >

          {/* GitHub Stats Section */}
          <motion.div variants={itemVariants} className="mb-12">
            <div className="bg-white/40 backdrop-blur-sm rounded-3xl p-6  border border-white/20">
              
              {/* Activity Graph */}
              <div className="mb-6">
                <img 
                  src="https://github-readme-activity-graph.vercel.app/graph?username=gyanaprakashkhandual&theme=tokyo-night&hide_border=true&bg_color=0D1117&color=58A6FF&line=58A6FF&point=FF7B72&area=true&area_color=58A6FF" 
                  alt="GitHub Activity Graph"
                  className="w-full rounded-xl"
                />
              </div>

              {/* Stats Row */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
                {/* GitHub Streak */}
                <div className="flex justify-center">
                  <img 
                    src="https://github-readme-streak-stats.herokuapp.com/?user=gyanaprakashkhandual&theme=tokyonight&hide_border=true&background=0D1117&stroke=58A6FF&ring=58A6FF&fire=FF7B72&currStreakLabel=C9D1D9"
                    alt="GitHub Streak"
                    className="rounded-xl"
                  />
                </div>

                {/* GitHub Stats */}
                <div className="flex justify-center">
                  <img 
                    src="https://github-readme-stats.vercel.app/api?username=gyanaprakashkhandual&show_icons=true&theme=tokyonight&include_all_commits=true&count_private=true&hide_border=true&bg_color=0D1117&title_color=58A6FF&text_color=C9D1D9&icon_color=79C0FF"
                    alt="GitHub Stats"
                    className="rounded-xl "
                  />
                </div>

                {/* Top Languages */}
                <div className="flex justify-center">
                  <img 
                    src="https://github-readme-stats.vercel.app/api/top-langs/?username=gyanaprakashkhandual&layout=compact&langs_count=8&theme=tokyonight&hide_border=true&bg_color=0D1117&title_color=58A6FF&text_color=C9D1D9"
                    alt="Top Languages"
                    className="rounded-xl "
                  />
                </div>
              </div>
            </div>
          </motion.div>

          {/* Repositories Section */}
          <motion.div variants={itemVariants}>
            <h2 className="text-3xl font-bold text-center mb-8 text-gray-800">
              Featured Repositories
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {repos.map((repo, index) => (
                <motion.div
                  key={index}
                  variants={cardVariants}
                  whileHover="hover"
                  className="relative group overflow-hidden rounded-2xl bg-gradient-to-br from-white/80 via-white/60 to-white/40 backdrop-blur-lg shadow-xl hover:shadow-2xl transition-all duration-500 border border-white/40"
                >
                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  
                  <div className="relative p-6">
                    {/* Repository Header */}
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div className="p-2 rounded-lg bg-gradient-to-r from-blue-500 to-purple-500 text-white">
                          <GitBranch className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-xl font-bold text-gray-800 group-hover:text-gray-900 transition-colors">
                            {repo.repoName}
                          </h3>
                          <div className="flex items-center gap-2 mt-1">
                            <div className="flex items-center gap-1 px-2 py-1 bg-yellow-100 text-yellow-800 rounded-full text-xs font-medium">
                              <Star className="w-3 h-3" />
                              {repo.stars}
                            </div>
                            <div className="flex items-center gap-1 px-2 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                              <BarChart3 className="w-3 h-3" />
                              {repo.lineOfCode} lines
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* About Section */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Eye className="w-4 h-4 text-gray-600" />
                        <h4 className="font-semibold text-gray-800">About</h4>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed bg-gray-50/50 p-3 rounded-lg border border-gray-200/50">
                        {repo.About}
                      </p>
                    </div>

                    {/* Work Description */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Code className="w-4 h-4 text-gray-600" />
                        <h4 className="font-semibold text-gray-800">Work Done</h4>
                      </div>
                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg border border-blue-200/30">
                        <p className="text-gray-700 text-sm leading-relaxed">
                          {repo.work}
                        </p>
                      </div>
                    </div>

                    {/* Tech Stack Preview */}
                    <div className="mb-6">
                      <div className="flex items-center gap-2 mb-3">
                        <Users className="w-4 h-4 text-gray-600" />
                        <h4 className="font-semibold text-gray-800">Tech Stack</h4>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {/* Dynamic tech badges based on work description */}
                        {repo.work.toLowerCase().includes('java') && (
                          <span className="px-3 py-1 bg-red-100 text-red-800 rounded-full text-xs font-medium">
                            Java
                          </span>
                        )}
                        {repo.work.toLowerCase().includes('selenium') && (
                          <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-xs font-medium">
                            Selenium
                          </span>
                        )}
                        {repo.work.toLowerCase().includes('testng') && (
                          <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-xs font-medium">
                            TestNG
                          </span>
                        )}
                        {repo.work.toLowerCase().includes('allure') && (
                          <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-xs font-medium">
                            Allure
                          </span>
                        )}
                        {repo.work.toLowerCase().includes('automation') && (
                          <span className="px-3 py-1 bg-indigo-100 text-indigo-800 rounded-full text-xs font-medium">
                            Automation
                          </span>
                        )}
                        {repo.work.toLowerCase().includes('page object model') && (
                          <span className="px-3 py-1 bg-pink-100 text-pink-800 rounded-full text-xs font-medium">
                            POM
                          </span>
                        )}
                        {repo.work.toLowerCase().includes('jira') && (
                          <span className="px-3 py-1 bg-amber-100 text-amber-800 rounded-full text-xs font-medium">
                            Jira
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="flex items-center justify-between pt-4 border-t border-gray-200/50">
                      <div className="flex items-center gap-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4" />
                          <span>Updated recently</span>
                        </div>
                      </div>
                      
                      <motion.a
                        href={repo.repoLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-lg hover:shadow-xl"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <ExternalLink className="w-4 h-4" />
                        View Repo
                      </motion.a>
                    </div>

                    {/* Decorative elements */}
                    <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-pink-300/20 to-purple-300/20 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                    <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-blue-300/20 to-cyan-300/20 rounded-full blur-xl opacity-50 group-hover:opacity-70 transition-opacity duration-300" />
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default GitHubPortfolio;