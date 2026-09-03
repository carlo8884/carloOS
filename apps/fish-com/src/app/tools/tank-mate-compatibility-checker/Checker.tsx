'use client'

import { useMemo, useState } from 'react'
import { CalcCard } from '../_components/CalcShell'
import { ResultCTA } from '../_components/ResultCTA'

// ── Species the site has profile pages for, with the traits that drive
//    compatibility. Temp/pH ranges are typical aquarium-keeping figures.
//    Conservative, general-guidance values — not lab measurements.
type Temperament = 'peaceful' | 'semi-aggressive' | 'aggressive' | 'territorial'

interface Species {
  id: string
  name: string
  slug?: string // /species/<slug> if a profile exists
  temperament: Temperament
  tempLow: number // °F
  tempHigh: number
  finNipper: boolean
  longFinned: boolean // vulnerable to fin-nipping
  hardWater: boolean // wants hard, alkaline water
  coldwater: boolean // goldfish/koi — not tropical
  adultInches: number
  predatorMouth: boolean // will eat fish small enough to swallow
}

// Ordered list — common community + a few notable specialists.
const SPECIES: Species[] = [
  { id: 'betta', name: 'Betta', slug: 'betta-fish', temperament: 'semi-aggressive', tempLow: 76, tempHigh: 82, finNipper: false, longFinned: true, hardWater: false, coldwater: false, adultInches: 2.5, predatorMouth: false },
  { id: 'neon-tetra', name: 'Neon Tetra', slug: 'neon-tetra', temperament: 'peaceful', tempLow: 72, tempHigh: 78, finNipper: false, longFinned: false, hardWater: false, coldwater: false, adultInches: 1.5, predatorMouth: false },
  { id: 'cardinal-tetra', name: 'Cardinal Tetra', slug: 'cardinal-tetra', temperament: 'peaceful', tempLow: 73, tempHigh: 81, finNipper: false, longFinned: false, hardWater: false, coldwater: false, adultInches: 1.5, predatorMouth: false },
  { id: 'guppy', name: 'Guppy', slug: 'guppy', temperament: 'peaceful', tempLow: 72, tempHigh: 82, finNipper: false, longFinned: true, hardWater: true, coldwater: false, adultInches: 2, predatorMouth: false },
  { id: 'molly', name: 'Molly', slug: 'molly-fish', temperament: 'peaceful', tempLow: 72, tempHigh: 82, finNipper: false, longFinned: false, hardWater: true, coldwater: false, adultInches: 4, predatorMouth: false },
  { id: 'platy', name: 'Platy', slug: 'platy-fish', temperament: 'peaceful', tempLow: 70, tempHigh: 80, finNipper: false, longFinned: false, hardWater: true, coldwater: false, adultInches: 2.5, predatorMouth: false },
  { id: 'swordtail', name: 'Swordtail', slug: 'swordtail-fish', temperament: 'peaceful', tempLow: 70, tempHigh: 82, finNipper: false, longFinned: false, hardWater: true, coldwater: false, adultInches: 4, predatorMouth: false },
  { id: 'angelfish', name: 'Angelfish', slug: 'angelfish', temperament: 'semi-aggressive', tempLow: 76, tempHigh: 84, finNipper: false, longFinned: true, hardWater: false, coldwater: false, adultInches: 6, predatorMouth: true },
  { id: 'corydoras', name: 'Corydoras', slug: 'corydoras', temperament: 'peaceful', tempLow: 72, tempHigh: 79, finNipper: false, longFinned: false, hardWater: false, coldwater: false, adultInches: 2.5, predatorMouth: false },
  { id: 'bristlenose-pleco', name: 'Bristlenose Pleco', slug: 'bristlenose-pleco', temperament: 'peaceful', tempLow: 73, tempHigh: 81, finNipper: false, longFinned: false, hardWater: false, coldwater: false, adultInches: 5, predatorMouth: false },
  { id: 'harlequin-rasbora', name: 'Harlequin Rasbora', slug: 'harlequin-rasbora', temperament: 'peaceful', tempLow: 73, tempHigh: 81, finNipper: false, longFinned: false, hardWater: false, coldwater: false, adultInches: 2, predatorMouth: false },
  { id: 'zebra-danio', name: 'Zebra Danio', slug: 'zebra-danio', temperament: 'semi-aggressive', tempLow: 65, tempHigh: 77, finNipper: true, longFinned: false, hardWater: false, coldwater: false, adultInches: 2, predatorMouth: false },
  { id: 'dwarf-gourami', name: 'Dwarf Gourami', slug: 'dwarf-gourami', temperament: 'peaceful', tempLow: 76, tempHigh: 82, finNipper: false, longFinned: false, hardWater: false, coldwater: false, adultInches: 3.5, predatorMouth: false },
  { id: 'kuhli-loach', name: 'Kuhli Loach', slug: 'kuhli-loach', temperament: 'peaceful', tempLow: 75, tempHigh: 82, finNipper: false, longFinned: false, hardWater: false, coldwater: false, adultInches: 4, predatorMouth: false },
  { id: 'mystery-snail', name: 'Mystery Snail', slug: 'mystery-snail', temperament: 'peaceful', tempLow: 68, tempHigh: 82, finNipper: false, longFinned: false, hardWater: true, coldwater: false, adultInches: 2, predatorMouth: false },
  { id: 'cherry-shrimp', name: 'Cherry Shrimp', slug: 'cherry-shrimp', temperament: 'peaceful', tempLow: 65, tempHigh: 80, finNipper: false, longFinned: false, hardWater: false, coldwater: false, adultInches: 0.5, predatorMouth: false },
  { id: 'tiger-barb', name: 'Tiger Barb', temperament: 'semi-aggressive', tempLow: 74, tempHigh: 82, finNipper: true, longFinned: false, hardWater: false, coldwater: false, adultInches: 3, predatorMouth: false },
  { id: 'oscar', name: 'Oscar', slug: 'oscar', temperament: 'aggressive', tempLow: 74, tempHigh: 81, finNipper: false, longFinned: false, hardWater: false, coldwater: false, adultInches: 12, predatorMouth: true },
  { id: 'african-cichlid', name: 'African Cichlid', slug: 'african-cichlid', temperament: 'aggressive', tempLow: 74, tempHigh: 82, finNipper: false, longFinned: false, hardWater: true, coldwater: false, adultInches: 5, predatorMouth: true },
  { id: 'goldfish', name: 'Goldfish', slug: 'goldfish', temperament: 'peaceful', tempLow: 60, tempHigh: 74, finNipper: false, longFinned: false, hardWater: false, coldwater: true, adultInches: 8, predatorMouth: true },
]

