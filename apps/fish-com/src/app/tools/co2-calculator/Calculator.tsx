'use client'

/**
 * Planted-tank CO2 calculator — /tools/co2-calculator
 *
 * Two modes:
 *   1. Dosing (default) — tank volume + plant density + pressurized vs liquid
 *      carbon → starting bubble rate, diffuser size, drop-checker range, or
 *      a typical liquid-carbon daily ml. Starting points only; drop checker
 *      and fish behavior are the real control.
 *   2. KH/pH — dissolved CO2 ppm from carbonate hardness and pH.
 *
 * Classic planted-tank formula: CO2 (ppm) = 3 × KH(dKH) × 10^(7 - pH)
 * (The 3× coefficient is for KH in degrees/dKH — matches the standard CO2/pH/KH
 * reference chart, e.g. 4 dKH @ pH 6.6 → ~30 ppm. Do NOT use the meq/L
 * coefficient here: the input is dKH, so that would overstate CO2 ~4.3×.)
 * Caveat: assumes only carbonate buffer. Phosphate buffers and discus buffers throw this off.
 *
 * Product-maintenance guidance only. Shop hops reuse live amazon-brand queries.
 */

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel, UnitToggle } from '../_components/CalcShell'
import { ResultCTA } from '../_components/ResultCTA'

type Mode = 'dosing' | 'khph'
type Unit = 'gal' | 'L'
type Density = 'low' | 'medium' | 'high'
type Method = 'pressurized' | 'liquid'

const GAL_TO_L = 3.785
/** Hobby starting heuristic: ~1 bubble/sec per 10 US gallons, then density-scaled. */
const BPS_PER_10_GAL = 1
/** Typical bottle starting point (e.g. Flourish Excel label): 1 ml per 10 US gal/day. */
const ML_PER_10_GAL = 1

const DENSITY: Record<Density, { label: string; mult: number; targetPpm: number; note: string }> = {
  low: {
    label: 'Low / easy plants (anubias, java fern, moss)',
    mult: 0.6,
    targetPpm: 15,
    note: 'Easy plants grow without injection. Light pressurized or liquid carbon is optional.',
  },
  medium: {
    label: 'Medium (typical stem + crypt planted tank)',
    mult: 1.0,
    targetPpm: 25,
    note: 'The usual high-tech community planted target. Lime-green drop checker is the goal.',
  },
  high: {
    label: 'High / carpeting + high light',
    mult: 1.3,
    targetPpm: 30,
    note: 'Carpets and red stems need stable 25–35 ppm and matched light + fertilizer. Ramp slowly.',
  },
}

function classifyCO2(ppm: number): { label: string; tone: 'low' | 'good' | 'high' | 'danger'; explainer: string } {
  if (ppm < 10) {
    return {
      label: 'Below planted-tank target',
      tone: 'low',
      explainer:
        'Most plants want 15–35 ppm CO2 for healthy growth. Below 10 ppm you\'ll see stunted, pale growth and aggressive algae. Increase your CO2 injection rate.',
    }
  }
  if (ppm <= 35) {
    return {
      label: 'Healthy planted-tank range',
      tone: 'good',
      explainer:
        'Target range for most planted tanks. Plants grow well, algae stays in check, and fish are unbothered. Maintain a drop checker showing lime green to confirm.',
    }
  }
  if (ppm <= 50) {
    return {
      label: 'High — watch fish behavior',
      tone: 'high',
      explainer:
        'High CO2. Plants love it but fish start gasping. Watch for fish at the surface or rapid gill movement. Add surface agitation (lily pipe, increase flow) before reducing CO2.',
    }
  }
  return {
    label: 'Dangerous — turn down now',
    tone: 'danger',
    explainer:
      'Above 50 ppm CO2 is acutely toxic to fish and invertebrates. Reduce injection rate immediately. If fish are gasping, agitate the surface aggressively and check for an off-gassing solution.',
  }
}

function gallonsFrom(volume: number, unit: Unit): number {
  return unit === 'gal' ? volume : volume / GAL_TO_L
}

function diffuserForGallons(gal: number): { size: string; note: string } {
  if (gal < 15) {
    return {
      size: 'Nano ceramic (~2 cm) or in-tank atomizer',
      note: 'Small discs dissolve enough for nano tanks. An in-line atomizer also works on a canister or hang-on-back return.',
    }
  }
  if (gal <= 40) {
    return {
      size: 'Standard ceramic disc (2–3 cm) or in-line atomizer',
      note: 'The usual 20–40 gallon planted-tank diffuser. Place opposite the filter outflow so the mist stays in the water longer.',
    }
  }
  if (gal <= 75) {
    return {
      size: 'Large ceramic (3+ cm) or in-line reactor',
      note: 'Bigger tanks need more dissolution surface. An in-line reactor on the canister return is more efficient than a single disc.',
    }
  }
  return {
    size: 'In-line reactor or dual diffuser',
    note: 'Above ~75 gallons a single ceramic disc usually cannot keep up. Use a reactor, or two injection points, and confirm with a drop checker mid-tank.',
  }
}

