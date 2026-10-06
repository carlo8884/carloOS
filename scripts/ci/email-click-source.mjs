/**
 * A direct email /go hit never runs the page, so GA4 only records it when
 * the link's source starts with "email". Every five-site email hop needs that.
 */
import { readdirSync, readFileSync } from 'node:fs'
import { join, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')
const SITES = ['dog-com', 'fish-com', 'horses-com', 'vets-co', 'ferret-com']

function walk(dir, out = []) {
  let entries
  try {
    entries = readdirSync(dir, { withFileTypes: true })
  } catch {
    return out
  }
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) walk(path, out)
    else if (entry.name.endsWith('.md')) out.push(path)
  }
  return out
}

export function emailClickSourceProblems() {
  const problems = []
  const link = /\]\((https?:\/\/[^)\s]+)\)/g
  for (const site of SITES) {
    const dir = join(root, 'apps', site, 'src/content/email-sequences')
    for (const file of walk(dir)) {
      const text = readFileSync(file, 'utf8')
      for (const match of text.matchAll(link)) {
        const href = match[1]
        if (!/\/go\//.test(href)) continue
        const source = new URL(href).searchParams.get('s') || ''
        if (!source.startsWith('email')) {
          problems.push(`${file.slice(root.length + 1)}: ${href} has no email source`)
        }
      }
    }
  }
  return problems
}

function main() {
  const problems = emailClickSourceProblems()
  if (problems.length) {
    console.error(`FAIL: ${problems.length} email hop(s) would not record an email landing`)
    for (const problem of problems) console.error('  - ' + problem)
    process.exit(1)
  }
  console.log('PASS: every five-site email /go link carries an email source.')
}

if (process.argv[1] && process.argv[1].endsWith('email-click-source.mjs')) main()
