#!/usr/bin/env node
/**
 * CI check: trust-integrity guard.
 *
 * Greps the working tree for phrases that QC-STANDARDS.md §1 forbids:
 *   - Fake DVM / DACV* bylines
 *   - "DVM-reviewed" / "vet-reviewed" trust claims (when not citing a real reviewer)
 *   - Fake testing/credentialing badges previously cleared in PRs #2, #3a, #3b
 *   - Fabricated reviewer language ("ranked by a ...", "certified equestrian
 *     professional", etc.)
 *
 * Pure greppable patterns. Catches regressions where new content
 * reintroduces a previously-removed pattern.
 *
 * Exit code: 0 if clean, 1 if any forbidden phrase appears.
 *
 * Per STATUS.md §6.8.
 */
import { readFileSync, readdirSync } from 'node:fs'
import { join } from 'node:path'

const ROOT = process.cwd()

// Forbidden patterns. Each entry: { pattern: RegExp, reason: string }
// Patterns scoped to user-facing copy contexts (we don't want to flag legitimate
// citations like "AVSAB" / "AAHA" — those are fine).
const FORBIDDEN = [
  // Fake bylines / credentials
  { pattern: /\bDr\.\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?,\s*DVM\b/, reason: 'Fake DVM byline (Dr. X, DVM pattern)' },
  { pattern: /\bDr\.\s+[A-Z][a-z]+(?:\s+[A-Z][a-z]+)?,\s*DACV/, reason: 'Fake DACV* credentialed byline' },
  { pattern: /authorCredentials\s*:\s*['"]/i, reason: 'authorCredentials field — removed in PR #2; no fake credentials' },

  // Fake review-process claims
  { pattern: /\bDVM[\s-]?reviewed\b/i, reason: '"DVM-reviewed" claim — removed in PR #2; no fake review process' },
  { pattern: /vet-reviewed\s+(?:health|article|content|guide|page)/i, reason: '"vet-reviewed" trust claim — removed in PR #5' },
  { pattern: /reviewedBy\s*:\s*\{?\s*(?:'@type'|"@type")/i, reason: 'Fake reviewedBy schema field — removed in PR #2' },

  // Fake testing badges (cleared in PR #3a)
  { pattern: /\bCSF[\s-]?Tested\b/i, reason: '"CSF Tested" badge — removed in PR #3a; not a credentialed test we ran' },
  { pattern: /\bCSF[\s-]?Reviewed\b/i, reason: '"CSF Reviewed" badge — removed in PR #3a' },
  { pattern: /\bTrainer[\s-]?Tested\b/i, reason: '"Trainer Tested" badge — removed in PR #3a' },
  { pattern: /\bKeeper[\s-]?Tested\b/i, reason: '"Keeper Tested" badge — removed in PR #3a' },
  { pattern: /\bExpert[\s-]?Reviewed\b/i, reason: '"Expert Reviewed" badge — removed in PR #3a' },
  { pattern: /\bPAR[\s-]?Tested\b/i, reason: '"PAR Tested" badge — removed in PR #3a' },
  { pattern: /\bPlanted\s+Tank\s+Tested\b/i, reason: '"Planted Tank Tested" badge — removed in PR #3a' },

  // Fake authority phrasings (cleared in PR #3b)
  { pattern: /\branked\s+by\s+a\s+CSF\b/i, reason: '"ranked by a CSF" — removed in PR #3b' },
  { pattern: /\bcertified\s+equestrian\s+professional\b/i, reason: 'Fake "certified equestrian professional" credential — removed in PR #3b' },
  { pattern: /\bRanked\s+by\s+(?:a\s+)?Veterinary\s+Nutritionist\b/i, reason: '"Ranked by a Veterinary Nutritionist" — removed in PR #3b' },
  { pattern: /\bRanked\s+by\s+Vets\b/i, reason: '"Ranked by Vets" — removed in PR #3b' },

  // First-person hands-on / lab-testing claims (QC §1: no "we tested/calibrated/measured").
  // Caught live on fish-com heater page (IR finding, 2026-05-31) — trust-guard had no pattern.
  // allowNegated: skip when the line DENIES the claim ("No 'we tested' claims", "no in-house
  // bench testing") — disclaimers are honest and must not trip the guard.
  { pattern: /\bwe\s+(?:calibrated|tested|measured|benchmarked|bench-tested|ran|trialed|trialled)\b/i, allowNegated: true, reason: 'First-person hands-on testing claim ("we tested/calibrated/measured…") — QC §1 forbids hands-on claims' },
  { pattern: /\b(?:our|in-house|in\s+our)\s+(?:lab|calibration|bench|testing\s+lab|bench\s+testing)\b/i, allowNegated: true, reason: 'Implied in-house lab/testing ("our lab", "in our calibration…") — QC §1' },
  { pattern: /\bcalibration\s+testing\b/i, allowNegated: true, reason: '"calibration testing" implies a test we ran — QC §1' },
  { pattern: /\bNIST[\s-]?traceable\b/i, allowNegated: true, reason: '"NIST-traceable" testing claim — implies metrology we did not perform — QC §1' },
  { pattern: /\b(?:heaters?|products?|units?|models?|items?)\s+tested\b/i, allowNegated: true, reason: '"N heaters/products tested" implies hands-on testing — QC §1 (use "compared"/"ranked")' },
]

// Negation cues: if a rule is allowNegated and the line denies the claim, it's an honest
// disclaimer, not a violation. Conservative (a line that both asserts and denies is rare).
const NEGATION = /\b(?:no|not|never|without|don'?t|doesn'?t|avoid|zero|fabricated)\b/i

// Files we scan: user-facing TSX in apps/* and shared UI components.
function listScanFiles() {
  const out = []
  function walk(dir) {
    try {
      for (const e of readdirSync(dir, { withFileTypes: true })) {
        const p = join(dir, e.name)
        if (e.isDirectory()) {
          if (['node_modules', '.next', '.turbo'].includes(e.name)) continue
          walk(p)
        } else if (/\.(tsx|ts)$/.test(e.name) && !p.includes('.next/types/')) {
          out.push(p)
        }
      }
    } catch {}
  }
  walk(join(ROOT, 'apps'))
  walk(join(ROOT, 'packages/ui/src/components'))
  return out
}

const files = listScanFiles()
let totalHits = 0
const hits = []

for (const file of files) {
  const src = readFileSync(file, 'utf8')
  const lines = src.split('\n')
  for (let i = 0; i < lines.length; i++) {
    const line = lines[i]
    for (const rule of FORBIDDEN) {
      if (rule.pattern.test(line)) {
        if (rule.allowNegated && NEGATION.test(line)) continue
        hits.push({
          file: file.replace(ROOT + '/', ''),
          line: i + 1,
          reason: rule.reason,
          snippet: line.trim().slice(0, 160),
        })
        totalHits++
      }
    }
  }
}

if (hits.length > 0) {
  console.log(`## Trust-guard: ${hits.length} forbidden-phrase hit${hits.length === 1 ? '' : 's'}\n`)
  for (const h of hits) {
    console.log(`${h.file}:${h.line}`)
    console.log(`  reason: ${h.reason}`)
    console.log(`  line:   ${h.snippet}`)
    console.log()
  }
  console.error(`FAIL: ${hits.length} forbidden phrase(s) detected.`)
  console.error('See QC-STANDARDS.md §1 for the trust-integrity contract.')
  process.exit(1)
} else {
  console.log('## Trust-guard: clean')
  console.log(`\nPASS: scanned ${files.length} TSX files; 0 forbidden-phrase hits.`)
  process.exit(0)
}
