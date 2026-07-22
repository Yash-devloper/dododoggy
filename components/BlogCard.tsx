'use client';

import React from 'react';

export interface BlogCardProps {
  tag: string;
  title: string;
  read: string;
  desc: string;
  img: string;
}

export function BlogCard({ tag, title, read, desc, img }: BlogCardProps) {
  return (
    <article className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-md transition-all group">
      <div className="h-40 overflow-hidden relative">
        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <span className="absolute top-3 left-3 bg-[#D2691E] text-white text-[10px] font-extrabold uppercase px-2.5 py-1 rounded-md shadow-sm">
          {tag}
        </span>
      </div>
      <div className="p-4 space-y-2">
        <span className="text-[11px] font-medium text-slate-400">{read} · July 2026</span>
        <h3 className="font-bold text-slate-900 text-sm group-hover:text-[#D2691E] transition-colors leading-snug">
          {title}
        </h3>
        <p className="text-xs text-slate-500 line-clamp-2">{desc}</p>
      </div>
    </article>
  );
}
