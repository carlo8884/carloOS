import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildHowToSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Quarantine Tank Guide — Setup, Duration & New Fish Protocol | Fish.com', description: 'A quarantine tank prevents 80% of disease introductions to established aquariums. 4-6 week minimum, bare bottom, how to treat proactively, and what to watch for.', path: '/setup/quarantine-tank-guide', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Quarantine Tank Guide', description: 'Setup, minimum duration, and prophylactic treatment protocol for quarantining new fish.', url: 'https://fish.com/setup/quarantine-tank-guide', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
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
        hero={{ title: 'Quarantine Tank Guide', subtitle: 'The single most effective disease-prevention measure in fishkeeping — and the most commonly skipped. A quarantine tank intercepts sick fish before they introduce disease to an established aquarium. Four to six weeks catches most diseases with clinical latency. One disease introduction to an established planted or reef tank can cost more in treatment and fish loss than a lifetime of quarantine supplies.', category: 'Tank Setup', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Setup', href: '/setup' }, { name: 'Quarantine Tank', href: '/setup/quarantine-tank-guide' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">QT Essentials</div>
            {['10-20 gallon bare bottom tank', 'Seeded sponge filter (from main tank)', 'Heater + thermometer', 'Single hide — PVC pipe or clay pot', 'Light cover or mesh lid', '4-6 week minimum observation'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid flex gap-2">
                <span className="text-green-600 font-bold">✓</span>{s}
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'Ich Treatment', href: '/health/ich-treatment' }, { label: 'Columnaris', href: '/health/columnaris' }]} />
          <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="setup-quarantine" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Why Most Aquarists Skip It — And Why They Regret It</h2>
          <p>The logic for skipping quarantine: the fish looks healthy, setting up a separate tank is effort, and most fish survive the introduction. This logic holds until it doesn't — until a new fish introduces ich to a reef tank and wipes out $2,000 in coral and fish, or a single columnaris-infected livebearer kills an entire community tank over 72 hours, or a new discus introduces Capillaria to a carefully maintained discus colony. The cost of one disease introduction reliably exceeds the cost of quarantine infrastructure by a significant margin.</p>
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

          <h2>Duration — Why 4 Weeks Is the Minimum</h2>
          <p>The 4-week minimum is based on the incubation and latency periods of the most common fish diseases. Ich (Ichthyophthirius): can be subclinical for 2–3 weeks as the parasite completes multiple cycles before enough trophonts are attached to cause visible white spots. Velvet (Oodinium): shorter latency but invisible early — the flashlight test daily catches it before clinical signs appear. Lymphocystis: slow-growing viral infection that may not be visible for 3–4 weeks. Bacterial infections: most become apparent within 1–2 weeks. The 4-week window catches essentially all of these.</p>
          <p>Six weeks is better for wild-caught fish from unfamiliar regions, discus (which carry internal parasites that emerge slowly), and any fish from a source where disease history is unknown. Two weeks is not sufficient for any situation — skip quarantine entirely rather than use a 2-week period that provides false assurance without capturing the diseases that appear in weeks 3–4.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
