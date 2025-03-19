'use client';

import Link from 'next/link';

export default function Forbidden() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center p-8">
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

      {/* Dragon */}
      <svg
        className="w-64 h-64 mb-8"
        viewBox="0 0 100 100"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="50" cy="50" r="40" fill="green" />
        <polygon points="50,20 60,40 40,40" fill="darkgreen" />
        <circle cx="40" cy="50" r="5" fill="yellow" />
        <circle cx="60" cy="50" r="5" fill="yellow" />
        <path
          d="M30,70 Q50,60 70,70"
          fill="none"
          stroke="orange"
          strokeWidth="2"
          className="animate-fire"
        />
      </svg>

      <h1 className="text-6xl font-bold mb-4">403</h1>
      <p className="text-2xl mb-8">Forbidden</p>

      <p className="text-lg mb-8">The dragon says: "You shall not pass!"</p>

      <Link href="/" className="text-blue-500 hover:underline">
        Return to the Kingdom (Home)
      </Link>
    </div>
  );
} 