'use client';

import { useRouter } from 'next/navigation';

export default function ApplicationsPage() {
  const router = useRouter();

  const applications = [
    {
      name: 'Field Operations Manual',
      url: 'https://docs.google.com/document/d/your-doc-id-1',
    },
    {
      name: 'Security Protocols',
      url: 'https://docs.google.com/document/d/your-doc-id-2',
    },
    {
      name: 'Training Modules',
      url: 'https://docs.google.com/document/d/your-doc-id-3',
    },
  ];

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-5xl font-bold mb-8 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent animate-fade-in">
          Applications
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {['Operational Manual', 'Security Protocols', 'Training Modules'].map((item, index) => (
            <div 
              key={index}
              className="bg-gradient-to-br from-[#0a192f] to-[#112240] p-6 rounded-lg shadow-xl border border-white/10 hover:border-white/20 transition-all transform hover:scale-105 animate-slide-up"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <h2 className="text-2xl font-bold mb-4 bg-gradient-to-r from-[#00c6ff] to-[#0072ff] bg-clip-text text-transparent">
                {item}
              </h2>
              <p className="text-gray-100">
                Detailed documentation and resources for {item.toLowerCase()}.
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
} 