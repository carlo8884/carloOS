/**
 * Horses.com -- The Owner
 * /racing/racing-roles/owner
 *
 * Depth spoke beneath the people-of-racing overview hub. Goes deep on ONE
 * role: the racehorse owner. What ownership involves, the ownership models
 * (sole, partnership, syndicate, fractional), and the financial reality.
 *
 * NON-WAGERING (QC §1): a people/role explainer. Ownership is framed as a
 * passion expense, never an investment to bet on. No betting, no odds.
 *
 * Byline: Horses.com Editorial (no fabricated credentials, no AI humans).
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
  title: 'The Owner -- How Racehorse Ownership Actually Works',
  description:
    'What a racehorse owner does, the ownership models from sole owner to fractional syndicate, and the real costs. A role guide, not investment advice.',
  path: '/racing/racing-roles/owner',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The Owner -- How Racehorse Ownership Actually Works',
  description:
    'What a racehorse owner does, the ownership models from sole owner to fractional syndicate, and the financial reality of the sport.',
  url: 'https://horses.com/racing/racing-roles/owner',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'What does a racehorse owner do?',
    answer:
      'Owners fund the horse and its training, select a trainer, make high-level campaign decisions in consultation with that trainer, and share in any purses -- while carrying the financial risk of ownership.',
    answerText:
      'Owners fund the horse and its training, select a trainer, make campaign decisions with that trainer, and share in any purses, while carrying the financial risk.',
  },
  {
    question: 'Do you have to be wealthy to own a racehorse?',
    answer:
      'No longer necessarily. Fractional micro-shares and syndicates let people own a stake for a modest one-time sum, though whole-horse ownership remains expensive. Treat any ownership as a passion expense, not an investment.',
    answerText:
      'No longer necessarily -- fractional micro-shares and syndicates let people own a stake for a modest sum, though whole-horse ownership remains expensive.',
  },
  {
    question: 'Is owning a racehorse a good investment?',
    answer:
      'Ownership is best treated as a passion expense rather than an investment. Most horses do not earn back their costs, so the value is in the experience and the access to the sport, not in an expected financial return. Nothing about ownership should be approached as a bet.',
    answerText:
      'Ownership is best treated as a passion expense, not an investment. Most horses do not earn back their costs; the value is in the experience and access.',
  },
]

export default function OwnerRolePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:role-owner"
        fallbackKey="horses-com:hero"
        eyebrow="Racing Roles · The Connections"
        title="The Owner"
        subtitle="From sole owners to syndicates of thousands: the person or group that holds the horse, carries its costs, and shares in the experience of competing."
        alt="Owners watching their Thoroughbred from the owners' enclosure on a race day"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="guide"
        relatedLinks={[
          { title: 'The People of Racing (Overview)', href: '/racing/the-people-of-racing', category: 'Racing Roles' },
          { title: 'The Trainer', href: '/racing/racing-roles/trainer' },
          { title: 'The Jockey', href: '/racing/racing-roles/jockey' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'The Owner',
          subtitle:
            'The owner holds the horse and carries its costs -- purchase, training fees, vet and farrier bills, transport -- in exchange for a share of any prize money and the experience of competing. Ownership ranges from a single individual to syndicates with thousands of small stakeholders. This reference explains what ownership involves and the financial reality behind it. It is an educational role guide, not investment or wagering advice.',
          category: 'Racing Roles Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '6 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'People', href: '/racing/the-people-of-racing' },
          { name: 'The Owner', href: '/racing/racing-roles/owner' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Ownership Involves', href: '#involves' },
                { label: 'Ownership Models', href: '#models' },
                { label: 'The Financial Reality', href: '#reality' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="The Roles In Depth"
              links={[
                { label: 'The People of Racing (Overview)', href: '/racing/the-people-of-racing' },
                { label: 'The Trainer', href: '/racing/racing-roles/trainer' },
                { label: 'The Jockey', href: '/racing/racing-roles/jockey' },
                { label: 'Racing Officials & Stewards', href: '/racing/racing-roles/racing-official' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'The People of Racing', href: '/racing/the-people-of-racing' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Horse Racing Glossary', href: '/racing/glossary' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-roles-owner"
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

          <p>The owner holds the horse and carries its costs -- purchase, training fees, vet and farrier bills, transport -- in exchange for a share of any prize money and the experience of competing. Ownership ranges from a single individual to partnerships, syndicates, and fractional micro-shares with thousands of small stakeholders. It is the role that funds the whole enterprise, and the one most open to newcomers.</p>

          <h2 id="involves">What Ownership Involves</h2>
          <p>Owners choose a trainer, make high-level campaign decisions in consultation with that trainer, and enjoy the access and experience of the sport -- stable visits, the owners&apos; enclosure, and race days. The day-to-day horsemanship is the trainer&apos;s; the owner&apos;s role is to back the right people and share in the journey. For many owners, the appeal is precisely that access: standing in the paddock before a race, or in the winner&apos;s circle after one.</p>
          <p>They also take the financial risk. Most horses do not earn back their costs, so ownership is best treated as a passion expense rather than an investment, and nothing about it should be approached as a bet on a return.</p>

          <h2 id="models">Ownership Models</h2>
          <p>Ownership models scale to almost any budget, from whole-horse ownership to fractional shares costing a one-time sum, which is why ownership is more accessible today than ever. A <strong>sole owner</strong> carries the whole horse and all its costs alone. A <strong>partnership</strong> splits a horse among a small number of people. A <strong>syndicate</strong> pools many owners into a managed group, and <strong>fractional micro-shares</strong> divide a horse among large numbers of small stakeholders, each paying a modest one-time sum to share in the experience.</p>
          <p>These models let people enter the sport at a level that suits them, and many owners begin with a small fractional share before deciding whether to take on more. The owner sits alongside the trainer and jockey as one of the horse&apos;s connections, the people whose registered racing colors the horse runs under -- a structure explained in the <a href="/racing/the-people-of-racing">people of racing overview</a>.</p>

          <h2 id="reality">The Financial Reality</h2>
          <p>The honest framing of ownership is that it is a passion expense. The costs are real and ongoing -- training day-rates, veterinary and farrier bills, transport and entry fees -- and most horses never cover them. Owners who go in understanding that, and who choose a model and a budget they are comfortable with, tend to get the most from the experience. The value is in the access and the involvement, not in an expected financial return.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. Ownership registration and racing colors. jockeyclub.com.</li>
            <li>National Thoroughbred Racing Association (NTRA). Ownership and participation resources. ntra.com.</li>
            <li>Association of Racing Commissioners International (ARCI). Model rules on owner licensing. arci.com.</li>
          </ol>

          <div className="mt-10 p-5 bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">
              Editorial Scope
            </div>
            <p className="text-sm text-brand-text-mid m-0 leading-relaxed">
              This article explains a racing role as an educational subject --
              what ownership involves, the ownership models, and the financial
              reality. Ownership is framed as a passion expense, not an
              investment or a bet. No wagering tips, odds commentary, or
              investment advice is provided or implied.
            </p>
          </div>
        </div>
      </ArticleLayout>
    </>
  )
}
