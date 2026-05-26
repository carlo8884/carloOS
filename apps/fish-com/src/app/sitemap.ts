import { MetadataRoute } from 'next'
import { getPosts } from '@carloOS/db'
export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://fish.com'
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: new Date(), changeFrequency: 'daily', priority: 1.0 },
  ]
  let dynamicRoutes: MetadataRoute.Sitemap = []
  try {
    const posts = await getPosts('fish-com', undefined, 200)
    dynamicRoutes = posts.map(p => ({ url: `${baseUrl}${p.path}`, lastModified: new Date(), changeFrequency: 'monthly' as const, priority: 0.75 }))
  } catch { }
  return [...staticRoutes, ...dynamicRoutes]
}
