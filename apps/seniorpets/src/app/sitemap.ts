import type { MetadataRoute } from 'next'
import { CONDITIONS } from '../data/conditions'
import { MEDICATIONS } from '../data/medications'

/**
 * SeniorPetPharmacy sitemap.
 *
 * Auto-derived from the canonical CONDITIONS and MEDICATIONS registries —
 * no hand-maintained URL list. Adding a condition or medication entry to
 * the registry automatically extends the sitemap.
 */
export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  const base = 'https://seniorpetpharmacy.com'

  const staticPages: MetadataRoute.Sitemap = [
    { url: `${base}/`, lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: `${base}/conditions`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/medications`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${base}/insurance`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${base}/find-a-vet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${base}/legal/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${base}/legal/affiliate-disclosure`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const conditionPages: MetadataRoute.Sitemap = CONDITIONS.map((c) => ({
    url: `${base}/conditions/${c.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  const medicationPages: MetadataRoute.Sitemap = MEDICATIONS.map((m) => ({
    url: `${base}/medications/${m.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  return [...staticPages, ...conditionPages, ...medicationPages]
}
