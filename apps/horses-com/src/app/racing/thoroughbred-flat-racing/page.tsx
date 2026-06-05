/**
 * Horses.com -- Thoroughbred Flat Racing Reference
 * /racing/thoroughbred-flat-racing
 *
 * Educational reference: what flat racing is, the Thoroughbred breed,
 * racing surfaces, The Jockey Club's role, and the structure of the sport.
 * NOT a betting, odds, or picks resource.
 *
 * Byline: Horses.com Editorial
 * Authorities: The Jockey Club, AAEP
 */

import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  buildArticleSchema,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Thoroughbred Flat Racing -- The Sport, the Breed & the Track',
  description:
    'Thoroughbred flat racing reference: the breed, dirt vs. turf vs. synthetic surfaces, The Jockey Club\'s role, and how flat racing fits the equine world.',
  path: '/racing/thoroughbred-flat-racing',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Thoroughbred Flat Racing -- The Sport, the Breed & the Track',
  description:
    'Thoroughbred flat racing reference: the breed, dirt vs. turf vs. synthetic surfaces, The Jockey Club\'s role, and how flat racing fits the equine world.',
  url: 'https://horses.com/racing/thoroughbred-flat-racing',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-02T00:00:00Z',
  modifiedAt: '2026-06-02T00:00:00Z',
})

const FAQS = [
  {
    question: 'What makes the Thoroughbred suited to flat racing?',
    answer:
      'The Thoroughbred was developed over centuries in England through selective breeding for speed and stamina over flat distances. The breed is characterized by a lean, long-limbed frame, large lung capacity, and a highly efficient cardiovascular system. These traits, combined with the breed&apos;s natural competitiveness, make it the dominant breed in flat racing worldwide. The Jockey Club (US) and its counterparts in other countries maintain the closed studbook that defines what constitutes a registered Thoroughbred.',
    answerText:
      'The Thoroughbred was selectively bred over centuries for speed and stamina. The Jockey Club maintains the closed studbook defining registered Thoroughbreds.',
  },
  {
    question: 'What is the difference between dirt, turf, and synthetic tracks?',
    answer:
      'Dirt tracks are the traditional surface in North American racing, composed of a prepared mixture of sand, silt, and clay. Turf courses use maintained grass and tend to produce different race dynamics than dirt. Synthetic surfaces, introduced to reduce injury rates, use compacted mixtures of sand, rubber, and fiber. A horse&apos;s surface preference is a real variable in how it performs, and trainers and owners consider surface history when planning a racing campaign.',
    answerText:
      'Dirt is the traditional North American surface; turf uses maintained grass; synthetic tracks use sand, rubber, and fiber blends. Surface preference is a genuine factor in horse performance.',
  },
  {
    question: 'What is The Jockey Club?',
    answer:
      'The Jockey Club, founded in 1894, is the breed registry for North American Thoroughbred horses. It maintains the American Stud Book and serves as the authority on Thoroughbred registration, identification, and nomenclature. The Jockey Club also conducts and funds research into safety, integrity, and the welfare of the sport through its affiliated organizations. It is distinct from the racing commissions that regulate wagering and race-day operations in each state or jurisdiction.',
    answerText:
      'The Jockey Club (est. 1894) is the North American Thoroughbred breed registry and maintains the American Stud Book. It is separate from state racing commissions.',
  },
  {
    question: 'How are flat races measured?',
    answer:
      'Flat races in North America are traditionally measured in furlongs and miles. One furlong equals one-eighth of a mile, so a common sprint distance of six furlongs is three-quarters of a mile. Classic distances such as the Kentucky Derby are run at a mile and a quarter. European and international racing often uses metric distances. The distance of a race is one of the primary determinants of which horses are suited to it, as different horses have different optimal distance ranges.',
    answerText:
      'North American flat races are measured in furlongs (1 furlong = 1/8 mile) and miles. Six furlongs is a common sprint. The Kentucky Derby is 1.25 miles.',
  },
]

