import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import HeroSlider from '../components/HeroSlider';
import HangingBadges from '../components/HangingBadges';
import WhyChooseUs from '../components/WhyChooseUs';
import CalloutBanner from '../components/CalloutBanner';
import ProductsCarousel from '../components/ProductsCarousel';
import CounterStats from '../components/CounterStats';
import Testimonials from '../components/Testimonials';
import FAQAccordion from '../components/FAQAccordion';

export const metadata = {
  title: 'Village Local Miners | Leading Gold Miners, 24K Bullion & Rough Diamond Exporters',
  description: 'Buy gold bars, 1kg gold bullion, natural alluvial gold dust, and certified rough diamonds directly from Village Local Miners. 99.99% purity guaranteed with secure worldwide shipping.',
  alternates: {
    canonical: 'https://www.localvillageminers.com',
  },
  openGraph: {
    title: 'Village Local Miners | Leading Gold Miners & Diamond Exporters',
    description: 'Certified 24K gold bullion, gold dust, and rough diamonds directly from local mining communities with insured export documentation.',
    url: 'https://www.localvillageminers.com',
  },
};

export default function HomePage() {
  return (
    <div>
      {/* Hero Slider */}
      <HeroSlider />

      {/* 4 Hanging Chevron Badge Cards */}
      <HangingBadges />

      {/* Welcome / About Company Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-5">
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl font-bold text-neutral-800 tracking-tight leading-snug">
                Village Local Miners &ndash; Exporters and Suppliers of Gold and Diamond in Cameroon
              </h2>
              <div className="w-20 h-1.5 bg-[#d97706] rounded"></div>

              <div className="text-xs sm:text-sm text-neutral-600 leading-relaxed space-y-4">
                <p>
                  <strong className="text-neutral-800">Village Local Miners</strong> is a trusted global gold and diamond mining, supply, and export company serving buyers, investors, jewelers, and wholesalers worldwide. We specialize in supplying high-purity gold and natural diamonds sourced directly from artisanal mining communities in Cameroon through ethical, transparent, and legally compliant trade practices.
                </p>
                <p>
                  All gold supplied by Village Local Miners is carefully tested and documented to meet international standards of purity and authenticity. Our gold portfolio includes 24-carat gold bars with 99.99% purity, 1kg standard gold bullion bars, raw gold nuggets, and gold dust for industrial and jewelry production.
                </p>
                <p>
                  Alongside gold, we are a reliable supplier of certified natural rough and uncut diamonds to global buyers. Every shipment is supported by proper Kimberley Process certification, assay reports, and customs export clearance.
                </p>
              </div>

              <div className="pt-2 flex items-center gap-4">
                <Link
                  href="/about-us"
                  className="px-6 py-2.5 bg-[#d97706] hover:bg-[#b45309] text-white font-bold uppercase tracking-wider text-xs rounded shadow-md transition-colors"
                >
                  Learn More About Us
                </Link>
                <Link
                  href="/gold"
                  className="px-6 py-2.5 bg-neutral-800 hover:bg-neutral-900 text-white font-bold uppercase tracking-wider text-xs rounded transition-colors"
                >
                  View Gold Catalog
                </Link>
              </div>
            </div>

            {/* Right Image with Golden Frame */}
            <div className="lg:col-span-5">
              <div className="relative p-2 bg-gradient-to-tr from-[#d97706] via-[#f59e0b] to-[#fde68a] rounded-xl shadow-2xl">
                <div className="relative w-full h-[320px] sm:h-[400px] rounded-lg overflow-hidden bg-neutral-900">
                  <Image
                    src="/upload/banner/1738699103welcome.jpg"
                    alt="Artisanal gold mining operations in Cameroon"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <WhyChooseUs />

      {/* Quote Callout Banner */}
      <CalloutBanner />

      {/* Products Carousel */}
      <ProductsCarousel />

      {/* Statistics Counter */}
      <CounterStats />

      {/* Buyer Feedback Testimonials */}
      <Testimonials />

      {/* Frequently Asked Questions */}
      <FAQAccordion />
    </div>
  );
}
