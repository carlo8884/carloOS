import type { Metadata } from 'next'
import { HopDisclosure } from '../../../components/HopDisclosure'
import { ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, buildArticleSchema, buildItemListSchema, buildMetadata, combineSchemas, LastUpdated, ComparisonFoot } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Troxel Spirit vs Charles Owen AYR8 Plus | Horses.com',
  description: 'The helmet guide covers the entry Troxel Spirit and the premium Charles Owen AYR8 Plus. Both are certified and both retire after an impact.',
  path: '/reviews/troxel-spirit-vs-charles-owen-ayr8-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Troxel Spirit or Charles Owen AYR8 Plus',
  description: 'An entry ASTM/SEI schooling helmet or a multi-standard show helmet. The helmet guide says certification and fit matter more than the tier.',
  url: 'https://horses.com/reviews/troxel-spirit-vs-charles-owen-ayr8-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-10T00:00:00Z',
  modifiedAt: '2026-10-10T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which helmet does the guide pick for a new rider?',
    answer: 'The Troxel Spirit, marked Best Value and the winner. The card says it carries ASTM/SEI certification, uses a dial-fit system, and suits schooling, new riders, and lesson-barn spares. Its low replacement cost matters because a helmet must be retired after a fall regardless of cost.',
  },
  {
    question: 'When does the guide point to the Charles Owen AYR8 Plus?',
    answer: 'When a rider shows regularly and wants a multi-standard helmet. The card says it is commonly certified to PAS 015, VG1, and ASTM/SEI depending on model variant, with a high-flow vented shell and a show-appropriate appearance. Cons are a premium price, single use after a real impact, and professional fitting strongly advised.',
  },
  {
    question: 'Does the premium helmet protect more because it costs more?',
    answer: 'The helmet guide says the protective value comes from certification and correct fit, not the price. Every helmet on that page is replaced after any significant impact, even if it looks undamaged, because the protective foam crushes once.',
  },
]

const RANKED = ['Troxel Spirit', 'Charles Owen AYR8 Plus']
const itemList = buildItemListSchema({
  name: 'Troxel Spirit or Charles Owen AYR8 Plus',
  items: RANKED.map((name) => ({ name, url: ({ 'Troxel Spirit': 'https://horses.com/go/amazon/B01NH7H4NG?s=reviews-troxel-spirit-vs-charles-owen-ayr8-guide', 'Charles Owen AYR8 Plus': 'https://horses.com/go/amazon-brand/charles+owen+ayr8+helmet?s=reviews-troxel-spirit-vs-charles-owen-ayr8-guide' }[name] ?? 'https://horses.com/reviews/troxel-spirit-vs-charles-owen-ayr8-guide') })),
})

