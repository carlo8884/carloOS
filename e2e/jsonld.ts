import type { APIRequestContext } from '@playwright/test'

/**
 * Structural JSON-LD problems in rendered HTML: unparsable blocks, a missing
 * or http @context, a missing @type, FAQ questions without answers,
 * breadcrumb positions that are not 1..n, relative URLs, and any Review or
 * AggregateRating (we publish no ratings). Empty `image` strings on Article
 * come from the shared builder and are tracked separately, not checked here.
 */
export async function jsonLdProblems(request: APIRequestContext, path: string): Promise<string[]> {
  const res = await request.get(path)
  if (res.status() !== 200) return [`${path}: HTTP ${res.status()}`]
  const html = await res.text()
  const out: string[] = []
  const blocks = [...html.matchAll(/<script[^>]*application\/ld\+json[^>]*>([\s\S]*?)<\/script>/g)].map((m) => m[1])
  if (blocks.length === 0) out.push(`${path}: no JSON-LD`)
  const walk = (o: unknown, top: boolean): void => {
    if (Array.isArray(o)) return o.forEach((x) => walk(x, top))
    if (!o || typeof o !== 'object') return
    const r = o as Record<string, unknown>
    if (Array.isArray(r['@graph'])) return walk(r['@graph'], true)
    const t = r['@type']
    if (top) {
      if (!/^https:\/\/schema\.org\/?$/.test(String(r['@context']))) out.push(`${path}: @context ${String(r['@context'])}`)
      if (!t) out.push(`${path}: missing @type`)
    }
    if (t === 'Review' || t === 'AggregateRating' || 'aggregateRating' in r || 'review' in r) out.push(`${path}: ${String(t)} carries a review or rating`)
    if (t === 'FAQPage') {
      const qs = (r.mainEntity as Array<Record<string, any>>) ?? []
      if (qs.length === 0) out.push(`${path}: empty FAQPage`)
      for (const q of qs) if (!q?.name || !q?.acceptedAnswer?.text) out.push(`${path}: FAQ question without answer`)
    }
    if (t === 'BreadcrumbList') {
      const items = (r.itemListElement as Array<Record<string, unknown>>) ?? []
      if (items.some((it, i) => it.position !== i + 1)) out.push(`${path}: breadcrumb positions`)
    }
    for (const k of ['url', '@id', 'mainEntityOfPage']) {
      const v = r[k]
      if (typeof v === 'string' && v.startsWith('/')) out.push(`${path}: relative ${k} in ${String(t)}`)
    }
    for (const [k, v] of Object.entries(r)) if (!k.startsWith('@')) walk(v, false)
  }
  for (const b of blocks) {
    try {
      walk(JSON.parse(b), true)
    } catch {
      out.push(`${path}: unparsable JSON-LD`)
    }
  }
  return out
}
