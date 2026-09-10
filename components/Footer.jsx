import React from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Globe, ChevronRight, MessageCircle } from 'lucide-react';

export default function Footer() {
  const usefulLinks = [
    { title: 'Home', href: '/' },
    { title: 'About Us', href: '/about-us' },
    { title: 'Gallery', href: '/gallery' },
    { title: 'Contact Us', href: '/contact-us' },
    { title: 'Service Area', href: '/service-area' },
  ];

  const productLinks = [
    { title: 'Our Products', href: '/our-products' },
    { title: '24 Karat Gold', href: '/24-karat-gold' },
    { title: 'Uncut Diamond', href: '/uncut-diamond' },
    { title: 'White Diamond', href: '/white-diamond' },
    { title: '1kg Gold Bullion Bars', href: '/1kg-gold-bullion-bars' },
    { title: 'Diamond Carat', href: '/diamond-carat' },
    { title: 'Gold Bar', href: '/gold-bar' },
    { title: 'Gold Dust', href: '/gold-dust' },
    { title: 'Gold Ore', href: '/gold-ore' },
    { title: 'Raw Gold Bar', href: '/raw-gold-bar' },
    { title: 'Diamond', href: '/diamond' },
    { title: 'Natural Diamond', href: '/natural-diamond' },
  ];

  return (
    <footer className="relative bg-[#1a1a1a] text-neutral-300 overflow-hidden border-t-2 border-[#d97706]">
      {/* Background Graphic overlay */}
      <div 
        className="absolute inset-0 opacity-15 pointer-events-none bg-cover bg-center"
        style={{ backgroundImage: "url('/images/background-banner.jpg')" }}
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-8 pt-16 pb-12 z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          
          {/* Col 1: About Us */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-white tracking-wide border-b border-neutral-700 pb-2 inline-block">
              About <span className="text-[#f59e0b]">Us</span>
            </h4>
            <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed">
              Village Local Miners is one of the well known mining community and seller of Gold Bar, Gold Ore, Raw Gold Bars, Gold Dust, Diamond Carat, 24 Carat Gold and Gold Bullion 1 KG Bars in Cameroon, Village Local Miners is actually managed by Mr. Samuel Njie. Under his management and guidance, our company is moving towards great success and unmatched heights.
            </p>
            <div>
              <Link 
                href="/about-us" 
                className="inline-block px-5 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#d97706] hover:bg-[#b45309] rounded transition-colors shadow-md"
              >
                Read More
              </Link>
            </div>
          </div>

          {/* Col 2: Useful Links */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-white tracking-wide border-b border-neutral-700 pb-2 inline-block">
              Useful <span className="text-[#f59e0b]">Links</span>
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm">
              {usefulLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-1.5 text-neutral-300 hover:text-[#f59e0b] transition-colors py-1 group"
                  >
                    <ChevronRight size={14} className="text-[#f59e0b] group-hover:translate-x-1 transition-transform" />
                    <span>{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Our Products */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-white tracking-wide border-b border-neutral-700 pb-2 inline-block">
              Our <span className="text-[#f59e0b]">Products</span>
            </h4>
            <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-1.5 text-xs sm:text-sm">
              {productLinks.map((link) => (
                <li key={link.href}>
                  <Link 
                    href={link.href}
                    className="flex items-center gap-1.5 text-neutral-300 hover:text-[#f59e0b] transition-colors py-0.5 group"
                  >
                    <ChevronRight size={13} className="text-[#f59e0b] group-hover:translate-x-1 transition-transform" />
                    <span className="truncate">{link.title}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4: Contact Us */}
          <div className="space-y-4">
            <h4 className="font-serif text-xl font-bold text-white tracking-wide border-b border-neutral-700 pb-2 inline-block">
              Contact <span className="text-[#f59e0b]">Us</span>
            </h4>
            <ul className="space-y-3 text-xs sm:text-sm text-neutral-300">
              <li className="font-bold text-[#f59e0b] text-base">
                Village Local Miners
              </li>
              <li className="flex items-start gap-2.5">
                <Mail size={16} className="text-[#f59e0b] mt-0.5 shrink-0" />
                <div className="space-y-1">
                  <a href="mailto:info@localvillageminers.com" className="block hover:text-white transition-colors break-all">
                    info@localvillageminers.com
                  </a>
                  <a href="mailto:hotmail.villagelocalminers@gmail.com" className="block text-neutral-400 hover:text-white transition-colors break-all text-xs">
                    hotmail.villagelocalminers@gmail.com
                  </a>
                </div>
              </li>
              <li className="flex items-start gap-2.5">
                <Phone size={16} className="text-[#f59e0b] mt-0.5 shrink-0" />
                <a href="tel:+256750625851" className="hover:text-white transition-colors">
                  Text: +256750625851
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MessageCircle size={16} className="text-[#25D366] mt-0.5 shrink-0" />
                <a href="https://wa.me/256750625851" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-colors">
                  WhatsApp: +256750625851
                </a>
              </li>
              <li className="flex items-start gap-2.5">
                <MapPin size={16} className="text-[#f59e0b] mt-0.5 shrink-0" />
                <span>Entebbe Rd, Kampala Uganda</span>
              </li>
              <li className="flex items-start gap-2.5">
                <Globe size={16} className="text-[#f59e0b] mt-0.5 shrink-0" />
                <a href="https://www.villagelocalminers.com" className="hover:text-white transition-colors">
                  www.villagelocalminers.com
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="bg-[#111111] py-4 px-4 text-center border-t border-neutral-800">
        <p className="text-xs sm:text-sm text-[#b45309] font-serif">
          Copyright © 2026 Village Local Miners. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
