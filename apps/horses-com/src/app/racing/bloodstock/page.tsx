/**
 * Horses.com -- Bloodstock Basics Reference
 * /racing/bloodstock
 *
 * Educational reference hub for the breeding-and-trading side of racing:
 * what "bloodstock" means, the sales ring, pedigrees, and the people who
 * trade Thoroughbreds. NOT a betting, odds, picks, or investment-advice
 * resource. No live sales data, no scraped/licensed feeds -- educational only.
 *
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Authorities: The Jockey Club, Keeneland, Fasig-Tipton, TOBA.
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

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Bloodstock Basics -- The Business of Breeding & Selling Racehorses',
  description:
    "A plain-English bloodstock reference: what the term means, how Thoroughbred sales work, reading a pedigree, and the bloodstock agent's role. Educational only.",
  path: '/racing/bloodstock',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Bloodstock Basics -- The Business of Breeding & Selling Racehorses',
  description:
    'A plain-English bloodstock reference: what bloodstock means, how Thoroughbred sales work, how to read a pedigree, and the role of the bloodstock agent.',
  url: 'https://horses.com/racing/bloodstock',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-07T00:00:00Z',
  modifiedAt: '2026-06-07T00:00:00Z',
})

const FAQS = [
  {
    question: 'What does "bloodstock" mean?',
    answer:
      'Bloodstock is the term the racing industry uses for Thoroughbred horses considered as breeding and trading assets -- the buying, selling, and breeding side of the sport, as distinct from the racing itself. It covers breeders who produce foals, the stallion farms that stand sires, the broodmares that produce the next generation, and the auction houses where horses change hands. It is a global market in which horses, breeding shares, and stallion seasons move between major racing nations.',
    answerText:
      'The term for Thoroughbreds considered as breeding and trading assets -- the buying, selling, and breeding side of racing, as distinct from the racing itself.',
  },
  {
    question: 'Where are most racehorses bought and sold?',
    answer:
      'Most Thoroughbreds are bought and sold at public auction conducted by major sales companies, both in person and increasingly through online sales. The largest single market is the yearling sales, where horses around eighteen months old are sold before they have ever raced. Other sales categories include two-year-olds in training, breeding stock (broodmares and weanlings), and horses of racing age. Private sales between connections also occur but are less visible than the public auctions.',
    answerText:
      'At public auction through major sales companies, in person and increasingly online -- with yearling sales the largest market, alongside two-year-olds in training and breeding stock sales.',
  },
  {
    question: 'Does a high sale price mean a horse will be a good racehorse?',
    answer:
      'No. A high price reflects pedigree, physical conformation, the commercial appeal of the sire, and competition between buyers on the day -- not a guarantee of racetrack success. Many expensive yearlings never win a major race, while horses sold for modest sums sometimes become champions. Price signals market sentiment about a horse\'s potential, not its destiny. This reference is educational and does not offer investment, valuation, or purchasing advice.',
    answerText:
      'No. Price reflects pedigree, conformation, sire appeal, and bidding competition -- not future results. Many expensive yearlings never win a big race, and some inexpensive ones become champions.',
  },
  {
    question: 'What is a bloodstock agent?',
    answer:
      'A bloodstock agent is a professional adviser who helps clients buy and sell horses. Agents assess conformation and pedigree, value lots, and bid at sales on a buyer\'s behalf, usually for a commission. For a newcomer, a reputable agent is the customary way to navigate the sales ring. As in any advisory market, agents vary in approach and specialty, and transparency on fees matters. This is general education, not a recommendation of any specific agent.',
    answerText:
      'A professional adviser who helps clients buy and sell horses -- judging conformation and pedigree, valuing lots, and bidding at sales on a buyer\'s behalf, usually for a commission.',
  },
]

export default function BloodstockPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'Racing Hub', href: '/racing', category: 'Horse Racing' },
          { title: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
          { title: 'Race Types & Classes', href: '/racing/understanding-race-types-and-classes' },
          { title: 'Off-Track Thoroughbred Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
        ]}
        hero={{
          title: 'Bloodstock Basics',
          subtitle:
            'Behind every racehorse is a market most fans never see: the breeding-and-trading world where pedigrees are read, foals are bred, and horses change hands for anything from a few thousand to several million dollars. This reference explains what bloodstock means, how the sales ring works, how to read a pedigree, and the role of the bloodstock agent. It is an educational reference, not investment or purchasing advice.',
          category: 'Racing Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '10 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Bloodstock Basics', href: '/racing/bloodstock' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Bloodstock Means', href: '#what' },
                { label: 'How Thoroughbred Sales Work', href: '#sales' },
                { label: 'The Types of Sale', href: '#sale-types' },
                { label: 'How to Read a Pedigree', href: '#pedigree' },
                { label: 'The Bloodstock Agent', href: '#agent' },
                { label: 'What a Price Really Means', href: '#price' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Race Types & Classes Explained', href: '/racing/understanding-race-types-and-classes' },
                { label: 'The People of Racing', href: '/racing/the-people-of-racing' },
                { label: 'Off-Track Thoroughbred Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-bloodstock"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-07"
            updatedAt="2026-06-07"
            reviewedBy="Editorial team"
          />

          <h2 id="what">What Bloodstock Means</h2>
          <p>&quot;Bloodstock&quot; is the word the racing world uses for Thoroughbred horses regarded as breeding and trading assets -- the commercial and genetic side of the sport that runs alongside the racing itself. Where the racetrack is about performance, bloodstock is about pedigree, production, and value: which mares are bred to which stallions, what their offspring are worth, and how horses are bought and sold.</p>
          <p>The bloodstock world spans several kinds of participant. Breeders plan matings and raise foals. Stallion farms stand sires and sell breeding seasons. Owners of broodmares produce the next generation. Auction houses host the sales where horses change hands, and bloodstock agents advise buyers and sellers. It is a global business -- horses, stallion seasons, and breeding shares move between the major racing nations of North America, Europe, Japan, and Australasia.</p>
          <p>This reference treats bloodstock as an educational subject. It does not offer investment advice, valuations, or guidance on buying a horse, and it uses no live or proprietary sales data.</p>

          <h2 id="sales">How Thoroughbred Sales Work</h2>
          <p>Most Thoroughbreds are bought and sold at public auction. A sales company catalogues the horses on offer, publishes each one&apos;s pedigree, and sells them one at a time through a live auction conducted by an auctioneer and bid-spotters. The major auction houses run several sales a year, segmented by the type and age of horse, and increasingly host online sales alongside the traditional ring.</p>
          <p>A seller may place a &quot;reserve&quot; on a horse -- a minimum price below which it will not sell. If bidding fails to reach the reserve, the horse is led out unsold, recorded as an &quot;RNA&quot; (reserve not attained). The proportion of catalogued horses that actually sell, called the clearance rate, is one of the headline measures of a sale&apos;s health and of market confidence generally.</p>

          <h2 id="sale-types">The Types of Sale</h2>
          <p>Thoroughbreds are sold at distinct stages of life, and each sale type prices a different kind of risk:</p>
          <p><strong>Yearling sales</strong> are the largest market. Horses around eighteen months old are sold before they have ever raced, so buyers are wagering on pedigree and physical promise alone. This is where much of the sport&apos;s commercial breeding is aimed.</p>
          <p><strong>Two-year-olds in training</strong> sales add a &quot;breeze-up&quot; -- a short, timed gallop -- so buyers can see a horse move at speed before bidding. This reduces some of the uncertainty of a yearling purchase.</p>
          <p><strong>Breeding stock sales</strong> trade broodmares, weanlings, and stallion shares. A proven broodmare is valued on her own race record and, more importantly, on her produce record -- the quality of the foals she has already produced.</p>
          <p><strong>Horses of racing age</strong> sales move horses that are already racing or ready to race, allowing connections to buy into a campaign without waiting for a young horse to develop.</p>

          <h2 id="pedigree">How to Read a Pedigree</h2>
          <p>A pedigree &quot;page&quot; can look like an intimidating wall of names, but it follows a clear logic. Every Thoroughbred traces to a <strong>sire</strong> (father) and a <strong>dam</strong> (mother). On a catalogue page, the sire&apos;s line runs across the top and the dam&apos;s family -- the &quot;distaff&quot; side -- is set out below, going back several generations.</p>
          <p>Breeders pay particular attention to the dam line, because a strong female family tends to reproduce quality generation after generation. A page is described as &quot;strong&quot; when it carries plenty of <strong>black type</strong> -- the bold, capitalised print used in catalogues to mark horses that have won or placed in stakes races. The more black type close up on the page, especially on the dam&apos;s side, the more commercially valuable the pedigree is considered.</p>
          <p>Breeders aim to combine complementary traits -- speed with stamina, a precocious sire with a staying family -- and watch for &quot;nicks,&quot; sire-and-dam-line combinations that have historically produced good runners. None of this is a formula: even brilliantly bred matings can disappoint, and humble pedigrees sometimes produce champions. For the classifications that black type refers to, see the <a href="/racing/understanding-race-types-and-classes">race types and classes reference</a>.</p>

          <h2 id="agent">The Bloodstock Agent</h2>
          <p>A bloodstock agent is a professional adviser who helps clients buy and sell horses. At a sale, an agent inspects horses, studies pedigrees, forms a view on value, and bids on a buyer&apos;s behalf -- typically for a commission on the purchase price. Agents also broker private sales, advise on matings, and manage breeding portfolios for their clients.</p>
          <p>For a newcomer, a reputable agent is the customary way to navigate the sales ring without being out of one&apos;s depth. As in any advisory market, agents vary in specialty and approach, and clarity on fees and any conflicts of interest matters. The roles around the sales ring connect to the wider cast of the sport described in the <a href="/racing/the-people-of-racing">people of racing reference</a>.</p>

          <h2 id="price">What a Price Really Means</h2>
          <p>A headline-grabbing sale topper reflects several things at once: the strength of the pedigree, the physical conformation of the individual horse, the commercial heat around its sire, and -- crucially -- competition between deep-pocketed buyers on the day. It does not guarantee racetrack success.</p>
          <p>The history of the sport is full of seven-figure yearlings that never won a significant race and inexpensive purchases that became champions. Price signals the market&apos;s sentiment about a horse&apos;s potential at a moment in time; it is not a prediction of results. Treated as education rather than advice, the sales market is a fascinating window into how the sport values its future -- but it carries real financial risk for those who participate, and many horses do not return their purchase and training costs.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. American Stud Book; Thoroughbred registration and pedigree records. jockeyclub.com.</li>
            <li>Keeneland Association. Thoroughbred sales structure and catalogues. keeneland.com.</li>
            <li>Fasig-Tipton. Thoroughbred auction sales and digital sales. fasigtipton.com.</li>
            <li>Thoroughbred Owners and Breeders Association (TOBA). Owner and breeder education. toba.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
