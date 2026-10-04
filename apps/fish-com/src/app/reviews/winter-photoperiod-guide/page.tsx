import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Winter Light Hours for a Planted Tank | Fish.com',
  description: 'Shorter days outside do not change the 6 to 8 hour photoperiod on the low-tech and algae pages. The link is the light timer those pages use.',
  path: '/reviews/winter-photoperiod-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Winter light hours for a planted tank',
  description: 'Keep the published 6 to 8 hour photoperiod. The timer link is the one already on the low-tech page.',
  url: 'https://fish.com/reviews/winter-photoperiod-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'How long should the light stay on?',
    answer: 'Six to eight hours on an aquarium light timer, with a low-to-medium fixture. The low-tech page says that without injected CO2, extra light feeds algae, and that too much light is the usual failure.',
  },
  {
    question: 'Should winter add hours because the sun sets earlier?',
    answer: 'No. Neither the low-tech page nor the algae page adds hours because the sun sets earlier. They also do not publish a winter-only duration below six hours.',
  },
  {
    question: 'What if the tank already has algae?',
    answer: 'The algae page says to cut the photoperiod to 6 to 8 hours on a timer and keep the fixture off direct sun. Shorten toward that band. Do not leave the light on through the evening so the room feels less dark. A magnetic scraper does not replace a shorter photoperiod.',
  },
  {
    question: 'What should you buy from this page?',
    answer: 'The aquarium light timer search already on the low-tech page. Fixture choice, PAR, and the Hygger versus Fluval comparison stay on the lighting review. This guide does not rank a light.',
  },
]

export default function WinterPhotoperiodGuidePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      schema={schema}
      hero={{
        title: 'Winter light hours for a planted tank',
        subtitle: 'The low-tech and algae pages already cap a planted photoperiod at six to eight hours. A darker afternoon outside the glass is not a new hour count.',
        category: 'Buyer guide',
        authorName: 'Fish.com Editorial',
        publishedAt: 'October 2026',
        readTime: '6 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Winter photoperiod', href: '/reviews/winter-photoperiod-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Low-tech planted tank', href: '/setup/low-tech-planted-tank' },
            { label: 'Algae control', href: '/setup/aquarium-algae-control' },
            { label: 'Best aquarium lighting', href: '/reviews/best-aquarium-lighting' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/setup/low-tech-planted-tank">low-tech planted tank page</Link> says the usual failure is too much light. Without injected CO2, extra light feeds algae. The photoperiod it publishes is six to eight hours on an aquarium light timer, with a low-to-medium fixture. If algae appears, that page says reducing intensity or duration is almost always the first response.</p>
        <h2>The same band on the algae page</h2>
        <p>The <Link href="/setup/aquarium-algae-control">algae control page</Link> repeats the band as a universal fix: cut the photoperiod to 6 to 8 hours on a timer, and keep the fixture off direct sun. Scraping the glass is support. The page says a magnetic scraper does not replace a shorter photoperiod or a water change. Tanks that stay clear, in that write-up, share a consistent modest photoperiod on a timer, growing plants, regular water changes, and restrained feeding.</p>
        <h2>What winter does not change</h2>
        <p>Neither page adds hours because the sun sets earlier. They also do not publish a winter-only duration below six hours. If the tank is already growing algae, the instruction already on the algae page is to shorten toward that band, not to leave the light on through the evening so the room feels less dark. Fixture choice, PAR, and the Hygger versus Fluval comparison stay on the <Link href="/reviews/best-aquarium-lighting">lighting review</Link>. This guide does not rank a light.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <p>The link below searches for an aquarium light timer, the same search as on the low-tech page.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/aquarium+light+timer?s=reviews-winter-photoperiod-guide">Browse aquarium light timers on Amazon →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
        <h2>Save an address</h2>
        <EmailCapture
          variant="inline"
          siteId="fish-com"
          addressOnly
          title="Save an address with this guide"
          subtitle="We store the address you enter. This form does not send email."
          ctaText="Save my address"
          source="reviews-winter-photoperiod-guide"
        />
      </div>
    </ArticleLayout>
  )
}
