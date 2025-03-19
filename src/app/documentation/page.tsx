export default function DocumentationPage() {
  return (
    <div className="min-h-screen p-8 bg-gradient-to-br from-[#0a0a0a] to-[#1a1a1a]">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent animate-fade-in">
          Documentation
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Operational Manual', 'Security Protocols', 'Training Modules', 'Equipment Guides', 'Field Reports', 'Research Papers'].map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-6 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all transform hover:scale-105"
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
                {item}
              </h2>
              <p className="text-gray-100">
                Detailed documentation and resources for {item.toLowerCase()}.
              </p>
              <button className="mt-4 px-4 py-2 bg-[#00c6ff] text-white rounded hover:bg-[#0072ff] transition-colors">
                View Details
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 