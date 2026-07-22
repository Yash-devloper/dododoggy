'use client';

import React from 'react';

export interface ServiceCardProps {
  title: string;
  count: string;
  icon: string;
  img: string;
  tag?: string;
  onClick?: () => void;
}

export function ServiceCard({ title, count, icon, img, tag, onClick }: ServiceCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all hover:-translate-y-1"
    >
      <div className="relative h-32 overflow-hidden">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent"></div>
        {tag && (
          <span className="absolute top-2.5 right-2.5 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full">
            {tag}
          </span>
        )}
        <div className="absolute bottom-2.5 left-3 text-white">
          <span className="text-xl block mb-0.5">{icon}</span>
        </div>
      </div>
      <div className="p-3.5">
        <h3 className="font-bold text-slate-900 text-base group-hover:text-[#D2691E] transition-colors">
          {title}
        </h3>
        <p className="text-xs font-semibold text-amber-700 mt-0.5">{count}</p>
      </div>
    </div>
  );
}
