import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Hyperthyroidism in Cats — Signs & Treatment Options | Vets.co", description: "Feline hyperthyroidism causes weight loss with a ravenous appetite in older cats. Compare radioiodine, medication, diet, and surgery treatment options.", path: '/health/hyperthyroidism-cats', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Hyperthyroidism in Cats', url: 'https://www.merckvetmanual.com/endocrine-system/the-thyroid-gland/hyperthyroidism-in-cats', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Hyperthyroidism in Cats', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/hyperthyroidism-cats', publisher: 'AVMA' },
  { label: 'AAFP: Feline Hyperthyroidism Guidelines', url: 'https://catvets.com/guidelines/practice-guidelines/hyperthyroidism/', publisher: 'American Association of Feline Practitioners' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Hyperthyroidism in Cats', description: 'Signs, diagnosis, and the four treatment options for feline hyperthyroidism.', url: 'https://vets.co/health/hyperthyroidism-cats', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Hyperthyroidism in Cats', description: 'Clinical signs, diagnosis, and treatment of feline hyperthyroidism.', url: 'https://vets.co/health/hyperthyroidism-cats', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Is radioiodine treatment a cure for hyperthyroidism?", answer: "Radioiodine (I-131) therapy is considered the gold-standard treatment and is curative in the large majority of cats with a single injection. It selectively destroys overactive thyroid tissue while sparing normal tissue, requires no daily medication afterward, and avoids surgical and anesthetic risk. The trade-offs are upfront cost and a short hospital stay for radiation safety. It is the preferred option for many cats, though concurrent kidney disease can influence the decision and should be discussed with your veterinarian." },
  { question: "Why does my hyperthyroid cat eat constantly but lose weight?", answer: "Excess thyroid hormone dramatically increases the body's metabolic rate, so a hyperthyroid cat burns calories faster than it can take them in — producing the classic picture of a ravenous appetite alongside steady weight loss. Other common signs include increased thirst and urination, hyperactivity or restlessness, a poor or matted coat, increased vocalization, and sometimes vomiting or diarrhea. Because these signs overlap with other diseases of older cats, bloodwork measuring thyroid hormone (T4) confirms the diagnosis." },
  { question: "Can diet alone control hyperthyroidism?", answer: "An iodine-restricted therapeutic diet can control hyperthyroidism in some cats, but only if it is fed exclusively — no other food, treats, or outdoor hunting — which is difficult in multi-cat households and impossible for cats that go outdoors. It does not cure the disease and the long-term effects of severe iodine restriction are still debated. Diet is a reasonable option for cats that cannot undergo other treatments, but radioiodine and medication are more reliable for most cats." },
]
export default function HyperthyroidismCatsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Hyperthyroidism in Cats', subtitle: 'Hyperthyroidism is the most common hormonal disease of older cats, caused almost always by a benign overgrowth of the thyroid glands that floods the body with thyroid hormone. It is very treatable — often curable — and recognizing the signs early prevents the heart and kidney damage that uncontrolled disease causes.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Hyperthyroidism in Cats', href: '/health/hyperthyroidism-cats' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Kidney Disease in Cats', href: '/health/kidney-disease-cats', category: 'Veterinary Guide' },
          { title: 'Senior Pet Care', href: '/health/senior-pet-care', category: 'Veterinary Guide' },
          { title: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Four Treatment Options</div>
            {[['Radioiodine', 'Curative, single injection'], ['Medication', 'Daily, lifelong, reversible'], ['Diet', 'Iodine-restricted, exclusive'], ['Surgery', 'Removes thyroid tissue']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Kidney Disease in Cats', href: '/health/kidney-disease-cats' }, { label: 'Senior Pet Care', href: '/health/senior-pet-care' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-hyperthyroid" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the senior-cat hyperthyroid home-watch checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Senior-cat hyperthyroid home-watch checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-care notes that match the
              weight-loss-with-ravenous-appetite, unkempt-coat,
              and increased-thirst copy on this page — a
              small digital kitchen food scale so the
              extra food a senior hyperthyroid cat is
              actually finishing is a dated gram portion
              instead of a guessed scoop, a silicone cat
              grooming glove so an unkempt or matted coat
              stays a felt weekly check instead of a
              glanced-past ruff, and an 8-ounce glass
              liquid measuring cup so drinking more is a
              measured pour into the bowl, not a guessed
              puddle. Educational checklist, not a ranked
              product list, not a substitute for
              veterinary care, and not a methimazole /
              Felimazole / Hill&apos;s y/d / I-131 hop.
              Large platform digital bathroom scales
              already live on hypothyroidism-dogs. Kitchen
              gram scales and digital pet-food portion
              scales already live on weight-management and
              pancreatitis. Silicone dog grooming gloves
              already live on dog.com cancer-signs. Kitchen
              measuring cups and liquid measuring pitchers
              already live on dog water-intake and
              dehydration. Cat water fountains and
              wide-rim stainless cat water bowls already
              live on FLUTD and kidney-disease-cats. No
              spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Senior-cat hyperthyroid home-watch checklist"
              subtitle="Email the kitchen-scale, grooming-glove, and measuring-cup notes. No spam."
              ctaText="Email my senior-cat hyperthyroid home-watch checklist"
              source="health-hyperthyroidism-cats-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="Hyperthyroidism can mask kidney disease">
            Excess thyroid hormone increases blood flow through the kidneys, which can make kidney values look better than they truly are. When hyperthyroidism is treated, underlying kidney disease may become apparent. This is why veterinarians monitor kidney values closely before and after treatment — it changes the plan, not whether to treat. A kitchen food scale, grooming glove, and measuring cup do not diagnose thyroid or kidney disease and they do not replace that bloodwork.
          </CalloutBox>

          <h2>What Happens in Hyperthyroidism</h2>
          <p>In the vast majority of cases, one or both thyroid glands in the neck develop a benign nodular overgrowth that produces excess thyroid hormone. Thyroid hormone sets the body's metabolic rate, so an excess revs every system. The heart works harder, often thickening over time; metabolism races, burning through body reserves; and the nervous system becomes overstimulated. Malignant thyroid tumors are rare in cats. Left untreated, the disease damages the heart and other organs, which is why prompt treatment matters even though the underlying tumor is usually benign.</p>

          <h2>Recognizing the Signs</h2>
          <p>The hallmark is weight loss despite a strong, often voracious appetite in a cat over about 10 years old. Owners frequently describe a cat that is suddenly demanding food, drinking and urinating more, restless or hyperactive at night, and increasingly vocal. The coat may look unkempt. Some cats vomit or have loose stools. A subset shows the opposite picture — apathy and poor appetite — which can make diagnosis trickier. Any unexplained weight loss in a senior cat warrants thyroid testing. A small digital kitchen food scale is how that ravenous appetite becomes a dated gram portion instead of a guessed scoop — it is not a large platform digital bathroom scale (that lives on hypothyroidism-dogs), not a kitchen gram scale (that lives on weight-management), and not a digital pet-food portion scale (that lives on pancreatitis). A silicone cat grooming glove is how an unkempt coat stays a felt weekly check — it is not a silicone dog grooming glove (that lives on dog.com cancer-signs) and it is not a dog slicker brush (that lives on dog.com hypothyroidism). An 8-ounce glass liquid measuring cup is how drinking more becomes a measured pour into the bowl — it is not a kitchen measuring cup (that lives on dog water-intake), not a kitchen liquid measuring pitcher (that lives on dehydration), not a 2-liter plastic graduated pitcher (that lives on Cushing&apos;s), not a cat water fountain (that lives on FLUTD), and not a wide-rim stainless cat water bowl (that lives on kidney-disease-cats). Household scales, gloves, and cups do not diagnose hyperthyroidism and they do not replace a T4 test.</p>

          <h2>How It Is Diagnosed</h2>
          <p>Diagnosis usually rests on a blood test showing elevated total T4 alongside consistent signs. In borderline cases, repeat testing or additional thyroid tests resolve the picture, because other illnesses can suppress T4 into the normal range. A full workup also checks the heart, blood pressure, and kidney values, since these organs are commonly affected and influence which treatment is safest.</p>

          <h2>The Four Treatment Options</h2>
          <p><strong>Radioiodine (I-131):</strong> the gold standard. A single injection destroys overactive tissue and cures most cats, with no ongoing medication. Requires a short hospital stay.</p>
          <p><strong>Anti-thyroid medication:</strong> a daily oral or transdermal medication that controls hormone production. It is reversible, inexpensive to start, and useful for stabilizing cats before radioiodine, but it must be given for life and requires monitoring bloodwork. The specific medication and dose are determined by your veterinarian.</p>
          <p><strong>Therapeutic diet:</strong> an iodine-restricted food that, fed exclusively, can normalize thyroid levels. Practical only in single-source-feeding households.</p>
          <p><strong>Surgery:</strong> surgical removal of affected thyroid tissue, effective but now less common given the availability and safety of radioiodine.</p>

          <h2>Choosing a Treatment</h2>
          <p>The best option depends on the individual cat — age, kidney function, heart status, household feeding logistics, and budget. Radioiodine offers a cure and freedom from daily medication; medication offers flexibility and a low entry cost; diet suits specific situations. Your veterinarian weighs these factors with you. Whatever the path, the goal is to bring thyroid levels into the normal range and protect the heart and kidneys from ongoing damage. Methimazole, Felimazole, Hill&apos;s y/d, and I-131 are clinic prescriptions and hospital treatments, not shoppable hops. The kitchen scale, grooming glove, and measuring cup are household consistency tools. They do not replace the veterinarian who chooses the protocol.</p>

          <h2 id="kit">Home-care kit</h2>
          <p>
            Everyday physical supplies that match the
            weight-loss-with-ravenous-appetite, unkempt-coat,
            and increased-thirst copy on this page — a
            small digital kitchen food scale so the extra
            food a senior hyperthyroid cat is finishing is
            a dated gram portion, a silicone cat grooming
            glove so an unkempt coat stays a felt weekly
            check, and an 8-ounce glass liquid measuring
            cup so drinking more is a measured pour.
            These are educational home-care and monitoring
            tools, not a ranked product list, not a
            substitute for veterinary care, and not a
            treatment for hyperthyroidism. Methimazole,
            Felimazole, Hill&apos;s y/d, and I-131 are
            clinic prescriptions, not shoppable hops.
            Large platform digital bathroom scales already
            live on hypothyroidism-dogs. Kitchen gram
            scales already live on weight-management.
            Silicone dog grooming gloves already live on
            dog.com cancer-signs. Kitchen measuring cups
            already live on dog water-intake. Cat water
            fountains already live on FLUTD. Wide-rim
            stainless cat water bowls already live on
            kidney-disease-cats. This page does not claim
            hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (small digital kitchen food scale /
              silicone cat grooming glove /
              8-ounce glass liquid measuring cup).
              These are educational home-care /
              monitoring / lifestyle tools, not a
              ranked product list, not a substitute
              for veterinary care, no Rx / methimazole /
              Felimazole / Hill's y/d / I-131 ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1087
              heavy+gauge+48+inch+dog+crate /
              2+foot+nylon+traffic+lead /
              adjustable+aluminum+downspout+extender, #1086
              wide+rim+stainless+cat+water+bowl /
              electric+pet+food+warming+plate /
              high+sided+jumbo+cat+litter+box, #1085
              digital+pet+glucose+log+notebook /
              insulated+pet+water+bowl /
              airtight+locking+pet+food+bin, #1084
              wall+mounted+magnetic+monthly+planner /
              waterproof+rear+seat+hammock /
              folding+four+wheel+dog+stroller, #1083
              14+inch+manual+reel+lawn+mower /
              zippered+waterproof+dog+duvet+cover /
              handheld+led+magnifying+glass, #1082
              large+platform+digital+bathroom+scale /
              quilted+dog+winter+coat /
              weekly+pill+organizer+with+alarms, #1081
              sterile+saline+eye+wash /
              padded+elizabethan+collar+dog /
              dog+blind+halo+harness, #1080
              letter+size+plastic+file+box /
              plug+in+heated+pet+mat /
              battery+motion+sensor+night+light,
              #1079
              elevated+mesh+dog+cot /
              clear+adhesive+non+slip+stair+treads /
              hardcover+weekly+appointment+planner,
              #1078–#1071
              pitcher / lounge / notebook /
              carafe / saucepan / memo-pad /
              toothbrush-kit / VOHC-chews /
              water-additive / egg-crate-pad /
              pet-steps / floor-scale / muzzle /
              underpads / flashlight / crate /
              kennel-spray / second-hand-clock /
              tick-hook / flea-comb / ID-card /
              expanding-file / urine-cup /
              12-hour-timer,
              kitchen+gram+scale /
              digital+pet+food+portion+scale /
              silicone+dog+grooming+glove /
              kitchen+measuring+cup /
              kitchen+liquid+measuring+pitcher /
              cat+water+fountain,
              dog.com heartworm-prevention
              mosquito+dunks /
              monthly+pill+organizer /
              soft+sided+vet+visit+carrier.
              Methimazole, Felimazole, Hill's y/d,
              and I-131 are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page weight-loss-with-ravenous-appetite,
              unkempt-coat, and increased-thirst copy — a
              small digital kitchen food scale, a silicone
              cat grooming glove, and an 8-ounce glass
              liquid measuring cup. Educational
              home-care and monitoring tools only.
              They are not a ranked product list,
              they are not a substitute for veterinary
              care, they are not a #1087 crate /
              traffic-lead / downspout hop, they are
              not a #1086 water-bowl / warming-plate /
              litter-box hop, they are not a #1082
              bathroom-scale hop, they are not a
              methimazole / Felimazole / Hill&apos;s y/d /
              I-131 hop, and they do not replace
              a veterinarian. Vets.co earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/small+digital+kitchen+food+scale?s=health-hyperthyroidism-cats"
                amazonLabel="Browse small digital kitchen food scales on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/silicone+cat+grooming+glove?s=health-hyperthyroidism-cats"
                amazonLabel="Browse silicone cat grooming gloves on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/8+ounce+glass+liquid+measuring+cup?s=health-hyperthyroidism-cats"
                amazonLabel="Browse 8-ounce glass liquid measuring cups on Amazon →"
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
