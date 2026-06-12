import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Yanong, R.P.E. Use of Chemicals in Aquaculture in the United States — UF/IFAS Extension FA-54.", url: "https://edis.ifas.ufl.edu/publication/FA054", publisher: "UF/IFAS Extension" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Treating Sick Fish — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/treating-sick-fish", publisher: "Merck Vet Manual" },
  { label: "Yanong, R.P.E. Disease Management in Recirculating Aquaculture Systems — UF/IFAS Extension FA-107.", url: "https://edis.ifas.ufl.edu/publication/FA107", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Medicating Aquarium Fish — Hospital Tanks & Safe Dosing | Fish.com', description: "How to medicate aquarium fish safely: when to use a hospital tank, accurate dosing, protecting your filter, drug classes, and why medication is a last resort.", path: '/health/medicating-aquarium-fish', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Medicating Aquarium Fish', description: 'Hospital tanks, accurate dosing, filter protection, and safe use of fish medications.', url: 'https://fish.com/health/medicating-aquarium-fish', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })
export default function MedicatingFishPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Medicating Aquarium Fish', subtitle: "Reaching for medication is often a fishkeeper's first instinct at the sight of a sick fish, but careless dosing causes as many losses as the diseases it targets. Knowing when to medicate, where, how to dose accurately, and how to protect your biological filter turns medication from a gamble into a controlled treatment. This guide covers the principles of treating fish safely.", category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Medicating Fish', href: '/health/medicating-aquarium-fish' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Fish Disease Guide", href: "/health/fish-disease-guide", category: "Fish Health" }, { title: "Quarantine Tank Guide", href: "/setup/quarantine-tank-guide", category: "Tank Setup" }, { title: "Ich Treatment Guide", href: "/health/ich-treatment", category: "Fish Health" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Before You Dose</div>
          {['Identify the problem first', 'Test and correct water quality', 'Use a hospital tank when possible', 'Calculate true water volume', 'Remove carbon and chemical media', 'Watch for oxygen drop and stress', 'Complete the full course'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Quarantine Tank Guide', href: '/setup/quarantine-tank-guide' }, { label: 'Bacterial Infections', href: '/health/bacterial-infections' }, { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-medicating-fish" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        <h2>Medicate Last, Not First</h2>
        <DropCap>The most important rule of fish medication is that it should rarely be the first response. A great many problems that prompt a trip to the medication shelf — clamped fins, lethargy, a touch of fin erosion, rapid breathing — are caused by water quality or stress, not by a pathogen that a drug can fix. Dosing such a fish does nothing for the real cause while exposing it, and the beneficial bacteria in the filter, to chemicals it did not need. The disciplined sequence is: observe and identify the likely problem, test and correct the water, remove any obvious stressor, and only then medicate if a specific pathogen is genuinely indicated. Shotgunning multiple medications at an undiagnosed fish is one of the surest ways to kill it.</DropCap>

        <h2>The Hospital Tank</h2>
        <p>Wherever possible, medication should happen in a separate hospital tank rather than the main display. Treating in the display exposes healthy fish, invertebrates, and plants to drugs they do not need; many medications are toxic to shrimp, snails, and scaleless fish, and some stain silicone and decor permanently. Dosing the display also risks the biological filter, since several antibacterial medications kill the nitrifying bacteria the tank depends on, potentially triggering an ammonia spike on top of the original illness. A simple bare hospital tank with a heater, a gentle sponge filter, and a hiding place lets you isolate the patient, dose precisely, and perform large water changes between treatments without harming the rest of your livestock.</p>

        <CalloutBox variant="warning" title="Remove carbon and protect your filter">
          Activated carbon adsorbs medications and renders them useless — remove chemical filtration before dosing. Be aware that some antibacterials kill nitrifying bacteria; treating in a hospital tank protects your display's biological filter from a crash.
        </CalloutBox>

        <h2>Dose for the Real Volume</h2>
        <p>Inaccurate dosing is a leading cause of treatment failure and harm. Overdosing can poison fish outright; underdosing fails to control the pathogen and encourages resistance. Always calculate the actual water volume rather than the tank's nominal rating: substrate, rock, and decor can easily displace 10 to 15 percent of the stated capacity, so a 20-gallon tank may hold closer to 17 gallons of water. Measure medications precisely, follow the manufacturer's instructions for the specific product, and never assume two products can be combined — many interactions are dangerous. Increase aeration during treatment, since several medications and the warmer temperatures sometimes used reduce dissolved oxygen.</p>

        <h2>Knowing the Drug Classes</h2>
        <p>Different problems call for different classes of medication. <strong>Antiparasitics</strong> address external parasites: copper-based and formalin or malachite-green products target protozoans like ich and velvet, while specific agents address flukes and worms. <strong>Antibacterials and antibiotics</strong> treat bacterial infections; some are added to water, while internal infections respond better to antibiotics delivered in food. <strong>Antifungals</strong> address true fungal infections such as Saprolegnia. <strong>Aquarium salt</strong>, used carefully and only in species that tolerate it, supports the slime coat and osmoregulation and can ease mild infections. Matching the class to a correctly identified problem is the whole game; the right drug for the wrong diagnosis still fails.</p>

        <h2>Finishing and Follow-Up</h2>
        <p>Complete the full recommended course of any medication even if the fish appears to recover early — stopping short allows survivors to rebound and, with antibiotics, breeds resistant strains. After treatment, run fresh carbon to strip residual medication from the hospital tank, and continue excellent water quality during recovery. Reintroduce a recovered fish to the display only when fully healed and after observing it for any relapse. Throughout, remember that the surest way to need medication rarely is to prevent disease in the first place through stable water, sensible stocking, and a robust <a href="/setup/quarantine-tank-guide">quarantine routine</a>.</p>

        <ArticleSourcesList sources={SOURCES} />
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div style={{ background: '#f7fbfd', border: '1px solid #d4e5ee', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: '#4a6573', marginBottom: '8px' }}>Hospital Tank Equipment</div>
          <p style={{ fontSize: '14px', margin: '0 0 8px', color: '#4a6573', lineHeight: 1.55 }}>A hospital tank requires only three things: an adjustable heater to hold a stable treatment temperature, a sponge filter to maintain gentle biological filtration without harming the patient, and an air pump to drive it and maintain oxygenation during treatment. These are husbandry tools that support safe medication practice; they do not treat disease and are not a substitute for correct diagnosis and veterinary guidance when needed.</p>
          <p style={{ fontSize: '12px', margin: '0 0 12px', color: '#7a95a0', lineHeight: 1.4 }}>Fish.com earns an affiliate commission on qualifying purchases at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/aquarium%20sponge%20filter%20heater%20air%20pump%20hospital%20tank?s=health-medicating-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#232f3e', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Amazon →</a>
            <a href="/go/chewy-brand/aquarium%20sponge%20filter%20hospital%20tank%20setup?s=health-medicating-fish" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: '#1e90ff', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
