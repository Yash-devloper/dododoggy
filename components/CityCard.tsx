'use client';

import React from 'react';

export interface CityCardProps {
  name: string;
  count: string;
  img: string;
  onClick?: () => void;
}

export function CityCard({ name, count, img, onClick }: CityCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer relative rounded-2xl overflow-hidden h-28 border border-slate-200/80 hover:shadow-md transition-all hover:-translate-y-0.5"
    >
      <img
        src={img}
        alt={name}
        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-slate-950/85 via-slate-950/30 to-transparent"></div>
      <div className="absolute bottom-2.5 left-3 text-white">
        <p className="font-extrabold text-sm leading-tight group-hover:text-amber-400 transition-colors">
          {name}
        </p>
        <p className="text-[11px] text-slate-300">{count}</p>
      </div>
    </div>
  );
}
