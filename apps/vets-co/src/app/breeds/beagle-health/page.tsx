import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  FAQAccordion,
} from '@carloOS/ui'
import {
  buildArticleSchema,
  buildMedicalWebPageSchema,
  buildFAQSchema,
  buildBreadcrumbSchema,
  combineSchemas,
  SchemaScript,
} from '@carloOS/ui'
import { BreedHealthCard } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

const PAGE_URL = 'https://vets.co/breeds/beagle-health'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Beagle Health — Epilepsy, Obesity & Hypothyroid | Vets.co',
  description:
    'Beagle health priorities — idiopathic epilepsy, MLS, IGS (cobalamin malabsorption), hypothyroidism, obesity, glaucoma. Screening and management.',
  path: '/breeds/beagle-health',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Beagle Health — Owner Guide',
  description:
    'Idiopathic epilepsy, Musladin-Lueke Syndrome (MLS), Imerslund-Gräsbeck Syndrome (IGS), hypothyroidism, hip dysplasia, glaucoma and obesity in Beagles.',
  url: PAGE_URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Beagle Health',
  description:
    'Veterinary owner guide to the most common Beagle health conditions with screening guidance and citations.',
  url: PAGE_URL,
  authorName: 'Vets.co Editorial',
  lastReviewed: '2026-05-28',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Breed Health', url: 'https://vets.co/breeds' },
    { name: 'Beagle Health', url: PAGE_URL },
  ],
})

