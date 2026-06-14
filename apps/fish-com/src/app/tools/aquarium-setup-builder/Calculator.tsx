'use client'

/**
 * Aquarium Setup Builder -- fish-com /tools/aquarium-setup-builder
 *
 * "What do I need to start a fish tank?" — a guided equipment-checklist builder.
 * The aquarist enters tank size and setup type; the tool returns a complete,
 * sized starter-kit list (filter turnover, heater wattage, lighting, substrate,
 * test kit, conditioner, plants) with why each item matters and a link to the
 * relevant Fish.com review or setup guide. Orchestration, not another single-
 * value calculator. Rules of thumb are framed as guidelines, not guarantees.
 */

import { useMemo, useState } from 'react'
import { CalcCard, FieldNumber, FieldSelect } from '../_components/CalcShell'

type SetupType = 'community' | 'planted' | 'betta' | 'goldfish' | 'nano'

interface Item {
  name: string
  detail: string
  href: string
  hrefLabel: string
  essential: boolean
}

const SETUP_OPTIONS = [
  { value: 'community', label: 'Tropical community (most beginners)' },
  { value: 'planted', label: 'Planted / aquascape' },
  { value: 'betta', label: 'Betta' },
  { value: 'goldfish', label: 'Goldfish / coldwater' },
  { value: 'nano', label: 'Nano (under ~10 gal)' },
]

function buildList(gallons: number, type: SetupType): Item[] {
  const filterGph = Math.max(1, Math.ceil(gallons * 4)) // ~4x turnover/hour minimum
  const coldwater = type === 'goldfish'
  const heaterW = coldwater ? 0 : Math.max(25, Math.round((gallons * 5) / 25) * 25) // ~5 W/gal
  const planted = type === 'planted'
  const filterReview = gallons >= 40 ? '/reviews/best-canister-filters' : '/reviews/best-aquarium-filters'
  const filterReviewLabel = gallons >= 40 ? 'Best canister filters' : 'Best aquarium filters'

  const items: Item[] = [
    {
      name: `Aquarium — ${gallons} gallon${gallons === 1 ? '' : 's'}`,
      detail:
        'Bigger is more forgiving: a larger water volume dilutes waste and swings in temperature and chemistry. A glass tank with a lid limits evaporation and escapes.',
      href: type === 'nano' || gallons < 10 ? '/reviews/best-nano-tanks' : '/setup',
      hrefLabel: type === 'nano' || gallons < 10 ? 'Best nano tanks' : 'Setup guide',
      essential: true,
    },
    {
      name: `Filter — rated ≥ ${filterGph} GPH`,
      detail:
        'Aim for at least about four times the tank volume in flow per hour. The filter houses the beneficial bacteria that process fish waste — it is the heart of the tank, not an optional extra.',
      href: filterReview,
      hrefLabel: filterReviewLabel,
      essential: true,
    },
  ]

  if (!coldwater) {
    items.push({
      name: `Heater — about ${heaterW} W`,
      detail:
        'Roughly five watts per gallon holds a stable tropical temperature in a normal room; cold rooms or large tanks may want two smaller heaters for redundancy. Pair with a thermometer and ideally a controller.',
      href: '/reviews/best-aquarium-heaters',
      hrefLabel: 'Best aquarium heaters',
      essential: true,
    })
  } else {
    items.push({
      name: 'Heater — not required',
      detail:
        'Goldfish and other coldwater fish are kept at room temperature, so no heater is needed. A thermometer is still useful to watch for room-temperature swings.',
      href: '/setup',
      hrefLabel: 'Coldwater setup',
      essential: false,
    })
  }

  items.push({
    name: planted ? 'Lighting — plant-capable / full spectrum' : 'Lighting — basic LED',
    detail: planted
      ? 'Live plants need enough usable light (PAR) over the right photoperiod to grow; an under-powered light is the most common cause of a struggling planted tank.'
      : 'A simple LED on a timer gives a day/night rhythm and lets you see the fish without fuelling algae through excess light.',
    href: '/reviews/best-aquarium-lighting',
    hrefLabel: 'Best aquarium lighting',
    essential: !planted ? false : true,
  })

  items.push({
    name: planted ? 'Substrate — nutrient (planted) substrate' : 'Substrate — gravel or sand',
    detail: planted
      ? 'Root-feeding plants do best in an aquasoil or nutrient substrate; a plain gravel cap over it works too. This is where a planted tank diverges from a basic setup.'
      : 'Inert gravel or sand is fine for a fish-only tank — choose by the fish (sand suits bottom-dwellers that sift it).',
    href: planted ? '/setup/planted-tank-setup' : '/setup/nano-tank-setup',
    hrefLabel: planted ? 'Planted tank setup' : 'Setup guides',
    essential: true,
  })

  items.push({
    name: 'Liquid test kit — ammonia, nitrite, nitrate, pH',
    detail:
      'The single most useful purchase a new aquarist makes. You cannot see ammonia or nitrite, and they are what kill fish in a new tank — a liquid master kit lets you track the cycle and catch problems early. Test strips are convenient but less accurate.',
    href: '/reviews/best-water-test-kits',
    hrefLabel: 'Best water test kits',
    essential: true,
  })

  items.push({
    name: 'Water conditioner (dechlorinator)',
    detail:
      'Tap water contains chlorine or chloramine that harms fish and your filter bacteria. A conditioner neutralises it instantly and is used at every water change — a bottle lasts a long time.',
    href: '/setup/water-chemistry-guide',
    hrefLabel: 'Water chemistry guide',
    essential: true,
  })

  if (planted) {
    items.push({
      name: 'Plants + fertiliser',
      detail:
        'Start with hardy plants and a liquid fertiliser for the water column; root tabs feed heavy root-feeders. CO2 is optional for low-tech tanks.',
      href: '/reviews/best-planted-tank-fertilizers',
      hrefLabel: 'Best planted-tank fertilisers',
      essential: false,
    })
  }

  if (type === 'betta') {
    items.push({
      name: 'Betta note — gentle flow, warm water',
      detail:
        'Bettas are tropical (they need a heater) but dislike strong current — choose a gentle filter or baffle the outflow. A 5-gallon tank or larger is the modern minimum, not a bowl.',
      href: '/setup',
      hrefLabel: 'Setup guide',
      essential: false,
    })
  }

  items.push({
    name: 'Cycle the tank BEFORE adding fish',
    detail:
      'Not a product — the most important step. Run the filter for several weeks (with an ammonia source) until it processes ammonia and nitrite to zero, so fish never sit in their own toxins. This is what separates a thriving tank from "new tank syndrome".',
    href: '/setup/aquarium-cycling-guide',
    hrefLabel: 'Aquarium cycling guide',
    essential: true,
  })

  return items
}

