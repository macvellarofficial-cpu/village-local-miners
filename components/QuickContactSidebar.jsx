'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Send, CheckCircle2 } from 'lucide-react';

export default function QuickContactSidebar() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          subject: 'Quick Sidebar Inquiry',
        }),
      });
      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', message: '' });
        }, 5000);
      } else {
        setSubmitted(true);
      }
    } catch (err) {
      console.error(err);
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  const productLinks = [
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
    { title: 'Rough Diamond', href: '/rough-diamond' },
  ];

  return (
    <aside className="space-y-8">
      {/* Quick Contact Box */}
      <div className="bg-[#242424] text-white rounded-lg overflow-hidden shadow-xl border border-neutral-800">
        <div className="bg-[#d97706] px-5 py-3 text-center">
          <h3 className="font-serif font-bold text-base tracking-wider uppercase text-white">
            Quick Contact
          </h3>
          <p className="text-[10px] text-amber-100 mt-0.5">info@localvillageminers.com</p>
        </div>

        <div className="p-5">
          {submitted ? (
            <div className="py-8 text-center space-y-3">
              <CheckCircle2 size={40} className="text-[#22c55e] mx-auto animate-bounce" />
              <p className="font-semibold text-white text-sm">Sent to info@localvillageminers.com!</p>
              <p className="text-xs text-neutral-300">
                Our sales representative will reach back out to you shortly.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs sm:text-sm">
              <div>
                <label htmlFor="qc-name" className="block text-neutral-300 font-medium mb-1">Full Name *</label>
                <input
                  id="qc-name"
                  type="text"
                  required
                  placeholder="Your Full Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#333] border border-neutral-700 rounded text-white placeholder-neutral-500 focus:outline-none focus:border-[#d97706]"
                />
              </div>

              <div>
                <label htmlFor="qc-email" className="block text-neutral-300 font-medium mb-1">Email Address *</label>
                <input
                  id="qc-email"
                  type="email"
                  required
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#333] border border-neutral-700 rounded text-white placeholder-neutral-500 focus:outline-none focus:border-[#d97706]"
                />
              </div>

              <div>
                <label htmlFor="qc-phone" className="block text-neutral-300 font-medium mb-1">Phone Number</label>
                <input
                  id="qc-phone"
                  type="tel"
                  placeholder="Include country code"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#333] border border-neutral-700 rounded text-white placeholder-neutral-500 focus:outline-none focus:border-[#d97706]"
                />
              </div>

              <div>
                <label htmlFor="qc-message" className="block text-neutral-300 font-medium mb-1">Your Message *</label>
                <textarea
                  id="qc-message"
                  required
                  rows={4}
                  placeholder="Quantity, purity request, or questions..."
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-3 py-2.5 bg-[#333] border border-neutral-700 rounded text-white placeholder-neutral-500 focus:outline-none focus:border-[#d97706] resize-none"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#d97706] hover:bg-[#b45309] text-white font-bold uppercase tracking-wider text-xs rounded transition-colors flex items-center justify-center gap-2 shadow-md"
              >
                <Send size={14} />
                <span>Submit Inquiry</span>
              </button>
            </form>
          )}
        </div>
      </div>

      {/* Our Products Widget */}
      <div className="bg-[#242424] text-white rounded-lg overflow-hidden shadow-xl border border-neutral-800">
        <div className="bg-[#d97706] px-5 py-3 text-center">
          <h3 className="font-serif font-bold text-base tracking-wider uppercase text-white">
            Our Products
          </h3>
        </div>

        <ul className="divide-y divide-neutral-800 text-xs sm:text-sm">
          {productLinks.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="block px-5 py-2.5 text-neutral-300 hover:text-white hover:bg-[#333] transition-colors"
              >
                {p.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
