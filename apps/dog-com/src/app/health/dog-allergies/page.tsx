import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, TableOfContents, ArticleByline } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Allergies — Atopic, Food, Contact | Dog.com', description: 'Three allergy types in dogs: atopic dermatitis, food allergy, contact allergy. Diagnostic ladder, treatment tiers, and when to refer to a dermatologist.', path: '/health/dog-allergies', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Allergies Guide', description: 'Atopic, food, and contact allergies in dogs — differential diagnosis, treatment ladder, and specialist referral.', url: 'https://dog.com/health/dog-allergies', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-28T00:00:00Z' })
const medSchema = buildMedicalWebPageSchema({ name: 'Dog Allergies Guide', description: 'Atopic, food, and contact allergies in dogs: presentation, work-up, and management.', url: 'https://dog.com/health/dog-allergies', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-28' })
const combined = combineSchemas(schema, medSchema)

const FAQS = [
  { question: 'Can dogs develop allergies to food they have eaten for years?', answer: 'Yes. True food allergy is an immune-mediated reaction that requires repeated exposure before sensitization develops. A dog can eat chicken for years and then react to it. This is why elimination diets target proteins the dog has been exposed to, not proteins that are "new" in marketing terms.' },
  { question: 'What are the most commonly implicated food allergens in dogs?', answer: 'The proteins most often identified in published case series are beef, dairy, chicken, lamb, egg, soy, and wheat (Mueller et al., BMC Veterinary Research 2016). Note these are common proteins, not grains specifically — the popular grain-free framing misidentifies the typical trigger.' },
  { question: 'Does switching to a grain-free diet help allergies?', answer: 'Usually not, and it carries a documented risk: the FDA opened an investigation in 2018 into a possible association between grain-free / legume-heavy diets and dilated cardiomyopathy (FDA CVM, 2019 update). Most canine food allergies are protein-driven; swapping to a grain-free formula that still uses the same protein source will not resolve a protein allergy.' },
  { question: 'Is blood (serum) allergy testing reliable for food allergies?', answer: 'No. The American College of Veterinary Dermatology and multiple peer-reviewed reviews conclude that serum IgE/IgG testing is not validated for diagnosing canine cutaneous adverse food reaction. The reference standard remains a strict elimination diet trial followed by provocation. Serum panels can be used to formulate immunotherapy for environmental allergens but should not be used to "diagnose" food allergy.' },
  { question: 'Are antihistamines (Benadryl) effective for dog allergies?', answer: 'Efficacy is limited and inconsistent. Published reviews report response rates well below those seen with targeted therapies such as oclacitinib (Apoquel) or lokivetmab (Cytopoint). Antihistamines may help individual dogs as adjuncts but are not reliable first-line therapy for atopic dermatitis (Olivry et al., BMC Vet Res 2015 ICADA guidelines).' },
  { question: 'When should I ask for a referral to a veterinary dermatologist?', answer: 'Reasonable triggers include: poor response after a structured 8 to 12 week work-up by your primary vet, recurrent secondary infections (pyoderma, otitis), suspected allergy in a young dog where lifelong management decisions are being made, or interest in intradermal testing and species-specific immunotherapy. Board-certified specialists are listed at the ACVD directory (acvd.org).' },
]

export default function DogAllergiesPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Allergies — Atopic, Food, and Contact', subtitle: 'Allergic skin disease is one of the most common reasons dogs are seen by veterinarians, and one of the most frequently mismanaged. The three immunologic categories — atopic dermatitis, cutaneous adverse food reaction, and contact allergy — present similarly but require very different work-ups and treatment plans.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '14 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Allergies', href: '/health/dog-allergies' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'The Three Types', href: '#types' }, { label: 'Atopic Dermatitis', href: '#atopy' }, { label: 'Food Allergy (CAFR)', href: '#food' }, { label: 'Contact Allergy', href: '#contact' }, { label: 'Differential Diagnosis', href: '#differential' }, { label: 'Diagnostic Ladder', href: '#ladder' }, { label: 'Treatment Tiers', href: '#treatment' }, { label: 'When to See a Dermatologist', href: '#specialist' }, { label: 'Common Owner Mistakes', href: '#mistakes' }, { label: 'FAQ', href: '#faq' }]} />
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Key Sources Cited</div>
            <ul className="text-xs text-brand-text-mid space-y-1.5 m-0 p-0 list-none">
              <li>ICADA / ACVD treatment guidelines (Olivry et al., BMC Vet Res 2015)</li>
              <li>Mueller et al., BMC Vet Res 2016 — critically appraised topic on food allergens</li>
              <li>WSAVA Global Nutrition Committee statements</li>
              <li>FDA CVM 2018–2019 grain-free / DCM updates</li>
              <li>Veterinary Dermatology (journal) reviews</li>
            </ul>
          </div>
          <RelatedLinks title="Related" links={[{ label: 'Best Flea & Tick Prevention', href: '/reviews/best-flea-tick-prevention' }, { label: 'Prescription Diets', href: '/nutrition/prescription-diets' }, { label: 'Elimination Diet Guide', href: '/nutrition/elimination-diet' }, { label: 'Hot Spots in Dogs', href: '/health/dog-hot-spots' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-allergies" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

          <p className="text-lg text-brand-text-mid leading-relaxed italic mb-6">
            <strong className="not-italic">TL;DR.</strong> Dogs get three types of allergy — atopic dermatitis (the most common, environmental), cutaneous adverse food reaction, and contact allergy — plus flea allergy as the critical differential. The only validated food-allergy test is a strict 8–12 week elimination diet with provocation. First-line atopic therapy is oclacitinib (Apoquel) or lokivetmab (Cytopoint); antihistamines are unreliable.
          </p>

          <div style={{ background: 'rgba(60, 90, 140, 0.06)', border: '1px solid rgba(60, 90, 140, 0.20)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
            <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-text-light)', marginBottom: '8px' }}>General Information</div>
            <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>This page summarizes the published veterinary literature on canine allergic skin disease. It is not a substitute for examination by your veterinarian or by a board-certified dermatologist (DACVD).</p>
          </div>

          <h2 id="types">What Are the Three Types of Dog Allergy?</h2>
          <p>Veterinary dermatology recognizes three immunologically distinct categories of allergic skin disease in dogs:</p>
          <ul>
            <li><strong>Atopic dermatitis (canine atopy)</strong> — IgE-mediated hypersensitivity to environmental allergens such as house dust mites, storage mites, pollens, mold spores, and animal danders. The most common form. The International Committee on Allergic Diseases of Animals (ICADA) treatment guidelines published in BMC Veterinary Research (Olivry et al., 2015) are the standard reference.</li>
            <li><strong>Cutaneous adverse food reaction (CAFR)</strong>, often called food allergy. A heterogeneous category that includes both true IgE-mediated food allergy and non-immunologic food intolerance presenting with skin signs. Estimates of how often CAFR is the underlying driver in an itchy allergic dog vary widely across published case series; review papers commonly cite a figure in the range of roughly 5 to 15 percent of allergic dogs as having a confirmed food component, though the true prevalence is difficult to pin down and depends heavily on referral population.</li>
            <li><strong>Contact allergy (allergic contact dermatitis)</strong> — uncommon in dogs. A delayed-type hypersensitivity reaction to a substance in direct skin contact (carpet cleaners, certain shampoos, plant resins, rubber, plastics). When it occurs, lesions are localized to the contact area: ventral abdomen, axillae, interdigital spaces, chin.</li>
          </ul>
          <p>A fourth condition — <strong>flea allergy dermatitis (FAD)</strong> — is also allergic but mechanistically distinct (hypersensitivity to flea salivary antigens). FAD is covered in its own section below because it is the single most important differential and must be excluded before any other allergy work-up proceeds.</p>

          <h2 id="atopy">How Do I Know If My Dog Has Atopic Dermatitis?</h2>
          <p>Canine atopic dermatitis is a chronic, relapsing inflammatory skin disease with strong breed and familial predisposition. Predisposed breeds reported in the dermatology literature include West Highland White Terriers, Boxers, Bulldogs, French Bulldogs, Labrador and Golden Retrievers, German Shepherds, and Shar-Peis, among others.</p>
          <p><strong>Typical presentation.</strong> Onset usually between 6 months and 3 years of age. Pruritus (itching) is the cardinal sign and is initially nonlesional — the dog itches before there is anything visible. Affected sites: face (periocular, perioral), ears (recurrent otitis externa is often the first clue), ventral neck, axillae, groin, ventral abdomen, perineum, and the feet (paw licking and chewing). Seasonal at first in many dogs; year-round with progression.</p>
          <p><strong>Diagnosis is clinical.</strong> Favrot&apos;s criteria (Favrot et al., Vet Dermatol 2010) are a published set of clinical features that, in combination, suggest atopic dermatitis. Diagnosis is one of exclusion: ectoparasites, secondary bacterial and yeast infection, and cutaneous adverse food reaction must be ruled out first. Intradermal or serum allergy testing is used to identify specific environmental allergens for immunotherapy formulation — not as a screening or diagnostic test.</p>

          <h2 id="food">How Do I Test for a Food Allergy in My Dog?</h2>
          <p>Food allergy is frequently overdiagnosed by owners and underdiagnosed when properly worked up. Two patterns are important:</p>
          <ul>
            <li><strong>Cutaneous signs</strong> — nonseasonal pruritus, recurrent pyoderma, recurrent otitis. Indistinguishable from atopic dermatitis on physical exam alone in most dogs.</li>
            <li><strong>Combined cutaneous and gastrointestinal signs</strong> — soft stools, increased defecation frequency, intermittent vomiting, flatulence. The presence of GI signs in an itchy dog raises the index of suspicion for food involvement.</li>
          </ul>
          <p><strong>The only validated diagnostic is a strict elimination diet trial.</strong> The protocol that is supported by published evidence (Olivry &amp; Mueller, Vet Dermatol 2017 systematic reviews):</p>
          <ul>
            <li>Duration: 8 weeks minimum, frequently extended to 12 weeks for skin signs.</li>
            <li>Diet: a hydrolyzed protein veterinary therapeutic diet (Royal Canin Hydrolyzed Protein, Hill&apos;s z/d, Purina HA) or a strict novel-protein diet using a protein the dog has documented zero prior exposure to. Over-the-counter limited-ingredient diets are not appropriate for diagnostic trials because of contamination with non-declared proteins documented in multiple analytical studies.</li>
            <li>Absolute exclusion of all other oral intake: no treats, flavored chewables (including monthly heartworm preventives — switch to a non-flavored option for the duration), flavored toothpaste, table scraps, bones, or shared food.</li>
            <li>Provocation: if signs resolve, the original diet is reintroduced. Recrudescence on provocation confirms the diagnosis. This step is what distinguishes a true diagnostic trial from a hopeful diet change.</li>
          </ul>
          <p>Serum IgE and IgG panels marketed for food allergy diagnosis are not validated. The ACVD position, restated across multiple peer-reviewed reviews, is that these tests should not replace the elimination diet trial.</p>

          <h2 id="contact">Contact Allergy</h2>
          <p>Allergic contact dermatitis is the least common of the three. Lesions are restricted to areas of direct contact with the offending substance: the ventral abdomen and inguinal region (carpet, lawn chemicals, floor cleaner residues), the chin (plastic food bowls), the interdigital spaces (substrate, ice melt), or focal areas around a topical product. Pattern recognition matters: a distribution that maps onto a contact surface is the clue.</p>
          <p>Diagnosis is by careful history (any new household product, shampoo, fabric, bedding, or environmental change), withdrawal of the suspect, and resolution. Patch testing is sometimes used in referral dermatology but is uncommon.</p>

          <h2 id="differential">Differential Diagnosis — What Else Looks Like Allergy</h2>
          <p>Before settling on an allergic diagnosis, several other conditions must be considered because they cause itch and skin disease and require different management:</p>
          <ul>
            <li><strong>Flea allergy dermatitis (FAD)</strong> — the single most important differential. Hypersensitivity to flea salivary antigens. Distribution: dorsolumbar (lower back, base of tail), caudal thighs, ventral abdomen. A single flea bite can sustain the reaction in a sensitized dog. Diagnosis is presumptive: response to strict flea control on all in-contact animals with a modern oral isoxazoline (afoxolaner, fluralaner, sarolaner, lotilaner) is both diagnostic and therapeutic. FAD must be excluded — or treated through — before any other allergy work-up.</li>
            <li><strong>Sarcoptic mange (scabies)</strong> — intensely pruritic, often with characteristic ear-margin and elbow lesions. Skin scrapings are insensitive; empirical treatment with an isoxazoline or selamectin is often used diagnostically.</li>
            <li><strong>Demodicosis</strong> — usually nonpruritic, but secondary bacterial infection can make it itchy. Diagnose with deep skin scrapings or trichograms.</li>
            <li><strong>Primary bacterial pyoderma</strong> — staphylococcal infection can cause itch on its own. Often layered on top of underlying allergy. See the <a href="/health/dog-pyoderma">pyoderma guide</a>.</li>
            <li><strong>Malassezia dermatitis</strong> — yeast overgrowth, often in skinfolds and ears, intensely pruritic and a frequent secondary complication of allergic skin disease.</li>
            <li><strong>Endocrine disease</strong> — hypothyroidism and hyperadrenocorticism (Cushing&apos;s) cause coat and skin changes that can be mistaken for allergy. Bloodwork screening is appropriate in older dogs with new skin disease.</li>
          </ul>

          <h2 id="ladder">The Diagnostic Ladder</h2>
          <p>A structured work-up — performed in order, not skipped — is what distinguishes effective allergy diagnosis from years of trial-and-error therapy. The published approach (consistent across ICADA guidelines and standard veterinary dermatology textbooks):</p>
          <ol>
            <li><strong>Rule out ectoparasites.</strong> Empirical treatment with a broad-spectrum isoxazoline for at least 8 weeks, applied to all in-contact animals, addresses fleas, sarcoptes, and demodex simultaneously in most cases.</li>
            <li><strong>Rule out and treat secondary infection.</strong> Cytology of skin and ear samples identifies bacterial and yeast overgrowth. Topical antimicrobial therapy (chlorhexidine shampoo, mupirocin) and, when indicated, systemic antibiotics are used. Itch that resolves with infection control alone is infection-driven, not primarily allergic.</li>
            <li><strong>Elimination diet trial.</strong> 8 to 12 weeks of hydrolyzed or strict novel-protein diet with provocation as described above. If skin signs resolve and recur on challenge, food is at least partially responsible.</li>
            <li><strong>Address presumed atopic dermatitis</strong>, often empirically while finishing or in parallel with the work-up. Symptomatic anti-pruritic therapy is layered on as needed (see treatment tiers below).</li>
            <li><strong>Intradermal allergy testing (IDT) or serum allergen-specific IgE testing</strong> in dogs where allergen-specific immunotherapy (ASIT) is being considered. These tests identify which environmental allergens to include in a custom immunotherapy formulation. They are not screening tests.</li>
            <li><strong>Skin biopsy</strong> — reserved for atypical cases, suspected autoimmune disease (pemphigus, lupus), cutaneous lymphoma, or when first-line therapy fails unexpectedly.</li>
          </ol>

          <h2 id="treatment">Treatment Tiers</h2>
          <p>The ICADA guidelines (Olivry et al., BMC Vet Res 2015) describe treatment as a layered approach combining trigger avoidance, skin barrier support, infection control, and pharmacologic anti-pruritic therapy. The tiers below summarize that framework.</p>
          <p><strong>Tier 1 — Topical and supportive care.</strong> Weekly or twice-weekly bathing with a veterinary chlorhexidine or ceramide-restoring shampoo, ear cleaning protocols where otitis is recurrent, omega-3 fatty acid supplementation (EPA/DHA from fish oil, dosed at 50 to 100 mg combined EPA+DHA per kg), and environmental measures (frequent washing of bedding, HEPA filtration in some homes). Topical care is foundational, not optional.</p>
          <p><strong>Tier 2 — Targeted pharmacologic therapy.</strong> Two products dominate current practice and are supported by extensive published data:</p>
          <ul>
            <li><strong>Oclacitinib (Apoquel)</strong> — an oral JAK inhibitor that interrupts cytokine signaling (notably IL-31, the principal pruritogenic cytokine in canine atopy). Onset within hours; effective in a large proportion of dogs. Monitoring includes periodic CBC and biochemistry; the product label and manufacturer prescribing information describe contraindications and use in young dogs.</li>
            <li><strong>Lokivetmab (Cytopoint)</strong> — a caninized monoclonal antibody that neutralizes circulating IL-31. Subcutaneous injection by the veterinarian, duration approximately 4 to 8 weeks. Biological agent with a favorable safety profile reported in registration data; useful where oral medication is impractical or contraindicated.</li>
          </ul>
          <p><strong>Tier 3 — Antihistamines.</strong> Diphenhydramine, hydroxyzine, cetirizine, and others have been studied in canine atopy with generally disappointing results. Response is individual and unpredictable. The ICADA guidelines note that antihistamines have limited evidence as monotherapy but may have a role as adjuncts in some dogs. They are not a substitute for the targeted therapies above when those are indicated.</p>
          <p><strong>Tier 4 — Cyclosporine (Atopica).</strong> A calcineurin inhibitor with documented efficacy in atopic dermatitis. Onset is slower (4 to 8 weeks). Useful in dogs that do not tolerate oclacitinib or where a different mechanism is desired. Monitoring per product labeling.</p>
          <p><strong>Tier 5 — Allergen-specific immunotherapy (ASIT).</strong> The only disease-modifying treatment for atopic dermatitis. Custom formulation based on IDT or serum allergen panel results, administered as subcutaneous injections (SCIT) or sublingual drops (SLIT). Expected response timeline is 6 to 12 months; published response rates vary but a substantial minority of dogs achieve clinically meaningful improvement that reduces dependence on chronic anti-pruritic medication. Best directed by a veterinary dermatologist.</p>
          <p><strong>Glucocorticoids</strong> (prednisone) remain effective and inexpensive for short-term flare control but are not recommended for long-term maintenance because of well-documented side effects (polyuria, polyphagia, iatrogenic Cushing&apos;s, GI ulceration). Modern practice reserves steroids for acute flares of limited duration.</p>

          <h2 id="specialist">When to See a Veterinary Dermatologist</h2>
          <p>A primary-care veterinarian manages the majority of allergic dogs successfully. Referral to a board-certified veterinary dermatologist (a diplomate of the American College of Veterinary Dermatology, DACVD) is appropriate when:</p>
          <ul>
            <li>The dog has not responded to a structured 8 to 12 week work-up that included parasite control, infection treatment, and a properly conducted elimination diet.</li>
            <li>Allergen-specific immunotherapy is being considered and intradermal testing is preferred (IDT requires sedation, specialized expertise, and is generally performed in the referral setting).</li>
            <li>The case is complicated by recurrent or resistant infections, suspected drug reactions, atypical lesions, or suspected autoimmune disease where biopsy interpretation is needed.</li>
            <li>The owner wants a second opinion on chronic therapy or wants the long-term plan reviewed.</li>
          </ul>
          <p>The ACVD maintains a public directory of board-certified veterinary dermatologists at <strong>acvd.org</strong>.</p>

          <h2 id="mistakes">Common Owner Mistakes</h2>
          <ul>
            <li><strong>Assuming grain is the problem.</strong> Most CAFR cases are protein-driven, not grain-driven. Switching to a grain-free formula with the same chicken or beef protein source will not resolve a chicken or beef allergy — and may introduce the FDA-flagged grain-free/DCM concern.</li>
            <li><strong>Doing a partial elimination diet.</strong> Treats, flavored medications, table scraps, or sharing food with another pet invalidates the trial. A single chicken-flavored heartworm chew can confound an 8-week diet.</li>
            <li><strong>Using over-the-counter limited-ingredient food for diagnostic trials.</strong> Analytical studies have repeatedly documented protein contamination in OTC limited-ingredient diets. Use a veterinary therapeutic hydrolyzed or strict novel-protein diet for diagnostic work.</li>
            <li><strong>Treating with OTC supplements as primary therapy.</strong> Omega-3 fatty acids and skin-barrier supplements are useful adjuncts but are not adequate primary treatment for moderate-to-severe atopic dermatitis. Delaying targeted therapy in favor of supplements often allows secondary infection and chronic skin damage to develop.</li>
            <li><strong>Stopping medication when the dog is comfortable.</strong> Atopic dermatitis is a lifelong condition. Discontinuing therapy because the dog is doing well usually leads to flare; the more useful question to discuss with the vet is whether to taper to the lowest effective dose.</li>
            <li><strong>Skipping ectoparasite control during the work-up.</strong> Flea allergy can mimic or layer onto any other allergy. Continuous, year-round flea prevention on every pet in the household removes the most important confounder.</li>
          </ul>

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />
        </div>
      </ArticleLayout>
    </>
  )
}
