import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, FAQAccordion, PrimaryHop, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Paper vs Grass Pellet Litter | Ferret.com',
  description: 'Recycled paper pellets are the default. Grass pellets are the softer alternative. Both are non-clumping and low-dust.',
  path: '/reviews/paper-vs-grass-litter-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Paper pellets or grass pellets',
  description: 'Recycled paper pellets as the default, or grass pellets as the softer alternative. The notes are on the litter review.',
  url: 'https://ferret.com/reviews/paper-vs-grass-litter-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which litter does the review pick overall?',
    answer: 'Recycled paper pellet litter is the paper pick. The review lists very low dust, no clumping, a soft feel underfoot, moderate odor control, and a mid price tier. You change the pan rather than scoop and top it up. Lighter pellets can scatter.',
  },
  {
    question: 'When does the review point to grass pellets?',
    answer: 'When a ferret dislikes the feel of paper or wood. The review lists low dust, no clumping, a soft texture, moderate odor control, and a mid price tier. Wet pellets break down faster, so the pan may need changing more often than wood.',
  },
  {
    question: 'Is wood pellet litter in this comparison?',
    answer: 'No. Heat-treated wood pellets are a separate comparison, for odor, and only when they are low-phenol compressed pellets rather than aromatic shavings. Do not switch to a clumping cat litter.',
  },
]

export default function PaperVsGrassLitterGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={schema}
      hero={{
        title: 'Paper pellets or grass pellets',
        subtitle: 'The default recycled-paper litter, or a softer plant-fiber pellet. Dust, odor, and texture below are the ones on the litter review.',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      heroHop={<PrimaryHop href="/go/chewy-brand/yesterdays+news+recycled+paper+pellet+litter+non+clumping?s=reviews-paper-vs-grass-litter-guide" label="Check price of Yesterday's News recycled paper pellet litter on Amazon" />}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Paper vs grass litter', href: '/reviews/paper-vs-grass-litter-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best ferret litter', href: '/reviews/best-ferret-litter' },
            { label: 'Litter planner', href: '/tools/litter-planner' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <EmailCapture
          variant="inline"
          siteId="ferret-com"
          addressOnly
          title="Shopping checklist"
          ctaText="Copy checklist"
          source="reviews-paper-vs-grass-litter-guide"
          checklist={[
            "Recycled paper pellet litter is the paper pick.",
            "The review lists very low dust, no clumping, a soft feel underfoot, moderate odor control, and a mid price tier.",
            "You change the pan rather than scoop and top it up.",
            "When a ferret dislikes the feel of paper or wood.",
            "The review lists low dust, no clumping, a soft texture, moderate odor control, and a mid price tier.",
            "Wet pellets break down faster, so the pan may need changing more often than wood.",
          ]}
        />
        <p>Prices below are the ones on the <Link href="/reviews/best-ferret-litter">litter review</Link>. Recycled paper pellets are the default. Pelleted grass is the softer alternative. Paper versus heat-treated wood is a different pair, on the <Link href="/reviews/paper-vs-wood-litter-guide">paper versus wood guide</Link>.</p>
        <h2>What the review says about paper pellets</h2>
        <p>Recycled paper pellet litter is Best Overall and the winner. Dust is very low. It does not clump. The review says it is soft enough that ferrets accept it, with no clumping agent to swallow and no fine respiratory dust. Odor control is moderate compared with a perfumed cat litter. You change the pan rather than scoop and top it up. Lighter pellets can scatter. The price tier in the review is the mid tier. The review’s shop search is Yesterday’s News recycled paper pellets.</p>
        <h2>What the review says about grass pellets</h2>
        <p>Pelleted grass or other plant fiber is the soft alternative. Dust is low. It does not clump. The review says some ferrets prefer it to wood, odor control is moderate, and wet pellets break down faster, so the pan may need changing more often than wood. Tracking is lighter. The price tier is also the mid tier. The review calls it useful mainly when a ferret dislikes the texture of paper or wood pellets.</p>
        <p>The <Link href="/tools/litter-planner">litter planner</Link> sizes the paper-pellet default for the number of ferrets. It does not switch the litter to wood or grass by count.</p>
        <h2>Who should buy which litter</h2>
        <p>Buy paper pellets when you want the litter the review calls the default: very low dust, non-clumping, and widely available. Buy grass pellets when texture is the complaint and you can change the pan more often. Do not buy a clumping cat litter for either job. Heat-treated wood pellets stay on the odor comparison, and only as compressed low-phenol pellets, never as aromatic shavings.</p>
        <p>The link above searches for Yesterday’s News paper pellets, the same search as on the litter review. The sale price can differ from the tier in that review.</p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
