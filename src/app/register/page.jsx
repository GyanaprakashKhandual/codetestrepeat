// components/RegisterPage.jsx
"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaUser, FaLock, FaEnvelope, FaCheck, FaSpinner } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RegisterPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
    terms: false
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const validateForm = () => {
    if (formData.password !== formData.confirmPassword) {
      toast.error('Passwords do not match!');
      return false;
    }
    if (!formData.terms) {
      toast.warn('Please accept the terms and conditions');
      return false;
    }
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      toast.success('Registration successful! Welcome!');
      setLoading(false);
      // Reset form
      setFormData({
        name: '',
        email: '',
        password: '',
        confirmPassword: '',
        terms: false
      });
    }, 2000);
  };

  return (
    <div className="min-h-screen max-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-sky-100 via-green-50 to-blue-50 relative overflow-hidden">
      <ToastContainer 
        position="top-center"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card w-full max-w-md bg-white shadow-xl rounded-2xl overflow-hidden z-10"
      >
        <div className="card-body p-8">
          {/* Animated Header */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-2">
              Create Your Account
            </h2>
            <p className="text-gray-600">
              Join our community today
            </p>
          </motion.div>

          {/* Google Register Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-outline w-full mb-6 rounded-full border-gray-300 hover:border-gray-400 flex items-center justify-center gap-2"
          >
            <FaGoogle className="text-blue-500" />
            Sign up with Google
          </motion.button>

          <div className="divider text-gray-400">OR</div>

          {/* Registration Form */}
          <form onSubmit={handleSubmit}>
            {/* Name Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="mb-4"
            >
              <label className="label">
                <span className="label-text text-gray-700">Full Name</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FaUser />
                </span>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </motion.div>

            {/* Email Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="mb-4"
            >
              <label className="label">
                <span className="label-text text-gray-700">Email Address</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FaEnvelope />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </motion.div>

            {/* Password Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="mb-4"
            >
              <label className="label">
                <span className="label-text text-gray-700">Password</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FaLock />
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10"
                  required
                  minLength={8}
                />
              </div>
              <div className="text-xs text-gray-500 mt-1">
                Must be at least 8 characters
              </div>
            </motion.div>

            {/* Confirm Password Field */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="mb-4"
            >
              <label className="label">
                <span className="label-text text-gray-700">Confirm Password</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-gray-400">
                  <FaLock />
                </span>
                <input
                  type="password"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-10"
                  required
                />
              </div>
            </motion.div>

            {/* Terms Checkbox */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mb-6"
            >
              <label className="label cursor-pointer justify-start">
                <input
                  type="checkbox"
                  name="terms"
                  checked={formData.terms}
                  onChange={handleChange}
                  className="checkbox checkbox-primary mr-2"
                  required
                />
                <span className="label-text text-gray-700">
                  I agree to the <a href="#" className="link link-primary">Terms & Conditions</a> and <a href="#" className="link link-primary">Privacy Policy</a>
                </span>
              </label>
            </motion.div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="btn w-full rounded-full bg-gradient-to-r from-blue-500 to-green-500 border-none text-white"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-2"
                  >
                    <FaSpinner />
                  </motion.span>
                  Creating Account...
                </span>
              ) : (
                'Sign Up'
              )}
            </motion.button>
          </form>

          {/* Login Link */}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              Already have an account?
              <a href="/login" className="link link-primary ml-2">
                Sign in
              </a>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Decorative SVG Waves */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden">
        <svg
          className="w-full h-auto"
          viewBox="0 0 1440 320"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path
            fill="rgba(56, 182, 255, 0.2)"
            d="M0,192L48,197.3C96,203,192,213,288,229.3C384,245,480,267,576,250.7C672,235,768,181,864,181.3C960,181,1056,235,1152,234.7C1248,235,1344,181,1392,154.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default RegisterPage;