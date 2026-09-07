import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard, ArticleByline, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Human Foods Safe for Dogs — What Can Dogs Actually Eat? | Dog.com', description: 'Complete list of human foods that are safe to share with dogs — with portion guidance and which preparations to avoid. research-based.', path: '/nutrition/safe-human-foods', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Human Foods Safe for Dogs', description: 'What human foods dogs can safely eat — with portion guidance.', url: 'https://dog.com/nutrition/safe-human-foods', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const SAFE_FOODS = [
  { name: 'Chicken (cooked, plain)', safe: true, notes: 'Excellent protein source. Boiled or baked, no seasoning, no bones. Widely used as a bland diet component for GI upset.' },
  { name: 'Carrots', safe: true, notes: 'Low calorie, high fiber, good for teeth. Raw or cooked. Can be frozen for teething puppies. No preparation concerns.' },
  { name: 'Blueberries', safe: true, notes: 'Antioxidant-rich. Safe in moderate amounts. Use as treats — a few at a time, not a bowl.' },
  { name: 'Apples (no core or seeds)', safe: true, notes: 'Seeds contain amygdalin (cyanide compound) — remove seeds and core. Flesh and skin are fine. Good fiber source.' },
  { name: 'Watermelon (no seeds, no rind)', safe: true, notes: 'Remove seeds (intestinal blockage risk) and rind (GI upset). Flesh is 92% water — good hydration treat in summer.' },
  { name: 'Cooked salmon', safe: true, notes: 'Excellent omega-3 source. Fully cooked — never raw salmon (risk of Neorickettsia helminthoeca, fatal in dogs). No seasoning.' },
  { name: 'Peanut butter (no xylitol)', safe: true, notes: 'High value treat. CHECK THE LABEL — some brands contain xylitol, which is fatal. Plain peanut butter with only peanuts (and optionally salt) is safe. High in fat — moderate amounts only.' },
  { name: 'Plain cooked eggs', safe: true, notes: 'Good protein and biotin source. Scrambled, boiled, or poached — no butter, oil, salt, or seasoning. Raw whites contain avidin (biotin inhibitor); cooked is preferable.' },
  { name: 'Cooked plain rice', safe: true, notes: 'Easily digestible carbohydrate. Primary component of bland diet (rice + boiled chicken) for GI upset. No butter or seasoning.' },
  { name: 'Oatmeal (plain, cooked)', safe: true, notes: 'Good fiber source. Plain rolled oats, cooked in water — not instant packets (contain added sugar and flavoring). Small amounts.' },
  { name: 'Bananas', safe: true, notes: 'High sugar content — treat-sized portions only. Good potassium source. Freeze slices for enrichment.' },
  { name: 'Green beans (plain)', safe: true, notes: 'Low calorie, high fiber. Fresh, frozen, or canned (no salt added). Can be used as a filler to increase food volume during weight management.' },
  { name: 'Plain cooked sweet potato', safe: true, notes: 'Vitamins A, B6, C, and fiber. Cooked and plain only. Significant sugar content — moderate amounts.' },
  { name: 'Plain yogurt (no artificial sweeteners)', safe: true, notes: 'Probiotic benefit. Full-fat plain Greek yogurt preferred. No sweeteners of any kind — check label carefully. Small amounts.' },
  { name: 'Cooked lean beef', safe: true, notes: 'High protein, good iron source. Plain, no seasoning, cooked thoroughly. Remove visible fat — high fat content triggers pancreatitis.' },
]

const PREPARATION_RULES = [
  'No seasoning — garlic, onion, salt, pepper, spices. All toxic or irritating.',
  'No cooking oils — fat content triggers pancreatitis. Boil or bake instead.',
  'No xylitol — check any product label that contains "sugar-free" or sweeteners.',
  'Cooked over raw — for meat especially. Some raw fish is dangerous.',
  'Small portions — all human foods are additions to a complete diet, not substitutes. Should not exceed 10% of daily caloric intake.',
  'Introduce one food at a time — allows identification of sensitivities.',
]

