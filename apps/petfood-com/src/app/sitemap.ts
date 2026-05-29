import { MetadataRoute } from 'next'
import { LifeStages } from '../data/life-stages'

/**
 * Sitemap — homepage, cornerstone references, and life-stage catalog.
 * Add new entries here (or via scripts/regenerate-sitemaps.mjs) as content lands.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: 'https://petfood.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
    { url: 'https://petfood.com/guides/methodology', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/guides/aafco-completeness-explained', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/guides/reading-pet-food-labels', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/guides/raw-pet-food-evaluation', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/ingredients/grain-free-dcm-risk', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/ingredients/animal-protein-sources', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/ingredients/preservatives-pet-food', lastModified: now, changeFrequency: 'monthly', priority: 0.90 },
    { url: 'https://petfood.com/brands/orijen-vs-acana-comparison', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://petfood.com/brands/hills-vs-royal-canin', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: 'https://petfood.com/brands/blue-buffalo-evaluation', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    // Life-stage hub + 7 deep-dive pages (puppy, kitten, adult dog, adult cat,
    // senior dog, senior cat, large-breed puppy)
    { url: 'https://petfood.com/life-stage', lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    ...LifeStages.map((s) => ({
      url: `https://petfood.com/life-stage/${s.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.80,
    })),
  ]
}
