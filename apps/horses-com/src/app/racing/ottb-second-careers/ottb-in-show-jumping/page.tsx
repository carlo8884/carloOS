/**
 * Horses.com -- The OTTB in Show Jumping
 * /racing/ottb-second-careers/ottb-in-show-jumping
 *
 * Per-discipline OTTB transition spoke. COMPLEMENTS the general show-jumping
 * reference at /disciplines/show-jumping and the welfare overview at
 * /racing/off-track-thoroughbred-aftercare. Adds only the
 * Thoroughbred-into-show-jumping layer.
 *
 * NON-WAGERING (QC §1): no betting, odds, picks, EV, or handicapping.
 * Byline: Horses.com Editorial (no fabricated credentials).
 * Source basis: Retired Racehorse Project / Thoroughbred Makeover; widely
 * established OTTB retraining principles.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  ArticleByline,
  CrossPortfolioCard,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'The OTTB in Show Jumping -- Retraining the Off-Track Thoroughbred',
  description:
    'How the off-track Thoroughbred transitions into show jumping: scope and athleticism, the retraining timeline, and realistic expectations for the jumper ring.',
  path: '/racing/ottb-second-careers/ottb-in-show-jumping',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The OTTB in Show Jumping -- A Retraining Reference',
  description:
    'The off-track Thoroughbred in show jumping: scope and rideability, the three-phase retraining timeline, conformation and temperament notes, and realistic expectations.',
  url: 'https://horses.com/racing/ottb-second-careers/ottb-in-show-jumping',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'Are Thoroughbreds good show jumpers?',
    answer:
      'Thoroughbreds bring scope, athleticism, and a rideable temperament once retrained, and they have a long history in the jumper ring, especially at the lower and middle levels and through Thoroughbred-cross horses such as the Irish Sport Horse. At the very top of modern international sport, purpose-bred European warmblood studbooks dominate, but that reflects targeted breeding for the discipline rather than any inability of the Thoroughbred to jump. For how the levels, courses, and scoring work, see the general show-jumping reference.',
    answerText:
      'Thoroughbreds bring scope, athleticism, and rideability once retrained and have a long history in the jumper ring, especially at lower and middle levels and through TB crosses. Purpose-bred warmbloods dominate the top international level.',
  },
  {
    question: 'What is the hardest part of retraining an OTTB for show jumping?',
    answer:
      'A common challenge is teaching a horse used to racing forward to wait, adjust its stride, and rebalance between fences. Jumper courses are built on related distances and combinations that demand adjustability, so a horse must learn to lengthen and shorten on command rather than simply gallop on. Establishing a reliable connection and an adjustable canter through foundation flatwork — before height is introduced — is the key, and rushing that foundation tends to create rideability problems on course later.',
    answerText:
      'The common challenge is teaching a horse used to racing forward to wait, adjust its stride, and rebalance between fences. Building an adjustable, connected canter through foundation flatwork before adding height is the key.',
  },
  {
    question: 'How long before an OTTB can jump a course?',
    answer:
      'Timelines vary by horse and target level. The general framework is letdown and decompression, then foundation flatwork to build an adjustable canter and reliable contact, and only then gymnastic gridwork and small courses that build confidence in steps. Many horses are schooling small courses within months of starting foundation work, but consistent competition at a chosen level usually takes considerably longer and should not be rushed. A horse&apos;s soundness and the quality of its flatwork foundation set the pace.',
    answerText:
      'It varies. After letdown and foundation flatwork, gymnastic gridwork and small courses follow. Many horses school small courses within months, but consistent competition takes longer and should not be rushed.',
  },
  {
    question: 'Is an OTTB a good choice for an amateur jumper rider?',
    answer:
      'For an experienced amateur willing to invest in a transition period, an OTTB can be a rewarding and affordable jumper prospect. For a less experienced rider, the sensitivity and forward energy of a green ex-racehorse can be challenging in the jumper ring, where adjustability matters. Buying a horse that has already been through letdown and foundation flatwork, working with a trainer experienced in OTTBs, and matching the horse&apos;s training stage to the rider&apos;s level are the reliable ways to set the partnership up to succeed.',
    answerText:
      'For an experienced amateur willing to invest in the transition, an OTTB can be a rewarding, affordable jumper prospect. Buying a horse already through foundation flatwork and working with an OTTB-experienced trainer is the reliable path for less experienced riders.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function OttbInShowJumpingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="discipline"
        relatedLinks={[
          { title: 'OTTB Second Careers Hub', href: '/racing/ottb-second-careers', category: 'Racing' },
          { title: 'Show Jumping (Discipline Reference)', href: '/disciplines/show-jumping' },
          { title: 'OTTB Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
          { title: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
        ]}
        hero={{
          title: 'The OTTB in Show Jumping',
          subtitle:
            'Scope and athleticism the breed has in abundance — and an adjustability the jumper ring has to teach a horse used to galloping forward. A reference on the Thoroughbred&apos;s transition into show jumping.',
          category: 'OTTB Second Careers',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'OTTB Second Careers', href: '/racing/ottb-second-careers' },
          { name: 'OTTB in Show Jumping', href: '/racing/ottb-second-careers/ottb-in-show-jumping' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Show Jumping Works', href: '#why' },
                { label: 'The Retraining Timeline', href: '#timeline' },
                { label: 'Temperament & Conformation', href: '#temperament' },
                { label: 'Realistic Expectations', href: '#expectations' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'OTTB Second Careers Hub', href: '/racing/ottb-second-careers' },
                { label: 'Show Jumping (Discipline)', href: '/disciplines/show-jumping' },
                { label: 'OTTB Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
                { label: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
                { label: 'Equine Health', href: '/health' },
              ]}
            />
            <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="ottb-in-show-jumping"
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

          <h2 id="why">Why Show Jumping Works for the OTTB</h2>
          <p>The off-track Thoroughbred has a long history in the jumper ring. The breed brings scope — the raw ability to jump big — along with athleticism and, once retrained, a rideable temperament. Thoroughbreds and Thoroughbred-cross horses, the Irish Sport Horse being the most familiar example, compete successfully across the lower and middle levels and beyond. At the very top of modern international show jumping, purpose-bred European warmblood studbooks dominate, but that reflects decades of targeted breeding for the discipline rather than any limitation of the Thoroughbred. For how courses, levels, and scoring actually work, see the general <Link href="/disciplines/show-jumping">show-jumping reference</Link>; this page covers only the Thoroughbred-from-the-track angle.</p>
          <p>The athletic qualities that served a horse on the track — power, a quick, responsive way of going, and natural balance at speed — carry over to jumping. The work of retraining is largely about reshaping how that energy is delivered: from racing forward in a straight line to waiting, adjusting, and turning.</p>

          <h2 id="timeline">The Retraining Timeline</h2>
          <p>The transition follows the same three overlapping phases that apply across OTTB second careers. First comes <strong>letdown and decompression</strong> — weeks to months of turnout and minimal structured work, time to come down physically and mentally from racing and to be assessed for accumulated soreness. Then comes <strong>foundation flatwork</strong>, and for a future jumper this phase carries particular weight: the horse must learn an adjustable, connected canter, the ability to lengthen and shorten on command, and acceptance of contact, all before height becomes the focus.</p>
          <p>Only once that foundation is reliable does <strong>discipline-specific development</strong> begin: gymnastic gridwork to teach technique and confidence, then small courses built up in steps. Jumper courses are designed around related distances and combinations that demand exactly the adjustability the flatwork installs, which is why so much of a jumper&apos;s success is decided on the flat. The Retired Racehorse Project&apos;s Thoroughbred Makeover, which includes show jumping among its disciplines, frames a defined preparation window, but most horses are brought along at their own pace, and consistent competition at a chosen level usually takes considerably longer than first schooling a small course.</p>

          <h2 id="temperament">Temperament &amp; Conformation</h2>
          <p>Thoroughbreds are sensitive, intelligent, and energetic. In the jumper ring that sensitivity can become precision and adjustability with correct training, but in a green ex-racehorse the same forward energy is the thing most likely to challenge a rider. Establishing calmness and rideability through patient foundation work is what converts the energy into an asset.</p>
          <p>On conformation, scope and a good jumping technique matter more than any single measurement, and both are partly revealed only once a horse starts jumping. A balanced build with a good shoulder and an uphill tendency helps, as does a topline rebuilt through correct flatwork. Because racing stresses joints, tendons, and ligaments, a pre-purchase veterinary examination including lower-limb radiographs, consistent with AAEP pre-purchase guidance, is a sensible precaution for a jumping prospect that will load the limbs over fences.</p>

          <h2 id="expectations">Realistic Expectations</h2>
          <p>Not every OTTB will be a competitive jumper, and the level a horse ultimately reaches depends on scope, soundness, trainability, and the rider&apos;s program. Many OTTBs find a happy and successful place at the lower and middle levels, or in the related hunter and equitation rings, without ever needing the scope of a Grand Prix horse. Patient progression — letdown, a strong flatwork foundation, then gridwork and small courses — with an OTTB-experienced trainer is the reliable route. For the rehoming and welfare side, including the Thoroughbred Aftercare Alliance, see the broader <Link href="/racing/off-track-thoroughbred-aftercare">aftercare reference</Link>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Retired Racehorse Project. Thoroughbred Makeover; OTTB retraining resources. retiredracehorseproject.org.</li>
            <li>Thoroughbred Aftercare Alliance (TAA). Aftercare and rehoming framework. thoroughbredaftercare.org.</li>
            <li>American Association of Equine Practitioners (AAEP). Pre-purchase examination guidelines. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
