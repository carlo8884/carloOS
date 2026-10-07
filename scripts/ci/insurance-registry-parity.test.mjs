import assert from 'node:assert/strict'
import { readFileSync } from 'node:fs'
import { dirname, join } from 'node:path'
import { describe, it } from 'node:test'
import { fileURLToPath } from 'node:url'
import { compareRegistries, parseCarriers } from './insurance-registry-parity.mjs'

const root = join(dirname(fileURLToPath(import.meta.url)), '../..')
const dog = readFileSync(join(root, 'apps/dog-com/src/data/insurance-carriers.ts'), 'utf8')
const vets = readFileSync(join(root, 'apps/vets-co/src/data/insurance-carriers.ts'), 'utf8')

describe('insurance registry parity', () => {
  it('reads the same carrier fields from Dog.com and Vets.co', () => {
    assert.ok(parseCarriers(dog).size >= 8)
    assert.deepEqual(compareRegistries(dog, vets), [])
  })

  it('fails when the same carrier field states a different value', () => {
    const drifted = dog.replace(
      "slug: 'lemonade-pet',\n    name: 'Lemonade Pet',",
      "slug: 'lemonade-pet',\n    name: 'Lemonade',",
    )
    const mismatches = compareRegistries(drifted, vets)
    assert.equal(mismatches.length, 1)
    assert.match(mismatches[0], /^lemonade-pet\.name:/)
  })

  it('fails when one site is missing a carrier', () => {
    const dropped = dog.replace("slug: 'spot'", "slug: 'spot-gone'")
    const mismatches = compareRegistries(dropped, vets)
    assert.ok(mismatches.some((line) => line === 'spot: present on Vets.co only'))
    assert.ok(mismatches.some((line) => line === 'spot-gone: present on Dog.com only'))
  })
})
