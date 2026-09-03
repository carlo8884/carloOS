'use client'

/**
 * Interactive whelping-kit checklist — /tools/dog-gestation-calculator
 *
 * Husbandry packing list drawn from AKC / AAHA-style whelping prep.
 * Check items off as you gather them. Each row hops to a live Amazon
 * search via /go/amazon-brand (never PLACEHOLDER, never href="#").
 * Chewy stays hidden until a Chewy tag is live.
 */

import { useMemo, useState } from 'react'
import { ShopCtas } from '@carloOS/ui'

const SOURCE = 'tools-dog-gestation-calculator'

interface KitItem {
  id: string
  name: string
  detail: string
  amazonHref: string
  amazonLabel: string
}

const KIT: KitItem[] = [
  {
    id: 'box',
    name: 'Whelping box',
    detail:
      'A washable, draft-free box the dam can lie in fully stretched, with a pig rail so she cannot roll onto a puppy. Set it up by about day 45 so she can acclimate.',
    amazonHref: `/go/amazon-brand/dog+whelping+box?s=${SOURCE}`,
    amazonLabel: 'Browse whelping boxes on Amazon →',
  },
  {
    id: 'pad',
    name: 'Whelping pads',
    detail:
      'Absorbent, washable or disposable pads that stay under the dam during labor and the first days. Have extras — the first 24 hours are messy.',
    amazonHref: `/go/amazon-brand/whelping+pads+for+dogs?s=${SOURCE}`,
    amazonLabel: 'Browse whelping pads on Amazon →',
  },
  {
    id: 'scale',
    name: 'Digital puppy scale',
    detail:
      'A gram-accurate scale to weigh each puppy at birth and daily for the first two weeks. Steady gain is the usual husbandry check that a neonate is nursing.',
    amazonHref: `/go/amazon-brand/digital+puppy+scale?s=${SOURCE}`,
    amazonLabel: 'Browse puppy scales on Amazon →',
  },
  {
    id: 'thermometer',
    name: 'Digital rectal thermometer',
    detail:
      'Many breeders take the dam’s temperature twice daily in the final week. A drop toward ~98–99°F (below the normal ~100–102.5°F) often precedes labor by ~12–24 hours. One signal, not a diagnosis.',
    amazonHref: `/go/amazon-brand/digital+pet+thermometer?s=${SOURCE}`,
    amazonLabel: 'Browse pet thermometers on Amazon →',
  },
  {
    id: 'syringe',
    name: 'Bulb syringe',
    detail:
      'A clean bulb syringe is the usual tool for gently clearing fluid from a newborn’s nose and mouth if the dam does not. Ask your veterinarian to show you how before the due window.',
    amazonHref: `/go/amazon-brand/bulb+syringe+puppy?s=${SOURCE}`,
    amazonLabel: 'Browse bulb syringes on Amazon →',
  },
  {
    id: 'towels',
    name: 'Clean towels',
    detail:
      'A stack of clean, dry towels to dry puppies, keep the box warm, and replace soiled bedding during labor. Cotton kitchen or whelping towels both work.',
    amazonHref: `/go/amazon-brand/cotton+whelping+towels?s=${SOURCE}`,
    amazonLabel: 'Browse whelping towels on Amazon →',
  },
]

export default function WhelpingKit() {
  const [packed, setPacked] = useState<Set<string>>(() => new Set())

  const packedCount = packed.size
  const remaining = KIT.length - packedCount

  const summary = useMemo(() => {
    if (packedCount === 0) {
      return 'Check off each item as you pack it. The list is a husbandry starting point — not a veterinary supply order.'
    }
    if (remaining === 0) {
      return 'All six planning items are checked. Confirm the setup with your veterinarian before the due window, especially if this is a first litter or a brachycephalic breed.'
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
        Whelping kit
      </div>
      <h3 className="font-display text-xl font-bold text-brand-dark mb-2">
        Pack before week 7
      </h3>
      <p className="text-sm leading-relaxed text-brand-text-mid mb-4">
        A typical owner whelping kit is a box, pads, a puppy scale, a digital thermometer, a bulb
        syringe, and a stack of clean towels. Check items off as you gather them. Amazon hops are
        search results for those categories — not a ranked product list, and not a substitute for
        the kit your veterinarian recommends for your dam.
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
        Assumption: this is a planning checklist for a typical vaginal whelping at home under
        veterinary guidance. Brachycephalic and some giant breeds often need a planned cesarean —
        confirm the plan with your veterinarian, not this list. Empty Chewy buttons stay hidden.
      </p>
    </div>
  )
}
