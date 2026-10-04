import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, EmailCapture, FAQAccordion, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Keep Horse Water Unfrozen in Winter | Horses.com',
  description: 'Icy water and dry hay are the winter colic pattern already on the water and winter-care pages. The shop link is the heated bucket those pages already use.',
  path: '/reviews/winter-water-unfrozen-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Keep horse water unfrozen in winter',
  description: 'Unfrozen water from the winter-care and water pages, and the heated bucket link already on the water page.',
  url: 'https://horses.com/reviews/winter-water-unfrozen-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

const FAQS = [
  {
    question: 'How much does an idle adult drink?',
    answer: 'The water page says roughly 20 to 40 liters a day, about 5 to 10 gallons, in temperate conditions, with more in heat, work, dry forage, or lactation, and less on lush grass. The instruction is free-choice water that is available, unfrozen, and palatable, not a fixed bucket count.',
  },
  {
    question: 'Why does winter raise impaction risk?',
    answer: 'Icy water suppresses drinking just as the horse moves onto dry hay. The winter-care page says reduced intake plus dry winter forage is a leading cause of impaction colic.',
  },
  {
    question: 'What does winter care say to offer?',
    answer: 'Water that stays unfrozen, and slightly warmed water. Heat for the horse itself, on the same page, comes from more hay, because fiber fermentation in the hindgut produces heat. Grain is not the warmth plan.',
  },
  {
    question: 'Which water heater does this page link?',
    answer: 'The heated horse water bucket already linked on the water page. The tank heater stays on the winter-care page, and that page says the heater is not a treatment for impaction colic. This page does not publish a wattage or a thermostat setting.',
  },
]

export default function WinterWaterUnfrozenGuidePage() {
  return (
    <ArticleLayout
      siteId="horses-com"
      schema={schema}
      hero={{
        title: 'Keep horse water unfrozen in winter',
        subtitle: 'Winter care already says horses drink less when water is icy, and that low intake plus dry hay is a leading impaction-colic pattern. The heated bucket is the stall supply the water page already links.',
        category: 'Buyer guide',
        authorName: 'Horses.com Editorial',
        publishedAt: 'October 2026',
        readTime: '7 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Reviews', href: '/reviews' },
        { name: 'Winter water', href: '/reviews/winter-water-unfrozen-guide' },
      ]}
      sidebar={
        <RelatedLinks
          title="Related"
          links={[
            { label: 'Reviews hub', href: '/reviews' },
            { label: 'Water requirements', href: '/nutrition/water-requirements' },
            { label: 'Winter care', href: '/care/winter-care' },
            { label: 'Blanket weight', href: '/reviews/blanket-weight-by-temperature-guide' },
          ]}
        />
      }
    >
      <div className="carloOS-article">
        <p>The <Link href="/nutrition/water-requirements">water requirements page</Link> puts a number on ordinary drinking and then says winter is when the number fails. An idle adult horse drinks roughly 20 to 40 liters a day, about 5 to 10 gallons, in temperate conditions, with more in heat, work, dry forage, or lactation, and less on lush grass. The same page says too little water dries the gut into an impaction. That pattern is most common in winter, when icy water suppresses drinking just as the horse moves onto dry hay. The instruction is free-choice water that is available, unfrozen, and palatable, not a fixed bucket count.</p>
        <h2>What winter care adds</h2>
        <p>The <Link href="/care/winter-care">winter care page</Link> says the same thing in management language: horses drink less when water is icy, and reduced intake plus dry winter forage is a leading cause of impaction colic. Keeping water unfrozen, and offering slightly warmed water, is one of the most important winter tasks on that page. Heat for the horse itself, on the same page, comes from more hay, because fiber fermentation in the hindgut produces heat. Grain is not the warmth plan. A thick coat also hides weight loss, so the page says to feel the ribs rather than trust the eye.</p>
        <h2>Bucket or tank heater</h2>
        <p>Two different supplies already exist, and this page links one of them. The water page links a heated horse water bucket for the stall, next to a flat-back bucket and an electrolyte search. The winter-care kit links a horse tank heater for troughs that freeze, and it says that heater is not a treatment for impaction colic. Reduced drinking still belongs with a veterinarian. Neither product replaces walking out and checking that the water is actually open.</p>
        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <p>The link below searches for a heated horse water bucket, the same search as on the water page. The tank heater stays on the winter-care page.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/heated+horse+water+bucket?s=reviews-winter-water-unfrozen-guide">Browse heated horse water buckets on Amazon →</a></p>
        <h2>Questions</h2>
        <FAQAccordion items={FAQS} />
        <h2>Save an address</h2>
        <EmailCapture
          variant="inline"
          siteId="horses-com"
          addressOnly
          title="Save an address with this guide"
          subtitle="We store the address you enter. This form does not send email."
          ctaText="Save my address"
          source="reviews-winter-water-unfrozen-guide"
        />
      </div>
    </ArticleLayout>
  )
}
