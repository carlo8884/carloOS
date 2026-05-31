'use client'

import { useMemo, useState } from 'react'

type Orientation = 'terrestrial' | 'arboreal' | 'mixed' | 'aquatic-semi'

interface SpeciesEnclosure {
  slug: string
  name: string
  orientation: Orientation
  /** Single-adult minimum length × width × height in inches. */
  minimum: [number, number, number]
  /** Single-adult recommended length × width × height in inches. */
  recommended: [number, number, number]
  /** Notes specific to husbandry: outdoor recommended, brumation room, etc. */
  notes: string[]
  /** Approximate adult lifespan upper bound; informs the long-term commitment framing. */
  adultLifespanYears: number
}

const SPECIES: SpeciesEnclosure[] = [
  { slug: 'bearded-dragon', name: 'Bearded dragon', orientation: 'terrestrial', minimum: [48, 24, 24], recommended: [72, 24, 24], notes: ['Front-opening PVC enclosure preferred over glass tank.'], adultLifespanYears: 12 },
  { slug: 'uromastyx', name: 'Uromastyx (Mali / Ornate / Egyptian)', orientation: 'terrestrial', minimum: [48, 24, 18], recommended: [72, 36, 18], notes: ['Arid, high basking temperature (120-130°F at basking surface).', 'Soft sand or millet seed substrate.'], adultLifespanYears: 25 },
  { slug: 'leopard-gecko', name: 'Leopard gecko', orientation: 'terrestrial', minimum: [36, 18, 18], recommended: [48, 24, 18], notes: ['Three hides required (warm, humid, cool).', 'Floor space matters more than height.'], adultLifespanYears: 20 },
  { slug: 'crested-gecko', name: 'Crested gecko', orientation: 'arboreal', minimum: [18, 18, 24], recommended: [18, 18, 36], notes: ['Vertically oriented; lots of climbing surface.', 'Bioactive setup well-suited to species.'], adultLifespanYears: 20 },
  { slug: 'gargoyle-gecko', name: 'Gargoyle gecko', orientation: 'arboreal', minimum: [18, 18, 24], recommended: [18, 18, 36], notes: ['Slightly more terrestrial than crested; provide some floor branches.'], adultLifespanYears: 20 },
  { slug: 'day-gecko', name: 'Day gecko (Phelsuma)', orientation: 'arboreal', minimum: [18, 18, 24], recommended: [24, 18, 36], notes: ['Highly arboreal; vertical bamboo or cork tube climbing structure.', 'High humidity; UVB required.'], adultLifespanYears: 15 },
  { slug: 'panther-chameleon', name: 'Panther chameleon', orientation: 'arboreal', minimum: [24, 24, 48], recommended: [36, 24, 48], notes: ['Mesh / screen enclosure with dripping water source.', 'Heavy planting required for visual security.'], adultLifespanYears: 7 },
  { slug: 'veiled-chameleon', name: 'Veiled chameleon', orientation: 'arboreal', minimum: [24, 24, 48], recommended: [36, 24, 48], notes: ['Mesh enclosure preferred for airflow.', 'Drinking via dripper or mister; ignores standing water.'], adultLifespanYears: 7 },
  { slug: 'frilled-dragon', name: 'Frilled dragon', orientation: 'arboreal', minimum: [36, 24, 48], recommended: [48, 24, 60], notes: ['Tall enclosure with strong horizontal branches.', 'Very arboreal as adults.'], adultLifespanYears: 12 },
  { slug: 'tegu', name: 'Tegu (Black & White / Red)', orientation: 'terrestrial', minimum: [72, 36, 30], recommended: [96, 48, 36], notes: ['Large powerful lizard — enclosure is custom-built furniture-grade.', 'Brumation room required (5-6 months of cooler dormancy).'], adultLifespanYears: 20 },
  { slug: 'savannah-monitor', name: 'Savannah monitor', orientation: 'terrestrial', minimum: [72, 36, 36], recommended: [96, 48, 36], notes: ['Deep substrate (24"+ of dig-able soil mix) is non-negotiable.', 'High calcium and protein husbandry; vet-monitored.'], adultLifespanYears: 12 },
  { slug: 'blue-tongued-skink', name: 'Blue-tongued skink (Northern)', orientation: 'terrestrial', minimum: [48, 24, 18], recommended: [72, 24, 18], notes: ['Floor space-driven; minimal vertical climbing.', 'Deep substrate for burrowing.'], adultLifespanYears: 20 },
  { slug: 'ball-python', name: 'Ball python', orientation: 'terrestrial', minimum: [48, 24, 16], recommended: [72, 24, 24], notes: ['Front-opening PVC enclosure; two hides + clutter for security.', 'Provide low-level UVB per Ferguson Zone 1 guidance.'], adultLifespanYears: 30 },
  { slug: 'corn-snake', name: 'Corn snake', orientation: 'terrestrial', minimum: [48, 18, 12], recommended: [72, 24, 18], notes: ['Climbing branches appreciated; corn snakes are semi-arboreal.', 'Escape-proof lid is critical.'], adultLifespanYears: 20 },
  { slug: 'boa-constrictor', name: 'Boa constrictor (Common)', orientation: 'terrestrial', minimum: [72, 36, 24], recommended: [96, 36, 36], notes: ['Adult boas are large; plan enclosure as furniture.', 'Strong branches for partial climbing.'], adultLifespanYears: 30 },
  { slug: 'tokay-gecko', name: 'Tokay gecko', orientation: 'arboreal', minimum: [24, 18, 36], recommended: [24, 24, 48], notes: ['Highly defensive; not a handling species.', 'Bamboo tubes + cork bark for hiding.'], adultLifespanYears: 15 },
  { slug: 'mossy-leaf-tail-gecko', name: 'Mossy leaf-tail gecko', orientation: 'arboreal', minimum: [18, 18, 24], recommended: [24, 18, 36], notes: ['Cool tropical (65-75°F), high humidity (80%+).', 'Cork bark slabs for camouflage roosting.'], adultLifespanYears: 12 },
  { slug: 'russian-tortoise', name: 'Russian tortoise', orientation: 'terrestrial', minimum: [96, 48, 12], recommended: [120, 60, 12], notes: ['Outdoor enclosure recommended seasonally.', 'Tortoise tables strongly preferred over glass terrariums.'], adultLifespanYears: 50 },
  { slug: 'sulcata-tortoise', name: 'Sulcata tortoise', orientation: 'terrestrial', minimum: [144, 96, 24], recommended: [240, 240, 24], notes: ['Outdoor pen of 80+ sq ft for adults; substantial indoor heated shelter for cold seasons.', 'Adults reach 100+ lbs; not a small-home species.'], adultLifespanYears: 80 },
]

