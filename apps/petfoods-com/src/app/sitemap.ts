import { MetadataRoute } from 'next'

/**
 * PetFoods.com sitemap.
 * The homepage + four catalog hubs (brands, ingredients, life-stage, recalls)
 * are live. Per-brand, per-ingredient, per-life-stage, and per-recall pages
 * are queued and will be added here as they ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  return [
    { url: 'https://petfoods.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
    { url: 'https://petfoods.com/brands', lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: 'https://petfoods.com/ingredients', lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: 'https://petfoods.com/life-stage', lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: 'https://petfoods.com/recalls', lastModified: now, changeFrequency: 'daily', priority: 0.95 },
  ]
}
