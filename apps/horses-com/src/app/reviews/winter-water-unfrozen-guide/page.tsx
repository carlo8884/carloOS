import type { Metadata } from 'next'
import Link from 'next/link'
import { AffiliateDisclosure, ArticleLayout, EmailCapture, RelatedLinks, buildArticleSchema, buildMetadata } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Keep Horse Water Unfrozen in Winter | Horses.com',
  description: 'Icy water and dry hay are the winter colic pattern already on the water and winter-care pages. The hop is the heated bucket those pages already link.',
  path: '/reviews/winter-water-unfrozen-guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Keep horse water unfrozen in winter',
  description: 'Unfrozen water from the winter-care and water pages, and the heated bucket hop already on the water page.',
  url: 'https://horses.com/reviews/winter-water-unfrozen-guide',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-10-04T00:00:00Z',
  modifiedAt: '2026-10-04T00:00:00Z',
})

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
        <p>Two different supplies already exist, and this guide only hops one. The water page links a heated horse water bucket for the stall, next to a flat-back bucket and an electrolyte search. The winter-care kit links a horse tank heater for troughs that freeze, and it says that heater is not a treatment for impaction colic. Reduced drinking still belongs with a veterinarian. This page does not publish a wattage, a thermostat setting, or a claim that either device replaces checking the water.</p>
        <AffiliateDisclosure variant="inline" siteId="horses-com" />
        <p>The hop is the heated bucket search already on the water page. The tank heater stays on the winter-care page.</p>
        <p><a className="font-semibold text-brand-primary" href="/go/amazon-brand/heated+horse+water+bucket?s=reviews-winter-water-unfrozen-guide">Browse heated horse water buckets on Amazon →</a></p>
        <h2>Update list</h2>
        <EmailCapture
          variant="inline"
          siteId="horses-com"
          addressOnly
          title="Winter water update list"
          subtitle="Leave an address to be on the list for changes to the heated-bucket note on this page."
          ctaText="Save my address"
          source="reviews-winter-water-unfrozen-guide"
        />
      </div>
    </ArticleLayout>
  )
}
