import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://dog.com'
  const now = new Date()

  const hubs: Array<{ path: string; priority: number; freq: 'daily' | 'weekly' | 'monthly' | 'yearly' }> = [
    { path: '/', priority: 1.0, freq: 'daily' },
    { path: '/breeds', priority: 0.9, freq: 'weekly' },
    { path: '/health', priority: 0.9, freq: 'weekly' },
    { path: '/nutrition', priority: 0.8, freq: 'weekly' },
    { path: '/training', priority: 0.8, freq: 'weekly' },
    { path: '/reviews', priority: 0.8, freq: 'weekly' },
    { path: '/find-a-vet', priority: 0.8, freq: 'monthly' },
    { path: '/faq', priority: 0.7, freq: 'monthly' },
    { path: '/editorial-standards', priority: 0.3, freq: 'yearly' },
    { path: '/legal/privacy-policy', priority: 0.2, freq: 'yearly' },
    { path: '/legal/terms', priority: 0.2, freq: 'yearly' },
    { path: '/legal/affiliate-disclosure', priority: 0.2, freq: 'yearly' },
  ]

  const breeds = ['akita','australian-shepherd','beagle','bernese-mountain-dog','border-collie',
    'boxer','bulldog','bullmastiff','cavalier-king-charles','cocker-spaniel','dachshund',
    'doberman-pinscher','french-bulldog','german-shepherd','golden-doodle','golden-retriever',
    'great-dane','great-pyrenees','irish-setter','irish-wolfhound','labrador-retriever','poodle',
    'rottweiler','saint-bernard','shiba-inu','shih-tzu','siberian-husky','vizsla','weimaraner',
    'yorkshire-terrier']

  const health = ['addisons-disease','anemia-in-dogs','cherry-eye','cushing-disease','dog-allergies',
    'dog-anxiety','dog-arthritis','dog-bloat-gvd','dog-cancer-signs','dog-cancer-treatment',
    'dog-dental-care','dog-diabetes','dog-diarrhea','dog-ear-infections','dog-heart-disease',
    'dog-hot-spots','dog-kidney-disease','dog-liver-disease','dog-luxating-patella','dog-mange',
    'dog-obesity','dog-pyoderma','dog-pyoderma-guide','dog-seizures','dog-skin-allergies',
    'dog-symptoms-guide','dog-vaccinations','dog-vomiting','french-bulldog-health',
    'german-shepherd-health','golden-retriever-health','heartworm-prevention','hypothyroidism',
    'intervertebral-disc-disease','labrador-health','megaesophagus','pancreatitis',
    'senior-dog-care','spay-neuter-guide']

  const nutrition = ['dog-supplements','elimination-diet','feeding-frequency','grain-free-dcm-risk',
    'how-much-to-feed','prescription-diets','puppy-nutrition','raw-diet-risks','reading-food-labels',
    'safe-human-foods','senior-dog-nutrition','toxic-foods','weight-management','wsava-explained']

  const training = ['basic-commands','crate-training','dog-aggression','excessive-barking',
    'house-training','leash-reactivity','loose-leash-walking','marker-training','off-leash-training',
    'positive-reinforcement','puppy-biting','puppy-schedule','resource-guarding','separation-anxiety',
    'socialization-window','trainer-credentials','training-red-flags']

  const reviews = ['best-dental-chews','best-dog-beds','best-dog-crates','best-dog-food-for-puppies',
    'best-dog-food-senior','best-dog-food-sensitive-stomach','best-dog-food-small-breed',
    'best-dog-gps-tracker','best-dog-harnesses','best-dry-dog-food','best-flea-tick-prevention',
    'best-heartworm-prevention','best-joint-supplements','best-large-breed-dog-food',
    'best-pet-insurance','best-slow-feeder-bowls']

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
    ...detail('/health', health, 0.8),
    ...detail('/nutrition', nutrition, 0.75),
    ...detail('/training', training, 0.75),
    ...detail('/reviews', reviews, 0.75),
  ]
}
