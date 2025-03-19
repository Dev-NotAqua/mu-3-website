'use client';

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useState, useRef } from "react";
import { useClickOutside } from '@/hooks/useClickOutside';

export default function AuthButton() {
  const { data: session } = useSession();
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef<HTMLElement>(null);
  useClickOutside(dropdownRef as React.RefObject<HTMLElement>, () => setIsOpen(false));

  if (session) {
    return (
      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center space-x-2 focus:outline-none"
        >
          <img 
            src={session.user?.image ?? '/default-avatar.png'} 
            alt="User Avatar" 
            className="w-8 h-8 rounded-full"
          />
        </button>

        {isOpen && (
          <div ref={dropdownRef as React.RefObject<HTMLDivElement>} className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-[#0a192f] border border-white/10">
            <div className="py-1">
              <Link
                href="/profile"
                className="block px-4 py-2 text-sm text-gray-100 hover:bg-[#112240]"
                onClick={() => setIsOpen(false)}
              >
                Profile
              </Link>
              <button
                onClick={() => {
                  setIsOpen(false);
                  signOut();
                }}
                className="w-full text-left px-4 py-2 text-sm text-red-500 hover:bg-[#112240]"
              >
                Logout
              </button>
            </div>
          </div>
        )}
      </div>
    );
  }

  return (
    <button
      onClick={() => signIn('discord')}
      className="px-4 py-2 bg-[#5865F2] text-white rounded hover:bg-[#4752C4] transition-colors"
    >
      Login with Discord
    </button>
  );
}