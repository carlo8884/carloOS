import type { Metadata } from 'next'
import Link from 'next/link'
import { HopDisclosure } from '../../../components/HopDisclosure'
import { ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas, ArticleSourcesList, LastUpdated, ComparisonFoot, KeyFacts } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Critter Nation vs Marshall Ferret Cage | Ferret.com',
  description: 'The cage-setup page covers the MidWest Critter Nation double unit and a Marshall starter cage. Confirm bar spacing on either one.',
  path: '/reviews/critter-nation-vs-marshall-cage-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Critter Nation or a Marshall ferret cage',
  description: 'A two-level double unit with full-width doors, or a smaller Marshall starter cage. The notes are on the cage-setup page.',
  url: 'https://ferret.com/reviews/critter-nation-vs-marshall-cage-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-10T00:00:00Z',
  modifiedAt: '2026-10-17T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which cage does the cage-setup page mark for solid floors?',
    answer: 'The MidWest Critter Nation Double Unit (Model 162), marked Best for solid floors. The card lists 36×25×62 inches, two large solid PVC floors, full-width double doors on each level, and casters. The manufacturer page does not print bar spacing, so confirm it on the box.',
  },
  {
    question: 'When does the page point to the Marshall cage?',
    answer: 'As the pick for a first cage in a smaller apartment. The card says the current mansion listings are two levels, accessories are not included, and a smaller starter cage is often outgrown once a second ferret arrives. Check bar spacing and footprint on the current listing.',
  },
  {
    question: 'Why is there no Marshall shop button on this page?',
    answer: 'Marshall’s old Designer Ferret Cage page is gone, so this guide does not link to it. The Marshall card on the cage-setup page covers Marshall’s current ferret cages.',
  },
]

const RANKED = ['MidWest Critter Nation Double Unit (Model 162)', 'Marshall ferret cage']
const itemList = buildItemListSchema({
  name: 'Critter Nation or a Marshall ferret cage',
  items: RANKED.map((name) => ({ name, url: ({ 'MidWest Critter Nation Double Unit (Model 162)': 'https://ferret.com/go/amazon/B001NJ0DAY?s=reviews-critter-nation-vs-marshall-cage-guide' }[name] ?? 'https://ferret.com/reviews/critter-nation-vs-marshall-cage-guide') })),
})

export default function CritterNationVsMarshallCageGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Critter Nation or a Marshall ferret cage',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Best for solid floors: the Critter Nation double unit.</p>
          <div data-fold="offer">
          <HopDisclosure tone="on-dark" siteId="ferret-com" href="/go/amazon/B001NJ0DAY?s=reviews-critter-nation-vs-marshall-cage-guide" /><a className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline" href="/go/amazon/B001NJ0DAY?s=reviews-critter-nation-vs-marshall-cage-guide">Browse a Critter Nation double unit on Amazon →</a>
        </div>
        </>
      }
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Critter Nation vs Marshall', href: '/reviews/critter-nation-vs-marshall-cage-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Cage setup', href: '/care/cage-setup' },
            { label: 'Ferret cages', href: '/reviews/best-ferret-cage' },
            { label: 'Cage size calculator', href: '/tools/cage-size-calculator' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-17" />
        <KeyFacts
          items={[
            { label: 'Best for solid floors', detail: 'Critter Nation double unit (Model 162). 36×25×62 inches, two large solid PVC floors, full-width double doors on each level, and casters. Confirm bar spacing on the box.' },
            { label: 'Best for a first cage', detail: 'A Marshall ferret cage. The current mansion listings are two levels, accessories are not included, and the footprint fits smaller apartments. A second ferret often outgrows it.' },
          ]}
        />
        <EmailCapture
          variant="inline"
          siteId="ferret-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-critter-nation-vs-marshall-cage-guide"
          checklist={[
            "The Critter Nation double unit is 36×25×62 inches with two solid PVC floors.",
            "The manufacturer page does not print bar spacing. Confirm it on the box.",
            "The Marshall cage listings are two levels, and accessories are not included.",
            "A smaller starter cage is often outgrown once a second ferret arrives.",
            "Measure the room before you order a double unit.",
            "Cover bare wire ramps and keep the floor solid or fleece-lined.",
          ]}
        />
        <p>Both cages are cards on the <Link href="/care/cage-setup">cage-setup page</Link>. The MidWest Critter Nation double unit is the pick for solid floors, and a Marshall ferret cage is the pick for a first cage. Either one is the bedroom, not the house, and the ferret still needs daily time out of it.</p>
        <h2>What the page says about Critter Nation</h2>
        <p>The MidWest Critter Nation Double Unit (Model 162) is the pick for solid floors. The card lists 36×25×62 inches for the double unit, two large solid PVC floors with a connecting ramp, full-width double doors on each level, and casters for moving it. A single-level Model 161 and three-level expansion options exist. The manufacturer page does not print bar spacing, so confirm it on the box. The cons are a heavy, large cage you should measure for, assembly that takes several hours and is easier with two people, and a ramp that can be slippery without a fleece cover.</p>
        <h2>What the page says about Marshall</h2>
        <p>The Marshall ferret cage is the pick for a first cage. Marshall’s old Designer Ferret Cage page is gone, so look for Marshall’s current ferret cages instead. The current mansion listings are two levels, and accessories are not included. Check bar spacing and footprint on the current listing. The card says the footprint fits smaller apartments and the brand is widely available in US pet retail. The cons are that a two-ferret household outgrows it, the pan area is smaller than the Critter Nation’s, and plastic shelves wear in heavy-use households.</p>
        <p>Floor space for the number of ferrets is on the <Link href="/tools/cage-size-calculator">cage-size calculator</Link>. The cage-setup page gives about 36 × 24 inches with three levels for two ferrets as a planning figure, not a published standard.</p>
        <h2>Who should buy which cage</h2>
        <p>Buy the Critter Nation when you have room for a 36×25×62 inch cage, want solid floors and full-width doors for cleaning, and may keep two ferrets. Buy a Marshall cage when you need a first cage for one ferret in a smaller apartment and can check bar spacing and footprint on the listing. Skip the Marshall when a second ferret is already planned. Skip the Critter Nation when you cannot measure the room or manage a multi-hour assembly.</p>
        <p>Either cage needs a solid or fleece-covered floor, covered ramps, and a corner litter pan on the lowest level. The <Link href="/reviews/best-ferret-cage">cage review</Link> compares the Ferret Nation, Prevue, and Kaytee cages separately.</p>
        <div className="my-6 max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
            <caption className="text-left font-semibold text-brand-dark p-3">At a glance</caption>
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th scope="col" className="p-3 font-bold text-brand-dark">Point</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Critter Nation double unit</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Marshall ferret cage</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Role</th>
                <td className="p-3">Best for solid floors</td>
                <td className="p-3">Best for a first cage</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Size</th>
                <td className="p-3">36×25×62 inches. Measure before buying</td>
                <td className="p-3">Check the current listing. Fits smaller apartments</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Levels</th>
                <td className="p-3">Two large solid PVC floors with a ramp</td>
                <td className="p-3">Two levels on the current mansion listing</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Bar spacing</th>
                <td className="p-3">Not printed on the manufacturer page. Confirm on the box</td>
                <td className="p-3">Confirm ferret-safe spacing on the listing</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Access and setup</th>
                <td className="p-3">Full-width double doors per level. Multi-hour assembly</td>
                <td className="p-3">Accessories not included. Plastic shelves wear with heavy use</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Buy it when</th>
                <td className="p-3">You have the room and may keep two ferrets</td>
                <td className="p-3">You need a first cage for one ferret in a smaller space</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-17" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList
            title="Sources"
            sources={[
            { label: "Marshall Pet Products", url: "https://www.marshallpet.com/", publisher: "Marshall Pet Products" },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
