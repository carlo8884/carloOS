import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import Link from 'next/link'
import { ArticleLayout, BelowFoldPhoto, ComparisonFoot, FAQAccordion, RelatedLinks, TableShopLink, buildArticleSchema, buildFAQSchema, buildMetadata, combineSchemas, PrimaryHop, LastUpdated, EmailCapture, ShopCtas, ArticleSourcesList } from '@carloOS/ui'

const PATH = '/reviews/november-december-gift-guide'
const SOURCE = 'reviews-november-december-gift-guide'

// Request-time env, same as the insurance comparison. A set partner tag
// renders the quote link; an unset tag stays a disabled button.
export const dynamic = 'force-dynamic'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Holiday Gift Guide: Practical Pet Health Supplies | Vets.co',
  description: 'Five practical gifts for a pet owner: a first-aid kit, a digital thermometer, a pet scale, a recovery cone, and a soft carrier. Amazon search links.',
  path: PATH,
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Holiday gift guide: practical pet health supplies',
  description: 'Five practical home-care supplies for a pet owner, each with an Amazon search link. Not a ranked list and not a substitute for veterinary care.',
  url: 'https://vets.co/reviews/november-december-gift-guide',
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const GIFTS = [
  {
    id: 'pet-first-aid-kit',
    name: 'Pet first-aid kit',
    query: 'pet+first+aid+kit',
    why: 'The AVMA first-aid page recommends keeping a kit of basic supplies for the pets in your household: gauze, nonstick bandages, tape, blunt scissors, and gloves, among others. First aid is not a substitute for veterinary care.',
    who: 'Any dog or cat household, and anyone who travels or hikes with a dog.',
  },
  {
    id: 'digital-pet-thermometer',
    name: 'Digital pet thermometer',
    query: 'digital+pet+thermometer',
    why: 'The same AVMA kit list includes a digital thermometer to take your pet\'s temperature. Keep one labeled for the pet, separate from the family thermometer.',
    who: 'Owners who use telehealth or who call the clinic before booking a visit.',
  },
  {
    id: 'digital-pet-scale',
    name: 'Digital pet scale',
    query: 'digital+pet+scale',
    why: 'If a pet swallows something harmful, the AVMA page says to have the pet\'s weight ready when you call the vet or a poison hotline. A home scale gives you that number, and lets you track weight between visits.',
    who: 'Cat owners, owners of small dogs, and anyone tracking a weight-loss plan.',
  },
  {
    id: 'pet-recovery-cone',
    name: 'Pet recovery cone',
    query: 'pet+recovery+cone',
    why: 'After a spay, a neuter, or stitches, a cone keeps the pet from licking the wound. Having one at home before a planned surgery saves a late trip to the store.',
    who: 'Owners with a surgery or dental procedure coming up. Ask the clinic which size fits.',
  },
  {
    id: 'soft-cat-carrier',
    name: 'Soft cat carrier',
    query: 'soft+cat+carrier',
    why: 'The AVMA page says pet carriers work well for keeping an injured pet confined on the way to the vet. A carrier left out at home is also more familiar before a routine appointment.',
    who: 'Cat owners, and small-dog owners who drive to appointments.',
  },
] as const

const hop = (query: string) => `/go/amazon-brand/${query}?s=${SOURCE}`

const FAQS = [
  {
    question: 'Is this a ranked list of the best pet gifts?',
    answer: 'No. These are five practical home-care supplies. Each button opens an Amazon search for that type of item, not one product we tested.',
  },
  {
    question: 'Do these replace a vet visit?',
    answer: 'No. They help you prepare for a visit or a telehealth call. Trouble breathing, collapse, pale gums, suspected poisoning, or a cat that cannot urinate needs in-person emergency care.',
  },
  {
    question: 'What about holiday food and emergency bills?',
    answer: 'Fatty leftovers are covered on the holiday leftovers guide, and why a holiday emergency visit can cost more is on the emergency-visit guide.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

export default function NovemberDecemberGiftGuidePage() {
  return (
    <ArticleLayout
      siteId="vets-co"
      schema={combineSchemas(schema, faqSchema)}
      hero={{
        title: 'Holiday gift guide: practical pet health supplies',
        category: 'Buyer guide',
        authorName: 'Vets.co Editorial',
        publishedAt: 'October 2026',
        readTime: '5 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Start with a pet first-aid kit: it is useful in any household with a dog or cat.</p>
          <div data-fold="offer">
          <PrimaryHop href={hop('pet+first+aid+kit')} label="Search Amazon for pet first-aid kits" />
          <HopDisclosure tone="on-dark" siteId="vets-co" href={hop('pet+first+aid+kit')} />
        </div>
        </>
      }
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Holiday gift guide', href: PATH },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Telehealth', href: '/telehealth' },
            { label: 'Holiday leftovers', href: '/reviews/holiday-leftovers-low-fat-guide' },
            { label: 'Holiday emergency visit', href: '/reviews/holiday-emergency-visit-guide' },
          ]}
        />
      }
      priceAsOf="2026-10-07"
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-12" />
        <p>These are five practical gifts for someone with a dog or cat. Each one helps with home care or a vet visit: a first-aid kit, a thermometer, a scale, a recovery cone, and a carrier. Each button opens an Amazon search for that type of item. This is not a ranked list, and nothing here replaces veterinary care. The reasons below come from the American Veterinary Medical Association page <a href="https://www.avma.org/resources-tools/pet-owners/emergencycare/first-aid-tips-pet-owners">First aid tips for pet owners</a>.</p>
        <p>Holiday food and emergency bills have their own pages. Fatty leftovers are on the <Link href="/reviews/holiday-leftovers-low-fat-guide">leftovers guide</Link>. Why a holiday emergency visit can cost more is on the <Link href="/reviews/holiday-emergency-visit-guide">emergency-visit guide</Link>.</p>
        <HopDisclosure siteId="vets-co" href={GIFTS.map((g) => hop(g.query))} />
        {GIFTS.map((g) => (
          <section key={g.id} id={g.id} className="mt-6">
            <h2>{g.name}</h2>
            <p>{g.why}</p>
            <p><strong>Good for:</strong> {g.who}</p>
            <ShopCtas amazonHref={hop(g.query)} amazonLabel={`Search Amazon for ${g.name.toLowerCase()}s →`} />
          </section>
        ))}
        <h2>At a glance</h2>
        <div className="overflow-x-auto max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th className="p-3 font-bold text-brand-dark">Gift</th>
                <th className="p-3 font-bold text-brand-dark">Good for</th>
              </tr>
            </thead>
            <tbody>
              {GIFTS.map((g) => (
                <tr key={g.id} className="border-b border-brand-border">
                  <td className="p-3 font-bold"><a href={`#${g.id}`}>{g.name}</a><TableShopLink href={hop(g.query)} product={g.name} /></td>
                  <td className="p-3">{g.who}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-12" />
        <EmailCapture
          variant="inline"
          siteId="vets-co"
          addressOnly
          title="Gift checklist"
          ctaText="Copy checklist"
          source="reviews-november-december-gift-guide"
          checklist={GIFTS.map((g) => `${g.name}: ${g.who}`)}
        />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} includeSchema={false} />
        <BelowFoldPhoto siteId="vets-co" />
        <ArticleSourcesList
          title="Sources"
          sources={[
            { label: 'First aid tips for pet owners', url: 'https://www.avma.org/resources-tools/pet-owners/emergencycare/first-aid-tips-pet-owners', publisher: 'American Veterinary Medical Association' },
          ]}
        />
      </div>
    </ArticleLayout>
  )
}
