import './globals.css';
import Header from '../components/Header';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import Script from 'next/script';

export const metadata = {
  metadataBase: new URL('https://www.localvillageminers.com'),
  title: {
    default: 'Village Local Miners | 24K Gold Bar, Bullion & Certified Diamond Suppliers',
    template: '%s | Village Local Miners',
  },
  description: 'Village Local Miners is a trusted mining community and direct supplier of 24 Karat gold bars, 1kg bullion bars, alluvial gold dust, and natural rough diamonds with certified assay reports and insured worldwide shipping.',
  keywords: [
    'Village Local Miners',
    'buy gold',
    '24 karat gold bar',
    '1kg gold bullion bars',
    'gold dust wholesale',
    'raw gold doré bar',
    'rough diamond suppliers',
    'natural diamond carat',
    'gold mining community',
    'gold suppliers Entebbe Rd Kampala Uganda',
  ],
  authors: [{ name: 'Village Local Miners' }],
  creator: 'Village Local Miners',
  publisher: 'Village Local Miners',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.localvillageminers.com',
    siteName: 'Village Local Miners',
    title: 'Village Local Miners | 24K Gold Bars & Rough Diamond Exporters',
    description: 'Direct wholesale suppliers of certified 24K gold bullion, gold dust, and natural rough diamonds with insured international transit.',
    images: [
      {
        url: '/images/first-slider.jpg',
        width: 1200,
        height: 630,
        alt: 'Village Local Miners 24K Gold Bullion Bars',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Village Local Miners | Certified Gold & Diamond Exporters',
    description: 'Wholesale 24K gold bars, 1kg bullion, gold dust, and raw diamonds with assay certifications and insured export.',
    images: ['/images/first-slider.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://www.localvillageminers.com',
  },
  icons: {
    icon: '/favicon/favicon-32x32.png',
    shortcut: '/favicon/favicon-16x16.png',
    apple: '/favicon/favicon-96x96.png',
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: 'Village Local Miners',
    image: 'https://www.localvillageminers.com/images/first-slider.jpg',
    url: 'https://www.localvillageminers.com',
    telephone: '+256750625851',
    email: 'info@localvillageminers.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Entebbe Rd',
      addressLocality: 'Kampala',
      addressCountry: 'UG',
    },
    priceRange: '$$$$',
    description: 'Village Local Miners supplies certified 24 Karat gold bars, bullion, and natural rough diamonds with international insured export.',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '18:00',
      },
    ],
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="flex flex-col min-h-screen bg-white text-neutral-800 antialiased selection:bg-[#f59e0b] selection:text-white">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
        <WhatsAppButton />
        <Script
          id="tawk-to"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              var Tawk_API=Tawk_API||{}, Tawk_LoadStart=new Date();
              (function(){
              var s1=document.createElement("script"),s0=document.getElementsByTagName("script")[0];
              s1.async=true;
              s1.src='https://embed.tawk.to/6ad662d79db64b34c9e27d21/1k5an46tr';
              s1.charset='UTF-8';
              s1.setAttribute('crossorigin','*');
              s0.parentNode.insertBefore(s1,s0);
              })();
            `,
          }}
        />
      </body>
    </html>
  );
}
