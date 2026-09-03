'use client'

/**
 * Interactive BCS / condition-tracking kit — /tools/body-condition-score
 *
 * Husbandry packing list for scoring and managing condition: tape, brush,
 * measuring stick, score chart, feed scale, and a slow feeder. Check items
 * off as you gather them. Each row hops to a live Amazon search via
 * /go/amazon-brand (never PLACEHOLDER, never href="#"). Chewy stays hidden
 * until a Chewy tag is live.
 */

import { useMemo, useState } from 'react'
import { ShopCtas } from '@carloOS/ui'

const SOURCE = 'tools-body-condition-score'

interface KitItem {
  id: string
  name: string
  detail: string
  amazonHref: string
  amazonLabel: string
}

const KIT: KitItem[] = [
  {
    id: 'weight-tape',
    name: 'Horse weight tape',
    detail:
      'A dedicated equine weight tape (girth marks, often with a length scale) is how you pair a Henneke score with a repeatable weight trend. BCS is fat cover; the tape is mass. Use both on the same day each month so a winter coat or a cresty neck does not hide a change.',
    amazonHref: `/go/amazon-brand/horse+weight+tape?s=${SOURCE}`,
    amazonLabel: 'Browse horse weight tapes on Amazon →',
  },
  {
    id: 'curry-brush',
    name: 'Curry and body brush',
    detail:
      'Henneke scoring is palpation, not a glance over the stall door. A curry and a stiff body brush clear mud and lift a winter coat so you can feel ribs, withers, and the tailhead instead of guessing from silhouette.',
    amazonHref: `/go/amazon-brand/horse+curry+comb+body+brush?s=${SOURCE}`,
    amazonLabel: 'Browse horse curry combs and body brushes on Amazon →',
  },
  {
    id: 'measuring-stick',
    name: 'Measuring stick or height/weight tape',
    detail:
      'A measuring stick (or a height-and-weight tape combo) records frame size next to the BCS. The same 5 on a 14.2hh pony and a 17hh warmblood is a different amount of horse — height plus girth keeps the score honest across seasons.',
    amazonHref: `/go/amazon-brand/horse+measuring+stick?s=${SOURCE}`,
    amazonLabel: 'Browse horse measuring sticks on Amazon →',
  },
  {
    id: 'bcs-chart',
    name: 'Body condition score chart',
    detail:
      'A barn-wall Henneke 1–9 chart (or a pocket score card) is the calibration aid: same descriptors, same six areas, same person scoring. It is an educational reference, not a diagnosis and not a substitute for the calculator above.',
    amazonHref: `/go/amazon-brand/horse+body+condition+score+chart?s=${SOURCE}`,
    amazonLabel: 'Browse horse BCS charts on Amazon →',
  },
  {
    id: 'feed-scoop',
    name: 'Feed scoop or barn scale',
    detail:
      'Weigh the grain and hay instead of scooping by eye. A BCS change of 0.5–1.0 is a ration change, and a scoop or hanging scale is how you keep that change measurable — especially on an easy keeper drifting toward BCS 7.',
    amazonHref: `/go/amazon-brand/horse+feed+scoop+scale?s=${SOURCE}`,
    amazonLabel: 'Browse feed scoops and scales on Amazon →',
  },
  {
    id: 'slow-feeder',
    name: 'Slow-feeder hay net',
    detail:
      'A small-hole hay net or slow feeder extends chew time without adding calories — the usual overweight-management tool when BCS sits at 7+ and concentrates come out. Pair it with the feed calculator; it is not a treatment for EMS or laminitis.',
    amazonHref: `/go/amazon-brand/slow+feeder+hay+net+horse?s=${SOURCE}`,
    amazonLabel: 'Browse slow-feeder hay nets on Amazon →',
  },
]

export default function ConditionKit() {
  const [packed, setPacked] = useState<Set<string>>(() => new Set())

  const packedCount = packed.size
  const remaining = KIT.length - packedCount

  const summary = useMemo(() => {
    if (packedCount === 0) {
      return 'Check off each item as you gather it. The list is a husbandry starting point — not a ranked product list.'
    }
    if (remaining === 0) {
      return 'All six condition-tracking items are checked. Re-score monthly and carry the number into the feed calculator.'
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
        Condition kit
      </div>
      <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
        Shop the BCS tracking kit
      </h3>
      <p className="text-sm leading-relaxed text-brand-text-mid mb-4">
        A useful condition kit is a weight tape, a curry and body brush, a measuring
        stick, a Henneke chart, a feed scoop or scale, and a slow-feeder hay net.
        Check items off as you gather them. Amazon hops are search results for those
        categories — not a ranked product list, and not a substitute for the ration
        or exam your veterinarian specifies when BCS sits outside 4–7.
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
        Assumption: this is a planning checklist for tracking condition on a healthy
        adult horse. It does not diagnose EMS, PPID, or laminitis, and it does not
        replace a livestock scale for medication dosing. Empty Chewy buttons stay hidden.
      </p>
    </div>
  )
}
