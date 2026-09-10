export const metadata = {
  title: 'Operations & Mineral Gallery | Gold Bullion & Diamonds - Village Local Miners',
  description: 'View authentic photographs of our gold mining concessions, 24K gold bullion stacks, alluvial sluicing operations, and rough diamond parcels in Cameroon.',
  alternates: {
    canonical: 'https://www.localvillageminers.com/gallery',
  },
  openGraph: {
    title: 'Operations & Mineral Gallery | Village Local Miners',
    description: 'High-resolution photo gallery of certified gold ingots, artisanal mining operations, and natural rough diamonds.',
    url: 'https://www.localvillageminers.com/gallery',
    images: [{ url: '/upload/banner/16159916376.jpg', width: 800, height: 600, alt: 'Gold Bullion Stack' }],
  },
};

export default function GalleryLayout({ children }) {
  return <>{children}</>;
}
