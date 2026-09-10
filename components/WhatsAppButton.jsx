'use client';

import React from 'react';
import Image from 'next/image';

export default function WhatsAppButton() {
  return (
    <aside 
      aria-label="Contact options"
      className="fixed bottom-6 right-6 z-50 group flex items-center gap-2"
    >
      <span className="hidden group-hover:inline-block bg-[#1f2937] text-white text-xs font-semibold py-1.5 px-3 rounded-full shadow-lg transition-all duration-300">
        Chat with us on WhatsApp
      </span>
      <a
        href="https://wa.me/256750625851?text=Hello%20Village%20Local%20Miners,%20I%20am%20interested%20in%20your%20gold%20and%20diamond%20products."
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 bg-[#25D366] hover:bg-[#20ba59] rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 active:scale-95 animate-bounce-short"
        aria-label="Chat with Village Local Miners on WhatsApp"
      >
        <Image
          src="/images/WhatsApp_icon.png.webp"
          alt="WhatsApp Chat"
          width={40}
          height={40}
          className="object-contain"
        />
      </a>
    </aside>
  );
}
