export type SearchCategory = 'guides' | 'reviews' | 'comparisons' | 'tools'

export interface SearchEntry {
  path: string
  title: string
  description: string
  category: SearchCategory
  /** Extra match text from the search index. Not shown in the result excerpt. */
  keywords?: string
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
  ['crate', 'kennel', 'krate'],
  ['filter', 'filtration'],
  ['tank', 'aquarium'],
  ['halter', 'headcollar'],
  ['insurance', 'coverage'],
  ['weight', 'wieght'],
  ['emergency', 'emergancy'],
  ['feed', 'food'],
  ['cage', 'kage'],
  ['cycling', 'cyceling'],
]

/** One typed token that visitors use for two words, such as "tankmate". */
const SPLIT_WORDS: Readonly<Record<string, readonly string[]>> = {
  tankmate: ['tank', 'mate'],
  tankmates: ['tank', 'mate'],
}

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
    const alts = [...(group ?? []), ...(SPLIT_WORDS[word] ?? [])]
    for (const alt of alts) {
      if (seen.has(alt)) continue
      seen.add(alt)
      out.push({ word: alt, synonym: true })
    }
  }
  return out
}

function tokens(text: string): string[] {
  return text.toLowerCase().match(/[a-z0-9]+/g) ?? []
}

/**
 * 2 = the token is the typed word.
 * 1 = a prefix ("food"/"foods"), a simple plural ("blankets"/"blanket"),
 *     or a stemmed plural ("vaccines"/"vaccinations").
 * "ich" matches "ich", not "which".
 */
function matchQuality(token: string, word: string): number {
  if (token === word) return 2
  if (word.length >= 3 && token.startsWith(word)) return 1
  if (word.length >= 4 && word.endsWith('s')) {
    const stem = word.endsWith('es') ? word.slice(0, -2) : word.slice(0, -1)
    if (stem.length >= 3 && (token === stem || token.startsWith(stem))) return 1
  }
  return 0
}

/** A typed word matches a whole token, or the start of a longer token when it is at least 3 letters. */
function tokenMatches(token: string, word: string): boolean {
  return matchQuality(token, word) > 0
}

function fieldQuality(text: string, word: string): number {
  let best = 0
  for (const token of tokens(text)) {
    const quality = matchQuality(token, word)
    if (quality > best) best = quality
  }
  return best
}

function addWordScore(score: number, text: string, word: string, exact: number, weak: number, synonym: boolean): number {
  const quality = fieldQuality(text, word)
  if (quality === 0) return score
  if (synonym) return score + Math.min(exact, weak)
  return score + (quality === 2 ? exact : weak)
}

function containsWords(text: string, words: string[]): boolean {
  const hay = tokens(text)
  if (words.length === 0 || hay.length < words.length) return false
  for (let i = 0; i <= hay.length - words.length; i++) {
    if (words.every((word, j) => tokenMatches(hay[i + j], word))) return true
  }
  return false
}

/** Rank guide, review, comparison, and tool pages. Queries shorter than two characters match nothing. */
export function rankSearch(entries: readonly SearchEntry[], query: string): RankedSearchHit[] {
  const q = query.trim().toLowerCase()
  if (q.length < 2) return []
  const words = queryWords(q)
  const phrase = tokens(q)
  const hits: { hit: RankedSearchHit; score: number }[] = []
  for (const entry of entries) {
    if (!TYPE[entry.category]) continue
    const title = entry.title.toLowerCase()
    const description = entry.description.toLowerCase()
    const keywords = (entry.keywords ?? '').toLowerCase()
    const path = entry.path.toLowerCase()
    let score = 0
    if (containsWords(title, phrase)) score += 12
    if (containsWords(description, phrase)) score += 4
    if (keywords && containsWords(keywords, phrase)) score += 14
    for (const { word, synonym } of words) {
      score = addWordScore(score, title, word, 6, 4, synonym)
      score = addWordScore(score, description, word, 2, 1, synonym)
      score = addWordScore(score, keywords, word, 5, 3, synonym)
      score = addWordScore(score, path, word, 2, 1, synonym)
      if (!synonym && containsWords(entry.category, [word])) score += 1
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
