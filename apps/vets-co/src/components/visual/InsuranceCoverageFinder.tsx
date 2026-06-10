'use client'

/**
 * InsuranceCoverageFinder — Vets.co coverage-consideration finder.
 *
 * An HONEST filter + group tool, NOT a scoring/ranking wizard. The user
 * picks pet type, (optionally) breed, (optionally) state, and a set of
 * coverage priorities. The tool filters the 9-carrier registry to the
 * carriers whose PUBLISHED policy options match those priorities, groups
 * them, and optionally pins the breed dataset's editorially-chosen carrier
 * first. There is NO fit-score, NO quote, NO ranking claim — results are
 * framed as "options that may fit, given your priorities."
 *
 * Data: src/data/insurance-carriers.ts (CARRIERS), insurance-breeds-all.ts
 * (breed pins), insurance-by-state.ts (availability gate). Invent nothing.
 *
 * Carrier CTA href uses carrier.vendor (NOT slug) → /go/<vendor>/<sku>.
 * Neutral compare link is passed in from the page (reviewsHref prop) so the
 * literal review URL never lives in this component body.
 */

import { useMemo, useState } from 'react'
import { AffiliateDisclosure } from '@carloOS/ui'
import { CARRIERS, getCarrierBySlug, type CarrierProfile } from '../../data/insurance-carriers'
import {
  breedsForSpecies,
  findBreedBySlug,
  type Species,
} from '../../data/insurance-breeds-all'
import { getStateInsuranceContext } from '../../data/insurance-by-state'
import { States } from '../../data/states'

// ─── Priorities: each maps to a real boolean/enum predicate over the carrier
//     data. No numeric (waiting-period / age) filtering — the data does not
//     support a defensible numeric threshold. "Hereditary" is intentionally
//     omitted: all 9 carriers cover it, so it carries no filtering signal. ───

interface Priority {
  id: string
  label: string
  chip: string
  matches: (c: CarrierProfile) => boolean
}

const PRIORITIES: Priority[] = [
  {
    id: 'exam-fees',
    label: 'Exam fees covered',
    chip: 'Covers exam fees',
    matches: (c) => c.coversExamFees === true,
  },
  {
    id: 'full-dental',
    label: 'Full dental coverage',
    chip: 'Full dental coverage',
    matches: (c) => c.coversDental === 'full',
  },
  {
    id: 'wellness',
    label: 'Wellness add-on available',
    chip: 'Wellness add-on available',
    matches: (c) => c.coversWellness !== 'none',
  },
  {
    id: 'unlimited',
    label: 'Unlimited annual payout option',
    chip: 'Unlimited annual-limit option',
    matches: (c) => c.annualLimitOptions.includes('unlimited'),
  },
  {
    id: 'alternative',
    label: 'Alternative therapy',
    chip: 'Covers alternative therapy',
    matches: (c) => c.coversAlternative === true,
  },
  {
    id: 'behavioral',
    label: 'Behavioral coverage',
    chip: 'Covers behavioral therapy',
    matches: (c) => c.coversBehavioral === true,
  },
  {
    id: 'rx-food',
    label: 'Prescription food',
    chip: 'Covers prescription food',
    matches: (c) => c.coversRxFood === true,
  },
  {
    id: 'reimb-100',
    label: '100% reimbursement option',
    chip: '100% reimbursement option',
    matches: (c) => c.reimbursementOptions.includes(100),
  },
]

interface FinderResult {
  carriers: CarrierProfile[]
  /** carrier slug → list of matched priority chips */
  matchedChips: Record<string, string[]>
  /** carrier slug → breed recommendedReason (pinned carriers only) */
  pinReason: Record<string, string>
  relaxed: boolean
  stateLimited: boolean
  stateCaveat: string | null
  unavailableCarriers: string[]
}

