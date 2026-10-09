import type { Metadata } from 'next'
import Link from 'next/link'
import { HopDisclosure } from '../../../components/HopDisclosure'
import { ArticleLayout, FAQAccordion, QuietPartnerLink, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata, ArticleSourcesList, LastUpdated, ComparisonFoot } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Weatherbeeta vs Amigo Turnout | Horses.com',
  description: 'Weatherbeeta ComFiTec for wither rubs, or Horseware Amigo Bravo 12 at the value price. Specs are on the blanket review.',
  path: '/reviews/weatherbeeta-vs-amigo-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Weatherbeeta or Amigo',
  description: 'The Weatherbeeta ComFiTec Plus Dynamic II or the Horseware Amigo Bravo 12 Plus. Scores and prices are on the blanket review.',
  url: 'https://horses.com/reviews/weatherbeeta-vs-amigo-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which blanket does the review pick for wither rubs?',
    answer: 'The Weatherbeeta ComFiTec Plus Dynamic II, marked Best Mid-Tier. The review lists a 1200-denier ripstop shell, fill of 0 g, 100 g, 220 g, or 360 g, a memory-foam wither panel, a snap front, a deep tail flap, and a price of $170–280. It also says Weatherbeeta sizing runs differently from Horseware.',
  },
  {
    question: 'When does the review point to the Amigo Bravo 12?',
    answer: 'When you want Horseware construction at a lower price. The review lists a 1000-denier ballistic shell, fill of 0 g, 100 g, or 250 g, polymer hardware, a T-bar front, a standard neck, a 1-year warranty, and a price of $130–190. It says pasture durability is often 2–4 seasons.',
  },
  {
    question: 'Is either blanket the Rambo?',
    answer: 'No. Rambo versus Rhino is a separate comparison. Prices here are the Weatherbeeta and Amigo figures on the blanket review. Measure chest to tail before you order. The blanket-size calculator uses that length.',
  },
]

export default function WeatherbeetaVsAmigoGuidePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      schema={schema}
      hero={{
        title: 'Weatherbeeta or Amigo',
        subtitle: 'A mid-tier turnout with a wither panel, or Horseware’s value blanket. Denier, fill, and prices below are the ones on the blanket review.',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<><HopDisclosure siteId="horses-com" href="/go/amazon-brand/horse+turnout+blanket?s=reviews-weatherbeeta-vs-amigo-guide" /><a className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline" href="/go/amazon-brand/horse+turnout+blanket?s=reviews-weatherbeeta-vs-amigo-guide">Browse horse turnout blankets on Amazon →</a></>}
      heroExtra={<QuietPartnerLink tone="dark" href="/go/dover/weatherbeeta-comfitec-plus-dynamic?s=reviews-weatherbeeta-vs-amigo-guide" label="Shop the Weatherbeeta ComFiTec at Dover Saddlery" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Weatherbeeta vs Amigo', href: '/reviews/weatherbeeta-vs-amigo-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Winter blankets', href: '/reviews/best-winter-horse-blankets' },
            { label: 'Blanket size calculator', href: '/tools/horse-blanket-size-calculator' },
          ]}
        />
      }
      priceAsOf="2026-10-05"
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-09" />
        <EmailCapture
          variant="inline"
          siteId="horses-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-weatherbeeta-vs-amigo-guide"
          checklist={[
            "The Weatherbeeta ComFiTec Plus Dynamic II, marked Best Mid-Tier.",
            "It also says Weatherbeeta sizing runs differently from Horseware.",
            "When you want Horseware construction at a lower price.",
            "Prices here are the Weatherbeeta and Amigo figures on the blanket review.",
            "The blanket-size calculator uses that length.",
            "The Weatherbeeta ComFiTec Plus Dynamic II is the mid-tier turnout, and the Horseware Amigo Bravo 12 Plus is the value turnout.",
          ]}
        />
        <p>Prices below are the ones on the <Link href="/reviews/best-winter-horse-blankets">winter blanket review</Link>. The Weatherbeeta ComFiTec Plus Dynamic II is the mid-tier turnout with a memory-foam wither panel. The Horseware Amigo Bravo 12 Plus is the value turnout. Rambo versus Rhino is a different pair, on the <Link href="/reviews/rambo-vs-rhino-guide">Rambo versus Rhino guide</Link>.</p>
        <h2>What the review says about the Weatherbeeta</h2>
        <p>The ComFiTec Plus Dynamic II is Best Mid-Tier. The shell is 1200-denier ripstop. Fill options in the review are 0 g, 100 g, 220 g, and 360 g. The neck is a standard cut with a memory-foam wither panel, which the review calls useful when a conventional turnout rubs the withers. Hardware is a polymer surcingle and a snap front. It has a deep tail flap. The printed price is $170–280. The review says Weatherbeeta sizing runs differently from Horseware, so measure and use the retailer’s trial period. It also says the snap front is less robust than a T-bar in ice.</p>
        <p>Measure chest to tail before you order. The <Link href="/tools/horse-blanket-size-calculator">blanket-size calculator</Link> rounds that length. The review’s US inch sizes for Horseware belong to a different blanket. Weatherbeeta sizing stays the chart on that review.</p>
        <h2>What the review says about the Amigo</h2>
        <p>The Amigo Bravo 12 Plus is Best Value. The review calls Amigo Horseware’s value line, from the same factory lineage as Rambo and Rhino, with simpler hardware and a less padded liner. The shell is 1000-denier ballistic nylon, the same denier the review lists for the Rambo Original shell. Fill options are 0 g, 100 g, and 250 g. The neck is standard. Hardware is a polymer surcingle and a T-bar. Warranty is one year. The printed price is $130–190. The review says active pasture turnout often lasts 2–4 seasons, sometimes longer, and that the standard neck can rub some shoulders.</p>
        <h2>Who should buy which blanket</h2>
        <p>Buy the Weatherbeeta when wither rubs are the reason for a new turnout and you will check the size against Horseware’s chart rather than assuming they match. Buy the Amigo when you want the Horseware line at the lower printed price and you can accept polymer hardware and a standard neck. Neither blanket is the heavy-winter Schneiders StormShield or the Rambo Original.</p>
        <p>The Weatherbeeta is the pick when wither rubs are the reason for a new turnout. The sale price can differ from the band above.</p>
        <div className="my-6 max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
            <caption className="text-left font-semibold text-brand-dark p-3">Side by side, from the sentences on this page</caption>
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th scope="col" className="p-3 font-bold text-brand-dark">Point</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">ComFiTec Plus Dynamic II</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Amigo Bravo 12 Plus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Role</th>
                <td className="p-3">Best Mid-Tier</td>
                <td className="p-3">Best Value</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Shell</th>
                <td className="p-3">1200-denier ripstop</td>
                <td className="p-3">1000-denier ballistic nylon</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Fill</th>
                <td className="p-3">0 g, 100 g, 220 g, and 360 g</td>
                <td className="p-3">0 g, 100 g, and 250 g</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Neck and hardware</th>
                <td className="p-3">Memory-foam wither panel. Polymer surcingle and a snap front</td>
                <td className="p-3">Standard neck. Polymer surcingle and a T-bar</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Sizing and wear</th>
                <td className="p-3">Sizing runs differently from Horseware. The snap front is less robust than a T-bar in ice</td>
                <td className="p-3">One-year warranty. Pasture durability is often 2–4 seasons</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-09" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
                <ArticleSourcesList
            title="Sources"
            sources={[
            { label: "Horseware", url: "https://www.horseware.com/", publisher: "Horseware" },
            { label: "Weatherbeeta", url: "https://www.weatherbeeta.com/", publisher: "Weatherbeeta" },
            ]}
          />
      </div>
    </ArticleLayout>
  )
}
