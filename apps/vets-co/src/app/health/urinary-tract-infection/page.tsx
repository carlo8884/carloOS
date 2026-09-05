import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, CrossPortfolioCard, EmailCapture, RelatedLinks, AffiliateDisclosure, ShopCtas } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Urinary Tract Infections in Dogs — Signs, Culture | Vets.co', description: 'UTIs in dogs cause straining, blood in urine, and accidents. Culture and sensitivity before antibiotics prevents resistance.', path: '/health/urinary-tract-infection', type: 'article' })
const SOURCES = [
  { label: 'Merck Veterinary Manual: Urinary Tract Infections in Dogs', url: 'https://www.merckvetmanual.com/urinary-system/noninfectious-diseases-of-the-urinary-system-in-small-animals/urinary-tract-infections-in-small-animals', publisher: 'Merck Vet Manual' },
  { label: 'ISCAID: Antimicrobial Use Guidelines for UTI in Dogs and Cats', url: 'https://onlinelibrary.wiley.com/doi/10.1111/jvim.15575', publisher: 'Journal of Veterinary Internal Medicine' },
  { label: 'AVMA: Urinary Tract Infections', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/urinary-tract-problems-dogs', publisher: 'AVMA' },
]
const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Urinary Tract Infections in Dogs', description: 'Signs, urine culture, antibiotic selection, and recurrent UTI management in dogs.', url: 'https://vets.co/health/urinary-tract-infection', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-09-05T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Urinary Tract Infections in Dogs', description: 'Signs, urine culture, and treatment of bacterial UTI in dogs.', url: 'https://vets.co/health/urinary-tract-infection', authorName: 'Vets.co Editorial', lastReviewed: '2026-06-07' })
const combined = combineSchemas(schema, med)
export default function UTIPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Urinary Tract Infections in Dogs', subtitle: 'Bacterial urinary tract infections (UTIs) are common in dogs — particularly females, due to their shorter urethral anatomy. They are almost always curable with appropriate antibiotics, but treatment without culture leads to antibiotic resistance, and recurrent UTIs indicate an underlying condition that requires investigation.', category: 'Veterinary Guide', authorName: 'Vets.co Editorial', publishedAt: 'May 2025', readTime: '8 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Health', href: '/health' }, { name: 'Urinary Tract Infection', href: '/health/urinary-tract-infection' }]}
        relatedLinks={[
          { title: 'Health Conditions', href: '/health', category: 'Hub' },
          { title: 'Cushing Disease in Dogs', href: '/health/cushing-disease-dogs', category: 'Veterinary Guide' },
          { title: 'Diabetes in Dogs and Cats', href: '/health/diabetes-in-dogs-cats', category: 'Veterinary Guide' },
          { title: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide', category: 'Veterinary Guide' },
        ]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">UTI Signs</div>
            {['Straining to urinate — small amounts frequently', 'Blood in urine (pink or red tinge)', 'House accidents in a previously reliable dog', 'Licking at genitals excessively', 'Painful urination (vocalizing, hunching)', 'Cloudy or foul-smelling urine', 'Increased urgency and frequency'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Cushing\'s Disease', href: '/health/cushing-disease-dogs' }, { label: 'Diabetes in Dogs and Cats', href: '/health/diabetes-in-dogs-cats' }, { label: 'Senior Bloodwork Guide', href: '/health/senior-bloodwork-guide' }]} />
          <EmailCapture variant="sidebar" siteId="vets-co" title="Free Pet Health Tips" subtitle="Practical guidance weekly." source="health-uti" />
                  <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
</>}
      >
        <div className="carloOS-article">
          {/* Under-hero capture — source must end in under-hero so it always renders. */}
          <div className="mb-8">
            <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
              Keep the dog UTI hydration checklist
            </p>
            <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
              Dog UTI hydration checklist
            </h2>
            <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
              Email the home-support notes — a stainless-steel
              dog fountain so running water invites more
              drinking, washable pee pads for house accidents
              in a previously reliable dog, and a weighted
              ceramic water bowl that stays put when a dog
              with urgency drinks often. Educational
              checklist, not a diagnosis and not a substitute
              for culture-guided antibiotics. Prescription
              urinary diets, cranberry products, and clinic
              culture kits stay off this list. No spam.
            </p>
            <EmailCapture
              variant="inline"
              siteId="vets-co"
              title="Dog UTI hydration checklist"
              subtitle="Email the fountain, washable-pad, and ceramic-bowl notes. No spam."
              ctaText="Email my dog UTI hydration checklist"
              source="health-urinary-tract-infection-under-hero"
            />
          </div>

          <h2>Diagnosis — Culture Before Antibiotics</h2>
          <p>The appropriate diagnostic sequence: urinalysis (evaluates urine concentration, pH, white cells, red cells, bacteria, casts, protein) followed by urine culture and antibiotic sensitivity testing when bacteria are present on urinalysis. The culture takes 48-72 hours but identifies exactly which bacteria is causing the infection and which antibiotics will treat it effectively.</p>
          <p>The alternative — empirical antibiotics without culture — is appropriate for a first, uncomplicated UTI in an otherwise healthy young dog where E. coli (the most common UTI pathogen) is statistically the likely cause. But empirical treatment without culture for recurrent UTIs, UTIs in dogs on prior antibiotics, or UTIs in immunocompromised dogs risks treating with an ineffective antibiotic while resistant bacteria multiply. Antibiotic resistance in canine UTI pathogens is increasing — culture-guided treatment is increasingly important.</p>
          <p>Urine collection method matters: free-catch urine (collected as the dog urinates) is contaminated with environmental and genital bacteria — results must be interpreted with this contamination in mind. Cystocentesis (sterile needle aspiration directly from the bladder — performed by a veterinarian) provides uncontaminated urine for definitive culture. For a recurrent UTI workup, cystocentesis collection is preferred.</p>

          <h2>Common Bacteria and Antibiotics</h2>
          <p><strong>Escherichia coli:</strong> The most common canine UTI pathogen (40–50% of cases). Usually susceptible to amoxicillin-clavulanate, trimethoprim-sulfamethoxazole, fluoroquinolones (enrofloxacin, marbofloxacin), and first-generation cephalosporins. However, resistant E. coli is increasingly common — culture guides which antibiotic is appropriate for each infection.</p>
          <p><strong>Staphylococcus pseudintermedius:</strong> Common in recurrent or chronic UTIs, particularly in dogs with skin disease (the same organism that causes canine pyoderma can ascend the urinary tract). Susceptibility pattern from culture determines antibiotic choice.</p>
          <p><strong>Proteus mirabilis, Klebsiella pneumoniae, Pseudomonas aeruginosa:</strong> Less common but important because they carry antibiotic resistance patterns that require specific antibiotic selection from culture results. Empirical treatment routinely fails these pathogens.</p>
          <p>Treatment duration: the International Society for Companion Animal Infectious Diseases (ISCAID) guidelines support shorter courses (3-5 days) for uncomplicated lower UTI in female dogs. Longer courses (7-10+ days) for upper UTI (pyelonephritis — kidney infection), male dogs (due to prostate involvement risk), or complicated UTIs. Finish the full course.</p>

          <h2>Recurrent UTIs — The Investigation Required</h2>
          <p>A dog with three or more UTIs per year, or infections that recur rapidly after completing appropriate antibiotics, requires investigation for an underlying cause. Bacteria do not spontaneously establish in a healthy dog's bladder — recurrent infection suggests something is compromising the bladder's normal defense mechanisms.</p>
          <p><strong>Anatomical causes:</strong> Vulvar conformation (hooded vulva — skin fold that traps moisture and bacteria near the urethral opening), urethral sphincter mechanism incompetence (in spayed females — causes urine pooling in the vagina).</p>
          <p><strong>Medical causes:</strong> Diabetes mellitus (glucose in urine is an ideal bacterial culture medium — dogs with untreated or poorly controlled diabetes have dramatically elevated UTI risk), Cushing's disease (immune suppression from excess cortisol), urinary stones or masses (provide nidus for persistent infection), urinary incontinence (pooling urine), and immunosuppressive medications.</p>
          <p>Workup for recurrent UTI: cystocentesis urine culture, abdominal ultrasound (bladder wall, kidneys, urinary stones), screening for diabetes (glucose, urinalysis) and Cushing's, assessment of vulvar conformation, and urine protein:creatinine ratio if proteinuria is present.</p>

          <h2 id="kit">Home hydration and accident kit</h2>
          <p>
            Everyday physical supplies that match the house-accident and
            hydration copy on this page — a stainless-steel dog fountain so
            running water invites more drinking, washable pee pads for the
            accidents a previously reliable dog may have while straining and
            urgent, and a weighted ceramic water bowl that does not tip when
            the dog returns to the bowl often. Extra water stations sit beside
            the fountain; they are not a second shop hop. These are household
            tools, not treatments. They do not treat a UTI, they do not replace
            a veterinarian or a urine culture, and they are not antibiotics,
            prescription urinary diets (Hill&rsquo;s c/d, Royal Canin Urinary SO,
            and the like), cranberry products, or clinic culture kits. This is
            not the sister FLUTD page and it does not hop a cat water fountain,
            extra cat litter boxes, or canned wet cat food. This page does not
            claim hands-on testing.
          </p>

          <AffiliateDisclosure variant="inline" siteId="vets-co" />

          {/* Money path — live amazon-brand search hops (stainless-steel
              dog fountain / washable pee pads / weighted ceramic bowl).
              ShopCtas hides empty Chewy; never href="#" or PLACEHOLDER.
              Category searches only — unused vs #848–#1032
              dog+water+fountain, heavy+ceramic+pet+water+bowl,
              puppy+training+pads, and FLUTD (#1024)
              cat+water+fountain / extra+cat+litter+box /
              canned+wet+cat+food. Antibiotics, prescription urinary
              diets, cranberry products, and clinic culture kits
              are not shoppable hops. */}
          <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
            <div className="text-2xs font-bold uppercase tracking-eyebrow text-brand-primary mb-3">
              Shop the dog UTI hydration kit
            </div>
            <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
              These Amazon category searches match the on-page
              hydration and house-accident copy — a stainless-steel
              dog fountain, washable pee pads for accidents, and a
              weighted ceramic water bowl that stays put. Everyday
              physical supplies only. They are not a ranked product
              list, they are not antibiotics, they are not
              prescription urinary diets, they are not the dog water
              fountain or ceramic pet water bowl already hopped
              elsewhere, they are not the FLUTD cat hops, and they
              do not replace a veterinarian. Vets.co earns a
              commission on qualifying purchases at no extra cost
              to you. Empty Chewy buttons stay hidden.
            </p>
            <div className="flex flex-col gap-3">
              <ShopCtas
                amazonHref="/go/amazon-brand/stainless+steel+dog+fountain?s=health-urinary-tract-infection"
                amazonLabel="Browse stainless-steel dog fountains on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/washable+dog+pee+pads?s=health-urinary-tract-infection"
                amazonLabel="Browse washable dog pee pads on Amazon →"
              />
              <ShopCtas
                amazonHref="/go/amazon-brand/weighted+ceramic+dog+water+bowl?s=health-urinary-tract-infection"
                amazonLabel="Browse weighted ceramic dog water bowls on Amazon →"
              />
            </div>
          </div>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