function buildResult(
  petType: Species,
  breedSlug: string | null,
  stateSlug: string | null,
  selectedPriorities: string[],
): FinderResult {
  // ── Step 1: state availability gate ────────────────────────────────────
  let pool = CARRIERS
  let stateLimited = false
  let stateCaveat: string | null = null
  let unavailableCarriers: string[] = []
  if (stateSlug) {
    const ctx = getStateInsuranceContext(stateSlug)
    unavailableCarriers = ctx.unavailableCarriers ?? []
    if (ctx.carrierAvailability === 'limited') {
      stateLimited = true
      stateCaveat = ctx.consumerProtectionNote
      // Surface only carriers licensed across all states; exclude 'most' too.
      pool = pool.filter((c) => c.states === 'all-50')
    }
  }

  // ── Step 2: apply priority filters (carrier must match ALL selected),
  //    relaxing to the closest matches if fewer than 3 survive. ───────────
  const activePriorities = PRIORITIES.filter((p) => selectedPriorities.includes(p.id))
  let relaxed = false
  let survivors = pool
  if (activePriorities.length > 0) {
    const strict = pool.filter((c) => activePriorities.every((p) => p.matches(c)))
    if (strict.length >= 3) {
      survivors = strict
    } else {
      // Relax: keep everyone, rank by how many priorities they match.
      relaxed = true
      survivors = pool
    }
  }

  // matched-priority count per carrier (over the selected set)
  const matchCount = (c: CarrierProfile) =>
    activePriorities.filter((p) => p.matches(c)).length

  const matchedChips: Record<string, string[]> = {}
  for (const c of survivors) {
    matchedChips[c.slug] = activePriorities.filter((p) => p.matches(c)).map((p) => p.chip)
  }

  // ── Step 3: sort by matched-priority count (desc), tie-break editorialScore ──
  let ordered = [...survivors].sort((a, b) => {
    const d = matchCount(b) - matchCount(a)
    if (d !== 0) return d
    return b.editorialScore - a.editorialScore
  })

  // ── Step 4: breed pin (recommended carrier, then 2 alternates) ─────────
  const pinReason: Record<string, string> = {}
  if (breedSlug) {
    const breed = findBreedBySlug(breedSlug)
    if (breed) {
      const pinnedSlugs = [breed.recommendedCarrier, ...breed.alternateCarriers]
      const inPool = (slug: string) => ordered.some((c) => c.slug === slug)
      const pins: CarrierProfile[] = []
      for (const slug of pinnedSlugs) {
        const carrier = getCarrierBySlug(slug)
        // Only pin if the carrier survived the state gate / filter pool.
        if (carrier && inPool(slug)) pins.push(carrier)
      }
      if (pins.length > 0) {
        if (breed.recommendedReason) pinReason[breed.recommendedCarrier] = breed.recommendedReason
        const pinnedSet = new Set(pins.map((c) => c.slug))
        const rest = ordered.filter((c) => !pinnedSet.has(c.slug))
        ordered = [...pins, ...rest]
        // Ensure pinned carriers have a chip entry even if no priority selected.
        for (const c of pins) {
          if (!matchedChips[c.slug]) {
            matchedChips[c.slug] = activePriorities.filter((p) => p.matches(c)).map((p) => p.chip)
          }
        }
      }
    }
  }

  // ── Step 5: output 3–6 carrier cards ───────────────────────────────────
  const carriers = ordered.slice(0, 6)
  return {
    carriers,
    matchedChips,
    pinReason,
    relaxed,
    stateLimited,
    stateCaveat,
    unavailableCarriers,
  }
}

function reimbursementLabel(opts: number[]): string {
  return opts.map((o) => `${o}%`).join(' / ')
}
function deductibleLabel(opts: number[]): string {
  return opts.map((o) => `$${o.toLocaleString('en-US')}`).join(' / ')
}
function annualLimitLabel(opts: (number | 'unlimited')[]): string {
  return opts.map((o) => (o === 'unlimited' ? 'Unlimited' : `$${o.toLocaleString('en-US')}`)).join(' / ')
}
function dentalLabel(d: CarrierProfile['coversDental']): string {
  if (d === 'full') return 'Full dental'
  if (d === 'illness-only') return 'Dental (illness only)'
  return 'No dental'
}

interface Props {
  /** Neutral, no-carrier-picked comparison route (e.g. the carrier review). */
  reviewsHref: string
  /** Campaign sku appended to /go/<vendor>/<sku> for attribution. */
  campaignSku?: string
}

