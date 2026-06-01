import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  ArticleByline,
  DropCap,
  CalloutBox,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Western Pleasure — AQHA Class Judging, Levels, Breeds, and Gear',
  description:
    'Western pleasure reference: AQHA/APHA class structure, the slow-pleasure controversy and reform, judging, equipment, breeds, 4-H to AQHA World Show.',
  path: '/disciplines/western-pleasure',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Western Pleasure — A Reference Overview',
  description:
    'AQHA, APHA, and ApHC western pleasure class structure, judging criteria, the slow-pleasure controversy and reform, levels from 4-H to AQHA World Show, equipment, and breed fit.',
  url: 'https://horses.com/disciplines/western-pleasure',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Disciplines', url: 'https://horses.com/disciplines' },
    { name: 'Western Pleasure', url: 'https://horses.com/disciplines/western-pleasure' },
  ],
})

const FAQS = [
  {
    question: 'What is western pleasure?',
    answer:
      'Western pleasure is a rail class in stock-horse breed competition, judged on the horse&apos;s manners, way of going, and overall pleasantness to ride at the walk, jog, and lope in both directions of the arena. The class is contested in groups, with the judge calling for gait changes from a center position; placings are made on the horse&apos;s relative quality of movement, balance, cadence, and apparent ease of carrying the rider. Per AQHA and APHA rule, the horse should be a pleasant ride that an amateur could enjoy — the original premise of the class. Major show settings include the AQHA, APHA, ApHC, and POA breed championships and the AQHA World Show.',
    answerText:
      'Western pleasure is a rail class judged on manners, way of going, and pleasantness to ride at walk, jog, and lope. Contested in stock-horse breed competition under AQHA, APHA, ApHC, and POA rules.',
  },
  {
    question: 'What is the slow-pleasure controversy?',
    answer:
      'From roughly the late 1980s through the early 2010s, western pleasure judging in many divisions drifted toward an extreme — very slow, low-headed, four-beat lopes with the horse held in an artificially low frame and a very slow tempo. Critics argued this departed from the original premise of the class (a pleasant amateur-friendly ride), produced unsoundness through forced collection without engagement, and rewarded a pattern of going that was unpleasant to actually sit. AQHA, APHA, and ApHC issued multiple rounds of judging reform from the late 2000s through the late 2010s emphasizing that the lope must be a three-beat gait with cadence and that the horse should travel with a level topline (not below the withers) and natural carriage. AQHA Rule SHW340 and the AQHA Judges&apos; Guide currently specify the lope as a three-beat gait and call for natural carriage.',
    answerText:
      'From the late 1980s through the early 2010s, judging drifted toward an extreme — very slow, low-headed, four-beat lopes. AQHA, APHA, and ApHC issued multiple rounds of judging reform from the late 2000s requiring a three-beat lope and natural carriage.',
  },
  {
    question: 'How is a western pleasure class structured?',
    answer:
      'Per AQHA rule, the class is worked on the rail in both directions of the arena. The judge calls the gaits in order: walk, jog, lope; reverse; walk, jog, lope; line-up. Some classes call for an extended jog or extended lope; some include a backup at the line-up. Numbered placings are made on the relative quality of movement and overall pleasantness across the group. Tiebreakers, when the judge needs to compare horses more closely, may involve a brief work-off at the rail.',
    answerText:
      'A rail class worked in both directions: walk, jog, lope, reverse, walk, jog, lope, line-up. Some classes include extended gaits or a backup. Placings on the relative quality of movement and overall pleasantness across the group.',
  },
  {
    question: 'What levels exist in western pleasure?',
    answer:
      'Levels begin at 4-H and open county-fair classes, run through AQHA, APHA, ApHC, and POA approved local and regional shows, and culminate in the AQHA World Championship Show (Oklahoma City, November) and the AQHA Level 1 Championships. AQHA classes are divided into Open, Amateur, Select Amateur (50+), Youth, and Novice divisions, plus by horse age (Two-Year-Old, Junior, Senior) where applicable. APHA and ApHC run parallel structures. The AQHA Level 1 program (formerly Novice) provides a championship-track pathway for horses and riders who have not yet earned higher-level points.',
    answerText:
      'Pathway: 4-H and county fairs, AQHA/APHA/ApHC/POA local shows, regional shows, World Show. AQHA classes are divided into Open, Amateur, Select Amateur (50+), Youth, and Novice, plus by horse age. AQHA Level 1 program provides a championship pathway for novice riders.',
  },
  {
    question: 'What is the difference between western pleasure and ranch riding?',
    answer:
      'Western pleasure is a rail class judged on manners and way of going at walk, jog, and lope. Ranch riding is a pattern class introduced by AQHA in 2012 (and adopted by APHA and ApHC subsequently) that judges the horse on a working-ranch-style pattern including walk, trot, extended trot, lope, extended lope, stops, backups, and lead changes, evaluating the horse as a working ranch horse rather than a show-pleasure horse. Ranch riding was developed in part as a counterweight to the slow-pleasure trend and rewards a more forward, natural way of going.',
    answerText:
      'Western pleasure is a rail class on manners and way of going. Ranch riding (AQHA, introduced 2012) is a pattern class evaluating the horse as a working ranch horse — more forward and natural — developed in part as a counterweight to the slow-pleasure trend.',
  },
  {
    question: 'What gear is required for western pleasure?',
    answer:
      'A western show saddle (typically with substantial silver work on the cantle, skirts, and stirrup fenders), a matching western show bridle and bit, a saddle pad and blanket, and (under AQHA rule) appropriate western show attire including a long-sleeved show shirt, chaps, and a western hat or approved helmet. Snaffle bits are required for two-year-olds and may be ridden with two hands; horses age three and over in junior and senior classes are typically shown in a curb bit ridden with one hand. The horse&apos;s mane is typically banded (small braids along the crest); some divisions show with a natural mane.',
    answerText:
      'Western show saddle (often with silver), western bridle, western show attire (long-sleeved shirt, chaps, hat or approved helmet). Snaffle for two-year-olds (two hands); curb bit for three-and-over (one hand). Mane typically banded.',
  },
  {
    question: 'Are helmets required for western pleasure?',
    answer:
      'AQHA and APHA permit but do not require ASTM/SEI-certified helmets in most western pleasure classes; the western hat remains the traditional headwear. Youth divisions in some shows and many 4-H programs require helmets. USEF Western divisions require helmets for any youth rider age 17 and under per the USEF Helmet Rule. The trend across the industry is increasing acceptance of helmets in western classes, with several high-profile AQHA World Show riders wearing certified helmets in recent seasons.',
    answerText:
      'Helmets are permitted but not required in most AQHA and APHA western pleasure classes. Youth in some shows and most 4-H programs require helmets. USEF Western divisions require helmets for youth riders age 17 and under.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combined = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

export default function WesternPleasurePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="specialty"
        hero={{
          title: 'Western Pleasure',
          subtitle:
            'The signature stock-horse rail class — judged on manners and way of going at walk, jog, and lope; the rule changes of the past decade have reset the class around a true three-beat lope and natural carriage.',
          category: 'Discipline Overview',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '15 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Disciplines', href: '/disciplines' },
          { name: 'Western Pleasure', href: '/disciplines/western-pleasure' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'TL;DR', href: '#tldr' },
            { label: 'History &amp; Origins', href: '#history' },
            { label: 'How a Class is Judged', href: '#judging' },
            { label: 'The Slow-Pleasure Controversy', href: '#controversy' },
            { label: 'Levels — 4-H to World Show', href: '#levels' },
            { label: 'Best-Fit Breeds', href: '#breeds' },
            { label: 'Equipment', href: '#gear' },
            { label: 'Training Tips', href: '#training' },
            { label: 'Notable Events', href: '#notable' },
            { label: 'FAQ', href: '#faq' },
            { label: 'References', href: '#references' },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
              { label: 'Quarter Horse Profile', href: '/breeds/quarter-horse' },
              { label: 'Paint Horse Profile', href: '/breeds/paint-horse' },
              { label: 'Appaloosa Profile', href: '/breeds/appaloosa' },
              { label: 'Reining Overview', href: '/disciplines/reining' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Evidence-led equine reference articles."
            source="discipline-western-pleasure"
          />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-05-28"
            updatedAt="2026-05-28"
          />

          <h2 id="tldr">TL;DR</h2>
          <ul>
            <li><strong>What it is:</strong> a rail class judged on manners and way of going at walk, jog, and lope in both directions of the arena.</li>
            <li><strong>Governing bodies:</strong> AQHA, APHA, ApHC, and POA for the stock-horse breed shows; USEF Western for cross-breed competition.</li>
            <li><strong>Key rule:</strong> per AQHA SHW340, the lope must be a three-beat gait with cadence and the horse must travel with natural carriage (not below the withers).</li>
            <li><strong>Recent history:</strong> the &ldquo;slow-pleasure&rdquo; trend of the 1990s–2010s produced industry reform; current judging emphasizes cadence, three-beat lope, and natural way of going.</li>
            <li><strong>Best-fit breeds:</strong> American Quarter Horse, Paint Horse, Appaloosa, POA; the bloodlines selected for the discipline have been refined over decades.</li>
            <li><strong>Pinnacle:</strong> AQHA World Championship Show (Oklahoma City, November), AQHA Level 1 Championships, APHA World, and ApHC World.</li>
          </ul>

          <h2 id="history">History &amp; Origins</h2>

          <DropCap>
            Western pleasure as a competition class grew out of post-war American Quarter Horse Association (AQHA) shows, which formalized rail-class judging of stock horses for breed competition. The premise was straightforward: a working ranch horse should also be a pleasant horse to ride, and a class judging that pleasantness — without the speed events of barrels and poles or the precision pattern work of reining — would let breeders compete the all-around &ldquo;western horse&rdquo; ideal. The AQHA was founded in 1940; western pleasure has been a recognized AQHA class since the early decades of the registry.
          </DropCap>

          <p>The class spread through APHA (American Paint Horse Association, founded 1962), ApHC (Appaloosa Horse Club, founded 1938), and POA (Pony of the Americas Club, founded 1954). Each association runs a parallel show structure and rulebook, with cross-recognition of judges and standards in many cases. USEF (United States Equestrian Federation) governs the Western division at recognized cross-breed competitions.</p>

          <p>By the late 1980s and through the 2000s, judging at the top shows had drifted toward an extreme — extremely slow lopes, low headsets, and frames that critics characterized as &ldquo;four-beat&rdquo; (a true three-beat lope is a defining characteristic of the gait; a four-beat lope is a gait fault). Industry reform began in the late 2000s. AQHA Judges Guide updates and rule revisions through the 2010s have steadily restored emphasis on three-beat cadence, natural carriage, and forward, willing movement. The reformed standard is broadly visible in current AQHA World Show classes.</p>

          <h2 id="judging">How a Class is Judged</h2>

          <p>A standard western pleasure class is contested on the rail in both directions of the arena. The judge calls the gait progression:</p>

          <ol>
            <li>Enter at a walk or jog.</li>
            <li>Walk; jog; lope.</li>
            <li>Reverse direction at the walk or jog.</li>
            <li>Walk; jog; lope (second direction).</li>
            <li>Line up at the center.</li>
            <li>Some classes call for an extended jog, extended lope, or a backup at the line-up.</li>
          </ol>

          <p>The judge evaluates each horse on:</p>
          <ul>
            <li><strong>Cadence and rhythm.</strong> A consistent four-beat walk, a true two-beat jog, and a three-beat lope. Loss of rhythm at any gait — including a four-beat lope — is a fault.</li>
            <li><strong>Quality of movement.</strong> Smooth, balanced strides with reach and free shoulder movement.</li>
            <li><strong>Manners and willingness.</strong> The horse responds promptly to gait calls, stands quietly in the line-up, and presents as a pleasant ride.</li>
            <li><strong>Frame and carriage.</strong> A level topline at or slightly above the withers, soft jaw, soft poll. Carriage below the withers is a fault per current AQHA standards.</li>
            <li><strong>Overall presentation.</strong> Clean turnout, appropriate gear, well-fitted tack.</li>
          </ul>

          <p>Per AQHA rule, gait faults (excessive speed, breaking gait, four-beat lope, head-tossing) and behavioral faults (kicking out, refusing the bit, refusing to back) carry specific deductions in the judge&apos;s placing. Major faults (a fall of horse or rider, leaving the arena, repeated breaking of gait) are basis for elimination.</p>

          <h2 id="controversy">The Slow-Pleasure Controversy &amp; Reform</h2>

          <CalloutBox variant="info" title="What changed">
            <p>From roughly the late 1980s through the early 2010s, top-show judging trended toward extremely slow, low-headed lopes that were widely characterized as four-beat — a gait fault. Critics argued that this departed from the original premise of the class, that the resulting way of going was unpleasant to actually sit, and that the artificial frame produced soundness and welfare concerns. AQHA, APHA, ApHC, and USEF Western each issued multiple rounds of judging reform from the late 2000s through the late 2010s; the current AQHA Judges Guide explicitly calls for a three-beat lope and natural carriage. The trend visible at recent AQHA World Show classes is broadly toward a more forward, natural way of going.</p>
          </CalloutBox>

          <p>The reform also produced new classes intended to reward a more natural way of going. AQHA Ranch Riding (introduced 2012) judges the horse on a working-ranch-style pattern, with the horse evaluated as a working ranch horse rather than a show-pleasure horse. The class has grown rapidly through AQHA, APHA, and ApHC, and is now a major attraction at the AQHA World Show.</p>

          <p>For owners considering the discipline, the practical takeaway is that the standard has shifted. A horse and a way of going that placed well in 2005 may not place well today; a horse with a true three-beat cadence and a natural, willing way of going has more opportunity now than it did fifteen years ago.</p>

          <h2 id="levels">Levels — 4-H to AQHA World Show</h2>

          <p>The pathway through western pleasure runs from grassroots to championship:</p>

          <ul>
            <li><strong>4-H and county-fair open shows.</strong> The entry-level competition for many riders; classes follow simplified versions of the AQHA judging criteria.</li>
            <li><strong>Local and regional AQHA/APHA/ApHC/POA approved shows.</strong> Earn points toward year-end awards and qualification for breed championships.</li>
            <li><strong>AQHA Level 1 (formerly Novice).</strong> Championship-track pathway for horses and riders who have not yet earned a threshold number of points. Includes the annual AQHA Level 1 Championships at multiple regional sites.</li>
            <li><strong>AQHA Amateur, Select Amateur (50+), and Youth divisions.</strong> Run parallel to the Open division and culminate at the AQHA World Show.</li>
            <li><strong>AQHA World Championship Show.</strong> Held annually in Oklahoma City in November. The pinnacle of the AQHA show year.</li>
            <li><strong>APHA World Championship Show, ApHC World Championship Show, POA International Show.</strong> Parallel championships for the other major stock-horse registries.</li>
          </ul>

          <p>AQHA classes are divided by horse age — Two-Year-Old, Junior (3–5), and Senior (6 and over) — where applicable, allowing fair comparison among horses at similar stages of development.</p>

          <h2 id="breeds">Best-Fit Breeds</h2>

          <p>The discipline is dominated by the stock-horse breeds, which have been selectively bred for the temperament, conformation, and way of going the class rewards:</p>

          <ul>
            <li><Link href="/breeds/quarter-horse">American Quarter Horse.</Link> The historical and continuing core of the discipline; AQHA-registered horses dominate the entries at every level.</li>
            <li><Link href="/breeds/paint-horse">Paint Horse.</Link> APHA-registered horses compete in a parallel show structure; many top horses dual-register with AQHA.</li>
            <li><Link href="/breeds/appaloosa">Appaloosa.</Link> ApHC-registered horses run their own breed championships with western pleasure as a flagship class.</li>
            <li><Link href="/breeds/pony-of-the-americas">Pony of the Americas.</Link> POA-registered ponies for youth and small-rider competition.</li>
            <li><Link href="/breeds/morgan">Morgan</Link> and <Link href="/breeds/arabian">Arabian</Link>. Both compete in their own breed-association western divisions.</li>
          </ul>

          <p>Within the AQHA-registered population, the &ldquo;western pleasure bloodlines&rdquo; have developed over decades — well-known stallions in the western pleasure record include Zippos Mr Good Bar, The Invester, Vital Signs Are Good, and Allocate Your Assets. Breeders selecting for the discipline cross to those proven sire lines.</p>

          <h2 id="gear">Equipment</h2>

          <h3>Saddle</h3>
          <p>A western show saddle is purpose-built for the western pleasure ring — substantial silver work on the cantle, skirts, and stirrup fenders; a roper-style horn (in some show saddles) or a flat-plate horn; a deep show seat. Saddle fit follows the same standards as any saddle (see our <Link href="/guides/saddle-fit-basics">saddle fit basics</Link> guide) — wither clearance, even panel contact, balance point, and clearance over the spine.</p>

          <h3>Bridle and bit</h3>
          <p>Per AQHA rule, two-year-olds in western pleasure are shown in a snaffle ridden with two hands. Three-year-olds and older in junior and senior classes are typically shown in a curb bit ridden with one hand. Approved curb bit shanks must be a maximum length specified in the AQHA rule book. A correctly-fitted curb chain, two fingers between chain and jaw, is required. The bridle is a western show bridle with a browband or split-ear, often with silver inlay matching the saddle.</p>

          <h3>Pad and blanket</h3>
          <p>A western saddle pad (often felt) under a show blanket (often woven Navajo-pattern) is the traditional combination.</p>

          <h3>Rider attire</h3>
          <p>AQHA show dress: long-sleeved show shirt (often with a yoke or other ornamental detailing), chaps in a color complementary to the horse and tack, a western hat in matching color, and western show boots. A belt with a show buckle is standard. Helmets are permitted in most AQHA western classes and are required for any youth rider age 17 and under under USEF Western division rules.</p>

          <h2 id="training">Training Tips</h2>

          <ul>
            <li><strong>Develop the three-beat lope first.</strong> A horse that has been allowed to lope four-beat in early training is difficult to correct later. Schooling on circles with a forward, slightly extended lope establishes the three-beat cadence the class rewards.</li>
            <li><strong>Build the walk and jog.</strong> Many young horses learn the lope before the jog is well-established; the resulting class scores reflect that. A cadenced, steady jog wins more classes than people expect.</li>
            <li><strong>Practice the rail-class transitions.</strong> The judge calls gait changes from a center position; the horse needs to respond promptly to the rider&apos;s aids without anticipating the next gait.</li>
            <li><strong>Show under multiple judges.</strong> Western pleasure judging carries an irreducible subjective component; over a season&apos;s competition under many judges, a good horse&apos;s record tells the story.</li>
            <li><strong>Find an AQHA/APHA/ApHC Professional Horseman.</strong> The breed-association Professional Horseman programs are the most reliable instructor pathway in the discipline.</li>
          </ul>

          <h2 id="notable">Notable Events</h2>

          <ul>
            <li><strong>AQHA World Championship Show (Oklahoma City, November).</strong> The pinnacle of the AQHA show year; western pleasure classes are flagship events.</li>
            <li><strong>AQHA Level 1 Championships.</strong> Regional championships for novice horses and riders.</li>
            <li><strong>APHA World Championship Show.</strong> APHA championship show; parallel structure to AQHA.</li>
            <li><strong>ApHC World Championship Show.</strong> ApHC championship show.</li>
            <li><strong>POA International Show.</strong> POA championship show.</li>
            <li><strong>AQHA Youth World Championship Show (Oklahoma City, August).</strong> Youth-division championship.</li>
            <li><strong>All American Quarter Horse Congress (Columbus, OH, October).</strong> The largest single-breed horse show in the world.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>American Quarter Horse Association. <em>AQHA Official Handbook of Rules and Regulations</em>, Chapter SHW (Showing). aqha.com.</li>
            <li>AQHA Judges Guide (current edition). aqha.com.</li>
            <li>American Paint Horse Association. APHA Rule Book. apha.com.</li>
            <li>Appaloosa Horse Club. ApHC Rule Book. appaloosa.com.</li>
            <li>Pony of the Americas Club. POA Rule Book. poac.org.</li>
            <li>United States Equestrian Federation. <em>USEF Rule Book, Chapter WS: Western Division</em>. usef.org.</li>
            <li>AQHA Ranch Riding. Class history, pattern requirements, and growth. aqha.com.</li>
            <li>NRHA (National Reining Horse Association) — companion discipline reference. nrha.com.</li>
            <li>All American Quarter Horse Congress. Show history and results. quarterhorsecongress.com.</li>
            <li>AQHA Professional Horsemen Program. aqha.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
