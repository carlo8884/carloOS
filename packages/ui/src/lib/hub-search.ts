/** Match a hub card by title and topic. Empty query matches everything. */
export function hubQueryMatches(query: string, title: string, topic: string): boolean {
  const words = query.trim().toLowerCase().split(/\s+/).filter(Boolean)
  if (words.length === 0) return true
  const hay = `${title} ${topic}`.toLowerCase()
  return words.every((word) => hay.includes(word))
}
