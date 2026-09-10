'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Mail, Phone, MapPin, ChevronDown, Menu, X } from 'lucide-react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [goldDropdown, setGoldDropdown] = useState(false);
  const [productsDropdown, setProductsDropdown] = useState(false);
  const pathname = usePathname();

  const goldItems = [
    { title: 'Gold Sellers', href: '/gold-sellers' },
    { title: '1KG Gold Bars for Sale', href: '/1kg-gold-bars-for-sale' },
    { title: 'Where to Buy Gold', href: '/where-to-buy-gold' },
    { title: 'Buy Gold from', href: '/buy-gold-from' },
    { title: 'Where to Buy Gold Bars', href: '/where-to-buy-gold-bars' },
    { title: 'Gold Bar for Sale', href: '/gold-bar-for-sale' },
    { title: 'How to Buy Gold Bar', href: '/how-to-buy-gold-bar' },
    { title: 'Gold Suppliers', href: '/gold-suppliers' },
    { title: 'Buy Raw Gold from', href: '/buy-raw-gold-from' },
    { title: 'Rough Diamond Price', href: '/rough-diamond-price' },
    { title: 'Buy Gold Bar', href: '/buy-gold-bar' },
    { title: 'Gold Ore for Sale', href: '/gold-ore-for-sale' },
    { title: 'Buy Gold Biscuit', href: '/buy-gold-biscuit' },
    { title: 'Gold Dealers', href: '/gold-dealers' },
    { title: 'Gold Dust for Sale', href: '/gold-dust-for-sale' },
    { title: 'Buy Gold', href: '/buy-gold' },
    { title: 'Gold Price', href: '/gold-price' },
  ];

  const productItems = [
    { title: '1kg Gold Bullion Bars', href: '/1kg-gold-bullion-bars' },
    { title: '24 Karat Gold', href: '/24-karat-gold' },
    { title: 'Diamond Carat', href: '/diamond-carat' },
    { title: 'Diamond', href: '/diamond' },
    { title: 'Natural Diamond', href: '/natural-diamond' },
    { title: 'Rough Diamond', href: '/rough-diamond' },
    { title: 'Uncut Diamond', href: '/uncut-diamond' },
    { title: 'White Diamond', href: '/white-diamond' },
    { title: 'Gold Bar', href: '/gold-bar' },
    { title: 'Gold Dust', href: '/gold-dust' },
    { title: 'Gold Ore', href: '/gold-ore' },
    { title: 'Raw Gold Bar', href: '/raw-gold-bar' },
  ];

  return (
    <header className="w-full sticky top-0 z-50 shadow-md">
      {/* Top Header Bar */}
      <div className="bg-[#242424] text-white py-3 px-4 sm:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo Brand */}
          <Link href="/" className="flex items-center gap-2 group">
            <span className="font-serif text-2xl sm:text-3xl tracking-wide font-bold text-[#f59e0b] drop-shadow-sm group-hover:text-[#fbbf24] transition-colors">
              Village Local Miners
            </span>
          </Link>

          {/* Contact Details */}
          <div className="flex flex-wrap items-center justify-center md:justify-end gap-5 text-xs sm:text-sm text-neutral-300">
            {/* Email */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-[#f59e0b]">
                <Mail size={15} />
              </div>
              <div className="leading-tight">
                <span className="block text-[11px] text-neutral-400">Mail Us On:</span>
                <a href="mailto:info@localvillageminers.com" className="hover:text-[#f59e0b] transition-colors font-medium">
                  info@localvillageminers.com
                </a>
              </div>
            </div>

            {/* Phone */}
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-[#f59e0b]">
                <Phone size={15} />
              </div>
              <div className="leading-tight">
                <span className="block text-[11px] text-neutral-400">Text Us On:</span>
                <a href="tel:+256750625851" className="hover:text-[#f59e0b] transition-colors font-medium">
                  +256750625851
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="hidden lg:flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-[#333] flex items-center justify-center text-[#f59e0b]">
                <MapPin size={15} />
              </div>
              <div className="leading-tight max-w-[220px]">
                <span className="block text-[11px] text-neutral-400">Address:</span>
                <span className="truncate block font-medium">Entebbe Rd, Kampala Uganda</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className="bg-white border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-8 flex items-center justify-between h-14">
          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center space-x-8 font-medium text-sm text-neutral-700">
            <Link 
              href="/" 
              className={`hover:text-[#d97706] transition-colors py-4 ${pathname === '/' ? 'text-[#d97706] font-semibold border-b-2 border-[#d97706]' : ''}`}
            >
              Home
            </Link>

            <Link 
              href="/about-us" 
              className={`hover:text-[#d97706] transition-colors py-4 ${pathname === '/about-us' ? 'text-[#d97706] font-semibold border-b-2 border-[#d97706]' : ''}`}
            >
              About Us
            </Link>

            {/* Gold Dropdown */}
            <div 
              className="relative group py-4"
              onMouseEnter={() => setGoldDropdown(true)}
              onMouseLeave={() => setGoldDropdown(false)}
            >
              <Link 
                href="/gold" 
                className={`flex items-center gap-1 hover:text-[#d97706] transition-colors ${pathname.includes('/gold') ? 'text-[#d97706] font-semibold' : ''}`}
              >
                <span>Gold</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {/* Submenu */}
              {goldDropdown && (
                <div className="absolute left-0 top-full w-64 bg-[#222222] text-white shadow-2xl py-2 z-50 rounded-b-md border-t-2 border-[#f59e0b] max-h-96 overflow-y-auto">
                  {goldItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-[#333] transition-colors border-b border-neutral-800 last:border-none"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Our Products Dropdown */}
            <div 
              className="relative group py-4"
              onMouseEnter={() => setProductsDropdown(true)}
              onMouseLeave={() => setProductsDropdown(false)}
            >
              <Link 
                href="/our-products" 
                className={`flex items-center gap-1 hover:text-[#d97706] transition-colors ${pathname.includes('/our-products') ? 'text-[#d97706] font-semibold' : ''}`}
              >
                <span>Our Products</span>
                <ChevronDown size={14} className="group-hover:rotate-180 transition-transform duration-200" />
              </Link>

              {/* Submenu */}
              {productsDropdown && (
                <div className="absolute left-0 top-full w-64 bg-[#222222] text-white shadow-2xl py-2 z-50 rounded-b-md border-t-2 border-[#f59e0b]">
                  {productItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className="block px-4 py-2 text-xs text-neutral-300 hover:text-white hover:bg-[#333] transition-colors border-b border-neutral-800 last:border-none"
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link 
              href="/gallery" 
              className={`hover:text-[#d97706] transition-colors py-4 ${pathname === '/gallery' ? 'text-[#d97706] font-semibold border-b-2 border-[#d97706]' : ''}`}
            >
              Gallery
            </Link>

            <Link 
              href="/contact-us" 
              className={`hover:text-[#d97706] transition-colors py-4 ${pathname === '/contact-us' ? 'text-[#d97706] font-semibold border-b-2 border-[#d97706]' : ''}`}
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center justify-between w-full">
            <span className="text-sm font-semibold text-neutral-700">Menu</span>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded text-neutral-700 hover:text-[#d97706] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#242424] text-white px-4 py-4 space-y-3 border-t border-neutral-700 animate-fadeIn">
            <Link 
              href="/" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium border-b border-neutral-800 hover:text-[#f59e0b]"
            >
              Home
            </Link>
            <Link 
              href="/about-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium border-b border-neutral-800 hover:text-[#f59e0b]"
            >
              About Us
            </Link>
            <Link 
              href="/gold" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium border-b border-neutral-800 hover:text-[#f59e0b]"
            >
              Gold Collection
            </Link>
            <Link 
              href="/our-products" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium border-b border-neutral-800 hover:text-[#f59e0b]"
            >
              Our Products
            </Link>
            <Link 
              href="/gallery" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium border-b border-neutral-800 hover:text-[#f59e0b]"
            >
              Gallery
            </Link>
            <Link 
              href="/contact-us" 
              onClick={() => setMobileMenuOpen(false)}
              className="block py-2 text-sm font-medium hover:text-[#f59e0b]"
            >
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
}
