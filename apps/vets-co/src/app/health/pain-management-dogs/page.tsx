import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Pain Management in Dogs — NSAIDs, Gabapentin | Vets.co', description: 'Pain in dogs is undertreated. NSAIDs, gabapentin, Librela, and multimodal protocols for chronic pain. How to assess pain in dogs who hide it. Reference guide.', path: '/health/pain-management-dogs', type: 'article' })
const SOURCES = [
  { label: 'WSAVA: Pain Management Guidelines', url: 'https://wsava.org/global-guidelines/global-pain-council-guidelines/', publisher: 'WSAVA' },
  { label: 'AAHA: Pain Management Guidelines for Dogs and Cats', url: 'https://www.aaha.org/aaha-guidelines/pain-management/', publisher: 'AAHA' },
  { label: 'Merck Veterinary Manual: Pain Assessment and Management', url: 'https://www.merckvetmanual.com/pharmacology/analgesia/pain-assessment-and-treatment-in-animals', publisher: 'Merck Vet Manual' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Pain Management in Dogs', description: 'NSAIDs, gabapentin, Librela, and multimodal pain protocols for dogs.', url: 'https://vets.co/health/pain-management-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-07T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Pain Management in Dogs', description: 'Assessment and multimodal treatment of acute and chronic pain in dogs.', url: 'https://vets.co/health/pain-management-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)

export default function PainManagementPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Pain Management in Dogs', subtitle: 'Pain in dogs is significantly undertreated — partly because dogs hide pain as an evolutionary survival mechanism, partly because owners and even some veterinarians underestimate the signs, and partly because pain management options have historically been limited. All three of these barriers have improved substantially.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Pain Management', href: '/health/pain-management-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Pain Signs in Dogs', href: '/health/pain-signs-dogs', category: 'Veterinary Guide' },
          { title: 'Arthritis in Dogs', href: '/health/arthritis-in-dogs', category: 'Veterinary Guide' },
          { title: 'Senior Dog Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Subtle Pain Signs</div>
            {['Slowed pace on walks', 'Reluctance to jump onto furniture', 'Less interest in play', 'Sleeping more than usual', 'Changes in posture when resting', 'Reduced appetite', 'Irritability when touched in a specific area', 'Licking or chewing a joint or area'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Arthritis in Dogs', href: '/health/arthritis-in-dogs' }, { label: 'Senior Dog Care', href: '/health/senior-pet-care' }, { label: 'Find a Specialist', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-pain-mgmt" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog pain-management home-care checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog pain-management home-care checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-care notes that match the
              rest, mobility-support, and pain-score
              copy on this page — an elevated mesh dog
              cot so a dog that sleeps more and
              hesitates before rising has a low rest
              surface they can get off without climbing
              out of a deep bed, clear adhesive
              non-slip stair treads so the dog that
              used to bound upstairs and now takes them
              slowly has grip on the existing staircase,
              and a hardcover weekly appointment
              planner so rest, stairs, and daily pain
              scores stay dated observations for the
              veterinarian. Educational checklist, not
              a ranked product list, not a substitute
              for veterinary care, and not an NSAID /
              gabapentin / tramadol / Librela / CBD hop.
              Extra-large bolster dog lounges, A5
              hardcover dot-grid notebooks, and 2-liter
              plastic graduated pitchers already live
              on cushing-disease-dogs. Egg-crate kennel
              pads, carpeted wooden pet steps, and
              veterinary floor scales already live on
              pain-signs-dogs. Traction rugs, dog
              ramps, and orthopedic beds already live
              on arthritis-in-dogs. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog pain-management home-care checklist"
              subtitle="Email the cot, stair-tread, and planner notes. No spam."
              ctaText="Email my dog pain-management home-care checklist"
              source="health-pain-management-dogs-under-hero"
            />
          </div>

          <h2>Why Dogs Hide Pain — and How to See Through It</h2>
          <p>Dogs are descended from prey animals whose survival depended on not appearing weak — showing pain attracted predators. This evolutionary pressure remains: dogs with significant chronic pain often appear &quot;fine&quot; to casual observation while making behavioral adaptations that are the actual pain signal. The dog that used to bound up the stairs and now takes them slowly. The dog that stopped initiating play. The dog that gets up from rest with a brief hesitation before moving normally. These behavioral changes are pain signs that owners frequently attribute to &quot;slowing down with age&quot; — which is itself often a pain signal. An elevated mesh dog cot is rest for that hesitation — a low, open cot they can step onto and off without climbing out of a deep bed, not an extra-large bolster dog lounge and not an egg-crate foam kennel pad. It does not treat pain and it is not a substitute for a veterinary exam. Clear adhesive non-slip stair treads are how the existing staircase gets grip for the dog that now takes the stairs slowly — they are not carpeted wooden pet steps, not a dog ramp, and not a traction rug. A hardcover weekly appointment planner is how those rest and stair observations, plus a daily pain score, stay dated notes you can hand the veterinarian — not an A5 hardcover dot-grid notebook and not a pocket spiral memo pad.</p>
          <p>The most useful owner exercise: compare a video of the dog at 3 years old with the same dog at 9 years old. Changes that look like &quot;aging&quot; — reduced bounce in gait, less spontaneous play, hesitation before movement — are frequently pain-driven and treatable. Household rest, stair-grip, and pain-score gear does not replace that video or the veterinarian who reads it.</p>

          <h2>NSAIDs — The First Line</h2>
          <p>Non-steroidal anti-inflammatory drugs are the foundation of canine pain management for musculoskeletal and postoperative pain. They block prostaglandin production, reducing inflammation and the pain signals associated with it. Veterinary NSAIDs (carprofen/Rimadyl, meloxicam/Metacam, grapiprant/Galliprant, deracoxib/Deramaxx) are significantly safer for dogs than human NSAIDs (ibuprofen, naproxen, aspirin) — do not use human NSAIDs in dogs. Even baby aspirin at regular doses causes GI ulceration in dogs.</p>
          <p>NSAID safety monitoring: baseline bloodwork (CBC, chemistry) before starting long-term NSAIDs, repeat at 6 months and annually thereafter. NSAIDs are processed through the kidneys and liver — compromised organ function requires dose adjustment or alternative pain management. GI side effects (vomiting, diarrhea, rarely ulceration) can be reduced by giving with food. Never combine NSAIDs with steroids or with other NSAIDs — combination increases GI ulceration risk significantly.</p>

          <h2>Gabapentin — Neuropathic and Multimodal</h2>
          <p>Gabapentin addresses neuropathic pain (pain from nerve damage or sensitization) — a pain type that NSAIDs alone do not adequately control. It works through calcium channel modulation in the dorsal horn of the spinal cord, reducing the "wind-up" phenomenon where chronic pain causes central sensitization. Clinical use: spinal cord disease (IVDD), post-surgical nerve pain, chronic arthritis (combined with NSAID), and cancer pain. Sedation is the most common side effect — start at a low dose and titrate up. Well-tolerated in most dogs. Generic gabapentin (identical to Neurontin) is available at low cost.</p>

          <h2>Librela (Bedinvetmab) — A New Class</h2>
          <p>Librela is a monoclonal antibody targeting nerve growth factor (NGF) — a key pain signaling molecule in osteoarthritis. Given as a monthly subcutaneous injection by a veterinarian, it provides 4 weeks of pain control per injection with a different mechanism than NSAIDs, making it appropriate for dogs that cannot tolerate NSAIDs (kidney disease, GI disease) or as an add-on for inadequate NSAID response. Clinical trial data showed significant improvement in mobility and pain scores in dogs with osteoarthritis. It works particularly well in dogs whose arthritis pain has not been adequately controlled by NSAIDs alone. It is not a replacement for all pain management — it targets one pain pathway in a complex pain condition.</p>

          <h2>Multimodal Pain Management</h2>
          <p>Chronic pain (osteoarthritis, cancer, spinal disease) is best managed with multiple simultaneous approaches targeting different pain pathways — multimodal analgesia. A multimodal protocol for a dog with osteoarthritis might include: an NSAID (anti-inflammatory), gabapentin (neuropathic/central sensitization), Librela monthly (NGF pathway), fish oil at therapeutic doses (anti-inflammatory), environmental modification (ramps, orthopedic bed, non-slip flooring), weight management (reduces joint loading), and physiotherapy or hydrotherapy (maintains muscle mass, reduces joint pain through movement). Each element addresses a different aspect of the pain experience — combined, they provide far better control than any single agent. Ramps, orthopedic beds, and traction rugs already live on the arthritis home-setup page. The household hops on this page are the unused rest / stair-grip / pain-score pieces: an elevated mesh dog cot so sleeping-more-than-usual rest does not require climbing out of a deep bed, clear adhesive non-slip stair treads so the existing staircase matches the non-slip-flooring idea without hopping a rug or a ramp, and a hardcover weekly appointment planner so daily pain scores stay a dated log for the next veterinary visit. Fish oil, NSAIDs, gabapentin, tramadol, Librela, and CBD are not shoppable hops.</p>

          <h2>Weight Management as Pain Treatment</h2>
          <p>For osteoarthritic dogs, weight loss to ideal BCS is a pain management intervention, not just a wellness recommendation. Every pound of excess weight adds approximately 3-4 pounds of force on the joints with each step. A study in Labrador Retrievers showed that dogs at ideal body weight developed osteoarthritis significantly later and with lower severity than littermates maintained at slightly over ideal weight. For a dog already arthritic, losing 10% of body weight may produce pain reduction equivalent to starting an NSAID — without the medication cost or monitoring requirements. Wide-platform veterinary floor scales already live on pain-signs-dogs; this page does not hop a scale. A hardcover weekly appointment planner can carry the weekly weight the veterinarian already asked for next to the daily pain score — it is not a diet hop and it is not a treatment.</p>

          <h2 id="kit">Home-care kit</h2>
          <p>
            Everyday physical supplies that match the
            rest, mobility-support, and pain-score copy
            on this page — an elevated mesh dog cot so
            a dog that sleeps more and hesitates before
            rising has a low rest surface they can
            step off, clear adhesive non-slip stair
            treads so the dog that now takes the stairs
            slowly has grip on the existing staircase,
            and a hardcover weekly appointment planner
            so rest, stairs, and daily pain scores stay
            dated observations for the veterinarian.
            These are educational home-care and
            monitoring tools, not a ranked product
            list, not a substitute for veterinary
            care, and not a treatment for pain,
            arthritis, or nerve disease. NSAIDs,
            gabapentin, tramadol, Librela, CBD, fish
            oil, and human pain medicines are not
            shoppable hops. Extra-large bolster dog
            lounges, A5 hardcover dot-grid notebooks,
            and 2-liter plastic graduated pitchers
            already live on cushing-disease-dogs.
            Egg-crate kennel pads, carpeted wooden pet
            steps, and veterinary floor scales already
            live on pain-signs-dogs. Traction rugs,
            dog ramps, raised bowls, and orthopedic
            beds already live on arthritis-in-dogs.
            This page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (elevated mesh dog cot /
              clear adhesive non-slip stair treads /
              hardcover weekly appointment planner).
              These are educational home-care /
              monitoring / comfort tools, not a ranked
              product list, not a substitute for
              veterinary care, no Rx / NSAID /
              gabapentin / tramadol / Librela / CBD /
              human-med ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1078
              2+liter+plastic+graduated+pitcher /
              extra+large+bolster+dog+lounge /
              a5+hardcover+dot+grid+notebook, #1077
              narrow+neck+glass+water+carafe /
              2+quart+stainless+saucepan+with+lid /
              pocket+spiral+memo+pad, #1076
              pet+toothbrush+and+enzymatic+toothpaste+kit /
              vohc+dental+chews+for+dogs /
              vohc+accepted+dental+water+additive, #1075
              egg+crate+foam+dog+kennel+pad /
              carpeted+wooden+pet+steps /
              wide+platform+veterinary+floor+scale, #1074
              wire+basket+dog+muzzle /
              quilted+disposable+underpads /
              handheld+aa+led+flashlight, #1073
              double+door+wire+dog+crate /
              pet+safe+kennel+disinfectant+spray /
              analog+wall+clock+with+second+hand, #1072
              tick+removal+hook /
              fine+tooth+flea+comb /
              laminated+tick+identification+card, #1071
              letter+size+expanding+file+organizer /
              sterile+urine+specimen+cup /
              12+hour+mechanical+kitchen+timer,
              arthritis-in-dogs
              dog+traction+rug / dog+ramp /
              raised+dog+bowl / orthopedic+dog+bed.
              NSAID, gabapentin, tramadol, Librela,
              CBD, and Rx ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page rest, mobility-support, and
              pain-score copy — an elevated mesh dog
              cot, clear adhesive non-slip stair
              treads, and a hardcover weekly
              appointment planner. Educational
              home-care and monitoring tools only.
              They are not a ranked product list, they
              are not a substitute for veterinary
              care, they are not a #1078 pitcher /
              bolster-lounge / A5-notebook hop, they
              are not a #1077 carafe / saucepan /
              memo-pad hop, they are not a #1075
              egg-crate-pad / pet-steps / floor-scale
              hop, they are not an arthritis traction-rug
              / ramp / orthopedic-bed hop, and they do
              not replace a veterinarian. Vets.co earns
              a commission on qualifying purchases at
              no extra cost to you. Empty Chewy buttons
              stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/elevated+mesh+dog+cot?s=health-pain-management-dogs"
                amazonLabel="Browse elevated mesh dog cots on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/clear+adhesive+non+slip+stair+treads?s=health-pain-management-dogs"
                amazonLabel="Browse clear adhesive non-slip stair treads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/hardcover+weekly+appointment+planner?s=health-pain-management-dogs"
                amazonLabel="Browse hardcover weekly appointment planners on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
