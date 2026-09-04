import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ArticleSourcesList, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Amyloodinium ocellatum (Velvet Disease) — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/amyloodinium-ocellatum-in-fish", publisher: "Merck Vet Manual" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Cryptobia iubilans and Other Diplomonadina of Fish — UF/IFAS Extension FA-28.", url: "https://edis.ifas.ufl.edu/publication/FA028", publisher: "UF/IFAS Extension" },
  { label: "Francis-Floyd, R. Stress — Its Role in Fish Disease — UF/IFAS Extension FA-43.", url: "https://edis.ifas.ufl.edu/publication/FA043", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Velvet Disease in Fish — Gold Dust Appearance | Fish.com', description: 'Velvet (Oodinium) is a parasite that looks like gold dust on the fish surface. Highly contagious. Treat with copper or chloroquine phosphate', path: '/health/velvet-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Velvet Disease in Fish', description: 'Gold dust appearance, diagnosis, and copper treatment for Oodinium velvet disease.', url: 'https://fish.com/health/velvet-disease', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})
export default function VelvetDiseasePage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Velvet Disease in Fish', subtitle: 'Velvet — caused by the dinoflagellate parasite Oodinium (Piscinoodinium pillulare in freshwater, Amyloodinium ocellatum in saltwater) — is the second most common fish disease after ich. It is faster-moving than ich, more visually subtle until advanced, and more lethal if not caught and treated promptly.', category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Velvet Disease', href: '/health/velvet-disease' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Ich Treatment Guide", href: "/health/ich-treatment", category: "Fish Health" }, { title: "Fish Disease Guide", href: "/health/fish-disease-guide", category: "Fish Health" }, { title: "Quarantine Tank Guide", href: "/setup/quarantine-tank-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Velvet vs Ich</div>
          {[['Appearance', 'Gold/rust dust (velvet) vs white salt grains (ich)'], ['Visibility', 'Velvet harder to see — use flashlight'], ['Speed', 'Velvet more rapid progression'], ['Treatment', 'Copper or chloroquine (both) — salt alone insufficient'], ['Saltwater', 'Amyloodinium — much more dangerous']].map(([k, v]) => (
            <div key={k} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{k}</div>
              <div className="text-2xs text-brand-text-light">{v}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Ich Treatment', href: '/health/ich-treatment' }, { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'Betta Fish Care', href: '/species/betta-fish' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-velvet" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the temp-and-blackout plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Velvet temp-and-blackout checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the quarantine / temp-and-blackout / aeration order — isolate
            affected fish in a hospital tank, hold 82–84°F if the species
            tolerates it, cover for a 24–72 hour blackout, and add air-driven
            aeration because warmer water holds less oxygen. Educational
            husbandry, not a diagnosis or a cure. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Velvet temp-and-blackout checklist"
            subtitle="Email the quarantine, temp-and-blackout, and aeration order. No spam."
            ctaText="Email my velvet temp-and-blackout checklist"
            source="health-velvet-under-hero"
          />
        </div>

        <h2>Identification — The Flashlight Test</h2>
        <p>Velvet in its early stages is difficult to see under normal aquarium lighting — the gold or rust-colored dust that gives the disease its name is often invisible until fish are examined with a flashlight held at an angle to the body. This flashlight inspection reveals the gold sheen on the fish's skin that is characteristic of Oodinium. By the time velvet is clearly visible to the naked eye under normal lighting, the infection is advanced.</p>
        <p>Early behavioral signs before the gold dust is visible: fish scratching against surfaces (flashing or glancing — same as ich), lethargy, clamped fins, rapid gill movement (Oodinium infects gill tissue heavily — gill involvement causes labored breathing that often precedes visible skin signs). A fish that is flashing and breathing rapidly in an otherwise clean, well-maintained tank should be examined with a flashlight for velvet.</p>

        <h2>The Parasite Life Cycle — Why Treatment Is Timed</h2>
        <p>Oodinium has three stages: the trophont (attached feeding stage on the fish — visible as the gold dust), the tomont (fallen to substrate, dividing — not visible and not treatable), and the dinospore (free-swimming, infective stage — the only stage that can be killed by medication). Treatment must continue long enough to catch all dinospores as they are released from tomonts — the tomont stage lasts 3–6 days at typical aquarium temperatures. Treatment for a minimum of 2 weeks ensures all dinospores are exposed.</p>

        <h2>Treatment — What Works</h2>
        <p><strong>Copper sulfate or chelated copper (Cupramine by Seachem):</strong> The most reliable treatment for freshwater and saltwater velvet. Cupramine (chelated copper) is safer than ionic copper at therapeutic concentrations and maintains efficacy more consistently. Must be maintained at therapeutic levels (0.15–0.20 mg/L free copper in freshwater; 0.15–0.25 mg/L in marine) — copper concentration falls as it binds to organic matter and substrate. Regular testing with a copper test kit is required to maintain therapeutic levels. Copper is lethal to invertebrates, coral, and live rock — treat in a hospital tank, never in a reef system.</p>
        <p><strong>Chloroquine phosphate:</strong> Anti-malarial medication effective against Oodinium. Can be used in hospital tanks. Somewhat safer for fish than copper. Used at 40mg/gallon. 2-week treatment minimum. More difficult to obtain than copper products but preferred by some marine fish keepers.</p>
        <p><strong>Temperature and blackout:</strong> Oodinium is photosynthetic — it requires light to complete its lifecycle. Total aquarium blackout (covering the tank completely for 24–72 hours) combined with elevated temperature (raise to 82–84°F if species tolerates) weakens the parasite and reduces reproduction rate. This is a supportive measure — not curative alone, but useful combined with medication.</p>

        <h2>Saltwater Velvet (Amyloodinium) — More Dangerous</h2>
        <p>Amyloodinium ocellatum in marine aquariums is significantly more lethal than freshwater Piscinoodinium. It progresses faster, the dinospore infective stage is shorter, and it can kill a full tank of fish within 48-72 hours of first visible signs. Marine velvet is an emergency — treatment must begin immediately. The same copper or chloroquine phosphate protocols apply, in a quarantine tank separate from any invertebrates or coral.</p>

        {/* Money path — live amazon-brand search hops (temp-and-blackout kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop temp-and-blackout husbandry gear
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Temp-and-blackout husbandry depends on holding 82–84°F if the
            species tolerates it, covering the tank for a 24–72 hour blackout,
            and adding aeration because warmer water holds less oxygen. A
            heater rated for the tank, a separate digital thermometer (heater
            thermostats drift), and an air-driven sponge filter cover that
            husbandry set. A spare hospital / quarantine tank is how you
            isolate affected fish — and keep copper or other medications off
            a reef or invertebrate display. Same heater and thermometer hops
            used on the{' '}
            <Link href="/setup" className="text-brand-primary no-underline hover:underline">
              aquarium setup guide
            </Link>
            {' '}and the{' '}
            <Link href="/equipment" className="text-brand-primary no-underline hover:underline">
              equipment hub
            </Link>
            . Same sponge-filter hop used on the{' '}
            <Link
              href="/tools/aquarium-cycling-estimator"
              className="text-brand-primary no-underline hover:underline"
            >
              cycling estimator
            </Link>
            {' '}and the{' '}
            <Link
              href="/health/fish-disease-guide"
              className="text-brand-primary no-underline hover:underline"
            >
              fish disease guide
            </Link>
            . Same hospital-tank hop used on the{' '}
            <Link
              href="/tools/fish-disease-symptom-checker"
              className="text-brand-primary no-underline hover:underline"
            >
              disease symptom checker
            </Link>
            . They are not a ranked product list, they are not medications,
            and they do not treat, reverse, or cure velvet. Fish.com earns a
            commission on qualifying purchases at no extra cost to you. Empty
            Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/eheim+jager+heater?s=health-velvet"
              amazonLabel="Browse aquarium heaters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+digital+thermometer?s=health-velvet"
              amazonLabel="Browse digital aquarium thermometers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sponge+filter?s=health-velvet"
              amazonLabel="Browse sponge filters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=health-velvet"
              amazonLabel="Browse quarantine / hospital tanks on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/setup/quarantine-tank-guide" className="text-brand-primary hover:underline">
              Quarantine Tank Guide
            </Link>
            {' · '}
            <Link href="/health/ich-treatment" className="text-brand-primary hover:underline">
              Ich Treatment Guide
            </Link>
            {' · '}
            <Link href="/health/fish-disease-guide" className="text-brand-primary hover:underline">
              Fish Disease Guide
            </Link>
            {' · '}
            <Link href="/equipment" className="text-brand-primary hover:underline">
              Equipment Hub
            </Link>
          </p>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
