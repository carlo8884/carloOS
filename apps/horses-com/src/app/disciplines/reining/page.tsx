import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  ArticleLayout,
  CrossPortfolioCard,
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
  title: 'Reining — Maneuvers, Patterns, Bloodlines, and NRHA Levels',
  description:
    'Reining reference: sliding stops, spins, flying changes, circles. NRHA pattern scoring 0 to +1.5 per maneuver, Non-Pro to Open, foundation bloodlines.',
  path: '/disciplines/reining',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Reining — A Reference Overview',
  description:
    'NRHA reining patterns and maneuvers: sliding stop, spin, flying lead change, rollback, large fast and small slow circles. Scoring, levels, foundation bloodlines, and equipment.',
  url: 'https://horses.com/disciplines/reining',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Disciplines', url: 'https://horses.com/disciplines' },
    { name: 'Reining', url: 'https://horses.com/disciplines/reining' },
  ],
})

const FAQS = [
  {
    question: 'What is reining?',
    answer:
      'Reining is a western pattern class judged on the precision and quality of a set of prescribed maneuvers — sliding stops, spins, flying lead changes, rollbacks, and large fast and small slow circles. The discipline is often described as the &ldquo;western dressage&rdquo; because of the gymnastic precision required. The National Reining Horse Association (NRHA) is the international governing body; reining is also recognized by USEF and (since 2000) by the FEI as the first western discipline given international recognition.',
    answerText:
      'Reining is a western pattern class judged on prescribed maneuvers (sliding stops, spins, flying lead changes, rollbacks, circles). NRHA is the governing body; USEF and FEI also recognize reining.',
  },
  {
    question: 'How is reining scored?',
    answer:
      'Each horse starts with a score of 70. Each maneuver in the pattern is scored from -1.5 to +1.5 in half-point increments, with 0 indicating a correctly-performed maneuver: -1.5 (extremely poor), -1 (very poor), -0.5 (poor), 0 (correct), +0.5 (good), +1 (very good), +1.5 (excellent). The maneuver scores are added to (or subtracted from) the 70 base. Penalty points are applied separately for specific infractions (out of lead, breaking gait at lope, over-spin, breaking gait in stop). A score of 75 or above is competitive; scores at the top of the NRHA Futurity finals approach 230 across three judges (an average of 76+ per judge).',
    answerText:
      'Each horse starts at 70. Each maneuver is scored -1.5 to +1.5 in half-point increments (0 = correct). Maneuver scores add to or subtract from 70. Penalty points apply for specific infractions. A score of 75+ is competitive.',
  },
  {
    question: 'What are the core maneuvers?',
    answer:
      'The NRHA Handbook specifies the maneuvers used in reining patterns: (1) walk in to the center — the horse enters the arena and stops squarely at the center; (2) circles — large fast and small slow at the lope, with a clear difference in speed; (3) flying lead change — a clean change of lead in the middle of a circle or across the diagonal without breaking gait; (4) spin — a 360-degree turn on the hindquarters with the inside hind foot remaining planted as a pivot; (5) sliding stop — from a hard gallop, the horse plants its hindquarters and slides forward to a stop on its hocks; (6) rollback — a 180-degree turn over the hindquarters from a stop; (7) backup — the horse backs in a straight line for the required distance; (8) hesitate — a still pause demonstrating composure.',
    answerText:
      'Core maneuvers: walk in to center, circles (large fast and small slow), flying lead change, spin (360 on hindquarters), sliding stop, rollback (180 over hindquarters), backup, and hesitate.',
  },
  {
    question: 'What levels exist in reining?',
    answer:
      'NRHA uses a class structure based on rider lifetime earnings. Open is the unrestricted top division — any rider, no earnings cap. Non-Pro is restricted to riders who have not competed for compensation. Levels within each division (Level 1, Level 2, Level 3, Level 4) are based on rider lifetime NRHA earnings — Level 1 the entry, Level 4 the top. Youth classes are run separately. Horse-age divisions include the Futurity (three-year-olds), Derby (four- and five-year-olds), Maturity (six-year-olds), and open age. The NRHA Futurity (Oklahoma City, late November–early December) is the most prestigious single event in the discipline.',
    answerText:
      'Open (unrestricted) and Non-Pro (no compensation), each with Level 1–4 based on rider lifetime earnings. Horse-age divisions: Futurity (3yo), Derby (4-5yo), Maturity (6yo), and open age. The NRHA Futurity is the most prestigious event.',
  },
  {
    question: 'What breeds are best for reining?',
    answer:
      'Reining is dominated by the American Quarter Horse — the discipline grew out of working cow-horse training and the Quarter Horse&apos;s combination of speed, stop, and trainability remains unmatched. Paint Horses (APHA) and Appaloosas (ApHC) appear at every level; many top horses are dual-registered with AQHA. Specific reining bloodlines have been developed over decades — Hollywood Dun It (NRHA Hall of Fame, the all-time leading sire in reining), Smart Chic Olena, Wimpys Little Step, Shining Spark, Topsail Whiz, and Gunner are foundational stallions whose progeny dominate NRHA records.',
    answerText:
      'Dominated by the American Quarter Horse. Paint Horses (APHA) and Appaloosas (ApHC) appear at every level. Foundation sires include Hollywood Dun It, Smart Chic Olena, Wimpys Little Step, Shining Spark, Topsail Whiz, and Gunner.',
  },
  {
    question: 'What is the sliding stop?',
    answer:
      'The sliding stop is reining&apos;s signature maneuver. From a hard, building gallop down the long side of the arena, the rider cues the stop; the horse drops its hindquarters under its body, plants its hocks, and slides forward with the hind feet skating across the ground while the front legs continue to walk forward to maintain balance. A measured slide of 20 to 30+ feet is achievable on a well-trained horse in appropriate footing. The maneuver requires specialized sliding shoes (long-extension flat plates) on the hind feet and prepared sand-and-deep-base footing — neither can be safely performed barefoot or on hard ground.',
    answerText:
      'The signature maneuver. From a hard gallop, the horse plants its hindquarters and slides forward 20 to 30+ feet on its hocks with hind feet skating, front legs walking. Requires sliding shoes (long-extension flat plates) and prepared footing.',
  },
  {
    question: 'Who governs reining?',
    answer:
      'The National Reining Horse Association (NRHA) is the international governing body for reining, with affiliated organizations across the Americas, Europe, Australia, and Asia. NRHA publishes the rule book, certifies judges, runs the top championships (Futurity, Derby, Maturity, European Futurity, European Derby), and maintains the official maneuver scoresheet and pattern library. USEF governs reining as a recognized USEF discipline in the US; the FEI added reining to its disciplines in 2000 — the first western discipline so recognized — though FEI involvement has shifted across the past decade.',
    answerText:
      'NRHA (National Reining Horse Association) is the international governing body. USEF recognizes reining as a USEF discipline. FEI added reining in 2000 — the first western FEI discipline.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combined = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

export default function ReiningPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="discipline"
        hero={{
          title: 'Reining',
          subtitle:
            'The western pattern discipline — sliding stops, spins, flying lead changes, and circles, scored maneuver by maneuver against a base of 70. Often called the western dressage.',
          category: 'Discipline Overview',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '15 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Disciplines', href: '/disciplines' },
          { name: 'Reining', href: '/disciplines/reining' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'TL;DR', href: '#tldr' },
            { label: 'History &amp; Origins', href: '#history' },
            { label: 'The Maneuvers', href: '#maneuvers' },
            { label: 'Scoring', href: '#scoring' },
            { label: 'Levels — Non-Pro to Open', href: '#levels' },
            { label: 'Best-Fit Breeds &amp; Bloodlines', href: '#breeds' },
            { label: 'Equipment', href: '#gear' },
            { label: 'Footing &amp; Welfare', href: '#footing' },
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
              { label: 'Western Pleasure Overview', href: '/disciplines/western-pleasure' },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="discipline" variant="sidebar" />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Evidence-led equine reference articles."
            source="discipline-reining"
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
            <li><strong>What it is:</strong> a western pattern class judged on prescribed maneuvers — sliding stops, spins, flying lead changes, rollbacks, large fast and small slow circles.</li>
            <li><strong>Scoring:</strong> each horse starts at 70; each maneuver scored -1.5 to +1.5 in half-point increments (0 = correct).</li>
            <li><strong>Governing body:</strong> NRHA (National Reining Horse Association) is the international governing body; USEF and FEI also recognize reining.</li>
            <li><strong>Levels:</strong> Open (unrestricted) and Non-Pro, each with Levels 1–4 based on rider lifetime NRHA earnings; horse-age divisions (Futurity, Derby, Maturity).</li>
            <li><strong>Best-fit breeds:</strong> American Quarter Horse, Paint Horse, Appaloosa; specific reining bloodlines (Hollywood Dun It, Smart Chic Olena, Wimpys Little Step) dominate top finals.</li>
            <li><strong>Key gear:</strong> reining saddle, snaffle or curb bit per division, sliding shoes (hind) for the sliding stop, prepared sand-and-base footing.</li>
          </ul>

          <h2 id="history">History &amp; Origins</h2>

          <DropCap>
            Reining grew out of working ranch-horse training in the American Southwest. A working cow horse needed to stop hard from a gallop without losing the calf, turn over its hocks to bring the calf back to the herd, and change leads while running through cattle. As western horse shows developed in the early twentieth century, those working maneuvers were codified into a competition pattern, and a discipline emerged that judged the precision and quality of the maneuvers themselves rather than the work with the cattle.
          </DropCap>

          <p>The National Reining Horse Association (NRHA) was founded in 1966 as the governing body specifically for reining. NRHA grew from a regional Texas-Oklahoma association into the international governing body it is today, with affiliates across the Americas, Europe, Australia, and Asia. The NRHA Futurity (held annually since 1966 in Oklahoma City for three-year-old horses) is the most prestigious single event in the discipline.</p>

          <p>Reining was the first western discipline given international FEI recognition, added to the FEI disciplines in 2000. Reining was contested at the FEI World Equestrian Games from 2002 through 2018; FEI involvement has shifted across the past decade with reining no longer on the WEG program. NRHA continues to run the international Futurity, Derby, and Maturity at the championship pinnacle, plus the European Futurity and European Derby for the continental circuit.</p>

          <h2 id="maneuvers">The Maneuvers</h2>

          <p>The NRHA Handbook specifies the maneuvers from which patterns are constructed. Every NRHA pattern (the rule book numbers patterns 1 through 14, with subsets for shorter classes) is built from these elements:</p>

          <h3>Walk in to center</h3>
          <p>The horse enters the arena at a walk and stops squarely at the center. The transition into the pattern is itself judged on calmness and willingness.</p>

          <h3>Circles — large fast and small slow</h3>
          <p>Circles are ridden at the lope, with a clear difference between the large fast circles (the horse extends and increases speed) and the small slow circles (the horse collects and slows). The judge looks for a clear difference in speed, accurate circle geometry, and smooth transitions between the two.</p>

          <h3>Flying lead change</h3>
          <p>A clean change of canter lead in the middle of a figure-eight or across the center of the arena, without breaking gait. The change should occur in a single stride; a late change, an early change, or a change that breaks to trot is penalized.</p>

          <h3>Spin</h3>
          <p>A 360-degree turn on the hindquarters with the inside hind foot remaining planted as a pivot point. Patterns call for one to four-and-a-quarter rotations in each direction. The judge evaluates the cadence, fluency, and accuracy of the rotation count.</p>

          <h3>Sliding stop</h3>
          <p>From a hard, building gallop down the long side of the arena, the horse plants its hindquarters and slides forward to a stop on its hocks. A measured slide of 20 to 30+ feet on a well-trained horse is achievable in appropriate footing. The stop is judged on the depth and length of the slide, the squareness of the back end, and the fluency of the front-end walk-through.</p>

          <h3>Rollback</h3>
          <p>From a sliding stop, a 180-degree turn over the hindquarters in one direction, with the horse departing immediately into the lope on the new lead. Patterns may call for multiple rollbacks in succession.</p>

          <h3>Backup</h3>
          <p>The horse backs in a straight line for the required distance (typically 10–20 feet) — judged on straightness, willingness, and cadence.</p>

          <h3>Hesitate</h3>
          <p>A still pause at a designated point in the pattern, demonstrating the horse&apos;s composure. Patterns may call for a hesitate at the conclusion to signal the end of the run.</p>

          <h2 id="scoring">Scoring</h2>

          <p>NRHA scoring is a maneuver-by-maneuver judgment against the base of 70:</p>

          <ul>
            <li><strong>+1.5</strong> excellent</li>
            <li><strong>+1.0</strong> very good</li>
            <li><strong>+0.5</strong> good</li>
            <li><strong>0</strong> correct (no credit, no penalty)</li>
            <li><strong>-0.5</strong> poor</li>
            <li><strong>-1.0</strong> very poor</li>
            <li><strong>-1.5</strong> extremely poor</li>
          </ul>

          <p>Each maneuver score is added to the base of 70 to produce the final maneuver score; the total of all maneuver scores produces the run score. Multiple judges score independently and their scores are averaged (or summed, depending on the class).</p>

          <p>Separate from the maneuver scores, NRHA applies specific penalty points:</p>

          <ul>
            <li><strong>1/2 point penalty:</strong> over-spin or under-spin by 1/8 turn, late lead change by one stride, finish out of the marker.</li>
            <li><strong>1 point penalty:</strong> over-spin or under-spin by 1/4 turn, two-handing the bridle in a one-hand class (with bridled snaffle exceptions).</li>
            <li><strong>2 point penalty:</strong> failure to be in the correct lead at the marker, breaking gait at the lope, freezing up in a spin.</li>
            <li><strong>5 point penalty:</strong> spurring in front of the cinch, jerking, knocking over a marker.</li>
            <li><strong>0 score (no score):</strong> illegal equipment, off pattern, working off pattern, four or more changes of equipment, abuse.</li>
          </ul>

          <p>The penalty scoring is what makes reining a high-precision discipline — a single error can drop a competitive run out of the placings. Top runs at the NRHA Futurity finals approach 230 across three judges (an average of approximately 76+ per judge); a score of 220+ is typical of finals placings.</p>

          <CalloutBox variant="tip" title="Reading a reining run">
            <p>The pattern is announced before the run; spectators with the pattern card can follow each maneuver. The judges&apos; scores are typically posted on the scoreboard within minutes of the run. The fastest way to learn to read reining is to spend a session watching the same pattern run by multiple horses with the score card in hand and matching the visual quality to the numbers.</p>
          </CalloutBox>

          <h2 id="levels">Levels — Non-Pro to Open</h2>

          <p>NRHA uses a class structure based on rider lifetime earnings and rider status:</p>

          <ul>
            <li><strong>Open.</strong> The unrestricted top division. Open to any rider, no earnings cap. Sub-divisions: Level 1 (lowest earnings threshold), Level 2, Level 3, and Level 4 (the elite Open).</li>
            <li><strong>Non-Pro.</strong> Restricted to riders who have not competed for compensation. Same Level 1–4 sub-divisions.</li>
            <li><strong>Youth.</strong> Run separately; 13-and-Under, 14–18, with appropriate level sub-divisions.</li>
            <li><strong>Rookie.</strong> Entry-level classes for riders new to the discipline.</li>
            <li><strong>Prime Time.</strong> Age-based class (typically 50+ Non-Pro).</li>
          </ul>

          <p>Horse-age divisions structure the championship calendar:</p>

          <ul>
            <li><strong>Futurity.</strong> Three-year-old horses; the NRHA Futurity in Oklahoma City (late November–early December) is the most prestigious event.</li>
            <li><strong>Derby.</strong> Four- and five-year-old horses; the NRHA Derby in summer is the second-pinnacle event.</li>
            <li><strong>Maturity.</strong> Six-year-old horses.</li>
            <li><strong>Open.</strong> Age-unrestricted classes available year-round at NRHA-approved shows.</li>
          </ul>

          <h2 id="breeds">Best-Fit Breeds &amp; Bloodlines</h2>

          <p>Reining is dominated by the <Link href="/breeds/quarter-horse">American Quarter Horse</Link>. The combination of muscle-power for the stop, agility for the spin, trainability for the precision work, and the historical breed selection for working ranch use is the foundation of the discipline. <Link href="/breeds/paint-horse">Paint Horses</Link> (APHA) and <Link href="/breeds/appaloosa">Appaloosas</Link> (ApHC) compete at every level; many top horses are dual-registered with AQHA.</p>

          <p>Within the AQHA-registered population, specific reining bloodlines have been developed over decades. The NRHA Hall of Fame and the all-time leading-sire records identify the foundational stallions:</p>

          <ul>
            <li><strong>Hollywood Dun It.</strong> NRHA Hall of Fame; long the all-time leading sire in reining earnings. Standing at Tim McQuay&apos;s in the 1990s and 2000s, Hollywood Dun It progeny dominated NRHA records.</li>
            <li><strong>Smart Chic Olena.</strong> Another NRHA Hall of Fame stallion; bridged the reining and reined-cow-horse worlds.</li>
            <li><strong>Wimpys Little Step.</strong> NRHA Hall of Fame; multiple-million-dollar sire.</li>
            <li><strong>Shining Spark.</strong> NRHA Hall of Fame; major sire of reining and reined-cow-horse performers.</li>
            <li><strong>Topsail Whiz.</strong> NRHA Hall of Fame; major sire whose name carries through to current Futurity finalists.</li>
            <li><strong>Gunner.</strong> Multiple NRHA Million-Dollar Sire; whose progeny have produced numerous NRHA Futurity finalists.</li>
            <li><strong>Magnum Chic Dream</strong>, <strong>Custom Crome</strong>, and <strong>Spooks Gotta Whiz</strong> are among the modern sires whose lines are heavily represented in current top horses.</li>
          </ul>

          <p>Breeders selecting for reining cross to these proven sire lines; pedigrees of top NRHA Futurity entries typically combine two or more of the major foundation reining sires within four generations.</p>

          <h2 id="gear">Equipment</h2>

          <h3>Saddle</h3>
          <p>A reining saddle is a western saddle purpose-built for the discipline — a deep close-contact seat that holds the rider over the horse&apos;s center of gravity through the stop, slightly forward-cut fenders that allow the rider to use the leg effectively for the spin and lead-change cues, and (in many cases) a slick fork without a high horn. Saddle fit follows the same standards as any saddle (see our <Link href="/guides/saddle-fit-basics">saddle fit basics</Link> guide). NRHA-approved saddles must meet the equipment specifications in the NRHA Handbook.</p>

          <h3>Bridle and bit</h3>
          <p>NRHA Handbook specifies legal bits by class. Two-year-old futurity horses are shown in a snaffle or bosal hackamore ridden with two hands. Three-year-olds and older in standard NRHA classes are shown in a curb bit ridden with one hand. Specific bit shank lengths, mouthpiece designs, and chain configurations are detailed in the rule book; illegal equipment is grounds for a 0 score.</p>

          <h3>Sliding shoes</h3>
          <p>The hind feet of a reining horse wear sliding shoes — long, flat plates extending beyond the heel and across a wide bearing surface — designed to allow the foot to skate across the ground during the sliding stop. Sliding shoes change the way the foot bears weight and have implications for hoof balance; they are typically applied by a farrier experienced with reining horses and adjusted by the horse&apos;s competition schedule. Front shoes are typically standard keg shoes.</p>

          <h3>Rider attire</h3>
          <p>NRHA dress: long-sleeved show shirt, western jeans or western pants, western show boots, western hat or NRHA-approved helmet. Chaps are common but not required. NRHA permits helmets in all classes; helmets are required for youth riders under USEF.</p>

          <h2 id="footing">Footing &amp; Welfare</h2>

          <CalloutBox variant="warning" title="Reining is a high-precision discipline with welfare considerations">
            <p>The sliding stop and spin maneuvers produce loading patterns that are specific to the discipline. NRHA has issued welfare guidance covering hoof care for sliders, footing standards (deep sand over a prepared base is the requirement for safe slides), and prohibited training practices. AAEP has published joint position statements on welfare in the western performance disciplines covering competition-day pre-show inspections, prohibited substances, and the limits of acceptable training methods. Owners considering the discipline should expect to work with a farrier experienced with reining horses, a veterinarian familiar with the discipline&apos;s joint and hoof concerns, and a trainer whose methods align with NRHA welfare guidance.</p>
          </CalloutBox>

          <h2 id="notable">Notable Events</h2>

          <ul>
            <li><strong>NRHA Futurity (Oklahoma City, late November–early December).</strong> The most prestigious event in the discipline. Three-year-old horses compete for the Futurity Championship; ancillary classes run throughout the multi-week show.</li>
            <li><strong>NRHA Derby (Oklahoma City, late June).</strong> Four- and five-year-old horses.</li>
            <li><strong>NRHA European Futurity (Cremona, Italy).</strong> The European pinnacle for three-year-old horses.</li>
            <li><strong>NRHA European Derby.</strong> Continental Derby championship.</li>
            <li><strong>USEF Reining classes</strong> at recognized US competitions, plus the All American Quarter Horse Congress reining classes (Columbus, OH, October).</li>
            <li><strong>NRHA Affiliate Finals.</strong> Regional championships for NRHA affiliate members.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>National Reining Horse Association. <em>NRHA Handbook</em> (current edition). nrha.com.</li>
            <li>NRHA pattern library (Patterns 1–14). nrha.com.</li>
            <li>NRHA Hall of Fame inductee records (horses, riders, and sires). nrha.com.</li>
            <li>NRHA Million-Dollar Sire records. nrha.com.</li>
            <li>United States Equestrian Federation. <em>USEF Rule Book, Chapter RN: Reining Division</em>. usef.org.</li>
            <li>American Quarter Horse Association. AQHA reining records and Million-Dollar Reining Horse honors. aqha.com.</li>
            <li>Fédération Équestre Internationale. FEI Reining (reining was added to FEI disciplines in 2000). fei.org.</li>
            <li>American Association of Equine Practitioners. AAEP position statements on welfare in western performance disciplines. aaep.org.</li>
            <li>NRHA Futurity and Derby championship history and prize-money records. nrha.com.</li>
            <li>NRHA Judges Program and certification standards. nrha.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
