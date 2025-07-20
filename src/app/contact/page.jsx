'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Twitter, Linkedin, Facebook, Instagram, Github } from 'lucide-react';
import { toast, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ContactPage() {
  const number2Copied = () => {
    navigator.clipboard.writeText('+91 7894174893')
    toast.success('The number was copied', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }
  const emailIdCopied = () => {
    navigator.clipboard.writeText('gyanaprakashkhndual@gmail.com')
    toast.success('The email was copied', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }
  const number1Copied = () => {
    navigator.clipboard.writeText('+91 7606939833')
    toast.success('The number was copied', {
      position: 'top-right',
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: 'colored',
    })
  }

  return (
    <div className="mt-15 h-[calc(100vh-60px)] w-screen bg-gradient-to-br from-blue-50 via-white to-emerald-50 p-4 overflow-hidden">
      <div className="h-full w-full flex flex-col">
        {/* Main Content - Full Width Grid */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-4 w-full">
          
          {/* Contact Form - Takes 2 columns */}
          <motion.div
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
            className="lg:col-span-2 bg-white rounded-xl shadow-lg border border-gray-100 flex flex-col"
          >
            <div className="p-4 flex-1 flex flex-col">
              <h2 className="text-lg font-bold text-gray-800 mb-3">Send me a message</h2>
              <form className="flex-1 flex flex-col">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 mb-3">
                  <div>
                    <label htmlFor="name" className="block text-xs font-medium text-gray-700 mb-1">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-medium text-gray-700 mb-1">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="subject" className="block text-xs font-medium text-gray-700 mb-1">Subject</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500"
                    placeholder="What's this about?"
                  />
                </div>
                <div className="flex-1 flex flex-col mb-3">
                  <label htmlFor="message" className="block text-xs font-medium text-gray-700 mb-1">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    className="flex-1 w-full px-3 py-2 text-sm rounded-lg border border-gray-300 focus:ring-1 focus:ring-blue-500 focus:border-blue-500 resize-none min-h-[150px]"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.99 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-2.5 px-4 rounded-lg text-sm font-medium flex items-center justify-center space-x-2 hover:shadow-md transition-all"
                >
                  <Send size={14} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information - Single Column */}
          <motion.div
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
            className="flex flex-col space-y-3 h-full"
          >
            {/* Combined Contact Details & Social Media */}
            <div className="bg-white rounded-xl shadow-lg p-4 border border-gray-100 flex-1 flex flex-col">
              <h2 className="text-lg font-bold text-gray-800 mb-3">Contact Info</h2>
              
              {/* Contact Details */}
              <div className="space-y-3 flex-1">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-blue-100 rounded-full text-blue-600 flex-shrink-0">
                    <Mail size={14} />
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs font-semibold text-gray-800">Email</h3>
                    <p className="text-xs text-blue-500 truncate cursor-pointer" onClick={emailIdCopied}>gyanaprakashkhnadual@gmail.com</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-emerald-100 rounded-full text-emerald-600 flex-shrink-0">
                    <Phone size={14} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold text-gray-800">Phone</h3>
                    <p className="text-xs text-gray-600 cursor-pointer" onClick={number1Copied}>+91 7606939833</p>
                    <p className="text-xs text-gray-600 cursor-pointer" onClick={number2Copied}>+91 7894174893 (Whatsapp)</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-purple-100 rounded-full text-purple-600 flex-shrink-0">
                    <MapPin size={14} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold text-gray-800">Address</h3>
                    <p className="text-xs text-gray-600">Jajpur, Bhubaneswar</p>
                    <p className="text-xs text-gray-600">Odisha, India</p>
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 bg-amber-100 rounded-full text-amber-600 flex-shrink-0">
                    <Clock size={14} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xs font-semibold text-gray-800">Working Hours</h3>
                    <p className="text-xs text-gray-600">Mon-Fri: 9AM-6PM</p>
                    <p className="text-xs text-gray-600">Sat: 10AM-4PM</p>
                  </div>
                </div>
              </div>

              {/* Social Media Section */}
              <div className="mt-4 pt-3 border-t border-gray-100">
                <h3 className="text-sm font-bold text-gray-800 mb-3">Follow Me On</h3>
                <div className="flex justify-between space-x-2">
                  <motion.a
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex-1 p-2 bg-blue-50 rounded-lg text-blue-600 hover:bg-blue-100 transition-colors flex items-center justify-center"
                    title="Twitter"
                  >
                    <Twitter size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex-1 p-2 bg-blue-50 rounded-lg text-blue-700 hover:bg-blue-100 transition-colors flex items-center justify-center"
                    title="LinkedIn"
                  >
                    <Linkedin size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="https://github.com/GyanaprakashKhandual"
                    target='_blank'
                    className="flex-1 p-2 bg-blue-50 rounded-lg text-black hover:bg-blue-100 transition-colors flex items-center justify-center"
                    title="Github"
                  >
                    <Github size={16} />
                  </motion.a>
                  <motion.a
                    whileHover={{ y: -2, scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    href="#"
                    className="flex-1 p-2 bg-pink-50 rounded-lg text-pink-600 hover:bg-pink-100 transition-colors flex items-center justify-center"
                    title="Instagram"
                  >
                    <Instagram size={16} />
                  </motion.a>
                </div>
              </div>
            </div>

            {/* Emergency Support - Compact */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-xl shadow-lg p-4 border border-blue-100">
              <h3 className="text-sm font-bold text-gray-800 mb-2">Call me anytime</h3>
              <div className="bg-white p-3 rounded-lg border border-blue-100">
                <p className="text-sm font-bold text-blue-600 cursor-pointer" onClick={number1Copied}>+91 7606939833</p>
                <ToastContainer/>
                <p className="text-xs text-gray-500">Available anytime</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}