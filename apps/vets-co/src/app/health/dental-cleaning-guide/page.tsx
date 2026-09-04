import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, FAQAccordion, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleByline, DropCap, ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Veterinary Dental Cleaning — What to Expect, Anesthesia | Vets.co', description: 'Professional dental cleaning under anesthesia is the only way to clean below the gumline. Dental grades, anesthesia safety.', path: '/health/dental-cleaning-guide', type: 'article' })
const SOURCES = [
  { label: 'AVDC: Companion Animal Periodontal Disease', url: 'https://avdc.org/avdc-nomenclature/', publisher: 'American Veterinary Dental College' },
  { label: 'AAHA: Dental Care Guidelines for Dogs and Cats', url: 'https://www.aaha.org/aaha-guidelines/dental-care/', publisher: 'AAHA' },
  { label: 'WSAVA: Dental Assessment, Treatment and Prevention Guidelines', url: 'https://wsava.org/global-guidelines/global-dental-guidelines/', publisher: 'WSAVA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Veterinary Dental Cleaning Guide', description: 'Dental grading, anesthesia safety, and what to expect from professional dental cleaning.', url: 'https://vets.co/health/dental-cleaning-guide', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-04T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Veterinary Dental Cleaning Guide', description: 'Professional dental cleaning under anesthesia — grades, safety, and expectations.', url: 'https://vets.co/health/dental-cleaning-guide', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
const FAQS = [
  { question: 'Is anesthesia safe for older dogs?', answer: 'Anesthesia carries some risk for all patients, and risk increases with age and concurrent health conditions — but undertreated dental disease also carries significant risk (pain, systemic infection, quality of life decline). Modern veterinary anesthesia with pre-anesthetic bloodwork, IV catheter and fluids, monitoring of oxygen saturation, blood pressure, end-tidal CO2, and temperature, and dedicated anesthetic monitoring reduces anesthetic risk substantially. Most healthy senior dogs tolerate anesthesia well with appropriate protocols. The risk of anesthesia should be compared to the risk of leaving significant dental disease untreated.' },
  { question: 'What is anesthesia-free dentistry?', answer: 'Anesthesia-free dentistry (AFD) scrapes visible plaque from the visible tooth surface while the animal is awake and physically restrained. It cannot scale below the gumline (where periodontal disease occurs), cannot take dental radiographs to evaluate roots and bone, cannot probe periodontal pockets, and cannot extract teeth. The AVDC (American Veterinary Dental College), AAHA, and WSAVA all oppose anesthesia-free dentistry as it provides false assurance of dental health without addressing the subgingival disease that causes pain and tooth loss.' },
  { question: 'How often does my dog need dental cleanings?', answer: 'This depends on the individual dog\'s periodontal disease susceptibility, home care compliance, breed predisposition, and findings at each cleaning. Small breeds typically need cleanings more frequently — annually from age 2-3. Large breeds often go 18-24 months between cleanings with good home care. After any cleaning, the veterinarian grades the disease and recommends the next interval. Daily toothbrushing is the most effective intervention to extend intervals between professional cleanings.' },
]
export default function DentalCleaningGuidePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Veterinary Dental Cleaning Guide', subtitle: 'Periodontal disease affects over 80% of dogs over age 3. Professional dental cleaning under anesthesia is the only way to address subgingival (below the gumline) disease — the part of dental disease that causes pain, tooth loss, and systemic infection. Crown scaling alone, whether done under anesthesia or not, does not treat periodontitis.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Dental Cleaning', href: '/health/dental-cleaning-guide' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Periodontal Disease in Pets', href: '/health/periodontal-disease-pets', category: 'Veterinary Guide' },
          { title: 'Preventive Care Schedule', href: '/health/preventive-care-schedule', category: 'Veterinary Guide' },
          { title: 'Find a Vet', href: '/find-a-vet', category: 'Directory' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Periodontal Grades</div>
            {[['Grade 0', 'Healthy — no disease'], ['Grade 1', 'Gingivitis only — no attachment loss'], ['Grade 2', 'Early periodontitis — <25% attachment loss'], ['Grade 3', 'Moderate — 25-50% attachment loss'], ['Grade 4', 'Advanced — >50% attachment loss, extraction']].map(([g, d]) => (
              <div key={g} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{g}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Periodontal Disease', href: '/health/periodontal-disease-pets' }, { label: 'Preventive Care Schedule', href: '/health/preventive-care-schedule' }, { label: 'Find a Vet', href: '/find-a-vet' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-dental-cleaning" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-04T00:00:00Z" reviewedBy="Editorial team" />

          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dental-home-care checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Pet dental-home-care checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the after-cleaning home-care notes — a soft toothbrush and
              enzymatic toothpaste, then VOHC-accepted dental chews and a VOHC
              water additive as adjuncts. Educational checklist, not a
              diagnosis. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Pet dental-home-care checklist"
              subtitle="Email the after-cleaning brushing and VOHC-adjunct notes. No spam."
              ctaText="Email my dental-cleaning checklist"
              source="health-dental-cleaning-guide-under-hero"
            />
          </div>

          <h2>Why Anesthesia Is Required</h2>
          <DropCap>Proper dental cleaning requires scaling above and below the gumline (subgingival scaling), probing every tooth to assess pocket depth (the space between tooth and gum — deep pockets indicate periodontitis), dental radiographs to evaluate the tooth root and surrounding bone (70% of tooth structure is below the gumline — invisible to visual examination), extraction of non-viable teeth, polishing, and charting for the dental record. None of these can be performed safely or effectively in an awake, unsedated dog. The mouth must be still, the subgingival environment must be accessible, and the animal must not aspirate water, debris, or extracted tooth fragments. General anesthesia with an endotracheal tube provides all of these requirements.</DropCap>

          <h2>What the Procedure Involves</h2>
          <p><strong>Pre-anesthetic bloodwork:</strong> CBC and chemistry profile evaluate organ function before anesthesia is administered. Identifies conditions (anemia, kidney disease, liver disease, diabetes) that affect anesthetic protocol or increase risk. Standard of care for all dental procedures, especially in middle-aged and senior patients.</p>
          <p><strong>IV catheter and fluid support:</strong> Maintains blood pressure during anesthesia (blood pressure drops under anesthesia — fluids support cardiovascular function), provides immediate IV access for emergency medications, and ensures hydration.</p>
          <p><strong>Intubation:</strong> An endotracheal tube maintains airway and prevents aspiration of water, blood, or debris during scaling. A cuffed tube in the trachea also delivers inhaled anesthetic gas.</p>
          <p><strong>Monitoring:</strong> A dedicated anesthetic monitor or team member tracks oxygen saturation, blood pressure, end-tidal CO2, heart rate, respiratory rate, and temperature throughout the procedure.</p>
          <p><strong>Full mouth radiographs:</strong> Required before extractions, assessment of Grade 2+ disease, and evaluation of any abnormality found on probing. Without radiographs, significant disease below the gumline is missed. This is why radiographs are part of the standard of care for dental procedures — not an optional add-on.</p>

          <h2>Extractions — When and Why</h2>
          <p>Grade 4 periodontal disease teeth are not salvageable — the bone and attachment structures are too far compromised. Keeping a Grade 4 tooth leaves a source of chronic infection, pain, and systemic bacterial load. Extraction resolves these immediately — dogs with multiple painful extractions typically show dramatically improved appetite, energy, and demeanor within days of surgery. Most dogs adapt rapidly to eating with fewer teeth — gum tissue is tougher than people assume.</p>
          <p>Tooth resorption (dissolution of tooth structure from within) is common in cats and occurs in dogs — radiographs identify these teeth which are not detectable on visual examination.</p>

          <h2>Home Care After Cleaning</h2>
          <p>A professional cleaning resets the clock on periodontal disease — the tooth surface is clean and the gumline is healthy. What happens next depends on home care. Daily toothbrushing (a soft toothbrush and enzymatic toothpaste — CET, Vetradent — never human fluoride toothpaste) is the most effective intervention to maintain the cleaning and extend the interval before the next professional cleaning is needed. VOHC-accepted dental chews (Greenies, Whimzees) supplement brushing. Water additives with the VOHC seal provide additional support. The goal is to maintain the Grade 0-1 state achieved by the cleaning for as long as possible.</p>

          <h2 id="kit">Home-Care Kit After a Cleaning</h2>
          <p>Everyday physical supplies that match the home-care copy above — a soft toothbrush and enzymatic toothpaste for daily brushing, plus VOHC-accepted dental chews and a VOHC water additive as adjuncts. These are not a professional cleaning, not anesthesia-free dentistry, and not a treatment for periodontal disease; bad breath, tartar, red gums, or eating changes belong with a veterinarian, not a chew. Human fluoride toothpaste is explicitly not for pets. This page does not claim hands-on testing.</p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops (dental home-care kit).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — everyday physical supplies matching
              on-page after-cleaning copy (soft toothbrush, enzymatic
              toothpaste, VOHC dental chews, VOHC water additive), not
              medication, anesthesia, or invented-kit hops. Human fluoride
              toothpaste, CET/Vetradent ASINs, and clinic procedure gear
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dental home-care kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page after-cleaning
              home-care copy — a soft toothbrush, enzymatic toothpaste,
              VOHC-accepted dental chews, and a VOHC water additive.
              Everyday physical supplies only. They are not a ranked product
              list, they are not a professional cleaning or anesthesia-free
              substitute, they are not medications, and they do not replace
              a veterinarian. Vets.co earns a commission on qualifying
              purchases at no extra cost to you. Empty Chewy buttons stay
              hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/soft+pet+toothbrush?s=health-dental-cleaning-guide"
                amazonLabel="Browse soft pet toothbrushes on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/enzymatic+pet+toothpaste?s=health-dental-cleaning-guide"
                amazonLabel="Browse enzymatic pet toothpaste on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/dental+chews+dog?s=health-dental-cleaning-guide"
                amazonLabel="Browse dental chews on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/pet+dental+water+additive?s=health-dental-cleaning-guide"
                amazonLabel="Browse pet dental water additives on Amazon →"
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
