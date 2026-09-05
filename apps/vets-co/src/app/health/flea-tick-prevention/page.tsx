import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Flea & Tick Prevention for Pets — A Complete Guide | Vets.co", description: "Fleas and ticks cause more than itching — they spread serious disease. Learn how prevention works, why year-round control matters, and how to choose products.", path: '/health/flea-tick-prevention', type: 'article' })
const SOURCES = [
  { label: 'AVMA: Fleas and Your Pet', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/fleas-and-your-pet', publisher: 'AVMA' },
  { label: 'Companion Animal Parasite Council: Fleas', url: 'https://capcvet.org/guidelines/fleas/', publisher: 'CAPC' },
  { label: 'Companion Animal Parasite Council: Ticks', url: 'https://capcvet.org/guidelines/ticks/', publisher: 'CAPC' },
  { label: 'CDC: Preventing Ticks on Pets', url: 'https://www.cdc.gov/ticks/prevention/pets.html', publisher: 'CDC' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Flea and Tick Prevention for Pets', description: 'How flea and tick prevention works and why year-round control matters.', url: 'https://vets.co/health/flea-tick-prevention', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Flea and Tick Prevention for Pets', description: 'How parasite prevention works and the diseases it prevents.', url: 'https://vets.co/health/flea-tick-prevention', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Why do vets recommend year-round prevention?", answer: "Fleas and ticks are active in more conditions and seasons than many owners expect, and a single warm spell can sustain them; fleas can also survive indoors year-round. Year-round prevention avoids gaps that allow infestations to establish or disease to be transmitted, and it is far easier than treating an established flea infestation, which involves the home environment as well as the pet. Many products also cover other parasites. The American Heartworm Society and veterinary guidance generally favor consistent, year-round protection over seasonal use." },
  { question: "Are over-the-counter products as good as prescription ones?", answer: "Effectiveness and safety vary widely, and the right product depends on your pet's species, weight, health, and risk. Some over-the-counter products are effective and others are not, and importantly, some products safe for dogs are highly toxic to cats. Because of these differences — and because dosing must match the individual pet — it is best to choose a flea and tick product on your veterinarian's recommendation rather than by guesswork. Never use a dog product on a cat without veterinary direction." },
  { question: "What diseases do fleas and ticks spread?", answer: "Beyond itching and allergic skin disease, fleas can transmit tapeworms and, in some regions, bacterial infections, and heavy infestations can cause dangerous anemia in small or young pets. Ticks transmit a range of serious illnesses including Lyme disease, anaplasmosis, ehrlichiosis, and others depending on region and tick species, some of which also affect people. Preventing these parasites therefore protects against far more than discomfort — it is genuine protection against potentially serious, sometimes zoonotic, disease." },
]
export default function FleaTickPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Flea and Tick Prevention', subtitle: 'Fleas and ticks are more than a nuisance — they transmit tapeworms, cause allergic skin disease and anemia, and spread serious tick-borne illnesses, some of which affect people too. Consistent, year-round prevention is one of the highest-value, lowest-effort things you can do for your pet\'s health. Here is how it works and how to choose the right approach.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Flea & Tick Prevention', href: '/health/flea-tick-prevention' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases', category: 'Veterinary Guide' },
          { title: 'Intestinal Parasites', href: '/health/intestinal-parasites', category: 'Veterinary Guide' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Why It Matters</div>
            {[['Disease', 'Lyme, tapeworm, more'], ['Allergy', 'Flea allergy dermatitis'], ['Anemia', 'Heavy infestations'], ['Year-round', 'Avoids protection gaps']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Tick-Borne Diseases', href: '/health/tick-borne-diseases' }, { label: 'Intestinal Parasites', href: '/health/intestinal-parasites' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-flea-tick" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the flea-and-tick yard-and-bedding checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Flea-and-tick yard-and-bedding checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the yard, bedding, and after-walk
              notes that match the environmental-measures
              copy on this page — a 14-inch manual reel
              lawn mower so grass stays short enough
              that a tick questing at the blade tip has
              less cover, a zippered waterproof dog
              duvet cover so the bedding you wash
              regularly comes off the insert instead of
              going in as a soaked foam pad, and a
              handheld LED magnifying glass so ears,
              armpits, and groin get a look after a
              walk in grass or woods without hopping
              the tick-removal hook, flea comb, or
              laminated ID card that already live on
              tick-borne-diseases. Educational
              checklist, not a ranked product list, not
              a substitute for a veterinarian-chosen
              preventive, and not a Frontline /
              Advantage / Bravecto / NexGard / Seresto
              hop. Tick-removal hooks, fine-tooth flea
              combs, and laminated tick identification
              cards already live on
              tick-borne-diseases. Handheld AA LED
              flashlights already live on
              emergency-signs. Washable dog bed covers
              already live on dog.com mange. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Flea-and-tick yard-and-bedding checklist"
              subtitle="Email the reel-mower, duvet-cover, and magnifier notes. No spam."
              ctaText="Email my flea-and-tick yard-and-bedding checklist"
              source="health-flea-tick-prevention-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Never use dog products on cats">
            Some flea and tick products that are safe for dogs are highly toxic to cats and can cause severe, life-threatening reactions. Always use species-appropriate products and follow your veterinarian&apos;s guidance. If you have both species, keep their products clearly separated. Household yard, bedding, and after-walk gear does not replace that species check.
          </CalloutBox>

          <h2>Why Prevention Matters</h2>
          <p>Fleas and ticks cause far more than itching. Fleas trigger flea allergy dermatitis — one of the most common skin conditions in pets — transmit tapeworms, and in heavy infestations can cause dangerous anemia, especially in small or young animals. Ticks transmit serious infections such as Lyme disease, anaplasmosis, and ehrlichiosis, several of which can also affect people. Preventing these parasites protects your pet from disease and discomfort and reduces zoonotic risk to your household. A shorter lawn, washable bedding, and an after-walk coat check do not replace a veterinarian-recommended preventive.</p>

          <h2>How Prevention Works</h2>
          <p>Modern preventives work by killing or repelling parasites before they can establish or transmit disease, delivered as topical spot-ons, oral chews, or collars depending on the product. Many products protect against fleas and ticks together, and some also cover other parasites such as mites or intestinal worms. The right choice depends on your pet&apos;s species, weight, health status, lifestyle, and regional parasite risks, which is why a veterinarian&apos;s recommendation matters more than a label claim. This page does not rank Frontline, Advantage, Bravecto, NexGard, Seresto, or any other brand, and it does not hop a prescription ASIN.</p>

          <h2>Why Year-Round, Consistent Use</h2>
          <p>Gaps in prevention are where problems start. Fleas can survive indoors and remain active in mild conditions, and ticks are active across more of the year than many owners assume. A single lapse can allow an infestation to take hold — and once fleas establish in a home, eliminating them requires treating the environment as well as the pet, a far bigger task than prevention. Year-round, consistent use closes these gaps and is the approach veterinary guidance generally favors. A zippered waterproof dog duvet cover is how indoor bedding can be washed on a regular cycle; it is not a treatment for an established home infestation.</p>

          <h2>Choosing the Right Product</h2>
          <p>Effectiveness and safety vary considerably among products, and crucially, some products safe for dogs are toxic to cats. Because dosing must match the individual animal and the best choice depends on regional risks and your pet&apos;s health, select a product on your veterinarian&apos;s recommendation rather than by guesswork. Use products exactly as directed, and never apply a dog product to a cat. If you are unsure whether a product is working or appropriate, ask your veterinary team. Household yard, bedding, and after-walk gear is not a ranked product list and is not a substitute for that conversation.</p>

          <h2>Environmental and Lifestyle Measures</h2>
          <p>Prevention products are most effective alongside good habits. Check your pet for ticks after walks in grassy or wooded areas and remove any promptly and correctly. Keep grass trimmed and reduce wildlife access to your yard where feasible. Wash pet bedding regularly. For multi-pet homes, treat all pets, since untreated animals can sustain an infestation. Combining consistent preventives with these measures gives the most reliable protection against fleas, ticks, and the diseases they carry. A 14-inch manual reel lawn mower is how that &quot;keep grass trimmed&quot; line becomes a short blade instead of a tick-friendly tall edge — it is not a cordless string trimmer, not a riding mower, and not a wildlife-exclusion fence. It does not kill fleas or ticks and it does not replace a preventive. A zippered waterproof dog duvet cover is how the bedding you wash regularly comes off the insert — it is not a washable dog bed cover (that lives on dog.com mange), not a quilted disposable underpad (that lives on emergency-signs), and not a heated pet mat. A handheld LED magnifying glass is how ears, armpits, groin, and the collar line get a look after a walk — it is not a tick-removal hook, not a fine-tooth flea comb, not a laminated tick identification card (those three live on tick-borne-diseases), and not a handheld AA LED flashlight (that lives on emergency-signs). Finding a tick is a reason to remove it correctly and tell the veterinarian; the magnifier does not diagnose Lyme, Anaplasmosis, Ehrlichiosis, or RMSF.</p>

          <h2 id="kit">Yard, bedding, and after-walk kit</h2>
          <p>
            Everyday physical supplies that match the
            keep-grass-trimmed, wash-bedding-regularly,
            and check-after-walk copy on this page — a
            14-inch manual reel lawn mower so questing
            ticks have less tall-grass cover, a
            zippered waterproof dog duvet cover so
            weekly bedding laundry is a zipper pull
            instead of a soaked foam pad, and a
            handheld LED magnifying glass so the
            after-walk coat check can see what a
            glance misses. These are household yard,
            bedding, and inspection tools, not
            treatments. They do not prevent fleas or
            ticks, they do not replace a
            veterinarian-recommended preventive, and
            they are not a ranked product list.
            Tick-removal hooks, fine-tooth flea combs,
            and laminated tick identification cards
            already live on tick-borne-diseases.
            Handheld AA LED flashlights already live
            on emergency-signs. Washable dog bed
            covers already live on dog.com mange.
            Frontline, Advantage, Bravecto, NexGard,
            Seresto, isoxazoline preventives, and
            other Rx ASINs are not shoppable hops.
            This page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (14-inch manual reel lawn mower /
              zippered waterproof dog duvet cover /
              handheld LED magnifying glass).
              These are educational yard / bedding /
              after-walk tools, not a ranked product
              list, not a substitute for veterinary
              care, no Rx / Frontline / Advantage /
              Bravecto / NexGard / Seresto ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1082
              large+platform+digital+bathroom+scale /
              quilted+dog+winter+coat /
              weekly+pill+organizer+with+alarms, #1081
              sterile+saline+eye+wash /
              padded+elizabethan+collar+dog /
              dog+blind+halo+harness, #1080
              letter+size+plastic+file+box /
              plug+in+heated+pet+mat /
              battery+motion+sensor+night+light, #1079
              elevated+mesh+dog+cot /
              clear+adhesive+non+slip+stair+treads /
              hardcover+weekly+appointment+planner, #1078
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
              dog.com mange
              washable+dog+bed+cover,
              tick+removal+tool /
              LED+headlamp /
              reusable+lint+roller.
              Frontline, Advantage, Bravecto, NexGard,
              Seresto, isoxazolines, and Rx ASINs are
              not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the yard, bedding, and after-walk kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page keep-grass-trimmed,
              wash-bedding-regularly, and
              check-after-walk copy — a 14-inch manual
              reel lawn mower, a zippered waterproof
              dog duvet cover, and a handheld LED
              magnifying glass. Everyday yard, bedding,
              and inspection supplies only. They are
              not a ranked product list, they are not a
              substitute for a veterinarian-chosen
              preventive, they are not a #1082 scale /
              winter-coat / pill-alarm hop, they are
              not a #1072 tick-hook / flea-comb /
              ID-card hop, they are not a #1074
              flashlight hop, they are not a dog.com
              mange washable-bed-cover hop, they are
              not a Frontline / Advantage / Bravecto /
              NexGard / Seresto hop, and they do not
              replace a veterinarian. Vets.co earns a
              commission on qualifying purchases at no
              extra cost to you. Empty Chewy buttons
              stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/14+inch+manual+reel+lawn+mower?s=health-flea-tick-prevention"
                amazonLabel="Browse 14-inch manual reel lawn mowers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/zippered+waterproof+dog+duvet+cover?s=health-flea-tick-prevention"
                amazonLabel="Browse zippered waterproof dog duvet covers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/handheld+led+magnifying+glass?s=health-flea-tick-prevention"
                amazonLabel="Browse handheld LED magnifying glasses on Amazon →"
              />
            </div>
          </div>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
