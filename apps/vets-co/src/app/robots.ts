import { MetadataRoute } from 'next'

/**
 * Robots policy — Vets.co.
 *
 * Explicit welcome for AI crawlers as part of the GEO initiative.
 * Vets.co is the portfolio's insurance hub; getting cited by AI
 * assistants on pet insurance queries is the highest-EPC traffic source.
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
    sitemap: 'https://vets.co/sitemap.xml',
    host: 'https://vets.co',
  }
}
