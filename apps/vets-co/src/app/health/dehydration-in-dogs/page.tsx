import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Dehydration in Dogs — Signs, Skin Turgor Test | Vets.co', description: 'How to assess dehydration in dogs using the skin turgor test and gum assessment. When dehydration is mild (oral fluids OK) vs severe (IV fluids needed).', path: '/health/dehydration-in-dogs', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Fluid Therapy in Small Animals', url: 'https://www.merckvetmanual.com/emergency-medicine-and-critical-care/fluid-therapy/fluid-therapy-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Dehydration in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/dehydration-pets', publisher: 'AVMA' },
  { label: 'AAHA: Emergency and Critical Care Guidelines', url: 'https://www.aaha.org/aaha-guidelines/emergency-and-critical-care/', publisher: 'AAHA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Dehydration in Dogs', description: 'Signs, skin turgor test, and IV fluids decision guide for dog dehydration.', url: 'https://vets.co/health/dehydration-in-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Dehydration in Dogs', description: 'Assessing and treating dehydration in dogs — skin turgor, gum assessment, and fluid therapy.', url: 'https://vets.co/health/dehydration-in-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
export default function DehydrationPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Dehydration in Dogs', subtitle: 'Dehydration occurs when fluid loss exceeds fluid intake — from vomiting, diarrhea, heat exposure, inadequate water intake, or kidney disease. Mild dehydration can be managed at home; moderate to severe dehydration requires veterinary fluid therapy. Knowing which situation you are in is the key skill.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '7 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Dehydration', href: '/health/dehydration-in-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Emergency Signs', href: '/health/emergency-signs', category: 'Emergency Guide' },
          { title: 'Vomiting and Diarrhea in Pets', href: '/health/vomiting-diarrhea-pets', category: 'Veterinary Guide' },
          { title: 'Heat Stroke in Dogs', href: '/health/heat-stroke-dogs', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Dehydration Signs</div>
            {[['Skin turgor loss', 'Skin tent stays up when pinched'], ['Tacky gums', 'Gums feel sticky rather than moist'], ['Sunken eyes', 'Eyes appear recessed'], ['Lethargy', 'Reduced energy and responsiveness'], ['Reduced urination', 'Less frequent, darker urine'], ['Dry nose', 'Less reliable indicator']].map(([s, d]) => (
              <div key={s} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{s}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Emergency Signs', href: '/health/emergency-signs' }, { label: 'Vomiting and Diarrhea', href: '/health/vomiting-diarrhea-pets' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-dehydration" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog dehydration home-sip checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog dehydration home-sip checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-sip notes — an unflavored
              pediatric electrolyte to dilute 50/50 with
              water, a kitchen liquid-measuring pitcher
              for that mix, and a shallow lipped dog
              saucer so a mildly dehydrated dog can take
              frequent small sips. Educational checklist,
              not a diagnosis and not a substitute for
              veterinary fluid therapy. IV bags, SQ fluids,
              Lactated Ringer&rsquo;s, and fountain / ceramic
              bowl hops stay off this list. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog dehydration home-sip checklist"
              subtitle="Email the electrolyte, pitcher, and saucer notes. No spam."
              ctaText="Email my dog dehydration home-sip checklist"
              source="health-dehydration-in-dogs-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-05T00:00:00Z" reviewedBy="Editorial team" />

          <h2>The Skin Turgor Test</h2>
          <p>The skin turgor test assesses skin elasticity — dehydration reduces skin elasticity as fluid is lost from subcutaneous tissues. Technique: grasp a fold of skin on the back of the neck or between the shoulder blades. Gently lift and then release. In a well-hydrated dog, the skin snaps back immediately to its normal position. In a dehydrated dog, the skin returns slowly ("tenting") or remains raised for a moment before settling. The slower the return, the more significant the dehydration.</p>
          <p>Important limitation: this test is less reliable in very lean dogs (reduced subcutaneous fat reduces elasticity regardless of hydration) and in very overweight dogs (fat makes the skin tent more easily even when hydrated). Use it as one of multiple assessments, not in isolation.</p>

          <h2>Gum Assessment</h2>
          <p>Normal dog gums are pink, moist, and slippery to the touch. Dehydrated gums become dry and tacky — they feel sticky rather than slippery. Press a fingertip to the gum and release: the blanch (white spot from pressure) should return to pink in under 2 seconds (capillary refill time/CRT). Delayed CRT (more than 2 seconds) suggests poor tissue perfusion — a sign of moderate to severe dehydration or cardiovascular compromise.</p>
          <p>Gum color also provides information: pale pink or white gums suggest anemia or shock; brick red gums may indicate systemic infection (sepsis) or heat stroke; blue-purple gums indicate oxygen deprivation — all of these require emergency veterinary care regardless of hydration status.</p>

          <h2>When to Treat at Home vs Go to the Vet</h2>
          <p><strong>Mild dehydration (can manage at home temporarily):</strong> Subtle skin turgor loss, slightly tacky gums, dog is alert, can hold water down, urinating (even if reduced). Cause is known (brief vomiting episode now resolved, heat exposure). Offer frequent small amounts of water. Pedialyte (unflavored) diluted 50/50 with water can replace electrolytes. Monitor closely for any deterioration.</p>
          <p>Household mixing and sipping tools can sit alongside that oral-fluid advice after a veterinarian has confirmed the case is still mild. An unflavored pediatric electrolyte is the same class of drink the page already names as Pedialyte (unflavored) — mix it 50/50 with water, not full strength. A kitchen liquid-measuring pitcher makes that 50/50 split visible so you are not guessing ounces. A shallow lipped dog saucer holds a few sips at a time so a nauseated dog can lap without dumping a full bowl. These are household tools, not treatments. They do not replace IV or subcutaneous fluid therapy, they are not Lactated Ringer&rsquo;s or 0.9% NaCl bags, and they are not a dog water fountain or a weighted ceramic bowl. Ask your veterinarian which of these, if any, belong in this dog&rsquo;s kit — and go in if tenting, dry gums, or lethargy worsen.</p>
          <p><strong>Moderate to severe dehydration — go to the vet:</strong> Significant skin tenting, very tacky or dry gums, CRT over 2 seconds, sunken eyes, lethargy or weakness, inability to keep water down, signs of ongoing vomiting or diarrhea causing continued fluid loss, unknown cause, or any dehydration in a puppy, senior dog, or dog with existing health conditions. These dogs require IV fluid therapy to restore volume and electrolytes safely and quickly — oral supplementation is too slow and unreliable when significant dehydration is present.</p>

          <h2>IV and Subcutaneous Fluid Therapy</h2>
          <p>In-clinic IV fluid therapy (Lactated Ringer's solution, 0.9% NaCl, or Plasmalyte depending on the electrolyte status) corrects dehydration rapidly and allows monitoring of the response. The fluid type, rate, and volume are calculated by the veterinarian based on the degree of dehydration, bodyweight, and concurrent conditions. Most moderately dehydrated dogs respond well to several hours of IV fluids and can go home the same day.</p>
          <p>Subcutaneous (under-the-skin) fluid therapy is a technique some veterinarians teach owners of dogs with chronic conditions (kidney disease, diabetes) that require regular fluid supplementation. It is not appropriate for acute significant dehydration but is valuable for preventing dehydration in dogs with chronic water regulation problems.</p>

          <h2 id="kit">Home-sip kit</h2>
          <p>
            Everyday physical supplies that match the
            mild-case oral-fluid copy on this page — an
            unflavored pediatric electrolyte to dilute
            50/50 with water, a kitchen liquid-measuring
            pitcher for that mix, and a shallow lipped
            dog saucer for frequent small sips. These are
            household tools, not treatments. They do not
            treat moderate or severe dehydration, they do
            not replace a veterinarian, and they are not
            Pedialyte brand ASINs, IV fluid bags, SQ
            giving sets, Lactated Ringer&rsquo;s, or 0.9%
            NaCl. This is not the UTI page and it does
            not hop a stainless-steel fountain, washable
            pee pad, or weighted ceramic bowl. It is not
            the dog water-intake calculator and it does
            not hop a ceramic pet bowl, dog water
            fountain, travel bottle, or kitchen measuring
            cup. It is not the heat-stroke page and it
            does not hop cool-water towels or a
            thermometer. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (unflavored pediatric electrolyte / kitchen
              liquid-measuring pitcher / shallow lipped dog
              saucer). ShopCtas hides empty Chewy; never
              href="#" or PLACEHOLDER. Category searches only
              — unused vs #848–#1037 dog+water+fountain,
              stainless+steel+dog+fountain,
              heavy+ceramic+pet+water+bowl,
              weighted+ceramic+dog+water+bowl,
              kitchen+measuring+cup, dog+travel+water+bottle,
              washable+dog+pee+pads, horse+electrolytes,
              ferret+electrolytes+recovery+food, and
              cool+water+towels. IV / SQ fluids and Pedialyte
              brand ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog dehydration home-sip kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page mild-case oral-fluid copy — an
              unflavored pediatric electrolyte, a kitchen
              liquid-measuring pitcher, and a shallow
              lipped dog saucer. Everyday physical
              supplies only. They are not a ranked product
              list, they are not Pedialyte brand ASINs,
              they are not IV or SQ fluid bags, they are
              not the UTI fountain / pee-pad / ceramic-bowl
              hops, they are not the water-intake fountain
              / ceramic-bowl / travel-bottle hops, they
              are not horse or ferret electrolyte hops,
              and they do not replace a veterinarian.
              Vets.co earns a commission on qualifying
              purchases at no extra cost to you. Empty
              Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/unflavored+pediatric+electrolyte?s=health-dehydration-in-dogs"
                amazonLabel="Browse unflavored pediatric electrolytes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/kitchen+liquid+measuring+pitcher?s=health-dehydration-in-dogs"
                amazonLabel="Browse kitchen liquid-measuring pitchers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/shallow+lipped+dog+saucer?s=health-dehydration-in-dogs"
                amazonLabel="Browse shallow lipped dog saucers on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
