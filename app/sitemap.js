export default function sitemap() {
  const baseUrl = 'https://www.localvillageminers.com';
  const currentDate = new Date().toISOString();

  // Core static pages
  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: currentDate,
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/gold`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-products`,
      lastModified: currentDate,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/gallery`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: currentDate,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
  ];

  // Specific Product Detail Pages
  const productSlugs = [
    '24-karat-gold',
    '1kg-gold-bullion-bars',
    '1kg-gold-bars-for-sale',
    'gold-bar',
    'gold-bar-for-sale',
    'gold-dust',
    'gold-dust-for-sale',
    'gold-ore',
    'gold-ore-for-sale',
    'raw-gold-bar',
    'buy-gold',
    'buy-gold-bar',
    'buy-gold-biscuit',
    'buy-gold-from',
    'buy-raw-gold-from',
    'gold-dealers',
    'gold-price',
    'gold-sellers',
    'gold-suppliers',
    'how-to-buy-gold-bar',
    'where-to-buy-gold',
    'where-to-buy-gold-bars',
    'diamond-carat',
    'diamond',
    'natural-diamond',
    'rough-diamond',
    'rough-diamond-price',
    'uncut-diamond',
    'white-diamond',
  ];

  const productRoutes = productSlugs.map((slug) => ({
    url: `${baseUrl}/${slug}`,
    lastModified: currentDate,
    changeFrequency: 'weekly',
    priority: 0.85,
  }));

  return [...staticRoutes, ...productRoutes];
}
