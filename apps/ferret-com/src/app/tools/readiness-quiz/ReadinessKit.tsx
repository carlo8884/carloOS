'use client'

/**
 * Interactive new-owner readiness kit — /tools/readiness-quiz
 *
 * Day-one packing list a prospective ferret household should have ready
 * before arrival. Check items off as you gather them. Each row hops to
 * a live Amazon search via /go/amazon-brand (never PLACEHOLDER, never
 * href="#"). Chewy stays hidden until a Chewy tag is live.
 */

import { useMemo, useState } from 'react'
import { ShopCtas } from '@carloOS/ui'

const SOURCE = 'tools-readiness-quiz'

interface KitItem {
  id: string
  name: string
  detail: string
  amazonHref: string
  amazonLabel: string
}

const KIT: KitItem[] = [
  {
    id: 'cage',
    name: 'Multi-level cage',
    detail:
      'A multi-level cage with solid floors (or fleece-covered wire) and bar spacing of one inch or less is the usual day-one habitat. Size the footprint with the cage-size calculator — the cage is the bedroom, not the house. Ferrets still need several hours of supervised out-of-cage time daily.',
    amazonHref: `/go/amazon-brand/ferret+nation+critter+nation+double+unit?s=${SOURCE}`,
    amazonLabel: 'Browse multi-level cages on Amazon →',
  },
  {
    id: 'litter',
    name: 'Corner pans and pellet litter',
    detail:
      'High-back corner pans plus paper or heat-treated wood pellets. Never clumping clay — dust and gut blockage risk. Plan one pan per ferret plus one extra; the litter planner turns headcount into pans and 30 lb bags.',
    amazonHref: `/go/amazon-brand/compressed+wood+pellet+litter+heat+treated+non+clumping?s=${SOURCE}`,
    amazonLabel: 'Browse wood pellet litter on Amazon →',
  },
  {
    id: 'food',
    name: 'High-protein ferret food',
    detail:
      'A named-meat, high-protein kibble (or the diet the ferret is already on, so you do not switch on day one). Check the bag against published ferret nutrient targets with the food evaluator before you buy a second brand.',
    amazonHref: `/go/amazon-brand/high+protein+ferret+food+kibble?s=${SOURCE}`,
    amazonLabel: 'Browse ferret food on Amazon →',
  },
  {
    id: 'hammock',
    name: 'Hammock or sleep sack',
    detail:
      'Fleece hammocks and sleep sacks are the usual sleeping spots — not loose shavings. Ferrets burrow; a washable sack on each level keeps them off wire floors and off aromatic wood chips.',
    amazonHref: `/go/amazon-brand/ferret+sleep+sack+fleece?s=${SOURCE}`,
    amazonLabel: 'Browse hammocks and sleep sacks on Amazon →',
  },
  {
    id: 'dig-box',
    name: 'Dig box',
    detail:
      'A dedicated dig box (rice, clean soil, or shredded paper — never clumping litter) redirects the polecat digging instinct off carpet and houseplants. Pair it with daily playtime; a box is an outlet, not a substitute for a ferret-proofed room.',
    amazonHref: `/go/amazon-brand/ferret+dig+box?s=${SOURCE}`,
    amazonLabel: 'Browse ferret dig boxes on Amazon →',
  },
  {
    id: 'carrier',
    name: 'Hard-sided carrier',
    detail:
      'Needed on day one for the ride home and every vet trip after. A small hard-sided carrier with a secure latch is the usual pick; leave it out as a nap spot so it does not become a vet-only box.',
    amazonHref: `/go/amazon-brand/ferret+carrier+hard+sided?s=${SOURCE}`,
    amazonLabel: 'Browse ferret carriers on Amazon →',
  },
]

export default function ReadinessKit() {
  const [packed, setPacked] = useState<Set<string>>(() => new Set())

  const packedCount = packed.size
  const remaining = KIT.length - packedCount

  const summary = useMemo(() => {
    if (packedCount === 0) {
      return 'Check off each item as you gather it. The list is a husbandry starting point — not a ranked product list.'
    }
    if (remaining === 0) {
      return 'All six readiness items are checked. Confirm legality, housing rules, and an exotics vet before a ferret comes home.'
    }
    return `${packedCount} of ${KIT.length} packed · ${remaining} still to gather.`
  }, [packedCount, remaining])

  function toggle(id: string) {
    setPacked((prev) => {
      const next = new Set(prev)
      if (next.has(id)) next.delete(id)
      else next.add(id)
      return next
    })
  }

  return (
    <div className="rounded-lg border border-brand-border bg-brand-surface p-6 sm:p-8">
      <div className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
        New-owner kit
      </div>
      <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
        Pack before a ferret comes home
      </h3>
      <p className="text-sm leading-relaxed text-brand-text-mid mb-4">
        A typical new-owner kit is a multi-level cage, corner pans and pellet
        litter, a high-protein food, a hammock or sleep sack, a dig box, and a
        hard-sided carrier. Check items off as you gather them. Amazon hops are
        search results for those categories — not a ranked product list, and not
        a substitute for confirming legality, housing rules, and an
        exotics-experienced veterinarian first.
      </p>
      <p className="text-2xs text-brand-text-light mb-5" aria-live="polite">
        {summary}
      </p>

      <ul className="space-y-4">
        {KIT.map((item) => {
          const checked = packed.has(item.id)
          return (
            <li
              key={item.id}
              className="border-b border-brand-border pb-4 last:border-0 last:pb-0"
            >
              <label className="flex items-start gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={checked}
                  onChange={() => toggle(item.id)}
                  className="mt-1 h-4 w-4 rounded border-brand-border text-brand-primary focus:ring-brand-primary"
                />
                <span>
                  <span className="block font-semibold text-sm text-brand-dark">{item.name}</span>
                  <span className="mt-1 block text-sm leading-relaxed text-brand-text-mid">
                    {item.detail}
                  </span>
                </span>
              </label>
              <div className="mt-3 ml-7">
                <ShopCtas amazonHref={item.amazonHref} amazonLabel={item.amazonLabel} />
              </div>
            </li>
          )
        })}
      </ul>

      <p className="mt-5 text-xs text-brand-text-light leading-relaxed">
        Assumption: this is a planning checklist for a first ferret already
        confirmed legal where you live. It does not include the emergency vet
        fund or exotic-pet insurance — those sit on the cost calculator. Empty
        Chewy buttons stay hidden.
      </p>
    </div>
  )
}
