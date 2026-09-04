import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
  DirectoryPlacesCta,
  EmailCapture,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { Diseases, RESERVED_HEALTH_SLUGS, type DiseaseCategory } from '../../data/diseases'
import { HubMasthead } from '../../components/HubMasthead'

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Aquarium Health Hub — Disease, Chemistry & Treatment | Fish.com', description: 'Aquarium fish health guides — the nitrogen cycle, water chemistry, disease identification, and treatment for common conditions.', path: '/health' })

// Programmatic disease reference catalog (the dynamic /health/[slug] pages),
// excluding the hand-written one-off guides reserved at fixed slugs.
const catalogDiseases = Diseases.filter(d => !RESERVED_HEALTH_SLUGS.has(d.slug))

// Group the catalog by category for the hub's grouped index. Ordered so the
// highest-traffic clusters (parasitic, bacterial, fungal) lead.
const CATEGORY_ORDER: DiseaseCategory[] = ['Parasitic', 'Bacterial', 'Fungal', 'Viral', 'Environmental', 'Nutritional', 'Genetic']
const catalogByCategory = CATEGORY_ORDER
  .map(category => ({ category, items: catalogDiseases.filter(d => d.category === category) }))
  .filter(group => group.items.length > 0)

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://fish.com/' },
    { name: 'Health', url: 'https://fish.com/health' },
  ],
})


