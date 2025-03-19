'use client';

import { useSession } from "next-auth/react";

export default function ProfilePage() {
  const { data: session } = useSession();

  if (!session) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] flex items-center justify-center">
        <p className="text-white text-2xl">Please log in to view your profile.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a] p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent animate-fade-in">
          Your Profile
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              Discord Information
            </h2>
            <div className="space-y-4 text-gray-100">
              <div className="flex items-center space-x-4">
                <img
                  src={session.user?.image || '/default-avatar.png'}
                  alt="User Avatar"
                  className="w-12 h-12 rounded-full"
                />
                <p>{session.user?.name || 'Anonymous'}</p>
              </div>
              <div className="flex items-center space-x-4">
                <svg
                  className="w-6 h-6 text-[#00c6ff]"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <p>{session.user?.email || 'No email provided'}</p>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all">
            <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
              Activity
            </h2>
            <div className="space-y-4 text-gray-100">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-white/10">
                  <span className="text-[#00c6ff]">12</span>
                </div>
                <p>Completed Missions</p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center border border-white/10">
                  <span className="text-[#00c6ff]">5</span>
                </div>
                <p>Active Projects</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 