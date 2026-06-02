import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  FAQAccordion,
  CalloutBox,
  ArticleByline,
  DropCap,
  ReviewCard,
  ScoreMethodology,
  AffiliateDisclosure,
  CrossPortfolioCard,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Exercise & Enrichment — Out-of-Cage Time | Ferret.com',
  description:
    'Ferrets need 4+ hours of out-of-cage time daily. Ferret-proofing, tunnels, dig boxes, ball pits, food puzzles, and toy rotation.',
  path: '/care/exercise-and-enrichment',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Exercise and Enrichment',
  description:
    'Exercise and behavioural enrichment for domestic ferrets — out-of-cage time, ferret-proofing, enrichment categories (tunnels, dig boxes, food puzzles), and the welfare-and-disease link.',
  url: 'https://ferret.com/care/exercise-and-enrichment',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://ferret.com/' },
    { name: 'Ferret Care', url: 'https://ferret.com/care/exercise-and-enrichment' },
    { name: 'Exercise & Enrichment', url: 'https://ferret.com/care/exercise-and-enrichment' },
  ],
})

const FAQS = [
  {
    question: 'Is 4 hours of out-of-cage time really the minimum?',
    answer:
      "Yes — that is the working floor across American Ferret Association owner education and the exotic-pet welfare literature. Six to eight hours is closer to ideal. Less than four hours is associated with cage stereotypies (bar biting, repetitive pacing), behavioural frustration, and a less well-adjusted adult ferret. The time does not have to be continuous; ferrets are crepuscular and respond well to morning and evening blocks.",
  },
  {
    question: 'Does environmental enrichment actually reduce adrenal disease risk?',
    answer:
      "The evidence is suggestive but not proven. Some published case-control work in the exotic-pet literature has found lower adrenal-disease rates in ferrets housed with more enrichment and natural photoperiods, but the causal mechanism is uncertain and confounders (breeder source, neuter timing) are hard to control for. Treat it as a plausible secondary benefit of good husbandry, not a reliable preventive measure.",
  },
  {
    question: 'What is the single most dangerous thing in a ferret-proofed room?',
    answer:
      "Recliners. A ferret asleep inside the mechanism of a reclining chair or sofa is crushed when someone sits or reclines. This is the most frequently cited preventable ferret fatality in keeper communities. Either remove the recliner from the room, lock it in the open position, or block ferret access to the room entirely. No exceptions.",
  },
  {
    question: 'My ferret won\'t play with new toys — what should I do?',
    answer:
      "Rotate, don't replace. Many ferrets imprint strongly on familiar items and treat genuinely new objects with suspicion. Try presenting the new toy near a favourite item, putting it inside a tunnel, or letting your scent transfer onto it overnight. If a ferret consistently ignores all toys, look for the broader pattern — under-stimulated, ill, or simply needing a play partner ferret rather than more objects.",
  },
  {
    question: 'Can I use a playpen instead of ferret-proofing a room?',
    answer:
      "For short play sessions, yes — a tall ferret-specific playpen (the kind with a top to prevent climbing-out escape) is fine. For full daily out-of-cage time, no: a playpen is too small to provide the running and exploration that drives the behavioural benefits. Use the playpen for supplementary short sessions, not as the primary out-of-cage environment.",
  },
  {
    question: 'How much do enrichment supplies cost?',
    answer:
      "The starter list — a tunnel or two, a dig box, a few rotated toys, a food puzzle — runs roughly $40-80. The ongoing cost is small because durable plastic and rubber toys last for years. The bigger cost is time: ferret-proofing a room is a 1-2 hour project per room, and supervising out-of-cage time is the major daily commitment.",
  },
]
const faqSchema = buildFAQSchema({ questions: FAQS })

const combined = combineSchemas(articleSchema, breadcrumbSchema, faqSchema)

export default function FerretExerciseEnrichmentPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        contentType="care"
        hero={{
          title: 'Ferret Exercise and Enrichment',
          subtitle:
            'Ferrets are not cage animals. A ferret that lives 24 hours a day in its cage is an under-stimulated, behaviourally frustrated, and ultimately less healthy ferret. Four hours of out-of-cage time per day is the working minimum across the exotic-pet welfare literature; six to eight hours is closer to ideal. The enrichment side of that time matters as much as the duration.',
          category: 'Ferret Care',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'May 2026',
          readTime: '13 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Ferret Care', href: '/care' },
          { name: 'Exercise & Enrichment', href: '/care/exercise-and-enrichment' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Out-of-Cage Time', href: '#out-of-cage' },
                { label: 'Ferret-Proofing', href: '#proofing' },
                { label: 'Enrichment Categories', href: '#categories' },
                { label: 'Toy Rotation', href: '#rotation' },
                { label: 'Multi-Ferret vs Single', href: '#multi' },
                { label: 'Welfare-Disease Link', href: '#welfare' },
                { label: 'Setup Costs', href: '#costs' },
                { label: 'Enrichment Picks', href: '#picks' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Cage Setup', href: '/care/cage-setup' },
                { label: 'Training & Bonding', href: '/behavior/training-and-bonding' },
                { label: 'Adrenal Disease', href: '/health/adrenal-disease' },
              ]}
            />
            <CrossPortfolioCard currentSite="ferret-com" contentType="care" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Care Notes"
              subtitle="Evidence-based ferret husbandry, monthly."
              source="care-exercise-enrichment"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-05-28"
            updatedAt="2026-05-28"
          />

          <DropCap>
            Watch a ferret in a properly enriched environment for ten minutes
            and the case makes itself: tunnel circuits at full speed, dig-box
            excavation that produces visible joy, the absurd bottle-brush
            tail and sideways war-dance hop that signals a ferret who is
            actively having fun. None of this happens in a cage. The cage is
            the bedroom. The enriched room is the house.
          </DropCap>

          <h2 id="tldr">TL;DR</h2>
          <p>
            A minimum of four hours of supervised out-of-cage time per day in
            a ferret-proofed space is the working floor across the AFA owner
            literature and the exotic-pet welfare references. Enrichment
            categories — tunnels, dig boxes, ball pits, food puzzles, and a
            rotated toy supply — should be combined rather than chosen
            between. Ferret-proofing a room is non-negotiable: recliners,
            soft rubber, gap-block at floor level, and toxic houseplants are
            the highest-risk items. Multi-ferret households need less
            human-supplied enrichment because much of the play happens
            ferret-to-ferret.
          </p>

          <h2 id="out-of-cage">Out-of-Cage Time — Non-Negotiable</h2>
          <p>
            Ferrets sleep 14-18 hours a day across 6-10 cycles, and their
            waking hours are intensely active. Confined to a cage during
            those waking periods, ferrets develop a recognizable cluster of
            stereotypies and welfare problems — cage chewing, bar biting,
            repetitive pacing, frustration vocalizations, and an under-stimulated
            adult personality that struggles to engage even when finally
            released.
          </p>
          <p>
            The standard minimum across the American Ferret Association
            owner-education materials and the exotic-pet veterinary
            welfare literature: <strong>4 hours of supervised out-of-cage
            time per day in a ferret-proofed space</strong>. Six to eight
            hours is closer to ideal. Less than four hours produces the
            stereotypies above with high reliability.
          </p>
          <p>
            The time does not have to be continuous. Ferrets are crepuscular —
            most active at dawn and dusk — and a 2-3 hour morning session
            plus a 2-3 hour evening session aligns with the natural activity
            pattern and fits most household schedules. What matters is total
            duration, environmental quality, and consistency across days.
          </p>

          <CalloutBox variant="tip" title="The order-of-magnitude comparison">
            <p>
              Four to eight hours of supervised play time per day is the
              same order of magnitude as a dog needs. Ferret ownership is
              not a low-commitment alternative to a dog — it is a
              different-shape commitment to roughly the same volume of
              time. The keepers who report the best outcomes plan their
              schedule around the ferret block, not the other way around.
            </p>
          </CalloutBox>

          <h2 id="proofing">Ferret-Proofing the Room</h2>
          <p>
            Ferret-proofing differs from puppy-proofing on three points: a
            ferret will squeeze through any opening its skull fits, it
            investigates by mouthing soft objects, and it climbs anything
            with texture. The hazards differ accordingly.
          </p>

          <h3>Critical hazards</h3>
          <ul>
            <li>
              <strong>Recliners and reclining sofas.</strong> The most
              frequently cited preventable ferret fatality. A ferret asleep
              inside the mechanism is crushed when someone sits or reclines.
              Either remove the chair from the room, lock it in the open
              position, or block ferret access. No exceptions.
            </li>
            <li>
              <strong>Gaps wider than one inch at floor level.</strong>
              Behind and under appliances especially — refrigerators, ovens,
              dishwashers, washing machines. Ferrets that crawl into appliance
              interiors and contact heating elements or moving parts are a
              recurring exotic-mammal emergency presentation. Use sealed
              foam board, wood, or hardware cloth.
            </li>
            <li>
              <strong>Soft rubber and foam.</strong> Shoe soles, rubber
              bands, foam earplugs, foam packing material, soft erasers,
              piping insulation, mouse-pad rubber. GI obstruction from
              rubber and foam is the single most-cited surgical presentation
              in pet ferret case reports across the <em>Journal of Exotic
              Pet Medicine</em> and the <em>Veterinary Clinics of North
              America: Exotic Animal Practice</em>. The surgical fix is
              successful most of the time; preventing the ingestion is
              cheaper and safer.
            </li>
            <li>
              <strong>Carpet edges and baseboards.</strong> Ferrets dig at
              loose carpet edges; the latex rubber backing is an ingestion
              hazard. Tack down loose edges or block access.
            </li>
            <li>
              <strong>Houseplants.</strong> Lilies, pothos, philodendron,
              dieffenbachia, sago palm, oleander are the common toxic
              offenders. When in doubt, out of reach.
            </li>
            <li>
              <strong>Electrical cords.</strong> Cord-chewing risk varies
              by individual ferret. Bundle, cover, or route away from
              accessible areas as a default.
            </li>
            <li>
              <strong>Toilets with the lid up</strong> (drowning risk in
              kits and senior ferrets), unattended human food, open exterior
              doors, and any chemical that a curious ferret could ingest.
            </li>
          </ul>

          <CalloutBox variant="warning" title="Heat is silent">
            <p>
              Ferrets are highly heat-sensitive. Ambient temperatures above
              roughly 80°F (27°C) are stressful; above 85°F (29°C) is
              acutely dangerous, especially without shade and water access.
              A play room without air conditioning in summer can be a hidden
              hazard, particularly in windowed rooms with afternoon sun. Hot
              ferrets present with flat-out posture, open-mouth breathing,
              and rapid deterioration; this is an emergency.
            </p>
          </CalloutBox>

          <h2 id="categories">Enrichment Categories</h2>
          <p>
            The mistake new owners make is buying ten toys of the same
            category — ten plush squeaky toys, or ten plastic balls. The
            better approach is to cover the major drive categories with a
            handful of well-chosen items in each, then rotate them across
            the week.
          </p>

          <h3>Tunnels — highest value per dollar</h3>
          <p>
            Tunnel-running is one of the most reliable ferret play behaviours.
            Accordion-style flexible tunnels, fleece tube tunnels, dryer
            vent tubes (cleaned), and concrete-form cardboard tubes from a
            hardware store all work. Most ferrets will spend the largest
            single chunk of play time on tunnel circuits — connecting two
            or three tunnels into a longer course amplifies the effect
            substantially.
          </p>

          <h3>Dig boxes</h3>
          <p>
            The dig drive is strong and is best satisfied in a designated
            container rather than a houseplant or carpet edge. A medium
            storage tote (with the lid off) filled with one of: washed
            river rocks, ferret-safe plastic balls, dry rice (vacuum after
            sessions), shredded paper, or smooth ceramic pebbles. Avoid
            sand (respiratory) and clay-based materials (ingestion risk).
            A single well-stocked dig box redirects most carpet-and-houseplant
            problems.
          </p>

          <h3>Ball pits</h3>
          <p>
            Variant on the dig box — a tote or kiddie pool filled with
            hollow plastic balls (the cheap ones sold for kid ball pits).
            Ferrets dive through and emerge head-first like prairie dogs.
            Lower-effort to set up than rice or rocks; produces equivalent
            enrichment value for many ferrets.
          </p>

          <h3>Food puzzles</h3>
          <p>
            Hide-the-treat puzzles tap the foraging drive. Low-effort
            options: small pieces of high-protein treat hidden inside an
            egg carton, a snuffle mat (the kind sold for dogs), or a
            commercial puzzle feeder. More advanced: a treat hidden inside
            a clear plastic container with holes drilled at varying sizes.
            Always use high-protein, low-sugar treats — sugary treats
            stress the pancreatic beta cells in ferrets (see{' '}
            <a href="/health/insulinoma">insulinoma</a>).
          </p>

          <h3>Climbing and elevation</h3>
          <p>
            Ferrets are vertical animals. Cat trees with hidey-hole platforms,
            multi-level play towers, and ramps to elevated platforms all
            satisfy the climb drive. Watch fall heights: ferrets are not
            cats and do not always land cleanly. Two-foot drops are fine;
            four-foot drops onto hard surfaces are a fracture risk,
            particularly in older animals.
          </p>

          <h3>Wrestling and chase toys</h3>
          <p>
            Hard rubber toys (ferret-specific, not soft latex), kong-style
            puzzle balls, and durable plastic items that hold up to chewing
            without producing rubber or foam fragments. Owner-driven chase
            and wrestling games — using a fleece tug toy or a wand toy
            similar to a cat wand — are valuable supplementary play.
          </p>

          <h3>What to avoid</h3>
          <ul>
            <li>Soft latex rubber, soft foam, foam balls, soft erasers — GI obstruction risk.</li>
            <li>Plush toys with small parts (stuffed eyes, sewn-on accessories) — ingestion risk.</li>
            <li>String, ribbon, or yarn toys — linear foreign-body obstruction risk.</li>
            <li>Anything sold for cats that contains catnip-style stuffing — ferrets do not benefit and may chew the stuffing.</li>
          </ul>

          <h2 id="rotation">Toy Rotation</h2>
          <p>
            Novelty matters more than quantity. Ten toys, three in the cage
            and three in the play area at a time, rotated weekly, produces
            more sustained interest than twenty toys all out simultaneously.
            Most ferrets fixate on whatever is freshly returned from
            rotation, treating it as a new item.
          </p>
          <p>
            A practical weekly rhythm: Sunday rotation, pulling the
            previous week&apos;s items and replacing them with the next
            three. Wash fabric items in the wash (high heat in the dryer
            kills mites and bacteria), wipe plastic and rubber items with
            mild soap.
          </p>

          <h2 id="multi">Multi-Ferret vs Single Ferret</h2>
          <p>
            A pair or small group of ferrets generates much of its own
            enrichment through play, mutual grooming, and joint exploration.
            The same enrichment categories apply, but the per-ferret human
            time-investment requirement is lower — a multi-ferret household
            still needs the 4+ hour daily out-of-cage block, but the
            keepers can be doing other things in the room while the ferrets
            entertain each other.
          </p>
          <p>
            A single ferret needs materially more direct human play time —
            closer to the four-hour minimum being actively interactive rather
            than passive supervision. This is the practical reason most
            exotic-pet references recommend at least two ferrets: it is
            kinder to the ferret and easier on the keeper.
          </p>

          <h2 id="welfare">The Welfare-and-Disease Link</h2>
          <p>
            Beyond the obvious welfare argument, several published lines of
            inquiry in the exotic-pet literature have asked whether
            environmental enrichment and natural light cycles are protective
            against the high-prevalence adrenal disease (see our{' '}
            <a href="/health/adrenal-disease">adrenal disease page</a>) seen
            in US-source ferrets. The hypothesis — that disrupted
            hypothalamic-pituitary signaling driven by indoor housing, lack
            of natural photoperiod, and behavioural under-stimulation
            contributes to the gonadotropin dysregulation underlying adrenal
            disease — appears across the <em>Journal of Exotic Pet
            Medicine</em> and in case-control work referenced in Quesenberry
            &amp; Carpenter.
          </p>
          <p>
            The evidence is suggestive rather than definitive. Confounding
            factors — breeder source, neuter timing, diet, age at sampling —
            are hard to control for in observational work. The honest
            interpretation: provide rich enrichment and a natural light cycle
            because the welfare case alone is compelling, and treat any
            disease-prevention benefit as a plausible secondary positive
            rather than a reliable preventive measure.
          </p>

          <CalloutBox variant="evidence" title="Welfare framework references">
            <p>
              The behavioural welfare framework used here draws on
              Quesenberry &amp; Carpenter, <em>Ferrets, Rabbits, and Rodents:
              Clinical Medicine and Surgery</em> (Saunders/Elsevier), the
              <em> Journal of Exotic Pet Medicine</em> behavioural literature,
              and American Ferret Association (AFA) owner-education materials.
              The four-hour out-of-cage minimum is the figure most consistently
              cited across these sources.
            </p>
          </CalloutBox>

          <h2 id="costs">Setup Costs and Timeline</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <thead>
                <tr className="bg-brand-surface border-b border-brand-border">
                  <th className="text-left p-3 font-semibold">Item</th>
                  <th className="text-left p-3 font-semibold">Approx cost (US)</th>
                  <th className="text-left p-3 font-semibold">Lifespan</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Tunnel set (3-tunnel starter)</td>
                  <td className="p-3">$15-30</td>
                  <td className="p-3">2-5 years</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Dig box + fill</td>
                  <td className="p-3">$10-20</td>
                  <td className="p-3">Tote: years; fill: rotate weekly</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Ball pit (tote + balls)</td>
                  <td className="p-3">$15-30</td>
                  <td className="p-3">Several years</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Hard rubber toy assortment</td>
                  <td className="p-3">$10-25</td>
                  <td className="p-3">Years</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Snuffle mat / puzzle feeder</td>
                  <td className="p-3">$8-20</td>
                  <td className="p-3">Years</td>
                </tr>
                <tr className="border-b border-brand-border">
                  <td className="p-3 font-medium">Ferret-proofing supplies (foam board, hardware cloth)</td>
                  <td className="p-3">$20-50 one-time</td>
                  <td className="p-3">Indefinite</td>
                </tr>
                <tr>
                  <td className="p-3 font-medium">Total starter</td>
                  <td className="p-3">~$80-175</td>
                  <td className="p-3">Most items last years</td>
                </tr>
              </tbody>
            </table>
          </div>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <h2 id="picks">Enrichment Picks</h2>
          <p>
            Two starter purchases that anchor most ferret enrichment setups — a tunnel set and a dig box. This is a documented-spec comparison drawing on widely-stocked products and the durable-material constraints discussed above; this page does not claim hands-on testing.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="marshall-pop-n-play"
            badge="Tunnel Default"
            badgeEmoji="🚇"
            name="Marshall Pop-N-Play Tunnel Set"
            subtitle="Pop-up fabric tunnel system, ferret-sized, machine washable"
            score={8.6}
            winner
            description={
              <p>The reference ferret tunnel product in US pet retail. Pop-up fabric construction stores flat, sets up in seconds, and connects to itself for multi-tunnel circuits. Sized for ferret bodies (a tunnel that fits a small dog is too wide to be interesting to a ferret). Machine washable, which matters for the dust and dander that accumulates in any enrichment item that spends time on a floor.</p>
            }
            specs={[
              { label: 'Construction', value: 'Pop-up fabric with internal wire' },
              { label: 'Sizing', value: 'Ferret-appropriate diameter', highlight: 'good' },
              { label: 'Connectivity', value: 'Multi-tunnel chain' },
              { label: 'Washable', value: 'Yes', highlight: 'good' },
              { label: 'Storage', value: 'Folds flat' },
            ]}
            pros={['Highest enrichment value per dollar in most ferret households', 'Pop-up + foldable for storage', 'Connects to itself for circuits', 'Machine washable']}
            cons={['Fabric wears in heavy-chewer households (6–18 months for a chronic chewer)', 'Internal wire is a defect risk if exposed — inspect periodically']}
            price="$15–30"
            ctaText="Find Marshall Pop-N-Play tunnels"
            ctaHref="/go/marshall/pop-n-play-tunnel?s=care-exercise-and-enrichment"
            ctaAffiliateProgram="marshall"
            ctaAffiliateProduct="pop-n-play-tunnel"
          />
          <ReviewCard
            id="dig-box-supplies"
            badge="Dig Box"
            badgeEmoji="🪨"
            name="Storage-Tote Dig Box + Safe Fill"
            subtitle="Plastic tote plus washed river rocks, ferret-safe plastic balls, or rice"
            score={8.0}
            description={
              <p>The dig drive is one of the strongest behavioural patterns in ferrets and is best satisfied in a designated container rather than a houseplant. Any clear plastic storage tote with a low-cut entry is the structural part; the fill is the variable — washed river rocks, ferret-safe plastic balls, or uncooked rice are all standard. Avoid soil, sand, or shredded paper (ingestion and inhalation risk). Rotate the fill weekly for novelty.</p>
            }
            specs={[
              { label: 'Container', value: 'Clear plastic storage tote with low-cut entry' },
              { label: 'Fill options', value: 'River rocks, plastic balls, uncooked rice', highlight: 'good' },
              { label: 'Rotation cadence', value: 'Weekly fill swap' },
            ]}
            pros={['Satisfies the strongest natural drive in a controlled way', 'Cheap and durable container', 'Fill is rotatable for novelty without buying new toys']}
            cons={['Fill spills are inevitable — keep near a vacuum-friendly surface', 'Rice fill needs replacement when it cracks down to dust']}
            price="$10–25 starter"
            ctaText="Find ferret-safe ball-pit fill"
            ctaHref="/go/chewy-brand/small-pet-ball-pit-balls"
            ctaAffiliateProgram="chewy-brand"
            ctaAffiliateProduct="dig-box-balls"
          />

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS} includeSchema={false} />

          <h2 id="sources">Sources</h2>
          <ul>
            <li>
              Quesenberry KE, Carpenter JW (eds.). <em>Ferrets, Rabbits, and
              Rodents: Clinical Medicine and Surgery.</em> 4th ed.
              Saunders/Elsevier. The behaviour and welfare chapters address
              enrichment and housing standards.
            </li>
            <li>
              <em>Journal of Exotic Pet Medicine</em>, behavioural welfare
              studies on housing and enrichment in domestic ferrets,
              including the environmental-enrichment-and-adrenal-disease
              research line.
            </li>
            <li>
              <em>Veterinary Clinics of North America: Exotic Animal
              Practice</em>, multiple issues addressing ferret husbandry and
              welfare assessment.
            </li>
            <li>
              American Ferret Association (AFA) — owner-education materials
              on cage sizing, out-of-cage time, and enrichment supply
              recommendations.
            </li>
            <li>
              Association of Exotic Mammal Veterinarians (AEMV) — practitioner
              resources on welfare assessment in exotic mammals.
            </li>
          </ul>
          <p className="text-sm text-brand-text-light">
            This page is general husbandry information for ferret owners.
            It is not individualized veterinary advice. Ferret-proofing
            decisions should be made conservatively — when uncertain about a
            potential hazard, default to removing the object or blocking
            access. The cost of a single foreign-body surgery exceeds the
            cost of every enrichment item on this page combined.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
