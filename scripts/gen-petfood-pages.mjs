#!/usr/bin/env node
/**
 * One-shot generator for PetFood.com editorial expansion (18 -> 100+ pages).
 *
 * Emits server-component page.tsx files that match the EXACT structure of the
 * existing hand-written petfood-com pages (buildMetadata + buildArticleSchema +
 * ArticleLayout + TableOfContents + RelatedLinks + EmailCapture + Sources).
 *
 * Content lives in CLUSTERS below. Every body string uses backticks or double
 * quotes so apostrophes never break TS parsing. JSX text is emitted via
 * dangerouslySetInnerHTML-free plain children — apostrophes in body prose are
 * escaped to &apos; at emit time, and internal links are rendered as <a> tags.
 *
 * Re-runnable: overwrites generated page files; does not touch hand-written
 * pages. Hub index arrays are regenerated from cluster membership.
 *
 * COO lane: editorial content only. No affiliate CTAs. Byline = PetFood.com
 * Editorial. AAFCO formulation specs are permitted (feed-formulation, not drug
 * dose). No fake credentials, no first-person hands-on claims.
 */
import { mkdirSync, writeFileSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()
const APP = join(ROOT, 'apps/petfood-com/src/app')

// ---- helpers -------------------------------------------------------------

// Escape apostrophes/quotes for safe JSX *text* children.
function esc(s) {
  return s
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/'/g, '&apos;')
    .replace(/"/g, '&quot;')
}

// Render a body block. Each block is either:
//   { h2: 'Heading', id: 'slug' }
//   { p: 'paragraph text', links?: [{label, href}] }  -> we inline links by marker
//   { ul: ['item', ...] }
//   { ol: ['item', ...] }
// Inline links: in text use [[label|/href]] markers.
function renderInline(text) {
  // split on [[label|/href]]; non-link spans are escaped for safe JSX text.
  const parts = []
  const re = /\[\[([^|\]]+)\|([^\]]+)\]\]/g
  let last = 0
  let m
  while ((m = re.exec(text)) !== null) {
    if (m.index > last) parts.push(esc(text.slice(last, m.index)))
    parts.push(`<a href="${m[2]}">${esc(m[1])}</a>`)
    last = m.index + m[0].length
  }
  if (last < text.length) parts.push(esc(text.slice(last)))
  return parts.join('')
}

// Sources are author-controlled trusted HTML (only <em>, &amp;, and plain
// text — no apostrophes). Rendered raw so <em> emphasis survives. Still
// supports [[label|/href]] link markers.
function renderSource(text) {
  return text.replace(/\[\[([^|\]]+)\|([^\]]+)\]\]/g, (_m, label, href) => `<a href="${href}">${label}</a>`)
}

function renderBlock(b, indent) {
  const pad = ' '.repeat(indent)
  if (b.h2) return `${pad}<h2 id="${b.id}">${esc(b.h2)}</h2>`
  if (b.p) return `${pad}<p>${renderInline(b.p)}</p>`
  if (b.ul)
    return (
      `${pad}<ul>\n` +
      b.ul.map((i) => `${pad}  <li>${renderInline(i)}</li>`).join('\n') +
      `\n${pad}</ul>`
    )
  if (b.ol)
    return (
      `${pad}<ol>\n` +
      b.ol.map((i) => `${pad}  <li>${renderInline(i)}</li>`).join('\n') +
      `\n${pad}</ol>`
    )
  return ''
}

function pascal(slug) {
  return slug
    .split(/[^a-zA-Z0-9]/)
    .filter(Boolean)
    .map((w) => w[0].toUpperCase() + w.slice(1))
    .join('') + 'Page'
}

