'use client';

import React from 'react';

export function Footer() {
  return (
    <footer className="bg-[#1A120B] text-slate-300 pt-16 pb-8 border-t border-amber-950">
      <div className="max-w-7xl mx-auto px-4 space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-4 space-y-4">
            <a href="/" className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-[#D2691E] to-amber-500 flex items-center justify-center text-white font-bold text-xl">
                🐾
              </div>
              <span className="font-extrabold text-2xl text-white">Dodo<span className="text-[#D2691E]">Doggy</span></span>
            </a>
            <p className="text-xs text-slate-400 leading-relaxed max-w-sm">
              DodoDoggy is India&apos;s leading dog care directory. We empower dog parents across 12 cities to find verified veterinarians, certified groomers, trusted boarding resorts, and positive reinforcement trainers.
            </p>
            <div className="flex items-center gap-2 text-xs font-semibold text-emerald-400 bg-emerald-950/60 p-2.5 rounded-xl border border-emerald-900/40 max-w-xs">
              <span>🛡️ 100% Verified Business Profiles</span>
            </div>
          </div>

          <div className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6 text-xs">
            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[11px] text-amber-500">Find Services</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#vets" className="hover:text-white transition-colors">Vets Near Me</a></li>
                <li><a href="#groomers" className="hover:text-white transition-colors">Dog Groomers</a></li>
                <li><a href="#boarding" className="hover:text-white transition-colors">Dog Boarding</a></li>
                <li><a href="#trainers" className="hover:text-white transition-colors">K9 Trainers</a></li>
                <li><a href="#stores" className="hover:text-white transition-colors">Pet Stores</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[11px] text-amber-500">Cities</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#mumbai" className="hover:text-white transition-colors">Mumbai</a></li>
                <li><a href="#delhi" className="hover:text-white transition-colors">Delhi NCR</a></li>
                <li><a href="#bengaluru" className="hover:text-white transition-colors">Bengaluru</a></li>
                <li><a href="#pune" className="hover:text-white transition-colors">Pune</a></li>
                <li><a href="#chennai" className="hover:text-white transition-colors">Chennai</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[11px] text-amber-500">Pet Guides</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="/#blog" className="hover:text-white transition-colors">Dog Breeds India</a></li>
                <li><a href="/#blog" className="hover:text-white transition-colors">Puppy Care 101</a></li>
                <li><a href="/#blog" className="hover:text-white transition-colors">Indian Dog Diets</a></li>
                <li><a href="/insurance" className="hover:text-white transition-colors text-amber-400 font-bold">Pet Insurance 2026</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[11px] text-amber-500">Resources</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#tools" className="hover:text-white transition-colors">Breed Quiz Tool</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors">Food Portion Calc</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors">Vaccine Schedule</a></li>
                <li><a href="#tools" className="hover:text-white transition-colors">Weight Tracker</a></li>
              </ul>
            </div>

            <div className="space-y-3">
              <h4 className="font-bold uppercase tracking-wider text-[11px] text-amber-500">Company</h4>
              <ul className="space-y-2 text-slate-400">
                <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
                <li><a href="#partner" className="hover:text-white transition-colors">Partner With Us</a></li>
                <li><a href="#list" className="hover:text-white transition-colors">List Business</a></li>
                <li><a href="#contact" className="hover:text-white transition-colors">Contact Support</a></li>
              </ul>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-slate-500">
          <p>© 2026 DodoDoggy India. All rights reserved. Made with ❤️ for dogs across India.</p>
          <div className="flex items-center space-x-6">
            <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#terms" className="hover:text-white transition-colors">Terms of Service</a>
            <a href="#sitemap" className="hover:text-white transition-colors">Sitemap</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
