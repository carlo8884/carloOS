import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, StockImage , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { FAQAccordion, SchemaScript, buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const SOURCES = [
  { label: "Paracheirodon innesi — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/paracheirodon-innesi/", publisher: "Seriously Fish" },
  { label: "Paracheirodon innesi — FishBase species record", url: "https://www.fishbase.se/summary/Paracheirodon-innesi.html", publisher: "FishBase" },
  { label: "Neon Tetra Disease (Pleistophora hyphessobryconis) — Merck Veterinary Manual", url: "https://www.merckvetmanual.com/exotic-and-laboratory-animals/aquarium-fish/microsporidiosis-in-fish", publisher: "Merck Vet Manual" },
  { label: "Weitzman, S.H. & Fink, S.V. Characidae. In: Checklist of the Freshwater Fishes of South and Central America. EDIPUCRS, 2003.", publisher: "EDIPUCRS" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Neon Tetra Care Guide — School Size, NTD | Fish.com', description: 'Neon tetras are the best-known aquarium fish. Schools of 15+ in planted tanks are spectacular. Neon tetra disease has no cure', path: '/species/neon-tetra', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Neon Tetra Care Guide', description: 'School size, neon tetra disease, planted tank display, and care for Paracheirodon innesi.', url: 'https://fish.com/species/neon-tetra', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'How many neon tetras should be kept together?',
    answer:
      'Ten is the working minimum; 15–20+ produces the best display. School cohesion increases with group size — larger schools move as a single organism and show the coordinated, flowing behavior that makes schooling fish visually compelling. Twenty neons in a densely planted 30-gallon with dark substrate is a dramatically different display than ten.',
    answerText:
      'Ten minimum; 15-20+ for the best display. School cohesion and coordinated movement increase with group size.',
  },
  {
    question: 'Is neon tetra disease curable?',
    answer:
      'No. Neon tetra disease, caused by the microsporidian parasite Pleistophora hyphessobryconis, has no cure. Affected fish must be removed and humanely euthanized (clove oil overdose) so spores are not released into the tank as they die. Prevention is the only defense: rigorous 4-week quarantine of every new neon and purchasing from reputable sources.',
    answerText:
      'No. NTD (Pleistophora hyphessobryconis) has no cure. Remove and humanely euthanize affected fish; prevent with 4-week quarantine of all new neons.',
  },
  {
    question: 'Why do neon tetras die soon after purchase?',
    answer:
      'The fish that die within days are almost always mass-farmed specimens stressed by overcrowded holding tanks, poor water quality in transit, exposure to mixed-source disease, and shipping temperature and chemistry swings. Wild-caught neons properly handled and quarantined are actually quite hardy. Quarantine new fish 4 weeks minimum and buy from quality sources rather than cheap bulk-lot stock.',
    answerText:
      'Early deaths trace to mass-farmed stock stressed by crowding, transit, and disease exposure. Quarantine 4 weeks and buy from quality sources; established neons are hardy.',
  },
  {
    question: 'What is the difference between neon and cardinal tetras?',
    answer:
      'The cardinal tetra (Paracheirodon axelrodi) is larger — 2 inches versus 1.25 — and its red coloration extends the full length of the belly rather than only the posterior half. Cardinals are generally more vivid in large schools but more sensitive to water quality, prefer strictly soft acidic conditions, and cost more because they are predominantly wild-caught. Neons suit general community tanks with harder or more neutral water.',
    answerText:
      'Cardinals are larger (2 in vs 1.25 in) with red along the full belly, more vivid but more sensitive and costlier. Neons suit general community water better.',
  },
  {
    question: 'How long do neon tetras live?',
    answer:
      'Five to ten years in good conditions. Long-term health depends on water quality maintenance: nitrate under 20 ppm, stable temperature and pH, and ammonia and nitrite at 0.',
    answerText:
      '5-10 years in good conditions: nitrate under 20 ppm, stable temperature and pH, ammonia and nitrite at 0.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function NeonTetraPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Neon Tetra Care Guide', subtitle: 'Paracheirodon innesi — the neon tetra may be the most recognizable aquarium fish in existence. The electric blue stripe and vivid red tail have made it a fixture in the hobby since the 1930s. In groups of 15+ in a well-planted tank, the school creates a living light display that no other fish replicates at their size and price point.', category: 'Species Guide', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Neon Tetra', href: '/species/neon-tetra' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "Cardinal Tetra", href: "/species/cardinal-tetra", category: "Species Guide" }, { title: "Ember Tetra", href: "/species/ember-tetra", category: "Species Guide" }, { title: "Betta Fish", href: "/species/betta-fish", category: "Species Guide" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Paracheirodon innesi'], ['Adult size', '1.25 inches'], ['Temperature', '68–79°F (cooler preferred)'], ['pH', '5.5–7.0 (soft acidic optimal)'], ['School size', '10 min — 15-20+ for display'], ['Cardinal vs neon', 'Cardinal tetra larger, more vivid red'], ['Lifespan', '5–10 years in good conditions']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'Cardinal Tetra', href: '/species/cardinal-tetra' }, { label: 'Ember Tetra', href: '/species/ember-tetra' }, { label: 'Planted Tank Setup', href: '/setup/planted-tank-setup' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-neon-tetra" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <StockImage manifestKey="fish-com:species-neon-tetra" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="A school of neon tetras (Paracheirodon innesi) in a planted aquarium." priority />

        <h2>Why Store Neons Die — And How to Prevent It</h2>
        <DropCap>Neon tetras have an undeserved reputation for being fragile. Wild-caught neons from the Amazon, properly handled and quarantined, are actually quite hardy. The fish that die within days of purchase are almost always mass-farmed specimens subjected to: overcrowded holding tanks, poor water quality in transit, exposure to multiple disease sources from mixed-source holding systems, and the compounded stress of temperature and chemistry changes during shipping. The solution is quarantine (4 weeks minimum in a separate tank before introducing to an established aquarium) and purchasing from quality sources — not cheap bulk-lot fish store stock.</DropCap>
        <p>Neons that survive their first month in appropriate conditions typically prove hardy. Water quality maintenance (nitrate under 20 ppm, stable temperature and pH, 0 ammonia and nitrite) keeps them healthy long-term. The "neons always die" experience is almost entirely attributable to disease introduction from unquarantined fish and poor initial stock quality.</p>

        <h2>Neon Tetra Disease (NTD) — Know It, Fear It</h2>
        <p>Neon tetra disease — caused by the microsporidian parasite Pleistophora hyphessobryconis — is the most important health concern for neon keepers. Signs: a white or pale area developing on the body (typically starting near the dorsal fin), the loss of the iridescent blue-green color in affected areas, progressive deterioration over days to weeks, secondary infections at the lesion sites, and eventual death. There is no cure. The parasite's spores are released when infected fish die and are consumed by other fish — it spreads through the tank.</p>
        <p>Management when NTD appears: remove and euthanize affected fish immediately (clove oil overdose is humane — do not allow them to die slowly in the tank releasing spores). Do not add new fish to an infected tank until all fish have been removed and the tank has been stripped and disinfected. Prevention: quarantine all new neons rigorously, purchase only from reputable sources, do not feed infected fish to other fish, and do not introduce fish from unknown sources to an established neon colony.</p>

        <CalloutBox variant="warning" title="NTD has no cure">
          Neon tetra disease, caused by the microsporidian parasite <em>Pleistophora hyphessobryconis</em>, has no treatment. Affected fish must be removed and humanely euthanized (clove oil overdose) to prevent spore release as they die. Rigorous 4-week quarantine of every new neon is the only reliable defense — once NTD enters an established colony it can persist for years.
        </CalloutBox>

        <h2>Display — The School of 20</h2>
        <p>The visual impact of neon tetras scales dramatically with school size. Ten neons are pleasant. Twenty neons in a densely planted 30-gallon with dark substrate and good lighting are breathtaking — the school moves as a single organism, the blue stripe and red tail catching light from every angle simultaneously. The school cohesion (how tightly the fish school) also increases with group size — larger schools produce the coordinated, flowing movement behavior that is the most visually compelling aspect of schooling fish.</p>
        <p>Tank setup for best display: dark substrate (black sand), green plants creating visual contrast against which the blue-red stripe stands out (Java fern, Anubias, Rotala), moderate lighting, and a dark background. Tannins (Indian almond leaves, driftwood, peat) darken the water slightly, mimic the fish's natural blackwater environment, and produce the slightly acidic conditions that intensify their color.</p>

        <h2>Neon vs Cardinal Tetra</h2>
        <p>The cardinal tetra (Paracheirodon axelrodi) is the neon's larger cousin — 2 inches versus 1.25 inches, with the red coloration extending the full length of the belly rather than only the posterior half as in neons. Cardinals are generally considered more vivid and more impressive in large schools, but they are more sensitive to water quality than neons and prefer more strictly soft, acidic conditions. Cardinals also tend to be more expensive as they are predominantly wild-caught rather than farm-raised. For planted blackwater setups targeting optimal display with slightly acidic soft water, cardinals are the upgrade. For general community tanks with harder or more neutral water, neons are more appropriate.</p>

        <h2>Frequently Asked Questions</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({
            question: f.question,
            answer: f.answer,
            answerText: f.answerText,
          }))}
          includeSchema={false}
          allowMultiple
        />
        <AffiliateDisclosure variant="inline" siteId="fish-com" />
          <div style={{ background: 'var(--brand-surface, #f7fbfd)', border: '1px solid var(--brand-border, #d4e5ee)', borderRadius: '10px', padding: '20px', margin: '32px 0 24px' }}>
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Neon Tetra — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for neon tetra care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/neon%20tetra%20tank%20setup?s=species-neon-tetra" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Neon Tetra Setup on Amazon →</a>
            <a href="/go/chewy-brand/neon%20tetra%20tank%20setup?s=species-neon-tetra" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-primary, #1e90ff)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop on Chewy →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
