import React from 'react';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';

export default function BreadcrumbBanner({ title, breadcrumb }) {
  return (
    <section 
      className="relative py-16 sm:py-20 bg-cover bg-center text-white border-b-4 border-[#d97706]"
      style={{ backgroundImage: "url('/images/background-banner.jpg')" }}
    >
      {/* Dark tint overlay */}
      <div className="absolute inset-0 bg-black/60 backdrop-blur-[1px]"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 z-10">
        <h1 className="font-serif text-3xl sm:text-4xl font-bold tracking-wide text-white drop-shadow-md border-b-2 border-[#f59e0b] pb-1">
          {title}
        </h1>

        <div className="flex items-center gap-2 text-xs sm:text-sm font-medium text-neutral-200">
          <Link href="/" className="hover:text-[#f59e0b] transition-colors">
            Home
          </Link>
          <span className="text-[#f59e0b]">&raquo;</span>
          <span className="text-[#fbbf24] font-semibold">{breadcrumb || title}</span>
        </div>
      </div>
    </section>
  );
}
