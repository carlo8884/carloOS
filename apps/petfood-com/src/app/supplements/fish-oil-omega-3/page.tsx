import type { Metadata } from 'next'
import {
  buildMetadata,
  buildArticleSchema,
  buildMedicalWebPageSchema,
  combineSchemas,
  ArticleLayout,
  TableOfContents,
  RelatedLinks,
  EmailCapture,
  ReviewCard,
  AffiliateDisclosure,
  ArticleSourcesList,
  ArticleByline
} from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'petfood-com',
  title: 'Fish Oil and Omega-3 Supplements for Pets | PetFood.com',
  description:
    'The evidence for EPA and DHA in joint, skin, kidney, and heart health, dosing and quality concerns, oxidation, and why plant omega-3 sources fall short.',
  path: '/supplements/fish-oil-omega-3',
  type: 'article',
})

const articleSchema = buildArticleSchema({
  siteId: 'petfood-com',
  title: 'Fish Oil and Omega-3 Supplements for Pets | PetFood.com',
  description:
    'The evidence for EPA and DHA in joint, skin, kidney, and heart health, dosing and quality concerns, oxidation, and why plant omega-3 sources fall short.',
  url: 'https://petfood.com/supplements/fish-oil-omega-3',
  imageUrl: '',
  authorName: 'PetFood.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const medicalSchema = buildMedicalWebPageSchema({
  name: 'Fish Oil and Omega-3 Supplements for Pets | PetFood.com',
  description:
    'The evidence for EPA and DHA in joint, skin, kidney, and heart health, dosing and quality concerns, oxidation, and why plant omega-3 sources fall short.',
  url: 'https://petfood.com/supplements/fish-oil-omega-3',
  authorName: 'PetFood.com Editorial',
  lastReviewed: '2026-06-01',
  medicalAudience: 'Caregiver',
})

const schema = combineSchemas(articleSchema, medicalSchema)

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
]

