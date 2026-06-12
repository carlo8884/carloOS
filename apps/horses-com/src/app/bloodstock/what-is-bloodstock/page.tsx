/**
 * Horses.com -- What Is Bloodstock?
 * /bloodstock/what-is-bloodstock
 *
 * Educational reference: what "bloodstock" means, the breeding-and-trading
 * world, and what a bloodstock agent does. NON-WAGERING. No betting, odds, or
 * handicapping. No individualized buying or investment advice.
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
  title: 'What Is Bloodstock? The Business of Buying & Breeding Racehorses',
  description:
    'A clear introduction to bloodstock: what the term means, what bloodstock agents do, and how the breeding-and-trading side of racing actually works.',
  path: '/bloodstock/what-is-bloodstock',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'What Is Bloodstock? The Business of Buying & Breeding Racehorses',
  description:
    'A clear introduction to bloodstock: what the term means, what bloodstock agents do, and how the breeding-and-trading side of racing actually works.',
  url: 'https://horses.com/bloodstock/what-is-bloodstock',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'What does "bloodstock" mean?',
    answer:
      'It is the term racing uses for Thoroughbred horses considered as breeding and trading assets &mdash; the buying, selling, and breeding side of the sport, as distinct from the racing itself. The bloodstock world spans breeders, owners, stallion farms, and the auction houses where horses, shares, and breeding rights change hands.',
    answerText:
      'Bloodstock is the term for Thoroughbred horses considered as breeding and trading assets: the buying, selling, and breeding side of racing, as distinct from the racing itself.',
  },
  {
    question: 'What does a bloodstock agent do?',
    answer:
      'A bloodstock agent is a professional adviser who helps clients buy and sell horses &mdash; assessing conformation and pedigree, valuing lots, and bidding at sales on a buyer&apos;s behalf, usually for a commission. For newcomers, a reputable agent is the usual way to navigate the sales ring. As with any advisory market, agents vary; transparency on fees and a clear track record matter. This article is general guidance, not a recommendation of any specific agent.',
    answerText:
      'A bloodstock agent advises clients on buying and selling horses, judging conformation and pedigree, valuing lots, and bidding at sales on a buyer\'s behalf, typically for a commission.',
  },
  {
    question: 'Is bloodstock the same as racing?',
    answer:
      'No. Racing is the on-track sport; bloodstock is the breeding and trading market that supplies and surrounds it. The two are deeply linked &mdash; a horse&apos;s racing record shapes its breeding value, and breeding decisions shape the next generation of racehorses &mdash; but they are distinct worlds with different participants and rhythms.',
    answerText:
      'No. Racing is the on-track sport; bloodstock is the breeding and trading market that supplies and surrounds it. They are linked but distinct.',
  },
]

export default function WhatIsBloodstockPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      {/* Image-first hero (StockImage via PremiumMasthead, attribution preserved) */}
      <PremiumMasthead
        manifestKey="horses-com:bloodstock-business"
        fallbackKey="horses-com:hero"
        eyebrow="The Business"
        title="What Is Bloodstock?"
        subtitle="The breeding-and-trading side of racing, explained: the term, the market, and the people who navigate it."
        alt="Thoroughbred horses at a stud farm"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Bloodstock Hub', href: '/bloodstock', category: 'Bloodstock' },
          { title: 'How Thoroughbred Sales Work', href: '/bloodstock/how-thoroughbred-sales-work' },
          { title: 'How to Read a Pedigree', href: '/bloodstock/reading-a-pedigree' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'What Is Bloodstock?',
          subtitle:
            '"Bloodstock" is the word racing uses for Thoroughbreds considered as breeding and trading assets -- the business side of the sport that runs alongside the racing itself. This reference explains what it covers and who the players are. It is educational, not individualized buying or investment advice.',
          category: 'Bloodstock Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '6 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Bloodstock', href: '/bloodstock' },
          { name: 'What Is Bloodstock?', href: '/bloodstock/what-is-bloodstock' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Term & the Trade', href: '#trade' },
                { label: 'What a Bloodstock Agent Does', href: '#agent' },
                { label: 'A Global Market', href: '#global' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Bloodstock Hub', href: '/bloodstock' },
                { label: 'How Thoroughbred Sales Work', href: '/bloodstock/how-thoroughbred-sales-work' },
                { label: 'How to Read a Pedigree', href: '/bloodstock/reading-a-pedigree' },
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Horse Ownership', href: '/ownership' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="bloodstock-what-is"
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

          <h2 id="trade">The Term and the Trade</h2>
          <p>Bloodstock refers to Thoroughbred horses bought, sold, and bred for racing and reproduction. The bloodstock world spans breeders who produce foals, owners who race them, stallion farms that stand sires, and the auction houses where they all trade. It is a global market, with horses, shares, and breeding rights moving between major racing nations.</p>
          <p>Think of it as the supply chain and capital market sitting behind the sport. Before a horse ever reaches a starting gate, decisions have already been made about which mare to breed to which stallion, where the resulting foal will be raised, whether it will be sold or kept, and at what stage. The racing record a horse later builds then feeds back into this market, reshaping the value of its sire, its dam, and its siblings.</p>
          <p>This reference treats bloodstock as an educational subject. It does not offer picks, odds, wagering guidance, or individualized advice on buying, breeding, or investing in horses.</p>

          <h2 id="agent">What a Bloodstock Agent Does</h2>
          <p>A bloodstock agent is a professional adviser who helps clients buy and sell horses &mdash; assessing conformation and pedigree, valuing lots, and bidding at sales on a buyer&apos;s behalf, usually for a commission. For newcomers, a reputable agent is the usual way to navigate the sales ring without being out of your depth.</p>
          <p>An agent&apos;s work begins long before sale day. They study the sale catalogue, inspect horses in the days beforehand, watch them walk, and form a shortlist matched to a client&apos;s budget and goals. On the day, they execute bids and advise on when to stop. As with any advisory market, agents vary; transparency on fees and a clear track record matter. This is general guidance, not a recommendation of any specific agent.</p>

          <h2 id="global">A Global Market</h2>
          <p>The Thoroughbred is bred and traded internationally, and the bloodstock market reflects that. Major breeding regions in North America, Europe, Japan, and the Southern Hemisphere each contribute to a global flow of horses and breeding rights. A stallion may stand in one hemisphere during its breeding season and &ldquo;shuttle&rdquo; to the other to cover mares in their season, so that a single sire can influence bloodlines on multiple continents in a single year.</p>
          <p>For a fuller picture of how this market actually transacts, see the companion guides on <a href="/bloodstock/how-thoroughbred-sales-work">how Thoroughbred sales work</a> and <a href="/bloodstock/reading-a-pedigree">how to read a pedigree</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. The American Stud Book; Thoroughbred registration and breeding. jockeyclub.com.</li>
            <li>The Jockey Club Information Systems. Fact Book &mdash; breeding and sales statistics. jockeyclub.com.</li>
            <li>International Federation of Horseracing Authorities (IFHA). International breeding and the global Thoroughbred. horseracingintfed.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
