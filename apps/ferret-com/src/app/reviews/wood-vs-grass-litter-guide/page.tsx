import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Wood vs Grass Pellet Litter | Ferret.com',
  description: 'The litter review scores heat-treated wood pellets 8.0 and grass pellets 7.8. Stronger odor control, or a softer pellet.',
  path: '/reviews/wood-vs-grass-litter-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Wood pellets or grass pellets',
  description: 'Heat-treated wood pellets for odor, or grass pellets for a softer feel. Scores are on the litter review.',
  url: 'https://ferret.com/reviews/wood-vs-grass-litter-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which of these two does the review score higher?',
    answer: 'Compressed wood pellet litter, scored 8.0 and marked Best for Odor. The review lists low dust once fines are sifted, no clumping, strong odor control, and a requirement that the pellets be heat-treated and low-phenol. It is harder underfoot than paper. The price tier is the lowest of the three litters.',
  },
  {
    question: 'When does the review point to grass pellets?',
    answer: 'When texture is the complaint. Pelleted grass scores 7.8 and is the soft alternative. The review lists low dust, no clumping, a soft feel, moderate odor control, and faster breakdown when wet. The price tier is the mid tier. It is for a ferret that dislikes paper or wood underfoot.',
  },
  {
    question: 'Can either litter be a clumping cat litter?',
    answer: 'No. The litter review says all three safe options are non-clumping and low-dust, and not to switch to a clumping cat litter for smell. Recycled paper, scored 9.2, is the default on that page and a different comparison.',
  },
]

export default function WoodVsGrassLitterGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={schema}
      hero={{
        title: 'Wood pellets or grass pellets',
        subtitle: 'Heat-treated wood when odor is the priority, or a softer grass pellet. Dust, odor, and the wood caveat below are the ones on the litter review.',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/amazon-brand/compressed+wood+pellet+litter+heat+treated+non+clumping?s=reviews-wood-vs-grass-litter-guide" label="Check price of compressed heat-treated wood pellet litter on Amazon" />}
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
        <p>Prices and scores below are the ones on the <Link href="/reviews/best-ferret-litter">litter review</Link>. Compressed wood pellets are the odor pick. Pelleted grass is for ferrets that dislike a harder texture. Recycled paper is the overall winner on that page, and it is a separate comparison.</p>
        <h2>What the review says about wood pellets</h2>
        <p>Compressed wood pellet litter is Best for Odor, score 8.0. Dust is low once the fines are sifted. It does not clump. Odor control is the strongest of the safe options on that page. The caveat is the wood form: use only heat-treated, low-phenol compressed pellets. The review says aromatic raw cedar and pine shavings release phenols implicated in respiratory irritation, so loose aromatic shavings are not this product. Wood is harder underfoot than paper. The price tier is the lowest of the three litters. The shop search is heat-treated, non-clumping compressed wood pellets.</p>
        <h2>What the review says about grass pellets</h2>
        <p>Pelleted grass is the soft alternative, score 7.8. Dust is low. It does not clump. The feel is soft, which the review says some ferrets prefer to wood. Odor control is moderate. Pellets can break down faster when wet, so the pan may need changing more often than wood. The price tier is the mid tier. The review calls it a paper-pellet alternative, useful mainly when texture is the complaint. The shop search is a non-clumping small-animal grass pellet.</p>
        <p>Scoop timing is on the <Link href="/tools/litter-planner">litter planner</Link>, using the pan-change approach from that review.</p>
        <h2>Who should buy which litter</h2>
        <p>Buy heat-treated wood pellets when odor is the priority and you will reject loose cedar or pine shavings. Buy grass pellets when the ferret dislikes wood or paper underfoot and you will change the pan more often because wet pellets break down. Do not buy a clumping cat litter for either job. The default low-dust litter on the same review is recycled paper.</p>
        <p>The link above searches Amazon for heat-treated wood pellet litter, the same search as on the litter review.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
