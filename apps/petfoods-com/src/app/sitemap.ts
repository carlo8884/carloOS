import { MetadataRoute } from 'next'
import { Brands } from '../data/brands'
import { Ingredients } from '../data/ingredients'

/**
 * PetFoods.com sitemap.
 * The homepage + four catalog hubs (brands, ingredients, life-stage, recalls)
 * are live alongside per-brand and per-ingredient deep-dive pages. Per-life-
 * stage and per-recall pages will be added here as they ship.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const ingredientEntries: MetadataRoute.Sitemap = Ingredients.map((i) => ({
    url: `https://petfoods.com/ingredients/${i.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const brandEntries: MetadataRoute.Sitemap = Brands.map((b) => ({
    url: `https://petfoods.com/brands/${b.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [
    { url: 'https://petfoods.com', lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: 'https://petfoods.com/brands', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://petfoods.com/ingredients', lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: 'https://petfoods.com/life-stage', lastModified: now, changeFrequency: 'weekly', priority: 0.85 },
    { url: 'https://petfoods.com/recalls', lastModified: now, changeFrequency: 'daily', priority: 0.95 },
    ...ingredientEntries,
    ...brandEntries,
  ]
}
