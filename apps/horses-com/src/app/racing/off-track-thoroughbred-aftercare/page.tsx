/**
 * Horses.com -- Off-Track Thoroughbred Aftercare
 * /racing/off-track-thoroughbred-aftercare
 *
 * Educational reference: OTTB retraining, rehoming, second careers,
 * welfare ecosystem, and the Thoroughbred Aftercare Alliance.
 * Welfare-forward tone.
 *
 * Byline: Horses.com Editorial
 * Authorities: Thoroughbred Aftercare Alliance, AAEP, The Jockey Club
 */

import type { Metadata } from 'next'
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
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Off-Track Thoroughbred Aftercare -- OTTB Retraining & Second Careers',
  description:
    'OTTB aftercare reference: retraining pathways, the Thoroughbred Aftercare Alliance, second careers in sport, and what to expect when adopting an OTTB.',
  path: '/racing/off-track-thoroughbred-aftercare',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Off-Track Thoroughbred Aftercare -- OTTB Retraining & Second Careers',
  description:
    'OTTB aftercare reference: retraining pathways, the Thoroughbred Aftercare Alliance, second careers in sport, and what to expect when adopting an OTTB.',
  url: 'https://horses.com/racing/off-track-thoroughbred-aftercare',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-02T00:00:00Z',
  modifiedAt: '2026-06-02T00:00:00Z',
})

const FAQS = [
  {
    question: 'What does OTTB mean?',
    answer:
      'OTTB stands for "off-track Thoroughbred" -- a Thoroughbred horse that has retired from racing and is transitioning to, or has already entered, a second career. The term encompasses horses at all stages of the transition, from freshly retired racehorses to those years into a new discipline. OTTBs are a significant and beloved part of the broader equestrian world, competing successfully in eventing, show jumping, dressage, hunters, trail riding, and many other disciplines.',
    answerText:
      'OTTB stands for off-track Thoroughbred -- a Thoroughbred retired from racing and transitioning to a second career. OTTBs compete in many disciplines including eventing, jumping, and dressage.',
  },
  {
    question: 'What is the Thoroughbred Aftercare Alliance?',
    answer:
      'The Thoroughbred Aftercare Alliance (TAA) is a nonprofit organization established by racing stakeholders to accredit, fund, and support off-track Thoroughbred aftercare organizations across North America. The TAA operates an accreditation program for aftercare facilities, setting standards for the care, handling, and placement of retired racehorses. It distributes grants to accredited organizations and maintains a searchable directory of TAA-accredited facilities. The TAA is funded through contributions from racetracks, horsemen&apos;s groups, breeders, and individual donors.',
    answerText:
      'The Thoroughbred Aftercare Alliance (TAA) accredits and funds aftercare organizations, sets care standards, and maintains a directory of accredited facilities.',
  },
  {
    question: 'Are OTTBs good horses for amateur riders?',
    answer:
      'OTTBs can be excellent horses for experienced amateur riders who understand the breed&apos;s characteristics and are prepared to invest time in a transition period. Thoroughbreds are sensitive, intelligent, and athletic -- traits that make them rewarding partners in the right hands. For less experienced riders, the high energy and sensitivity that make OTTBs exciting can also be challenging. Many retraining organizations offer horses that have been through an initial transition period, making them more accessible to a wider range of riders. Matching the horse&apos;s energy level and training stage to the rider&apos;s experience is the critical variable.',
    answerText:
      'OTTBs can be excellent for experienced amateurs willing to invest in transition time. They are sensitive and energetic. Matching the horse\'s training stage to rider experience is key.',
  },
  {
    question: 'How long does OTTB retraining typically take?',
    answer:
      'Retraining timelines vary considerably depending on the horse\'s age, racing history, physical condition when retired, and the second career being pursued. Some horses transition relatively quickly, responding well to basic flatwork retraining in a matter of weeks. Others, particularly those that raced extensively or that have physical issues requiring rehabilitation, may take a year or more before they are ready for consistent work in a new discipline. Working with a trainer experienced in OTTBs, and allowing the horse adequate time to decompress and rebuild its body, are the most reliable approaches to a successful transition.',
    answerText:
      'Retraining timelines vary widely -- from weeks for smooth transitions to a year or more for horses needing physical rehabilitation or more extensive retraining.',
  },
]

