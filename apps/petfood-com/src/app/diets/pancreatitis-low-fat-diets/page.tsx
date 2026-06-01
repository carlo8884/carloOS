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
  title: 'Pancreatitis and Low-Fat Diets for Dogs and Cats | PetFood.com',
  description:
    'Why dietary fat matters in pancreatitis, the difference between canine and feline disease, low-fat diet targets, treat discipline, and managing recurrence.',
  path: '/diets/pancreatitis-low-fat-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Pancreatitis and Low-Fat Diets for Dogs and Cats | PetFood.com',
  description:
    'Why dietary fat matters in pancreatitis, the difference between canine and feline disease, low-fat diet targets, treat discipline, and managing recurrence.',
  url: 'https://petfood.com/diets/pancreatitis-low-fat-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function PancreatitisLowFatDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Pancreatitis and Low-Fat Diets',
        subtitle:
          'Pancreatitis is painful, sometimes life-threatening, and strongly linked to dietary fat in dogs. Long-term management hinges on a low-fat diet and the discipline to keep high-fat treats and scraps out of reach. The feline picture differs. This page covers the fat connection, the species split, and how to read fat content for a pancreatitis-prone animal.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets' },
        { name: 'Pancreatitis and Low-Fat Diets', href: '/diets/pancreatitis-low-fat-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What Pancreatitis Is', href: '#whatis' },
              { label: 'The Fat Connection in Dogs', href: '#dogfat' },
              { label: 'Feline Pancreatitis', href: '#feline' },
              { label: 'Low-Fat Diet Targets', href: '#targets' },
              { label: 'Treats and Scraps', href: '#treats' },
              { label: 'Managing Recurrence', href: '#recurrence' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Dietary Fat and Essential Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
              { label: 'The Guaranteed Analysis Explained', href: '/nutrition/guaranteed-analysis-explained' },
              { label: 'Treats and the 10 Percent Rule', href: '/feeding/treats-and-the-ten-percent-rule' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="pancreatitis-low-fat-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Pancreatitis is inflammation of the pancreas, in which digestive enzymes activate prematurely and damage the organ. It ranges from mild and self-limiting to severe and fatal. In dogs it is frequently triggered by a high-fat meal — the classic case follows a holiday when the dog ate fatty table food — and dietary fat management is central to prevention. The condition can become chronic and recurrent, making long-term diet a priority.</p>
        <h2 id="whatis">What Pancreatitis Is</h2>
        <p>The pancreas produces digestive enzymes and insulin. In pancreatitis, enzyme activation within the gland causes inflammation, pain, vomiting, and in severe cases systemic illness. Acute pancreatitis requires immediate veterinary care; chronic or recurrent pancreatitis is managed largely through diet. Repeated episodes can damage the pancreas enough to cause diabetes or exocrine pancreatic insufficiency.</p>
        <h2 id="dogfat">The Fat Connection in Dogs</h2>
        <p>Dietary fat strongly stimulates pancreatic secretion, and high-fat meals are a well-documented trigger for canine pancreatitis, especially in predisposed breeds such as Miniature Schnauzers (often associated with high blood triglycerides). For dogs with a history of pancreatitis, a sustained low-fat diet reduces the risk of recurrence. Fat must be controlled not only in the main diet but across every treat and table scrap. See <a href="/nutrition/dietary-fat-and-fatty-acids">Dietary Fat and Essential Fatty Acids</a>.</p>
        <h2 id="feline">Feline Pancreatitis</h2>
        <p>Feline pancreatitis is less clearly linked to dietary fat than the canine form, and cats often have concurrent inflammatory bowel disease and liver inflammation (the triad). Severe fat restriction is generally less central in cats, and the priority is often maintaining intake to avoid hepatic lipidosis. Feline pancreatitis management is highly individualized and centers on supportive care and the concurrent conditions.</p>
        <h2 id="targets">Low-Fat Diet Targets</h2>
        <p>Therapeutic low-fat diets for dogs are formulated well below the fat content of typical maintenance foods. Because guaranteed-analysis fat is reported as-fed and as a minimum, the meaningful comparison is fat grams per 1000 kcal on a measured basis, which a veterinarian or the manufacturer can provide. A diet that looks low-fat by percentage can still be fat-dense per calorie, so the per-energy figure is what matters. See <a href="/nutrition/guaranteed-analysis-explained">The Guaranteed Analysis Explained</a>.</p>
        <h2 id="treats">Treats and Scraps</h2>
        <p>For a pancreatitis-prone dog, the diet is only as low-fat as the least-disciplined treat. A single fatty indulgence can trigger an episode, so treats must be low-fat, table scraps eliminated, and the whole household informed. Low-fat treat options include small amounts of the dog&apos;s own kibble, plain cooked lean foods approved by the veterinarian, and commercial low-fat treats. See <a href="/feeding/treats-and-the-ten-percent-rule">Treats and the 10 Percent Rule</a>.</p>
        <h2 id="recurrence">Managing Recurrence</h2>
        <p>Chronic pancreatitis is managed by maintaining a consistent low-fat diet indefinitely, controlling body weight, and avoiding dietary indiscretion. Dogs with high blood triglycerides may need additional management. Recurrent or severe disease should be monitored by a veterinarian, who can confirm the diagnosis (pancreas-specific lipase testing and imaging) and set the long-term fat target appropriate to the individual.</p>

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
