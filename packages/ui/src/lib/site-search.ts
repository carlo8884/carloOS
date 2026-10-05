export type SearchCategory = 'guides' | 'reviews' | 'comparisons' | 'tools'

export interface SearchEntry {
  path: string
  title: string
  description: string
  category: SearchCategory
}

export interface RankedSearchHit {
  title: string
  excerpt: string
  path: string
  type: 'guide' | 'review' | 'comparison' | 'tool'
}

const TYPE: Record<SearchCategory, RankedSearchHit['type']> = {
  guides: 'guide',
  reviews: 'review',
  comparisons: 'comparison',
  tools: 'tool',
}

/** Rank guide, review, comparison, and tool pages. Queries shorter than two characters match nothing. */
export function rankSearch(entries: readonly SearchEntry[], query: string): RankedSearchHit[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  const words = q.split(/\s+/).filter((word) => word.length > 1)
  const hits: { hit: RankedSearchHit; score: number }[] = []
  for (const entry of entries) {
    if (!TYPE[entry.category]) continue
    const title = entry.title.toLowerCase()
    const description = entry.description.toLowerCase()
    const path = entry.path.toLowerCase()
    let score = 0
    if (title.includes(q)) score += 12
    if (description.includes(q)) score += 4
    for (const word of words) {
      if (title.includes(word)) score += 6
      if (description.includes(word)) score += 2
      if (path.includes(word)) score += 1
      if (entry.category.includes(word)) score += 1
    }
    if (score <= 0) continue
    hits.push({
      score,
      hit: {
        title: entry.title,
        excerpt: entry.description,
        path: entry.path,
        type: TYPE[entry.category],
      },
    })
  }
  hits.sort((a, b) => b.score - a.score || a.hit.title.localeCompare(b.hit.title))
  return hits.map((row) => row.hit)
}

export function searchApiBody(entries: readonly SearchEntry[], requestUrl: string) {
  const url = new URL(requestUrl)
  const query = url.searchParams.get('q') ?? ''
  const raw = Number(url.searchParams.get('limit') ?? 8)
  const limit = Number.isFinite(raw) ? Math.min(20, Math.max(1, Math.floor(raw))) : 8
  const all = rankSearch(entries, query)
  return { results: all.slice(0, limit), count: all.length }
}
