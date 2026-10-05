import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, BelowFoldPhoto, ComparisonFoot, FAQAccordion, RelatedLinks, TableShopLink, buildArticleSchema, buildFAQSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

const PATH = '/reviews/november-december-gift-guide'
const SOURCE = 'reviews-november-december-gift-guide'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'November and December Dog Gifts | Dog.com',
  description: 'November and December dog gifts grouped by the price bands already printed on the chew, bowl, harness, crate, bed, and tracker reviews.',
  path: PATH,
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'November and December dog gifts',
  description: 'Gift ideas taken from price bands already printed on Dog.com reviews. This page does not add a new score.',
  url: 'https://dog.com/reviews/november-december-gift-guide',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Does this page rank a best holiday gift?',
    answer: 'No. It groups products that already have a review card, using the price band printed on that card. Scores stay on the review. A sale price can differ from the band.',
  },
  {
    question: 'Which printed bands are the smaller gifts?',
    answer: 'The slow-feeder review prints the LickiMat Splash at $10–15 and the Outward Hound Fun Feeder at $10–18. The harness review prints the PetSafe Easy Walk at $20–30. The dental review prints Whimzees at $20–30 for a 14-count and Greenies at $25–35 for a 27-count.',
  },
  {
    question: 'Where do the food-bag prices live?',
    answer: 'On the food reviews. This page does not repeat bag prices. A bag of food is a different purchase from the gear listed here.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

export default function NovemberDecemberGiftGuidePage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      schema={combineSchemas(schema, faqSchema)}
      hero={{
        title: 'November and December dog gifts',
        subtitle: 'Each price below is the band already printed on a review card. This page does not add a score, a star rating, or a product that those reviews do not already name.',
        category: 'Buyer guide',
        authorName: 'Dog.com Editorial',
        publishedAt: 'October 2026',
        readTime: '8 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'November and December gifts', href: PATH },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Holiday scraps guide', href: '/reviews/holiday-scraps-trash-can-guide' },
            { label: 'Best dog harnesses', href: '/reviews/best-dog-harnesses' },
            { label: 'Best dental chews', href: '/reviews/best-dental-chews' },
          ]}
        />
      }
      priceAsOf="2026-10-04"
    >
      <div className="carloOS-article">
        <p>November and December are when people buy a chew, a bowl, a harness, or a bed for a dog they already live with. The <Link href="/reviews">reviews hub</Link> already prices those products. This page only sorts cards that print a dollar band, so a shopper can see which reviewed item sits in which band. It is not a new test, and it is not a claim that any row is the gift of the year.</p>
        <p>Holiday scraps and chocolate are a different problem. The <Link href="/reviews/holiday-scraps-trash-can-guide">scraps guide</Link> and the <Link href="/reviews/holiday-chocolate-calculator-guide">chocolate guide</Link> stay the pages for those risks. Nothing in the table below is a food-bag price. Bag prices stay on the food reviews.</p>
        <h2>Printed bands under $40</h2>
        <p>The slow-feeder review prints the LickiMat Splash at $10–15 and the Outward Hound Fun Feeder at $10–18. The Northmate Green feeder on that same review is $25–35. The dental review prints Whimzees at $20–30 for a 14-count and Greenies Original at $25–35 for a 27-count. The harness review prints the PetSafe Easy Walk at $20–30. Those are the bands. A checkout total can be higher or lower than the band on the card.</p>
        <h2>Printed bands from $40 to $80</h2>
        <p>The harness review prints the Ruffwear Front Range at $40–55 and the Julius-K9 IDC Powerharness at $40–70. The crate review prints the MidWest iCrate at $40–80. Those three are the mid bands on those cards. The Front Range is the hiking harness, the Julius-K9 is the escape-resistant harness, and the iCrate is the wire crate. The reviews say what each one is not for. This page does not reopen those limits.</p>
        <h2>Printed bands over $100</h2>
        <p>The bed review prints the Casper Dog Bed at $125–175. The GPS review prints the Fi Series 3 at $140–160 plus $8–12 a month. The monthly fee is part of that card, so a gift of the collar is not a one-time price. Read the tracker review before you treat the collar as a finished purchase.</p>
        <h2>Who should get which printed band</h2>
        <p>Match the band on the card to the job the review already named. A slow bowl is for a dog that eats too fast. A dental chew does not replace brushing. A front-clip harness is for pulling, and it is the wrong harness for a dog with a shoulder or elbow problem. A wire crate is for house training when the dog does not already defeat wire.</p>
        <AffiliateDisclosure variant="inline" siteId="dog-com" />
        <div className="overflow-x-auto max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed sm:table-auto min-w-0 sm:min-w-[36rem] [&_th]:break-words [&_td]:break-words">
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th className="p-3 font-bold text-brand-dark">Printed band</th>
                <th className="p-3 font-bold text-brand-dark">Product</th>
                <th className="p-3 font-bold text-brand-dark">Review</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$10–15</td>
                <td className="p-3 font-bold text-brand-dark">LickiMat Splash<TableShopLink href={`/go/chewy-brand/lickimat+splash?s=${SOURCE}`} product="LickiMat Splash" /></td>
                <td className="p-3"><Link href="/reviews/best-slow-feeder-bowls">Slow feeder review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$10–18</td>
                <td className="p-3 font-bold text-brand-dark">Outward Hound Fun Feeder<TableShopLink href={`/go/chewy-brand/outward+hound+fun+feeder?s=${SOURCE}`} product="Outward Hound Fun Feeder" /></td>
                <td className="p-3"><Link href="/reviews/best-slow-feeder-bowls">Slow feeder review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$20–30</td>
                <td className="p-3 font-bold text-brand-dark">PetSafe Easy Walk<TableShopLink href={`/go/chewy-brand/petsafe+easy+walk+harness?s=${SOURCE}`} product="PetSafe Easy Walk" /></td>
                <td className="p-3"><Link href="/reviews/best-dog-harnesses">Harness review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$20–30 for a 14-count</td>
                <td className="p-3 font-bold text-brand-dark">Whimzees<TableShopLink href={`/go/chewy-brand/whimzees+dental+chews+dogs?s=${SOURCE}`} product="Whimzees" /></td>
                <td className="p-3"><Link href="/reviews/best-dental-chews">Dental review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$25–35 for a 27-count</td>
                <td className="p-3 font-bold text-brand-dark">Greenies Original<TableShopLink href={`/go/chewy-brand/greenies+dental+chews+dogs?s=${SOURCE}`} product="Greenies Original" /></td>
                <td className="p-3"><Link href="/reviews/best-dental-chews">Dental review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$25–35</td>
                <td className="p-3 font-bold text-brand-dark">Northmate Green<TableShopLink href={`/go/amazon-brand/northmate+green+interactive+feeder?s=${SOURCE}`} product="Northmate Green" /></td>
                <td className="p-3"><Link href="/reviews/best-slow-feeder-bowls">Slow feeder review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$40–55</td>
                <td className="p-3 font-bold text-brand-dark">Ruffwear Front Range<TableShopLink href={`/go/chewy-brand/ruffwear+front+range+harness?s=${SOURCE}`} product="Ruffwear Front Range" /></td>
                <td className="p-3"><Link href="/reviews/best-dog-harnesses">Harness review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$40–70</td>
                <td className="p-3 font-bold text-brand-dark">Julius-K9 IDC<TableShopLink href={`/go/amazon-brand/julius+k9+idc+powerharness?s=${SOURCE}`} product="Julius-K9 IDC" /></td>
                <td className="p-3"><Link href="/reviews/best-dog-harnesses">Harness review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$40–80</td>
                <td className="p-3 font-bold text-brand-dark">MidWest iCrate<TableShopLink href={`/go/amazon-brand/midwest+icrate+dog+crate?s=${SOURCE}`} product="MidWest iCrate" /></td>
                <td className="p-3"><Link href="/reviews/best-dog-crates">Crate review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$125–175</td>
                <td className="p-3 font-bold text-brand-dark">Casper Dog Bed<TableShopLink href={`/go/chewy-brand/casper+dog+bed?s=${SOURCE}`} product="Casper Dog Bed" /></td>
                <td className="p-3"><Link href="/reviews/best-dog-beds">Bed review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3 text-brand-text-mid">$140–160 plus $8–12 a month</td>
                <td className="p-3 font-bold text-brand-dark">Fi Series 3<TableShopLink href={`/go/amazon-brand/fi+series+3+dog+collar?s=${SOURCE}`} product="Fi Series 3" /></td>
                <td className="p-3"><Link href="/reviews/best-dog-gps-tracker">GPS review</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-05" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
        <BelowFoldPhoto siteId="dog-com" />
      </div>
    </ArticleLayout>
  )
}
