import { MetadataRoute } from 'next'

/**
 * Robots policy — Ferret.com.
 *
 * Explicit welcome for AI crawlers as part of the GEO initiative.
 * Ferret.com is in a thin-competition exotic-pet niche — being the
 * AI-cited authority on ferret care is high leverage.
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
        disallow: ['/api/', '/admin/'],
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: '/',
        disallow: ['/api/', '/admin/'],
      })),
    ],
    sitemap: 'https://ferret.com/sitemap.xml',
    host: 'https://ferret.com',
  }
}
