'use client';

import React, { useState } from 'react';

interface HeaderProps {
  onSearchClick?: () => void;
}

export function Header({ onSearchClick }: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-amber-900/10 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <a href="/" className="flex items-center gap-2.5 group">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-tr from-[#D2691E] to-amber-500 flex items-center justify-center text-white shadow-md shadow-amber-600/20 group-hover:scale-105 transition-transform">
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12,11.5 C10.6,11.5 9.5,12.6 9.5,14 C9.5,15.4 10.6,16.5 12,16.5 C13.4,16.5 14.5,15.4 14.5,14 C14.5,12.6 13.4,11.5 12,11.5 Z M6.5,15.5 C5.1,15.5 4,16.6 4,18 C4,19.4 5.1,20.5 6.5,20.5 C7.9,20.5 9,19.4 9,18 C9,16.6 7.9,15.5 6.5,15.5 Z M17.5,15.5 C16.1,15.5 15,16.6 15,18 C15,19.4 16.1,20.5 17.5,20.5 C18.9,20.5 20,19.4 20,18 C20,16.6 18.9,15.5 17.5,15.5 Z M8.5,8 C7.1,8 6,9.1 6,10.5 C6,11.9 7.1,13 8.5,13 C9.9,13 11,11.9 11,10.5 C11,9.1 9.9,8 8.5,8 Z M15.5,8 C14.1,8 13,9.1 13,10.5 C13,11.9 14.1,13 15.5,13 C16.9,13 18,11.9 18,10.5 C18,9.1 16.9,8 15.5,8 Z M12,17.5 C9,17.5 6.5,19.5 6.5,22 C6.5,22.3 6.7,22.5 7,22.5 L17,22.5 C17.3,22.5 17.5,22.3 17.5,22 C17.5,19.5 15,17.5 12,17.5 Z"/>
            </svg>
          </div>
          <div>
            <span className="font-extrabold text-2xl tracking-tight text-[#2A170C] block leading-none">
              Dodo<span className="text-[#D2691E]">Doggy</span>
            </span>
            <span className="text-[10px] font-semibold tracking-wider text-amber-800 uppercase block mt-1">
              India&apos;s Pet Care Directory
            </span>
          </div>
        </a>

        {/* Center Navigation Links */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-6 text-sm font-semibold text-slate-700">
          <a href="/services" className="px-3 py-2 rounded-lg hover:text-[#D2691E] hover:bg-amber-50 transition-colors flex items-center gap-1">
            Find Services
            <svg className="w-4 h-4 opacity-60" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"/></svg>
          </a>
          <a href="/insurance" className="px-3 py-2 rounded-lg hover:text-[#D2691E] hover:bg-amber-50 transition-colors">Insurance</a>
          <a href="/breeds" className="px-3 py-2 rounded-lg hover:text-[#D2691E] hover:bg-amber-50 transition-colors">Breeds</a>
          <a href="/blog" className="px-3 py-2 rounded-lg hover:text-[#D2691E] hover:bg-amber-50 transition-colors">Learn</a>
          <a href="/tools" className="px-3 py-2 rounded-lg hover:text-[#D2691E] hover:bg-amber-50 transition-colors">Tools</a>
        </nav>

        {/* Right Action Button */}
        <div className="flex items-center gap-3">
          <button onClick={onSearchClick} className="bg-[#D2691E] hover:bg-[#B35310] text-white px-5 py-2.5 rounded-xl font-bold text-sm shadow-md shadow-amber-600/25 transition-all transform hover:-translate-y-0.5 flex items-center gap-2 cursor-pointer">
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
            <span>Find a vet near you</span>
          </button>

          {/* Mobile Menu Toggle */}
          <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className="md:hidden p-2 rounded-lg text-slate-700 hover:bg-amber-50" aria-label="Toggle menu">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
          </button>
        </div>

      </div>

      {/* Mobile Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-b border-amber-100 px-4 py-4 space-y-2">
          <a href="/services" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-semibold border-b border-slate-100">Find Services</a>
          <a href="/cities" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-semibold border-b border-slate-100">Indian Cities</a>
          <a href="/insurance" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-[#D2691E] font-bold border-b border-slate-100">Pet Insurance</a>
          <a href="/blog" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-semibold border-b border-slate-100">Pet Blog &amp; Guides</a>
          <a href="/tools" onClick={() => setMobileMenuOpen(false)} className="block py-2 text-slate-800 font-semibold">Calculators &amp; Tools</a>
        </div>
      )}
    </header>
  );
}
