import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Raw Diet Risks for Dogs — Salmonella, Nutritional Imbalance & WSAVA Position | Dog.com', description: 'Raw diets carry Salmonella risk to dogs and humans, nutritional imbalance concerns, and are not recommended by WSAVA. The evidence-based case for and against raw feeding.', path: '/nutrition/raw-diet-risks', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Raw Diet Risks for Dogs', description: 'Salmonella contamination, nutritional imbalance, and WSAVA position on raw dog food diets.', url: 'https://dog.com/nutrition/raw-diet-risks', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Raw Diet Risks for Dogs', description: 'Evidence-based assessment of risks associated with raw dog food diets.', url: 'https://dog.com/nutrition/raw-diet-risks', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function RawDietRisksPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Raw Diet Risks for Dogs', subtitle: 'Raw diets — whether commercial frozen raw, freeze-dried raw, or home-prepared — are popular with a subset of dog owners who believe they are more biologically appropriate. Veterinary nutritionists and the WSAVA do not recommend them. This page presents what the evidence actually shows — both concerns and context.', category: 'Dog Nutrition', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '9 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Raw Diet Risks', href: '/nutrition/raw-diet-risks' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">WSAVA Position</div>
            <p className="text-xs text-brand-text-mid leading-relaxed m-0">The World Small Animal Veterinary Association does not recommend raw animal-based diets due to documented pathogen risks to pets and pet owners, nutritional imbalances in home-prepared raw diets, and absence of feeding trial data for commercial raw products.</p>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'WSAVA Explained', href: '/nutrition/wsava-explained' }, { label: 'Best Dry Dog Food', href: '/reviews/best-dry-dog-food' }, { label: 'Prescription Diets', href: '/nutrition/prescription-diets' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Nutrition Tips" subtitle="Evidence-based guidance weekly." source="nutrition-raw-risks" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Pathogen Contamination — The Primary Concern</h2>
          <p>Multiple published studies have found Salmonella, Listeria, Campylobacter, and other pathogenic bacteria in commercial and home-prepared raw dog foods at rates significantly higher than in cooked commercial foods. A 2018 study in Vet Record tested 35 commercial raw dog food products — 86% tested positive for Enterobacteriaceae, 80% for generic E. coli, 54% for Listeria species, and 23% for Salmonella. These pathogens can cause disease in the dog and can be shed in the dog's feces and saliva — creating exposure routes for human household members.</p>
          <p>The zoonotic risk is particularly significant for: immunocompromised people (chemotherapy patients, HIV/AIDS patients, transplant recipients), elderly household members, young children (who may have contact with the dog's mouth and feces), and pregnant women. For households with any of these individuals, the CDC and AVMA advise against feeding raw meat to pets for this reason.</p>
          <p>Dogs can also become clinically ill from raw food pathogens — Salmonella infections from raw food are documented in veterinary literature. Subclinical carriers shed organisms without showing illness. The fact that a dog "looks fine" on a raw diet does not confirm absence of pathogen carriage.</p>

          <h2>Nutritional Imbalance — Particularly in Home-Prepared Diets</h2>
          <p>The majority of home-prepared raw diets are nutritionally unbalanced. Published analyses of owner-formulated raw diets have found widespread deficiencies — particularly calcium (when bone is not included or included in wrong proportions), zinc, manganese, iodine, and several vitamins. A study of 95 home-prepared raw diet recipes found that 60% had multiple nutritional deficiencies or excesses sufficient to cause health problems with long-term feeding.</p>
          <p>This does not mean a balanced raw diet is impossible — it means it requires veterinary nutritionist formulation, not improvisation. A board-certified veterinary nutritionist (DACVN) can formulate a complete and balanced raw diet appropriate for an individual dog. DIY raw diets constructed from internet recipes or books without nutritionist involvement carry significant risk of long-term nutritional disease.</p>
          <p>Commercial raw foods are not equivalent to home-prepared in nutritional terms — many commercial frozen raw products do meet AAFCO nutritional profiles. However, most commercial raw products have not been feeding-trial tested — they meet the nutritional profile on paper through formulation, not through the more rigorous feeding trial standard.</p>

          <h2>Bone Safety</h2>
          <p>Raw meaty bones are included in many raw feeding protocols as a calcium source and dental health measure. The dental benefits of raw bones (mechanical abrasion) are real and are supported by some evidence. The risks: fractured teeth (especially from weight-bearing bones like femurs and marrow bones — called "recreational bones" — which are too hard for safe chewing), esophageal and gastrointestinal obstruction, and intestinal perforation from bone fragments. Recreational bones (large weight-bearing bones) are the primary fracture risk; softer raw bones (chicken backs, necks) carry lower fracture risk but still carry obstruction and perforation risk. The AVMA and most veterinary dentists advise against recreational bones.</p>

          <h2>Who Raw Feeding May Be Appropriate For</h2>
          <p>The evidence does not support raw diets as categorically superior to high-quality commercial diets. However, some dogs with specific conditions — certain inflammatory bowel diseases, food hypersensitivities requiring truly novel protein sources not available in commercial diets — may benefit from a carefully formulated raw diet under veterinary nutritionist guidance. The decision should be made in consultation with a veterinarian and ideally a DACVN, with full understanding of the pathogen handling protocols required (separate food preparation surfaces, dedicated utensils, hand hygiene after handling raw food and the dog).</p>
        </div>
      </ArticleLayout>
    </>
  )
}
