import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ArticleSourcesList, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Swim Bladder Disease in Fish — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/swim-bladder-disease-in-fish", publisher: "Merck Vet Manual" },
  { label: "Noga, E.J. Fish Disease: Diagnosis and Treatment, 2nd ed. Wiley-Blackwell, 2010.", publisher: "Wiley-Blackwell" },
  { label: "Yanong, R.P.E. Disease Management in Recirculating Aquaculture Systems — UF/IFAS Extension FA-107.", url: "https://edis.ifas.ufl.edu/publication/FA107", publisher: "UF/IFAS Extension" },
]

export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Swim Bladder Disease in Fish — Causes, Pea Treatment | Fish.com', description: 'Swim bladder problems cause floating, sinking, or listing. Constipation is the most common cause in fancy goldfish. The fasting and pea protocol', path: '/health/swim-bladder-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'fish-com', title: 'Swim Bladder Disease in Fish', description: 'Causes, constipation treatment, and prognosis for swim bladder disorders in aquarium fish.', url: 'https://fish.com/health/swim-bladder-disease', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z', speakable: true ,
  citation: SOURCES,
})
export default function SwimBladderPage() {
  return (
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Swim Bladder Disease', subtitle: 'Swim bladder disorder describes any condition affecting the gas-filled organ fish use to control buoyancy. The fish floats helplessly at the surface, sinks to the bottom, or lists sideways — dramatic and distressing to observe. The cause determines the prognosis: constipation-related disorders often resolve; structural or degenerative disorders in fancy goldfish often do not.', category: 'Fish Health', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Aquarium Health', href: '/health' }, { name: 'Swim Bladder Disease', href: '/health/swim-bladder-disease' }]}
      schema={schema}
      relatedLinks={[{ title: "Fish Health Hub", href: "/health", category: "Fish Health" }, { title: "Fish Disease Guide", href: "/health/fish-disease-guide", category: "Fish Health" }, { title: "Dropsy Treatment", href: "/health/dropsy-treatment", category: "Fish Health" }, { title: "Medicating Aquarium Fish", href: "/health/medicating-aquarium-fish", category: "Fish Health" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Diagnosis</div>
          {[['Floats at surface', 'Compressed swim bladder or overinflation'], ['Sinks to bottom', 'Underinflation or organ damage'], ['Lists sideways', 'Asymmetric inflation — often structural'], ['After eating', 'Constipation/gas pressure — most treatable'], ['Always present', 'Structural (fancy goldfish) — chronic management']].map(([s, d]) => (
            <div key={s} className="py-2 border-b border-brand-border last:border-0">
              <div className="text-xs font-bold text-brand-dark">{s}</div>
              <div className="text-2xs text-brand-text-light">{d}</div>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Goldfish Care', href: '/species/goldfish' }, { label: 'Dropsy Treatment', href: '/health/dropsy-treatment' }, { label: 'Fish Disease Guide', href: '/health/fish-disease-guide' }]} />
        <CrossPortfolioCard currentSite="fish-com" contentType="health" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Fishkeeping tips every Thursday." source="health-swim-bladder" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the fasting-and-pea plan
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Swim-bladder fasting-and-pea checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the fasting-and-pea / water-quality / shallow-hospital order
            — 24–48 hours with no food, then a small skinned cooked pea if
            constipation is the likely cause, hold excellent water quality,
            and use a spare shallow hospital tank (4–6 inches) when the fish
            cannot hold neutral buoyancy. Educational husbandry, not a
            diagnosis or a cure. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="fish-com"
            title="Swim-bladder fasting-and-pea checklist"
            subtitle="Email the fasting-and-pea, water-quality, and shallow-hospital order. No spam."
            ctaText="Email my swim-bladder fasting-and-pea checklist"
            source="health-swim-bladder-under-hero"
          />
        </div>

        <h2>Causes — What's Actually Wrong</h2>
        <p><strong>Constipation and gas (most common, most treatable):</strong> Intestinal gas from constipation or rapid food intake presses against the swim bladder, displacing or compressing it. This is the most common cause of sudden swim bladder symptoms in goldfish and bettas after feeding — particularly with dry foods that expand in the stomach. The fish that was fine before feeding and now floats after eating has constipation-related swim bladder compression. This is the case the pea protocol addresses.</p>
        <p><strong>Infection:</strong> Bacterial infection of the swim bladder itself, or infection elsewhere that spreads to it. Presents as swim bladder symptoms accompanied by other systemic signs (loss of appetite, fin clamping, lethargy). Treated with appropriate antibiotics.</p>
        <p><strong>Physical injury:</strong> A strike against a hard surface, net injury, or attack from another fish can directly damage the swim bladder. Acute onset after a visible traumatic event. Prognosis variable — minor damage may heal; significant structural damage may not.</p>
        <p><strong>Structural / congenital (fancy goldfish):</strong> Fancy goldfish (ryukin, oranda, ranchu, telescope) were bred for compressed, round body shapes that position the organs abnormally. The swim bladder in these fish is often deformed, mispositioned, or functionally compromised as a consequence of their selective breeding. Chronic, persistent swim bladder problems in fancy goldfish with no other signs of illness often represent this irreversible structural cause — no amount of feeding modification will fix a deformed swim bladder.</p>

        <h2>The Fasting and Pea Protocol</h2>
        <p>For swim bladder symptoms likely caused by constipation (sudden onset, otherwise healthy fish, symptoms appeared after feeding): fast the fish for 24-48 hours — no food at all. This allows the GI tract to clear the blockage. After fasting, offer a small piece of skinned, cooked pea (green peas contain natural laxative compounds and soft fiber). Most fish accept peas readily. Continue with peas for 1-2 feedings, then resume normal feeding with higher-fiber, less-gas-producing foods.</p>
        <p>Why peas: the soft fiber content promotes GI motility and the natural compounds in green peas appear to have a mild laxative effect on fish. This is one of the few home remedies in fishkeeping with genuine, broad empirical support from years of aquarist experience. It does not work for all swim bladder causes — but for constipation-related cases, it often resolves the problem within 24-48 hours.</p>

        <h2>Long-Term Management for Structural Cases</h2>
        <p>Fancy goldfish with chronic swim bladder disorders can live comfortably for years with appropriate management. Key adjustments: feed sinking rather than floating foods (surface feeding causes air ingestion that worsens buoyancy problems), soak all dry foods before feeding (reduces expansion in the stomach), reduce feeding frequency slightly, and maintain excellent water quality (stressed fish with compromised organ function need pristine conditions). Some keepers use shallow water (4-6 inches) for severely affected fish — the reduced depth makes swimming and reaching food much easier for a fish that cannot maintain neutral buoyancy.</p>

        {/* Money path — live amazon-brand search hops (fasting / water-quality / shallow-hospital kit).
            ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
            Category searches only — not a ranked list. No medication hops. */}
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop fasting-and-pea husbandry gear
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            Fasting-and-pea husbandry still depends on excellent water
            quality — a liquid master kit is how you see ammonia, nitrite,
            and nitrate while the GI tract clears. A spare hospital /
            quarantine tank is how you run the 4–6 inch shallow-water setup
            for a fish that cannot hold neutral buoyancy, without dropping
            the display. A seeded sponge filter keeps that hospital water
            moving. Same test-kit hop used on the{' '}
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
            . Heater and thermometer hops stay off this page — swim-bladder
            copy does not call a heat method. The hops below are not a
            ranked product list, they are not medications, and they do not
            treat, reverse, or cure swim bladder disease. Fish.com earns a
            commission on qualifying purchases at no extra cost to you.
            Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/api+freshwater+master+test+kit?s=health-swim-bladder"
              amazonLabel="Browse API Master Test Kit on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+quarantine+hospital+tank+net?s=health-swim-bladder"
              amazonLabel="Browse quarantine / hospital tanks on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/aquarium+sponge+filter?s=health-swim-bladder"
              amazonLabel="Browse sponge filters on Amazon →"
            />
          </div>
          <p className="text-2xs text-brand-text-light mt-3">
            See also:{' '}
            <Link href="/species/goldfish" className="text-brand-primary hover:underline">
              Goldfish Care
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
