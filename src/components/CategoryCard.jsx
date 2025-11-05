import React from 'react';
import { ChevronRight } from 'lucide-react';

export default function CategoryCard({ icon: Icon, title, description, onClick }) {
  return (
    <button
      onClick={onClick}
      className="group relative w-full rounded-xl border border-[#3A606E]/20 bg-white/90 p-5 text-left shadow-[0_1px_0_rgba(0,0,0,0.02)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[#3A606E]/40 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-[#F56960]/40"
    >
      <div className="flex items-start gap-4">
        <div className="mt-0.5 rounded-lg bg-[#EBEBEB] p-2 ring-1 ring-[#3A606E]/10">
          {Icon ? (
            <Icon className="h-5 w-5 text-[#3A606E]" strokeWidth={1.75} />
          ) : null}
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-medium text-[#1E152A]">{title}</h3>
            <ChevronRight className="h-5 w-5 text-[#3A606E]/60 transition-transform group-hover:translate-x-0.5" />
          </div>
          <p className="mt-1 line-clamp-2 text-sm text-[#3A606E]">{description}</p>
        </div>
      </div>
    </button>
  );
}
