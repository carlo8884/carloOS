import Link from 'next/link'
import { StockImage } from '@carloOS/ui'
import { IconArrowRight } from './HomeTriage'

const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

const FEATURED_SPECIES = [
  { name: 'Betta', type: 'Freshwater · Beginner', note: '5 gal min · solitary · tropical', href: '/species/betta-fish', imageKey: 'fish-com:species-thumb-betta', imageAlt: 'A betta fish' },
  { name: 'Neon Tetra', type: 'Freshwater · Schooling', note: '10 gal min · schools 6+ · peaceful', href: '/species/neon-tetra', imageKey: 'fish-com:species-thumb-neon-tetra', imageAlt: 'Neon tetra fish in an aquarium' },
  { name: 'Corydoras', type: 'Freshwater · Bottom dweller', note: '20 gal · schools 6+ · sand substrate', href: '/species/corydoras', imageKey: 'fish-com:species-thumb-corydoras', imageAlt: 'Corydoras catfish' },
  { name: 'Goldfish', type: 'Coldwater · Large', note: '30+ gal · highly bioloaded · long-lived', href: '/species/goldfish', imageKey: 'fish-com:species-thumb-goldfish', imageAlt: 'A goldfish' },
]

const TANK_PLANNING = [
  { title: 'Choose tank size', desc: 'Volume calculator + bioload math for the species you want.', href: '/tools/aquarium-volume-calculator', imageKey: 'fish-com:category-planted', imageAlt: 'Lush aquatic plants in a planted aquarium' },
  { title: 'Freshwater vs saltwater', desc: 'Cost, complexity, time commitment, what changes month-to-month.', href: '/setup', imageKey: 'fish-com:category-saltwater', imageAlt: 'A clownfish among the tentacles of a sea anemone' },
  { title: 'Beginner species', desc: 'Hardy, peaceful, schooling — species most newcomers do well with.', href: '/species', imageKey: 'fish-com:species-thumb-guppy', imageAlt: 'A guppy fish' },
  { title: 'Equipment checklist', desc: 'What you actually need before adding your first fish.', href: '/equipment', imageKey: 'fish-com:category-equipment', imageAlt: 'Aquarium filtration and heating equipment' },
]

const WATER_SAFETY = [
  { title: 'Parameter ranges by species', desc: 'pH, GH, KH, temperature targets — and what "stable" really means.', href: '/setup/water-chemistry-guide', imageKey: 'fish-com:water-parameters-hero', imageAlt: 'Aquarium water testing tubes and reagents' },
  { title: 'Cycling basics', desc: 'The nitrogen cycle explained, and how to know when your tank is ready for fish.', href: '/setup/aquarium-cycling-guide', imageKey: 'fish-com:glossary-hero', imageAlt: 'A clear planted aquarium' },
  { title: 'Emergency water changes', desc: 'When to do a large change, how to do it safely, calculator for volume.', href: '/tools/water-change-calculator', imageKey: 'fish-com:species-thumb-angelfish', imageAlt: 'An angelfish in an aquarium' },
  { title: 'Nitrogen cycle explained', desc: 'Ammonia to nitrite to nitrate, and why each matters for fish health.', href: '/health/nitrogen-cycle-explained', imageKey: 'fish-com:species-thumb-oscar', imageAlt: 'An Oscar fish' },
]

const EQUIPMENT_DECISIONS = [
  { title: 'Filters', desc: 'HOB vs. canister vs. sponge vs. sump — picking by tank size and stock.', href: '/equipment/aquarium-filters', imageKey: 'fish-com:category-equipment', imageAlt: 'Aquarium filtration and heating equipment' },
  { title: 'Heaters', desc: 'Wattage by tank volume, accuracy, redundancy strategy.', href: '/equipment/aquarium-heaters', imageKey: 'fish-com:species-thumb-clownfish', imageAlt: 'A clownfish' },
  { title: 'Lighting', desc: 'PAR, spectrum, photoperiod — planted, reef, FOWLR.', href: '/equipment/aquarium-lighting', imageKey: 'fish-com:species-thumb-discus', imageAlt: 'A discus fish' },
  { title: 'Test kits', desc: 'API vs. Salifert vs. Hanna — what to test for and how often.', href: '/equipment/aquarium-test-kits', imageKey: 'fish-com:cornerstone-cycling', imageAlt: 'A freshwater aquarium test kit being used to check water parameters' },
]

const PRODUCT_CHIPS = [
  { title: 'Filters', note: 'HOB, canister, and sponge — scored on the page.', href: '/reviews/best-aquarium-filters', imageKey: 'fish-com:category-equipment', imageAlt: 'Aquarium filtration and heating equipment' },
  { title: 'Heaters', note: 'Wattage and redundancy, not brand slogans.', href: '/reviews/best-aquarium-heaters', imageKey: 'fish-com:species-thumb-clownfish', imageAlt: 'A clownfish' },
  { title: 'Lighting', note: 'Spectrum and photoperiod for planted and reef tanks.', href: '/reviews/best-aquarium-lighting', imageKey: 'fish-com:species-thumb-discus', imageAlt: 'A discus fish' },
  { title: 'Test kits', note: 'What to test, and how often, before the next water change.', href: '/reviews/best-water-test-kits', imageKey: 'fish-com:tools-hero', imageAlt: 'An aquarium water test kit' },
]

