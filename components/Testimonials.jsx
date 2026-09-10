'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

export default function Testimonials() {
  const reviews = [
    {
      name: 'Antonio B - Colorado',
      comment:
        'Exceptional service and high-quality gold! I ordered a bulk shipment, and everything arrived as promised. The purity of the gold was exactly as described. Highly recommended!',
    },
    {
      name: 'Johan V - USA',
      comment:
        'Village Local Miners is a trusted company for buying gold and diamonds. Their customer support team guided me through the process, and delivery was on time. Will buy again.',
    },
    {
      name: 'Deniel - Alabama',
      comment:
        'I was hesitant at first, but Village Local Miners proved to be a reliable gold supplier. The pricing is fair, and the transaction was smooth. Great experience!',
    },
    {
      name: 'Emmanuel O - Ontario, Canada',
      comment:
        'I purchased diamonds from them, and I must say the quality was outstanding. Their team ensured proper documentation and certification. Very satisfied.',
    },
    {
      name: 'Daniel - Houston, Texas',
      comment:
        'Fast and secure delivery! The gold was well-packaged, and the quality exceeded my expectations. I will definitely be making more purchases.',
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const prevReview = () => {
    setCurrentIndex((prev) => (prev === 0 ? reviews.length - 1 : prev - 1));
  };

  const nextReview = () => {
    setCurrentIndex((prev) => (prev + 1) % reviews.length);
  };

  const active = reviews[currentIndex];

  return (
    <section className="py-16 bg-neutral-100 border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8 text-center">
        <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 tracking-wide mb-3">
          Buyer Feedback
        </h2>
        <div className="w-16 h-1 bg-[#d97706] mx-auto mb-10 rounded"></div>

        <div className="relative bg-white p-8 sm:p-12 rounded-2xl shadow-card border border-neutral-200">
          {/* Avatar Icon */}
          <div className="w-20 h-20 mx-auto rounded-full overflow-hidden border-4 border-[#f59e0b] shadow-md mb-6 relative">
            <Image
              src="/images/testimonial.jpg"
              alt={active.name}
              fill
              className="object-cover"
            />
          </div>

          {/* Rating stars */}
          <div className="flex justify-center gap-1 text-[#f59e0b] mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={18} fill="#f59e0b" />
            ))}
          </div>

          {/* Quote */}
          <p className="text-sm sm:text-base text-neutral-700 italic leading-relaxed mb-6 max-w-2xl mx-auto">
            &ldquo;{active.comment}&rdquo;
          </p>

          {/* Author Name */}
          <div className="font-serif font-bold text-[#d97706] text-base sm:text-lg">
            {active.name}
          </div>

          {/* Arrows */}
          <button
            onClick={prevReview}
            className="absolute left-3 sm:left-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#d97706] hover:text-white text-neutral-700 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Previous review"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            onClick={nextReview}
            className="absolute right-3 sm:right-6 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-neutral-100 hover:bg-[#d97706] hover:text-white text-neutral-700 flex items-center justify-center transition-colors shadow-sm"
            aria-label="Next review"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
}
