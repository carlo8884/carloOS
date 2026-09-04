import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, TableOfContents, AffiliateDisclosure, ArticleSourcesList, CalloutBox, FAQAccordion, ShopCtas, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import type { FAQItem } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Nitrogenous Waste and the Nitrogen Cycle in Aquariums — UF/IFAS Extension FA-16.", url: "https://edis.ifas.ufl.edu/publication/FA016", publisher: "UF/IFAS Extension" },
  { label: "Timmons, M.B. and Ebeling, J.M. Recirculating Aquaculture, 3rd ed. Ithaca Publishing, 2013.", publisher: "Ithaca Publishing" },
  { label: "Francis-Floyd, R. Ammonia Toxicosis in Fish — UF/IFAS Extension FA-36.", url: "https://edis.ifas.ufl.edu/publication/FA036", publisher: "UF/IFAS Extension" },
  { label: "Russo, R.C. and Thurston, R.V. Toxicity of ammonia, nitrite, and nitrate to fishes. Aquaculture and Water Quality, 1991.", publisher: "World Aquaculture Society" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'The Nitrogen Cycle Explained — Why New Tanks Fail | Fish.com', description: 'The nitrogen cycle is why most new aquariums fail. Complete guide: what it is, how to cycle a tank before adding fish, fishless cycling protocol.', path: '/health/nitrogen-cycle-explained', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'The Nitrogen Cycle Explained', description: 'What it is, how to cycle a tank, and how to know when cycling is complete.', url: 'https://fish.com/health/nitrogen-cycle-explained', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})

const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How do I know when my tank is fully cycled?',
    answer:
      'Add ammonia to 2 ppm and re-test 24 hours later. If both ammonia and nitrite read 0 ppm and nitrate has risen, the bacterial colonies are large enough to process a full ammonia load within a day and the cycle is complete. A single 0 reading on its own is not enough — it can be a temporary dip rather than an established colony, so wait for the 24-hour confirmation before adding fish.',
    answerText:
      'Add ammonia to 2 ppm and re-test 24 hours later. If both ammonia and nitrite read 0 ppm and nitrate has risen, the bacterial colonies are large enough to process a full ammonia load within a day and the cycle is complete. A single 0 reading on its own is not enough — it can be a temporary dip rather than an established colony, so wait for the 24-hour confirmation before adding fish.',
  },
  {
    question: 'How long does it take to cycle a new aquarium?',
    answer:
      'Without a bacterial supplement, a fishless cycle typically takes 4–8 weeks, with warmer water (78–82°F) speeding colonization. Adding a bottled bacteria supplement typically shortens this to 2–4 weeks. Seeding the new filter with media, substrate, or decorations from an already-cycled tank is the fastest route — often 1–2 weeks — because the established bacteria transfer with the media.',
    answerText:
      'Without a bacterial supplement, a fishless cycle typically takes 4–8 weeks, with warmer water (78–82°F) speeding colonization. Adding a bottled bacteria supplement typically shortens this to 2–4 weeks. Seeding the new filter with media, substrate, or decorations from an already-cycled tank is the fastest route — often 1–2 weeks — because the established bacteria transfer with the media.',
  },
  {
    question: 'Can I cycle a tank with fish already in it?',
    answer:
      'Fishless cycling is recommended because it grows the bacterial colonies without exposing fish to toxic ammonia and nitrite. Cycling with fish present means they are living in water that contains the same compounds that cause "new tank syndrome" — ammonia is harmful from roughly 0.25 ppm over time and nitrite is toxic at low concentrations too. If fish are already in the tank, the priority is keeping ammonia and nitrite low through frequent testing and water changes until the cycle establishes.',
    answerText:
      'Fishless cycling is recommended because it grows the bacterial colonies without exposing fish to toxic ammonia and nitrite. Cycling with fish present means they are living in water that contains the same compounds that cause "new tank syndrome" — ammonia is harmful from roughly 0.25 ppm over time and nitrite is toxic at low concentrations too. If fish are already in the tank, the priority is keeping ammonia and nitrite low through frequent testing and water changes until the cycle establishes.',
  },
  {
    question: 'Why did my established tank suddenly show ammonia again?',
    answer:
      'This is usually a "mini-cycle" — a partial crash of the bacterial colony, which lives mostly in the filter media. Common triggers are rinsing filter media in chlorinated tap water, replacing all filter media at once, dosing antibiotics in the main tank, a long power outage that stops oxygenated flow for more than 4–6 hours, or adding too many fish at once so their combined waste outpaces the existing colony. Test ammonia and nitrite, do water changes to keep them low, and avoid the trigger while the colony recovers.',
    answerText:
      'This is usually a "mini-cycle" — a partial crash of the bacterial colony, which lives mostly in the filter media. Common triggers are rinsing filter media in chlorinated tap water, replacing all filter media at once, dosing antibiotics in the main tank, a long power outage that stops oxygenated flow for more than 4–6 hours, or adding too many fish at once so their combined waste outpaces the existing colony. Test ammonia and nitrite, do water changes to keep them low, and avoid the trigger while the colony recovers.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQ_ITEMS.map((f) => ({
    question: f.question,
    answer: f.answerText ?? (typeof f.answer === 'string' ? f.answer : ''),
  })),
})

