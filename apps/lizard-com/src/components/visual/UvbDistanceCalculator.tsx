'use client'

import { useMemo, useState } from 'react'

type FergusonZone = 1 | 2 | 3 | 4

interface Species {
  slug: string
  name: string
  zone: FergusonZone
  habitat: string
}

const SPECIES: Species[] = [
  { slug: 'bearded-dragon', name: 'Bearded dragon', zone: 4, habitat: 'Desert / arid open basker' },
  { slug: 'uromastyx', name: 'Uromastyx', zone: 4, habitat: 'Desert / arid open basker' },
  { slug: 'sulcata-tortoise', name: 'Sulcata tortoise', zone: 4, habitat: 'Open-sun grassland' },
  { slug: 'russian-tortoise', name: 'Russian tortoise', zone: 3, habitat: 'Arid steppe basker' },
  { slug: 'savannah-monitor', name: 'Savannah monitor', zone: 3, habitat: 'Open savanna basker' },
  { slug: 'blue-tongued-skink', name: 'Blue-tongued skink (Northern)', zone: 3, habitat: 'Arid / semi-arid basker' },
  { slug: 'panther-chameleon', name: 'Panther chameleon', zone: 3, habitat: 'Tropical forest canopy basker' },
  { slug: 'veiled-chameleon', name: 'Veiled chameleon', zone: 3, habitat: 'Tropical forest canopy basker' },
  { slug: 'day-gecko', name: 'Day gecko', zone: 3, habitat: 'Tropical forest basker' },
  { slug: 'frilled-dragon', name: 'Frilled dragon', zone: 3, habitat: 'Tropical woodland basker' },
  { slug: 'tegu', name: 'Tegu', zone: 3, habitat: 'Tropical / subtropical basker' },
  { slug: 'crested-gecko', name: 'Crested gecko', zone: 2, habitat: 'Tropical forest, shade-dwelling' },
  { slug: 'gargoyle-gecko', name: 'Gargoyle gecko', zone: 2, habitat: 'Tropical forest, shade-dwelling' },
  { slug: 'leopard-gecko', name: 'Leopard gecko', zone: 1, habitat: 'Crepuscular ground-dweller' },
  { slug: 'ball-python', name: 'Ball python', zone: 1, habitat: 'Crepuscular, dense cover' },
  { slug: 'corn-snake', name: 'Corn snake', zone: 1, habitat: 'Crepuscular, dense cover' },
  { slug: 'tokay-gecko', name: 'Tokay gecko', zone: 1, habitat: 'Nocturnal forest' },
  { slug: 'mossy-leaf-tail-gecko', name: 'Mossy leaf-tail gecko', zone: 1, habitat: 'Nocturnal forest' },
  { slug: 'boa-constrictor', name: 'Boa constrictor', zone: 1, habitat: 'Crepuscular, dense forest cover' },
]

const ZONE_TARGETS: Record<FergusonZone, { label: string; min: number; max: number; description: string }> = {
  1: { label: 'Zone 1 — Crepuscular / shade-dweller', min: 0, max: 1.0, description: 'Low-level UVB recommended at the basking surface. Recent literature supports low-level UVB even for species historically housed without it.' },
  2: { label: 'Zone 2 — Partial-sun thermoregulator', min: 0.7, max: 1.5, description: 'Forest / canopy thermoregulator; moderate UVI at the highest perch the animal regularly uses.' },
  3: { label: 'Zone 3 — Open / partial-sun basker', min: 1.0, max: 2.6, description: 'Most tropical and semi-arid lizards. Target UVI at the basking surface.' },
  4: { label: 'Zone 4 — Mid-day full-sun basker', min: 2.6, max: 4.5, description: 'Desert / arid open baskers. Target UVI at the basking surface during peak photoperiod.' },
}

interface Bulb {
  id: string
  label: string
  baseUviAt12in: number
  notes: string
}