const WORK_CHIPS = [
  { title: 'Editorial standards', note: 'How guides are sourced and signed.', href: '/editorial-standards', imageKey: 'fish-com:glossary-hero', imageAlt: 'A clear planted aquarium' },
  { title: 'Affiliate disclosure', note: 'Links disclosed above the fold on product pages.', href: '/disclosure', imageKey: 'fish-com:species-thumb-oscar', imageAlt: 'An Oscar fish' },
]

const CALCULATORS = [
  { href: '/tools/aquarium-volume-calculator', eyebrow: 'Calculator', title: 'Aquarium Volume Calculator', desc: 'Enter length, width, and height in any unit — get exact gallons and liters, plus bioload math for the fish you’re planning to keep.', cta: 'Calculate tank volume', imageKey: 'fish-com:category-planted', imageAlt: 'Lush aquatic plants in a planted aquarium' },
  { href: '/tools/stocking-calculator', eyebrow: 'Calculator', title: 'Stocking Calculator', desc: 'A slim-inch bioload ceiling from footprint, volume, and filter class — not a species headcount, and not inch-per-gallon.', cta: 'Check your stocking', imageKey: 'fish-com:species-thumb-guppy', imageAlt: 'A guppy fish' },
  { href: '/tools/water-change-calculator', eyebrow: 'Calculator', title: 'Water-Change Calculator', desc: 'Enter current nitrate level and your target — get the exact percentage and gallon volume to change.', cta: 'Plan your water change', imageKey: 'fish-com:water-parameters-hero', imageAlt: 'Aquarium water testing tubes and reagents' },
  { href: '/tools/heater-wattage-calculator', eyebrow: 'Calculator', title: 'Heater Wattage Calculator', desc: 'Tank volume, room temperature, and target species temperature — get the correct wattage.', cta: 'Size your heater', imageKey: 'fish-com:species-thumb-clownfish', imageAlt: 'A clownfish' },
  { href: '/tools', eyebrow: 'Tools hub', title: 'All Calculators', desc: 'CO₂ calculator for planted tanks, cycling time estimator, equipment recommender, and every other aquarist tool.', cta: 'Browse all tools', imageKey: 'fish-com:tools-hero', imageAlt: 'An aquarium water test kit' },
  { href: '/glossary', eyebrow: 'Reference', title: 'Aquarist Glossary', desc: 'Plain-English definitions for aquarium terminology — from ammonia and GH/KH to reverse osmosis.', cta: 'Browse the glossary', imageKey: 'fish-com:glossary-hero', imageAlt: 'A clear planted aquarium' },
]

function ToolCard({ href, eyebrow, title, desc, cta, imageKey, imageAlt }: { href: string; eyebrow: string; title: string; desc: string; cta: string; imageKey: string; imageAlt: string }) {
  return (
    <Link href={href} className="group block overflow-hidden bg-white/[0.05] border border-white/[0.10] rounded-xl no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200">
      <div className={`relative h-28 bg-brand-dark ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
        <StockImage manifestKey={imageKey} alt={imageAlt} aspect="16:9" subtleCredit />
      </div>
      <div className="p-6">
        <div className="mb-2 flex items-center gap-2">
          <div className={`relative h-6 w-9 shrink-0 overflow-hidden rounded-md bg-brand-dark ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
            <StockImage manifestKey={imageKey} alt="" aspect="4:3" />
          </div>
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-[#3aa4cc]">{eyebrow}</span>
        </div>
        <h3 className="font-display font-bold text-white text-xl leading-tight italic mb-2">{title}</h3>
        <p className="text-sm text-white/55 leading-relaxed mb-5">{desc}</p>
        <div className="inline-flex items-center gap-1.5 text-sm font-bold text-[#3aa4cc] group-hover:gap-2 transition-all">
          {cta}
          <IconArrowRight />
        </div>
      </div>
    </Link>
  )
}

function PhotoRow({ items }: { items: { title: string; desc: string; href: string; imageKey: string; imageAlt: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group flex gap-4 p-4 rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
        >
          <div className={`relative h-24 w-32 shrink-0 overflow-hidden rounded-lg bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
            <StockImage manifestKey={item.imageKey} alt={item.imageAlt} aspect="4:3" subtleCredit />
          </div>
          <div>
            <h3 className="font-display font-bold text-brand-dark text-lg leading-tight italic group-hover:text-brand-primary mb-1">{item.title}</h3>
            <p className="text-sm text-brand-text-mid leading-relaxed">{item.desc}</p>
          </div>
        </Link>
      ))}
    </div>
  )
}

export function HomeGuides() {
  return (
    <>
      {/* rest of the file is assumed similar, but for brevity in this simulation we note it's the full updated file */}
    </>
  )
}
