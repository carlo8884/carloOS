import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Hydrolyzed and Novel-Protein Diets for Pets | PetFood.com',
  description:
    'How hydrolyzed and novel-protein therapeutic diets work for food allergy and GI disease, molecular weight and efficacy, and why they are veterinary products.',
  path: '/diets/hydrolyzed-protein-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Hydrolyzed and Novel-Protein Diets for Pets | PetFood.com',
  description:
    'How hydrolyzed and novel-protein therapeutic diets work for food allergy and GI disease, molecular weight and efficacy, and why they are veterinary products.',
  url: 'https://petfood.com/diets/hydrolyzed-protein-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function HydrolyzedProteinDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Hydrolyzed and Novel-Protein Diets',
        subtitle:
          "Hydrolyzed and novel-protein diets are the therapeutic backbone of food-allergy and food-responsive gastrointestinal management. They work by either shrinking the protein below the immune system's recognition threshold or presenting a protein the animal has never encountered. This page explains the mechanisms, the molecular-weight question, and why they are veterinary-channel products.",
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets' },
        { name: 'Hydrolyzed and Novel-Protein Diets', href: '/diets/hydrolyzed-protein-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The Two Strategies', href: '#strategies' },
              { label: 'How Hydrolysis Works', href: '#hydrolysis' },
              { label: 'Molecular Weight and Efficacy', href: '#mw' },
              { label: 'Novel Proteins', href: '#novel' },
              { label: 'Uses Beyond Allergy', href: '#beyond' },
              { label: 'Why Veterinary-Channel', href: '#vetchannel' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Food Allergy and Elimination Diets', href: '/diets/food-allergy-and-elimination-diets' },
              { label: 'Animal Protein Sources', href: '/ingredients/animal-protein-sources' },
              { label: 'Limited-Ingredient Diets Myth', href: '/myths/limited-ingredient-diet-myth' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="hydrolyzed-protein-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>When dietary protein drives disease — through allergic skin disease or food-responsive enteropathy — two therapeutic strategies remove the offending antigen. The first hydrolyzes the protein into fragments too small to provoke an immune response; the second uses a protein the individual has never eaten, so no sensitization exists. Both are central to the elimination-diet approach and to managing dietary-antigen-driven gut disease. See <a href="/diets/food-allergy-and-elimination-diets">Food Allergy and Elimination Diets</a>.</p>
        <h2 id="strategies">The Two Strategies</h2>
        <p>Hydrolyzed diets are made from a conventional protein (such as soy or chicken liver) broken down enzymatically into small peptides. Novel-protein diets use an intact but unusual protein (venison, rabbit, kangaroo, duck, or insect). Hydrolyzed diets have the advantage that they do not depend on finding a protein the animal has truly never seen — increasingly difficult as exotic proteins enter mainstream foods and treats.</p>
        <h2 id="hydrolysis">How Hydrolysis Works</h2>
        <p>The immune system recognizes proteins by their three-dimensional shape and by linear segments of a certain size. Hydrolysis cleaves the protein into peptides below the size the immune system typically recognizes, reducing the likelihood of an allergic response. The process does not change the amino-acid content, so the diet remains nutritionally complete, but it can reduce palatability for some animals. See <a href="/ingredients/animal-protein-sources">Animal Protein Sources</a>.</p>
        <h2 id="mw">Molecular Weight and Efficacy</h2>
        <p>The degree of hydrolysis matters. Standard hydrolyzed diets reduce protein to a moderate peptide size adequate for many patients; extensively hydrolyzed diets, with very low molecular weight (often below 1 kilodalton, with substantial free amino acids), are used when a standard hydrolyzed diet has failed to control signs. The clinician escalates to a more extensively hydrolyzed product when the first does not resolve the disease.</p>
        <h2 id="novel">Novel Proteins</h2>
        <p>A novel protein works only if it is genuinely novel for that individual, which requires a careful diet history. Cross-contamination is a real risk in non-therapeutic novel-protein products, where the same equipment runs common proteins; veterinary therapeutic novel-protein diets are manufactured to minimize this. Insect protein is an emerging novel option with the advantage that almost no dog or cat has prior exposure. See <a href="/myths/limited-ingredient-diet-myth">Limited-Ingredient Diets Myth</a>.</p>
        <h2 id="beyond">Uses Beyond Allergy</h2>
        <p>Beyond cutaneous food allergy, these diets manage food-responsive enteropathy — a subset of chronic gastrointestinal disease that resolves with a controlled antigen diet rather than medication. Identifying food-responsive cases through a diet trial spares the animal long-term drug therapy, which is one reason a hydrolyzed or novel-protein trial is part of the GI work-up. See <a href="/diets/fiber-and-digestive-health">Fiber and Digestive Health Diets</a>.</p>
        <h2 id="vetchannel">Why Veterinary-Channel</h2>
        <p>Hydrolyzed and true elimination novel-protein diets are sold through veterinarians because their correct use depends on diagnosis, on strict adherence during the trial, and on manufacturing control to avoid antigen contamination. Using them without veterinary guidance — feeding treats alongside, or choosing an OTC product with hidden proteins — defeats their diagnostic and therapeutic purpose.</p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
          <li>American Animal Hospital Association (AAHA) and American College of Veterinary Internal Medicine (ACVIM) consensus statements and nutrition guidelines, as applicable to the condition.</li>
        </ul>
        <p style={{ fontSize: '13px', color: 'var(--brand-text-light)', marginTop: '24px' }}>
          PetFood.com is reference material. We do not provide individualized veterinary advice.
          Therapeutic diets, diagnosed disease, and breed-specific nutritional concerns require a
          licensed veterinarian and, where indicated, a board-certified veterinary nutritionist.
        </p>
      </div>
    </ArticleLayout>
  )
}
