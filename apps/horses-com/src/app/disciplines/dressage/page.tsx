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
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: 'Dressage — Training Pyramid, Levels, Breeds, and Gear',
  description:
    'Dressage reference: FEI origins, the training pyramid, USDF/FEI levels Intro to Grand Prix, breed fit, saddles, double bridle, and competition framework.',
  path: '/disciplines/dressage',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Dressage — A Reference Overview',
  description:
    'History, training pyramid, USDF and FEI levels, breed fit, equipment, and competition framework for the discipline of dressage.',
  url: 'https://horses.com/disciplines/dressage',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const FAQS = [
  {
    question: 'What is dressage in one sentence?',
    answer:
      'Dressage is the systematic gymnastic training of the horse to perform increasingly demanding movements with balance, suppleness, and apparent ease, judged in competition against a written test in a standard 20×60 m or 20×40 m arena under USDF, USEF, and FEI rules.',
    answerText:
      'Dressage is the systematic gymnastic training of the horse to perform increasingly demanding movements with balance and suppleness, judged against a written test in a standard arena under USDF, USEF, and FEI rules.',
  },
  {
    question: 'What is the training pyramid?',
    answer:
      'The dressage training pyramid (also called the Training Scale) is the framework used by USDF, USEF, and the German FN to organize a horse&apos;s gymnastic development. From the base upward: rhythm, relaxation (suppleness), contact, impulsion, straightness, and collection. Each level supports the next; collection cannot be developed in a horse that does not have rhythm, relaxation, and contact established first.',
    answerText:
      'The training pyramid is the framework used by USDF and USEF for dressage development. From the base up: rhythm, relaxation, contact, impulsion, straightness, and collection. Each level supports the next.',
  },
  {
    question: 'How many levels are there in US dressage?',
    answer:
      'USDF and USEF together recognize nine national levels plus the international FEI levels. National levels are Introductory (walk-trot only), Training, First, Second, Third, and Fourth Level. FEI levels are Prix St. Georges, Intermediate I, Intermediate II, and Grand Prix. There are also FEI Pony, Children, Junior, Young Rider, and Under-25 tracks. Each test progressively introduces movements such as lengthenings, lateral work, simple and flying changes, pirouettes, and piaffe and passage.',
    answerText:
      'USDF/USEF recognize nine national levels (Introductory, Training, First through Fourth) plus FEI levels (Prix St. Georges, Intermediate I, Intermediate II, Grand Prix). Each test introduces progressively harder movements.',
  },
  {
    question: 'What breeds are best for dressage?',
    answer:
      'Modern competitive dressage at the upper levels is dominated by European Warmbloods — Hanoverian, Holsteiner, KWPN (Dutch Warmblood), Oldenburg, Westphalian, Trakehner, Danish Warmblood — bred specifically for the suspension and trainability the sport requires. Iberian breeds (Andalusian, Lusitano, PRE) excel at collected work and are well represented at the upper levels. Many other breeds compete successfully at the lower and middle levels, including Thoroughbreds, Morgans, Friesians, Arabians, and stock-horse crosses. The discipline rewards trainability and movement quality more than any single breed identity.',
    answerText:
      'Warmbloods (Hanoverian, Holsteiner, KWPN, Oldenburg, Trakehner) dominate upper-level competition; Iberian breeds (Andalusian, Lusitano, PRE) excel at collection. Many breeds compete successfully at lower levels.',
  },
  {
    question: 'When does a horse start using a double bridle?',
    answer:
      'Under USDF and USEF rules, the double bridle is optional from Fourth Level upward and is required at FEI levels (Prix St. Georges and above) except in tests where a snaffle is specifically permitted. The double bridle uses a bradoon (thin snaffle) and a curb (Weymouth) with a curb chain; it is a refinement tool for an already-established horse, not a training aid. Riders who introduce it too early or without competent instruction risk creating tension and resistance.',
    answerText:
      'Per USDF/USEF rules, the double bridle is optional from Fourth Level and required at FEI levels. It uses a bradoon and a curb with curb chain; it is a refinement tool for an established horse, not a training aid.',
  },
  {
    question: 'What does a dressage saddle do differently from other saddles?',
    answer:
      'A dressage saddle is a deep-seat English saddle with long, straight flaps designed to position the rider in a long-leg seat directly over the horse&apos;s center of gravity, with the stirrup hanging long enough that the rider&apos;s heel sits well below the hip. The straight cut keeps the rider&apos;s thigh out of the way of the long flat-work leg position. Knee blocks vary widely — many modern dressage saddles use prominent thigh blocks; classical schools prefer minimal blocks. Saddle fit follows the same standards as any English saddle (see our saddle-fit guide).',
    answerText:
      'A dressage saddle has a deep seat and long, straight flaps that position the rider in a long-leg seat over the horse&apos;s center of gravity, with the stirrup hung long. Saddle fit standards are the same as any English saddle.',
  },
  {
    question: 'Who governs dressage at the international level?',
    answer:
      'The Fédération Équestre Internationale (FEI) governs international equestrian sport including dressage. The FEI sets the rules for international competition, manages World Cup and Olympic qualification, certifies international judges (4*, 5*, O ratings), and publishes the FEI Dressage Rules and Tests. In the US, USEF (United States Equestrian Federation) is the FEI&apos;s national federation; USDF (United States Dressage Federation) is the national member organization for dressage education, awards, and the All-Breeds program.',
    answerText:
      'The FEI governs international dressage. USEF is the FEI national federation in the US; USDF is the national member organization for dressage education and awards.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combined = combineSchemas(articleSchema, faqSchema)

export default function DressagePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="discipline"
        relatedLinks={[
          { title: 'Disciplines Hub', href: '/disciplines', category: 'Disciplines' },
          { title: 'Eventing', href: '/disciplines/eventing' },
          { title: 'Show Jumping', href: '/disciplines/show-jumping' },
          { title: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
        ]}
        hero={{
          title: 'Dressage',
          subtitle:
            'The systematic gymnastic training of the horse — judged against a written test in a standard arena, organized around a six-step training pyramid that begins with rhythm and ends with collection.',
          category: 'Discipline Overview',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '16 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Disciplines', href: '/disciplines' },
          { name: 'Dressage', href: '/disciplines/dressage' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'TL;DR', href: '#tldr' },
            { label: 'History &amp; Origins', href: '#history' },
            { label: 'The Training Pyramid', href: '#pyramid' },
            { label: 'Levels — Intro to Grand Prix', href: '#levels' },
            { label: 'Best-Fit Breeds', href: '#breeds' },
            { label: 'Equipment', href: '#gear' },
            { label: 'Competition Structure', href: '#competition' },
            { label: 'Training Tips for Beginners', href: '#training' },
            { label: 'Notable Events &amp; Riders', href: '#notable' },
            { label: 'FAQ', href: '#faq' },
            { label: 'References', href: '#references' },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
              { label: 'Hanoverian Breed Profile', href: '/breeds/hanoverian' },
              { label: 'Andalusian Breed Profile', href: '/breeds/andalusian' },
              { label: 'Lusitano Breed Profile', href: '/breeds/lusitano' },
              { label: 'First-Horse Roadmap', href: '/first-horse-roadmap' },
            ]}
          />
          <CrossPortfolioCard
            currentSite="horses-com"
            contentType="discipline"
            variant="sidebar"
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Evidence-led equine reference articles."
            source="discipline-dressage"
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
            <li><strong>What it is:</strong> the systematic gymnastic training of the riding horse, judged against a written test in a standard 20×60 m (or 20×40 m for lower levels) arena.</li>
            <li><strong>Framework:</strong> the training pyramid — <em>rhythm → relaxation → contact → impulsion → straightness → collection</em>.</li>
            <li><strong>Levels:</strong> six US national levels (Introductory through Fourth) and four FEI levels (Prix St. Georges, Intermediate I and II, Grand Prix), plus FEI Young Rider and Under-25 tracks.</li>
            <li><strong>Governing bodies:</strong> FEI internationally; USEF and USDF in the US.</li>
            <li><strong>Best-fit breeds:</strong> European Warmbloods at the top of the sport; Iberian breeds for classical and collected work; many others compete at lower and middle levels.</li>
            <li><strong>Key gear:</strong> dressage saddle, snaffle bridle through Third Level, double bridle optional from Fourth and required at FEI.</li>
          </ul>

          <h2 id="history">History &amp; Origins</h2>

          <DropCap>
            Dressage as a competitive discipline traces directly to the riding manuals of European military horsemanship — Xenophon&apos;s <em>On Horsemanship</em> (4th century BC), François Robichon de la Guérinière&apos;s <em>École de Cavalerie</em> (1733), and the work of the Spanish Riding School of Vienna (founded 1572 and continuously operating today). The classical principles those manuals laid down — harmony, lightness, and the systematic development of the horse — remain the foundation of the modern sport.
          </DropCap>

          <p>The sport-competition form of dressage emerged in the early twentieth century alongside the modern Olympic movement. Dressage entered the Olympic program at the 1912 Stockholm Games as part of a three-event military competition; from 1928 it has been a continuous Olympic event in its own right (with the team competition added in 1928 and then formalized through subsequent Games). The Fédération Équestre Internationale (FEI) was founded in 1921 to govern international equestrian sport, and dressage was among its founding disciplines.</p>

          <p>The first FEI Dressage World Championships were held in 1966; the FEI Dressage World Cup series followed in 1985, providing a winter-circuit indoor championship that culminates each spring. The discipline&apos;s American national federation, the United States Dressage Federation (USDF), was founded in 1973 as the educational and member-services partner to USEF (the US FEI national federation). USDF runs the All-Breeds Awards program, the L Education Program for prospective judges, the Instructor/Trainer Certification program, and a network of recognized regional shows.</p>

          <h2 id="pyramid">The Training Pyramid (Training Scale)</h2>

          <p>The training pyramid — codified by the German FN and adopted essentially unchanged by USDF and USEF — is the framework on which all systematic dressage training is built. The six elements support one another from the base up:</p>

          <ol>
            <li><strong>Rhythm (Takt).</strong> The pure, regular footfall of each gait: four-beat walk, two-beat trot, three-beat canter, all with even tempo. Rhythm is the non-negotiable foundation; a horse that is not in rhythm cannot be supple, on the bit, or collected.</li>
            <li><strong>Relaxation / Suppleness (Losgelassenheit).</strong> Mental calm combined with elastic, swinging use of the back and topline. The horse&apos;s back is free; the tail swings; the breathing is even.</li>
            <li><strong>Contact (Anlehnung).</strong> The horse seeks the bit with an even, elastic connection — the result of riding from the leg into a steady hand, never of pulling the head down.</li>
            <li><strong>Impulsion (Schwung).</strong> Energy generated from the hindquarters that is transmitted through a supple back into a forward, swinging stride. Impulsion exists only in trot and canter (the walk has activity but not impulsion in the classical sense).</li>
            <li><strong>Straightness (Geraderichtung).</strong> The horse&apos;s hind feet track into the prints of the forefeet on straight lines, and bend uniformly through the body on circles. Straightness is the prerequisite for collection.</li>
            <li><strong>Collection (Versammlung).</strong> The hindquarters carry an increased proportion of the weight; the strides shorten and the forehand lightens; the silhouette rises. Collection is developed gradually over years, not weeks.</li>
          </ol>

          <CalloutBox variant="tip" title="The pyramid is a teaching aid, not a rigid sequence">
            <p>In practice the elements interlock. A horse cannot be made truly straight before it is in rhythm; collection cannot be developed without impulsion; impulsion will not appear in a tense or tight horse. Good trainers cycle through the lower elements every ride, even when working on more advanced material. The pyramid is the diagnostic framework: when something at the top goes wrong, the cause is almost always at the bottom.</p>
          </CalloutBox>

          <h2 id="levels">Levels — Intro to Grand Prix</h2>

          <p>USDF and USEF publish a complete library of national tests, revised on a roughly four-year cycle. The current US national levels:</p>

          <ul>
            <li><strong>Introductory Level.</strong> Walk and trot only; no canter. Tests A, B, C. The entry point for green horses and adult amateurs new to the sport.</li>
            <li><strong>Training Level.</strong> Walk, trot, canter; 20-meter circles; free walk on a long rein; trot lengthenings introduced at Test 3.</li>
            <li><strong>First Level.</strong> Smaller circles (15 m), shoulder-in introduced, lengthenings in trot and canter, leg-yield, change of lead through trot.</li>
            <li><strong>Second Level.</strong> Travers, renvers, simple changes (canter–walk–canter), counter-canter, more developed shoulder-in.</li>
            <li><strong>Third Level.</strong> Half-pass in trot and canter, single flying changes, extended trot, extended canter.</li>
            <li><strong>Fourth Level.</strong> Multiple flying changes (every fourth and third stride), canter pirouette introduced, extensions developed. Double bridle becomes optional.</li>
          </ul>

          <p>From Fourth Level the horse moves into the FEI tests, sometimes called the &ldquo;international&rdquo; or &ldquo;small-tour and big-tour&rdquo; levels:</p>

          <ul>
            <li><strong>Prix St. Georges.</strong> Half-passes, canter pirouettes, flying changes every fourth and third stride. Often the qualifying threshold for &ldquo;small tour&rdquo; competition.</li>
            <li><strong>Intermediate I.</strong> Flying changes every second stride introduced; full canter pirouette.</li>
            <li><strong>Intermediate II.</strong> Flying changes every stride (tempi changes) introduced; piaffe and passage transitions in their first developed form.</li>
            <li><strong>Grand Prix.</strong> Fifteen one-tempi changes, passage, piaffe, full pirouette, extended trot. The Olympic test. The Grand Prix Special and Grand Prix Freestyle (Kür, ridden to music) are the championship medal tests at the Olympics and World Championships.</li>
          </ul>

          <p>The FEI also runs Pony Rider, Children, Junior, Young Rider, and Under-25 tracks with their own tests and championships. USDF runs a parallel Musical Freestyle program from Training Level through Grand Prix.</p>

          <h2 id="breeds">Best-Fit Breeds</h2>

          <p>Competitive dressage at the upper levels is dominated by European sport-horse studbooks bred specifically for the discipline. The major Warmblood registries — Hanoverian, Holsteiner, Dutch (KWPN), Oldenburg, Westphalian, Trakehner, Danish, Belgian — each select breeding stock against criteria that include uphill movement, three correct gaits, trainable temperament, and rideability. The result is a population of horses that, on average, present the gymnastic raw material the sport rewards.</p>

          <p>Iberian breeds — the Pure Spanish Horse (Pura Raza Española, PRE), the Andalusian, and the Lusitano — have a long historical association with classical dressage and are increasingly competitive at the international level, particularly in collected work. The Lusitano team won team bronze for Portugal at the 2018 World Equestrian Games.</p>

          <p>Many other breeds compete successfully at the lower and middle levels:</p>

          <ul>
            <li><Link href="/breeds/thoroughbred">Thoroughbreds</Link>, particularly after a successful retraining program, are common in adult-amateur classes through Third Level.</li>
            <li><Link href="/breeds/morgan">Morgans</Link> have a strong national All-Breeds presence through Fourth Level.</li>
            <li><Link href="/breeds/friesian">Friesians</Link> compete well in dressage suitability and lower-level tests.</li>
            <li><Link href="/breeds/arabian">Arabians</Link> are well-represented at Training and First Level; Arabian Sport Horse classes have grown.</li>
            <li><Link href="/breeds/quarter-horse">Quarter Horses</Link> appear in the USDF All-Breeds Awards through Third Level.</li>
            <li><Link href="/breeds/hanoverian">Hanoverians</Link>, <Link href="/breeds/holsteiner">Holsteiners</Link>, <Link href="/breeds/dutch-warmblood">KWPN</Link>, and <Link href="/breeds/oldenburg">Oldenburgs</Link> dominate the FEI levels.</li>
          </ul>

          <p>The USDF All-Breeds Awards recognize the top score in each level by breed registry — a useful annual snapshot of which breeds are showing what.</p>

          <h2 id="gear">Equipment</h2>

          <h3>Saddle</h3>
          <p>The dressage saddle is a deep-seat English saddle with a long, straight flap and a high pommel and cantle that hold the rider in a balanced long-leg seat. The stirrup bar is set forward to drop the rider&apos;s lower leg into a line through the ear, shoulder, hip, and heel. Knee blocks vary — modern competition saddles often have prominent thigh blocks; classical schools prefer minimal blocks. Saddle fit follows the same standards as any English saddle; see our <Link href="/guides/saddle-fit-basics">saddle fit basics</Link> guide.</p>

          <h3>Bridle and bit</h3>
          <p>Through Fourth Level (and at Fourth Level if the rider so chooses) the snaffle bridle is standard — a plain cavesson, drop, flash, or crank noseband, with a snaffle bit. From Fourth Level upward riders may use a double bridle; from FEI levels (Prix St. Georges and above) the double bridle is required in most tests. The double consists of a thin bradoon (small snaffle) and a curb (Weymouth) with a curb chain, requiring four reins held in the rider&apos;s hands. The double bridle is a refinement tool for a horse that already accepts the snaffle correctly — it is not a training device, and introducing it before the horse&apos;s training is established creates tension and resistance.</p>

          <h3>Rider attire</h3>
          <p>Competition dress follows USEF and FEI rules: a dark coat (navy, black, or other approved colors), white or light breeches, tall black boots, white shirt with stock tie or choker, white or beige gloves, and a helmet (helmets are required for all riders at all USEF-recognized competitions per the 2021 rule change; top hats, formerly allowed at FEI levels, are now prohibited in US competition and increasingly prohibited internationally). Spurs are optional below Second Level and required at FEI levels. A dressage whip is permitted in schooling and competition with limits on length (current USEF rule: maximum 120 cm including lash).</p>

          <h3>Arena</h3>
          <p>The standard FEI dressage arena is 20 m × 60 m, marked with twelve letters (A, K, V, E, S, H, C, M, R, B, P, F) and the centerline letters (D, L, X, I, G). Lower-level tests use a 20 m × 40 m short arena with eight letters. Arena footing is fundamental to soundness; modern competition footing is typically a sand and fiber blend with controlled depth and watering, built on an engineered base.</p>

          <h2 id="competition">Competition Structure</h2>

          <p>A dressage test is a sequence of named movements, performed in a prescribed order at prescribed letters in the arena. The rider memorizes the test (or, at lower levels, may use a reader). Each movement is scored 0–10 by the judge, with half-marks permitted. The test ends with collective marks — typically gaits, impulsion, submission, and rider position — that are weighted by a coefficient (commonly ×2). The total points are converted to a percentage. A score of 60 percent is considered satisfactory; 65 percent is a solid effort; 70 percent and up indicates strong performance; the very best competition rides at Grand Prix exceed 80 percent.</p>

          <p>Tests are judged by one judge at lower levels and by three to seven judges (positioned at C, B, E, M, and H around the arena) at championship FEI competitions. Multiple-judge scoring averages out individual judge bias and is the international standard for championship results. FEI judges hold ratings of 3*, 4*, 5*, and O (Olympic); USEF recognizes &ldquo;r&rdquo;, &ldquo;R&rdquo;, and &ldquo;S&rdquo; national licensures.</p>

          <p>The competition calendar in the US runs through USDF/USEF Recognized Competitions (eligible for year-end awards), USEF/FEI CDI (Concours de Dressage International) competitions (eligible for FEI ranking points), and the USDF Regional Championships and US Dressage Finals. The Olympic and World Championship cycle, plus the FEI World Cup Final, sit at the top of the international calendar.</p>

          <CalloutBox variant="info" title="Reading a dressage score sheet">
            <p>A judge&apos;s test sheet gives a numeric score for each movement plus a short written comment. Scores read top-to-bottom tell you exactly where the horse is strong (8s and 9s) and where the training is incomplete (4s, 5s, and 6s). For most riders, the value of dressage competition is less the placing than the structured diagnostic the score sheet provides — and the chance to compare the same horse&apos;s scores across rides as the training develops.</p>
          </CalloutBox>

          <h2 id="training">Training Tips for Beginners</h2>

          <ul>
            <li><strong>Find an instructor first.</strong> Dressage is taught, not picked up. USDF&apos;s Instructor/Trainer Certification program lists certified instructors by region and level; trainers with USEF or FEI &ldquo;r&rdquo;, &ldquo;R&rdquo;, or &ldquo;S&rdquo; licensures or a competition record at PSG or above are reasonable starting points.</li>
            <li><strong>Ride the lower levels honestly.</strong> Most training problems at the upper levels originate in unfinished work at Training and First Level. Spending time at the base of the pyramid is not regression — it is the necessary foundation.</li>
            <li><strong>Audit a clinic.</strong> Watching a clinician work through several horses across an afternoon is one of the highest-return ways to learn the sport. USDF University, the USDF Trainers Conference, and any regionally-active FEI-level clinician are good targets.</li>
            <li><strong>Volunteer at a recognized show.</strong> Scribing for a judge for a day is the fastest way to understand what each movement is being scored on. USDF actively recruits volunteers and the scribing seat is right next to the judge.</li>
            <li><strong>Read the test before you ride it.</strong> USDF tests with movement-by-movement directives are free to download; the directives tell you what the judge is looking for at each letter.</li>
          </ul>

          <h2 id="notable">Notable Events &amp; Riders</h2>

          <h3>Top events</h3>
          <ul>
            <li><strong>FEI Dressage World Cup Final.</strong> Annual indoor championship, hosted in rotating cities; recent venues include Omaha, Gothenburg, and Riyadh.</li>
            <li><strong>FEI World Equestrian Games / FEI World Championships.</strong> Quadrennial championships rotating across disciplines.</li>
            <li><strong>Olympic Games.</strong> Quadrennial; individual and team dressage medals contested in the Grand Prix, Grand Prix Special, and Grand Prix Freestyle.</li>
            <li><strong>CHIO Aachen (Germany).</strong> The annual European championship-tier competition widely regarded as the most prestigious outdoor competition in the sport.</li>
            <li><strong>US Dressage Finals at the Kentucky Horse Park.</strong> National championships across all levels.</li>
            <li><strong>Adequan Global Dressage Festival, Wellington, FL.</strong> Long-running winter CDI circuit.</li>
          </ul>

          <h3>Notable riders</h3>
          <p>The sport has a deep international roster; among the riders whose names recur in modern coverage are Charlotte Dujardin (GBR, multiple Olympic medals on Valegro), Isabell Werth (GER, the most-decorated dressage rider in Olympic history), Steffen Peters (USA, multiple Olympic appearances), and Laura Graves (USA, World Cup finalist with Verdades). Historical figures whose teaching shapes the modern sport include Reiner Klimke, Nuno Oliveira, Egon von Neindorff, and the long line of riders trained at the Spanish Riding School in Vienna.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Fédération Équestre Internationale. <em>FEI Dressage Rules</em> (current edition). fei.org/dressage.</li>
            <li>United States Equestrian Federation. <em>USEF Rule Book, Chapter DR: Dressage Division</em>. usef.org.</li>
            <li>United States Dressage Federation. USDF Training Pyramid, USDF Member Guide, and All-Breeds Awards program. usdf.org.</li>
            <li>German National Federation (FN). <em>Principles of Riding</em> (Richtlinien für Reiten und Fahren), Volume 1 — the foundational training reference adopted internationally.</li>
            <li>de la Guérinière FR. <em>École de Cavalerie</em> (1733). The foundational classical reference.</li>
            <li>Klimke R. <em>Basic Training of the Young Horse</em>. Trafalgar Square Books — widely cited modern reference on the training scale in practice.</li>
            <li>USDF L Education Program. Public curriculum on judging and the training scale. usdf.org.</li>
            <li>USEF Safe Sport, Helmet Rule (effective 2021), and competition licensure standards. usef.org.</li>
            <li>FEI World Cup Dressage records and championship results. fei.org.</li>
            <li>Spanish Riding School of Vienna. Public educational materials on classical riding (continuously operating since 1572). srs.at.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
