export default function SettingsPage() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent animate-fade-in">
          Settings
        </h1>

        <div className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-8 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all">
          <h2 className="text-3xl font-bold mb-6 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
            Account Settings
          </h2>
          
          <div className="space-y-6">
            <div className="space-y-2">
              <label className="block text-gray-100">Change Password</label>
              <input
                type="password"
                className="w-full bg-gray-900 rounded-lg px-4 py-2 text-gray-100 focus:outline-none focus:ring-2 focus:ring-[#00c6ff]"
                placeholder="New Password"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-gray-100">Notification Preferences</label>
              <div className="flex items-center space-x-4">
                <input type="checkbox" className="form-checkbox text-[#00c6ff]" />
                <span className="text-gray-100">Email Notifications</span>
              </div>
            </div>

            <button className="px-6 py-2 bg-[#00c6ff] text-white rounded-lg hover:bg-[#0072ff] transition-colors">
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 