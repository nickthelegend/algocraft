'use client'

import React from 'react'
import Link from 'next/link'

export function Header() {
  return (
    <header className="fixed top-6 left-1/2 transform -translate-x-1/2 z-50">
      <div className="justify-between items-center px-8 py-3 rounded-full backdrop-blur-xl bg-gradient-to-r from-black/20 via-black/10 to-black/20 border border-white/10 shadow-2xl w-[min(90vw,800px)] flex">
        {/* Logo */}
        <Link
          href="/"
          className="text-xl font-bold text-white drop-shadow-[0_0_10px_rgba(59,130,246,0.5)] hover:drop-shadow-[0_0_20px_rgba(59,130,246,0.8)] transition-shadow duration-300"
        >
          AlgoCraft
        </Link>
        
        {/* Navigation */}
        <div className="flex items-center space-x-4">
          <Link
            href="/"
            className="px-4 py-2 rounded-full text-white/90 backdrop-blur-sm bg-black/30 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium"
          >
            Home
          </Link>
          <Link
            href="/playground"
            className="px-4 py-2 rounded-full text-white/90 backdrop-blur-sm bg-black/30 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium"
          >
            Playground
          </Link>
          <Link
            href="/ai"
            className="px-4 py-2 rounded-full text-white/90 backdrop-blur-sm bg-black/30 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium"
          >
            Algo AI
          </Link>
          <Link
            href="/ide"
            className="px-4 py-2 rounded-full text-white/90 backdrop-blur-sm bg-black/30 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-300 text-sm font-medium"
          >
            IDE
          </Link>
        </div>
      </div>
    </header>
  )
}