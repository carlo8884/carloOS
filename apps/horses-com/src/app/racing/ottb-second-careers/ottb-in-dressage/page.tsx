/**
 * Horses.com -- The OTTB in Dressage
 * /racing/ottb-second-careers/ottb-in-dressage
 *
 * Per-discipline OTTB transition spoke. COMPLEMENTS the general dressage
 * reference at /disciplines/dressage and the welfare overview at
 * /racing/off-track-thoroughbred-aftercare. Adds only the
 * Thoroughbred-into-dressage layer.
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
  title: 'The OTTB in Dressage -- Retraining the Off-Track Thoroughbred',
  description:
    'How the off-track Thoroughbred transitions into dressage: sensitivity and elastic movement, the slow rebuild of balance and topline, temperament, and expectations.',
  path: '/racing/ottb-second-careers/ottb-in-dressage',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'The OTTB in Dressage -- A Retraining Reference',
  description:
    'The off-track Thoroughbred in dressage: how sensitivity and elastic movement reward correct training, the patient rebuild of balance, contact, and topline, and realistic expectations.',
  url: 'https://horses.com/racing/ottb-second-careers/ottb-in-dressage',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-08T00:00:00Z',
  modifiedAt: '2026-06-08T00:00:00Z',
})

const FAQS = [
  {
    question: 'Can a Thoroughbred do dressage?',
    answer:
      'Yes. Dressage may seem an unlikely fit for a former racehorse, but the Thoroughbred&apos;s sensitivity and elastic movement reward correct, patient training, and OTTBs compete successfully through the levels. Modern competitive dressage at the highest level is dominated by purpose-bred warmbloods selected for the gaits judged in the sport, but that reflects targeted breeding rather than any inability of the Thoroughbred to perform the work. For how the levels and movements are structured, see the general dressage reference.',
    answerText:
      'Yes. The Thoroughbred&apos;s sensitivity and elastic movement reward correct training, and OTTBs compete through the levels. Purpose-bred warmbloods dominate at the top level, reflecting targeted breeding rather than a limitation of the breed.',
  },
  {
    question: 'What is the biggest challenge in dressage retraining for an OTTB?',
    answer:
      'The central task is rebalancing. Racehorses are conditioned to carry themselves forward and fairly flat at speed; dressage asks the horse to step under itself, carry more weight behind, and lift through the back and topline. This is a slow physical rebuild as much as a training one, because it depends on developing muscles the horse did not use the same way in racing. Patient, correct flatwork over months — establishing rhythm, suppleness, and a steady connection before asking for collection — is what allows that rebalancing to happen soundly.',
    answerText:
      'The central task is rebalancing — teaching a horse conditioned to go forward and flat to step under itself and lift through the back. It is a slow physical rebuild that depends on patient, correct flatwork over months.',
  },
  {
    question: 'How long does it take to train an OTTB up the dressage levels?',
    answer:
      'There is no fixed timeline; dressage is a discipline measured in years rather than months at the upper levels for any horse. For an OTTB, the sequence is letdown and decompression, then a long foundation phase building rhythm, suppleness, contact, and topline, then progression through the levels as balance and strength develop. Reaching the lower competitive levels is achievable within the first year of consistent work for many horses, while the upper levels are a multi-year project that depends heavily on the horse&apos;s aptitude and soundness.',
    answerText:
      'There is no fixed timeline. After letdown and a long foundation phase, the lower levels are achievable within the first year for many horses, while the upper levels are a multi-year project dependent on aptitude and soundness.',
  },
  {
    question: 'Is dressage a good first job for a green OTTB?',
    answer:
      'Foundation flatwork — which is the basis of dressage — is valuable for almost every OTTB regardless of its eventual career, because rhythm, suppleness, contact, and an adjustable way of going underpin every discipline. Whether a horse pursues competitive dressage specifically depends on its movement, trainability, and the rider&apos;s goals. Working with a trainer experienced in OTTBs, and progressing patiently without rushing collection before the horse is physically ready, is the reliable approach.',
    answerText:
      'Foundation flatwork, the basis of dressage, benefits almost every OTTB. Whether a horse pursues competitive dressage depends on its movement and trainability. Progress patiently without rushing collection, ideally with an OTTB-experienced trainer.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function OttbInDressagePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="discipline"
        relatedLinks={[
          { title: 'OTTB Second Careers Hub', href: '/racing/ottb-second-careers', category: 'Racing' },
          { title: 'Dressage (Discipline Reference)', href: '/disciplines/dressage' },
          { title: 'OTTB Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
          { title: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
        ]}
        hero={{
          title: 'The OTTB in Dressage',
          subtitle:
            'An unlikely-seeming fit that rewards exactly what the breed has: sensitivity and elastic movement. A reference on the patient rebuild of balance, contact, and topline that takes an ex-racehorse into dressage.',
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
          { name: 'OTTB in Dressage', href: '/racing/ottb-second-careers/ottb-in-dressage' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why Dressage Rewards the OTTB', href: '#why' },
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
                { label: 'Dressage (Discipline)', href: '/disciplines/dressage' },
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
              source="ottb-in-dressage"
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

          <h2 id="why">Why Dressage Rewards the OTTB</h2>
          <p>At first glance dressage looks like the least likely second career for a horse bred and trained to race. The reality is more encouraging: the Thoroughbred&apos;s sensitivity and elastic, ground-covering movement are qualities correct dressage training rewards, and off-track Thoroughbreds compete successfully through the levels. The sensitivity that can feel like too much in a green ex-racehorse becomes responsiveness to subtle aids in a trained dressage horse. Modern top-level competition is dominated by purpose-bred warmbloods selected specifically for the gaits the sport judges, but that is a story about targeted breeding, not about what a Thoroughbred can learn to do. For how the levels and movements are structured, see the general <Link href="/disciplines/dressage">dressage reference</Link>; this page covers only the Thoroughbred-from-the-track angle.</p>

          <h2 id="timeline">The Retraining Timeline</h2>
          <p>Dressage retraining follows the familiar arc, with an unusually long and important foundation phase. It begins with <strong>letdown and decompression</strong> — weeks to months of turnout and minimal work to let the horse come down from racing and to assess soundness and body condition. Then comes a long phase of <strong>foundation flatwork</strong>: establishing rhythm, suppleness, straightness, and a steady, accepting contact. For a future dressage horse this is not a preliminary step but the heart of the work.</p>
          <p>The central physical task is rebalancing. A racehorse carries itself forward and relatively flat at speed; dressage asks it to step further under itself, carry more weight behind, and lift through the back and topline. That shift is a slow muscular rebuild as much as a training process, because it develops the horse&apos;s body in a way racing did not. Only as that strength and balance develop does <strong>discipline-specific development</strong> — collection and the more advanced movements — become appropriate. The Retired Racehorse Project&apos;s Thoroughbred Makeover includes dressage among its disciplines and frames a defined preparation window, but the upper levels of the sport are a multi-year project for any horse, OTTB or not.</p>

          <h2 id="temperament">Temperament &amp; Conformation</h2>
          <p>The Thoroughbred temperament — sensitive, intelligent, willing — is well suited to dressage once a horse is settled and confident, because the discipline depends on a horse that responds to quiet, refined aids. The early challenge is the same forward energy and reactivity that defines a green ex-racehorse; calmness and relaxation are prerequisites for correct work, and they come with time and patient handling.</p>
          <p>On conformation, an uphill build, a good shoulder, and naturally elastic gaits support dressage work, and a correct topline is largely built through the training itself. As with any OTTB, the legs carry the stress history of a racing career, so a pre-purchase veterinary examination including lower-limb radiographs, consistent with AAEP pre-purchase guidance, is a reasonable precaution.</p>

          <h2 id="expectations">Realistic Expectations</h2>
          <p>The level an OTTB reaches in dressage depends on its movement, trainability, soundness, and the consistency of its training. Many OTTBs are well suited to the lower and middle levels and provide a rewarding, affordable route into the sport, whether or not they have the movement for the upper levels. Importantly, foundation flatwork benefits nearly every OTTB regardless of eventual career, so dressage-style training is rarely wasted. Patient progression without rushing collection, ideally with an OTTB-experienced trainer, is the reliable path. For the rehoming and welfare side, including the Thoroughbred Aftercare Alliance, see the broader <Link href="/racing/off-track-thoroughbred-aftercare">aftercare reference</Link>.</p>

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