const GUIDES = [
  { title: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained', badge: 'Essential First Read', desc: 'Why most new tanks fail and how to prevent it' },
  { title: 'Aquarium Water Chemistry', href: '/water-parameters', desc: 'pH, ammonia, nitrite, nitrate, KH, GH — all parameters explained' },
  { title: 'Fish Disease Guide', href: '/health/fish-disease-guide', desc: 'Identify and treat ich, velvet, fin rot, dropsy' },
  { title: 'Ich Treatment Guide', href: '/health/ich-treatment', desc: 'The most common aquarium disease — complete treatment' },
  { title: 'New Tank Syndrome', href: '/health/new-tank-syndrome', desc: 'What it is and exactly how to fix it' },
  { title: 'Tank Setup Guide', href: '/setup', desc: 'Step-by-step first aquarium setup' },
]

const itemListEntries = [
  ...GUIDES.map(g => ({ name: g.title, url: `https://fish.com${g.href}` })),
  ...catalogDiseases.map(d => ({ name: d.name, url: `https://fish.com/health/${d.slug}` })),
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Aquarium Fish Health & Disease Guides',
  numberOfItems: itemListEntries.length,
  itemListElement: itemListEntries.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: e.name,
    url: e.url,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function FishHealthPage() {
  return (
    <>
      <SchemaScript schema={schema} />
      <>
      {/* HERO — premium image-first masthead (HubMasthead) */}
      <HubMasthead
        manifestKey="fish-com:category-health"
        alt="A healthy freshwater aquarium with clear water"
        eyebrow="Health Library"
        title="Aquarium Health Library"
        subtitle="Water chemistry, disease identification, and the nitrogen cycle — everything that keeps your fish alive."
        primaryCta={{ href: '/health/fish-disease-guide', label: 'Diagnose a sick fish' }}
        secondaryCta={{ href: '/tools/water-change-calculator', label: 'Plan a water change' }}
      />

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <div className="bg-brand-primary-pale border-b border-brand-border px-container-sm sm:px-container py-10">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the test-first health order
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Aquarium health checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the water-chemistry, disease-identification, and nitrogen-cycle
            order — liquid-test ammonia, nitrite, and nitrate first, isolate a
            sick fish in a spare hospital tank with a seeded sponge filter, and
            hold a stable temperature with a heater plus a separate digital
            thermometer — so you can diagnose without scrolling back. Educational
            husbandry, not a diagnosis or a cure. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Aquarium health checklist"
            subtitle="Email the test-first, isolate, hold-temp order. No spam."
            ctaText="Email my aquarium health checklist"
            source="health-hub-under-hero"
          />
        </div>
      </div>

      <div className="px-container-sm sm:px-container py-12">
        <div className="grid sm:grid-cols-2 gap-4 max-w-content-wide mx-auto">
          {GUIDES.map(g => (
            <Link key={g.href} href={g.href} className="block bg-brand-white border border-brand-border rounded-xl p-5 no-underline hover:border-brand-primary transition-colors">
              {g.badge && <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{g.badge}</div>}
              <div className="font-display font-bold text-brand-dark text-sm mb-1">{g.title}</div>
              <div className="text-xs text-brand-text-light">{g.desc}</div>
            </Link>
          ))}
        </div>

        {/* Money path — live amazon-brand search hops (health-library kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="mt-6 p-5 border border-brand-border rounded-xl bg-brand-surface max-w-content-wide mx-auto">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop aquarium health gear
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Water chemistry is how you diagnose before you treat. A liquid
            master kit is how you see ammonia, nitrite, and nitrate — the
            nitrogen-cycle numbers that look like disease — before you isolate
            a sick fish. Pair it with a spare hospital tank and a seeded sponge
            filter so treatment stays off the display biofilter, plus a heater
            and a separate digital thermometer to hold a stable temperature
            (the ich heat-method kit). Same test-kit hop used on the{' '}
            <Link
              href="/health/fish-disease-guide"
              className="text-brand-primary no-underline hover:underline"
            >
              fish disease guide
            </Link>
            {' '}and the{' '}
            <Link
              href="/reviews/best-water-test-kits"
              className="text-brand-primary no-underline hover:underline"
            >
              water-test kit review
            </Link>
            . Same hospital-tank hop used on the{' '}
            <Link
              href="/health/medicating-aquarium-fish"
              className="text-brand-primary no-underline hover:underline"
            >
              medicating aquarium fish guide
            </Link>
            {' '}and the{' '}
            <Link
              href="/setup/quarantine-tank-guide"
              className="text-brand-primary no-underline hover:underline"
            >
              quarantine tank guide
            </Link>
            . Same sponge-filter hop used on the{' '}
            <Link
              href="/health/ich-treatment"
              className="text-brand-primary no-underline hover:underline"
            >
              ich treatment guide
            </Link>
            . Same heater hop used on the{' '}
            <Link href="/setup" className="text-brand-primary no-underline hover:underline">
              aquarium setup guide
            </Link>
            {' '}and the{' '}
            <Link
              href="/health/velvet-disease"
              className="text-brand-primary no-underline hover:underline"
            >
              velvet disease guide
            </Link>
            . The hops below are not a ranked product list, they are not
            medications, and they do not treat, reverse, or cure disease.
            Fish.com earns a commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=health-hub"
              amazonLabel="Browse API Master Test Kit on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=health-hub"
              amazonLabel="Browse quarantine / hospital tanks on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sponge+filter?s=health-hub"
              amazonLabel="Browse sponge filters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/eheim+jager+heater?s=health-hub"
              amazonLabel="Browse aquarium heaters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+digital+thermometer?s=health-hub"
              amazonLabel="Browse digital aquarium thermometers on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/health/fish-disease-guide" className="text-brand-primary hover:underline">
              Fish Disease Guide
            </Link>
            {' · '}
            <Link href="/health/nitrogen-cycle-explained" className="text-brand-primary hover:underline">
              Nitrogen Cycle Explained
            </Link>
            {' · '}
            <Link href="/tools/water-change-calculator" className="text-brand-primary hover:underline">
              Water Change Calculator
            </Link>
            {' · '}
            <Link href="/reviews/best-water-test-kits" className="text-brand-primary hover:underline">
              Best Water Test Kits
            </Link>
          </p>
        </div>
      </div>
      {/* agent1-browse-all-start */}
      <section className="border-t border-brand-border bg-brand-surface px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-4">All Fish Health Topics</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
        <Link key="bacterial-infections" href="/health/bacterial-infections" className="text-sm text-brand-primary no-underline hover:underline">Bacterial Infections</Link>
        <Link key="columnaris" href="/health/columnaris" className="text-sm text-brand-primary no-underline hover:underline">Columnaris</Link>
        <Link key="dropsy-treatment" href="/health/dropsy-treatment" className="text-sm text-brand-primary no-underline hover:underline">Dropsy Treatment</Link>
        <Link key="fin-rot" href="/health/fin-rot" className="text-sm text-brand-primary no-underline hover:underline">Fin Rot</Link>
        <Link key="fish-disease-guide" href="/health/fish-disease-guide" className="text-sm text-brand-primary no-underline hover:underline">Fish Disease Guide</Link>
        <Link key="fish-lice-anchor-worm" href="/health/fish-lice-anchor-worm" className="text-sm text-brand-primary no-underline hover:underline">Fish Lice Anchor Worm</Link>
        <Link key="fish-stress-and-immunity" href="/health/fish-stress-and-immunity" className="text-sm text-brand-primary no-underline hover:underline">Fish Stress and Immunity</Link>
        <Link key="gill-flukes" href="/health/gill-flukes" className="text-sm text-brand-primary no-underline hover:underline">Gill Flukes</Link>
        <Link key="ich-treatment" href="/health/ich-treatment" className="text-sm text-brand-primary no-underline hover:underline">Ich Treatment</Link>
        <Link key="medicating-aquarium-fish" href="/health/medicating-aquarium-fish" className="text-sm text-brand-primary no-underline hover:underline">Medicating Aquarium Fish</Link>
        <Link key="new-tank-syndrome" href="/health/new-tank-syndrome" className="text-sm text-brand-primary no-underline hover:underline">New Tank Syndrome</Link>
        <Link key="nitrogen-cycle-explained" href="/health/nitrogen-cycle-explained" className="text-sm text-brand-primary no-underline hover:underline">Nitrogen Cycle Explained</Link>
        <Link key="pop-eye" href="/health/pop-eye" className="text-sm text-brand-primary no-underline hover:underline">Pop Eye</Link>
        <Link key="swim-bladder-disease" href="/health/swim-bladder-disease" className="text-sm text-brand-primary no-underline hover:underline">Swim Bladder Disease</Link>
        <Link key="velvet-disease" href="/health/velvet-disease" className="text-sm text-brand-primary no-underline hover:underline">Velvet Disease</Link>
        </div>
      </section>
      {/* agent1-browse-all-end */}
      <section className="border-t border-brand-border bg-brand-white px-container-sm sm:px-container py-10">
        <h2 className="font-display font-bold text-brand-dark text-lg mb-2">Disease Reference Catalog</h2>
        <p className="text-xs text-brand-text-light max-w-content-wide mb-4">{catalogDiseases.length} common aquarium fish diseases, grouped by cause, with symptoms, diagnostic approach, treatment ladder, and prevention. Sourced from Noga, Roberts, WAVMA, UF/IFAS, and WOAH references. Not sure what you are seeing? Start with the <Link href="/tools/fish-disease-symptom-checker" className="text-brand-primary no-underline hover:underline font-bold">fish disease symptom checker</Link> to narrow it down.</p>
        <div className="max-w-content-wide space-y-6">
          {catalogByCategory.map(group => (
            <div key={group.category}>
              <h3 className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">{group.category} ({group.items.length})</h3>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-2">
                {group.items.map(d => (
                  <Link key={d.slug} href={`/health/${d.slug}`} className="text-sm text-brand-primary no-underline hover:underline">{d.name}</Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      <DirectoryPlacesCta listings={listings} noun="licensed aquarium professionals" />
</>
  </>
  )
}
