import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  FAQAccordion,
  SchemaScript,
  buildArticleSchema,
  buildHowToSchema,
  buildFAQSchema,
  combineSchemas,
  ArticleByline,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'fish-com',
  title: 'Aquarium Cycling Guide — Fishless, Fish-in, Stalled | Fish.com',
  description:
    'How to cycle a fish tank: nitrogen cycle explained, fishless vs fish-in cycling, ammonia source choices, test schedule, and stalled-cycle troubleshooting.',
  path: '/setup/aquarium-cycling-guide',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'fish-com',
  title: 'Aquarium Cycling Guide',
  description:
    'The nitrogen cycle, fishless vs fish-in cycling, ammonia sources, test schedule, stalled-cycle troubleshooting, and bottled bacteria that actually work.',
  url: 'https://fish.com/setup/aquarium-cycling-guide',
  imageUrl: '',
  authorName: 'Fish.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const howToSchema = buildHowToSchema({
  name: 'How to Cycle a Fish Tank (Fishless Method)',
  description:
    'Step-by-step fishless cycling using pure ammonia, with a test schedule and target readings for a completed cycle.',
  url: 'https://fish.com/setup/aquarium-cycling-guide',
  totalTime: 'P6W',
  steps: [
    {
      name: 'Set up the tank with dechlorinated water',
      text: 'Fill the tank, run the filter and heater, and dechlorinate the water with a conditioner that also neutralizes chloramine (Seachem Prime, API Tap Water Conditioner). Hold temperature at 78–82°F — nitrifying bacteria grow fastest in that window.',
    },
    {
      name: 'Dose ammonia to 2 ppm',
      text: 'Add pure ammonium chloride (Dr. Tim’s Ammonium Chloride, Fritz Fishless Fuel) to reach 2 ppm. Confirm with a liquid ammonia test (API NH3/NH4 or Salifert). Do not exceed 4 ppm — high ammonia stalls Nitrospira.',
    },
    {
      name: 'Add a real bottled bacteria starter',
      text: 'Add Tetra SafeStart Plus, Dr. Tim’s One & Only, or Fritz Turbo Start 700 per label instructions. These products contain live Nitrosomonas and Nitrospira and seed the colony.',
    },
    {
      name: 'Test ammonia and nitrite every 2–3 days',
      text: 'Track ammonia daily for the first two weeks. Nitrite will appear once ammonia starts dropping. Re-dose ammonia back to 2 ppm whenever it hits 0 to keep feeding the colony.',
    },
    {
      name: 'Confirm a completed cycle',
      text: 'The cycle is complete when a 2 ppm ammonia dose drops to 0 ppm ammonia AND 0 ppm nitrite within 24 hours. Nitrate should be readable (10–40 ppm).',
    },
    {
      name: 'Water change and stock slowly',
      text: 'Do a 50% water change to bring nitrate under 20 ppm. Add fish in small groups with 1–2 week gaps. Test ammonia and nitrite weekly for the first month after stocking.',
    },
  ],
})

