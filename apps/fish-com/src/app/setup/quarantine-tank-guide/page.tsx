import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks , AffiliateDisclosure} from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Quarantine Tank Guide — Setup, Duration | Fish.com', description: 'A quarantine tank prevents 80% of disease introductions to established aquariums. 4-6 week minimum, bare bottom, how to treat proactively.', path: '/setup/quarantine-tank-guide', type: 'article' })
const SOURCES = [
  {
    label: "Ichthyophthirius multifiliis (Ich): Biology, Pathology, and Control",
    url: "https://edis.ifas.ufl.edu/publication/FA026",
    publisher: "University of Florida IFAS Extension",
  },
  {
    label: "Fish Disease Diagnosis and Treatment — Quarantine Procedures",
    url: "https://srac.tamu.edu/serveFactSheet/473",
    publisher: "Southern Regional Aquaculture Center (SRAC)",
  },
  {
    label: "AVMA Guidelines for the Humane Slaughter of Animals — Aquatic Species",
    url: "https://www.avma.org/sites/default/files/2020-01/2020-Euthanasia-Final-1-17-20.pdf",
    publisher: "American Veterinary Medical Association (AVMA)",
  },
  {
    label: "Praziquantel for Monogenean Fluke Infections in Ornamental Fish",
    url: "https://www.sciencedirect.com/science/article/pii/S0044848617303769",
    publisher: "Aquaculture (peer-reviewed)",
  },
  {
    label: "Biosecurity Practices for Aquarium Fish: Quarantine and Disease Prevention",
    url: "https://edis.ifas.ufl.edu/publication/FA032",
    publisher: "University of Florida IFAS Extension",
  },
]
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Quarantine Tank Guide', description: 'Setup, minimum duration, and prophylactic treatment protocol for quarantining new fish.', url: 'https://fish.com/setup/quarantine-tank-guide', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' ,
  citation: SOURCES,
})
const howTo = buildHowToSchema({ name: 'How to Set Up a Quarantine Tank', description: 'Step-by-step quarantine tank setup for new fish.', url: 'https://fish.com/setup/quarantine-tank-guide', totalTime: 'P1D', steps: [
  { name: 'Choose a dedicated container', text: 'A 10-20 gallon bare glass tank is ideal — sponge filter for biological filtration, a heater, a thermometer, and a single hide. No substrate. No decorations beyond one place to hide. Bare bottom tanks are easier to clean, easier to monitor for feces and abnormal waste, and allow full visibility of the fish.' },
  { name: 'Run a seeded sponge filter', text: 'The most important element: a sponge filter seeded from your established display tank. Run a second sponge filter in your main tank at all times — when you need quarantine, move it to the QT. This eliminates the "QT tank needs to cycle" problem. Alternatively, seed with established tank water and biological media.' },
  { name: 'Match water parameters', text: 'Match temperature, pH, and hardness as closely as possible to the fish\'s requirements and ideally to your display tank. Stress from parameter mismatch compounds immune suppression from shipping stress — minimize every stressor during quarantine.' },
  { name: 'Observe for a minimum of 4 weeks', text: 'The 4-6 week minimum catches the vast majority of diseases with incubation periods shorter than display onset. Ich, velvet, columnaris, and most bacterial infections manifest within this window. Observe daily: eating normally, fins held erect, no spots or lesions, no flashing.' },
  { name: 'Consider prophylactic treatment', text: 'Many experienced fishkeepers treat all new fish prophylactically for external parasites (praziquantel for flukes) and internal parasites (metronidazole + fenbendazole) during quarantine. This is particularly important for wild-caught fish. Discuss with your fish veterinarian or knowledgeable aquarium professional.' },
]})
const combined = combineSchemas(schema, howTo)


