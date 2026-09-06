import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, buildMetadata, buildBreadcrumbSchema, combineSchemas, EmailCapture, SchemaScript, ShopCtas, CrossPortfolioCard } from '@carloOS/ui'
import { PremiumMasthead } from '../../components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Horse Ownership — Buying, Cost, Boarding, Insurance, and the Basics",
  description:
    "Horse ownership references: cost of ownership, buying your first horse, the pre-purchase exam, boarding, insurance, leasing, senior care, and first aid.",
  path: '/ownership',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com/' },
    { name: "Ownership", url: 'https://horses.com/ownership' },
  ],
})

const ENTRIES = [
  {
    slug: "cost-of-owning-a-horse",
    eyebrow: "Getting started",
    title: "Cost of Owning a Horse",
    description:
      "Purchase vs upkeep, the big recurring costs, hidden and emergency expenses, and budgeting honestly.",
  },
  {
    slug: "buying-your-first-horse",
    eyebrow: "Getting started",
    title: "Buying Your First Horse",
    description:
      "Being honest about your level, temperament over flash, trying a horse, and bringing help.",
  },
  {
    slug: "pre-purchase-exam",
    eyebrow: "Getting started",
    title: "The Pre-Purchase Exam",
    description:
      "What the vetting covers, basic vs extensive, radiographs, and how to use the results.",
  },
  {
    slug: "leasing-a-horse",
    eyebrow: "Getting started",
    title: "Leasing a Horse",
    description:
      "Full and partial leases, on-site vs off-site, the lease agreement, and pros and cons.",
  },
  {
    slug: "boarding-options",
    eyebrow: "Keeping a horse",
    title: "Boarding Options",
    description:
      "Full, partial, pasture, and self-care board, keeping at home, and choosing a facility.",
  },
  {
    slug: "horse-insurance",
    eyebrow: "Keeping a horse",
    title: "Horse Insurance",
    description:
      "Mortality, major medical, loss of use, and liability cover, plus exclusions and deciding.",
  },
  {
    slug: "choosing-a-vet",
    eyebrow: "Keeping a horse",
    title: "Choosing a Vet",
    description:
      "Why the relationship matters, what to look for, emergency cover, the VCPR, and building it.",
  },
  {
    slug: "first-aid-kit",
    eyebrow: "Skills",
    title: "First-Aid Kit",
    description:
      "What to stock, knowing your horse&apos;s normal vitals, when to call the vet, and kit management.",
  },
  {
    slug: "reading-body-language",
    eyebrow: "Skills",
    title: "Reading Body Language",
    description:
      "Reading ears, eyes, muzzle, tail, and posture, signs of fear and pain, and staying safe.",
  },
  {
    slug: "senior-horse-care",
    eyebrow: "Skills",
    title: "Senior Horse Care",
    description:
      "Common age-related conditions, dental and feeding changes, comfort, and quality of life.",
  },
]

const itemListSchema = {
  '@context': 'https://schema.org',
  '@type': 'ItemList',
  name: 'Horse Ownership Guides',
  numberOfItems: ENTRIES.length,
  itemListElement: ENTRIES.map((x, i) => ({ '@type': 'ListItem', position: i + 1, name: x.title, url: `https://horses.com/ownership/${x.slug}` })),
}

const schema = combineSchemas(breadcrumbSchema, itemListSchema)

