import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Feeder Insects Compared — Dubia, Crickets, Worms | Lizard.com", description: "Crickets, dubia roaches, mealworms, superworms, BSFL, hornworms, and waxworms compared on nutrition, fat, and which to use as staples vs treats.", path: "/health/feeder-insects-compared", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Feeder Insects Compared", description: "A comparison of common reptile feeder insects by nutrition, fat content, and staple-versus-treat role.", url: "https://lizard.com/health/feeder-insects-compared", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthFeederInsectsComparedPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Feeder Insects Compared", subtitle: "Not all feeder insects are equal. Some make excellent nutritional staples, others are fatty treats that cause problems if overused, and a couple are best avoided as primary feeders. This guide compares the common options, crickets, dubia roaches, mealworms, superworms, black soldier fly larvae, hornworms, and waxworms, so you can build a varied, balanced insectivore diet.", category: "Feeding", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Feeder Insects Compared", href: "/health/feeder-insects-compared" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Dubia Roach Care', href: '/health/dubia-roach-care', category: 'Health' },
        { title: 'Gut-Loading Guide', href: '/health/gut-loading-guide', category: 'Health' },
        { title: 'Calcium & D3 Supplementation', href: '/health/calcium-d3-supplementation', category: 'Health' },
        { title: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide', category: 'Health' },
        { title: 'Reptile Obesity', href: '/health/reptile-obesity', category: 'Health' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Quick Roles"}</div>
          {[["Dubia roach", "Excellent staple"], ["Cricket", "Good staple"], ["BSFL/calci-worm", "High calcium staple"], ["Mealworm", "Occasional, chitin-heavy"], ["Superworm", "Treat — high fat"], ["Hornworm", "Hydration treat"], ["Waxworm", "Treat only — very fatty"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Gut-Loading Feeders", href: "/health/gut-loading-guide" }, { label: "Dubia Roach Care", href: "/health/dubia-roach-care" }, { label: "Calcium & D3 Supplementation", href: "/health/calcium-d3-supplementation" }, { label: "Reptile Feeding Guide", href: "/health/reptile-feeding-guide" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-feeder-insects-compared"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Lizard.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
          <p>{"Insectivorous reptiles do best on a varied diet built around a few nutritious staples, with fattier or specialty insects used sparingly for variety, hydration, or enrichment. The two factors that most determine a feeder’s role are its fat content and its calcium-to-phosphorus balance, along with how much hard-to-digest chitin (exoskeleton) it carries. Gut-loading and calcium dusting improve any feeder, but the underlying choice of insect still matters. Here is how the common options stack up."}</p>
          <h2>{"Staple Feeders"}</h2>
          <ul>
            <li>{"Dubia roaches: widely regarded as one of the best staples, with a good protein-to-fat balance, soft body, high meat-to-shell ratio, and easy gut-loading; they cannot climb smooth surfaces or infest a home like crickets, making them low-hassle"}</li>
            <li>{"Crickets: a classic, inexpensive, widely available staple with a reasonable nutritional profile; downsides are odor, noise, escaping, and a short shelf life"}</li>
            <li>{"Black soldier fly larvae (BSFL, sold as calci-worms or phoenix worms): naturally high in calcium, making them an excellent staple that reduces the need for heavy calcium dusting"}</li>
            <li>{"Locusts/grasshoppers (where available): a good lean staple for many species"}</li>
          </ul>
          <h2>{"Occasional Feeders"}</h2>
          <ul>
            <li>{"Mealworms: convenient and easy to keep, but high in chitin and fat relative to nutrition, so better as an occasional feeder than a sole staple, especially for small or young animals"}</li>
            <li>{"Hornworms (tomato/goliath worms): very high moisture, useful for hydration and as a treat or for picky eaters, but they grow large fast and are not a complete staple"}</li>
            <li>{"Silkworms: soft, nutritious, and well-regarded, but more expensive and perishable, so often a rotation feeder rather than the everyday base"}</li>
          </ul>
          <h2>{"Treats — Use Sparingly"}</h2>
          <ul>
            <li>{"Superworms: high in fat; fine as an occasional treat but can drive obesity and pickiness if overfed, and large ones can be too big for small reptiles"}</li>
            <li>{"Waxworms: very high in fat and almost addictive; many reptiles will refuse healthier feeders if given too many, so reserve them for rare treats, gut-impacted-prone animals excepted"}</li>
            <li>{"Butterworms: another fatty, palatable treat to use occasionally"}</li>
          </ul>
          <h2>{"Feeders to Avoid as Staples"}</h2>
          <ul>
            <li>{"Fireflies/lightning bugs: toxic to reptiles, never feed them"}</li>
            <li>{"Wild-caught insects: risk of pesticides, parasites, and unknown toxins; avoid unless you are certain of a clean source"}</li>
            <li>{"Lean mealworms or pinkie mice as a primary diet for small insectivores: nutritionally unbalanced for routine use"}</li>
          </ul>
          <h2>{"Building a Balanced Insectivore Diet"}</h2>
          <p>{"Center the diet on one or two nutritious staples (dubia roaches, crickets, or BSFL), rotate in occasional feeders for variety, and use fatty worms only as treats. Gut-load all feeders for a day or two before offering, dust with calcium (and a multivitamin per schedule), and keep prey size appropriate to the species (for many lizards, no wider than the space between the eyes). Variety covers nutritional gaps that any single feeder leaves, and prevents the pickiness that comes from a monotonous or treat-heavy diet."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Finke, M. D., nutrient-composition studies of commercially raised feeder insects."}</li>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), nutrition chapters."}</li>
            <li>{"Reptiles Magazine, feeder-comparison references."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
