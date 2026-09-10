'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function ProductsCarousel() {
  const products = [
    {
      title: 'Gold Dust 1kg Box',
      href: '/gold-dust',
      img: '/upload/category/1788890816gold-dust.png',
      tag: 'Certified Purity',
    },
    {
      title: 'Raw Gold Bar',
      href: '/raw-gold-bar',
      img: '/upload/category/1788890691Raw-Gold-Bar.jpg',
      tag: 'Mined Sourced',
    },
    {
      title: 'Gold Bars',
      href: '/gold-bar',
      img: '/upload/category/1788895016gold-bar.jpg',
      tag: 'Investment Grade',
    },
    {
      title: '1kg Gold Bullion Bars',
      href: '/1kg-gold-bullion-bars',
      img: '/upload/category/17888913291kg-gold-bullion-bars.JPG',
      tag: '99.99% Pure',
    },
    {
      title: '24 Karat Gold',
      href: '/24-karat-gold',
      img: '/upload/category/178889118124-karat-gold.jpg',
      tag: 'Top Quality',
    },
    {
      title: 'Uncut Diamond',
      href: '/uncut-diamond',
      img: '/upload/category/1615809001Uncut-Diamond.jpg',
      tag: 'Natural Gem',
    },
    {
      title: 'White Diamond',
      href: '/white-diamond',
      img: '/upload/category/1615809028White-Diamond.png',
      tag: 'Wholesale Lots',
    },
    {
      title: 'Rough Diamond',
      href: '/rough-diamond',
      img: '/upload/category/1615809114Rough-Diamond.jpg',
      tag: 'Ethically Sourced',
    },
  ];

  const [startIndex, setStartIndex] = useState(0);
  const itemsPerPage = 4;

  const nextItems = () => {
    setStartIndex((prev) => (prev + 1) % (products.length - itemsPerPage + 1));
  };

  const prevItems = () => {
    setStartIndex((prev) => (prev === 0 ? products.length - itemsPerPage : prev - 1));
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-8">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 tracking-wide">
              Our Products
            </h2>
            <div className="w-16 h-1 bg-[#d97706] mt-3 rounded"></div>
          </div>

          {/* Navigation buttons */}
          <div className="flex items-center gap-2">
            <button
              onClick={prevItems}
              className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#d97706] hover:text-white text-neutral-700 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Previous products"
            >
              <ChevronLeft size={20} />
            </button>
            <button
              onClick={nextItems}
              className="w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#d97706] hover:text-white text-neutral-700 flex items-center justify-center transition-colors shadow-sm"
              aria-label="Next products"
            >
              <ChevronRight size={20} />
            </button>
          </div>
        </div>

        {/* Carousel items grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.slice(startIndex, startIndex + itemsPerPage).map((item) => (
            <div
              key={item.title}
              className="group bg-white rounded-lg border border-neutral-200 overflow-hidden shadow-card hover:shadow-xl transition-all duration-300 flex flex-col"
            >
              {/* Product Image */}
              <div className="relative w-full h-52 bg-neutral-900 overflow-hidden">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <span className="absolute top-3 left-3 bg-[#d97706] text-white text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm">
                  {item.tag}
                </span>
              </div>

              {/* Card Body */}
              <div className="p-5 flex-1 flex flex-col justify-between text-center bg-white">
                <h3 className="font-serif text-base font-bold text-neutral-800 mb-4 group-hover:text-[#d97706] transition-colors">
                  {item.title}
                </h3>

                <Link
                  href={item.href}
                  className="w-full py-2 px-4 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white text-xs font-bold uppercase tracking-wider rounded transition-colors shadow-sm"
                >
                  View Product
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
