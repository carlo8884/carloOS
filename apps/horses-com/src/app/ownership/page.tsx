import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, buildBreadcrumbSchema, combineSchemas, SchemaScript, EmailCapture } from '@carloOS/ui'
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

      <section
        className="px-container-sm sm:px-container py-12"
        style={{ background: 'var(--brand-primary-pale)' }}
      >
        <EmailCapture
          variant="section"
          siteId="horses-com"
          title="The Horses.com Reference"
          subtitle="One email a week: a deep-dive on a breed, condition, or piece of gear. Citation-anchored."
          ctaText="Subscribe"
          source="ownership-hub"
          perks={[
            'One email weekly',
            'Citation-anchored',
            'No paid placements',
            'Unsubscribe anytime',
          ]}
        />
      </section>
    </>
  )
}
