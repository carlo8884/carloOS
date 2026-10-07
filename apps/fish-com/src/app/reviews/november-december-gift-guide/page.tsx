import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, BelowFoldPhoto, ComparisonFoot, FAQAccordion, RelatedLinks, TableShopLink, buildArticleSchema, buildFAQSchema, buildMetadata, combineSchemas } from '@carloOS/ui'

const PATH = '/reviews/november-december-gift-guide'
const SOURCE = 'reviews-november-december-gift-guide'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'November and December Aquarium Gifts | Fish.com',
  description: 'November and December aquarium gifts grouped by the price bands already printed on the filter, heater, light, tank, and test-kit reviews.',
  path: PATH,
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'November and December aquarium gifts',
  description: 'Equipment already priced on Fish.com reviews, grouped by those printed bands. This page does not add a score.',
  url: 'https://fish.com/reviews/november-december-gift-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-05T00:00:00Z',
  modifiedAt: '2026-10-05T00:00:00Z',
})

const FAQS = [
  {
    question: 'Does this page pick a best holiday gift for a tank?',
    answer: 'No. It repeats price bands from the equipment reviews and points at the same shop searches those cards already use. The review still says which tank the product is for.',
  },
  {
    question: 'Which printed bands are the smaller equipment gifts?',
    answer: 'The fertilizer review prints Seachem Flourish at $10–20 and Easy Green at $15–25. The filter review prints the Hikari Bacto-Surge sponge at $10–20. The lighting review prints the Nicrew Classic LED+ at $20–35. The test-kit review prints the API Freshwater Master Test Kit at $28–35.',
  },
  {
    question: 'Why is the Kessil in its own band?',
    answer: 'The lighting review prints the Kessil A360X at $400–500 and calls it a reef light. That band is the top of the prices on these cards. It is not a small add-on for a fish-only tank.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

export default function NovemberDecemberGiftGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={combineSchemas(schema, faqSchema)}
      hero={{
        title: 'November and December aquarium gifts',
        subtitle: 'Each price is the band already printed on an equipment card. This page does not add a fish, a score, or a product the reviews do not already name.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
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
            { label: 'Best aquarium filters', href: '/reviews/best-aquarium-filters' },
            { label: 'Best aquarium lighting', href: '/reviews/best-aquarium-lighting' },
            { label: 'Winter heater sizing', href: '/reviews/winter-heater-sizing-guide' },
          ]}
        />
      }
      priceAsOf="2026-10-04"
    >
      <div className="carloOS-article">
        <p>November and December gifts for a tank are usually a bottle, a test kit, a light, or a filter someone already planned to replace. The <Link href="/reviews">reviews hub</Link> prints those prices. This page groups the cards by the band on the card. It does not say any row is the gift everyone should buy, and it does not change the tank-size limits on the review.</p>
        <p>Cold rooms and short days already have their own pages. Heater watts for a cold room stay on the <Link href="/reviews/winter-heater-sizing-guide">heater sizing guide</Link>. Light hours stay on the <Link href="/reviews/winter-photoperiod-guide">photoperiod guide</Link>. Those pages are not replaced by a gift list.</p>
        <h2>Printed bands under $40</h2>
        <p>The fertilizer review prints Seachem Flourish at $10–20 and Easy Green at $15–25. The filter review prints the Hikari Bacto-Surge sponge at $10–20 and the Aqueon QuietFlow 30 at $25–40. The nano-tank review prints the Aqueon 10-gallon at $20–30. The lighting review prints the Nicrew Classic LED+ at $20–35. The test-kit review prints the API Freshwater Master Test Kit at $28–35. The heater review prints the Aqueon Pro at $18–30 and the Eheim Jager at $25–55. Use the review to see which tank each one is for.</p>
        <h2>Printed bands from $45 to $95</h2>
        <p>The filter review prints the AquaClear 70 at $45–70. The lighting review prints the Hygger 957 at $45–65. The nano-tank review prints the Fluval Spec V at $75–95. Those are mid bands on those cards, not a new category invented for the holidays.</p>
        <h2>Printed bands over $100</h2>
        <p>The filter review prints the Fluval 307 at $120–160. The lighting review prints the Fluval Plant 3.0 at $150–200 and the Kessil A360X at $400–500. The Kessil card is the reef light. The Nicrew card is the fish-only light. Do not swap those jobs because both are lights.</p>
        <h2>Who should get which printed band</h2>
        <p>A test kit is the gift when the tank already exists and nobody has replaced the reagents. A sponge or a small hang-on-back is the gift when the review’s tank size matches the tank in the house. A canister or a reef light is the gift only when the review already names that tank. The shop link is the search already used on the card.</p>
        <HopDisclosure siteId="fish-com" href={[`/go/amazon-brand/seachem+flourish+comprehensive?s=${SOURCE}`, `/go/amazon-brand/hikari+bacto+surge+sponge+filter?s=${SOURCE}`, `/go/amazon-brand/aquarium+co-op+easy+green+fertilizer?s=${SOURCE}`, `/go/amazon-brand/aqueon+pro+heater?s=${SOURCE}`, `/go/amazon-brand/aqueon+10+gallon+aquarium?s=${SOURCE}`, `/go/amazon-brand/nicrew+classic+led?s=${SOURCE}`, `/go/amazon-brand/api+freshwater+master+test+kit?s=${SOURCE}`, `/go/amazon-brand/aquaclear+70+filter?s=${SOURCE}`, `/go/amazon-brand/hygger+957?s=${SOURCE}`, `/go/amazon-brand/fluval+spec+v+5+gallon?s=${SOURCE}`, `/go/amazon-brand/fluval+307+canister+filter?s=${SOURCE}`, `/go/amazon-brand/fluval+plant+3.0?s=${SOURCE}`, `/go/amazon-brand/kessil+a360x?s=${SOURCE}`]} />
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
                <td className="p-3">$10–20</td>
                <td className="p-3 font-bold">Seachem Flourish<TableShopLink href={`/go/amazon-brand/seachem+flourish+comprehensive?s=${SOURCE}`} product="Seachem Flourish" /></td>
                <td className="p-3"><Link href="/reviews/best-planted-tank-fertilizers">Fertilizer review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$10–20</td>
                <td className="p-3 font-bold">Hikari Bacto-Surge<TableShopLink href={`/go/amazon-brand/hikari+bacto+surge+sponge+filter?s=${SOURCE}`} product="Hikari Bacto-Surge" /></td>
                <td className="p-3"><Link href="/reviews/best-aquarium-filters">Filter review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$15–25</td>
                <td className="p-3 font-bold">Easy Green<TableShopLink href={`/go/amazon-brand/aquarium+co-op+easy+green+fertilizer?s=${SOURCE}`} product="Easy Green" /></td>
                <td className="p-3"><Link href="/reviews/best-planted-tank-fertilizers">Fertilizer review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$18–30</td>
                <td className="p-3 font-bold">Aqueon Pro heater<TableShopLink href={`/go/amazon-brand/aqueon+pro+heater?s=${SOURCE}`} product="Aqueon Pro heater" /></td>
                <td className="p-3"><Link href="/reviews/best-aquarium-heaters">Heater review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$20–30</td>
                <td className="p-3 font-bold">Aqueon 10-gallon<TableShopLink href={`/go/amazon-brand/aqueon+10+gallon+aquarium?s=${SOURCE}`} product="Aqueon 10-gallon" /></td>
                <td className="p-3"><Link href="/reviews/best-nano-tanks">Nano tank review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$20–35</td>
                <td className="p-3 font-bold">Nicrew Classic LED+<TableShopLink href={`/go/amazon-brand/nicrew+classic+led?s=${SOURCE}`} product="Nicrew Classic LED+" /></td>
                <td className="p-3"><Link href="/reviews/best-aquarium-lighting">Lighting review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$28–35</td>
                <td className="p-3 font-bold">API Freshwater Master Test Kit<TableShopLink href={`/go/amazon-brand/api+freshwater+master+test+kit?s=${SOURCE}`} product="API Freshwater Master Test Kit" /></td>
                <td className="p-3"><Link href="/reviews/best-water-test-kits">Test kit review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$45–70</td>
                <td className="p-3 font-bold">AquaClear 70<TableShopLink href={`/go/amazon-brand/aquaclear+70+filter?s=${SOURCE}`} product="AquaClear 70" /></td>
                <td className="p-3"><Link href="/reviews/best-aquarium-filters">Filter review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$45–65</td>
                <td className="p-3 font-bold">Hygger 957<TableShopLink href={`/go/amazon-brand/hygger+957?s=${SOURCE}`} product="Hygger 957" /></td>
                <td className="p-3"><Link href="/reviews/best-aquarium-lighting">Lighting review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$75–95</td>
                <td className="p-3 font-bold">Fluval Spec V<TableShopLink href={`/go/amazon-brand/fluval+spec+v+5+gallon?s=${SOURCE}`} product="Fluval Spec V" /></td>
                <td className="p-3"><Link href="/reviews/best-nano-tanks">Nano tank review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$120–160</td>
                <td className="p-3 font-bold">Fluval 307<TableShopLink href={`/go/amazon-brand/fluval+307+canister+filter?s=${SOURCE}`} product="Fluval 307" /></td>
                <td className="p-3"><Link href="/reviews/best-aquarium-filters">Filter review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$150–200</td>
                <td className="p-3 font-bold">Fluval Plant 3.0<TableShopLink href={`/go/amazon-brand/fluval+plant+3.0?s=${SOURCE}`} product="Fluval Plant 3.0" /></td>
                <td className="p-3"><Link href="/reviews/best-aquarium-lighting">Lighting review</Link></td>
              </tr>
              <tr className="border-b border-brand-border">
                <td className="p-3">$400–500</td>
                <td className="p-3 font-bold">Kessil A360X<TableShopLink href={`/go/amazon-brand/kessil+a360x?s=${SOURCE}`} product="Kessil A360X" /></td>
                <td className="p-3"><Link href="/reviews/best-aquarium-lighting">Lighting review</Link></td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-07" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} includeSchema={false} />
        <BelowFoldPhoto siteId="fish-com" />
      </div>
    </ArticleLayout>
  )
}
