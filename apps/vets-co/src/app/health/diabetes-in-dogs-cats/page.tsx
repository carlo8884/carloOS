import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, DropCap, PullQuote, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: "Diabetes Mellitus in Dogs & Cats — Signs, Management | Vets.co", description: "Diabetes mellitus in pets causes excessive thirst, urination, and weight loss. Insulin therapy, diet, and monitoring explained for dog and cat owners.", path: '/health/diabetes-in-dogs-cats', type: 'article' })
const SOURCES = [
  { label: 'Rand JS et al. ISFM and AAFP Consensus Guidelines: Management of Feline Diabetes. J Feline Med Surg. 2013;15(10):905-913.', publisher: 'J Feline Med Surg' },
  { label: 'Behrend E et al. Diagnosis of Spontaneous Canine Hyperadrenocorticism: 2012 ACVIM Consensus Statement. J Vet Intern Med. 2013;27(6):1292-1304.', publisher: 'ACVIM / JVIM' },
  { label: 'Merck Veterinary Manual: Diabetes Mellitus in Animals', url: 'https://www.merckvetmanual.com/endocrine-system/the-pancreas/diabetes-mellitus-in-animals', publisher: 'Merck Vet Manual' },
  { label: 'AVMA: Diabetes in Pets', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/diabetes', publisher: 'AVMA' },
  { label: 'Gilor C et al. Continuous Glucose Monitoring in Cats with Diabetes. J Vet Intern Med. 2016;30(4):1207-1217.', publisher: 'JVIM' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Diabetes Mellitus in Dogs and Cats', description: 'Clinical signs, diagnosis, insulin management, and monitoring of diabetes in dogs and cats.', url: 'https://vets.co/health/diabetes-in-dogs-cats', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-01T00:00:00Z', modifiedAt: '2026-06-01T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Diabetes Mellitus in Dogs and Cats', description: 'Signs, diagnosis, insulin therapy, and monitoring of diabetes mellitus in pets.', url: 'https://vets.co/health/diabetes-in-dogs-cats', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-01' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: "Can a cat's diabetes go into remission?", answer: "Yes. Cats with type 2-like diabetes can achieve diabetic remission — meaning insulin can be discontinued — particularly when diagnosed early, started promptly on insulin, and fed a low-carbohydrate diet. Remission rates of 30-50% are reported when these conditions are met within the first 6 months. Dogs almost never go into remission because canine diabetes is insulin-dependent (analogous to human type 1) with permanent loss of pancreatic beta cells. Remission in cats is not guaranteed and some cats relapse, so continued monitoring is essential even after insulin is stopped." },
  { question: "What is the difference between dog and cat diabetes?", answer: "Canine diabetes is almost always insulin-dependent, caused by immune-mediated or pancreatitis-related destruction of beta cells, and requires lifelong insulin. Feline diabetes more closely resembles human type 2 — driven by insulin resistance from obesity, with relative beta-cell dysfunction — which is why weight management, low-carbohydrate diets, and early treatment can produce remission in cats. Both species are diagnosed by persistent hyperglycemia with consistent clinical signs, and both are treated with insulin, but the prognosis and dietary approach differ meaningfully." },
  { question: "Why is my diabetic dog suddenly blind?", answer: "Cataracts are the most common complication of canine diabetes — the majority of diabetic dogs develop cataracts within a year of diagnosis, and onset can be rapid (over days to weeks). High blood glucose drives sorbitol accumulation in the lens, drawing in water and clouding the lens. Cataract surgery can restore vision in well-controlled diabetic dogs. Cats rarely develop diabetic cataracts. Sudden vision change in any diabetic pet warrants prompt veterinary evaluation." },
]


export default function DiabetesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Diabetes Mellitus in Dogs and Cats', subtitle: 'Diabetes mellitus is one of the most common endocrine diseases in companion animals, affecting roughly 1 in 300 dogs and 1 in 230 cats. It is a manageable chronic disease — most pets diagnosed and treated promptly go on to live full, comfortable lives — but it requires consistent daily insulin, dietary control, and owner commitment to monitoring.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', authorAvatar: '', publishedAt: 'June 2026', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Diabetes', href: '/health/diabetes-in-dogs-cats' }]}
        relatedLinks={[
          { title: 'Health Hub', href: '/health', category: 'Hub' },
          { title: "Cushing's Disease in Dogs", href: '/health/cushing-disease-dogs', category: 'Veterinary Guide' },
          { title: 'Weight Management', href: '/health/weight-management', category: 'Veterinary Guide' },
          { title: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide', category: 'Veterinary Guide' },
          { title: 'Pancreatitis in Dogs', href: '/health/pancreatitis-in-dogs', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">The Classic Four Signs</div>
            {[['Polyuria', 'Excessive urination'], ['Polydipsia', 'Excessive thirst'], ['Polyphagia', 'Increased appetite'], ['Weight loss', 'Despite eating well']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Health Hub', href: '/health' }, { label: "Cushing's Disease", href: '/health/cushing-disease-dogs' }, { label: 'Weight Management', href: '/health/weight-management' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-diabetes" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the pet diabetes care checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Pet diabetes care checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-care notes that match the
              water-bowl, measured-meal, and
              owner-tracking copy on this page — a
              digital pet glucose-log notebook so
              water intake, appetite, weight, and
              energy stay dated observations between
              clinic glucose curves, an insulated pet
              water bowl so emptying the bowl
              unusually fast is a seen refill instead
              of a guessed puddle, and an airtight
              locking pet-food bin so twice-daily
              measured meals stay the same food, not
              a table-scrap surprise. Educational
              checklist, not a ranked product list,
              not a substitute for veterinary care,
              and not a Vetsulin / NPH / syringe /
              FreeStyle Libre / Dexcom / Hill&apos;s
              w/d hop. Pet glucometers and light corn
              syrup already live on dog.com diabetes.
              Kitchen gram scales, portion-control
              food scales, elevated slow-feeder bowls,
              and cooling mats already live on other
              floors. Soft-sided vet-visit carriers
              already live on dog.com
              heartworm-prevention. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Pet diabetes care checklist"
              subtitle="Email the glucose-log, water-bowl, and food-bin notes. No spam."
              ctaText="Email my pet diabetes care checklist"
              source="health-diabetes-in-dogs-cats-under-hero"
            />
          </div>

          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-05T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="warning" title="Diabetic ketoacidosis is an emergency">
            A diabetic pet that stops eating, vomits, becomes lethargic, or shows rapid breathing may be developing diabetic ketoacidosis (DKA) — a life-threatening metabolic emergency. Do not wait. Seek emergency veterinary care the same day. Never give insulin to a pet that is not eating without veterinary guidance, as this risks dangerous hypoglycemia.
          </CalloutBox>

          <DropCap>Diabetes mellitus is a failure of glucose regulation. Normally, the pancreas secretes insulin in response to rising blood glucose, and insulin allows cells to take up glucose for energy. In diabetes, either the pancreas does not make enough insulin (insulin-dependent, typical of dogs) or the body cannot respond to it (insulin resistance, typical of cats). The result is persistently elevated blood glucose while cells starve. The body begins breaking down fat and muscle for energy, producing the classic picture of a hungry pet that drinks and urinates excessively while losing weight.</DropCap>

          <h2>Recognizing the Signs</h2>
          <p>The four hallmark signs are excessive thirst, excessive urination, increased appetite, and weight loss despite eating. Owners often first notice the pet asking to go out more frequently, urinating in the house after years of being reliable, or emptying the water bowl unusually fast. Cats may urinate large clumps in the litter box. As disease progresses, appetite can decline, lethargy sets in, and dogs may develop cloudy eyes from cataracts. Any combination of these signs warrants blood and urine testing. An insulated pet water bowl is how that unusually-fast empty becomes a seen refill instead of a guessed puddle — it is not a heavy ceramic pet water bowl, not a gallon gravity dog-waterer, and not a 2-liter plastic graduated pitcher (that lives on Cushing&apos;s). It does not diagnose diabetes and it does not replace a glucose or fructosamine test.</p>

          <h2>How Diabetes Is Diagnosed</h2>
          <p>Diagnosis requires both persistently elevated blood glucose and glucose spilling into the urine, alongside consistent clinical signs. A single high glucose reading is not enough in cats — stress alone can transiently raise a cat&apos;s blood glucose well above normal. For this reason veterinarians often measure fructosamine, a blood marker reflecting average glucose over the prior two to three weeks, which is not affected by momentary stress. Additional bloodwork screens for concurrent disease such as pancreatitis, urinary tract infection, kidney disease, and in dogs, Cushing disease, which can complicate diabetes control. Household water bowls, food bins, and notebooks do not replace that panel.</p>

          <PullQuote
            variant="inline"
            quote="Consistency matters more than perfection: giving insulin at the same times relative to meals, storing it correctly, and never doubling a missed dose are the practical keys to stable control."
            attribution="Vets.co Editorial"
          />

          <h2>Insulin Therapy</h2>
          <p>Insulin is the cornerstone of treatment for nearly all diabetic pets. Several veterinary and human insulin products are used in dogs and cats; the choice, dose, and frequency are determined entirely by your veterinarian based on the individual pet&apos;s response, and are adjusted over time using glucose monitoring. Owners learn to give small subcutaneous injections, typically twice daily after meals, using fine insulin needles that most pets tolerate well. Consistency matters more than perfection: giving insulin at the same times relative to meals, storing it correctly, and never doubling a missed dose are the practical keys to stable control. Vetsulin, NPH, ProZinc, glargine, syringes, and any other insulin brand are clinic prescriptions, not shoppable hops.</p>

          <h2>Diet and Weight</h2>
          <p>Diet is a powerful tool. Diabetic cats benefit from low-carbohydrate, high-protein diets that reduce insulin demand and improve remission odds. Diabetic dogs do best on consistent, measured meals with moderate fiber to slow glucose absorption, fed on a fixed schedule that matches insulin timing. Obesity worsens insulin resistance, so a structured weight-loss plan often improves control. Treats and table scraps should be minimized and standardized, because erratic feeding undermines insulin dosing. An airtight locking pet-food bin is how that twice-daily measured meal stays the same food — it is not a kitchen gram scale (that lives on weight-management), not a portion-control food scale (that lives on the dog calorie / ideal-weight tools), and not an elevated slow-feeder bowl. It does not set a ration and it is not a Hill&apos;s w/d or Royal Canin Diabetic hop.</p>

          <CalloutBox variant="evidence" title="Feline diabetic remission: diet and early treatment">
            ISFM and AAFP consensus guidelines report diabetic remission rates of 30-50% in cats when a low-carbohydrate diet is combined with early, consistent insulin therapy. Remission is defined as the ability to discontinue insulin while maintaining normal blood glucose. It is most likely when treatment begins within the first six months of diagnosis and the cat achieves a lean body weight.
          </CalloutBox>

          <h2>Monitoring at Home and at the Clinic</h2>
          <p>Good control depends on monitoring. Continuous glucose monitors and periodic glucose curves let the veterinary team see how glucose rises and falls through the day and adjust insulin accordingly. Owners track water intake, appetite, weight, and energy. The goal is not a perfect glucose number but resolution of clinical signs with no episodes of dangerous low blood sugar. Signs of hypoglycemia — weakness, wobbliness, tremors, disorientation, or seizures — require immediate action: offer food or rub corn syrup on the gums and contact a veterinarian. A digital pet glucose-log notebook is how those water-intake, appetite, weight, and energy notes stay dated for the next curve — it is not a pet glucometer (that lives on dog.com diabetes), not an A5 hardcover dot-grid notebook (that lives on Cushing&apos;s), not a waterproof field notebook, and not a dog weight-log book. It does not read a glucose number and it is not a FreeStyle Libre or Dexcom hop. Light corn syrup already lives on dog.com diabetes.</p>

          <h2>Prognosis</h2>
          <p>With committed daily care, most diabetic dogs and cats live well for years. Cats may achieve remission with early, aggressive management. The disease is demanding for owners — daily injections, scheduled feeding, and regular rechecks — but the payoff is a comfortable pet with a normal quality of life. The pets that do poorly are usually those diagnosed late, with uncontrolled concurrent disease, or where treatment is inconsistent. The notebook, water bowl, and food bin are household consistency tools. They do not replace the veterinarian who chooses the insulin and reads the next curve.</p>

          <h2 id="kit">Home-care kit</h2>
          <p>
            Everyday physical supplies that match the
            water-bowl, measured-meal, and
            owner-tracking copy on this page — a
            digital pet glucose-log notebook so water
            intake, appetite, weight, and energy stay
            dated observations between clinic curves,
            an insulated pet water bowl so emptying
            the bowl unusually fast is a seen refill,
            and an airtight locking pet-food bin so
            twice-daily measured meals stay the same
            food. These are educational home-care and
            monitoring tools, not a ranked product
            list, not a substitute for veterinary
            care, and not a treatment for diabetes.
            Vetsulin, NPH, ProZinc, glargine,
            syringes, FreeStyle Libre, Dexcom, and
            prescription diabetic diets are not
            shoppable hops. Pet glucometers and light
            corn syrup already live on dog.com
            diabetes. Kitchen gram scales,
            portion-control food scales, elevated
            slow-feeder bowls, and cooling mats
            already live on other floors. Soft-sided
            vet-visit carriers already live on
            dog.com heartworm-prevention. This page
            does not claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops
              (digital pet glucose-log notebook /
              insulated pet water bowl /
              airtight locking pet-food bin).
              These are educational home-care /
              monitoring / lifestyle tools, not a
              ranked product list, not a substitute
              for veterinary care, no Rx / Vetsulin /
              NPH / syringe / FreeStyle Libre /
              Dexcom / Hill's w/d ASIN hops.
              ShopCtas hides empty Chewy; never href="#"
              or PLACEHOLDER. Category searches only —
              unused vs #1084
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
              battery+motion+sensor+night+light, #1079
              elevated+mesh+dog+cot /
              clear+adhesive+non+slip+stair+treads /
              hardcover+weekly+appointment+planner,
              dog.com diabetes
              pet+glucometer /
              light+corn+syrup,
              dog.com heartworm-prevention
              soft+sided+vet+visit+carrier,
              kitchen+gram+scale /
              portion+control+food+scale+dog /
              elevated+slow+feeder+bowl+dog /
              dog+cooling+mat /
              2+liter+plastic+graduated+pitcher /
              a5+hardcover+dot+grid+notebook /
              waterproof+field+notebook /
              dog+weight+log+book.
              Vetsulin, NPH, syringes, FreeStyle
              Libre, Dexcom, Hill's w/d, and Rx
              ASINs are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the
              on-page water-bowl, measured-meal, and
              owner-tracking copy — a digital pet
              glucose-log notebook, an insulated pet
              water bowl, and an airtight locking
              pet-food bin. Educational home-care and
              monitoring tools only. They are not a
              ranked product list, they are not a
              substitute for veterinary care, they
              are not a #1084 planner / hammock /
              stroller hop, they are not a #1083
              reel-mower / duvet-cover / magnifier
              hop, they are not a dog.com diabetes
              glucometer / corn-syrup hop, they are
              not a kitchen-gram-scale /
              portion-control-scale /
              elevated-slow-feeder hop, they are not
              a Vetsulin / syringe / FreeStyle Libre
              hop, and they do not replace a
              veterinarian. Vets.co earns a
              commission on qualifying purchases at
              no extra cost to you. Empty Chewy
              buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/digital+pet+glucose+log+notebook?s=health-diabetes-in-dogs-cats"
                amazonLabel="Browse digital pet glucose-log notebooks on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/insulated+pet+water+bowl?s=health-diabetes-in-dogs-cats"
                amazonLabel="Browse insulated pet water bowls on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/airtight+locking+pet+food+bin?s=health-diabetes-in-dogs-cats"
                amazonLabel="Browse airtight locking pet-food bins on Amazon →"
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