const FAQS = [
  {
    question: 'Why is my Beagle always hungry?',
    answer:
      'Beagles are one of the most food-motivated and obesity-prone dog breeds. The drivers are partly behavioral (selection as a scent hound that follows a food reward) and partly metabolic. Coupled with their love of being indoors, this makes weight a daily management problem. Measure every meal, do not free-feed, and aim for a body condition score of 4–5 out of 9. Treat allowance should come out of the measured daily ration.',
  },
  {
    question: 'How young can canine epilepsy start in a Beagle?',
    answer:
      'Idiopathic epilepsy most commonly presents between 6 months and 6 years of age. Beagles are one of the breeds in which idiopathic epilepsy has been most extensively studied and they are commonly used as a research model for canine epilepsy. The 2016 ACVIM Consensus Statement (Podell et al., J Vet Intern Med 2016) on diagnosis and management of canine epilepsy provides the framework most neurologists use, including thresholds for starting antiepileptic medication.',
  },
  {
    question: 'What is Musladin-Lueke Syndrome?',
    answer:
      'Musladin-Lueke Syndrome (MLS) is an autosomal-recessive connective tissue disorder unique to Beagles. The causative mutation in the ADAMTSL2 gene was identified in 2010 (Bader et al., PLoS Genetics). Affected dogs have tight, thickened skin, restricted range of motion at the joints, distinctive ballet-walker stance and characteristic facial features. A DNA test is widely available and the Beagle parent clubs and Beagle Health Network promote testing in breeding stock.',
  },
  {
    question: 'Should I have my Beagle DNA-tested?',
    answer:
      'For breeding stock, yes — DNA panels covering MLS, IGS (Imerslund-Gräsbeck Syndrome / cobalamin malabsorption), and the breed-relevant lysosomal storage diseases are widely available. For pet Beagles, DNA testing is optional but inexpensive and can guide preventive care (for example, periodic serum cobalamin in IGS-carriers exposed to symptomatic genetics).',
  },
  {
    question: 'My Beagle stares into space and chomps at the air — is that a seizure?',
    answer:
      'Focal seizures can present as "fly-biting," staring episodes, sudden chewing or tremoring of one part of the body, or transient behavior change. In a Beagle these warrant a neurologic workup. Document on video if possible — the description and video are the most useful diagnostic information for your veterinarian and any neurology referral.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

const combinedSchema = combineSchemas(
  articleSchema,
  medicalSchema,
  faqSchema,
  breadcrumbSchema,
)

export default function VetsBeagleHealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="vets-co"
        contentType="breed"
        hero={{
          title: 'Beagle Health — A Veterinarian\'s Perspective',
          subtitle:
            'Friendly, food-motivated and remarkably long-lived, the Beagle is over-represented in idiopathic epilepsy research and carries a small set of breed-specific genetic conditions. Lean body condition and neurologic awareness are the two highest-yield interventions.',
          category: 'Breed Health Guide',
          authorName: 'Vets.co Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Breed Health', href: '/breeds' },
          { name: 'Beagle Health', href: '/breeds/beagle-health' },
        ]}
        schema={articleSchema}
        sidebar={
          <>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Find a veterinary neurologist', href: '/find-a-vet' },
                { label: 'Best Pet Insurance 2026', href: '/reviews/best-pet-insurance' },
                { label: 'Labrador Health', href: '/breeds/labrador-health' },
                { label: 'Weight Management', href: '/health/weight-management' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="vets-co"
              title="Free Pet Health Tips"
              subtitle="Practical guidance every Tuesday."
              source="breeds-beagle"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <ArticleByline
            siteName="Vets.co Editorial"
            publishedAt="2026-05-28T00:00:00Z"
            updatedAt="2026-05-28T00:00:00Z"
            reviewedBy="Editorial team"
          />

          <h2>TL;DR</h2>
          <p>
            The Beagle is a medium-small (20–30 lb), long-lived (12–15 years) scent hound with a focused set
            of predispositions: idiopathic epilepsy (the Beagle is a model breed in canine epilepsy
            research), Musladin-Lueke Syndrome, Imerslund-Gräsbeck Syndrome (selective cobalamin
            malabsorption), hypothyroidism, glaucoma and a strong tendency toward obesity. Hip dysplasia
            exists but is far less common than in large breeds. Look for a primary-care vet comfortable with
            seizure management and with access to ACVIM neurology referral.
          </p>

          <h2>Quick Reference</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Breed group</td><td className="py-2 text-brand-text-mid">Hound (AKC); scent hound</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Adult weight</td><td className="py-2 text-brand-text-mid">20–30 lb (9–14 kg); 13-inch and 15-inch varieties</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Lifespan</td><td className="py-2 text-brand-text-mid">12–15 years</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Urgency-tier conditions</td><td className="py-2 text-brand-text-mid">Cluster seizures or status epilepticus; acute primary glaucoma; severe hypoglycemia in young puppies</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">High-prevalence chronic</td><td className="py-2 text-brand-text-mid">Obesity, dental disease, hypothyroidism, idiopathic epilepsy</td></tr>
                <tr><td className="py-2 pr-4 font-bold text-brand-dark">Screening recommended</td><td className="py-2 text-brand-text-mid">DNA panel (MLS, IGS, lysosomal storage); annual thyroid in middle age; ACVO eye exam; OFA hips for breeding stock</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The Conditions I Monitor Most Closely</h2>

          <BreedHealthCard
            name="Idiopathic Epilepsy"
            riskLevel="high"
            description="Idiopathic epilepsy (recurrent seizures with no identifiable structural or metabolic cause) is well documented in the Beagle, which has been used as a model breed in much of the foundational canine epilepsy research. Most cases present between 6 months and 6 years. The 2016 ACVIM Consensus Statement (Podell et al., J Vet Intern Med 2016) provides the standard framework for tiered diagnostic workup and thresholds for initiating chronic antiepileptic therapy."
            signs={[
              'Generalized tonic-clonic seizure (collapse, paddling, urination)',
              'Focal seizures: fly-biting, sudden chewing, staring episodes, transient behavior change',
              'Post-ictal phase: disorientation, blindness, ataxia lasting minutes to hours',
              'Cluster seizures (≥2 in 24 h) or seizure >5 min — emergency',
            ]}
            management="Document seizures (date, duration, video). Bloodwork, urinalysis and bile-acids to exclude metabolic causes; MRI and CSF analysis to exclude structural causes when indicated. Start chronic antiepileptic medication per ACVIM thresholds — commonly phenobarbital or levetiracetam, with potassium bromide as add-on. Refer cluster seizures, status epilepticus or drug-refractory cases to ACVIM neurology."
            guideHref="/find-a-vet"
            guideLabel="Find a veterinary neurologist →"
          />

          <CalloutBox variant="evidence" title="ACVIM 2016 Consensus on Canine Epilepsy">
            Podell M, Volk HA, Berendt M et al. <em>2015 ACVIM Small Animal Consensus Statement on Seizure
            Management in Dogs.</em> J Vet Intern Med. 2016;30(2):477–490. This statement is the standard
            reference for tiered diagnostic workup, thresholds for chronic antiepileptic therapy, and
            management of cluster seizures and status epilepticus.
          </CalloutBox>

          <BreedHealthCard
            name="Musladin-Lueke Syndrome (MLS)"
            riskLevel="moderate"
            description="MLS is an autosomal-recessive connective tissue disorder unique to the Beagle. The causative mutation in ADAMTSL2 was identified in 2010 (Bader et al., PLoS Genetics 2010;6(9):e1001037). Affected dogs have thickened skin, restricted range of motion at multiple joints, characteristic upright ballet-walker stance and distinctive facial features. Severity varies. Most affected dogs live full lifespans with appropriate orthopedic care. DNA testing is widely available."
            signs={[
              'Tight, thick skin — particularly noticeable over the ears',
              'Stiff, ballet-walker gait — short straight steps on tip-toe',
              'Reduced joint range of motion (especially carpi)',
              'Distinctive facial features — upturned slanted eyes, flat skull',
            ]}
            management="DNA testing for breeding stock — do not breed two carriers. Affected pet dogs benefit from orthopedic management, joint supplementation (fish oil), and lean body condition. Most affected dogs live long, comfortable lives."
          />

          <BreedHealthCard
            name="Imerslund-Gräsbeck Syndrome (IGS)"
            riskLevel="moderate"
            description="IGS (also called selective cobalamin malabsorption) is an autosomal-recessive disorder of intestinal vitamin B12 (cobalamin) absorption, documented in Beagles and several other breeds. Affected dogs typically present in the first year with failure to thrive, intermittent inappetence and chronic anemia. The CUBN gene mutation underlying Beagle IGS has been characterized and DNA testing is available. Lifelong parenteral B12 supplementation resolves the syndrome in most dogs."
            signs={[
              'Failure to thrive — runt, poor weight gain',
              'Intermittent inappetence, lethargy',
              'Chronic non-regenerative anemia on bloodwork',
              'Elevated methylmalonic acid on serum or urine',
            ]}
            management="DNA testing for breeding stock. Diagnostic confirmation by low serum cobalamin and elevated methylmalonic acid. Treatment is lifelong parenteral (injectable) cyanocobalamin per ACVIM internal medicine protocols. Oral cobalamin is generally not effective because of the underlying absorption defect."
          />

          <BreedHealthCard
            name="Hypothyroidism"
            riskLevel="high"
            description="Primary hypothyroidism is one of the most common endocrinopathies of medium-to-large breed dogs and the Beagle is among the over-represented breeds. Onset is typically middle age (4–10 years). The clinical picture is classic but easily missed because the signs are gradual."
            signs={[
              'Weight gain without increased intake',
              'Lethargy, cold-seeking, mental dullness',
              'Bilateral symmetric truncal hair loss, dry skin, recurrent skin infections',
              '"Tragic face" expression from facial myxedema (advanced cases)',
            ]}
            management="Annual senior wellness panel including total T4 from middle age. If suggestive, complete thyroid panel (TT4, free T4 by equilibrium dialysis, TSH). Treatment is daily oral levothyroxine titrated to serum free T4 in the upper half of reference range with the dose timing standardized."
          />

          <BreedHealthCard
            name="Obesity"
            riskLevel="very-high"
            description="The Beagle is among the most obesity-prone breeds — a combination of strong food motivation (selected as a scent hound that follows food cues), endurance metabolism poorly matched to the typical pet lifestyle, and an excellent ability to manipulate owners for treats. Obesity is itself a disease per the 2018 WSAVA Global Nutrition Committee, and it amplifies the impact of every orthopedic, endocrine and respiratory condition in this breed."
            signs={[
              'Cannot feel ribs without firm pressure',
              'No visible waist from above',
              'No abdominal tuck from the side',
              'Reduced exercise tolerance, reluctant to walk',
            ]}
            management={'Measure every meal — never free-feed. Body condition score monthly; target BCS 4–5. Subtract treats from the daily ration. Use puzzle feeders and snuffle mats to slow intake and provide enrichment. Prescription weight-loss diets (e.g., Hill\'s Metabolic, Royal Canin Satiety) for dogs that do not lose on portion control alone.'}
          />

          <BreedHealthCard
            name="Primary Glaucoma"
            riskLevel="moderate"
            description="Primary (hereditary) glaucoma is documented in the Beagle, particularly in older lines. It is a painful, vision-threatening rise in intraocular pressure that can blind the eye within 24 hours when acute. The other eye is typically affected within 6–12 months without prophylactic medical therapy."
            signs={[
              'Red, painful, suddenly cloudy eye',
              'Squinting, tearing, rubbing at eye',
              'Dilated pupil that does not constrict to light',
              'Vision loss in the affected eye',
            ]}
            management="ACVO eye examination annually for breeding stock; periodic in pet dogs from middle age. Acute glaucoma is an emergency — emergency hospital or ophthalmology referral within hours for intraocular pressure reduction (mannitol IV, topical agents) and definitive management. Prophylactic medical therapy is recommended for the second eye in confirmed primary glaucoma."
            guideHref="/find-a-vet"
            guideLabel="Find a veterinary ophthalmologist →"
          />

          <BreedHealthCard
            name="Hip Dysplasia"
            riskLevel="moderate"
            description="Hip dysplasia exists in the Beagle but at substantially lower prevalence than in large and giant breeds. OFA submission data reflect a moderate breed risk; many cases are subclinical and detected only on screening radiographs. Lean body condition is the single most important modifier."
            signs={[
              'Bunny-hopping gait, especially after exercise',
              'Difficulty rising, reluctance on stairs',
              'Audible click or clunk on hip manipulation (positive Ortolani)',
              'Decreased activity in middle age',
            ]}
            management="OFA hip submission for breeding stock at 24 months. Lean body condition throughout life. Fish oil from young adulthood; glucosamine/chondroitin per evidence-based guidance. Surgical options (FHO, total hip replacement) for severe cases."
          />

          <CalloutBox variant="warning" title="Emergency triggers — go now">
            Cluster seizures (≥2 in 24 hours), seizure lasting more than 5 minutes (status epilepticus),
            sudden red and painful eye with vision loss (suspect acute glaucoma), severe acute lameness with
            non-weight-bearing, sudden collapse with weakness. Beagle seizures in particular have a tendency
            to cluster — call ahead and go.
          </CalloutBox>

          <h2>Screening I Recommend</h2>
          <DropCap>
            The yield of a Beagle-specific screening plan is unusually high. DNA testing for MLS and IGS is
            inexpensive and definitive. Annual weight and body condition score is non-negotiable. From
            middle age forward, add a thyroid panel to the senior wellness bloodwork and an annual
            ophthalmology exam to surveil for primary glaucoma.
          </DropCap>
          <ul>
            <li><strong>DNA panel:</strong> MLS (ADAMTSL2), IGS (CUBN) and breed-relevant lysosomal storage disease tests. Single panel from any major canine genetics lab.</li>
            <li><strong>OFA hips:</strong> At 24 months for breeding stock; consider preliminary at 12–16 months for symptomatic dogs.</li>
            <li><strong>Thyroid:</strong> Annual TT4 on senior wellness panel from middle age; full panel if suggestive.</li>
            <li><strong>ACVO eye exam:</strong> Once before 1 year for breeding dogs; periodic in pet dogs for glaucoma and cataract surveillance. <a href="https://www.ofa.org/diseases/eye-certification" rel="noopener" target="_blank" className="text-brand-primary hover:underline">OFA / CAER registry</a>.</li>
            <li><strong>Weight & BCS:</strong> Every visit — the single highest-yield intervention.</li>
            <li><strong>Dental:</strong> Annual oral exam; professional cleaning when indicated.</li>
          </ul>

          <h2>Finding a Vet for a Beagle</h2>
          <p>
            Most Beagles do well with a primary-care veterinarian who is comfortable with seizure management
            and weight-loss programs and who has working relationships with ACVIM neurology and ophthalmology
            referral. For confirmed idiopathic epilepsy that is not controlled on first-line therapy, a
            neurology consultation materially improves outcomes. Our directory filters by specialty:{' '}
            <a href="/find-a-vet">find a vet →</a>.
          </p>

          <h2>Pet Insurance for a Beagle</h2>
          <p>
            Lifetime antiepileptic medication, periodic drug-level monitoring and emergency cluster-seizure
            care commonly total $4,000–8,000 over a Beagle&apos;s lifetime. Acute glaucoma management with
            enucleation or intraocular procedures can run $2,500–5,000 per eye. Hypothyroidism medical
            therapy is comparatively inexpensive but lifelong. Insurance bought before symptoms appear
            typically covers these as accident/illness with no breed exclusion. See our 2026 comparison:{' '}
            <a href="/reviews/best-pet-insurance">best pet insurance →</a>.
          </p>

          <h2>FAQ</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <h2>Sources & Further Reading</h2>
          <ul>
            <li>Podell M, Volk HA, Berendt M et al. 2015 ACVIM Small Animal Consensus Statement on Seizure Management in Dogs. <em>J Vet Intern Med.</em> 2016;30(2):477–490.</li>
            <li>Bader HL, Ruhe AL, Wang LW et al. An ADAMTSL2 founder mutation causes Musladin-Lueke Syndrome, a heritable disorder of beagle dogs, featuring stiff skin and joint contractures. <em>PLoS Genet.</em> 2010;6(9):e1001037.</li>
            <li>Fyfe JC, Hemker SL, Venta PJ et al. Selective intestinal cobalamin malabsorption with proteinuria (Imerslund-Gräsbeck syndrome) in juvenile Beagles. <em>J Vet Intern Med.</em> 2014;28(2):356–362.</li>
            <li><a href="https://www.akcchf.org/canine-health/your-dogs-health/disease-information/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">AKC Canine Health Foundation</a> — Beagle-funded research summaries.</li>
            <li><a href="https://ofa.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Orthopedic Foundation for Animals (OFA)</a> — hip, thyroid and eye registries.</li>
            <li><a href="https://www.wsava.org/global-guidelines/global-nutrition-guidelines/" rel="noopener" target="_blank" className="text-brand-primary hover:underline">WSAVA Global Nutrition Guidelines</a> — obesity as a disease.</li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  )
}
