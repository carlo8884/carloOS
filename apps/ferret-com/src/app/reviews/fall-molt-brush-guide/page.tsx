import { HopDisclosure } from '../../../components/HopDisclosure'
import type { Metadata } from 'next'
import Link from 'next/link'
import { ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata, PrimaryHop } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Fall Molt: Brush the Winter Coat | Ferret.com',
  description: 'The fall molt, about September through November, is already on the grooming and shedding pages. The shop link is the soft slicker brush those pages already use.',
  path: '/reviews/fall-molt-brush-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Fall molt: brush the winter coat',
  description: 'Brush the fall molt with the slicker already linked on the shedding page.',
  url: 'https://ferret.com/reviews/fall-molt-brush-guide',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'When does the grooming page place the fall molt?',
    answer: 'About September through November, over a two-to-four-week window, as the summer coat comes out and a denser winter undercoat grows. That is the same length of window the page gives the spring shed.',
  },
  {
    question: 'What shedding is a reason to call a veterinarian?',
    answer: 'Symmetric hair loss over the rump, tail base, or shoulders, or hair that does not grow back. Normal, on the grooming page, is diffuse shedding, an intact but thinner coat, and regrowth within weeks. Those abnormal patterns are not a reason to buy a different brush.',
  },
  {
    question: 'How does the shedding page say to brush?',
    answer: 'A soft slicker brush or a fine-toothed metal comb, in short sessions of a minute or two. Daily brushing during the peak captures more hair. One warm-water bath can loosen a heavy shed. Do not repeat it. Frequent bathing strips skin oils.',
  },
  {
    question: 'Why lift the loose coat before the ferret swallows it?',
    answer: 'Ferrets groom themselves and, unlike cats, do not reliably vomit hairballs. The shedding page says a heavy shed raises the swallowed-hair load, and a hair mass can contribute to a gastrointestinal obstruction. This guide does not name a hairball-remedy brand.',
  },
]

export default function FallMoltBrushGuidePage() {
  return (
    <ArticleLayout
      siteId="ferret-com"
      schema={schema}
      hero={{
        title: 'Fall molt: brush the winter coat',
        category: 'Buyer guide',
        authorName: 'Ferret.com Editorial',
        publishedAt: 'October 2026',
        readTime: '7 min',
      }}
      heroHop={
        <>
          <p data-fold="answer" className="text-base text-white/85 leading-snug max-w-2xl mb-4">Use a soft slicker or a fine comb for the fall molt, because that lifts the loose coat a ferret would otherwise swallow.</p>
          <div data-fold="offer">
          <PrimaryHop href="/go/amazon-brand/soft+slicker+brush+small+animal?s=reviews-fall-molt-brush-guide" label="Browse soft slicker brushes for small animals on Amazon" />
          <HopDisclosure siteId="ferret-com" href="/go/amazon-brand/soft+slicker+brush+small+animal?s=reviews-fall-molt-brush-guide" />
        </div>
        </>
      }
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Fall molt', href: '/reviews/fall-molt-brush-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Seasonal shedding', href: '/care/seasonal-shedding' },
            { label: 'Bathing and grooming', href: '/care/bathing-and-grooming' },
            { label: 'Winter harness fit', href: '/reviews/winter-harness-fit-guide' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/care/bathing-and-grooming">bathing and grooming page</Link> describes two coat changes a year. The fall molt, about September through November, is the loss of the summer coat and the growth of a denser winter undercoat, over a similar two-to-four-week window as the spring shed. Normal, on that page, is diffuse shedding, an intact but thinner coat, and regrowth within weeks. Not normal is symmetric hair loss over the rump, tail base, or shoulders, or hair that does not grow back. Those patterns stay on the grooming page and are a reason to call a veterinarian, not a reason to buy a different brush.</p>
        <h2>What to do with the loose coat</h2>
        <p>The <Link href="/care/seasonal-shedding">seasonal shedding page</Link> says the job during a shed is to lift loose hair before the ferret swallows it. A soft slicker brush or a fine-toothed metal comb, in short sessions of a minute or two, is the method it names. Daily brushing during the peak captures more hair. Ferrets groom themselves and, unlike cats, do not reliably vomit hairballs. The page says a heavy shed raises the swallowed-hair load, and a hair mass can contribute to a gastrointestinal obstruction. A vet-recommended hairball remedy is the other step it names. This guide does not name a remedy brand.</p>
        <h2>Baths stay limited</h2>
        <p>Both pages allow one warm-water bath to loosen a heavy shed and then say not to repeat it. Frequent bathing strips skin oils and can make the coat greasier. Most of the work is the brush. Shampoo stays on the grooming page. The comb and the lint roller stay on the shedding page. The link on this page is the soft slicker search from that page.</p>
        <HopDisclosure siteId="ferret-com" href="/go/amazon-brand/soft+slicker+brush+small+animal?s=reviews-fall-molt-brush-guide" />
        <p>The link below searches for a soft slicker brush.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/soft+slicker+brush+small+animal?s=reviews-fall-molt-brush-guide">Browse soft slicker brushes for small animals on Amazon →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
        <EmailCapture
          variant="inline"
          siteId="ferret-com"
          addressOnly
          title="Save an address with this guide"
          ctaText="Save my address"
          source="reviews-fall-molt-brush-guide"
          checklist={[
            'A soft slicker brush or a fine-toothed metal comb, in short sessions of a minute or two, is the method it names.',
            'Daily brushing during the peak captures more hair.',
            'Both pages allow one warm-water bath to loosen a heavy shed and then say not to repeat it.',
            'Most of the work is the brush.',
            'Browse soft slicker brushes for small animals on Amazon',
          ]}
        />
      </div>
    </ArticleLayout>
  )
}