export default function AquariumSetupBuilder() {
  const [gallons, setGallons] = useState('20')
  const [type, setType] = useState<SetupType>('community')

  const list = useMemo(() => {
    const g = parseFloat(gallons) || 0
    if (g <= 0) return null
    return buildList(g, type)
  }, [gallons, type])

  return (
    <div>
      <CalcCard>
        <div className="grid sm:grid-cols-2 gap-x-6 gap-y-0">
          <FieldNumber
            label="Tank size"
            value={gallons}
            onChange={setGallons}
            unit="gallons"
            min={1}
            step={1}
            hint="If you have it in litres, divide by 3.785."
          />
          <FieldSelect
            label="Setup type"
            value={type}
            onChange={(v) => setType(v as SetupType)}
            options={SETUP_OPTIONS}
          />
        </div>
      </CalcCard>

      {list && (
        <div className="mt-6 rounded-lg border border-brand-border bg-brand-white p-5 sm:p-6">
          <h3 className="font-display text-lg font-bold text-brand-dark mb-1">
            Your starter-kit checklist
          </h3>
          <p className="text-2xs text-brand-text-light mb-4">
            Sized to a {parseFloat(gallons) || 0}-gallon {SETUP_OPTIONS.find((o) => o.value === type)?.label.toLowerCase()} setup.
            Figures are guidelines — confirm fish-specific needs before stocking.
          </p>
          <ul className="space-y-4">
            {list.map((item) => (
              <li key={item.name} className="border-b border-brand-border pb-4 last:border-0 last:pb-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-brand-dark text-sm">{item.name}</span>
                  {item.essential && (
                    <span className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">Essential</span>
                  )}
                </div>
                <p className="mt-1 text-sm leading-relaxed text-brand-text-mid">{item.detail}</p>
                <a
                  href={item.href}
                  className="mt-1.5 inline-block text-xs font-semibold text-brand-primary underline-offset-2 hover:underline no-underline"
                >
                  {item.hrefLabel} →
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  )
}
