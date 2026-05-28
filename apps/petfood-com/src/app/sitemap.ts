import { MetadataRoute } from 'next'

/**
 * Skeleton sitemap — only the homepage exists today.
 * Add new entries here (or via scripts/regenerate-sitemaps.mjs) as content lands.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: 'https://petfood.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
    { url: 'https://petfood.com/guides/methodology', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/guides/aafco-completeness-explained', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/guides/reading-pet-food-labels', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/ingredients/grain-free-dcm-risk', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/brands/orijen-vs-acana-comparison', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
  ]
}
