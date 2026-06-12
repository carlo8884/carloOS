import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Monogenean Flukes (Gyrodactylus, Dactylogyrus) — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/monogenean-flukes-in-fish", publisher: "Merck Vet Manual" },
  { label: "Shinn, A.P. et al. Fish parasites — pathobiology and protection. CABI, 2012.", publisher: "CABI" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Use of Chemicals in Aquaculture in the United States — UF/IFAS Extension FA-54.", url: "https://edis.ifas.ufl.edu/publication/FA054", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Gill Flukes | Fish.com', description: 'Flukes (Gyrodactylus, Dactylogyrus) cause flashing, rapid breathing, and clamped fins. Praziquantel is the treatment', path: '/health/gill-flukes', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Gill Flukes and Body Flukes in Fish', description: 'Signs, praziquantel treatment, and quarantine protocol for Gyrodactylus and Dactylogyrus flukes.', url: 'https://fish.com/health/gill-flukes', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z', speakable: true })
export default function FlukesPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Gill Flukes and Body Flukes', subtitle: 'Monogenean flukes — microscopic flatworm parasites in the genus Gyrodactylus (body flukes) and Dactylogyrus (gill flukes) — are among the most common parasites in aquarium fish. They are invisible to the naked eye and cause signs indistinguishable from several other conditions. Praziquantel is the treatment and is also used prophylactically during quarantine.', category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Gill Flukes', href: '/health/gill-flukes' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Medicating Aquarium Fish", href: "/health/medicating-aquarium-fish", category: "Fish Health" }, { title: "Fish Lice & Anchor Worm", href: "/health/fish-lice-anchor-worm", category: "Fish Health" }, { title: "Quarantine Tank Guide", href: "/setup/quarantine-tank-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Gyrodactylus vs Dactylogyrus</div>
          <div className="py-2 border-b border-brand-border">
            <div className="text-xs font-bold text-brand-dark">Gyrodactylus (body flukes)</div>
            <div className="text-2xs text-brand-text-light">Live-bearing · Visible with magnification · Attach to skin and fins · Rapid reproducer</div>
          </div>
          <div className="py-2">
            <div className="text-xs font-bold text-brand-dark">Dactylogyrus (gill flukes)</div>
            <div className="text-2xs text-brand-text-light">Egg-laying · Primarily target gills · Harder to detect · Respiratory signs</div>
          </div>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' }, { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'Velvet Disease', href: '/health/velvet-disease' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-flukes" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2>Signs — Often Nonspecific</h2>
        <p>The challenge with flukes: their signs are nonspecific and shared with several other conditions. Flashing (rubbing against substrate or decorations), clamped fins, rapid gill movement, excess mucus production on the body surface, lethargy, and reduced appetite all describe fluke infestation — and also describe poor water quality, velvet, and bacterial skin infections. This is why flukes are frequently missed and why prophylactic praziquantel during quarantine is so valuable: it eliminates flukes from the differential before the fish enters the display tank, regardless of whether clinical signs are present.</p>
        <p>Distinguishing features when present: gill flukes produce primarily respiratory signs (rapid breathing, fish near the surface or near aeration) with relatively minor external signs. Body flukes produce more visible flashing and skin changes — excess mucus making the fish appear matte rather than shiny, reddened skin areas, and in heavy infestations, ulcerations at attachment sites. Both can occur simultaneously in the same fish.</p>

        <h2>Praziquantel — The Treatment</h2>
        <p>Praziquantel (available as API General Cure, Hikari PraziPro, or raw praziquantel powder from veterinary suppliers) is the definitive treatment for monogenean flukes. It works by disrupting the parasite's ability to maintain its tegument (outer covering), causing muscular spasm and detachment. It is safe for fish, invertebrates at appropriate doses, and beneficial bacteria — making it one of the safest antiparasitic treatments available for aquarium use.</p>
        <p><strong>Treatment protocol:</strong> PraziPro (0.1 mg/L) or API General Cure per label. Two treatments are required for Dactylogyrus specifically — because Dactylogyrus are egg-layers, the first treatment kills adults but not the eggs. Retreat after 5-7 days to catch newly hatched juveniles before they mature and reproduce. Gyrodactylus (live-bearing) can often be cleared with a single treatment, but a second treatment is good practice for certainty.</p>
        <p>Remove activated carbon before treatment — it adsorbs the medication. Maintain good oxygenation during treatment. Repeat water change and carbon to remove medication 24-48 hours after the final treatment.</p>

        <h2>Prophylactic Treatment During Quarantine</h2>
        <p>Many experienced marine and freshwater fishkeepers treat all new fish prophylactically with praziquantel during the quarantine period, regardless of visible signs. The rationale: flukes are extremely common in fish from the trade (particularly wild-caught fish and fish from crowded holding systems), they are microscopic and often invisible before clinical signs develop, and treatment during quarantine prevents introduction to an established display tank where they would spread to all inhabitants. The cost and effort of prophylactic praziquantel treatment is far lower than treating an entire established tank after a fluke introduction.</p>
        <p>The marine prophylactic protocol has become fairly standardized: praziquantel as part of the routine quarantine regimen alongside other antiparasitic treatments for newly acquired fish. Freshwater keepers increasingly follow similar logic, particularly for wild-caught fish, fish from mixed holding systems, and discus (which are especially susceptible to fluke infestations).</p>

        <h2>Distinguishing From Other Conditions</h2>
        <p>If fish are flashing and showing respiratory signs in an established, previously healthy tank: test water quality first (ammonia, nitrite, nitrate, pH). Water quality issues are more common than parasites and should be ruled out before medicating. If water quality is normal: consider velvet (use flashlight check) and flukes (no reliable visual identification without microscopy — treat based on clinical presentation and ruling out other causes). A combined treatment addressing both gill/body flukes (praziquantel) and external protozoa (copper or salt) in a hospital tank is appropriate when the cause is unclear and the fish's condition is declining.</p>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
