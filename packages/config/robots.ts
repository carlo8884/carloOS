import type { MetadataRoute } from 'next'

/**
 * Shared robots.txt policy for CarloOS sites.
 *
 * Per CLAUDE.md §6 (SEO/GEO/Authority charter): robots.txt hygiene is
 * indexing-efficiency table-stakes. Per Tier 1 protect-the-asset directive:
 * Dog.com and Fish.com are acquisition targets; explicit and open crawl
 * posture serves acquirer diligence.
 *
 * Design:
 * 1. Open by default — `User-agent: *` allows `/`.
 * 2. Explicit allow blocks for major AI crawlers (GPTBot, ClaudeBot,
 *    PerplexityBot, Google-Extended, etc.). Explicit consent + clarity.
 * 3. Disallow non-content surfaces (`/api/`, `/admin/`, `/dashboard/`,
 *    `/go/`). The `/go/` redirect handlers shouldn't be in search/AI
 *    indexes (they redirect to vendor URLs — index pollution).
 */

/**
 * Known AI-search crawlers we explicitly allow.
 * Sources: OpenAI bots docs, Anthropic ClaudeBot policy, Perplexity bots
 * docs, Google Search docs (Google-Extended), Cohere, Apple Intelligence,
 * Amazon, Bytedance, Common Crawl.
 */
export const AI_CRAWLER_USER_AGENTS = [
  'GPTBot',
  'ChatGPT-User',
  'OAI-SearchBot',
  'ClaudeBot',
  'Claude-Web',
  'anthropic-ai',
  'PerplexityBot',
  'Perplexity-User',
  'Google-Extended',
  'cohere-ai',
  'Applebot-Extended',
  'Amazonbot',
  'Bytespider',
  'CCBot',
] as const

/**
 * Paths every CarloOS site should disallow:
 * - /api/      — server endpoints, no content
 * - /admin/    — admin UI, never indexed
 * - /dashboard/ — revenue dashboards (Monetization lane), never indexed
 * - /go/       — affiliate-link 302 redirects; following them indexes
 *                vendor URLs (not ours) and creates canonicalization
 *                confusion. Internal nav still works (robots only
 *                affects crawlers, not site users).
 */
export const DEFAULT_DISALLOW_PATHS = ['/api/', '/admin/', '/dashboard/', '/go/'] as const

/**
 * Build a Next.js MetadataRoute.Robots for a CarloOS site.
 *
 * @param siteUrl - canonical site URL (e.g. 'https://dog.com')
 * @param extraDisallow - per-site additional disallow paths
 */
export function buildRobots(siteUrl: string, extraDisallow: string[] = []): MetadataRoute.Robots {
  const baseDisallow = [...DEFAULT_DISALLOW_PATHS, ...extraDisallow]

  const rules: MetadataRoute.Robots['rules'] = [
    {
      userAgent: '*',
      allow: ['/', '/directory'],
      disallow: baseDisallow,
    },
    ...AI_CRAWLER_USER_AGENTS.map((userAgent) => ({
      userAgent,
      allow: ['/', '/directory'],
      disallow: baseDisallow,
    })),
  ]

  return {
    rules,
    sitemap: `${siteUrl}/sitemap.xml`,
  }
}
