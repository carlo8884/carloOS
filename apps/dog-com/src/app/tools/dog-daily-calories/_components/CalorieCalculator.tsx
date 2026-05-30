/**
 * Dog daily-calorie / feeding amount calculator (client component).
 *
 * Math source: WSAVA Global Nutrition Committee Toolkit + AAHA Nutritional
 * Assessment Guidelines. Formula and life-stage multipliers cited inline in
 * the methodology slot at the bottom of the calculator.
 *
 * RER (Resting Energy Requirement, kcal/day) = 70 × (body_weight_kg ^ 0.75)
 * DER (Daily Energy Requirement)             = RER × life-stage factor
 *
 * Output is educational guidance, NOT individual veterinary advice
 * (QC-STANDARDS §3.3). The methodology block names that explicitly.
 */

'use client'

import { useMemo, useState } from 'react'
import {
  Calculator,
  FieldNumber,
  FieldSelect,
  OutputBig,
} from '@carloOS/ui'

// Life-stage multipliers per WSAVA Global Nutrition Committee Toolkit (2021)
// and AAHA Nutritional Assessment Guidelines (2010). Where ranges exist
// (e.g. puppy growth), the midpoint is used; the methodology block
// surfaces the range so owners can adjust manually under vet guidance.

interface LifeStageOption {
  value: string
  label: string
  factor: number
  hint: string
}

const LIFE_STAGES: LifeStageOption[] = [
  { value: 'puppy-young',     label: 'Puppy under 4 months',          factor: 3.0, hint: 'RER × 3.0 (growth)' },
  { value: 'puppy-older',     label: 'Puppy 4–12 months',             factor: 2.0, hint: 'RER × 2.0 (growth tapering)' },
  { value: 'adult-neutered',  label: 'Adult, neutered',               factor: 1.6, hint: 'RER × 1.6 (most common)' },
  { value: 'adult-intact',    label: 'Adult, intact',                 factor: 1.8, hint: 'RER × 1.8' },
  { value: 'senior',          label: 'Senior (healthy)',              factor: 1.4, hint: 'RER × 1.4' },
  { value: 'weight-loss',     label: 'Weight-loss target',            factor: 1.0, hint: 'RER × 1.0 (calculate from ideal weight, not current)' },
  { value: 'weight-gain',     label: 'Weight gain (under-condition)', factor: 1.7, hint: 'RER × 1.7' },
]

interface ActivityOption {
  value: string
  label: string
  factor: number
}

const ACTIVITY_LEVELS: ActivityOption[] = [
  { value: 'low',    label: 'Low (mostly sedentary, indoor)', factor: 0.9 },
  { value: 'normal', label: 'Normal (1 walk + play)',          factor: 1.0 },
  { value: 'high',   label: 'High (running, sport, working)',  factor: 1.15 },
]

