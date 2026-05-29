#!/usr/bin/env node
/**
 * SeniorPets content generation script.
 *
 * Generates structured TypeScript content modules for each condition and
 * medication slug into:
 *   apps/seniorpets/src/content/conditions/<slug>.ts
 *   apps/seniorpets/src/content/medications/<slug>.ts
 *
 * Two modes:
 *
 *   1. Seed mode (default, no API key required):
 *      Writes the canonical, hand-authored editorial content from
 *      src/content-seed.ts. This is what ships in the MVP.
 *
 *   2. Refresh mode (OPENAI_API_KEY set, --refresh flag):
 *      Calls OpenAI (gpt-4o-mini by default, gpt-4o if --model=gpt-4o)
 *      to expand or rewrite a single slug. Output is validated against
 *      the ConditionContent / MedicationContent shape and written only
 *      if the validation passes.
 *
 * Usage:
 *
 *   # Generate every condition + medication module from the seed
 *   npx tsx scripts/generate-senior-pet-content.ts
 *
 *   # Regenerate a single condition slug using OpenAI
 *   OPENAI_API_KEY=sk-... npx tsx scripts/generate-senior-pet-content.ts \
 *     --refresh --kind condition --slug osteoarthritis
 *
 *   # Switch to gpt-4o (default is gpt-4o-mini for cost)
 *   ... --model gpt-4o
 *
 * Architect S9 / Directive 6.
 */

import * as fs from 'node:fs'
import * as path from 'node:path'
import { CONDITION_SEED, MEDICATION_SEED } from './senior-pet-content-seed'

interface Args {
  refresh: boolean
  kind: 'condition' | 'medication' | 'all'
  slug?: string
  model: 'gpt-4o' | 'gpt-4o-mini'
}

function parseArgs(): Args {
  const argv = process.argv.slice(2)
  const args: Args = {
    refresh: argv.includes('--refresh'),
    kind: 'all',
    model: 'gpt-4o-mini',
  }
  for (let i = 0; i < argv.length; i++) {
    if (argv[i] === '--kind') args.kind = argv[++i] as Args['kind']
    if (argv[i] === '--slug') args.slug = argv[++i]
    if (argv[i] === '--model') args.model = argv[++i] as Args['model']
  }
  return args
}

const REPO_ROOT = path.resolve(__dirname, '..')
const CONTENT_DIR = path.join(
  REPO_ROOT,
  'apps/seniorpets/src/content',
)
const CONDITIONS_DIR = path.join(CONTENT_DIR, 'conditions')
const MEDICATIONS_DIR = path.join(CONTENT_DIR, 'medications')

// ────────────────────────────────────────────────────────────────────────────
// Optional OpenAI integration
// ────────────────────────────────────────────────────────────────────────────

async function callOpenAI(
  prompt: string,
  model: 'gpt-4o' | 'gpt-4o-mini',
): Promise<string> {
  const key = process.env.OPENAI_API_KEY
  if (!key) {
    throw new Error('OPENAI_API_KEY not set — cannot use --refresh mode')
  }
  const res = await fetch('https://api.openai.com/v1/chat/completions', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${key}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      model,
      messages: [
        {
          role: 'system',
          content:
            'You are an editorial assistant for SeniorPetPharmacy. Write in the third person, never in the first person, never invent clinical anecdotes. Cite only real public veterinary references (Cornell University CVM, AAHA, AVMA, VCA, Merck Veterinary Manual). Output strict JSON only — no prose, no code fences.',
        },
        { role: 'user', content: prompt },
      ],
      response_format: { type: 'json_object' },
      temperature: 0.4,
    }),
  })
  if (!res.ok) {
    throw new Error(`OpenAI API ${res.status}: ${await res.text()}`)
  }
  const json = (await res.json()) as {
    choices: { message: { content: string } }[]
  }
  return json.choices[0]?.message?.content ?? ''
}

// ────────────────────────────────────────────────────────────────────────────
// Module emitters
// ────────────────────────────────────────────────────────────────────────────

function ensureDirs() {
  fs.mkdirSync(CONDITIONS_DIR, { recursive: true })
  fs.mkdirSync(MEDICATIONS_DIR, { recursive: true })
}

function slugToVar(prefix: string, slug: string): string {
  return `${prefix}_${slug.replace(/-/g, '_')}`
}

