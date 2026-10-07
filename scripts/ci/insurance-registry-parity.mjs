/**
 * Fail when Dog.com and Vets.co state different values for the same
 * insurance-carrier field. Option arrays, waits, and the other registry
 * facts must stay in lockstep.
 *
 *   node scripts/ci/insurance-registry-parity.mjs
 */
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '../..')
const DOG = join(ROOT, 'apps/dog-com/src/data/insurance-carriers.ts')
const VETS = join(ROOT, 'apps/vets-co/src/data/insurance-carriers.ts')

function skipWs(src, i) {
  while (i < src.length) {
    const c = src[i]
    if (c === ' ' || c === '\n' || c === '\r' || c === '\t') {
      i += 1
      continue
    }
    if (c === '/' && src[i + 1] === '/') {
      while (i < src.length && src[i] !== '\n') i += 1
      continue
    }
    if (c === '/' && src[i + 1] === '*') {
      i += 2
      while (i < src.length && !(src[i] === '*' && src[i + 1] === '/')) i += 1
      i += 2
      continue
    }
    break
  }
  return i
}

function parseString(src, i) {
  const quote = src[i]
  i += 1
  let out = ''
  while (i < src.length) {
    const c = src[i]
    if (c === '\\') {
      const n = src[i + 1]
      if (n === 'n') out += '\n'
      else if (n === 't') out += '\t'
      else out += n
      i += 2
      continue
    }
    if (c === quote) return { value: out, i: i + 1 }
    out += c
    i += 1
  }
  throw new Error('unterminated string in insurance registry')
}

function parseValue(src, i) {
  i = skipWs(src, i)
  const c = src[i]
  if (c === "'" || c === '"') return parseString(src, i)
  if (c === '[') return parseArray(src, i)
  if (c === '{') return parseObject(src, i)
  const m = src.slice(i).match(/^(?:true|false|null|-?\d+(?:\.\d+)?)/)
  if (!m) throw new Error(`unreadable registry value near ${JSON.stringify(src.slice(i, i + 40))}`)
  let value
  if (m[0] === 'true') value = true
  else if (m[0] === 'false') value = false
  else if (m[0] === 'null') value = null
  else value = Number(m[0])
  return { value, i: i + m[0].length }
}

function parseArray(src, i) {
  i = skipWs(src, i + 1)
  const value = []
  while (src[i] !== ']') {
    const next = parseValue(src, i)
    value.push(next.value)
    i = skipWs(src, next.i)
    if (src[i] === ',') i = skipWs(src, i + 1)
  }
  return { value, i: i + 1 }
}

function parseObject(src, i) {
  i = skipWs(src, i + 1)
  const value = {}
  while (src[i] !== '}') {
    i = skipWs(src, i)
    const keyMatch = src.slice(i).match(/^([A-Za-z_][A-Za-z0-9_]*)\s*:/)
    if (!keyMatch) throw new Error(`unreadable registry field near ${JSON.stringify(src.slice(i, i + 40))}`)
    const key = keyMatch[1]
    const next = parseValue(src, i + keyMatch[0].length)
    value[key] = next.value
    i = skipWs(src, next.i)
    if (src[i] === ',') i = skipWs(src, i + 1)
  }
  return { value, i: i + 1 }
}

export function parseCarriers(src) {
  const marker = 'export const CARRIERS'
  const start = src.indexOf(marker)
  if (start < 0) throw new Error('CARRIERS export missing')
  const eq = src.indexOf('=', start)
  const bracket = src.indexOf('[', eq)
  const parsed = parseArray(src, bracket)
  if (parsed.value.length === 0) throw new Error('CARRIERS array is empty')
  const carriers = new Map()
  for (const row of parsed.value) {
    if (!row || typeof row.slug !== 'string') throw new Error('carrier row is missing slug')
    if (carriers.has(row.slug)) throw new Error(`duplicate carrier slug ${row.slug}`)
    carriers.set(row.slug, row)
  }
  return carriers
}

function stable(value) {
  return JSON.stringify(value)
}

export function compareRegistries(dogSrc, vetsSrc) {
  const dog = parseCarriers(dogSrc)
  const vets = parseCarriers(vetsSrc)
  const slugs = [...new Set([...dog.keys(), ...vets.keys()])].sort()
  const mismatches = []
  for (const slug of slugs) {
    if (!dog.has(slug)) {
      mismatches.push(`${slug}: present on Vets.co only`)
      continue
    }
    if (!vets.has(slug)) {
      mismatches.push(`${slug}: present on Dog.com only`)
      continue
    }
    const left = dog.get(slug)
    const right = vets.get(slug)
    const fields = [...new Set([...Object.keys(left), ...Object.keys(right)])].sort()
    for (const field of fields) {
      if (!(field in left)) {
        mismatches.push(`${slug}.${field}: present on Vets.co only`)
        continue
      }
      if (!(field in right)) {
        mismatches.push(`${slug}.${field}: present on Dog.com only`)
        continue
      }
      if (stable(left[field]) !== stable(right[field])) {
        mismatches.push(
          `${slug}.${field}: Dog.com ${stable(left[field])} vs Vets.co ${stable(right[field])}`,
        )
      }
    }
  }
  return mismatches
}

function main() {
  const mismatches = compareRegistries(readFileSync(DOG, 'utf8'), readFileSync(VETS, 'utf8'))
  if (mismatches.length) {
    console.error('Dog.com and Vets.co insurance registries differ:')
    for (const line of mismatches) console.error(`  ${line}`)
    process.exit(1)
  }
  const count = parseCarriers(readFileSync(DOG, 'utf8')).size
  console.log(`insurance-registry-parity: ${count} carriers match`)
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  main()
}
