'use client'

import { useMemo, useState, type ReactNode } from 'react'

type WaterType = 'freshwater' | 'saltwater'
type Style = 'community' | 'planted' | 'cichlid' | 'reef' | 'nano-shrimp' | 'goldfish-coldwater'
type Experience = 'beginner' | 'intermediate'

interface RecCard {
  category: string
  icon: string
  pick: string
  why: string
  reviewHref: string
  reviewLabel: string
}

function tierForGallons(gal: number): 'nano' | 'small' | 'medium' | 'large' | 'xlarge' {
  if (gal < 10) return 'nano'
  if (gal <= 29) return 'small'
  if (gal <= 75) return 'medium'
  if (gal <= 125) return 'large'
  return 'xlarge'
}

function recommend(gal: number, water: WaterType, style: Style, exp: Experience): RecCard[] {
  const tier = tierForGallons(gal)
  const cards: RecCard[] = []

  // ── FILTER ───────────────────────────────────────────────
  if (tier === 'nano') {
    cards.push({
      category: 'Filter',
      icon: '⚙️',
      pick: water === 'saltwater' ? 'All-in-one nano filtration (built into tank)' : 'Sponge filter or small HOB',
      why:
        water === 'saltwater'
          ? 'Nano reefs almost always use AIO designs — the rear chamber holds filtration, heater, and skimmer in one unit.'
          : 'For tanks under 10 gal, a sponge filter runs silently and protects shrimp/fry. A small HOB works if you want easier maintenance.',
      reviewHref: water === 'saltwater' ? '/reviews/best-nano-tanks' : '/reviews/best-aquarium-filters',
      reviewLabel: water === 'saltwater' ? 'See best nano reef tanks →' : 'See best aquarium filters →',
    })
  } else if (tier === 'small' || tier === 'medium') {
    const recommendCanister = tier === 'medium' || style === 'planted' || style === 'cichlid'
    cards.push({
      category: 'Filter',
      icon: '⚙️',
      pick: recommendCanister ? 'Canister filter (oversized by 1.5×)' : 'Hang-on-back filter (oversized by 1.5×)',
      why: recommendCanister
        ? 'Canisters give you the bio-media volume needed for the bioload at this size — and they run quieter than HOBs once primed. Oversize by 1.5× so you have room to stock.'
        : 'A standard HOB is plenty for community tanks at this size. Pick one rated for 1.5× your gallons so filtration scales as you add fish.',
      reviewHref: recommendCanister ? '/reviews/best-canister-filters' : '/reviews/best-aquarium-filters',
      reviewLabel: recommendCanister ? 'See best canister filters →' : 'See best aquarium filters →',
    })
  } else {
    cards.push({
      category: 'Filter',
      icon: '⚙️',
      pick: style === 'reef' ? 'Sump with protein skimmer' : 'Two canisters or a sump',
      why:
        style === 'reef'
          ? 'Reef tanks at this size need a sump for skimming, frag space, and chemical filtration. Skip HOBs entirely.'
          : 'For tanks over 75 gal, run two smaller canisters or a sump rather than one giant filter. Redundancy is cheap insurance.',
      reviewHref: '/reviews/best-canister-filters',
      reviewLabel: 'See best canister filters →',
    })
  }

  // ── HEATER ───────────────────────────────────────────────
  if (style !== 'goldfish-coldwater') {
    const dualHeater = gal >= 40
    const wattsEach = Math.max(50, Math.round((gal * 3) / (dualHeater ? 2 : 1) / 25) * 25)
    cards.push({
      category: 'Heater',
      icon: '🔥',
      pick: dualHeater ? `Two ${wattsEach}W heaters` : `One ${wattsEach}W heater`,
      why: dualHeater
        ? 'On tanks 40 gal and up, run two smaller heaters in parallel. If one fails stuck-on it can\'t cook the tank; if one fails off, the other holds baseline temperature.'
        : 'A single heater is fine at this size. Pick one with an external visible thermostat so you can verify it\'s actually cycling.',
      reviewHref: '/reviews/best-aquarium-heaters',
      reviewLabel: 'See best aquarium heaters →',
    })
  } else {
    cards.push({
      category: 'Heater',
      icon: '❄️',
      pick: 'No heater needed',
      why: 'Common, comet, and shubunkin goldfish are coldwater fish — they thrive at room temperature (60–75°F). Skip the heater unless you keep fancy goldfish in a cold room.',
      reviewHref: '/reviews/best-aquarium-heaters',
      reviewLabel: 'See heater options →',
    })
  }

  // ── LIGHTING ─────────────────────────────────────────────
  if (style === 'planted') {
    cards.push({
      category: 'Lighting',
      icon: '🌿',
      pick: 'Full-spectrum planted-tank LED (Fluval Plant 3.0 / Twinstar / Chihiros class)',
      why: 'Plants need usable PAR in the 6,500K range. Avoid generic "aquarium LEDs" — they look bright but produce almost no photosynthetically active radiation.',
      reviewHref: '/reviews/best-aquarium-lighting',
      reviewLabel: 'See best aquarium lighting →',
    })
  } else if (style === 'reef') {
    cards.push({
      category: 'Lighting',
      icon: '🪸',
      pick: 'Reef-capable LED (AI Prime / Kessil / Radion class)',
      why: 'Reef tanks need controllable spectrum (especially blue/UV) and enough PAR to keep SPS corals colored and healthy. Budget options like NICREW will keep softies alive only.',
      reviewHref: '/reviews/best-aquarium-lighting',
      reviewLabel: 'See best aquarium lighting →',
    })
  } else {
    cards.push({
      category: 'Lighting',
      icon: '💡',
      pick: 'Standard full-spectrum LED with timer',
      why: 'For fish-only or low-light planted tanks, a basic full-spectrum LED on a 6–8 hour timer is plenty. Avoid leaving lights on 12+ hours — that grows algae, not plants.',
      reviewHref: '/reviews/best-aquarium-lighting',
      reviewLabel: 'See best aquarium lighting →',
    })
  }

  // ── TEST KIT ─────────────────────────────────────────────
  cards.push({
    category: 'Water Test Kit',
    icon: '🧪',
    pick: water === 'saltwater' ? 'Salifert or Red Sea test kits' : 'API Master Test Kit (liquid, not strips)',
    why:
      water === 'saltwater'
        ? 'Saltwater requires calcium, alkalinity, and magnesium testing on top of ammonia/nitrite/nitrate. Salifert and Red Sea kits are the standard.'
        : 'Test strips are inaccurate. The API liquid Master Test Kit is the only sub-$40 kit aquarists actually trust — it covers ammonia, nitrite, nitrate, and pH.',
    reviewHref: '/reviews/best-water-test-kits',
    reviewLabel: 'See best water test kits →',
  })

  // ── PLANTED-TANK FERTILIZERS (conditional) ─────────────
  if (style === 'planted') {
    cards.push({
      category: 'Fertilizers',
      icon: '🌱',
      pick: 'All-in-one liquid fertilizer (Thrive or NilocG ThriveC)',
      why: 'For low-to-medium tech planted tanks, an all-in-one fertilizer covers macros and micros in one bottle. Step up to separate macro + micro dosing only once you start running CO2.',
      reviewHref: '/reviews/best-planted-tank-fertilizers',
      reviewLabel: 'See best planted-tank fertilizers →',
    })
  }

  // ── NANO-TANK PACKAGE (conditional) ─────────────────────
  if (tier === 'nano' && exp === 'beginner') {
    cards.push({
      category: 'Tank',
      icon: '🐠',
      pick: 'All-in-one nano aquarium (Fluval Flex or Waterbox)',
      why: 'Nano tanks are unforgiving — buying an all-in-one with filter, light, and (often) heater pre-fitted skips the integration headache and gives more stable parameters.',
      reviewHref: '/reviews/best-nano-tanks',
      reviewLabel: 'See best nano tanks →',
    })
  }

  return cards
}

