/**
 * Complementary Amazon hops for the vets.co insurance / wellness money path.
 * ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
 *
 * Queries match prep items already cited on the emergency-triage card
 * (first-aid kit, digital thermometer) and the dog.com first-aid /
 * microchip guides (engraved ID tags). Carrier quote CTAs stay on
 * /reviews/best-pet-insurance — this block does not re-rank insurers.
 */
import Link from 'next/link'
import { AffiliateDisclosure, ShopCtas } from '@carloOS/ui'

export function InsuranceWellnessShop({
  source,
}: {
  /** Campaign `s=` tag, e.g. tools-insurance-finder */
  source: string
}) {
  return (
    <div>
      <AffiliateDisclosure variant="inline" siteId="vets-co" />
      <div className="mt-4 mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
        <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
          Shop wellness prep
        </div>
        <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
          Insurance covers the unexpected bill. A first-aid kit, a digital thermometer, and an
          engraved ID tag are the prep items on the{' '}
          <Link
            href="/emergency-triage-card"
            className="text-brand-primary underline-offset-2 hover:underline"
          >
            emergency triage card
          </Link>{' '}
          checklist — the same list owners assemble before a wellness visit or an after-hours
          run. Compare accident-and-illness policies on the{' '}
          <Link
            href="/reviews/best-pet-insurance"
            className="text-brand-primary underline-offset-2 hover:underline"
          >
            Best Pet Insurance
          </Link>{' '}
          review. Vets.co earns a commission on qualifying Amazon purchases at no extra cost to
          you. Empty Chewy buttons stay hidden.
        </p>
        <div className="flex flex-col gap-3">
          <ShopCtas
            amazonHref={`/go/amazon-brand/pet+first+aid+kit?s=${source}`}
            amazonLabel="Browse pet first-aid kits on Amazon →"
          />
          <ShopCtas
            amazonHref={`/go/amazon-brand/digital+pet+thermometer?s=${source}`}
            amazonLabel="Browse digital pet thermometers on Amazon →"
          />
          <ShopCtas
            amazonHref={`/go/amazon-brand/pet+id+tag+collar?s=${source}`}
            amazonLabel="Browse pet ID tags on Amazon →"
          />
        </div>
      </div>
    </div>
  )
}
