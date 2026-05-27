'use client'

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel, UnitToggle } from '../_components/CalcShell'

type TempUnit = 'F' | 'C'

const HEATER_STEPS = [25, 50, 75, 100, 150, 200, 250, 300, 400, 500, 800]

function pickHeater(watts: number): number {
  for (const w of HEATER_STEPS) if (w >= watts) return w
  return HEATER_STEPS[HEATER_STEPS.length - 1]
}

export default function HeaterWattageCalculator() {
  const [gallons, setGallons] = useState('40')
  const [tempUnit, setTempUnit] = useState<TempUnit>('F')
  const [roomTemp, setRoomTemp] = useState('68')
  const [targetTemp, setTargetTemp] = useState('78')
  const [insulation, setInsulation] = useState<'open' | 'lid' | 'sealed'>('lid')

  const result = useMemo(() => {
    const gal = parseFloat(gallons) || 0
    const room = parseFloat(roomTemp) || 0
    const target = parseFloat(targetTemp) || 0
    if (gal <= 0 || target <= 0) return null

    // Convert to Fahrenheit deltas if in Celsius
    let deltaF = target - room
    if (tempUnit === 'C') {
      deltaF = (target - room) * 9 / 5
    }
    if (deltaF <= 0) return { watts: 0, recommended: 0, heaterPick: 0, deltaF, hint: 'cool' as const }

    // Rule of thumb: 3 watts per gallon for a 10°F lift, scaled linearly.
    // Adjust for insulation (open top loses heat faster).
    const insulationFactor = insulation === 'open' ? 1.2 : insulation === 'sealed' ? 0.85 : 1.0
    const watts = gal * 3 * (deltaF / 10) * insulationFactor

    // Recommend 25% headroom for cold snaps and heater aging
    const recommended = watts * 1.25
    const heaterPick = pickHeater(recommended)

    return { watts, recommended, heaterPick, deltaF, hint: 'heat' as const }
  }, [gallons, roomTemp, targetTemp, tempUnit, insulation])

  return (
    <div>
      <CalcCard>
        <UnitToggle
          value={tempUnit}
          onChange={(v) => setTempUnit(v as TempUnit)}
          options={[
            { value: 'F', label: '°F' },
            { value: 'C', label: '°C' },
          ]}
        />
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
          <FieldNumber
            label="Tank Volume"
            value={gallons}
            onChange={setGallons}
            unit="US gal"
            min={1}
            hint="Use net water volume."
          />
          <FieldSelect
            label="Room Insulation"
            value={insulation}
            onChange={(v) => setInsulation(v as 'open' | 'lid' | 'sealed')}
            options={[
              { value: 'open', label: 'Open-top tank (high heat loss)' },
              { value: 'lid', label: 'Glass lid / hood (standard)' },
              { value: 'sealed', label: 'Fully sealed top + insulated room' },
            ]}
          />
          <FieldNumber
            label="Coldest Room Temp"
            value={roomTemp}
            onChange={setRoomTemp}
            unit={`°${tempUnit}`}
            step={0.5}
            hint="Use your room's typical winter low, not the average."
          />
          <FieldNumber
            label="Target Tank Temp"
            value={targetTemp}
            onChange={setTargetTemp}
            unit={`°${tempUnit}`}
            step={0.5}
            hint={tempUnit === 'F' ? 'Tropical: 76–82°F · Discus: 84°F · Cold water: skip heater' : 'Tropical: 24–28°C · Discus: 29°C'}
          />
        </div>
      </CalcCard>

      {result && result.hint === 'cool' && (
        <ResultPanel
          primary={{
            label: 'No heater needed',
            value: 'Room is already warm enough',
            sub: 'Target is at or below room temperature. For cold-water fish (goldfish, white clouds, hillstream loaches) this is correct.',
          }}
          note="If you want a heater anyway as backup, pick the smallest size (25–50W) just to stabilize against cold snaps."
        />
      )}

      {result && result.hint === 'heat' && result.watts > 0 && (
        <ResultPanel
          primary={{
            label: 'Recommended heater',
            value: `${result.heaterPick}W`,
            sub: `Calculated need: ${result.watts.toFixed(0)}W · with 25% headroom: ${result.recommended.toFixed(0)}W · for a ${result.deltaF.toFixed(1)}°F lift`,
          }}
          secondary={[
            { label: 'Heat delta', value: `${result.deltaF.toFixed(1)}°F` },
            { label: 'Watts/gal', value: `${(result.watts / (parseFloat(gallons) || 1)).toFixed(1)} W/gal` },
          ]}
          note={
            <>
              <strong className="text-white/90">For tanks 40 gal and larger, run two smaller heaters instead of one large one.</strong>{' '}
              Two 100W heaters are safer than one 200W: if one fails stuck-on, the other can&apos;t cook the tank; if one fails off, the
              other maintains baseline temperature. Always run on a separate controller (Inkbird, Ranco) for failure protection on tanks over 75 gallons.
            </>
          }
        />
      )}
    </div>
  )
}
