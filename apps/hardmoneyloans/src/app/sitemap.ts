import { MetadataRoute } from 'next'
import { LENDERS } from '@/data/lenders'
import { STATES } from '@/data/states'

const BASE = 'https://hardmoneyloans.com'

const GUIDES = [
  'what-is-hard-money',
  'fix-and-flip-financing',
  'brrrr-strategy',
  'dscr-vs-hard-money',
  'how-to-qualify',
]

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  const fixed: MetadataRoute.Sitemap = [
    { url: BASE, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${BASE}/lenders`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${BASE}/states`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/guides`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${BASE}/quiz`, lastModified: now, changeFrequency: 'monthly', priority: 0.85 },
    { url: `${BASE}/quote`, lastModified: now, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${BASE}/editorial-standards`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/disclosures`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${BASE}/legal/privacy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${BASE}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  const lenderPages: MetadataRoute.Sitemap = LENDERS.map((l) => ({
    url: `${BASE}/lenders/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.8,
  }))

  const quotePages: MetadataRoute.Sitemap = LENDERS.map((l) => ({
    url: `${BASE}/quote/${l.slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.6,
  }))

  const statePages: MetadataRoute.Sitemap = STATES.map((s) => ({
    url: `${BASE}/states/${s.code.toLowerCase()}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.7,
  }))

  const guidePages: MetadataRoute.Sitemap = GUIDES.map((slug) => ({
    url: `${BASE}/guides/${slug}`,
    lastModified: now,
    changeFrequency: 'monthly',
    priority: 0.75,
  }))

  return [...fixed, ...lenderPages, ...quotePages, ...statePages, ...guidePages]
}
