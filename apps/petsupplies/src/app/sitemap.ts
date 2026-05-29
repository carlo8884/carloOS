import { MetadataRoute } from 'next'
import { CATEGORIES } from '@/data/categories'
import { getAllSeededProducts } from '@/lib/products'

const SITE = 'https://petsupplies.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const staticUrls: MetadataRoute.Sitemap = [
    { url: SITE, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${SITE}/compare`, lastModified: now, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${SITE}/editorial-standards`, lastModified: now, changeFrequency: 'yearly', priority: 0.4 },
    { url: `${SITE}/legal/affiliate-disclosure`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/legal/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${SITE}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
  ]

  // Each category page is its own programmatic SEO entry.
  const categoryUrls: MetadataRoute.Sitemap = CATEGORIES.map((c) => ({
    url: `${SITE}/category/${c.slug}`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Product anchors on category pages — one per product. This gives every
  // product a deep-link in the sitemap even though products do not have their
  // own routes in the MVP.
  const productUrls: MetadataRoute.Sitemap = getAllSeededProducts().map((p) => ({
    url: `${SITE}/category/${p.category}#${p.slug}`,
    lastModified: now,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticUrls, ...categoryUrls, ...productUrls]
}
