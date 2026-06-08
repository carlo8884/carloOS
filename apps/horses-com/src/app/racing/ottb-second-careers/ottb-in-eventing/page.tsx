/**
 * Horses.com -- The OTTB in Eventing
 * /racing/ottb-second-careers/ottb-in-eventing
 *
 * Per-discipline OTTB transition spoke. COMPLEMENTS the general eventing
 * reference at /disciplines/eventing (which covers the sport itself) and the
 * welfare overview at /racing/off-track-thoroughbred-aftercare (which covers
 * the rehoming ecosystem). This page adds only the Thoroughbred-into-eventing
 * layer: aptitude, retraining timeline, conformation/temperament, expectations.
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
  title: 'The OTTB in Eventing -- Retraining the Off-Track Thoroughbred',
  description:
    'Why the off-track Thoroughbred suits eventing, the letdown-to-restart retraining timeline, conformation and temperament notes, and realistic expectations.',
  path: '/racing/ottb-second-careers/ottb-in-eventing',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The OTTB in Eventing -- A Retraining Reference',
  description:
    'How the off-track Thoroughbred transitions into eventing: aptitude for the cross-country phase, the three-phase retraining timeline, conformation and temperament, and realistic expectations.',
  url: 'https://horses.com/racing/ottb-second-careers/ottb-in-eventing',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'Why are Thoroughbreds considered good eventers?',
    answer:
      'Eventing&apos;s cross-country phase rewards stamina, galloping ability, and boldness across solid obstacles over a distance — exactly the qualities racing develops. The Thoroughbred&apos;s cardiovascular capacity and natural gallop are a genuine asset on a cross-country course, and Thoroughbred or near-Thoroughbred blood is common at the upper levels of the sport. The breed&apos;s sensitivity and trainability also support the dressage and show-jumping phases once the foundation work is in place. For the structure of the three phases themselves, see the general eventing reference.',
    answerText:
      'Eventing&apos;s cross-country phase rewards the stamina, gallop, and boldness racing develops, and Thoroughbred blood is common at the upper levels. The breed&apos;s sensitivity also supports the dressage and jumping phases after foundation work.',
  },
  {
    question: 'How long does it take to retrain an OTTB for eventing?',
    answer:
      'There is no fixed schedule; the timeline depends on the horse&apos;s age, racing history, soundness, and the level being targeted. A common framework is three overlapping phases: a letdown and decompression period of weeks to months, a foundation-flatwork phase establishing the new vocabulary of leg, seat, and rein, and a discipline-specific phase that introduces dressage, show jumping, and cross-country schooling. Reaching the lower competitive levels often takes many months to a year or more of consistent, patient work. The Retired Racehorse Project&apos;s Thoroughbred Makeover frames a defined preparation window, but most horses are brought along on their own timeline.',
    answerText:
      'It varies by horse. A common framework is letdown and decompression, then foundation flatwork, then discipline-specific schooling. Reaching the lower levels often takes many months to a year or more of consistent work.',
  },
  {
    question: 'What conformation suits an OTTB for eventing?',
    answer:
      'Eventing asks a horse to gallop, jump, and perform dressage, so a balanced, athletic build helps across all three phases: a good shoulder, a strong well-connected topline (often rebuilt during retraining), correct legs that have come through the soundness assessment, and the natural gallop the breed is known for. Conformation is only one input; soundness and trainability matter at least as much. A pre-purchase veterinary examination, including radiographs of the lower limbs, is a reasonable precaution given the stress racing places on joints, tendons, and ligaments.',
    answerText:
      'A balanced, athletic build — good shoulder, strong topline, correct legs that pass the soundness assessment, and a natural gallop — helps across all three eventing phases. Soundness and trainability matter as much as conformation; a pre-purchase exam with lower-limb radiographs is sensible.',
  },
  {
    question: 'Can an amateur retrain an OTTB for eventing?',
    answer:
      'It is possible, but the combination of a green-to-the-discipline horse and an inexperienced rider is challenging. Many amateurs succeed by buying a horse that an aftercare organization or professional has already taken through letdown and initial flatwork, by working with a trainer experienced in OTTBs, and by progressing through the levels patiently. Matching the horse&apos;s training stage and energy to the rider&apos;s experience is the critical variable, and starting at the lower levels with professional support is the more reliable path.',
    answerText:
      'It is possible but challenging when both horse and rider are green. Buying a horse already through letdown and initial flatwork, working with an OTTB-experienced trainer, and progressing patiently through the lower levels is the more reliable path.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function OttbInEventingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="discipline"
        relatedLinks={[
          { title: 'OTTB Second Careers Hub', href: '/racing/ottb-second-careers', category: 'Racing' },
          { title: 'Eventing (Discipline Reference)', href: '/disciplines/eventing' },
          { title: 'OTTB Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
          { title: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
        ]}
        hero={{
          title: 'The OTTB in Eventing',
          subtitle:
            'Eventing is often called the natural second home for the off-track Thoroughbred. This reference covers why the breed suits the sport, how the restart maps onto the three phases, and what a realistic transition looks like.',
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
          { name: 'OTTB in Eventing', href: '/racing/ottb-second-careers/ottb-in-eventing' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Eventing Suits the OTTB', href: '#why' },
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
                { label: 'Eventing (Discipline)', href: '/disciplines/eventing' },
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
              source="ottb-in-eventing"
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

          <h2 id="why">Why Eventing Suits the OTTB</h2>
          <p>Of the established second careers for the off-track Thoroughbred, eventing is the one most often described as a natural fit. The reason is the sport&apos;s cross-country phase, which asks a horse to gallop a distance and meet solid obstacles boldly and in rhythm. Those are precisely the qualities racing develops: cardiovascular capacity, a powerful natural gallop, and a willingness to go forward. Thoroughbred and near-Thoroughbred blood has long been common at the upper levels of eventing for exactly this reason. For the structure of the sport — the dressage, cross-country, and show-jumping phases and how they combine — see the general <Link href="/disciplines/eventing">eventing reference</Link>; this page covers only what is specific to the Thoroughbred coming from the track.</p>
          <p>The Thoroughbred also brings qualities the other two phases reward. The sensitivity and quick responsiveness that can feel like too much in a green ex-racehorse become assets in dressage and show jumping once the horse has a foundation. The breed is bred for performance, and that performance capacity does not disappear when a horse leaves racing — it redirects into the new work it is asked to do.</p>

          <h2 id="timeline">The Retraining Timeline</h2>
          <p>A useful way to think about retraining is in three overlapping phases rather than a fixed schedule. The first is <strong>letdown and decompression</strong>: weeks to months of turnout and minimal structured work, allowing the horse to come down physically and mentally from the racing routine, to be assessed for any accumulated soreness, and to reach a body condition appropriate for a sport horse rather than a racehorse. A horse coming off a long campaign generally needs more decompression than one retired young.</p>
          <p>The second phase is <strong>foundation flatwork</strong>. A racehorse is trained to accelerate when asked and to carry itself forward at speed in a straight line; an eventer needs a different vocabulary — responsiveness to the leg without rushing, acceptance of contact, the ability to bend and circle, and calmness in everyday situations. This is the same basic work a young horse of any breed receives, and it is the foundation the entire transition rests on. Rushing it is a common cause of trouble later.</p>
          <p>The third phase is <strong>discipline-specific development</strong>: introducing dressage movements, gymnastic and course jumping, and gradual cross-country schooling, beginning small and building confidence. The Retired Racehorse Project&apos;s annual Thoroughbred Makeover frames a defined preparation window for recently retired racehorses across multiple disciplines, including eventing, and has become the public showcase for what a structured restart can accomplish. Most horses, though, are brought along on their own timeline, and reaching the lower competitive levels often takes many months to a year or more of consistent work.</p>

          <h2 id="temperament">Temperament &amp; Conformation</h2>
          <p>Thoroughbreds are typically sensitive, intelligent, and energetic. In the right hands those traits make a rewarding partner; for a less experienced rider, the same sensitivity can be challenging during the early transition. Matching the horse&apos;s training stage and energy to the rider&apos;s experience is the single most important variable in a successful eventing transition.</p>
          <p>On conformation, eventing asks a horse to gallop, jump, and perform dressage, so a balanced, athletic build helps across all three phases: a good shoulder, a topline that is often rebuilt during retraining, correct legs that have come through a soundness assessment, and the natural gallop the breed is known for. Conformation is only one input. Given the stress racing places on joints, tendons, and ligaments, a pre-purchase veterinary examination — including radiographs of the lower limbs, consistent with AAEP pre-purchase guidance — is a reasonable precaution.</p>

          <h2 id="expectations">Realistic Expectations</h2>
          <p>Not every OTTB will become a competitive eventer, and that is not the measure of a successful transition. Some horses are best suited to the lower levels, to other disciplines, or to a quieter ridden life. The aftercare ecosystem&apos;s goal is to match each horse to an appropriate outcome, not to push every horse up the levels. Where a horse does show eventing aptitude, patient progression — letdown, foundation, then phase-specific schooling, ideally with a trainer experienced in OTTBs — is the most reliable route. For the rehoming side of the picture, including the Thoroughbred Aftercare Alliance and adopting an OTTB, see the broader <Link href="/racing/off-track-thoroughbred-aftercare">aftercare reference</Link>.</p>

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
