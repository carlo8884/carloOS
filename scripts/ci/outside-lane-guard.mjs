#!/usr/bin/env node
/**
 * Fail a pull request to main when an outside lane tries to land.
 * A head branch named grok/… is rejected. So is a GROK.md diff whose only
 * change is inserting one hour-log block.
 *
 * A head branch that does not start with cursor/ or bot/ also fails when
 * the diff only touches homepage, hero, or eyebrow files (including a
 * homepage photo chip), or when the title or body matches the CEO-lane
 * pattern (photo chip, eyebrow, "GROK.md left untouched",
 * "outside-lane hour-log guard"). cursor/* and bot/* stay green.
 *
 *   HEAD_REF=grok/fish-species-eyebrow BASE_SHA=… HEAD_SHA=… node scripts/ci/outside-lane-guard.mjs
 */
import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { pathToFileURL } from 'node:url'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..')

const HOUR_HEADING = /^## \d{4}-\d{2}-\d{2}\s+~\d{1,2}:\d{2}\s+\S+\s+hour$/

export function branchProblems(headRef) {
  if (typeof headRef === 'string' && /^grok\//i.test(headRef)) {
    return [`head branch ${headRef} is an outside grok/ lane`]
  }
  return []
}

/**
 * Text inserted on a line boundary, or null when the edit is not one insertion.
 * The split backs up to the start of the line so two hour headings that share
 * "## 2026-10-04 ~" are not treated as a changed line.
 */
export function singleInsertion(before, after) {
  if (typeof before !== 'string' || typeof after !== 'string') return null
  if (after.length <= before.length) return null
  if (after.startsWith(before)) return after.slice(before.length)
  let mismatch = 0
  const limit = Math.min(before.length, after.length)
  while (mismatch < limit && before[mismatch] === after[mismatch]) mismatch += 1
  const split = before.lastIndexOf('\n', Math.max(0, mismatch - 1)) + 1
  const suffix = before.slice(split)
  if (!after.startsWith(before.slice(0, split))) return null
  if (!suffix || !after.endsWith(suffix)) return null
  const inserted = after.slice(split, after.length - suffix.length)
  return inserted.length > 0 ? inserted : null
}

export function isHourLogBlock(inserted) {
  if (typeof inserted !== 'string' || inserted.trim().length === 0) return false
  const first = inserted
    .split('\n')
    .map((line) => line.trim())
    .find((line) => line.length > 0)
  return HOUR_HEADING.test(first ?? '')
}

export function hourLogProblems(before, after) {
  if (before === after) return []
  const inserted = singleInsertion(before, after)
  if (inserted != null && isHourLogBlock(inserted)) {
    return ['GROK.md change is only an appended hour-log block']
  }
  return []
}

const ALLOWED_LANE = /^(cursor|bot)\//i

const CEO_COPY = [
  /photo[\s-]?chip/i,
  /\beyebrow\b/i,
  /GROK\.md left untouched/i,
  /outside-lane hour-log guard/i,
]

/** Homepage, hero, and eyebrow files. Nested route page.tsx files are not homepages. */
export function isHomepageHeroEyebrowFile(file) {
  const p = String(file ?? '').replaceAll('\\', '/')
  if (/^apps\/[^/]+\/src\/app\/page\.tsx$/.test(p)) return true
  return /(^|\/)[^/]*(home|hero|eyebrow)[^/]*$/i.test(p)
}

export function ceoCopyProblems(title, body) {
  const text = `${title ?? ''}\n${body ?? ''}`
  if (!CEO_COPY.some((re) => re.test(text))) return []
  return ['title or body matches the CEO-lane pattern']
}

/** True when every changed file is a homepage, hero, or eyebrow file. */
export function homepageOnlyDiff(files) {
  if (!Array.isArray(files) || files.length === 0) return false
  return files.every(isHomepageHeroEyebrowFile)
}

function patchAddsPhotoChip(patch) {
  const added = String(patch ?? '')
    .split('\n')
    .filter((line) => line.startsWith('+') && !line.startsWith('+++'))
    .join('\n')
  return /<StockImage|photo[\s-]?chip/i.test(added)
}

/**
 * Outside cursor/ and bot/: fail a homepage-only (or photo-chip) diff,
 * or CEO-lane title/body. Those lanes stay green even when both match.
 */
export function ceoLaneProblems({ headRef, files, title, body, patch }) {
  if (typeof headRef !== 'string' || headRef.length === 0) return []
  if (ALLOWED_LANE.test(headRef)) return []
  if (/^grok\//i.test(headRef)) return []
  const reasons = []
  if (homepageOnlyDiff(files)) {
    reasons.push(
      patchAddsPhotoChip(patch)
        ? 'diff only adds a photo chip on a homepage, hero, or eyebrow file'
        : 'diff only touches homepage, hero, or eyebrow files',
    )
  }
  reasons.push(...ceoCopyProblems(title, body))
  if (reasons.length === 0) return []
  return [`head branch ${headRef} is outside cursor/ and bot/ (${reasons.join('; ')})`]
}

export function guardProblems({ headRef, before, after, files, title, body, patch }) {
  return [
    ...branchProblems(headRef),
    ...hourLogProblems(before, after),
    ...ceoLaneProblems({ headRef, files, title, body, patch }),
  ]
}

function gitShow(sha) {
  try {
    return execFileSync('git', ['show', `${sha}:GROK.md`], {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
  } catch {
    return null
  }
}

function gitDiff(args) {
  try {
    return execFileSync('git', args, {
      cwd: ROOT,
      encoding: 'utf8',
      stdio: ['ignore', 'pipe', 'pipe'],
    })
  } catch {
    return ''
  }
}

function main() {
  const headRef = process.env.HEAD_REF ?? ''
  const baseSha = process.env.BASE_SHA ?? ''
  const headSha = process.env.HEAD_SHA ?? ''
  const before = baseSha ? gitShow(baseSha) : null
  const after = headSha ? gitShow(headSha) : null
  const files =
    baseSha && headSha
      ? gitDiff(['diff', '--name-only', baseSha, headSha])
          .split('\n')
          .map((line) => line.trim())
          .filter(Boolean)
      : []
  const patch = baseSha && headSha ? gitDiff(['diff', baseSha, headSha]) : ''
  const problems = guardProblems({
    headRef,
    before: before ?? '',
    after: after ?? before ?? '',
    files,
    patch,
    title: process.env.PR_TITLE ?? '',
    body: process.env.PR_BODY ?? '',
  })
  if (problems.length === 0) {
    console.log(`outside-lane-guard: pass (${headRef || 'no head ref'})`)
    return
  }
  console.error('outside-lane-guard: fail')
  for (const problem of problems) console.error(`- ${problem}`)
  process.exit(1)
}

const invoked = process.argv[1] && pathToFileURL(process.argv[1]).href === import.meta.url
if (invoked) main()
