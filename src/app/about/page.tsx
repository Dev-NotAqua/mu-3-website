'use client';

import { motion } from 'framer-motion';

export default function AboutPage() {
  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent"
        >
          About Mu-3
        </motion.h1>
        
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              Our History
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Founded in 2015, Mu-3 has been at the forefront of global security operations. Our elite task force was established to address emerging threats in an increasingly complex world.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-white/10">
                  <span className="text-[#00c6ff]">2015</span>
                </div>
                <p className="text-lg text-gray-100">Foundation Year</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-white/10">
                  <span className="text-[#00c6ff]">50+</span>
                </div>
                <p className="text-lg text-gray-100">Successful Operations</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              Our Values
            </h2>
            <ul className="space-y-4 text-gray-100">
              <li className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-[#00c6ff] rounded-full"></div>
                <span>Integrity in every operation</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-[#00c6ff] rounded-full"></div>
                <span>Commitment to global security</span>
              </li>
              <li className="flex items-center space-x-4">
                <div className="w-6 h-6 bg-[#00c6ff] rounded-full"></div>
                <span>Innovation in strategy</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 