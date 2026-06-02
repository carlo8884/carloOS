import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture, CrossPortfolioCard,
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

const PAGE_URL = 'https://vets.co/breeds/husky-health'

export const metadata: Metadata = buildMetadata({
  siteId: 'vets-co',
  title: 'Siberian Husky Health — Eyes, Zinc & Hips | Vets.co',
  description:
    'Siberian Husky health priorities — hereditary cataracts, PRA, corneal dystrophy, zinc-responsive dermatosis, hip dysplasia, GDV, hypothyroidism.',
  path: '/breeds/husky-health',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'vets-co',
  title: 'Siberian Husky Health — Owner Guide',
  description:
    'Hereditary cataracts, progressive retinal atrophy, corneal dystrophy, zinc-responsive dermatosis, hip dysplasia, GDV, hypothyroidism and hereditary thrombocytopenia in Siberian Huskies.',
  url: PAGE_URL,
  imageUrl: '',
  authorName: 'Vets.co Editorial',
  publishedAt: '2026-05-28T00:00:00Z',
  modifiedAt: '2026-05-28T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Siberian Husky Health',
  description:
    'Veterinary owner guide to the most common Siberian Husky health conditions with screening guidance and citations.',
  url: PAGE_URL,
  authorName: 'Vets.co Editorial',
  lastReviewed: '2026-05-28',
})

const breadcrumbSchema = buildBreadcrumbSchema({
  items: [
    { name: 'Home', url: 'https://vets.co/' },
    { name: 'Breed Health', url: 'https://vets.co/breeds' },
    { name: 'Siberian Husky Health', url: PAGE_URL },
  ],
})

const FAQS = [
  {
    question: 'Are Siberian Huskies really at higher risk for eye disease?',
    answer:
      'Yes. The Siberian Husky Club of America Health Foundation lists hereditary cataracts, progressive retinal atrophy (PRA) and corneal dystrophy among the top breed health concerns. An annual eye exam by a board-certified veterinary ophthalmologist (ACVO) with submission to the OFA / CAER eye registry is recommended for all breeding stock and is good practice for pet dogs from middle age.',
  },
  {
    question: 'What is zinc-responsive dermatosis?',
    answer:
      'Zinc-responsive dermatosis is a Northern-breed dermatologic condition in which the dog has a relative inability to absorb dietary zinc adequately. It produces crusted, scaling lesions around the eyes, mouth, ears and pressure points, often with secondary infection. Diagnosis is by skin biopsy plus response to zinc supplementation. Most affected dogs require lifelong oral zinc (zinc sulfate, zinc methionine or zinc gluconate) per veterinary dermatology guidance — the dose is titrated and excess zinc is itself toxic, so this is a managed prescription, not a supplement.',
  },
  {
    question: 'Should I worry about hip dysplasia in my Husky?',
    answer:
      'Siberian Huskies have meaningfully lower hip dysplasia prevalence than many other large breeds — the OFA hip database has historically shown the breed performing well, in part because the breed was developed for endurance work and unsound dogs were not used. That said, the condition does occur. Lean body condition, OFA hip submission for breeding stock, and a measured approach to exercise during the growth period (no forced running on hard surfaces until skeletal maturity) are the standard recommendations.',
  },
  {
    question: 'Why is bloat (GDV) a concern in Huskies?',
    answer:
      'Gastric dilatation-volvulus (GDV) is most strongly associated with deep, narrow-chested breeds. Siberian Huskies have a moderately deep chest and appear in the at-risk lists, though incidence is lower than in Great Danes or German Shepherds. The warning sign — unproductive retching with a distended hard abdomen and obvious distress — is the same and is a true emergency. Prophylactic gastropexy at spay/neuter is worth discussing with your veterinarian for any deep-chested dog.',
  },
  {
    question: 'Does my Husky\'s skin get worse in winter?',
    answer:
      'It can. Zinc absorption interacts with diet, age, and concurrent skin disease, and the seasonal coat blow plus indoor heating dryness can worsen background dermatologic conditions. Worsening crusting around the face, ears or feet in any Northern breed warrants a dermatology workup that includes consideration of zinc-responsive dermatosis, hypothyroidism and primary dermatologic disease.',
  },
]

