'use client';

import { useEffect, useState } from 'react';
import Image from "next/image";
import LoadingSpinner from './components/LoadingSpinner';
import { motion } from 'framer-motion';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)] animate-fade-in bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative w-full h-[400px] sm:h-[500px] overflow-hidden mb-16 rounded-xl border border-white/10"
        >
          <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center p-8 backdrop-blur-sm">
            <motion.h1
              initial={{ opacity: 0, y: -50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-5xl sm:text-6xl font-bold mb-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent"
            >
              Welcome to Mu-3
            </motion.h1>
            <p className="text-xl sm:text-2xl text-gray-100 max-w-2xl animate-fade-in delay-100">
              The Elite Task Force Shaping Global Security
            </p>
          </div>
          <video autoPlay muted loop className="absolute inset-0 w-full h-full object-cover -z-10">
            <source src="/mu3-intro.mp4" type="video/mp4" />
          </video>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-6xl"
        >
          {['Our Mission', 'Global Operations', 'Training Programs'].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all"
            >
              <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
                {item}
              </h2>
              <p className="text-lg text-gray-100 mb-6">
                Mu-3 stands at the forefront of global security, employing cutting-edge technology and elite operatives to neutralize threats before they materialize.
              </p>
            </motion.div>
          ))}
        </motion.div>
        <div className="space-y-6 w-full max-w-6xl">
          <div className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl border border-white/10">
            <h2 className="text-2xl font-semibold mb-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              Our Purpose
            </h2>
            <ul className="space-y-2 text-gray-100">
              <li>Neutralize global threats</li>
              <li>Protect civilian populations</li>
              <li>Maintain international stability</li>
              <li>Conduct strategic intelligence operations</li>
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}
