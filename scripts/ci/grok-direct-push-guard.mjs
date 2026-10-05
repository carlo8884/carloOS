#!/usr/bin/env node
/**
 * Ruleset 24478557 blocks direct pushes to main, so the push workflow
 * cannot restore GROK.md. It runs --report, prints a stub if one is
 * present, and exits 0. Pull requests still fail in content-stub-guard.
 * --restore still commits and pushes from a manual checkout; CI does not call it.
 *
 *   node scripts/ci/grok-direct-push-guard.mjs            # print a stub and exit 1
 *   node scripts/ci/grok-direct-push-guard.mjs --report   # print only; exit 0 (main push workflow)
 *   node scripts/ci/grok-direct-push-guard.mjs --restore  # local commit + push; the workflow does not call this
 */

import { execFileSync } from 'node:child_process'
import fs from 'node:fs'
import path from 'node:path'
import { pathToFileURL } from 'node:url'
import { checkGrok } from './content-stub-guard.mjs'

const ROOT = path.resolve(path.dirname(new URL(import.meta.url).pathname), '../..')
export const RESTORE_SUBJECT = 'revert: restore GROK.md after a stub landed on main'
const HISTORY_LIMIT = 100

export function planGrokPush({ problems, headSubject, goodSha }) {
  if (!problems.length) return { action: 'pass' }
  if (headSubject === RESTORE_SUBJECT) {
    return {
      action: 'fail',
      reason: 'The restore commit still leaves GROK.md a stub. Refusing to push another revert.',
    }
  }
  if (!goodSha) {
    return {
      action: 'fail',
      reason: 'No ancestor GROK.md passes the stub guard. Refusing to invent a replacement.',
    }
  }
  return { action: 'restore', sha: goodSha }
}

export function findGoodGrokSha(shas, readAt) {
  for (const sha of shas) {
    const src = readAt(sha)
    if (typeof src === 'string' && checkGrok(src).length === 0) return { sha, src }
  }
  return null
}

function git(args) {
  return execFileSync('git', args, { cwd: ROOT, encoding: 'utf8' })
}

function readGrokAt(sha) {
  try {
    return git(['show', `${sha}:GROK.md`])
  } catch {
    return null
  }
}

function loud(lines) {
  console.error('GROK.md STUB ON MAIN')
  for (const line of lines) console.error(line)
}

function restoreFile(good) {
  fs.writeFileSync(path.join(ROOT, 'GROK.md'), good.src)
  git(['config', 'user.name', 'carloos-stabilizer'])
  git(['config', 'user.email', 'stabilizer@carloos.local'])
  git(['add', '--', 'GROK.md'])
  git(['commit', '-m', `${RESTORE_SUBJECT}\n\nRestored the last GROK.md blob that passes scripts/ci/content-stub-guard.mjs.\n`])
  git(['push', 'origin', 'HEAD:refs/heads/main'])
}

function main() {
  const restore = process.argv.includes('--restore')
  const report = process.argv.includes('--report')
  const grokPath = path.join(ROOT, 'GROK.md')
  const src = fs.existsSync(grokPath) ? fs.readFileSync(grokPath, 'utf8') : ''
  const problems = fs.existsSync(grokPath) ? checkGrok(src) : ['GROK.md is missing']
  const headSubject = git(['log', '-1', '--format=%s']).trim()
  const shas = git(['log', '-n', String(HISTORY_LIMIT), '--format=%H', '--', 'GROK.md'])
    .split('\n')
    .map((line) => line.trim())
    .filter(Boolean)
  const good = findGoodGrokSha(shas, readGrokAt)
  const plan = planGrokPush({ problems, headSubject, goodSha: good?.sha ?? null })

  if (plan.action === 'pass') {
    console.log('grok-direct-push-guard: GROK.md passes the stub guard')
    return
  }

  const findings = [
    ...problems.map((problem) => `  ${problem}`),
    plan.reason || `A passing GROK.md is ${plan.sha}. This run does not push a restore.`,
  ]

  if (report) {
    console.error('GROK.md STUB ON MAIN (report only; no restore push)')
    for (const line of findings) console.error(line)
    console.error('Ruleset 24478557 blocks a direct push, so this job stays green and only reports.')
    return
  }

  if (plan.action === 'fail' || !restore) {
    loud(findings)
    process.exit(1)
  }

  if (git(['rev-parse', '--is-shallow-repository']).trim() === 'true') {
    loud(['Full git history is required to restore GROK.md. Refusing a shallow checkout.'])
    process.exit(1)
  }

  try {
    restoreFile(good)
  } catch (error) {
    loud([
      ...problems.map((problem) => `  ${problem}`),
      `Could not push the restore of ${good.sha}. GROK.md is still a stub on main.`,
      error instanceof Error ? error.message.split('\n')[0] : String(error),
    ])
    process.exit(1)
  }

  loud([
    ...problems.map((problem) => `  ${problem}`),
    `Restored GROK.md from ${good.sha} and pushed a follow-up commit.`,
    'This run stays red so the stub push remains visible.',
  ])
  process.exit(1)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
