'use client';

import React from 'react';

export interface ReviewCardProps {
  id: string;
  name: string;
  loc: string;
  badge: string;
  rating: string;
  reviews: number;
  quote: string;
  author: string;
  img: string;
  isSaved?: boolean;
  onToggleSave?: (id: string) => void;
}

export function ReviewCard({
  id,
  name,
  loc,
  badge,
  rating,
  reviews,
  quote,
  author,
  img,
  isSaved = false,
  onToggleSave,
}: ReviewCardProps) {
  return (
    <div className="bg-white rounded-2xl p-5 border border-slate-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
      <div className="space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div className="flex items-center gap-3">
            <img
              src={img}
              alt={name}
              className="w-12 h-12 rounded-full object-cover border-2 border-amber-200"
            />
            <div>
              <h3 className="font-bold text-slate-900 text-sm leading-tight">{name}</h3>
              <p className="text-xs text-slate-500">{loc}</p>
            </div>
          </div>
          <span className="bg-amber-100 text-amber-800 text-[11px] font-bold px-2.5 py-1 rounded-full whitespace-nowrap">
            {badge}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <div className="flex text-amber-400 text-sm">★★★★★</div>
          <span className="text-xs font-bold text-slate-800">{rating}</span>
          <span className="text-xs text-slate-400">({reviews} reviews)</span>
        </div>

        <p className="text-xs text-slate-600 italic leading-relaxed bg-amber-50/50 p-3 rounded-xl border border-amber-100/50">
          {quote}
        </p>
      </div>

      <div className="pt-3 mt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-400">
        <span>{author}</span>
        <button
          onClick={() => onToggleSave?.(id)}
          className={`font-medium flex items-center gap-1 cursor-pointer ${
            isSaved ? 'text-[#D2691E]' : 'text-slate-400 hover:text-[#D2691E]'
          }`}
        >
          <span>{isSaved ? '❤️ Saved' : '🔖 Save'}</span>
        </button>
      </div>
    </div>
  );
}
