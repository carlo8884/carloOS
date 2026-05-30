import { MetadataRoute } from 'next'

/**
 * Robots policy — Dog.com.
 *
 * Explicit welcome for AI crawlers (GPTBot, ClaudeBot, PerplexityBot,
 * Google-Extended, etc.) as part of the GEO (Generative Engine Optimization)
 * initiative. Brand-name domains like dog.com are disproportionately cited
 * by AI assistants; opening the door explicitly removes any ambiguity.
 *
 * See `/llms.txt` for AI-bot guidance on site structure and citation.
 */
export default function robots(): MetadataRoute.Robots {
  const aiBots = [
    'GPTBot',           // OpenAI
    'ChatGPT-User',     // OpenAI (user-initiated browsing)
    'OAI-SearchBot',    // OpenAI search index
    'ClaudeBot',        // Anthropic
    'Claude-Web',       // Anthropic
    'PerplexityBot',    // Perplexity
    'Perplexity-User',  // Perplexity (user-initiated)
    'Google-Extended',  // Google AI training / Gemini citation
    'Applebot-Extended',// Apple Intelligence
    'CCBot',            // Common Crawl (used by many AI training pipelines)
    'cohere-ai',        // Cohere
    'YouBot',           // You.com
    'meta-externalagent', // Meta AI
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
    sitemap: 'https://dog.com/sitemap.xml',
    host: 'https://dog.com',
  }
}
