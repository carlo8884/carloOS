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
  title: 'Show Jumping — Courses, Levels, Breeds, and Gear Reference',
  description:
    'Show jumping reference: course design, USEF Jumper sections Crossrails to 1.60 m Grand Prix, FEI World Cup, best-fit breeds, jumper saddle, and top events.',
  path: '/disciplines/show-jumping',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Show Jumping — A Reference Overview',
  description:
    'History, course design fundamentals, USEF Jumper and FEI levels, best-fit breeds, jumper-saddle and boot equipment, and top events for show jumping.',
  url: 'https://horses.com/disciplines/show-jumping',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Disciplines', url: 'https://horses.com/disciplines' },
    { name: 'Show Jumping', url: 'https://horses.com/disciplines/show-jumping' },
  ],
})

const FAQS = [
  {
    question: 'How is show jumping scored?',
    answer:
      'Under USEF Jumper and FEI Jumping rules, a horse incurs 4 faults for a knockdown of a rail or for a first refusal, 4 faults for one foot in the water at a water jump, and elimination on the second refusal (per current FEI Jumping rules) or third refusal in some national tables. Time faults are added when the rider exceeds the time allowed. Tables of scoring include Table A (faults plus time only in jump-off), Table C (faults converted to seconds and added to round time), and specialty tables for speed and accumulator classes. The fewest faults wins; ties at the top are broken by a timed jump-off over a shortened course.',
    answerText:
      'Knockdowns and refusals are scored as 4 faults; time faults are added for exceeding time allowed. Lowest faults wins; ties at the top are broken by a timed jump-off over a shortened course.',
  },
  {
    question: 'What are the USEF Jumper levels?',
    answer:
      'USEF Jumper sections progress by fence height: Schooling Jumpers and Beginner Jumpers at 2&apos;3″–2&apos;9″ (0.70–0.85 m), Low Jumpers and Children/Adult Jumpers at 3&apos;0″–3&apos;6″ (0.90–1.10 m), Modified and Medium Jumpers at 3&apos;9″–4&apos;0″ (1.15–1.20 m), High Jumpers at 4&apos;3″–4&apos;6″ (1.30–1.40 m), and Grand Prix at 1.45–1.60 m. FEI international classes are rated 1*, 2*, 3*, 4*, and 5*, with 5* the highest rating used for top events such as the FEI World Cup, Olympics, and CSI5* Grand Prix.',
    answerText:
      'USEF Jumper sections progress by fence height from Schooling (2&apos;3″) through Grand Prix (1.45–1.60 m). FEI classes are rated 1* through 5*, with 5* used for the World Cup, Olympics, and top CSI5* Grand Prix.',
  },
  {
    question: 'How is a jumping course designed?',
    answer:
      'A course designer plans the track to test specific qualities — adjustability, rideability, scope, and bravery — using related distances, combinations (two or three fences in a row), bending lines, and changes of pace. Standard related distances are built on a 12-foot (3.65 m) horse canter stride: a one-stride double is about 24 feet (7.3 m), a two-stride double about 36 feet (11.0 m), a four-stride line about 60 feet (18.3 m). Course designers also vary fence type (verticals, oxers, triple bars, walls, planks, liverpools, open water), opening track shape, and the jump-off track to identify the fastest and most accurate combination.',
    answerText:
      'Course designers use related distances, combinations, bending lines, and varied fence types built on a 12-foot horse canter stride to test adjustability, rideability, scope, and bravery, and to identify the fastest accurate combination in the jump-off.',
  },
  {
    question: 'What breeds are best for show jumping?',
    answer:
      'Modern competitive show jumping is dominated by European sport-horse studbooks bred specifically for the discipline — KWPN (Dutch Warmblood), Belgian Warmblood (BWP), Selle Français, Holsteiner, Hanoverian, Westphalian, and Oldenburg. Thoroughbred-cross horses (an Irish Sport Horse being the most familiar example) compete successfully at every level. At the lower and middle levels many breeds appear, including Quarter Horse and Appendix Quarter Horses, Connemara ponies and crosses, Morgans, and the broader pool of working-Warmblood crosses. Scope (the ability to jump big), carefulness, and rideability are the qualities the studbooks select for.',
    answerText:
      'KWPN, Belgian Warmblood, Selle Français, Holsteiner, Hanoverian, and Oldenburg dominate top-level competition. Irish Sport Horses and Thoroughbred crosses compete successfully at every level. Many breeds compete at lower and middle levels.',
  },
  {
    question: 'What is the difference between a jumper saddle and a hunter saddle?',
    answer:
      'A jumper saddle (close-contact or forward-seat jumping saddle) has a forward-cut flap, a flatter seat, and prominent knee blocks designed to support the rider in a short stirrup over fences — the position is more aggressive and athletic than the show-hunter position. A hunter saddle has a slightly less aggressive forward cut and a quieter overall profile, intended for the smooth, flowing presentation that hunter classes are judged on. Both are English close-contact saddles built on the same general principles; the differences are in flap angle, knee block, seat depth, and overall styling.',
    answerText:
      'Jumper saddles have a more forward-cut flap, flatter seat, and prominent knee blocks for the aggressive short-stirrup jumping position. Hunter saddles have a quieter cut and styling for the smooth presentation hunter classes are judged on.',
  },
  {
    question: 'Why do jumpers wear open-front boots?',
    answer:
      'Open-front boots (front leg boots with a hard external shell and an open inner front) protect the soft tissues of the foreleg from being struck by the hind feet without padding the front of the cannon bone — the open front gives the horse some sensation when it raps a fence, which the rider and trainer use as feedback to keep the horse careful in front. The opposite design (fully-enclosed dressage or schooling boots) is used in flatwork and discouraged in jumping competition for this reason. Hind boots used in jumpers are typically fetlock boots that wrap around and protect the fetlock joint from interference and rubs.',
    answerText:
      'Open-front boots protect the soft tissues of the foreleg without padding the front of the cannon, so the horse feels rails it raps. This is intentional — it preserves the carefulness the discipline rewards.',
  },
  {
    question: 'Who governs show jumping?',
    answer:
      'The Fédération Équestre Internationale (FEI) governs international show jumping (FEI Jumping), including the FEI Jumping World Cup, FEI Nations Cup, the World Championships, and the Olympic Games. USEF (United States Equestrian Federation) is the FEI national federation in the US and runs the USEF Jumper Division at recognized competitions. State and regional associations (notably the Pennsylvania National Horse Show, Devon Horse Show, and Hampton Classic) host competitions at the national and international ratings.',
    answerText:
      'The FEI governs international jumping (Jumping World Cup, Nations Cup, World Championships, Olympics). USEF is the FEI national federation in the US and runs the USEF Jumper Division.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combined = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

export default function ShowJumpingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="specialty"
        hero={{
          title: 'Show Jumping',
          subtitle:
            'A numbered course of obstacles against the clock — the discipline that asks for scope, accuracy, adjustability, and a partnership willing to take the fastest line.',
          category: 'Discipline Overview',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '15 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Disciplines', href: '/disciplines' },
          { name: 'Show Jumping', href: '/disciplines/show-jumping' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'TL;DR', href: '#tldr' },
            { label: 'History &amp; Origins', href: '#history' },
            { label: 'Course Design Fundamentals', href: '#course' },
            { label: 'Levels — Crossrails to Grand Prix', href: '#levels' },
            { label: 'Best-Fit Breeds', href: '#breeds' },
            { label: 'Equipment', href: '#gear' },
            { label: 'Competition Structure', href: '#competition' },
            { label: 'Training Tips for Beginners', href: '#training' },
            { label: 'Top Events', href: '#notable' },
            { label: 'FAQ', href: '#faq' },
            { label: 'References', href: '#references' },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
              { label: 'KWPN (Dutch Warmblood) Profile', href: '/breeds/dutch-warmblood' },
              { label: 'Selle Français Profile', href: '/breeds/selle-francais' },
              { label: 'Irish Sport Horse Profile', href: '/breeds/irish-sport-horse' },
              { label: 'Thoroughbred Profile', href: '/breeds/thoroughbred' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Evidence-led equine reference articles."
            source="discipline-show-jumping"
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
            <li><strong>What it is:</strong> a numbered course of jumps ridden against the clock under USEF Jumper and FEI Jumping rules; the horse with the fewest faults (and, in the jump-off, the fastest time) wins.</li>
            <li><strong>Scoring:</strong> 4 faults per knockdown; 4 faults per first refusal; time faults for exceeding the time allowed; elimination on the second refusal (current FEI rules).</li>
            <li><strong>Levels:</strong> from Schooling and Crossrails (2&apos;0″–2&apos;6″) through 1.60 m FEI Grand Prix and the Olympics.</li>
            <li><strong>Governing bodies:</strong> FEI internationally; USEF Jumper Division in the US.</li>
            <li><strong>Best-fit breeds:</strong> European Warmbloods (KWPN, Belgian, Selle Français, Holsteiner, Hanoverian); Irish Sport Horses and Thoroughbred crosses; many breeds at lower levels.</li>
            <li><strong>Key gear:</strong> close-contact jumper saddle, open-front boots, fetlock boots behind, snaffle or bit appropriate to the horse.</li>
          </ul>

          <h2 id="history">History &amp; Origins</h2>

          <DropCap>
            Modern show jumping emerged in the late nineteenth and early twentieth centuries from the development of the forward seat — a riding style that allowed the horse to use its back and neck freely over a fence rather than being held back. The Italian cavalry officer Federico Caprilli is the figure most associated with the formalization of the forward seat; his teaching at the Italian cavalry schools around 1900 reshaped jumping technique across Europe and North America in the decades that followed. Before Caprilli, riders sat back and pulled the head up; after, they folded forward, released the rein, and let the horse jump.
          </DropCap>

          <p>Show jumping appeared at the 1900 Paris Olympics as an early Olympic equestrian event; it has been continuously contested at the Games since 1912. The Fédération Équestre Internationale (FEI), founded in 1921, governs the international sport. The FEI Jumping World Cup began in 1978 as a winter indoor series and remains one of the sport&apos;s most-followed annual championships, with the World Cup Final held each spring. The FEI Nations Cup series (Furusiyya Nations Cup, now FEI Nations Cup Jumping) is the team-competition circuit, running through summer venues including Aachen, Dublin, and Spruce Meadows.</p>

          <p>In the US, the discipline grew through the show-hunter tradition of the northeastern circuits — Devon, Madison Square Garden, the Pennsylvania National — and the Florida winter circuit at Wellington, which has become the largest concentrated jumping competition in the world. USEF (and its predecessor the American Horse Shows Association) has governed national competition since 1917.</p>

          <h2 id="course">Course Design Fundamentals</h2>

          <p>A jumping course is designed to test specific qualities — adjustability of stride, rideability between fences, scope to clear larger oxers, and bravery at unfamiliar obstacles. The course designer&apos;s tools:</p>

          <h3>Related distances</h3>
          <p>Standard related distances are built on a 12-foot (3.65 m) horse canter stride, with 6 feet (1.83 m) added for landing and takeoff. The common distances:</p>
          <ul>
            <li><strong>One stride:</strong> 24 feet (7.3 m) between obstacles.</li>
            <li><strong>Two strides:</strong> 36 feet (11.0 m).</li>
            <li><strong>Three strides:</strong> 48 feet (14.6 m).</li>
            <li><strong>Four strides:</strong> 60 feet (18.3 m).</li>
            <li><strong>Five strides:</strong> 72 feet (21.9 m).</li>
          </ul>
          <p>A designer who sets a distance &ldquo;short&rdquo; (a foot or two less than standard) tests adjustability — the horse must shorten its stride to fit the line. A designer who sets a distance &ldquo;long&rdquo; tests scope and impulsion.</p>

          <h3>Fence types</h3>
          <ul>
            <li><strong>Vertical:</strong> an upright fence with no spread.</li>
            <li><strong>Oxer:</strong> two verticals close together with a spread between them; an &ldquo;ascending oxer&rdquo; has the back rail higher than the front, a &ldquo;square oxer&rdquo; has both rails at the same height (more difficult).</li>
            <li><strong>Triple bar:</strong> three ascending rails with a wide spread.</li>
            <li><strong>Wall:</strong> a solid-looking masonry-pattern fence built of removable blocks.</li>
            <li><strong>Planks and gates:</strong> solid-faced fences that ride harder than airy rail fences.</li>
            <li><strong>Liverpool:</strong> a vertical or oxer with a small pool of water under it.</li>
            <li><strong>Open water:</strong> a wide ground-level water jump with a low brush takeoff and a tape (no rail) at the far edge; faulted if any foot lands on or beyond the tape.</li>
            <li><strong>Combinations:</strong> two (double) or three (triple) fences spaced at one or two strides; if the horse refuses any element of a combination, it returns to the start of the combination.</li>
          </ul>

          <CalloutBox variant="info" title="Walking the course">
            <p>Before each class, riders walk the course on foot. The walk is when the rider measures every related distance with a standard stride (a four-foot human stride, used as a yardstick), checks the line through each turn, identifies the optimum jump-off track, and plans the canter quality required for each fence. A bad walk is the most common cause of a bad round.</p>
          </CalloutBox>

          <h2 id="levels">Levels — Crossrails to Grand Prix</h2>

          <p>USEF Jumper sections are organized by maximum fence height. Approximate progression at recognized competition:</p>

          <ul>
            <li><strong>Schooling and Crossrails:</strong> 2&apos;0″–2&apos;6″ (0.60–0.75 m).</li>
            <li><strong>Beginner / Long Stirrup Jumpers:</strong> 2&apos;6″–2&apos;9″ (0.75–0.85 m).</li>
            <li><strong>Low Jumpers / Children&apos;s and Adult Amateur Jumpers:</strong> 3&apos;0″–3&apos;6″ (0.90–1.10 m).</li>
            <li><strong>Modified / Medium Jumpers:</strong> 3&apos;9″–4&apos;0″ (1.15–1.20 m).</li>
            <li><strong>High Jumpers / High Children&apos;s &amp; High Adult Amateur:</strong> 4&apos;3″–4&apos;6″ (1.30–1.40 m).</li>
            <li><strong>Grand Prix:</strong> 1.45–1.60 m. Major-event Grand Prix tracks are 1.55–1.60 m with multiple oxers in the 1.60 m range.</li>
          </ul>

          <p>FEI international competitions are rated by the number of stars (CSI1* through CSI5*) corresponding to the highest fence height and total prize money at the event. CSI5* is reserved for the top tier (the World Cup qualifier weeks at Aachen, Spruce Meadows, Wellington, La Baule, and similar). The FEI Jumping World Cup, the Olympics, and the FEI World Championships are the championship pinnacle.</p>

          <h2 id="breeds">Best-Fit Breeds</h2>

          <p>Top-level show jumping is dominated by European sport-horse studbooks that select for scope, carefulness, and rideability:</p>

          <ul>
            <li><Link href="/breeds/dutch-warmblood">KWPN (Dutch Warmblood).</Link> Among the most-represented studbooks at the top of the sport; selection includes a dedicated jumper-line program.</li>
            <li><Link href="/breeds/belgian-warmblood">Belgian Warmblood (BWP).</Link> Long history at the international level; produces many CSI5* horses.</li>
            <li><Link href="/breeds/selle-francais">Selle Français.</Link> The French sport-horse studbook; the historic source of many of the world&apos;s most successful jumpers.</li>
            <li><Link href="/breeds/holsteiner">Holsteiner.</Link> One of the oldest Warmblood registries; particularly strong in jumping bloodlines (Cor de la Bryère and Capitol I are foundational sires).</li>
            <li><Link href="/breeds/hanoverian">Hanoverian.</Link> Broad sport-horse base, with strong jumping representation alongside the more dressage-leaning lines.</li>
            <li><Link href="/breeds/oldenburg">Oldenburg.</Link> Increasingly strong in jumping bloodlines through the OS (Oldenburg Sport) registry.</li>
            <li><Link href="/breeds/irish-sport-horse">Irish Sport Horse.</Link> The classic Thoroughbred-Irish Draught cross; valued for stamina, scope, and rideability across English disciplines including jumping and eventing.</li>
            <li><Link href="/breeds/thoroughbred">Thoroughbred.</Link> Common in lower- and middle-level jumpers, particularly with retraining from racing; valued for cardiovascular fitness and rideability.</li>
          </ul>

          <p>At the lower and middle levels, many breeds compete successfully — Connemara ponies and pony-Thoroughbred crosses are the classic pony-jumper combination; Quarter Horses and Appendix Quarter Horses appear in lower jumper sections; Morgans, Arabians, and crossbreds round out the field.</p>

          <h2 id="gear">Equipment</h2>

          <h3>Saddle</h3>
          <p>A jumper-specific close-contact saddle has a forward-cut flap, flatter seat, and prominent knee blocks designed to support the rider in a short-stirrup jumping position. The rider&apos;s position is more aggressive and athletic than the show-hunter position; the saddle reflects that. Saddle fit follows the same standards as any English saddle (see our <Link href="/guides/saddle-fit-basics">saddle fit basics</Link> guide).</p>

          <h3>Bridle and bit</h3>
          <p>USEF Jumper rules permit a wide range of snaffle and curb bits, gags, hackamores, and bitless bridles (subject to specific FEI restrictions at the international level). At the lower levels most horses go in a simple snaffle; at the upper levels combinations such as Pelham, gag, three-ring, or double-jointed snaffle with a flash noseband are common. The choice of bridle and bit is rider- and horse-specific. Standing martingales, running martingales, and breastplates are commonly used and permitted within USEF and FEI rules.</p>

          <h3>Boots</h3>
          <ul>
            <li><strong>Open-front jumping boots (front):</strong> hard external shell with an open inner front, protecting the soft tissues of the foreleg without padding the front of the cannon bone. The open front gives the horse sensation when it raps a fence.</li>
            <li><strong>Fetlock boots (hind):</strong> short wraparound boots that protect the fetlock joint from interference; the standard hind-leg protection in show jumping.</li>
            <li><strong>Bell boots:</strong> rubber boots over the hoof, used to prevent overreach injuries when the hind foot strikes the heel of the forefoot.</li>
            <li><strong>Galloping or polo wraps:</strong> permitted in some schooling contexts; less common in competition jumpers than in schooling rounds.</li>
          </ul>

          <h3>Rider attire</h3>
          <p>USEF competition dress: dark hunt coat (navy, black, or other approved colors), white or light breeches, tall black boots, white shirt and choker or stock tie, gloves, and an ASTM/SEI-certified helmet (helmets are required for all riders at all USEF-recognized competitions). Spurs are optional. The rider carries a jumping bat or crop, with USEF maximum length 30 inches (76 cm).</p>

          <h2 id="competition">Competition Structure</h2>

          <p>A typical USEF Jumper class runs under one of the standard tables. Table II 2(b) — &ldquo;jump-off immediately following the first round&rdquo; — is the most common format. Riders compete a numbered course of 10–15 fences; clean rounds inside the time allowed return for a timed jump-off over a shortened track. The fastest clear in the jump-off wins. Speed classes (Table C) convert each fault to time penalties and add them to the round time; whoever finishes with the lowest combined number wins.</p>

          <p>The FEI Jumping World Cup runs as a winter qualifying series through the major North American and European leagues, with the Final held each spring. The FEI Nations Cup series is a summer team competition with five-rider teams jumping a two-round Grand Prix-level track. The Olympics and FEI World Championships are the championship pinnacle, contested every two and four years respectively.</p>

          <h2 id="training">Training Tips for Beginners</h2>

          <ul>
            <li><strong>Master the flat first.</strong> Adjustability, balance, and rhythm between fences come from flatwork — many trainers spend 70 percent or more of arena time on the flat even with experienced jumpers.</li>
            <li><strong>Learn to walk a course.</strong> Counting strides between fences on foot before each class is the single most-important learnable skill for a competitive jumper rider.</li>
            <li><strong>Ride small grids and gymnastics.</strong> A grid of two or three small fences at related distances teaches the horse to read its own striding and stay through the back. Hardly any upper-level rider stops doing grid work.</li>
            <li><strong>Start with a forgiving horse.</strong> A horse that knows the job teaches the rider faster than the rider can teach the horse. Lesson programs with packer-experienced horses are the safest entry.</li>
            <li><strong>Find a USEF-licensed trainer.</strong> Trainers with active USEF licensure and a competition record at the level you are aiming for are reasonable starting points.</li>
          </ul>

          <h2 id="notable">Top Events</h2>

          <ul>
            <li><strong>FEI Jumping World Cup Final.</strong> Annual indoor championship at the end of the winter qualifying series.</li>
            <li><strong>Olympic Games.</strong> Quadrennial; individual and team Show Jumping medals.</li>
            <li><strong>FEI World Equestrian Games / World Championships.</strong> Quadrennial championships.</li>
            <li><strong>CHIO Aachen (Germany).</strong> The annual outdoor event regarded by many riders as the most prestigious in the sport.</li>
            <li><strong>Spruce Meadows Masters (Calgary, Canada).</strong> The CSI5* &ldquo;Masters&rdquo; tournament with one of the largest Grand Prix prize purses in the world.</li>
            <li><strong>Winter Equestrian Festival (Wellington, FL).</strong> Twelve-week winter CSI circuit, the largest concentrated show-jumping competition in the world.</li>
            <li><strong>Devon Horse Show (Pennsylvania).</strong> One of the oldest and most prestigious US horse shows, continuously held since 1896.</li>
            <li><strong>Hampton Classic (Bridgehampton, NY).</strong> Late-summer CSI Grand Prix.</li>
            <li><strong>Pennsylvania National Horse Show (Harrisburg, PA).</strong> Indoor championship at the end of the fall indoor circuit.</li>
            <li><strong>National Horse Show.</strong> The oldest indoor horse show in the US (founded 1883), part of the fall indoor championship circuit.</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Fédération Équestre Internationale. <em>FEI Jumping Rules</em> (current edition). fei.org/jumping.</li>
            <li>United States Equestrian Federation. <em>USEF Rule Book, Chapter JP: Jumper Division</em>. usef.org.</li>
            <li>FEI Jumping World Cup competition history and results. fei.org.</li>
            <li>FEI Nations Cup Jumping season history and results. fei.org.</li>
            <li>Morris GH. <em>Hunter Seat Equitation</em>, 3rd edition. The foundational US show-jumping technical reference.</li>
            <li>de Némethy B. <em>The de Némethy Method</em>. Long-standing reference on systematic jumper training from the former US Equestrian Team chef d&apos;équipe.</li>
            <li>Steinkraus W. <em>Riding and Jumping</em>. Classical reference from the gold-medal US team rider.</li>
            <li>USEF Safe Sport, Helmet Rule, and competition licensure standards. usef.org.</li>
            <li>Spruce Meadows, CHIO Aachen, Devon Horse Show, Hampton Classic — official event documentation and results archives.</li>
            <li>Winter Equestrian Festival (Wellington International). Competition calendar and results. wef.cmthorse.com.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
