import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import BreadcrumbBanner from '../../components/BreadcrumbBanner';
import QuickContactSidebar from '../../components/QuickContactSidebar';
import { ShieldCheck, Truck, Award, CheckCircle2 } from 'lucide-react';

const productsDatabase = {
  '24-karat-gold': {
    title: '24 Karat Gold Suppliers and Exporters in Cameroon',
    breadcrumb: '24 Karat Gold',
    img: '/upload/category/thumb/178889118124-karat-gold.jpg',
    purity: '99.99% (24K Pure Gold)',
    origin: 'Cameroon, East Region',
    form: 'Cast Bullion Bars & Minted Ingots',
    moq: '1 Kilogram (1000g)',
    packaging: 'Armored Vault Cases / Sealed Assay Pack',
    description: 'Village Local Miners is one of the premier suppliers of certified 24 Karat Gold in Cameroon. Sourced ethically from artisanal mining communities, our 24K gold undergoes strict fire assay testing and spectrographic analysis to guarantee 99.99% purity. Each bar is stamped with weight, serial number, and hallmark certification, ready for banking institutions, private reserves, or jewelry manufacturing.',
  },
  '1kg-gold-bullion-bars': {
    title: '1kg Gold Bullion Bars for Sale in Cameroon',
    breadcrumb: '1kg Gold Bullion Bars',
    img: '/upload/category/thumb/17888913291kg-gold-bullion-bars.JPG',
    purity: '99.95% - 99.99% Investment Grade',
    origin: 'Cameroon Mining Concessions',
    form: 'Standard 1000g Bullion Bar',
    moq: '1 kg',
    packaging: 'Certified Tamper-evident Export Packaging',
    description: 'Our 1kg Gold Bullion Bars represent the pinnacle of physical precious metal investment. Cast under controlled smelting environments and verified by licensed assayers, these bars meet LBMA dimensional tolerances and international export requirements.',
  },
  'gold-bar': {
    title: 'Gold Bar Suppliers and Wholesalers Cameroon',
    breadcrumb: 'Gold Bar',
    img: '/upload/category/thumb/1788895016gold-bar.jpg',
    purity: '22K to 24K Purity',
    origin: 'Cameroon, Central Africa',
    form: 'Bars / Ingots',
    moq: '2 kg',
    packaging: 'Insured Cargo Crates',
    description: 'Direct access to raw and refined gold bars from local mining syndicates. Village Local Miners ensures that clients receive documented origin certificates, customs clearance forms, and assay test reports.',
  },
  'gold-dust': {
    title: 'Gold Dust Suppliers & Manufacturers in Cameroon',
    breadcrumb: 'Gold Dust',
    img: '/upload/category/thumb/1788890816gold-dust.png',
    purity: '92% - 96% Natural Alluvial Gold (22K+)',
    origin: 'East Region Alluvial River Basins',
    form: 'Natural Alluvial Gold Powder / Grains',
    moq: '1 kg',
    packaging: 'Sealed 1kg Polyethylene Containers in Armored Boxes',
    description: 'Harvested from riverbeds through ethical gravity sluicing and panning, our gold dust is free from artificial chemicals and amalgam residues. Ideal for refiners, industrial users, and bullion minters looking for raw mineral inputs.',
  },
  'gold-ore': {
    title: 'Gold Ore for Sale Cameroon',
    breadcrumb: 'Gold Ore',
    img: '/upload/category/thumb/1788890969Gold-Ore.jpg',
    purity: 'Variable High-Grade Ore Concentration',
    origin: 'Hard-rock concessions in Cameroon',
    form: 'Crushed Quartz & Mineralized Matrix',
    moq: '1 Metric Ton',
    packaging: 'Heavy-Duty Bulk Bags / Steel Drums',
    description: 'High-yield auriferous quartz and rock ore extracted directly from primary hard-rock deposits. Full metallurgical profile and grade analysis provided prior to bulk delivery.',
  },
  'raw-gold-bar': {
    title: 'Raw Gold Bar Suppliers & Exporters Cameroon',
    breadcrumb: 'Raw Gold Bar',
    img: '/upload/category/thumb/1788890691Raw-Gold-Bar.jpg',
    purity: '93% - 97% Doré Bullion',
    origin: 'Artisanal Mine Smelters',
    form: 'Unrefined Doré Bars',
    moq: '5 kg',
    packaging: 'Insured Transit Crates',
    description: 'Doré bars direct from cooperative smelters before final commercial refining. Offers substantial cost savings for refineries with full legal export clearance documentation.',
  },
  'diamond-carat': {
    title: 'Diamond Carat Suppliers & Exporters Cameroon',
    breadcrumb: 'Diamond Carat',
    img: '/upload/category/thumb/1615795227Diamond-Carat.jpg',
    purity: 'Gemological VVS - SI Clarities',
    origin: 'Alluvial Diamond Fields, Cameroon',
    form: 'Loose Single Stones & Sized Carat Lots',
    moq: '50 Carats',
    packaging: 'Kimberley Process Certified Tamper-Proof Pouch',
    description: 'Natural certified diamonds in diverse carat sizes, clarity grades, and color classifications. Sourced under the Kimberley Process Certification Scheme with verifiable origin documentation.',
  },
  'diamond': {
    title: 'Certified Natural Diamonds Cameroon',
    breadcrumb: 'Diamond',
    img: '/upload/category/thumb/1615809049Diamond.jpg',
    purity: 'Natural Earth-Mined Diamonds',
    origin: 'Cameroon Alluvial Deposits',
    form: 'Raw & Cut Gemstones',
    moq: '25 Carats',
    packaging: 'Sealed Security Pouches',
    description: 'Authentic diamonds directly from Cameroon concessions, verified for natural octahedral and dodecahedral crystal habits with brilliant internal lustre.',
  },
  'natural-diamond': {
    title: 'Natural Diamond Exporters Cameroon',
    breadcrumb: 'Natural Diamond',
    img: '/upload/category/thumb/1615809077Natural-Diamond.jpg',
    purity: '100% Natural, Untreated',
    origin: 'Cameroon Basins',
    form: 'Rough Crystals',
    moq: '50 Carats',
    packaging: 'Kimberley Certified Parcel',
    description: 'Untreated, non-enhanced natural diamonds ideal for master cutters, collectors, and luxury jewelry houses.',
  },
  'rough-diamond': {
    title: 'Rough Diamond Suppliers in Cameroon',
    breadcrumb: 'Rough Diamond',
    img: '/upload/category/thumb/1615809114Rough-Diamond.jpg',
    purity: 'Commercial to Fine Gem Quality',
    origin: 'Cameroon',
    form: 'Run-of-Mine Parcels',
    moq: '100 Carats',
    packaging: 'Security Transport Box with Export Seal',
    description: 'Wholesale parcels of rough diamonds from alluvial gravels. Perfect for commercial lapidary processing and institutional investment reserves.',
  },
  'uncut-diamond': {
    title: 'Uncut Diamond Suppliers & Exporters',
    breadcrumb: 'Uncut Diamond',
    img: '/upload/category/thumb/1615809001Uncut-Diamond.jpg',
    purity: 'Pure Natural Crystals',
    origin: 'Cameroon',
    form: 'Uncut Stones',
    moq: '50 Carats',
    packaging: 'Armored Courier Parcel',
    description: 'Intact raw crystals showing natural trigons and crystal faces, directly from artisanal mine claims.',
  },
  'white-diamond': {
    title: 'White Diamond Suppliers & Exporters',
    breadcrumb: 'White Diamond',
    img: '/upload/category/thumb/1615809028White-Diamond.png',
    purity: 'Color Grades D to H',
    origin: 'Cameroon Gem Concessions',
    form: 'Faceted & Rough Stones',
    moq: '25 Carats',
    packaging: 'Kimberley Parcel',
    description: 'Premium white diamond stones offering exceptional transparency and fire for high-jewelry creations.',
  },
};

