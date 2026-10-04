import assert from 'node:assert/strict'
import { test } from 'node:test'
import {
  blanketPick,
  calorieFoodPick,
  careSettingPick,
  ferretCagePick,
  filterFromGallons,
  harnessPick,
  heaterFromGallons,
  heaterFromStockWatts,
  icratePick,
  foragePick,
  horseAgePick,
  insuranceWorthPick,
  puppyClassFoodPick,
  roundBlanketInches,
} from './result-picks.ts'

test('iCrate search follows each standard length, and stops past 48', () => {
  for (const len of [18, 22, 24, 30, 36, 42, 48]) {
    const pick = icratePick(len)
    assert.match(pick.href, new RegExp(`midwest\\+icrate\\+${len}\\+inch`))
    assert.match(pick.detail, new RegExp(`${len}-inch`))
  }
  const over = icratePick(null)
  assert.equal(over.href, '/go/amazon-brand/midwest+icrate+dog+crate?s=tools-dog-crate-size')
  assert.match(over.detail, /54 inches/)
})

test('heater gallon bands are only the chart on the heater review', () => {
  assert.match(heaterFromGallons(5).detail, /25–50W/)
  assert.match(heaterFromGallons(10).detail, /50–100W/)
  assert.match(heaterFromGallons(20).detail, /50–100W/)
  assert.match(heaterFromGallons(30).detail, /100–150W/)
  assert.match(heaterFromGallons(40).detail, /100–150W/)
  assert.match(heaterFromGallons(50).detail, /200–250W/)
  assert.match(heaterFromGallons(75).detail, /200–250W/)
  assert.match(heaterFromGallons(100).detail, /300W or more/)
  assert.match(heaterFromGallons(120).href, /300w/)
  for (const gap of [4, 6, 9, 21, 29, 41, 49, 76, 99]) {
    assert.match(heaterFromGallons(gap).detail, /does not list a wattage band/)
    assert.doesNotMatch(heaterFromGallons(gap).label, /25–50W|50–100W|100–150W|200–250W|300W or more/)
  }
})

test('Eheim stock watts stay inside 25W to 300W', () => {
  for (const watts of [25, 50, 75, 100, 150, 200, 250, 300]) {
    const pick = heaterFromStockWatts(watts)
    assert.match(pick.href, new RegExp(`${watts}w`))
    assert.match(pick.detail, new RegExp(`${watts}W`))
  }
  for (const watts of [400, 500, 800]) {
    const pick = heaterFromStockWatts(watts)
    assert.equal(pick.href, '/go/amazon-brand/eheim+jager+heater?s=tools-heater-wattage-calculator')
    assert.match(pick.detail, /stops at 300W/)
    assert.match(pick.detail, new RegExp(`${watts}W`))
  }
})

test('blanket size uses the review inches, and other lengths stay on the Rambo listing', () => {
  assert.equal(roundBlanketInches(76.4), 75)
  assert.equal(roundBlanketInches(76.5), 78)
  assert.equal(roundBlanketInches(82.4), 81)
  assert.equal(roundBlanketInches(82.6), 84)
  assert.equal(roundBlanketInches(40), 48)
  assert.equal(roundBlanketInches(100), 90)
  for (const size of [75, 78, 81, 84]) {
    const pick = blanketPick(size, 'tools-horse-blanket-size-calculator')
    assert.match(pick.href, new RegExp(`${size}\\+inch`))
    assert.match(pick.label, /Rambo Original/)
  }
  const other = blanketPick(69, 'tools-horse-weight-calculator')
  assert.match(other.href, /smartpak\/rambo-original-turnout/)
  assert.match(other.detail, /69 inches/)
  assert.match(other.detail, /does not print/)
})

test('ferret cage pick follows the review count', () => {
  assert.match(ferretCagePick(1).href, /kaytee/)
  assert.match(ferretCagePick(2).detail, /pair or trio/)
  assert.match(ferretCagePick(3).href, /ferret\+nation/)
  assert.match(ferretCagePick(4).detail, /1–4/)
  assert.doesNotMatch(ferretCagePick(4).detail, /past that card/)
  assert.match(ferretCagePick(5).detail, /past that card/)
})

test('filter pick follows the review gallon cards', () => {
  assert.match(filterFromGallons(15).href, /hikari/)
  assert.match(filterFromGallons(19).href, /hikari/)
  assert.match(filterFromGallons(20).href, /aqueon\+quietflow\+30/)
  assert.match(filterFromGallons(29).href, /aqueon/)
  assert.match(filterFromGallons(30).href, /aquaclear\+70/)
  assert.match(filterFromGallons(70, 'community').href, /aquaclear\+70/)
  assert.match(filterFromGallons(35, 'goldfish').href, /aquaclear\+70/)
  assert.match(filterFromGallons(39, 'cichlid').href, /aquaclear\+70/)
  assert.match(filterFromGallons(40, 'goldfish').href, /fluval\+307/)
  assert.match(filterFromGallons(70, 'cichlid').href, /fluval\+307/)
  assert.match(filterFromGallons(71).detail, /past that card/)
  const reef = filterFromGallons(40, 'reef')
  assert.equal(reef.href, '/reviews/best-aquarium-filters')
  assert.match(reef.detail, /does not name a reef filter/)
})

