/**
 * Horses.com -- The OTTB in Trail & Pleasure
 * /racing/ottb-second-careers/ottb-in-trail-and-pleasure
 *
 * Per-discipline OTTB transition spoke. COMPLEMENTS the general trail-riding
 * and western/show-pleasure references at /disciplines/trail-riding and
 * /disciplines/western-pleasure, and the welfare overview at
 * /racing/off-track-thoroughbred-aftercare. Adds only the
 * Thoroughbred-into-trail-and-pleasure layer.
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
  title: 'The OTTB in Trail & Pleasure -- Retraining the Off-Track Thoroughbred',
  description:
    'How the off-track Thoroughbred becomes a calm trail and pleasure mount: building confidence and quiet, the retraining timeline, temperament, and realistic expectations.',
  path: '/racing/ottb-second-careers/ottb-in-trail-and-pleasure',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The OTTB in Trail & Pleasure -- A Retraining Reference',
  description:
    'The off-track Thoroughbred as a trail and pleasure horse: building calmness and confidence, the retraining timeline, temperament and conformation, and realistic expectations.',
  url: 'https://horses.com/racing/ottb-second-careers/ottb-in-trail-and-pleasure',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'Can an off-track Thoroughbred be a good trail horse?',
    answer:
      'Yes. Many OTTBs make excellent trail and pleasure horses once they have decompressed from racing and gained confidence in the new environment. A horse that is sensitive and forward on the track can become a willing, intelligent trail partner, but it takes time and exposure to build the calmness the job requires. The key is patience: confidence on the trail is built gradually through positive, low-pressure experiences rather than rushed.',
    answerText:
      'Yes. Many OTTBs become excellent trail and pleasure horses once decompressed and confident. A sensitive, forward racehorse can become a willing trail partner, but calmness is built gradually through positive, low-pressure exposure.',
  },
  {
    question: 'Are OTTBs calm enough for pleasure riding?',
    answer:
      'Temperament varies widely between individuals, and many OTTBs settle into genuinely quiet, reliable pleasure mounts with time and consistent work. Others retain more energy and are better suited to riders who enjoy a forward, responsive horse. The transition out of racing — letdown, turnout, and a steady routine — does a great deal to settle a horse, and matching the individual horse&apos;s temperament and training stage to the rider&apos;s experience is the most important factor in a successful pleasure-riding match.',
    answerText:
      'It varies by individual. Many OTTBs settle into quiet, reliable pleasure mounts with time; others stay more forward. Letdown and a steady routine settle a horse, and matching the individual to the rider is what matters most.',
  },
  {
    question: 'How long before an OTTB is reliable on the trail?',
    answer:
      'There is no fixed timeline. After letdown and decompression, foundation flatwork builds the basic responsiveness, and trail confidence then develops through graduated exposure — first in safe, familiar settings, often in company with a calm, experienced horse, before tackling more challenging terrain or solo outings. Some horses settle within a few months; others, especially those that raced extensively or are naturally more reactive, take longer. Rushing trail exposure tends to create confidence setbacks, so a patient, step-by-step approach is the reliable one.',
    answerText:
      'There is no fixed timeline. After letdown and foundation flatwork, trail confidence builds through graduated exposure, often alongside a calm, experienced horse. Some settle in months, others take longer; rushing tends to cause setbacks.',
  },
  {
    question: 'Is an OTTB a good first horse for trail and pleasure riding?',
    answer:
      'A green, freshly retired OTTB is generally not an ideal first horse, because the early transition demands experience to manage a sensitive, forward animal. However, an OTTB that an aftercare organization or professional has already brought through letdown, foundation flatwork, and initial trail exposure can be a wonderful, affordable trail and pleasure partner for a less experienced rider. Buying a horse matched to your experience, with the early work already done, and continuing under the guidance of an OTTB-experienced trainer is the reliable approach.',
    answerText:
      'A green, freshly retired OTTB is generally not an ideal first horse. But one already brought through letdown, foundation work, and initial trail exposure by a professional can be a great, affordable partner for a less experienced rider.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function OttbInTrailAndPleasurePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="discipline"
        relatedLinks={[
          { title: 'OTTB Second Careers Hub', href: '/racing/ottb-second-careers', category: 'Racing' },
          { title: 'Trail Riding (Discipline Reference)', href: '/disciplines/trail-riding' },
          { title: 'Western Pleasure (Discipline Reference)', href: '/disciplines/western-pleasure' },
          { title: 'OTTB Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
        ]}
        hero={{
          title: 'The OTTB in Trail & Pleasure',
          subtitle:
            'Not every off-track Thoroughbred is a competition horse — and that is no failure. A reference on bringing a sensitive ex-racehorse to a calm, confident life on the trail and as an everyday pleasure mount.',
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
          { name: 'OTTB in Trail & Pleasure', href: '/racing/ottb-second-careers/ottb-in-trail-and-pleasure' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'A Valued Second Career', href: '#why' },
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
                { label: 'Trail Riding (Discipline)', href: '/disciplines/trail-riding' },
                { label: 'Western Pleasure (Discipline)', href: '/disciplines/western-pleasure' },
                { label: 'OTTB Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
                { label: 'Equine Health', href: '/health' },
              ]}
            />
            <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="ottb-in-trail-and-pleasure"
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

          <h2 id="why">A Valued Second Career</h2>
          <p>Competition is only one outcome for an off-track Thoroughbred, and for many horses it is not the right one. A quiet life as a trail and pleasure mount is a genuine and valued second career, not a consolation. The aftercare ecosystem&apos;s goal is to match each horse to an appropriate outcome, and for a great many OTTBs that outcome is a confident, willing partner for hacking out, recreational riding, and easy everyday work. For what trail and pleasure riding involve as activities in their own right, see the general <Link href="/disciplines/trail-riding">trail-riding reference</Link> and the <Link href="/disciplines/western-pleasure">western pleasure reference</Link>; this page covers only what the Thoroughbred coming off the track brings to that work.</p>
          <p>A horse that was sensitive and forward on the track can, with patient retraining, become an intelligent and engaged trail partner. The athleticism and surefootedness the breed has are real assets on varied terrain once the horse is calm and confident in the new role.</p>

          <h2 id="timeline">The Retraining Timeline</h2>
          <p>The transition follows the same arc as any OTTB second career, but with a particular emphasis on building calmness rather than competitive skill. It begins with <strong>letdown and decompression</strong> — weeks to months of turnout and minimal structured work — which does a great deal on its own to settle a horse leaving the high-intensity racing routine. Then comes <strong>foundation flatwork</strong>, establishing basic responsiveness to leg, seat, and rein, and the relaxation that everything else depends on.</p>
          <p>For a trail and pleasure horse, the <strong>discipline-specific</strong> phase is largely about confidence through graduated exposure. A horse is introduced to new sights, surfaces, and situations in safe, familiar settings first, very often in the company of a calm, experienced horse, before facing more challenging terrain, traffic, water crossings, or solo outings. Confidence on the trail is built in steps; rushing exposure tends to create setbacks rather than progress. The Retired Racehorse Project&apos;s Thoroughbred Makeover even includes a competitive trail discipline among its categories, a reminder that a thoughtful, structured restart applies to this career just as much as to the competition arenas.</p>

          <h2 id="temperament">Temperament &amp; Conformation</h2>
          <p>Temperament varies widely between individual OTTBs. Many settle into genuinely quiet, reliable mounts; others retain more energy and suit a rider who enjoys a forward, responsive horse on the trail. The letdown period and a steady routine settle most horses considerably, and matching the individual horse&apos;s temperament and training stage to the rider&apos;s experience is the most important factor in a good pleasure-riding match.</p>
          <p>Conformation matters less for trail and pleasure than for the competition disciplines, but soundness matters greatly, because trail work over varied and sometimes hard ground places its own demands on the legs and feet. Given the stress history of a racing career, a pre-purchase veterinary examination including lower-limb radiographs, consistent with AAEP pre-purchase guidance, and ongoing attention to hoof care and soundness are sensible. A horse retired due to an injury that precludes hard work may still enjoy a happy life as a light pleasure mount or companion, with veterinary guidance on appropriate workload.</p>

          <h2 id="expectations">Realistic Expectations</h2>
          <p>A successful trail and pleasure transition is measured in calmness, confidence, and soundness rather than ribbons. Some OTTBs become bombproof all-day trail horses; others are happiest with lighter, familiar work. A freshly retired, green OTTB is generally not an ideal first horse, but one already brought through letdown, foundation flatwork, and initial trail exposure by an aftercare organization or professional can be a wonderful and affordable partner for a less experienced rider. Patient, step-by-step progression with an OTTB-experienced trainer is the reliable route. For the rehoming and welfare side, including the Thoroughbred Aftercare Alliance, see the broader <Link href="/racing/off-track-thoroughbred-aftercare">aftercare reference</Link>.</p>

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
