#!/usr/bin/env node
// Trust-guard: runs seo-audit + content-check, compares counts against a
// checked-in baseline, exits non-zero if a PR INCREASES either count.
//
// Usage:
//   node scripts/quality-guard.mjs                  # gate mode (CI default)
//   node scripts/quality-guard.mjs --write-baseline # snapshot current state
//
// Baseline lives at ops/quality-baseline.json and is human-edited (commit a
// bump when issues are legitimately accepted).

import { execSync } from 'node:child_process';
import { readFileSync, writeFileSync, existsSync } from 'node:fs';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const BASELINE_PATH = join(ROOT, 'ops', 'quality-baseline.json');
const WRITE_MODE = process.argv.includes('--write-baseline');

function run(cmd) {
  try {
    return execSync(cmd, { cwd: ROOT, encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] });
  } catch (e) {
    process.stderr.write(e.stderr || '');
    throw new Error(`Command failed: ${cmd}`);
  }
}

function parseInt10(s) { return parseInt(s, 10); }

function extract(out, regex, label) {
  const m = out.match(regex);
  if (!m) throw new Error(`Could not parse ${label}`);
  return parseInt10(m[1]);
}

const seoOut = run('npm run --silent seo-audit');
const contentOut = run('npm run --silent content-check');

const current = {
  pagesWithIssues: extract(seoOut, /Pages with issues:\s*(\d+)/, 'seo-audit'),
  contentStubs: extract(contentOut, /Stubs:\s+(\d+)/, 'content-check'),
};

console.log(`current: ${current.pagesWithIssues} SEO issues · ${current.contentStubs} content stubs`);

if (WRITE_MODE) {
  writeFileSync(BASELINE_PATH, JSON.stringify(current, null, 2) + '\n');
  console.log(`baseline written → ${BASELINE_PATH}`);
  process.exit(0);
}

if (!existsSync(BASELINE_PATH)) {
  console.error(`no baseline at ${BASELINE_PATH}`);
  console.error('run: node scripts/quality-guard.mjs --write-baseline');
  process.exit(1);
}

const baseline = JSON.parse(readFileSync(BASELINE_PATH, 'utf8'));
console.log(`baseline: ${baseline.pagesWithIssues} SEO issues · ${baseline.contentStubs} content stubs`);

const regressions = [];
if (current.pagesWithIssues > baseline.pagesWithIssues) {
  regressions.push(`SEO: pages-with-issues ${baseline.pagesWithIssues} → ${current.pagesWithIssues}`);
}
if (current.contentStubs > baseline.contentStubs) {
  regressions.push(`content: stubs ${baseline.contentStubs} → ${current.contentStubs}`);
}

if (regressions.length > 0) {
  console.error('\nREGRESSION DETECTED:');
  regressions.forEach(r => console.error(`  - ${r}`));
  console.error('\nFix the regressions, OR if intentional run:');
  console.error('  node scripts/quality-guard.mjs --write-baseline');
  console.error('  git commit ops/quality-baseline.json');
  process.exit(1);
}

console.log('no regressions vs baseline');
