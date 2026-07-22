'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ServiceCard } from '@/components/ServiceCard';
import { CityCard } from '@/components/CityCard';
import { ReviewCard } from '@/components/ReviewCard';
import { BlogCard } from '@/components/BlogCard';

export default function HomePage() {
  const [toastMessage, setToastMessage] = useState<string | null>(null);
  const [modalType, setModalType] = useState<string | null>(null);
  const [savedItems, setSavedItems] = useState<Record<string, boolean>>({});

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 3000);
  };

  const toggleSave = (id: string) => {
    setSavedItems((prev) => {
      const nextState = !prev[id];
      if (nextState) showToast('Saved to your favorites!');
      else showToast('Removed from saved items.');
      return { ...prev, [id]: nextState };
    });
  };

  const scrollToSearch = () => {
    const el = document.getElementById('search-box-anchor');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const servicesList = [
    { title: 'Veterinarians', count: '1,240+ verified', icon: '🩺', tag: 'Popular', img: 'https://images.unsplash.com/photo-1628009368231-7bb7cfcb0def?auto=format&fit=crop&w=500&q=80' },
    { title: 'Dog Groomers', count: '850+ verified', icon: '✂️', img: 'https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?auto=format&fit=crop&w=500&q=80' },
    { title: 'Pet Stores', count: '620+ verified', icon: '🦴', img: 'https://images.unsplash.com/photo-1601758228041-f3b2795255f1?auto=format&fit=crop&w=500&q=80' },
    { title: 'Dog Boarding', count: '430+ verified', icon: '🏡', img: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=500&q=80' },
    { title: 'Dog Trainers', count: '310+ verified', icon: '🎓', img: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=500&q=80' },
    { title: 'Specialty Care', count: '520+ verified', icon: '🐕‍🦺', img: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=500&q=80' },
  ];

  const citiesList = [
    { name: 'Mumbai', count: '480+ listings', img: 'https://images.unsplash.com/photo-1570168007204-dfb528c6958f?auto=format&fit=crop&w=400&q=80' },
    { name: 'Delhi NCR', count: '520+ listings', img: 'https://images.unsplash.com/photo-1587474260584-136574528ed5?auto=format&fit=crop&w=400&q=80' },
    { name: 'Bengaluru', count: '450+ listings', img: 'https://images.unsplash.com/photo-1596176530529-78163a4f7af2?auto=format&fit=crop&w=400&q=80' },
    { name: 'Pune', count: '290+ listings', img: 'https://images.unsplash.com/photo-1567157577867-05ccb1388e66?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chennai', count: '260+ listings', img: 'https://images.unsplash.com/photo-1582510003544-4d00b7f74220?auto=format&fit=crop&w=400&q=80' },
    { name: 'Hyderabad', count: '310+ listings', img: 'https://images.unsplash.com/photo-1605379399642-870262d3d051?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kolkata', count: '220+ listings', img: 'https://images.unsplash.com/photo-1558431382-27e303142255?auto=format&fit=crop&w=400&q=80' },
    { name: 'Ahmedabad', count: '190+ listings', img: 'https://images.unsplash.com/photo-1609137144813-7d9921338f24?auto=format&fit=crop&w=400&q=80' },
    { name: 'Jaipur', count: '180+ listings', img: 'https://images.unsplash.com/photo-1599661046289-e31897846e41?auto=format&fit=crop&w=400&q=80' },
    { name: 'Lucknow', count: '160+ listings', img: 'https://images.unsplash.com/photo-1627894483216-2138af692e32?auto=format&fit=crop&w=400&q=80' },
    { name: 'Chandigarh', count: '150+ listings', img: 'https://images.unsplash.com/photo-1590050752117-238cb0fb12b1?auto=format&fit=crop&w=400&q=80' },
    { name: 'Kochi', count: '140+ listings', img: 'https://images.unsplash.com/photo-1602216056096-3b40cc0c9944?auto=format&fit=crop&w=400&q=80' },
  ];

  const reviewsList = [
    { id: 'r1', name: "Dr. Sharma's Pet Care Hospital", loc: 'Bandra West, Mumbai', badge: 'Vet Clinic', rating: '4.9', reviews: 142, quote: '"Dr. Sharma saved my Beagle Pluto during a midnight gastric emergency. Compassionate staff & 24/7 ICU!"', author: 'Ananya R. · Beagle owner', img: 'https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=150&q=80' },
    { id: 'r2', name: 'Pawfect Grooming Lounge', loc: 'Indiranagar, Bengaluru', badge: 'Grooming', rating: '4.8', reviews: 98, quote: '"Gentle de-shedding spa for my Golden Retriever. Zero stress, organic shampoos, lovely seasonal bandanas!"', author: 'Vikram M. · Golden owner', img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=150&q=80' },
    { id: 'r3', name: 'TailWaggers Eco Boarding', loc: 'Gurugram, Delhi NCR', badge: 'Boarding', rating: '4.9', reviews: 210, quote: '"Spacious grass play areas and regular WhatsApp video updates. My Indie treats it like his annual luxury vacation!"', author: 'Priya S. · Indie Mix owner', img: 'https://images.unsplash.com/photo-1541599540903-216a46ca1dc0?auto=format&fit=crop&w=150&q=80' },
    { id: 'r4', name: 'Canine Genius Academy', loc: 'Koregaon Park, Pune', badge: 'Training', rating: '5.0', reviews: 76, quote: '"Positive reinforcement training completely solved my Labrador\'s leash pulling & reactivity in just 4 sessions!"', author: 'Rohan K. · Labrador owner', img: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=150&q=80' },
  ];

  const articlesList = [
    { tag: 'Insurance', title: 'Pet Insurance in India 2026: Coverage, Cost & Top 7 Providers Reviewed', read: '5 min read', desc: 'A comprehensive breakdown of medical coverage, cashless networks, and pre-existing condition terms.', img: 'https://images.unsplash.com/photo-1544568100-847a948585b9?auto=format&fit=crop&w=500&q=80' },
    { tag: 'Health & Care', title: 'Monsoon Skin Care Routine for Dogs: Preventing Fungal Infections & Ticks', read: '4 min read', desc: 'Keep your dog\'s paws and coat dry during rain spells with vet-tested preventive routines.', img: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=500&q=80' },
    { tag: 'Nutrition', title: 'Homemade vs Commercial Dog Food in India: Vet-Approved Meal Plans', read: '6 min read', desc: 'Balancing rice, chicken, veggies, and essential calcium supplements for healthy weight.', img: 'https://images.unsplash.com/photo-1589924691995-400dc9ecc119?auto=format&fit=crop&w=500&q=80' },
  ];

  return (
    <div className="antialiased min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C221E] font-sans">
      
      {/* 1. THIN TOP BAR */}
      <TopBar />

      {/* 2. HEADER */}
      <Header onSearchClick={scrollToSearch} />

      {/* 3. HERO SECTION */}
      <section className="relative bg-slate-900 text-white min-h-[540px] flex items-center justify-center py-16 px-4 overflow-hidden">
        <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=2000&q=80" alt="Happy dog with vet" className="absolute inset-0 w-full h-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/80 to-slate-950/90"></div>

        <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
          <div className="space-y-3">
            <span className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-bold tracking-wider uppercase backdrop-blur-md">
              🐕 Verified Pet Care Across India
            </span>
            <h1 className="font-extrabold text-3xl sm:text-5xl md:text-6xl tracking-tight text-white leading-tight">
              Find the best care for your dog
            </h1>
            <p className="text-slate-200 text-base sm:text-lg max-w-2xl mx-auto font-normal leading-relaxed">
              Discover top-rated veterinarians, certified groomers, trusted dog boarding resorts, and expert trainers in your neighborhood.
            </p>
          </div>

          <div id="search-box-anchor" className="bg-white/95 p-3 sm:p-4 rounded-2xl shadow-2xl backdrop-blur-md border border-white/20 max-w-3xl mx-auto text-slate-800">
            <form onSubmit={(e) => { e.preventDefault(); showToast('Searching directory for matching dog care places...'); }} className="grid grid-cols-1 md:grid-cols-12 gap-2.5">
              <div className="md:col-span-4 relative">
                <select className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3.5 py-3 pr-8 focus:ring-2 focus:ring-[#D2691E] focus:outline-none appearance-none cursor-pointer">
                  <option value="">All Services</option>
                  <option value="vets">Veterinarians (Vets)</option>
                  <option value="groomers">Dog Groomers</option>
                  <option value="boarding">Dog Boarding</option>
                  <option value="trainers">Dog Trainers</option>
                  <option value="stores">Pet Stores</option>
                </select>
                <span className="absolute right-3 top-3.5 pointer-events-none text-slate-400">▾</span>
              </div>

              <div className="md:col-span-4 relative">
                <select className="w-full bg-slate-50 border border-slate-200 text-slate-800 text-sm font-semibold rounded-xl px-3.5 py-3 pr-8 focus:ring-2 focus:ring-[#D2691E] focus:outline-none appearance-none cursor-pointer">
                  <option value="">All Cities</option>
                  <option value="mumbai">Mumbai</option>
                  <option value="delhi">Delhi NCR</option>
                  <option value="bengaluru">Bengaluru</option>
                  <option value="pune">Pune</option>
                  <option value="chennai">Chennai</option>
                  <option value="hyderabad">Hyderabad</option>
                  <option value="kolkata">Kolkata</option>
                  <option value="ahmedabad">Ahmedabad</option>
                  <option value="jaipur">Jaipur</option>
                  <option value="lucknow">Lucknow</option>
                  <option value="chandigarh">Chandigarh</option>
                  <option value="kochi">Kochi</option>
                </select>
                <span className="absolute right-3 top-3.5 pointer-events-none text-slate-400">▾</span>
              </div>

              <div className="md:col-span-4">
                <button type="submit" className="w-full h-full bg-[#D2691E] hover:bg-[#B35310] text-white font-bold py-3 px-6 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2 cursor-pointer">
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"/></svg>
                  <span>Search Services</span>
                </button>
              </div>
            </form>
          </div>

          <div className="pt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center max-w-3xl mx-auto border-t border-white/10 mt-6">
            <div className="p-2">
              <p className="font-extrabold text-2xl sm:text-3xl text-amber-400">3,457+</p>
              <p className="text-xs text-slate-300 font-medium">places to find</p>
            </div>
            <div className="p-2">
              <p className="font-extrabold text-2xl sm:text-3xl text-amber-400">33K+</p>
              <p className="text-xs text-slate-300 font-medium">pet parent reviews</p>
            </div>
            <div className="p-2">
              <p className="font-extrabold text-2xl sm:text-3xl text-amber-400">12</p>
              <p className="text-xs text-slate-300 font-medium">cities covered</p>
            </div>
            <div className="p-2">
              <p className="font-extrabold text-2xl sm:text-3xl text-amber-400">826</p>
              <p className="text-xs text-slate-300 font-medium">insurance quotes</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. TWO-COLUMN LAYOUT */}
      <main className="max-w-7xl mx-auto px-4 py-12 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">

          {/* LEFT COLUMN */}
          <div className="lg:col-span-8 space-y-14">

            {/* a) "Find services" */}
            <section id="services">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Directory Categories</span>
                  <h2 className="font-bold text-2xl sm:text-3xl text-slate-900">Find services for your dog</h2>
                </div>
                <a href="#services" className="text-xs font-bold text-[#D2691E] hover:underline flex items-center gap-1">View all <span>→</span></a>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {servicesList.map((item, idx) => (
                  <ServiceCard
                    key={idx}
                    title={item.title}
                    count={item.count}
                    icon={item.icon}
                    img={item.img}
                    tag={item.tag}
                    onClick={() => {
                      showToast(`Loaded ${item.title} directory listings`);
                      scrollToSearch();
                    }}
                  />
                ))}
              </div>
            </section>

            {/* b) "Select your city" */}
            <section id="cities">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Coverage Across India</span>
                  <h2 className="font-bold text-2xl sm:text-3xl text-slate-900">Select your city</h2>
                </div>
                <span className="text-xs font-semibold text-slate-500">12 Tier-1 &amp; Tier-2 Hubs</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3.5">
                {citiesList.map((city, idx) => (
                  <CityCard
                    key={idx}
                    name={city.name}
                    count={city.count}
                    img={city.img}
                    onClick={() => {
                      showToast(`Selected city: ${city.name}`);
                      scrollToSearch();
                    }}
                  />
                ))}
              </div>
            </section>

            {/* c) "Top-rated near you" */}
            <section id="reviews">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Community Feedback</span>
                  <h2 className="font-bold text-2xl sm:text-3xl text-slate-900">Top-rated near you</h2>
                </div>
                <span className="text-xs font-semibold text-slate-500">Verified Parent Reviews</span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {reviewsList.map((card) => (
                  <ReviewCard
                    key={card.id}
                    id={card.id}
                    name={card.name}
                    loc={card.loc}
                    badge={card.badge}
                    rating={card.rating}
                    reviews={card.reviews}
                    quote={card.quote}
                    author={card.author}
                    img={card.img}
                    isSaved={!!savedItems[card.id]}
                    onToggleSave={toggleSave}
                  />
                ))}
              </div>
            </section>

            {/* d) "From the blog" */}
            <section id="blog">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Pet Care Knowledge</span>
                  <h2 className="font-bold text-2xl sm:text-3xl text-slate-900">From the blog</h2>
                </div>
                <a href="#blog" className="text-xs font-bold text-[#D2691E] hover:underline flex items-center gap-1">Read all articles <span>→</span></a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
                {articlesList.map((art, idx) => (
                  <BlogCard
                    key={idx}
                    tag={art.tag}
                    title={art.title}
                    read={art.read}
                    desc={art.desc}
                    img={art.img}
                  />
                ))}
              </div>
            </section>

            {/* e) "Calculators for dog parents" */}
            <section id="tools">
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Free Parent Utilities</span>
                  <h2 className="font-bold text-2xl sm:text-3xl text-slate-900">Calculators for dog parents</h2>
                </div>
                <span className="text-xs font-semibold text-[#D2691E]">Interactive Tools</span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {[
                  { type: 'breed', title: 'Breed Finder', desc: 'Find the ideal dog breed suited for Indian weather, apartment size, and family lifestyle.', icon: '🔍' },
                  { type: 'food', title: 'Food Calculator', desc: 'Calculate precise daily kibble & homemade meal portion sizes based on weight and activity.', icon: '🥣' },
                  { type: 'vaccine', title: 'Vaccine Tracker', desc: 'Schedule & track mandatory DHPP, Rabies, & Kennel Cough vaccination dates.', icon: '💉' },
                  { type: 'weight', title: 'Weight Tracker', desc: 'Monitor healthy growth curves and Body Condition Score against breed standard averages.', icon: '⚖️' },
                ].map((tool) => (
                  <div key={tool.type} onClick={() => setModalType(tool.type)} className="bg-white rounded-2xl p-4 border border-slate-100 shadow-sm hover:shadow-md transition-all cursor-pointer group flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-amber-100 text-[#D2691E] flex items-center justify-center shrink-0 group-hover:bg-[#D2691E] group-hover:text-white transition-colors">
                      <span className="text-2xl">{tool.icon}</span>
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#D2691E] transition-colors flex items-center gap-1">
                        {tool.title}
                        <span className="text-xs text-[#D2691E] font-normal">→</span>
                      </h3>
                      <p className="text-xs text-slate-500 mt-1 leading-relaxed">
                        {tool.desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* f) "Search by city" SEO links */}
            <section className="bg-amber-900/5 rounded-3xl p-6 border border-amber-900/10">
              <div className="mb-4">
                <span className="text-xs font-extrabold tracking-widest text-[#D2691E] uppercase block">Popular Searches</span>
                <h2 className="font-bold text-xl text-slate-900">Search by city</h2>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-x-6 gap-y-2 text-xs text-slate-600">
                <div className="space-y-2">
                  <a href="#mumbai" className="block hover:text-[#D2691E] transition-colors">• Dog boarding in Mumbai</a>
                  <a href="#delhi" className="block hover:text-[#D2691E] transition-colors">• Dog groomers in Delhi NCR</a>
                  <a href="#bengaluru" className="block hover:text-[#D2691E] transition-colors">• Vets in Bengaluru</a>
                  <a href="#pune" className="block hover:text-[#D2691E] transition-colors">• Dog trainers in Pune</a>
                  <a href="#chennai" className="block hover:text-[#D2691E] transition-colors">• Pet stores in Chennai</a>
                  <a href="#hyderabad" className="block hover:text-[#D2691E] transition-colors">• Dog boarding in Hyderabad</a>
                </div>
                <div className="space-y-2">
                  <a href="#kolkata" className="block hover:text-[#D2691E] transition-colors">• Dog groomers in Kolkata</a>
                  <a href="#ahmedabad" className="block hover:text-[#D2691E] transition-colors">• Vets in Ahmedabad</a>
                  <a href="#jaipur" className="block hover:text-[#D2691E] transition-colors">• Dog trainers in Jaipur</a>
                  <a href="#lucknow" className="block hover:text-[#D2691E] transition-colors">• Dog boarding in Lucknow</a>
                  <a href="#chandigarh" className="block hover:text-[#D2691E] transition-colors">• Vets in Chandigarh</a>
                  <a href="#kochi" className="block hover:text-[#D2691E] transition-colors">• Dog groomers in Kochi</a>
                </div>
                <div className="space-y-2">
                  <a href="#mumbai-emergency" className="block hover:text-[#D2691E] transition-colors">• Emergency 24/7 vets in Mumbai</a>
                  <a href="#delhi-groomers" className="block hover:text-[#D2691E] transition-colors">• Mobile groomers in Delhi</a>
                  <a href="#bengaluru-daycare" className="block hover:text-[#D2691E] transition-colors">• Dog daycares in Bengaluru</a>
                  <a href="#pune-puppy" className="block hover:text-[#D2691E] transition-colors">• Puppy trainers in Pune</a>
                  <a href="#chennai-clinics" className="block hover:text-[#D2691E] transition-colors">• Pet clinics in Chennai</a>
                  <a href="#hyderabad-kennels" className="block hover:text-[#D2691E] transition-colors">• Luxury kennels in Hyderabad</a>
                </div>
                <div className="space-y-2">
                  <a href="#kolkata-salons" className="block hover:text-[#D2691E] transition-colors">• Dog spa salons in Kolkata</a>
                  <a href="#ahmedabad-hospitals" className="block hover:text-[#D2691E] transition-colors">• Vet hospitals in Ahmedabad</a>
                  <a href="#jaipur-agility" className="block hover:text-[#D2691E] transition-colors">• Agility trainers in Jaipur</a>
                  <a href="#lucknow-boarding" className="block hover:text-[#D2691E] transition-colors">• Pet boarding in Lucknow</a>
                  <a href="#chandigarh-spa" className="block hover:text-[#D2691E] transition-colors">• Pet spa in Chandigarh</a>
                  <a href="#kochi-walkers" className="block hover:text-[#D2691E] transition-colors">• Dog walkers in Kochi</a>
                </div>
              </div>
            </section>

            {/* g) Promo Banner */}
            <section className="bg-gradient-to-r from-amber-900 to-[#2A170C] rounded-3xl overflow-hidden shadow-xl text-white p-6 sm:p-8 relative">
              <div className="grid grid-cols-1 sm:grid-cols-12 gap-6 items-center">
                <div className="sm:col-span-5 relative h-48 sm:h-full rounded-2xl overflow-hidden border-2 border-amber-500/30">
                  <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80" alt="Dog with owner" className="w-full h-full object-cover" />
                </div>
                <div className="sm:col-span-7 space-y-4">
                  <span className="inline-block bg-amber-500/20 text-amber-300 border border-amber-400/30 text-[11px] font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                    Shield Your Dog&apos;s Health
                  </span>
                  <h3 className="font-extrabold text-2xl sm:text-3xl text-white leading-tight">
                    Compare pet insurance from 7 providers in India
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    Save up to 35% on annual premiums. Covers surgeries, tick fever treatments, accidental injuries, and 24/7 video consultations.
                  </p>
                  <div className="pt-2">
                    <button onClick={() => setModalType('insurance')} className="bg-[#D2691E] hover:bg-amber-600 text-white font-bold text-xs sm:text-sm px-6 py-3 rounded-xl shadow-lg transition-transform transform hover:-translate-y-0.5 inline-flex items-center gap-2 cursor-pointer">
                      <span>See the study &amp; compare quotes</span>
                      <span>→</span>
                    </button>
                  </div>
                </div>
              </div>
            </section>

          </div>

          {/* RIGHT COLUMN (Sticky Sidebar) */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">

            {/* a) Search Widget */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-3">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span>🔍</span> Quick Search Widget
                </h3>
                <span className="text-[10px] font-bold text-amber-800 bg-amber-50 px-2 py-0.5 rounded-full">3,400+ Places</span>
              </div>

              <div className="space-y-2.5">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Keyword</label>
                  <input type="text" placeholder="e.g. Grooming, Dr. Gupta, Kennel..." className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-xl p-2.5 focus:ring-2 focus:ring-[#D2691E] focus:outline-none" />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Service Type</label>
                  <select className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-xl p-2.5 focus:ring-2 focus:ring-[#D2691E] focus:outline-none">
                    <option value="">Select Service</option>
                    <option value="vet">Veterinary Clinic</option>
                    <option value="groomer">Grooming Spa</option>
                    <option value="boarding">Pet Resort / Boarding</option>
                    <option value="trainer">K9 Trainer</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">City</label>
                  <select className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-xl p-2.5 focus:ring-2 focus:ring-[#D2691E] focus:outline-none">
                    <option value="">Select City</option>
                    <option value="mumbai">Mumbai</option>
                    <option value="delhi">Delhi NCR</option>
                    <option value="bengaluru">Bengaluru</option>
                    <option value="pune">Pune</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-slate-600 mb-1">Min Rating</label>
                  <select className="w-full bg-slate-50 border border-slate-200 text-xs text-slate-800 rounded-xl p-2.5 focus:ring-2 focus:ring-[#D2691E] focus:outline-none">
                    <option value="4.5">★ 4.5 &amp; above</option>
                    <option value="4.0">★ 4.0 &amp; above</option>
                  </select>
                </div>
                <button onClick={() => showToast('Finding top matching listings...')} className="w-full bg-[#D2691E] hover:bg-[#B35310] text-white font-bold text-xs py-3 rounded-xl shadow-md transition-all cursor-pointer">
                  Find Matching Places
                </button>
              </div>
            </div>

            {/* b) "This week's top rated" */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                  <span>🏆</span> This week&apos;s top rated
                </h3>
                <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-full">Updated Today</span>
              </div>

              <div className="space-y-3">
                {[
                  { rank: '1', name: 'MaxVets 24/7 Emergency', loc: 'GK-1, Delhi NCR', rating: '🐾 4.9', reviews: 340, bg: 'bg-amber-500 text-white' },
                  { rank: '2', name: 'Fluffy Tails Grooming Spa', loc: 'Jubilee Hills, Hyd', rating: '🐾 4.9', reviews: 210, bg: 'bg-slate-300 text-slate-800' },
                  { rank: '3', name: 'Happy Paws Resort', loc: 'Whitefield, Bengaluru', rating: '🐾 4.8', reviews: 185, bg: 'bg-amber-700/20 text-amber-800' },
                  { rank: '4', name: 'Pawsitive K9 Training', loc: 'Alwarpet, Chennai', rating: '🐾 4.8', reviews: 120, bg: 'bg-slate-100 text-slate-600' },
                ].map((item) => (
                  <div key={item.rank} className="flex items-center justify-between p-2.5 rounded-xl hover:bg-amber-50/60 transition-colors border border-slate-100">
                    <div className="flex items-center gap-3">
                      <span className={`w-7 h-7 rounded-full font-extrabold text-xs flex items-center justify-center shrink-0 ${item.bg}`}>
                        {item.rank}
                      </span>
                      <div>
                        <h4 className="font-bold text-xs text-slate-900 leading-tight">{item.name}</h4>
                        <p className="text-[10px] text-slate-500">{item.loc}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <span className="text-xs font-bold text-amber-900 block">{item.rating}</span>
                      <span className="text-[10px] text-slate-400">({item.reviews})</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* c) Orange Insurance CTA Card */}
            <div className="bg-gradient-to-br from-[#D2691E] to-[#A3460A] text-white rounded-2xl p-5 shadow-lg space-y-3 relative overflow-hidden">
              <div className="relative z-10 space-y-2">
                <span className="text-[10px] font-extrabold uppercase tracking-wider bg-white/20 px-2 py-0.5 rounded text-amber-100">
                  Dog Health Plan
                </span>
                <h3 className="font-extrabold text-xl leading-tight">Is your dog insured?</h3>
                <p className="text-xs text-amber-100 leading-relaxed">
                  Medical care in tier-1 cities can cost up to ₹50,000 per emergency stay. Get covered now.
                </p>
                <ul className="text-xs space-y-1.5 pt-1 text-white/90">
                  <li className="flex items-center gap-1.5"><span className="text-amber-300 font-bold">✓</span> Up to ₹1,500,000 medical limit</li>
                  <li className="flex items-center gap-1.5"><span className="text-amber-300 font-bold">✓</span> 24/7 Instant Tele-Vet Access</li>
                  <li className="flex items-center gap-1.5"><span className="text-amber-300 font-bold">✓</span> Cashless claims at 1,200+ clinics</li>
                </ul>
                <button onClick={() => setModalType('insurance')} className="w-full mt-2 bg-white text-[#D2691E] hover:bg-amber-50 font-bold text-xs py-2.5 rounded-xl shadow transition-colors cursor-pointer">
                  Get Free Quote
                </button>
              </div>
            </div>

            {/* d) "Save money on your dog" */}
            <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm space-y-3">
              <h3 className="font-bold text-slate-900 text-base flex items-center gap-2">
                <span>💡</span> Save money on your dog
              </h3>
              <div className="space-y-2.5 text-xs">
                {[
                  { title: 'Complete Guide to Annual Vet Costs in India', save: 'Save ₹4,500/yr' },
                  { title: 'DIY Grooming vs Professional Salons', save: 'Save ₹6,000/yr' },
                  { title: 'Bulk Buying Dog Food & Treats', save: 'Save ₹3,200/yr' },
                  { title: 'Preventative Healthcare & Tick Treatments', save: 'Save ₹2,800/yr' },
                ].map((guide, idx) => (
                  <a key={idx} href="#guide" onClick={() => showToast(`Opening guide: ${guide.title}`)} className="group flex items-start justify-between gap-2 p-2 rounded-xl hover:bg-amber-50 transition-colors border border-slate-100">
                    <span className="font-semibold text-slate-800 group-hover:text-[#D2691E] transition-colors leading-snug">
                      {guide.title}
                    </span>
                    <span className="bg-emerald-100 text-emerald-800 font-extrabold text-[10px] px-2 py-0.5 rounded-md shrink-0">
                      {guide.save}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            {/* e) Recommended Read */}
            <div className="bg-white rounded-2xl p-4 border border-slate-200/80 shadow-sm space-y-2">
              <span className="text-[10px] font-bold text-amber-800 uppercase tracking-wider block">Recommended Read</span>
              <div className="flex items-center gap-3">
                <img src="https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=200&q=80" alt="Monsoon care" className="w-16 h-16 rounded-xl object-cover shrink-0" />
                <div className="space-y-1">
                  <h4 className="font-bold text-xs text-slate-900 leading-snug hover:text-[#D2691E] cursor-pointer">
                    Top 10 Monsoon Care Tips for Indian Dogs
                  </h4>
                  <span className="text-[10px] font-medium text-slate-400 block">3 min read</span>
                </div>
              </div>
            </div>

          </aside>

        </div>
      </main>

      {/* 5. FOOTER */}
      <Footer />

      {/* MODAL */}
      {modalType && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-lg w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 text-slate-800 space-y-4">
            <button onClick={() => setModalType(null)} className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-xl font-bold p-2 cursor-pointer">✕</button>
            
            {modalType === 'breed' && (
              <div className="space-y-4">
                <span className="text-3xl">🔍</span>
                <h3 className="font-extrabold text-xl text-slate-900">Dog Breed Finder India</h3>
                <p className="text-xs text-slate-600">Discover the best dog breed suited for your home environment.</p>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">1. Your Living Space</label>
                    <select className="w-full bg-slate-50 border p-2.5 rounded-xl font-medium"><option>1BHK / 2BHK Apartment (Mumbai/Blr)</option><option>Independent House with Yard</option></select>
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">2. City Climate</label>
                    <select className="w-full bg-slate-50 border p-2.5 rounded-xl font-medium"><option>Hot &amp; Humid (Mumbai/Chennai)</option><option>Extreme Summer/Winter (Delhi)</option></select>
                  </div>
                </div>
                <button onClick={() => { setModalType(null); showToast('Top Match: Golden Retriever & Indie Dog!'); }} className="w-full bg-[#D2691E] text-white font-bold text-xs py-3 rounded-xl shadow cursor-pointer">
                  Calculate Best Matches
                </button>
              </div>
            )}

            {modalType === 'food' && (
              <div className="space-y-4">
                <span className="text-3xl">🥣</span>
                <h3 className="font-extrabold text-xl text-slate-900">Food Portion Calculator</h3>
                <p className="text-xs text-slate-600">Get daily food portion weight recommendations.</p>
                <div className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Dog Weight (kg)</label>
                    <input type="number" defaultValue={15} className="w-full bg-slate-50 border p-2.5 rounded-xl font-medium" />
                  </div>
                </div>
                <button onClick={() => { setModalType(null); showToast('Recommended: 240g kibble/day divided in 2 meals.'); }} className="w-full bg-emerald-600 text-white font-bold text-xs py-3 rounded-xl shadow cursor-pointer">
                  Calculate Portion
                </button>
              </div>
            )}

            {modalType === 'vaccine' && (
              <div className="space-y-4">
                <span className="text-3xl">💉</span>
                <h3 className="font-extrabold text-xl text-slate-900">Vaccine Tracker &amp; Schedule</h3>
                <p className="text-xs text-slate-600">Essential vaccination timeline for dogs in India.</p>
                <div className="space-y-2 text-xs">
                  <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl">• 6-8 Weeks: DHPP 1st Shot</div>
                  <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl">• 12 Weeks: Rabies 1st Shot</div>
                  <div className="p-2.5 bg-blue-50 border border-blue-200 rounded-xl">• Annual: Anti-Rabies &amp; 9-in-1 Booster</div>
                </div>
                <button onClick={() => { setModalType(null); showToast('Reminders downloaded successfully!'); }} className="w-full bg-blue-600 text-white font-bold text-xs py-3 rounded-xl shadow cursor-pointer">
                  Download Schedule
                </button>
              </div>
            )}

            {modalType === 'weight' && (
              <div className="space-y-4">
                <span className="text-3xl">⚖️</span>
                <h3 className="font-extrabold text-xl text-slate-900">Weight &amp; Growth Tracker</h3>
                <p className="text-xs text-slate-600">Compare weight against breed standard curves.</p>
                <button onClick={() => { setModalType(null); showToast('Growth curve status: Healthy & Ideal weight!'); }} className="w-full bg-purple-600 text-white font-bold text-xs py-3 rounded-xl shadow cursor-pointer">
                  Analyze Growth
                </button>
              </div>
            )}

            {modalType === 'insurance' && (
              <div className="space-y-4">
                <span className="text-3xl">🛡️</span>
                <h3 className="font-extrabold text-xl text-slate-900">Compare Pet Insurance Quotes</h3>
                <p className="text-xs text-slate-600">Free quotes from top providers in India.</p>
                <form onSubmit={(e) => { e.preventDefault(); setModalType(null); showToast('Quotes sent to your WhatsApp!'); }} className="space-y-3 text-xs">
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Dog Breed</label>
                    <input type="text" placeholder="e.g. Beagle, Labrador, Indie..." required className="w-full bg-slate-50 border p-2.5 rounded-xl font-medium" />
                  </div>
                  <div>
                    <label className="font-bold text-slate-700 block mb-1">Mobile Number</label>
                    <input type="tel" placeholder="+91 98765 43210" required className="w-full bg-slate-50 border p-2.5 rounded-xl font-medium" />
                  </div>
                  <button type="submit" className="w-full bg-[#D2691E] text-white font-bold text-xs py-3 rounded-xl shadow cursor-pointer">
                    Get Instant Quotes
                  </button>
                </form>
              </div>
            )}

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