function emitPage(p) {
  // p: { dir, slug, title, metaTitle, metaDesc, hubLabel, hubPath, hubName,
  //      category, readTime, hero, toc:[{label,id}], body:[blocks],
  //      related:[{label,href}], sources:[string], date }
  const fn = pascal(p.slug)
  const url = `https://petfood.com/${p.dir}/${p.slug}`
  const path = `/${p.dir}/${p.slug}`
  const tocItems = [...p.toc, { label: 'Sources', id: 'sources' }]
    .map((t) => `              { label: ${q(t.label)}, href: '#${t.id}' },`)
    .join('\n')
  const related = p.related
    .map((r) => `              { label: ${q(r.label)}, href: '${r.href}' },`)
    .join('\n')
  const bodyOut = p.body.map((b) => renderBlock(b, 8)).join('\n')
  const sourcesOut = p.sources
    .map((s) => `          <li>${renderSource(s)}</li>`)
    .join('\n')

  return `import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: ${q(p.metaTitle)},
  description:
    ${q(p.metaDesc)},
  path: '${path}',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: ${q(p.metaTitle)},
  description:
    ${q(p.metaDesc)},
  url: '${url}',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '${p.date}T00:00:00Z',
  modifiedAt: '${p.date}T00:00:00Z',
})

export default function ${fn}() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: ${q(p.title)},
        subtitle:
          ${q(p.hero)},
        category: ${q(p.category)},
        publishedAt: 'May 2026',
        readTime: '${p.readTime}',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: ${q(p.hubName)} },
        { name: ${q(p.title)}, href: '${path}' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
${tocItems}
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
${related}
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="${p.slug}"
          />
        </>
      }
    >
      <div className="carloOS-article">
${bodyOut}

        <h2 id="sources">Sources</h2>
        <ul>
${sourcesOut}
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
`
}

// q(): emit a JS string literal, preferring single quotes but switching to
// double quotes if the value contains a single quote (the apostrophe-safety
// rule). Never produces an unescaped apostrophe inside single quotes.
function q(s) {
  if (s.includes("'")) {
    return '"' + s.replace(/"/g, '\\"') + '"'
  }
  return "'" + s + "'"
}

// ---- hub emitter ---------------------------------------------------------

function emitHub(hub) {
  // hub: { dir, eyebrow, h1, intro, breadcrumb, cards:[{slug,title,description}] }
  const cards = hub.cards
    .map(
      (c) =>
        `  {\n    slug: '${c.slug}',\n    title: ${q(c.title)},\n    description:\n      ${q(
          c.description
        )},\n  },`
    )
    .join('\n')
  const constName = hub.dir.toUpperCase().replace(/-/g, '_')
  const fn = pascal(hub.dir).replace(/Page$/, 'HubPage')
  return `import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, EmailCapture } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: ${q(hub.metaTitle)},
  description:
    ${q(hub.metaDesc)},
  path: '/${hub.dir}',
})

const ${constName} = [
${cards}
]

export default function ${fn}() {
  return (
    <>
      <div className="bg-brand-dark px-container-sm sm:px-container py-16">
        <div className="flex items-center gap-2.5 mb-4">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">
            ${esc(hub.eyebrow)}
          </span>
        </div>
        <h1
          className="font-display font-black text-white tracking-tighter leading-tight mb-4"
          style={{ fontSize: 'clamp(36px, 5vw, 60px)' }}
        >
          ${esc(hub.h1)}
        </h1>
        <p className="text-lg font-light text-white/55 max-w-xl leading-relaxed">
          ${esc(hub.intro)}
        </p>
      </div>

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">${esc(hub.breadcrumb)}</span>
      </nav>

      <div className="px-container-sm sm:px-container py-12">
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-none p-0 max-w-content-wide">
          {${constName}.map((i) => (
            <li key={i.slug}>
              <Link
                href={\`/${hub.dir}/\${i.slug}\`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {i.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {i.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="petfood-com"
          title="Free Label Decoder"
          subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
          source="${hub.dir}-hub"
        />
      </section>
    </>
  )
}
`
}

// ---- content modules -----------------------------------------------------
import { PAGES, HUBS } from './petfood-content.mjs'

let count = 0
for (const p of PAGES) {
  const dir = join(APP, p.dir, p.slug)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'page.tsx'), emitPage(p))
  count++
}
for (const h of HUBS) {
  const dir = join(APP, h.dir)
  mkdirSync(dir, { recursive: true })
  writeFileSync(join(dir, 'page.tsx'), emitHub(h))
}
console.log(`Generated ${count} pages and ${HUBS.length} hubs.`)
