import Link from 'next/link'
import { IconArrowRight } from './HomeTriage'

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

const PRODUCT_CHIPS = [
  { title: 'Filters', note: 'HOB, canister, and sponge — scored on the page.', href: '/reviews/best-aquarium-filters' },
  { title: 'Heaters', note: 'Wattage and redundancy, not brand slogans.', href: '/reviews/best-aquarium-heaters' },
  { title: 'Lighting', note: 'Spectrum and photoperiod for planted and reef tanks.', href: '/reviews/best-aquarium-lighting' },
  { title: 'Test kits', note: 'What to test, and how often, before the next water change.', href: '/reviews/best-water-test-kits' },
]

const WORK_CHIPS = [
  { title: 'Editorial standards', note: 'How guides are sourced and signed.', href: '/editorial-standards' },
  { title: 'Affiliate disclosure', note: 'Links disclosed above the fold on product pages.', href: '/disclosure' },
]

const CALCULATORS = [
  { href: '/tools/aquarium-volume-calculator', eyebrow: 'Calculator', title: 'Aquarium Volume Calculator', desc: 'Enter length, width, and height in any unit — get exact gallons and liters, plus bioload math for the fish you’re planning to keep.', cta: 'Calculate tank volume' },
  { href: '/tools/stocking-calculator', eyebrow: 'Calculator', title: 'Stocking Calculator', desc: 'A slim-inch bioload ceiling from footprint, volume, and filter class — not a species headcount, and not inch-per-gallon.', cta: 'Check your stocking' },
  { href: '/tools/water-change-calculator', eyebrow: 'Calculator', title: 'Water-Change Calculator', desc: 'Enter current nitrate level and your target — get the exact percentage and gallon volume to change.', cta: 'Plan your water change' },
  { href: '/tools/heater-wattage-calculator', eyebrow: 'Calculator', title: 'Heater Wattage Calculator', desc: 'Tank volume, room temperature, and target species temperature — get the correct wattage.', cta: 'Size your heater' },
  { href: '/tools', eyebrow: 'Tools hub', title: 'All Calculators', desc: 'CO₂ calculator for planted tanks, cycling time estimator, equipment recommender, and every other aquarist tool.', cta: 'Browse all tools' },
  { href: '/glossary', eyebrow: 'Reference', title: 'Aquarist Glossary', desc: 'Plain-English definitions for aquarium terminology — from ammonia and GH/KH to reverse osmosis.', cta: 'Browse the glossary' },
]