test('harness letter band changes the recommendation and keeps the Easy Walk', () => {
  const xs = harnessPick('XS')
  const xl = harnessPick('XL')
  assert.equal(xs.href, xl.href)
  assert.match(xs.href, /petsafe\+easy\+walk/)
  assert.match(xs.label, /XS/)
  assert.match(xl.label, /XL/)
  assert.notEqual(xs.detail, xl.detail)
})

test('calorie food pick uses the puppy and senior cards already on the reviews', () => {
  assert.match(calorieFoodPick('Puppy (0-4 months)', 50).href, /royal\+canin\+large\+breed\+puppy/)
  assert.match(calorieFoodPick('Puppy (0-4 months)', 70).href, /royal\+canin\+large\+breed\+puppy/)
  assert.match(calorieFoodPick('Puppy (0-4 months)', 89).href, /royal\+canin\+large\+breed\+puppy/)
  const giant = calorieFoodPick('Puppy (4-12 months)', 90)
  assert.equal(giant.href, '/reviews/best-dog-food-for-puppies')
  assert.match(giant.detail, /Giant Puppy/)
  const smallNow = calorieFoodPick('Puppy (4-12 months)', 8)
  assert.equal(smallNow.href, '/reviews/best-dog-food-for-puppies')
  assert.match(smallNow.detail, /current weight/)
  assert.doesNotMatch(smallNow.href, /small\+paws/)
  assert.match(calorieFoodPick('Puppy (4-12 months)', 40).href, /\/reviews\/best-dog-food-for-puppies/)
  assert.match(calorieFoodPick('Senior (less active)', 40).href, /senior/)
  assert.match(calorieFoodPick('Neutered adult', 40).href, /royal\+canin\+dry\+dog\+food/)
})

test('puppy adult class uses the review size lines', () => {
  assert.match(puppyClassFoodPick('toy').href, /small\+paws/)
  assert.match(puppyClassFoodPick('small').href, /small\+paws/)
  assert.equal(puppyClassFoodPick('medium').href, '/reviews/best-dog-food-for-puppies')
  assert.match(puppyClassFoodPick('large').href, /royal\+canin\+large\+breed\+puppy/)
  assert.match(puppyClassFoodPick('giant').detail, /Giant Puppy/)
  assert.match(puppyClassFoodPick('large', 'tools-puppy-first-year-budget').href, /tools-puppy-first-year-budget/)
})

test('insurance worth-it quotes Trupanion only when this scenario pays for itself', () => {
  assert.match(insuranceWorthPick(120, 400).href, /\/go\/trupanion\/home/)
  assert.equal(insuranceWorthPick(-20, 400).href, '/reviews/best-pet-insurance')
  assert.equal(insuranceWorthPick(-50, null).href, '/reviews/best-pet-insurance')
  assert.match(insuranceWorthPick(-50, null).detail, /never exceeds/)
})

test('care setting sends Vetster only for the telehealth result', () => {
  assert.match(careSettingPick('telehealth').href, /\/go\/vetster\/telehealth/)
  assert.equal(careSettingPick('er').href, '/find-a-vet')
  assert.match(careSettingPick('er').detail, /not a substitute/)
  assert.equal(careSettingPick('clinic').href, '/find-a-vet')
  assert.notEqual(careSettingPick('clinic').detail, careSettingPick('er').detail)
})

test('forage pick keeps Standlee and changes the dry-matter line', () => {
  const idle = foragePick('15 lb+', 'Maintenance (no work)')
  const hard = foragePick('20 lb+', 'Heavy work (race / hard sport)')
  assert.equal(idle.href, hard.href)
  assert.match(idle.href, /standlee\+premium\+forage/)
  assert.notEqual(idle.detail, hard.detail)
  assert.match(idle.detail, /does not print a bag size/)
})

test('horse age assigns the joint card only to the senior stage', () => {
  assert.match(horseAgePick('Senior').href, /cosequin-asu-plus/)
  assert.equal(horseAgePick('Adult').href, '/reviews/best-equine-supplements')
  assert.equal(horseAgePick('Foal').href, '/reviews/best-equine-supplements')
  assert.match(horseAgePick('Young').detail, /young/)
})

test('body-length blanket pick does not treat the weight as the size', () => {
  const pick = blanketPick(78, 'tools-horse-weight-calculator', 'body-length')
  assert.match(pick.href, /78\+inch/)
  assert.match(pick.detail, /does not set a blanket size/)
  assert.match(pick.detail, /chest-to-tail/)
})