export default function OttbAftercarePage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Racing Hub', href: '/racing', category: 'Horse Racing' },
          { title: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
          { title: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
          { title: 'Equine Lameness Basics', href: '/health/lameness-basics' },
        ]}
        hero={{
          title: 'Off-Track Thoroughbred Aftercare',
          subtitle:
            'When a Thoroughbred finishes its racing career, a second career begins. Off-track Thoroughbreds -- OTTBs -- are an important and growing part of the broader equestrian world, contributing to eventing, show jumping, dressage, hunters, trail riding, and many other disciplines. This reference covers the aftercare ecosystem, the organizations that support it, what retraining involves, and what prospective owners should understand before welcoming an OTTB into their lives.',
          category: 'Welfare & Aftercare',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '14 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'OTTB Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Aftercare Ecosystem', href: '#ecosystem' },
                { label: 'The Thoroughbred Aftercare Alliance', href: '#taa' },
                { label: 'The Transition Period', href: '#transition' },
                { label: 'Retraining Pathways', href: '#retraining' },
                { label: 'Second Careers', href: '#careers' },
                { label: 'Acquiring an OTTB', href: '#acquiring' },
                { label: 'Physical Considerations', href: '#physical' },
                { label: 'The Jockey Club and Industry Responsibility', href: '#industry' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
                { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
                { label: 'Eventing', href: '/disciplines/eventing' },
                { label: 'Equine Health', href: '/health' },
                { label: 'Equine Nutrition', href: '/nutrition' },
              ]}
            />
            <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-ottb"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-02"
            updatedAt="2026-06-02"
            reviewedBy="Editorial team"
          />


          <h2 id="ecosystem">The Aftercare Ecosystem</h2>
          <p>The Thoroughbred aftercare ecosystem is a network of organizations, programs, and individuals dedicated to ensuring that horses that retire from racing have a safe, appropriate transition to a second life. It encompasses nonprofit rescue and retraining organizations, breed-specific adoption programs, track-based aftercare initiatives, industry-funded programs, and private individuals who retrain and rehome former racehorses.</p>
          <p>This ecosystem has grown substantially over the past two decades, reflecting both increased public attention to racehorse welfare and a genuine commitment from within the racing industry to address the question of what happens to horses when their racing careers end. The Thoroughbred Aftercare Alliance is the central coordinating body, but it works alongside dozens of independently operated accredited organizations across North America.</p>

          <h2 id="taa">The Thoroughbred Aftercare Alliance</h2>
          <p>The Thoroughbred Aftercare Alliance (TAA) was established by The Jockey Club and industry partners to create a structured, accountable framework for OTTB aftercare. The TAA&apos;s core function is accreditation: it evaluates aftercare organizations against published standards covering facility quality, horse care protocols, adoption practices, financial accountability, and program structure. Organizations that meet the TAA&apos;s standards receive accreditation and become eligible for grant funding distributed by the TAA.</p>
          <p>The TAA&apos;s funding comes primarily from contributions by racetracks and horsemen&apos;s groups, often through a per-start levy -- a small contribution from each race entry -- as well as individual and corporate donors. The grant program distributes funds to accredited organizations to support the day-to-day costs of housing, rehabilitating, and retraining OTTBs.</p>
          <p>The TAA&apos;s website (thoroughbredaftercare.org) maintains a directory of accredited organizations searchable by state or region, making it a practical resource for anyone looking to adopt an OTTB or donate to a program. The accreditation standard provides assurance that a TAA-accredited organization operates to a baseline level of care and transparency.</p>

          <h2 id="transition">The Transition Period</h2>
          <p>When a Thoroughbred comes off the track, it typically needs a transition period before retraining begins in earnest. Racehorses live in an environment of high routine and physical demand: regular exercise, careful feeding for performance, and a structured daily schedule. Moving to a new facility with different routines, different companions, and a reduction in workload is a significant change, and horses respond to this transition differently.</p>
          <p>The transition period serves several purposes. Physically, it allows the horse to decompress from the demands of racing, to be assessed for any injuries or soreness that may have accumulated during its career, and to be brought to a healthy weight and condition appropriate for a riding horse rather than a racing horse. Mentally, it allows the horse to adapt to new social structures, turn-out time, and the different demands of non-racing work.</p>
          <p>Many experienced OTTB handlers and trainers advocate for a genuine rest period -- weeks to months of turnout with minimal structured work -- before retraining begins. The length of this rest period depends on the horse&apos;s physical and mental state at retirement. A horse coming off a long and demanding campaign may need considerably more decompression time than one that retired young after limited racing.</p>

          <h2 id="retraining">Retraining Pathways</h2>
          <p>Retraining an OTTB involves teaching the horse a different way of going and a different set of responses than it learned on the racetrack. Racehorses are trained to accelerate when asked, to race forward with minimal restraint, and to respond to a specific set of cues from a jockey at speed. A riding horse needs a different vocabulary: responsiveness to the leg without bolting forward, acceptance of contact from the bit without resistance, the ability to move in both directions and on circles rather than in a straight line, and calmness in situations that would be irrelevant on a racetrack.</p>
          <p>The basic flatwork that forms the foundation of retraining is the same work a young horse of any breed would receive: simple transitions, straightness, rhythm, acceptance of the aids. What distinguishes OTTB retraining is often the speed at which some horses are already confirmed in their racehorse habits, and the need to rebuild fitness and topline that may have changed in shape during the transition period.</p>
          <p>Many retraining organizations use specialized programs incorporating groundwork, in-hand work, and gradual under-saddle reintroduction. The Retired Racehorse Project, an organization associated with the aftercare world, hosts the annual Thoroughbred Makeover competition in which OTTBs are started from track retirement and prepared for competition across multiple disciplines within a defined time period, demonstrating the versatility and retraining potential of the breed.</p>

          <h2 id="careers">Second Careers</h2>
          <p>OTTBs compete successfully at the highest levels of multiple equestrian disciplines. The Thoroughbred&apos;s athleticism -- the same cardiovascular capacity, elastic gaits, and quick-twitch responsiveness that served it on the track -- is a genuine asset in eventing, show jumping, dressage, and hunter competition. Many of the horses competing at the upper levels of eventing and show jumping have Thoroughbred or near-Thoroughbred breeding, including former racehorses.</p>
          <p>Beyond high-level competition, OTTBs serve in trail riding, recreational riding, lesson programs, and therapy programs. Their versatility reflects the breadth of the breed: Thoroughbreds were developed for performance, and that performance capacity does not disappear when they leave the track -- it redirects into whatever new work they are asked to do.</p>
          <p>Not every OTTB will become a competitive horse, nor should that be the expectation. Many are best suited to a quiet second life as a pleasure riding horse, a companion animal, or a pasture horse if injury or age precludes ridden work. The goal of the aftercare ecosystem is to match each horse with an appropriate outcome that provides a safe, humane life after racing.</p>

          <h2 id="acquiring">Acquiring an OTTB</h2>
          <p>Prospective buyers or adopters of OTTBs have several pathways available. TAA-accredited organizations adopt horses after a retraining period, providing buyers with horses that have undergone at least initial preparation for a second career. These organizations typically conduct an evaluation process to match horses with appropriate adopters or buyers. Purchasing directly from a trainer or owner at retirement, or through the racetrack aftercare programs operated at many tracks, is another option, though this route typically requires more retraining investment from the buyer.</p>
          <p>A pre-purchase veterinary examination is as important for an OTTB as for any other horse, and in some respects more so, given that racehorses accumulate stress and minor injuries across their careers. An AAEP-recommended pre-purchase exam that includes radiographs of the lower limbs is a reasonable precaution. Understanding the horse&apos;s racing history -- available through the Equibase database -- provides context for how extensively it raced and at what level.</p>

          <h2 id="physical">Physical Considerations</h2>
          <p>OTTBs transitioning from racing often present with a body condition that differs from what a pleasure or sport horse owner may expect. Racing fitness is built on high-intensity aerobic and anaerobic work; it produces a lean, hard-muscled body that may appear thin to an eye accustomed to easier-keeping breeds. As training demands change, body condition typically shifts, with many OTTBs adding weight and topline muscle during the transition to riding work.</p>
          <p>The AAEP&apos;s body condition scoring system, based on Henneke&apos;s scale, provides an objective framework for assessing whether a horse is underweight, appropriate, or overweight. Many OTTBs benefit from forage-forward feeding programs that support weight gain without creating the metabolic issues that can arise with high-grain feeding. A veterinarian and an equine nutritionist familiar with the OTTB population can provide specific guidance.</p>
          <p>Common physical considerations in OTTBs include soundness evaluation of the lower limbs (racehorses put considerable stress on joints, tendons, and ligaments), dental condition (racing horses may not have received routine dental care during their racing careers), and gastric health (gastric ulcers are prevalent in racehorses, as referenced in the <a href="/health/equine-ulcers">equine ulcers article</a>). A systematic veterinary evaluation at retirement is the appropriate starting point for any OTTB intake program.</p>

          <h2 id="industry">The Jockey Club and Industry Responsibility</h2>
          <p>The Jockey Club has been a significant driver of aftercare awareness and funding through its ownership and administration of the TAA alongside other industry stakeholders. The Jockey Club&apos;s Thoroughbred Connect database and the public racing records maintained through Equibase allow any horse to be traced from registration through its racing career, which supports aftercare organizations in tracking and following up on horses that have left the racing environment.</p>
          <p>The broader question of industry responsibility for the lifecycle of racehorses is an ongoing conversation within racing. Multiple stakeholders -- tracks, breeders, owners, horsemen&apos;s groups, and regulatory bodies -- contribute to aftercare funding and policy. The trend over the past decade has been toward greater formalization of aftercare as a standard cost of operating in the racing industry, with aftercare assessments built into the race entry process at an increasing number of tracks.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Thoroughbred Aftercare Alliance (TAA). Accreditation standards; grant program; facility directory. thoroughbredaftercare.org.</li>
            <li>The Jockey Club. Thoroughbred Connect; aftercare initiatives. jockeyclub.com.</li>
            <li>American Association of Equine Practitioners (AAEP). Pre-purchase examination guidelines; body condition scoring. aaep.org.</li>
            <li>Retired Racehorse Project. Thoroughbred Makeover; OTTB retraining resources. retiredracehorseproject.org.</li>
            <li>Equibase. North American Thoroughbred racing records database. equibase.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
