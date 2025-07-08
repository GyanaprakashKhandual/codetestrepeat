"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaUser, FaLock, FaEnvelope, FaCheck, FaSpinner } from 'react-icons/fa';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LoginPage = () => {
  const [isLogin, setIsLogin] = useState(true);
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

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      toast.success(isLogin ? 'Login successful!' : 'Registration successful!');
    }, 1500);
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
      
      {/* Animated Card */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="card w-full max-w-md bg-white shadow-2xl rounded-3xl overflow-hidden z-10 mx-auto"
      >
        <div className="card-body p-10">
          {/* Animated Header */}
          <motion.div 
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 100 }}
            className="text-center mb-10"
          >
            <h2 className="text-4xl font-extrabold text-gray-900 mb-3">
              {isLogin ? 'Welcome Back' : 'Create Account'}
            </h2>
            <p className="text-gray-600 text-lg">
              {isLogin ? 'Sign in to access your account' : 'Join us today and start your journey'}
            </p>
          </motion.div>

          {/* Google Login Button */}
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="btn btn-outline w-full mb-8 rounded-full border-gray-300 hover:border-gray-400 flex items-center justify-center gap-3 py-4 text-lg"
          >
            <FaGoogle className="text-blue-500 text-xl" />
            {isLogin ? 'Sign in with Google' : 'Sign up with Google'}
          </motion.button>

          <div className="divider text-gray-400 text-lg">OR</div>

          {/* Form */}
          <form onSubmit={handleSubmit}>
            {!isLogin && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: 'auto' }}
                transition={{ duration: 0.3 }}
                className="mb-6"
              >
                <label className="label">
                  <span className="label-text text-gray-700 text-lg font-medium">Full Name</span>
                </label>
                <div className="relative">
                  <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                    <FaUser className="text-lg" />
                  </span>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    className="input input-bordered w-full pl-12 py-3 text-lg rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 h-12"
                    required={!isLogin}
                  />
                </div>
              </motion.div>
            )}

            <div className="mb-6">
              <label className="label">
                <span className="label-text text-gray-700 text-lg font-medium">Email Address</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                  <FaEnvelope className="text-lg" />
                </span>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="input input-bordered w-full pl-12 py-3 text-lg rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 h-12"
                  required
                />
              </div>
            </div>

            <div className="mb-6">
              <label className="label">
                <span className="label-text text-gray-700 text-lg font-medium">Password</span>
              </label>
              <div className="relative">
                <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                  <FaLock className="text-lg" />
                </span>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="input input-bordered w-full pl-12 py-3 text-lg rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 h-12"
                  required
                />
              </div>
            </div>

            {!isLogin && (
              <>
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  transition={{ duration: 0.3 }}
                  className="mb-6"
                >
                  <label className="label">
                    <span className="label-text text-gray-700 text-lg font-medium">Confirm Password</span>
                  </label>
                  <div className="relative">
                    <span className="absolute inset-y-0 left-0 flex items-center pl-4 text-gray-400">
                      <FaLock className="text-lg" />
                    </span>
                    <input
                      type="password"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleChange}
                      placeholder="••••••••"
                      className="input input-bordered w-full pl-12 py-3 text-lg rounded-xl bg-gray-50 focus:ring-2 focus:ring-blue-500 h-12"
                      required={!isLogin}
                    />
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.2 }}
                  className="mb-8"
                >
                  <label className="label cursor-pointer justify-start">
                    <input
                      type="checkbox"
                      name="terms"
                      checked={formData.terms}
                      onChange={handleChange}
                      className="checkbox checkbox-primary mr-3 h-5 w-5"
                    />
                    <span className="label-text text-gray-700 text-lg">
                      I agree to the <a href="#" className="link link-primary">Terms & Conditions</a>
                    </span>
                  </label>
                </motion.div>
              </>
            )}

            <motion.button
              type="submit"
              whileHover={{ scale: 1.01 }}
              whileTap={{ scale: 0.99 }}
              className="btn w-full p-3 cursor-pointer rounded-full bg-gradient-to-r from-blue-600 to-green-600 border-none text-white text-lg font-semibold"
              disabled={loading}
            >
              {loading ? (
                <span className="flex items-center justify-center">
                  <motion.span
                    animate={{ rotate: 360 }}
                    transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
                    className="mr-3 text-xl"
                  >
                    <FaSpinner />
                  </motion.span>
                  Processing...
                </span>
              ) : (
                isLogin ? 'Sign In' : 'Sign Up'
              )}
            </motion.button>
          </form>

          {/* Toggle between login/signup */}
          <div className="text-center mt-8">
            <p className="text-gray-600 text-lg">
              {isLogin ? "Don't have an account?" : "Already have an account?"}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="link link-primary ml-2 text-lg font-medium"
              >
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
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

export default LoginPage;