import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  CrossPortfolioCard,
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Antioxidants and Functional Nutrients in Pet Food | PetFood.com',
  description:
    'What antioxidants, postbiotics, and functional nutrients do in pet diets — the evidence for vitamin E, selenium, and carotenoids, and reading claims.',
  path: '/nutrition/antioxidants-and-functional-nutrients',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Antioxidants and Functional Nutrients in Pet Food | PetFood.com',
  description:
    'What antioxidants, postbiotics, and functional nutrients do in pet diets, the evidence for vitamin E, selenium, and carotenoids, and how to read functional claims.',
  url: 'https://petfood.com/nutrition/antioxidants-and-functional-nutrients',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

export default function AntioxidantsAndFunctionalNutrientsPage() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Antioxidants and Functional Nutrients',
        subtitle:
          'Beyond the essential nutrients, pet diets increasingly market functional ingredients — antioxidants, nutraceuticals, and additives claimed to support immunity, cognition, or aging. Some have genuine evidence; many are marketing. This page covers the antioxidants with real roles and how to judge functional claims against the evidence.',
        category: 'Nutrition Fundamentals',
        publishedAt: 'May 2026',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition' },
        { name: 'Antioxidants and Functional Nutrients', href: '/nutrition/antioxidants-and-functional-nutrients' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'What Antioxidants Do', href: '#antioxidants' },
              { label: 'Vitamin E and Selenium', href: '#vitamineselenium' },
              { label: 'Carotenoids and Polyphenols', href: '#carotenoids' },
              { label: 'Functional Claims', href: '#functional' },
              { label: 'Cognitive Support', href: '#cognitive' },
              { label: 'Judging the Evidence', href: '#judging' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Vitamins in Pet Food', href: '/nutrition/vitamins-in-pet-food' },
              { label: 'Senior Pet Diets', href: '/diets/senior-pet-diets' },
              { label: 'Glucosamine and Joint Supplements', href: '/supplements/glucosamine-and-joint-support' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="antioxidants-and-functional-nutrients"
          />
          <CrossPortfolioCard currentSite="petfood-com" contentType="nutrition" variant="sidebar" />
        </>
      }
    >
      <div className="carloOS-article">
        <p>Oxidative stress — damage from reactive oxygen species — contributes to aging and disease, and antioxidants are nutrients and compounds that neutralize it. Several antioxidants are essential nutrients with established roles in pet diets, while a growing class of functional ingredients makes broader claims with variable evidence. Separating the established from the speculative is the goal here. See <a href="/nutrition/vitamins-in-pet-food">Vitamins in Pet Food</a>.</p>
        <h2 id="antioxidants">What Antioxidants Do</h2>
        <p>Antioxidants protect cells and dietary fats from oxidative damage, and the body uses a network of them — some made internally, some dietary. In pet food they serve two purposes: protecting the food itself from rancidity (as preservatives) and supporting the animal&apos;s own antioxidant defenses. The most important dietary antioxidants are vitamin E, selenium, vitamin C, and a range of plant compounds. See <a href="/ingredients/preservatives-pet-food">Preservatives in Pet Food</a>.</p>
        <h2 id="vitamineselenium">Vitamin E and Selenium</h2>
        <p>Vitamin E is the principal lipid-phase antioxidant and an essential nutrient with an AAFCO minimum; it protects cell membranes and dietary fats, and works synergistically with selenium, a trace mineral cofactor for antioxidant enzymes. Both are established essential nutrients, not optional add-ons, and a complete diet supplies them. Their antioxidant role is well-founded, unlike many marketed functional claims. See <a href="/nutrition/minerals-in-pet-food">Minerals in Pet Food</a>.</p>
        <h2 id="carotenoids">Carotenoids and Polyphenols</h2>
        <p>Plant-derived antioxidants — carotenoids (beta-carotene, lutein), polyphenols, and flavonoids from fruits and vegetables — are added to many diets for antioxidant support. They have plausible benefits and some supporting research, though the evidence for specific health outcomes in dogs and cats is generally less robust than for the essential antioxidants. Note that cats cannot convert beta-carotene to vitamin A. These are reasonable inclusions but not proven cures. See <a href="/species/dog-vs-cat-nutrition-overview">Dog vs Cat Nutrition</a>.</p>
        <h2 id="functional">Functional Claims</h2>
        <p>Functional or nutraceutical claims — immune support, joint support, calming, skin and coat, cognitive — vary enormously in evidence. Some, like marine omega-3s for joints and skin, are well-supported; others rest on preliminary or marketing-driven evidence. The presence of a functional ingredient on the label does not guarantee an effective dose or a proven benefit. Evaluate the specific active ingredient and dose. See <a href="/supplements/glucosamine-and-joint-support">Glucosamine and Joint Supplements</a>.</p>
        <h2 id="cognitive">Cognitive Support</h2>
        <p>Diets for canine cognitive dysfunction (an age-related decline resembling dementia) have some of the better functional-nutrient evidence: antioxidant-enriched diets and those with medium-chain triglycerides (an alternative brain energy source) have shown benefit in studies for older dogs. This is a case where a functional dietary approach is supported for a defined condition, used under veterinary guidance. See <a href="/diets/senior-pet-diets">Senior Pet Diets</a>.</p>
        <h2 id="judging">Judging the Evidence</h2>
        <p>To judge functional claims: prefer ingredients with published, ideally independent, evidence in dogs or cats for the specific claim (omega-3s, certain cognitive diets); be skeptical of proprietary blends that obscure the dose; recognize that a complete diet already supplies the essential antioxidants; and discuss functional-diet choices for a medical condition with the veterinarian. Established essential nutrients are the foundation; functional add-ons are evaluated case by case. See <a href="/supplements/multivitamins-for-pets">Multivitamins for Pets</a>.</p>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>Association of American Feed Control Officials. <em>2025 AAFCO Official Publication</em> — Dog and Cat Food Nutrient Profiles (Chapter 4); ingredient definitions and Model Regulations for Pet Food (Chapter 6).</li>
          <li>National Research Council. <em>Nutrient Requirements of Dogs and Cats.</em> National Academies Press, 2006 — the authoritative species-specific nutrient-requirement reference underlying the AAFCO profiles.</li>
          <li>World Small Animal Veterinary Association (WSAVA) Global Nutrition Committee. <em>Global Nutrition Guidelines</em> and <em>Recommendations on Selecting Pet Foods</em> owner handout.</li>
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
