'use client'

import { AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { useStockingWater } from './StockingWaterContext'

type ShopHop = {
  amazonHref: string
  amazonLabel: string
}

const FRESH_HOPS: ShopHop[] = [
  {
    amazonHref: '/go/amazon-brand/aquaclear+70+filter?s=tools-stocking-calculator',
    amazonLabel: 'Shop AquaClear HOB filters on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/fluval+307+canister+filter?s=tools-stocking-calculator',
    amazonLabel: 'Shop Fluval canister filters on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/fluval+spec+v+5+gallon?s=tools-stocking-calculator',
    amazonLabel: 'Shop Fluval Spec nano tanks on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/eheim+jager+heater?s=tools-stocking-calculator',
    amazonLabel: 'Shop aquarium heaters on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/aquarium+sand?s=tools-stocking-calculator',
    amazonLabel: 'Shop aquarium sand on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/api+freshwater+master+test+kit?s=tools-stocking-calculator',
    amazonLabel: 'Shop freshwater test kits on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/aquarium+fish+net+acclimation+kit?s=tools-stocking-calculator',
    amazonLabel: 'Shop nets and acclimation kits on Amazon →',
  },
]

const SALT_HOPS: ShopHop[] = [
  {
    amazonHref: '/go/amazon-brand/protein+skimmer?s=tools-stocking-calculator',
    amazonLabel: 'Shop protein skimmers on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/saltwater+aquarium+canister+filter?s=tools-stocking-calculator',
    amazonLabel: 'Shop saltwater canister filters on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/fluval+evo+saltwater+nano?s=tools-stocking-calculator',
    amazonLabel: 'Shop Fluval Evo marine nano tanks on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/eheim+jager+heater?s=tools-stocking-calculator',
    amazonLabel: 'Shop aquarium heaters on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/live+aragonite+sand?s=tools-stocking-calculator',
    amazonLabel: 'Shop live aragonite sand on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/api+saltwater+master+test+kit?s=tools-stocking-calculator',
    amazonLabel: 'Shop saltwater test kits on Amazon →',
  },
  {
    amazonHref: '/go/amazon-brand/aquarium+drip+acclimation+kit?s=tools-stocking-calculator',
    amazonLabel: 'Shop drip acclimation kits on Amazon →',
  },
]

export default function StockingShop() {
  const { waterType } = useStockingWater()
  const hops = waterType === 'salt' ? SALT_HOPS : FRESH_HOPS
  const kitLabel = waterType === 'salt' ? 'saltwater / marine' : 'freshwater'

  return (
    <div id="shop" className="mb-8 rounded-xl border border-brand-border bg-brand-surface p-5">
      <div className="mb-2 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
        Shop a {kitLabel} stocking kit
      </div>
      <p className="mb-4 text-sm leading-relaxed text-brand-text-mid">
        These Amazon searches follow the water type selected in the calculator
        ({kitLabel}). They are category searches, not a ranked product list, and
        they do not replace veterinary or livestock-store advice.
      </p>
      <AffiliateDisclosure variant="inline" siteId="fish-com" />
      <div className="flex flex-col gap-3">
        {hops.map((hop) => (
          <ShopCtas
            key={hop.amazonHref}
            amazonHref={hop.amazonHref}
            amazonLabel={hop.amazonLabel}
          />
        ))}
      </div>
    </div>
  )
}
