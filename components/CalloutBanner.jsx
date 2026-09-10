import React from 'react';
import Link from 'next/link';

export default function CalloutBanner() {
  return (
    <section className="relative py-20 bg-cover bg-center text-white overflow-hidden" style={{ backgroundImage: "url('/images/background-banner.jpg')" }}>
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black/75 backdrop-blur-[2px]"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-8 text-center space-y-6 z-10">
        <p className="font-serif text-xl sm:text-2xl md:text-3xl lg:text-4xl font-medium tracking-wide leading-relaxed text-neutral-100">
          &ldquo;Are you looking to buy Gold or Diamond in Cameroon at competitive price? Your search ends at Village Local Miners&rdquo;
        </p>

        <div className="pt-4">
          <Link
            href="/contact-us"
            className="inline-block px-8 py-3.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white font-bold uppercase tracking-widest text-xs sm:text-sm rounded shadow-gold transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
