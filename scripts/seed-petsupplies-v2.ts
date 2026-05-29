#!/usr/bin/env tsx
/**
 * PetSupplies.com — products_v2 seed script
 * Architect S1 / Directive 6.
 *
 * Loads apps/petsupplies/src/data/products.json (the checked-in seed file)
 * and either:
 *   a) writes/upserts rows into the Supabase products_v2 table when
 *      SUPABASE_SERVICE_ROLE_KEY and NEXT_PUBLIC_SUPABASE_URL are present, or
 *   b) regenerates the seed file via OpenAI gpt-4o-mini when --regenerate is
 *      passed and OPENAI_API_KEY is present.
 *
 * Default behavior is to upsert the checked-in JSON to Supabase. The OpenAI
 * regeneration path exists so the seed can be expanded/refreshed deterministically
 * later. It does NOT run by default — the checked-in JSON is reviewed manually
 * for FTC-disclosure compliance and brand-name realism.
 *
 * Usage:
 *   npx tsx scripts/seed-petsupplies-v2.ts             # upsert checked-in JSON
 *   npx tsx scripts/seed-petsupplies-v2.ts --dry-run   # print what would happen
 *   npx tsx scripts/seed-petsupplies-v2.ts --regenerate --category dog-beds
 *                                                     # ask gpt-4o-mini for a fresh draft of one category
 *   npx tsx scripts/seed-petsupplies-v2.ts --regenerate-all
 *                                                     # full regeneration via gpt-4o-mini (manual review required)
 */

import { createClient } from '@supabase/supabase-js'
import { readFileSync, writeFileSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, resolve } from 'node:path'

// ─── Paths ────────────────────────────────────────────────────────────────────
const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)
const SEED_PATH = resolve(__dirname, '../apps/petsupplies/src/data/products.json')
const CATEGORIES_PATH = resolve(__dirname, '../apps/petsupplies/src/data/categories.ts')

// ─── Types ────────────────────────────────────────────────────────────────────
interface SeedProduct {
  category: string
  subcategory?: string
  name: string
  brand?: string
  vendor: string
  vendor_sku?: string
  price_cents?: number
  price_range?: string
  expert_score: number
  pros: string[]
  cons: string[]
  specs: Record<string, unknown>
  best_for?: string[]
  badge?: string
}

interface CliArgs {
  dryRun: boolean
  regenerate: boolean
  regenerateAll: boolean
  category?: string
}

// ─── CLI ──────────────────────────────────────────────────────────────────────
function parseArgs(argv: string[]): CliArgs {
  const args: CliArgs = {
    dryRun: argv.includes('--dry-run'),
    regenerate: argv.includes('--regenerate'),
    regenerateAll: argv.includes('--regenerate-all'),
  }
  const catIdx = argv.indexOf('--category')
  if (catIdx >= 0 && argv[catIdx + 1]) {
    args.category = argv[catIdx + 1]
  }
  return args
}

// ─── Supabase upsert ──────────────────────────────────────────────────────────
async function upsertToSupabase(seed: SeedProduct[], dryRun: boolean) {
  const rows = seed.map((p) => ({
    category: p.category,
    subcategory: p.subcategory ?? null,
    name: p.name,
    brand: p.brand ?? null,
    vendor: p.vendor,
    vendor_sku: p.vendor_sku ?? null,
    price_cents: p.price_cents ?? null,
    price_range: p.price_range ?? null,
    expert_score: p.expert_score,
    pros: p.pros,
    cons: p.cons,
    specs: { ...p.specs, ...(p.best_for ? { _best_for: p.best_for } : {}), ...(p.badge ? { _badge: p.badge } : {}) },
    best_for: p.best_for ?? [],
    reviewed_at: new Date().toISOString(),
    active: true,
  }))

  console.log(`Upserting ${rows.length} products into products_v2...`)
  if (dryRun) {
    console.log('--- DRY RUN ---')
    console.log('First row sample:', JSON.stringify(rows[0], null, 2))
    console.log('Total rows to upsert:', rows.length)
    const byCategory: Record<string, number> = {}
    for (const r of rows) byCategory[r.category] = (byCategory[r.category] ?? 0) + 1
    console.log('Per category:', byCategory)
    return
  }

  const url = process.env.NEXT_PUBLIC_SUPABASE_URL
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!url || !key) {
    console.error('Missing NEXT_PUBLIC_SUPABASE_URL or SUPABASE_SERVICE_ROLE_KEY')
    console.error('Use --dry-run to validate the seed file without database access.')
    process.exit(1)
  }
  const supabase = createClient(url, key, {
    auth: { autoRefreshToken: false, persistSession: false },
  })

  const { error } = await supabase
    .from('products_v2')
    .upsert(rows, { onConflict: 'name' })

  if (error) {
    console.error('Supabase upsert error:', error)
    process.exit(1)
  }
  console.log(`Successfully upserted ${rows.length} products.`)
}

