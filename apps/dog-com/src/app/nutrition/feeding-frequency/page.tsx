import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleByline, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'How Often to Feed Your Dog — Meal Frequency by Life Stage | Dog.com', description: 'How many times a day to feed your dog by age and size. Why twice daily is better than once, when to switch feeding schedules, and meal timing for housetraining.', path: '/nutrition/feeding-frequency', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'How Often to Feed Your Dog', description: 'Meal frequency by life stage and why twice daily beats once daily.', url: 'https://dog.com/nutrition/feeding-frequency', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function FeedingFrequencyPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="nutrition"
      hero={{ title: 'How Often to Feed Your Dog', subtitle: 'Meal frequency has real consequences for digestion, housetraining, bloat risk, and blood sugar regulation. Here\'s the evidence-based schedule for each life stage.', category: 'Nutrition Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '6 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Feeding Frequency', href: '/nutrition/feeding-frequency' }]}
      relatedLinks={[{ title: 'Dog Nutrition Hub', href: '/nutrition', category: 'Hub' }, { title: 'How Much to Feed', href: '/nutrition/how-much-to-feed', category: 'Nutrition' }, { title: 'Puppy Nutrition', href: '/nutrition/puppy-nutrition', category: 'Nutrition' }, { title: 'Weight Management', href: '/nutrition/weight-management', category: 'Nutrition' }]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[{ label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' }, { label: 'Puppy Nutrition', href: '/nutrition/puppy-nutrition' }, { label: 'Best Dry Dog Food 2026', href: '/reviews/best-dry-dog-food' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="nutrition" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-frequency" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the dog meal-frequency checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog meal-frequency checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-twice-daily-chart,
            fridge-life-stage-meal-card, and
            canine-gdv-timing-handbook notes
            that match the twice-daily-adult-map,
            life-stage-meal-log, and
            gdv-exercise-timing-grounding copy on this
            page — a laminated dog twice-daily chart so
            the adult two-meal / not-once-daily map is
            posted on the fridge (not a BCS-score chart,
            not a ten-percent-treat chart, not a
            nutrition-feeding chart), a dog fridge
            life-stage-meal card so puppy 4 / 3 / 2 meal
            notes are labeled on the fridge (not an
            ideal-weight card, not a plain-prep card,
            not a WSAVA label card), and a canine
            GDV-timing handbook so the 1–2 hour wait
            after eating / 30–60 after exercise grounding
            is a physical kitchen book (not an RER-portion
            handbook, not a safe-share handbook, not a
            poison-protocol handbook). Educational kitchen
            checklist, not a ranked clinic list, not a
            first-aid-kit hop, and not a substitute for a
            veterinarian. Dog.com does not sell insurance.
            No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog meal-frequency checklist"
            subtitle="Email the twice-daily chart, fridge life-stage-meal card, and GDV-timing-handbook notes. No spam."
            ctaText="Email my dog meal-frequency checklist"
            source="nutrition-frequency-under-hero"
          />
        </div>

        <h2>Frequency by Life Stage</h2>

        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--brand-border)', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead><tr style={{ background: 'var(--brand-dark)' }}>{['Life Stage', 'Recommended Meals/Day', 'Reason'].map(h => <th key={h} style={{ padding: '11px 15px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</th>)}</tr></thead>
            <tbody>{[
              ['Puppies 8–12 weeks', '4 meals/day', 'Small stomach capacity, blood sugar stability, housetraining timing'],
              ['Puppies 3–6 months', '3 meals/day', 'Stomach capacity growing; still need midday meal'],
              ['6 months – adult', '2 meals/day', 'Transition to adult schedule'],
              ['Adult dogs', '2 meals/day', 'Optimal digestion, lower GDV risk than once-daily, consistent hunger'],
              ['Senior dogs', '2 meals/day', 'Smaller meals easier to digest; some seniors benefit from 3 small meals'],
            ].map(([stage, freq, reason], i) => (
              <tr key={stage} style={{ background: i % 2 === 0 ? 'white' : 'var(--brand-surface)' }}>
                <td style={{ padding: '10px 15px', borderTop: '1px solid var(--brand-border)', fontWeight: 600, color: 'var(--brand-dark)' }}>{stage}</td>
                <td style={{ padding: '10px 15px', borderTop: '1px solid var(--brand-border)', color: 'var(--brand-primary)', fontWeight: 700 }}>{freq}</td>
                <td style={{ padding: '10px 15px', borderTop: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)', fontSize: '13px' }}>{reason}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>

        <h2>Why Twice Daily Beats Once Daily for Adult Dogs</h2>
        <p>Once-daily feeding is common but not optimal. The reasons twice daily is better:</p>
        <ul>
          <li><strong>Bloat (GDV) risk:</strong> Gastric dilatation-volvulus is associated with large single meals, particularly in large and deep-chested breeds (Great Danes, German Shepherds, Standard Poodles, Retrievers). Two smaller meals reduce the volume consumed at once and appear to reduce GDV risk, though the relationship is not fully established.</li>
          <li><strong>Digestion:</strong> Smaller meals are processed more efficiently. A single large meal creates significant digestive demand; two moderate meals distribute this across the day.</li>
          <li><strong>Blood sugar stability:</strong> Consistent meal timing maintains more stable blood glucose levels throughout the day. Dogs that eat once daily show more pronounced hunger and energy dips in the hours before the next meal.</li>
          <li><strong>Housetraining relevance:</strong> Dogs typically need to eliminate within 20–30 minutes of eating. Twice-daily feeding creates predictable elimination windows — useful throughout a dog&apos;s life, not just during puppyhood.</li>
          <li><strong>Behavior:</strong> Hunger-driven behavior (food obsession, counter-surfing, increased arousal around mealtimes) is often reduced with more frequent meals.</li>
        </ul>

        <h2>Free-Feeding — Why Veterinary Nutritionists Don&apos;t Recommend It</h2>
        <p>Free-feeding (leaving food available continuously) creates several problems:</p>
        <ul>
          <li>Eliminates the primary mechanism for detecting appetite loss — a dog that won&apos;t eat is an early health signal. With food always available, you can&apos;t know if your dog has eaten or not.</li>
          <li>Overweight risk: most dogs will eat more than they need when food is continuously available. Obesity is the most prevalent preventable health problem in dogs; free-feeding is a significant contributor.</li>
          <li>Impossible to portion-control effectively</li>
          <li>Impossible to housetraining schedule around</li>
        </ul>
        <p>The exception: some working dogs with very high caloric requirements, and some dogs with specific medical conditions, may be managed differently. Follow your veterinarian&apos;s guidance for medical cases.</p>

        <h2>Meal Timing and Housetraining</h2>
        <p>Establish consistent feeding times and take your dog outside 15–30 minutes after each meal. This predictability is the foundation of housetraining — meals at 7am and 5pm create elimination windows at approximately 7:20am and 5:20pm, which you can be present for and reinforce. Erratic feeding times create erratic elimination patterns that are harder to manage.</p>

        <h2>Before and After Exercise</h2>
        <p>Do not feed immediately before or after vigorous exercise — particularly relevant for large, deep-chested breeds at elevated GDV risk. The timing recommendation: wait 1–2 hours after eating before vigorous exercise, and 30–60 minutes after vigorous exercise before feeding. For most dogs on a normal schedule (morning feed, evening feed, daily walks), this timing naturally accommodates without needing specific management.</p>

        <AffiliateDisclosure variant="inline" siteId="dog-com" />

        {/* Money path — live amazon-brand search hops
            (laminated dog twice-daily chart /
            dog fridge life-stage-meal card /
            canine GDV-timing handbook).
            No existing product hop to keep.
            Educational kitchen searches only; no Rx /
            vaccine / flea / heartworm / nsaid hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs how-much-to-feed /
            safe-human-foods / toxic-foods hops.
            Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the dog meal-frequency kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page twice-daily-adult-map,
            life-stage-meal-log, and
            gdv-exercise-timing-grounding copy — a
            laminated dog twice-daily chart, a
            dog fridge life-stage-meal card, and a
            canine GDV-timing handbook.
            Educational kitchen searches only. They are
            not a ranked clinic list, they are not
            a how-much-to-feed / safe-human-foods /
            toxic-foods hop, they are not a
            first-aid-kit hop, they are not a child
            toothbrush hop, and they do not replace a
            veterinarian. Dog.com does not sell
            insurance. Dog.com earns a commission on
            qualifying purchases at no extra cost to
            you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+twice+daily+chart?s=nutrition-frequency"
              amazonLabel="Browse laminated dog twice-daily charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+life+stage+meal+card?s=nutrition-frequency"
              amazonLabel="Browse dog fridge life-stage-meal cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+gdv+timing+handbook?s=nutrition-frequency"
              amazonLabel="Browse canine GDV-timing handbooks on Amazon →"
            />
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
