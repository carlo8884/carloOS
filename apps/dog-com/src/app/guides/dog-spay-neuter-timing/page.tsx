import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  RelatedLinks, CrossPortfolioCard,
  TableOfContents,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Spay/Neuter Timing — Updated Science by Breed & Size | Dog.com',
  description:
    'When to spay or neuter your dog — current AAHA/ACVS guidance and UC Davis breed-specific research (Hart et al.) on timing by breed, sex, and lifestyle.',
  path: '/guides/dog-spay-neuter-timing',
  category: 'Dog Health Guide',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Spay/Neuter Timing — Updated Science by Breed and Size',
  description:
    'Evidence-based timing of spay and neuter procedures in dogs, with breed-specific guidance per Hart et al. (UC Davis) and AAHA/ACVS recommendations.',
  url: 'https://dog.com/guides/dog-spay-neuter-timing',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})
const med = buildMedicalWebPageSchema({
  name: 'Dog Spay/Neuter Timing',
  description:
    'Decision guide for spay and neuter timing in dogs by breed, size, sex, and lifestyle.',
  url: 'https://dog.com/guides/dog-spay-neuter-timing',
  authorName: 'Dog.com Editorial',
  lastReviewed: '2026-05-28',
})

const FAQS = [
  {
    question: 'Is 6 months still the right age to spay or neuter my dog?',
    answer:
      'Not universally. The old standard of spay/neuter at 6 months was based on convenience and population control rather than long-term health data. Current evidence — including the AAHA Spay/Neuter Task Force recommendations and the breed-specific work from Hart and colleagues at UC Davis (PLOS ONE 2014, 2020, and follow-up studies) — supports timing decisions that depend on breed, body size, sex, and owner lifestyle. For most small breeds, 6–9 months remains reasonable. For many large and giant breeds, waiting until 12–24 months reduces orthopedic and cancer risks.',
  },
  {
    question: 'Why does breed matter so much for spay/neuter timing?',
    answer:
      'The Hart group at UC Davis has published peer-reviewed analyses (PLOS ONE 2014 on Golden and Labrador Retrievers; expanded analyses in 2020 covering 35 breeds; subsequent papers extending the analysis) showing that the risk of joint disease (hip dysplasia, cranial cruciate ligament rupture, elbow dysplasia) and the risk of certain cancers (lymphoma, mast cell tumor, hemangiosarcoma, osteosarcoma) vary substantially by breed and by the age at which the dog was neutered. For some large breeds, neutering before growth plate closure roughly doubles the rate of joint disease. For other breeds the same intervention has minimal effect. Generic timing advice misses this variability.',
  },
  {
    question: 'What are the health benefits of spaying or neutering at all?',
    answer:
      'Spaying a female dog before her first or second heat substantially reduces lifetime risk of mammary tumors (a meaningful fraction of which are malignant) and eliminates the risk of pyometra (uterine infection), a common and life-threatening condition in intact older females. Neutering a male eliminates the risk of testicular cancer and reduces prostatic disease, including benign prostatic hyperplasia and prostatitis. Behavioral effects are smaller and less consistent than commonly believed; aggression, marking, and roaming are partially reduced but not eliminated.',
  },
  {
    question: 'What are the risks of early spay/neuter?',
    answer:
      'In large and giant breeds, neuter before growth plate closure is associated with increased rates of hip dysplasia, cranial cruciate ligament rupture, and elbow dysplasia in published data. Several breeds show increased rates of certain cancers (osteosarcoma in Rottweilers, lymphoma and hemangiosarcoma in some lines of Golden Retrievers) with early neuter. Urinary incontinence in spayed females is a recognized post-spay complication; the risk appears higher with earlier spay in some studies but the data are not consistent across breeds.',
  },
  {
    question: 'Are there alternatives to traditional spay/neuter?',
    answer:
      'Yes. Ovary-sparing spay (removal of uterus only, leaving ovaries) and vasectomy (sterilization without removal of testes) preserve sex hormones while preventing reproduction. These procedures are not yet widely offered in general practice, but they are gaining attention as a way to preserve the orthopedic and possibly oncologic benefits of intact hormones while removing the population-level risks of reproduction. Discuss availability and trade-offs with your veterinarian or a board-certified veterinary surgeon (ACVS Diplomate). The owner-lifestyle question still matters — these procedures do not change behavioral effects of intact hormones (cycling, marking, roaming).',
  },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS }))

export default function DogSpayNeuterTimingPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="dog-com"
        hero={{
          title: 'Dog Spay/Neuter Timing — Updated Science by Breed and Size',
          subtitle:
            'The default advice for decades was to spay or neuter at 6 months. The current evidence supports a more nuanced decision that depends on breed, sex, body size, and owner lifestyle. The American Animal Hospital Association (AAHA) Spay/Neuter Task Force and the UC Davis Hart group studies (Hart et al., PLOS ONE 2014, 2020) have together shifted the standard of care. This guide summarizes what the evidence says now — and what you should discuss with your veterinarian or a board-certified veterinary surgeon (ACVS Diplomate).',
          category: 'Dog Health Guide',
          authorName: 'Dog.com Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 2026',
          readTime: '14 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Guides', href: '/guides' },
          { name: 'Dog Spay/Neuter Timing', href: '/guides/dog-spay-neuter-timing' },
        ]}
        relatedLinks={[{ title: 'Dog Guides Hub', href: '/guides', category: 'Hub' }, { title: 'Dog Body Condition Score', href: '/guides/dog-body-condition-score', category: 'Guides' }, { title: 'Puppy Schedule', href: '/training/puppy-schedule', category: 'Training' }, { title: 'Best Pet Insurance', href: 'https://vets.co/reviews/best-pet-insurance', category: 'Reviews' }]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'What Changed', href: '#changed' },
                { label: 'The UC Davis Breed-Specific Studies', href: '#hart' },
                { label: 'Small Breed Guidance', href: '#small' },
                { label: 'Large and Giant Breeds', href: '#large' },
                { label: 'Health Benefits of Spay/Neuter', href: '#benefits' },
                { label: 'Risks of Early Spay/Neuter', href: '#risks' },
                { label: 'Alternatives (Ovary-Sparing, Vasectomy)', href: '#alternatives' },
                { label: 'Lifestyle Considerations', href: '#lifestyle' },
                { label: 'Discussion Checklist for Your Vet', href: '#checklist' },
                { label: 'FAQ', href: '#faq' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Body Condition Score (BCS)', href: '/guides/dog-body-condition-score' },
                { label: 'Dog Obesity', href: '/health/dog-obesity' },
                { label: 'Puppy Schedule', href: '/training/puppy-schedule' },
                { label: 'Vet Credentials', href: '/find-a-vet' },
                { label: 'Dog Vaccinations', href: '/health/dog-vaccinations' },
              ]}
            />
            <CrossPortfolioCard currentSite="dog-com" contentType="guide" variant="sidebar" />
            <EmailCapture
              variant="sidebar"
              siteId="dog-com"
              title="Free Dog Health Tips"
              subtitle="Evidence-based guidance weekly."
              source="guide-spay-neuter"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Dog.com Editorial"
            publishedAt="2026-05-28T00:00:00Z"
            updatedAt="2026-05-28T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <CalloutBox variant="evidence" title="TL;DR — The current consensus">
            <p>
              <strong>Old advice:</strong> spay/neuter at 6 months — universal.
            </p>
            <p>
              <strong>Current evidence:</strong> timing depends on breed, sex, and lifestyle. For most small breeds, 6–9 months is reasonable. For many large and giant breeds, waiting until 12–24 months (growth plate closure) reduces joint disease and some cancer rates. Sources: AAHA Spay/Neuter Task Force, ACVS guidance, Hart et al. (UC Davis, PLOS ONE 2014, 2020).
            </p>
          </CalloutBox>

          <h2 id="changed">What Changed — From a Universal Rule to a Breed-Specific Decision</h2>
          <DropCap>
            For decades, the standard recommendation in US small-animal practice was to spay or neuter dogs at approximately 6 months of age — early enough to prevent unwanted reproduction, late enough to permit basic growth. The recommendation was driven primarily by population control and surgical convenience. The long-term health data behind it were thin. Beginning in the early 2010s, a series of breed-specific cohort analyses — most prominently from the Hart group at the University of California, Davis — began to publish data showing that the joint-disease and cancer consequences of neuter timing varied dramatically by breed and by sex. The 6-month rule was not safe in the same way for every breed.
          </DropCap>
          <p>
            In response, the American Animal Hospital Association (AAHA) issued updated guidance (the Canine Life Stage Guidelines and the Spay/Neuter Task Force position) recommending that timing be tailored to the dog rather than chosen by default. The American College of Veterinary Surgeons (ACVS) and the American Veterinary Medical Association (AVMA) hold consistent positions: the decision to spay or neuter, and when, should be individualized to the dog&rsquo;s breed, projected adult size, sex, and the owner&rsquo;s ability to manage an intact dog responsibly.
          </p>

          <h2 id="hart">The UC Davis Breed-Specific Studies — What They Found</h2>
          <p>
            The Hart group&rsquo;s 2013 paper on Golden Retrievers (Torres de la Riva, Hart, and colleagues, <em>PLOS ONE</em> 2013) followed by a major expansion in 2020 — Hart, Hart, Thigpen, and Willits, <em>Frontiers in Veterinary Science</em> 2020, analyzing 35 breeds — are the most cited references for breed-specific neuter timing. Key findings, simplified:
          </p>
          <ul>
            <li>
              <strong>Golden Retrievers (males):</strong> Neutering before 12 months was associated with a meaningful increase in the rate of one or more joint disorders (hip dysplasia, cranial cruciate ligament rupture, elbow dysplasia), with the risk falling substantially for dogs neutered after growth plate closure.
            </li>
            <li>
              <strong>Golden Retrievers (females):</strong> Some analyses showed an increase in certain cancers (lymphoma, hemangiosarcoma, mast cell tumor) with early spay; the picture for females is more complex than for males, with mammary tumor protection from early spay weighed against other cancer risks.
            </li>
            <li>
              <strong>Labrador Retrievers:</strong> Increase in joint disorders with early neuter, particularly in males. Smaller effects on cancer risk than seen in Goldens.
            </li>
            <li>
              <strong>Rottweilers:</strong> Documented increased osteosarcoma risk with early neuter, particularly in females spayed before 12 months. This is one of the clearest breed-cancer-timing signals in the literature.
            </li>
            <li>
              <strong>German Shepherds, Bernese Mountain Dogs, Saint Bernards, and many other large/giant breeds:</strong> Various combinations of joint and cancer effects; the 2020 expansion provides breed-by-breed tables.
            </li>
            <li>
              <strong>Small breeds (most):</strong> The Hart group found that for many small breeds, early neuter (6–9 months) showed no meaningful increase in joint disorders or cancer rates compared to later neuter. The breed-by-breed pattern is breed-specific, but the small-breed signal is more permissive.
            </li>
          </ul>

          <CalloutBox variant="evidence" title="Important caveats to the Hart data">
            <p>
              The Hart studies are large retrospective cohort analyses drawn from the UC Davis veterinary teaching hospital. They are the most comprehensive published data on this question, but they are retrospective and breed-by-breed sample sizes vary. Several other published cohorts (Norwegian, UK, and US insurance datasets) have produced consistent directional findings but somewhat different magnitudes. The take-away is that breed and timing matter — the exact numbers continue to be refined.
            </p>
          </CalloutBox>

          <h2 id="small">Small Breed Guidance (Adult Weight Under ~25 lb)</h2>
          <p>
            For most small breeds — including Yorkshire Terriers, Maltese, Cavalier King Charles Spaniels, Miniature Dachshunds, Bichon Frisé, Shih Tzu, Pomeranians, and small Poodles — current AAHA guidance generally supports spay/neuter between approximately 6 and 9 months, before the first heat in females. The evidence for delayed neuter in small breeds is weak; the documented benefits of pre-first-heat spay (substantial mammary tumor risk reduction) and avoidance of unintended litters are well-established.
          </p>
          <p>
            Small breeds reach growth plate closure earlier than large breeds (often around 8–10 months versus 14–18 months in large breeds), so the orthopedic argument for delay is much weaker — the growth plates are closing or already closed by the time of surgery.
          </p>

          <h2 id="large">Large and Giant Breeds — The Case for Waiting</h2>
          <p>
            For breeds with adult weights above approximately 50 lb — Labrador and Golden Retrievers, German Shepherds, Rottweilers, Bernese Mountain Dogs, Great Danes, Mastiffs, Saint Bernards, and Newfoundlands — current evidence supports waiting until growth plate closure (approximately 12–24 months depending on breed) before neutering males, with similar considerations for females.
          </p>
          <p>
            Practical considerations:
          </p>
          <ul>
            <li>
              <strong>Growth plate closure</strong> typically occurs at 14–18 months in large breeds and 18–24 months in giant breeds. Sex hormones contribute to normal growth plate closure timing; early removal can result in altered limb conformation and increased joint laxity.
            </li>
            <li>
              <strong>Joint disease risk</strong> — including hip dysplasia, cranial cruciate ligament rupture, and elbow dysplasia — is increased in several large breeds with early neuter, per the Hart studies and supporting cohorts.
            </li>
            <li>
              <strong>Cancer risk</strong> for several specific large-breed cancers (osteosarcoma in Rottweilers, hemangiosarcoma and lymphoma in some Golden Retriever lines) appears elevated with early neuter in some studies.
            </li>
            <li>
              <strong>Managing an intact dog through adolescence</strong> takes work: secure containment, leash management around dogs in heat, and dealing with heat cycles in females (typically every 6–8 months, lasting about 3 weeks each, with bleeding for part of that time). For owners who cannot reliably manage intact-dog containment, the trade-off may still favor earlier surgery despite the increased orthopedic risk; an accidental litter or a roaming-related injury is also a meaningful harm.
            </li>
          </ul>

          <h2 id="benefits">Health Benefits of Spay/Neuter — The Other Side</h2>
          <p>
            The case for spaying and neutering remains strong on several specific health endpoints. The current discussion is about timing, not whether to do the procedure at all in most cases.
          </p>
          <ul>
            <li>
              <strong>Mammary tumor risk reduction (females).</strong> Spaying before the first heat substantially reduces lifetime mammary tumor incidence. The protective effect declines with each subsequent heat. Mammary tumors in dogs have a meaningful malignancy rate — this is one of the strongest public-health arguments for spay.
            </li>
            <li>
              <strong>Pyometra prevention (females).</strong> Pyometra (uterine infection) is a common, life-threatening condition in intact middle-aged and older females. Lifetime risk in intact females is substantial. Spay (ovariohysterectomy) prevents pyometra entirely.
            </li>
            <li>
              <strong>Elimination of testicular cancer (males).</strong> Testicular tumors are common in older intact males. Neuter eliminates the risk.
            </li>
            <li>
              <strong>Reduced prostatic disease (males).</strong> Benign prostatic hyperplasia and prostatitis are testosterone-driven; neuter substantially reduces incidence.
            </li>
            <li>
              <strong>Behavioral effects (modest).</strong> Roaming, mounting, marking, and inter-male aggression are partially reduced by neutering. The effect is real but smaller and less consistent than commonly assumed — neuter is not a substitute for training.
            </li>
            <li>
              <strong>Population control.</strong> Intact dogs that escape containment, even briefly, are the source of unintended litters that drive shelter intake.
            </li>
          </ul>

          <h2 id="risks">Risks of Early Spay/Neuter</h2>
          <ul>
            <li>
              <strong>Increased joint disease in some large breeds</strong> when neutered before growth plate closure (hip dysplasia, cranial cruciate ligament rupture, elbow dysplasia).
            </li>
            <li>
              <strong>Increased osteosarcoma risk</strong> documented particularly in Rottweilers, and reported in some other breeds, with early neuter.
            </li>
            <li>
              <strong>Increased rates of lymphoma, hemangiosarcoma, and mast cell tumor</strong> documented in some lines of Golden Retrievers and other breeds with early spay/neuter, per the Hart data and supporting cohorts.
            </li>
            <li>
              <strong>Urinary incontinence in spayed females</strong> (estrogen-responsive). Several studies report higher rates with earlier spay; data are not fully consistent across breeds.
            </li>
            <li>
              <strong>Post-neuter weight gain.</strong> Resting metabolic rate drops 20–30% after neuter; weight gain follows unless the daily calorie target is reduced. This is universal — see our <a href="/health/dog-obesity" className="text-brand-primary hover:underline">dog obesity</a> guide.
            </li>
            <li>
              <strong>Altered limb conformation</strong> in dogs neutered well before growth plate closure (slightly increased long-bone length); clinical significance varies by breed.
            </li>
          </ul>

          <CalloutBox variant="warning" title="Hormones modulate growth — do not ignore growth-plate closure">
            <p>
              Sex hormones contribute to normal growth plate closure. Neutering before closure removes part of the signal that tells long bones to stop growing, leading to slightly longer bones and altered joint angles. In large breeds, this is the mechanism behind the documented increase in cranial cruciate ligament rupture rates with early neuter. This is not a hypothesis — it is one of the better-supported findings in the literature.
            </p>
          </CalloutBox>

          <h2 id="alternatives">Alternatives — Ovary-Sparing Spay and Vasectomy</h2>
          <p>
            Two procedures preserve sex hormones while preventing reproduction:
          </p>
          <ul>
            <li>
              <strong>Ovary-sparing spay (OSS).</strong> Removal of the uterus only, leaving the ovaries. Prevents pregnancy and pyometra (uterine source removed) while preserving estrogen and progesterone. The female will still cycle behaviorally (no bleeding because no endometrium). Mammary tumor risk is not reduced by OSS — that benefit requires removing the ovarian hormonal stimulation.
            </li>
            <li>
              <strong>Vasectomy (males).</strong> Severance of the vas deferens, preventing fertility while preserving testes and testosterone. Prevents reproduction but not testicular cancer or prostatic disease.
            </li>
          </ul>
          <p>
            Both procedures are technically straightforward but are not yet routinely offered in general practice; finding a veterinarian or board-certified veterinary surgeon (ACVS Diplomate) who performs them may require some search. They are most relevant for owners of large and giant breeds who want to preserve hormonal effects on growth plate closure and joint development but do not want to manage an intact dog. The owner-management question is unchanged — these procedures do not eliminate behavioral cycling, marking, or roaming.
          </p>

          <h2 id="lifestyle">Lifestyle Considerations — The Other Half of the Decision</h2>
          <p>
            Surgical timing is not a purely medical decision. The owner&rsquo;s ability to manage an intact dog matters. Honest questions to ask before delaying surgery in a large breed:
          </p>
          <ul>
            <li>
              <strong>Containment.</strong> Is the yard fully fenced? Are doors and gates reliably closed by every member of the household? Intact dogs roam, especially during a nearby heat.
            </li>
            <li>
              <strong>Management of heat cycles (females).</strong> Are you prepared for 2–3 weeks of heat every 6–8 months, including bleeding, behavioral changes, and the need to keep intact males away?
            </li>
            <li>
              <strong>Dog-park access.</strong> Many dog parks do not allow intact dogs. Many doggy daycares do not accept intact dogs over 6 months. Plan accordingly.
            </li>
            <li>
              <strong>Reactive intact dogs.</strong> Some intact males develop inter-male reactivity that complicates leash walks; vigilant training and management can mitigate, but not eliminate.
            </li>
            <li>
              <strong>Routine veterinary care.</strong> Establishing care with a veterinarian who is comfortable with delayed-neuter protocols and can advise on the breed-specific question is part of the decision.
            </li>
          </ul>

          <h2 id="checklist">Discussion Checklist for Your Vet</h2>
          <ul>
            <li>What is the projected adult weight category for this breed?</li>
            <li>What does the breed-specific Hart et al. data show, if available?</li>
            <li>What is the expected age of growth plate closure for this breed?</li>
            <li>What are this household&rsquo;s realistic containment and management options for an intact dog?</li>
            <li>What is the female&rsquo;s anticipated heat cycle pattern, and are we prepared for it?</li>
            <li>Are ovary-sparing spay or vasectomy options available from this clinic or a nearby ACVS-certified surgeon?</li>
            <li>If we choose later spay/neuter, what is the post-surgery calorie adjustment plan to prevent weight gain?</li>
          </ul>

          <h2 id="faq">Frequently Asked Questions</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <CalloutBox variant="info" title="References">
            <p>
              Torres de la Riva G, Hart BL, Farver TB, Oberbauer AM, Messam LL, Willits N, Hart LA. &ldquo;Neutering dogs: effects on joint disorders and cancers in Golden Retrievers.&rdquo; <em>PLOS ONE</em> 8(2): e55937, 2013. • Hart BL, Hart LA, Thigpen AP, Willits NH. &ldquo;Assisting decision-making on age of neutering for 35 breeds of dogs: Associated joint disorders, cancers, and urinary incontinence.&rdquo; <em>Frontiers in Veterinary Science</em> 7:388, 2020. • American Animal Hospital Association (AAHA) Canine Life Stage Guidelines and AAHA/AVMA Spay/Neuter Task Force statements. • American College of Veterinary Surgeons (ACVS) — small animal soft tissue surgery position content on spay/neuter timing. • American Veterinary Medical Association (AVMA) — policy on companion animal sterilization.
            </p>
          </CalloutBox>
        </div>
      </ArticleLayout>
    </>
  )
}
