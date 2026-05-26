#!/usr/bin/env tsx
/**
 * CarloOS HTML → Supabase Migration Script
 *
 * Parses all existing HTML prototype pages, extracts content,
 * and seeds the Supabase `posts` table.
 *
 * Usage:
 *   npx tsx scripts/migrate-html.ts --site dog-com --dir ./html-prototypes/dog-com
 *   npx tsx scripts/migrate-html.ts --all --dir ./html-prototypes
 *
 * Prerequisites:
 *   - NEXT_PUBLIC_SUPABASE_URL and SUPABASE_SERVICE_ROLE_KEY in environment
 *   - Supabase schema already applied (packages/db/src/schema.sql)
 */

import { readFileSync, readdirSync, existsSync } from 'fs'
import { join, basename } from 'path'
import { createClient } from '@supabase/supabase-js'

// ─── Types ───────────────────────────────────────────────────────────────────

type SiteId = 'dog-com' | 'vets-co' | 'fish-com' | 'saddle-com' | 'lizard-com'
type ContentType = 'article' | 'review' | 'breed' | 'guide' | 'faq' | 'location'

interface ExtractedPage {
  slug: string
  path: string
  title: string
  metaDescription: string
  ogImage: string | null
  authorName: string | null
  authorCredentials: string | null
  dvmReviewed: boolean
  bodyHtml: string
  contentType: ContentType
  tags: string[]
  publishedAt: string
}

// ─── Config ───────────────────────────────────────────────────────────────────

const SITE_PATH_PREFIXES: Record<SiteId, string> = {
  'dog-com': '',
  'vets-co': '',
  'fish-com': '',
  'saddle-com': '',
  'lizard-com': '',
}

// Slug → content type inference
function inferContentType(slug: string, html: string): ContentType {
  if (slug === 'faq') return 'faq'
  if (slug.startsWith('best-') || slug.includes('-review') || slug.includes('-vs-')) return 'review'
  if (slug.startsWith('breed-') || slug.includes('-care') || slug.includes('-health') && !slug.includes('guide')) return 'breed'
  if (slug.includes('-guide') || slug.includes('how-to') || slug.includes('buying')) return 'guide'
  if (slug.startsWith('find-vet-')) return 'location'
  return 'article'
}

// Slug → tags inference
function inferTags(slug: string, siteId: SiteId): string[] {
  const tags: string[] = [siteId]

  if (slug.includes('golden-retriever')) tags.push('golden-retriever', 'dog-breeds')
  if (slug.includes('labrador')) tags.push('labrador-retriever', 'dog-breeds')
  if (slug.includes('french-bulldog')) tags.push('french-bulldog', 'dog-breeds', 'brachycephalic')
  if (slug.includes('german-shepherd')) tags.push('german-shepherd', 'dog-breeds')
  if (slug.includes('health')) tags.push('health')
  if (slug.includes('insurance')) tags.push('pet-insurance', 'finance')
  if (slug.includes('flea') || slug.includes('tick')) tags.push('parasites', 'prevention')
  if (slug.includes('dental')) tags.push('dental-health')
  if (slug.includes('senior')) tags.push('senior-dogs')
  if (slug.includes('symptoms') || slug.includes('emergency')) tags.push('emergency', 'symptoms')
  if (slug.includes('leopard-gecko') || slug.includes('bearded-dragon') ||
      slug.includes('ball-python') || slug.includes('corn-snake') ||
      slug.includes('crested-gecko') || slug.includes('blue-tongue')) tags.push('species-care')
  if (slug.includes('uvb') || slug.includes('lighting')) tags.push('equipment', 'uvb')
  if (slug.includes('saddle') || slug.includes('leather') || slug.includes('stubben') || slug.includes('pessoa')) tags.push('saddles', 'equestrian')
  if (slug.startsWith('best-')) tags.push('product-review', 'affiliate')

  return [...new Set(tags)]
}

