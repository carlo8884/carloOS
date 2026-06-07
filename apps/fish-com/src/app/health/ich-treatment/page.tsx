import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Ichthyophthirius multifiliis (Ich) — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/ichthyophthirius-multifiliis-in-fish", publisher: "Merck Vet Manual" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Ich (White Spot Disease) Treatment Guide — UF/IFAS Extension FA-28", url: "https://edis.ifas.ufl.edu/publication/FA028", publisher: "UF/IFAS Extension" },
  { label: "Dickerson, H.W. Ichthyophthirius multifiliis and Cryptocaryon irritans. Fish Diseases and Disorders Vol 1, CABI, 2006.", publisher: "CABI" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Ich Treatment Guide — White Spots, Heat Method & Ich-X | Fish.com', description: 'Ich (white spot disease) is the most common fish disease. The heat method, salt treatment, and chemical treatments explained.', path: '/health/ich-treatment', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Ich Treatment Guide', description: 'Heat method, salt, and chemical treatment for Ichthyophthirius multifiliis (ich) in aquarium fish.', url: 'https://fish.com/health/ich-treatment', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function IchTreatmentPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Ich Treatment Guide', subtitle: 'Ichthyophthirius multifiliis — "ich" or white spot disease — is the most common disease in aquarium fish. The characteristic white salt-grain spots are visible on the body and fins. Treatment is straightforward once you understand the parasite\'s life cycle: only one stage can be killed by treatment, and that window must be exploited for 10-14 days minimum.', category: 'Fish Health', authorName: 'Fish.com Editorial', authorAvatar: '🐠', publishedAt: 'May 2025', readTime: '9 min' }}
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
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-ich" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
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

        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div style={{ background: '#f7fbfd', border: '1px solid #d4e5ee', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4a6573', marginBottom: '8px' }}>Heater + Thermometer for Heat Treatment</div>
          <p style={{ fontSize: '14px', margin: '0 0 8px', color: '#4a6573', lineHeight: 1.55 }}>The heat method requires raising and holding temperature precisely at 82-86°F for 10+ days. A reliable adjustable heater and a separate thermometer (heater thermostats drift) are the two pieces of equipment the method depends on. Equipment supports disease management; it is not a substitute for correct diagnosis or treatment of fish illness.</p>
          <p style={{ fontSize: '12px', margin: '0 0 12px', color: '#7a95a0', lineHeight: 1.4 }}>Fish.com earns an affiliate commission on qualifying purchases at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/aquarium%20adjustable%20heater%20thermometer%20ich%20heat%20treatment?s=health-ich-treatment" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#232f3e', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/aquarium%20heater%20thermometer%20fish%20tank?s=health-ich-treatment" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#1e90ff', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
        <ArticleSourcesList sources={SOURCES} />
      </div>
    </ArticleLayout>
  )
}
