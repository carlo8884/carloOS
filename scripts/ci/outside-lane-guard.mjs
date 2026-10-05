#!/usr/bin/env node
/**
 * Fail a pull request to main when the outside hourly lane tries to land.
 * A head branch named grok/… is rejected. So is a GROK.md diff whose only
 * change is inserting one hour-log block. cursor/*, bot/*, and other
 * branch names pass when GROK.md is untouched or edited for real.
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

export function guardProblems({ headRef, before, after }) {
  return [...branchProblems(headRef), ...hourLogProblems(before, after)]
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

function main() {
  const headRef = process.env.HEAD_REF ?? ''
  const baseSha = process.env.BASE_SHA ?? ''
  const headSha = process.env.HEAD_SHA ?? ''
  const before = baseSha ? gitShow(baseSha) : null
  const after = headSha ? gitShow(headSha) : null
  const problems = guardProblems({
    headRef,
    before: before ?? '',
    after: after ?? before ?? '',
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
