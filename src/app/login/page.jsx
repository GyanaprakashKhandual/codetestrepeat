'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Lock, Eye, EyeOff, Shield, Stars, Waves, Sparkles } from 'lucide-react'

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        staggerChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: "easeOut" }
    }
  }

  const floatingVariants = {
    animate: {
      y: [0, -20, 0],
      rotate: [0, 5, -5, 0],
      scale: [1, 1.05, 1],
      transition: {
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  }

  return (
    <div className="w-full h-[100vh] mt-8 overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-sky-50 relative">
      
      {/* Background Images */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Left decorative image */}
        <motion.div
          className="absolute left-0 top-0 w-1/3 h-full opacity-20"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.2 }}
          transition={{ duration: 1.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1557683316-973673baf926?w=600&h=800&fit=crop&crop=left"
            alt="Abstract gradient background"
            className="w-full h-full object-cover"
          />
        </motion.div>
        
        {/* Right decorative image */}
        <motion.div
          className="absolute right-0 top-0 w-1/3 h-full opacity-15"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 0.15 }}
          transition={{ duration: 1.5, delay: 0.5 }}
        >
          <img
            src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=600&h=800&fit=crop&crop=right"
            alt="Abstract tech background"
            className="w-full h-full object-cover"
          />
        </motion.div>
      </div>

      {/* Animated SVG Background */}
      <div className="absolute inset-0 overflow-hidden">
        <svg
          className="absolute inset-0 w-full h-full"
          viewBox="0 0 1200 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flowing organic shapes */}
          <motion.path
            d="M0,400 Q200,200 400,400 T800,400 T1200,400 V800 H0 Z"
            fill="url(#organicGradient1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          {/* Curved lines */}
          <motion.path
            d="M0,200 Q300,100 600,200 T1200,200"
            stroke="url(#lineGradient1)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 1 }}
          />
          
          <motion.path
            d="M0,600 Q400,500 800,600 T1200,600"
            stroke="url(#lineGradient2)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, delay: 1.5 }}
          />
          
          {/* Geometric patterns */}
          <motion.circle
            cx="200"
            cy="200"
            r="100"
            stroke="url(#circleGradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: 360 }}
            transition={{ 
              pathLength: { duration: 2, delay: 2 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          />
          
          <motion.circle
            cx="1000"
            cy="600"
            r="150"
            stroke="url(#circleGradient2)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: -360 }}
            transition={{ 
              pathLength: { duration: 3, delay: 2.5 },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* Dotted constellation */}
          {[...Array(30)].map((_, i) => (
            <motion.circle
              key={i}
              cx={100 + (i * 35)}
              cy={100 + Math.sin(i * 0.5) * 50}
              r="2"
              fill="url(#dotGradient)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{
                delay: i * 0.05,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 2
              }}
            />
          ))}
          
          {/* Gradient definitions */}
          <defs>
            <linearGradient id="organicGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity="0.1" />
              <stop offset="50%" stopColor="rgb(59, 130, 246)" stopOpacity="0.05" />
              <stop offset="100%" stopColor="rgb(14, 165, 233)" stopOpacity="0.1" />
            </linearGradient>
            <linearGradient id="lineGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" />
              <stop offset="50%" stopColor="rgb(59, 130, 246)" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" />
            </linearGradient>
            <linearGradient id="lineGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="rgb(168, 85, 247)" />
              <stop offset="50%" stopColor="rgb(14, 165, 233)" />
              <stop offset="100%" stopColor="rgb(34, 197, 94)" />
            </linearGradient>
            <linearGradient id="circleGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" />
              <stop offset="100%" stopColor="rgb(59, 130, 246)" />
            </linearGradient>
            <linearGradient id="circleGradient2" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="rgb(14, 165, 233)" />
              <stop offset="100%" stopColor="rgb(168, 85, 247)" />
            </linearGradient>
            <radialGradient id="dotGradient">
              <stop offset="0%" stopColor="rgb(59, 130, 246)" />
              <stop offset="100%" stopColor="rgb(34, 197, 94)" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      {/* Floating geometric elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-20 left-20"
          variants={floatingVariants}
          animate="animate"
        >
          <Shield className="w-12 h-12 text-green-400/30" />
        </motion.div>
        <motion.div
          className="absolute top-32 right-32"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1 }}
        >
          <Stars className="w-10 h-10 text-blue-400/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-32 left-32"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 2 }}
        >
          <Waves className="w-14 h-14 text-sky-400/30" />
        </motion.div>
        <motion.div
          className="absolute bottom-20 right-20"
          variants={floatingVariants}
          animate="animate"
          transition={{ delay: 1.5 }}
        >
          <Sparkles className="w-8 h-8 text-purple-400/30" />
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 w-full h-full flex items-center justify-center px-4">
        <motion.div
          className="w-full max-w-6xl h-full flex items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Left Section - Hero Content */}
          <div className="flex-1 flex flex-col justify-center items-start px-8 lg:px-16">
            <motion.div variants={itemVariants}>
              <motion.div
                className="w-20 h-20 bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 rounded-2xl flex items-center justify-center mb-8 shadow-2xl"
                whileHover={{ scale: 1.1, rotate: 10 }}
                animate={{ 
                  boxShadow: [
                    "0 0 20px rgba(34, 197, 94, 0.3)",
                    "0 0 30px rgba(59, 130, 246, 0.3)",
                    "0 0 20px rgba(168, 85, 247, 0.3)",
                    "0 0 30px rgba(34, 197, 94, 0.3)"
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <Sparkles className="w-10 h-10 text-white" />
              </motion.div>
              
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Welcome to
              </h1>
              <h2 className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
                Nexus
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-md">
                Step into the future of digital experiences. Where innovation meets elegance.
              </p>
              
              <div className="flex items-center space-x-4">
                <motion.div
                  className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100&h=100&fit=crop&crop=face"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1494790108755-2616b612b5bc?w=100&h=100&fit=crop&crop=face"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <motion.div
                  className="w-12 h-12 rounded-full overflow-hidden shadow-lg"
                  whileHover={{ scale: 1.1 }}
                >
                  <img
                    src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
                    alt="User avatar"
                    className="w-full h-full object-cover"
                  />
                </motion.div>
                <p className="text-gray-600 ml-4">Join 10,000+ creators</p>
              </div>
            </motion.div>
          </div>

          {/* Right Section - Login Form */}
          <div className="flex-1 flex justify-center items-center px-8">
            <motion.div
              className="w-full max-w-md bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Form Header */}
              <motion.div className="text-center mb-8" variants={itemVariants}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Lock className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Sign In</h3>
                <p className="text-gray-600">Welcome back to your account</p>
              </motion.div>

              {/* Login Form */}
              <motion.form className="space-y-6" variants={itemVariants}>
                {/* Email Input */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full pl-12 pr-4 py-4 bg-white/25 border border-white/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 placeholder-gray-500 text-gray-800"
                    placeholder="Enter your email"
                  />
                </motion.div>

                {/* Password Input */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Lock className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-12 pr-12 py-4 bg-white/25 border border-white/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 placeholder-gray-500 text-gray-800"
                    placeholder="Enter your password"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </motion.button>
                </motion.div>

                {/* Remember Me */}
                <motion.div className="flex items-center justify-between" variants={itemVariants}>
                  <label className="flex items-center text-gray-600">
                    <input type="checkbox" className="mr-2 rounded" />
                    Remember me
                  </label>
                  <motion.a
                    href="#"
                    className="text-green-600 hover:text-green-500 transition-colors"
                    whileHover={{ scale: 1.05 }}
                  >
                    Forgot password?
                  </motion.a>
                </motion.div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  className="w-full bg-gradient-to-r from-green-500 via-blue-500 to-purple-600 text-white py-4 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 relative overflow-hidden"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                    animate={{ x: ['-100%', '100%'] }}
                    transition={{ duration: 2, repeat: Infinity }}
                  />
                  <span className="relative z-10">Sign In to Nexus</span>
                </motion.button>
              </motion.form>

              {/* Social Login */}
              <motion.div className="mt-8 text-center" variants={itemVariants}>
                <p className="text-gray-600 mb-4">Or continue with</p>
                <div className="flex justify-center space-x-4">
                  <motion.button
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src="https://cdn.cdnlogo.com/logos/g/35/google-icon.svg"
                      alt="Google"
                      className="w-5 h-5"
                    />
                  </motion.button>
                  <motion.button
                    className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center border border-white/30"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <img
                      src="https://cdn.cdnlogo.com/logos/a/20/apple.svg"
                      alt="Apple"
                      className="w-5 h-5"
                    />
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}