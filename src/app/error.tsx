'use client';

import Link from 'next/link';

export default function Error() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col items-center justify-center p-8">
      {/* Stars Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-white rounded-full animate-twinkle"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 2}s`,
            }}
          ></div>
        ))}
      </div>

      <h1 className="text-9xl font-bold mb-4 font-mono bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent">
        404
      </h1>
      <p className="text-2xl mb-8">Page Not Found</p>

      <Link href="/" className="text-blue-500 hover:underline text-lg">
        Return to Home
      </Link>
    </div>
  );
}