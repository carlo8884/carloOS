/**
 * Horses.com -- How Thoroughbred Sales Work
 * /bloodstock/how-thoroughbred-sales-work
 *
 * Educational reference: yearling sales, two-year-olds in training, breeding
 * stock, the bidding process, and what prices really mean. NON-WAGERING. No
 * betting, odds, or handicapping. No individualized buying advice.
 *
 * Byline: Horses.com Editorial
 */

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  ArticleByline,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  SchemaScript,
} from '@carloOS/ui'
import { PremiumMasthead } from '@/components/PremiumMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'How Thoroughbred Sales Work -- Yearlings, Breeze-Ups & the Ring',
  description:
    'How Thoroughbred auctions work: yearling sales, two-year-olds in training, breeding stock, the bidding process, and what prices really mean.',
  path: '/bloodstock/how-thoroughbred-sales-work',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'How Thoroughbred Sales Work -- Yearlings, Breeze-Ups & the Ring',
  description:
    'A plain-English guide to how Thoroughbred auctions work: yearling sales, two-year-olds in training, breeding stock, the bidding process, and what the prices really mean.',
  url: 'https://horses.com/bloodstock/how-thoroughbred-sales-work',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'Where are most racehorses bought and sold?',
    answer:
      'At public auction through major sales companies, in person and increasingly online. Yearling sales are the largest market, alongside two-year-olds in training and breeding stock sales. Horses sell one at a time through a fast live auction conducted by an auctioneer and bid-spotters.',
    answerText:
      'At public auction through major sales companies, in person and increasingly online. Yearling sales are the largest market, alongside two-year-olds in training and breeding stock sales.',
  },
  {
    question: 'Does a high sale price mean a horse will be a good racehorse?',
    answer:
      'No. Price reflects pedigree, physique, the sire&apos;s commercial appeal, and competition between bidders &mdash; not future results. Many expensive yearlings never win a big race, and some inexpensive ones become champions. Price signals market sentiment, not destiny.',
    answerText:
      'No. Price reflects pedigree, physique, sire commercial appeal, and bidding competition, not future results. Many expensive yearlings never win a big race, and some inexpensive ones become champions.',
  },
  {
    question: 'What is an "RNA" at a sale?',
    answer:
      'RNA stands for "reserve not attained." A seller may set a reserve, which is a minimum acceptable price. If bidding does not reach the reserve, the horse is led out unsold and recorded as an RNA. The clearance rate &mdash; the share of offered horses that actually sell &mdash; is a common gauge of how healthy a sale is.',
    answerText:
      'RNA means "reserve not attained": if bidding does not reach the seller\'s minimum reserve, the horse is led out unsold. Clearance rate is the share of offered horses that actually sell.',
  },
]

export default function HowSalesWorkPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:bloodstock-sales"
        fallbackKey="horses-com:hero"
        eyebrow="The Sales Ring"
        title="How Thoroughbred Sales Work"
        subtitle="Yearling sales, breeze-ups, and the auction ring: how the market that supplies racing actually transacts."
        alt="Thoroughbred yearlings being led at a sales paddock"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Bloodstock Hub', href: '/bloodstock', category: 'Bloodstock' },
          { title: 'How to Read a Pedigree', href: '/bloodstock/reading-a-pedigree' },
          { title: 'What Is Bloodstock?', href: '/bloodstock/what-is-bloodstock' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'How Thoroughbred Sales Work',
          subtitle:
            'Most racehorses are bought and sold at public auction, and the major sales are among the most fascinating markets in sport. This reference covers how the ring actually works -- the different sale types, how bidding goes, and how to read what a price tag is really saying. It is educational, not buying advice.',
          category: 'Bloodstock Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '7 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Bloodstock', href: '/bloodstock' },
          { name: 'How Thoroughbred Sales Work', href: '/bloodstock/how-thoroughbred-sales-work' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Main Types of Sale', href: '#types' },
                { label: 'How the Bidding Works', href: '#bidding' },
                { label: 'What a Price Really Means', href: '#price' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Bloodstock Hub', href: '/bloodstock' },
                { label: 'How to Read a Pedigree', href: '/bloodstock/reading-a-pedigree' },
                { label: 'What Is Bloodstock?', href: '/bloodstock/what-is-bloodstock' },
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Horse Ownership', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="bloodstock-sales"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-08"
            updatedAt="2026-06-08"
            reviewedBy="Editorial team"
          />

          <h2 id="types">The Main Types of Sale</h2>
          <p>Thoroughbreds are sold at distinct stages. Yearling sales &mdash; horses around eighteen months old &mdash; are the biggest market, where buyers bet on pedigree and physical promise before the horse has ever raced. Two-year-olds in training sales add a breeze-up, a short, timed gallop, so buyers see athleticism before bidding. Breeding stock sales trade broodmares, weanlings, and stallion shares.</p>
          <p>Each sale type prices a different kind of risk: a yearling is pure potential, a breezing two-year-old has shown a little, and a proven broodmare is valued on her produce record and pedigree. Buyers self-select toward the stage that matches their appetite for risk and their reasons for buying &mdash; to race, to pinhook (buy young and resell), or to breed.</p>

          <h2 id="bidding">How the Bidding Works</h2>
          <p>Horses sell one at a time through a fast live auction, often via a bid-spotter and an auctioneer. A seller may set a reserve &mdash; a minimum price; if bidding does not reach it, the horse is led out unsold (an &ldquo;RNA,&rdquo; reserve not attained). Clearance rate &mdash; the share of offered horses that actually sell &mdash; is a key gauge of market health.</p>
          <p>Major auction houses run both in-person ring sales and, increasingly, online digital sales for horses of all ages, widening access for buyers who cannot attend in person. The pace can be brisk: a single lot may be sold in well under a minute, which is part of why buyers do their inspection and homework in the days beforehand rather than in the ring.</p>

          <h2 id="price">What a Price Really Means</h2>
          <p>A headline-grabbing sale topper reflects pedigree, physical conformation, the sire&apos;s commercial heat, and competition between deep-pocketed buyers &mdash; not a guarantee of racetrack success. Many seven-figure yearlings never win a major race, while modestly priced horses sometimes become champions. Price signals market sentiment, not destiny.</p>
          <p>For the same reason, aggregate sale figures &mdash; averages, medians, and clearance rates &mdash; are read as a barometer of confidence in the bloodstock market rather than as a forecast of how the horses will run. To understand what buyers are actually reading when they value a lot, see the companion guide on <a href="/bloodstock/reading-a-pedigree">how to read a pedigree</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. The American Stud Book; registration and sales reporting. jockeyclub.com.</li>
            <li>The Jockey Club Information Systems. Fact Book &mdash; auction market statistics. jockeyclub.com.</li>
            <li>International Federation of Horseracing Authorities (IFHA). International sales and breeding overview. horseracingintfed.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