function roundHalf(n: number): number {
  return Math.round(n * 2) / 2
}

type DosingResult = {
  gallons: number
  targetPpm: number
  dropChecker: string
  dropRange: string
  methodNote: string
  bubbleRate?: string
  dailyMl?: string
  diffuser?: { size: string; note: string }
}

function computeDosing(volume: number, unit: Unit, density: Density, method: Method): DosingResult | null {
  if (volume <= 0) return null
  const gallons = gallonsFrom(volume, unit)
  if (gallons <= 0) return null

  const band = DENSITY[density]
  const diffuser = diffuserForGallons(gallons)
  const targetPpm = band.targetPpm

  if (method === 'liquid') {
    const dailyMl = Math.max(0.5, roundHalf((gallons / 10) * ML_PER_10_GAL))
    return {
      gallons,
      targetPpm,
      dropChecker: 'Not a dissolved-CO2 reading',
      dropRange: 'Blue / green / yellow does not track liquid carbon',
      methodNote:
        'Liquid carbon (glutaraldehyde-based products) is a modest carbon source and algae spot-treatment — not a substitute for pressurized injection on high-light carpets. Follow the bottle; typical starting point is 1 ml per 10 US gallons daily. Overdose stresses vallisneria, some mosses, and shrimp. A drop checker will not turn green from liquid carbon.',
      dailyMl: `${dailyMl} ml / day`,
    }
  }

  const rawBps = (gallons / 10) * BPS_PER_10_GAL * band.mult
  const bps = Math.max(0.5, roundHalf(rawBps))
  return {
    gallons,
    targetPpm,
    dropChecker: 'Lime green on 4 dKH reference (~30 ppm)',
    dropRange: 'Blue = low (<15 ppm) · green = target · yellow = high (>35 ppm)',
    methodNote:
      'Starting bubble rate only. Time the solenoid on ~1 hour before lights and off ~1 hour before lights-out. Pair injection with surface agitation so fish still get oxygen. Ramp over 5–7 days and stop if fish gasp.',
    bubbleRate: `${bps} bps`,
    diffuser,
  }
}