export default function TroxelSpiritVsCharlesOwenAyr8GuidePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      schema={combineSchemas(schema, itemList)}
      hero={{
        title: 'Troxel Spirit or Charles Owen AYR8 Plus',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">The Troxel Spirit is the value pick because it is ASTM/SEI certified and cheap to replace after a fall.</p>
          <div data-fold="offer">
          <HopDisclosure tone="on-dark" siteId="horses-com" href="/go/amazon/B01NH7H4NG?s=reviews-troxel-spirit-vs-charles-owen-ayr8-guide" /><a className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline" href="/go/amazon/B01NH7H4NG?s=reviews-troxel-spirit-vs-charles-owen-ayr8-guide">Browse the Troxel Spirit riding helmet on Amazon →</a>
        </div>
        </>
      }
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Troxel Spirit vs Charles Owen AYR8', href: '/reviews/troxel-spirit-vs-charles-owen-ayr8-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Riding helmet guide', href: '/tack/helmet-guide' },
            { label: 'Brushing vs bell boots', href: '/reviews/brushing-boots-vs-bell-boots-guide' },
          ]}
        />
      }
      priceAsOf="2026-10-10"
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-10" />
        <EmailCapture
          variant="inline"
          siteId="horses-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-troxel-spirit-vs-charles-owen-ayr8-guide"
          checklist={[
            "Look for the equestrian certification label inside the helmet. A bike helmet is not a substitute.",
            "The Troxel Spirit is ASTM/SEI certified with a dial-fit system, for schooling, new riders, and spares.",
            "The Charles Owen AYR8 Plus is multi-standard certified by variant, for showing and competitive riders.",
            "The helmet should sit level, low on the forehead just above the eyebrows, and grip evenly without sliding.",
            "Fasten the chinstrap so only a finger or two fits underneath.",
            "Replace any helmet after a significant impact, even if it looks undamaged. Do not buy second-hand.",
          ]}
        />
        <p>The Troxel Spirit is a certified entry schooling helmet, and the Charles Owen AYR8 Plus is a multi-standard premium show helmet. Both must be fitted to the head, and both are retired after a significant impact.</p>
        <h2>What the guide says about the Troxel Spirit</h2>
        <p>The Troxel Spirit is Best Value and the winner. The card says it is one of the most widely stocked entry-tier schooling helmets in US equestrian retail, and that it carries ASTM/SEI certification, the floor requirement for any riding helmet. Adjustment is a dial-fit system. Its entry price makes replacing it after a fall financially painless, which matters because a spent helmet must be retired regardless of cost. The cons say it is heavier and less ventilated than premium helmets and has fewer shape options for hard-to-fit heads. An entry price does not change the fit requirement.</p>
        <h2>What the guide says about the Charles Owen AYR8 Plus</h2>
        <p>The Charles Owen AYR8 Plus is Premium / Show. The card says it is a long-standing show helmet certified to multiple equestrian standards, commonly PAS 015, VG1, and ASTM/SEI depending on model variant. Riders choose it for the refined fit, the high-flow vented shell, and a show-appropriate appearance. The cons are a premium price, single use after a real impact, and professional fitting strongly advised. The card adds that the protective value still comes from certification and correct fit, not the price.</p>
        <h2>Who should buy which helmet</h2>
        <p>Buy the Troxel Spirit for a new rider, a growing rider, or a lesson-barn spare, and for anyone who will not hesitate to replace it after an impact. Buy the Charles Owen AYR8 Plus for a rider who shows regularly, wants a multi-standard helmet, and can get a professional fitting. Skip the Troxel when the entry fit range does not match the head. Skip the Charles Owen when the lowest replacement cost after a fall matters most. Replace a child&apos;s helmet as the head grows rather than buying big to last, since a loose helmet does not protect.</p>
        <p>Either helmet is replaced after any significant impact, and manufacturers commonly advise replacing it around every five years even without a fall. A second-hand helmet may have an unseen impact history, so buy new.</p>
        <div className="my-6 max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
            <caption className="text-left font-semibold text-brand-dark p-3">Side by side, from the sentences on this page</caption>
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th scope="col" className="p-3 font-bold text-brand-dark">Point</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Troxel Spirit</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Charles Owen AYR8 Plus</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Tier</th>
                <td className="p-3">Entry, Best Value, and the winner</td>
                <td className="p-3">Premium / Show</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Certification</th>
                <td className="p-3">ASTM/SEI</td>
                <td className="p-3">Multi-standard, commonly PAS 015, VG1, and ASTM/SEI by variant</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Fit</th>
                <td className="p-3">Dial-fit system. Fewer shape options for hard-to-fit heads</td>
                <td className="p-3">Refined fit. Professional fitting strongly advised</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Ventilation</th>
                <td className="p-3">Heavier and less ventilated than premium helmets</td>
                <td className="p-3">High-flow vented shell</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">After an impact</th>
                <td className="p-3">Retire it. Low replacement cost after a fall</td>
                <td className="p-3">Retire it. Still single-use after a real impact</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Buy it when</th>
                <td className="p-3">The rider is new, growing, or needs a lesson-barn spare</td>
                <td className="p-3">The rider shows regularly and wants a multi-standard helmet</td>
              </tr>
            </tbody>
          </table>
        </div>
        <ComparisonFoot updated="2026-10-10" />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