const BULBS: Bulb[] = [
  { id: 't5-12', label: 'T5 HO linear — 12% (Desert)', baseUviAt12in: 4.5, notes: 'Arc-Z 14% / Reptisun T5 HO 12% class' },
  { id: 't5-10', label: 'T5 HO linear — 10% (Desert)', baseUviAt12in: 3.5, notes: 'Arc-Z 12% / Reptisun T5 HO 10% class' },
  { id: 't5-6', label: 'T5 HO linear — 6% (Tropical)', baseUviAt12in: 2.0, notes: 'Reptisun T5 HO 6% class' },
  { id: 't5-5', label: 'T5 HO linear — 5% (Forest)', baseUviAt12in: 1.6, notes: 'Reptisun T5 HO 5% class' },
  { id: 't8-10', label: 'T8 linear — 10%', baseUviAt12in: 1.2, notes: 'Lower output than T5 HO equivalents' },
  { id: 'compact-10', label: 'Compact / coil — 10%', baseUviAt12in: 1.5, notes: 'Narrow cone; rapid distance falloff' },
  { id: 'compact-5', label: 'Compact / coil — 5%', baseUviAt12in: 0.6, notes: 'Narrow cone; rapid distance falloff' },
  { id: 'mvb-160', label: 'Mercury-vapor (160W) — open canopy', baseUviAt12in: 5.0, notes: 'Vendor-dependent; verify with meter' },
]

type ScreenAttenuation = 'none' | 'fine-mesh' | 'coarse-mesh' | 'glass'

const SCREEN: Record<ScreenAttenuation, { label: string; factor: number; note: string }> = {
  none: { label: 'No screen between bulb and basking surface', factor: 1.0, note: 'Bulb mounted inside enclosure or above open top.' },
  'coarse-mesh': { label: 'Coarse mesh (1/2" or larger)', factor: 0.7, note: 'Attenuates roughly 25-35%.' },
  'fine-mesh': { label: 'Fine mesh (1/4" or smaller)', factor: 0.5, note: 'Attenuates roughly 40-55%.' },
  glass: { label: 'Glass top or glass panel', factor: 0, note: 'Glass blocks essentially the entire UVB band. Output at the animal is ~0 regardless of bulb.' },
}

function estimateUvi(bulb: Bulb, distanceInches: number, screen: ScreenAttenuation): number | null {
  if (screen === 'glass') return 0
  if (distanceInches <= 0) return null
  const distanceFactor = (12 / distanceInches) ** 2
  const raw = bulb.baseUviAt12in * distanceFactor * SCREEN[screen].factor
  return Math.round(raw * 10) / 10
}

interface Verdict {
  tone: 'success' | 'warn' | 'danger' | 'neutral'
  headline: string
  detail: string
}

function buildVerdict(uvi: number | null, zone: FergusonZone): Verdict {
  if (uvi === null) {
    return {
      tone: 'neutral',
      headline: 'Enter a mounting distance to estimate.',
      detail: 'Distance is the dominant variable for UVB output at the basking surface.',
    }
  }
  const target = ZONE_TARGETS[zone]
  if (uvi === 0) {
    return {
      tone: 'danger',
      headline: 'Estimated UVI at basking surface: 0',
      detail: 'Glass blocks essentially the entire UVB band. Use mesh or an open top with the bulb mounted inside or above the gap.',
    }
  }
  if (uvi < target.min - 0.2) {
    return {
      tone: 'warn',
      headline: `Estimated UVI ${uvi} — under Zone ${zone} target (${target.min}-${target.max})`,
      detail: 'Move the bulb closer to the basking site, step up bulb strength, or switch from compact/T8 to T5 HO. UVB output drops with the square of distance.',
    }
  }
  if (uvi > target.max + 0.5) {
    return {
      tone: 'warn',
      headline: `Estimated UVI ${uvi} — over Zone ${zone} target (${target.min}-${target.max})`,
      detail: 'Raise the bulb, reduce bulb strength, or add a partial shade structure. Sustained overdose risks photo-kerato-conjunctivitis.',
    }
  }
  return {
    tone: 'success',
    headline: `Estimated UVI ${uvi} — within Zone ${zone} target (${target.min}-${target.max})`,
    detail: 'Verify with a Solarmeter 6.5 at install and quarterly thereafter. Bulb output decays well before visible light fades.',
  }
}