export function CalorieCalculator() {
  // Inputs
  const [weight, setWeight] = useState('')
  const [unit, setUnit] = useState<'lb' | 'kg'>('lb')
  const [lifeStage, setLifeStage] = useState('adult-neutered')
  const [activity, setActivity] = useState('normal')
  const [kcalPerCup, setKcalPerCup] = useState('')

  // Math
  const computed = useMemo(() => {
    const wRaw = parseFloat(weight)
    if (!Number.isFinite(wRaw) || wRaw <= 0) {
      return null
    }
    const wKg = unit === 'lb' ? wRaw * 0.453592 : wRaw
    const rer = 70 * Math.pow(wKg, 0.75)
    const stageFactor =
      LIFE_STAGES.find((s) => s.value === lifeStage)?.factor ?? 1.6
    const activityFactor =
      ACTIVITY_LEVELS.find((a) => a.value === activity)?.factor ?? 1.0
    const der = rer * stageFactor * activityFactor

    const cupKcal = parseFloat(kcalPerCup)
    const cups =
      Number.isFinite(cupKcal) && cupKcal > 0 ? der / cupKcal : null

    return {
      wKg,
      rer: Math.round(rer),
      der: Math.round(der),
      cups,
    }
  }, [weight, unit, lifeStage, activity, kcalPerCup])

  return (
    <Calculator
      inputs={
        <>
          <FieldNumber
            label="Body weight"
            value={weight}
            onChange={setWeight}
            unit={unit}
            placeholder={unit === 'lb' ? '45' : '20'}
            min={1}
            step={0.1}
            hint="Use current healthy weight. For weight-loss programs, use the target weight, not current."
          />
          <FieldSelect
            label="Unit"
            value={unit}
            onChange={(v) => setUnit(v as 'lb' | 'kg')}
            options={[
              { value: 'lb', label: 'Pounds (lb)' },
              { value: 'kg', label: 'Kilograms (kg)' },
            ]}
          />
          <FieldSelect
            label="Life stage"
            value={lifeStage}
            onChange={setLifeStage}
            options={LIFE_STAGES.map(({ value, label, hint }) => ({
              value,
              label,
              hint,
            }))}
            hint="Multipliers per WSAVA Global Nutrition Toolkit & AAHA Nutritional Assessment Guidelines."
          />
          <FieldSelect
            label="Activity level"
            value={activity}
            onChange={setActivity}
            options={ACTIVITY_LEVELS.map(({ value, label }) => ({ value, label }))}
            hint="Modest adjustment on top of the life-stage factor."
          />
          <FieldNumber
            label="Food kcal per cup (optional)"
            value={kcalPerCup}
            onChange={setKcalPerCup}
            unit="kcal/cup"
            placeholder="380"
            min={50}
            step={5}
            hint="From the bag label or manufacturer site. Without this we still show your calorie target — the cup count needs it."
          />
        </>
      }
      outputs={
        computed ? (
          <>
            <OutputBig
              tone="primary"
              label="Daily energy requirement (DER)"
              value={computed.der.toLocaleString()}
              unit="kcal/day"
              caption="Target total daily intake from food + treats. Treats should stay ≤ 10% of this — the rest is the meal plan."
            />
            <OutputBig
              label="Resting energy requirement (RER)"
              value={computed.rer.toLocaleString()}
              unit="kcal/day"
              caption="Baseline metabolic burn at rest, before life-stage and activity adjustments."
            />
            {computed.cups != null && (
              <OutputBig
                label="Daily food amount"
                value={computed.cups.toFixed(2)}
                unit="cups/day"
                caption="Split across 2 meals for adults; 3–4 for puppies under 6 months. Adjust if your dog is gaining or losing condition over 2–4 weeks."
              />
            )}
          </>
        ) : (
          <div className="rounded-md border border-brand-border bg-brand-white p-5 text-center">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-2">
              Awaiting input
            </div>
            <div className="text-sm text-brand-text-mid leading-relaxed">
              Enter your dog&apos;s body weight to see the calorie target.
              The cup count needs the food&apos;s kcal/cup from the bag label.
            </div>
          </div>
        )
      }
      methodology={
        <>
          <p className="mb-3">
            <strong className="text-brand-text-dark font-semibold">Formula.</strong>{' '}
            Resting Energy Requirement (RER) = 70 × (body weight in kg)<sup>0.75</sup>.
            Daily Energy Requirement (DER) = RER × life-stage factor × activity
            modifier. Life-stage multipliers per the{' '}
            <a
              href="https://wsava.org/wp-content/uploads/2020/01/WSAVA-Global-Nutritional-Assessment-Guidelines-2011-1.pdf"
              rel="noopener noreferrer"
              target="_blank"
              className="text-brand-primary underline decoration-brand-primary/40 hover:decoration-brand-primary"
            >
              WSAVA Global Nutritional Assessment Guidelines
            </a>{' '}
            and the{' '}
            <a
              href="https://www.aaha.org/aaha-guidelines/nutritional-assessment-configuration/nutritional-assessment-home/"
              rel="noopener noreferrer"
              target="_blank"
              className="text-brand-primary underline decoration-brand-primary/40 hover:decoration-brand-primary"
            >
              AAHA Nutritional Assessment Guidelines
            </a>
            .
          </p>
          <p className="mb-3">
            <strong className="text-brand-text-dark font-semibold">Activity modifier.</strong>{' '}
            A small fine-tune (0.9 / 1.0 / 1.15) on top of the life-stage
            factor. Most adult dogs sit in the normal band — owners often
            overestimate exercise level, which is one of the most common
            sources of obesity in pet dogs.
          </p>
          <p className="mb-3">
            <strong className="text-brand-text-dark font-semibold">Recalibrate every 2–4 weeks.</strong>{' '}
            The formula is a starting point, not a final number. Use{' '}
            <a
              href="/guides/dog-body-condition-score"
              className="text-brand-primary underline decoration-brand-primary/40 hover:decoration-brand-primary"
            >
              body condition scoring
            </a>{' '}
            (1–9 scale) every 2–4 weeks. If your dog is gaining condition,
            reduce by 10%; if losing, raise by 10%. Repeat until the body
            condition holds steady at 4–5/9.
          </p>
          <p className="mb-1">
            <strong className="text-brand-text-dark font-semibold">When to ask your vet.</strong>{' '}
            Pregnancy, lactation, illness, post-surgical recovery, severe
            over- or under-condition (BCS &lt; 3 or &gt; 7), and any
            therapeutic diet program belong in a conversation with your
            veterinarian, not a calculator. This tool is educational
            guidance for healthy adult and senior dogs.
          </p>
        </>
      }
    />
  )
}
