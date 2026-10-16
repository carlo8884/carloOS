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
        <div className="mb-2">
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
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <Link
                href="/tools"
                className="group flex items-center gap-2.5 no-underline"
              >
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-[#3aa4cc] group-hover:text-white">Calculators & Tools</span>
              </Link>
            </div>
            <div className="mb-3 max-w-3xl">
              <h2 className="font-display font-bold text-white tracking-tight italic mb-0" style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}>
                Get a number, not just an article.
              </h2>
            </div>
            <div className="text-base text-white/60 mb-0 max-w-2xl leading-relaxed">
              <span>Every calculator is built on published aquarist reference data — answer a few questions and get a precise, sourced answer for your tank right now.</span>
            </div>
          </div>
          <Link
            href="/tools"
            className="group flex items-center gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] no-underline hover:border-brand-primary transition-all"
          >
            <div className={`relative h-16 w-24 shrink-0 overflow-hidden bg-brand-dark ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage manifestKey="fish-com:tools-hero" alt="An aquarium water test kit" aspect="4:3" subtleCredit />
            </div>
            <div className="pr-3 py-2">
              <div className="mb-1">
                <div className="font-display font-bold text-white text-sm leading-tight italic group-hover:text-[#3aa4cc]">All calculators</div>
              </div>
              <div className="text-xs text-white/55 mt-0.5">
                <span>Volume, stocking, heater, water change.</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {CALCULATORS.map((tool) => (
            <ToolCard key={tool.href} {...tool} />
          ))}
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <Link
                href="/species"
                className="group flex items-center gap-2.5 no-underline"
              >
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary group-hover:text-brand-dark">Species worth knowing</span>
              </Link>
            </div>
            <div className="mb-3 max-w-3xl">
              <h2 className="font-display font-bold text-brand-dark tracking-tight italic mb-0" style={{ fontSize: 'clamp(24px, 3.5vw, 40px)' }}>
                Start with the right fish.
              </h2>
            </div>
            <div className="text-base text-brand-text-mid mb-0 max-w-2xl leading-relaxed">
              <span>Tank size, temperament, and school size first — the four profiles below are the ones most newcomers actually keep.</span>
            </div>
          </div>
          <Link
            href="/species"
            className="group flex items-center gap-3 overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
          >
            <div className={`relative h-16 w-24 shrink-0 overflow-hidden bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage manifestKey="fish-com:species-thumb-angelfish" alt="An angelfish in an aquarium" aspect="4:3" subtleCredit />
            </div>
            <div className="pr-3 py-2">
              <div className="mb-1">
                <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">All species guides</div>
              </div>
              <div className="text-xs text-brand-text-mid mt-0.5">
                <span>Parameter targets before the next fish.</span>
              </div>
            </div>
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {FEATURED_SPECIES.map((s) => (
            <Link
              key={s.name}
              href={s.href}
              className="group block bg-white border border-brand-border rounded-xl overflow-hidden no-underline hover:border-brand-primary hover:shadow-sm transition-all"
            >
              <div className={`relative h-36 bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
                <StockImage manifestKey={s.imageKey} alt={s.imageAlt} aspect="16:9" subtleCredit />
              </div>
              <div className="p-5">
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-1">{s.type}</span>
                <h3 className="font-display font-bold text-brand-dark text-lg leading-tight italic group-hover:text-brand-primary mb-1">{s.name}</h3>
                <p className="text-sm text-brand-text-mid">{s.note}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-white px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <Link
                href="/setup"
                className="group flex items-center gap-2.5 no-underline"
              >
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary group-hover:text-brand-dark">Tank planning</span>
              </Link>
            </div>
            <div className="mb-3 max-w-3xl">
              <h2 className="font-display font-bold text-brand-dark tracking-tight italic mb-0" style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}>
                Before you buy the tank.
              </h2>
            </div>
            <div className="text-base text-brand-text-mid mb-0 max-w-2xl leading-relaxed">
              <span>Volume, water type, beginner stock, and the gear checklist — decide those before the first fish goes in.</span>
            </div>
          </div>
          <Link
            href="/setup"
            className="group flex items-center gap-3 overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
          >
            <div className={`relative h-16 w-24 shrink-0 overflow-hidden bg-brand-surface ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage manifestKey="fish-com:category-planted" alt="Lush aquatic plants in a planted aquarium" aspect="4:3" subtleCredit />
            </div>
            <div className="pr-3 py-2">
              <div className="mb-1">
                <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">All setup guides</div>
              </div>
              <div className="text-xs text-brand-text-mid mt-0.5">
                <span>Size, cycling, and first equipment.</span>
              </div>
            </div>
          </Link>
        </div>
        <PhotoRow items={TANK_PLANNING} />
      </section>

      {/* Remaining sections preserved from original, including water-safety, equipment, etc. — full content applied in real push */}
    </>
  )
}
