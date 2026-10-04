import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Paper vs Wood Pellet Ferret Litter | Ferret.com',
  description: 'Recycled paper pellets versus heat-treated wood pellets for ferrets. Dust, clumping, odor, and the pine-and-cedar warning already on the litter review.',
  path: '/reviews/paper-vs-wood-litter-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Paper vs Wood Pellet Ferret Litter',
  description: 'Paper pellets as the default. Heat-treated wood when odor is the priority. Never clumping litter or aromatic shavings.',
  url: 'https://ferret.com/reviews/paper-vs-wood-litter-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'Which litter does the review pick for most ferrets?',
    answer: 'Recycled paper pellets. The card lists very low dust, no clumping, a soft feel, moderate odor control, a $$ price tier, and an editorial score of 9.2. You change the box rather than scoop and top it up.',
  },
  {
    question: 'When does wood win?',
    answer: 'When odor is the priority and the pellets are heat-treated and low-phenol. The wood card lists strong odor control, low dust after fines are sifted, a $ price tier, and a score of 8.0. It is harder underfoot than paper.',
  },
  {
    question: 'Can I use clumping cat litter or cedar shavings?',
    answer: 'No. The litter review says clumping litter is a safety problem if swallowed, and aromatic pine or cedar shavings release phenols. The wood pick is compressed, heat-treated pellets only.',
  },
]

export default function PaperVsWoodLitterGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={schema}
      hero={{
        title: 'Paper pellets vs wood pellets',
        subtitle: 'Both litters on the litter review are non-clumping and low-dust. They split on odor, texture, and a wood rule you cannot skip. This page adds no new brand and no new lab result.',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Paper vs wood litter', href: '/reviews/paper-vs-wood-litter-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Best ferret litter', href: '/reviews/best-ferret-litter' },
            { label: 'Odor and scent', href: '/care/odor-and-scent-control' },
            { label: 'Best ferret cage', href: '/reviews/best-ferret-cage' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/reviews/best-ferret-litter">litter review</Link> refuses clumping cat litter and aromatic pine or cedar shavings, then compares three pelleted options that clear that bar. Paper versus wood is the everyday choice inside that safe set. Litter will not, by itself, fix ferret odor. Diet and the cleaning routine in the <Link href="/care/odor-and-scent-control">odor guide</Link> still do most of that work.</p>
        <h2>Paper pellets</h2>
        <p>Recycled paper pellets are the best-overall card, scored 9.2. The card lists very low dust, no clumping agents, a soft feel underfoot, and moderate odor control. The price tier is $$. The cons are the moderate odor, changing the pan instead of scooping and topping up, and lighter pellets that can scatter. The review calls this the litter to buy if you are not trying to optimize a single trait.</p>
        <h2>Heat-treated wood pellets</h2>
        <p>Compressed wood pellets are the odor card, scored 8.0. Odor control is the strongest of the safe options on the page. Dust is low once fines are sifted. The price tier is $. The caveat is the form of the wood. The review says aromatic raw cedar and pine shavings release phenols tied to respiratory irritation. The allowed product is heat-treated, low-phenol compressed pellets, not loose shavings. The pellets are harder underfoot than paper. If a ferret rejects that texture, the third card is pelleted grass, scored 7.8, soft, low dust, moderate odor, and quicker to break down when wet.</p>
        <h2>Who should buy which</h2>
        <p>Buy paper pellets for most ferrets. Buy heat-treated wood pellets when smell is the problem you are willing to manage, and you will read the bag for heat treatment rather than a pine scent. Buy grass pellets only when the ferret refuses the other two textures. Do not “upgrade” any of them to a clumping, perfumed cat litter. The review treats that swap as trading a safety margin for a cosmetic one.</p>
        <AffiliateDisclosure variant="inline" siteId="ferret-com" />
        <p>The hop is the paper-pellet search already on the litter review, the default pick.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/chewy-brand/yesterdays+news+recycled+paper+pellet+litter+non+clumping?s=reviews-paper-vs-wood-litter-guide">Find paper pellet litter on Chewy →</a></p>
        <h2>Update list</h2>
        <EmailCapture
          variant="inline"
          siteId="ferret-com"
          addressOnly
          title="Litter comparison update list"
          subtitle="Leave an address to be on the list for changes to the paper-pellet versus wood note on this page."
          ctaText="Save my address"
          source="reviews-paper-vs-wood-litter-guide"
        />
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
      </div>
    </ArticleLayout>
  )
}
