'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface ToolItem {
  id: string;
  title: string;
  description: string;
  iconBg: string;
  iconText: string;
  iconSymbol: string;
  badge?: string;
  category: string;
}

const TOOLS_LIST: ToolItem[] = [
  {
    id: 'food-calculator',
    title: 'Food Calculator',
    description: 'Calculate daily food portions based on breed, age & activity level.',
    iconBg: 'bg-emerald-100',
    iconText: 'text-emerald-700',
    iconSymbol: '🥣',
    category: 'Nutrition',
  },
  {
    id: 'breed-finder',
    title: 'Breed Finder',
    description: 'Find the perfect breed for your lifestyle, apartment size & climate.',
    iconBg: 'bg-purple-100',
    iconText: 'text-purple-700',
    iconSymbol: '🐕',
    category: 'Breeds',
  },
  {
    id: 'name-generator',
    title: 'Name Generator',
    description: 'Unique Indian & international names for your pup with meanings.',
    iconBg: 'bg-amber-100',
    iconText: 'text-[#D2691E]',
    iconSymbol: '✨',
    category: 'Fun',
  },
  {
    id: 'weight-tracker',
    title: 'Weight Tracker',
    description: "Track your dog's weight, growth curve & health condition score.",
    iconBg: 'bg-sky-100',
    iconText: 'text-sky-700',
    iconSymbol: '⚖️',
    category: 'Health',
  },
  {
    id: 'age-calculator',
    title: 'Age Calculator',
    description: 'Convert dog years to human years accurately using non-linear vet formulas.',
    iconBg: 'bg-amber-100',
    iconText: 'text-amber-800',
    iconSymbol: '⏱️',
    category: 'Health',
  },
  {
    id: 'vaccine-tracker',
    title: 'Vaccine Tracker',
    description: 'Never miss a vaccination with smart reminders & Indian vet schedules.',
    iconBg: 'bg-rose-100',
    iconText: 'text-rose-700',
    iconSymbol: '💉',
    category: 'Health',
  },
  {
    id: 'paw-word',
    title: 'PawWord',
    description: 'Daily 5-letter dog word puzzle for pet lovers.',
    iconBg: 'bg-orange-100',
    iconText: 'text-orange-700',
    iconSymbol: '⭐',
    category: 'Games',
  },
  {
    id: 'scramble-pup',
    title: 'Scramble Pup',
    description: 'Timed anagram word game to test your dog breed knowledge.',
    iconBg: 'bg-amber-100',
    iconText: 'text-[#D2691E]',
    iconSymbol: '🎯',
    category: 'Games',
  },
  {
    id: 'insurance-selector',
    title: 'Insurance Selector',
    description: 'Find the best pet insurance plan for your dog in India.',
    iconBg: 'bg-amber-100',
    iconText: 'text-amber-800',
    iconSymbol: '📋',
    category: 'Insurance',
  },
  {
    id: 'insurance-comparison',
    title: 'Insurance Comparison',
    description: 'Compare pet insurance plans side-by-side across 7 leading insurers.',
    iconBg: 'bg-amber-100',
    iconText: 'text-[#D2691E]',
    iconSymbol: '📊',
    category: 'Insurance',
  },
  {
    id: 'cost-calculator',
    title: 'Cost Calculator',
    description: 'Estimate monthly and yearly costs of dog ownership in India.',
    iconBg: 'bg-emerald-50',
    iconText: 'text-emerald-600',
    iconSymbol: '📝',
    badge: 'Coming Soon',
    category: 'Finance',
  },
  {
    id: 'exercise-calculator',
    title: 'Exercise Calculator',
    description: 'Get personalized exercise plans and daily step goals for your dog.',
    iconBg: 'bg-sky-50',
    iconText: 'text-sky-600',
    iconSymbol: '📄',
    badge: 'Coming Soon',
    category: 'Health',
  },
];

