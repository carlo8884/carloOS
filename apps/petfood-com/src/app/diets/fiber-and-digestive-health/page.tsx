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

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Fiber and Digestive Health Diets for Pets | PetFood.com',
  description:
    'How fiber type and GI diets manage diarrhea, constipation, IBD, and colitis — soluble vs insoluble fiber, prebiotics, digestibility, and fat level.',
  path: '/diets/fiber-and-digestive-health',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Fiber and Digestive Health Diets for Pets | PetFood.com',
  description:
    'How fiber type and gastrointestinal diets manage diarrhea, constipation, IBD, and colitis — soluble vs insoluble fiber, prebiotics, digestibility, and fat level.',
  url: 'https://petfood.com/diets/fiber-and-digestive-health',
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
      label: "AAHA/ACVIM Consensus Guidelines — applicable condition-specific nutrition and management",
      url: "https://www.aaha.org/veterinary-resources/guidelines/",
      publisher: "American Animal Hospital Association / American College of Veterinary Internal Medicine",
    },
]

export default function FiberAndDigestiveHealthPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Fiber and Digestive Health Diets',
        subtitle:
          'Gastrointestinal therapeutic diets are among the most-used veterinary diets, because digestive upset is one of the most common reasons pets visit the clinic. The tools are highly digestible ingredients, adjusted fat, and — above all — carefully chosen fiber. This page explains how fiber type drives the effect and how GI diets manage diarrhea, constipation, and inflammatory bowel disease.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '11 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets', href: '/diets' },
        { name: 'Fiber and Digestive Health Diets', href: '/diets/fiber-and-digestive-health' },
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
              { label: 'Fiber Types', href: '#fibertypes' },
              { label: 'Highly Digestible GI Diets', href: '#digestible' },
              { label: 'Diarrhea and Colitis', href: '#diarrhea' },
              { label: 'Constipation and Megacolon', href: '#constipation' },
              { label: 'Inflammatory Bowel Disease', href: '#ibd' },
              { label: 'Prebiotics and the Microbiome', href: '#prebiotics' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Carbohydrates in Pet Food', href: '/nutrition/carbohydrates-in-pet-food' },
              { label: 'Probiotics for Pets', href: '/supplements/probiotics-for-pets' },
              { label: 'Hydrolyzed and Novel-Protein Diets', href: '/diets/hydrolyzed-protein-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="fiber-and-digestive-health"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <p>Fiber is the indigestible carbohydrate fraction of the diet, and its functional effects depend on type. Gastrointestinal therapeutic diets manipulate fiber, fat, and ingredient digestibility to manage a wide range of digestive disorders. The same nutritional category can be tuned in opposite directions — a low-residue highly digestible diet for one problem, a high-fiber bulking diet for another — which is why GI diets are matched to the specific disorder.</p>
        <h2 id="fibertypes">Fiber Types — Soluble vs Insoluble</h2>
        <p>Insoluble fiber (cellulose, many vegetable fibers) adds bulk, speeds transit in constipation, and firms stool. Soluble and fermentable fibers (beet pulp, psyllium, inulin, fructooligosaccharides) absorb water, slow transit, and feed colonic bacteria that produce short-chain fatty acids nourishing the gut lining. Many GI diets use a blend tuned to the disorder. See <a href="/nutrition/carbohydrates-in-pet-food">Carbohydrates in Pet Food</a>.</p>
        <h2 id="digestible">Highly Digestible GI Diets</h2>
        <p>For acute and many chronic digestive upsets, a highly digestible, low-residue diet reduces the workload on an inflamed gut: high-quality protein, easily digested carbohydrate, moderated fat, and modest fiber so that more nutrient is absorbed in the small intestine and less reaches the colon. These diets are the workhorses of GI management and are often the first dietary step in vomiting and diarrhea cases once a diet trial is indicated.</p>
        <h2 id="diarrhea">Diarrhea and Colitis</h2>
        <p>Large-bowel diarrhea and colitis (inflammation of the colon) often respond to added fermentable fiber, which normalizes colonic motility and feeds beneficial bacteria. Small-bowel diarrhea more often calls for a highly digestible, moderate-fat diet. Because fat maldigestion worsens some diarrheas, fat level is a key lever. Persistent or bloody diarrhea requires veterinary diagnosis before a diet is chosen.</p>
        <h2 id="constipation">Constipation and Megacolon</h2>
        <p>Constipation, common in older cats and in cats with megacolon, is managed with increased dietary fiber to add bulk and stimulate motility, alongside aggressive hydration. In some cats a low-residue diet that produces less stool volume is preferred over a high-fiber approach, depending on the severity — illustrating again that fiber strategy is individualized. Adequate water intake is essential. See <a href="/nutrition/water-and-hydration">Water and Hydration</a>.</p>
        <h2 id="ibd">Inflammatory Bowel Disease</h2>
        <p>Inflammatory bowel disease (IBD) is chronic gut inflammation managed with diet and, often, medication. Dietary approaches include highly digestible diets, novel-protein or hydrolyzed diets (since dietary antigen drives some cases), and fiber adjustment. A subset of IBD cases respond to diet alone (food-responsive enteropathy), which is why a controlled diet trial is part of the work-up. See <a href="/diets/hydrolyzed-protein-diets">Hydrolyzed and Novel-Protein Diets</a>.</p>
        <h2 id="prebiotics">Prebiotics and the Microbiome</h2>
        <p>Prebiotics are fermentable fibers (such as fructooligosaccharides and inulin) that selectively feed beneficial gut bacteria, and many GI diets include them. The gut microbiome is increasingly recognized as central to digestive and immune health, and dietary fiber is the primary lever owners have to shape it. Probiotic supplements are a separate, complementary tool. See <a href="/supplements/probiotics-for-pets">Probiotics for Pets</a>.</p>

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