export function InsuranceCoverageFinder({ reviewsHref, campaignSku = 'insurance-finder' }: Props) {
  const [petType, setPetType] = useState<Species>('dog')
  const [breedSlug, setBreedSlug] = useState<string>('')
  const [stateSlug, setStateSlug] = useState<string>('')
  const [selected, setSelected] = useState<string[]>([])

  const breedOptions = useMemo(() => breedsForSpecies(petType), [petType])

  const result = useMemo(
    () => buildResult(petType, breedSlug || null, stateSlug || null, selected),
    [petType, breedSlug, stateSlug, selected],
  )

  const togglePriority = (id: string) =>
    setSelected((prev) => (prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]))

  const onPetTypeChange = (t: Species) => {
    setPetType(t)
    setBreedSlug('') // breed list is species-specific; reset on switch
  }

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      {/* ── Inputs ─────────────────────────────────────────────────────── */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <span className="mb-2 block text-sm font-medium text-brand-text-mid">Pet type</span>
          <div className="flex gap-2">
            {(['dog', 'cat'] as Species[]).map((t) => (
              <button
                key={t}
                type="button"
                aria-pressed={petType === t}
                onClick={() => onPetTypeChange(t)}
                className={`flex-1 rounded border px-3 py-2 text-sm font-semibold capitalize transition ${
                  petType === t
                    ? 'border-brand-primary bg-brand-primary text-white'
                    : 'border-brand-border bg-brand-surface text-brand-text-mid hover:text-brand-text-dark'
                }`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label htmlFor="finder-breed" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Breed (optional)
          </label>
          <select
            id="finder-breed"
            value={breedSlug}
            onChange={(e) => setBreedSlug(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            <option value="">Not sure / mixed</option>
            {breedOptions.map((b) => (
              <option key={b.slug} value={b.slug}>
                {b.breedName}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-mid">
            If set, our editorial breed note is shown first as a coverage consideration — not a ranking.
          </p>
        </div>

        <div>
          <label htmlFor="finder-state" className="mb-2 block text-sm font-medium text-brand-text-mid">
            State (optional)
          </label>
          <select
            id="finder-state"
            value={stateSlug}
            onChange={(e) => setStateSlug(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            <option value="">Any state</option>
            {States.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-mid">
            Carrier availability varies by state. Confirm availability with the carrier.
          </p>
        </div>

        <div className="md:col-span-2">
          <span className="mb-2 block text-sm font-medium text-brand-text-mid">
            Coverage priorities (optional — choose any)
          </span>
          <div className="flex flex-wrap gap-2">
            {PRIORITIES.map((p) => {
              const on = selected.includes(p.id)
              return (
                <button
                  key={p.id}
                  type="button"
                  aria-pressed={on}
                  onClick={() => togglePriority(p.id)}
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold transition ${
                    on
                      ? 'border-brand-primary bg-brand-primary text-white'
                      : 'border-brand-border bg-brand-surface text-brand-text-mid hover:text-brand-text-dark'
                  }`}
                >
                  {p.label}
                </button>
              )
            })}
          </div>
          <p className="mt-2 text-xs text-brand-text-mid">
            Each priority filters to carriers whose published policy options include that feature. Selecting
            more narrows the set; we never invent a feature a carrier does not publish.
          </p>
        </div>
      </div>

      {/* ── Not-advice line (prominent) ────────────────────────────────── */}
      <p className="mt-6 rounded border border-brand-border bg-brand-primary-pale/50 p-3 text-xs leading-relaxed text-brand-text-dark">
        This tool compares published policy options; it is not personalized insurance or financial advice.
        Confirm details and pricing directly with the carrier.
      </p>

      {/* ── State caveat banner ────────────────────────────────────────── */}
      {result.stateLimited && (
        <div className="mt-4 rounded border border-brand-warning/40 bg-amber-950/10 p-3 text-xs leading-relaxed text-brand-text-dark">
          <strong className="font-semibold">Limited carrier availability in this state.</strong>{' '}
          We are showing only carriers licensed across all states; carriers with partial-state availability are
          hidden here. {result.stateCaveat}
        </div>
      )}
      {!result.stateLimited && result.unavailableCarriers.length > 0 && (
        <div className="mt-4 rounded border border-brand-border bg-brand-surface p-3 text-xs leading-relaxed text-brand-text-mid">
          <strong className="font-semibold text-brand-text-dark">State note:</strong>{' '}
          Reported availability gaps in this state: {result.unavailableCarriers.join('; ')}. Confirm with the
          carrier before purchasing.
        </div>
      )}

      {/* ── Results header ─────────────────────────────────────────────── */}
      <div className="mt-6">
        <h3 className="font-display text-lg font-bold text-brand-text-dark">
          Options that may fit, given your priorities
        </h3>
        <p className="mt-1 text-sm text-brand-text-mid">
          {result.carriers.length} carrier{result.carriers.length === 1 ? '' : 's'} to compare.{' '}
          {result.relaxed
            ? 'No carrier matched every priority, so these are the closest matches — ordered by how many of your priorities each one covers.'
            : 'Ordered by how many of your selected priorities each one covers. This is a grouping, not a ranking of quality.'}
        </p>
      </div>

      {/* ── Disclosure ABOVE the carrier CTAs ──────────────────────────── */}
      <div className="mt-4">
        <AffiliateDisclosure variant="inline" siteId="vets-co" />
      </div>

      {/* ── Carrier cards ──────────────────────────────────────────────── */}
      <div
        className="mt-4 grid grid-cols-1 gap-4"
        role="region"
        aria-live="polite"
        aria-label="Insurance carrier results"
      >
        {result.carriers.map((c) => {
          const chips = result.matchedChips[c.slug] ?? []
          const reason = result.pinReason[c.slug]
          const stateNote =
            c.states === 'all-50'
              ? 'Licensed in all 50 states'
              : c.states === 'most'
                ? 'Available in most states — confirm yours'
                : 'Limited state availability — confirm yours'
          return (
            <div key={c.slug} className="rounded-lg border border-brand-border bg-brand-white p-5">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <div>
                  <h4 className="font-display text-base font-bold text-brand-text-dark">{c.name}</h4>
                  <p className="mt-0.5 text-sm text-brand-text-mid">{c.tagline}</p>
                </div>
                <span className="text-2xs font-semibold uppercase tracking-eyebrow text-brand-primary-dark">
                  {stateNote}
                </span>
              </div>

              {chips.length > 0 && (
                <div className="mt-3 flex flex-wrap gap-1.5">
                  {chips.map((chip) => (
                    <span
                      key={chip}
                      className="rounded-full border border-brand-primary/40 bg-brand-primary-pale/60 px-2.5 py-1 text-2xs font-semibold text-brand-primary-dark"
                    >
                      {chip}
                    </span>
                  ))}
                </div>
              )}

              <dl className="mt-3 grid grid-cols-1 gap-x-6 gap-y-1.5 text-xs sm:grid-cols-2">
                <div className="flex justify-between gap-2">
                  <dt className="text-brand-text-mid">Reimbursement options</dt>
                  <dd className="font-medium text-brand-text-dark">{reimbursementLabel(c.reimbursementOptions)}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-brand-text-mid">Deductible options</dt>
                  <dd className="font-medium text-brand-text-dark">{deductibleLabel(c.deductibleOptions)}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-brand-text-mid">Annual limit options</dt>
                  <dd className="font-medium text-brand-text-dark">{annualLimitLabel(c.annualLimitOptions)}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-brand-text-mid">Dental</dt>
                  <dd className="font-medium text-brand-text-dark">{dentalLabel(c.coversDental)}</dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-brand-text-mid">Exam fees</dt>
                  <dd className="font-medium text-brand-text-dark">
                    {c.coversExamFees === true ? 'Covered' : c.coversExamFees === 'addon' ? 'Add-on' : 'Not covered'}
                  </dd>
                </div>
                <div className="flex justify-between gap-2">
                  <dt className="text-brand-text-mid">Waiting (accident / illness / ortho)</dt>
                  <dd className="font-medium text-brand-text-dark">
                    {c.waitingPeriods.accident} / {c.waitingPeriods.illness} / {c.waitingPeriods.orthopedic}
                  </dd>
                </div>
              </dl>

              {reason && (
                <p className="mt-3 rounded border border-brand-border bg-brand-surface p-3 text-xs leading-relaxed text-brand-text-dark">
                  <strong className="font-semibold">Breed coverage consideration:</strong> {reason}
                </p>
              )}

              <p className="mt-3 text-xs leading-relaxed text-brand-text-mid">{c.editorialNote}</p>

              <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
                <a
                  href={reviewsHref}
                  className="inline-block shrink-0 rounded border border-brand-border px-4 py-2 text-center text-sm font-semibold text-brand-text-dark transition-colors hover:border-brand-primary"
                >
                  Compare on published terms →
                </a>
                <a
                  href={`/go/${c.vendor}/${campaignSku}`}
                  rel="sponsored noopener"
                  className="inline-block shrink-0 rounded bg-brand-primary px-4 py-2 text-center text-sm font-bold text-white transition-colors hover:bg-brand-primary-light"
                >
                  Visit {c.name}
                </a>
              </div>
            </div>
          )
        })}
      </div>

      <p className="mt-5 text-xs leading-relaxed text-brand-text-mid">
        Coverage facts are from each carrier&apos;s published policy options as recorded by the Vets.co editorial
        team. They are not a quote. Premiums, eligibility, and exclusions depend on your pet and state — confirm
        every detail against the carrier&apos;s Sample Policy and Schedule of Benefits before purchasing.
      </p>
    </div>
  )
}
