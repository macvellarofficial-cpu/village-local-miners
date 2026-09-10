'use client';

import React, { useState } from 'react';
import { ChevronDown, Plus, Minus } from 'lucide-react';

export default function FAQAccordion() {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      q: '1. What products does Village Local Miners sell?',
      a: 'We sell 24 Karat Gold, 1kg Gold Bullion Bars, Diamond Carats, Gold Bars, Gold Dust, Gold Ore, and Raw Gold Bars worldwide directly from reputable mining communities in Cameroon.',
    },
    {
      q: '2. Is your gold certified and of high purity?',
      a: 'Yes, all our gold products are 24 Karat with a guaranteed purity of 99.99%. Each shipment includes proper certification, assay reports, and legal documentation.',
    },
    {
      q: '3. Do you offer international shipping?',
      a: 'Yes, we ship worldwide with secure, insured delivery via reputable air and sea cargo partners to ensure safe arrival at your preferred destination.',
    },
    {
      q: '4. How can I place an order?',
      a: 'You can place an order by contacting us directly through our website contact form, emailing info@localvillageminers.com, or calling/texting us at +256750625851.',
    },
    {
      q: '5. What payment methods do you accept?',
      a: 'We accept bank wire transfers, cryptocurrency, and other established secure trade payment options. Contact our sales department for specific transactional details.',
    },
    {
      q: '6. Can I buy in bulk?',
      a: 'Yes, we accommodate bulk orders and offer competitive wholesale pricing for large-scale institutional buyers, jewelers, and investors.',
    },
    {
      q: '7. How do you ensure the safe delivery of gold and diamonds?',
      a: 'We utilize certified security couriers, tamper-evident armored packaging, and comprehensive transit insurance to ensure your valuable minerals arrive safely and discreetly.',
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 bg-white border-t border-neutral-200">
      <div className="max-w-4xl mx-auto px-4 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="font-serif text-3xl sm:text-4xl font-bold text-neutral-800 tracking-wide">
            Frequently Asked Questions
          </h2>
          <div className="w-16 h-1 bg-[#d97706] mx-auto mt-3 rounded"></div>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={index}
                className="border border-neutral-200 rounded-lg overflow-hidden transition-colors shadow-sm"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className={`w-full flex items-center justify-between p-4 sm:p-5 text-left transition-colors font-medium text-sm sm:text-base ${
                    isOpen
                      ? 'bg-[#fef3c7] text-[#92400e] border-b border-[#fde68a]'
                      : 'bg-neutral-50 hover:bg-neutral-100 text-neutral-800'
                  }`}
                >
                  <span className="font-semibold">{faq.q}</span>
                  <span className="ml-4 shrink-0 text-[#d97706]">
                    {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                  </span>
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 text-xs sm:text-sm text-neutral-600 bg-white leading-relaxed">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
