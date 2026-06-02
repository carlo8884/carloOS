import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Raw Diet Risks for Dogs — Pathogens, AAFCO | Dog.com', description: 'Raw dog diets: Salmonella, Listeria, Campylobacter contamination, AAFCO completeness gaps, household risk, bone hazards, and harm-reduction guidance.', path: '/nutrition/raw-diet-risks', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Raw Diet Risks for Dogs', description: 'Pathogen contamination, nutritional completeness, household zoonotic risk, and bone hazards in raw dog diets — with WSAVA, AVMA, AAHA, and FDA positions cited.', url: 'https://dog.com/nutrition/raw-diet-risks', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-28T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Raw Diet Risks for Dogs', description: 'Evidence on pathogen contamination, AAFCO completeness, and household risk in raw dog feeding.', url: 'https://dog.com/nutrition/raw-diet-risks', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-28' })
const FAQS = [
  { question: 'Do veterinary professional organizations actually recommend against raw diets?', answer: 'Yes. The WSAVA Global Nutrition Committee, the AVMA (American Veterinary Medical Association), the AAHA (American Animal Hospital Association), the CDC, and the FDA Center for Veterinary Medicine have all published statements advising against feeding raw or undercooked animal-source protein to pets, primarily citing zoonotic pathogen risk and, secondarily, nutritional adequacy concerns. Specific policy text is linked from each organization\'s website (avma.org, aaha.org, wsava.org).' },
  { question: 'How prevalent is Salmonella contamination in commercial raw dog food?', answer: 'Survey studies vary by sample and method. An FDA Center for Veterinary Medicine survey of commercial raw pet foods (2010–2012) reported Salmonella in roughly 1 in 5 raw samples tested (the agency reported a figure near 24 percent in that survey), with Listeria monocytogenes also frequently detected. Multiple subsequent academic surveys in the Veterinary Record, Journal of Food Protection, and PLOS ONE have reported broadly consistent contamination rates. Cooked commercial diets have shown far lower detection rates in comparable surveys.' },
  { question: 'Can my dog shed Salmonella from a raw diet even if it looks healthy?', answer: 'Yes — this is the most important point for household risk assessment. Published studies (for example, Finley et al., Canadian Veterinary Journal 2007) have shown that dogs fed raw diets can shed Salmonella in their feces for extended periods without clinical signs. Subclinical shedding is well documented and is the basis for the CDC and AVMA guidance on households with vulnerable members.' },
  { question: 'What about freeze-dried or HPP-treated raw — are those safer?', answer: 'High-pressure processing (HPP) is a non-thermal pasteurization step used by some commercial raw manufacturers. Published evaluations show HPP substantially reduces vegetative pathogen loads, though it is not equivalent to cooking and does not inactivate all microorganisms. Freeze-drying alone does not reliably kill Salmonella or Listeria. Pet owners weighing risk should look for explicit HPP labelling and request the manufacturer\'s pathogen testing protocol.' },
  { question: 'Are cooked bones safer than raw bones?', answer: 'No — the FDA has issued a specific consumer update advising against giving dogs cooked bones of any kind. Cooking causes bones to dry and splinter, increasing the risk of mouth and esophageal lacerations, gastrointestinal perforation, and obstruction. Raw recreational bones (weight-bearing femurs and similar) carry their own well-documented risks of slab fractures of the carnassial teeth. Neither is considered safe by the AVMA or by board-certified veterinary dentists.' },
  { question: 'What is the safest middle ground if I want a less-processed diet?', answer: 'Options that are commonly raised by veterinary nutritionists: a cooked, complete-and-balanced home-prepared diet formulated by a board-certified veterinary nutritionist (DACVN) using a service such as BalanceIT.com or PetDIETS.com; a gently-cooked commercial fresh food from a manufacturer that publishes its nutritionist credentials, AAFCO substantiation method, and feeding-trial status; or a freeze-dried diet that has been HPP-treated. None of these eliminates risk completely but each addresses specific gaps. Discuss the choice with your primary care vet.' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function RawDietRisksPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Raw Diet Risks for Dogs — What the Evidence Shows', subtitle: 'Raw feeding is popular and contentious. The published evidence on pathogen contamination, household zoonotic transmission, and nutritional completeness is substantial, and the position statements of the major veterinary professional bodies are unambiguous. This page summarizes that evidence without moralizing — and ends with harm-reduction guidance for owners who choose raw despite the recommendation against it.', category: 'Dog Nutrition', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '13 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Raw Diet Risks', href: '/nutrition/raw-diet-risks' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Where the Profession Stands', href: '#positions' }, { label: 'Pathogen Contamination', href: '#pathogens' }, { label: 'Household & Zoonotic Risk', href: '#household' }, { label: 'Bacterial Shedding', href: '#shedding' }, { label: 'AAFCO Completeness', href: '#aafco' }, { label: 'Bone Hazards', href: '#bones' }, { label: 'Alternatives', href: '#alternatives' }, { label: 'Harm Reduction', href: '#harm-reduction' }, { label: 'FAQ', href: '#faq' }]} />
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Position Statements</div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              <li><strong>WSAVA</strong> — Global Nutrition Committee guidelines advise against raw</li>
              <li><strong>AVMA</strong> — Policy on raw or undercooked animal-source protein in pet diets</li>
              <li><strong>AAHA</strong> — Nutrition and weight management guidelines</li>
              <li><strong>CDC</strong> — Healthy Pets, Healthy People — raw food guidance</li>
              <li><strong>FDA CVM</strong> — Get the facts on raw pet food</li>
            </ul>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'WSAVA Explained', href: '/nutrition/wsava-explained' }, { label: 'Reading Food Labels', href: '/nutrition/reading-food-labels' }, { label: 'Best Dry Dog Food', href: '/reviews/best-dry-dog-food' }, { label: 'Prescription Diets', href: '/nutrition/prescription-diets' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Nutrition Tips" subtitle="Evidence-based guidance weekly." source="nutrition-raw-risks" />
        </>}
      >
        <div className="carloOS-article">
          <div style={{ background: 'rgba(60, 90, 140, 0.06)', border: '1px solid rgba(60, 90, 140, 0.20)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-text-light)', marginBottom: '8px' }}>Scope</div>
            <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>This page describes published evidence on documented risks. It is informational and does not replace consultation with a veterinarian or a board-certified veterinary nutritionist (DACVN) about an individual dog&apos;s diet.</p>
          </div>

          <h2 id="positions">Where the Veterinary Profession Stands</h2>
          <p>The major small-animal veterinary professional bodies have, independently, published position statements advising against feeding raw or undercooked animal-source protein to companion animals. The convergence of independent organizations on the same conclusion is itself a signal.</p>
          <ul>
            <li>The <strong>World Small Animal Veterinary Association (WSAVA)</strong> Global Nutrition Committee guidelines list raw and undercooked animal-source diets as not recommended, citing pathogen contamination, household zoonotic risk, and difficulty in achieving and verifying nutritional adequacy.</li>
            <li>The <strong>American Veterinary Medical Association (AVMA)</strong> has a standing policy discouraging the feeding of raw or undercooked animal-source protein to dogs and cats because of the risk of illness in the pet and the risk of transmission to humans.</li>
            <li>The <strong>American Animal Hospital Association (AAHA)</strong> nutrition and weight management guidelines align with the AVMA position.</li>
            <li>The <strong>FDA Center for Veterinary Medicine</strong> publishes a consumer update titled "Get the Facts: Raw Pet Food Diets Can Be Dangerous to You and Your Pet" describing the pathogen-contamination evidence from its own surveys.</li>
            <li>The <strong>CDC</strong> includes raw pet food in its Healthy Pets, Healthy People guidance because of documented zoonotic transmission events.</li>
          </ul>
          <p>This page does not argue the policy. It summarizes the evidence that the policy rests on.</p>

          <h2 id="pathogens">Pathogen Contamination of Raw Diets</h2>
          <p>Multiple regulatory and academic surveys have tested raw pet food samples for bacterial pathogens. Reported contamination rates vary by year, region, manufacturer, and laboratory method, but the central findings are consistent: raw pet foods carry pathogenic bacteria at rates substantially higher than cooked commercial pet foods.</p>
          <ul>
            <li><strong>Salmonella</strong> — The FDA CVM conducted a two-year survey of commercial pet foods (2010 to 2012) that tested 196 raw pet food samples and reported Salmonella detection on the order of one in five samples, a rate the agency described as substantially higher than in any other category of pet food tested. Independent academic surveys (Vet Record; Journal of Food Protection; PLOS ONE) have reported contamination rates ranging widely from roughly 5 percent up to and above 20 percent depending on sample and method. The exact figure varies; the qualitative finding does not.</li>
            <li><strong>Listeria monocytogenes</strong> — also detected by the FDA CVM raw-food survey at rates higher than in other pet-food categories. Of clinical concern for both pets and humans, particularly pregnant women and immunocompromised people.</li>
            <li><strong>Shiga toxin-producing Escherichia coli (STEC), including O157:H7</strong> — documented in raw pet food samples in published European and North American surveys.</li>
            <li><strong>Campylobacter</strong> — frequently isolated, particularly from raw poultry-based diets.</li>
            <li><strong>Antimicrobial-resistant bacteria</strong> — a growing concern flagged in European surveillance: raw pet food has been identified as a route by which extended-spectrum beta-lactamase (ESBL) producing E. coli can enter households.</li>
          </ul>
          <p>Cooked commercial pet foods can also be subject to recalls for Salmonella contamination — most often associated with manufacturing-line contamination of the finished product — but the per-sample detection rate in surveys is dramatically lower than for raw products.</p>

          <h2 id="household">Household and Zoonotic Risk</h2>
          <p>The pathogens of concern in raw pet food are not theoretical. Documented zoonotic transmission events — where a person became ill with a bacterial strain matched to the household pet&apos;s raw food — have been reported in the medical and veterinary literature. The CDC&apos;s public guidance is built on case reports of this kind.</p>
          <p>Populations at elevated risk if a raw-fed dog is in the household:</p>
          <ul>
            <li><strong>Infants and young children</strong>, whose hand-to-mouth behavior creates frequent oral exposure to pet bowls, the floor where bowls sit, and the dog&apos;s mouth and coat.</li>
            <li><strong>Adults over 65</strong>, who have reduced immune function and higher invasive-disease rates from Salmonella and Listeria.</li>
            <li><strong>Pregnant women</strong>, where Listeria infection is associated with miscarriage and stillbirth.</li>
            <li><strong>People undergoing chemotherapy, on biologic immunosuppressants, post-transplant, or with HIV</strong>.</li>
          </ul>
          <p>Households without any of these populations still carry residual risk — Salmonella can cause severe illness in healthy adults — but the consequence severity is higher for these groups, which is why the AVMA, AAHA, and CDC guidance specifically calls them out.</p>
          <p>Practical exposure routes documented in published surveys and case reports: the food bowl and the surface it sits on; the dog&apos;s muzzle and tongue immediately after eating; the dog&apos;s feces in the yard and the home; cross-contamination from food preparation surfaces, utensils, and the refrigerator; and direct face-to-face contact between children and the dog.</p>

          <h2 id="shedding">Bacterial Shedding — The Subclinical Carrier Problem</h2>
          <p>One of the most consistent findings in the raw-feeding literature is that healthy-appearing dogs fed raw diets can shed pathogenic bacteria in their feces for extended periods. Finley et al. (Canadian Veterinary Journal, 2007) documented Salmonella shedding in raw-fed dogs that showed no clinical signs of illness, with shedding continuing for days to weeks after consumption of contaminated product. Subsequent studies have replicated this finding for multiple pathogens.</p>
          <p>The clinical implication: an owner cannot use "my dog seems fine" as evidence that the diet is not contaminating the household environment. The dog can be entirely asymptomatic and still be the source of Salmonella deposited around the home in feces, saliva, and on coat hair where the dog has groomed itself.</p>

          <h2 id="aafco">Nutritional Adequacy — The AAFCO Question</h2>
          <p>Beyond microbiology, the second major concern about raw diets — particularly home-prepared raw — is nutritional completeness. The Association of American Feed Control Officials (AAFCO) publishes nutrient profiles that a complete-and-balanced commercial pet food must meet, either by formulation calculation or by feeding trial. AAFCO is the reference standard cited by the FDA and by every major US pet-food manufacturer.</p>
          <p><strong>Home-prepared raw.</strong> Multiple published evaluations of home-prepared raw recipes — drawn from popular books, websites, and breeder traditions — have found a high prevalence of nutritional inadequacy when measured against AAFCO profiles. A frequently cited evaluation by Stockman et al. (JAVMA, 2013) analyzed 200 home-prepared maintenance diet recipes (cooked and raw) from a variety of sources, including those written by veterinarians, and found that the majority had at least one essential nutrient below recommended levels. The pattern across studies is broadly consistent: home-formulated diets without DACVN involvement frequently show calcium-phosphorus imbalance, low zinc, low vitamin D, low choline, or low essential fatty acid content.</p>
          <p><strong>Commercial raw.</strong> Some commercial raw manufacturers do formulate to AAFCO nutrient profiles and state so on the label. However, formulation-based substantiation is not equivalent to a feeding trial; the latter, where dogs actually eat the food under observation, is the more rigorous standard. Relatively few commercial raw products have undergone AAFCO feeding trials. Owners considering a commercial raw product should look for an explicit AAFCO nutritional adequacy statement, the substantiation method used, and the life stage(s) for which the food is intended.</p>
          <p>A nutritionally balanced raw diet is achievable — but it requires either a feeding-trial-substantiated commercial product or a recipe formulated for the specific dog by a board-certified veterinary nutritionist. Ad-hoc recipes drawn from the internet are unreliable.</p>

          <h2 id="bones">Bone Hazards</h2>
          <p>Bones are part of many raw feeding protocols, both as a calcium source and as enrichment. The published risks:</p>
          <ul>
            <li><strong>Slab fractures of the carnassial teeth (upper fourth premolar)</strong> are well-documented in dogs that chew on hard weight-bearing bones — beef femurs and similar "recreational" bones. Slab fractures often require extraction or root canal therapy.</li>
            <li><strong>Cooked bones of any kind</strong> are explicitly discouraged by the FDA in a consumer update. Cooking dries the bone and increases splintering; case series describe esophageal obstruction, gastric and intestinal perforation, and oral lacerations after cooked-bone ingestion.</li>
            <li><strong>Raw poultry necks, backs, and similar smaller bones</strong> are softer and fracture teeth less often but still carry risk of upper airway choking, esophageal lodging, and intestinal obstruction or perforation. The risk is lower than for hard recreational bones, not zero.</li>
            <li><strong>Bone-induced constipation</strong> — diets with high bone content can produce dry, hard stools that contribute to colonic discomfort.</li>
          </ul>
          <p>The AVMA and the American Veterinary Dental College advise against giving bones, with the position that the dental benefits do not outweigh the documented harms. Veterinary dental chews that carry the VOHC (Veterinary Oral Health Council) seal are an evidence-supported alternative for plaque and tartar control.</p>

          <h2 id="alternatives">Alternatives Without the Raw Risk</h2>
          <p>Many owners are drawn to raw because they want fresh ingredients, single-source proteins, transparency about manufacturing, or a feeling of higher quality than typical extruded kibble. Most of those goals can be met without the pathogen exposure:</p>
          <ul>
            <li><strong>Cooked, complete-and-balanced home-prepared diets</strong> formulated by a board-certified veterinary nutritionist (DACVN). Services such as BalanceIT.com and PetDIETS.com pair owners with credentialed nutritionists who produce a recipe with named supplement products that achieves AAFCO completeness. Cooking the protein source eliminates the principal pathogen concern.</li>
            <li><strong>Gently-cooked commercial fresh foods</strong> — a category that has grown substantially. Look for an AAFCO nutritional adequacy statement, the substantiation method (feeding trial preferred), and the credentials of the company&apos;s nutrition team.</li>
            <li><strong>Freeze-dried or air-dried diets</strong> — convenient, less processed than typical kibble. Note that freeze-drying does not reliably inactivate pathogens; products that are HPP-treated before freeze-drying address that gap.</li>
            <li><strong>WSAVA-aligned extruded diets</strong> — the standard recommendation from the WSAVA framework. See the <a href="/nutrition/wsava-explained">WSAVA explainer</a> and <a href="/reviews/best-dry-dog-food">dry food rankings</a>.</li>
          </ul>

          <h2 id="harm-reduction">If You Are Going to Feed Raw — Harm Reduction</h2>
          <p>Some owners will feed raw despite the published guidance against it. The goal of this section is harm reduction: if raw is the chosen approach, the following measures reduce — but do not eliminate — the risks documented above.</p>
          <ul>
            <li><strong>Choose HPP-treated commercial raw</strong>, not home-prepared raw. HPP (high-pressure processing) substantially reduces vegetative pathogen loads. Verify the HPP claim with the manufacturer in writing.</li>
            <li><strong>Use products with a documented AAFCO nutritional adequacy statement</strong>, ideally feeding-trial-substantiated, for the life stage of your dog.</li>
            <li><strong>Have a board-certified veterinary nutritionist (DACVN) review the diet plan</strong>, especially for puppies, large-breed growth, pregnant or lactating dogs, and dogs with chronic disease — the populations where nutritional errors have the most consequence.</li>
            <li><strong>Do not feed raw in households with infants, adults over 65, pregnant women, or immunocompromised members.</strong> The AVMA, AAHA, and CDC guidance is specifically directed at these households for good reason.</li>
            <li><strong>Hygiene protocol</strong>: dedicated bowls and utensils for the raw food, washed separately in hot soapy water (and ideally a dishwasher run); food preparation on a non-porous, dedicated surface sanitized after each use; hand-washing with soap and warm water after handling raw food and after handling the dog&apos;s mouth or face; pick up feces promptly from the yard and indoors and dispose of in a sealed container.</li>
            <li><strong>Do not feed weight-bearing recreational bones.</strong> Use VOHC-seal dental chews instead of bones for plaque control.</li>
            <li><strong>Periodic nutritional review and bloodwork.</strong> Annual vet visits with bloodwork (CBC, biochemistry) and a discussion of body condition and diet allow early detection of nutritional issues.</li>
            <li><strong>Pay attention to recalls.</strong> The FDA and the USDA publish recall lists for pet food; commercial raw is overrepresented in pathogen recalls relative to its market share.</li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
