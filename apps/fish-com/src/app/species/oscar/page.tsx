import type { Metadata } from 'next'
import { StockImage, buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard , AffiliateDisclosure, ArticleSourcesList } from '@carloOS/ui'
import { FAQAccordion, SchemaScript, buildArticleSchema, buildFAQSchema, combineSchemas } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

const SOURCES = [
  { label: "Astronotus ocellatus — Seriously Fish species profile", url: "https://www.seriouslyfish.com/species/astronotus-ocellatus/", publisher: "Seriously Fish" },
  { label: "Astronotus ocellatus — FishBase species record", url: "https://www.fishbase.se/summary/Astronotus-ocellatus.html", publisher: "FishBase" },
  { label: "Loiselle, P.V. The Cichlid Aquarium. Tetra Press, 1985.", publisher: "Tetra Press" },
  { label: "Novaes, J.L.C. et al. Age, growth and mortality of the oscar cichlid, Astronotus ocellatus, in the middle Solimoes River. Fisheries Research, 2004.", publisher: "Fisheries Research" },
]
export const metadata: Metadata = buildMetadata({ siteId: 'fish-com', title: 'Oscar Fish Care Guide — Large Tank, Personality | Fish.com', description: 'Oscars are the most personable large cichlid. They recognize owners, beg for food, and rearrange their tank. 75+ gallons required, high protein diet.', path: '/species/oscar', type: 'article' })
const articleSchema = buildArticleSchema({ siteId: 'fish-com', title: 'Oscar Fish Care Guide', description: 'Large tank requirements, personality, HITH disease, and feeding for Oscar cichlids.', url: 'https://fish.com/species/oscar', imageUrl: '', authorName: 'Fish.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' ,
  citation: SOURCES,
})

const FAQS = [
  {
    question: 'What size tank does an oscar need?',
    answer:
      'Minimum 75 gallons for one oscar; 125+ gallons for two. Two oscars in a 75-gallon tank will eventually result in one dead oscar when they reach territorial adult size. Heavy filtration is also required — a canister filter rated for 3–4× tank volume or multiple filters, plus weekly 25–30% water changes.',
    answerText:
      '75 gallons minimum for one oscar, 125+ for two, with a canister filter rated for 3-4x tank volume and weekly 25-30% water changes.',
  },
  {
    question: 'How fast do oscars grow?',
    answer:
      'Approximately 1 inch per month in good conditions. Juveniles sold at 2–4 inches reach 12–18 inches within 12–18 months. A 30-gallon tank that seems spacious for a 3-inch juvenile is severely cramped for an adult — buy the tank for the adult, not the juvenile.',
    answerText:
      'About 1 inch per month in good conditions, reaching 12-18 inches within 12-18 months of purchase as a juvenile.',
  },
  {
    question: 'What is hole-in-the-head (HITH) disease?',
    answer:
      'HITH, also called Head and Lateral Line Erosion, is the most common disease in captive oscars. It presents as pitting lesions on the head and along the lateral line. It is associated with poor water quality (nitrate above 20 ppm is consistently implicated), dietary deficiency (vitamins C and D), and possibly Hexamita or Spironucleus protozoa. Prevention — pristine water and a varied, high-quality diet — is far more effective than cure; advanced erosion has limited healing potential.',
    answerText:
      'Pitting lesions on the head and lateral line, linked to nitrate above 20 ppm, vitamin deficiency, and Hexamita/Spironucleus. Prevention via water quality and varied diet beats treatment.',
  },
  {
    question: 'Should I feed my oscar feeder goldfish?',
    answer:
      'Not as a staple. Feeder fish are nutritionally incomplete (thiaminase in goldfish depletes vitamin B1), often carry disease from pet store holding tanks, and can harbor parasites. An oscar fed exclusively feeders develops deficiencies and HITH over years. The appropriate primary diet is a high-quality large cichlid pellet, supplemented with frozen krill, mysis shrimp, silversides, and earthworms; feeders can be an occasional treat at most.',
    answerText:
      'No, not as a staple — feeders are nutritionally incomplete and carry disease and parasites. Feed quality cichlid pellets plus frozen krill, mysis, silversides, and earthworms.',
  },
  {
    question: 'How long do oscars live?',
    answer:
      'Ten to fifteen years with proper care, becoming genuinely interactive animals — they recognize their owners, react to their approach, and beg at feeding time. The commitment scales with the fish: large tank, heavy filtration, and significant ongoing maintenance.',
    answerText:
      '10-15 years with proper care. They recognize owners and become genuinely interactive, but require a large tank and heavy maintenance.',
  },
]