interface FieldProps {
  label: string
  hint?: string
  children: ReactNode
}

function Field({ label, hint, children }: FieldProps) {
  return (
    <label className="block mb-4">
      <span className="block text-xs font-bold tracking-wider uppercase text-brand-text-light mb-1.5">{label}</span>
      {children}
      {hint && <span className="text-2xs text-brand-text-light mt-1 block">{hint}</span>}
    </label>
  )
}

export default function EquipmentRecommender() {
  const [gallons, setGallons] = useState('40')
  const [water, setWater] = useState<WaterType>('freshwater')
  const [style, setStyle] = useState<Style>('community')
  const [exp, setExp] = useState<Experience>('beginner')

  const gal = parseFloat(gallons) || 0
  const recs = useMemo(() => (gal > 0 ? recommend(gal, water, style, exp) : []), [gal, water, style, exp])

  return (
    <div>
      {/* INPUTS */}
      <div className="bg-brand-white border border-brand-border rounded-lg p-6 mb-6">
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
          <Field label="Tank Volume" hint="Use net water volume.">
            <div className="flex items-stretch border border-brand-border rounded overflow-hidden focus-within:border-brand-primary">
              <input
                type="number"
                inputMode="decimal"
                value={gallons}
                onChange={(e) => setGallons(e.target.value)}
                min={1}
                className="flex-1 px-3 py-2.5 text-base text-brand-dark outline-none bg-brand-white"
              />
              <span className="px-3 flex items-center bg-brand-surface text-brand-text-light text-xs font-semibold border-l border-brand-border">
                US gal
              </span>
            </div>
          </Field>

          <Field label="Water Type">
            <select
              value={water}
              onChange={(e) => setWater(e.target.value as WaterType)}
              className="w-full px-3 py-2.5 text-base text-brand-dark bg-brand-white border border-brand-border rounded outline-none focus:border-brand-primary"
            >
              <option value="freshwater">Freshwater</option>
              <option value="saltwater">Saltwater / Marine</option>
            </select>
          </Field>

          <Field label="Tank Style">
            <select
              value={style}
              onChange={(e) => setStyle(e.target.value as Style)}
              className="w-full px-3 py-2.5 text-base text-brand-dark bg-brand-white border border-brand-border rounded outline-none focus:border-brand-primary"
            >
              <option value="community">Standard community</option>
              <option value="planted">Heavily planted</option>
              <option value="cichlid">Cichlids / aggressive</option>
              <option value="reef">Reef (saltwater)</option>
              <option value="nano-shrimp">Nano / shrimp tank</option>
              <option value="goldfish-coldwater">Goldfish / coldwater</option>
            </select>
          </Field>

          <Field label="Experience Level">
            <select
              value={exp}
              onChange={(e) => setExp(e.target.value as Experience)}
              className="w-full px-3 py-2.5 text-base text-brand-dark bg-brand-white border border-brand-border rounded outline-none focus:border-brand-primary"
            >
              <option value="beginner">Beginner (first or second tank)</option>
              <option value="intermediate">Intermediate / experienced</option>
            </select>
          </Field>
        </div>
      </div>

      {/* RESULTS */}
      {recs.length > 0 && (
        <div>
          <div className="bg-brand-dark text-white rounded-lg p-6 mb-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">Your equipment list</div>
            <div className="font-display font-bold text-2xl tracking-tight leading-tight mb-1">
              {gal} gallon · {water === 'saltwater' ? 'Saltwater' : 'Freshwater'} · {labelForStyle(style)}
            </div>
            <div className="text-sm text-white/55">
              {recs.length} recommended categories. Click any card for the full reviewed product list.
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4">
            {recs.map((rec) => (
              <div
                key={rec.category}
                className="bg-brand-white border border-brand-border rounded-lg p-5 flex flex-col"
              >
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-xl">{rec.icon}</span>
                  <span className="text-2xs font-bold tracking-wider uppercase text-brand-primary">{rec.category}</span>
                </div>
                <div className="font-display font-semibold text-brand-dark text-base mb-2 leading-snug">{rec.pick}</div>
                <div className="text-xs text-brand-text-mid leading-relaxed mb-4 flex-1">{rec.why}</div>
                <a
                  href={rec.reviewHref}
                  className="text-sm font-semibold text-brand-primary no-underline hover:underline mt-auto"
                >
                  {rec.reviewLabel}
                </a>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}

function labelForStyle(s: Style): string {
  switch (s) {
    case 'community': return 'Community'
    case 'planted': return 'Planted'
    case 'cichlid': return 'Cichlid'
    case 'reef': return 'Reef'
    case 'nano-shrimp': return 'Nano / Shrimp'
    case 'goldfish-coldwater': return 'Coldwater'
  }
}
