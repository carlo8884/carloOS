import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, ShopCtas, buildArticleSchema, buildMetadata, LastUpdated, ComparisonFoot } from '@carloOS/ui'
import { HopDisclosure } from '../../../components/HopDisclosure'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Wood vs Grass Pellet Litter | Ferret.com',
  description: 'The litter review covers heat-treated wood pellets and grass pellets. Stronger odor control, or a softer pellet.',
  path: '/reviews/wood-vs-grass-litter-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Wood pellets or grass pellets',
  description: 'Heat-treated wood pellets for odor, or grass pellets for a softer feel. The notes are on the litter review.',
  url: 'https://ferret.com/reviews/wood-vs-grass-litter-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which of these two does the review list first?',
    answer: 'Compressed wood pellet litter, marked Best for Odor. The review lists low dust once fines are sifted, no clumping, strong odor control, and a requirement that the pellets be heat-treated and low-phenol. It is harder underfoot than paper. The price tier is the lowest of the three litters.',
  },
  {
    question: 'When does the review point to grass pellets?',
    answer: 'When texture is the complaint. Pelleted grass is the soft alternative. The review lists low dust, no clumping, a soft feel, moderate odor control, and faster breakdown when wet. The price tier is the mid tier. It is for a ferret that dislikes paper or wood underfoot.',
  },
  {
    question: 'Can either litter be a clumping cat litter?',
    answer: 'No. The litter review says all three safe options are non-clumping and low-dust, and not to switch to a clumping cat litter for smell. Recycled paper, is the default on that page and a different comparison.',
  },
]

export default function WoodVsGrassLitterGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={schema}
      heroHop={<a href="/reviews/best-ferret-litter" className="inline-block max-w-full bg-white text-brand-dark text-sm font-bold px-4 py-2.5 rounded-md no-underline mb-5">Litter review</a>}
      hero={{
        title: 'Wood pellets or grass pellets',
        subtitle: 'Heat-treated wood when odor is the priority, or a softer grass pellet. Dust, odor, and the wood caveat below are the ones on the litter review.',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Wood vs grass litter', href: '/reviews/wood-vs-grass-litter-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Ferret litter', href: '/reviews/best-ferret-litter' },
            { label: 'Litter planner', href: '/tools/litter-planner' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
          <LastUpdated date="2026-10-10" />
        <EmailCapture
          variant="inline"
          siteId="ferret-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-wood-vs-grass-litter-guide"
          checklist={[
            "Compressed wood pellet litter, marked Best for Odor.",
            "The review lists low dust once fines are sifted, no clumping, strong odor control, and a requirement that the pellets be heat-treated and low-phenol.",
            "The price tier is the lowest of the three litters.",
            "The review lists low dust, no clumping, a soft feel, moderate odor control, and faster breakdown when wet.",
            "It is for a ferret that dislikes paper or wood underfoot.",
            "The litter review says all three safe options are non-clumping and low-dust, and not to switch to a clumping cat litter for smell.",
          ]}
        />
        <p>Prices below are the ones on the <Link href="/reviews/best-ferret-litter">litter review</Link>. Compressed wood pellets are the odor pick. Pelleted grass is for ferrets that dislike a harder texture. Recycled paper is the overall winner on that page, and it is a separate comparison.</p>
        <h2>What the review says about wood pellets</h2>
        <p>Compressed wood pellet litter is Best for Odor. Dust is low once the fines are sifted. It does not clump. Odor control is the strongest of the safe options on that page. The caveat is the wood form: use only heat-treated, low-phenol compressed pellets. The review says aromatic raw cedar and pine shavings release phenols implicated in respiratory irritation, so loose aromatic shavings are not this product. Wood is harder underfoot than paper. The price tier is the lowest of the three litters.</p>
        <h2>What the review says about grass pellets</h2>
        <p>Pelleted grass is the soft alternative. Dust is low. It does not clump. The feel is soft, which the review says some ferrets prefer to wood. Odor control is moderate. Pellets can break down faster when wet, so the pan may need changing more often than wood. The price tier is the mid tier. The review calls it a paper-pellet alternative, useful mainly when texture is the complaint.</p>
        <p>Scoop timing is on the <Link href="/tools/litter-planner">litter planner</Link>, using the pan-change approach from that review.</p>
        <h2>Who should buy which litter</h2>
        <p>Buy heat-treated wood pellets when odor is the priority and you will reject loose cedar or pine shavings. Buy grass pellets when the ferret dislikes wood or paper underfoot and you will change the pan more often because wet pellets break down. Do not buy a clumping cat litter for either job. The default low-dust litter on the same review is recycled paper.</p>
        <p>Heat-treated wood pellets are the odor pick, and only as compressed low-phenol pellets. Loose aromatic shavings are not this product.</p>
        <HopDisclosure siteId="ferret-com" href="/go/amazon-brand/heat+treated+wood+pellet+litter?s=reviews-wood-vs-grass-litter-guide" />
        <p>The link below is an Amazon search, not one product. Check the bag says heat-treated, compressed pellets, not loose shavings.</p>
        <ShopCtas
          amazonHref="/go/amazon-brand/heat+treated+wood+pellet+litter?s=reviews-wood-vs-grass-litter-guide"
          amazonLabel="Search Amazon for heat-treated wood pellet litter"
        />
        <div className="my-6 max-w-full min-w-0">
          <table className="w-full text-sm border-collapse table-fixed [&_th]:break-words [&_td]:break-words">
            <caption className="text-left font-semibold text-brand-dark p-3">Side by side, from the sentences on this page</caption>
            <thead>
              <tr className="bg-brand-surface border-b-2 border-brand-primary text-left">
                <th scope="col" className="p-3 font-bold text-brand-dark">Point</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Compressed wood pellets</th>
                <th scope="col" className="p-3 font-bold text-brand-dark">Grass pellets</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Role</th>
                <td className="p-3">Best for Odor</td>
                <td className="p-3">Soft alternative</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Dust</th>
                <td className="p-3">Low once the fines are sifted</td>
                <td className="p-3">Low</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Odor</th>
                <td className="p-3">Strongest of the safe options on that page</td>
                <td className="p-3">Moderate</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Feel</th>
                <td className="p-3">Harder underfoot than paper</td>
                <td className="p-3">Soft. Some ferrets prefer it to wood</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Caveat</th>
                <td className="p-3">Heat-treated, low-phenol pellets only. Not loose cedar or pine shavings</td>
                <td className="p-3">Wet pellets break down faster, so change the pan more often than wood</td>
              </tr>
              <tr className="border-b border-brand-border align-top">
                <th scope="row" className="p-3 font-bold text-brand-dark text-left">Price tier</th>
                <td className="p-3">Lowest of the three litters</td>
                <td className="p-3">Mid</td>
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
