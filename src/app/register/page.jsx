'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Lock, 
  Eye, 
  EyeOff, 
  User, 
  Phone, 
  Shield, 
  Stars, 
  Waves, 
  Sparkles,
  Zap,
  Crown,
  Rocket,
  Globe,
  Heart,
  Coffee,
  Camera,
  Music,
  Palette,
  Code,
  Gamepad2,
  Briefcase
} from 'lucide-react'

export default function RegisterPage() {
  const [showPassword, setShowPassword] = useState(false)
  const [showConfirmPassword, setShowConfirmPassword] = useState(false)
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: ''
  })

  const handleInputChange = (field, value) => {
    setFormData(prev => ({
      ...prev,
      [field]: value
    }))
  }

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



  const iconColors = [
    'text-green-400/40',
    'text-blue-400/40',
    'text-purple-400/40',
    'text-sky-400/40',
    'text-pink-400/40',
    'text-yellow-400/40',
    'text-indigo-400/40',
    'text-red-400/40'
  ]

  const communityIcons = [
    { Icon: User, color: 'from-green-400 to-blue-500' },
    { Icon: Camera, color: 'from-purple-400 to-pink-500' },
    { Icon: Music, color: 'from-blue-400 to-indigo-500' },
    { Icon: Palette, color: 'from-pink-400 to-red-500' },
    { Icon: Code, color: 'from-green-400 to-teal-500' },
    { Icon: Gamepad2, color: 'from-purple-400 to-blue-500' },
    { Icon: Briefcase, color: 'from-orange-400 to-red-500' },
    { Icon: Coffee, color: 'from-yellow-400 to-orange-500' }
  ]

  const backgroundIcons = [
    { Icon: Shield, size: 16, delay: 0 },
    { Icon: Stars, size: 14, delay: 1 },
    { Icon: Waves, size: 18, delay: 2 },
    { Icon: Sparkles, size: 12, delay: 1.5 },
    { Icon: Zap, size: 15, delay: 0.5 },
    { Icon: Crown, size: 13, delay: 2.5 },
    { Icon: Rocket, size: 17, delay: 1 },
    { Icon: Globe, size: 16, delay: 1.8 },
    { Icon: Heart, size: 14, delay: 0.3 },
    { Icon: Music, size: 15, delay: 2.2 }
  ]

  return (
    <div className="w-full h-[100vh] mt-8 overflow-hidden bg-gradient-to-br from-green-50 via-blue-50 to-sky-50 relative">
      
      {/* Decorative Icon Backgrounds */}
      <div className="absolute inset-0 overflow-hidden opacity-10">
        {/* Left side large icons */}
        <div className="absolute left-0 top-0 w-1/3 h-full flex flex-col justify-center items-center space-y-16">
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5 }}
          >
            <Shield className="w-24 h-24 text-green-500" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: 180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.5 }}
          >
            <Rocket className="w-28 h-28 text-blue-500" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: -90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1 }}
          >
            <Crown className="w-26 h-26 text-purple-500" />
          </motion.div>
        </div>
        
        {/* Right side large icons */}
        <div className="absolute right-0 top-0 w-1/3 h-full flex flex-col justify-center items-center space-y-16">
          <motion.div
            initial={{ scale: 0, rotate: 90 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.3 }}
          >
            <Globe className="w-24 h-24 text-sky-500" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: -45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 0.8 }}
          >
            <Stars className="w-28 h-28 text-purple-500" />
          </motion.div>
          <motion.div
            initial={{ scale: 0, rotate: 45 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ duration: 1.5, delay: 1.3 }}
          >
            <Zap className="w-26 h-26 text-yellow-500" />
          </motion.div>
        </div>
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
            d="M0,300 Q300,200 600,300 T1200,300 V800 H0 Z"
            fill="url(#organicGradient1)"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 3, ease: "easeInOut" }}
          />
          
          {/* Curved lines */}
          <motion.path
            d="M0,150 Q400,100 800,150 T1200,150"
            stroke="url(#lineGradient1)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 4, delay: 1 }}
          />
          
          <motion.path
            d="M0,650 Q300,600 600,650 T1200,650"
            stroke="url(#lineGradient2)"
            strokeWidth="4"
            fill="none"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{ duration: 5, delay: 1.5 }}
          />
          
          {/* Geometric patterns */}
          <motion.circle
            cx="150"
            cy="150"
            r="80"
            stroke="url(#circleGradient1)"
            strokeWidth="2"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: 360 }}
            transition={{ 
              pathLength: { duration: 2, delay: 2 },
              rotate: { duration: 25, repeat: Infinity, ease: "linear" }
            }}
          />
          
          <motion.circle
            cx="1050"
            cy="650"
            r="120"
            stroke="url(#circleGradient2)"
            strokeWidth="3"
            fill="none"
            initial={{ pathLength: 0, rotate: 0 }}
            animate={{ pathLength: 1, rotate: -360 }}
            transition={{ 
              pathLength: { duration: 3, delay: 2.5 },
              rotate: { duration: 20, repeat: Infinity, ease: "linear" }
            }}
          />
          
          {/* Floating dots pattern */}
          {[...Array(40)].map((_, i) => (
            <motion.circle
              key={i}
              cx={80 + (i * 28)}
              cy={80 + Math.sin(i * 0.3) * 40}
              r="2"
              fill="url(#dotGradient)"
              initial={{ scale: 0 }}
              animate={{ scale: [0, 1.5, 1] }}
              transition={{
                delay: i * 0.03,
                duration: 1,
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: 3
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

      {/* Floating small icons */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {backgroundIcons.map(({ Icon, size, delay }, index) => (
          <motion.div
            key={index}
            className={`absolute ${iconColors[index % iconColors.length]}`}
            style={{
              top: `${10 + (index * 8)}%`,
              left: `${5 + (index * 11)}%`,
            }}

            animate="animate"
            transition={{ delay }}
          >
            <Icon size={size * 4} />
          </motion.div>
        ))}
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
              
              
              <h1 className="text-6xl lg:text-7xl font-bold bg-gradient-to-r from-green-600 via-blue-600 to-purple-600 bg-clip-text text-transparent mb-6">
                Join the
              </h1>
              <h2 className="text-7xl lg:text-8xl font-bold bg-gradient-to-r from-purple-600 via-blue-600 to-green-600 bg-clip-text text-transparent mb-6">
                Future
              </h2>
              <p className="text-xl text-gray-600 mb-8 max-w-md">
                Create your account and become part of our innovative community. Start your journey today.
              </p>
              
              <div className="flex items-center space-x-4 mb-6">
                {communityIcons.map(({ Icon, color }, index) => (
                  <motion.div
                    key={index}
                    className={`w-12 h-12 rounded-full bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    animate={{ 
                      y: [0, -5, 0],
                      rotate: [0, 5, -5, 0]
                    }}
                    transition={{ 
                      duration: 3 + index * 0.5,
                      repeat: Infinity,
                      delay: index * 0.2
                    }}
                  >
                    <Icon className="w-6 h-6 text-white" />
                  </motion.div>
                ))}
              </div>
              <p className="text-gray-600">Join 25,000+ creators, developers, and innovators</p>
            </motion.div>
          </div>

          {/* Right Section - Register Form */}
          <div className="flex-1 flex justify-center items-center px-8">
            <motion.div
              className="w-full max-w-md bg-white/15 backdrop-blur-2xl rounded-3xl p-8 border border-white/30 shadow-2xl"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
            >
              {/* Form Header */}
              <motion.div className="text-center mb-8" variants={itemVariants}>
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <User className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-2">Create Account</h3>
                <p className="text-gray-600">Start your journey with us</p>
              </motion.div>

              {/* Register Form */}
              <motion.form className="space-y-4" variants={itemVariants}>
                {/* Name Fields */}
                <div className="grid grid-cols-2 gap-4">
                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      value={formData.firstName}
                      onChange={(e) => handleInputChange('firstName', e.target.value)}
                      className="w-full pl-10 pr-3 py-3 bg-white/25 border border-white/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 placeholder-gray-500 text-gray-800 text-sm"
                      placeholder="First Name"
                    />
                  </motion.div>

                  <motion.div
                    className="relative"
                    whileHover={{ scale: 1.02 }}
                    transition={{ type: "spring", stiffness: 300 }}
                  >
                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                    <input
                      type="text"
                      value={formData.lastName}
                      onChange={(e) => handleInputChange('lastName', e.target.value)}
                      className="w-full pl-10 pr-3 py-3 bg-white/25 border border-white/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 placeholder-gray-500 text-gray-800 text-sm"
                      placeholder="Last Name"
                    />
                  </motion.div>
                </div>

                {/* Email Input */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => handleInputChange('email', e.target.value)}
                    className="w-full pl-10 pr-3 py-3 bg-white/25 border border-white/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 placeholder-gray-500 text-gray-800 text-sm"
                    placeholder="Email address"
                  />
                </motion.div>

                {/* Password Input */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showPassword ? "text" : "password"}
                    value={formData.password}
                    onChange={(e) => handleInputChange('password', e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-white/25 border border-white/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 placeholder-gray-500 text-gray-800 text-sm"
                    placeholder="Create password"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </motion.button>
                </motion.div>

                {/* Confirm Password Input */}
                <motion.div
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Lock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type={showConfirmPassword ? "text" : "password"}
                    value={formData.confirmPassword}
                    onChange={(e) => handleInputChange('confirmPassword', e.target.value)}
                    className="w-full pl-10 pr-10 py-3 bg-white/25 border border-white/40 rounded-xl focus:ring-2 focus:ring-green-500 focus:border-transparent backdrop-blur-sm transition-all duration-300 placeholder-gray-500 text-gray-800 text-sm"
                    placeholder="Confirm password"
                  />
                  <motion.button
                    type="button"
                    onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {showConfirmPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </motion.button>
                </motion.div>

                {/* Terms & Conditions */}
                <motion.div className="flex items-start space-x-2" variants={itemVariants}>
                  <input
                    type="checkbox"
                    id="terms"
                    className="mt-1 rounded border-gray-300 text-green-600 focus:ring-green-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-600">
                    I agree to the{' '}
                    <motion.a
                      href="#"
                      className="text-green-600 hover:text-green-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      Terms of Service
                    </motion.a>
                    {' '}and{' '}
                    <motion.a
                      href="#"
                      className="text-green-600 hover:text-green-500"
                      whileHover={{ scale: 1.05 }}
                    >
                      Privacy Policy
                    </motion.a>
                  </label>
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
                  <span className="relative z-10 flex items-center justify-center">
                    Create Account
                  </span>
                </motion.button>
              </motion.form>

              {/* Login Link */}
              <motion.div className="mt-6 text-center" variants={itemVariants}>
                <p className="text-gray-600">
                  Already have an account?{' '}
                  <motion.a
                    href="#"
                    className="text-green-600 hover:text-green-500 font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    Sign in
                  </motion.a>
                </p>
              </motion.div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  )
}