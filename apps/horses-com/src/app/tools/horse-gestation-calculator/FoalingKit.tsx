'use client'

/**
 * Interactive foaling-kit checklist — /tools/horse-gestation-calculator
 *
 * Husbandry packing list drawn from AAEP / extension-style foal-watch prep.
 * Check items off as you gather them. Each row hops to a live Amazon
 * search via /go/amazon-brand (never PLACEHOLDER, never href="#").
 * Chewy stays hidden until a Chewy tag is live.
 */

import { useMemo, useState } from 'react'
import { ShopCtas } from '@carloOS/ui'

const SOURCE = 'tools-horse-gestation-calculator'

interface KitItem {
  id: string
  name: string
  detail: string
  amazonHref: string
  amazonLabel: string
}

const KIT: KitItem[] = [
  {
    id: 'thermometer',
    name: 'Digital thermometer',
    detail:
      'Many barns take the mare’s temperature twice daily in the last two weeks of the foaling window. A drop of about 1°F from her own baseline often precedes labor by ~24 hours. One owner signal, not a diagnosis — confirm the plan with your veterinarian.',
    amazonHref: `/go/amazon-brand/digital+equine+thermometer?s=${SOURCE}`,
    amazonLabel: 'Browse equine thermometers on Amazon →',
  },
  {
    id: 'navel-dip',
    name: 'Iodine or navel dip',
    detail:
      'A navel dip (typically dilute iodine or chlorhexidine, as your veterinarian specifies) is the usual first-hour treatment of the foal’s umbilical stump. Have the bottle labeled and ready before the early window; do not invent a concentration from this list.',
    amazonHref: `/go/amazon-brand/iodine+navel+dip+foal?s=${SOURCE}`,
    amazonLabel: 'Browse foal navel dip on Amazon →',
  },
  {
    id: 'towels',
    name: 'Clean towels',
    detail:
      'A stack of clean, dry towels to dry the foal, keep the stall usable, and replace soiled bedding during labor. Foaling is messy — have extras, not just the two in the tack trunk.',
    amazonHref: `/go/amazon-brand/clean+cotton+towels?s=${SOURCE}`,
    amazonLabel: 'Browse clean towels on Amazon →',
  },
  {
    id: 'headlamp',
    name: 'Flashlight or headlamp',
    detail:
      'Most mares foal at night. A hands-free headlamp (or a bright flashlight that stays put) lets you see the mare, the foal, and the navel without occupying both hands.',
    amazonHref: `/go/amazon-brand/LED+headlamp?s=${SOURCE}`,
    amazonLabel: 'Browse headlamps on Amazon →',
  },
  {
    id: 'gloves',
    name: 'Disposable exam gloves',
    detail:
      'A box of clean exam gloves for anyone who has to handle the foal, the navel, or the placenta. Hygiene is the point — this is not a substitute for calling your veterinarian if labor is not progressing.',
    amazonHref: `/go/amazon-brand/disposable+exam+gloves?s=${SOURCE}`,
    amazonLabel: 'Browse exam gloves on Amazon →',
  },
  {
    id: 'alarm',
    name: 'Foaling alarm or stall camera',
    detail:
      'A foaling alarm, halter transmitter, or stall camera so you can watch without sitting up every night from day 320. Treat it as a watch aid — it does not replace a foaling plan with your veterinarian.',
    amazonHref: `/go/amazon-brand/foaling+alarm?s=${SOURCE}`,
    amazonLabel: 'Browse foaling alarms on Amazon →',
  },
]

export default function FoalingKit() {
  const [packed, setPacked] = useState<Set<string>>(() => new Set())

  const packedCount = packed.size
  const remaining = KIT.length - packedCount

  const summary = useMemo(() => {
    if (packedCount === 0) {
      return 'Check off each item as you pack it. The list is a husbandry starting point — not a veterinary supply order.'
    }
    if (remaining === 0) {
      return 'All six planning items are checked. Confirm the foaling plan with your veterinarian before the early window, especially if this is a maiden mare.'
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
        Foaling kit
      </div>
      <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
        Pack before the early window
      </h3>
      <p className="text-sm leading-relaxed text-brand-text-mid mb-4">
        A typical owner foaling kit is a digital thermometer, a navel dip your veterinarian
        specifies, a stack of clean towels, a headlamp, exam gloves, and a foaling alarm or stall
        camera. Check items off as you gather them. Amazon hops are search results for those
        categories — not a ranked product list, and not a substitute for the kit your veterinarian
        recommends for your mare.
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
        Assumption: this is a planning checklist for a typical unassisted foaling at home under
        veterinary guidance. Maiden mares, twins, and any mare with a history of dystocia often
        need a different plan — confirm that with your veterinarian, not this list. Empty Chewy
        buttons stay hidden.
      </p>
    </div>
  )
}
