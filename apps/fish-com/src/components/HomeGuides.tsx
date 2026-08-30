import Link from 'next/link'
import { EmailCapture, StockImage } from '@carloOS/ui'
import VolumeCalculator from '../app/tools/aquarium-volume-calculator/Calculator'
import { IconArrowRight } from './HomeTriage'

const FILL_IMAGE = '[&>figure]:my-0 [&>div]:my-0 [&_figure]:my-0'

const FEATURED_SPECIES = [
  { name: 'Betta', type: 'Freshwater · Beginner', note: '5 gal min · solitary · tropical', href: '/species/betta-fish' },
  { name: 'Neon Tetra', type: 'Freshwater · Schooling', note: '10 gal min · schools 6+ · peaceful', href: '/species/neon-tetra' },
  { name: 'Corydoras', type: 'Freshwater · Bottom dweller', note: '20 gal · schools 6+ · sand substrate', href: '/species/corydoras' },
  { name: 'Goldfish', type: 'Coldwater · Large', note: '30+ gal · highly bioloaded · long-lived', href: '/species/goldfish' },
]

const TANK_PLANNING = [
  { title: 'Choose tank size', desc: 'Volume calculator + bioload math for the species you want.', href: '/tools/aquarium-volume-calculator' },
  { title: 'Freshwater vs saltwater', desc: 'Cost, complexity, time commitment, what changes month-to-month.', href: '/setup' },
  { title: 'Beginner species', desc: 'Hardy, peaceful, schooling — species most newcomers do well with.', href: '/species' },
  { title: 'Equipment checklist', desc: 'What you actually need before adding your first fish.', href: '/equipment' },
]

const WATER_SAFETY = [
  { title: 'Parameter ranges by species', desc: 'pH, GH, KH, temperature targets — and what "stable" really means.', href: '/setup/water-chemistry-guide' },
  { title: 'Cycling basics', desc: 'The nitrogen cycle explained, and how to know when your tank is ready for fish.', href: '/setup/aquarium-cycling-guide' },
  { title: 'Emergency water changes', desc: 'When to do a large change, how to do it safely, calculator for volume.', href: '/tools/water-change-calculator' },
  { title: 'Nitrogen cycle explained', desc: 'Ammonia to nitrite to nitrate, and why each matters for fish health.', href: '/health/nitrogen-cycle-explained' },
]

const EQUIPMENT_DECISIONS = [
  { title: 'Filters', desc: 'HOB vs. canister vs. sponge vs. sump — picking by tank size and stock.', href: '/equipment/aquarium-filters' },
  { title: 'Heaters', desc: 'Wattage by tank volume, accuracy, redundancy strategy.', href: '/equipment/aquarium-heaters' },
  { title: 'Lighting', desc: 'PAR, spectrum, photoperiod — planted, reef, FOWLR.', href: '/equipment/aquarium-lighting' },
  { title: 'Test kits', desc: 'API vs. Salifert vs. Hanna — what to test for and how often.', href: '/equipment/aquarium-test-kits' },
]

function ToolCard({ href, eyebrow, title, desc, cta }: { href: string; eyebrow: string; title: string; desc: string; cta: string }) {
  return (
    <Link href={href} className="group block bg-white/[0.05] border border-white/[0.10] rounded-xl p-6 no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200">
      <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{eyebrow}</div>
      <h3 className="font-display font-bold text-white text-xl leading-tight mb-2 italic">{title}</h3>
      <p className="text-sm text-white/55 leading-relaxed mb-5">{desc}</p>
      <span className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light group-hover:gap-2.5 transition-all">
        {cta}
        <IconArrowRight />
      </span>
    </Link>
  )
}

