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

/** Obvious alternates. A synonym match scores below the word the visitor typed. */
const SYNONYM_GROUPS: readonly (readonly string[])[] = [
  ['crate', 'kennel'],
  ['filter', 'filtration'],
  ['tank', 'aquarium'],
  ['halter', 'headcollar'],
  ['insurance', 'coverage'],
]

function queryWords(query: string): { word: string; synonym: boolean }[] {
  const typed = query.trim().toLowerCase().split(/\s+/).filter((word) => word.length > 1)
  const out: { word: string; synonym: boolean }[] = []
  const seen = new Set<string>()
  for (const word of typed) {
    if (!seen.has(word)) {
      seen.add(word)
      out.push({ word, synonym: false })
    }
    const group = SYNONYM_GROUPS.find((row) => row.includes(word))
    if (!group) continue
    for (const alt of group) {
      if (seen.has(alt)) continue
      seen.add(alt)
      out.push({ word: alt, synonym: true })
    }
  }
  return out
}

/** Rank guide, review, comparison, and tool pages. Queries shorter than two characters match nothing. */
export function rankSearch(entries: readonly SearchEntry[], query: string): RankedSearchHit[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  const words = queryWords(q)
  const hits: { hit: RankedSearchHit; score: number }[] = []
  for (const entry of entries) {
    if (!TYPE[entry.category]) continue
    const title = entry.title.toLowerCase()
    const description = entry.description.toLowerCase()
    const path = entry.path.toLowerCase()
    let score = 0
    if (title.includes(q)) score += 12
    if (description.includes(q)) score += 4
    for (const { word, synonym } of words) {
      const titlePoints = synonym ? 4 : 6
      const descriptionPoints = synonym ? 1 : 2
      if (title.includes(word)) score += titlePoints
      if (description.includes(word)) score += descriptionPoints
      if (path.includes(word)) score += 1
      if (!synonym && entry.category.includes(word)) score += 1
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
