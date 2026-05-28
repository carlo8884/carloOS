import { MetadataRoute } from 'next'
import { Brands } from '../data/brands'

/**
 * PetFoods.com sitemap.
 * The homepage, four catalog hubs (brands, ingredients, life-stage, recalls),
 * and all 35 per-brand catalog reference pages are live. Per-ingredient,
 * per-life-stage, and per-recall pages are queued and will be added as they
 * ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const brandEntries: MetadataRoute.Sitemap = Brands.map((b) => ({
    url: `https://petfoods.com/brands/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.75,
  }))

  return [
    { url: 'https://petfoods.com', lastModified: now, changeFrequency: 'daily', priority: 1.00 },
    { url: 'https://petfoods.com/brands', lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: 'https://petfoods.com/ingredients', lastModified: now, changeFrequency: 'weekly', priority: 0.90 },
    { url: 'https://petfoods.com/life-stage', lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: 'https://petfoods.com/recalls', lastModified: now, changeFrequency: 'daily', priority: 0.95 },
    ...brandEntries,
  ]
}
