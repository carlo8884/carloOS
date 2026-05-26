import { MetadataRoute } from 'next'
import { getPosts } from '@carloOS/db'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://dog.com'

  // Static routes
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/breeds`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/health`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/reviews`, lastModified: new Date(), changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/find-a-vet`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: new Date(), changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/editorial-standards`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/privacy-policy`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/legal/terms`, lastModified: new Date(), changeFrequency: 'yearly', priority: 0.2 },
  ]

  // Known breed pages
  const breedSlugs = ['golden-retriever', 'labrador-retriever', 'french-bulldog', 'german-shepherd', 'beagle', 'poodle']
  const breedRoutes: MetadataRoute.Sitemap = breedSlugs.map(slug => ({
    url: `${baseUrl}/breeds/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }))

  // Dynamic routes from Supabase
  let dynamicRoutes: MetadataRoute.Sitemap = []
  try {
    const posts = await getPosts('dog-com', undefined, 200)
    dynamicRoutes = posts
      .filter(p => p.path && !p.path.includes('/breeds/')) // breeds handled above
      .map(p => ({
        url: `${baseUrl}${p.path}`,
        lastModified: p.published_at ? new Date(p.published_at) : new Date(),
        changeFrequency: 'monthly' as const,
        priority: p.path.startsWith('/reviews/') ? 0.8 : 0.75,
      }))
  } catch {
    // DB not connected — static only
  }

  return [...staticRoutes, ...breedRoutes, ...dynamicRoutes]
}
