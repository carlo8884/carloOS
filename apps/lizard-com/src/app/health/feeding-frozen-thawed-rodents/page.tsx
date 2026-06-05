import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: "Feeding Frozen-Thawed Rodents to Snakes | Lizard.com", description: "Why feed snakes frozen-thawed instead of live rodents, how to thaw and warm prey safely, correct prey size, and how to handle a stubborn feeder.", path: "/health/feeding-frozen-thawed-rodents", type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: "Feeding Frozen-Thawed Rodents", description: "Why and how to feed snakes frozen-thawed rodents, safe thawing, prey sizing, and troubleshooting feeding response.", url: "https://lizard.com/health/feeding-frozen-thawed-rodents", imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' })

export default function HealthFeedingFrozenThawedRodentsPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: "Feeding Frozen-Thawed Rodents", subtitle: "Frozen-thawed feeding, offering rodents that were humanely pre-killed, frozen, and then thawed and warmed, is the standard, safest way to feed pet snakes. It eliminates the real risk of a live rodent injuring or killing your snake, is more convenient and humane, and most captive-bred snakes take it readily. This guide covers why, how to thaw and offer prey safely, and what to do with a reluctant feeder.", category: "Feeding", authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'June 2026', readTime: "9 min" }}
      breadcrumbs={[{ name: "Home", href: "/" }, { name: "Health", href: "/health" }, { name: "Feeding Frozen-Thawed Rodents", href: "/health/feeding-frozen-thawed-rodents" }]}
      schema={schema}
      relatedLinks={[
        { title: 'Reptile Health Hub', href: '/health', category: 'Hub' },
        { title: 'Anorexia in Reptiles', href: '/health/anorexia-in-reptiles', category: 'Health' },
        { title: 'Reptile Feeding Guide', href: '/health/reptile-feeding-guide', category: 'Health' },
        { title: 'Ball Python Care', href: '/species/ball-python', category: 'Species' },
        { title: 'Corn Snake Care', href: '/species/corn-snake', category: 'Species' },
        { title: 'Boa Constrictor Care', href: '/species/boa-constrictor', category: 'Species' },
      ]}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>{"Key Points"}</div>
          {[["Why F/T", "Live prey can injure/kill snake"], ["Prey size", "About the snake’s widest point"], ["Thaw", "In fridge, then warm gently"], ["Never thaw warm", "Bacterial growth risk"], ["Offer", "With tongs, warmed prey"], ["Avoid", "Microwaving prey"]].map(([k, v]) => (
            <div key={k} style={{ display: 'flex', justifyContent: 'space-between', padding: '6px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px' }}>
              <span style={{ color: 'rgba(238,240,228,0.45)' }}>{k}</span>
              <span style={{ color: 'var(--brand-white)', fontWeight: 600, textAlign: 'right', maxWidth: '55%' }}>{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title={"Related Guides"} links={[{ label: "Corn Snake Care", href: "/species/corn-snake" }, { label: "Ball Python Care", href: "/species/ball-python" }, { label: "Kenyan Sand Boa Care", href: "/species/kenyan-sand-boa" }, { label: "Western Hognose Care", href: "/species/western-hognose-snake" }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source={"lizard-health-feeding-frozen-thawed-rodents"} ctaText="Download Free" />
        <CrossPortfolioCard currentSite="lizard-com" contentType="health" variant="sidebar" />
      </>}
    >
      <div className="carloOS-article">
          <p>{"Most pet snakes eat rodents, and there are two ways to provide them: live or frozen-thawed (often abbreviated F/T). Frozen-thawed is the strongly preferred standard among experienced keepers and welfare-minded vets for a simple reason: a live rodent is a defensive animal with teeth and claws, and a snake that is not hungry, is shedding, or simply misses its strike can be seriously bitten, scarred, or even killed by the very prey meant to feed it. Frozen-thawed prey carries none of that risk, is more convenient to store and buy in bulk, and is generally regarded as more humane."}</p>
          <h2>{"Why Not Live Prey?"}</h2>
          <ul>
            <li>{"A live rodent can bite and injure a snake, sometimes severely, especially if the snake is not in a feeding mood or misjudges the strike"}</li>
            <li>{"Never leave a live rodent unattended with a snake; rodents have chewed on and killed snakes left together overnight"}</li>
            <li>{"Frozen-thawed prey is pre-killed humanely, so there is no welfare concern about the prey during feeding"}</li>
            <li>{"F/T is easier to source, store, and size consistently"}</li>
            <li>{"Some snakes do start on live and need transitioning, but the goal for most keepers is reliable F/T feeding"}</li>
          </ul>
          <h2>{"Choosing Prey Size"}</h2>
          <p>{"The standard guideline is to offer prey roughly as wide as the widest part of the snake’s body, which leaves a modest, appropriate bulge after eating. Too-small prey under-feeds the snake; excessively large prey can cause regurgitation or, rarely, injury. Hatchlings start on pinkies and move up through fuzzies and larger sizes as they grow. Match prey to the current size of the snake, not to a fixed schedule, and reassess as the animal grows."}</p>
          <h2>{"Safe Thawing and Warming"}</h2>
          <ol>
            <li>{"Thaw frozen prey slowly, ideally in the refrigerator over several hours, or in a sealed bag submerged in cool then lukewarm water; never thaw at room temperature for long periods, which encourages bacterial growth"}</li>
            <li>{"Once thawed, warm the prey to roughly body temperature so it feels warm to the snake (which detects heat); a warm-water bath of the bagged prey works well"}</li>
            <li>{"Do not microwave prey, which cooks unevenly, can burst the prey, and degrades it"}</li>
            <li>{"Offer the warmed prey promptly while it is still warm, since heat is a key feeding trigger"}</li>
          </ol>
          <h2>{"Offering the Meal"}</h2>
          <ul>
            <li>{"Use long feeding tongs or forceps, never your fingers, to present the prey and to keep the snake from associating your hand with food"}</li>
            <li>{"Wiggle the warmed prey to mimic live movement and trigger a strike for snakes that respond to motion"}</li>
            <li>{"Some keepers feed in the enclosure; if using loose substrate, feed on a dish or with tongs to avoid substrate ingestion and impaction"}</li>
            <li>{"Give the snake quiet time to eat and digest, and avoid handling for a day or two after a meal to prevent regurgitation"}</li>
          </ul>
          <h2>{"The Reluctant Feeder"}</h2>
          <p>{"Some snakes, especially new acquisitions, hatchlings, certain ball pythons, or hognose snakes with their amphibian-leaning instincts, refuse F/T at first. Strategies include making sure husbandry (temperatures, security, privacy) is correct, ensuring the prey is warm enough, offering at the snake’s active time of day, braining or scenting the prey, and giving the animal undisturbed time. Many apparent feeding problems are husbandry or seasonal slow-downs rather than illness; track weight, and if a snake refuses food while losing weight or showing other signs of illness, consult a reptile veterinarian. See our anorexia guide for the full decision tree."}</p>
          <h2>{"Sources & Further Reading"}</h2>
          <ul>
            <li>{"Mader, D. R. Reptile Medicine and Surgery (Elsevier), husbandry and nutrition chapters."}</li>
            <li>{"Association of Reptilian and Amphibian Veterinarians (ARAV), arav.org."}</li>
            <li>{"Reptiles Magazine, frozen-thawed feeding references."}</li>
          </ul>
      </div>
    </ArticleLayout>
  )
}
