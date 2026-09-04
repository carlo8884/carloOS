import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ArticleSourcesList, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Bacterial Diseases of Fish — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/bacterial-diseases-of-fish", publisher: "Merck Vet Manual" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Aeromonas Infections in Fish — UF/IFAS Extension FA-TP-174.", url: "https://edis.ifas.ufl.edu/publication/FA174", publisher: "UF/IFAS Extension" },
  { label: "Francis-Floyd, R. Stress — Its Role in Fish Disease — UF/IFAS Extension FA-43.", url: "https://edis.ifas.ufl.edu/publication/FA043", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Bacterial Infections in Aquarium Fish — Signs & Treatment | Fish.com', description: "How to recognize and treat bacterial infections in fish: ulcers, red streaks, septicemia, and mouth fungus. Why water quality is almost always the root cause.", path: '/health/bacterial-infections', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Bacterial Infections in Aquarium Fish', description: 'Signs, causes, and treatment of gram-negative bacterial infections in aquarium fish.', url: 'https://fish.com/health/bacterial-infections', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})
export default function BacterialInfectionsPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Bacterial Infections in Fish', subtitle: "Bacterial infection is one of the most common — and most misunderstood — categories of fish illness. The great majority are caused by opportunistic gram-negative bacteria that are always present in aquarium water and only turn dangerous when a fish is stressed or injured, almost always by poor water quality. Understanding that distinction is the key to both treating and preventing them.", category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'June 2026', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Bacterial Infections', href: '/health/bacterial-infections' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Fin Rot", href: "/health/fin-rot", category: "Fish Health" }, { title: "Dropsy Treatment", href: "/health/dropsy-treatment", category: "Fish Health" }, { title: "Ich Treatment Guide", href: "/health/ich-treatment", category: "Fish Health" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Warning Signs</div>
          {['Open sores or ulcers on the body', 'Red streaks in fins or body (septicemia)', 'Frayed, receding fins', 'Bloating with raised scales (dropsy)', 'Cloudy eyes or mouth fungus', 'Lethargy, clamped fins, loss of appetite'].map(s => (
            <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Fin Rot', href: '/health/fin-rot' }, { label: 'Dropsy', href: '/health/dropsy-treatment' }, { label: 'Pop-Eye', href: '/health/pop-eye' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-bacterial-infections" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the water-first plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Water-first / hospital-tank checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the water-first / hospital-tank order — test ammonia,
            nitrite, and nitrate before you treat, isolate the affected fish
            in a spare hospital tank so the display biofilter stays
            protected, and quarantine every new arrival. Educational
            husbandry, not a diagnosis or a cure. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Water-first / hospital-tank checklist"
            subtitle="Email the test-water-first and hospital-tank isolation order. No spam."
            ctaText="Email my water-first hospital-tank checklist"
            source="health-bacterial-infections-under-hero"
          />
        </div>

        <h2>Opportunistic, Not Contagious</h2>
        <DropCap>The crucial fact about most fish bacterial infections is that the bacteria responsible — chiefly gram-negative genera such as Aeromonas, Pseudomonas, and Vibrio — are ubiquitous. They live in every aquarium, on every surface, all the time, and a healthy fish with intact slime coat and a functioning immune system fends them off without difficulty. Disease occurs when that defense is compromised: by chronically elevated ammonia or nitrite, by accumulating nitrate, by a physical injury, by stress from aggression or shipping, or by a temperature shock. The infection is the consequence; the water-quality or stress problem is the cause. This is why dosing antibiotics without correcting the underlying environment so often fails — the medicine knocks back the bacteria, but the same conditions simply invite the next infection.</DropCap>

        <h2>Recognizing the Signs</h2>
        <p>Bacterial infections present in several recognizable ways. <strong>Ulcers and open sores</strong> — reddened, eroded patches on the flank — are classic signs of Aeromonas infection. <strong>Septicemia</strong> shows as red streaks running through the fins or across the body as bacteria enter the bloodstream, a serious systemic sign. <strong>Fin rot</strong>, in which fins fray and recede with reddened or whitened edges, is among the most common presentations. <strong>Dropsy</strong> — bloating with scales raised in a pinecone pattern — frequently stems from internal bacterial infection of the kidneys. Cloudy eyes, pop-eye, and mouth fungus (columnaris, despite the name a bacterium) round out the common picture.</p>

        <CalloutBox variant="warning" title="Fix the water first">
          Antibiotics rarely succeed if the conditions that allowed the infection persist. Before and during any treatment, test the water and correct elevated ammonia, nitrite, or nitrate through water changes — this is the single most important step.
        </CalloutBox>

        <h2>Treatment Approach</h2>
        <p>Begin by isolating the affected fish in a hospital tank where treatment can be concentrated and the display's biological filter is protected from medication. Correct water quality immediately with clean, dechlorinated, parameter-matched water. For external bacterial infections, aquarium-safe antibacterial medications are used; aquarium salt can support the slime coat and reduce osmotic stress in species that tolerate it. For internal or systemic infections such as suspected kidney involvement, antibiotics that can be delivered in food (mixed with a binding agent) reach the site more effectively than water treatment alone. Complete the full course rather than stopping when symptoms ease, to avoid breeding resistant bacteria. Severe, advanced systemic infections — particularly with full dropsy — carry a poor prognosis even with aggressive care.</p>

        <h2>Antibiotic Stewardship</h2>
        <p>Antibiotics should be a considered response, not a reflex. Overuse drives bacterial resistance, harms the beneficial nitrifying bacteria your filter depends on, and can mask the real environmental cause. Identify the likely problem, treat in a hospital tank where possible, dose accurately for the tank volume, and complete the course. Never combine multiple antibiotics without understanding their interactions, and remember that many mild external infections resolve simply by moving the fish to pristine water with the stressor removed.</p>

        <h2>Prevention</h2>
        <p>Because these infections are opportunistic, prevention is overwhelmingly a matter of husbandry. Keep ammonia and nitrite at zero and nitrate low through a fully established <a href="/health/nitrogen-cycle-explained">nitrogen cycle</a> and regular water changes. Quarantine every new arrival to avoid importing both pathogens and stress. Avoid overcrowding and incompatible tankmates that cause chronic stress and injury. Feed a varied, high-quality diet to support immune function. A fish kept in clean, stable water at appropriate density very rarely succumbs to the bacteria that are always swimming alongside it.</p>

        {/* Money path — live amazon-brand search hops (water-first / hospital-tank kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop a water-first hospital-tank kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Fix the water first — a liquid master kit is how you see ammonia,
            nitrite, and nitrate that let opportunistic bacteria take hold.
            Isolate in a spare hospital tank with a seeded sponge filter so
            treatment stays off the display biofilter, a heater rated for the
            tank, and a separate digital thermometer so the dial is not the
            only reading. Same test-kit hop used on the{' '}
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
            <Link href="/health/dropsy-treatment" className="text-brand-primary no-underline hover:underline">
              dropsy guide
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
            and they do not treat, reverse, or cure bacterial infections.
            Fish.com earns a commission on qualifying purchases at no extra
            cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=health-bacterial-infections"
              amazonLabel="Browse API Master Test Kit on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=health-bacterial-infections"
              amazonLabel="Browse quarantine / hospital tanks on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sponge+filter?s=health-bacterial-infections"
              amazonLabel="Browse sponge filters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/eheim+jager+heater?s=health-bacterial-infections"
              amazonLabel="Browse aquarium heaters on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+digital+thermometer?s=health-bacterial-infections"
              amazonLabel="Browse digital aquarium thermometers on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/setup/quarantine-tank-guide" className="text-brand-primary hover:underline">
              Quarantine Tank Guide
            </Link>
            {' · '}
            <Link href="/health/fin-rot" className="text-brand-primary hover:underline">
              Fin Rot
            </Link>
            {' · '}
            <Link href="/health/dropsy-treatment" className="text-brand-primary hover:underline">
              Dropsy Treatment
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
