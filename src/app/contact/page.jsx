'use client';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send } from 'lucide-react';

export default function ContactPage() {
  return (
    <div className="min-h-screen mt-15 bg-gradient-to-br from-blue-50 via-white to-emerald-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-600 via-emerald-600 to-green-600 bg-clip-text text-transparent mb-4">
            Get In Touch
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have a question about our services, 
            need technical support, or want to explore partnership opportunities, our team is ready to help.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
          >
            <div className="p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="What's this about?"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                    placeholder="Your message here..."
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-emerald-600 text-white py-3 px-6 rounded-lg font-medium flex items-center justify-center space-x-2 hover:shadow-lg transition-all"
                >
                  <Send size={18} />
                  <span>Send Message</span>
                </motion.button>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-8"
          >
            {/* Contact Cards */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h2>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-blue-100 rounded-full text-blue-600">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Email</h3>
                    <p className="text-gray-600">contact@example.com</p>
                    <p className="text-gray-600">support@example.com</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-emerald-100 rounded-full text-emerald-600">
                    <Phone size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Phone</h3>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543 (Support)</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-purple-100 rounded-full text-purple-600">
                    <MapPin size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Address</h3>
                    <p className="text-gray-600">123 Tech Park Avenue</p>
                    <p className="text-gray-600">San Francisco, CA 94107</p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-amber-100 rounded-full text-amber-600">
                    <Clock size={20} />
                  </div>
                  <div>
                    <h3 className="font-medium text-gray-800">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 9:00 AM - 6:00 PM</p>
                    <p className="text-gray-600">Saturday: 10:00 AM - 4:00 PM</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info */}
            <div className="bg-gradient-to-r from-blue-50 to-emerald-50 rounded-2xl shadow-xl p-8 border border-blue-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Need immediate help?</h2>
              <p className="text-gray-600 mb-6">
                Our customer support team is available 24/7 to assist with urgent inquiries. 
                For technical emergencies, please call our support hotline.
              </p>
              <div className="bg-white p-6 rounded-xl border border-blue-100">
                <h3 className="font-bold text-blue-600 mb-2">Emergency Support</h3>
                <p className="text-gray-700 mb-3">+1 (555) 789-0123</p>
                <p className="text-sm text-gray-500">Available 24 hours, 7 days a week</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h2 className="text-2xl font-bold text-gray-800 mb-4">Connect With Us</h2>
              <p className="text-gray-600 mb-6">
                Follow us on social media to stay updated with our latest news and announcements.
              </p>
              <div className="flex space-x-4">
                {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((platform) => (
                  <motion.a
                    key={platform}
                    whileHover={{ y: -3 }}
                    href="#"
                    className="p-3 bg-gray-100 rounded-lg text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
                  >
                    {platform}
                  </motion.a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100"
        >
          <div className="p-8">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Location</h2>
            <div className="aspect-w-16 aspect-h-9 bg-gray-200 rounded-xl overflow-hidden">
              {/* Replace with actual map component or iframe */}
              <div className="w-full h-96 flex items-center justify-center bg-gradient-to-br from-blue-100 to-emerald-100">
                <p className="text-gray-500">Map would be displayed here</p>
              </div>
            </div>
            <div className="mt-6 flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="#"
                className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium"
              >
                Get Directions
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.02 }}
                href="#"
                className="px-6 py-3 border border-gray-300 text-gray-700 rounded-lg font-medium"
              >
                Parking Information
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}