const toneClasses: Record<Verdict['tone'], string> = {
  success: 'border-emerald-700/40 bg-emerald-950/30 text-emerald-200',
  warn: 'border-amber-700/40 bg-amber-950/30 text-amber-200',
  danger: 'border-red-700/40 bg-red-950/30 text-red-200',
  neutral: 'border-brand-border bg-brand-surface text-brand-text-mid ring-1 ring-white/8',
}

export function UvbDistanceCalculator() {
  const [speciesSlug, setSpeciesSlug] = useState<string>('bearded-dragon')
  const [bulbId, setBulbId] = useState<string>('t5-12')
  const [distance, setDistance] = useState<number>(12)
  const [screen, setScreen] = useState<ScreenAttenuation>('none')

  const species = useMemo(() => SPECIES.find((s) => s.slug === speciesSlug) ?? SPECIES[0], [speciesSlug])
  const bulb = useMemo(() => BULBS.find((b) => b.id === bulbId) ?? BULBS[0], [bulbId])
  const target = ZONE_TARGETS[species.zone]
  const uvi = useMemo(() => estimateUvi(bulb, distance, screen), [bulb, distance, screen])
  const verdict = useMemo(() => buildVerdict(uvi, species.zone), [uvi, species.zone])

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="uvb-species" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Species
          </label>
          <select
            id="uvb-species"
            value={speciesSlug}
            onChange={(e) => setSpeciesSlug(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {SPECIES.map((s) => (
              <option key={s.slug} value={s.slug}>
                {s.name} — Zone {s.zone}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-mid">{species.habitat}</p>
        </div>

        <div>
          <label htmlFor="uvb-bulb" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Bulb type &amp; strength
          </label>
          <select
            id="uvb-bulb"
            value={bulbId}
            onChange={(e) => setBulbId(e.target.value)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {BULBS.map((b) => (
              <option key={b.id} value={b.id}>
                {b.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-mid">{bulb.notes}</p>
        </div>

        <div>
          <label htmlFor="uvb-distance" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Distance from bulb to basking surface (inches)
          </label>
          <input
            id="uvb-distance"
            type="number"
            min={1}
            max={36}
            step={1}
            value={distance}
            onChange={(e) => setDistance(Math.max(1, Number(e.target.value) || 0))}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          />
          <p className="mt-1 text-xs text-brand-text-mid">
            Measure to the surface the animal actually occupies — top of the basking branch, top of the slate, etc. Not the floor.
          </p>
        </div>

        <div>
          <label htmlFor="uvb-screen" className="mb-2 block text-sm font-medium text-brand-text-mid">
            Screen / barrier between bulb and basking surface
          </label>
          <select
            id="uvb-screen"
            value={screen}
            onChange={(e) => setScreen(e.target.value as ScreenAttenuation)}
            className="w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark"
          >
            {(Object.entries(SCREEN) as Array<[ScreenAttenuation, (typeof SCREEN)[ScreenAttenuation]]>).map(([key, val]) => (
              <option key={key} value={key}>
                {val.label}
              </option>
            ))}
          </select>
          <p className="mt-1 text-xs text-brand-text-mid">{SCREEN[screen].note}</p>
        </div>
      </div>

      <div className={`mt-6 rounded border p-4 ${toneClasses[verdict.tone]}`}>
        <p className="text-base font-semibold">{verdict.headline}</p>
        <p className="mt-1 text-sm">{verdict.detail}</p>
      </div>

      <div className="mt-6 rounded border border-brand-border bg-brand-surface p-4 text-sm text-brand-text-mid">
        <p className="font-semibold text-brand-text-dark">{target.label}</p>
        <p className="mt-1">{target.description}</p>
        <p className="mt-2">
          Target UVI range at basking surface: <span className="text-brand-text-dark">{target.min}-{target.max}</span>.
        </p>
      </div>
    </div>
  )
}
