'use client'

import React, { useState } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ChevronDown } from 'lucide-react'
import { motion, AnimatePresence } from 'framer-motion'
import { MobileMenu } from '@/components/MobileMenu'

function ProductsDropdown({ pathname }: { pathname: string }) {
  const [isOpen, setIsOpen] = useState(false);
  
  const isProductPage = ['/playground', '/algoflow', '/ai', '/ide'].includes(pathname);

  return (
    <div 
      className="relative" 
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      <button
        className={`px-4 py-2 rounded-full text-white/90 backdrop-blur-sm border transition-all duration-300 text-sm font-medium flex items-center gap-1 ${
          isProductPage 
            ? 'bg-primary/20 border-primary/40' 
            : 'bg-black/30 border-white/10 hover:bg-white/10 hover:border-white/20'
        }`}
      >
        Products
        <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2, ease: 'easeOut' }}
            className="absolute top-full mt-2 right-0 w-56 backdrop-blur-xl bg-black/60 border border-white/10 rounded-2xl shadow-2xl overflow-hidden"
          >
            <div className="p-2">
              <Link
                href="/playground"
                className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-all text-sm font-medium"
              >
                <div className="font-semibold">Playground</div>
                <div className="text-xs text-white/60">Interactive coding environment</div>
              </Link>
              <Link
                href="/algoflow"
                className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-all text-sm font-medium"
              >
                <div className="font-semibold">AlgoFlow</div>
                <div className="text-xs text-white/60">Visual workflow designer</div>
              </Link>
              <Link
                href="/ai"
                className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-all text-sm font-medium"
              >
                <div className="font-semibold">Algo AI</div>
                <div className="text-xs text-white/60">AI-powered development</div>
              </Link>
              <Link
                href="/ide"
                className="block px-4 py-3 rounded-lg text-white/90 hover:bg-white/10 transition-all text-sm font-medium"
              >
                <div className="font-semibold">IDE</div>
                <div className="text-xs text-white/60">Professional code editor</div>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export function Header() {
  const pathname = usePathname();
  
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
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/"
              className={`px-4 py-2 rounded-full text-white/90 backdrop-blur-sm border transition-all duration-300 text-sm font-medium ${
                pathname === '/' 
                  ? 'bg-primary/20 border-primary/40' 
                  : 'bg-black/30 border-white/10 hover:bg-white/10 hover:border-white/20'
              }`}
            >
              Home
            </Link>
            <ProductsDropdown pathname={pathname} />
          </div>
          <MobileMenu />
        </div>
      </div>
    </header>
  )
}