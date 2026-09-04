import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ArticleSourcesList, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Fin Rot in Aquarium Fish — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/fin-rot-in-fish", publisher: "Merck Vet Manual" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Aeromonas Infections in Fish — UF/IFAS Extension FA-TP-174.", url: "https://edis.ifas.ufl.edu/publication/FA174", publisher: "UF/IFAS Extension" },
  { label: "Francis-Floyd, R. Stress — Its Role in Fish Disease — UF/IFAS Extension FA-43.", url: "https://edis.ifas.ufl.edu/publication/FA043", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Fin Rot in Fish — Causes, Bacterial vs Fungal | Fish.com', description: 'Fin rot is almost always caused by poor water quality. Fraying, ragged edges progressing toward the body. Treatment: water quality first.', path: '/health/fin-rot', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Fin Rot in Fish', description: 'Causes, bacterial vs fungal distinction, and treatment for fin rot in aquarium fish.', url: 'https://fish.com/health/fin-rot', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})
export default function FinRotPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Fin Rot in Fish', subtitle: 'Fin rot is the most common disease in aquarium fish — fraying, ragged, or deteriorating fins caused by bacterial or fungal infection of damaged fin tissue. Almost every case of fin rot is preventable. Water quality is both the cause and the treatment foundation.', category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Fin Rot', href: '/health/fin-rot' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Bacterial Infections", href: "/health/bacterial-infections", category: "Fish Health" }, { title: "Nitrogen Cycle Explained", href: "/health/nitrogen-cycle-explained", category: "Fish Health" }, { title: "Ich Treatment Guide", href: "/health/ich-treatment", category: "Fish Health" }]}
      sidebar={<>
        <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Fin Rot Stages</div>
          <div className="space-y-2">
            {[['Early', 'Ragged fin edges, slight discoloration at margins'], ['Moderate', 'Fin tissue eroding, white or brown edges, red inflammation'], ['Severe', 'Fins eroded to body, body rot beginning — emergency']].map(([s, d]) => (
              <div key={s} className="text-xs">
                <span className="font-bold text-brand-danger">{s}: </span>
                <span className="text-brand-text-mid">{d}</span>
              </div>
            ))}
          </div>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Ich Treatment', href: '/health/ich-treatment' }, { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Betta Fish Care', href: '/species/betta-fish' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-fin-rot" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the water-first isolate plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Fin-rot water-first isolate checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the water-first isolate order — test ammonia, nitrite, and
            nitrate with a liquid kit before you treat, move the affected
            fish to a spare hospital tank so the display biofilter stays
            protected, and gravel-vacuum the substrate during water changes
            so the ammonia spike does not recur. Educational husbandry, not
            a diagnosis or a cure. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Fin-rot water-first isolate checklist"
            subtitle="Email the test-water-first, hospital-tank isolation, and gravel-vacuum order. No spam."
            ctaText="Email my fin-rot water-first isolate checklist"
            source="health-fin-rot-under-hero"
          />
        </div>

        <h2>Root Cause — Almost Always Water Quality</h2>
        <p>Healthy fish in clean water do not develop fin rot. The bacteria and fungi that cause fin rot (primarily Aeromonas, Pseudomonas, and Flavobacterium species for bacterial; Saprolegnia for fungal) are present in virtually all aquarium water as normal environmental organisms. They only cause disease when fish are immunocompromised — and the most common cause of immunocompromise in fish is poor water quality.</p>
        <p>Elevated ammonia, elevated nitrite, high nitrate, and temperature stress all suppress fish immune function. The pathway: ammonia accumulates (from overfeeding, overcrowding, or inadequate filtration) → fish immune system compromises → opportunistic bacteria establish infection at fin margins → fin rot develops. Treating fin rot with medication without correcting the water quality allows reinfection after treatment.</p>

        <h2>Bacterial vs Fungal — Identification</h2>
        <p><strong>Bacterial fin rot</strong> (most common): Fin edges appear ragged and frayed, often with a red or inflamed border at the line between healthy and affected tissue. The deterioration has a "eaten away" appearance. May progress rapidly (24–48 hours in acute cases with elevated ammonia).</p>
        <p><strong>Fungal fin rot (Saprolegnia):</strong> Cotton-like, fluffy white growth on fin edges — clearly three-dimensional and fuzzy rather than simply ragged. Often secondary to an injury or bacterial infection. True fungal infections require different treatment than bacterial.</p>
        <p>In practice, many cases involve both bacterial and fungal components simultaneously. Treatment that covers both is appropriate when uncertain.</p>

        <h2>Treatment Protocol</h2>
        <p><strong>Step 1 — Water quality first:</strong> Test ammonia, nitrite, and nitrate immediately. If ammonia or nitrite is above 0, do a 25–50% water change immediately and determine the cause (overcrowding, overfeeding, filter failure, new tank syndrome). No medication will permanently resolve fin rot in poor water quality. Fix the water first.</p>
        <p><strong>Step 2 — Isolate if possible:</strong> Move the affected fish to a hospital tank for treatment. This concentrates medication where it is needed and protects the main tank's beneficial bacteria from antibiotic disruption.</p>
        <p><strong>Step 3 — Bacterial treatment:</strong> API Fin & Body Cure (kanamycin + nitrofurazone combination) or Seachem KanaPlex are effective against bacterial fin rot. Follow manufacturer's dosing protocol for the full course. Remove activated carbon from the filter before treating — carbon removes medication.</p>
        <p><strong>Fungal component:</strong> API Pimafix (pimaricin-based) or API Fungus Cure for confirmed fungal cases. Pimafix can be used alongside KanaPlex to cover both bacterial and fungal simultaneously.</p>
        <p><strong>Aquarium salt:</strong> 1 teaspoon per gallon of aquarium salt creates an osmotic environment less favorable to pathogens while reducing fish stress. Freshwater fish tolerate low salt concentrations that inhibit many fin rot pathogens.</p>

        <h2>Recovery — What to Expect</h2>
        <p>Fins regenerate — damaged fin tissue grows back over weeks to months in fish that recover from fin rot, provided the underlying water quality issue is resolved. Early-stage fin rot treated promptly often leaves no permanent damage. Severe fin rot that reached the body wall may leave scarring. Fins that regenerated after infection may not be identical to the original — slight color or shape differences are common.</p>
        <p>The fish that has recovered from fin rot and is kept in consistently clean water with appropriate filtration will not develop fin rot again. Recurrence is almost always a water quality management problem.</p>

        <h2>Fin Rot in Bettas — The Specific Case</h2>
        <p>Bettas are disproportionately affected by fin rot because: they are often kept in small, under-filtered tanks where water quality degrades quickly, their long fins are easily damaged by rough decorations or fin-nipping fish, and their elaborate fins provide more surface area for infection. Betta fin rot treatment follows the same protocol — but tank size and filtration upgrade is the most important preventive measure. A betta in a 5-gallon properly filtered tank rarely develops fin rot; a betta in an unfiltered 1-gallon bowl frequently does.</p>

        {/* Money path — live amazon-brand search hops (water-first / isolate / gravel-vacuum kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop a water-first isolate kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Fin rot is almost always a water-quality problem. A liquid master
            kit is how you see ammonia, nitrite, and nitrate before you treat
            — strips are not accurate enough for Step 1. Isolate the affected
            fish in a spare hospital tank with a seeded sponge filter so
            treatment stays off the display biofilter. A gravel vacuum is how
            you pull accumulated waste from the substrate during water
            changes so the ammonia spike does not recur. Same test-kit hop
            used on the{' '}
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
            . Same hospital-tank hop used on the{' '}
            <Link
              href="/tools/fish-disease-symptom-checker"
              className="text-brand-primary no-underline hover:underline"
            >
              disease symptom checker
            </Link>
            {' '}and the{' '}
            <Link href="/health/columnaris" className="text-brand-primary no-underline hover:underline">
              columnaris guide
            </Link>
            . Same sponge-filter hop used on the{' '}
            <Link
              href="/tools/aquarium-cycling-estimator"
              className="text-brand-primary no-underline hover:underline"
            >
              cycling estimator
            </Link>
            . Same gravel-vacuum hop used on the{' '}
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
            . Heater and thermometer hops stay off this page — fin-rot copy
            has no heat method. The hops below are not a ranked product
            list, they are not medications, and they do not treat, reverse,
            or cure fin rot. Fish.com earns a commission on qualifying
            purchases at no extra cost to you. Empty Chewy buttons stay
            hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=health-fin-rot"
              amazonLabel="Browse API Master Test Kit on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=health-fin-rot"
              amazonLabel="Browse quarantine / hospital tanks on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sponge+filter?s=health-fin-rot"
              amazonLabel="Browse sponge filters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+gravel+vacuum+siphon?s=health-fin-rot"
              amazonLabel="Browse gravel vacuums on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/health/bacterial-infections" className="text-brand-primary hover:underline">
              Bacterial Infections
            </Link>
            {' · '}
            <Link href="/health/new-tank-syndrome" className="text-brand-primary hover:underline">
              New Tank Syndrome
            </Link>
            {' · '}
            <Link href="/health/fish-disease-guide" className="text-brand-primary hover:underline">
              Fish Disease Guide
            </Link>
            {' · '}
            <Link href="/tools/water-change-calculator" className="text-brand-primary hover:underline">
              Water-Change Calculator
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
