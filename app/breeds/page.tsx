'use client';

import React, { useState } from 'react';
import { TopBar } from '@/components/TopBar';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';

interface BreedGuide {
  id: string;
  title: string;
  badge: string;
  image: string;
  description: string;
  category: string;
  readTime: string;
  inrPrice?: string;
  heatTolerance?: string;
  fullContent?: {
    summary: string;
    keyPoints: string[];
    suitability: string;
  };
}

const BREED_GUIDES: BreedGuide[] = [
  {
    id: 'pomeranian-spitz',
    title: 'Pomeranian vs Indian Spitz 2026: Prices, KCI, and Heat Tolerance Compared',
    badge: 'Breed Guide',
    category: 'Small Breeds',
    readTime: '6 min read',
    inrPrice: '₹8,000 - ₹35,000',
    heatTolerance: 'Moderate',
    image: 'https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?auto=format&fit=crop&w=600&q=80',
    description: "India's 2026 comparison of Pomeranian vs Indian Spitz: KCI status, puppy prices in INR, heat test by city, grooming costs, and ethical sourcing guide.",
    fullContent: {
      summary: "While Pomeranians and Indian Spitzes look remarkably similar, the Indian Spitz is significantly better adapted to Indian heat, requires less intense grooming, and has far fewer genetic health issues.",
      keyPoints: [
        "Indian Spitz price: ₹8,000 – ₹15,000 | Pomeranian KCI price: ₹20,000 – ₹45,000",
        "Heat Tolerance: Indian Spitz handles up to 38°C comfortably; Pomeranians require AC above 30°C",
        "Grooming: Spitz has a dirt-repellent double coat; Pomeranians suffer frequent coat matting",
        "KCI Recognition: Pomeranians are recognized by KCI; Indian Spitz is recognized as a native breed"
      ],
      suitability: "Best for apartment owners seeking a vigilant, small-to-medium fluffy companion."
    }
  },
  {
    id: 'lab-vs-golden',
    title: 'Labrador vs Golden Retriever: Complete Comparison (2026)',
    badge: 'Breed Guide',
    category: 'Popular Breeds',
    readTime: '8 min read',
    inrPrice: '₹15,000 - ₹45,000',
    heatTolerance: 'Moderate',
    image: 'https://images.unsplash.com/photo-1552053831-71594a27632d?auto=format&fit=crop&w=600&q=80',
    description: "India-specific comparison of Labrador vs Golden Retriever: heat tolerance by city, grooming costs in INR, 60% cancer risk, 5-year ownership costs, and the honest 2026 verdict.",
    fullContent: {
      summary: "Labradors and Golden Retrievers dominate Indian households. Labradors are slightly easier to groom and better in humid weather, while Golden Retrievers have a softer temperament but shed continuously.",
      keyPoints: [
        "Monthly Feeding & Vet Budget: ₹4,500 – ₹8,000/month",
        "Grooming: Goldens require weekly professional brushing; Labs need short coat maintenance",
        "Health Risks: Hip Dysplasia (35% risk in Indian lines), Goldens have elevated lymphoma risks",
        "Temperament: Both score 10/10 with kids and first-time dog owners"
      ],
      suitability: "Ideal for active families with children and space for daily 45-minute exercise."
    }
  },
  {
    id: 'rottweiler-vs-doberman',
    title: 'Rottweiler vs Doberman: Complete 2026 Comparison',
    badge: 'Breed Guide',
    category: 'Guard Dogs',
    readTime: '7 min read',
    inrPrice: '₹22,000 - ₹60,000',
    heatTolerance: 'Low - Moderate',
    image: 'https://images.unsplash.com/photo-1567752881298-894bb81f9379?auto=format&fit=crop&w=600&q=80',
    description: "Which power breed suits India in 2026? Compare Rottweiler vs Doberman on legal status, health risks, monthly costs, and temperament for Indian homes.",
    fullContent: {
      summary: "Both power breeds demand experienced owners and firm socialization. Dobermans handle summer heat better than heavy-chested Rottweilers, but both require strict early training.",
      keyPoints: [
        "Legal Status in India: Local housing societies may enforce strict leash/muzzle rules",
        "Heat Tolerance: Dobermans excel in dry heat; Rottweilers need indoor cooling during peak summer",
        "Guard Instincts: Exceptional territorial defense for bungalows and standalone houses"
      ],
      suitability: "Recommended ONLY for experienced dog handlers with dedicated training time."
    }
  },
  {
    id: 'pug-vs-frenchie',
    title: "Pug vs French Bulldog 2026: Prices, Airline Rules & Owner's Guide",
    badge: 'Breed Guide',
    category: 'Brachycephalic',
    readTime: '6 min read',
    inrPrice: '₹12,000 - ₹1,50,000',
    heatTolerance: 'Low (AC Mandatory)',
    image: 'https://images.unsplash.com/photo-1517849845537-4d257902454a?auto=format&fit=crop&w=600&q=80',
    description: "Pug vs French Bulldog in India 2026: puppy prices from ₹10,000 to ₹2,50,000, IndiGo and Air India flight bans, BOAS surgery costs, and heat survival realities.",
    fullContent: {
      summary: "Flat-faced breeds face severe breathing challenges in Indian heat. Air India and IndiGo ban them from cargo bays due to respiratory collapse risks. Strict 24/7 air conditioning is mandatory.",
      keyPoints: [
        "BOAS Surgery Costs: ₹25,000 – ₹55,000 if nostril expansion is needed",
        "Airline Restrictions: Banned from cargo transport; travel only via private vehicles",
        "Climate Alert: High risk of heatstroke above 28°C"
      ],
      suitability: "Best for indoor apartment dwellers committed to continuous AC and medical care."
    }
  },
  {
    id: 'gsd-vs-lab',
    title: 'German Shepherd vs Labrador: Complete 2026 Comparison',
    badge: 'Breed Guide',
    category: 'Popular Breeds',
    readTime: '8 min read',
    inrPrice: '₹18,000 - ₹50,000',
    heatTolerance: 'Moderate',
    image: 'https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?auto=format&fit=crop&w=600&q=80',
    description: "India-specific guide comparing German Shepherd and Labrador Retriever on price, climate fit, temperament, health costs, and training difficulty for 2026.",
    fullContent: {
      summary: "German Shepherds offer superior protection and loyalty but require intense physical work and mental stimulation. Labradors are naturally friendly to strangers and easier to manage.",
      keyPoints: [
        "Training Needs: GSD needs structured task-based training; Lab responds well to food rewards",
        "Shedding: Heavy year-round blowing coat for GSDs in tropical humidity",
        "Lifespan: 10-12 years for GSD vs 12-14 years for Labradors in India"
      ],
      suitability: "Choose GSD for security and active sports; choose Lab for friendly social homes."
    }
  },
  {
    id: 'hypoallergenic-breeds',
    title: 'Hypoallergenic Dog Breeds: Prices, Grooming & Allergy Management',
    badge: 'Breed Guide',
    category: 'Low Shedding',
    readTime: '7 min read',
    inrPrice: '₹25,000 - ₹85,000',
    heatTolerance: 'Moderate to High',
    image: 'https://images.unsplash.com/photo-1591769225440-811ad7d6eab2?auto=format&fit=crop&w=600&q=80',
    description: "10 best hypoallergenic dog breeds in India: breeder prices in INR, grooming costs, heat tolerance ratings, and allergy management tips.",
    fullContent: {
      summary: "Breeds like Poodles, Shih Tzus, Maltese, and Bichon Frise produce significantly less dander, making them ideal for individuals sensitive to pet allergies.",
      keyPoints: [
        "Top Breeds: Shih Tzu, Poodle, Maltipoo, Schnauzer, Yorkshire Terrier",
        "Grooming Maintenance: Requires professional hair clipping every 6-8 weeks (₹1,500/session)",
        "Dander Reduction: 80% lower allergen airborne distribution"
      ],
      suitability: "Perfect for allergy sufferers living in compact modern city apartments."
    }
  },
  {
    id: 'top-10-indian-breeds',
    title: 'Top 10 Dog Breeds for India in 2026: Complete Rankings and Guide',
    badge: 'Breed Guide',
    category: 'Rankings',
    readTime: '10 min read',
    inrPrice: '₹5,000 - ₹50,000',
    heatTolerance: 'High',
    image: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&w=600&q=80',
    description: "Choosing the right dog breed for Indian conditions requires understanding climate adaptability, cost of ownership, and lifestyle compatibility. This guide ranks the top 10 breeds for 2026.",
    fullContent: {
      summary: "Our 2026 definitive ranking evaluates native indies, labradors, spitz, golden retrievers, and beagle adaptability across Tier-1 and Tier-2 Indian cities.",
      keyPoints: [
        "#1 Ranked: Indian Pariah Dog (Indie) - Unbeatable heat tolerance & lowest vet expenses",
        "#2 Ranked: Labrador Retriever - Most loving family dog",
        "#3 Ranked: Indian Spitz - Compact & heat resilient"
      ],
      suitability: "Essential reading before committing to your next family pet."
    }
  },
  {
    id: 'lab-golden-family',
    title: 'Labrador vs Golden Retriever for: Complete Comparison (2026)',
    badge: 'Breed Guide',
    category: 'Family Dogs',
    readTime: '8 min read',
    inrPrice: '₹15,000 - ₹45,000',
    heatTolerance: 'Moderate',
    image: 'https://images.unsplash.com/photo-1534361960057-19889db9621e?auto=format&fit=crop&w=600&q=80',
    description: "Labradors and Golden Retrievers are two most popular family dog breeds—and for good reason. Both are gentle, intelligent, excellent with children...",
    fullContent: {
      summary: "Detailed look at family safety, food motivation, swimming instincts, and apartment compatibility between these twin beloved retrievers.",
      keyPoints: [
        "Eagerness to Please: Both score 10/10",
        "Coat Care: Lab requires 15 mins/week; Golden requires 45 mins/week",
        "Heat Endurance: Labs tolerate Indian monsoon humidity slightly better"
      ],
      suitability: "Great for households seeking a loving, child-friendly canine companion."
    }
  },
  {
    id: 'dog-breeds-india-guide',
    title: 'Dog Breeds in India: Complete Guide (2026)',
    badge: 'Breed Guide',
    category: 'Comprehensive',
    readTime: '12 min read',
    inrPrice: 'Varies by Breed',
    heatTolerance: 'Varies',
    image: 'https://images.unsplash.com/photo-1587300003388-59208cc962cb?auto=format&fit=crop&w=600&q=80',
    description: "Complete Guide to Dog Breeds in India 2026: Choosing the right dog breed is one of the most important decisions Indian pet parents make. With India's diverse climate...",
    fullContent: {
      summary: "A master manual detailing weather tolerance, food budgets, apartment compatibility, and ethical breeder verification guidelines across India.",
      keyPoints: [
        "Covers 30+ Breeds available across Indian states",
        "Ethical Breeder Checklist: Avoid puppy mills & illegal import networks",
        "Cost breakdown: Puppy buying vs adoption vs lifetime care"
      ],
      suitability: "The ultimate reference guide for first-time dog buyers in India."
    }
  },
  {
    id: 'large-dog-breeds',
    title: 'Large Dog Breeds - Complete Guide',
    badge: 'Breed Guide',
    category: 'Large Breeds',
    readTime: '9 min read',
    inrPrice: '₹20,000 - ₹75,000',
    heatTolerance: 'Moderate',
    image: 'https://images.unsplash.com/photo-1537151608828-ea2b11777ee8?auto=format&fit=crop&w=600&q=80',
    description: "Thinking of getting a big dog in India? Here's everything you need to know about large breeds that can handle our climate and lifestyle.",
    fullContent: {
      summary: "Large breeds like Great Danes, St. Bernards, and Mastiffs require dedicated space, specialized puppy growth formulas, and joint care during tropical monsoon seasons.",
      keyPoints: [
        "Space Needs: Minimum 1000 sq.ft home or daily outdoor yard access",
        "Dietary Requirements: 600g - 1kg premium kibble daily",
        "Joint Health: Glucosamine supplementation recommended from age 3"
      ],
      suitability: "Best for spacious homes with dedicated exercise routines."
    }
  },
  {
    id: 'small-dog-apartments',
    title: 'Best Small Dog Breeds for Apartments and Small Homes',
    badge: 'Breed Guide',
    category: 'Apartment Breeds',
    readTime: '7 min read',
    inrPrice: '₹10,000 - ₹50,000',
    heatTolerance: 'High',
    image: 'https://images.unsplash.com/photo-1548199973-03cce0bbc87b?auto=format&fit=crop&w=600&q=80',
    description: "Looking for a compact companion? Here are the best small dog breeds that thrive in Indian apartments and weather conditions.",
    fullContent: {
      summary: "Compact breeds like the Indian Spitz, Beagle, Shih Tzu, Pug, and Lhasa Apso fit comfortably in metro city flats without causing noise disturbances.",
      keyPoints: [
        "Low Barking Tendency: Lhasa Apso & Shih Tzu make great quiet neighbours",
        "Exercise: 20-30 minute indoor play sessions suffice",
        "Litter & Potty Training: Rapid indoor pad training adaptability"
      ],
      suitability: "Tailor-made for busy working professionals and apartment owners."
    }
  },
  {
    id: 'indian-dog-breeds-2026',
    title: 'Indian Dog Breeds - The Complete 2026 Guide',
    badge: 'Breed Guide',
    category: 'Native Breeds',
    readTime: '10 min read',
    inrPrice: 'Free (Adoption) - ₹15,000',
    heatTolerance: 'Extremely High',
    image: 'https://images.unsplash.com/photo-1518717758536-85ae29035b6d?auto=format&fit=crop&w=600&q=80',
    description: "India's native dog breeds are hardy, intelligent, and perfectly adapted to our climate. Here's everything you need to know about adopting a desi dog.",
    fullContent: {
      summary: "Desi dogs possess superior genetic immunity, withstand 45°C summers effortlessly, and save owners thousands of rupees in veterinary hospital bills.",
      keyPoints: [
        "Vet Expense Savings: Up to 60% lower medical costs than pedigree breeds",
        "Heat Tolerance: Natural short coat handles tropical sun with ease",
        "Intelligence: Rapid problem-solving and street-smart instincts"
      ],
      suitability: "Highly recommended for every Indian family value-conscious about health and climate."
    }
  },
  {
    id: 'native-breeds-heritage',
    title: 'Indian Dog Breeds: Complete Guide to Native Breeds (2026)',
    badge: 'Breed Guide',
    category: 'Native Breeds',
    readTime: '9 min read',
    inrPrice: '₹5,000 - ₹20,000',
    heatTolerance: 'Extremely High',
    image: 'https://images.unsplash.com/photo-1507146426996-ef05306b995a?auto=format&fit=crop&w=600&q=80',
    description: "India has a rich heritage of native dog breeds that predate many popular Western breeds by centuries. From the legendary Mudhol Hound that hunted with Maratha warriors to the resilient Indian...",
    fullContent: {
      summary: "Discover ancient royal bloodlines: Mudhol Hound, Rajapalayam, Chippiparai, Kanni, Gaddi Kutta, and Kombai.",
      keyPoints: [
        "Mudhol Hound: Speed demon of the Deccan Plateau, recognized by Indian Army",
        "Rajapalayam: The royal white sighthound of Tamil Nadu",
        "Kombai: The fearless guard dog of the Western Ghats"
      ],
      suitability: "Ideal for enthusiasts seeking historic, resilient Indian royal bloodlines."
    }
  },
  {
    id: '8-native-breeds-guide',
    title: '8 Native Dog Breeds: The Complete 2026 Guide',
    badge: 'Breed Guide',
    category: 'Native Breeds',
    readTime: '8 min read',
    inrPrice: 'Adoption / ₹8,000',
    heatTolerance: 'Extremely High',
    image: 'https://images.unsplash.com/photo-1477884213360-7e9d7dcc1e48?auto=format&fit=crop&w=600&q=80',
    description: "Indian dog breeds are naturally adapted to India's climate, with 40% lower vet costs and superior heat tolerance compared to foreign breeds. 8 native breeds offer diverse options from...",
    fullContent: {
      summary: "An in-depth review of 8 indigenous canine jewels that thrive on home-cooked Indian diets without skin or digestive allergies.",
      keyPoints: [
        "Immunity Profile: High resistance to tick fever and endemic skin fungi",
        "Dietary Versatility: Thrives on rice, curd, fish, and chicken broths",
        "Low Maintenance: Minimal shedding and self-cleaning coats"
      ],
      suitability: "Perfect for lovers of hardy, loyal, low-maintenance pets."
    }
  },
  {
    id: 'indian-vs-foreign-12point',
    title: 'Indian vs Foreign Dog Breeds: 12-Point Comparison — Which Suits Local Conditions?',
    badge: 'Breed Guide',
    category: 'Comparison',
    readTime: '11 min read',
    inrPrice: 'Comparative Analysis',
    heatTolerance: 'Native: High | Foreign: Var.',
    image: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?auto=format&fit=crop&w=600&q=80',
    description: "Choosing Between Indian and Foreign Dog Breeds: Every aspiring dog owner in India faces a fundamental choice: Should I get an Indian breed or a foreign breed? This decision impacts not just your...",
    fullContent: {
      summary: "Head-to-head evaluation across 12 crucial parameters including AC dependency, food allergies, breeder reliability, and grooming costs.",
      keyPoints: [
        "Electricity Bills: Foreign thick-coated breeds increase AC power costs by ₹2,000/mo",
        "Genetic Diseases: 15% in Native vs 45% in mass-bred imported lines",
        "Life Expectancy: 14-16 years for Native vs 9-11 years for heavy foreign breeds"
      ],
      suitability: "Crucial analytical comparison for smart pet parents."
    }
  },
  {
    id: 'hot-climate-breeds',
    title: 'Best Dog Breeds for Hot Climates: Heat-Tolerant Dogs (2026)',
    badge: 'Breed Guide',
    category: 'Climate Fit',
    readTime: '8 min read',
    inrPrice: '₹8,000 - ₹40,000',
    heatTolerance: 'Maximum Heat Resistance',
    image: 'https://images.unsplash.com/photo-1517423440428-a5a00ad493e8?auto=format&fit=crop&w=600&q=80',
    description: "India's scorching summers reach 35–45°C with 80% coastal humidity. Compare 10 heat-tolerant breeds, INR prices, breeds to avoid, and city-specific picks.",
    fullContent: {
      summary: "Summer survival manual: Which dogs safely play outdoors in April-June and which breeds (Huskies, St. Bernards) suffer heatstroke.",
      keyPoints: [
        "Heatstroke Danger Breeds: Siberian Husky, Alaskan Malamute, St. Bernard, Chow Chow",
        "Top Heat Champions: Indian Pariah, Doberman, Beagle, Boxer, Chihuahua",
        "City Humidity Factors: Coastal vs Dry North Indian summer precautions"
      ],
      suitability: "Must-read for residents of Chennai, Ahmedabad, Delhi, and Mumbai."
    }
  },
  {
    id: 'indian-vs-foreign-complete',
    title: 'Indian vs Foreign Dog Breeds: Complete Comparison for Local Conditions',
    badge: 'Breed Guide',
    category: 'Comparison',
    readTime: '10 min read',
    inrPrice: 'Detailed Breakdown',
    heatTolerance: 'High vs Moderate',
    image: 'https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&w=600&q=80',
    description: "Detailed comparison of Indian native breeds vs foreign breeds for Indian climate. Covers costs, adaptability, health, grooming needs, and expert recommendations for choosing the right dog in...",
    fullContent: {
      summary: "Comprehensive synthesis on lifestyle compatibility, diet adaptability, and long-term financial commitment for Indian dog lovers.",
      keyPoints: [
        "5-Year Total Cost of Ownership: Native (~₹1.8 Lakhs) vs Foreign (~₹4.2 Lakhs)",
        "Social Behavior in Gated Communities: Guard instincts vs friendly demeanor",
        "Grooming & Tick Resistance: Short tight coat advantages"
      ],
      suitability: "Helps prospective owners make an educated, compassionate choice."
    }
  }
];

