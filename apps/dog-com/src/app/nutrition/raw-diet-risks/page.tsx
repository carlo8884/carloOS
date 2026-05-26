import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Raw Dog Food Risks — What the Research Shows | Dog.com', description: 'Raw diets for dogs carry documented risks: Salmonella/Listeria contamination, nutritional imbalance, and public health concerns. What the peer-reviewed research shows.', path: '/nutrition/raw-diet-risks', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Raw Dog Food Risks', description: 'Salmonella contamination, nutritional imbalance, and public health risks in raw diets.', url: 'https://dog.com/nutrition/raw-diet-risks', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const medSchema = buildMedicalWebPageSchema({ name: 'Raw Dog Food Risks', description: 'Research-based analysis of raw diet risks for dogs.', url: 'https://dog.com/nutrition/raw-diet-risks', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, medSchema)

export default function RawDietRisksPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Raw Dog Food Risks — What the Research Shows', subtitle: 'Raw diets have a vocal following in the pet community. The peer-reviewed research from multiple veterinary and public health institutions is less enthusiastic. Here\'s an honest look at what the evidence actually says.', category: 'Dog Nutrition', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '8 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Nutrition', href: '/nutrition' }, { name: 'Raw Diet Risks', href: '/nutrition/raw-diet-risks' }]}
        sidebar={<>
          <div className="bg-brand-danger/5 border border-brand-danger/20 rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-danger mb-2">Position Statements</div>
            <p className="text-xs text-brand-text-mid leading-relaxed m-0">The AVMA, AAHA, WSAVA, and CDC have all published statements recommending against raw meat-based diets due to contamination and nutritional risks.</p>
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'WSAVA Guidelines', href: '/nutrition/wsava-explained' }, { label: 'Best Dry Dog Food', href: '/reviews/best-dry-dog-food' }, { label: 'Toxic Foods Guide', href: '/nutrition/toxic-foods' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="nutrition-raw-risks" />
        </>}
      >
        <div className="carloOS-article">
          <h2>The Pathogen Contamination Evidence</h2>
          <p>Multiple peer-reviewed studies have found high rates of pathogen contamination in commercial raw dog food products. A 2018 study in PLOS ONE tested 35 commercial raw dog food products and found Listeria monocytogenes in 32%, Salmonella in 7%, and E. coli in 100%. A 2020 Dutch study found Salmonella in 80% of raw dog food products tested. The FDA has issued multiple recalls of raw pet food products for Salmonella and Listeria contamination.</p>
          <p>Dogs fed raw diets shed Salmonella in their feces at significantly higher rates than dogs fed commercial processed diets — this is a documented public health concern for household members, particularly immunocompromised individuals, children under 5, and the elderly. The CDC has investigated multiple Salmonella outbreaks linked to raw pet food.</p>

          <h2>Nutritional Imbalance</h2>
          <p>Commercial processed dog foods meeting AAFCO nutrient profiles or substantiated by feeding trials provide nutritionally complete and balanced nutrition by regulatory definition. Homemade raw diets frequently do not. Studies analyzing homemade raw diet recipes have found significant deficiencies or excesses in calcium, phosphorus, zinc, vitamin D, and other nutrients.</p>
          <p>Even among commercial raw foods, WSAVA compliance (employing board-certified nutritionists, conducting feeding trials) is rare — most raw food companies do not publish nutritional research, do not employ credentialed nutritionists, and have not conducted AAFCO feeding trials. This represents a lower standard of nutritional verification than is applied to major commercial kibble brands.</p>

          <h2>Proponents' Arguments and the Evidence</h2>
          <p>Common claims in favor of raw diets and the evidence for each:</p>
          <ul>
            <li><strong>"Dogs evolved to eat raw meat."</strong> Dogs are not wolves — they have been domesticated for 15,000+ years and have evolved significant digestive adaptations to starch-based diets, including multiple copies of the amylase gene. The evolutionary argument does not hold up to scrutiny.</li>
            <li><strong>"Cooking destroys nutrients."</strong> Processing does affect some heat-labile nutrients, but commercial processing accounts for this nutritionally. The finished product meets nutrient profiles. This is not a meaningful argument for the superiority of raw over cooked commercial food.</li>
            <li><strong>"My dog's coat improved on raw."</strong> Coat improvement often attributed to raw diets may be due to higher fat content (which improves coat quality in any food, not specifically raw) or correction of a previous nutritional deficiency. High-fat commercial foods and omega-3 supplementation achieve the same effect.</li>
            <li><strong>"My dog lives on it with no problems."</strong> Individual anecdote does not establish safety at population level. Salmonella contamination causes subclinical infection in many dogs without obvious illness while still being shed in feces.</li>
          </ul>

          <h2>If You Choose to Feed Raw</h2>
          <p>Some owners will feed raw diets regardless of professional guidance. If you do: use commercially prepared raw that has been HPP (high-pressure pasteurized) treated — this significantly reduces pathogen load. Store and handle separately from human food. Wash all surfaces, bowls, and hands thoroughly after contact. Do not feed raw to dogs that visit immunocompromised people. Have nutritional adequacy verified by a board-certified veterinary nutritionist (depts.washington.edu/petdiets provides referrals) — do not formulate your own raw diet from online recipes without professional oversight.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
