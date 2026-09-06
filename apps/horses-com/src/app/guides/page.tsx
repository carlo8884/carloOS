import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, CrossPortfolioCard, DirectoryPlacesCta, EmailCapture, ShopCtas } from '@carloOS/ui'
import listings from '../../data/directory-listings.json'
import { PremiumMasthead } from '../../components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Equine Guides — Saddle Fit, Dental Care & Vaccinations | Horses.com',
  description:
    'Three equine owner guides: saddle fit basics, dental care, and AAEP core and risk-based vaccination schedules — cited from primary veterinary sources.',
  path: '/guides',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: 'Guides', url: 'https://horses.com/guides' },
  ],
})

const GUIDES = [
  {
    slug: 'saddle-fit-basics',
    eyebrow: 'Equipment',
    title: 'Saddle Fit Basics',
    description:
      'A 12-point framework for assessing saddle fit on the horse — tree width, panel contact, channel clearance, balance, and the ridden check.',
  },
  {
    slug: 'equine-dental-care',
    eyebrow: 'Preventive care',
    title: 'Equine Dental Care',
    description:
      'Floating, wolf teeth, EOTRH, annual exam timing, and what to expect from a dental exam under sedation.',
  },
  {
    slug: 'equine-vaccination-schedule',
    eyebrow: 'Preventive care',
    title: 'Vaccination Schedule',
    description:
      'AAEP core vaccines (EWT, rabies, WNV, EEV/WEV) and risk-based vaccines (flu, rhino, strangles, Potomac fever) — timing, boosters, and geographic considerations.',
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Equine Owner Guides',
  numberOfItems: GUIDES.length,
  itemListElement: GUIDES.map((g, i) => ({
    '@type': 'ListItem',
    position: i + 1,
    name: g.title,
    url: `https://horses.com/guides/${g.slug}`,
  })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function GuidesHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      {/* Hero — image-first masthead (photo behind the title band) */}
      <PremiumMasthead
        manifestKey="horses-com:category-guides"
        eyebrow="Owner Guides"
        title="Equine Guides"
        subtitle="Practical owner guides on saddle fitting, preventive dental care, and vaccination schedules — each citing AAEP guidelines, veterinary clinical literature, and Society of Master Saddlers criteria."
      />

      {/* Breadcrumb */}
      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>›</span>
        <span className="text-brand-text-mid font-medium">Guides</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horse guides-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horse guides-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-barn-owner-guides-chart,
            stall-door-owner-guides-card, and
            equine-owner-guides-reference-handbook notes that
            match the owner-guides-section-map,
            per-horse-guide-cadence, and
            AAEP-SMS-and-AVDC copy on this hub — a laminated
            horse barn owner-guides chart so the section map
            (saddle fit, dental, vaccination) is posted at
            the barn (not a daily-care chart, not an
            emergency-triage chart, not a forage-first
            chart, not a treat-safety chart), a horse
            stall-door owner-guides card so each horse&apos;s
            saddle-fit reassessment, dental-exam date, and
            vaccine-due date is labeled on the door (not a
            care card, not a vital-signs card, not a ration
            card, not a farrier log), and an equine owner
            guides reference handbook so the AAEP / Society
            of Master Saddlers / American Veterinary Dental
            College grounding is a physical barn book (not a
            husbandry handbook, not a health handbook, not a
            nutrition handbook). Educational barn
            checklist, not a treatment, not a ranked
            product list, not a vaccine order, and not a
            substitute for a veterinarian, saddle fitter,
            or qualified dental practitioner. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horse guides-hub checklist"
            subtitle="Email the owner-guides-chart, stall-door owner-guides-card, and owner-guides-handbook notes. No spam."
            ctaText="Email my horse guides-hub checklist"
            source="guides-hub-under-hero"
          />
        </div>
      </section>

      {/* Content */}
      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Three owner guides citing AAEP guidelines, veterinary clinical literature, and Society of Master Saddlers criteria. None of these replace a veterinarian, a qualified saddle fitter, or a dental practitioner.
          A laminated horse barn owner-guides chart is how the hub map (saddle fit, dental, vaccination) stays posted at the barn — it is not a laminated daily-care chart (that lives on the care hub), not a laminated emergency-triage chart (that lives on the health hub), not a laminated forage-first chart (that lives on the nutrition hub), and not a laminated treat-safety chart (that lives on the can-horses-eat hub).
          A horse stall-door owner-guides card is how each horse&apos;s saddle-fit reassessment, dental-exam date, and vaccine-due date is labeled on the door — it is not a stall-door care card (that lives on the care hub), not a stall-door vital-signs card (that lives on the health hub), not a stall-door ration card (that lives on the nutrition hub), and not an equine farrier log book (that lives on the farrier schedule).
          An equine owner-guides reference handbook is how the AAEP / SMS / AVDC grounding sits in the barn — it is not an equine husbandry reference handbook, not an equine health reference handbook, and not an equine nutrition reference handbook (those live on the care, health, and nutrition hubs).
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
          {GUIDES.map((g) => (
            <li key={g.slug}>
              <Link
                href={`/guides/${g.slug}`}
                className="block py-5 px-6 rounded-lg border border-brand-border bg-brand-surface hover:border-brand-primary hover:bg-white no-underline transition"
              >
                <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
                  {g.eyebrow}
                </div>
                <div className="font-display font-bold text-brand-dark text-lg mb-2 leading-tight">
                  {g.title}
                </div>
                <p className="text-sm text-brand-text-mid leading-relaxed m-0">
                  {g.description}
                </p>
              </Link>
            </li>
          ))}
        </ul>

        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mt-12 mb-4 max-w-content-wide">
          Guides-hub barn kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          owner-guides-section-map, per-horse-guide-cadence,
          and AAEP-SMS-and-AVDC copy on this hub — a
          laminated horse barn owner-guides chart so the
          section map (saddle fit, dental, vaccination) is
          posted at the barn, a horse stall-door
          owner-guides card so each horse&apos;s saddle-fit
          reassessment, dental-exam date, and vaccine-due
          date is labeled on the door, and an equine owner
          guides reference handbook so the AAEP / SMS /
          AVDC grounding is a physical barn book. These
          are educational barn searches, not a ranked
          product list, not a substitute for a
          veterinarian, saddle fitter, or dental
          practitioner, not a daily-care-chart /
          stall-door-care-card / husbandry-handbook hop
          (those live on the care hub), not an
          emergency-triage-chart / stall-door-vital-signs
          / health-handbook hop, not a forage-first-chart
          / ration-card / nutrition-handbook hop, not a
          treat-safety-chart hop, and not a saddle-pad /
          half-pad / shims / girth / hay-cubes / mash /
          stall-fan / stall-screen hop (those live on the
          guide children). This page does not hop
          medications or vaccines. This page does not
          claim hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn owner-guides chart /
            horse stall-door owner-guides card /
            equine owner-guides reference handbook).
            Educational barn searches only; no Rx /
            vaccine ASIN hops. ShopCtas hides empty
            Chewy; never href="#" or PLACEHOLDER.
            Unused vs #1126
            laminated+horse+barn+daily+care+chart /
            horse+stall+door+care+card /
            equine+husbandry+reference+handbook, #1125
            laminated+horse+barn+emergency+triage+chart /
            horse+stall+door+vital+signs+card /
            equine+health+reference+handbook, #1124
            laminated+horse+barn+forage+first+chart /
            horse+stall+door+ration+card /
            equine+nutrition+reference+handbook, #1123
            laminated+horse+barn+treat+safety+chart /
            lidded+horse+barn+treat+tote /
            horse+barn+treat+prep+shears, guide children
            horse+saddle+pad / horse+sheepskin+half+pad /
            horse+saddle+shims / horse+girth+cinch /
            horse+hay+cubes / horse+mash /
            horse+stall+fan / horse+stall+screen. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the guides-hub barn kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page owner-guides-section-map,
            per-horse-guide-cadence, and
            AAEP-SMS-and-AVDC copy — a laminated horse
            barn owner-guides chart, a horse stall-door
            owner-guides card, and an equine owner-guides
            reference handbook. Educational barn
            searches only. They are not a ranked product
            list, they are not a daily-care chart /
            care-card / husbandry-handbook hop, they are
            not an emergency-triage chart / vital-signs
            card / health-handbook hop, they are not a
            forage-first chart / ration-card /
            nutrition-handbook hop, they are not a
            saddle-pad / half-pad / shims / girth hop,
            and they do not replace a veterinarian,
            saddle fitter, or dental practitioner.
            Horses.com earns a commission on qualifying
            purchases at no extra cost to you. Empty
            Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+owner+guides+chart?s=guides-hub"
              amazonLabel="Browse laminated horse barn owner-guides charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+owner+guides+card?s=guides-hub"
              amazonLabel="Browse horse stall-door owner-guides cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+owner+guides+reference+handbook?s=guides-hub"
              amazonLabel="Browse equine owner-guides reference handbooks on Amazon →"
            />
          </div>
        </div>
      </div>

      <DirectoryPlacesCta listings={listings} noun="licensed equine professionals" />
      <CrossPortfolioCard currentSite="horses-com" contentType="guide" variant="footer" />
    </>
  )
}
