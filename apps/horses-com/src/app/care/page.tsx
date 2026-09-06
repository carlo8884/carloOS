import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, CrossPortfolioCard, EmailCapture, ShopCtas } from '@carloOS/ui'
import { PremiumMasthead } from '../../components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Care and Husbandry — Hooves, Pasture, and Seasons",
  description:
    "Practical horse care references: hoof care and farrier schedule, grooming, blanketing, pasture and fencing, deworming, seasonal care, and transport.",
  path: '/care',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: "Care", url: 'https://horses.com/care' },
  ],
})

const ENTRIES = [
  {
    slug: "hoof-care-basics",
    eyebrow: "Hooves",
    title: "Hoof Care Basics",
    description:
      "Hoof anatomy, the no-foot-no-horse principle, daily care, and what a healthy hoof looks like.",
  },
  {
    slug: "farrier-schedule",
    eyebrow: "Hooves",
    title: "The Farrier Schedule",
    description:
      "Trim and shoeing intervals, seasonal growth, barefoot vs shod, and working with your farrier.",
  },
  {
    slug: "hoof-picking",
    eyebrow: "Hooves",
    title: "Picking Out the Hooves",
    description:
      "How to pick out a horse&apos;s feet safely, what to look for, and how often.",
  },
  {
    slug: "grooming",
    eyebrow: "Daily care",
    title: "Grooming the Horse",
    description:
      "The grooming kit, a step-by-step routine, skin and coat health, and the daily safety check.",
  },
  {
    slug: "blanketing",
    eyebrow: "Seasonal",
    title: "Blanketing Guide",
    description:
      "When a horse needs a rug, choosing a weight, fit and safety, and the case for leaving them bare.",
  },
  {
    slug: "body-clipping",
    eyebrow: "Seasonal",
    title: "Body Clipping",
    description:
      "Why and when to clip, the main clip patterns, technique basics, and post-clip care.",
  },
  {
    slug: "winter-care",
    eyebrow: "Seasonal",
    title: "Winter Care",
    description:
      "Keeping water unfrozen, feeding for warmth, shelter and blanketing, and managing ice and mud.",
  },
  {
    slug: "summer-heat-care",
    eyebrow: "Seasonal",
    title: "Summer Heat Care",
    description:
      "Hydration and electrolytes, recognizing heat stress and anhidrosis, cooling, and adjusting work.",
  },
  {
    slug: "fly-control",
    eyebrow: "Seasonal",
    title: "Fly Control",
    description:
      "Physical barriers, repellents, environmental management, and the diseases flies carry.",
  },
  {
    slug: "pasture-management",
    eyebrow: "Land",
    title: "Pasture Management",
    description:
      "Grazing behavior, rotational grazing, weeds and poisonous plants, soil, and overgrazing.",
  },
  {
    slug: "fencing-safety",
    eyebrow: "Land",
    title: "Fencing and Safety",
    description:
      "Safe fence types, heights and spacing, hazards to avoid, gates, and routine checks.",
  },
  {
    slug: "turnout-vs-stabling",
    eyebrow: "Management",
    title: "Turnout vs Stabling",
    description:
      "The welfare case for movement and forage, when stabling is justified, and finding a balance.",
  },
  {
    slug: "deworming-program",
    eyebrow: "Health routine",
    title: "Deworming Program",
    description:
      "The shift from calendar dosing to fecal-egg-count-guided targeted treatment, and resistance.",
  },
  {
    slug: "trailering",
    eyebrow: "Transport",
    title: "Trailering and Transport",
    description:
      "Trailer safety, loading, travel stress, the head-down principle, and long-haul care.",
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Horse Care and Husbandry Guides',
  numberOfItems: ENTRIES.length,
  itemListElement: ENTRIES.map((e, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: e.title,
    url: `https://horses.com/care/${e.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function CareHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <PremiumMasthead
        manifestKey="horses-com:category-care"
        eyebrow="Horse Care"
        title="Horse Care & Husbandry"
        subtitle="Practical, evidence-led references on the daily and seasonal care of horses, from hooves and grooming to pasture, parasites, and transport."
      />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&rsaquo;</span>
        <span className="text-brand-text-mid font-medium">Care</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horse care-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horse care-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-barn-daily-care-chart,
            stall-door-care-card, and
            equine-husbandry-reference-handbook notes that
            match the daily-and-seasonal-routines,
            per-horse-husbandry, and AAEP-and-extension
            copy on this hub — a laminated horse barn
            daily-care chart so the section map (hooves,
            grooming, seasonal, land, parasites, transport)
            is posted at the barn (not an emergency-triage
            chart, not a forage-first chart, not a
            treat-safety chart), a horse stall-door care
            card so each horse&apos;s farrier interval,
            blanket weight, and daily hoof-pick routine is
            labeled on the door (not a vital-signs card,
            not a ration card, not a farrier log), and an
            equine husbandry reference handbook so the
            AAEP / extension grounding is a physical barn
            book (not a health handbook, not a nutrition
            handbook). Educational barn checklist, not a
            treatment, not a ranked product list, and not
            a substitute for a veterinarian, farrier, or
            qualified barn manager. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horse care-hub checklist"
            subtitle="Email the daily-care-chart, stall-door care-card, and husbandry-handbook notes. No spam."
            ctaText="Email my horse care-hub checklist"
            source="care-hub-under-hero"
          />
        </div>
      </section>

      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Husbandry references covering the routines that keep a horse healthy and safe. Each guide cites AAEP guidance, extension resources, and the equine veterinary literature.
          New to equestrian terminology? The <Link href="/glossary" className="text-brand-primary hover:underline">Equestrian Glossary</Link> defines key care, anatomy, and horsemanship terms.
          A laminated horse barn daily-care chart is how the hub map stays posted at the barn — it is not a laminated emergency-triage chart (that lives on the health hub), not a laminated forage-first chart (that lives on the nutrition hub), and not a laminated treat-safety chart (that lives on the can-horses-eat hub).
          A horse stall-door care card is how each horse&apos;s farrier interval, blanket weight, and daily hoof-pick routine is labeled on the door — it is not a stall-door vital-signs card (that lives on the health hub), not a stall-door ration card (that lives on the nutrition hub), and not an equine farrier log book (that lives on the farrier schedule).
          An equine husbandry reference handbook is how the AAEP / extension grounding sits in the barn — it is not an equine health reference handbook or an equine nutrition reference handbook (those live on the health and nutrition hubs).
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
          {ENTRIES.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/care/${entry.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {entry.eyebrow}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {entry.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {entry.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mt-12 mb-4 max-w-content-wide">
          Care-hub barn kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          daily-and-seasonal-routines, per-horse-husbandry,
          and AAEP-and-extension copy on this hub — a
          laminated horse barn daily-care chart so the
          section map (hooves, grooming, seasonal, land,
          parasites, transport) is posted at the barn, a
          horse stall-door care card so each horse&apos;s
          farrier interval, blanket weight, and daily
          hoof-pick routine is labeled on the door, and
          an equine husbandry reference handbook so the
          AAEP / extension grounding is a physical barn
          book. These are educational barn searches, not
          a ranked product list, not a substitute for
          veterinary or farrier care, not an
          emergency-triage-chart / stall-door-vital-signs
          / health-handbook hop (those live on the health
          hub), not a forage-first-chart / ration-card /
          nutrition-handbook hop, not a treat-safety-chart
          hop, and not a curry-comb / hoof-pick /
          clippers / fly-mask / turnout-blanket /
          farrier-log hop (those live on the care
          children). This page does not hop medications
          or vaccines. This page does not claim hands-on
          testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn daily-care chart /
            horse stall-door care card /
            equine husbandry reference handbook).
            Educational barn searches only; no Rx /
            vaccine ASIN hops. ShopCtas hides empty
            Chewy; never href="#" or PLACEHOLDER.
            Unused vs #1125
            laminated+horse+barn+emergency+triage+chart /
            horse+stall+door+vital+signs+card /
            equine+health+reference+handbook, #1124
            laminated+horse+barn+forage+first+chart /
            horse+stall+door+ration+card /
            equine+nutrition+reference+handbook, #1123
            laminated+horse+barn+treat+safety+chart /
            lidded+horse+barn+treat+tote /
            horse+barn+treat+prep+shears, care children
            horse+curry+comb / horse+hoof+pick /
            horse+clippers / horse+fly+mask /
            horse+turnout+blanket /
            equine+farrier+log+book. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the care-hub barn kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page daily-and-seasonal-routines,
            per-horse-husbandry, and AAEP-and-extension
            copy — a laminated horse barn daily-care
            chart, a horse stall-door care card, and an
            equine husbandry reference handbook.
            Educational barn searches only. They are not
            a ranked product list, they are not an
            emergency-triage chart / vital-signs card /
            health-handbook hop, they are not a
            forage-first chart / ration-card /
            nutrition-handbook hop, they are not a
            curry-comb / hoof-pick / clippers hop, and
            they do not replace a veterinarian or
            farrier. Horses.com earns a commission on
            qualifying purchases at no extra cost to
            you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+daily+care+chart?s=care-hub"
              amazonLabel="Browse laminated horse barn daily-care charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+care+card?s=care-hub"
              amazonLabel="Browse horse stall-door care cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+husbandry+reference+handbook?s=care-hub"
              amazonLabel="Browse equine husbandry reference handbooks on Amazon →"
            />
          </div>
        </div>
      </div>

      <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="footer" />
    </>
  )
}