const faqSchema = buildFAQSchema({ questions: FAQS })

const combinedSchema = combineSchemas(
  articleSchema,
  medicalSchema,
  faqSchema,
  breadcrumbSchema,
)

export default function VetsHuskyHealthPage() {
  return (
    <>
      <SchemaScript schema={combinedSchema} />
      <ArticleLayout
        siteId="vets-co"
        contentType="breed"
        hero={{
          title: 'Siberian Husky Health — A Veterinarian\'s Perspective',
          subtitle:
            'A working sled-dog selected for endurance and soundness, the Siberian Husky carries a tightly defined cluster of breed-specific eye, dermatologic and orthopedic conditions. Eye screening and dermatologic awareness are the highest-yield preventive steps.',
          category: 'Breed Health Guide',
          authorName: 'Vets.co Editorial',
          authorAvatar: '🐾',
          publishedAt: 'May 2026',
          readTime: '12 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Breed Health', href: '/breeds' },
          { name: 'Siberian Husky Health', href: '/breeds/husky-health' },
        ]}
        schema={articleSchema}
        sidebar={
          <>
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Find a veterinary ophthalmologist', href: '/find-a-vet' },
                { label: 'Best Pet Insurance 2026', href: '/reviews/best-pet-insurance' },
                { label: 'German Shepherd Health', href: '/breeds/german-shepherd-health' },
                { label: 'Labrador Health', href: '/breeds/labrador-health' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="vets-co"
              title="Free Pet Health Tips"
              subtitle="Practical guidance every Tuesday."
              source="breeds-husky"
            />
            <CrossPortfolioCard currentSite="vets-co" contentType="breed" variant="sidebar" />
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
            The Siberian Husky is a medium (35–60 lb), athletic (12–15 year) working sled-dog breed with a
            distinctive cluster of predispositions: hereditary cataracts, progressive retinal atrophy and
            corneal dystrophy (the three classical Husky eye diseases); zinc-responsive dermatosis (a
            Northern-breed–specific condition); hip dysplasia at moderate prevalence; GDV/bloat because of
            the deep chest; hypothyroidism; and hereditary thrombocytopenia. Annual ACVO eye exams,
            dermatology awareness, and a lifelong lean body condition are the three highest-yield
            interventions.
          </p>

          <h2>Quick Reference</h2>
          <div className="overflow-x-auto my-6">
            <table className="w-full text-sm border-collapse">
              <tbody>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Breed group</td><td className="py-2 text-brand-text-mid">Working (AKC); Northern sled dog</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Adult weight</td><td className="py-2 text-brand-text-mid">35–60 lb (16–27 kg); females 35–50, males 45–60</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Lifespan</td><td className="py-2 text-brand-text-mid">12–15 years</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">Urgency-tier conditions</td><td className="py-2 text-brand-text-mid">GDV/bloat; acute lens-induced uveitis or glaucoma; severe hypothyroid myxedema coma (rare)</td></tr>
                <tr className="border-b border-brand-border"><td className="py-2 pr-4 font-bold text-brand-dark">High-prevalence chronic</td><td className="py-2 text-brand-text-mid">Hereditary cataracts, PRA, corneal dystrophy, hypothyroidism, hip dysplasia (moderate), zinc-responsive dermatosis</td></tr>
                <tr><td className="py-2 pr-4 font-bold text-brand-dark">Screening recommended</td><td className="py-2 text-brand-text-mid">Annual ACVO eye exam (CAER); OFA hips at 24 mo for breeders; annual thyroid panel from middle age</td></tr>
              </tbody>
            </table>
          </div>

          <h2>The Conditions I Monitor Most Closely</h2>

          <BreedHealthCard
            name="Hereditary Cataracts"
            riskLevel="very-high"
            description="Hereditary cataract is one of the three classical Husky eye diseases recognized by the Siberian Husky Club of America Health Foundation and reflected in the ACVO Blue Book. Onset is typically young (often under 5 years) and progression varies. The condition is bilateral in most cases but asymmetric. Untreated mature cataracts can luxate and trigger lens-induced uveitis or secondary glaucoma — both painful and vision-threatening."
            signs={[
              'Bluish or white cloudiness in the pupil',
              'Bumping into objects in new or low-light environments',
              'Hesitancy on stairs or in unfamiliar spaces',
              'Red or painful eye (suggests secondary uveitis or glaucoma — urgent)',
            ]}
            management="ACVO eye examination annually; submit to OFA / CAER registry for breeding stock. Phacoemulsification by a board-certified veterinary ophthalmologist restores vision in most appropriately selected cases. Topical anti-inflammatory therapy may be used to manage lens-induced uveitis in dogs not undergoing surgery."
            guideHref="/find-a-vet"
            guideLabel="Find a veterinary ophthalmologist →"
          />

          <BreedHealthCard
            name="Progressive Retinal Atrophy (PRA)"
            riskLevel="high"
            description="PRA is a group of inherited retinal degenerations causing progressive bilateral blindness. The X-linked form (XLPRA) is documented in Siberian Huskies. Most dogs first show night blindness; full blindness typically follows over 1–2 years. There is no treatment that halts progression, but affected dogs adapt remarkably well to gradual vision loss when their home environment remains consistent."
            signs={[
              'Night blindness — reluctance to enter dark rooms',
              'Bumping into objects in low light',
              'Dilated pupils, increased eyeshine on photographs',
              'Eventual daytime blindness',
            ]}
            management="DNA testing for the XLPRA mutation in breeding stock — clear, carrier or affected status guides breeding decisions. Annual ACVO eye examination with CAER submission. Affected pet dogs do well with environmental consistency, scent and texture cues, and careful introduction of stairs and changes in furniture layout."
          />

          <BreedHealthCard
            name="Corneal Dystrophy"
            riskLevel="moderate"
            description="Corneal dystrophy is a bilateral, symmetric, non-inflammatory deposition (commonly lipid or crystalline) within the cornea. It is one of the three classical Husky eye conditions. Most dogs are visually unaffected; cosmetic appearance is the most common reason for owner concern. A minority develop secondary corneal erosions or vision-affecting central opacification."
            signs={[
              'Hazy, frosty or crystalline appearance in the central cornea',
              'Usually bilateral and symmetric',
              'Vision usually preserved',
              'Painful or red eye — refer (secondary erosion or inflammation)',
            ]}
            management="ACVO eye examination to confirm diagnosis and exclude treatable causes of corneal opacity (dystrophy must be distinguished from corneal degeneration, calcific keratopathy and lipid keratopathy of metabolic origin). Most cases require no specific therapy. Symptomatic erosions or vision-affecting opacification may require topical therapy or specialist intervention."
          />

          <CalloutBox variant="evidence" title="Annual ACVO eye exam is the single highest-yield screening test in the breed">
            The Siberian Husky Club of America Health Foundation and the ACVO Blue Book both recommend annual
            CAER (Companion Animal Eye Registry) examinations for breeding stock. The breed is on the
            ACVO / OFA list of breeds with documented hereditary eye disease — three different conditions
            warrant the same one screening visit each year.
          </CalloutBox>

          <BreedHealthCard
            name="Zinc-Responsive Dermatosis"
            riskLevel="moderate"
            description={'A Northern-breed (Siberian Husky, Alaskan Malamute) dermatologic condition in which the dog has reduced ability to absorb dietary zinc adequately. Crusted, scaling, sometimes alopecic lesions appear around the eyes, mouth, ears, footpads and pressure points, often with secondary bacterial or yeast infection. The condition is well described in veterinary dermatology literature (Scott, Miller & Griffin, Muller & Kirk\'s Small Animal Dermatology).'}
            signs={[
              'Crusting, scaling, alopecia around eyes, mouth, ears',
              'Footpad hyperkeratosis (thickening and cracking)',
              'Lesions at pressure points (elbows, hocks)',
              'Recurrent secondary skin infections at the same sites',
            ]}
            management="Dermatology consultation; skin biopsy can confirm. Treatment is lifelong oral zinc supplementation (zinc sulfate, zinc methionine or zinc gluconate) titrated to clinical response by a veterinarian — zinc is itself toxic in excess, so this is a managed prescription rather than an over-the-counter supplement. Diet adjustment and treatment of concurrent dermatologic disease are typically required."
          />

          <BreedHealthCard
            name="Hip Dysplasia"
            riskLevel="moderate"
            description="Hip dysplasia exists in the Siberian Husky but the breed has historically performed well in OFA hip submission data relative to other large breeds — in part because of selection for working soundness. The condition is not rare and warrants OFA submission of breeding stock and lean body condition throughout life in pet dogs."
            signs={[
              'Bunny-hopping gait, especially after exercise',
              'Difficulty rising, reluctance on stairs',
              'Decreased exercise tolerance',
              'Audible click or clunk on hip manipulation (positive Ortolani)',
            ]}
            management="OFA hip submission at 24 months for breeding stock. Lean body condition lifelong. Fish oil from young adulthood; glucosamine/chondroitin per evidence-based guidance. Avoid forced running on hard surfaces during the growth period (under 12 months). Severe cases benefit from surgical management (FHO, total hip replacement) by an ACVS surgeon."
          />

          <BreedHealthCard
            name="Gastric Dilatation-Volvulus (GDV / Bloat)"
            riskLevel="moderate"
            description="GDV is the most time-critical canine emergency. The stomach fills with gas (dilatation) and then twists on itself (volvulus), cutting off blood supply and causing rapid cardiovascular collapse. Deep-chested breeds are over-represented; the Siberian Husky has a moderately deep chest and appears in the at-risk lists. Without emergency surgery, mortality is near 100% — with timely surgery, mortality is approximately 10–18% in published series."
            signs={[
              'Unproductive retching — trying to vomit without producing — EMERGENCY',
              'Hard, distended abdomen',
              'Extreme restlessness, unable to settle',
              'Drooling, obvious distress, pale gums',
            ]}
            management="Emergency hospital immediately — do not wait. Prophylactic gastropexy (surgical tacking of the stomach to the body wall) performed at the time of spay/neuter is a discussable preventive in any deep-chested breed and effectively eliminates volvulus risk. Feed twice daily rather than one large meal; avoid intense exercise immediately around meals."
          />

          <BreedHealthCard
            name="Hypothyroidism"
            riskLevel="high"
            description="Primary hypothyroidism is among the most common endocrinopathies of medium-to-large breed dogs and is well-recognized in the Siberian Husky. Onset is typically middle age (4–10 years). The clinical picture overlaps with dermatologic complaints in the breed — bilateral truncal alopecia, weight gain, lethargy, cold-seeking, mental dullness — so a full thyroid panel should be part of every dermatologic workup in a middle-aged Husky."
            signs={[
              'Weight gain without increased intake',
              'Lethargy, cold-seeking, mental dullness',
              'Bilateral symmetric truncal hair loss, dry skin, recurrent skin infections',
              '"Tragic face" expression from facial myxedema (advanced)',
            ]}
            management="Annual TT4 on senior wellness panel from middle age. If suggestive, complete thyroid panel (TT4, free T4 by equilibrium dialysis, TSH). Treatment is daily oral levothyroxine titrated to free T4 in the upper half of reference range with standardized dose timing."
          />

          <BreedHealthCard
            name="Hereditary Thrombocytopenia (Inherited Macrothrombocytopenia)"
            riskLevel="low"
            description="A subset of Siberian Huskies and other breeds carry a benign hereditary form of low platelet count with abnormally large platelets (inherited macrothrombocytopenia, often associated with mutations in the β1-tubulin gene). Most affected dogs are clinically normal — bleeding times and platelet function are appropriate despite the low automated platelet count. It is important to recognize this so that affected dogs are not misdiagnosed with immune-mediated thrombocytopenia and treated unnecessarily."
            signs={[
              'Incidental finding of low platelet count on routine bloodwork',
              'No abnormal bruising or bleeding',
              'Normal manual platelet estimate when corrected for platelet size',
            ]}
            management="Manual platelet review by a clinical pathologist; consider DNA testing where available. Avoid unnecessary immunosuppressive therapy. Document the finding so subsequent veterinarians do not pursue an unnecessary workup."
          />

          <CalloutBox variant="warning" title="Emergency triggers — go now">
            Unproductive retching with a distended hard abdomen (suspect GDV — minutes matter), sudden red
            and painful eye with vision loss (acute glaucoma or lens-induced uveitis), severe acute
            non-weight-bearing lameness, severe lethargy with hypothermia and bradycardia in a known
            hypothyroid dog (suspect myxedema coma). Do not wait until morning.
          </CalloutBox>

          <h2>Screening I Recommend</h2>
          <DropCap>
            The single highest-yield screening test in this breed is an annual eye exam by a board-certified
            veterinary ophthalmologist with submission to the OFA / CAER registry. One visit covers
            cataracts, PRA and corneal dystrophy — and detects early changes well before the owner notices a
            clinical problem. From middle age, add an annual thyroid panel and a careful dermatologic
            history.
          </DropCap>
          <ul>
            <li><strong>ACVO eye exam:</strong> Annually, with CAER submission for breeding stock. <a href="https://www.ofa.org/diseases/eye-certification" rel="noopener" target="_blank" className="text-brand-primary hover:underline">OFA / CAER registry</a>.</li>
            <li><strong>OFA hips:</strong> Submit at 24 months for breeding stock.</li>
            <li><strong>Thyroid:</strong> Annual TT4 on senior wellness panel from middle age; full panel if suggestive or if a dermatologic problem is being worked up.</li>
            <li><strong>Manual platelet review:</strong> Any unexpectedly low automated platelet count in a Husky should be reviewed manually before treatment.</li>
            <li><strong>Gastropexy discussion:</strong> Consider prophylactic gastropexy at spay/neuter for any deep-chested breed.</li>
            <li><strong>Dental:</strong> Annual oral exam; professional cleaning when indicated.</li>
          </ul>

          <h2>Finding a Vet for a Siberian Husky</h2>
          <p>
            Look for a primary-care veterinarian with working relationships with a board-certified ACVO
            ophthalmologist, an ACVIM internist (for endocrine and dermatologic workup), and an ACVS surgeon
            (for elective gastropexy and orthopedic procedures). Many Northern-breed rescues maintain
            referral lists of veterinarians who are particularly comfortable with the breed. Our directory
            filters by specialty: <a href="/find-a-vet">find a vet →</a>.
          </p>

          <h2>Pet Insurance for a Siberian Husky</h2>
          <p>
            Bilateral phacoemulsification for cataracts at a referral hospital commonly runs $3,500–6,000;
            emergency GDV surgery $5,000–8,000; lifelong oral zinc and dermatology management for
            zinc-responsive dermatosis $1,000–3,000 across a normal Husky lifespan; lifelong
            levothyroxine for hypothyroidism is comparatively inexpensive. Insurance bought before symptoms
            appear typically covers these as accident/illness with no breed exclusion. See our 2026
            comparison: <a href="/reviews/best-pet-insurance">best pet insurance →</a>.
          </p>

          <h2>FAQ</h2>
          <FAQAccordion
            items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
            allowMultiple
          />

          <h2>Sources & Further Reading</h2>
          <ul>
            <li><a href="https://www.shca.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Siberian Husky Club of America</a> — Health Foundation breed health resources.</li>
            <li><a href="https://www.acvo.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">American College of Veterinary Ophthalmologists (ACVO)</a> — Blue Book of breed-related eye disease.</li>
            <li><a href="https://ofa.org" rel="noopener" target="_blank" className="text-brand-primary hover:underline">Orthopedic Foundation for Animals (OFA)</a> — hip and CAER eye registries.</li>
            <li>Miller WH, Griffin CE, Campbell KL. <em>Muller &amp; Kirk&apos;s Small Animal Dermatology</em>, 7th ed., Saunders — zinc-responsive dermatosis and breed-specific dermatologic disease.</li>
            <li>Ettinger, Feldman &amp; Cote, <em>Textbook of Veterinary Internal Medicine</em>, 8th ed., on hypothyroidism, GDV and inherited platelet disorders.</li>
            <li>Davis B, Toivio-Kinnucan M, Schuller S, Boudreaux MK. Mutation in &beta;1-tubulin correlates with macrothrombocytopenia in Cavalier King Charles Spaniels and other breeds. <em>J Vet Intern Med.</em> 2008;22(3):540–545.</li>
          </ul>
        </div>
      </ArticleLayout>
    </>
  )
}
