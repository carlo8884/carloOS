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
  title: 'Trail Riding — Recreational, NATRC, and AERC Endurance Reference',
  description:
    'Trail riding reference: recreational and competitive (NATRC, AERC endurance to 100 mi), trail saddle, hoof protection, etiquette, safety, conditioning.',
  path: '/disciplines/trail-riding',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: 'Trail Riding — A Reference Overview',
  description:
    'Recreational trail and competitive trail (NATRC, AERC) reference: equipment, hoof protection options, trail etiquette, safety, conditioning, and the rule frameworks for the competitive variants.',
  url: 'https://horses.com/disciplines/trail-riding',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://horses.com' },
    { name: 'Disciplines', url: 'https://horses.com/disciplines' },
    { name: 'Trail Riding', url: 'https://horses.com/disciplines/trail-riding' },
  ],
})

const FAQS = [
  {
    question: 'What is the difference between recreational, competitive trail, and endurance?',
    answer:
      'Recreational trail riding has no rules and no governing body — it is any horseback riding done on trails for the pleasure of the rider. Competitive trail riding (under NATRC, the North American Trail Ride Conference, founded 1961) is a judged ride over a defined trail, scored on the horse&apos;s soundness and condition, the rider&apos;s horsemanship, and pace; rides are typically 15–40 miles per day across one or two days. Endurance riding (under AERC, the American Endurance Ride Conference, founded 1972, and FEI Endurance internationally) is a timed race over distances of 25, 50, 75, or 100 miles in a single day, with veterinary checks at vet gates along the way; horses that fail a vet check are pulled from the ride. Each variant has its own rule book, scoring or timing system, and championship structure.',
    answerText:
      'Recreational trail riding has no rules. NATRC Competitive Trail is a judged ride scored on condition, horsemanship, and pace (15–40 miles per day). AERC Endurance is a timed race up to 100 miles in a day, with veterinary checks throughout.',
  },
  {
    question: 'What is the AERC distance progression?',
    answer:
      'AERC distinguishes Limited Distance (LD) rides of 25–35 miles from endurance rides of 50, 75, and 100 miles. LD rides are an intermediate step but are not officially &ldquo;endurance&rdquo; in AERC terminology. To be eligible for the Tevis Cup (the 100-mile championship in California) and similar 100-mile rides, a horse and rider must qualify through completion of progressively-longer AERC rides. The AERC National Championship rotates between regions; the Tevis Cup (1955 founding) is the oldest and most prestigious 100-mile ride in the US. FEI Endurance runs 80, 100, 120, and 160 km classes internationally.',
    answerText:
      'AERC: Limited Distance 25–35 mi; Endurance 50, 75, 100 mi. Qualification is required before competing in 100-mile rides. The Tevis Cup (1955) is the oldest and most prestigious 100-mile ride. FEI Endurance runs 80–160 km classes.',
  },
  {
    question: 'What kind of saddle should I use for trail riding?',
    answer:
      'A trail saddle is a Western or English saddle purpose-built for long hours of riding — extra D-rings or attachments for saddlebags, water bottles, and a breast collar; padded seat; rider position that allows posting at the trot for long distances. Endurance riders often use specialized endurance saddles (rigid-tree or treeless designs) that distribute weight over a larger area to minimize pressure-point soreness on long-distance rides. Saddle fit is the single most-important consideration — a poorly-fitting saddle becomes painful on a long ride and is a leading cause of back soreness. See our saddle-fit guide for the framework.',
    answerText:
      'A trail saddle (Western or English) has D-rings for saddlebags and water, a padded seat, and a rider position that allows posting. Endurance riders use specialized endurance saddles that distribute weight over a larger area. Saddle fit is critical on long rides.',
  },
  {
    question: 'Boots, shoes, or barefoot for trail riding?',
    answer:
      'The choice depends on terrain, distance, hoof quality, and the horse&apos;s individual feet. Barefoot is appropriate for horses with good-quality hooves on softer terrain (grass, sand, packed dirt), with regular trim by an experienced barefoot farrier. Hoof boots (Easyboot, Renegade, Cavallo, Scoot Boots) are applied for the ride and removed afterward; they protect the hoof on rocky terrain without committing to year-round shoes. Conventional shoes (steel or aluminum) are the traditional choice for horses ridden frequently on rocky or paved terrain; they require regular farrier visits and have implications for hoof shape over time. Many endurance horses ride barefoot or in hoof boots; many recreational and competitive trail horses ride shod. The AAEP recommends working with a farrier and (when needed) a veterinarian to choose the appropriate option for the individual horse.',
    answerText:
      'Depends on terrain, hoof quality, and the individual horse. Options: barefoot (good hooves, softer terrain), hoof boots (Easyboot, Renegade, Cavallo, Scoot Boots — apply for ride), or conventional shoes. Many endurance horses go barefoot or in boots; many recreational horses are shod.',
  },
  {
    question: 'What is trail etiquette?',
    answer:
      'Standard trail etiquette: yield to riders descending steep terrain (the rider going downhill has less control); call out your presence when approaching from behind; pass slowly; do not crowd the horse in front of you (maintain a horse-length minimum gap); single-file on narrow trails; do not pass another rider without permission; warn other trail users (hikers, bikers) of your approach; ride trails open to horses (not all trails are); and pack out what you pack in. Multi-use trail etiquette per US Forest Service and US Park Service guidance also has bikes yielding to horses and hikers yielding to both — the order is bikes yield to hikers and horses; hikers yield to horses.',
    answerText:
      'Single-file on narrow trails; yield to downhill riders; call out when approaching from behind; pass slowly; maintain a horse-length gap; warn hikers and bikers. Multi-use trail order: bikes yield to hikers and horses; hikers yield to horses.',
  },
  {
    question: 'What safety gear should I carry on a trail ride?',
    answer:
      'Essential trail safety: ASTM/SEI-certified helmet (mandatory on any ride at any speed; AERC and NATRC require helmets on all competitive rides); horse ID (rider phone number on the saddle, halter, or breast collar); cell phone (in a waterproof bag if there is any water risk); basic first-aid kit (for human and horse — vet wrap, gauze, antiseptic, hoof pick, electrolyte paste); a knife; a whistle; water for both horse and rider; weather-appropriate clothing layers; and a map and compass or GPS for any unfamiliar trail. Long rides add electrolytes, easy-to-eat food for the rider, and (for endurance) the heart-rate-recovery monitoring equipment used at vet gates.',
    answerText:
      'Helmet (mandatory; required by AERC and NATRC), horse ID (rider phone number on saddle or halter), cell phone, first-aid kit (human and horse), knife, whistle, water, weather-appropriate layers, map/GPS. Add electrolytes and recovery monitoring for endurance.',
  },
  {
    question: 'How do I condition a trail horse?',
    answer:
      'Conditioning a horse for long-distance trail work is a gradual process built around aerobic base-building. The standard endurance progression begins with 30–45 minutes of walking and trotting on flat terrain three to four times a week for the first few weeks, then gradually adds duration, hills, and brief gallops. AERC and NATRC publish conditioning guidance specific to the distances involved. For most adult horses with no recent fitness work, a 12–16 week conditioning program is the minimum to be safely ready for a 25-mile LD ride; 100-mile rides require a full season of progressive conditioning plus completed qualifying rides. The horse&apos;s heart-rate recovery (the speed at which the heart rate returns to 60 bpm after work) is the standard fitness indicator used at vet gates.',
    answerText:
      'Gradual aerobic base-building. 30–45 min walk-trot on flat terrain 3–4× per week, then gradually add duration, hills, and brief gallops. Minimum 12–16 week conditioning for a 25-mi LD ride; full-season program plus qualifiers for 100-mi rides.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combined = combineSchemas(articleSchema, faqSchema, breadcrumbSchema)

export default function TrailRidingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        hero={{
          title: 'Trail Riding',
          subtitle:
            'From backyard outings to NATRC Competitive Trail to AERC endurance up to 100 miles — what to carry, how to fit the saddle for hours rather than minutes, and the rules for the competitive variants.',
          category: 'Discipline Overview',
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'May 2026',
          readTime: '16 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Disciplines', href: '/disciplines' },
          { name: 'Trail Riding', href: '/disciplines/trail-riding' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: 'TL;DR', href: '#tldr' },
            { label: 'Recreational vs Competitive', href: '#types' },
            { label: 'NATRC Competitive Trail', href: '#natrc' },
            { label: 'AERC Endurance', href: '#aerc' },
            { label: 'Equipment', href: '#gear' },
            { label: 'Hoof Protection — Boots vs Shoes vs Barefoot', href: '#hoof' },
            { label: 'Trail Etiquette', href: '#etiquette' },
            { label: 'Safety', href: '#safety' },
            { label: 'Conditioning', href: '#conditioning' },
            { label: 'Best-Fit Breeds', href: '#breeds' },
            { label: 'FAQ', href: '#faq' },
            { label: 'References', href: '#references' },
          ]} />
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: 'Saddle Fit Basics', href: '/guides/saddle-fit-basics' },
              { label: 'Joint Supplements', href: '/supplements/joint-supplements' },
              { label: 'Best Equine Supplements', href: '/reviews/best-equine-supplements' },
              { label: 'Best Winter Horse Blankets', href: '/reviews/best-winter-horse-blankets' },
              { label: 'Arabian Profile', href: '/breeds/arabian' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="horses-com"
            title="Practical Horse Reference"
            subtitle="Evidence-led equine reference articles."
            source="discipline-trail-riding"
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
            <li><strong>What it is:</strong> riding a horse on a trail, recreationally or in competition. The competitive variants are NATRC Competitive Trail (judged ride) and AERC/FEI Endurance (timed race up to 100 miles).</li>
            <li><strong>Governing bodies:</strong> none for recreational trail; NATRC for Competitive Trail (founded 1961); AERC for endurance (founded 1972); FEI Endurance for international.</li>
            <li><strong>Key gear:</strong> trail saddle, breast collar, saddlebags, water, helmet, ID, basic first-aid kit, cell phone.</li>
            <li><strong>Hoof protection:</strong> barefoot, hoof boots, or shoes — the choice depends on terrain, hoof quality, and the individual horse; work with a qualified farrier.</li>
            <li><strong>Best-fit breeds:</strong> Arabians and Arabian crosses dominate endurance; many breeds suit recreational and competitive trail; soundness and a calm temperament matter more than breed identity.</li>
            <li><strong>Safety:</strong> helmet, horse ID, conditioning before distance, and trail-etiquette awareness — see AAEP guidance on trail-horse soundness for the underlying veterinary framework.</li>
          </ul>

          <h2 id="types">Recreational vs Competitive</h2>

          <DropCap>
            Trail riding covers a range from backyard rides on quiet paths to championship endurance racing across mountain country. The activity is the same — a person on a horse moving down a trail — but the governing framework varies enormously. Recreational trail riding has no rules and no governing body; you simply ride. NATRC and AERC competitive rides bring rule books, veterinary checks, scoring or timing, and championship structures. Knowing which variant a ride falls into is the first practical step in preparing for it.
          </DropCap>

          <h3>Recreational trail riding</h3>
          <p>Any horseback riding done on trails outside of competition. No rules, no veterinary inspections, no scoring. Distance, pace, and gear are entirely at the rider&apos;s discretion. The vast majority of trail riding in North America is recreational; major trail networks include the US Forest Service Equestrian Trails system, the BLM (Bureau of Land Management) trail network, the National Park Service equestrian trails, the American Trails network of state and local resources, and an extensive private and equestrian-club trail network.</p>

          <h3>NATRC Competitive Trail</h3>
          <p>The North American Trail Ride Conference (NATRC, founded 1961) is the largest competitive-trail organization in the US. NATRC rides are judged events over a defined trail, typically 15–40 miles per day across one or two days. Two judges — a veterinary judge and a horsemanship judge — independently score each entry. The horse is scored on condition (soundness, fitness, recovery) and the rider on horsemanship (trail manners, judgment, handling). The combined scores produce the placings. NATRC rides are open to any breed; classes are divided by experience (Novice, Competitive Pleasure, Open) and rider age.</p>

          <h3>AERC Endurance</h3>
          <p>The American Endurance Ride Conference (AERC, founded 1972) is the US national governing body for endurance riding. AERC rides are timed races over distances of 25–35 miles (Limited Distance), 50 miles, 75 miles, and 100 miles in a single day. The fastest horse to complete the course and pass all veterinary checks wins. AERC requires veterinary checks at vet gates along the course; horses that fail a vet check are pulled from the ride. The Best Condition award (BC) is given to a horse that finishes in the top ten and presents the best condition after the ride — it is widely considered a more prestigious honor than the win itself.</p>

          <h3>FEI Endurance</h3>
          <p>FEI Endurance is the international variant, run under FEI rules at distances of 80, 100, 120, and 160 km. FEI rides are CEI* through CEI4* rated and culminate in the FEI World Endurance Championship and historic regional championships. FEI Endurance has been the subject of welfare reform across the past decade and the FEI publishes updated welfare and risk-management rules each season.</p>

          <h2 id="natrc">NATRC Competitive Trail</h2>

          <p>A NATRC ride is judged across two dimensions:</p>

          <h3>Horse condition (veterinary judge)</h3>
          <p>The veterinary judge inspects the horse before the ride, at vet check points along the trail, and at the finish. Scoring covers:</p>
          <ul>
            <li>Soundness — any lameness is disqualifying.</li>
            <li>Pulse and respiration recovery — the speed at which the heart rate returns to a target value after work.</li>
            <li>Hydration — capillary refill, skin elasticity, gut sounds.</li>
            <li>Tack and saddle-fit assessment — visible rubs, swelling, or tenderness at saddle and girth area.</li>
            <li>Overall condition at the finish.</li>
          </ul>

          <h3>Horsemanship (horsemanship judge)</h3>
          <p>The horsemanship judge evaluates the rider&apos;s judgment, the partnership with the horse, the handling of trail obstacles, the management of pace, and the trail etiquette demonstrated. Specific observation points along the trail (judged obstacles) score handling of natural features — water crossings, log step-overs, tight turns, terrain changes.</p>

          <p>Classes are divided by experience level — Leisure (educational, no scoring), Novice (entry-level competition), Competitive Pleasure (intermediate), and Open (the championship division) — and by rider age (Junior, Adult). NATRC publishes the full rule book and judging criteria; rides are organized by NATRC-affiliated regional clubs across the country.</p>

          <h2 id="aerc">AERC Endurance</h2>

          <h3>Distances and progression</h3>
          <p>AERC distinguishes:</p>
          <ul>
            <li><strong>Limited Distance (LD):</strong> 25–35 miles in a single day. Often the entry point for new endurance riders.</li>
            <li><strong>Endurance:</strong> 50, 75, or 100 miles in a single day. Officially &ldquo;endurance&rdquo; in AERC terminology.</li>
            <li><strong>Multi-Day:</strong> stage rides of 50–80 miles per day across two to five consecutive days.</li>
          </ul>

          <p>Qualification is required before competing in 100-mile rides — typically a series of completed AERC rides at progressively longer distances. The Tevis Cup (Western States Trail Ride, California, founded 1955) is the oldest and most prestigious 100-mile ride in the US, run each summer over the Sierra Nevada from Lake Tahoe to Auburn in 24 hours.</p>

          <h3>Vet gates</h3>
          <p>An AERC endurance course is divided into segments (loops) separated by vet gates. At each vet gate, the horse is presented to the ride veterinarian within a specified hold period; the heart rate must drop to a target value (typically 64 bpm) before the horse can be presented. The vet inspects soundness, hydration, attitude, and gut sounds. Failure at any check pulls the horse from the ride. The vet-gate hold time is part of the riding strategy — a horse that recovers fast can be presented and back on the trail quickly; a horse that recovers slowly loses time at the gate.</p>

          <h3>Best Condition</h3>
          <p>The Best Condition (BC) award is given to the horse that finishes in the top ten and (after a post-ride veterinary evaluation) presents the best overall condition. Many competitive endurance riders target Best Condition rather than the win itself; BC is widely considered the most respected honor in the sport.</p>

          <h2 id="gear">Equipment</h2>

          <h3>Saddle</h3>
          <p>A trail saddle is a Western or English saddle purpose-built for long hours in the saddle — typically with extra D-rings or attachments for saddlebags, water bottles, and a breast collar; a padded seat; rider position that allows comfortable posting at the trot for long distances. Endurance riders often use specialized endurance saddles (rigid-tree or treeless designs) that distribute weight over a larger area to minimize pressure-point soreness on long rides. Saddle fit is the single most-important consideration on a long ride — a poorly-fitting saddle becomes painful and is a leading cause of back soreness and rub injuries. See our <Link href="/guides/saddle-fit-basics">saddle fit basics</Link> guide for the fitting framework.</p>

          <h3>Breast collar and crupper</h3>
          <p>A breast collar prevents the saddle from sliding back on uphill terrain; a crupper (a strap that loops under the tail) prevents the saddle from sliding forward on steep downhills. Both are typical on serious trail and endurance horses, particularly in mountainous terrain.</p>

          <h3>Saddlebags and packs</h3>
          <p>Saddlebags carry the trail essentials — water, food, basic first aid, weather layers, navigation. Cantle bags attach behind the saddle; pommel bags attach in front. Larger pack systems are used for multi-day rides. For competition, AERC and NATRC saddlebag requirements are documented in their rule books.</p>

          <h3>Bridle and bit</h3>
          <p>Trail bridles range from full bridles with a snaffle bit (for horses that need direct rein contact) to bitless bridles, sidepulls, and rope halters with reins. The choice depends on the horse&apos;s training and the terrain. Many endurance horses ride bitless on long-distance rides; many recreational trail horses ride in a simple snaffle bridle.</p>

          <h3>Rider attire</h3>
          <p>Layered, weather-appropriate clothing; sun protection (long sleeves, hat or helmet, sunscreen); riding tights or trail jeans; tall riding boots or paddock boots and half-chaps; ASTM/SEI-certified helmet. AERC and NATRC require helmets on all competitive rides. For long-distance rides, padded seat-savers, padded breeches, and chafe-prevention products are standard.</p>

          <h2 id="hoof">Hoof Protection — Boots vs Shoes vs Barefoot</h2>

          <p>The choice of hoof protection is one of the more consequential decisions for a trail horse. The three options:</p>

          <h3>Barefoot</h3>
          <p>Appropriate for horses with good-quality hooves on softer terrain (grass, sand, packed dirt). Requires regular trim (typically every 4–8 weeks) by an experienced barefoot farrier. The trim style differs from a shoeing trim — the goal is to maintain a balanced hoof that wears evenly with use. Barefoot horses develop tougher hoof walls and soles over time with consistent work on appropriate terrain. Barefoot is well-suited to horses that ride frequently on a mix of surfaces.</p>

          <h3>Hoof boots</h3>
          <p>Applied for the ride and removed afterward. Major brands include Easyboot, Renegade, Cavallo, and Scoot Boots — each with its own design and fitting system. Hoof boots protect the hoof on rocky terrain without committing to year-round shoes; they are particularly common with endurance horses, who may ride barefoot during conditioning and use boots for competition or for sections of rocky trail. Boot fit is critical — a boot that comes off mid-ride is a problem.</p>

          <h3>Conventional shoes</h3>
          <p>Steel or aluminum shoes nailed to the hoof wall, typically reset every 6–8 weeks by a farrier. Standard for horses ridden frequently on rocky or paved terrain. Shoes alter the way the hoof wears and have implications for hoof shape over time. Specialty shoes (rim shoes, traction shoes, pads for shock absorption) are used for specific terrain or therapeutic needs.</p>

          <p>The decision is individual to the horse, the terrain, and the workload. Many endurance horses ride barefoot or in hoof boots; many recreational and competitive trail horses ride shod. The AAEP&apos;s position on trail-horse soundness recommends working with a qualified farrier (and, when needed, a veterinarian) to choose the appropriate option for the individual horse, monitoring hoof condition throughout the season, and adjusting as conditions change.</p>

          <h2 id="etiquette">Trail Etiquette</h2>

          <ul>
            <li><strong>Single file on narrow trails.</strong> Side-by-side riding on a multi-use trail blocks other users.</li>
            <li><strong>Yield to downhill riders.</strong> The rider going downhill has less control; the uphill rider stops or steps off the trail.</li>
            <li><strong>Call out when approaching from behind.</strong> A horse surprised from behind reacts quickly; a verbal warning prevents that.</li>
            <li><strong>Pass slowly.</strong> Walking past another horse at a trot or canter is a recipe for a kick; pass at a walk and only after the other rider has acknowledged the pass.</li>
            <li><strong>Maintain a horse-length gap.</strong> Crowding the horse in front of you risks kicks and falls; one-horse-length is the standard following distance on the trail.</li>
            <li><strong>Warn hikers and bikers.</strong> Calling out a friendly &ldquo;horses behind&rdquo; gives other trail users time to react. Per US Forest Service and Park Service multi-use guidance, bikers and hikers yield to horses; courteous communication makes that work.</li>
            <li><strong>Stay on designated trails.</strong> Off-trail riding damages vegetation, contributes to erosion, and can result in trail closure for horse use.</li>
            <li><strong>Pack out what you pack in.</strong> Including manure at trail-head parking and rest stops, per the Leave No Trace principles.</li>
            <li><strong>Ride trails open to horses.</strong> Not all trails permit horses; check the trail-system map or contact the land manager before riding an unfamiliar trail.</li>
          </ul>

          <h2 id="safety">Safety</h2>

          <CalloutBox variant="warning" title="Helmets are non-negotiable">
            <p>An ASTM/SEI-certified helmet is mandatory on any ride at any speed. AERC and NATRC require helmets on all competitive rides. Trail riding takes place in unpredictable terrain with footing variations, wildlife encounters, and other trail users — falls happen even on calm horses. Helmet use on recreational trail rides is the single most-impactful personal safety decision a trail rider can make.</p>
          </CalloutBox>

          <h3>What to carry</h3>
          <ul>
            <li>Cell phone in a waterproof bag.</li>
            <li>Horse ID — your phone number on the saddle, halter, or breast collar in case of separation.</li>
            <li>Basic first-aid kit for human and horse — vet wrap, gauze, antiseptic, hoof pick, electrolyte paste, hoof boot for emergency (if the horse loses a shoe).</li>
            <li>Knife.</li>
            <li>Whistle.</li>
            <li>Water for both horse and rider on long rides.</li>
            <li>Weather-appropriate layers.</li>
            <li>Map and compass or GPS for unfamiliar trails.</li>
            <li>Ride file — when riding alone, leave a written ride file with someone at home noting your route and expected return time.</li>
          </ul>

          <h3>Wildlife and terrain</h3>
          <p>Trail rides cross territory shared with wildlife. Standard guidance: ride in pairs when possible; carry bear spray in bear country (and know how to use it); learn to read the horse&apos;s body language for early-warning signals; avoid riding at dawn and dusk in country with predator activity; check the local trail authority for current wildlife advisories.</p>

          <h2 id="conditioning">Conditioning</h2>

          <p>A horse ridden once a week on flat trails for an hour is not the same horse as one ridden three times a week on hill country for two hours. Conditioning for distance work is a gradual process built on an aerobic base:</p>

          <ul>
            <li><strong>Weeks 1–4.</strong> 30–45 minutes of walking and trotting on flat terrain three to four times per week. Build the cardiovascular base.</li>
            <li><strong>Weeks 5–8.</strong> Add hills. Sessions of 60–90 minutes including walking up hills and controlled descents. Add brief canter or gallop intervals (1–3 minutes) on safe footing.</li>
            <li><strong>Weeks 9–12.</strong> Longer sessions (2–3 hours) including varied terrain. The horse should be able to complete a 15–20 mile ride at a comfortable pace.</li>
            <li><strong>Weeks 13–16.</strong> Target ride distance with a built-in margin. A horse ready for a 25-mile AERC LD ride should have completed at least one 20-mile training ride in similar terrain within two weeks of competition.</li>
            <li><strong>100-mile preparation.</strong> Requires a full season of progressive conditioning plus completed qualifying rides (typically four to six 50-mile completions). Most riders work toward a 100-mile ride over multiple seasons.</li>
          </ul>

          <p>The horse&apos;s heart-rate recovery — the speed at which the resting heart rate returns after work — is the standard fitness indicator. AERC ride veterinarians use the recovery rate at vet gates as a key index of fitness. A horse that takes longer than the prescribed time to recover to the target rate is pulled from the ride.</p>

          <h2 id="breeds">Best-Fit Breeds</h2>

          <p>Endurance is dominated by the <Link href="/breeds/arabian">Arabian</Link> and Arabian crosses — the breed&apos;s historic desert-bred selection for stamina, efficient metabolism, and lean conformation makes it the prototypical endurance horse. The Tevis Cup record book is dominated by Arabian and part-Arabian winners across the past six decades. Other breeds compete successfully:</p>

          <ul>
            <li><Link href="/breeds/mustang">Mustang.</Link> The American feral-stock breed selected for soundness and toughness; appears at every level of NATRC and AERC.</li>
            <li><Link href="/breeds/morgan">Morgan.</Link> Strong all-around trail breed.</li>
            <li><Link href="/breeds/quarter-horse">Quarter Horse.</Link> Common on recreational trail and at lower-distance competitive trail.</li>
            <li><Link href="/breeds/icelandic">Icelandic Horse.</Link> Compact, sure-footed, and surprisingly strong on long-distance terrain; growing endurance presence in Europe and increasingly in North America.</li>
            <li><Link href="/breeds/missouri-fox-trotter">Missouri Fox Trotter</Link>, <Link href="/breeds/tennessee-walking-horse">Tennessee Walking Horse</Link>, and other gaited breeds. The smooth-gaited breeds reduce rider fatigue on long rides and are popular in recreational and NATRC competition.</li>
          </ul>

          <p>For recreational and competitive trail, soundness and a calm temperament matter more than breed identity. A sound, well-conditioned horse of any breed can be a good trail horse.</p>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>North American Trail Ride Conference. NATRC Rule Book and judging criteria. natrc.org.</li>
            <li>American Endurance Ride Conference. AERC Rule Book and ride manual. aerc.org.</li>
            <li>Tevis Cup / Western States Trail Foundation. Ride history (founded 1955), winners list, and rider guide. teviscup.org.</li>
            <li>Fédération Équestre Internationale. FEI Endurance Rules (current edition). fei.org/endurance.</li>
            <li>American Association of Equine Practitioners. Trail-horse soundness and hoof-care guidance. aaep.org.</li>
            <li>US Forest Service. Equestrian trail guidance and the National Forest Equestrian Trail system. fs.usda.gov.</li>
            <li>National Park Service. Equestrian trail policy and trail-system listings. nps.gov.</li>
            <li>Bureau of Land Management. BLM trail-system maps and policy. blm.gov.</li>
            <li>Leave No Trace Center for Outdoor Ethics. Equestrian-specific guidance. lnt.org.</li>
            <li>Equine Land Conservation Resource. Trail access and conservation advocacy. elcr.org.</li>
            <li>AERC Best Condition history and Hall of Fame horses. aerc.org.</li>
            <li>NATRC affiliated regional clubs. natrc.org/find-a-ride.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
