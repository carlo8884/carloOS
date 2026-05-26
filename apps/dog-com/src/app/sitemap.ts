import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dog.com'
  const now = new Date()

  const staticRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: 'daily', priority: 1.0 },
    { url: `${baseUrl}/breeds`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/health`, lastModified: now, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/reviews`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/training`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/nutrition`, lastModified: now, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/find-a-vet`, lastModified: now, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/faq`, lastModified: now, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/editorial-standards`, lastModified: now, changeFrequency: 'yearly', priority: 0.3 },
    { url: `${baseUrl}/legal/privacy-policy`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
    { url: `${baseUrl}/legal/terms`, lastModified: now, changeFrequency: 'yearly', priority: 0.2 },
  ]

  // All static breed pages
  const breeds = ['golden-retriever','labrador-retriever','french-bulldog','german-shepherd','beagle',
    'poodle','bulldog','rottweiler','boxer','siberian-husky','dachshund','yorkshire-terrier',
    'great-dane','doberman-pinscher','shih-tzu','cavalier-king-charles','border-collie',
    'australian-shepherd','golden-doodle','bernese-mountain-dog','cocker-spaniel','vizsla',
    'weimaraner','irish-setter','irish-wolfhound','saint-bernard','great-pyrenees','bullmastiff',
    'akita','shiba-inu']
  const breedRoutes: MetadataRoute.Sitemap = breeds.map(slug => ({
    url: `${baseUrl}/breeds/${slug}`, lastModified: now, changeFrequency: 'monthly' as const, priority: 0.85,
  }))

  return [...staticRoutes, ...breedRoutes]
}
