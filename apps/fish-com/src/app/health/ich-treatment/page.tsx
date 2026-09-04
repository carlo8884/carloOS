import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ArticleSourcesList, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Ichthyophthirius multifiliis (Ich) — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/ichthyophthirius-multifiliis-in-fish", publisher: "Merck Vet Manual" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Ich (White Spot Disease) Treatment Guide — UF/IFAS Extension FA-28", url: "https://edis.ifas.ufl.edu/publication/FA028", publisher: "UF/IFAS Extension" },
  { label: "Dickerson, H.W. Ichthyophthirius multifiliis and Cryptocaryon irritans. Fish Diseases and Disorders Vol 1, CABI, 2006.", publisher: "CABI" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Ich Treatment Guide — White Spots, Heat Method & Ich-X | Fish.com', description: 'Ich (white spot disease) is the most common fish disease. The heat method, salt treatment, and chemical treatments explained.', path: '/health/ich-treatment', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Ich Treatment Guide', description: 'Heat method, salt, and chemical treatment for Ichthyophthirius multifiliis (ich) in aquarium fish.', url: 'https://fish.com/health/ich-treatment', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})
export default function IchTreatmentPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Ich Treatment Guide', subtitle: 'Ichthyophthirius multifiliis — "ich" or white spot disease — is the most common disease in aquarium fish. The characteristic white salt-grain spots are visible on the body and fins. Treatment is straightforward once you understand the parasite\'s life cycle: only one stage can be killed by treatment, and that window must be exploited for 10-14 days minimum.', category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Ich Treatment', href: '/health/ich-treatment' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Velvet Disease", href: "/health/velvet-disease", category: "Fish Health" }, { title: "Quarantine Tank Guide", href: "/setup/quarantine-tank-guide", category: "Tank Setup" }, { title: "Medicating Aquarium Fish", href: "/health/medicating-aquarium-fish", category: "Fish Health" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Ich Life Cycle</div>
          {[['Trophont (on fish)', 'White spot — NOT killable with medication · 5–7 days'], ['Tomont (substrate)', 'Fallen off fish, reproducing · NOT killable · 3–10 days'], ['Theront (free-swimming)', 'Seeks new host · KILLABLE · 24-48 hours']].map(([s, d]) => (
            <div key={s} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{s}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Velvet Disease', href: '/health/velvet-disease' }, { label: 'New Tank Syndrome', href: '/health/new-tank-syndrome' }, { label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-ich" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the heat-method plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Ich heat-method checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the quarantine / heat-method / aeration order — isolate new
            or spotted fish, hold 82–86°F for 10+ days after the last spot if
            the species tolerates it, and add air-driven aeration because
            warmer water holds less oxygen. Educational husbandry, not a
            diagnosis or a cure. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Ich heat-method checklist"
            subtitle="Email the quarantine, heat-method, and aeration order. No spam."
            ctaText="Email my ich heat-method checklist"
            source="health-ich-under-hero"
          />
        </div>

        <h2>The Life Cycle — Why Treatment Takes 10-14 Days</h2>
        <p>Ich has three life stages: the trophont (attached to the fish — the visible white spots), the tomont (fallen to the substrate, dividing to produce new parasites), and the theront (free-swimming infective stage, seeking a new host). Medications only kill the free-swimming theront stage — the parasite cannot be killed while attached to the fish or while encysted in the substrate tomont stage. The treatment strategy is therefore: maintain effective medication concentration continuously until all tomonts have completed their division cycle and released theronts, and all theronts have been exposed to the medication. This cycle takes 10-14 days at 72-76°F, or as little as 4-5 days at 82-84°F (the heat method).</p>
        <p>Stopping treatment when the white spots disappear is the most common treatment failure. The spots disappearing means the trophonts have fallen off and become tomonts — the tank is full of parasites that haven't yet released their infective theronts. Treatment stopped at this point leads to complete reinfestation within days.</p>

        <h2>The Heat Method</h2>
        <p>Raising temperature to 82-86°F (if the species tolerates it) accelerates the ich life cycle dramatically — the entire cycle from trophont to theront is completed in 3-4 days rather than 10-14 days, and the theront's viability window at high temperature is reduced. Maintain the elevated temperature for a minimum of 10 days after the last visible spot to ensure all life cycle stages are complete. Increase aeration — warmer water holds less oxygen. Not appropriate for cold-water fish (goldfish, white clouds) or temperature-sensitive species (discus tolerate high temps; delicate species may not).</p>

        <h2>Chemical Treatments</h2>
        <p><strong>Ich-X (Hikari, formerly Fritz Ich-X):</strong> A formaldehyde and malachite green-based treatment considered one of the safest and most effective for ich. Dye-free formula is safer for scaleless fish and some sensitive species. Follow label dosing; remove activated carbon. Repeat every 24 hours with a 25-30% water change before each dose for 10 days minimum.</p>
        <p><strong>API Super Ick Cure:</strong> Malachite green plus other active ingredients. Effective but stronger — some sensitivity in scaleless fish (clown loaches, cory catfish), which may require half-dose. Not safe for invertebrates.</p>
        <p><strong>Salt (aquarium salt, not marine):</strong> Sodium chloride at 1-3 tablespoons per 5 gallons inhibits theront survival and reduces osmotic stress on fish during infection. Not curative alone but useful as a supportive treatment combined with heat or chemical treatment. Safe for most freshwater fish; not safe for plants or invertebrates at higher concentrations.</p>

        <h2>After Treatment — Prevention</h2>
        <p>Ich enters tanks from: new fish (quarantine all new fish — the most reliable prevention), aquatic plants from infected systems, water from pet store bags, and equipment moved between tanks. Once successfully treated, the tank is ich-free — but there is no lasting immunity. New introductions restart the risk. The parasite cannot survive in an established tank without a fish host for more than 48 hours at room temperature — a fish-out "fallow" period of 4-6 weeks in the display tank (all fish moved to a hospital tank for treatment) reliably clears ich from the display environment.</p>

        {/* Money path — live amazon-brand search hops (heat-method kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop heat-method husbandry gear
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            The heat method depends on holding 82–86°F for 10+ days after the
            last visible spot (species-permitting) and adding aeration because
            warmer water holds less oxygen. A heater rated for the tank, a
            separate digital thermometer (heater thermostats drift), and an
            air-driven sponge filter cover that husbandry set. A spare
            hospital / quarantine tank is how you isolate spotted fish or run
            a fish-out fallow period without medicating the display. Same
            heater and thermometer hops used on the{' '}
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
            and they do not treat, reverse, or cure ich. Fish.com earns a
            commission on qualifying purchases at no extra cost to you. Empty
            Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/eheim+jager+heater?s=health-ich"
              amazonLabel="Browse aquarium heaters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+digital+thermometer?s=health-ich"
              amazonLabel="Browse digital aquarium thermometers on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sponge+filter?s=health-ich"
              amazonLabel="Browse sponge filters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=health-ich"
              amazonLabel="Browse quarantine / hospital tanks on Amazon →"
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
