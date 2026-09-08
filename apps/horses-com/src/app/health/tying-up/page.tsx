import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, CrossPortfolioCard, RelatedLinks, TableOfContents, FAQAccordion, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'horses-com',
  title: "Tying-Up in Horses — Exertional Rhabdomyolysis, Causes, Management",
  description:
    "Reference guide to equine tying-up (exertional rhabdomyolysis): sporadic vs chronic forms (PSSM, RER), signs, why it is urgent, and dietary management.",
  path: '/health/tying-up',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'horses-com',
  title: "Tying-Up in Horses — Exertional Rhabdomyolysis, Causes, Management",
  description:
    "Equine tying-up (exertional rhabdomyolysis): sporadic and chronic forms including PSSM and RER, signs, urgency, and dietary management.",
  url: 'https://horses.com/health/tying-up',
  imageUrl: '',
  authorName: 'Horses.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

const medSchema = buildMedicalWebPageSchema({
  name: "Tying-Up (Exertional Rhabdomyolysis)",
  description:
    "Equine tying-up (exertional rhabdomyolysis): sporadic and chronic forms including PSSM and RER, signs, urgency, and dietary management.",
  url: 'https://horses.com/health/tying-up',
  authorName: 'Horses.com Editorial',
  lastReviewed: '2026-06-01',
})

const combined = combineSchemas(articleSchema, medSchema)

const FAQS = [
  {
    question: "Should I walk a horse that is tying up?",
    answer:
      "No. Forcing a horse to move during an acute tying-up episode worsens the muscle damage. Stop exercise, keep the horse still, warm, and calm, and call your veterinarian. Movement is only resumed gently once the episode is under control and on veterinary advice.",
    answerText:
      "No -- forcing movement worsens muscle damage. Stop exercise, keep the horse still and calm, and call your vet. Resume movement only gently and on veterinary advice.",
  },
  {
    question: "What diet helps a horse that ties up?",
    answer:
      "Chronic tying-up forms such as PSSM and RER are managed with a low-starch, low-sugar, high-fat diet, where energy comes from fat and fiber rather than grain, combined with consistent daily exercise and turnout. The exact ration should be built with your veterinarian based on the underlying cause.",
    answerText:
      "A low-starch, low-sugar, high-fat diet with energy from fat and fiber, plus consistent exercise and turnout. Build the exact ration with your vet based on the cause.",
  },
  {
    question: "Why does tying-up turn the urine dark?",
    answer:
      "Severely damaged muscle releases myoglobin, a muscle protein, into the bloodstream; it is filtered into the urine and turns it dark reddish-brown. This is a warning sign of significant muscle breakdown and a risk to the kidneys, making prompt veterinary treatment and fluids especially important.",
    answerText:
      "Damaged muscle releases myoglobin into the blood, which colors the urine dark reddish-brown -- a sign of serious muscle breakdown and kidney risk needing prompt veterinary care.",
  },
]

