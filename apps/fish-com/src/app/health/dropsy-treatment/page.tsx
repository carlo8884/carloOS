import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, ArticleSourcesList, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Dropsy in Fish — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/dropsy-in-fish", publisher: "Merck Vet Manual" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Aeromonas Infections in Fish — UF/IFAS Extension FA-TP-174.", url: "https://edis.ifas.ufl.edu/publication/FA174", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Dropsy in Fish — Pinecone Scales, Causes & Treatment | Fish.com', description: 'Dropsy causes pinecone-like scale standing from fluid accumulation in body cavity. Usually fatal — indicates organ failure.', path: '/health/dropsy-treatment', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Dropsy in Fish — Causes and Treatment', description: 'Pinecone scale standing, organ failure diagnosis, and treatment for fish dropsy.', url: 'https://fish.com/health/dropsy-treatment', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})
export default function DropsyPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Dropsy in Fish', subtitle: 'Dropsy is not a disease itself — it is a symptom of severe internal organ failure. The characteristic "pinecone" appearance of scales standing away from the body results from massive fluid accumulation in the body cavity. By the time dropsy is visually apparent, the underlying disease has typically progressed to an advanced state.', category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Dropsy', href: '/health/dropsy-treatment' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Bacterial Infections", href: "/health/bacterial-infections", category: "Fish Health" }, { title: "Pop-Eye", href: "/health/pop-eye", category: "Fish Health" }, { title: "Fish Disease Guide", href: "/health/fish-disease-guide", category: "Fish Health" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Dropsy Signs</div>
          {['Scales standing outward — pinecone appearance', 'Bloated, distended abdomen', 'Protruding eyes (exophthalmia)', 'Lethargy, loss of appetite', 'Pale gills', 'Curved spine in advanced cases'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }, { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Goldfish Care', href: '/species/goldfish' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-dropsy" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the hospital-tank plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Hospital-tank / quarantine checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the isolate-first order — move a pinecone-scale fish to a
            spare hospital tank, test ammonia / nitrite / nitrate, and watch
            tankmates — so quarantine is ready before water quality slips
            further. Educational husbandry, not a diagnosis or a cure. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Hospital-tank / quarantine checklist"
            subtitle="Email the isolate-first hospital-tank and remaining-fish watch order. No spam."
            ctaText="Email my dropsy quarantine checklist"
            source="health-dropsy-under-hero"
          />
        </div>

        <h2>What Dropsy Actually Is</h2>
        <p>Dropsy describes the accumulation of fluid (edema and ascites) within the body cavity of a fish, causing the characteristic distension and scale protrusion. It is not caused by a single pathogen — it is a final common endpoint of multiple serious conditions that damage internal organs to the point where normal fluid regulation fails.</p>
        <p>The most common underlying causes: bacterial infection involving the kidneys (Aeromonas, Pseudomonas, Edwardsiella) damaging the renal tubules responsible for fluid regulation; viral infection; parasitic organ infiltration; hepatic (liver) failure from any cause; and neoplasia (internal tumors). Bacterial kidney infection is by far the most common cause in aquarium fish, and this is why the condition is historically associated with poor water quality — elevated nitrate and ammonia predispose fish to systemic bacterial infection.</p>

        <h2>The Pinecone Sign — Why It Looks That Way</h2>
        <p>Fish scales are anchored in scale pockets in the skin. When fluid accumulates under the skin and within the body cavity, the pressure forces the scales outward from the body wall — producing the pinecone or "open book" appearance when viewed from above or the side. This sign — called "pine-coning" — is distinctive and visible before the full extent of abdominal distension is apparent. Dorsal view (looking down at the fish from above) typically reveals the pine-coning most clearly.</p>

        <h2>Prognosis — The Honest Assessment</h2>
        <p>Dropsy has a poor prognosis. By the time scales are visibly standing away from the body, significant organ damage has already occurred. Recovery is possible but uncommon — estimated at 10–30% even with aggressive treatment. The fish that do recover from dropsy typically have early presentations (mild scale standing, fish still eating) where treatment begins before multi-organ failure is established. A fish with full pine-coning, severe distension, lethargy, loss of appetite, and pale gills has a very poor prognosis regardless of treatment.</p>
        <p>Humane euthanasia — using clove oil at 400mg/L (overdose) in an isolated container of tank water — should be considered for fish with advanced dropsy showing signs of significant distress or those that have not responded to treatment within several days. Allowing a fish to die slowly of organ failure is not the most humane option.</p>

        <h2>Treatment Protocol</h2>
        <p>Isolate the affected fish to a hospital tank immediately — both to concentrate treatment and to reduce disease transmission risk. Maintain pristine water quality in the hospital tank with frequent water changes.</p>
        <p><strong>Kanamycin (Seachem KanaPlex) + metronidazole (Seachem MetroPlex):</strong> The combination most frequently recommended for dropsy with suspected bacterial kidney involvement. KanaPlex targets gram-negative bacteria commonly associated with internal bacterial infection. MetroPlex addresses potential protozoan involvement (Hexamita). Both can be mixed with food using Seachem Focus to improve internal delivery. Add to the water and mix into food simultaneously for best results.</p>
        <p><strong>Epsom salt:</strong> Magnesium sulfate at 1-3 teaspoons per 5 gallons creates an osmotic gradient that draws fluid from the tissues — providing temporary relief from the fluid accumulation. It is not a cure but reduces the pressure of ascites and may improve the fish's comfort during treatment. Use magnesium sulfate, not table salt (sodium chloride), which does not have this effect on osmosis in the same way.</p>

        <h2>Quarantine Remaining Fish</h2>
        <p>When one fish develops dropsy from a bacterial systemic infection, other fish in the same tank are at risk — particularly if they are stressed by the same water quality issues. Monitor all other fish closely. A preemptive course of antibiotics in the display tank is sometimes recommended when multiple fish are showing early signs, but should be weighed against the impact on biological filtration.</p>

        {/* Money path — live amazon-brand search hops (hospital-tank kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop a hospital-tank kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Isolate first, then test water — a liquid master kit is how you
            see ammonia, nitrite, and nitrate that predispose fish to systemic
            bacterial infection. A spare hospital tank with a seeded sponge
            filter, a heater rated for the tank, and a separate digital
            thermometer keeps treatment off the display biofilter. Same
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
            . Same sponge-filter hop used on the{' '}
            <Link
              href="/tools/aquarium-cycling-estimator"
              className="text-brand-primary no-underline hover:underline"
            >
              cycling estimator
            </Link>
            . Same heater and thermometer hops used on the{' '}
            <Link href="/setup" className="text-brand-primary no-underline hover:underline">
              aquarium setup guide
            </Link>
            . They are not a ranked product list, they are not medications,
            and they do not treat, reverse, or cure dropsy. Fish.com earns a
            commission on qualifying purchases at no extra cost to you. Empty
            Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=health-dropsy"
              amazonLabel="Browse API Master Test Kit on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=health-dropsy"
              amazonLabel="Browse quarantine / hospital tanks on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sponge+filter?s=health-dropsy"
              amazonLabel="Browse sponge filters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/eheim+jager+heater?s=health-dropsy"
              amazonLabel="Browse aquarium heaters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+digital+thermometer?s=health-dropsy"
              amazonLabel="Browse digital aquarium thermometers on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/setup/quarantine-tank-guide" className="text-brand-primary hover:underline">
              Quarantine Tank Guide
            </Link>
            {' · '}
            <Link href="/health/fish-disease-guide" className="text-brand-primary hover:underline">
              Fish Disease Guide
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
