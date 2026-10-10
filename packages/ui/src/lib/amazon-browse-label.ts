/**
 * Visible Amazon button text derived from the /go search the button already opens.
 * Generic "Shop on Amazon" labels are rewritten. An explicit product label is kept.
 */

const GENERIC_LABELS = new Set(['Shop on Amazon', 'Shop on Amazon →', 'Shop on Amazon ->'])

/** Multi-word names, longest first, matched on the decoded search phrase. */
const PHRASES: Array<[string, string]> = [
  ['daily racing form', 'Daily Racing Form'],
  ['circle y', 'Circle Y'],
]

const WORDS: Record<string, string> = {
  albion: 'Albion',
  county: 'County',
  eheim: 'Eheim',
  pessoa: 'Pessoa',
  wintec: 'Wintec',
}

export function amazonBrowseLabel(href: string): string {
  const path = href.split('?')[0] ?? ''
  const slug = path.split('/').filter(Boolean).pop() ?? ''
  let phrase = slug
  try {
    phrase = decodeURIComponent(slug)
  } catch {
    phrase = slug
  }
  phrase = phrase.replace(/\+/g, ' ').replace(/\s+/g, ' ').trim()
  if (!phrase) return 'Shop on Amazon →'
  let named = phrase.toLowerCase()
  for (const [from, to] of PHRASES) {
    named = named.replaceAll(from, to)
  }
  named = named
    .split(' ')
    .map((word) => WORDS[word] ?? word)
    .join(' ')
  return `Browse ${named} on Amazon →`
}

/** Use the search phrase when the caller left the generic shop label in place. */
export function amazonButtonLabel(href: string | undefined, label?: string): string {
  const explicit = label?.trim()
  if (explicit && !GENERIC_LABELS.has(explicit)) return explicit
  if (!href || !/\/go\/amazon/i.test(href)) return explicit || 'Shop on Amazon →'
  return amazonBrowseLabel(href)
}