const schema = combineSchemas(articleSchema, faqSchema)

export default function NitrogenCyclePage() {
  return (
    <ArticleLayout
      siteId="fish-com"
      hero={{ title: 'The Nitrogen Cycle Explained', subtitle: '"New tank syndrome" kills more fish than disease. It is entirely preventable — if you understand what the nitrogen cycle is and why cycling a tank before adding fish is not optional.', category: 'Fishkeeping Fundamentals', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '11 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Nitrogen Cycle', href: '/health/nitrogen-cycle-explained' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "New Tank Syndrome", href: "/health/new-tank-syndrome", category: "Fish Health" }, { title: "Aquarium Cycling Guide", href: "/setup/aquarium-cycling-guide", category: "Tank Setup" }, { title: "Water Change Calculator", href: "/tools/water-change-calculator", category: "Tools" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={<>
        <TableOfContents items={[{ label: 'Quick Answer', href: '#tldr' }, { label: 'What the Cycle Is', href: '#what' }, { label: 'The Three Stages', href: '#stages' }, { label: 'Fishless Cycling Protocol', href: '#cycling' }, { label: 'How Long It Takes', href: '#duration' }, { label: 'How to Know It\'s Done', href: '#done' }, { label: 'Mini-Cycles', href: '#mini-cycles' }, { label: 'FAQ', href: '#faq' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Water Chemistry Guide', href: '/water-parameters' }, { label: 'Water Change Calculator', href: '/tools/water-change-calculator' }, { label: 'Best Water Test Kits', href: '/reviews/best-water-test-kits' }, { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="nitrogen-cycle" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the 0/0 confirmation plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Fishless-cycling checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the fishless-cycle order — dechlorinate, dose a measured
            ammonia source, test ammonia, nitrite, and nitrate every 2–3
            days, and wait for the 24-hour 0/0 confirmation before adding
            fish. Educational husbandry, not a diagnosis or a cure. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Fishless-cycling checklist"
            subtitle="Email the dechlorinate, ammonia-dose, and 0/0 confirmation order. No spam."
            ctaText="Email my fishless-cycling checklist"
            source="health-nitrogen-cycle-under-hero"
          />
        </div>

        <div id="tldr">
          <CalloutBox variant="info" title="The short answer">
            <p>The nitrogen cycle is the biological process that converts toxic fish waste into a far less toxic form: <strong>ammonia → nitrite → nitrate</strong>. Two groups of beneficial bacteria do the work, and they take roughly <strong>4–8 weeks</strong> to establish in a new tank (2–4 weeks with a bottled bacteria supplement, 1–2 weeks with seeded media from an established tank).</p>
            <p style={{ marginBottom: 0 }}><strong>Cycle a tank before adding fish.</strong> The tank is safe only when an ammonia dose of 2 ppm is fully processed within 24 hours — ammonia and nitrite both reading 0 ppm while nitrate rises. Adding fish before that point is the main cause of "new tank syndrome."</p>
          </CalloutBox>
        </div>

        <h2 id="what">What the Nitrogen Cycle Is</h2>
        <p>Fish produce ammonia — through their gills, waste, and urine — continuously. Ammonia is acutely toxic: fish exposed to ammonia develop gill damage, immune suppression, neurological harm, and death at concentrations as low as 0.25 ppm over time, and 2+ ppm causes rapid mortality.</p>
        <p>The nitrogen cycle is the biological process by which ammonia is converted — first to nitrite (also toxic), then to nitrate (far less toxic at moderate levels) — by two groups of beneficial bacteria that colonize filter media and substrate. Without these bacteria, ammonia accumulates and kills fish. With them, a tank becomes self-regulating.</p>
        <p>The process: <strong>Fish waste → Ammonia (NH₃) → Nitrite (NO₂⁻) → Nitrate (NO₃⁻)</strong></p>
        <p>Nitrobacter and Nitrospira bacteria handle the second conversion. Nitrosomonas handle the first. These bacteria are not present in tap water — they must be grown in your tank. This growth takes 4–8 weeks. During this time, the tank is unsafe for fish.</p>

        <h2 id="stages">The Three Stages</h2>
        <ol>
          <li><strong>Ammonia spike (week 1–2):</strong> Ammonia rises. No nitrite yet — bacteria haven't established. This is the most dangerous phase for fish.</li>
          <li><strong>Nitrite spike (week 2–4):</strong> Ammonia drops as Nitrosomonas establish and begin converting it. Nitrite rises sharply. Both ammonia and nitrite are now present — still highly toxic.</li>
          <li><strong>Nitrate appears, ammonia and nitrite fall to 0 (week 4–8):</strong> Nitrobacter/Nitrospira establish and begin converting nitrite to nitrate. Both ammonia and nitrite fall to 0 ppm. Nitrate rises. Cycling is complete.</li>
        </ol>
        <p>The tank is safe for fish only when ammonia reads 0, nitrite reads 0, and nitrate is rising — this means all three populations have established and the cycle is self-sustaining.</p>

        <figure style={{ overflowX: 'auto', margin: '24px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <caption style={{ captionSide: 'bottom', fontSize: '12px', color: '#4a6573', textAlign: 'left', paddingTop: '8px' }}>Typical readings through a fishless cycle. Timing varies with temperature, bacterial supplement, and starting bioload.</caption>
            <thead>
              <tr style={{ background: '#f7fbfd', textAlign: 'left' }}>
                <th style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Stage</th>
                <th style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Typical window</th>
                <th style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Ammonia (NH₃)</th>
                <th style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Nitrite (NO₂⁻)</th>
                <th style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Nitrate (NO₃⁻)</th>
                <th style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Safe for fish?</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}><strong>1. Ammonia spike</strong></td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Week 1–2</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Rising</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>0</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>0</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>No</td>
              </tr>
              <tr style={{ background: '#fafdff' }}>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}><strong>2. Nitrite spike</strong></td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Week 2–4</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Falling</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Rising</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>0–low</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>No</td>
              </tr>
              <tr>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}><strong>3. Cycle complete</strong></td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Week 4–8</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>0</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>0</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Rising</td>
                <td style={{ border: '1px solid #d4e5ee', padding: '8px 10px' }}>Yes — after a 24h confirmation test</td>
              </tr>
            </tbody>
          </table>
        </figure>

        <h2 id="cycling">Fishless Cycling Protocol</h2>
        <p>Fishless cycling grows the bacterial colonies without exposing fish to toxic water. The recommended method:</p>
        <ol>
          <li><strong>Set up the tank completely:</strong> Fill with dechlorinated water, run filter, set temperature. Seachem Prime removes chlorine/chloramine without harming beneficial bacteria.</li>
          <li><strong>Add an ammonia source:</strong> Pure ammonia (unscented — check label for no additives, no surfactants) dosed to reach 2–4 ppm. Or use fish food (add a small amount every 2 days — it decomposes and releases ammonia). Dr. Tims Ammonium Chloride is a clean, reliable source.</li>
          <li><strong>Add beneficial bacteria:</strong> Seachem Stability, Dr. Tim&apos;s One & Only, or Fritz Zyme 7 — these contain live Nitrospira and Nitrosomonas and accelerate cycling from 4–8 weeks to 2–4 weeks. Not strictly required (bacteria colonize naturally) but meaningfully faster.</li>
          <li><strong>Test every 2–3 days:</strong> API Master Test Kit for ammonia, nitrite, nitrate. Log readings.</li>
          <li><strong>Re-dose ammonia:</strong> When ammonia drops to 0–0.5 ppm, add more to keep bacteria fed. Starving the bacteria mid-cycle slows the process significantly.</li>
          <li><strong>Wait for the 0-0-positive reading:</strong> When ammonia and nitrite both read 0 within 24 hours of adding 2 ppm ammonia, the cycle is complete.</li>
        </ol>

        <h2 id="duration">How Long It Takes</h2>
        <ul>
          <li><strong>Without bacterial supplement:</strong> 4–8 weeks typical. Warm water (78–82°F) speeds colonization, since the nitrifying bacteria are temperature-sensitive and slow markedly below the low 70s°F.</li>
          <li><strong>With bacterial supplement (Seachem Stability, Fritz Zyme 7):</strong> 2–4 weeks typical. These products seed the tank with the same bacteria you would otherwise wait to grow, so they shorten — rather than skip — the colony-building phase.</li>
          <li><strong>With seeded media from an established tank:</strong> 1–2 weeks. The fastest method — get filter media, substrate, or decorations from a cycled tank and transfer to yours. The bacteria transfer with the media. Keep seeded media wet and move it quickly; the colony begins to die once it loses oxygenated flow.</li>
        </ul>
        <p>Several factors push the timeline toward the slow end of each range: cold water, low pH (the bacteria slow in acidic conditions), an undersized or intermittently running filter, and letting the ammonia source drop to 0 for days, which starves the colony mid-build. Stable warmth, steady filtration, and keeping the bacteria fed are what move a cycle toward the fast end. A surface-level ammonia reading of 0 reached early in week 2–3 is usually the first stage stalling, not the cycle finishing — only the 24-hour confirmation test settles it.</p>

        <h2 id="done">How to Know Cycling Is Complete</h2>
        <p>The definitive test: add ammonia to 2 ppm on day 1. Test again at 24 hours. If both ammonia AND nitrite read 0, and nitrate has risen — the cycle is complete. The bacteria are present in sufficient numbers to process the ammonia load within 24 hours.</p>
        <p>Do not add fish based on ammonia reading 0 alone — wait for the 24-hour confirmation test. One 0 reading could be a temporary dip rather than established colony population.</p>

        <h2 id="mini-cycles">Mini-Cycles — What Disrupts an Established Cycle</h2>
        <p>Bacterial colonies live primarily in filter media. Things that kill them and cause a mini-cycle:</p>
        <ul>
          <li><strong>Rinsing filter media in tap water:</strong> Chlorine kills beneficial bacteria. Always rinse filter media in old tank water removed during a water change — never tap water.</li>
          <li><strong>Replacing all filter media at once:</strong> Replace only one third of filter media at a time, on a rotating schedule. This preserves colony while removing debris.</li>
          <li><strong>Antibiotics in the main tank:</strong> Kill beneficial bacteria along with pathogenic bacteria. Treat sick fish in a hospital tank.</li>
          <li><strong>Extended power outage:</strong> Bacteria need oxygenated water flow to survive. A filter off for more than 4–6 hours can crash the colony — test ammonia when power returns.</li>
          <li><strong>Adding too many fish too quickly:</strong> The ammonia produced by a large new population overwhelms the existing colony. Add fish gradually — 20–25% of intended stocking at a time, 2 weeks apart.</li>
        </ul>

        <p>To watch a cycle in progress you need a kit that reads ammonia, nitrite, and nitrate — see our breakdown of the <Link href="/reviews/best-water-test-kits">best aquarium water test kits</Link>. For target ranges on every parameter once the tank is running, use the <Link href="/water-parameters">water parameters reference</Link>. Once the tank is stocked, the <Link href="/tools/water-change-calculator">water change calculator</Link> turns weekly percent into gallons to remove. If a tank that was running fine suddenly shows fish in distress, the <Link href="/health/new-tank-syndrome">new tank syndrome guide</Link> and the <Link href="/health/fish-disease-guide">fish disease guide</Link> help separate a chemistry crash from an actual pathogen. Setting up from scratch? Work through the full <Link href="/setup/aquarium-cycling-guide">aquarium cycling guide</Link> alongside this page.</p>

        <h2 id="faq">Frequently Asked Questions</h2>
        <FAQAccordion items={FAQ_ITEMS} />

        {/* Money path — live amazon-brand search hops (fishless-cycle kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop a fishless-cycling kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            A liquid master kit is how you see ammonia, nitrite, and nitrate
            through the three stages and confirm the 24-hour 0/0 test before
            adding fish. Seachem Prime (or another dechlorinator) is how you
            fill the tank without chlorine killing the colony. A measured
            ammonium-chloride source is how you run a fishless cycle. Bottled
            nitrifiers shorten the wait; a seeded sponge filter is the
            fastest media transfer from an established tank. Same test-kit
            hop used on the{' '}
            <Link
              href="/reviews/best-water-test-kits"
              className="text-brand-primary no-underline hover:underline"
            >
              water-test kit review
            </Link>
            {' '}and the{' '}
            <Link
              href="/water-parameters"
              className="text-brand-primary no-underline hover:underline"
            >
              water-parameters hub
            </Link>
            . Same Prime hop used on the{' '}
            <Link
              href="/tools/water-change-calculator"
              className="text-brand-primary no-underline hover:underline"
            >
              water-change calculator
            </Link>
            {' '}and the{' '}
            <Link href="/setup" className="text-brand-primary no-underline hover:underline">
              aquarium setup guide
            </Link>
            . Same ammonium-chloride, bottled-bacteria, and sponge-filter
            hops used on the{' '}
            <Link
              href="/tools/aquarium-cycling-estimator"
              className="text-brand-primary no-underline hover:underline"
            >
              cycling estimator
            </Link>
            . Same sponge-filter hop used on the{' '}
            <Link href="/health/gill-flukes" className="text-brand-primary no-underline hover:underline">
              gill-flukes guide
            </Link>
            . They are not a ranked product list, they are not medications,
            and they do not treat, reverse, or cure new-tank syndrome.
            Fish.com earns a commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=health-nitrogen-cycle"
              amazonLabel="Browse API Master Test Kit on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/seachem+prime+water+conditioner?s=health-nitrogen-cycle"
              amazonLabel="Browse dechlorinator / Seachem Prime on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dr+tims+ammonium+chloride?s=health-nitrogen-cycle"
              amazonLabel="Browse fishless-cycling ammonia on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/tetra+safestart+plus?s=health-nitrogen-cycle"
              amazonLabel="Browse bottled bacteria starter on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sponge+filter?s=health-nitrogen-cycle"
              amazonLabel="Browse sponge filters on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/setup/aquarium-cycling-guide" className="text-brand-primary hover:underline">
              Aquarium Cycling Guide
            </Link>
            {' · '}
            <Link href="/health/new-tank-syndrome" className="text-brand-primary hover:underline">
              New Tank Syndrome
            </Link>
            {' · '}
            <Link href="/tools/aquarium-cycling-estimator" className="text-brand-primary hover:underline">
              Cycling Estimator
            </Link>
            {' · '}
            <Link href="/reviews/best-water-test-kits" className="text-brand-primary hover:underline">
              Best Water Test Kits
            </Link>
            {' · '}
            <Link href="/water-parameters" className="text-brand-primary hover:underline">
              Water Parameters
            </Link>
          </p>
        </div>
        <ArticleSourcesList sources={SOURCES} />

      </div>
      </ArticleLayout>
  )
}