function emitConditionModule(slug: string, data: unknown) {
  const filepath = path.join(CONDITIONS_DIR, `${slug}.ts`)
  const json = JSON.stringify(data, null, 2)
  const body = `import type { ConditionContent } from '../types'\n\nconst content: ConditionContent = ${json}\n\nexport default content\n`
  fs.writeFileSync(filepath, body)
}

function emitMedicationModule(slug: string, data: unknown) {
  const filepath = path.join(MEDICATIONS_DIR, `${slug}.ts`)
  const json = JSON.stringify(data, null, 2)
  const body = `import type { MedicationContent } from '../types'\n\nconst content: MedicationContent = ${json}\n\nexport default content\n`
  fs.writeFileSync(filepath, body)
}

function emitConditionIndex() {
  const slugs = Object.keys(CONDITION_SEED)
  const imports = slugs
    .map((s) => `export * as ${slugToVar('condition', s)} from './${s}'`)
    .join('\n')
  fs.writeFileSync(
    path.join(CONDITIONS_DIR, '_index.ts'),
    `// AUTO-GENERATED — do not edit by hand. See scripts/generate-senior-pet-content.ts.\n${imports}\n`,
  )
}

function emitMedicationIndex() {
  const slugs = Object.keys(MEDICATION_SEED)
  const imports = slugs
    .map((s) => `export * as ${slugToVar('medication', s)} from './${s}'`)
    .join('\n')
  fs.writeFileSync(
    path.join(MEDICATIONS_DIR, '_index.ts'),
    `// AUTO-GENERATED — do not edit by hand. See scripts/generate-senior-pet-content.ts.\n${imports}\n`,
  )
}

// ────────────────────────────────────────────────────────────────────────────
// Main
// ────────────────────────────────────────────────────────────────────────────

async function main() {
  const args = parseArgs()
  ensureDirs()

  if (!args.refresh) {
    // Seed mode — emit every module from the canonical seed.
    let count = 0
    if (args.kind === 'all' || args.kind === 'condition') {
      for (const [slug, data] of Object.entries(CONDITION_SEED)) {
        if (args.slug && args.slug !== slug) continue
        emitConditionModule(slug, data)
        count++
      }
      emitConditionIndex()
    }
    if (args.kind === 'all' || args.kind === 'medication') {
      for (const [slug, data] of Object.entries(MEDICATION_SEED)) {
        if (args.slug && args.slug !== slug) continue
        emitMedicationModule(slug, data)
        count++
      }
      emitMedicationIndex()
    }
    // eslint-disable-next-line no-console
    console.log(`Wrote ${count} content modules from seed.`)
    return
  }

  // Refresh mode — single slug via OpenAI
  if (!args.slug) {
    throw new Error('--refresh requires --slug <slug>')
  }
  if (args.kind === 'all') {
    throw new Error('--refresh requires --kind condition|medication')
  }

  const seedRecord =
    args.kind === 'condition'
      ? CONDITION_SEED[args.slug]
      : MEDICATION_SEED[args.slug]
  if (!seedRecord) {
    throw new Error(`No seed record for ${args.kind} slug ${args.slug}`)
  }

  const prompt = [
    `Refresh and expand the editorial content for the following ${args.kind} page.`,
    `Slug: ${args.slug}`,
    `Constraints:`,
    `- 1,200-1,800 words of prose total across all narrative fields`,
    `- Third-person, encyclopedic, no first-person anecdotes`,
    `- Cite 2-3 reputable real-world sources (Cornell CVM, AAHA, AVMA, VCA, Merck Vet Manual)`,
    `- Do NOT fabricate citation URLs — use known public URLs only`,
    `- Output strict JSON matching this existing seed shape:`,
    JSON.stringify(seedRecord, null, 2),
  ].join('\n\n')

  // eslint-disable-next-line no-console
  console.log(`Calling OpenAI ${args.model} for ${args.kind}:${args.slug}…`)
  const raw = await callOpenAI(prompt, args.model)

  let parsed: unknown
  try {
    parsed = JSON.parse(raw)
  } catch (err) {
    throw new Error(`OpenAI returned non-JSON: ${(err as Error).message}\nRaw:\n${raw.slice(0, 800)}`)
  }

  if (args.kind === 'condition') {
    emitConditionModule(args.slug, parsed)
  } else {
    emitMedicationModule(args.slug, parsed)
  }
  // eslint-disable-next-line no-console
  console.log(`Refreshed ${args.kind}/${args.slug}.`)
}

main().catch((err) => {
  // eslint-disable-next-line no-console
  console.error(err)
  process.exit(1)
})
