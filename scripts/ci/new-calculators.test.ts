import assert from 'node:assert/strict'
import test from 'node:test'
import { foodGrams } from '../../apps/dog-com/src/app/tools/dog-food-amount-calculator/model.ts'
import { catFoodGrams } from '../../apps/vets-co/src/app/tools/cat-food-amount-calculator/model.ts'
import { horseWaterGallons } from '../../apps/horses-com/src/app/tools/horse-water-calculator/model.ts'
import { fromInches } from '../../apps/horses-com/src/app/tools/horse-height-converter/model.ts'
import { liveRockPounds } from '../../apps/fish-com/src/app/tools/live-rock-calculator/model.ts'
import { labelMath } from '../../apps/ferret-com/src/app/tools/label-calculator/model.ts'

test('dog food grams use RER and kcal per kg', () => {
  const row = foodGrams(30, 'lb', 1.6, 3500)
  const kg = 30 / 2.2046
  const mer = 1.6 * 70 * Math.pow(kg, 0.75)
  assert.ok(Math.abs(row.mer - mer) < 0.001)
  assert.ok(Math.abs(row.grams - (mer * 1000) / 3500) < 0.001)
  assert.equal(Math.round(row.grams), 227)
})

test('cat food grams use the feline 1.2 factor', () => {
  const row = catFoodGrams(10, 'lb', 1.2, 3800)
  const kg = 10 / 2.2046
  const der = 1.2 * 70 * Math.pow(kg, 0.75)
  assert.ok(Math.abs(row.grams - (der * 1000) / 3800) < 0.001)
})

test('hands notation never uses a fourth inch and 58 inches is a pony', () => {
  const exact = fromInches(15 * 4 + 2)
  assert.equal(exact.handsNotation, '15.2')
  assert.equal(exact.inches, 62)
  assert.equal(exact.isPony, false)

  const carried = fromInches(63.6)
  assert.equal(carried.handsNotation, '16.0')
  assert.equal(carried.hands, 16)
  assert.equal(carried.handInches, 0)

  const pony = fromInches(58)
  assert.equal(pony.handsNotation, '14.2')
  assert.equal(pony.isPony, true)

  const justOver = fromInches(58.2)
  assert.equal(justOver.handsNotation, '14.2')
  assert.equal(justOver.isPony, false)
})

test('a 1000 lb horse is 6 to 10 gallons', () => {
  const row = horseWaterGallons(1000)
  assert.equal(row.lowGal, 6)
  assert.equal(row.highGal, 10)
})

test('40 gallons of live rock is 40 to 60 pounds', () => {
  const row = liveRockPounds(40)
  assert.equal(row.lowLb, 40)
  assert.equal(row.highLb, 60)
})

test('label math matches the 36% protein at 10% moisture example', () => {
  const row = labelMath({ protein: 36, fat: 18, fiber: 3, moisture: 10, ash: 8 })
  assert.ok(row)
  assert.equal(row.dryMatterPercent, 90)
  assert.ok(Math.abs(row.dmProtein - 40) < 0.001)
})

test('omitted ash uses 7 percent', () => {
  const row = labelMath({ protein: 36, fat: 18, fiber: 3, moisture: 10, ash: null })
  assert.equal(row?.ashUsed, 7)
  assert.equal(row?.ashOmitted, true)
})
