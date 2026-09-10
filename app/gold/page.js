import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BreadcrumbBanner from '../../components/BreadcrumbBanner';
import QuickContactSidebar from '../../components/QuickContactSidebar';

export const metadata = {
  title: 'Gold for Sale | 24K Gold Bars, Bullion & Dust Wholesale - Village Local Miners',
  description: 'Buy gold bars, 1kg bullion bars, raw doré nuggets, and alluvial gold dust directly from Village Local Miners. Guaranteed 99.99% purity with certified assay documentation and insured export.',
  alternates: {
    canonical: 'https://www.localvillageminers.com/gold',
  },
  openGraph: {
    title: 'Gold for Sale | 24K Gold Bars & Bullion Wholesale',
    description: 'Certified gold bars, 1000g bullion, and raw doré from licensed mining claims. Inquire today for wholesale quotes.',
    url: 'https://www.localvillageminers.com/gold',
    images: [{ url: '/upload/category/1788895016gold-bar.jpg', width: 600, height: 400, alt: 'Gold Bars Stack' }],
  },
};

export default function GoldPage() {
  const products = [
    {
      title: '24 Karat Gold Suppliers And Exporters In Cameroon',
      href: '/24-karat-gold',
      img: '/upload/category/thumb/178889118124-karat-gold.jpg',
      desc: 'Village Local Miners is one of the best 24-Carat Gold Suppliers and Exporters in Cameroon. We supply pure 99.99% gold bars for investors and jewelers.',
    },
    {
      title: 'Uncut Diamond Suppliers And Exporters In Cameroon',
      href: '/uncut-diamond',
      img: '/upload/category/thumb/1615809001Uncut-Diamond.jpg',
      desc: 'If you are looking to Buy Uncut Diamonds, then you are at the right place. Village Local Miners is the leading supplier with Kimberley Process certification.',
    },
    {
      title: 'White Diamond Suppliers And Exporters In Cameroon',
      href: '/white-diamond',
      img: '/upload/category/thumb/1615809028White-Diamond.png',
      desc: 'If you wish to buy White Diamond Gemstones, Village Local Miners is the best supplier offering certified clarity and wholesale discounts.',
    },
    {
      title: '1kg Gold Bullion Bars Suppliers And Exporters In Cameroon',
      href: '/1kg-gold-bullion-bars',
      img: '/upload/category/thumb/17888913291kg-gold-bullion-bars.JPG',
      desc: 'Buy 1kg Gold Bullion Bars in Cameroon directly from miners. Hallmarked standard 1000g bars ready for vault storage or international delivery.',
    },
    {
      title: 'Diamond Carat Suppliers And Exporters In Cameroon',
      href: '/diamond-carat',
      img: '/upload/category/thumb/1615795227Diamond-Carat.jpg',
      desc: 'We supply high-grade diamond carats for gem dealers, cutting facilities, and jewelry makers with global insured shipping.',
    },
    {
      title: 'Gold Bar Suppliers And Exporters In Cameroon',
      href: '/gold-bar',
      img: '/upload/category/thumb/1788895016gold-bar.jpg',
      desc: 'Certified gold bars manufactured and supplied directly from local mining cooperatives at competitive wholesale spot rates.',
    },
    {
      title: 'Gold Dust Suppliers And Exporters In Cameroon',
      href: '/gold-dust',
      img: '/upload/category/thumb/1788890816gold-dust.png',
      desc: 'Alluvial gold dust available in 1kg containers, 22K+ purity, ideal for refiners, mints, and bullion dealers worldwide.',
    },
    {
      title: 'Gold Ore Suppliers And Exporters In Cameroon',
      href: '/gold-ore',
      img: '/upload/category/thumb/1788890969Gold-Ore.jpg',
      desc: 'Raw mineralized gold ore direct from bedrock deposits in the East Region of Cameroon with verified grade analysis.',
    },
    {
      title: 'Raw Gold Bar Suppliers And Exporters In Cameroon',
      href: '/raw-gold-bar',
      img: '/upload/category/thumb/1788890691Raw-Gold-Bar.jpg',
      desc: 'Directly cast unrefined dor&eacute; bars for processing with transparent chain of custody and export paperwork.',
    },
    {
      title: 'Diamond Suppliers And Exporters In Cameroon',
      href: '/diamond',
      img: '/upload/category/thumb/1615809049Diamond.jpg',
      desc: 'Ethically sourced natural diamonds verified and packaged under international legal frameworks.',
    },
    {
      title: 'Natural Diamond Suppliers And Exporters In Cameroon',
      href: '/natural-diamond',
      img: '/upload/category/thumb/1615809077Natural-Diamond.jpg',
      desc: 'Authentic untreated gem-quality diamonds direct from Central African mining basins.',
    },
    {
      title: 'Rough Diamond Suppliers And Exporters In Cameroon',
      href: '/rough-diamond',
      img: '/upload/category/thumb/1615809114Rough-Diamond.jpg',
      desc: 'Rough parcel lots and single crystal stones available for qualified international buyers and institutions.',
    },
  ];

  return (
    <div>
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="Gold for Sale Cameroon" breadcrumb="Gold" />

      {/* Main Content & Sidebar Grid */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Main Products Column */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Introduction Card */}
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-3">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-800">
                      Gold Suppliers And Exporters In Cameroon
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      Village Local Miners is a leading wholesale gold supplier and exporter, offering 24 Karat gold bars, gold ore, gold dust, and raw doré bullion. Our minerals are ethically harvested and verified for top-tier purity. We deliver directly to international ports with complete customs documentation.
                    </p>
                  </div>
                  <div className="md:col-span-4 relative h-40 rounded-lg overflow-hidden border-2 border-[#d97706]">
                    <Image
                      src="/upload/category/1788895016gold-bar.jpg"
                      alt="Gold bars stack"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Orange Heading: YOU MAY ALSO BE INTERESTED IN THESE PRODUCTS */}
              <div>
                <div className="bg-[#d97706] text-white py-2.5 px-4 font-serif font-bold text-sm tracking-wider uppercase rounded-t shadow-sm">
                  You May Also Be Interested In These Products !!
                </div>

                {/* Product Cards List matching input_file_2.png */}
                <div className="border border-t-0 border-neutral-200 divide-y divide-neutral-200 bg-white shadow-sm rounded-b">
                  {products.map((p) => (
                    <div key={p.title} className="p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-neutral-50 transition-colors">
                      {/* Image Thumbnail with golden border */}
                      <div className="w-full sm:w-36 h-32 relative rounded-md overflow-hidden shrink-0 border border-neutral-300 bg-neutral-900">
                        <Image
                          src={p.img}
                          alt={p.title}
                          fill
                          className="object-cover"
                        />
                      </div>

                      {/* Content */}
                      <div className="flex-1 space-y-2 text-center sm:text-left">
                        <h3 className="font-serif text-base font-bold text-[#d97706] hover:text-[#b45309] transition-colors">
                          <Link href={p.href}>{p.title}</Link>
                        </h3>
                        <p className="text-xs text-neutral-600 line-clamp-2 leading-relaxed">
                          {p.desc}
                        </p>
                        <div className="pt-2">
                          <Link
                            href={p.href}
                            className="inline-block px-4 py-1.5 bg-[#d97706] hover:bg-[#b45309] text-white text-[11px] font-bold uppercase tracking-wider rounded transition-colors"
                          >
                            Read More &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Sidebar */}
            <div className="lg:col-span-4">
              <QuickContactSidebar />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
