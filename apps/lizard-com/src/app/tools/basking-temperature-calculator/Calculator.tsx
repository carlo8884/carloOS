'use client'

import { useState, useMemo } from 'react'

type Unit = 'F' | 'C'

interface TempTarget {
  label: string
  fergusonZone: number | string
  /** Basking surface target [low, high] in °F */
  baskingF: [number, number]
  /** Cool-side ambient [low, high] in °F */
  coolF: [number, number]
  /** Night-drop floor [low, high] in °F */
  nightF: [number, number]
  note: string
}

// Targets curated from published husbandry references and Ferguson-zone
// temperature guidance (see page Sources). Ranges, not false precision.
const SPECIES: Record<string, TempTarget> = {
  'bearded-dragon': {
    label: 'Bearded dragon',
    fergusonZone: 4,
    baskingF: [95, 110],
    coolF: [75, 85],
    nightF: [65, 75],
    note: 'Hot open-desert basker. Juveniles favour the upper basking range; verify with a probe at the basking surface, not an air reading.',
  },
  'leopard-gecko': {
    label: 'Leopard gecko',
    fergusonZone: 1,
    baskingF: [88, 92],
    coolF: [72, 78],
    nightF: [65, 72],
    note: 'Ground-dwelling crepuscular gecko. Belly heat matters — a warm hide over the basking zone is more useful than an overhead spot.',
  },
  'crested-gecko': {
    label: 'Crested gecko',
    fergusonZone: 2,
    baskingF: [72, 78],
    coolF: [68, 74],
    nightF: [65, 72],
    note: 'Cool-running arboreal species. Sustained temperatures above ~82°F are stressful; often kept without a dedicated basking lamp.',
  },
  'blue-tongued-skink': {
    label: 'Blue-tongued skink',
    fergusonZone: 3,
    baskingF: [95, 105],
    coolF: [75, 82],
    nightF: [65, 75],
    note: 'Terrestrial omnivore needing a strong floor-level gradient and a warm basking surface to drive digestion.',
  },
  'veiled-chameleon': {
    label: 'Veiled chameleon',
    fergusonZone: 3,
    baskingF: [85, 95],
    coolF: [72, 80],
    nightF: [60, 70],
    note: 'Arboreal basker; provide a clear vertical gradient. A meaningful night drop is well tolerated and often beneficial.',
  },
  'panther-chameleon': {
    label: 'Panther chameleon',
    fergusonZone: 3,
    baskingF: [82, 90],
    coolF: [72, 80],
    nightF: [62, 72],
    note: 'Arboreal basker; slightly cooler than a veiled chameleon. Mount the basking spot to avoid thermal burns on a climbing animal.',
  },
  'uromastyx': {
    label: 'Uromastyx',
    fergusonZone: 4,
    baskingF: [110, 130],
    coolF: [80, 90],
    nightF: [70, 80],
    note: 'Extreme desert basker — one of the hottest commonly kept basking targets. A very strong gradient is essential.',
  },
  'corn-snake': {
    label: 'Corn snake',
    fergusonZone: 1,
    baskingF: [85, 90],
    coolF: [72, 78],
    nightF: [65, 72],
    note: 'Temperate colubrid. A belly-heat warm zone (under-tank or radiant) and a clear cool end matter more than a hot overhead spot.',
  },
  'ball-python': {
    label: 'Ball python',
    fergusonZone: 1,
    baskingF: [88, 92],
    coolF: [76, 80],
    nightF: [72, 78],
    note: 'Tropical species — keep the cool side and night floor warmer than for temperate snakes. Avoid letting nights drop below ~72°F.',
  },
  'russian-tortoise': {
    label: 'Russian tortoise',
    fergusonZone: 4,
    baskingF: [95, 100],
    coolF: [70, 80],
    nightF: [60, 70],
    note: 'Terrestrial grazer needing a warm basking surface and a cooler, well-ventilated end. Tolerates a real night drop.',
  },
}

