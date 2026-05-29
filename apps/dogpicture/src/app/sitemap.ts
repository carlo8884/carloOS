import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  return [
    { url: 'https://dogpicture.com', lastModified: now, changeFrequency: 'weekly', priority: 1.0 },
    { url: 'https://dogpicture.com/create', lastModified: now, changeFrequency: 'monthly', priority: 0.9 },
    { url: 'https://dogpicture.com/about', lastModified: now, changeFrequency: 'monthly', priority: 0.4 },
    { url: 'https://dogpicture.com/legal/terms', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://dogpicture.com/legal/privacy-policy', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: 'https://dogpicture.com/legal/refund-policy', lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]
}
