'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ChevronLeft, ChevronRight } from 'lucide-react';

export default function HeroSlider() {
  const slides = [
    {
      img: '/images/first-slider.jpg',
      title: 'Premium 24K Gold & Certified Bullion',
      subtitle: 'Sourced Ethically from Cameroon Mining Communities',
    },
    {
      img: '/images/second-slider.jpg',
      title: 'Direct Wholesale Gold & Natural Diamonds',
      subtitle: 'Unmatched Purity 99.99% with Insured Worldwide Export',
    },
    {
      img: '/images/third-slider.jpg',
      title: 'Trusted Mining Community in Cameroon',
      subtitle: 'Competitive Pricing with Full Legal Export Documentation',
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  return (
    <section className="relative w-full h-[400px] sm:h-[500px] lg:h-[600px] overflow-hidden bg-black">
      {/* Slides */}
      {slides.map((slide, index) => (
        <div
          key={slide.img}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0 pointer-events-none'
          }`}
        >
          <Image
            src={slide.img}
            alt={slide.title}
            fill
            priority={index === 0}
            className="object-cover object-center"
          />
          {/* Subtle Dark Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-black/30 flex items-center justify-center text-center px-4">
            <div className="max-w-3xl text-white space-y-4 animate-fadeIn">
              <span className="inline-block text-xs sm:text-sm font-semibold tracking-widest uppercase text-[#fbbf24] px-4 py-1 rounded-full bg-black/40 backdrop-blur-sm border border-[#fbbf24]/30">
                Village Local Miners
              </span>
              <h1 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold tracking-wide text-white drop-shadow-md">
                {slide.title}
              </h1>
              <p className="text-sm sm:text-lg text-neutral-200 drop-shadow">
                {slide.subtitle}
              </p>
              <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
                <Link
                  href="/gold"
                  className="px-6 py-2.5 sm:px-8 sm:py-3 bg-gradient-to-r from-[#f59e0b] to-[#d97706] text-white font-semibold rounded-md shadow-gold hover:from-[#d97706] hover:to-[#b45309] transition-all transform hover:-translate-y-0.5"
                >
                  Explore Gold
                </Link>
                <Link
                  href="/contact-us"
                  className="px-6 py-2.5 sm:px-8 sm:py-3 bg-black/50 hover:bg-black/70 text-white font-semibold rounded-md border border-white/30 backdrop-blur-sm transition-all transform hover:-translate-y-0.5"
                >
                  Contact Us
                </Link>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-[#d97706] text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
        aria-label="Previous Slide"
      >
        <ChevronLeft size={24} />
      </button>

      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 w-11 h-11 bg-black/40 hover:bg-[#d97706] text-white rounded-full flex items-center justify-center backdrop-blur-sm transition-all"
        aria-label="Next Slide"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dot Indicators */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {slides.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentSlide(i)}
            className={`w-3 h-3 rounded-full transition-all ${
              i === currentSlide ? 'bg-[#f59e0b] w-8' : 'bg-white/50 hover:bg-white'
            }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
