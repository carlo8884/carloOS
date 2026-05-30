import { MetadataRoute } from 'next'

/**
 * Robots policy — Fish.com.
 *
 * Explicit welcome for AI crawlers as part of the GEO initiative.
 * Fish.com (Tier 1 per portfolio strategy v2) gets the same AI-citation
 * treatment as dog.com, vets.co, and ferret.com. Aquarium-keeping queries
 * are growing fast in AI search; fish.com brand authority should win them.
 *
 * See `/llms.txt` for AI-bot guidance on site structure and citation.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    'GPTBot',
    'ChatGPT-User',
    'OAI-SearchBot',
    'ClaudeBot',
    'Claude-Web',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'CCBot',
    'cohere-ai',
    'YouBot',
    'meta-externalagent',
  ]

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/api/'],
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/'],
      })),
    ],
    sitemap: 'https://fish.com/sitemap.xml',
    host: 'https://fish.com',
  }
}