export default function ThoroughbredFlatRacingPage() {
  return (
    <>
      <SchemaScript schema={articleSchema} />
      <ArticleLayout
        siteId="horses-com"
        contentType="training"
        relatedLinks={[
          { title: 'Racing Hub', href: '/racing', category: 'Horse Racing' },
          { title: 'The Triple Crown', href: '/racing/triple-crown' },
          { title: "The Breeders' Cup", href: '/racing/breeders-cup' },
          { title: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
        ]}
        hero={{
          title: 'Thoroughbred Flat Racing',
          subtitle:
            'Flat racing is the form of horse racing most people picture when they think of the sport: a field of lean, powerful Thoroughbreds accelerating from a starting gate and running a defined distance on a prepared track. This reference covers the Thoroughbred breed, the surfaces they race on, the governance structures that oversee the sport, and where flat racing sits in the broader equine world. It is an educational reference -- not a betting guide.',
          category: 'Racing Reference',
          authorName: 'Horses.com Editorial',
          authorAvatar: '&#9652;',
          publishedAt: 'June 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Racing', href: '/racing' },
          { name: 'Thoroughbred Flat Racing', href: '/racing/thoroughbred-flat-racing' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Flat Racing Is', href: '#what' },
                { label: 'The Thoroughbred', href: '#breed' },
                { label: 'Racing Surfaces', href: '#surfaces' },
                { label: 'Race Distance', href: '#distance' },
                { label: 'Governance & The Jockey Club', href: '#governance' },
                { label: 'The Racing Calendar', href: '#calendar' },
                { label: 'Welfare & the AAEP', href: '#welfare' },
                { label: 'FAQ', href: '#faq' },
                { label: 'References', href: '#references' },
              ]}
            />
            <RelatedLinks
              title="Related Reading"
              links={[
                { label: 'Horse Racing Hub', href: '/racing' },
                { label: 'Race Types & Classes Explained', href: '/racing/understanding-race-types-and-classes' },
                { label: 'Off-Track Thoroughbred Aftercare', href: '/racing/off-track-thoroughbred-aftercare' },
                { label: 'Racehorse Training & Conditioning', href: '/racing/racehorse-training-and-conditioning' },
                { label: 'Disciplines Overview', href: '/disciplines' },
                { label: 'Equine Health', href: '/health' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="horses-com"
              title="Equestrian Reference"
              subtitle="Citation-anchored equine reference articles, one email a week."
              source="racing-thoroughbred"
            />
          </>
        }
      >
        <div className="carloOS-article">

          <h2 id="what">What Flat Racing Is</h2>
          <p>Flat racing is a form of horse racing in which horses carry a jockey and compete over a defined distance on a level or gently undulating track, without jumps or obstacles. The winner is determined by which horse crosses the finish line first. It is distinguished from jump racing (steeplechase and hurdles) by the absence of obstacles, and from harness racing by the fact that the horse is ridden rather than driven.</p>
          <p>In North America, flat racing is conducted under the jurisdiction of state racing commissions, with the sport&apos;s major events -- including the Triple Crown series of the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes -- serving as cultural touchstones of the sport. Internationally, governing bodies such as the British Horseracing Authority, Racing Australia, and the International Federation of Horseracing Authorities (IFHA) oversee the sport in their respective territories.</p>
          <p>This reference treats racing as an educational subject. No picks, odds, wagering guidance, or predictions are offered here.</p>

          <h2 id="breed">The Thoroughbred</h2>
          <p>The Thoroughbred is a breed developed primarily in England over several centuries, with all registered Thoroughbreds tracing their ancestry to a small number of founding stallions imported from the Middle East and North Africa. The breed&apos;s defining characteristics are built for speed: a deep chest and large lung capacity, long and powerful hindquarters that generate propulsive force, lean muscle mass, and relatively fine bone structure. Thoroughbreds tend to be hot-blooded -- energetic, sensitive, and forward-moving -- which reflects both their breeding for competitive drive and the high-intensity environments in which they are typically raised and trained.</p>
          <p>In North America, The Jockey Club maintains the American Stud Book, the closed registry that defines which horses qualify as registered Thoroughbreds. Registration requires documented parentage confirmed through DNA testing. The breed&apos;s closed studbook means that no outside genetic material has been introduced since the founding population, making the Thoroughbred one of the most carefully documented breeding populations of any domesticated animal.</p>
          <p>Beyond flat racing, Thoroughbreds contribute to other disciplines and are frequently found in eventing, show jumping, and fox hunting. Their athleticism makes them valuable crosses for producing performance horses across many disciplines. Off-track Thoroughbreds (OTTBs) are a significant presence in the equestrian world -- covered in depth in the <a href="/racing/off-track-thoroughbred-aftercare">OTTB aftercare article</a>.</p>

          <h2 id="surfaces">Racing Surfaces</h2>
          <p>The surface on which a flat race is run has a significant influence on the demands placed on the horse, and individual horses often show meaningful preferences for one surface over another. Three primary track surfaces are used in modern North American flat racing:</p>
          <p><strong>Dirt tracks</strong> are the traditional surface in North American racing and remain the most common. A dirt track is composed of a carefully maintained mixture of sand, silt, and clay, and its properties change with moisture content. A fast track is dry and firm; a sloppy track is wet and loose. Track superintendents monitor and condition dirt surfaces before and between races.</p>
          <p><strong>Turf courses</strong> use maintained grass and are common at tracks that host international-style racing. Turf surfaces tend to produce different race dynamics than dirt and favor horses with good balance and the ability to maintain contact with a less compacted surface. Many North American tracks have both a main dirt track and an inner turf course.</p>
          <p><strong>Synthetic surfaces</strong> were introduced at several tracks in the early 2000s in response to concerns about catastrophic injury rates on dirt. These surfaces use a compacted mixture of materials such as sand, silica, wax-coated fiber, and rubber crumb. Research commissioned by industry groups and the AAEP sought to understand injury patterns across surfaces, and the evidence on injury rates has been mixed, leading some tracks to revert from synthetic to dirt.</p>

          <h2 id="distance">Race Distance</h2>
          <p>Distance is one of the most important variables in matching a horse to a race. In North America, distances are traditionally expressed in furlongs and miles. A furlong is one-eighth of a mile, so a six-furlong race is three-quarters of a mile -- a common sprint distance. Classic distances extend to a mile and a quarter or beyond. Some horses are natural sprinters, best at short distances where early speed is rewarded; others are stayers or routers, improving over longer distances that demand sustained effort.</p>
          <p>A horse&apos;s distance preference becomes apparent through its racing record and through the observations of trainers who watch how horses move in exercise and how they respond to workouts of varying length. Selecting appropriate distances is a core part of a trainer&apos;s role in campaign planning.</p>

          <h2 id="governance">Governance and The Jockey Club</h2>
          <p>The governance of flat racing in North America is distributed across multiple bodies. State racing commissions regulate race-day operations, wagering, licensing of participants (jockeys, trainers, owners, agents), and enforcement of racing rules within their jurisdictions. The commissions are regulatory bodies with authority to sanction violations and suspend or revoke licenses.</p>
          <p>The Jockey Club, headquartered in New York, occupies a different but complementary role. Founded in 1894, it is the breed registry for North American Thoroughbred horses and the keeper of the American Stud Book. The Jockey Club does not regulate wagering or race-day operations; rather, it is the authority on Thoroughbred identity, registration, and naming. It also funds and conducts research through affiliated organizations into safety, equine welfare, and the long-term health of the sport. The Jockey Club&apos;s Equine Injury Database has documented injury patterns across racetracks and provided data used by researchers and track officials to evaluate surface and management practices.</p>
          <p>Internationally, the IFHA serves as the body through which national racing authorities coordinate standards for international racing, including pattern race classification and handicapping scales used for international competition.</p>

          <h2 id="calendar">The Racing Calendar</h2>
          <p>North American racing follows a year-round calendar distributed across a network of racetracks, though the concentration of the most prominent events falls in the spring and summer. The Triple Crown series -- the Kentucky Derby, the Preakness Stakes, and the Belmont Stakes -- takes place each spring and represents the pinnacle of three-year-old racing in North America. The Breeders&apos; Cup, held in the fall, brings together top horses from across North America and internationally at a championship meeting.</p>
          <p>Below the Grade I stakes level, the racing calendar is continuous, with hundreds of racetracks operating at various times of year and a full spectrum of race conditions from maiden races for first-time starters through the highest-graded stakes events. The structure of this hierarchy is covered in detail in the <a href="/racing/understanding-race-types-and-classes">race types and classes reference</a>.</p>

          <h2 id="welfare">Welfare and the AAEP</h2>
          <p>The welfare of racehorses is a subject of ongoing attention within the racing industry, veterinary medicine, and the broader equestrian community. The American Association of Equine Practitioners (AAEP) has published guidelines and position statements on topics including pre-race examination standards, the use of race-day medication, and the management of horses with pre-existing conditions. The AAEP&apos;s racehorse welfare guidelines represent the veterinary profession&apos;s consensus on what constitutes appropriate care for horses in competitive racing environments.</p>
          <p>The Racing Medication and Testing Consortium (RMTC) works to harmonize medication and testing rules across states, and the Horseracing Integrity and Safety Act (HISA) established a federal framework for uniform safety standards and anti-doping rules that took effect in phases beginning in 2022 and 2023. Welfare in racing also extends beyond race-day to training practices, track surfaces, jockey safety, and the transition of horses out of racing -- addressed in the <a href="/racing/off-track-thoroughbred-aftercare">OTTB aftercare article</a>.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>The Jockey Club. About The Jockey Club; American Stud Book; Equine Injury Database. jockeyclub.com.</li>
            <li>American Association of Equine Practitioners (AAEP). Racehorse welfare guidelines and position statements. aaep.org.</li>
            <li>International Federation of Horseracing Authorities (IFHA). International Pattern Classification. horseracingintfed.com.</li>
            <li>Horseracing Integrity and Safety Authority (HISA). Rulemaking and safety standards. hisaus.org.</li>
            <li>Racing Medication and Testing Consortium (RMTC). Uniform medication guidelines. rmtcnet.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