const faqSchema = buildFAQSchema({
  questions: FAQS.map((f) => ({ question: f.question, answer: f.answerText })),
})

const combinedSchema = combineSchemas(articleSchema, faqSchema)

export default function OscarPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
    <ArticleLayout siteId="fish-com"
      hero={{ title: 'Oscar Fish Care Guide', subtitle: 'Astronotus ocellatus — the most personable large cichlid in the hobby. Oscars recognize their owners, react to their approach, beg for food at feeding time, and rearrange decorations to suit their preferences. They can live 10–15 years and become genuinely interactive animals. The commitment: they require at minimum 75 gallons, produce enormous waste, and will eat anything smaller than themselves.', category: 'Species Guide — Intermediate', authorName: 'Fish.com Editorial', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Species', href: '/species' }, { name: 'Oscar', href: '/species/oscar' }]}
      relatedLinks={[{ title: "Species Hub", href: "/species", category: "Species" }, { title: "African Cichlid", href: "/species/african-cichlid", category: "Species Guide" }, { title: "Discus", href: "/species/discus", category: "Species Guide" }, { title: "Best Canister Filters", href: "/reviews/best-canister-filters", category: "Reviews" }]}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Stats</div>
          {[['Scientific name', 'Astronotus ocellatus'], ['Adult size', '12–18 inches'], ['Min tank', '75 gallons (1 oscar)'], ['Two oscars', '125+ gallons minimum'], ['Temperature', '74–81°F'], ['pH', '6.0–8.0 (adaptable)'], ['Lifespan', '10–15 years'], ['HITH', 'Most common disease — preventable']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-1.5 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Species" links={[{ label: 'African Cichlid', href: '/species/african-cichlid' }, { label: 'Puffer Fish', href: '/species/puffer-fish' }, { label: 'Best Canister Filters', href: '/reviews/best-canister-filters' }]} />
            <CrossPortfolioCard currentSite="fish-com" contentType="species" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="fish-com" title="The Weekly Tank" subtitle="Species spotlights every Thursday." source="species-oscar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Fish.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
            {/* Under-hero capture — source must end in under-hero so it always renders. */}
            <div className="mb-8">
              <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
                Keep the oscar-setup checklist
              </p>
              <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
                Oscar-setup checklist
              </h2>
              <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
                Email the oscar notes that match the
                care copy on this page — a 75-gallon
                tank so one adult keeps 12–18 inches
                of room, a canister rated 3–4× volume
                plus weekly 25–30% changes so nitrate
                stays under 20 ppm, and a pellet-first
                diet so HITH stays preventable.
                Educational oscar-setup checklist, not
                a new product hop, not livestock, and
                not a substitute for a fish veterinarian.
                The existing oscar tank-setup Amazon
                search stays below. Empty Chewy
                buttons stay hidden. No spam.
              </p>
              <EmailCapture
                variant="inline"
                siteId="fish-com"
                title="Oscar-setup checklist"
                subtitle="Email the 75-gallon, heavy-filter, and HITH-prevention notes. No spam."
                ctaText="Email my oscar-setup checklist"
                source="species-oscar-under-hero"
              />
            </div>
        <StockImage manifestKey="fish-com:species-oscar" fallbackKey="fish-com:category-species" aspect="16:9" variant="inline" caption="An oscar in a home aquarium." priority />
        <h2>Tank Size — The Most Common Mistake</h2>
        <p>Oscars are sold as juveniles (2–4 inches) in fish stores and grow to 12–18 inches within 12–18 months at the rate of approximately 1 inch per month in good conditions. A 30-gallon tank that seems spacious for a 3-inch juvenile is severely cramped for an 18-inch adult — and oscars do not stop growing until conditions limit them (stunted fish are unhealthy fish). Minimum tank for one oscar: 75 gallons. For two oscars: 125+ gallons. Two oscars in a 75-gallon tank will eventually result in one dead oscar when they reach territorial adult size.</p>
        <p>The waste production of a 15-inch oscar is significant — comparable to a heavily stocked community tank alone. Heavy filtration is required: canister filter rated for 3-4× tank volume, or multiple filters. Weekly 25-30% water changes are the baseline — Oscars in poor water quality develop HITH (see below) and their immune function declines. The tank maintenance commitment scales with the fish size.</p>

        <h2>HITH — Hole in the Head Disease</h2>
        <p>Hole-in-the-Head (HITH), also called Head and Lateral Line Erosion (HLLE), is the most common disease in captive oscars and cichlids generally. It presents as pitting lesions on the head and along the lateral line — small holes that can expand into significant tissue erosion. The appearance — small craters on the head — is unmistakable.</p>
        <p>Cause: HITH in oscars is associated with poor water quality (elevated nitrate above 20 ppm is consistently implicated), dietary deficiency (vitamin C and vitamin D deficiency), and possibly Hexamita or Spironucleus protozoan involvement. It is almost certainly a multifactorial condition where nutritional and water quality factors allow opportunistic pathogens to establish. Prevention: pristine water quality (nitrate under 20 ppm through large, frequent water changes), varied diet with high-quality commercial foods rather than exclusive feeder fish feeding, and vitamin supplementation if feeding a limited diet.</p>
        <p>Treatment: if caught early — water quality improvement and dietary correction allows the pits to partially heal. Active Hexamita/Spironucleus involvement: metronidazole (Seachem MetroPlex) in food and/or water. Advanced HITH with extensive tissue erosion has limited healing potential even with treatment — prevention is far more effective than cure.</p>

        <h2>Diet — What Oscars Should Actually Eat</h2>
        <p>A common and damaging practice: feeding oscars exclusively feeder goldfish or feeder minnows. Feeder fish are nutritionally incomplete (thiaminase-containing species like goldfish deplete vitamin B1), carry disease risk (feeder fish in pet store tanks are often disease reservoirs), and can contain external and internal parasites. An oscar fed exclusively feeder fish will develop nutritional deficiencies and HITH over years.</p>
        <p>Appropriate primary diet: high-quality large cichlid pellets (Hikari Cichlid Gold, New Life Spectrum Large Fish, Omega One Super Color). These are nutritionally complete and should form the majority of the diet. Supplement with frozen foods: frozen krill (excellent protein and color-enhancing carotenoids), frozen mysis shrimp, frozen silversides. Earthworms are an excellent live or frozen supplement. Feeder fish can be an occasional treat but should not be the dietary staple.</p>

        <h2>Personality and Interaction</h2>
        <p>Oscars develop genuine recognitions of their keepers. They come to the front of the tank when their owner approaches, ignore strangers, beg at feeding time with clear anticipation, and some learn to take food from fingers (be careful — oscar bites break skin). They also rearrange their tank — moving gravel, shifting decorations, uprooting any plants placed in the tank. This is not destructive behavior — it is territory management that is part of their normal behavioral repertoire. Oscar tanks should be decorated with items that can be moved without causing injury: large smooth rocks, driftwood, nothing sharp-edged or easily broken.</p>

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
          <div style={{ fontSize: '13px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em', color: 'var(--brand-text-mid, #4a6573)', marginBottom: '8px' }}>Oscar — Tank Setup</div>
          <p style={{ fontSize: '14px', margin: '0 0 12px', color: 'var(--brand-text-mid, #4a6573)', lineHeight: 1.55 }}>Browse tanks, filters, heaters, lighting, and food sized for oscar care. Fish.com earns an affiliate commission on qualifying purchases — at no extra cost to you. Commission does not influence editorial content above.</p>
          <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <a href="/go/amazon-brand/oscar%20tank%20setup?s=species-oscar" rel="sponsored noopener" style={{ display: 'inline-block', padding: '9px 16px', background: 'var(--brand-dark, #232f3e)', color: 'white', fontSize: '13px', fontWeight: 700, textDecoration: 'none', borderRadius: '6px' }}>Shop Oscar Setup on Amazon →</a>
          </div>
        </div>

        <ArticleSourcesList sources={SOURCES} />
      </div>
      </ArticleLayout>
    </>
  )
}
