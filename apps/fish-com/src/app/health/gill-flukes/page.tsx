import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ArticleSourcesList, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Monogenean Flukes (Gyrodactylus, Dactylogyrus) — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/monogenean-flukes-in-fish", publisher: "Merck Vet Manual" },
  { label: "Shinn, A.P. et al. Fish parasites — pathobiology and protection. CABI, 2012.", publisher: "CABI" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Use of Chemicals in Aquaculture in the United States — UF/IFAS Extension FA-54.", url: "https://edis.ifas.ufl.edu/publication/FA054", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Gill Flukes | Fish.com', description: 'Flukes (Gyrodactylus, Dactylogyrus) cause flashing, rapid breathing, and clamped fins. Praziquantel is the treatment', path: '/health/gill-flukes', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Gill Flukes and Body Flukes in Fish', description: 'Signs, praziquantel treatment, and quarantine protocol for Gyrodactylus and Dactylogyrus flukes.', url: 'https://fish.com/health/gill-flukes', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})
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

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the quarantine / water-first plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Gill-flukes quarantine checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the quarantine / water-first / hospital-tank order — hold
            every new fish in a spare quarantine tank so flukes are treated
            prophylactically before they reach the display, and test ammonia,
            nitrite, and nitrate first if an established tank starts flashing.
            Educational husbandry, not a diagnosis or a cure. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Gill-flukes quarantine checklist"
            subtitle="Email the quarantine, water-first, and hospital-tank order. No spam."
            ctaText="Email my gill-flukes quarantine checklist"
            source="health-gill-flukes-under-hero"
          />
        </div>

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

        {/* Money path — live amazon-brand search hops (quarantine / water-first kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop a quarantine / water-first kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Prevention on this page is prophylactic treatment during
            quarantine of every new fish — flukes are microscopic and often
            invisible before signs develop — plus testing water first if an
            established tank starts flashing. A liquid master kit is how you
            see ammonia, nitrite, and nitrate before you medicate. A spare
            quarantine / hospital tank is how you run that watch and the
            combined hospital-tank protocol without dropping the display. A
            seeded sponge filter keeps that holding water moving. Same
            test-kit hop used on the{' '}
            <Link
              href="/health/fish-disease-guide"
              className="text-brand-primary no-underline hover:underline"
            >
              fish disease guide
            </Link>
            {' '}and the{' '}
            <Link
              href="/reviews/best-water-test-kits"
              className="text-brand-primary no-underline hover:underline"
            >
              water-test kit review
            </Link>
            . Same hospital-tank hop used on the{' '}
            <Link
              href="/tools/fish-disease-symptom-checker"
              className="text-brand-primary no-underline hover:underline"
            >
              disease symptom checker
            </Link>
            {' '}and the{' '}
            <Link href="/health/fish-lice-anchor-worm" className="text-brand-primary no-underline hover:underline">
              fish lice &amp; anchor worm guide
            </Link>
            . Same sponge-filter hop used on the{' '}
            <Link
              href="/tools/aquarium-cycling-estimator"
              className="text-brand-primary no-underline hover:underline"
            >
              cycling estimator
            </Link>
            . Heater and thermometer hops stay off this page — gill-flukes
            copy has no heat method. The hops below are not a ranked product
            list, they are not medications, and they do not treat, reverse,
            or cure Gyrodactylus or Dactylogyrus. Fish.com earns a
            commission on qualifying purchases at no extra cost to you.
            Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=health-gill-flukes"
              amazonLabel="Browse API Master Test Kit on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=health-gill-flukes"
              amazonLabel="Browse quarantine / hospital tanks on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sponge+filter?s=health-gill-flukes"
              amazonLabel="Browse sponge filters on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/setup/quarantine-tank-guide" className="text-brand-primary hover:underline">
              Quarantine Tank Guide
            </Link>
            {' · '}
            <Link href="/health/fish-lice-anchor-worm" className="text-brand-primary hover:underline">
              Fish Lice &amp; Anchor Worm
            </Link>
            {' · '}
            <Link href="/health/fish-disease-guide" className="text-brand-primary hover:underline">
              Fish Disease Guide
            </Link>
            {' · '}
            <Link href="/health/medicating-aquarium-fish" className="text-brand-primary hover:underline">
              Medicating Aquarium Fish
            </Link>
            {' · '}
            <Link href="/reviews/best-water-test-kits" className="text-brand-primary hover:underline">
              Best Water Test Kits
            </Link>
          </p>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
