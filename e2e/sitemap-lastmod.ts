import { expect, type APIRequestContext } from '@playwright/test'

/** Sitemap <lastmod> must be the page's own stamped date, never the build time. */
export async function expectStampedLastmod(request: APIRequestContext, stamped: string[], unstamped: string[]) {
  const xml = await (await request.get('/sitemap/0.xml')).text()
  const entries = new Map<string, string | null>()
  for (const m of xml.matchAll(/<url>([\s\S]*?)<\/url>/g)) {
    const loc = m[1].match(/<loc>https:\/\/[^/<]+([^<]*)<\/loc>/)?.[1] || '/'
    entries.set(loc, m[1].match(/<lastmod>([^<]+)<\/lastmod>/)?.[1] ?? null)
  }
  for (const path of stamped) {
    const html = await (await request.get(path)).text()
    const modified = html.match(/"dateModified":"(\d{4}-\d{2}-\d{2})/)?.[1]
    expect(modified, `${path} dateModified`).toBeTruthy()
    expect(entries.get(path)?.slice(0, 10), `${path} lastmod`).toBe(modified)
  }
  for (const path of unstamped) {
    expect(entries.has(path), `${path} listed`).toBe(true)
    expect(entries.get(path), `${path} lastmod`).toBeNull()
  }
}