const SPECIES_BY_ID: Record<string, Species> = Object.fromEntries(SPECIES.map((s) => [s.id, s]))

export type Verdict = 'compatible' | 'caution' | 'incompatible'

export interface PairResult {
  a: Species
  b: Species
  verdict: Verdict
  reasons: string[]
}

// ── Core compatibility logic. Conservative, general aquarium-keeping guidance.
//    Worst applicable signal wins (incompatible > caution > compatible).
export function judgePair(a: Species, b: Species): PairResult {
  const reasons: string[] = []
  let verdict: Verdict = 'compatible'
  const escalate = (v: Verdict) => {
    if (v === 'incompatible') verdict = 'incompatible'
    else if (v === 'caution' && verdict !== 'incompatible') verdict = 'caution'
  }

  // 1. Temperature regime — coldwater vs tropical is a hard incompatibility.
  if (a.coldwater !== b.coldwater) {
    escalate('incompatible')
    const cold = a.coldwater ? a.name : b.name
    reasons.push(`${cold} is a coldwater species; pairing it with tropical fish forces one species to live outside its safe temperature range.`)
  } else {
    // Overlapping comfortable temperature band check.
    const low = Math.max(a.tempLow, b.tempLow)
    const high = Math.min(a.tempHigh, b.tempHigh)
    if (high - low < 3) {
      escalate('caution')
      reasons.push(`Their ideal temperature ranges barely overlap (${low}–${high}°F), so one species will likely be kept slightly too warm or too cool.`)
    }
  }

  // 2. Predation by size — a much larger predator-mouthed fish can eat the smaller one.
  const big = a.adultInches >= b.adultInches ? a : b
  const small = big === a ? b : a
  if (big.predatorMouth && big.adultInches >= small.adultInches * 2.2 && small.adultInches < 3) {
    escalate('incompatible')
    reasons.push(`Adult ${big.name} (~${big.adultInches}") is large enough to eat a ${small.name}; predator-and-prey sizing rarely ends well.`)
  }

  // 3. Aggression / territory.
  if (a.temperament === 'aggressive' || b.temperament === 'aggressive') {
    const aggressor = a.temperament === 'aggressive' ? a : b
    const other = aggressor === a ? b : a
    if (other.temperament === 'aggressive') {
      escalate('caution')
      reasons.push(`Two aggressive species (${a.name} + ${b.name}) usually need a large, well-structured tank to spread out territories; risky in standard setups.`)
    } else {
      escalate('incompatible')
      reasons.push(`${aggressor.name} is aggressive and will typically harass or kill a peaceful ${other.name}.`)
    }
  }

  // 4. Fin-nipping vs long-finned / slow fish.
  const nipper = a.finNipper ? a : b.finNipper ? b : null
  const target = a.longFinned ? a : b.longFinned ? b : null
  if (nipper && target && nipper.id !== target.id) {
    escalate('caution')
    reasons.push(`${nipper.name} is a known fin-nipper and ${target.name} has long, flowing fins — keep ${nipper.name} in a large group to spread out nipping, and watch for damage.`)
  }
  // Betta-specific: bettas are slow, long-finned, and territorial toward other bettas.
  if ((a.id === 'betta' || b.id === 'betta')) {
    const other = a.id === 'betta' ? b : a
    if (other.id === 'betta') {
      escalate('incompatible')
      reasons.push('Two male bettas will fight; only one male betta per tank.')
    } else if (other.finNipper) {
      escalate('caution')
      reasons.push(`${other.name} may nip a betta's long fins; this pairing depends heavily on tank size and the betta's individual temperament.`)
    }
  }

  // 5. Water hardness preference mismatch (soft-water vs hard-water specialists).
  if (a.hardWater !== b.hardWater) {
    // Only flag when one side is genuinely particular; livebearers tolerate a range,
    // so this is a soft caution rather than a hard fail.
    const hard = a.hardWater ? a : b
    const soft = a.hardWater ? b : a
    if (hard.id === 'african-cichlid' || soft.id === 'cardinal-tetra' || soft.id === 'neon-tetra') {
      escalate('caution')
      reasons.push(`${hard.name} prefers hard, alkaline water while ${soft.name} prefers soft, slightly acidic water — a hardness compromise stresses one of them over time.`)
    }
  }

  // 6. Shrimp as prey for larger or predatory tankmates.
  if ((a.id === 'cherry-shrimp' || b.id === 'cherry-shrimp')) {
    const other = a.id === 'cherry-shrimp' ? b : a
    if (other.id !== 'cherry-shrimp' && (other.predatorMouth || other.adultInches >= 3)) {
      escalate('caution')
      reasons.push(`Adult shrimp may survive with ${other.name}, but shrimplets will usually be eaten — expect the colony not to thrive.`)
    }
  }

  if (verdict === 'compatible' && reasons.length === 0) {
    reasons.push('Similar temperament, overlapping temperature range, and no size or fin-nipping conflict — a commonly recommended community pairing.')
  }

  return { a, b, verdict, reasons }
}

