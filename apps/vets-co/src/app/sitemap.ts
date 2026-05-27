import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://vets.co'
  const now = new Date()

  const hubs: Array<{ path: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' | 'yearly' }> = [
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/find-a-vet', priority: 0.95, freq: 'weekly' },
    { path: '/health', priority: 0.9, freq: 'weekly' },
    { path: '/telehealth', priority: 0.85, freq: 'monthly' },
    { path: '/reviews', priority: 0.8, freq: 'weekly' },
  ]

  const breeds = ['french-bulldog-health','german-shepherd-health','golden-retriever-health',
    'labrador-health']

  const health = ['allergic-reactions-dogs','canine-influenza','cognitive-dysfunction',
    'cushing-disease-dogs','dehydration-in-dogs','dental-cleaning-guide','dog-eye-conditions',
    'dog-vaccinations-guide','emergency-signs','heartworm-in-dogs','heat-stroke-dogs',
    'intestinal-parasites','leptospirosis','pain-management-dogs','pain-signs-dogs',
    'preventive-care-schedule','senior-bloodwork-guide','senior-pet-care',
    'spay-neuter-benefits','tick-borne-diseases','urinary-tract-infection','weight-management']

  const reviews = ['best-pet-insurance']

  const detail = (prefix: string, slugs: string[], priority: number): MetadataRoute.Sitemap =>
    slugs.map((slug) => ({
      url: `${baseUrl}${prefix}/${slug}`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority,
    }))

  return [
    ...hubs.map((h) => ({
      url: `${baseUrl}${h.path === '/' ? '' : h.path}`,
      lastModified: now,
      changeFrequency: h.freq,
      priority: h.priority,
    })),
    ...detail('/breeds', breeds, 0.85),
    ...detail('/health', health, 0.85),
    ...detail('/reviews', reviews, 0.85),
  ]
}