function cFromF(f: number) { return Math.round(((f - 32) * 5) / 9) }
function fmtRange(range: [number, number], unit: Unit) {
  if (unit === 'C') return `${cFromF(range[0])}–${cFromF(range[1])}°C`
  return `${range[0]}–${range[1]}°F`
}

type Verdict = { tone: 'success' | 'warn' | 'neutral'; text: string }

const toneClasses: Record<Verdict['tone'], string> = {
  success: 'border-emerald-700/40 bg-emerald-950/30 text-emerald-200',
  warn: 'border-amber-700/40 bg-amber-950/30 text-amber-200',
  neutral: 'border-brand-border bg-brand-surface text-brand-text-mid',
}

export function BaskingTemperatureCalculator() {
  const speciesKeys = Object.keys(SPECIES)
  const [speciesKey, setSpeciesKey] = useState<string>('bearded-dragon')
  const [unit, setUnit] = useState<Unit>('F')
  const [warmInput, setWarmInput] = useState<string>('')
  const [coolInput, setCoolInput] = useState<string>('')

  const t = SPECIES[speciesKey]

  // Convert user input back to °F for comparison.
  const warmF = useMemo(() => {
    const n = parseFloat(warmInput)
    if (Number.isNaN(n)) return null
    return unit === 'C' ? (n * 9) / 5 + 32 : n
  }, [warmInput, unit])
  const coolF = useMemo(() => {
    const n = parseFloat(coolInput)
    if (Number.isNaN(n)) return null
    return unit === 'C' ? (n * 9) / 5 + 32 : n
  }, [coolInput, unit])

  const warmVerdict = useMemo<Verdict | null>(() => {
    if (warmF === null) return null
    const [lo, hi] = t.baskingF
    if (warmF < lo) return { tone: 'warn', text: `Your basking surface is BELOW the ${fmtRange(t.baskingF, unit)} target. Raise it (lower the lamp, higher-wattage bulb, or move the basking platform closer).` }
    if (warmF > hi) return { tone: 'warn', text: `Your basking surface is ABOVE the ${fmtRange(t.baskingF, unit)} target. Lower it (raise the lamp, lower-wattage bulb, or add a dimming thermostat) to avoid thermal burns.` }
    return { tone: 'success', text: `Your basking surface is within the ${fmtRange(t.baskingF, unit)} target range.` }
  }, [warmF, t, unit])

  const coolVerdict = useMemo<Verdict | null>(() => {
    if (coolF === null) return null
    const [lo, hi] = t.coolF
    if (coolF < lo) return { tone: 'warn', text: `Your cool side is BELOW the ${fmtRange(t.coolF, unit)} target — the animal may have no comfortable retreat from the heat at the right temperature.` }
    if (coolF > hi) return { tone: 'warn', text: `Your cool side is ABOVE the ${fmtRange(t.coolF, unit)} target — there may not be a true thermal gradient. The animal needs somewhere genuinely cooler to thermoregulate.` }
    return { tone: 'success', text: `Your cool side is within the ${fmtRange(t.coolF, unit)} target range.` }
  }, [coolF, t, unit])

  const gradientNote = useMemo<Verdict | null>(() => {
    if (warmF === null || coolF === null) return null
    const spread = warmF - coolF
    if (spread < 10) return { tone: 'warn', text: 'Warm and cool readings are very close together — there is little usable thermal gradient. A reptile thermoregulates by moving between zones, so a flat enclosure offers nowhere to do that.' }
    return { tone: 'neutral', text: `Measured gradient: about ${Math.round(unit === 'C' ? (spread * 5) / 9 : spread)}°${unit} between warm and cool ends. A clear spread lets the animal pick its preferred temperature.` }
  }, [warmF, coolF, unit])

  const inputClass = 'w-full rounded border border-brand-border bg-brand-surface px-3 py-2 text-brand-text-dark text-sm'
  const labelClass = 'mb-1 block text-sm font-medium text-brand-text-mid'

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <div>
          <label htmlFor="temp-species" className={labelClass}>Species</label>
          <select
            id="temp-species"
            value={speciesKey}
            onChange={(e) => setSpeciesKey(e.target.value)}
            className={inputClass}
          >
            {speciesKeys.map((k) => (
              <option key={k} value={k}>{SPECIES[k].label}</option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="temp-unit" className={labelClass}>Unit</label>
          <select
            id="temp-unit"
            value={unit}
            onChange={(e) => setUnit(e.target.value as Unit)}
            className={inputClass}
          >
            <option value="F">Fahrenheit (°F)</option>
            <option value="C">Celsius (°C)</option>
          </select>
        </div>
      </div>

      {/* Target output */}
      <div className="mt-6 rounded border border-brand-border bg-brand-surface p-4">
        <div className="text-xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
          {t.label} temperature targets · Ferguson Zone {t.fergusonZone}
        </div>
        <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 text-center">
          <div className="rounded border border-brand-border/50 p-3">
            <div className="text-xs text-brand-text-mid mb-1">Basking surface</div>
            <div className="text-lg font-bold text-brand-text-dark">{fmtRange(t.baskingF, unit)}</div>
          </div>
          <div className="rounded border border-brand-border/50 p-3">
            <div className="text-xs text-brand-text-mid mb-1">Cool side</div>
            <div className="text-lg font-bold text-brand-text-dark">{fmtRange(t.coolF, unit)}</div>
          </div>
          <div className="rounded border border-brand-border/50 p-3">
            <div className="text-xs text-brand-text-mid mb-1">Night drop (floor)</div>
            <div className="text-lg font-bold text-brand-text-dark">{fmtRange(t.nightF, unit)}</div>
          </div>
        </div>
        <p className="mt-3 text-sm text-brand-text-mid">{t.note}</p>
      </div>

      {/* Gradient check */}
      <div className="mt-6">
        <p className="mb-3 text-sm font-semibold text-brand-text-dark">Check your gradient (optional)</p>
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label htmlFor="temp-warm" className={labelClass}>Measured basking temp (°{unit})</label>
            <input
              id="temp-warm"
              type="number"
              value={warmInput}
              onChange={(e) => setWarmInput(e.target.value)}
              className={inputClass}
              placeholder={unit === 'C' ? 'e.g. 40' : 'e.g. 105'}
            />
          </div>
          <div>
            <label htmlFor="temp-cool" className={labelClass}>Measured cool-side temp (°{unit})</label>
            <input
              id="temp-cool"
              type="number"
              value={coolInput}
              onChange={(e) => setCoolInput(e.target.value)}
              className={inputClass}
              placeholder={unit === 'C' ? 'e.g. 27' : 'e.g. 80'}
            />
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {warmVerdict && (
            <div className={`rounded border p-3 text-sm ${toneClasses[warmVerdict.tone]}`}>
              <strong>Basking surface:</strong> {warmVerdict.text}
            </div>
          )}
          {coolVerdict && (
            <div className={`rounded border p-3 text-sm ${toneClasses[coolVerdict.tone]}`}>
              <strong>Cool side:</strong> {coolVerdict.text}
            </div>
          )}
          {gradientNote && (
            <div className={`rounded border p-3 text-sm ${toneClasses[gradientNote.tone]}`}>
              {gradientNote.text}
            </div>
          )}
        </div>
      </div>

      <div className="mt-6 rounded border border-brand-border/40 bg-brand-surface/50 p-4 text-sm text-brand-text-mid">
        <p>
          <strong className="text-brand-text-dark">Measure at the surface, not the air.</strong> Take the basking
          reading with a probe or infrared thermometer at the exact spot the animal sits — not an air temperature near
          the lamp. Always control basking heat with a thermostat to prevent thermal burns and overheating. These are
          husbandry targets; for an animal showing signs of heat stress or illness, consult a reptile veterinarian.
        </p>
      </div>
    </div>
  )
}
