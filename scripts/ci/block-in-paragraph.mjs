/**
 * Required after `npx turbo build`.
 * Fails when built HTML on the five earning sites nests a block element
 * inside a paragraph. The scan reads the raw server HTML. It does not
 * repair the tree the way a browser would, because that repair hides the bug.
 */
import { readdir, readFile } from 'node:fs/promises'
import { join, relative } from 'node:path'
import { fileURLToPath } from 'node:url'

const ROOT = join(fileURLToPath(new URL('.', import.meta.url)), '../..')
const SITES = ['dog-com', 'vets-co', 'fish-com', 'horses-com', 'ferret-com']

/** Start tags that close an open p in the HTML parsing spec. */
const BLOCK = new Set([
  'address', 'article', 'aside', 'blockquote', 'div', 'dl', 'fieldset',
  'figcaption', 'figure', 'footer', 'form', 'h1', 'h2', 'h3', 'h4', 'h5', 'h6',
  'header', 'hgroup', 'hr', 'main', 'menu', 'nav', 'ol', 'p', 'pre', 'section',
  'table', 'ul', 'details', 'dialog',
])

const VOID = new Set([
  'area', 'base', 'br', 'col', 'embed', 'hr', 'img', 'input', 'link', 'meta',
  'param', 'source', 'track', 'wbr',
])

export function paragraphBlockHits(html) {
  const source = html
    .replace(/<script\b[^>]*>[\s\S]*?<\/script>/gi, '')
    .replace(/<style\b[^>]*>[\s\S]*?<\/style>/gi, '')
    .replace(/<!--[\s\S]*?-->/g, '')
  const hits = []
  const stack = []
  let i = 0
  while (i < source.length) {
    if (source[i] !== '<') {
      i++
      continue
    }
    if (source.startsWith('<!--', i)) {
      const end = source.indexOf('-->', i + 4)
      i = end === -1 ? source.length : end + 3
      continue
    }
    const start = i
    i++
    const closing = source[i] === '/'
    if (closing) i++
    let name = ''
    while (i < source.length && /[A-Za-z0-9]/.test(source[i])) {
      name += source[i]
      i++
    }
    if (!name) continue
    const tag = name.toLowerCase()
    let quote = null
    while (i < source.length) {
      const c = source[i]
      if (quote) {
        if (c === quote) quote = null
        i++
        continue
      }
      if (c === '"' || c === "'") {
        quote = c
        i++
        continue
      }
      if (c === '>') {
        i++
        break
      }
      i++
    }
    const raw = source.slice(start, i)
    const selfClosing = VOID.has(tag) || /\/\s*>$/.test(raw)
    if (closing) {
      for (let n = stack.length - 1; n >= 0; n--) {
        if (stack[n] === tag) {
          stack.splice(n, 1)
          break
        }
      }
      continue
    }
    if (BLOCK.has(tag) && stack.includes('p')) {
      hits.push({ tag, index: start })
    }
    if (!selfClosing) stack.push(tag)
  }
  return hits
}

async function walkHtml(dir, out) {
  let entries
  try {
    entries = await readdir(dir, { withFileTypes: true })
  } catch {
    return
  }
  for (const entry of entries) {
    const path = join(dir, entry.name)
    if (entry.isDirectory()) {
      await walkHtml(path, out)
      continue
    }
    if (entry.name.endsWith('.html')) out.push(path)
  }
}

export async function scanBuiltParagraphs(root = ROOT) {
  const failures = []
  const filesBySite = Object.fromEntries(SITES.map((site) => [site, 0]))
  for (const site of SITES) {
    const files = []
    await walkHtml(join(root, 'apps', site, '.next', 'server', 'app'), files)
    filesBySite[site] = files.length
    if (files.length === 0) {
      failures.push({ site, file: `apps/${site}/.next/server/app`, tag: 'build', index: 0 })
      continue
    }
    for (const file of files) {
      const html = await readFile(file, 'utf8')
      for (const hit of paragraphBlockHits(html)) {
        failures.push({ site, file: relative(root, file), tag: hit.tag, index: hit.index })
      }
    }
  }
  return { failures, filesBySite }
}

async function main() {
  const { failures, filesBySite } = await scanBuiltParagraphs()
  console.log('Built HTML files scanned:')
  for (const site of SITES) console.log(`  ${site}  ${filesBySite[site]}`)
  if (failures.length > 0) {
    for (const row of failures.slice(0, 40)) {
      console.error(`${row.file}  <${row.tag}> inside <p> at ${row.index}`)
    }
    console.error(`block-in-paragraph: ${failures.length} hit(s)`)
    process.exit(1)
  }
  console.log('block-in-paragraph: no block elements inside paragraphs')
}

const isMain = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1]
if (isMain) {
  main().catch((error) => {
    console.error(error)
    process.exit(1)
  })
}
