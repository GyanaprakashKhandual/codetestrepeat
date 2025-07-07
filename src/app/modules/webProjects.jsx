'use client'

import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Bug, 
  Code2, 
  Github, 
  Globe, 
  Lightbulb, 
  ListChecks, 
  Rocket, 
  ShieldCheck,
  Smartphone,
  Users
} from 'lucide-react'

const WebProjects = () => {
  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('https://port-backend-lh99.onrender.com/api/web-projects')
        if (!response.ok) {
          throw new Error('Failed to fetch projects')
        }
        const data = await response.json()
        setProjects(data)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    fetchProjects()
  }, [])

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-white to-purple-50">
        <motion.div
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1]
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="w-16 h-16 rounded-full bg-gradient-to-r from-green-400 to-purple-500 p-1"
        >
          <div className="w-full h-full bg-white rounded-full"></div>
        </motion.div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-white to-purple-50">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg shadow-lg"
        >
          {error}
        </motion.div>
      </div>
    )
  }

  if (projects.length === 0) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-white to-purple-50">
        <motion.p 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-gray-600 text-lg"
        >
          No projects found
        </motion.p>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-purple-50 py-4 px-4 ">
      <div className="max-w-full mx-auto">

        <div className="grid gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.15,
                type: "spring",
                stiffness: 100
              }}
              className="bg-white shadow-xl overflow-hidden border border-gray-100"
            >
              {/* Project Image at the top */}
              <motion.div 
  className="w-full bg-gray-100 overflow-hidden"
  whileHover={{ scale: 1.01 }}
>
  <img 
    src={project.imageURL} 
    alt={project.name} 
    className="w-full object-contain max-h-[500px] mx-auto"
  />
</motion.div>


              {/* Project Content below image */}
              <div className="p-8">
                {/* Header with title */}
                <div className="mb-6">
                  <motion.h2 
                    whileHover={{ x: 5 }}
                    className="text-3xl font-bold text-gray-800 mb-2"
                  >
                    {project.name}
                  </motion.h2>
                  <p className="text-gray-600 mb-6">{project.description}</p>
                
                  {/* Three buttons in a row */}
                  <div className="flex flex-wrap gap-3 mb-8">
                    {project.githubFrontend && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubFrontend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-800 text-white rounded-lg shadow-md hover:bg-gray-900 transition-colors flex-1 min-w-[200px] justify-center"
                      >
                        <Github className="w-5 h-5" />
                        Frontend Code
                      </motion.a>
                    )}

                    {project.githubBackend && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.githubBackend}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-gray-700 text-white rounded-lg shadow-md hover:bg-gray-800 transition-colors flex-1 min-w-[200px] justify-center"
                      >
                        <Github className="w-5 h-5" />
                        Backend Code
                      </motion.a>
                    )}

                    {project.link && (
                      <motion.a
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 px-4 py-2 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition-colors flex-1 min-w-[200px] justify-center"
                      >
                        <Globe className="w-5 h-5" />
                        View Project
                      </motion.a>
                    )}
                  </div>

                  {/* Tech Stack */}
                  <div className="mb-8">
                    <h3 className="text-xl font-semibold text-gray-800 mb-3">Tech Stack</h3>
                    <div className="flex flex-wrap gap-3">
                      {project.techStack.map((tech, i) => (
                        <motion.span
                          key={i}
                          whileHover={{ 
                            scale: 1.1,
                            backgroundColor: "#8B5CF6",
                            color: "white"
                          }}
                          className="px-4 py-2 bg-purple-50 text-purple-700 text-sm font-medium rounded-full shadow-sm"
                        >
                          {tech}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Features Sections */}
                <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                  <FeatureSection 
                    icon={<Bug className="w-6 h-6 text-green-600" />}
                    title="Features"
                    items={project.features}
                    color="green"
                  />
                  
                  <FeatureSection 
                    icon={<Users className="w-6 h-6 text-purple-600" />}
                    title="Use Cases"
                    items={project.useCases}
                    color="purple"
                  />
                  
                  <FeatureSection 
                    icon={<Rocket className="w-6 h-6 text-indigo-600" />}
                    title="Future Plans"
                    items={project.futurePlans}
                    color="indigo"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}

const FeatureSection = ({ icon, title, items, color }) => {
  const colorClasses = {
    green: 'from-green-50 to-green-100 border-green-200',
    purple: 'from-purple-50 to-purple-100 border-purple-200',
    indigo: 'from-indigo-50 to-indigo-100 border-indigo-200'
  }

  return (
    <motion.div 
      whileHover={{ 
        y: -5,
        boxShadow: "0 10px 15px -3px rgba(0, 0, 0, 0.1)"
      }}
      className={`bg-gradient-to-br ${colorClasses[color]} p-5 rounded-xl border`}
    >
      <div className="flex items-center gap-3 mb-4">
        <div className={`p-2 bg-white rounded-full shadow-sm border border-${color}-200`}>
          {icon}
        </div>
        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
      </div>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <motion.li 
            key={index}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              duration: 0.3, 
              delay: index * 0.05,
              type: "spring",
              stiffness: 200
            }}
            className="flex items-start gap-2"
          >
            <span className={`text-${color}-500 mt-1`}>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
              </svg>
            </span>
            <span className="text-gray-700 text-sm">{item}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  )
}

export default WebProjects