'use client'

/**
 * Interactive first-horse startup kit — /tools/horse-cost-calculator
 *
 * Husbandry packing list for the one-time tack/equipment line in the
 * cost-of-ownership calculator. Check items off as you gather them.
 * Each row hops to a live Amazon search via /go/amazon-brand
 * (never PLACEHOLDER, never href="#"). Chewy stays hidden until a
 * Chewy tag is live.
 */

import { useMemo, useState } from 'react'
import { ShopCtas } from '@carloOS/ui'

const SOURCE = 'tools-horse-cost-calculator'

interface KitItem {
  id: string
  name: string
  detail: string
  amazonHref: string
  amazonLabel: string
}

const KIT: KitItem[] = [
  {
    id: 'halter-lead',
    name: 'Halter and lead rope',
    detail:
      'The day-one handling pair: a fitted nylon or leather halter plus a cotton or poly lead. This is the smallest tack starter — not a saddle — and it belongs on every first-horse budget. Turn out without a fixed nylon halter; use a breakaway if a horse must stay haltered in the field.',
    amazonHref: `/go/amazon-brand/horse+halter+lead+rope?s=${SOURCE}`,
    amazonLabel: 'Browse horse halters and leads on Amazon →',
  },
  {
    id: 'grooming-kit',
    name: 'Grooming kit',
    detail:
      'A curry, stiff and soft brushes, a mane/tail comb, and a towel. Daily grooming is how you find cuts, heat, and rain rot before they become vet bills — a recurring-care line, not a luxury.',
    amazonHref: `/go/amazon-brand/horse+grooming+kit?s=${SOURCE}`,
    amazonLabel: 'Browse horse grooming kits on Amazon →',
  },
  {
    id: 'hoof-pick',
    name: 'Hoof pick',
    detail:
      'Pick the feet before and after work, and before you put the horse away. A basic hoof pick is the cheapest farrier-cycle line on this list: stones and packed mud are what turn a six-week trim into an abscess.',
    amazonHref: `/go/amazon-brand/horse+hoof+pick?s=${SOURCE}`,
    amazonLabel: 'Browse hoof picks on Amazon →',
  },
  {
    id: 'feed-scoop',
    name: 'Feed scoop or barn scale',
    detail:
      'Weigh the grain and hay instead of scooping by eye. The feed-and-hay line in the calculator is a dollar figure; a scoop or hanging scale is how you keep that figure honest and stop over-feeding an easy keeper.',
    amazonHref: `/go/amazon-brand/horse+feed+scoop+scale?s=${SOURCE}`,
    amazonLabel: 'Browse feed scoops and scales on Amazon →',
  },
  {
    id: 'first-aid',
    name: 'Barn first-aid kit',
    detail:
      'A basic barn kit — vet wrap, gauze, antiseptic wash, thermometer, and a listed emergency vet number — covers scrapes and a first look. It is not a substitute for your veterinarian, and it is not a surgical kit. Keep it stocked; the emergency fund sits next to it.',
    amazonHref: `/go/amazon-brand/horse+barn+first+aid+kit?s=${SOURCE}`,
    amazonLabel: 'Browse barn first-aid kits on Amazon →',
  },
  {
    id: 'fly-mask',
    name: 'Fly mask',
    detail:
      'A well-fitted fly mask (with or without ears/nose) is a seasonal comfort item most owners replace every year. It is not a treatment for sweet itch or uveitis — those belong with your veterinarian — but it is a predictable summer line on the ownership budget.',
    amazonHref: `/go/amazon-brand/horse+fly+mask?s=${SOURCE}`,
    amazonLabel: 'Browse horse fly masks on Amazon →',
  },
]

export default function StartupKit() {
  const [packed, setPacked] = useState<Set<string>>(() => new Set())

  const packedCount = packed.size
  const remaining = KIT.length - packedCount

  const summary = useMemo(() => {
    if (packedCount === 0) {
      return 'Check off each item as you gather it. The list is a husbandry starting point — not a ranked product list.'
    }
    if (remaining === 0) {
      return 'All six startup items are checked. Fold the totals into the calculator above and add an emergency fund on top.'
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
        Startup kit
      </div>
      <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
        Shop the first-horse basics
      </h3>
      <p className="text-sm leading-relaxed text-brand-text-mid mb-4">
        The calculator&rsquo;s one-time tack line is a dollar estimate. These six items are
        the searchable, day-one kit that fills it: a halter and lead, a grooming kit, a
        hoof pick, a feed scoop or scale, a barn first-aid kit, and a fly mask. Check
        items off as you gather them. Amazon hops are search results for those categories
        — not a ranked product list, and not a substitute for the tack your barn or
        trainer specifies.
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
        Assumption: this is a planning checklist for a first horse already vetted and
        boarded or kept at home. It does not include a saddle, bridle, or the
        pre-purchase exam — those sit on the calculator&rsquo;s startup line separately.
        Empty Chewy buttons stay hidden.
      </p>
    </div>
  )
}