// ─── HTML Parser ──────────────────────────────────────────────────────────────

function extractPage(html: string, slug: string, siteId: SiteId): ExtractedPage {
  // Title
  const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i)
  const rawTitle = titleMatch?.[1] ?? slug
  // Strip site name from title (e.g. "Golden Retriever | Dog.com" → "Golden Retriever")
  const title = rawTitle.replace(/\s*[|—–]\s*(Dog\.com|Vets\.co|Saddle\.com|Lizard\.com|Fish\.com)\s*$/i, '').trim()

  // Meta description
  const descMatch = html.match(/<meta\s+name="description"\s+content="([^"]+)"/i)
    ?? html.match(/<meta\s+content="([^"]+)"\s+name="description"/i)
  const metaDescription = descMatch?.[1] ?? ''

  // OG image
  const ogMatch = html.match(/<meta\s+property="og:image"\s+content="([^"]+)"/i)
  const ogImage = ogMatch?.[1] ?? null

  // Author (look for DVM byline patterns)
  const authorMatch = html.match(/Dr\.\s+([A-Z][a-z]+\s+[A-Z][a-z]+),?\s*(DVM[^<"]*)/i)
  const authorName = authorMatch ? `Dr. ${authorMatch[1]}, ${authorMatch[2].trim()}` : null
  const authorCredentials = authorMatch?.[2]?.trim() ?? null

  // DVM reviewed
  const dvmReviewed = /DVM|veterinarian|board.certified/i.test(html)

  // Extract body — remove nav, footer, scripts, styles, head
  let bodyHtml = html

  // Remove <head> entirely
  bodyHtml = bodyHtml.replace(/<head[\s\S]*?<\/head>/gi, '')
  // Remove <html>, <body> wrappers
  bodyHtml = bodyHtml.replace(/<\/?html[^>]*>/gi, '').replace(/<\/?body[^>]*>/gi, '')
  // Remove <nav> elements
  bodyHtml = bodyHtml.replace(/<nav[\s\S]*?<\/nav>/gi, '')
  // Remove <footer> elements
  bodyHtml = bodyHtml.replace(/<footer[\s\S]*?<\/footer>/gi, '')
  // Remove inline <script> tags
  bodyHtml = bodyHtml.replace(/<script[\s\S]*?<\/script>/gi, '')
  // Remove inline <style> tags
  bodyHtml = bodyHtml.replace(/<style[\s\S]*?<\/style>/gi, '')
  // Remove breadcrumb divs
  bodyHtml = bodyHtml.replace(/<div[^>]*class="[^"]*breadcrumb[^"]*"[\s\S]*?<\/div>/gi, '')
  // Remove sidebar
  bodyHtml = bodyHtml.replace(/<aside[\s\S]*?<\/aside>/gi, '')
  // Collapse whitespace
  bodyHtml = bodyHtml.replace(/\n{3,}/g, '\n\n').trim()

  // Determine path
  const contentType = inferContentType(slug, html)
  let path: string
  switch (contentType) {
    case 'review': path = `/reviews/${slug}`; break
    case 'breed': path = `/breeds/${slug.replace(/^breed-/, '')}`; break
    case 'guide': path = `/guides/${slug}`; break
    case 'location': path = `/${slug}`; break
    case 'faq': path = '/faq'; break
    default: path = `/health/${slug}`
  }

  return {
    slug,
    path,
    title,
    metaDescription,
    ogImage,
    authorName,
    authorCredentials,
    dvmReviewed,
    bodyHtml,
    contentType,
    tags: inferTags(slug, siteId),
    publishedAt: new Date().toISOString(),
  }
}

// ─── Pages to skip ────────────────────────────────────────────────────────────

const SKIP_SLUGS = new Set([
  'article',           // empty template
  'breed-profile',     // empty template
  'privacy-policy',    // legal — not a content post
  'terms',             // legal
  'editorial-standards', // keep but handle separately
])

// ─── Main ─────────────────────────────────────────────────────────────────────

async function migrate(siteId: SiteId, htmlDir: string, dryRun: boolean) {
  console.log(`\n🚀 Migrating ${siteId} from ${htmlDir}`)
  console.log(dryRun ? '  DRY RUN — no database writes\n' : '  LIVE — writing to Supabase\n')

  if (!existsSync(htmlDir)) {
    console.error(`❌ Directory not found: ${htmlDir}`)
    process.exit(1)
  }

  // Read all HTML files
  const files = readdirSync(htmlDir)
    .filter(f => f.endsWith('.html') && !f.endsWith('.bak'))

  console.log(`  Found ${files.length} HTML files`)

  const pages: ExtractedPage[] = []

  for (const file of files) {
    const slug = basename(file, '.html')

    if (SKIP_SLUGS.has(slug)) {
      console.log(`  ⏭  Skipping: ${slug}`)
      continue
    }

    const html = readFileSync(join(htmlDir, file), 'utf-8')
    const page = extractPage(html, slug, siteId)
    pages.push(page)

    console.log(`  ✓  ${slug} → ${page.path} (${page.contentType})`)
  }

  console.log(`\n  Extracted ${pages.length} pages ready for import`)

  if (dryRun) {
    console.log('\n  Sample output:')
    console.log(JSON.stringify(pages[0], null, 2))
    return
  }

  // Write to Supabase
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

  if (!supabaseUrl || !serviceKey) {
    console.error('❌ Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
    process.exit(1)
  }

  const supabase = createClient(supabaseUrl, serviceKey, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  let inserted = 0
  let errors = 0

  for (const page of pages) {
    const { error } = await supabase.from('posts').upsert({
      site_id: siteId,
      content_type: page.contentType,
      slug: page.slug,
      path: page.path,
      title: page.title,
      meta_description: page.metaDescription,
      og_image: page.ogImage,
      author_name: page.authorName,
      author_credentials: page.authorCredentials,
      dvm_reviewed: page.dvmReviewed,
      body_html: page.bodyHtml,
      tags: page.tags,
      published: true,
      published_at: page.publishedAt,
    }, {
      onConflict: 'site_id,slug',
    })

    if (error) {
      console.error(`  ❌ Error inserting ${page.slug}:`, error.message)
      errors++
    } else {
      console.log(`  ✅ Inserted: ${page.slug}`)
      inserted++
    }
  }

  console.log(`\n  Migration complete: ${inserted} inserted, ${errors} errors`)
}

// ─── CLI ──────────────────────────────────────────────────────────────────────

const args = process.argv.slice(2)
const dryRun = args.includes('--dry-run')
const allSites = args.includes('--all')

const SITE_DIRS: Array<[SiteId, string]> = [
  ['dog-com', './html-prototypes/dog-com'],
  ['vets-co', './html-prototypes/vets-co'],
  ['saddle-com', './html-prototypes/saddle-com'],
  ['lizard-com', './html-prototypes/lizard-com'],
]

if (allSites) {
  for (const [siteId, dir] of SITE_DIRS) {
    await migrate(siteId, dir, dryRun)
  }
} else {
  const siteArg = args.find(a => a.startsWith('--site='))?.split('=')[1]
    ?? args[args.indexOf('--site') + 1] as SiteId | undefined
  const dirArg = args.find(a => a.startsWith('--dir='))?.split('=')[1]
    ?? args[args.indexOf('--dir') + 1]

  if (!siteArg || !dirArg) {
    console.log(`
Usage:
  npx tsx scripts/migrate-html.ts --site dog-com --dir ./html-prototypes/dog-com
  npx tsx scripts/migrate-html.ts --all --dir ./html-prototypes
  npx tsx scripts/migrate-html.ts --site dog-com --dir ./html-prototypes/dog-com --dry-run
    `)
    process.exit(0)
  }

  await migrate(siteArg as SiteId, dirArg, dryRun)
}