export default function FishOilOmega3Page() {
  return (
    <ArticleLayout
      siteId="petfood-com"
      contentType="nutrition"
      hero={{
        title: 'Fish Oil and Omega-3 Supplements',
        subtitle:
          'Fish oil is the pet supplement with the strongest evidence base, supported for joint comfort, skin and coat, and as an adjunct in kidney and heart disease. But not all omega-3 supplements are equal — the active forms are the marine EPA and DHA, dose matters, and oxidation is a real quality problem. This page covers the evidence, the dosing, and the pitfalls.',
        category: 'Supplement Reference',
        publishedAt: 'May 2026',
        readTime: '10 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Supplements', href: '/supplements' },
        { name: 'Fish Oil and Omega-3 Supplements', href: '/supplements/fish-oil-omega-3' },
      ]}
      relatedLinks={[
        { title: 'Supplements Hub', href: '/supplements' },
        { title: 'Probiotics for Pets', href: '/supplements/probiotics-for-pets' },
        { title: 'Glucosamine and Joint Support', href: '/supplements/glucosamine-and-joint-support' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'EPA and DHA', href: '#epadha' },
              { label: 'Evidence by Use', href: '#evidence' },
              { label: 'Why Marine, Not Plant', href: '#marine' },
              { label: 'Dosing', href: '#dosing' },
              { label: 'Quality and Oxidation', href: '#quality' },
              { label: 'Cautions', href: '#cautions' },
              { label: 'Where to Buy', href: '#buy' },
              { label: 'Sources', href: '#sources' },
            ]}
          />
          <RelatedLinks
            title="Related References"
            links={[
              { label: 'Joint and Mobility Diets', href: '/diets/joint-and-mobility-diets' },
              { label: 'Dietary Fat and Essential Fatty Acids', href: '/nutrition/dietary-fat-and-fatty-acids' },
              { label: 'Glucosamine and Joint Supplements', href: '/supplements/glucosamine-and-joint-support' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="petfood-com"
            title="Free Label Decoder"
            subtitle="One-page printable label decoder, plus our independent brand reviews as we publish them."
            source="fish-oil-omega-3"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <ArticleByline siteName="PetFood.com Editorial" publishedAt="2026-06-01T00:00:00Z" updatedAt="2026-06-01T00:00:00Z" reviewedBy="Editorial team" />
        <p>Fish oil supplies the long-chain omega-3 fatty acids eicosapentaenoic acid (EPA) and docosahexaenoic acid (DHA), which modulate inflammation and support several tissues. Among pet supplements, omega-3 fatty acids have some of the best-supported clinical evidence, and they are incorporated into many therapeutic diets for exactly this reason. See <a href="/nutrition/dietary-fat-and-fatty-acids">Dietary Fat and Essential Fatty Acids</a>.</p>
        <h2 id="epadha">EPA and DHA</h2>
        <p>EPA and DHA are the biologically active omega-3s. They shift the production of inflammatory mediators toward a less-inflammatory profile, which underlies their benefit in inflammatory and degenerative conditions. DHA also supports neural and retinal tissue, making it important in growth diets. The relevant figure on a supplement label is the combined EPA and DHA content, not the total fish-oil weight.</p>
        <h2 id="evidence">Evidence by Use</h2>
        <p>The strongest evidence is in canine osteoarthritis, where high-dose EPA and DHA improve comfort and weight-bearing in controlled studies; in skin and coat health, where omega-3s help inflammatory skin disease; and as an adjunct in chronic kidney disease, where they may slow progression. There is supporting evidence for cardiac benefit in some conditions. Claims for cognitive and other benefits are more preliminary. See <a href="/diets/joint-and-mobility-diets">Joint and Mobility Diets</a> and <a href="/diets/kidney-disease-diets">Kidney Disease Diets</a>.</p>
        <h2 id="marine">Why Marine, Not Plant</h2>
        <p>Plant omega-3 sources (flaxseed, chia) provide alpha-linolenic acid, which dogs and cats convert to EPA and DHA only inefficiently — and cats barely at all. To deliver meaningful EPA and DHA, the supplement should be marine-sourced: fish oil, krill oil, or algal oil (a vegetarian source of pre-formed DHA). Choosing a plant-based omega-3 supplement and expecting EPA/DHA effects is a common error. See <a href="/nutrition/dietary-fat-and-fatty-acids">Dietary Fat and Essential Fatty Acids</a>.</p>
        <h2 id="dosing">Dosing</h2>
        <p>Effective doses for therapeutic effect (such as for arthritis) are higher than the small amounts in most maintenance diets, and are calculated per body weight by the veterinarian. Because dose matters and the EPA/DHA content varies widely between products, the supplement should be chosen on its actual EPA/DHA per serving, and the dose set with the veterinarian rather than by the bottle&apos;s generic instruction. Over-dosing carries its own risks (see cautions).</p>
        <h2 id="quality">Quality and Oxidation</h2>
        <p>Fish oil oxidizes readily, and oxidized oil is not only ineffective but potentially harmful. Choose products with antioxidant protection (such as added vitamin E), buy quantities that will be used before they go rancid, store as directed (often refrigerated after opening), and discard any oil that smells strongly rancid. Third-party purity testing (for heavy metals and oxidation) is a quality signal. See <a href="/feeding/food-storage-and-safety">Pet Food Storage and Safety</a>.</p>
        <h2 id="cautions">Cautions</h2>
        <p>Omega-3s are generally safe but not risk-free at high doses: they can affect platelet function and bleeding, may cause gastrointestinal upset or diarrhea, add calories (relevant in weight management), and very high intakes can affect immune function and vitamin E status. Animals on medications or with bleeding disorders, and those near surgery, should be supplemented only with veterinary guidance. As with any supplement, more is not automatically better.</p>

        <h2 id="buy">Where to Buy</h2>
        <p>Marine omega-3 supplements are over-the-counter products, not prescription medications. The two picks below are widely available formats chosen on the criterion that matters most: stated EPA and DHA per serving, plus antioxidant protection against oxidation. Confirm the actual EPA/DHA dose with your veterinarian, especially for therapeutic use.</p>
        <AffiliateDisclosure variant="inline" siteId="petfood-com" />
        <ReviewCard
          id="nordic-naturals-omega3-pet"
          badge="Liquid Pump"
          badgeEmoji="🐟"
          name="Nordic Naturals Omega-3 Pet"
          subtitle="Marine fish oil with disclosed EPA/DHA per pump"
          score={9.0}
          winner
          description={
            <p>A widely used liquid marine fish oil for dogs and cats with EPA and DHA disclosed per serving and third-party purity testing. Liquid format makes per-weight dosing flexible, which matters because therapeutic doses are calculated by body weight. Buy quantities you will use before they oxidize and store as directed.</p>
          }
          specs={[
            { label: 'Source', value: 'Marine fish oil', highlight: 'good' },
            { label: 'EPA/DHA disclosed', value: 'Per serving', highlight: 'good' },
            { label: 'Format', value: 'Liquid pump' },
            { label: 'Purity testing', value: 'Third-party', highlight: 'good' },
          ]}
          pros={['Disclosed EPA/DHA per serving', 'Flexible weight-based dosing', 'Third-party purity tested']}
          cons={['Refrigerate after opening', 'Oxidizes if stored too long']}
          price="$20–35"
          ctaText="Find Nordic Naturals Omega-3 Pet"
          ctaHref="/go/chewy-brand/nordic-naturals-omega-3-pet?s=supplements-fish-oil-omega-3"
          ctaAffiliateProgram="chewy-brand"
          ctaAffiliateProduct="nordic-naturals-omega-3-pet"
        />
        <ReviewCard
          id="marine-omega-3-formats"
          badge="Algal / Fish Oil"
          badgeEmoji="🌊"
          name="Marine Omega-3 Supplements (Chew & Softgel)"
          subtitle="Fish-oil and algal-oil formats on the major retailers"
          score={8.0}
          description={
            <p>Beyond liquids, marine omega-3s come as softgels and soft chews, and as algal oil — a vegetarian source of pre-formed DHA useful when fish oil is not tolerated. The buying rule is the same across formats: choose on combined EPA and DHA per serving, not total oil weight, and prefer products with added vitamin E for oxidation protection.</p>
          }
          specs={[
            { label: 'Formats', value: 'Softgel / chew / algal' },
            { label: 'Algal (DHA) option', value: 'Available', highlight: 'good' },
            { label: 'Key label figure', value: 'Combined EPA+DHA', highlight: 'good' },
          ]}
          pros={['Multiple formats including algal DHA', 'Widely stocked', 'Good for picky or fish-intolerant pets']}
          cons={['EPA/DHA content varies widely between products', 'Read the label, not the front of the bottle']}
          price="$15–30"
          ctaText="Compare Omega-3 Supplements"
          ctaHref="/go/amazon-brand/pet+omega+3+fish+oil+epa+dha?s=supplements-fish-oil-omega-3"
          ctaAffiliateProgram="amazon-brand"
          ctaAffiliateProduct="pet+omega+3+fish+oil+epa+dha"
        />

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
