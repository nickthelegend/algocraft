'use client'

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export function MobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="px-3 py-2 rounded-full text-white/90 backdrop-blur-sm bg-black/30 border border-white/10 hover:bg-white/10 transition-all"
        aria-label="Toggle menu"
      >
        {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {isOpen && (
        <div className="absolute top-16 right-0 w-48 backdrop-blur-xl bg-black/40 border border-white/10 rounded-2xl shadow-2xl overflow-hidden">
          <div className="flex flex-col p-2">
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-all text-sm font-medium"
            >
              Home
            </Link>
            <Link
              href="/playground"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-all text-sm font-medium"
            >
              Playground
            </Link>
            <Link
              href="/ai"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-all text-sm font-medium"
            >
              Algo AI
            </Link>
            <Link
              href="/ide"
              onClick={() => setIsOpen(false)}
              className="px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-all text-sm font-medium"
            >
              IDE
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}
