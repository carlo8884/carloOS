import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ArticleSourcesList, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Argulus (Fish Lice) and Lernaea (Anchor Worm) — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/argulosis-and-lernaesis-in-fish", publisher: "Merck Vet Manual" },
  { label: "Shinn, A.P. et al. Fish parasites — pathobiology and protection. CABI, 2012.", publisher: "CABI" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Use of Chemicals in Aquaculture in the United States — UF/IFAS Extension FA-54.", url: "https://edis.ifas.ufl.edu/publication/FA054", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Fish Lice & Anchor Worm — Visible Parasites | Fish.com', description: 'Fish lice (Argulus) and anchor worm (Lernaea) are visible parasites attached to fish skin. Both enter ponds from wild-caught fish or infected feeders.', path: '/health/fish-lice-anchor-worm', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Fish Lice and Anchor Worm', description: 'Identification, manual removal, and chemical treatment for Argulus fish lice and Lernaea anchor worm.', url: 'https://fish.com/health/fish-lice-anchor-worm', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})
export default function FishLicePage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Fish Lice & Anchor Worm', subtitle: 'Fish lice (Argulus species) and anchor worm (Lernaea species) are macroscopic crustacean parasites visible to the naked eye on fish skin — a rare situation in fishkeeping where the parasite can actually be seen without magnification. Both enter aquariums and ponds from wild-caught fish, live food, or non-quarantined new additions.', category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Fish Lice & Anchor Worm', href: '/health/fish-lice-anchor-worm' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Gill Flukes", href: "/health/gill-flukes", category: "Fish Health" }, { title: "Medicating Aquarium Fish", href: "/health/medicating-aquarium-fish", category: "Fish Health" }, { title: "Quarantine Tank Guide", href: "/setup/quarantine-tank-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Identification</div>
          <div className="py-2 border-b border-brand-border">
            <div className="text-xs font-bold text-brand-dark">Fish Lice (Argulus)</div>
            <div className="text-2xs text-brand-text-light">Flat, oval, 5–10mm — look like tiny green discs with legs attached to skin surface. Move around the fish.</div>
          </div>
          <div className="py-2">
            <div className="text-xs font-bold text-brand-dark">Anchor Worm (Lernaea)</div>
            <div className="text-2xs text-brand-text-light">Thread-like worm, 10–20mm, protruding from wound in skin. Embedded anchor structure below skin. Reddened lesion at attachment site.</div>
          </div>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' }, { label: 'Koi Care Guide', href: '/species/koi' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-fish-lice" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the 4-to-6-week quarantine plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Lice-and-anchor-worm quarantine checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the 4-to-6-week quarantine order — hold every new fish in
            a spare quarantine tank so Argulus and Lernaea are visible
            before they reach the display, and treat the holding water so
            eggs and free-swimming larvae do not re-seed the tank.
            Educational husbandry, not a diagnosis or a cure. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Lice-and-anchor-worm quarantine checklist"
            subtitle="Email the 4-to-6-week quarantine and treat-the-holding-water order. No spam."
            ctaText="Email my fish-lice quarantine checklist"
            source="health-fish-lice-under-hero"
          />
        </div>

        <h2>Fish Lice (Argulus)</h2>
        <p>Argulus are flat, oval crustacean parasites 5–10mm in diameter — visible to the naked eye as small disc-shaped organisms attached to or moving across the fish's skin. They use sucking mouthparts to pierce the skin and feed on tissue fluid and blood, causing: visible attachment lesions (red, inflamed spots where they attach), intense irritation (fish rubbing against surfaces — flashing — and jumping), secondary bacterial infection at wound sites, and in heavy infestations, anemia and immune suppression from blood loss.</p>
        <p>Argulus can detach from the fish and swim freely in the water column — adults can survive briefly off the host. Eggs are deposited on hard surfaces (rocks, aquarium glass, substrate) and hatch into free-swimming larvae that seek a host. This life cycle means treating the fish alone is insufficient — the aquarium or pond environment must also be treated to kill eggs and larvae.</p>
        <p><strong>Treatment:</strong> Organophosphate insecticides (diflubenzuron/Dimilin, potassium permanganate pond baths) are effective for pond use. For aquarium fish: manual removal of visible parasites with forceps (requires anesthesia — MS-222 or clove oil — to safely handle and remove without injuring the fish), followed by salt baths (3% saltwater dip for 5-10 minutes) to kill larvae. Treat the full aquarium with appropriate antiparasitic and monitor for re-emergence from hatching eggs over 4–6 weeks.</p>

        <h2>Anchor Worm (Lernaea)</h2>
        <p>Lernaea is a crustacean that undergoes dramatic metamorphosis — free-swimming larvae are microscopic; adult females embed themselves in fish tissue using anchor-shaped anterior appendages that grip below the skin surface. The visible portion is the posterior of the worm, including egg sacs, protruding from the skin — appearing as a thread or worm emerging from an inflamed wound. The embedded anchor structure is below the skin and cannot be seen from the surface.</p>
        <p>Effects: mechanical damage at the attachment site (deep wound), secondary bacterial and fungal infection of the wound (common — the open lesion is colonized by opportunistic pathogens), local tissue destruction, and in heavy infestations, systemic effects from the immune response and blood loss. The attachment wound heals slowly and may leave permanent scarring.</p>
        <p><strong>Manual removal:</strong> The standard first step — grasp the anchor worm as close to the skin as possible with fine forceps and pull smoothly, firmly, and straight out. This technique only works if the anchor worm is grasped correctly and pulled steadily — incomplete removal (leaving the anchor embedded) worsens the wound and allows the parasite to regenerate. Anesthesia of the fish (MS-222 or clove oil in a separate container) is necessary for safe manual removal. Treat the wound site with iodine or topical antibiotic after removal.</p>
        <p><strong>Chemical treatment:</strong> Diflubenzuron (Dimilin) disrupts the molting process of crustaceans — effective at killing larvae and juvenile stages, less effective at killing embedded adult females. Use chemical treatment in conjunction with manual removal of adult parasites, and repeat treatments to catch successive larval generations hatching from remaining eggs. Potassium permanganate pond baths (10 ppm for 30 minutes, repeated 3 times at 5-day intervals) are the pond keeper's standard approach for large-scale infestations.</p>

        <h2>Sources and Prevention</h2>
        <p>Both parasites enter closed aquariums from: wild-caught fish not quarantined, live feeder fish from pond environments (feeder goldfish from outdoor rearing ponds are a common source), water or plants taken from natural water sources, and pond-reared fish of any species. Prevention: rigorous quarantine of all new fish (4–6 weeks observation — both parasites would be visible well within this window), avoid live feeder fish from unknown sources, and do not introduce water, plants, or substrate from natural water bodies without treating for potential parasites.</p>
        <p>Once established in a pond, both parasites can be extremely persistent — pond treatment with diflubenzuron or potassium permanganate repeated at appropriate intervals is required to break the life cycle.</p>

        {/* Money path — live amazon-brand search hops (quarantine-tank kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop a quarantine-tank kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Prevention on this page is a 4–6 week quarantine of every new
            fish — both parasites would be visible well within that window
            — plus treating the holding water so eggs and larvae do not
            re-seed the tank. A spare quarantine / hospital tank is how you
            run that watch without dropping the display. A seeded sponge
            filter keeps that holding water moving. Same hospital-tank hop
            used on the{' '}
            <Link
              href="/tools/fish-disease-symptom-checker"
              className="text-brand-primary no-underline hover:underline"
            >
              disease symptom checker
            </Link>
            {' '}and the{' '}
            <Link href="/health/pop-eye" className="text-brand-primary no-underline hover:underline">
              pop-eye guide
            </Link>
            . Same sponge-filter hop used on the{' '}
            <Link
              href="/tools/aquarium-cycling-estimator"
              className="text-brand-primary no-underline hover:underline"
            >
              cycling estimator
            </Link>
            . Test-kit, heater, and thermometer hops stay off this page —
            lice and anchor-worm copy has no water-test-first step and no
            heat method. The hops below are not a ranked product list, they
            are not medications, and they do not treat, reverse, or cure
            Argulus or Lernaea. Fish.com earns a commission on qualifying
            purchases at no extra cost to you. Empty Chewy buttons stay
            hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=health-fish-lice"
              amazonLabel="Browse quarantine / hospital tanks on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sponge+filter?s=health-fish-lice"
              amazonLabel="Browse sponge filters on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/setup/quarantine-tank-guide" className="text-brand-primary hover:underline">
              Quarantine Tank Guide
            </Link>
            {' · '}
            <Link href="/health/gill-flukes" className="text-brand-primary hover:underline">
              Gill Flukes
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
            <Link href="/species/koi" className="text-brand-primary hover:underline">
              Koi Care
            </Link>
          </p>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
