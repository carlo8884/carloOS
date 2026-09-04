import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ArticleSourcesList, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Francis-Floyd, R. Stress — Its Role in Fish Disease — UF/IFAS Extension FA-43.", url: "https://edis.ifas.ufl.edu/publication/FA043", publisher: "UF/IFAS Extension" },
  { label: "Barton, B.A. Stress in Fishes: A Diversity of Responses with Particular Reference to Changes in Circulating Corticosteroids. Integrative and Comparative Biology, 2002.", publisher: "Oxford University Press" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Disease Management in Recirculating Aquaculture Systems — UF/IFAS Extension FA-107.", url: "https://edis.ifas.ufl.edu/publication/FA107", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Fish Stress and Immunity — The Root of Most Disease | Fish.com', description: "Why chronic stress is behind most aquarium fish disease. The sources of stress, how it suppresses the immune system, and how to build a low-stress tank.", path: '/health/fish-stress-and-immunity', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Fish Stress and Immunity', description: 'How stress suppresses fish immunity and drives disease, and how to reduce it.', url: 'https://fish.com/health/fish-stress-and-immunity', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})
export default function FishStressPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Fish Stress and Immunity', subtitle: "Most aquarium disease is not bad luck — it is the predictable result of stress. The pathogens that cause ich, fin rot, and bacterial infections are present in nearly every tank, kept in check by a healthy fish's immune system. When chronic stress suppresses that immunity, opportunistic disease follows. Understanding and minimizing stress is the most powerful preventive tool a fishkeeper has.", category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Stress and Immunity', href: '/health/fish-stress-and-immunity' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Nitrogen Cycle Explained", href: "/health/nitrogen-cycle-explained", category: "Fish Health" }, { title: "New Tank Syndrome", href: "/health/new-tank-syndrome", category: "Fish Health" }, { title: "Water Chemistry Guide", href: "/setup/water-chemistry-guide", category: "Tank Setup" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Common Stressors</div>
          {['Poor or unstable water quality', 'Incomplete or crashed nitrogen cycle', 'Overcrowding and aggression', 'Incompatible tankmates', 'Temperature and pH swings', 'Inadequate hiding spots', 'Rough handling and transport'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Bacterial Infections', href: '/health/bacterial-infections' }, { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-stress-immunity" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the low-stress tank plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Low-stress tank checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the water-first, temperature-stable, quarantine order —
            test ammonia, nitrite, and nitrate with a liquid kit (not
            strips), hold temperature with a rated heater and a separate
            digital thermometer so swings do not suppress immunity, and
            quarantine every new arrival so shipping stress stays out of
            the display. Educational husbandry, not a diagnosis or a cure.
            No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Low-stress tank checklist"
            subtitle="Email the water-first, temperature-stable, quarantine order. No spam."
            ctaText="Email my low-stress tank checklist"
            source="health-stress-immunity-under-hero"
          />
        </div>

        <h2>Stress Is the Real First Cause</h2>
        <DropCap>It is tempting to treat fish disease as a series of discrete infections to be diagnosed and medicated, but experienced aquarists come to see most illness through a single lens: stress. The ich parasite, the Aeromonas bacteria behind fin rot and ulcers, and the fungal spores that colonize damaged tissue are nearly always already present in a tank, held at bay by a healthy fish's defenses. What tips the balance toward visible disease is some chronic stressor that suppresses the immune system and degrades the protective slime coat. This is why outbreaks so often follow a water-quality lapse, a new aggressive tankmate, or a temperature swing — the stressor came first, and the pathogen merely exploited the opening.</DropCap>

        <h2>How Stress Suppresses Immunity</h2>
        <p>When a fish is stressed, it releases the hormone cortisol, just as mammals do. Sustained elevated cortisol is immunosuppressive: it dampens the inflammatory and immune responses that would otherwise contain opportunistic pathogens, and it interferes with the production and maintenance of the slime coat — the mucus layer that is the fish's first physical barrier against parasites and bacteria. A briefly stressed fish recovers; a chronically stressed one lives with a perpetually weakened defense, and disease becomes a matter of when, not if. The same mechanism explains why fish so often fall ill in the days after being moved, added to a new tank, or exposed to deteriorating water.</p>

        <CalloutBox variant="info" title="The slime coat matters">
          A fish's mucus slime coat is its primary defense against parasites and bacteria. Stress and rough handling strip and thin it; products and aquarium salt that support slime-coat recovery can help a stressed fish through a vulnerable period.
        </CalloutBox>

        <h2>The Major Stressors</h2>
        <p>The most significant and most controllable stressor is water quality. Any detectable ammonia or nitrite, accumulating nitrate, or an unstable pH places constant physiological load on a fish. A second major category is social stress: overcrowding, aggression from incompatible tankmates, keeping schooling fish in too-small groups, or housing timid species with boisterous ones. Environmental swings — temperature changes from a failing heater, pH shifts, or sudden lighting — add further load, as do a lack of hiding places, an unsuitable diet, and the acute stress of netting, bagging, and transport. Each on its own may be tolerable; in combination they overwhelm the fish.</p>

        <h2>Building a Low-Stress Tank</h2>
        <p>Reducing stress is largely a matter of good husbandry applied consistently. Maintain a fully cycled, stable system with zero ammonia and nitrite and low nitrate through regular water changes. Stock compatible species at sensible densities, keep schooling fish in proper groups, and provide ample plants, caves, and broken sightlines so every fish has somewhere to retreat. Hold temperature and pH steady rather than chasing ideal numbers with abrupt corrections. Feed a varied, quality diet that supports immune function, and handle fish gently and infrequently. A tank built around these principles produces fish that shrug off the pathogens swimming alongside them.</p>

        <h2>Stress, Quarantine, and Acclimation</h2>
        <p>Two moments carry concentrated stress risk: bringing home a new fish and acclimating it. New arrivals are already stressed and immunosuppressed from capture, shipping, and retail holding, which is exactly when latent infections flare. Quarantining new fish in a dedicated <a href="/setup/quarantine-tank-guide">quarantine tank</a> lets them recover in calm, pristine conditions and reveals illness before it reaches the display. Acclimate slowly to match temperature and chemistry, dim the lights, and avoid feeding heavily on the first day. Managing stress at these pinch points prevents a large share of the disease that otherwise follows new additions, and complements the broader picture covered in our <a href="/health/bacterial-infections">bacterial infections</a> guide.</p>

        {/* Money path — live amazon-brand search hops (low-stress tank kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop a low-stress tank kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Water quality and temperature stability are the two most
            controllable stressors in any aquarium. A liquid master kit is
            how you see ammonia, nitrite, and nitrate — strips are not
            accurate enough for the stress load that suppresses immunity.
            A heater rated for the tank plus a separate digital thermometer
            is how you hold temperature so the dial is not the only
            reading. Quarantine every new arrival in a spare hospital tank
            so shipping stress and latent infections stay out of the
            display. Same test-kit hop used on the{' '}
            <Link
              href="/health/bacterial-infections"
              className="text-brand-primary no-underline hover:underline"
            >
              bacterial infections guide
            </Link>
            {' '}and the{' '}
            <Link
              href="/reviews/best-water-test-kits"
              className="text-brand-primary no-underline hover:underline"
            >
              water-test kit review
            </Link>
            . Same heater and thermometer hops used on the{' '}
            <Link href="/setup" className="text-brand-primary no-underline hover:underline">
              aquarium setup guide
            </Link>
            {' '}and the{' '}
            <Link href="/health/fish-disease-guide" className="text-brand-primary no-underline hover:underline">
              fish disease guide
            </Link>
            . Same hospital-tank hop used on the{' '}
            <Link
              href="/setup/quarantine-tank-guide"
              className="text-brand-primary no-underline hover:underline"
            >
              quarantine tank guide
            </Link>
            {' '}and the{' '}
            <Link href="/health/fin-rot" className="text-brand-primary no-underline hover:underline">
              fin-rot guide
            </Link>
            . The hops below are not a ranked product list, they are not
            medications, and they do not treat, reverse, or cure disease.
            Fish.com earns a commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=health-stress-immunity"
              amazonLabel="Browse API Master Test Kit on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/eheim+jager+heater?s=health-stress-immunity"
              amazonLabel="Browse aquarium heaters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+digital+thermometer?s=health-stress-immunity"
              amazonLabel="Browse digital aquarium thermometers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=health-stress-immunity"
              amazonLabel="Browse quarantine / hospital tanks on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/health/nitrogen-cycle-explained" className="text-brand-primary hover:underline">
              Nitrogen Cycle Explained
            </Link>
            {' · '}
            <Link href="/health/new-tank-syndrome" className="text-brand-primary hover:underline">
              New Tank Syndrome
            </Link>
            {' · '}
            <Link href="/health/bacterial-infections" className="text-brand-primary hover:underline">
              Bacterial Infections
            </Link>
            {' · '}
            <Link href="/setup/quarantine-tank-guide" className="text-brand-primary hover:underline">
              Quarantine Tank Guide
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
