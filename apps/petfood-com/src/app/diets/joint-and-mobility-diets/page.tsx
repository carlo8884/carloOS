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
  title: 'Joint and Mobility Diets for Dogs and Cats | PetFood.com',
  description:
    'How mobility diets support osteoarthritis — the strong evidence for weight control and omega-3s, the weaker evidence for glucosamine, and what to expect.',
  path: '/diets/joint-and-mobility-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Joint and Mobility Diets for Dogs and Cats | PetFood.com',
  description:
    'How mobility diets support osteoarthritis — the strong evidence for weight control and omega-3s, the weaker evidence for glucosamine, and what to expect.',
  url: 'https://petfood.com/diets/joint-and-mobility-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function JointAndMobilityDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Joint and Mobility Diets',
        subtitle:
          'Osteoarthritis is extremely common in older dogs and underdiagnosed in cats, and diet is a genuine tool for managing it — though the evidence is strongest for the least-marketed interventions. Weight control and marine omega-3s have solid support; glucosamine and chondroitin have weaker evidence. This page sorts the mobility-diet claims by the strength of their evidence.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets' },
        { name: 'Joint and Mobility Diets', href: '/diets/joint-and-mobility-diets' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'Osteoarthritis in Pets', href: '#oa' },
              { label: 'Weight — The Strongest Lever', href: '#weight' },
              { label: 'Omega-3 Fatty Acids', href: '#omega3' },
              { label: 'Glucosamine and Chondroitin', href: '#glucosamine' },
              { label: 'Other Ingredients', href: '#other' },
              { label: 'Realistic Expectations', href: '#expectations' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Fish Oil and Omega-3 Supplements', href: '/supplements/fish-oil-omega-3' },
              { label: 'Glucosamine and Joint Supplements', href: '/supplements/glucosamine-and-joint-support' },
              { label: 'Weight-Management Diets', href: '/diets/weight-management-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="joint-and-mobility-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Osteoarthritis (degenerative joint disease) causes cartilage breakdown, joint inflammation, pain, and reduced mobility. It affects a large share of older dogs and is increasingly recognized in cats, where it is easy to miss. Mobility diets and joint supplements are a major commercial category, but the evidence behind the various components varies widely, and the most effective intervention is also the most basic.</p>
        <h2 id="oa">Osteoarthritis in Pets</h2>
        <p>Arthritis management is multimodal: weight control, pain medication where indicated, controlled exercise, physical rehabilitation, and nutritional support. Diet contributes through two well-supported mechanisms — reducing the mechanical load on joints via weight loss, and reducing joint inflammation via omega-3 fatty acids — plus several less-proven additives.</p>
        <h2 id="weight">Weight — The Strongest Lever</h2>
        <p>Excess weight increases joint loading and is itself pro-inflammatory, and weight loss in overweight arthritic dogs produces measurable improvement in lameness — in some studies, weight loss alone improved mobility before any other treatment. This is the single most effective dietary intervention for arthritis, and it is free of cost beyond feeding less. See <a href="/diets/weight-management-diets">Weight-Management Diets</a> and <a href="/feeding/body-condition-scoring">Body Condition Scoring</a>.</p>
        <h2 id="omega3">Omega-3 Fatty Acids</h2>
        <p>Marine-sourced EPA and DHA reduce the production of inflammatory mediators in the joint, and multiple controlled studies support diets enriched with high levels of fish-oil omega-3s for improving comfort and weight-bearing in arthritic dogs. Therapeutic mobility diets deliver EPA and DHA at levels well above ordinary maintenance foods. This is the best-supported active dietary ingredient for joints. See <a href="/supplements/fish-oil-omega-3">Fish Oil and Omega-3 Supplements</a>.</p>
        <h2 id="glucosamine">Glucosamine and Chondroitin</h2>
        <p>Glucosamine and chondroitin sulfate are the most-marketed joint supplements, but the clinical evidence in dogs and cats is mixed and generally weaker than for weight control and omega-3s. They appear safe and may help some animals, and they are commonly included in mobility diets and supplements, but they should not be expected to substitute for weight management or veterinary pain control. See <a href="/supplements/glucosamine-and-joint-support">Glucosamine and Joint Supplements</a>.</p>
        <h2 id="other">Other Ingredients</h2>
        <p>Mobility diets may add green-lipped mussel (a natural omega-3 and glycosaminoglycan source with some supporting evidence), antioxidants, and specific amino acids or botanicals. Evidence for these ranges from modest to preliminary. As a rule, the more a product leans on proprietary blends rather than the well-supported basics, the more skeptical the buyer should be.</p>
        <h2 id="expectations">Realistic Expectations</h2>
        <p>Diet and supplements support joint comfort but do not regrow cartilage or cure arthritis. They are part of a multimodal plan that, for most animals with clinical disease, also includes weight management and veterinary-directed pain control. Set expectations accordingly, give interventions adequate time (weeks to months for omega-3 effects), and reassess with the veterinarian rather than stacking unproven supplements.</p>

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
