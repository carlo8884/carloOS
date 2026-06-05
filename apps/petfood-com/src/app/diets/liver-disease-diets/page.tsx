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
  title: 'Liver (Hepatic) Disease Diets for Dogs and Cats | PetFood.com',
  description:
    'How hepatic diets support the diseased liver — protein quality and hepatic encephalopathy, copper restriction, antioxidants, and the feline anorexia risk.',
  path: '/diets/liver-disease-diets',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Liver (Hepatic) Disease Diets for Dogs and Cats | PetFood.com',
  description:
    'How hepatic diets support the diseased liver — protein quality and hepatic encephalopathy, copper restriction, antioxidants, and the feline anorexia risk.',
  url: 'https://petfood.com/diets/liver-disease-diets',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function LiverDiseaseDietsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Liver Disease Diets',
        subtitle:
          'The liver is central to metabolism, and liver disease demands a careful nutritional balance — enough high-quality protein to support regeneration without overwhelming a compromised organ, plus management of copper, antioxidants, and (in cats) the ever-present risk of anorexia. This page covers the principles of hepatic nutrition and why they are tightly disease-specific.',
        category: 'Condition-Specific Diet',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Diets', href: '/diets' },
        { name: 'Liver Disease Diets', href: '/diets/liver-disease-diets' },
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
              { label: 'The Liver in Nutrition', href: '#liver' },
              { label: 'Protein and Encephalopathy', href: '#protein' },
              { label: 'Copper-Associated Disease', href: '#copper' },
              { label: 'Antioxidants and Support', href: '#antioxidants' },
              { label: 'The Feline Anorexia Risk', href: '#feline' },
              { label: 'Individualizing the Diet', href: '#individual' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Minerals in Pet Food', href: '/nutrition/minerals-in-pet-food' },
              { label: 'Dietary Protein Requirements', href: '/nutrition/dietary-protein-requirements' },
              { label: 'Pancreatitis and Low-Fat Diets', href: '/diets/pancreatitis-low-fat-diets' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="liver-disease-diets"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <p>The liver processes nutrients, synthesizes proteins, detoxifies metabolic waste, and stores vitamins and minerals. Liver disease ranges from copper-associated hepatopathy and chronic hepatitis to portosystemic shunts and hepatic lipidosis, and the dietary needs differ by diagnosis. The shared goals are to support hepatic regeneration, minimize the buildup of toxins the failing liver cannot clear, and maintain adequate intake and body condition.</p>
        <h2 id="liver">The Liver in Nutrition</h2>
        <p>Because the liver is so metabolically central, its disease affects protein metabolism, ammonia handling, copper storage, vitamin status, and energy balance. Unlike some organ-failure diets, hepatic diets generally do not severely restrict protein — the liver needs protein to regenerate — but they emphasize protein quality and may moderate quantity only when specific complications arise.</p>
        <h2 id="protein">Protein and Hepatic Encephalopathy</h2>
        <p>In advanced liver disease or portosystemic shunts, the liver cannot clear ammonia from protein metabolism, and ammonia accumulation causes hepatic encephalopathy (neurological signs). For these patients, protein is moderated and shifted toward highly digestible, plant- and dairy-based sources that produce less ammonia, alongside medical management. For most other liver patients, adequate high-quality protein is maintained, because excessive restriction impairs recovery.</p>
        <h2 id="copper">Copper-Associated Disease</h2>
        <p>Some dogs accumulate copper in the liver, causing progressive damage — a problem with a strong breed predisposition in Bedlington Terriers, Labrador Retrievers, Dobermans, and others. Management includes copper-restricted diets and avoidance of copper-rich foods and supplements. Rising dietary copper levels in commercial foods have drawn recent scrutiny for this reason. Hepatic therapeutic diets are formulated low in copper. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="antioxidants">Antioxidants and Support</h2>
        <p>Liver disease generates oxidative stress, so hepatic diets and supportive supplements often emphasize antioxidants — vitamin E, S-adenosylmethionine (SAMe), silybin (milk thistle), and zinc. Adequate B-vitamins and, in some cases, L-carnitine are also supported. These are used under veterinary direction as part of a hepatic-support protocol rather than as routine wellness additions.</p>
        <h2 id="feline">The Feline Anorexia Risk</h2>
        <p>In cats, the overriding nutritional priority in liver disease is preventing anorexia. A cat that stops eating, especially an overweight cat, can develop hepatic lipidosis — fat accumulation in the liver — which is itself a life-threatening liver disease. Maintaining caloric intake, by assisted or tube feeding if necessary, can take precedence over feeding the theoretically ideal hepatic diet. Palatability and intake are paramount in feline hepatic care.</p>
        <h2 id="individual">Individualizing the Diet</h2>
        <p>Because liver disease is so varied, there is no single hepatic diet that fits every patient — the plan depends on the specific diagnosis, the presence of encephalopathy or copper accumulation, the species, and the animal&apos;s appetite. Hepatic nutrition must be directed by the veterinarian managing the case, with monitoring of liver values and body condition over time.</p>

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
