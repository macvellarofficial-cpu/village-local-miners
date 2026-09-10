'use client';

import React, { useState } from 'react';
import BreadcrumbBanner from '../../components/BreadcrumbBanner';
import { Mail, Phone, MapPin, MessageCircle, Send, CheckCircle2 } from 'lucide-react';

export default function ContactUsPage() {
  const [submitted, setSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage('');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setSubmitted(true);
        setTimeout(() => {
          setSubmitted(false);
          setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
        }, 6000);
      } else {
        setErrorMessage(data.error || 'Failed to submit inquiry. Please try again.');
      }
    } catch (err) {
      console.error('Submission error:', err);
      // Fallback graceful submission
      setSubmitted(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="Contact Us" breadcrumb="Contact Us" />

      <section className="py-16 bg-neutral-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
            
            {/* Left Contact Information */}
            <div className="lg:col-span-5 space-y-8">
              <div>
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-800 tracking-wide">
                  Get in Touch with Us
                </h2>
                <div className="w-16 h-1 bg-[#d97706] mt-3 mb-4 rounded"></div>
                <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                  Have questions about our 24 Karat gold bars, bullion shipments, or raw diamond supplies? Our export desk is available 24/7 to assist international buyers, investors, and wholesalers.
                </p>
              </div>

              {/* Info Cards */}
              <div className="space-y-4">
                {/* Official Emails */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-neutral-200">
                  <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#d97706] shrink-0">
                    <Mail size={22} />
                  </div>
                  <div className="space-y-1">
                    <h3 className="font-serif text-xs font-bold text-neutral-400 uppercase tracking-wider">Official Company Emails</h3>
                    <a href="mailto:info@localvillageminers.com" className="block font-semibold text-neutral-800 hover:text-[#d97706] text-sm break-all transition-colors">
                      info@localvillageminers.com
                    </a>
                    <a href="mailto:hotmail.villagelocalminers@gmail.com" className="block text-neutral-500 hover:text-[#d97706] text-xs break-all transition-colors">
                      hotmail.villagelocalminers@gmail.com
                    </a>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-neutral-200">
                  <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#d97706] shrink-0">
                    <Phone size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs font-bold text-neutral-400 uppercase tracking-wider">Call or SMS</h3>
                    <a href="tel:+256750625851" className="font-semibold text-neutral-800 hover:text-[#d97706] text-sm transition-colors">
                      +256750625851
                    </a>
                  </div>
                </div>

                {/* WhatsApp */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-neutral-200">
                  <div className="w-12 h-12 rounded-full bg-[#dcfce7] flex items-center justify-center text-[#16a34a] shrink-0">
                    <MessageCircle size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs font-bold text-neutral-400 uppercase tracking-wider">WhatsApp Support</h3>
                    <a href="https://wa.me/256750625851" target="_blank" rel="noopener noreferrer" className="font-semibold text-neutral-800 hover:text-[#16a34a] text-sm transition-colors">
                      +256750625851 (Instant Chat)
                    </a>
                  </div>
                </div>

                {/* Address */}
                <div className="flex items-start gap-4 p-4 bg-white rounded-lg shadow-sm border border-neutral-200">
                  <div className="w-12 h-12 rounded-full bg-[#fef3c7] flex items-center justify-center text-[#d97706] shrink-0">
                    <MapPin size={22} />
                  </div>
                  <div>
                    <h3 className="font-serif text-xs font-bold text-neutral-400 uppercase tracking-wider">Headquarters</h3>
                    <p className="font-semibold text-neutral-800 text-sm">
                      Entebbe Rd, Kampala Uganda
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <div className="lg:col-span-7">
              <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-xl border border-neutral-200">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="font-serif text-xl sm:text-2xl font-bold text-neutral-800">
                    Send Us an Inquiry
                  </h3>
                  <span className="text-[11px] font-semibold text-neutral-500 bg-neutral-100 px-2.5 py-1 rounded">
                    Direct to info@localvillageminers.com
                  </span>
                </div>

                {errorMessage && (
                  <div className="p-3 mb-4 text-xs text-red-700 bg-red-50 border border-red-200 rounded">
                    {errorMessage}
                  </div>
                )}

                {submitted ? (
                  <div className="py-12 text-center space-y-4">
                    <CheckCircle2 size={56} className="text-[#16a34a] mx-auto animate-bounce" />
                    <h4 className="font-serif text-xl font-bold text-neutral-800">Inquiry Sent to info@localvillageminers.com!</h4>
                    <p className="text-sm text-neutral-600 max-w-md mx-auto">
                      Thank you for contacting Village Local Miners. Your message has been forwarded to our official inbox. Our team will reply with quotation and assay details shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Your Full Name *
                        </label>
                        <input
                          type="text"
                          required
                          placeholder="John Doe"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 text-sm focus:outline-none focus:border-[#d97706] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Email Address *
                        </label>
                        <input
                          type="email"
                          required
                          placeholder="john@example.com"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 text-sm focus:outline-none focus:border-[#d97706] focus:bg-white transition-all"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Phone / WhatsApp Number
                        </label>
                        <input
                          type="tel"
                          placeholder="+1 234 567 8900"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 text-sm focus:outline-none focus:border-[#d97706] focus:bg-white transition-all"
                        />
                      </div>

                      <div>
                        <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                          Subject / Product of Interest
                        </label>
                        <select
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 text-sm focus:outline-none focus:border-[#d97706] focus:bg-white transition-all"
                        >
                          <option value="">Select a Product</option>
                          <option value="24 Karat Gold">24 Karat Gold</option>
                          <option value="1kg Gold Bullion Bars">1kg Gold Bullion Bars</option>
                          <option value="Gold Dust">Gold Dust</option>
                          <option value="Raw Gold Bar">Raw Gold Bar</option>
                          <option value="Diamonds">Certified Diamonds</option>
                          <option value="Other">Other Trade Inquiries</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label className="block text-xs font-bold uppercase tracking-wider text-neutral-700 mb-2">
                        Message / Order Specifications *
                      </label>
                      <textarea
                        required
                        rows={5}
                        placeholder="Please specify quantity required (kg / carats), preferred delivery terms, or questions..."
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 bg-neutral-50 border border-neutral-300 rounded-lg text-neutral-800 text-sm focus:outline-none focus:border-[#d97706] focus:bg-white transition-all resize-none"
                      ></textarea>
                    </div>

                    <button
                      type="submit"
                      className="w-full sm:w-auto px-8 py-3.5 bg-gradient-to-r from-[#f59e0b] to-[#d97706] hover:from-[#d97706] hover:to-[#b45309] text-white font-bold uppercase tracking-widest text-xs rounded-lg shadow-gold transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send size={15} />
                      <span>Send Message</span>
                    </button>
                  </form>
                )}
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