export default function BreedsPage() {
  const [selectedGuide, setSelectedGuide] = useState<BreedGuide | null>(null);
  const [filterCategory, setFilterCategory] = useState<string>('All');
  const [toastMsg, setToastMsg] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMsg(msg);
    setTimeout(() => {
      setToastMsg(null);
    }, 3000);
  };

  const categories = ['All', 'Native Breeds', 'Small Breeds', 'Popular Breeds', 'Apartment Breeds', 'Climate Fit'];

  const filteredGuides = filterCategory === 'All'
    ? BREED_GUIDES
    : BREED_GUIDES.filter(g => g.category === filterCategory || (filterCategory === 'Native Breeds' && g.title.toLowerCase().includes('indian')));

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
          <a href="/" className="hover:text-[#D2691E] transition-colors">
            Home
          </a>
          <span>/</span>
          <a href="/#blog" className="hover:text-[#D2691E] transition-colors">
            Learn
          </a>
          <span>/</span>
          <span className="text-slate-900 font-semibold">Breeds</span>
        </div>
      </nav>

      {/* 4. TITLE BANNER SECTION */}
      <section className="bg-gradient-to-b from-amber-50/70 via-amber-50/30 to-transparent border-b border-amber-100/60 py-10 px-4">
        <div className="max-w-7xl mx-auto space-y-4">
          <h1 className="font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#2A170C] tracking-tight">
            Dog Breed Guides
          </h1>

          <p className="text-slate-600 text-sm sm:text-base max-w-3xl leading-relaxed">
            Comprehensive breed guides covering characteristics, care requirements, temperament, and compatibility for Indian homes and climate.
          </p>

          <div className="pt-2 flex flex-wrap items-center gap-3 text-xs">
            <span className="bg-amber-100/80 text-[#D2691E] font-extrabold px-3 py-1 rounded-lg border border-amber-200">
              {BREED_GUIDES.length} guides
            </span>
            <span className="text-slate-300">•</span>
            <span className="bg-emerald-50 text-emerald-800 font-bold px-3 py-1 rounded-lg border border-emerald-200 flex items-center gap-1">
              <span>✓</span> Expert Verified
            </span>
          </div>
        </div>
      </section>

      {/* 5. MAIN CONTENT AREA */}
      <main className="max-w-7xl mx-auto px-4 py-10 flex-grow w-full space-y-12">
        {/* Filter Pills */}
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <h2 className="font-bold text-2xl text-[#2A170C]">
            Breed Guides
          </h2>

          <div className="flex flex-wrap gap-2 text-xs">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilterCategory(cat)}
                className={`px-3.5 py-1.5 rounded-xl font-bold transition-all cursor-pointer ${
                  filterCategory === cat
                    ? 'bg-[#D2691E] text-white shadow-sm'
                    : 'bg-white text-slate-600 border border-slate-200 hover:bg-amber-50 hover:border-amber-300'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* 3-COLUMN GRID OF BREED GUIDES */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredGuides.map((guide) => (
            <article
              key={guide.id}
              className="bg-white rounded-2xl overflow-hidden border border-slate-200/80 shadow-sm hover:shadow-md transition-all flex flex-col group"
            >
              {/* Card Image */}
              <div className="relative aspect-[16/10] overflow-hidden bg-slate-100">
                <img
                  src={guide.image}
                  alt={guide.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  loading="lazy"
                />
                <div className="absolute top-3 left-3">
                  <span className="bg-rose-100/90 backdrop-blur-md text-rose-800 text-[11px] font-bold px-2.5 py-1 rounded-md shadow-sm">
                    {guide.badge}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-grow flex flex-col justify-between space-y-4">
                <div className="space-y-2">
                  <h3 className="font-bold text-base sm:text-lg text-slate-900 leading-snug group-hover:text-[#D2691E] transition-colors">
                    {guide.title}
                  </h3>
                  <p className="text-xs text-slate-600 leading-relaxed line-clamp-3">
                    {guide.description}
                  </p>
                </div>

                <div className="pt-2 flex items-center justify-between text-xs border-t border-slate-100">
                  <span className="text-slate-400 font-medium">{guide.readTime}</span>
                  <button
                    onClick={() => setSelectedGuide(guide)}
                    className="text-[#D2691E] font-bold hover:underline flex items-center gap-1 cursor-pointer"
                  >
                    <span>Read more</span>
                    <span>&gt;</span>
                  </button>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* 6. BOTTOM CARDS & CALLOUTS (Matching Page 3 of PDF) */}
        <div className="space-y-6 pt-6">
          {/* Box 1: Dog Breed Guides for Indian Pet Parents */}
          <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm space-y-2">
            <h3 className="font-bold text-lg text-slate-900">
              Dog Breed Guides for Indian Pet Parents
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Comprehensive dog breed guides written specifically for Indian pet parents. Our expert content covers breed characteristics, care requirements, temperament, grooming needs, exercise requirements, and climate suitability to help you find the perfect companion.
            </p>
          </div>

          {/* Box 2: Find a vet for your breed */}
          <div className="bg-[#FFF5F5] rounded-2xl p-6 sm:p-8 border border-rose-100 shadow-sm space-y-4">
            <h3 className="font-bold text-lg text-[#2A170C]">
              Find a vet for your breed
            </h3>
            <p className="text-xs sm:text-sm text-slate-600">
              Every breed has different health needs. Find a vet in your city who knows your dog.
            </p>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                onClick={() => showToast('Opening directory of verified dog veterinarians...')}
                className="bg-[#C8521A] hover:bg-[#A84012] text-white font-extrabold text-xs px-5 py-3 rounded-xl shadow transition-all flex items-center gap-1.5 cursor-pointer"
              >
                <span>Browse vets near you</span>
                <span>→</span>
              </button>

              <button
                onClick={() => showToast('Showing top rated dog vets in Delhi...')}
                className="bg-white hover:bg-rose-50 text-slate-800 border border-rose-200 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Delhi
              </button>

              <button
                onClick={() => showToast('Showing top rated dog vets in Mumbai...')}
                className="bg-white hover:bg-rose-50 text-slate-800 border border-rose-200 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Mumbai
              </button>

              <button
                onClick={() => showToast('Showing top rated dog vets in Bengaluru...')}
                className="bg-white hover:bg-rose-50 text-slate-800 border border-rose-200 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                Bengaluru
              </button>
            </div>
          </div>

          {/* Box 3: Related Topics Grid */}
          <div className="space-y-3">
            <h3 className="font-bold text-sm uppercase tracking-wider text-slate-500">
              Related topics
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <a
                href="/#blog"
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-amber-300 hover:shadow-md transition-all group block"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-slate-900 group-hover:text-[#D2691E] transition-colors">
                    Health guides →
                  </h4>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Each breed has its own health profile — know yours
                </p>
              </a>

              <a
                href="/#blog"
                className="bg-white p-5 rounded-2xl border border-slate-200/80 shadow-sm hover:border-amber-300 hover:shadow-md transition-all group block"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-base text-slate-900 group-hover:text-[#D2691E] transition-colors">
                    Training guides →
                  </h4>
                </div>
                <p className="text-xs text-slate-500 mt-1">
                  Train smarter once you know your breed&apos;s instincts
                </p>
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* 7. FOOTER */}
      <Footer />

      {/* ARTICLE READER MODAL */}
      {selectedGuide && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl border border-slate-100 text-slate-800 space-y-6 max-h-[90vh] overflow-y-auto">
            <button
              onClick={() => setSelectedGuide(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-slate-800 text-xl font-bold p-2 cursor-pointer rounded-full bg-slate-100"
            >
              ✕
            </button>

            <div className="space-y-3">
              <div className="flex items-center gap-2">
                <span className="bg-rose-100 text-rose-800 text-xs font-bold px-2.5 py-1 rounded-md">
                  {selectedGuide.badge}
                </span>
                <span className="text-xs text-slate-400 font-medium">• {selectedGuide.readTime}</span>
              </div>

              <h2 className="font-extrabold text-2xl text-slate-900 leading-tight">
                {selectedGuide.title}
              </h2>
            </div>

            <div className="rounded-2xl overflow-hidden aspect-[16/9]">
              <img
                src={selectedGuide.image}
                alt={selectedGuide.title}
                className="w-full h-full object-cover"
              />
            </div>

            {/* Guide Quick Metrics */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 bg-amber-50 p-4 rounded-2xl border border-amber-200/70 text-xs">
              <div>
                <span className="text-slate-500 block">INR Price Range</span>
                <strong className="text-slate-900 text-sm">{selectedGuide.inrPrice || 'N/A'}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Heat Tolerance</span>
                <strong className="text-emerald-700 text-sm">{selectedGuide.heatTolerance || 'High'}</strong>
              </div>
              <div>
                <span className="text-slate-500 block">Category</span>
                <strong className="text-[#D2691E] text-sm">{selectedGuide.category}</strong>
              </div>
            </div>

            {/* Content Summary */}
            {selectedGuide.fullContent && (
              <div className="space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
                <p className="bg-slate-50 p-4 rounded-xl border border-slate-200 font-medium">
                  {selectedGuide.fullContent.summary}
                </p>

                <div className="space-y-2">
                  <h4 className="font-bold text-slate-900 text-sm">Key Keypoints &amp; 2026 Facts:</h4>
                  <ul className="space-y-2 pl-4 list-disc text-slate-600">
                    {selectedGuide.fullContent.keyPoints.map((pt, i) => (
                      <li key={i}>{pt}</li>
                    ))}
                  </ul>
                </div>

                <div className="p-3 bg-emerald-50 rounded-xl border border-emerald-200 text-emerald-900 font-semibold">
                  🏡 <strong>Best Suitability:</strong> {selectedGuide.fullContent.suitability}
                </div>
              </div>
            )}

            <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-4">
              <button
                onClick={() => {
                  setSelectedGuide(null);
                  showToast('Guide saved to your offline reading list!');
                }}
                className="bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs px-4 py-2.5 rounded-xl transition-colors cursor-pointer"
              >
                🔖 Bookmark Guide
              </button>

              <button
                onClick={() => {
                  setSelectedGuide(null);
                  showToast('Consultation request sent to DodoDoggy Vet Team!');
                }}
                className="bg-[#D2691E] hover:bg-[#B35310] text-white font-bold text-xs px-5 py-2.5 rounded-xl shadow transition-all cursor-pointer"
              >
                Talk to Breed Expert →
              </button>
            </div>
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
