#!/usr/bin/env node
/**
 * One-shot generator for lizard.com content expansion (67 -> 100+).
 * Content is stored as JS objects so all apostrophes are JS-safe; the renderer
 * emits TSX where every dynamic string is a JS expression inside braces, so no
 * single-quoted JSX-attribute apostrophe hazard exists. Sidebar stats/related
 * links are passed as data. After generation this script can be deleted.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const HERE = dirname(fileURLToPath(import.meta.url))
const APP = join(HERE, '..', 'apps/lizard-com/src/app')

const j = (v) => JSON.stringify(v)

function fnName(slug) {
  return slug.split(/[-/]/).map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('') + 'Page'
}

function renderBody(blocks) {
  return blocks.map(b => {
    if (b.h2) return `          <h2>{${j(b.h2)}}</h2>`
    if (b.h3) return `          <h3>{${j(b.h3)}}</h3>`
    if (b.p) return `          <p>{${j(b.p)}}</p>`
    if (b.ul) return `          <ul>\n${b.ul.map(li => `            <li>{${j(li)}}</li>`).join('\n')}\n          </ul>`
    if (b.ol) return `          <ol>\n${b.ol.map(li => `            <li>{${j(li)}}</li>`).join('\n')}\n          </ol>`
    return ''
  }).join('\n')
}

function renderSources(sources) {
  if (!sources || !sources.length) return ''
  return `\n          <h2>{"Sources & Further Reading"}</h2>\n          <ul>\n${sources.map(s => `            <li>{${j(s)}}</li>`).join('\n')}\n          </ul>`
}

function renderPage(pg) {
  const stats = (pg.stats || []).map(([k, v]) => `[${j(k)}, ${j(v)}]`).join(', ')
  const related = (pg.related || []).map(([label, href]) => `{ label: ${j(label)}, href: ${j(href)} }`).join(', ')
  const breadcrumbs = pg.breadcrumbs.map(([name, href]) => `{ name: ${j(name)}, href: ${j(href)} }`).join(', ')
  const statsBlock = stats
    ? `<div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{${j(pg.statsTitle || 'Quick Facts')}}</div>
          {[${stats}].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        `
    : ''
  const sidebar = `<>
        ${statsBlock}<RelatedLinks title={${j(pg.relatedTitle || 'Related Guides')}} links={[${related}]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={${j('lizard-' + pg.slug.replace(/\//g, '-'))}} ctaText="Download Free" />
      </>`

  return `import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: ${j(pg.metaTitle)}, description: ${j(pg.metaDesc)}, path: ${j('/' + pg.slug)}, type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: ${j(pg.title)}, description: ${j(pg.schemaDesc || pg.metaDesc)}, url: ${j('https://lizard.com/' + pg.slug)}, imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function ${fnName(pg.slug)}() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: ${j(pg.title)}, subtitle: ${j(pg.subtitle)}, category: ${j(pg.category)}, authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: ${j(pg.readTime || '10 min')} }}
      breadcrumbs={[${breadcrumbs}]}
      schema={schema}
      sidebar={${sidebar}}
    >
      <div className="carloOS-article">
${renderBody(pg.blocks)}${renderSources(pg.sources)}
      </div>
    </ArticleLayout>
  )
}
`
}

const { SPECIES_PAGES } = await import('./lizard-content-species.mjs')
const { SPECIES_PAGES_2 } = await import('./lizard-content-species2.mjs')
const { HUSBANDRY_PAGES } = await import('./lizard-content-husbandry.mjs')
const { HEALTH_PAGES } = await import('./lizard-content-health.mjs')
const { FEEDING_PAGES } = await import('./lizard-content-feeding.mjs')
const { DECISION_PAGES } = await import('./lizard-content-decision.mjs')
const PAGES = [...SPECIES_PAGES, ...SPECIES_PAGES_2, ...HUSBANDRY_PAGES, ...HEALTH_PAGES, ...FEEDING_PAGES, ...DECISION_PAGES]

let count = 0
for (const pg of PAGES) {
  const dir = join(APP, pg.slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'page.tsx'), renderPage(pg))
  count++
}
console.log(`Generated ${count} pages`)