export default function OwnershipHubPage() {
  return (
    <>
      <SchemaScript schema={schema} />

      <PremiumMasthead
        manifestKey="horses-com:category-ownership"
        eyebrow="Horse Ownership"
        title="Horse Ownership"
        subtitle="Practical references for the decisions and responsibilities of owning a horse, from buying and budgeting to insurance, body language, and finding a vet."
      />

      <nav className="px-container-sm sm:px-container py-3 text-xs text-brand-text-light bg-brand-surface border-b border-brand-border flex gap-2">
        <Link href="/" className="hover:text-brand-primary no-underline">Home</Link>
        <span>&rsaquo;</span>
        <span className="text-brand-text-mid font-medium">Ownership</span>
      </nav>

      {/* Under-hero capture — source must end in under-hero so it always renders. */}
      <section className="bg-brand-surface px-container-sm sm:px-container pt-8 pb-0">
        <div className="max-w-content-wide mx-auto">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the horses ownership-hub checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Horses ownership-hub checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-horse-barn-ownership-section-map-chart,
            stall-door-ownership-prep-card, and
            equine-ownership-reference-handbook notes that
            match the buying-budget-insurance-map,
            boarding-and-vet-log, and
            AAEP-BEVA-grounding copy on this hub — a
            laminated horse barn ownership section-map
            chart so the buying / cost / insurance /
            boarding / vet map is posted on the stall
            door (not a tools-hub calculator chart, not a
            reviews buyer-guide chart, not a supplements
            category chart, not a tack section-map chart,
            not a forage-first chart, not a daily-care
            chart, not an emergency-triage chart, not an
            owner-guides chart), a horse stall-door
            ownership prep card so boarding-and-vet notes
            are labeled on the stall door (not a
            measurement card, not a reviews comparison
            card, not a supplements label card, not a
            tack-fit card, not a ration card, not a care
            card, not a vital-signs card, not an
            owner-guides card), and an equine ownership
            reference handbook so the AAEP / BEVA
            grounding is a physical barn book (not a
            calculator handbook, not a reviews handbook,
            not a supplements handbook, not a tack
            handbook, not a nutrition handbook, not a
            husbandry handbook, not a health handbook,
            not an owner-guides handbook). Educational
            kitchen checklist, not a ranked insurance
            list, not a child budget-worksheet / bandage
            scissors hop, and not a substitute for a
            veterinarian. Horses.com does not sell
            insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="horses-com"
            title="Horses ownership-hub checklist"
            subtitle="Email the ownership-section-map-chart, stall-door prep-card, and ownership-handbook notes. No spam."
            ctaText="Email my horses ownership-hub checklist"
            source="ownership-hub-under-hero"
          />
        </div>
      </section>

      <div className="px-container-sm sm:px-container py-12">
        <p className="text-sm text-brand-text-light mb-10 max-w-2xl">
          Ownership references citing AAEP and BEVA guidance, equine economic and welfare data, and the veterinary literature. They inform decisions but are not legal, financial, or veterinary advice.
        </p>

        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 list-none p-0">
          {ENTRIES.map((entry) => (
            <li key={entry.slug}>
              <Link
                href={`/ownership/${entry.slug}`}
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
      </div>

      <section className="bg-brand-surface px-container-sm sm:px-container pb-section">
        <h2 id="kit" className="font-display font-bold text-brand-dark text-xl mb-4 max-w-content-wide">
          Ownership-hub kitchen kit
        </h2>
        <p className="max-w-content-wide text-sm text-brand-text-mid leading-relaxed">
          Everyday physical supplies that match the
          buying-budget-insurance-map, boarding-and-vet-log,
          and AAEP-BEVA-grounding copy on this hub — a
          laminated horse barn ownership section-map
          chart so the buying / cost / insurance /
          boarding / vet map is posted on the stall door,
          a horse stall-door ownership prep card so
          boarding-and-vet notes are labeled on the stall
          door, and an equine ownership reference
          handbook so the AAEP / BEVA grounding is a
          physical barn book. These are educational
          kitchen searches, not a ranked insurance list,
          not a substitute for a veterinarian, not a
          tools-hub / reviews-hub / supplements-hub /
          tack-hub / nutrition-hub / care-hub / health-hub
          / guides-hub hop, and not a child
          budget-worksheet / bandage-scissors hop (those
          live on ownership children). This page does not
          hop medications or vaccines. This page does not
          sell insurance. This page does not claim
          hands-on testing.
        </p>

        <div className="max-w-content-wide mt-6">
          <AffiliateDisclosure variant="inline" siteId="horses-com" />
        </div>

        {/* Money path — live amazon-brand search hops
            (laminated horse barn ownership section-map chart /
            horse stall-door ownership prep card /
            equine ownership reference handbook).
            Educational kitchen searches only; no Rx hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs tools / reviews /
            supplements / tack / nutrition / care /
            health / guides kitchen kits and child
            ownership+monthly+budget / bandage+scissors
            hops. Directory import left untouched. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose max-w-content-wide">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the ownership-hub kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page buying-budget-insurance-map,
            boarding-and-vet-log, and AAEP-BEVA-grounding
            copy — a laminated horse barn ownership
            section-map chart, a horse stall-door
            ownership prep card, and an equine ownership
            reference handbook. Educational kitchen
            searches only. They are not a ranked
            insurance list, they are not a sibling-hub
            kitchen hop, they are not a child
            budget-worksheet hop, and they do not replace
            a veterinarian. Horses.com does not sell
            insurance. Horses.com earns a commission on
            qualifying purchases at no extra cost to you.
            Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+horse+barn+ownership+section+map+chart?s=ownership-hub"
              amazonLabel="Browse laminated horse barn ownership section-map charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/horse+stall+door+ownership+prep+card?s=ownership-hub"
              amazonLabel="Browse horse stall-door ownership prep cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/equine+ownership+reference+handbook?s=ownership-hub"
              amazonLabel="Browse equine ownership reference handbooks on Amazon →"
            />
          </div>
        </div>
      </section>

      <CrossPortfolioCard currentSite="horses-com" contentType="care" variant="footer" />
    </>
  )
}
