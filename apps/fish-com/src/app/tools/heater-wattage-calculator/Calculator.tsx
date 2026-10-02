'use client'

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel, UnitToggle } from '../_components/CalcShell'
import { ResultCTA } from '../_components/ResultCTA'
import { pickHeater, sizeHeater, type Insulation } from './wattage'

type TempUnit = 'F' | 'C'

export default function HeaterWattageCalculator() {
  const [gallons, setGallons] = useState('40')
  const [tempUnit, setTempUnit] = useState<TempUnit>('F')
  const [roomTemp, setRoomTemp] = useState('68')
  const [targetTemp, setTargetTemp] = useState('78')
  const [insulation, setInsulation] = useState<Insulation>('lid')

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
    if (deltaF <= 0) return { watts: 0, recommended: 0, heaterPick: 0, eachHeater: 0, deltaF, hint: 'cool' as const }

    const sized = sizeHeater(gal, deltaF, insulation)
    return {
      ...sized,
      eachHeater: pickHeater(sized.heaterPick / 2),
      deltaF,
      hint: 'heat' as const,
    }
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
            onChange={(v) => setInsulation(v as Insulation)}
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
              {(parseFloat(gallons) || 0) >= 40 ? (
                <>
                  Two {result.eachHeater}W heaters are safer than one {result.heaterPick}W: if one fails stuck-on, the other can&apos;t cook the tank; if one fails off, the
                  other maintains baseline temperature.{' '}
                </>
              ) : (
                <>
                  Below 40 gallons a single heater at this wattage is enough. From 40 gallons up, split that wattage across two heaters so one failure cannot cook or chill the tank.{' '}
                </>
              )}
              Always run on a separate controller (Inkbird, Ranco) for failure protection on tanks over 75 gallons.
            </>
          }
        />
      )}

      {result && result.hint === 'heat' && result.watts > 0 && (
        <ResultCTA
          heading={`Shop aquarium heaters in your ${result.heaterPick}W range`}
          blurb={
            <>
              On tanks 40 gal and up, two smaller heaters near half this wattage give you redundancy.
            </>
          }
          query={`aquarium heater ${result.heaterPick}w`}
          cta="Browse heaters on Amazon"
          source="tools-heater-wattage"
        />
      )}
    </div>
  )
}