// ─── OpenAI regeneration (optional path) ──────────────────────────────────────
async function regenerateFromOpenAI(args: CliArgs) {
  const key = process.env.OPENAI_API_KEY
  if (!key) {
    console.error('OPENAI_API_KEY not set — cannot regenerate via gpt-4o-mini.')
    process.exit(1)
  }

  // Dynamic import keeps openai an optional dependency.
  const { default: OpenAI } = await import('openai') as unknown as { default: typeof import('openai').default }
  const openai = new OpenAI({ apiKey: key })

  const categoriesSource = readFileSync(CATEGORIES_PATH, 'utf-8')
  const categorySlugs = [...categoriesSource.matchAll(/^\s{4}slug: '([^']+)',$/gm)].map((m) => m[1])

  const targetCategories = args.regenerateAll
    ? categorySlugs
    : args.category
    ? [args.category]
    : []

  if (!targetCategories.length) {
    console.error('No category specified. Use --regenerate-all or --regenerate --category <slug>.')
    process.exit(1)
  }

  const generated: SeedProduct[] = []
  for (const category of targetCategories) {
    console.log(`Generating products for category: ${category}`)
    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      response_format: { type: 'json_object' },
      messages: [
        {
          role: 'system',
          content:
            'You generate independent product comparison drafts for PetSupplies.com — a NerdWallet-style comparison engine for pet products. Real brand names only (Kong, Furbo, Wellness, Hill\'s, Royal Canin, Stella & Chewy\'s, Embark, Fluval, Mars Hydro, Zoo Med, Arcadia, Eheim, AquaClear, etc.). Real-ish product specs. Third-person framing — never "I tested," never "I have used." Use phrasing like "Reviews indicate" or "Compared to alternatives." Never fabricate DVM credentials or claim hands-on testing. Always include realistic pros and cons that reflect the product\'s actual market reputation.',
        },
        {
          role: 'user',
          content: `Generate 5 product comparison entries for the PetSupplies.com category "${category}". Output JSON with shape: { "products": [ { "category": "${category}", "name": "<real product name>", "brand": "<real brand>", "vendor": "amazon" | "chewy" | "sharesale", "vendor_sku": "<plausible SKU>", "price_range": "<$XX-$YY>", "price_cents": <integer cents>, "expert_score": <0-10 with 1 decimal>, "pros": [<3 strings>], "cons": [<2 strings>], "specs": { <3-5 key-value pairs>, }, "best_for": [<2-4 audience strings>], "badge": "<Best Overall | Best Value | Best for X | etc.>" } ] }. Five distinct products with varied price tiers and use cases.`,
        },
      ],
    })
    const content = completion.choices[0].message.content
    if (!content) continue
    try {
      const parsed = JSON.parse(content) as { products: SeedProduct[] }
      if (Array.isArray(parsed.products)) {
        generated.push(...parsed.products)
      }
    } catch (e) {
      console.error(`Failed to parse JSON for ${category}:`, e)
    }
  }

  console.log(`Generated ${generated.length} products from OpenAI.`)
  console.log('NOTE: Review for accuracy before merging — this script will NOT overwrite the seed file automatically.')
  const previewPath = SEED_PATH.replace('.json', '.openai-draft.json')
  writeFileSync(previewPath, JSON.stringify(generated, null, 2))
  console.log(`Wrote draft to: ${previewPath}`)
}

// ─── Main ─────────────────────────────────────────────────────────────────────
async function main() {
  const args = parseArgs(process.argv.slice(2))

  if (args.regenerate || args.regenerateAll) {
    await regenerateFromOpenAI(args)
    return
  }

  const seed = JSON.parse(readFileSync(SEED_PATH, 'utf-8')) as SeedProduct[]
  console.log(`Loaded ${seed.length} products from ${SEED_PATH}`)
  const byCategory: Record<string, number> = {}
  for (const p of seed) byCategory[p.category] = (byCategory[p.category] ?? 0) + 1
  console.log(`Categories: ${Object.keys(byCategory).length}`)
  await upsertToSupabase(seed, args.dryRun)
}

main().catch((e) => {
  console.error(e)
  process.exit(1)
})