export default function QuarantineGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="fish-com"
        hero={{ title: 'Quarantine Tank Guide', subtitle: 'The single most effective disease-prevention measure in fishkeeping — and the most commonly skipped. A quarantine tank intercepts sick fish before they introduce disease to an established aquarium. Four to six weeks catches most diseases with clinical latency. One disease introduction to an established planted or reef tank can cost more in treatment and fish loss than a lifetime of quarantine supplies.', category: 'Tank Setup', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '9 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Quarantine Tank', href: '/setup/quarantine-tank-guide' }]}
        relatedLinks={[{ title: 'Tank Setup Hub', href: '/setup', category: 'Tank Setup' }, { title: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters', category: 'Reviews' }, { title: 'Best Aquarium Heaters', href: '/reviews/best-aquarium-heaters', category: 'Reviews' }, { title: 'Fish Disease Guide', href: '/health/fish-disease-guide', category: 'Fish Health' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">QT Essentials</div>
            {['10-20 gallon bare bottom tank', 'Seeded sponge filter (from main tank)', 'Heater + thermometer', 'Single hide — PVC pipe or clay pot', 'Light cover or mesh lid', '4-6 week minimum observation'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2">
                <span className="text-green-600 font-bold">✓</span>{s}
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Best Aquarium Filters', href: '/reviews/best-aquarium-filters' }, { label: 'Best Aquarium Heaters', href: '/reviews/best-aquarium-heaters' }, { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'Ich Treatment', href: '/health/ich-treatment' }]} />
          <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="setup-quarantine" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          <h2>Why Most Aquarists Skip It — And Why They Regret It</h2>
          <DropCap>The logic for skipping quarantine: the fish looks healthy, setting up a separate tank is effort, and most fish survive the introduction. This logic holds until it doesn't — until a new fish introduces ich to a reef tank and wipes out $2,000 in coral and fish, or a single columnaris-infected livebearer kills an entire community tank over 72 hours, or a new discus introduces Capillaria to a carefully maintained discus colony. The cost of one disease introduction reliably exceeds the cost of quarantine infrastructure by a significant margin.</DropCap>
          <p>The psychological barrier is effort and space. The practical solution: a single 10-gallon tank stored in a closet or garage, a sponge filter always running in the main tank to seed it, a heater and thermometer. Total space: 18 inches × 10 inches. Total ongoing effort when not in use: approximately zero. The infrastructure cost ($30–60) amortizes over every subsequent fish purchase for years.</p>

          <h2>The Seeded Sponge Filter — Solving the Cycle Problem</h2>
          <p>The most common objection to quarantine: "The QT tank would need to cycle, and that takes weeks." The solution is the seeded sponge filter — a second sponge filter always running in the display tank, colonized with the same beneficial bacteria as the established filtration. When quarantine is needed, move this sponge to the QT tank. It brings an established bacterial colony and the QT tank is immediately ready to process waste without an ammonia spike.</p>
          <p>Running a permanent second sponge in the display tank has no downside — it adds redundant biological filtration capacity and serves as an emergency filter if the main filter ever fails. It is standard practice among experienced fishkeepers for exactly this reason.</p>

          <h2>What to Watch For — Observation Protocol</h2>
          <p>Daily observation during quarantine: is the fish eating? (Most diseases suppress appetite before other signs appear — a fish that refuses food after the first day of acclimation warrants close attention.) Are fins held erect and moving freely? (Clamped fins indicate stress or early disease.) Any spots, lesions, or unusual patches on the body? (Use a flashlight to check for velvet's gold dust.) Is the fish scratching against the sides or substrate (flashing)? (Early sign of external parasites or skin irritation.) Are gills moving at a normal rate? (Rapid gill movement suggests oxygen depletion, gill parasites, or early respiratory disease.)</p>
          <p>Record observations daily — changes that seem minor day to day become clear patterns over a week of records.</p>

          <h2>Prophylactic Treatment — The Proactive Approach</h2>
          <p>Some experienced marine fishkeepers treat all new fish prophylactically during quarantine rather than waiting for symptoms. The marine protocol has become fairly standardized: praziquantel (treats flukes — external and gill parasites extremely common in wild-caught marines) plus chloroquine phosphate or copper (treats external parasites including Amyloodinium and Cryptocaryon) applied during the first 30 days of quarantine regardless of visible signs. For freshwater fish, prophylactic deworming (fenbendazole for internal worms) is particularly useful for wild-caught species or those from uncontrolled breeding environments.</p>
          <p>Prophylactic treatment is not universally agreed upon — some fishkeepers prefer to observe and treat only if signs develop. For reef fish and other expensive livestock, the proactive approach provides greater assurance.</p>

          <CalloutBox variant="tip" title="Run a permanent second sponge filter">
            Keep a second sponge filter running in your display tank at all times. When quarantine is needed, that pre-colonized sponge moves to the QT and provides instant biological filtration — no cycling delay, no ammonia spike. It also serves as a backup filter if your main one ever fails. This single habit removes the most-cited objection to keeping a QT.
          </CalloutBox>

          <h2>Duration — Why 4 Weeks Is the Minimum</h2>
          <p>The 4-week minimum is based on the incubation and latency periods of the most common fish diseases. Ich (Ichthyophthirius): can be subclinical for 2–3 weeks as the parasite completes multiple cycles before enough trophonts are attached to cause visible white spots. Velvet (Oodinium): shorter latency but invisible early — the flashlight test daily catches it before clinical signs appear. Lymphocystis: slow-growing viral infection that may not be visible for 3–4 weeks. Bacterial infections: most become apparent within 1–2 weeks. The 4-week window catches essentially all of these.</p>
          <p>Six weeks is better for wild-caught fish from unfamiliar regions, discus (which carry internal parasites that emerge slowly), and any fish from a source where disease history is unknown. Two weeks is not sufficient for any situation — skip quarantine entirely rather than use a 2-week period that provides false assurance without capturing the diseases that appear in weeks 3–4.</p>
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Quarantine Tank Essentials — Where to Shop</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse the gear referenced in this guide on Amazon or Chewy. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/quarantine%20tank%20kit%20aquarium?s=setup-quarantine-tank-guide" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/quarantine%20tank%20kit%20aquarium?s=setup-quarantine-tank-guide" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
          <ArticleSourcesList sources={SOURCES} />
        </div>

        </div>
      </ArticleLayout>
    </>
  )
}
