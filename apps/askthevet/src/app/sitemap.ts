import { MetadataRoute } from 'next'
import { SYMPTOM_PAGES } from '@/data/symptoms'

const BASE = 'https://askthevet.com'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: `${BASE}/`, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/symptom`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/find-vet`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/legal/affiliate-disclosure`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/legal/editorial-standards`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/legal/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    ...SYMPTOM_PAGES.map((p) => ({
      url: `${BASE}/symptom/${p.slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    })),
  ]
}