const VERDICT_META: Record<Verdict, { label: string; chip: string }> = {
  compatible: { label: 'Compatible', chip: 'bg-emerald-100 text-emerald-800 border-emerald-200' },
  caution: { label: 'Caution', chip: 'bg-amber-100 text-amber-800 border-amber-200' },
  incompatible: { label: 'Not recommended', chip: 'bg-red-100 text-red-800 border-red-200' },
}

function overallVerdict(pairs: PairResult[]): Verdict {
  if (pairs.some((p) => p.verdict === 'incompatible')) return 'incompatible'
  if (pairs.some((p) => p.verdict === 'caution')) return 'caution'
  return 'compatible'
}

export default function Checker() {
  const [selected, setSelected] = useState<string[]>(['betta', 'neon-tetra'])

  const toggle = (id: string) => {
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))
  }

  const pairs = useMemo(() => {
    const chosen = selected.map((id) => SPECIES_BY_ID[id]).filter(Boolean)
    const out: PairResult[] = []
    for (let i = 0; i < chosen.length; i++) {
      for (let j = i + 1; j < chosen.length; j++) {
        out.push(judgePair(chosen[i], chosen[j]))
      }
    }
    return out
  }, [selected])

  const overall = pairs.length > 0 ? overallVerdict(pairs) : null

  // Species pages to link out to from the result (only those with profiles).
  const linkedSlugs = Array.from(
    new Set(selected.map((id) => SPECIES_BY_ID[id]).filter((s) => s?.slug).map((s) => s!.slug as string))
  )

  return (
    <div>
      <CalcCard>
        <p className="text-xs font-bold tracking-wider uppercase text-brand-text-light mb-3">
          Pick the fish you want to keep together
        </p>
        <div className="flex flex-wrap gap-2">
          {SPECIES.map((s) => {
            const on = selected.includes(s.id)
            return (
              <button
                key={s.id}
                type="button"
                onClick={() => toggle(s.id)}
                aria-pressed={on}
                className={
                  'px-3 py-2 text-sm font-semibold rounded-full border transition-colors ' +
                  (on
                    ? 'bg-brand-primary text-white border-brand-primary'
                    : 'bg-brand-white text-brand-text-mid border-brand-border hover:border-brand-primary')
                }
              >
                {s.name}
              </button>
            )
          })}
        </div>
        <p className="text-2xs text-brand-text-light mt-3">
          Select two or more species to see a verdict for every pairing.
        </p>
      </CalcCard>

      {selected.length < 2 && (
        <div className="rounded-lg border border-brand-border bg-brand-surface p-5 text-sm text-brand-text-mid">
          Pick at least two species above to check their compatibility.
        </div>
      )}

      {overall && (
        <div className="bg-brand-dark text-white rounded-lg p-6 mt-2">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
            Overall verdict
          </div>
          <div className="font-display font-bold text-3xl tracking-tight leading-none mb-1">
            {VERDICT_META[overall].label}
          </div>
          <p className="text-sm text-white/70 mt-2 leading-relaxed">
            {overall === 'compatible' &&
              'These species are a commonly recommended community combination. Final success still depends on tank size, group sizes (schooling fish need 6+), and individual temperament.'}
            {overall === 'caution' &&
              'This mix can work in the right setup, but at least one pairing carries risk. Read the per-pair notes below — most cautions come down to tank size, fin-nipping, or a water-parameter compromise.'}
            {overall === 'incompatible' &&
              'At least one pairing here is not recommended. See the per-pair notes — a coldwater/tropical clash, predator-and-prey sizing, or an aggressive species is usually the cause.'}
          </p>
        </div>
      )}

      {pairs.length > 0 && (
        <div className="mt-4 space-y-3">
          {pairs.map((p) => {
            const meta = VERDICT_META[p.verdict]
            return (
              <div key={`${p.a.id}-${p.b.id}`} className="rounded-lg border border-brand-border bg-brand-white p-4">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="font-display font-semibold text-brand-dark">
                    {p.a.name} + {p.b.name}
                  </div>
                  <span className={'text-2xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border ' + meta.chip}>
                    {meta.label}
                  </span>
                </div>
                <ul className="text-sm text-brand-text-mid leading-relaxed list-disc pl-5 space-y-1">
                  {p.reasons.map((r, i) => (
                    <li key={i}>{r}</li>
                  ))}
                </ul>
              </div>
            )
          })}
        </div>
      )}

      {linkedSlugs.length > 0 && (
        <div className="mt-4 rounded-lg border border-brand-border bg-brand-surface p-5">
          <p className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary-dark mb-2">
            Read the full care profiles
          </p>
          <div className="flex flex-wrap gap-2">
            {linkedSlugs.map((slug) => {
              const sp = SPECIES.find((s) => s.slug === slug)!
              return (
                <a
                  key={slug}
                  href={`/species/${slug}`}
                  className="text-sm font-semibold text-brand-primary no-underline hover:underline"
                >
                  {sp.name} &rarr;
                </a>
              )
            })}
          </div>
          <p className="text-sm text-brand-text-mid mt-3">
            Sizing the tank for this group? Run the{' '}
            <a href="/tools/stocking-calculator" className="text-brand-primary font-semibold no-underline hover:underline">
              stocking calculator
            </a>{' '}
            to check you have the space and filtration.
          </p>
        </div>
      )}

      {overall === 'compatible' && (
        <ResultCTA
          heading="Give a compatible mix caves and hiding spots"
          blurb={
            <>
              Even peaceful pairings do better with visual breaks. Caves, plants, and
              hiding spots cut line-of-sight aggression and give shy fish a place to
              settle after you add them.
            </>
          }
          query="aquarium decorations caves hiding spots"
          cta="Browse aquarium hiding spots on Amazon"
          source="tools-tank-mate-compatibility"
        />
      )}
      {overall === 'caution' && (
        <ResultCTA
          heading="Keep a divider ready if nipping starts"
          blurb={
            <>
              A Caution verdict usually means tank size, fin-nipping, or a parameter
              compromise. A tank divider lets you split the display fast without
              moving fish to a second setup.
            </>
          }
          query="aquarium tank divider"
          cta="Browse tank dividers on Amazon"
          source="tools-tank-mate-compatibility"
        />
      )}
      {overall === 'incompatible' && (
        <ResultCTA
          heading="House the risky fish in a quarantine tank"
          blurb={
            <>
              A Not-recommended pairing should not share the display. A small hospital
              / quarantine tank lets you keep the extra fish safely while you restock
              the community.
            </>
          }
          query="aquarium quarantine hospital tank"
          cta="Browse quarantine tanks on Amazon"
          source="tools-tank-mate-compatibility"
        />
      )}
    </div>
  )
}
