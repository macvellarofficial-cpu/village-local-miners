import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function HangingBadges() {
  const badges = [
    {
      title: '24 KARAT GOLD',
      href: '/24-karat-gold',
      img: '/upload/category/thumb/178889118124-karat-gold.jpg',
      desc: 'Village Local Miners is one of the best 24-Carat Gold suppliers in Cameroon with 99.99% certified purity.',
    },
    {
      title: 'DIAMOND CARAT',
      href: '/diamond-carat',
      img: '/upload/category/thumb/1615795227Diamond-Carat.jpg',
      desc: 'If you want to buy Diamonds, then you are at the right place. Village Local Miners offers wholesale certified carats.',
    },
    {
      title: 'GOLD BAR',
      href: '/gold-bar',
      img: '/upload/category/thumb/1788895016gold-bar.jpg',
      desc: 'Village Local Miners is a trusted manufacturer and wholesaler of the finest quality gold bars with international export.',
    },
    {
      title: 'GOLD DUST',
      href: '/gold-dust',
      img: '/upload/category/thumb/1788890816gold-dust.png',
      desc: 'If you are looking for high quality Gold Dust Manufacturers in Cameroon, visit Village Local Miners today.',
    },
  ];

  return (
    <section className="relative z-20 -mt-10 max-w-7xl mx-auto px-4 sm:px-8 mb-16">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {badges.map((badge) => (
          <div
            key={badge.title}
            className="group relative bg-[#222222] text-white p-6 pb-12 rounded-t-lg shadow-2xl border-t-4 border-[#f59e0b] hover:border-[#fbbf24] transition-all duration-300 transform hover:-translate-y-2 text-center"
            style={{
              clipPath: 'polygon(0 0, 100% 0, 100% calc(100% - 25px), 50% 100%, 0 calc(100% - 25px))',
            }}
          >
            {/* Circular Image Icon with Golden Border */}
            <div className="mx-auto w-24 h-24 rounded-full p-1 bg-gradient-to-tr from-[#d97706] to-[#fde68a] shadow-lg mb-4 group-hover:scale-105 transition-transform duration-300">
              <div className="w-full h-full rounded-full overflow-hidden relative bg-black">
                <Image
                  src={badge.img}
                  alt={badge.title}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* Title */}
            <h3 className="font-serif text-sm sm:text-base font-bold text-[#f59e0b] tracking-wider mb-2 group-hover:text-[#fbbf24] transition-colors">
              {badge.title}
            </h3>

            {/* Short description */}
            <p className="text-xs text-neutral-300 leading-relaxed line-clamp-3 mb-4">
              {badge.desc}
            </p>

            {/* Read More Link */}
            <div className="mt-2">
              <Link
                href={badge.href}
                className="inline-block text-[11px] font-bold uppercase tracking-wider text-neutral-400 hover:text-[#f59e0b] border-b border-neutral-700 hover:border-[#f59e0b] pb-0.5 transition-colors"
              >
                Read More &rarr;
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
