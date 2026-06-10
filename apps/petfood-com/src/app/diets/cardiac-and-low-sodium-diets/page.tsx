import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'
import { ArticleMasthead } from '../../../components/ArticleMasthead'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Cardiac (Heart) and Low-Sodium Diets for Pets | PetFood.com',
  description:
    'How diet supports heart disease — sodium restriction by disease stage, protein and muscle preservation, taurine, omega-3s, and maintaining appetite.',
  path: '/diets/cardiac-and-low-sodium-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Cardiac (Heart) and Low-Sodium Diets for Pets | PetFood.com',
  description:
    'How diet supports heart disease — sodium restriction by disease stage, protein and muscle preservation, taurine, omega-3s, and maintaining appetite.',
  url: 'https://petfood.com/diets/cardiac-and-low-sodium-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const SOURCES = [
    {
      label: "AAFCO Official Publication — Dog and Cat Food Nutrient Profiles (Ch. 4); Model Regulations for Pet Food (Ch. 6)",
      url: "https://www.aafco.org/resources/publications/",
      publisher: "Association of American Feed Control Officials, 2025",
    },
    {
      label: "Nutrient Requirements of Dogs and Cats",
      url: "https://nap.nationalacademies.org/catalog/10668/nutrient-requirements-of-dogs-and-cats",
      publisher: "National Research Council, National Academies Press, 2006",
    },
    {
      label: "WSAVA Global Nutrition Guidelines and Recommendations on Selecting Pet Foods",
      url: "https://wsava.org/committees/global-nutrition-committee/",
      publisher: "World Small Animal Veterinary Association Global Nutrition Committee",
    },
    {
      label: "FDA Investigation: Potential Link Between Certain Diets and Canine Dilated Cardiomyopathy",
      url: "https://www.fda.gov/animal-veterinary/news-events/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy",
      publisher: "U.S. Food and Drug Administration, Center for Veterinary Medicine",
    },
]

export default function CardiacAndLowSodiumDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Cardiac and Low-Sodium Diets',
        subtitle:
          'Heart disease is common in older dogs and cats, and diet is a meaningful adjunct to medical management — chiefly through sodium control, but also protein preservation, taurine, and omega-3s. The right approach depends on the stage of disease, and the perennial challenge is keeping a cardiac patient eating. This page covers the principles of cardiac nutrition.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets', href: '/diets' },
        { name: 'Cardiac and Low-Sodium Diets', href: '/diets/cardiac-and-low-sodium-diets' },
      ]}
      relatedLinks={[
        { title: 'Diets Hub', href: '/diets' },
        { title: 'Kidney Disease Diets', href: '/diets/kidney-disease-diets' },
        { title: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
        { title: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Diet in Heart Disease', href: '#role' },
              { label: 'Sodium by Stage', href: '#sodium' },
              { label: 'Protein and Muscle', href: '#protein' },
              { label: 'Taurine and Carnitine', href: '#taurine' },
              { label: 'Omega-3 Fatty Acids', href: '#omega3' },
              { label: 'Keeping Them Eating', href: '#appetite' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Taurine and Amino Acids', href: '/nutrition/taurine-and-amino-acids' },
              { label: 'Fish Oil and Omega-3 Supplements', href: '/supplements/fish-oil-omega-3' },
              { label: 'Grain-Free and DCM Risk', href: '/ingredients/grain-free-dcm-risk' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="cardiac-and-low-sodium-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <ArticleMasthead
          manifestKey="petfood-com:category-conditions"
          alt="A therapeutic cardiac pet-food bag photographed in clinical light"
          eyebrow="Condition-Specific Diet"
          priority
        />
        <p>Cardiac disease — degenerative valve disease and dilated cardiomyopathy in dogs, and various conditions in cats — is managed primarily with medication, but diet supports management and helps counter the muscle loss (cardiac cachexia) that accompanies advanced heart failure. The classic dietary lever is sodium, but cardiac nutrition is more than salt restriction, and it must be staged to the disease and individualized. See <a href="/nutrition/taurine-and-amino-acids">Taurine and Amino Acids</a>.</p>
        <h2 id="role">Diet in Heart Disease</h2>
        <p>Diet in heart disease aims to reduce fluid-retention pressures (via sodium control), preserve lean muscle against cardiac cachexia, ensure adequate taurine and other heart-relevant nutrients, reduce inflammation with omega-3s, and above all maintain caloric intake. It complements, never replaces, cardiac medication and veterinary management. The plan changes as the disease progresses.</p>
        <h2 id="sodium">Sodium by Stage</h2>
        <p>Sodium restriction reduces fluid retention in heart failure, but the degree of restriction is tied to disease stage. In early, asymptomatic heart disease, severe restriction is unnecessary and avoiding very high-sodium foods and treats suffices; in advanced congestive heart failure, more meaningful sodium restriction is used alongside medication. Over-restricting too early can backfire by reducing palatability and activating fluid-retaining hormones, so sodium targets are set by the veterinarian per stage. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="protein">Protein and Muscle</h2>
        <p>Cardiac cachexia — the loss of lean muscle in heart failure — worsens outcomes, so adequate high-quality protein is important and protein should not be over-restricted in cardiac patients (unless concurrent kidney disease dictates otherwise). Preserving muscle supports strength and survival. This is a shift from older thinking and aligns with maintaining protein in most cardiac patients. See <a href="/nutrition/dietary-protein-requirements">Dietary Protein Requirements</a>.</p>
        <h2 id="taurine">Taurine and Carnitine</h2>
        <p>Taurine deficiency causes dilated cardiomyopathy in cats (an essential dietary nutrient for them) and in certain dog breeds, and taurine and L-carnitine supplementation are part of management when deficiency or a responsive cardiomyopathy is identified. The diet-associated DCM investigation in dogs has kept taurine status central to the cardiac work-up. Taurine and carnitine are used under veterinary direction based on testing and disease type. See <a href="/ingredients/grain-free-dcm-risk">Grain-Free and DCM Risk</a>.</p>
        <h2 id="omega3">Omega-3 Fatty Acids</h2>
        <p>Marine omega-3 fatty acids (EPA and DHA) have evidence in cardiac patients for reducing inflammation, helping counter cachexia, and supporting against arrhythmias, and cardiac therapeutic diets and fish-oil supplementation are commonly used. As elsewhere, the marine pre-formed forms matter, and dosing is set with the veterinarian. See <a href="/supplements/fish-oil-omega-3">Fish Oil and Omega-3 Supplements</a>.</p>
        <h2 id="appetite">Keeping Them Eating</h2>
        <p>Inappetence is a major challenge in heart failure, and a cardiac patient that stops eating loses muscle and misses medication often hidden in food. Palatability frequently trumps the theoretically ideal sodium target — a slightly higher-sodium food the animal will eat can be better than an ideal one it refuses. Maintaining intake, with warming, variety, and veterinary guidance, is a priority. See <a href="/diets/senior-pet-diets">Senior Pet Diets</a>.</p>

        <ArticleSourcesList sources={SOURCES} />
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
