import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  FAQAccordion,
  SchemaScript,
  buildArticleSchema,
  buildFAQSchema,
  combineSchemas,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Betta Fish Care Guide — Carnivore Diet, Flare Training | Fish.com',
  description:
    'Bettas are obligate carnivores that need a heated, filtered 5+ gallon tank. Flare training, biotope replication, ammonia tolerance, and care mistakes.',
  path: '/species/betta-fish',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Betta Fish Care Guide',
  description:
    'Carnivore diet, flare training, biotope setup, ammonia tolerance, and common care mistakes for Betta splendens.',
  url: 'https://fish.com/species/betta-fish',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const FAQS = [
  {
    question: 'Can a betta really live in a bowl?',
    answer:
      'No. Unheated bowls under about 5 gallons are below the species’ minimum welfare needs. Bettas come from warm (78–82°F) tropical waters in Thailand and the Malay Peninsula, and they need a filter to keep ammonia at 0 ppm. The "bowl myth" comes from misreading wild habitat — shallow does not mean tiny, and rice paddies are rain-flushed weekly during monsoon.',
    answerText:
      'No. Unheated bowls under about 5 gallons are below the species minimum welfare needs. Bettas come from warm (78-82F) tropical waters and need a filter to keep ammonia at 0 ppm. Shallow wild habitat does not mean tiny.',
  },
  {
    question: 'What is the absolute minimum tank size?',
    answer:
      'Five US gallons heated and filtered is the working minimum. Ten gallons is the better baseline because temperature and ammonia are more stable with more water volume, and there is room for plants, leaf litter, and a sponge filter without crowding the swim space.',
    answerText:
      'Five US gallons heated and filtered is the minimum. Ten gallons is better because temperature and ammonia are more stable.',
  },
  {
    question: 'How often should I let my betta flare at a mirror?',
    answer:
      'Brief sessions of up to about 5 minutes, no more than twice per day, with rest days in between. Flaring is a costly stress response — elevated cortisol, rapid gill movement, and fin extension under load. A short flare is enrichment; chronic mirror exposure suppresses appetite and immune function.',
    answerText:
      'Brief sessions up to 5 minutes, no more than twice per day, with rest days. Chronic mirror exposure suppresses appetite and immune function.',
  },
  {
    question: 'Are floating betta logs and hammocks worth it?',
    answer:
      'Yes for halfmoon, doubletail, and other heavy-finned varieties. Long fins create drag, and bettas breathe air at the surface through a labyrinth organ. A floating resting surface near the top reduces the energy cost of staying near the air interface.',
    answerText:
      'Yes for long-finned bettas. They breathe air at the surface through a labyrinth organ, and a floating resting surface near the top reduces swimming effort.',
  },
  {
    question: 'My betta’s water is brown — is that bad?',
    answer:
      'Tannin staining from Indian almond leaves, alder cones, or driftwood is intentional in a biotope setup. The brown color is humic and tannic acids leached from plant material. They mildly lower pH, have antifungal properties documented in ornamental fish literature, and replicate the blackwater conditions of wild Betta splendens habitat.',
    answerText:
      'Tannin staining from almond leaves, alder cones, or driftwood is intentional. Tannins mildly lower pH and have antifungal properties documented in fish literature.',
  },
  {
    question: 'Why is my betta’s color fading?',
    answer:
      'Fading usually points to one of: cold water (below ~74°F), a carbohydrate-heavy diet (flake food or grain-filled "betta bites"), chronic stress from tankmates, or early disease. Check temperature first, then diet, then water parameters (ammonia, nitrite must read 0).',
    answerText:
      'Fading usually means cold water, carbohydrate-heavy diet, chronic stress, or early disease. Check temperature first, then diet, then ammonia/nitrite (must read 0).',
  },
  {
    question: 'Can female bettas live together?',
    answer:
      'Sometimes — in a 20+ gallon heavily planted tank with at least five females, a "sorority" can be stable, but aggression remains unpredictable. Individual personality varies and a single hyper-aggressive female can break a sorority. Always have a backup tank ready.',
    answerText:
      'Sometimes in 20+ gallon heavily planted tanks with at least five females. Aggression is unpredictable. Always have a backup tank ready.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function BettaFishPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="fish-com"
        hero={{
          title: 'Betta Fish Care Guide',
          subtitle:
            'Betta splendens — the Siamese fighting fish is one of the most commonly purchased aquarium fish and one of the most commonly mistreated. The bowls, vases, and tiny containers sold for bettas do not constitute adequate housing. A heated, filtered tank of at least 5 gallons is the welfare minimum.',
          category: 'Species Guide',
          authorName: 'Fish.com Editorial',
          authorAvatar: '🐠',
          publishedAt: 'May 2025',
          readTime: '14 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Species', href: '/species' },
          { name: 'Betta Fish', href: '/species/betta-fish' },
        ]}
        sidebar={
          <>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Quick Stats
              </div>
              {[
                ['Scientific name', 'Betta splendens'],
                ['Min tank', '5 gallons — 10 is better'],
                ['Temperature', '76–82°F — heater required'],
                ['pH', '6.5–7.5'],
                ['Diet', 'Obligate carnivore — protein-first'],
                ['Filter', 'Gentle flow — sponge filter ideal'],
                ['Males together', 'Never — fatal fights'],
                ['Lifespan', '3–5 years with proper care'],
              ].map(([k, v]) => (
                <div
                  key={k}
                  className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0"
                >
                  <span className="text-brand-text-light">{k}</span>
                  <span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
                </div>
              ))}
            </div>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Betta Tank Mates', href: '/species/betta-fish-tank-mates' },
                { label: 'Aquarium Cycling Guide', href: '/setup/aquarium-cycling-guide' },
                { label: 'Best Nano Tanks', href: '/reviews/best-nano-tanks' },
                { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="fish-com"
              title="The Weekly Tank"
              subtitle="Species spotlights every Thursday."
              source="species-betta"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2>The Bowl Myth — Why Bettas Die Young</h2>
          <p>
            The betta in a small unheated bowl or vase is not thriving; it is surviving, slowly, in
            conditions that compromise immune function and lifespan. The misconception originates
            from wild bettas living in shallow rice paddies and ditches across Thailand and the
            Malay Peninsula. That description is technically true and routinely misread: those
            wild environments are large in surface area, warm year-round, and subject to monsoon
            rain that provides constant dilution. A 1-gallon unheated bowl in an air-conditioned
            US living room provides none of that. Room temperature in most US homes (68–72°F)
            sits below the optimal range for a tropical labyrinth fish and depresses immune
            function enough to invite columnaris and fin rot.
          </p>
          <p>
            The minimum correct housing is a 5-gallon tank with a gentle filter (sponge filter or
            low-flow internal filter — long fins are damaged by strong currents) and a heater
            holding 76–82°F. A 10-gallon tank gives the keeper room to plant heavily, stabilize
            parameters, and add enrichment. Bettas in appropriately sized, heated, filtered,
            planted tanks live 3–5 years and display vivid colors and active, curious behavior.
            The same fish in a bowl rarely reaches two.
          </p>

          <h2>Obligate Carnivores — What That Actually Means</h2>
          <p>
            Bettas are obligate carnivores. In the wild, FishBase records their diet as insects,
            insect larvae (mosquito larvae are a heavy seasonal staple), zooplankton, and small
            crustaceans. Their gut is short, their stomach is small (roughly the size of their
            eye), and their digestive enzymes are tuned for animal protein, not for cellulose or
            grain starch. That biology has three direct implications for feeding.
          </p>
          <p>
            <strong>Protein first, named animal source first.</strong> A correct staple pellet
            lists a named animal protein (whole krill, black soldier fly larvae, salmon, herring)
            as the first ingredient, runs 40–55% protein, and avoids wheat, corn, soy, and rice as
            primary ingredients. Northfin Betta Bits, Fluval Bug Bites Betta, New Life Spectrum
            Betta Formula, and Hikari Vibra Bites all meet that bar. Generic tropical "flake food"
            and grain-filled "betta bites" do not — the fish will eat them, but long-term
            keepers report fading color, bloating from carbohydrate fermentation, and shortened
            lifespan.
          </p>
          <p>
            <strong>Frozen and live food are not optional luxuries.</strong> Frozen bloodworms,
            frozen daphnia, frozen mysis shrimp, and live blackworms supply the moisture, varied
            amino acid profile, and behavioral enrichment that a dry pellet cannot. Three to four
            frozen feedings per week, in addition to the staple pellet, is a reasonable schedule.
            Daphnia has mild laxative properties documented in koi and ornamental fish husbandry
            literature and is the standard intervention for the suspected constipation that
            precedes most swim-bladder presentations in bettas.
          </p>
          <p>
            <strong>What not to feed.</strong> Skip vegetable wafers and algae rounds (those are
            for plecos and otocinclus, not for carnivores); skip generic flake food (too much
            cellulose binder, too little animal protein); skip freeze-dried bloodworms as a
            staple (they expand on rehydration in the gut and are implicated in bloat). Tropical
            community flake fed long-term is the single most common dietary mistake in betta
            keeping.
          </p>
          <p>
            <strong>Portion and frequency.</strong> Two small meals per day, with one fast day
            per week, is the standard regimen. "Small" means 2–3 pellets per meal for most adult
            bettas — about the volume of one of the fish’s own eyes. Overfeeding is the
            second most common dietary mistake; the uneaten food rots in the substrate and drives
            ammonia spikes that the small water volume of a typical betta tank cannot buffer.
          </p>

          <h2>Flare Training — Real Enrichment, Real Limits</h2>
          <p>
            A short, controlled mirror session is genuine enrichment. The fish performs the full
            display sequence — operculum flare, fin extension, lateral broadside posture — and
            then returns to baseline. The behavior is intrinsically motivated and bettas in
            barren tanks visibly perk up when novel stimuli are introduced.
          </p>
          <p>
            Flaring is also a stress response. The flare display is the fish’s
            "I am about to fight" posture, with the metabolic load that implies: elevated
            cortisol, accelerated gill ventilation, sustained muscular load on the fin rays.
            Brief exposure is fine; sustained exposure is not. Aquarium behavior research and
            ornamental fish welfare guidance (including the AVMA Guidelines for the Welfare of
            Fish) treat chronic stressor exposure as a welfare problem, and a betta that lives
            permanently next to its own reflection in a curved bowl is in that category.
          </p>
          <p>
            <strong>A working protocol.</strong> Show the mirror for up to about 5 minutes per
            session, no more than twice per day, and not every day. Stop the session early if the
            fish breaks off and hides, if gill movement becomes labored, or if it stops eating
            after sessions. Pair mirror sessions with target training (a chopstick with a pellet
            stuck to the end works well) to give the fish a second, lower-stress form of
            engagement.
          </p>
          <p>
            Avoid the common mistake of leaving a small handheld mirror taped to the outside of
            the tank "for stimulation." That is not enrichment; it is a sustained territorial
            challenge the fish cannot resolve.
          </p>

          <h2>Biotope Replication — Why Tannins, Leaves, and Dim Light Help</h2>
          <p>
            Wild Betta splendens live in slow, shaded, leaf-littered water. The aquarium
            equivalent is straightforward and inexpensive:
          </p>
          <ul>
            <li>
              <strong>Slow flow.</strong> A sponge filter on a low-output air pump, or a
              hang-on-back with the flow baffled by a pre-filter sponge, replicates the still
              water bettas evolved for. Strong canister output across the surface tears at long
              fins and exhausts the fish.
            </li>
            <li>
              <strong>Leaf litter.</strong> Indian almond leaves (Terminalia catappa), oak leaves,
              and magnolia leaves on the substrate decompose slowly, release tannins, and host
              the microfauna that supplement the diet of fry and adults alike. One or two almond
              leaves per 5 gallons, replaced as they break down, is the working dose.
            </li>
            <li>
              <strong>Tannin-stained water.</strong> The amber-brown color is humic and tannic
              acids leached from almond leaves, alder cones, and driftwood. Tannins mildly lower
              pH, have antifungal and mildly antibacterial properties documented in ornamental
              fish literature, and reduce reflective glare from tank walls. Bettas color up more
              intensely in stained water than in clear water.
            </li>
            <li>
              <strong>Dim lighting.</strong> A canopy of floating plants (frogbit, dwarf water
              lettuce, salvinia) breaks up overhead light and provides cover for surface
              breathing. A low-output LED on a 6–8 hour photoperiod is plenty.
            </li>
            <li>
              <strong>Soft substrate, broad-leaved plants.</strong> Fine sand or sand-grade
              gravel with anubias, Java fern, and cryptocoryne species gives the fish places to
              rest. Bettas drape themselves on broad leaves — a silk plant works in a pinch,
              but live plants improve water quality at the same time.
            </li>
          </ul>

          <h2>Ammonia Tolerance — Why "Bettas Are Hardy" Is the Wrong Lesson</h2>
          <p>
            Bettas tolerate higher ammonia and lower dissolved oxygen than most aquarium fish.
            The mechanism is real: their labyrinth organ lets them gulp atmospheric air at the
            surface, which decouples them from dissolved oxygen the way most teleosts cannot
            decouple. That tolerance is regularly mistaken for preference, and the cup-on-a-shelf
            betta retail model leans hard on the mistake.
          </p>
          <p>
            Tolerating an environment is not the same as thriving in it. Bettas in cycled,
            heated, planted tanks live two to three times longer than bettas in unfiltered cups
            — and longevity is the relevant welfare measure, not "did it survive the week."
            Ammonia at any detectable level damages gill epithelium; nitrite blocks oxygen
            transport in blood; both compound the chronic-stress baseline that comes from being
            cold. The target for a betta tank is the same as the target for any other freshwater
            tank: ammonia 0 ppm, nitrite 0 ppm, nitrate under 20 ppm, temperature 76–82°F. There
            is no welfare-defensible reading in which "the fish is alive" justifies an unfiltered
            jar.
          </p>

          <h2>Common Care Mistakes</h2>
          <ul>
            <li>
              <strong>Under-tanked.</strong> Anything under 5 gallons is below welfare baseline.
              Anything unfiltered is below welfare baseline regardless of volume.
            </li>
            <li>
              <strong>No heater.</strong> A 25–50W preset or adjustable heater is non-optional.
              "Room temperature" in most US homes is too cold for a tropical fish.
            </li>
            <li>
              <strong>Wrong tankmates.</strong> Fin-nippers (tiger barbs, serpae tetras), other
              males of the same species, and flowing-finned lookalikes (guppy males) are all
              non-starters. Bottom dwellers (corydoras, kuhli loaches, otocinclus in 10+ gallons)
              and small peaceful schoolers (ember tetras, chili rasboras) are the safer column.
            </li>
            <li>
              <strong>Vegetable feeding.</strong> Algae wafers, blanched zucchini, and "balanced
              omnivore" flakes are wrong for an obligate carnivore. Feed protein.
            </li>
            <li>
              <strong>No filtration.</strong> Without a biofilter the ammonia produced by a
              feeding fish has nowhere to go. The fish breathes its own waste. Sponge filters
              cost under $15 and run on an air pump.
            </li>
            <li>
              <strong>Sharp decor.</strong> Plastic plants with stiff edges, rough resin caves,
              and unfinished pottery tear long fins. Test with the pantyhose method: if it snags
              nylon, it will snag a halfmoon’s caudal.
            </li>
            <li>
              <strong>Skipped water changes.</strong> 25% weekly minimum on a 5–10 gallon tank.
              Nitrate climbs faster in small volumes than the test kit suggests.
            </li>
          </ul>

          <h2>Fin Types and Their Care Implications</h2>
          <p>
            <strong>Veil tail:</strong> Most common pet store form. Long, flowing, asymmetrical
            caudal. Prone to fin biting and fin rot; needs gentle flow.
          </p>
          <p>
            <strong>Halfmoon and doubletail:</strong> 180-degree caudal spread. Show-line types.
            The large fins are heavy — surface resting spots and minimal flow are essential.
          </p>
          <p>
            <strong>Crowntail:</strong> Spiky, webbing-reduced fins. Less prone to tears than
            halfmoon but the rays catch on rough decor.
          </p>
          <p>
            <strong>Plakat:</strong> Short-finned, closer to the wild phenotype. Faster, more
            agile, less prone to fin damage; often more behaviorally aggressive. Many experienced
            keepers prefer plakats for the natural behavior and the lower fin-care burden.
          </p>

          <h2>Frequently Asked Questions</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({
              question: f.question,
              answer: f.answer,
              answerText: f.answerText,
            }))}
            includeSchema={false}
            allowMultiple
          />
        </div>
      </ArticleLayout>
    </>
  )
}
