import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BreadcrumbBanner from '../../components/BreadcrumbBanner';
import WhyChooseUs from '../../components/WhyChooseUs';
import CounterStats from '../../components/CounterStats';

export const metadata = {
  title: 'About Us | Village Local Miners - Established Mining Community & Gold Exporters',
  description: 'Learn about Village Local Miners, managed by Mr. Samuel Njie. An established artisanal mining community supplying 24K gold bullion, alluvial gold dust, and rough diamonds with ethical sourcing.',
  alternates: {
    canonical: 'https://www.localvillageminers.com/about-us',
  },
  openGraph: {
    title: 'About Village Local Miners | Gold Mining & Precious Mineral Export',
    description: 'Managed by Mr. Samuel Njie, Village Local Miners provides authentic 24K gold and rough diamonds directly to international markets.',
    url: 'https://www.localvillageminers.com/about-us',
    images: [{ url: '/upload/banner/1738774471about-us.jpg', width: 800, height: 600, alt: 'Artisanal Gold Mining Operations' }],
  },
};

export default function AboutUsPage() {
  return (
    <div>
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="About Us" breadcrumb="About Us" />

      {/* Main Content Section matching input_file_0.png */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column (Content) */}
            <div className="lg:col-span-8 space-y-6 text-neutral-700 text-sm sm:text-base leading-relaxed">
              <p>
                <strong className="text-neutral-900">Village Local Miners</strong> is one of the well known mining community and seller of Gold Bar, Gold Ore, Raw Gold Bars, Gold Dust, Diamond Carat, 24 Carat Gold and Gold Bullion 1 KG Bars in Cameroon, Village Local Miners is actually managed by Mr. Samuel Njie. Under his management and guidance, this company is moving towards great success and unmatched heights. It is tough competition to its competitors due to its finest quality and affordable price.
              </p>

              <p>
                It is handled by a team of quality professionals who know how to make new clients and how to satiate the needs of the existing one. We have the best product delivery staff members who guarantee smooth delivery of products on time. All we need is customer&rsquo;s satisfaction, and for this we are ready to move some extra miles.
              </p>

              {/* Why Us Heading */}
              <div className="pt-4">
                <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-800 tracking-wide border-b-2 border-[#d97706] pb-2 inline-block">
                  Why Us?
                </h2>
              </div>

              <p>
                Our company delivers the ordered products within stipulated time. Also, we assure the finest quality of products at the best possible price which makes us slightly unique from our competitors. We follow best business ethics and always work for the client satisfaction.
              </p>

              <div className="pt-4 flex items-center gap-4">
                <Link
                  href="/contact-us"
                  className="px-6 py-3 bg-[#d97706] hover:bg-[#b45309] text-white font-bold uppercase tracking-wider text-xs rounded shadow-md transition-colors"
                >
                  Contact Our Team
                </Link>
                <Link
                  href="/gallery"
                  className="px-6 py-3 bg-neutral-800 hover:bg-neutral-900 text-white font-bold uppercase tracking-wider text-xs rounded transition-colors"
                >
                  View Operations Gallery
                </Link>
              </div>
            </div>

            {/* Right Column (Miner Photo with Gold Border matching input_file_0.png) */}
            <div className="lg:col-span-4">
              <div className="p-3 bg-gradient-to-b from-[#f59e0b] to-[#b45309] rounded-xl shadow-2xl">
                <div className="relative w-full h-[380px] rounded-lg overflow-hidden bg-neutral-900 border-2 border-white/40">
                  <Image
                    src="/upload/banner/1738774471about-us.jpg"
                    alt="Village Local Miners artisan gold mining pit in Cameroon"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <p className="text-center text-xs text-neutral-500 mt-3 italic">
                Artisanal alluvial gold pit extraction in East Region, Cameroon.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* Why Choose Us Features */}
      <WhyChooseUs />

      {/* Counter Statistics */}
      <CounterStats />
    </div>
  );
}