const FAQS = [
  {
    question: 'How long does a tank take to cycle?',
    answer:
      'Fishless cycling without a seed takes 4–6 weeks. With a quality bottled bacteria starter (Tetra SafeStart Plus, Dr. Tim’s One & Only, Fritz Turbo Start 700) it runs 1–3 weeks. With a seeded sponge or media from an established cycled tank, it can complete in 24–72 hours.',
    answerText:
      'Fishless without seed: 4-6 weeks. With quality bottled bacteria: 1-3 weeks. With seeded media from an established tank: 24-72 hours.',
  },
  {
    question: 'Is fish-in cycling cruel?',
    answer:
      'It is more stressful and slower than fishless cycling, and it is harder to do without harming the fish. If you must cycle with fish, use hardy ammonia-tolerant species (zebra danio, white cloud mountain minnow), keep stocking very light, dose Seachem Prime daily to detoxify low-level ammonia and nitrite, and do daily 25% water changes whenever ammonia or nitrite climbs above 0.25 ppm.',
    answerText:
      'It is more stressful than fishless. If you must, use hardy species, dose Prime daily, and do daily 25% water changes whenever NH3 or NO2 exceed 0.25 ppm.',
  },
  {
    question: 'Does Stress Zyme cycle a tank?',
    answer:
      'No. Stress Zyme contains heterotrophic Aerobacter species, not the nitrifying Nitrosomonas and Nitrospira that perform ammonia and nitrite oxidation. It will not seed a cycle. The products that contain real nitrifiers are Tetra SafeStart Plus, Dr. Tim’s One & Only, Fritz Turbo Start 700, and Seachem Stability.',
    answerText:
      'No. Stress Zyme uses heterotrophs, not nitrifiers. The products with real Nitrosomonas/Nitrospira are SafeStart Plus, Dr. Tim One & Only, Fritz Turbo Start 700, Seachem Stability.',
  },
  {
    question: 'My cycle stalled — what happened?',
    answer:
      'The four common causes: pH crashed below 6.0 and shut nitrification down; tap water chloramine survived dechlorination and killed the colony; the filter was rinsed in tap water or completely replaced, removing the biofilm; or antibiotics or copper-based medication was added during the cycle. Identify which applies and fix the root cause before re-dosing.',
    answerText:
      'Common causes: pH below 6.0, surviving chloramine, filter media rinsed in tap water, or antibiotics added. Identify the cause before re-dosing.',
  },
  {
    question: 'What ammonia source should I use?',
    answer:
      'Pure ammonium chloride solution (Dr. Tim’s Ammonium Chloride, Fritz Fishless Fuel) is the cleanest and most dose-controllable. Janitorial-grade pure ammonia (no surfactants, no perfume) works but read the label carefully — anything that foams when shaken contains surfactants and is unsuitable. Fish food left to rot also generates ammonia but the dose is unpredictable and the decay adds organics that confuse the cycle.',
    answerText:
      'Pure ammonium chloride (Dr Tim, Fritz Fishless Fuel) is cleanest. Pure janitorial ammonia works if no surfactants. Fish-food decay is unpredictable.',
  },
  {
    question: 'What exact readings mean the tank is cycled?',
    answer:
      'A 2 ppm ammonia dose drops to 0 ppm ammonia AND 0 ppm nitrite within 24 hours. Nitrate should be present (typically 10–40 ppm after a multi-week cycle). All three measurements must hold across two consecutive doses before stocking.',
    answerText:
      'A 2 ppm ammonia dose drops to 0 ammonia AND 0 nitrite within 24 hours, with nitrate present. Must hold across two consecutive doses before stocking.',
  },
  {
    question: 'Do I need a cycled tank for goldfish, too?',
    answer:
      'Yes. The myth that goldfish are bowl-tough is the same myth as bettas in jars and predates modern aquarium husbandry. Goldfish produce more ammonia per gram than most tropical fish because of their high food intake; an uncycled goldfish tank goes toxic faster, not slower, than an uncycled tropical setup.',
    answerText:
      'Yes. Goldfish produce more ammonia than tropical fish and an uncycled goldfish tank goes toxic faster, not slower.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, howToSchema, faqSchema)

export default function CyclingGuidePage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="fish-com"
        hero={{
          title: 'Aquarium Cycling Guide — Fishless, Fish-in, Stalled',
          subtitle:
            'The nitrogen cycle is the foundation of every aquarium. Without it, fish die within days of ammonia poisoning. With it, fish live for years in stable water. This guide walks through fishless and fish-in cycling, the right ammonia sources, a six-week test schedule, and what to do when a cycle stalls.',
          category: 'Tank Setup',
          authorName: 'Fish.com Editorial',
          authorAvatar: '🐠',
          publishedAt: 'May 2025',
          readTime: '15 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Setup', href: '/setup' },
          { name: 'Cycling Guide', href: '/setup/aquarium-cycling-guide' },
        ]}
        sidebar={
          <>
            <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
              <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">
                Target Parameters
              </div>
              {[
                ['Ammonia', '0 ppm — always'],
                ['Nitrite', '0 ppm — always'],
                ['Nitrate', 'Under 20 ppm'],
                ['Cycle (no seed)', '4–6 weeks'],
                ['Cycle (bottled)', '1–3 weeks'],
                ['Cycle (seeded media)', '24–72 hours'],
                ['pH for cycling', '7.0–8.0 optimal'],
                ['Temp for cycling', '78–82°F'],
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
                { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' },
                { label: 'Nitrogen Cycle Explained', href: '/health/nitrogen-cycle-explained' },
                { label: 'Water Chemistry Guide', href: '/setup/water-chemistry-guide' },
                { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' },
                { label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="fish-com"
              title="The Weekly Tank"
              subtitle="Fishkeeping guides every Thursday."
              source="setup-cycling"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          <p className="text-lg text-brand-text-mid leading-relaxed italic mb-6">
            <strong className="not-italic">TL;DR.</strong> Cycling a fish tank means growing two bacterial colonies (Nitrosomonas and Nitrospira) that convert ammonia to nitrite to nitrate. Fishless cycling with pure ammonium chloride dosed to 2 ppm takes 4–6 weeks alone, 1–3 weeks with a real bottled bacteria starter, or 24–72 hours with seeded media. The cycle is complete when 2 ppm of ammonia drops to 0/0 within 24 hours.
          </p>

          <h2>How Does the Nitrogen Cycle Work?</h2>
          <p>
            Fish excrete ammonia (NH₃) through their gills as a metabolic waste product, and
            decaying food and plant matter add more. Ammonia is acutely toxic — even 0.25 ppm
            damages gill tissue. Two distinct groups of chemolithoautotrophic bacteria perform
            the conversion that makes a stable aquarium possible:
          </p>
          <ol>
            <li>
              <strong>Ammonia oxidizers</strong> (the Nitrosomonas group, plus some ammonia-oxidizing
              archaea in low-ammonia systems) convert ammonia (NH₃) to nitrite (NO₂⁻).
            </li>
            <li>
              <strong>Nitrite oxidizers</strong> (the Nitrospira group — the practical
              freshwater workhorse — not Nitrobacter, despite decades of label claims to the
              contrary) convert nitrite (NO₂⁻) to nitrate (NO₃⁻).
            </li>
          </ol>
          <p>
            Both groups live as biofilms on surfaces — primarily in the filter media, secondarily
            on substrate, glass, plants, and decor. The filter is where the colony concentrates
            because that is where the highest water flow meets the highest surface area. Nitrate
            (NO₃⁻) is dramatically less toxic than ammonia or nitrite and is removed by partial
            water changes and, in planted tanks, by plant uptake.
          </p>
          <p>
            Three properties of these bacteria drive every cycling rule that follows. They grow
            slowly from scratch (4–6 weeks to colonize a new filter). They need ammonia as a food
            source — leave a tank running empty for two weeks and the colony starves. And they
            are killed by chlorine, chloramine, antibiotics, and copper.
          </p>

          <h2>How Do I Do a Fishless Cycle?</h2>
          <p>
            Fishless cycling establishes the biofilter before any fish are introduced. No fish
            suffers ammonia exposure during the cycle, no water-change schedule has to keep pace
            with toxic spikes, and the keeper learns to use a test kit before there is a live
            animal depending on the reading. Fishless is the default recommendation in modern
            aquarium husbandry guidance.
          </p>

          <h3>Ammonia source choices</h3>
          <ul>
            <li>
              <strong>Pure ammonium chloride solution.</strong> Dr. Tim’s Ammonium Chloride and
              Fritz Fishless Fuel are sold pre-diluted with dosing instructions that target 2 ppm
              per ml per gallon (read the label — concentrations vary). Cleanest, most
              repeatable.
            </li>
            <li>
              <strong>Pure household ammonia.</strong> Janitorial-grade ammonia with no
              surfactants and no perfume works. Shake-test it: if it foams, it has surfactants
              and is unsuitable. Dose by drops; titrate with a test kit.
            </li>
            <li>
              <strong>Rotting fish food.</strong> A pinch of flake food allowed to decay produces
              ammonia, but the dose is unpredictable, decomposition adds dissolved organics that
              encourage heterotroph biofilm (the slime film you see on glass during cycling), and
              the rate of ammonia release does not match standard dosing curves. Workable in a
              pinch; not recommended.
            </li>
            <li>
              <strong>Ghost feeding into a stocked-empty tank.</strong> Same problems as rotting
              fish food at higher cost in time.
            </li>
          </ul>

          <h3>The protocol</h3>
          <ol>
            <li>
              Fill the tank with dechlorinated water. Use a conditioner that explicitly handles
              chloramine (Seachem Prime, API Tap Water Conditioner) — many municipal supplies
              switched from chlorine to chloramine in the last two decades and basic
              dechlorinators do not break the chloramine ammonia bond.
            </li>
            <li>Run the filter and heater. Hold 78–82°F; nitrification rate roughly doubles between 68°F and 82°F.</li>
            <li>Dose ammonia to 2 ppm. Confirm with a liquid ammonia test (API, Salifert, NTLabs).</li>
            <li>Add a real bottled bacteria starter (see below).</li>
            <li>
              Test ammonia daily, nitrite from day 5 onward. Re-dose ammonia back to 2 ppm
              whenever ammonia hits 0. Do not let ammonia exceed 4 ppm — concentrations above
              roughly 5 ppm inhibit Nitrospira.
            </li>
            <li>
              Cycle complete when a 2 ppm ammonia dose processes to 0 ppm ammonia AND 0 ppm
              nitrite within 24 hours, across two consecutive doses. Nitrate will be readable
              (typically 10–40 ppm).
            </li>
            <li>
              Do a 50% water change to drop nitrate under 20 ppm. Stock fish in small groups with
              1–2 week gaps. Test weekly for the first month after stocking.
            </li>
          </ol>

          <h2>Fish-in Cycling — When and How</h2>
          <p>
            Fish-in cycling adds hardy fish to a fresh tank and uses their ammonia output to
            establish the colony, with intensive water changes to keep concentrations
            sublethal. It is slower, more stressful for the fish, and harder to execute well
            than fishless cycling. It is the right call only when there is no alternative — a
            rescue situation, a quarantine emergency — and when the keeper is ready to do daily
            testing and water changes for four to six weeks.
          </p>
          <p>
            <strong>Acceptable starter species.</strong> Zebra danio (Danio rerio) and white
            cloud mountain minnow (Tanichthys albonubes) are the standard picks: hardy,
            ammonia-tolerant, inexpensive, and available almost everywhere. Avoid sensitive
            species (neons, cardinal tetras, discus, German blue rams, otocinclus, most
            wild-caught fish) — they do not survive a fish-in cycle. Avoid using a single
            betta as a "cycle starter"; the small tank water volume that suits a betta is the
            worst possible buffer against ammonia spikes.
          </p>
          <p>
            <strong>The protocol.</strong>
          </p>
          <ol>
            <li>Stock very lightly — one or two zebra danios per 10 gallons, no more.</li>
            <li>Dose Seachem Prime daily to detoxify low-level ammonia and nitrite (Prime binds NH3 to NH4+ for ~24 hours so the bacteria can still process it).</li>
            <li>Test ammonia and nitrite daily.</li>
            <li>If either ammonia or nitrite climbs above 0.25 ppm, do a 25% water change with temperature-matched, dechlorinated water. Re-test before deciding whether to do another.</li>
            <li>Continue until a sustained 0/0 reading holds for a week without water changes; cycle is complete.</li>
          </ol>
          <p>
            Expect 6–8 weeks rather than 4–6. The colony grows more slowly because the ammonia
            supply is intermittent and water changes periodically dilute the very food source the
            bacteria need.
          </p>

          <h2>The Six-Week Test Schedule</h2>
          <p>
            Cycling without a test kit is not cycling — it is hoping. The minimum kit is a liquid
            ammonia, nitrite, and nitrate test (API Freshwater Master Test Kit, Salifert
            individual tests, or NTLabs). Strip tests for nitrite are unreliable at the low end
            of the scale, where reliability matters most.
          </p>
          <ul>
            <li>
              <strong>Daily, weeks 1–6:</strong> ammonia and nitrite. Note time, temperature,
              ammonia reading, nitrite reading.
            </li>
            <li>
              <strong>Weekly, weeks 1–6:</strong> nitrate. Confirm it is rising. Nitrate that
              never appears means nitrite oxidation is not happening.
            </li>
            <li>
              <strong>Once at week 1 and again at week 4:</strong> pH and KH. If pH drops below
              6.5, nitrification slows; below 6.0, it can stall completely.
            </li>
          </ul>

          <h2>Why Has My Tank Cycle Stalled?</h2>
          <p>
            A "stalled" cycle is one where ammonia is processing but nitrite never resolves, or
            where both flatline mid-cycle and nothing moves for a week. Four causes account for
            the vast majority of cases.
          </p>
          <ol>
            <li>
              <strong>pH crashed.</strong> Nitrification produces hydrogen ions and consumes
              alkalinity. In low-KH (under 4 dKH) source water, pH can drop below 6.0 during
              cycling. Nitrification slows dramatically below pH 6.5 and stalls under 6.0. Fix:
              partial water change with higher-KH water, or add crushed coral or aragonite to the
              filter to buffer KH up to 4–6 dKH.
            </li>
            <li>
              <strong>Chloramine survived dechlorination.</strong> Chloramine is chlorine bonded
              to ammonia and requires a conditioner that explicitly breaks the bond (Seachem
              Prime, API Tap Water Conditioner). Older or generic "chlorine remover" products do
              not. Symptoms: bacteria die back, ammonia stops processing, no obvious cause. Fix:
              switch to Prime; redose; add a real bacteria starter.
            </li>
            <li>
              <strong>Filter biofilm was removed.</strong> Rinsing filter media under tap water
              washes the colony off (chlorine kills it) and removes the biofilm matrix. Replacing
              all filter media at once also strips the colony. Fix: rinse only in old tank water
              removed during a water change, and replace filter media gradually.
            </li>
            <li>
              <strong>Antibiotics, copper, or medications.</strong> Antibiotic treatments
              (kanamycin, erythromycin, metronidazole) and copper-based parasite treatments
              (Copper Power, Cupramine) nuke the colony. Fix: treat fish in a separate hospital
              tank and never medicate the display tank during or shortly after cycling.
            </li>
          </ol>
          <p>
            Less common but worth knowing: a sealed tank with no surface agitation can run low on
            dissolved oxygen, and nitrifying bacteria are obligate aerobes — they need oxygen to
            do the conversions. Ensure adequate surface agitation from the filter return or an
            air stone.
          </p>

          <h2>Bottled Bacteria — What Works, What Does Not</h2>
          <p>
            The bottled-bacteria category has wide quality variance. The differentiator is
            whether the product contains live Nitrosomonas and Nitrospira (the bacteria you
            need) or whether it contains heterotrophs that drive the initial slime film but do
            not perform nitrification.
          </p>
          <ul>
            <li>
              <strong>Tetra SafeStart Plus.</strong> Contains live nitrifiers. The brand-cited
              "instant cycle" claim is optimistic — most users see a 1–2 week shortened cycle,
              not 24 hours — but the product does seed a real colony. Refrigerate after
              purchase, use before the expiration date.
            </li>
            <li>
              <strong>Dr. Tim’s One & Only.</strong> Live nitrifiers, dated and refrigerated
              through the supply chain. Most reliable bottled product in independent hobbyist
              testing. Good shelf life when refrigerated.
            </li>
            <li>
              <strong>Fritz Turbo Start 700.</strong> Live nitrifiers, refrigerated supply chain,
              widely respected in the planted-tank and reef communities. Comparable performance
              to Dr. Tim’s.
            </li>
            <li>
              <strong>Seachem Stability.</strong> Stable at room temperature, contains nitrifiers
              and some heterotrophs. Slower than the refrigerated products but works; the
              advantage is shelf stability.
            </li>
            <li>
              <strong>Stress Zyme.</strong> Heterotrophs (Aerobacter, Bacillus). Does not seed a
              nitrifying cycle. The name and packaging imply cycling support; the contents do
              not deliver it.
            </li>
            <li>
              <strong>Generic "starter bacteria" without species listed.</strong> If the label
              does not name Nitrosomonas or Nitrospira, assume it is heterotroph product.
            </li>
          </ul>
          <p>
            The fastest cycling method overall is not a bottle — it is a piece of established
            filter media from a healthy, cycled tank. A used sponge, a handful of media from a
            mature canister, or a colonized bioball brings the actual bacterial colony, not a
            slurry hoping to grow into one. With seeded media a new tank can be ready to stock
            in 24–72 hours.
          </p>

          <h2>When Your Tank Is Cycled — The Exact Reads</h2>
          <p>The cycle is complete when all three of the following hold for two consecutive doses:</p>
          <ul>
            <li>
              A 2 ppm ammonia dose drops to <strong>0 ppm ammonia within 24 hours</strong>.
            </li>
            <li>
              At the same 24-hour mark, <strong>nitrite reads 0 ppm</strong>.
            </li>
            <li>
              <strong>Nitrate is present and rising</strong>, typically 10–40 ppm after several
              weeks of dosing.
            </li>
          </ul>
          <p>
            Before adding fish, do a 50% water change to bring nitrate under 20 ppm. Stock in
            small additions (one or two species at a time) with 1–2 week gaps so the colony has
            time to scale up to the new ammonia load. Test weekly for the first month after
            stocking; if either ammonia or nitrite rises, slow stocking and confirm the colony
            keeps up.
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
        <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Tank Cycling Essentials — Where to Shop</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse the gear referenced in this guide on Amazon or Chewy. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/ammonia%20nitrite%20nitrate%20test%20kit?s=setup-aquarium-cycling-guide" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/ammonia%20nitrite%20nitrate%20test%20kit?s=setup-aquarium-cycling-guide" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}
