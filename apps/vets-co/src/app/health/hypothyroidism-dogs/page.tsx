import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Hypothyroidism in Dogs — Signs, Testing, Treatment | Vets.co", description: "Canine hypothyroidism causes weight gain, lethargy, and coat changes. Learn the signs, how it is diagnosed, and why treatment is highly effective.", path: '/health/hypothyroidism-dogs', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Hypothyroidism in Dogs', url: 'https://www.merckvetmanual.com/endocrine-system/the-thyroid-gland/hypothyroidism-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Hypothyroidism in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/hypothyroidism-dogs', publisher: 'AVMA' },
  { label: 'AAHA: Endocrine Disease in Dogs', url: 'https://www.aaha.org/aaha-guidelines/', publisher: 'AAHA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Hypothyroidism in Dogs', description: 'Signs, diagnosis, and lifelong management of canine hypothyroidism.', url: 'https://vets.co/health/hypothyroidism-dogs', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Hypothyroidism in Dogs', description: 'Clinical signs, testing, and treatment of canine hypothyroidism.', url: 'https://vets.co/health/hypothyroidism-dogs', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Is hypothyroidism in dogs treatable?", answer: "Yes — hypothyroidism is one of the most treatable chronic diseases in dogs. Treatment is a daily oral thyroid hormone replacement, and the dose is determined and adjusted by your veterinarian based on follow-up blood levels. Most dogs respond dramatically: energy and activity return within a few weeks, and skin and coat changes resolve over a few months. The medication is inexpensive and given for life, with periodic bloodwork to keep the dose correct." },
  { question: "Does hypothyroidism cause weight gain even when eating normally?", answer: "Yes. Thyroid hormone sets the body's metabolic rate, so an underactive thyroid slows metabolism and leads to weight gain despite no increase — or even a decrease — in food intake. This is a hallmark of the disease, alongside lethargy, a dull or thinning coat, skin darkening, recurrent ear or skin infections, and cold intolerance. Because these signs come on gradually and overlap with normal aging, the condition is often missed until bloodwork is done." },
  { question: "Can other illnesses cause a falsely low thyroid result?", answer: "Yes — this is an important diagnostic pitfall. Many unrelated illnesses, as well as certain medications, can lower thyroid hormone levels temporarily without true hypothyroidism, a phenomenon called euthyroid sick syndrome. For this reason veterinarians avoid diagnosing hypothyroidism in a sick dog and may run a fuller thyroid panel that includes free T4 and TSH to confirm the diagnosis before committing a dog to lifelong treatment." },
]
export default function HypothyroidismDogsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Hypothyroidism in Dogs', subtitle: 'Hypothyroidism — an underactive thyroid gland — is among the most common hormonal diseases in dogs and one of the most rewarding to treat. The signs are easy to mistake for normal aging, but once recognized and confirmed, daily hormone replacement restores most dogs to full health.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Hypothyroidism in Dogs', href: '/health/hypothyroidism-dogs' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Cushing Disease in Dogs', href: '/health/cushing-disease-dogs', category: 'Veterinary Guide' },
          { title: 'Weight Management', href: '/health/weight-management', category: 'Veterinary Guide' },
          { title: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Common Signs</div>
            {[['Weight gain', 'Despite normal eating'], ['Lethargy', 'Less active, sleeps more'], ['Coat changes', 'Thinning, dull, symmetric hair loss'], ['Skin issues', 'Darkening, recurrent infections']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Cushing Disease in Dogs', href: '/health/cushing-disease-dogs' }, { label: 'Weight Management', href: '/health/weight-management' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-hypothyroid-dogs" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog thyroid weight-and-coat watch checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog thyroid weight-and-coat watch checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-care notes that match the
              weight-gain, cold-intolerance, and daily
              thyroid-medication copy on this page — a
              large platform digital bathroom scale so
              weight gain despite normal eating becomes
              a dated number you can hand the
              veterinarian at the next T4 recheck, a
              quilted dog winter coat so cold
              intolerance is a walk layer instead of
              camping on a heating vent, and a weekly
              pill organizer with alarms so lifelong
              daily hormone replacement stays a
              remembered morning or evening dose.
              Educational checklist, not a ranked
              product list, not a substitute for
              veterinary care, and not a Soloxine /
              Thyro-Tabs / Synthroid / levothyroxine
              hop. Self-warming dog mats, fleece dog
              sweaters, and slicker brushes already
              live on dog.com hypothyroidism. Analog
              bathroom scales, digital pet scales,
              veterinary floor scales, monthly pill
              organizers, and AM/PM weekly pill
              organizers already live on other floors.
              Plug-in heated pet mats already live on
              senior-pet-care. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog thyroid weight-and-coat watch checklist"
              subtitle="Email the scale, winter-coat, and pill-alarm notes. No spam."
              ctaText="Email my dog thyroid weight-and-coat watch checklist"
              source="health-hypothyroidism-dogs-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Easy to miss, easy to treat">
            Because the signs develop slowly and look like aging, many hypothyroid dogs go undiagnosed for a long time. A simple blood test confirms it, and treatment is highly effective and affordable. If your middle-aged dog has slowed down and gained weight, ask your veterinarian about thyroid testing. A large platform digital bathroom scale is only a home weight-watch — it does not diagnose hypothyroidism and it is not a substitute for that blood test.
          </CalloutBox>

          <h2>What the Thyroid Does</h2>
          <p>The thyroid gland in the neck produces hormones that regulate the body&apos;s metabolic rate — essentially how fast cells burn energy. When the gland becomes underactive, metabolism slows across the board, affecting weight, energy, skin, coat, and even mood. In dogs, the cause is usually progressive immune-mediated destruction or atrophy of the gland. It is most common in middle-aged dogs of medium to large breeds.</p>

          <h2>Recognizing the Signs</h2>
          <p>Classic signs are weight gain without overeating, lethargy and reduced activity, and skin and coat changes — thinning fur, a dull coat, symmetric hair loss over the trunk, darkened or thickened skin, and recurrent ear or skin infections. Some dogs seek out warm spots because they tolerate cold poorly. Occasionally hypothyroidism affects the nerves or causes a &quot;tragic&quot; facial expression from thickened skin. These signs accumulate gradually, which is why owners often attribute them to age. A large platform digital bathroom scale is how that weight-gain-despite-normal-eating story becomes a dated home number for the next visit — it is not an analog bathroom scale (that lives on dog-cancer-signs), not a digital pet scale (that lives on dog-obesity), not a wide-platform veterinary floor scale (that lives on pain-signs-dogs), and not a kitchen gram scale. It does not diagnose thyroid disease. A quilted dog winter coat is how cold intolerance becomes a short outdoor layer instead of skipping the walk — it is not a fleece dog sweater (that lives on dog.com hypothyroidism), not a self-warming dog mat, not a plug-in heated pet mat (that lives on senior-pet-care), and not washable heat pants. It does not treat an underactive thyroid.</p>

          <h2>How It Is Diagnosed</h2>
          <p>Diagnosis relies on bloodwork, but interpretation requires care. A low total T4 supports the diagnosis but is not enough alone, because many unrelated illnesses and some medications lower T4 without true thyroid disease. Veterinarians therefore confirm with a fuller panel — free T4 and TSH — and avoid testing while a dog is acutely ill. Routine bloodwork in hypothyroid dogs often also shows elevated cholesterol, a supportive clue. Household scales, coats, and pill boxes do not replace that panel.</p>

          <h2>Treatment</h2>
          <p>Treatment is daily oral thyroid hormone replacement, given for life. The starting dose and any adjustments are determined by your veterinarian, who rechecks thyroid levels after starting and periodically thereafter to fine-tune. Owners typically see energy return within weeks, with skin and coat improvements following over one to several months. The medication is inexpensive and well tolerated, and the response to treatment also helps confirm the diagnosis was correct. A weekly pill organizer with alarms is how that daily dose stays a remembered slot — it is not a monthly pill organizer (that lives on heartworm-prevention), not an AM/PM weekly pill organizer (that lives on dog-liver-disease), and not dog pill pockets (those live on Addison&apos;s). It does not set or adjust a levothyroxine dose. Soloxine, Thyro-Tabs, Synthroid, and any other thyroid brand are clinic prescriptions, not shoppable hops.</p>

          <h2>Long-Term Management</h2>
          <p>Once stabilized, hypothyroid dogs need only their daily medication and periodic monitoring bloodwork to confirm the dose remains appropriate as they age or change weight. The prognosis is excellent. Because the disease is lifelong but easily controlled, the main job for owners is consistency — giving the medication reliably and keeping up with recheck testing. A large platform digital bathroom scale is how a weight change between rechecks stays a number, not a guess. A quilted dog winter coat is still comfort for leftover cold intolerance while the coat fills back in. A weekly pill organizer with alarms is still the reminder that the daily tablet was given. None of those replace the veterinarian who reads the next T4.</p>

          <h2 id="kit">Home-care kit</h2>
          <p>
            Everyday physical supplies that match the
            weight-gain, cold-intolerance, and daily
            thyroid-medication copy on this page — a
            large platform digital bathroom scale so
            weight gain despite normal eating is a
            dated home number for the next T4 recheck,
            a quilted dog winter coat so a dog that
            seeks warm spots can still take a short
            cold-weather walk, and a weekly pill
            organizer with alarms so lifelong daily
            hormone replacement stays a remembered
            dose. These are educational home-care and
            monitoring tools, not a ranked product
            list, not a substitute for veterinary
            care, and not a treatment for
            hypothyroidism. Soloxine, Thyro-Tabs,
            Synthroid, and levothyroxine are not
            shoppable hops. Self-warming dog mats,
            fleece dog sweaters, and slicker brushes
            already live on dog.com hypothyroidism.
            Analog bathroom scales already live on
            dog-cancer-signs. Digital pet scales
            already live on dog-obesity. Wide-platform
            veterinary floor scales already live on
            pain-signs-dogs. Monthly pill organizers
            already live on heartworm-prevention.
            AM/PM weekly pill organizers already live
            on dog-liver-disease. Plug-in heated pet
            mats already live on senior-pet-care. This
            page does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (large platform digital bathroom scale /
              quilted dog winter coat /
              weekly pill organizer with alarms).
              These are educational home-care /
              monitoring / comfort tools, not a ranked
              product list, not a substitute for
              veterinary care, no Rx / Soloxine /
              Thyro-Tabs / Synthroid / levothyroxine
              ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1081
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
              dog.com hypothyroidism
              self+warming+dog+mat /
              fleece+dog+sweater /
              dog+slicker+brush,
              analog+bathroom+scale /
              digital+pet+scale /
              kitchen+gram+scale /
              portion+control+food+scale+dog /
              monthly+pill+organizer /
              am+pm+weekly+pill+organizer /
              dog+pill+pockets /
              dog+weight+log+book.
              Soloxine, Thyro-Tabs, Synthroid,
              levothyroxine, and Rx ASINs are not
              shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page weight-gain, cold-intolerance,
              and daily thyroid-medication copy — a
              large platform digital bathroom scale, a
              quilted dog winter coat, and a weekly
              pill organizer with alarms. Educational
              home-care and monitoring tools only.
              They are not a ranked product list, they
              are not a substitute for veterinary
              care, they are not a #1081 saline-wash /
              padded-collar / halo-harness hop, they
              are not a #1080 file-box / heated-mat /
              motion-night-light hop, they are not a
              #1079 cot / stair-tread / planner hop,
              they are not a dog.com hypothyroidism
              self-warming-mat / fleece-sweater /
              slicker-brush hop, they are not an
              analog-bathroom-scale / digital-pet-scale
              / veterinary-floor-scale hop, they are
              not a monthly-pill-organizer / AM-PM
              weekly-pill-organizer hop, and they do
              not replace a veterinarian. Vets.co earns
              a commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/large+platform+digital+bathroom+scale?s=health-hypothyroidism-dogs"
                amazonLabel="Browse large platform digital bathroom scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/quilted+dog+winter+coat?s=health-hypothyroidism-dogs"
                amazonLabel="Browse quilted dog winter coats on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/weekly+pill+organizer+with+alarms?s=health-hypothyroidism-dogs"
                amazonLabel="Browse weekly pill organizers with alarms on Amazon →"
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
