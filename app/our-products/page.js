import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import BreadcrumbBanner from '../../components/BreadcrumbBanner';
import QuickContactSidebar from '../../components/QuickContactSidebar';

export const metadata = {
  title: 'Our Precious Mineral Products | Gold Bullion & Rough Diamonds - Village Local Miners',
  description: 'Explore our complete catalog of certified precious minerals: 24K gold bullion bars, alluvial gold dust, gold ore, and Kimberley Process certified rough diamonds with insured global logistics.',
  alternates: {
    canonical: 'https://www.localvillageminers.com/our-products',
  },
  openGraph: {
    title: 'Precious Mineral Catalog | Village Local Miners',
    description: 'Direct access to certified 24K gold bars, 1000g bullion, and raw diamonds from verified mining sources.',
    url: 'https://www.localvillageminers.com/our-products',
    images: [{ url: '/upload/category/17888913291kg-gold-bullion-bars.JPG', width: 600, height: 400, alt: '1kg Gold Bullion Bars' }],
  },
};

export default function OurProductsPage() {
  const products = [
    {
      title: '24 Karat Gold Suppliers And Exporters In Cameroon',
      href: '/24-karat-gold',
      img: '/upload/category/thumb/178889118124-karat-gold.jpg',
      desc: 'Village Local Miners is one of the best 24-Carat Gold Suppliers and Exporters in Cameroon. Certified 99.99% pure gold bullion available for international export.',
    },
    {
      title: 'Uncut Diamond Suppliers And Exporters In Cameroon',
      href: '/uncut-diamond',
      img: '/upload/category/thumb/1615809001Uncut-Diamond.jpg',
      desc: 'If you want to buy Uncut Diamonds, then you are at the right place. Village Local Miners is the leading supplier offering verified authenticity.',
    },
    {
      title: 'White Diamond Suppliers And Exporters In Cameroon',
      href: '/white-diamond',
      img: '/upload/category/thumb/1615809028White-Diamond.png',
      desc: 'Wholesale white diamond crystals and faceted parcels direct from mining concessions with Kimberley Process Certification.',
    },
    {
      title: '1kg Gold Bullion Bars Suppliers And Exporters In Cameroon',
      href: '/1kg-gold-bullion-bars',
      img: '/upload/category/thumb/17888913291kg-gold-bullion-bars.JPG',
      desc: 'Buy 1kg Gold Bullion Bars in Cameroon directly from local miners. Standard hallmark bars packaged for secure insured transit.',
    },
    {
      title: 'Diamond Carat Suppliers And Exporters In Cameroon',
      href: '/diamond-carat',
      img: '/upload/category/thumb/1615795227Diamond-Carat.jpg',
      desc: 'Selected diamond carats of various weights, colors, and clarities for jewelers and institutional buyers.',
    },
    {
      title: 'Gold Bar Suppliers And Exporters In Cameroon',
      href: '/gold-bar',
      img: '/upload/category/thumb/1788895016gold-bar.jpg',
      desc: 'Village Local Miners produces and ships certified gold bars from Cameroon with reliable documentation.',
    },
    {
      title: 'Gold Dust Suppliers And Exporters In Cameroon',
      href: '/gold-dust',
      img: '/upload/category/thumb/1788890816gold-dust.png',
      desc: 'High purity natural alluvial gold dust collected from river sluices and alluvial basins across Eastern Cameroon.',
    },
    {
      title: 'Gold Ore Suppliers And Exporters In Cameroon',
      href: '/gold-ore',
      img: '/upload/category/thumb/1788890969Gold-Ore.jpg',
      desc: 'High-yield gold-bearing quartz and rock ore for metallurgical smelting and extraction.',
    },
    {
      title: 'Raw Gold Bar Suppliers And Exporters In Cameroon',
      href: '/raw-gold-bar',
      img: '/upload/category/thumb/1788890691Raw-Gold-Bar.jpg',
      desc: 'Unrefined doré bullion bars directly cast from local smelters, maintaining full provenance tracking.',
    },
    {
      title: 'Diamond Suppliers And Exporters In Cameroon',
      href: '/diamond',
      img: '/upload/category/thumb/1615809049Diamond.jpg',
      desc: 'Certified natural diamonds supplied directly to cutting houses and private collectors globally.',
    },
    {
      title: 'Natural Diamond Suppliers And Exporters In Cameroon',
      href: '/natural-diamond',
      img: '/upload/category/thumb/1615809077Natural-Diamond.jpg',
      desc: 'Untreated diamonds in raw crystal habit from alluvial deposits.',
    },
    {
      title: 'Rough Diamond Suppliers And Exporters In Cameroon',
      href: '/rough-diamond',
      img: '/upload/category/thumb/1615809114Rough-Diamond.jpg',
      desc: 'Wholesale rough diamond parcels at competitive prices with legal export permits.',
    },
  ];

  return (
    <div>
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="Our Products for Sale Cameroon" breadcrumb="Our Products" />

      {/* Main Content & Sidebar */}
      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Products Grid */}
            <div className="lg:col-span-8 space-y-10">
              
              {/* Introduction Card */}
              <div className="bg-neutral-50 p-6 rounded-xl border border-neutral-200 space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
                  <div className="md:col-span-8 space-y-3">
                    <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-800">
                      Our Products Suppliers and Exporters In Cameroon
                    </h2>
                    <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                      At Village Local Miners, we specialize in providing high-purity gold and raw diamonds directly from Cameroon&rsquo;s rich mining basins. Our minerals are ethically extracted, certified by assay offices, and exported with full insurance to any destination worldwide.
                    </p>
                  </div>
                  <div className="md:col-span-4 relative h-40 rounded-lg overflow-hidden border-2 border-[#d97706]">
                    <Image
                      src="/upload/category/17888913291kg-gold-bullion-bars.JPG"
                      alt="1kg gold bullion bars"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Orange Section Header */}
              <div>
                <div className="bg-[#d97706] text-white py-2.5 px-4 font-serif font-bold text-sm tracking-wider uppercase rounded-t shadow-sm">
                  You May Also Be Interested In These Products !!
                </div>

                {/* Products List */}
                <div className="border border-t-0 border-neutral-200 divide-y divide-neutral-200 bg-white shadow-sm rounded-b">
                  {products.map((p) => (
                    <div key={p.title} className="p-5 sm:p-6 flex flex-col sm:flex-row items-center gap-6 hover:bg-neutral-50 transition-colors">
                      <div className="w-full sm:w-36 h-32 relative rounded-md overflow-hidden shrink-0 border border-neutral-300 bg-neutral-900">
                        <Image
                          src={p.img}
                          alt={p.title}
                          fill
                          className="object-cover"
                        />
                      </div>

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

            {/* Sidebar */}
            <div className="lg:col-span-4">
              <QuickContactSidebar />
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
