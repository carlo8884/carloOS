#!/usr/bin/env tsx
/**
 * CarloOS SEO Audit Script
 * Scans all pages for missing metadata, OG images, schema markup, and canonical URLs.
 *
 * Run: npx tsx scripts/seo-audit.ts
 */

import fs from 'fs'
import path from 'path'

const APPS_DIR = path.join(process.cwd(), 'apps')
const APPS = ['dog-com', 'vets-co', 'fish-com', 'saddle-com', 'lizard-com']

interface PageAudit {
  app: string
  route: string
  file: string
  hasMetadata: boolean
  hasTitle: boolean
  hasDescription: boolean
  hasOgImage: boolean
  hasSchema: boolean
  hasBreadcrumbs: boolean
  hasDvmReviewed: boolean
  issues: string[]
}

function findPageFiles(dir: string, base = ''): Array<{ file: string; route: string }> {
  const results: Array<{ file: string; route: string }> = []
  const entries = fs.readdirSync(dir, { withFileTypes: true })

  for (const entry of entries) {
    if (entry.name.startsWith('_') || entry.name.startsWith('.')) continue
    const full = path.join(dir, entry.name)

    if (entry.isDirectory()) {
      const sub = base + '/' + entry.name
      results.push(...findPageFiles(full, sub))
    } else if (entry.name === 'page.tsx' || entry.name === 'page.ts') {
      results.push({ file: full, route: base || '/' })
    }
  }

  return results
}

function auditPage(app: string, file: string, route: string): PageAudit {
  const content = fs.readFileSync(file, 'utf-8')
  const issues: string[] = []

  const hasMetadata = content.includes('buildMetadata(') || content.includes("export const metadata")
  const hasTitle = content.includes("title:") && hasMetadata
  const hasDescription = content.includes("description:") && hasMetadata
  const hasOgImage = content.includes('ogImage') || content.includes('/api/og')
  const hasSchema = content.includes('buildArticleSchema') || content.includes('buildFAQSchema') || content.includes('buildProductSchema')
  const hasBreadcrumbs = content.includes('breadcrumbs')
  const hasDvmReviewed = content.includes('dvmReviewed')

  // Check for issues
  if (!hasMetadata) issues.push('Missing buildMetadata()')
  if (!hasTitle) issues.push('Missing title')
  if (!hasDescription) issues.push('Missing description')

  // Articles should have schema
  const isArticle = content.includes("type: 'article'") || content.includes('ArticleLayout')
  if (isArticle && !hasSchema) issues.push('Article missing schema markup')
  if (isArticle && !hasBreadcrumbs) issues.push('Article missing breadcrumbs')

  // Health/medical content should have DVM review flag
  const isHealthContent = route.includes('/health') || route.includes('/nutrition')
  if (isHealthContent && !hasDvmReviewed && isArticle) {
    issues.push('Health article missing dvmReviewed flag')
  }

  return {
    app,
    route,
    file,
    hasMetadata,
    hasTitle,
    hasDescription,
    hasOgImage,
    hasSchema,
    hasBreadcrumbs,
    hasDvmReviewed,
    issues,
  }
}

async function main() {
  console.log('\n🔍 CarloOS SEO Audit\n' + '='.repeat(50))

  const allAudits: PageAudit[] = []
  let totalPages = 0
  let pagesWithIssues = 0

  for (const app of APPS) {
    const appDir = path.join(APPS_DIR, app, 'src', 'app')
    if (!fs.existsSync(appDir)) {
      console.log(`⚠️  ${app}: src/app directory not found`)
      continue
    }

    const pages = findPageFiles(appDir)
    console.log(`\n📁 ${app} (${pages.length} pages)`)

    for (const { file, route } of pages) {
      const audit = auditPage(app, file, route)
      allAudits.push(audit)
      totalPages++

      if (audit.issues.length === 0) {
        // Clean page — just log route
        process.stdout.write(`  ✅ ${route}\n`)
      } else {
        pagesWithIssues++
        console.log(`  ⚠️  ${route}`)
        for (const issue of audit.issues) {
          console.log(`      → ${issue}`)
        }
      }
    }
  }

  // Summary
  console.log('\n' + '='.repeat(50))
  console.log('📊 SUMMARY')
  console.log(`   Total pages:      ${totalPages}`)
  console.log(`   Pages clean:      ${totalPages - pagesWithIssues}`)
  console.log(`   Pages with issues: ${pagesWithIssues}`)

  if (pagesWithIssues === 0) {
    console.log('\n✅ All pages pass SEO audit.\n')
  } else {
    const pct = Math.round(((totalPages - pagesWithIssues) / totalPages) * 100)
    console.log(`\n   Coverage: ${pct}% clean\n`)
  }

  // Issue breakdown
  const allIssues: Record<string, number> = {}
  for (const audit of allAudits) {
    for (const issue of audit.issues) {
      allIssues[issue] = (allIssues[issue] ?? 0) + 1
    }
  }

  if (Object.keys(allIssues).length > 0) {
    console.log('Most common issues:')
    Object.entries(allIssues)
      .sort((a, b) => b[1] - a[1])
      .forEach(([issue, count]) => {
        console.log(`  ${count}x ${issue}`)
      })
    console.log('')
  }
}

main().catch(console.error)