export default function TyingUpPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="horses-com"
        contentType="health"
        relatedLinks={[
          { title: 'Equine Health Hub', href: '/health', category: 'Equine Health' },
          { title: 'Equine Lameness Basics', href: '/health/lameness-basics' },
          { title: 'Feeding the Performance Horse', href: '/nutrition/feeding-the-performance-horse' },
          { title: 'Equine Colic', href: '/health/colic' },
        ]}
        hero={{
          title: "Tying-Up in Horses",
          subtitle:
            "Tying-up -- formally exertional rhabdomyolysis -- is painful muscle damage that occurs in association with exercise, leaving a horse stiff, sweating, and reluctant to move, sometimes with dark urine. It ranges from a one-off sporadic episode to chronic, recurrent forms with specific genetic and metabolic causes such as PSSM and RER. Severe episodes are a genuine emergency, and the chronic forms are managed largely through diet and exercise. This is reference material, not a substitute for veterinary care.",
          category: "Equine Health",
          authorName: 'Horses.com Editorial',
          authorAvatar: '☘',
          publishedAt: 'June 2026',
          readTime: "10 min",
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: "Health", href: "/health" },
          { name: "Tying-Up", href: '/health/tying-up' },
        ]}
        sidebar={<>
          <TableOfContents items={[
            { label: "What Is Tying-Up", href: "#what" },
            { label: "Sporadic vs Chronic", href: "#types" },
            { label: "Clinical Signs", href: "#signs" },
            { label: "Why It Is Urgent", href: "#emergency" },
            { label: "Diagnosis", href: "#diagnosis" },
            { label: "Management", href: "#management" },
            { label: "Rest-and-routine kit", href: "#kit" },
            { label: "FAQ", href: "#faq" },
            { label: "References", href: "#references" },
          ]} />
          <div className="bg-brand-primary-pale border-l-4 border-brand-primary rounded-r-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-2">During an Acute Episode</div>
            <p className="text-xs text-brand-text-mid m-0 leading-relaxed">
              Stop exercise immediately, do not force the horse to walk, keep it warm and calm, and call your veterinarian. Severe tying-up can damage the kidneys through muscle-protein release and needs prompt treatment.
            </p>
          </div>
          <RelatedLinks
            title="Related Reading"
            links={[
              { label: "American Quarter Horse", href: "/breeds/quarter-horse" },
              { label: "Feeding the Performance Horse", href: "/nutrition/feeding-the-performance-horse" },
              { label: "Salt and Electrolytes", href: "/nutrition/salt-and-electrolytes" },
              { label: "Equine Lameness Basics", href: "/health/lameness-basics" },
            ]}
          />
          <CrossPortfolioCard currentSite="horses-com" contentType="health" variant="sidebar" />

        </>}
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Horses.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-09-06"
            reviewedBy="Editorial team"
          />

          <h2 id="what">What Is Tying-Up</h2>
          <p>Tying-up is the breakdown of skeletal muscle (rhabdomyolysis) in connection with exercise. Damaged muscle cells release their contents -- including the enzyme creatine kinase and the protein myoglobin -- into the bloodstream. The horse experiences cramping, stiffness, and pain, classically over the large muscles of the hindquarters and back. In severe episodes, myoglobin can overload and injure the kidneys, turning the urine dark.</p>

          <h2 id="types">Sporadic vs Chronic</h2>
          <h3>Sporadic tying-up</h3>
          <p>A one-off or occasional episode usually tied to a specific trigger: exercise beyond the horse&apos;s fitness, a day off followed by a hard workout on full feed, electrolyte depletion, dietary imbalance, or exhaustion. Once the trigger is corrected, these horses typically do not recur.</p>
          <h3>Chronic tying-up</h3>
          <p>Recurrent tying-up with an underlying cause. Polysaccharide storage myopathy (PSSM types 1 and 2) involves abnormal glycogen handling in muscle and is common in Quarter Horses, drafts, and warmbloods; it is managed with a low-starch, high-fat diet and consistent exercise. Recurrent exertional rhabdomyolysis (RER), seen especially in fit, nervous Thoroughbreds and Standardbreds, is linked to abnormal calcium regulation in muscle and is managed with diet, routine, and stress reduction.</p>

          <h2 id="signs">Clinical Signs</h2>
          <ul>
            <li>Stiffness, a short and reluctant stride, and unwillingness to move, often appearing shortly after exercise begins.</li>
            <li>Hard, painful, cramping muscles over the hindquarters and back.</li>
            <li>Profuse sweating, an elevated heart and respiratory rate, and signs of pain.</li>
            <li>Dark, reddish-brown urine in severe episodes (from myoglobin).</li>
            <li>In mild chronic cases, poor performance and a tendency to stop or refuse rather than overt cramping.</li>
          </ul>

          <h2 id="emergency">Why It Is Urgent</h2>
          <p>A severe episode is an emergency. Forcing a tying-up horse to keep moving worsens muscle damage, and the myoglobin released by damaged muscle can injure the kidneys, especially if the horse is dehydrated. Prompt veterinary care -- rest, fluids to protect the kidneys, pain relief, and monitoring of muscle enzymes -- limits the damage. Never trailer or work a horse through an acute episode. An Irish-knit horse cooler is how a horse that must stay still stays warm and dry instead of standing in a sweat-soaked sheet — it is not a soft fleece equine cooler (that lives on colic), not a horse fleece cooler (those live on body-clipping and the blanket-size calculator), and not a turnout blanket (that lives on blanketing).</p>

          <h2 id="diagnosis">Diagnosis</h2>
          <p>A veterinarian confirms tying-up by measuring muscle enzymes (creatine kinase and AST) in the blood, which rise markedly with muscle damage. For recurrent cases, the workup may include an exercise challenge test, muscle biopsy, and genetic testing for PSSM type 1 (the GYS1 mutation) to distinguish the underlying cause, which directs the long-term plan.</p>

          <h2 id="management">Management</h2>
          <ul>
            <li><strong>Match diet to the cause.</strong> PSSM and RER horses do best on a low-starch, low-sugar, high-fat ration with energy from fat and fiber rather than grain. This page does not hop rice-bran pellets, high-fat performance feed, or ration balancers — those already live on the nutrition pages and stay a veterinary ration, not a shoppable treatment.</li>
            <li><strong>Keep exercise consistent.</strong> Daily turnout and a regular work program without sudden days off on full feed are central to preventing recurrence.</li>
            <li><strong>Maintain hydration and electrolytes</strong> around hard work and in hot weather. Loose plain white salt is how daily sodium is measured into the ration instead of hoped-for on a lick — it is not an equine salt lick (that lives on the feed calculator), not a bottled horse-electrolytes hop (those live on the emergency tool and grimace scale), and not a tank heater (that lives on winter-care).</li>
            <li><strong>Reduce stress</strong> in nervous RER-type horses with routine and calm handling.</li>
            <li><strong>Warm up and cool down gradually</strong> and build fitness progressively rather than in big jumps. A wool exercise quarter sheet is how that warmup stays on the muscle instead of a cold walk-out — it is not a turnout sheet (that lives on the blanket-size calculator), not a waterproof sheet (that lives on blanketing), and not a fleece cooler.</li>
          </ul>

          <h2 id="kit">Rest-and-routine kit</h2>
          <p>
            Everyday physical supplies that match the
            keep-warm-and-calm, warm-up-and-cool-down, and
            hydration-and-electrolytes copy on this page —
            an Irish-knit horse cooler so a horse that must
            stay still stays warm, a wool exercise quarter
            sheet so the warmup starts on the muscle, and
            loose plain white salt so daily sodium is
            measured into the ration. These are educational
            rest-and-routine tools, not a ranked product
            list, not a substitute for veterinary care, and
            not a diet or medication prescription. Salt licks already
            live on the feed calculator. This page does not claim hands-on testing. </p>

          <AffiliateDisclosure variant="inline" siteId="horses-com" />

          {/* Money path — live amazon-brand search hops
              (irish knit horse cooler /
              wool exercise quarter sheet /
              loose plain white salt horse).
              These are educational rest-and-routine
              tools, not a ranked product list, not a
              substitute for veterinary care, no Rx /
              vaccine / fleece-cooler / salt-lick /
              electrolyte-paste ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1101
              steel+heart+bar+horseshoe /
              3+degree+leather+wedge+pad /
              rocker+toe+steel+horseshoe, #1100
              long+handle+stock+tank+brush /
              20+foot+barn+mosquito+netting /
              fine+mesh+horse+mosquito+sheet, #1099
              30+foot+cotton+lunge+line /
              leather+chain+lead+shank+horse /
              orange+traffic+cone+set, #1098
              weatherproof+storage+clipboard /
              round+rubber+feed+pan+horse /
              paper+pellet+horse+bedding, #1097
              color+coded+flat+back+horse+buckets /
              disposable+coverall+suit /
              heavy+duty+rubber+boot+dip+tub, #1094
              lidded+5+gallon+feed+soaking+pail /
              large+smooth+feed+tub+rocks /
              apple+wedger+slicer,
              soft+fleece+equine+cooler (colic),
              horse+fleece+cooler (body-clipping /
              blanket calculator),
              horse+turnout+sheet /
              horse+waterproof+sheet (blanketing /
              blanket calculator),
              equine+salt+lick (feed calculator),
              horse+electrolytes (emergency tool /
              grimace scale),
              stabilized+rice+bran+horse+fat+supplement /
              high+fat+low+starch+horse+feed
              (nutrition pages).
              Medications and prescriptions
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop related supplies
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">Amazon search links go to general supplies. They are not a ranked product list and they do not replace veterinary care.</p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/irish+knit+horse+cooler?s=health-tying-up"
                amazonLabel="Browse Irish-knit horse coolers on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/wool+exercise+quarter+sheet?s=health-tying-up"
                amazonLabel="Browse wool exercise quarter sheets on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/loose+plain+white+salt+horse?s=health-tying-up"
                amazonLabel="Browse loose plain white salt for horses on Amazon →"
              />
          </div>
          </div>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion items={FAQS} />

          <h2 id="references">References</h2>
          <ol className="text-sm text-brand-text-mid">
            <li>Valberg SJ. “Exertional Rhabdomyolysis in the Horse.” Veterinary Clinics of North America: Equine Practice and related reviews.</li>
            <li>MacLeay JM, et al. “Recurrent Exertional Rhabdomyolysis in Thoroughbred Racehorses.” American Journal of Veterinary Research.</li>
            <li>McCue ME, Valberg SJ, et al. “Glycogen Synthase (GYS1) Mutation and PSSM.” Genomics, 2008; 91(5):458–466.</li>
            <li>American Association of Equine Practitioners. “Tying-Up / Exertional Rhabdomyolysis” owner resources. aaep.org.</li>
          </ol>
        </div>
      </ArticleLayout>
    </>
  )
}