export function HomeGuides() {
  return (
    <>
      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div className="flex items-center gap-2.5 mb-3">
          <span className="w-6 h-0.5 bg-brand-primary" />
          <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light">Calculators & Tools</span>
        </div>
        <h2 className="font-display font-bold text-white tracking-tight italic mb-3 max-w-3xl" style={{ fontSize: 'clamp(24px, 3.5vw, 44px)' }}>
          Get a number, not just an article.
        </h2>
        <p className="text-base text-white/60 mb-8 max-w-2xl leading-relaxed">
          Every calculator is built on published aquarist reference data — answer a few questions and get a precise, sourced answer for your tank right now.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          <ToolCard href="/tools/aquarium-volume-calculator" eyebrow="Calculator" title="Aquarium Volume Calculator" desc="Enter length, width, and height in any unit — get exact gallons and liters, plus bioload math for the fish you’re planning to keep." cta="Calculate tank volume" />
          <ToolCard href="/tools/stocking-calculator" eyebrow="Calculator" title="Stocking Calculator" desc="How many fish can your tank safely hold? Bioload-based numbers by species, filter type, and tank footprint — not inch-per-gallon." cta="Check your stocking" />
          <ToolCard href="/tools/water-change-calculator" eyebrow="Calculator" title="Water-Change Calculator" desc="Enter current nitrate level and your target — get the exact percentage and gallon volume to change." cta="Plan your water change" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          <ToolCard href="/tools/heater-wattage-calculator" eyebrow="Calculator" title="Heater Wattage Calculator" desc="Tank volume, room temperature, and target species temperature — get the correct wattage." cta="Size your heater" />
          <ToolCard href="/tools" eyebrow="Tools hub" title="All Calculators" desc="CO₂ calculator for planted tanks, cycling time estimator, equipment recommender, and every other aquarist tool." cta="Browse all tools" />
          <ToolCard href="/glossary" eyebrow="Reference" title="Aquarist Glossary" desc="Plain-English definitions for aquarium terminology — from ammonia and GH/KH to reverse osmosis." cta="Browse the glossary" />
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Tank planning</span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl italic">Planning a new tank? Start here.</h2>
            <p className="text-sm text-brand-text-mid mt-2 max-w-xl">Size, type, species, equipment — the four decisions that determine whether your first 90 days are smooth or painful.</p>
          </div>
          <Link href="/setup" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary no-underline hover:underline whitespace-nowrap">
            All setup guides
            <IconArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
        <div className="bg-brand-white border border-brand-border rounded-xl p-5 sm:p-7 mb-6 shadow-card max-w-3xl">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">Step 1 · Size your tank</div>
          <VolumeCalculator />
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-6 items-stretch">
          <Link href="/setup" className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary transition-all duration-200 min-h-[220px] ${FILL_IMAGE}`}>
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage manifestKey="fish-com:category-planted" alt="A planted freshwater aquarium with healthy aquascaping" aspect="4:3" subtleCredit />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[220px] p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light mb-1.5">Setup hub</div>
              <div className="font-display font-bold text-white text-lg leading-tight mb-1 italic">Build the tank before you buy the fish</div>
              <div className="text-xs text-white/70 leading-relaxed">Cycling, aquascaping, freshwater vs. saltwater — in order.</div>
            </div>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TANK_PLANNING.map((item) => (
              <Link key={item.href} href={item.href} className="block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200">
                <div className="font-display font-bold text-brand-dark text-base mb-2 leading-tight italic">{item.title}</div>
                <div className="text-xs text-brand-text-mid leading-relaxed">{item.desc}</div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark px-container-sm sm:px-container py-section text-white">
        <div className="grid lg:grid-cols-[1fr_1.1fr] gap-8 lg:gap-12 items-center mb-8">
          <div className={`order-2 lg:order-1 rounded-xl overflow-hidden ring-1 ring-white/10 ${FILL_IMAGE}`}>
            <StockImage manifestKey="fish-com:cornerstone-cycling" alt="A freshwater aquarium test kit being used to check water parameters" aspect="4:3" variant="wide" subtleCredit />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light">Water safety</span>
            </div>
            <h2 className="font-display font-bold tracking-tight text-3xl italic mb-4 max-w-3xl">The cycle, the parameters, the emergencies.</h2>
            <p className="text-base text-white/60 leading-relaxed mb-5">Most aquarium problems trace back to one of four water issues. Each guide covers what the readings mean and the specific action that fixes them.</p>
            <div className="flex gap-5 flex-wrap">
              <Link href="/water-parameters" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light no-underline hover:underline">Water chemistry reference <IconArrowRight className="w-3.5 h-3.5" /></Link>
              <Link href="/health" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary-light no-underline hover:underline">All health & disease guides <IconArrowRight className="w-3.5 h-3.5" /></Link>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3">
          {WATER_SAFETY.map((item) => (
            <Link key={item.href} href={item.href} className="block bg-white/[0.04] border border-white/[0.08] rounded-lg p-4 no-underline hover:bg-white/[0.08] hover:border-white/20 transition-all duration-200">
              <div className="font-display font-bold text-white text-base mb-1.5 leading-tight italic">{item.title}</div>
              <div className="text-xs text-white/55 leading-relaxed">{item.desc}</div>
            </Link>
          ))}
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Species & compatibility</span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl italic">Pick fish that won't fight your tank.</h2>
            <p className="text-sm text-brand-text-mid mt-2 max-w-xl">Each species page covers minimum tank size, water parameters, school size, temperament, compatible tank mates, and common health issues.</p>
          </div>
          <Link href="/species" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary no-underline hover:underline">All species <IconArrowRight className="w-3.5 h-3.5" /></Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1.4fr] gap-6 items-stretch">
          <Link href="/species" className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary min-h-[260px] ${FILL_IMAGE}`}>
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage manifestKey="fish-com:cornerstone-species-betta" alt="A vividly colored betta fish displaying its fins in a planted aquarium" aspect="4:3" subtleCredit />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[260px] p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light mb-1.5">Species library</div>
              <div className="font-display font-bold text-white text-xl leading-tight mb-1 italic">37+ profiles with parameter targets</div>
              <div className="text-xs text-white/70 leading-relaxed">Tank size, water chemistry, temperament, and tank mates for each.</div>
            </div>
          </Link>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {FEATURED_SPECIES.map((sp) => (
              <Link key={sp.name} href={sp.href} className="group block bg-brand-white border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200">
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-1">{sp.type}</div>
                <div className="font-display font-bold text-brand-dark text-lg leading-tight mb-1 italic">{sp.name}</div>
                <div className="text-xs text-brand-text-mid leading-snug pt-2 border-t border-brand-border mt-2">{sp.note}</div>
              </Link>
            ))}
          </div>
        </div>
        <Link href="/tools/stocking-calculator" className="inline-flex items-center gap-2 mt-8 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-brand-primary-light">
          Try the stocking calculator
          <IconArrowRight />
        </Link>
      </section>

      <section className="bg-brand-white px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Equipment</span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl italic">Buy once. Pick the right gear.</h2>
          </div>
          <Link href="/equipment" className="inline-flex items-center gap-1.5 text-sm font-bold text-brand-primary no-underline hover:underline">All equipment guides <IconArrowRight className="w-3.5 h-3.5" /></Link>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-[1.4fr_1fr] gap-6 items-stretch">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {EQUIPMENT_DECISIONS.map((item) => (
              <Link key={item.href} href={item.href} className="block bg-brand-surface border border-brand-border rounded-lg p-5 no-underline hover:border-brand-primary hover:shadow-card transition-all duration-200">
                <div className="font-display font-bold text-brand-dark text-base mb-2 leading-tight italic">{item.title}</div>
                <div className="text-xs text-brand-text-mid leading-relaxed">{item.desc}</div>
              </Link>
            ))}
          </div>
          <Link href="/equipment" className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary min-h-[220px] ${FILL_IMAGE}`}>
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage manifestKey="fish-com:category-equipment" alt="Aquarium filtration and heating equipment" aspect="4:3" subtleCredit />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[220px] p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light mb-1.5">Equipment hub</div>
              <div className="font-display font-bold text-white text-lg leading-tight italic">Filtration, heating, lighting, testing.</div>
            </div>
          </Link>
        </div>
        <div className="mt-6 flex gap-4 flex-wrap">
          <Link href="/reviews" className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-brand-primary-light">Compare specific products <IconArrowRight /></Link>
          <Link href="/tools" className="inline-flex items-center border border-brand-border text-brand-text-dark font-medium text-sm px-6 py-3 rounded-lg no-underline hover:border-brand-primary">Browse all calculators</Link>
        </div>
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-10 items-center">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">Product guides</span>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight text-3xl italic mb-4">Compared, not ranked by ad spend.</h2>
            <p className="text-base text-brand-text-mid leading-relaxed mb-6 max-w-xl">Heaters, filters, lighting, canister filters, water-test kits, nano tanks, and planted-tank fertilizers — each guide weighs accuracy, durability, and price.</p>
            <Link href="/reviews" className="inline-flex items-center gap-2 bg-brand-primary text-white font-bold text-sm px-6 py-3 rounded-lg no-underline hover:bg-brand-primary-light">Browse all product guides <IconArrowRight /></Link>
          </div>
          <Link href="/reviews" className={`group relative block rounded-xl overflow-hidden no-underline ring-1 ring-brand-border hover:ring-brand-primary min-h-[220px] ${FILL_IMAGE}`}>
            <div className={`absolute inset-0 ${FILL_IMAGE} [&_figure]:h-full [&_figure]:w-full [&_figure]:![aspect-ratio:auto]`}>
              <StockImage manifestKey="fish-com:category-freshwater" alt="A well-maintained freshwater display aquarium" aspect="4:3" subtleCredit />
            </div>
            <div aria-hidden="true" className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="relative z-10 flex flex-col justify-end h-full min-h-[220px] p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary-light mb-1">All product guides</div>
              <div className="font-display font-bold text-white text-lg leading-tight italic">The gear that earns a place in your tank.</div>
            </div>
          </Link>
        </div>
      </section>

      <section className="bg-brand-primary-pale border-t border-brand-border px-container-sm sm:px-container py-section">
        <EmailCapture
          variant="section"
          siteId="fish-com"
          title="The Weekly Tank"
          subtitle="One short email each week: what to check this week, one parameter to watch by season, one fix or upgrade worth your time."
          source="homepage"
          ctaText="Get the weekly"
          perks={['Seasonal water-quality checks', 'No paid product placements', 'Unsubscribe anytime']}
        />
      </section>

      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-12">
        <div className="max-w-3xl">
          <div className="flex items-center gap-2.5 mb-3">
            <span className="w-6 h-0.5 bg-brand-primary" />
            <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary">How we work</span>
          </div>
          <h2 className="font-display font-bold text-brand-dark tracking-tight text-2xl mb-4 italic">Practical and source-grounded.</h2>
          <p className="text-sm text-brand-text-mid leading-relaxed mb-3">
            Fish.com Editorial writes the guides on this site. We reference published aquarist literature, manufacturer specifications, and species-specific water-parameter data. We don't use AI-generated aquarists or biologists. Affiliate links are disclosed above the fold on every product page.
          </p>
          <div className="flex gap-5 mt-4 flex-wrap">
            <Link href="/editorial-standards" className="text-sm font-semibold text-brand-primary no-underline hover:underline">Editorial standards →</Link>
            <Link href="/disclosure" className="text-sm font-semibold text-brand-primary no-underline hover:underline">Affiliate disclosure →</Link>
          </div>
        </div>
      </section>
    </>
  )
}