function ToolCard({ href, eyebrow, title, desc, cta }: { href: string; eyebrow: string; title: string; desc: string; cta: string }) {
  return (
    <Link href={href} className="group block overflow-hidden bg-white/[0.05] border border-white/[0.10] rounded-xl no-underline hover:bg-white/[0.10] hover:border-brand-primary transition-all duration-200">
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

function PhotoRow({ items }: { items: { title: string; desc: string; href: string }[] }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      {items.map((item) => (
        <Link
          key={item.title}
          href={item.href}
          className="group flex items-start justify-between gap-4 p-5 rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
        >
          <div>
            <h3 className="font-display font-bold text-brand-dark text-lg leading-tight italic group-hover:text-brand-primary mb-1">{item.title}</h3>
            <p className="text-sm text-brand-text-mid leading-relaxed mb-0">{item.desc}</p>
          </div>
          <IconArrowRight className="mt-1 shrink-0 text-brand-primary transition-transform group-hover:translate-x-0.5" />
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
            <div className="px-4 py-2.5">
              <div className="mb-1">
                <div className="font-display font-bold text-white text-sm leading-tight italic group-hover:text-[#3aa4cc]">All calculators <span aria-hidden="true">→</span></div>
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
            <div className="px-4 py-2.5">
              <div className="mb-1">
                <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">All species guides <span aria-hidden="true">→</span></div>
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
              className="group flex items-start justify-between gap-4 p-5 bg-white border border-brand-border rounded-xl no-underline hover:border-brand-primary hover:shadow-sm transition-all"
            >
              <div>
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary block mb-1">{s.type}</span>
                <h3 className="font-display font-bold text-brand-dark text-lg leading-tight italic group-hover:text-brand-primary mb-1">{s.name}</h3>
                <p className="text-sm text-brand-text-mid mb-0">{s.note}</p>
              </div>
              <IconArrowRight className="mt-1 shrink-0 text-brand-primary transition-transform group-hover:translate-x-0.5" />
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
            <div className="px-4 py-2.5">
              <div className="mb-1">
                <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">All setup guides <span aria-hidden="true">→</span></div>
              </div>
              <div className="text-xs text-brand-text-mid mt-0.5">
                <span>Size, cycling, and first equipment.</span>
              </div>
            </div>
          </Link>
        </div>
        <PhotoRow items={TANK_PLANNING} />
      </section>

      <section className="bg-brand-surface px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <Link
                href="/water"
                className="group flex items-center gap-2.5 no-underline"
              >
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary group-hover:text-brand-dark">Water safety</span>
              </Link>
            </div>
            <div className="mb-3 max-w-3xl">
              <h2 className="font-display font-bold text-brand-dark tracking-tight italic mb-0" style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}>
                The parameters that actually matter.
              </h2>
            </div>
            <div className="text-base text-brand-text-mid mb-0 max-w-2xl leading-relaxed">
              <span>Stable beats perfect. Ranges, cycling, emergency changes, and the nitrogen cycle are the four checks that keep fish alive.</span>
            </div>
          </div>
          <Link
            href="/water"
            className="group flex items-center gap-3 overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
          >
            <div className="px-4 py-2.5">
              <div className="mb-1">
                <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">Water guides <span aria-hidden="true">→</span></div>
              </div>
              <div className="text-xs text-brand-text-mid mt-0.5">
                <span>Ranges, cycling, and emergency changes.</span>
              </div>
            </div>
          </Link>
        </div>
        <PhotoRow items={WATER_SAFETY} />
      </section>

      <section className="bg-brand-white px-container-sm sm:px-container py-section">
        <div className="flex items-end justify-between mb-7 flex-wrap gap-4">
          <div>
            <div className="flex items-center gap-2.5 mb-3">
              <span className="w-6 h-0.5 bg-brand-primary" />
              <Link
                href="/equipment"
                className="group flex items-center gap-2.5 no-underline"
              >
                <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary group-hover:text-brand-dark">Equipment decisions</span>
              </Link>
            </div>
            <h2 className="font-display font-bold text-brand-dark tracking-tight italic mb-0" style={{ fontSize: 'clamp(22px, 3vw, 36px)' }}>
              Gear that earns its place.
            </h2>
            <p className="text-base text-brand-text-mid mt-3 mb-0 max-w-2xl leading-relaxed">
              Filter, heater, light, and test kit — pick by tank size and stock, not by what a listing ranks first.
            </p>
          </div>
          <Link
            href="/equipment"
            className="group flex items-center gap-3 overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
          >
            <div className="px-4 py-2.5">
              <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">All equipment guides <span aria-hidden="true">→</span></div>
              <div className="text-xs text-brand-text-mid mt-0.5">Filters, heaters, lighting, and kits.</div>
            </div>
          </Link>
        </div>
        <PhotoRow items={EQUIPMENT_DECISIONS} />
      </section>

      <section className="bg-brand-dark px-container-sm sm:px-container py-section">
        <div>
          <div className="max-w-3xl">
            <div className="flex items-end justify-between mb-4 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-6 h-0.5 bg-brand-primary" />
                  <Link
                    href="/reviews"
                    className="group flex items-center gap-2.5 no-underline"
                  >
                    <span className="text-2xs font-bold tracking-eyebrow uppercase text-[#3aa4cc] group-hover:text-white">Product guides</span>
                  </Link>
                </div>
                <div className="mb-3 max-w-3xl">
                  <h2 className="font-display font-bold text-white tracking-tight text-3xl italic mb-0">Compared, not ranked by ad spend.</h2>
                </div>
              </div>
              <Link
                href="/reviews"
                className="group flex items-center gap-3 overflow-hidden rounded-xl border border-white/15 bg-white/[0.05] no-underline hover:border-brand-primary transition-all"
              >
                <div className="px-4 py-2">
                  <div className="mb-1">
                    <div className="font-display font-bold text-white text-sm leading-tight italic group-hover:text-[#3aa4cc]">All product guides</div>
                  </div>
                  <div className="text-xs text-white/55 mt-0.5">
                    <span>Filters, heaters, lighting, test kits.</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-base text-white/70 leading-relaxed mb-6 max-w-xl">
              <span>Heaters, filters, lighting, canister filters, water-test kits, nano tanks, and planted-tank fertilizers — each guide weighs accuracy, durability, and price.</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {PRODUCT_CHIPS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start justify-between gap-3 overflow-hidden rounded-xl border border-white/10 bg-white/[0.05] no-underline hover:border-brand-primary transition-all"
                >
                  <div className="py-3 pl-4 pr-1">
                    <div className="mb-1">
                      <div className="font-display font-bold text-white text-sm leading-tight italic group-hover:text-[#3aa4cc]">{item.title}</div>
                    </div>
                    <div className="text-xs text-white/55 mt-1 leading-relaxed">
                      <span>{item.note}</span>
                    </div>
                  </div>
                  <IconArrowRight className="mt-3.5 mr-3 h-4 w-4 shrink-0 text-white/40 group-hover:text-[#3aa4cc]" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-brand-white border-t border-brand-border px-container-sm sm:px-container py-12">
        <div>
          <div className="max-w-3xl">
            <div className="flex items-end justify-between mb-4 flex-wrap gap-4">
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="w-6 h-0.5 bg-brand-primary" />
                  <Link
                    href="/editorial-standards"
                    className="group flex items-center gap-2.5 no-underline"
                  >
                    <span className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary group-hover:text-brand-dark">How we work</span>
                  </Link>
                </div>
                <h2 className="font-display font-bold text-brand-dark tracking-tight text-2xl italic mb-0">Practical and source-grounded.</h2>
              </div>
              <Link
                href="/editorial-standards"
                className="group flex items-center gap-3 overflow-hidden rounded-xl border border-brand-border bg-white no-underline hover:border-brand-primary transition-all"
              >
                <div className="px-3 py-2">
                  <div className="mb-1">
                    <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">Editorial standards</div>
                  </div>
                  <div className="text-xs text-brand-text-mid mt-0.5">
                    <span>Signed guides, no invented experts.</span>
                  </div>
                </div>
              </Link>
            </div>
            <div className="text-sm text-brand-text-mid leading-relaxed mb-3">
              <span>Fish.com Editorial writes the guides on this site. We reference published aquarist literature, manufacturer specifications, and species-specific water-parameter data. We don't use AI-generated aquarists or biologists. Affiliate links are disclosed above the fold on every product page.</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-4">
              {WORK_CHIPS.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group flex items-start justify-between gap-3 overflow-hidden rounded-xl border border-brand-border bg-brand-surface no-underline hover:border-brand-primary transition-all"
                >
                  <div className="py-3 pl-4 pr-1">
                    <div className="mb-1">
                      <div className="font-display font-bold text-brand-dark text-sm leading-tight italic group-hover:text-brand-primary">{item.title}</div>
                    </div>
                    <div className="text-xs text-brand-text-mid mt-1 leading-relaxed">
                      <span>{item.note}</span>
                    </div>
                  </div>
                  <IconArrowRight className="mt-3.5 mr-3 h-4 w-4 shrink-0 text-brand-text-mid group-hover:text-brand-primary" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  )
}




