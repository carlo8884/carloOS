'use client'

import { useMemo, useState } from 'react'
import { ResultMeaning, ResultPick, heaterFromStockWatts, numberFieldError } from '@carloOS/ui'
import { CalcCard, FieldNumber, FieldSelect, ResultPanel, UnitToggle } from '../_components/CalcShell'
import { pickHeater, sizeHeater, type Insulation } from './wattage'

type TempUnit = 'F' | 'C'

export default function HeaterWattageCalculator() {
  const [gallons, setGallons] = useState('40')
  const [tempUnit, setTempUnit] = useState<TempUnit>('F')
  const [roomTemp, setRoomTemp] = useState('68')
  const [targetTemp, setTargetTemp] = useState('78')
  const [insulation, setInsulation] = useState<Insulation>('lid')

  const galError = numberFieldError(gallons, 'tank volume', 1, 1000, 'US gal')
  const roomError = numberFieldError(roomTemp, 'room temperature', tempUnit === 'F' ? 32 : 0, tempUnit === 'F' ? 104 : 40, `°${tempUnit}`)
  const targetError = numberFieldError(targetTemp, 'target temperature', tempUnit === 'F' ? 40 : 4, tempUnit === 'F' ? 95 : 35, `°${tempUnit}`)
  const inputError = galError || roomError || targetError

  const result = useMemo(() => {
    if (inputError) return null
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
  }, [gallons, roomTemp, targetTemp, tempUnit, insulation, inputError])

  return (
    <div>
      {!inputError && result && result.hint === 'heat' && result.watts > 0 ? (
        <ResultPick linkFirst siteId="fish-com" pick={heaterFromStockWatts(result.heaterPick)} />
      ) : null}
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
            max={1000}
            hint="Use net water volume."
            error={galError}
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
            error={roomError}
          />
          <FieldNumber
            label="Target Tank Temp"
            value={targetTemp}
            onChange={setTargetTemp}
            unit={`°${tempUnit}`}
            step={0.5}
            hint={tempUnit === 'F' ? 'Tropical: 76–82°F · Discus: 84°F · Cold water: skip heater' : 'Tropical: 24–28°C · Discus: 29°C'}
            error={targetError}
          />
        </div>
      </CalcCard>

      {!inputError && result && result.hint === 'cool' && (
        <ResultPanel
          primary={{
            label: 'No heater needed',
            value: 'Room is already warm enough',
            sub: 'Target is at or below room temperature. For cold-water fish (goldfish, white clouds, hillstream loaches) this is correct.',
          }}
          note="If you want a heater anyway as backup, pick the smallest size (25–50W) just to stabilize against cold snaps."
        />
      )}

      {!inputError && result && result.hint === 'heat' && result.watts > 0 && (
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
      {!inputError && result && result.hint === 'heat' && result.watts > 0 && (
        <>
        <ResultMeaning>
          That wattage is the heater size for this temperature lift. It is not a guarantee the tank stays at the target if the room gets colder than the number you entered.
        </ResultMeaning>
        </>
      )}
      {!inputError && result && (
        <ul className="mt-4 space-y-2 text-sm">
          <li>
            <a href="/reviews/winter-heater-sizing-guide" className="inline-block max-w-full whitespace-normal text-brand-primary underline underline-offset-2">
              Aquarium heater size for a cold room
            </a>
          </li>
          <li>
            <a href="/reviews/best-display-tank-heater-guide" className="inline-block max-w-full whitespace-normal text-brand-primary underline underline-offset-2">
              Best heater for a display tank
            </a>
          </li>
        </ul>
      )}
    </div>
  )
}
