'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import BreadcrumbBanner from '../../components/BreadcrumbBanner';
import { X, ChevronLeft, ChevronRight, Maximize2 } from 'lucide-react';

export default function GalleryPage() {
  const galleryImages = [
    { src: '/upload/banner/16159916376.jpg', title: 'Gold Bullion Stack' },
    { src: '/upload/banner/16159913531.jpg', title: 'Raw Gold Nuggets' },
    { src: '/upload/banner/16159915532.jpg', title: 'Vault Stored Gold Bars' },
    { src: '/upload/banner/16159915743.jpg', title: 'Rough Diamond Parcel' },
    { src: '/upload/banner/16159915954.jpg', title: 'Gold Dore Bar Weighed' },
    { src: '/upload/banner/16159916115.jpg', title: 'Certified Diamond Carat' },
    { src: '/upload/banner/16159916677.jpg', title: 'Artisanal Gold Panning' },
    { src: '/upload/banner/16159916898.jpg', title: 'Pyramid Gold Bars' },
    { src: '/upload/banner/16159917249.jpg', title: 'Bullion Ingot Trays' },
    { src: '/upload/banner/161599174710.jpg', title: 'Assay Testing Documentation' },
    { src: '/upload/banner/161599177411.jpg', title: 'Natural Rough Diamonds' },
    { src: '/upload/banner/161599179612.jpg', title: 'Gold Bar Shipment' },
    { src: '/upload/banner/161599182013.jpg', title: 'Secure Vault Box' },
    { src: '/upload/banner/1788891937Gold-Ore.jpg', title: 'High Grade Gold Ore' },
    { src: '/upload/banner/161599189915.jpg', title: 'Export Gold Hallmarking' },
    { src: '/upload/banner/161599193916.jpg', title: 'Bulk Gold Bars' },
    { src: '/upload/banner/161599197717.jpg', title: 'Pure Gold Powder' },
    { src: '/upload/banner/161599201318.jpg', title: 'Cameroon Gold Deposit' },
    { src: '/upload/banner/161599205719.jpg', title: 'Diamond Crystal Facets' },
    { src: '/upload/banner/1615992080Diamon-Carat.jpg', title: 'Faceted Diamond Specimen' },
    { src: '/upload/banner/1615992115Gold-Bullion-1kg-Bars.jpg', title: '1kg Kilobars' },
    { src: '/upload/banner/1615992181Gold.jpg', title: 'Refined 24K Gold Bar' },
    { src: '/upload/banner/1615992217Golds.jpg', title: 'Gold Ingots Inventory' },
    { src: '/upload/banner/1763614941Raw-Gold-Bar.jpeg', title: 'Raw Gold Bar Inspection' },
    { src: '/upload/banner/1763614958Gold-Bars.jpeg', title: 'Polished Gold Castings' },
    { src: '/upload/banner/1738699103welcome.jpg', title: 'Mining Concession Trench' },
    { src: '/upload/banner/1738774471about-us.jpg', title: 'Artisanal Sluice Extraction' },
  ];

  const [activeImageIndex, setActiveImageIndex] = useState(null);

  const openLightbox = (index) => setActiveImageIndex(index);
  const closeLightbox = () => setActiveImageIndex(null);

  const nextLightbox = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev + 1) % galleryImages.length);
  };

  const prevLightbox = (e) => {
    e.stopPropagation();
    setActiveImageIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  return (
    <div>
      {/* Breadcrumb Banner */}
      <BreadcrumbBanner title="Gallery" breadcrumb="Gallery" />

      {/* Gallery Grid Section matching input_file_4.png */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          
          <div className="text-center mb-12">
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-neutral-800 tracking-wide">
              Mining Operations & Product Gallery
            </h2>
            <p className="text-xs sm:text-sm text-neutral-500 mt-2">
              Browse authentic photographs of our gold ingots, alluvial extraction sites, and diamond parcels.
            </p>
            <div className="w-16 h-1 bg-[#d97706] mx-auto mt-3 rounded"></div>
          </div>

          {/* 4-column responsive photo grid matching input_file_4.png */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
            {galleryImages.map((img, index) => (
              <div
                key={index}
                onClick={() => openLightbox(index)}
                className="group relative h-56 rounded-lg overflow-hidden border-2 border-neutral-300 hover:border-[#d97706] cursor-pointer shadow-sm hover:shadow-xl transition-all duration-300 bg-neutral-900"
              >
                <Image
                  src={img.src}
                  alt={img.title}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                />

                {/* Hover overlay with zoom icon */}
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center text-white p-3 text-center">
                  <div className="w-10 h-10 rounded-full bg-[#d97706] flex items-center justify-center mb-2 shadow-gold transform scale-75 group-hover:scale-100 transition-transform">
                    <Maximize2 size={18} />
                  </div>
                  <span className="font-serif text-xs font-bold tracking-wide">
                    {img.title}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Interactive Lightbox Modal */}
      {activeImageIndex !== null && (
        <div
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4 animate-fadeIn"
        >
          {/* Close button */}
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 z-50 w-11 h-11 rounded-full bg-white/20 hover:bg-red-600 text-white flex items-center justify-center transition-colors shadow-lg"
            aria-label="Close lightbox"
          >
            <X size={24} />
          </button>

          {/* Previous button */}
          <button
            onClick={prevLightbox}
            className="absolute left-4 sm:left-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-[#d97706] text-white flex items-center justify-center transition-colors shadow-lg"
            aria-label="Previous photo"
          >
            <ChevronLeft size={28} />
          </button>

          {/* Next button */}
          <button
            onClick={nextLightbox}
            className="absolute right-4 sm:right-8 top-1/2 -translate-y-1/2 z-50 w-12 h-12 rounded-full bg-black/50 hover:bg-[#d97706] text-white flex items-center justify-center transition-colors shadow-lg"
            aria-label="Next photo"
          >
            <ChevronRight size={28} />
          </button>

          {/* Main Photo Display */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative max-w-4xl max-h-[85vh] w-full h-[70vh] rounded-lg overflow-hidden shadow-2xl border border-neutral-700 bg-black flex flex-col"
          >
            <div className="relative flex-1 w-full h-full">
              <Image
                src={galleryImages[activeImageIndex].src}
                alt={galleryImages[activeImageIndex].title}
                fill
                className="object-contain"
              />
            </div>
            <div className="bg-neutral-900/95 py-3 px-6 text-center border-t border-neutral-800">
              <p className="font-serif font-bold text-sm text-[#f59e0b] tracking-wider">
                {galleryImages[activeImageIndex].title}
              </p>
              <p className="text-[11px] text-neutral-400">
                Photo {activeImageIndex + 1} of {galleryImages.length}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
