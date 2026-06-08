/**
 * Horses.com -- How to Read a Pedigree
 * /bloodstock/reading-a-pedigree
 *
 * Educational reference: sire and dam lines, black type, the broodmare, and
 * what a "strong page" means. NON-WAGERING. No betting, odds, or handicapping.
 * No individualized breeding or investment advice.
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
  title: 'How to Read a Thoroughbred Pedigree -- Sire, Dam & the Page',
  description:
    'Understand a Thoroughbred pedigree page: sire and dam lines, black type, the role of the broodmare, and what breeders mean by a "strong page".',
  path: '/bloodstock/reading-a-pedigree',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'How to Read a Thoroughbred Pedigree -- Sire, Dam & the Page',
  description:
    'Understand a Thoroughbred pedigree page: sire and dam lines, black type, the role of the broodmare, and what breeders mean by a "strong page".',
  url: 'https://horses.com/bloodstock/reading-a-pedigree',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'What is "black type" on a pedigree?',
    answer:
      'A printing convention that bolds and capitalises horses that have won or placed in stakes &mdash; the top class of races. More black type close up on the page, particularly on the dam&apos;s side, signals a stronger family. It is a quick visual shorthand for the quality of a horse&apos;s close relatives.',
    answerText:
      'A printing convention that bolds and capitalises horses that have won or placed in stakes races. More black type close up on the page, especially on the dam side, signals a stronger family.',
  },
  {
    question: 'Why do breeders care so much about the dam line?',
    answer:
      'A strong female family tends to reproduce quality across generations, so a good dam line is highly prized and heavily weighted when valuing a pedigree. While the sire contributes half the genes, the depth and consistency of the dam&apos;s family is treated by breeders as an important indicator of how reliably a page is likely to produce good runners.',
    answerText:
      'A strong female family tends to reproduce quality across generations, so a good dam line is highly prized and heavily weighted when valuing a pedigree.',
  },
  {
    question: 'Can you predict a racehorse from its pedigree?',
    answer:
      'No. A pedigree describes inheritance and probabilities, not outcomes. Breeders combine complementary traits and watch for proven sire-and-dam-line combinations, but it remains an informed bet on inheritance. Brilliant matings can disappoint and humble ones can shine, which is why a pedigree is a guide to potential rather than a forecast.',
    answerText:
      'No. A pedigree describes inheritance and probabilities, not outcomes. It is an informed bet on inheritance; brilliant matings can disappoint and humble ones can shine.',
  },
]

export default function ReadingPedigreePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />

      <PremiumMasthead
        manifestKey="horses-com:bloodstock-pedigree"
        fallbackKey="horses-com:hero"
        eyebrow="Breeding Basics"
        title="How to Read a Pedigree"
        subtitle="Sire lines, dam families, and black type: how to read the page that tells you why a horse was bred."
        alt="A Thoroughbred broodmare with her foal in a pasture"
      />

      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Bloodstock Hub', href: '/bloodstock', category: 'Bloodstock' },
          { title: 'How Thoroughbred Sales Work', href: '/bloodstock/how-thoroughbred-sales-work' },
          { title: 'What Is Bloodstock?', href: '/bloodstock/what-is-bloodstock' },
          { title: 'Racing Hub', href: '/racing' },
        ]}
        hero={{
          title: 'How to Read a Pedigree',
          subtitle:
            'A pedigree "page" can look like an intimidating wall of names, but it follows a clear logic. Once you can read it, you understand a great deal about why a horse was bred and what buyers see in it. This reference covers the shape of the page, black type, and the role of the dam line. It is educational, not breeding advice.',
          category: 'Bloodstock Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '6 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Bloodstock', href: '/bloodstock' },
          { name: 'How to Read a Pedigree', href: '/bloodstock/reading-a-pedigree' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Sire, Dam & the Page', href: '#page' },
                { label: 'Black Type', href: '#black-type' },
                { label: 'Why Breeders Mix & Match', href: '#mix' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Bloodstock Hub', href: '/bloodstock' },
                { label: 'How Thoroughbred Sales Work', href: '/bloodstock/how-thoroughbred-sales-work' },
                { label: 'What Is Bloodstock?', href: '/bloodstock/what-is-bloodstock' },
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Horse Breeds', href: '/breeds' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="bloodstock-pedigree"
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

          <h2 id="page">Sire, Dam, and the Shape of the Page</h2>
          <p>Every Thoroughbred traces to a sire (father) and dam (mother). The pedigree page shows the sire&apos;s line across the top and the dam&apos;s family (the &ldquo;distaff&rdquo; side) below, going back several generations. Breeders pay enormous attention to the dam line &mdash; a strong female family is prized because it tends to produce quality generation after generation.</p>
          <p>Reading a page therefore starts with orientation: identify the sire and his line, then trace the dam, her dam (the second dam, or granddam), and so on down the distaff side. The closer a notable relative sits to the horse in question, the more weight it tends to carry in how the page is read.</p>

          <h2 id="black-type">Black Type</h2>
          <p>&ldquo;Black type&rdquo; is the printing convention that bolds, and capitalises, horses that have won or placed in stakes races. The more black type close up on a page &mdash; especially on the dam side &mdash; the stronger the page is considered. It is a quick visual shorthand: a page dense with bold, capitalised names near the top is signalling a family of proven performers.</p>
          <p>By convention, the formatting distinguishes between stakes winners and stakes-placed horses, so an experienced reader can tell at a glance not just that relatives reached stakes class, but how they fared there.</p>

          <h2 id="mix">Why Breeders Mix and Match</h2>
          <p>Breeders aim to combine complementary traits &mdash; speed with stamina, a precocious sire with a staying family &mdash; and watch for &ldquo;nicks,&rdquo; sire-and-dam-line combinations that have historically produced good runners. None of it is a formula; it is an informed bet on inheritance, which is why even brilliant matings can disappoint and humble ones can shine.</p>
          <p>Understanding the page is also what underpins valuations in the ring. For how that knowledge is put to work when horses change hands, see the companion guide on <a href="/bloodstock/how-thoroughbred-sales-work">how Thoroughbred sales work</a>, and for the wider market context, <a href="/bloodstock/what-is-bloodstock">what bloodstock means</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. The American Stud Book; pedigree and registration records. jockeyclub.com.</li>
            <li>International Federation of Horseracing Authorities (IFHA). International Pattern and black-type classification. horseracingintfed.com.</li>
            <li>The Jockey Club Information Systems. Pedigree and produce records. jockeyclub.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