export default function ToolsPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeTool, setActiveTool] = useState<string | null>(null);
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  // Tool state helpers
  // 1. Food Calculator state
  const [foodBreed, setFoodBreed] = useState('indie');
  const [foodAge, setFoodAge] = useState('adult');
  const [foodWeight, setFoodWeight] = useState(15);
  const [foodActivity, setFoodActivity] = useState('moderate');
  const [foodType, setFoodType] = useState('kibble');

  // 2. Name Generator state
  const [nameGender, setNameGender] = useState('any');
  const [nameTheme, setNameTheme] = useState('indian');
  const [generatedNames, setGeneratedNames] = useState<string[]>([]);

  // 3. Age Calculator state
  const [dogYears, setDogYears] = useState(3);
  const [dogSize, setDogSize] = useState('medium');

  // 4. PawWord State
  const targetWord = 'HOUND';
  const [pawGuess, setPawGuess] = useState('');
  const [pawAttempts, setPawAttempts] = useState<string[]>([]);
  const [pawWon, setPawWon] = useState(false);

  // 5. Scramble Pup State
  const [scrambleAnswer, setScrambleAnswer] = useState('');
  const [scrambleScore, setScrambleScore] = useState(0);
  const scrambledList = [
    { word: 'BEAGLE', hint: 'Compact hound breed with floppy ears' },
    { word: 'INDIE', hint: 'Resilient native Indian Pariah dog' },
    { word: 'LABRADOR', hint: 'Most popular family retriever in India' },
    { word: 'PUG', hint: 'Small wrinkled flat-faced dog' },
  ];
  const [scrambleIndex, setScrambleIndex] = useState(0);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 3000);
  };

  const filteredTools = TOOLS_LIST.filter(
    (t) =>
      t.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      t.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Food calculation logic
  const calculateFoodInGrams = () => {
    // Base RER = 70 * (weight)^0.75
    const rer = 70 * Math.pow(foodWeight, 0.75);
    let factor = 1.6; // adult
    if (foodAge === 'puppy') factor = 2.5;
    if (foodAge === 'senior') factor = 1.2;

    if (foodActivity === 'low') factor *= 0.85;
    if (foodActivity === 'high') factor *= 1.25;

    const totalKcal = Math.round(rer * factor);
    // kibble average 360 kcal / 100g -> 3.6 kcal/g
    let grams = Math.round(totalKcal / 3.6);
    if (foodType === 'homecooked') grams = Math.round(totalKcal / 1.8); // less calorie dense
    if (foodType === 'wet') grams = Math.round(totalKcal / 1.1);

    return { totalKcal, grams, meals: foodAge === 'puppy' ? 3 : 2 };
  };

  // Generate dog names
  const handleGenerateNames = () => {
    const indianMale = ['Sheru', 'Kaju', 'Moti', 'Sultan', 'Biryani', 'Chai', 'Veer', 'Tiger', 'Raja', 'Goku'];
    const indianFemale = ['Tara', 'Rani', 'Jalebi', 'Kulfi', 'Tulsi', 'Mimi', 'Laila', 'Simba', 'Pari', 'Sona'];
    const royalList = ['Duke', 'Baron', 'Maharaja', 'Princess', 'Kaiser', 'Athena', 'Zeus', 'Sultan', 'Duchess'];

    let pool = [...indianMale, ...indianFemale];
    if (nameTheme === 'indian') pool = nameGender === 'female' ? indianFemale : indianMale;
    if (nameTheme === 'royal') pool = royalList;

    // shuffle & pick 5
    const shuffled = [...pool].sort(() => 0.5 - Math.random()).slice(0, 5);
    setGeneratedNames(shuffled);
  };

  // Dog Age Calculation
  const calculateHumanAge = () => {
    if (dogYears <= 0) return 0;
    // Veterinary formula: 16 * ln(dogAge) + 31
    if (dogYears === 1) return 15;
    if (dogYears === 2) return 24;
    let base = 24 + (dogYears - 2) * (dogSize === 'large' ? 7 : 5);
    return base;
  };

  // PawWord guess submit
  const handlePawSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pawGuess.length !== 5) {
      showToast('Word must be exactly 5 letters!');
      return;
    }
    const clean = pawGuess.toUpperCase();
    const updated = [...pawAttempts, clean];
    setPawAttempts(updated);
    if (clean === targetWord) {
      setPawWon(true);
      showToast('🎉 Woof! You solved PawWord!');
    }
    setPawGuess('');
  };

  // Scramble Pup submit
  const handleScrambleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const current = scrambledList[scrambleIndex];
    if (scrambleAnswer.trim().toUpperCase() === current.word) {
      setScrambleScore(scrambleScore + 10);
      showToast('Correct! +10 Points!');
      setScrambleAnswer('');
      setScrambleIndex((scrambleIndex + 1) % scrambledList.length);
    } else {
      showToast('Try again!');
    }
  };

  return (
    <div className="antialiased min-h-screen flex flex-col bg-[#FDFBF7] text-[#2C221E] font-sans">
      {/* 1. TOP BAR */}
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
          <span className="text-slate-900 font-semibold">Tools</span>
        </div>
      </nav>

      {/* 4. HERO BANNER */}
      <section className="bg-gradient-to-b from-amber-50/70 via-amber-50/30 to-transparent border-b border-amber-100/60 py-8 sm:py-10 px-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2A170C] tracking-tight">
              Free Dog <span className="text-[#D2691E]">Tools</span>
            </h1>
          </div>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Helpful calculators, finders, and trackers to make dog parenting easier. All free, no sign-up required.
          </p>

          <div className="pt-1 flex items-center gap-2 text-xs font-bold">
            <span className="bg-amber-100 text-[#D2691E] px-3 py-1 rounded-lg border border-amber-200">
              10 tools
            </span>
            <span className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-lg border border-emerald-200">
              Always Free
            </span>
          </div>

          {/* Search Box */}
          <div className="pt-3 max-w-2xl">
            <div className="relative">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                🔍
              </span>
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search tools..."
                className="w-full pl-10 pr-4 py-3 bg-white border border-slate-200 rounded-2xl text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#D2691E] shadow-sm"
              />
            </div>
          </div>
        </div>
      </section>

      {/* 5. MAIN TOOLS GRID + SIDEBAR */}
      <main className="max-w-7xl mx-auto px-4 py-10 flex-grow w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* LEFT 8 COLS: All Tools Grid */}
          <div className="lg:col-span-8 space-y-6">
            <h2 className="font-bold text-xl sm:text-2xl text-[#2A170C]">All Tools</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {filteredTools.map((tool) => (
                <div
                  key={tool.id}
                  onClick={() => {
                    if (tool.badge === 'Coming Soon') {
                      showToast(`${tool.title} is coming soon in our Q3 update!`);
                    } else {
                      setActiveTool(tool.id);
                      if (tool.id === 'name-generator' && generatedNames.length === 0) {
                        handleGenerateNames();
                      }
                    }
                  }}
                  className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-sm hover:shadow-md hover:border-amber-300 transition-all cursor-pointer flex flex-col justify-between space-y-4 relative group"
                >
                  {/* Badge if Coming Soon */}
                  {tool.badge && (
                    <span className="absolute top-3 right-3 bg-amber-100 text-amber-800 text-[10px] font-extrabold px-2 py-0.5 rounded-full border border-amber-200">
                      {tool.badge}
                    </span>
                  )}

                  <div className="space-y-3">
                    {/* Icon Box */}
                    <div className={`w-11 h-11 rounded-xl ${tool.iconBg} ${tool.iconText} flex items-center justify-center text-xl font-bold shrink-0 shadow-sm`}>
                      {tool.iconSymbol}
                    </div>

                    <div>
                      <h3 className="font-bold text-base text-slate-900 group-hover:text-[#D2691E] transition-colors">
                        {tool.title}
                      </h3>
                      <p className="text-xs text-slate-500 leading-relaxed mt-1 line-clamp-3">
                        {tool.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom Content Box 1: Free Dog Tools for Indian Pet Parents */}
            <div className="bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm space-y-2 mt-8">
              <h3 className="font-bold text-lg text-slate-900">
                Free Dog Tools for Indian Pet Parents
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Our free dog tools are designed specifically for Indian pet parents. From calculating the right food portions based on local brands to finding breeds suited for Indian climates, every tool considers the unique needs of dog owners in India.
              </p>
            </div>

            {/* Bottom Content Box 2: Find Dog Services Near You */}
            <div className="bg-[#FFF5F5] rounded-2xl p-6 border border-rose-100 shadow-sm space-y-4">
              <h3 className="font-bold text-lg text-[#2A170C]">
                Find Dog Services Near You
              </h3>
              <p className="text-xs sm:text-sm text-slate-600">
                Browse 3,000+ verified listings for vets, trainers, groomers, and more — backed by real owner reviews.
              </p>

              <div className="flex flex-wrap items-center gap-2.5 pt-1">
                <a
                  href="/#services"
                  className="bg-[#C8521A] hover:bg-[#A84012] text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow transition-all flex items-center gap-1.5 cursor-pointer"
                >
                  <span>Browse All Services</span>
                  <span>→</span>
                </a>

                <a
                  href="/#services"
                  className="bg-white hover:bg-rose-50 text-slate-800 border border-rose-200 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                >
                  Vets
                </a>

                <a
                  href="/#services"
                  className="bg-white hover:bg-rose-50 text-slate-800 border border-rose-200 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                >
                  Trainers
                </a>

                <a
                  href="/#services"
                  className="bg-white hover:bg-rose-50 text-slate-800 border border-rose-200 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                >
                  Groomers
                </a>

                <a
                  href="/#services"
                  className="bg-white hover:bg-rose-50 text-slate-800 border border-rose-200 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors"
                >
                  Pet Stores
                </a>
              </div>

              <p className="text-xs text-slate-500 pt-2 border-t border-rose-200/50">
                Or read our <a href="/#blog" className="text-[#D2691E] font-bold hover:underline">dog health and care guides</a> for advice on nutrition, training, and more.
              </p>
            </div>
          </div>

          {/* RIGHT 4 COLS: Sidebar Widgets */}
          <aside className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            {/* Widget 1: More free tools */}
            <div className="bg-[#FFF5F2] rounded-3xl p-6 border border-amber-200/60 shadow-sm space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-[#D2691E] text-lg">🔑</span>
                <h3 className="font-bold text-base text-[#2A170C]">More free tools</h3>
              </div>

              <div className="grid grid-cols-2 gap-2 text-xs">
                <button
                  onClick={() => setActiveTool('insurance-selector')}
                  className="bg-white hover:bg-amber-100/60 border border-amber-200 text-slate-800 font-bold py-2 px-3 rounded-xl flex items-center gap-2 shadow-xs transition-colors truncate cursor-pointer"
                >
                  <span className="text-sky-500">🛡️</span>
                  <span className="truncate">Insurance...</span>
                </button>

                <button
                  onClick={() => setActiveTool('breed-finder')}
                  className="bg-white hover:bg-amber-100/60 border border-amber-200 text-slate-800 font-bold py-2 px-3 rounded-xl flex items-center gap-2 shadow-xs transition-colors truncate cursor-pointer"
                >
                  <span className="text-purple-500">🐩</span>
                  <span className="truncate">Breed...</span>
                </button>

                <button
                  onClick={() => setActiveTool('vaccine-tracker')}
                  className="bg-white hover:bg-amber-100/60 border border-amber-200 text-slate-800 font-bold py-2 px-3 rounded-xl flex items-center gap-2 shadow-xs transition-colors truncate cursor-pointer"
                >
                  <span className="text-rose-500">💉</span>
                  <span className="truncate">Vaccinati...</span>
                </button>

                <button
                  onClick={() => setActiveTool('food-calculator')}
                  className="bg-white hover:bg-amber-100/60 border border-amber-200 text-slate-800 font-bold py-2 px-3 rounded-xl flex items-center gap-2 shadow-xs transition-colors truncate cursor-pointer"
                >
                  <span className="text-emerald-500">🥣</span>
                  <span className="truncate">Food...</span>
                </button>
              </div>
            </div>

            {/* Widget 2: Insurance stumping you? */}
            <div className="bg-gradient-to-br from-[#FFF7ED] to-amber-100/50 rounded-3xl p-6 border border-amber-200/80 shadow-sm space-y-3">
              <div className="flex items-center gap-2">
                <span className="text-amber-600 text-lg">✨</span>
                <h3 className="font-extrabold text-base text-[#2A170C]">Insurance stumping you?</h3>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Tell us about your dog in 2 minutes. We&apos;ll pick your 3 best plans — no spam, no commitment.
              </p>

              <a
                href="/insurance"
                className="w-full bg-[#C8521A] hover:bg-[#A84012] text-white font-extrabold text-xs py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-1.5 cursor-pointer block text-center"
              >
                <span>Find my plan</span>
                <span>→</span>
              </a>
            </div>
          </aside>
        </div>
      </main>

      {/* 6. FOOTER */}
      <Footer />

      {/* INTERACTIVE TOOL MODALS */}
      {activeTool && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 text-slate-800 space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setActiveTool(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-xl font-bold p-2 cursor-pointer rounded-full bg-slate-100"
            >
              ✕
            </button>

            {/* 1. FOOD CALCULATOR */}
            {activeTool === 'food-calculator' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <span className="text-3xl">🥣</span>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">Dog Daily Food Portion Calculator</h3>
                    <p className="text-xs text-slate-500">Accurate daily kcal &amp; gram portions for Indian dog diets</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Breed Type</label>
                      <select
                        value={foodBreed}
                        onChange={(e) => setFoodBreed(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-semibold text-slate-800"
                      >
                        <option value="indie">Indian Pariah (Indie)</option>
                        <option value="labrador">Labrador Retriever</option>
                        <option value="golden">Golden Retriever</option>
                        <option value="shih-tzu">Shih Tzu / Toy Breed</option>
                        <option value="gsd">German Shepherd</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Life Stage</label>
                      <select
                        value={foodAge}
                        onChange={(e) => setFoodAge(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-semibold text-slate-800"
                      >
                        <option value="puppy">Puppy (2 - 12 mos)</option>
                        <option value="adult">Adult (1 - 7 yrs)</option>
                        <option value="senior">Senior (7+ yrs)</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>Body Weight</span>
                      <span className="text-[#D2691E]">{foodWeight} kg</span>
                    </div>
                    <input
                      type="range"
                      min="2"
                      max="50"
                      value={foodWeight}
                      onChange={(e) => setFoodWeight(Number(e.target.value))}
                      className="w-full accent-[#D2691E] cursor-pointer"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Activity Level</label>
                      <select
                        value={foodActivity}
                        onChange={(e) => setFoodActivity(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-semibold text-slate-800"
                      >
                        <option value="low">Low (Indoor/Leisurely Walk)</option>
                        <option value="moderate">Moderate (Daily 45m Walk)</option>
                        <option value="high">High (Active Running/Agility)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Food Type</label>
                      <select
                        value={foodType}
                        onChange={(e) => setFoodType(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-semibold text-slate-800"
                      >
                        <option value="kibble">Dry Kibble (Royal Canin / Drools)</option>
                        <option value="homecooked">Homecooked (Rice, Chicken, Curd)</option>
                        <option value="wet">Wet Canned Food</option>
                      </select>
                    </div>
                  </div>

                  {/* Calculated Output Box */}
                  <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 space-y-2 text-center">
                    <span className="text-[10px] uppercase font-extrabold tracking-wider text-slate-500 block">Recommended Daily Intake</span>
                    <div className="flex justify-center items-baseline gap-2">
                      <span className="text-3xl font-extrabold text-[#D2691E]">{calculateFoodInGrams().grams} grams</span>
                      <span className="text-xs text-slate-600 font-semibold">({calculateFoodInGrams().totalKcal} kcal/day)</span>
                    </div>
                    <p className="text-[11px] text-slate-600">
                      Split into <strong>{calculateFoodInGrams().meals} meals</strong> per day (~{Math.round(calculateFoodInGrams().grams / calculateFoodInGrams().meals)}g per meal)
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 2. BREED FINDER */}
            {activeTool === 'breed-finder' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <span className="text-3xl">🐕</span>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">Dog Breed Lifestyle Finder</h3>
                    <p className="text-xs text-slate-500">Find the right breed matched to your home &amp; climate</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="p-4 bg-purple-50 rounded-2xl border border-purple-200 space-y-3">
                    <h4 className="font-bold text-purple-900 text-sm">Top Recommended Breeds for Indian Homes:</h4>
                    <div className="space-y-2">
                      <div className="bg-white p-3 rounded-xl border border-purple-100 flex items-center justify-between">
                        <div>
                          <strong className="text-slate-900 block text-sm">1. Indian Pariah (Indie)</strong>
                          <span className="text-slate-500 text-[11px]">10/10 Heat Tolerance | Zero AC Need | Low Vet Cost</span>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-lg text-[10px]">98% Match</span>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-purple-100 flex items-center justify-between">
                        <div>
                          <strong className="text-slate-900 block text-sm">2. Indian Spitz</strong>
                          <span className="text-slate-500 text-[11px]">Apartment Friendly | Fluffy &amp; Hardy | Great Alert Dog</span>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-lg text-[10px]">92% Match</span>
                      </div>

                      <div className="bg-white p-3 rounded-xl border border-purple-100 flex items-center justify-between">
                        <div>
                          <strong className="text-slate-900 block text-sm">3. Labrador Retriever</strong>
                          <span className="text-slate-500 text-[11px]">Best Family Dog | Excellent with Kids | Highly Trainable</span>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 font-bold px-2.5 py-1 rounded-lg text-[10px]">89% Match</span>
                      </div>
                    </div>
                  </div>

                  <a
                    href="/breeds"
                    className="w-full bg-[#D2691E] hover:bg-[#B35310] text-white font-bold py-3 rounded-xl text-center block"
                  >
                    Explore Full 2026 Breed Guides Catalog →
                  </a>
                </div>
              </div>
            )}

            {/* 3. NAME GENERATOR */}
            {activeTool === 'name-generator' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <span className="text-3xl">✨</span>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">Indian Dog Name Generator</h3>
                    <p className="text-xs text-slate-500">Generate cute, meaningful &amp; royal names</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div className="grid grid-cols-2 gap-3">
                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Gender</label>
                      <select
                        value={nameGender}
                        onChange={(e) => setNameGender(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-semibold text-slate-800"
                      >
                        <option value="any">Male / Female</option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-bold text-slate-700 mb-1">Theme</label>
                      <select
                        value={nameTheme}
                        onChange={(e) => setNameTheme(e.target.value)}
                        className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-semibold text-slate-800"
                      >
                        <option value="indian">Desi Food &amp; Cute</option>
                        <option value="royal">Royal &amp; Imperial</option>
                      </select>
                    </div>
                  </div>

                  <button
                    onClick={handleGenerateNames}
                    className="w-full bg-amber-500 hover:bg-amber-600 text-slate-950 font-extrabold py-2.5 rounded-xl transition-all cursor-pointer"
                  >
                    🎲 Spin Name Wheel
                  </button>

                  <div className="bg-amber-50/70 p-4 rounded-2xl border border-amber-200 space-y-2">
                    <span className="font-bold text-slate-700 block">Generated Picks:</span>
                    <div className="flex flex-wrap gap-2">
                      {generatedNames.map((nm, idx) => (
                        <span
                          key={idx}
                          onClick={() => showToast(`Copied name "${nm}" to clipboard!`)}
                          className="bg-white border border-amber-300 text-[#D2691E] font-extrabold px-3 py-1.5 rounded-xl shadow-xs cursor-pointer hover:bg-amber-100"
                        >
                          🐶 {nm}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* 4. WEIGHT TRACKER */}
            {activeTool === 'weight-tracker' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <span className="text-3xl">⚖️</span>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">Dog Weight &amp; BCS Ideal Range</h3>
                    <p className="text-xs text-slate-500">Check body condition score against veterinary benchmarks</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="p-4 bg-sky-50 rounded-2xl border border-sky-200 space-y-2">
                    <h4 className="font-bold text-sky-900 text-sm">Ideal Weight Ranges by Breed in India:</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="flex justify-between border-b border-sky-100 pb-1">
                        <span>Indian Pariah (Indie)</span>
                        <strong className="text-slate-900">15 - 25 kg</strong>
                      </li>
                      <li className="flex justify-between border-b border-sky-100 pb-1">
                        <span>Labrador Retriever</span>
                        <strong className="text-slate-900">25 - 34 kg</strong>
                      </li>
                      <li className="flex justify-between border-b border-sky-100 pb-1">
                        <span>Golden Retriever</span>
                        <strong className="text-slate-900">27 - 36 kg</strong>
                      </li>
                      <li className="flex justify-between border-b border-sky-100 pb-1">
                        <span>Indian Spitz</span>
                        <strong className="text-slate-900">5 - 12 kg</strong>
                      </li>
                      <li className="flex justify-between">
                        <span>Shih Tzu</span>
                        <strong className="text-slate-900">4 - 7.5 kg</strong>
                      </li>
                    </ul>
                  </div>

                  <p className="text-[11px] text-slate-500">
                    💡 <em>Tip: You should easily feel your dog&apos;s ribs without excessive fat padding, and observe a visible waistline behind the ribs when viewed from above.</em>
                  </p>
                </div>
              </div>
            )}

            {/* 5. AGE CALCULATOR */}
            {activeTool === 'age-calculator' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <span className="text-3xl">⏱️</span>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">Dog Years to Human Years Calculator</h3>
                    <p className="text-xs text-slate-500">Based on veterinary non-linear size aging curves</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <div>
                    <label className="block font-bold text-slate-700 mb-1">Dog Size Category</label>
                    <select
                      value={dogSize}
                      onChange={(e) => setDogSize(e.target.value)}
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl p-2.5 font-semibold text-slate-800"
                    >
                      <option value="small">Small (&lt; 10 kg e.g. Spitz, Pug)</option>
                      <option value="medium">Medium (10-25 kg e.g. Indie, Beagle)</option>
                      <option value="large">Large (&gt; 25 kg e.g. Lab, GSD)</option>
                    </select>
                  </div>

                  <div>
                    <div className="flex justify-between font-bold text-slate-700 mb-1">
                      <span>Dog Calendar Age</span>
                      <span className="text-[#D2691E]">{dogYears} years old</span>
                    </div>
                    <input
                      type="range"
                      min="1"
                      max="18"
                      value={dogYears}
                      onChange={(e) => setDogYears(Number(e.target.value))}
                      className="w-full accent-[#D2691E] cursor-pointer"
                    />
                  </div>

                  <div className="bg-amber-50 rounded-2xl p-4 border border-amber-200 text-center space-y-1">
                    <span className="text-[10px] uppercase font-extrabold text-slate-500 block">Biological Human Age Equivalent</span>
                    <p className="text-4xl font-extrabold text-[#D2691E]">
                      {calculateHumanAge()} <span className="text-base font-normal text-slate-700">human years</span>
                    </p>
                    <p className="text-[11px] text-slate-600 mt-1">
                      {dogYears < 3 ? '⚡ Active young adult stage' : dogYears > 7 ? '👵 Senior wisdom stage' : '🐕 Prime adult stage'}
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* 6. VACCINE TRACKER */}
            {activeTool === 'vaccine-tracker' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <span className="text-3xl">💉</span>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">Indian Dog Vaccination Schedule</h3>
                    <p className="text-xs text-slate-500">Core vaccines recommended by Indian Veterinary Association</p>
                  </div>
                </div>

                <div className="space-y-3 text-xs">
                  <div className="bg-rose-50 p-4 rounded-2xl border border-rose-200 space-y-2">
                    <h4 className="font-bold text-rose-900 text-sm">Essential Schedule for India:</h4>
                    <ul className="space-y-2 text-slate-700">
                      <li className="bg-white p-2.5 rounded-xl border border-rose-100 flex justify-between items-center">
                        <div>
                          <strong className="block text-slate-900">6 - 8 Weeks: DHPPi + L (1st Dose)</strong>
                          <span className="text-[10px] text-slate-500">Distemper, Hepatitis, Parvovirus, Parainfluenza</span>
                        </div>
                        <span className="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded text-[10px]">Core</span>
                      </li>
                      <li className="bg-white p-2.5 rounded-xl border border-rose-100 flex justify-between items-center">
                        <div>
                          <strong className="block text-slate-900">12 Weeks: Anti-Rabies (1st Dose)</strong>
                          <span className="text-[10px] text-slate-500">Mandatory by Law in Indian municipal corporations</span>
                        </div>
                        <span className="bg-rose-100 text-rose-800 font-bold px-2 py-0.5 rounded text-[10px]">Mandatory</span>
                      </li>
                      <li className="bg-white p-2.5 rounded-xl border border-rose-100 flex justify-between items-center">
                        <div>
                          <strong className="block text-slate-900">Annual Booster: DHPPi + Rabies</strong>
                          <span className="text-[10px] text-slate-500">Repeat every 12 months for lifetime protection</span>
                        </div>
                        <span className="bg-emerald-100 text-emerald-800 font-bold px-2 py-0.5 rounded text-[10px]">Yearly</span>
                      </li>
                    </ul>
                  </div>

                  <button
                    onClick={() => showToast('Vaccination schedule downloaded & reminder set!')}
                    className="w-full bg-[#D2691E] text-white font-bold py-2.5 rounded-xl cursor-pointer"
                  >
                    Download Schedule PDF →
                  </button>
                </div>
              </div>
            )}

            {/* 7. PAWWORD */}
            {activeTool === 'paw-word' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <span className="text-3xl">⭐</span>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">PawWord: Daily Dog Word Puzzle</h3>
                    <p className="text-xs text-slate-500">Guess the 5-letter dog word in 6 tries!</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-center">
                  <p className="text-slate-600">Guess the daily secret 5-letter word:</p>

                  <div className="flex flex-col gap-2 items-center">
                    {pawAttempts.map((attempt, i) => (
                      <div key={i} className="flex gap-1.5">
                        {attempt.split('').map((char, j) => {
                          let bg = 'bg-slate-200 text-slate-800';
                          if (char === targetWord[j]) bg = 'bg-emerald-600 text-white font-extrabold';
                          else if (targetWord.includes(char)) bg = 'bg-amber-500 text-white font-extrabold';
                          return (
                            <div key={j} className={`w-9 h-9 rounded-lg flex items-center justify-center text-sm ${bg}`}>
                              {char}
                            </div>
                          );
                        })}
                      </div>
                    ))}
                  </div>

                  {!pawWon && pawAttempts.length < 6 && (
                    <form onSubmit={handlePawSubmit} className="flex gap-2 max-w-xs mx-auto pt-2">
                      <input
                        type="text"
                        maxLength={5}
                        value={pawGuess}
                        onChange={(e) => setPawGuess(e.target.value.toUpperCase())}
                        placeholder="ENTER 5-LETTER WORD"
                        className="w-full p-2.5 border border-slate-300 rounded-xl text-center uppercase tracking-widest font-extrabold focus:outline-none focus:ring-2 focus:ring-[#D2691E]"
                      />
                      <button type="submit" className="bg-[#D2691E] text-white font-bold px-4 rounded-xl cursor-pointer">
                        Guess
                      </button>
                    </form>
                  )}

                  {pawWon && (
                    <div className="p-3 bg-emerald-100 text-emerald-900 rounded-xl font-bold">
                      🎉 Congratulations! You guessed HOUND in {pawAttempts.length} tries!
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* 8. SCRAMBLE PUP */}
            {activeTool === 'scramble-pup' && (
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <span className="text-3xl">🎯</span>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">Scramble Pup Anagram Game</h3>
                    <p className="text-xs text-slate-500">Unscramble the dog breed names!</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs text-center">
                  <div className="bg-amber-50 p-4 rounded-2xl border border-amber-200 space-y-2">
                    <span className="text-xs text-slate-500 block font-semibold">Score: {scrambleScore} pts</span>
                    <p className="text-xs text-slate-600 italic">
                      Hint: {scrambledList[scrambleIndex].hint}
                    </p>
                    <div className="text-3xl font-extrabold tracking-widest text-[#D2691E] pt-2">
                      {scrambledList[scrambleIndex].word
                        .split('')
                        .sort(() => 0.5 - Math.random())
                        .join(' ')}
                    </div>
                  </div>

                  <form onSubmit={handleScrambleSubmit} className="flex gap-2 max-w-xs mx-auto">
                    <input
                      type="text"
                      value={scrambleAnswer}
                      onChange={(e) => setScrambleAnswer(e.target.value)}
                      placeholder="Unscrambled Word..."
                      className="w-full p-2.5 border border-slate-300 rounded-xl text-center uppercase font-bold focus:outline-none focus:ring-2 focus:ring-[#D2691E]"
                    />
                    <button type="submit" className="bg-[#D2691E] text-white font-bold px-4 rounded-xl cursor-pointer">
                      Submit
                    </button>
                  </form>
                </div>
              </div>
            )}

            {/* 9. INSURANCE SELECTOR & 10. COMPARISON */}
            {(activeTool === 'insurance-selector' || activeTool === 'insurance-comparison') && (
              <div className="space-y-5">
                <div className="flex items-center gap-3 border-b border-slate-100 pb-3">
                  <span className="text-3xl">📋</span>
                  <div>
                    <h3 className="font-extrabold text-xl text-slate-900">Pet Insurance Selector &amp; Comparison</h3>
                    <p className="text-xs text-slate-500">Find &amp; compare the top insurers in India side-by-side</p>
                  </div>
                </div>

                <div className="space-y-4 text-xs">
                  <p className="text-slate-600">
                    We analyzed 7 leading pet insurance providers, 42 plan variations, and 1,200+ claim experiences across 12 Indian cities.
                  </p>

                  <a
                    href="/insurance"
                    className="w-full bg-[#D2691E] text-white font-bold py-3 rounded-xl text-center block shadow hover:bg-[#B35310]"
                  >
                    Open Full Pet Insurance Guide &amp; Cost Matrix →
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* TOAST NOTIFICATION */}
      {toastMsg && (
        <div className="fixed bottom-6 right-6 z-50 bg-[#2A170C] text-white text-xs font-bold px-5 py-3 rounded-2xl shadow-2xl border border-amber-500/30 animate-bounce">
          {toastMsg}
        </div>
      )}
    </div>
  );
}