function dim([l, w, h]: [number, number, number]): string {
  return `${l}" L × ${w}" W × ${h}" H`
}

function squareFeet([l, w]: [number, number, number]): number {
  return Math.round((l * w) / 144)
}

export function EnclosureSizeCalculator() {
  const [speciesSlug, setSpeciesSlug] = useState<string>('bearded-dragon')
  const [count, setCount] = useState<number>(1)

  const species = useMemo(() => SPECIES.find((s) => s.slug === speciesSlug) ?? SPECIES[0], [speciesSlug])

  // Group-housing scale-up: most species are solitary; for those that tolerate
  // pairs/groups, conservative practice is +50% floor area per additional
  // animal, with separate basking sites and resources.
  const scale = count === 1 ? 1 : 1 + (count - 1) * 0.5
  const scaledMin: [number, number, number] = [
    Math.ceil(species.minimum[0] * Math.sqrt(scale)),
    Math.ceil(species.minimum[1] * Math.sqrt(scale)),
    species.minimum[2],
  ]
  const scaledRec: [number, number, number] = [
    Math.ceil(species.recommended[0] * Math.sqrt(scale)),
    Math.ceil(species.recommended[1] * Math.sqrt(scale)),
    species.recommended[2],
  ]

  const groupWarning = count > 1
    ? species.slug === 'leopard-gecko' || species.slug === 'ball-python' || species.slug === 'savannah-monitor' || species.slug === 'tegu' || species.slug === 'boa-constrictor' || species.slug === 'tokay-gecko'
      ? `Most ${species.name.toLowerCase()}s are solitary in captivity. Cohabitation is high-risk for stress, food competition, and injury. Single housing strongly recommended.`
      : `Group housing requires significantly more floor area, multiple basking sites, multiple hide options, and ongoing welfare monitoring. The recommendations below scale from the single-adult baseline; verify against current keeper literature for the species.`
    : null

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="enc-species" className="mb-2 block text-sm font-medium text-brand-text-muted">
            Species
          </label>
          <select
            id="enc-species"
            value={speciesSlug}
            onChange={(e) => setSpeciesSlug(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text"
          >
            {SPECIES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-muted">
            Orientation: {species.orientation}. Adult lifespan up to {species.adultLifespanYears} years — plan housing as a long-term commitment.
          </p>
        </div>

        <div>
          <label htmlFor="enc-count" className="mb-2 block text-sm font-medium text-brand-text-muted">
            Number of animals in this enclosure
          </label>
          <input
            id="enc-count"
            type="number"
            min={1}
            max={6}
            step={1}
            value={count}
            onChange={(e) => setCount(Math.max(1, Math.min(6, Number(e.target.value) || 1)))}
            className="w-full rounded border border-brand-border bg-brand-bg px-3 py-2 text-brand-text"
          />
          <p className="mt-1 text-xs text-brand-text-muted">
            Most species are solitary in captivity. Read the FAQ before planning group housing.
          </p>
        </div>
      </div>

      {groupWarning && (
        <div className="mt-6 rounded border border-amber-700/50 bg-amber-950/30 p-4 text-amber-100">
          <p className="text-sm font-semibold">Group-housing caution</p>
          <p className="mt-1 text-sm">{groupWarning}</p>
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div className="rounded border border-brand-border bg-brand-bg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Minimum enclosure</p>
          <p className="mt-1 font-display text-xl text-brand-text">{dim(scaledMin)}</p>
          <p className="mt-1 text-xs text-brand-text-muted">≈ {squareFeet(scaledMin)} sq ft floor area</p>
        </div>
        <div className="rounded border border-brand-border bg-brand-bg p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-brand-text-muted">Recommended enclosure</p>
          <p className="mt-1 font-display text-xl text-brand-text">{dim(scaledRec)}</p>
          <p className="mt-1 text-xs text-brand-text-muted">≈ {squareFeet(scaledRec)} sq ft floor area</p>
        </div>
      </div>

      {species.notes.length > 0 && (
        <div className="mt-6 rounded border border-brand-border bg-brand-bg p-4 text-sm text-brand-text-muted">
          <p className="font-semibold text-brand-text">Species-specific notes</p>
          <ul className="mt-2 list-disc space-y-1 pl-5">
            {species.notes.map((note, i) => (
              <li key={i}>{note}</li>
            ))}
          </ul>
        </div>
      )}

      <p className="mt-4 text-xs text-brand-text-muted">
        Minimums reference keeper-literature standards (ARAV, AAV, peer-reviewed care sheets). Recommended dimensions reflect modern keeper consensus on enclosures that support natural behavior. Larger is essentially always better.
      </p>
    </div>
  )
}
