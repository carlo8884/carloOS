/**
 * GET /api/search?q=golden+retriever&site=dog-com&limit=8
 * Full-text search across posts using Supabase pg_trgm / websearch_to_tsquery.
 * Powers site search bar. Returns JSON array of matching posts.
 */

import { NextRequest, NextResponse } from 'next/server'
import { searchPosts } from '@carloOS/db'
import type { SiteId } from '@carloOS/config'

export async function GET(req: NextRequest) {
  const { searchParams } = new URL(req.url)
  const q = searchParams.get('q')?.trim()
  const siteId = (searchParams.get('site') ?? 'dog-com') as SiteId
  const limit = Math.min(parseInt(searchParams.get('limit') ?? '8', 10), 20)

  if (!q || q.length < 2) {
    return NextResponse.json({ results: [], query: q ?? '' })
  }

  try {
    const results = await searchPosts(siteId, q, limit)
    return NextResponse.json({
      results: results.map(r => ({
        title: r.title,
        excerpt: r.excerpt,
        path: r.path,
        type: r.content_type,
      })),
      query: q,
      count: results.length,
    }, {
      headers: {
        'Cache-Control': 'public, s-maxage=60, stale-while-revalidate=300',
      },
    })
  } catch (err) {
    console.error('Search error:', err)
    return NextResponse.json({ results: [], query: q, error: 'Search unavailable' }, { status: 500 })
  }
}