export default function SafeHumanFoodsPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="nutrition"
      hero={{ title: 'Human Foods Safe for Dogs', subtitle: 'Not all human food is dangerous for dogs — many whole foods are safe treats and training rewards. Here\'s what\'s actually safe to share, with portion guidance and the preparation rules that matter.', category: 'Nutrition Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Safe Human Foods', href: '/nutrition/safe-human-foods' }]}
      relatedLinks={[{ title: 'Dog Nutrition Hub', href: '/nutrition', category: 'Hub' }, { title: 'Toxic Foods Guide', href: '/nutrition/toxic-foods', category: 'Nutrition' }, { title: 'Dog Treats Guide', href: '/nutrition/dog-treats-guide', category: 'Nutrition' }, { title: 'How Much to Feed', href: '/nutrition/how-much-to-feed', category: 'Nutrition' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.18)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '8px' }}>Poison Control</div>
          <div style={{ fontSize: '18px', fontWeight: 700, color: 'var(--brand-dark)' }}>888-426-4435</div>
          <div style={{ fontSize: '12px', color: 'var(--brand-text-light)', marginTop: '4px' }}>ASPCA · 24/7</div>
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Toxic Foods Guide', href: '/nutrition/toxic-foods' }, { label: 'How Much to Feed', href: '/nutrition/how-much-to-feed' }, { label: 'Dog Supplements', href: '/nutrition/dog-supplements' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="nutrition" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-safe-foods" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the dog safe-foods checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Dog safe-foods checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the laminated-dog-ten-percent-treat-chart,
            fridge-plain-prep-card, and
            canine-safe-share-handbook notes
            that match the ten-percent-treat-map,
            plain-prep-avoid-log, and
            always-check-label-grounding copy on this
            page — a laminated dog ten-percent-treat chart
            so the 10% / 40-kcal extras map is posted on
            the fridge (not a xylitol-critical chart, not a
            chocolate-grape chart, not a nutrition-feeding
            chart), a dog fridge plain-prep card so no
            seasoning / no oil / no xylitol notes are
            labeled on the fridge (not a grape-kidney card,
            not a xylitol-onion card, not a WSAVA label
            card), and a canine safe-share handbook so the
            whole-food share list and always-check-label
            grounding is a physical kitchen book (not a
            poison-protocol handbook, not a food-safety
            handbook, not a nutrition reference handbook).
            Educational kitchen checklist, not a ranked
            clinic list, not a first-aid-kit hop, and not a
            substitute for a veterinarian. Dog.com does not
            sell insurance. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Dog safe-foods checklist"
            subtitle="Email the ten-percent-treat chart, fridge plain-prep card, and safe-share-handbook notes. No spam."
            ctaText="Email my dog safe-foods checklist"
            source="nutrition-safe-foods-under-hero"
          />
        </div>

        <div style={{ background: 'rgba(42,106,58,0.06)', border: '1px solid rgba(42,106,58,0.15)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#2A6A3A', marginBottom: '8px' }}>The 10% Rule</div>
          <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>All treats and supplemental foods — including safe human foods — should not exceed 10% of your dog&apos;s daily caloric intake. A dog eating 400 kcal/day should get no more than 40 kcal from treats and extras. Exceeding this creates nutritional imbalance and excess calories.</p>
        </div>

        <h2>Universal Preparation Rules</h2>
        <ul>
          {PREPARATION_RULES.map((rule, i) => (
            <li key={i}>{rule}</li>
          ))}
        </ul>

        <h2>Safe Foods Reference</h2>
        <div style={{ borderRadius: '12px', overflow: 'hidden', border: '1px solid var(--brand-border)', margin: '20px 0' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '14px' }}>
            <thead><tr style={{ background: 'var(--brand-dark)' }}>{['Food', 'Preparation & Notes'].map(h => <th key={h} style={{ padding: '11px 15px', textAlign: 'left', color: 'white', fontSize: '11px', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{h}</th>)}</tr></thead>
            <tbody>{SAFE_FOODS.map((f, i) => (
              <tr key={f.name} style={{ background: i % 2 === 0 ? 'white' : 'var(--brand-surface)' }}>
                <td style={{ padding: '10px 15px', borderTop: '1px solid var(--brand-border)', fontWeight: 600, color: 'var(--brand-dark)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>✓ {f.name}</td>
                <td style={{ padding: '10px 15px', borderTop: '1px solid var(--brand-border)', color: 'var(--brand-text-mid)', lineHeight: 1.65 }}>{f.notes}</td>
              </tr>
            ))}</tbody>
          </table>
        </div>

        <h2>What About Dairy?</h2>
        <p>Many dogs are lactose intolerant to varying degrees. Small amounts of plain cheese or plain yogurt (no sweeteners) are tolerated by most dogs and can be high-value training treats. Milk in any significant quantity causes GI upset in most dogs. If you try dairy treats and see loose stool, reduce or eliminate.</p>

        <h2>The Always-Check List</h2>
        <p>Before sharing any human food product (not a whole food): check every ingredient for xylitol, grapes, raisins, onion powder, garlic powder, and macadamia nuts. Many products contain these in forms that aren&apos;t obvious — protein bars, certain breads, trail mixes, flavored yogurts, and packaged foods frequently contain one or more of these. When in doubt, consult the <a href="/nutrition/toxic-foods">toxic foods guide</a> or call your vet.</p>

        <AffiliateDisclosure variant="inline" siteId="dog-com" />

        {/* Money path — live amazon-brand search hops
            (laminated dog ten-percent-treat chart /
            dog fridge plain-prep card /
            canine safe-share handbook).
            No existing product hop to keep.
            Educational kitchen searches only; no Rx /
            vaccine / flea / heartworm / nsaid hops.
            ShopCtas hides empty Chewy; never href="#"
            or PLACEHOLDER. Unused vs toxic-foods /
            can-dogs-eat / nutrition-hub hops.
            Directory import left untouched.
            Do not re-open #1165 / what-to-expect. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
            Shop the dog safe-foods kitchen kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the
            on-page ten-percent-treat-map,
            plain-prep-avoid-log, and
            always-check-label-grounding copy — a
            laminated dog ten-percent-treat chart, a
            dog fridge plain-prep card, and a
            canine safe-share handbook.
            Educational kitchen searches only. They are
            not a ranked clinic list, they are not
            a toxic-foods / can-dogs-eat / nutrition-hub
            hop, they are not a first-aid-kit hop, they
            are not a child toothbrush hop, and they do
            not replace a veterinarian. Dog.com does not
            sell insurance. Dog.com earns a commission on
            qualifying purchases at no extra cost to you.
            Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+ten+percent+treat+chart?s=nutrition-safe-foods"
              amazonLabel="Browse laminated dog ten-percent-treat charts on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+fridge+plain+prep+card?s=nutrition-safe-foods"
              amazonLabel="Browse dog fridge plain-prep cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/canine+safe+share+handbook?s=nutrition-safe-foods"
              amazonLabel="Browse canine safe-share handbooks on Amazon →"
            />
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
