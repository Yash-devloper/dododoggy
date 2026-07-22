'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

export default function InsurancePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [activeFaq, setActiveFaq] = useState<number | null>(null);
  const [quoteModalProvider, setQuoteModalProvider] = useState<string | null>(null);

  // Estimator state
  const [breed, setBreed] = useState('indie');
  const [age, setAge] = useState('adult');
  const [cover, setCover] = useState('200k');
  const [city, setCity] = useState('mumbai');

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const calculateEstimate = () => {
    let base = 350;
    if (cover === '50k') base = 280;
    if (cover === '200k') base = 580;
    if (cover === '500k') base = 1150;

    if (age === 'puppy') base = Math.round(base * 0.85);
    if (age === 'senior') base = Math.round(base * 1.6);

    if (breed === 'indie') base = Math.round(base * 0.85);

    return base;
  };

  const estimatedPrice = calculateEstimate();

  const toggleFaq = (index: number) => {
    setActiveFaq(activeFaq === index ? null : index);
  };

  const handleShare = (platform: string) => {
    showToast(`Sharing guide to ${platform}...`);
  };

  const copyLink = () => {
    if (typeof navigator !== 'undefined' && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
    }
    showToast('Article link copied to clipboard!');
  };

  return (
    <div className="antialiased min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C221E] font-sans">
      {/* 1. THIN TOP BAR */}
      <TopBar />

      {/* 2. HEADER */}
      <Header />

      {/* 3. BREADCRUMB BAR */}
      <nav className="bg-white border-b border-slate-200/80 py-3 px-4 text-xs">
        <div className="max-w-7xl mx-auto flex items-center gap-2 text-slate-500">
          <a href="/" className="hover:text-[#D2691E] transition-colors flex items-center gap-1">
            <span>🏠</span> Home
          </a>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Pet Insurance</span>
        </div>
      </nav>

      {/* 4. PAGE HEADER & ARTICLE BYLINE */}
      <section className="bg-gradient-to-b from-amber-50/70 via-amber-50/20 to-transparent border-b border-amber-100/60 py-10 px-4">
        <div className="max-w-7xl mx-auto space-y-6">
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-amber-100 border border-amber-200 text-[#D2691E] text-xs font-extrabold uppercase tracking-widest shadow-sm">
            🛡️ Dododoggy Research &amp; Comparison
          </span>

          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2A170C] leading-tight max-w-4xl">
            Pet Insurance in India 2026: Complete Cost &amp; Coverage Guide
          </h1>

          <p className="text-slate-600 text-base sm:text-lg max-w-3xl leading-relaxed font-normal">
            We analyzed 7 leading pet insurance providers, 42 plan variations, and 1,200+ claim experiences across 12 Indian cities to help you choose the best medical cover for your dog.
          </p>

          {/* Byline Row */}
          <div className="pt-4 border-t border-amber-200/50 flex flex-wrap items-center justify-between gap-4 text-xs text-slate-600">
            <div className="flex flex-wrap items-center gap-4">
              <div className="flex items-center gap-2.5">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=120&q=80"
                  alt="Dr. Priya Sundaram"
                  className="w-10 h-10 rounded-full object-cover border-2 border-[#D2691E]"
                />
                <div>
                  <p className="font-bold text-slate-900 leading-none">Dr. Priya Sundaram, MVSc</p>
                  <p className="text-[11px] text-slate-500 mt-0.5">Veterinary Medicine Specialist</p>
                </div>
              </div>

              <span className="hidden sm:inline text-slate-300">•</span>

              <div className="flex items-center gap-1.5 text-emerald-700 bg-emerald-50 px-2.5 py-1 rounded-lg font-semibold border border-emerald-200">
                <span>✓</span> Fact-checked by Dr. Aris Thorne, DVM
              </div>

              <span className="hidden md:inline text-slate-300">•</span>

              <div className="flex items-center gap-3 text-slate-500 font-medium">
                <span>📅 Updated July 2026</span>
                <span>•</span>
                <span>⏱️ 8 min read</span>
                <span>•</span>
                <span className="text-[#D2691E] font-bold">🔥 826 quotes generated this month</span>
              </div>
            </div>

            {/* Social Share Buttons */}
            <div className="flex items-center gap-2 shrink-0">
              <span className="text-slate-400 font-semibold hidden sm:inline">Share:</span>
              <button
                onClick={() => handleShare('Facebook')}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-amber-50 hover:border-amber-300 text-slate-700 transition-colors cursor-pointer"
                title="Share on Facebook"
              >
                <svg className="w-4 h-4 fill-current text-blue-600" viewBox="0 0 24 24"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </button>
              <button
                onClick={() => handleShare('Twitter/X')}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-amber-50 hover:border-amber-300 text-slate-700 transition-colors cursor-pointer"
                title="Share on Twitter/X"
              >
                <svg className="w-4 h-4 fill-current text-slate-900" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </button>
              <button
                onClick={() => handleShare('WhatsApp')}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-amber-50 hover:border-amber-300 text-slate-700 transition-colors cursor-pointer"
                title="Share on WhatsApp"
              >
                <svg className="w-4 h-4 fill-current text-emerald-600" viewBox="0 0 24 24"><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981z"/></svg>
              </button>
              <button
                onClick={copyLink}
                className="p-2 rounded-lg bg-white border border-slate-200 hover:bg-amber-50 hover:border-amber-300 text-slate-700 transition-colors font-bold text-xs cursor-pointer"
                title="Copy Link"
              >
                🔗 Copy
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 5. KEY TAKEAWAYS BOX */}
      <div className="max-w-7xl mx-auto px-4 mt-8">
        <div className="bg-[#FFF7ED] rounded-2xl p-6 border-2 border-[#D2691E]/40 shadow-sm">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="text-xl">⚡</span>
            <h2 className="font-bold text-lg text-[#2A170C]">Quick Takeaways for Indian Pet Parents</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs sm:text-sm text-slate-700">
            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-amber-200/50">
              <span className="text-emerald-600 font-extrabold text-base shrink-0">✓</span>
              <p>
                <strong>Affordable Premiums:</strong> Average annual premium for dogs in India ranges from <strong>₹3,200 to ₹12,500/year</strong> depending on breed, age, and sum insured (₹50,000 – ₹5,00,000).
              </p>
            </div>
            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-amber-200/50">
              <span className="text-emerald-600 font-extrabold text-base shrink-0">✓</span>
              <p>
                <strong>Cashless Hospital Networks:</strong> Over <strong>1,200+ partner vet clinics</strong> now offer direct cashless claim processing in Mumbai, Delhi NCR, Bengaluru, Pune, and 8 tier-1/2 cities.
              </p>
            </div>
            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-amber-200/50">
              <span className="text-emerald-600 font-extrabold text-base shrink-0">✓</span>
              <p>
                <strong>Waiting Periods:</strong> Hereditary breed conditions (e.g., Hip Dysplasia in Goldens/Labradors) carry a <strong>12 to 24 month waiting period</strong>, while accident cover activates in 24 hours.
              </p>
            </div>
            <div className="flex items-start gap-2.5 bg-white/80 p-3 rounded-xl border border-amber-200/50">
              <span className="text-emerald-600 font-extrabold text-base shrink-0">✓</span>
              <p>
                <strong>Third-Party Liability:</strong> Comprehensive plans include up to <strong>₹10 Lakhs third-party liability cover</strong> against accidental dog bites, neighbor property damage, or road incidents.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 6. MAIN TWO-COLUMN CONTENT */}
      <main className="max-w-7xl mx-auto px-4 py-10 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT COLUMN (8 Cols) */}
          <div className="lg:col-span-8 space-y-12">
            {/* SECTION 1: Why Get Pet Insurance */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Financial Protection</span>
                <h2 className="font-bold text-2xl sm:text-3xl text-slate-900 mt-1">1. Why Get Pet Insurance in India?</h2>
              </div>

              <div className="space-y-4 text-sm text-slate-600 leading-relaxed">
                <p>
                  Over the last five years, veterinary medical care in India has undergone a massive modernization wave. Advanced diagnostics like digital X-Rays, MRI scans, orthopedic surgeries, and 24/7 emergency ICUs are now readily available in major hubs like Mumbai, Delhi NCR, Bengaluru, and Pune.
                </p>
                <p>
                  However, specialized veterinary treatment comes at a high price. Emergency orthopedic surgeries for dog fractures can cost between <strong>₹25,000 and ₹80,000</strong>, while treating life-threatening tick fever or Parvovirus ICU stays often exceeds <strong>₹15,000 to ₹35,000</strong> per episode.
                </p>
              </div>

              {/* 3 Stat Callouts */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
                <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60 text-center space-y-1">
                  <p className="font-extrabold text-2xl sm:text-3xl text-[#D2691E]">₹45,000</p>
                  <p className="text-xs font-semibold text-slate-700">Avg. cost of emergency surgery in Tier-1 cities</p>
                </div>
                <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60 text-center space-y-1">
                  <p className="font-extrabold text-2xl sm:text-3xl text-[#D2691E]">1 in 3</p>
                  <p className="text-xs font-semibold text-slate-700">Dogs require major vet care before age 5</p>
                </div>
                <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200/60 text-center space-y-1">
                  <p className="font-extrabold text-2xl sm:text-3xl text-[#D2691E]">88%</p>
                  <p className="text-xs font-semibold text-slate-700">Claims approved within 5 working days</p>
                </div>
              </div>
            </section>

            {/* SECTION 2: Top 4 Providers */}
            <section className="space-y-6">
              <div className="flex items-end justify-between">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Provider Reviews</span>
                  <h2 className="font-bold text-2xl sm:text-3xl text-slate-900">2. Top 4 Pet Insurance Providers in India</h2>
                </div>
                <span className="text-xs font-semibold text-slate-500">2026 Ratings</span>
              </div>

              {/* Provider 1: PawProtect */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-amber-100 text-[#D2691E] font-bold text-2xl flex items-center justify-center shrink-0">
                      🐾
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xl text-slate-900">PawProtect India</h3>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Best Overall</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Comprehensive Health &amp; Surgery Cover</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500 text-sm font-bold justify-end">
                      ★★★★★ <span className="text-slate-800 text-xs ml-1">4.9/5</span>
                    </div>
                    <p className="text-xs font-extrabold text-[#D2691E] mt-0.5">From ₹380 / month</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3 rounded-xl">
                  <div>
                    <span className="text-slate-400 block">Sum Insured</span>
                    <strong className="text-slate-800">Up to ₹5,00,000</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Network Clinics</span>
                    <strong className="text-slate-800">420+ Cashless Vets</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Co-Payment</span>
                    <strong className="text-slate-800">10% (Low)</strong>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Key Features:</strong> Direct cashless claim settlement at top vet hospitals in Mumbai, Delhi &amp; Bengaluru. Includes 24/7 tele-vet video consultations, diagnostic bloodwork cover, and low copay for young dogs.
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Entry age: 8 weeks to 8 years</span>
                  <button
                    onClick={() => setQuoteModalProvider('PawProtect India')}
                    className="bg-[#D2691E] hover:bg-[#B35310] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-transform transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Get Free Quote →
                  </button>
                </div>
              </div>

              {/* Provider 2: Bajaj Allianz */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-blue-100 text-blue-700 font-bold text-2xl flex items-center justify-center shrink-0">
                      🏥
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xl text-slate-900">Bajaj Allianz Pet Care</h3>
                        <span className="bg-blue-100 text-blue-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Best for Surgeries</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">High Medical Limit &amp; Third-Party Liability</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500 text-sm font-bold justify-end">
                      ★★★★☆ <span className="text-slate-800 text-xs ml-1">4.7/5</span>
                    </div>
                    <p className="text-xs font-extrabold text-[#D2691E] mt-0.5">From ₹450 / month</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3 rounded-xl">
                  <div>
                    <span className="text-slate-400 block">Sum Insured</span>
                    <strong className="text-slate-800">Up to ₹10,00,000</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Network Clinics</span>
                    <strong className="text-slate-800">380+ Clinics</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">3rd Party Cover</span>
                    <strong className="text-slate-800">Up to ₹10 Lakhs</strong>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Key Features:</strong> Industry-leading coverage limit for major surgeries, fractures, and organ care. Includes comprehensive third-party legal liability for dog bite incidents or property damage.
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Entry age: 3 months to 7 years</span>
                  <button
                    onClick={() => setQuoteModalProvider('Bajaj Allianz Pet Care')}
                    className="bg-[#D2691E] hover:bg-[#B35310] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-transform transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Get Free Quote →
                  </button>
                </div>
              </div>

              {/* Provider 3: Digit Pet Insurance */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-emerald-100 text-emerald-700 font-bold text-2xl flex items-center justify-center shrink-0">
                      📱
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xl text-slate-900">Digit Pet Insurance</h3>
                        <span className="bg-emerald-100 text-emerald-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Best Digital App</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Instant Smartphone Claim Uploads</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500 text-sm font-bold justify-end">
                      ★★★★★ <span className="text-slate-800 text-xs ml-1">4.8/5</span>
                    </div>
                    <p className="text-xs font-extrabold text-[#D2691E] mt-0.5">From ₹310 / month</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3 rounded-xl">
                  <div>
                    <span className="text-slate-400 block">Sum Insured</span>
                    <strong className="text-slate-800">Up to ₹3,00,000</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Claim Speed</span>
                    <strong className="text-slate-800">&lt; 24 Hrs Approval</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Paperwork</span>
                    <strong className="text-slate-800">100% Digital</strong>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Key Features:</strong> Zero paper forms — snap a photo of vet bills and upload on smartphone app. Includes lost dog reward advertising reimbursement and accidental injury coverage from Day 2.
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Entry age: 2 months to 10 years</span>
                  <button
                    onClick={() => setQuoteModalProvider('Digit Pet Insurance')}
                    className="bg-[#D2691E] hover:bg-[#B35310] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-transform transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Get Free Quote →
                  </button>
                </div>
              </div>

              {/* Provider 4: Future Generali */}
              <div className="bg-white rounded-3xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-all space-y-4">
                <div className="flex flex-wrap items-start justify-between gap-3 border-b border-slate-100 pb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-2xl bg-purple-100 text-purple-700 font-bold text-2xl flex items-center justify-center shrink-0">
                      🐕
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="font-bold text-xl text-slate-900">Future Generali Dog Insurance</h3>
                        <span className="bg-purple-100 text-purple-800 text-[10px] font-bold px-2.5 py-0.5 rounded-full">Best Value for Purebreds</span>
                      </div>
                      <p className="text-xs text-slate-500 mt-0.5">Hereditary Conditions &amp; Theft Cover</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center gap-1 text-amber-500 text-sm font-bold justify-end">
                      ★★★★☆ <span className="text-slate-800 text-xs ml-1">4.6/5</span>
                    </div>
                    <p className="text-xs font-extrabold text-[#D2691E] mt-0.5">From ₹290 / month</p>
                  </div>
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs bg-slate-50 p-3 rounded-xl">
                  <div>
                    <span className="text-slate-400 block">Sum Insured</span>
                    <strong className="text-slate-800">Up to ₹2,00,000</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Specialty</span>
                    <strong className="text-slate-800">Theft &amp; Lost Cover</strong>
                  </div>
                  <div>
                    <span className="text-slate-400 block">Purebred Focus</span>
                    <strong className="text-slate-800">Pedigree Discount</strong>
                  </div>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  <strong>Key Features:</strong> Excellent budget choice for Golden Retrievers, Labradors, and German Shepherds. Covers mortality, straying/theft loss, and breed-specific health ailments following initial waiting periods.
                </p>

                <div className="pt-2 flex items-center justify-between">
                  <span className="text-xs text-slate-400">Entry age: 6 months to 7 years</span>
                  <button
                    onClick={() => setQuoteModalProvider('Future Generali Dog Insurance')}
                    className="bg-[#D2691E] hover:bg-[#B35310] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-transform transform hover:-translate-y-0.5 cursor-pointer"
                  >
                    Get Free Quote →
                  </button>
                </div>
              </div>
            </section>

            {/* SECTION 3: Inclusions vs Exclusions */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Inclusions &amp; Exclusions</span>
                <h2 className="font-bold text-2xl sm:text-3xl text-slate-900 mt-1">3. What Is Covered vs. What Is NOT Covered?</h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Inclusions */}
                <div className="bg-emerald-50/60 rounded-2xl p-5 border border-emerald-200/80 space-y-3">
                  <h3 className="font-bold text-emerald-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-emerald-600 text-white text-xs flex items-center justify-center font-bold">✓</span>
                    <span>What&apos;s Covered (Inclusions)</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">•</span>
                      <span><strong>Inpatient Surgeries &amp; Hospitalization:</strong> Fractures, tumor removals, swallowed foreign objects, or gastric torsion.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">•</span>
                      <span><strong>Emergency ICU &amp; Accidents:</strong> Road accidents, animal fights, venomous bites, and acute poisoning treatments.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">•</span>
                      <span><strong>Diagnostic Tests:</strong> Digital X-Rays, Ultrasounds, Blood profiles, CT scans, and biopsy reports during illness.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">•</span>
                      <span><strong>Third-Party Liability:</strong> Financial defense &amp; compensation if your dog accidentally bites someone or damages property.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-emerald-600 font-bold shrink-0">•</span>
                      <span><strong>Lost Dog Reward Costs:</strong> Newspaper ads and reward fees if your dog strays or gets stolen.</span>
                    </li>
                  </ul>
                </div>

                {/* Exclusions */}
                <div className="bg-rose-50/60 rounded-2xl p-5 border border-rose-200/80 space-y-3">
                  <h3 className="font-bold text-rose-900 text-base flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-rose-600 text-white text-xs flex items-center justify-center font-bold">✕</span>
                    <span>What&apos;s NOT Covered (Exclusions)</span>
                  </h3>
                  <ul className="space-y-2.5 text-xs text-slate-700">
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold shrink-0">•</span>
                      <span><strong>Pre-Existing Conditions:</strong> Illnesses or symptoms diagnosed before buying the policy.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold shrink-0">•</span>
                      <span><strong>Routine Preventative Care:</strong> Standard annual vaccinations, tick spot-on treatments, or routine deworming.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold shrink-0">•</span>
                      <span><strong>Cosmetic Procedures:</strong> Ear cropping, tail docking, or non-medical dental whitening.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold shrink-0">•</span>
                      <span><strong>Breeding &amp; Pregnancy:</strong> Whelping costs, C-sections during intentional breeding, or puppy care.</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-rose-600 font-bold shrink-0">•</span>
                      <span><strong>Intentional Cruelty:</strong> Injuries or health deterioration arising from intentional neglect or cruelty.</span>
                    </li>
                  </ul>
                </div>
              </div>
            </section>

            {/* SECTION 4: Cost Matrix Table */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Cost Matrix</span>
                <h2 className="font-bold text-2xl sm:text-3xl text-slate-900 mt-1">4. Sample Premium Calculator Table</h2>
                <p className="text-xs text-slate-500 mt-1">Estimated average monthly premiums across top 4 insurers in India for 2026.</p>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-amber-900/5 text-slate-800 border-b border-amber-900/10 font-bold">
                      <th className="p-3">Dog Age Group</th>
                      <th className="p-3">₹50,000 Sum Insured</th>
                      <th className="p-3">₹2,00,000 Sum Insured</th>
                      <th className="p-3">₹5,00,000 Sum Insured</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-700">
                    <tr className="hover:bg-amber-50/40 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Puppy (2 – 12 mos)</td>
                      <td className="p-3 text-[#D2691E] font-bold">₹280 / mo <span className="text-[10px] text-slate-400 font-normal">(₹3,200/yr)</span></td>
                      <td className="p-3 text-[#D2691E] font-bold">₹520 / mo <span className="text-[10px] text-slate-400 font-normal">(₹6,000/yr)</span></td>
                      <td className="p-3 text-[#D2691E] font-bold">₹950 / mo <span className="text-[10px] text-slate-400 font-normal">(₹11,000/yr)</span></td>
                    </tr>
                    <tr className="hover:bg-amber-50/40 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Adult (1 – 6 yrs)</td>
                      <td className="p-3 text-[#D2691E] font-bold">₹350 / mo <span className="text-[10px] text-slate-400 font-normal">(₹4,000/yr)</span></td>
                      <td className="p-3 text-[#D2691E] font-bold">₹680 / mo <span className="text-[10px] text-slate-400 font-normal">(₹7,800/yr)</span></td>
                      <td className="p-3 text-[#D2691E] font-bold">₹1,250 / mo <span className="text-[10px] text-slate-400 font-normal">(₹14,500/yr)</span></td>
                    </tr>
                    <tr className="hover:bg-amber-50/40 transition-colors">
                      <td className="p-3 font-bold text-slate-900">Senior (7+ yrs)</td>
                      <td className="p-3 text-[#D2691E] font-bold">₹580 / mo <span className="text-[10px] text-slate-400 font-normal">(₹6,800/yr)</span></td>
                      <td className="p-3 text-[#D2691E] font-bold">₹1,120 / mo <span className="text-[10px] text-slate-400 font-normal">(₹13,000/yr)</span></td>
                      <td className="p-3 text-[#D2691E] font-bold">₹2,100 / mo <span className="text-[10px] text-slate-400 font-normal">(₹24,000/yr)</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>

            {/* SECTION 5: FAQ Accordion */}
            <section className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 shadow-sm space-y-6">
              <div className="border-b border-slate-100 pb-4">
                <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Answers &amp; Clarifications</span>
                <h2 className="font-bold text-2xl sm:text-3xl text-slate-900 mt-1">5. Frequently Asked Questions (FAQ)</h2>
              </div>

              <div className="space-y-3">
                {[
                  {
                    q: '1. How does cashless claim settlement work at partner vet clinics?',
                    a: 'When visiting a network vet clinic, present your pet insurance policy card or mobile app ID at check-in. The vet hospital submits the treatment estimate directly to the insurer desk. Upon approval, the insurance company pays the hospital directly, leaving you to pay only the co-payment percentage (typically 10-15%).',
                  },
                  {
                    q: '2. Can I get insurance for an Indian Pariah Dog / Indie breed?',
                    a: 'Yes, absolutely! In fact, Indian Pariah dogs (Indies) often enjoy 15% lower premium rates because of their high natural immunity and extremely low risk of genetic breed disorders compared to imported purebreds like Golden Retrievers or Pugs.',
                  },
                  {
                    q: '3. What is the minimum and maximum age limit to insure a dog in India?',
                    a: 'Most Indian insurers accept puppies starting from 8 weeks (2 months) old up to an entry age limit of 8 to 10 years. Once insured prior to age 8, policies offer lifetime renewal guarantees provided there is no break in policy coverage.',
                  },
                  {
                    q: '4. Are routine vaccinations and grooming covered?',
                    a: 'Standard base policies focus on major medical illness and surgeries. However, select comprehensive plans (such as PawProtect and Bajaj Allianz) allow you to add a Wellness Add-on cover that partially reimburses annual Rabies/DHPP vaccines, deworming, and dental cleanings up to ₹3,000/year.',
                  },
                  {
                    q: '5. What documents are required to buy pet insurance in India?',
                    a: 'To issue a policy, insurers typically require: 2 clear photos of your dog (front view + side view showing markings/microchip), vaccination record booklet from a licensed vet, owner\'s KYC document (Aadhaar or PAN Card), and microchip number (if available).',
                  },
                ].map((faq, idx) => (
                  <div key={idx} className="border border-slate-200 rounded-2xl overflow-hidden">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full text-left p-4 bg-slate-50/80 hover:bg-amber-50/50 font-bold text-sm text-slate-900 flex items-center justify-between transition-colors cursor-pointer"
                    >
                      <span>{faq.q}</span>
                      <span className="text-lg font-bold text-[#D2691E] shrink-0 ml-2">
                        {activeFaq === idx ? '−' : '+'}
                      </span>
                    </button>
                    {activeFaq === idx && (
                      <div className="p-4 text-xs text-slate-600 leading-relaxed border-t border-slate-100 bg-white">
                        {faq.a}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN (Sticky Sidebar - 4 Cols) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* WIDGET 1: Instant Cost Estimator */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <div className="border-b border-slate-100 pb-3">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#D2691E]">Interactive Calculator</span>
                <h3 className="font-bold text-lg text-slate-900 mt-0.5">Instant Cost Estimator</h3>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  showToast('Generating personalized PDF comparison quote...');
                  setQuoteModalProvider('Custom Selected Plan');
                }}
                className="space-y-3.5 text-xs"
              >
                <div>
                  <label className="block font-bold text-slate-700 mb-1">Dog Breed</label>
                  <select
                    value={breed}
                    onChange={(e) => setBreed(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold rounded-xl p-2.5 focus:ring-2 focus:ring-[#D2691E] focus:outline-none cursor-pointer"
                  >
                    <option value="indie">Indian Pariah (Indie) — 15% Off</option>
                    <option value="labrador">Labrador Retriever</option>
                    <option value="golden">Golden Retriever</option>
                    <option value="beagle">Beagle</option>
                    <option value="gsd">German Shepherd</option>
                    <option value="shihtzu">Shih Tzu / Toy Breed</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Dog Age</label>
                  <select
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold rounded-xl p-2.5 focus:ring-2 focus:ring-[#D2691E] focus:outline-none cursor-pointer"
                  >
                    <option value="puppy">Puppy (2 – 12 months)</option>
                    <option value="adult">Adult (1 – 6 years)</option>
                    <option value="senior">Senior (7+ years)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Desired Sum Insured</label>
                  <select
                    value={cover}
                    onChange={(e) => setCover(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold rounded-xl p-2.5 focus:ring-2 focus:ring-[#D2691E] focus:outline-none cursor-pointer"
                  >
                    <option value="50k">₹50,000 Cover</option>
                    <option value="200k">₹2,00,000 Cover (Popular)</option>
                    <option value="500k">₹5,00,000 Cover (Full Hospital)</option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">City</label>
                  <select
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full bg-slate-50 border border-slate-200 text-slate-800 font-semibold rounded-xl p-2.5 focus:ring-2 focus:ring-[#D2691E] focus:outline-none cursor-pointer"
                  >
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi NCR</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="pune">Pune</option>
                    <option value="other">Other Indian City</option>
                  </select>
                </div>

                {/* Live Calculated Price */}
                <div className="bg-amber-50 p-3.5 rounded-2xl border border-amber-200 text-center space-y-1 mt-2">
                  <span className="text-[11px] font-semibold text-slate-500 uppercase block">Estimated Monthly Premium</span>
                  <p className="font-extrabold text-2xl text-[#D2691E]">
                    ₹{estimatedPrice} <span className="text-xs text-slate-500 font-normal">/ month</span>
                  </p>
                  <p className="text-[10px] text-emerald-700 font-bold">Includes cashless clinic access &amp; 24/7 tele-vet</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D2691E] hover:bg-[#B35310] text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all cursor-pointer"
                >
                  Send Instant PDF Quote
                </button>
              </form>
            </div>

            {/* WIDGET 2: Speak to Advisor */}
            <div className="bg-gradient-to-br from-[#2A170C] to-amber-950 text-white rounded-3xl p-6 shadow-xl space-y-4">
              <div className="flex items-center gap-3">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
                  alt="Insurance Advisor"
                  className="w-12 h-12 rounded-full object-cover border-2 border-amber-400"
                />
                <div>
                  <h4 className="font-bold text-sm text-white">Need help choosing a plan?</h4>
                  <p className="text-[11px] text-amber-200">Free 15-min phone consultation</p>
                </div>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                Our certified pet insurance advisors help you compare exclusions and fine print across all 7 Indian providers.
              </p>
              <button
                onClick={() => showToast('Calling DodoDoggy Pet Advisor line: 1800-200-DODO...')}
                className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold text-xs py-3 rounded-xl shadow transition-colors flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>📞 Talk to Pet Insurance Advisor</span>
              </button>
            </div>

            {/* WIDGET 3: Trending Articles */}
            <div className="bg-white rounded-3xl p-6 border border-slate-200/80 shadow-sm space-y-4">
              <h3 className="font-bold text-base text-slate-900 border-b border-slate-100 pb-2">
                Trending Pet Health Articles
              </h3>

              <div className="space-y-3 text-xs">
                <a href="/#blog" className="flex gap-3 items-center group">
                  <img
                    src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=120&q=80"
                    alt="Monsoon skin care"
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-[#D2691E] transition-colors leading-snug">
                      Monsoon Skin Care &amp; Tick Prevention Routines
                    </h4>
                    <span className="text-[10px] text-slate-400 mt-1 block">4 min read</span>
                  </div>
                </a>

                <a href="/#blog" className="flex gap-3 items-center group">
                  <img
                    src="https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=120&q=80"
                    alt="Dog food guide"
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-[#D2691E] transition-colors leading-snug">
                      Homemade vs Commercial Dog Food in India
                    </h4>
                    <span className="text-[10px] text-slate-400 mt-1 block">6 min read</span>
                  </div>
                </a>

                <a href="/#tools" className="flex gap-3 items-center group">
                  <img
                    src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=120&q=80"
                    alt="Vaccine schedule"
                    className="w-14 h-14 rounded-xl object-cover shrink-0"
                  />
                  <div>
                    <h4 className="font-bold text-slate-800 group-hover:text-[#D2691E] transition-colors leading-snug">
                      Essential Vaccination Timeline for Indian Puppies
                    </h4>
                    <span className="text-[10px] text-slate-400 mt-1 block">3 min read</span>
                  </div>
                </a>
              </div>
            </div>
          </aside>
        </div>
      </main>

      {/* 7. FOOTER */}
      <Footer />

      {/* QUOTE MODAL */}
      {quoteModalProvider && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 text-slate-800 space-y-4">
            <button
              onClick={() => setQuoteModalProvider(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-xl font-bold p-2 cursor-pointer"
            >
              ✕
            </button>
            <div className="space-y-4">
              <span className="text-3xl">🛡️</span>
              <h3 className="font-extrabold text-xl text-slate-900">Request Quote for {quoteModalProvider}</h3>
              <p className="text-xs text-slate-600">
                Get official policy brochure and instant discount quote sent directly to your WhatsApp or Email.
              </p>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setQuoteModalProvider(null);
                  showToast('Quote sent successfully to your WhatsApp!');
                }}
                className="space-y-3 text-xs"
              >
                <div>
                  <label className="font-bold text-slate-700 block mb-1">Your Dog&apos;s Name &amp; Breed</label>
                  <input
                    type="text"
                    placeholder="e.g. Bruno (Labrador)"
                    required
                    className="w-full bg-slate-50 border p-2.5 rounded-xl font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">WhatsApp Mobile Number</label>
                  <input
                    type="tel"
                    placeholder="+91 98765 43210"
                    required
                    className="w-full bg-slate-50 border p-2.5 rounded-xl font-medium"
                  />
                </div>
                <div>
                  <label className="font-bold text-slate-700 block mb-1">City</label>
                  <input
                    type="text"
                    placeholder="e.g. Mumbai / Delhi / Bengaluru"
                    required
                    className="w-full bg-slate-50 border p-2.5 rounded-xl font-medium"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#D2691E] text-white font-bold text-xs py-3 rounded-xl shadow cursor-pointer hover:bg-[#B35310] transition-colors"
                >
                  Send Instant Quote PDF
                </button>
              </form>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}
      {toastMessage && (
        <div className="fixed bottom-5 right-5 bg-slate-900 text-white text-xs font-semibold px-4 py-3 rounded-xl shadow-2xl border border-slate-700 z-50">
          {toastMessage}
        </div>
      )}
    </div>
  );
}