export default function CO2Calculator() {
  const [mode, setMode] = useState<Mode>('dosing')
  const [unit, setUnit] = useState<Unit>('gal')
  const [volume, setVolume] = useState('40')
  const [density, setDensity] = useState<Density>('medium')
  const [method, setMethod] = useState<Method>('pressurized')
  const [kh, setKh] = useState('4')
  const [ph, setPh] = useState('6.8')

  const dosing = useMemo(
    () => computeDosing(parseFloat(volume) || 0, unit, density, method),
    [volume, unit, density, method],
  )

  const khph = useMemo(() => {
    const khN = parseFloat(kh) || 0
    const phN = parseFloat(ph) || 0
    if (khN <= 0 || phN <= 0) return null

    const ppm = 3 * khN * Math.pow(10, 7 - phN)
    const classification = classifyCO2(ppm)
    return { ppm, ...classification }
  }, [kh, ph])

  return (
    <div>
      <UnitToggle
        value={mode}
        onChange={(v) => setMode(v as Mode)}
        options={[
          { value: 'dosing', label: 'Dosing / diffuser' },
          { value: 'khph', label: 'KH / pH → ppm' },
        ]}
      />

      {mode === 'dosing' ? (
        <CalcCard>
          <div className="flex flex-wrap items-center gap-3 mb-2">
            <UnitToggle
              value={unit}
              onChange={(v) => setUnit(v as Unit)}
              options={[
                { value: 'gal', label: 'US gallons' },
                { value: 'L', label: 'Liters' },
              ]}
            />
          </div>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
            <FieldNumber
              label="Tank volume"
              value={volume}
              onChange={setVolume}
              unit={unit === 'gal' ? 'gal' : 'L'}
              min={0}
              step={1}
              hint="Net water volume. Decor and substrate reduce the box label — when in doubt, use the volume calculator."
            />
            <FieldSelect
              label="Plant density"
              value={density}
              onChange={(v) => setDensity(v as Density)}
              options={(Object.entries(DENSITY) as Array<[Density, (typeof DENSITY)[Density]]>).map(([k, v]) => ({
                value: k,
                label: v.label,
              }))}
            />
          </div>
          <FieldSelect
            label="Carbon method"
            value={method}
            onChange={(v) => setMethod(v as Method)}
            options={[
              { value: 'pressurized', label: 'Pressurized CO2 (cylinder + regulator)' },
              { value: 'liquid', label: 'Liquid carbon (Excel-style daily dose)' },
            ]}
          />
          <p className="text-xs text-brand-text-light -mt-2 mb-0">{DENSITY[density].note}</p>
        </CalcCard>
      ) : (
        <CalcCard>
          <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
            <FieldNumber
              label="Carbonate Hardness (KH)"
              value={kh}
              onChange={setKh}
              unit="dKH"
              min={0}
              step={0.1}
              hint="Measure with a liquid KH test kit. Typical planted-tank KH: 3–6 dKH."
            />
            <FieldNumber
              label="pH"
              value={ph}
              onChange={setPh}
              unit="pH"
              min={0}
              step={0.05}
              hint="Measure at the same time as KH. Use a pH pen or freshly calibrated liquid kit."
            />
          </div>
        </CalcCard>
      )}

      {mode === 'dosing' && dosing && (
        <>
          <ResultPanel
            primary={{
              label: method === 'pressurized' ? 'Starting bubble rate' : 'Typical daily liquid carbon',
              value: method === 'pressurized' ? (dosing.bubbleRate ?? '—') : (dosing.dailyMl ?? '—'),
              sub:
                method === 'pressurized'
                  ? `Target ~${dosing.targetPpm} ppm during the photoperiod · ${dosing.gallons.toFixed(0)} gal`
                  : `Follow the bottle · ~${dosing.gallons.toFixed(0)} gal · not a pressurized substitute`,
            }}
            secondary={
              method === 'pressurized'
                ? [
                    { label: 'Target CO2', value: `${dosing.targetPpm} ppm` },
                    { label: 'Drop checker', value: 'Lime green (~30 ppm)' },
                    { label: 'Diffuser', value: dosing.diffuser?.size ?? '—' },
                    { label: 'Safe band', value: '15–35 ppm' },
                  ]
                : [
                    { label: 'Target if you inject later', value: `${dosing.targetPpm} ppm` },
                    { label: 'Drop checker', value: dosing.dropChecker },
                    { label: 'Starting point', value: `${ML_PER_10_GAL} ml / 10 gal` },
                    { label: 'Watch for', value: 'Vallisneria / shrimp stress' },
                  ]
            }
            note={
              <>
                <strong className="text-white/90">{dosing.methodNote}</strong>
                {dosing.diffuser && (
                  <>
                    <br />
                    <br />
                    <em>Diffuser:</em> {dosing.diffuser.note}
                  </>
                )}
                <br />
                <br />
                <em>Drop-checker range:</em> {dosing.dropRange}
              </>
            }
          />
          {method === 'pressurized' ? (
            <ResultCTA
              heading="Shop a regulator, diffuser, and drop checker"
              blurb={
                <>
                  A solenoid regulator, a diffuser sized for this tank, and a 4 dKH drop checker are the three pieces that turn a starting bubble rate into a stable 15–35 ppm range.
                </>
              }
              query="aquarium co2 regulator diffuser drop checker"
              cta="Browse pressurized CO2 kits on Amazon"
              source="tools-co2-calculator"
            />
          ) : (
            <ResultCTA
              heading="Shop liquid carbon for a low-tech boost"
              blurb={
                <>
                  Liquid carbon is a daily dose, not a pressurized substitute. Pair it with easy plants and skip it if you keep sensitive vallisneria or heavy shrimp.
                </>
              }
              query="seachem flourish excel"
              cta="Browse liquid carbon on Amazon"
              source="tools-co2-calculator"
            />
          )}
        </>
      )}

      {mode === 'khph' && khph && khph.ppm > 0 && (
        <>
          <ResultPanel
            primary={{
              label: 'Estimated dissolved CO2',
              value: `${khph.ppm.toFixed(1)} ppm`,
              sub: khph.label,
            }}
            secondary={[
              { label: 'Target range', value: '15–35 ppm' },
              { label: 'Fish stress', value: '> 35 ppm' },
              { label: 'Acute toxicity', value: '> 50 ppm' },
              { label: 'Drop checker', value: 'Lime green ≈ 30 ppm' },
            ]}
            note={
              <>
                <strong className="text-white/90">{khph.explainer}</strong>
                <br /><br />
                <em>Note:</em> The KH/pH formula assumes carbonate is the only buffer. Phosphate-based pH buffers, discus buffers,
                and some commercial water conditioners invalidate this calculation. A drop checker filled with 4dKH reference solution
                + bromothymol blue is the cross-check — lime green = ~30 ppm.
              </>
            }
          />
          {khph.tone === 'low' ? (
            <ResultCTA
              heading="Shop a pressurized CO2 system to reach the planted-tank range"
              blurb={
                <>
                  To lift CO2 toward the 15&ndash;35 ppm target, a regulator, diffuser, and drop checker are the core components.
                </>
              }
              query="aquarium co2 system regulator diffuser"
              cta="Browse CO2 systems on Amazon"
              source="tools-co2"
            />
          ) : (
            <ResultCTA
              heading="Cross-check your CO2 with a drop checker"
              blurb={
                <>
                  With CO2 this high, a drop checker with 4dKH reference solution is the safest way to confirm the real dissolved level before adjusting.
                </>
              }
              query="aquarium co2 drop checker"
              cta="Browse drop checkers on Amazon"
              source="tools-co2"
            />
          )}
        </>
      )}
    </div>
  )
}
