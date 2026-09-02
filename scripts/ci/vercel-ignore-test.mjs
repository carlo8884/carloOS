#!/usr/bin/env node
/**
 * vercel-ignore-test — regression test for scripts/vercel-ignore.sh
 *
 * The wrapper is dir-014's load-bearing piece — every Vercel build runs it,
 * and a silent pattern drift would either re-introduce wasteful docs-only
 * builds (cost regression) or skip real source changes (broken deploys).
 *
 * This script invokes the shell wrapper's docs-only matcher logic directly
 * (bash `case` statement) against a fixed catalog of representative paths,
 * and asserts the match outcome.
 */

import { execSync } from 'node:child_process'

// Embed the bash case logic so the test independently re-implements it,
// matching the patterns currently in scripts/vercel-ignore.sh. If the
// wrapper drifts away from this set, the assertion comparison will fail.
const EXPECTED_PATTERN_LINE =
  "ops/*|*.md|README*|.gitignore|.gitattributes|.github/*|.claude/*|LICENSE*|CODEOWNERS|*.txt"

// Validate the wrapper script still uses exactly this pattern set.
const wrapperPatternLine = execSync(
  'grep -E "ops/\\*\\|" scripts/vercel-ignore.sh',
  { encoding: 'utf8' },
)
  .trim()
  .replace(/^\s*/, '')
  .replace(/\)\s*$/, '')

if (!wrapperPatternLine.includes(EXPECTED_PATTERN_LINE)) {
  console.error(
    `FAIL: vercel-ignore.sh pattern line drifted.\n  expected to contain: ${EXPECTED_PATTERN_LINE}\n  actual: ${wrapperPatternLine}`,
  )
  process.exit(1)
}

// Path catalog: [path, expectedMatch (true=skip-build / docs-only)]
const CASES = [
  // docs / ops — should SKIP
  ['ops/handoffs/2026-06-01-foo.md', true],
  ['ops/bot-queue/COO.md', true],
  ['ops/csro/open-directives.md', true],
  ['STATUS.md', true],
  ['CLAUDE.md', true],
  ['DASHBOARD.md', true],
  ['QC-STANDARDS.md', true],
  ['BACKLOG.md', true],
  ['apps/dog-com/src/content/email-sequences/dog-owner/README.md', true],
  ['README.md', true],
  ['README', true],
  ['.gitignore', true],
  ['.gitattributes', true],
  ['.github/workflows/ci.yml', true],
  ['.github/workflows/qc.yml', true],
  ['.claude/agents/foo.md', true],
  ['LICENSE', true],
  ['LICENSE.md', true],
  ['CODEOWNERS', true],
  ['notes.txt', true],

  // source / config — should BUILD
  ['apps/dog-com/src/app/page.tsx', false],
  ['apps/vets-co/src/data/insurance-carriers.ts', false],
  ['packages/ui/src/components/ArticleLayout.tsx', false],
  ['packages/config/index.ts', false],
  ['scripts/ci/trust-guard.mjs', false],
  ['scripts/vercel-ignore.sh', false],
  ['package.json', false],
  ['package-lock.json', false],
  ['turbo.json', false],
  ['next.config.js', false],
]

let failed = 0
for (const [path, expectedSkip] of CASES) {
  const result = execSync(
    `bash -c 'case "${path}" in ${EXPECTED_PATTERN_LINE}) echo skip;; *) echo build;; esac'`,
    { encoding: 'utf8' },
  ).trim()
  const actualSkip = result === 'skip'
  if (actualSkip !== expectedSkip) {
    console.error(
      `FAIL ${path}: expected ${expectedSkip ? 'skip' : 'build'}, got ${actualSkip ? 'skip' : 'build'}`,
    )
    failed++
  }
}

if (failed > 0) {
  console.error(`\n${failed} / ${CASES.length} case(s) failed.`)
  process.exit(1)
}

const wrapper = execSync('cat scripts/vercel-ignore.sh', { encoding: 'utf8' })
const earningLine = wrapper
  .split('\n')
  .find((line) => line.includes('EARNING_APPS='))
if (
  !earningLine ||
  !['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com'].every((app) =>
    earningLine.includes(app),
  )
) {
  console.error('FAIL: vercel-ignore.sh must force-build the five earning apps on shared package edits')
  process.exit(1)
}
if (!wrapper.includes('packages/config/*|packages/ui/*')) {
  console.error('FAIL: vercel-ignore.sh must treat packages/config and packages/ui as earning-app invalidators')
  process.exit(1)
}

console.log(
  `## vercel-ignore: clean\n\nPASS: ${CASES.length} path cases match the wrapper's documented behavior.`,
)