export async function generateStaticParams() {
  return Object.keys(productsDatabase).map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = params;
  const product = productsDatabase[slug] || {
    title: `${slug.replace(/-/g, ' ').toUpperCase()} Suppliers - Village Local Miners`,
    description: `Buy high quality ${slug.replace(/-/g, ' ')} with guaranteed purity, official assay certificates, and insured worldwide delivery from Village Local Miners.`,
    img: '/upload/category/1788895016gold-bar.jpg',
  };

  const pageTitle = `${product.title} | Village Local Miners`;
  const pageDesc = product.description;
  const pageUrl = `https://www.localvillageminers.com/${slug}`;

  return {
    title: pageTitle,
    description: pageDesc,
    alternates: {
      canonical: pageUrl,
    },
    openGraph: {
      title: pageTitle,
      description: pageDesc,
      url: pageUrl,
      images: [
        {
          url: product.img,
          width: 800,
          height: 600,
          alt: product.title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: pageTitle,
      description: pageDesc,
      images: [product.img],
    },
  };
}

export default function ProductDetailPage({ params }) {
  const { slug } = params;
  const product = productsDatabase[slug] || {
    title: `${slug.replace(/-/g, ' ').toUpperCase()} Suppliers Cameroon`,
    breadcrumb: slug.replace(/-/g, ' ').toUpperCase(),
    img: '/upload/category/1788895016gold-bar.jpg',
    purity: 'Certified High Purity',
    origin: 'Cameroon, East Region',
    form: 'Precious Mineral',
    moq: 'Inquire with Sales Desk',
    packaging: 'Insured International Export Box',
    description: `Village Local Miners supplies certified ${slug.replace(/-/g, ' ')} with full assay testing, customs documentation, and insured worldwide delivery to institutional buyers and investors.`,
  };

  return (
    <div>
      <BreadcrumbBanner title={product.title} breadcrumb={product.breadcrumb} />

      <section className="py-14 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Main Product Detail */}
            <div className="lg:col-span-8 space-y-8">
              
              {/* Image and Highlights */}
              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start bg-neutral-50 p-6 rounded-2xl border border-neutral-200">
                <div className="md:col-span-5 relative h-64 sm:h-72 w-full rounded-xl overflow-hidden border-2 border-[#d97706] bg-neutral-900 shadow-md">
                  <Image
                    src={product.img}
                    alt={product.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="md:col-span-7 space-y-4">
                  <span className="text-[11px] font-bold uppercase tracking-widest text-[#d97706] bg-[#fef3c7] px-3 py-1 rounded-full border border-[#fde68a]">
                    Verified Source
                  </span>
                  <h2 className="font-serif text-xl sm:text-2xl font-bold text-neutral-800 leading-snug">
                    {product.title}
                  </h2>
                  <p className="text-xs sm:text-sm text-neutral-600 leading-relaxed">
                    {product.description}
                  </p>

                  <div className="pt-2">
                    <Link
                      href="/contact-us"
                      className="inline-block px-6 py-3 bg-[#d97706] hover:bg-[#b45309] text-white font-bold uppercase tracking-wider text-xs rounded-lg shadow-gold transition-colors"
                    >
                      Request Quotation & Assay
                    </Link>
                  </div>
                </div>
              </div>

              {/* Specifications Table */}
              <div className="bg-white rounded-xl border border-neutral-200 overflow-hidden shadow-sm">
                <div className="bg-[#242424] text-white px-6 py-3 font-serif font-bold text-sm tracking-wider uppercase">
                  Technical Specifications
                </div>
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-neutral-200">
                  <tbody className="divide-y divide-neutral-100">
                    <tr className="bg-neutral-50/50">
                      <td className="px-6 py-3.5 font-semibold text-neutral-600 w-1/3">Purity / Grade</td>
                      <td className="px-6 py-3.5 font-bold text-neutral-800">{product.purity}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-semibold text-neutral-600">Origin / Provenance</td>
                      <td className="px-6 py-3.5 text-neutral-800">{product.origin}</td>
                    </tr>
                    <tr className="bg-neutral-50/50">
                      <td className="px-6 py-3.5 font-semibold text-neutral-600">Product Form</td>
                      <td className="px-6 py-3.5 text-neutral-800">{product.form}</td>
                    </tr>
                    <tr>
                      <td className="px-6 py-3.5 font-semibold text-neutral-600">Minimum Order (MOQ)</td>
                      <td className="px-6 py-3.5 text-neutral-800">{product.moq}</td>
                    </tr>
                    <tr className="bg-neutral-50/50">
                      <td className="px-6 py-3.5 font-semibold text-neutral-600">Export Packaging</td>
                      <td className="px-6 py-3.5 text-neutral-800">{product.packaging}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* Guarantees */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 bg-[#fef3c7] rounded-lg border border-[#fde68a] text-center space-y-2">
                  <ShieldCheck size={28} className="text-[#d97706] mx-auto" />
                  <h3 className="font-serif font-bold text-xs uppercase text-[#92400e]">Certified Assay</h3>
                  <p className="text-[11px] text-[#78350f]">Each batch verified by official assay laboratories.</p>
                </div>
                <div className="p-4 bg-[#fef3c7] rounded-lg border border-[#fde68a] text-center space-y-2">
                  <Truck size={28} className="text-[#d97706] mx-auto" />
                  <h3 className="font-serif font-bold text-xs uppercase text-[#92400e]">Insured Transit</h3>
                  <p className="text-[11px] text-[#78350f]">100% full-value insurance coverage to your port.</p>
                </div>
                <div className="p-4 bg-[#fef3c7] rounded-lg border border-[#fde68a] text-center space-y-2">
                  <Award size={28} className="text-[#d97706] mx-auto" />
                  <h3 className="font-serif font-bold text-xs uppercase text-[#92400e]">Legal Compliance</h3>
                  <p className="text-[11px] text-[#78350f]">Export permit, Kimberley certificate, and taxes cleared.</p>
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
