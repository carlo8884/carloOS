import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Egg Binding in Reptiles (Dystocia) — Signs, Causes & Emergency Care | Lizard.com', description: 'Egg binding (dystocia) is a life-threatening emergency in female reptiles. Signs, causes, and why this requires immediate veterinary care — not home treatment.', path: '/health/egg-binding', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Egg Binding in Reptiles (Dystocia)', description: 'Signs, causes, and emergency treatment for egg binding in reptiles.', url: 'https://lizard.com/health/egg-binding', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function EggBindingPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Egg Binding in Reptiles (Dystocia)', subtitle: 'Dystocia — the inability to lay eggs normally — is one of the most common life-threatening emergencies in female reptiles. It affects all oviparous (egg-laying) species and can occur even in unmated females producing infertile clutches. It requires veterinary intervention — not waiting, not home remedies.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health/sick-reptile-signs' }, { name: 'Egg Binding', href: '/health/egg-binding' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '8px' }}>Emergency Signs</div>
          {['Straining without producing eggs', 'Lethargy, anorexia for days', 'Distended abdomen', 'Cloacal prolapse', 'Signs of shock (gaping, weak)'].map(s => (
            <div key={s} style={{ display: 'flex', gap: '8px', padding: '5px 0', borderBottom: '1px solid rgba(220,38,38,0.15)', fontSize: '12px', color: 'rgba(238,240,228,0.7)', alignItems: 'center' }}>
              <span style={{ color: '#ef4444', fontWeight: 700 }}>→</span>{s}
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' }, { label: 'Metabolic Bone Disease', href: '/health/metabolic-bone-disease' }, { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-egg-binding" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>What Egg Binding Is</h2>
        <p>Egg binding (dystocia) occurs when a female reptile cannot pass her eggs through the cloaca normally. This may be due to physical obstruction (oversized or malformed eggs, narrow pelvis, uterine inertia), behavioral issues (no suitable laying site provided, causing the animal to retain eggs past the normal laying window), physiological issues (calcium deficiency preventing smooth muscle contraction needed for egg passage, dehydration), or disease affecting the reproductive tract.</p>
        <p>Egg binding affects all oviparous reptile species — bearded dragons, leopard geckos, ball pythons, veiled chameleons, corn snakes, and all others that lay eggs. It also affects viviparous (live-bearing) species that develop fetal retention problems. It can occur in unmated females — many female reptiles develop follicles and produce infertile eggs even without male exposure. Chameleons and bearded dragons are particularly prone.</p>

        <h2>Why It Happens — Prevention Is Key</h2>
        <p><strong>No suitable laying site:</strong> The most preventable cause. Female reptiles will retain eggs and attempt to find a suitable site — they will not lay eggs on bare substrate or in an inhospitable environment. Every enclosure housing a sexually mature female reptile must have a laying site ready at all times: for most lizards, a deep container (minimum 6 inches) of moist substrate (coconut fiber or garden soil — not sand, which collapses tunnels) that the female can burrow into. Bearded dragon females will die from egg retention rather than lay on inappropriate substrate — the urgency is real.</p>
        <p><strong>Calcium deficiency:</strong> Smooth muscle contractions required to pass eggs are calcium-dependent. A female with metabolic bone disease or chronic calcium deficiency may develop uterine inertia — the inability to contract the muscles that push eggs out. Correct calcium supplementation throughout the female's life is preventive care, not a luxury.</p>
        <p><strong>Dehydration:</strong> Adequate hydration is required for normal egg passage. Desert species need less water than tropical species but still require regular hydration (especially during follicle development). A warm bath (15 minutes in shallow warm water) often stimulates laying in mildly retained females — this is safe to try once if the female is still active and alert, before pursuing veterinary care.</p>

        <h2>Signs of Egg Binding</h2>
        <p>Classic signs: a female that has been gravid (visibly carrying eggs — abdominal swelling, visible eggs through the belly wall in some species) for longer than the normal laying window without successfully laying. She may be straining (cloaca pulsing, body contracting with no egg produced), she may stop eating, she may become lethargic, and she may be restless (searching for a laying site). Advanced cases show cloacal prolapse (tissue protruding from the vent), extreme lethargy, open-mouth breathing (in snakes), or signs of systemic illness.</p>

        <h2>Treatment — Veterinary Care Required</h2>
        <p>A one-time warm bath is a reasonable first step for a mildly retained, otherwise healthy female — warm water stimulates cloacal contractions and relaxation that occasionally resolves mild retention. Do not wait more than 24–48 hours if there is no progress. This is not a condition that resolves with time — retained eggs decompose, become infected (putrid yolk peritonitis), and cause sepsis and death.</p>
        <p>Veterinary treatment: radiographs or ultrasound to visualize eggs and assess their status. Oxytocin (with calcium gluconate administered first) injection to stimulate uterine contractions — effective for mild cases with no physical obstruction. If medical management fails or eggs are malformed/mineralized: surgical removal (ovariosalpingectomy) under anesthesia. This is a specialized surgical procedure requiring an experienced reptile veterinarian or board-certified exotic animal surgeon.</p>

        <h2>After Resolution — Preventing Recurrence</h2>
        <p>A female that has experienced egg binding once is at higher risk for recurrence. Options to reduce recurrence: hormonal suppression of follicle development (leuprolide acetate — a GnRH agonist administered by injection every 3–6 months by a veterinarian), surgical spay (complete ovariosalpingectomy eliminates the reproductive cycle permanently — the right choice for severely affected individuals), and consistent husbandry optimization (permanent laying site access, calcium supplementation, hydration).</p>
      </div>
    </ArticleLayout>
  )
}
