'use client';

import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';
import { motion } from 'framer-motion';

const ADMIN_IDS = ['1297171796180865049', 'YOUR_DISCORD_ID_2']; // Add your Discord IDs here

export default function AdminDashboard() {
  const { data: session } = useSession();

  // Redirect if not logged in or not an admin
  if (!session || !ADMIN_IDS.includes(session.user?.id!)) {
    redirect('/');
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-8">
      <div className="max-w-6xl mx-auto">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent"
        >
          Admin Dashboard
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              User Management
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Manage all registered users, roles, and permissions.
            </p>
            <button className="px-6 py-2 bg-[#00c6ff] text-white rounded-lg hover:bg-[#0072ff] transition-colors">
              View Users
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              Analytics
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              View site analytics, user activity, and performance metrics.
            </p>
            <button className="px-6 py-2 bg-[#00c6ff] text-white rounded-lg hover:bg-[#0072ff] transition-colors">
              View Analytics
            </button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all"
          >
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              Settings
            </h2>
            <p className="text-lg text-gray-100 mb-6">
              Configure site settings, themes, and integrations.
            </p>
            <button className="px-6 py-2 bg-[#00c6ff] text-white rounded-lg hover:bg-[#0072ff] transition-colors">
              Configure
            </button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
} 