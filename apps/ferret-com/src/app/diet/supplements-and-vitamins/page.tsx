import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Supplements & Vitamins — What Helps, What to Skip | Ferret.com',
  description:
    'Which ferret supplements are useful, which are redundant on a complete diet, and which warrant caution: fatty-acid coat supplements, the hairball-paste debate, and over-supplementation risks.',
  path: '/diet/supplements-and-vitamins',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Supplements & Vitamins',
  description:
    'A reference on ferret supplements: fatty-acid coat supplements, hairball pastes, and the supplements to approach with caution, framed against a complete base diet.',
  url: 'https://ferret.com/diet/supplements-and-vitamins',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferret Supplements & Vitamins',
  description:
    'Reference on dietary supplements for domestic ferrets and when they are warranted.',
  url: 'https://ferret.com/diet/supplements-and-vitamins',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function SupplementsAndVitaminsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Supplements & Vitamins',
          subtitle:
            'The honest headline: a ferret on a complete, appropriate diet needs very few supplements, and several popular products do more for the owner’s peace of mind than for the ferret. This page sorts the genuinely useful from the redundant from the ones that warrant real caution.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          authorAvatar: '🦦',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Supplements & Vitamins', href: '/diet/supplements-and-vitamins' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Default: A Complete Diet', href: '#default' },
                { label: 'Fatty-Acid / Coat Supplements', href: '#fatty-acid' },
                { label: 'The Hairball-Paste Debate', href: '#hairball' },
                { label: 'Vitamins & Minerals', href: '#vitamins' },
                { label: 'Supplements That Warrant Caution', href: '#caution' },
                { label: 'When a Vet Recommends One', href: '#vet' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
                { label: 'Safe Treats', href: '/diet/safe-treats' },
                { label: 'Raw Feeding Guide', href: '/diet/raw-feeding-guide' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-supplements-and-vitamins"
            />
          </>
        }
      >
        <div className="carloOS-article">
          <h2 id="default">The Default: A Complete Diet Needs Little</h2>
          <p>
            A reputable commercial ferret kibble or a correctly balanced raw/whole-prey diet is formulated to supply complete nutrition, including taurine and the vitamin and mineral spread a ferret needs. For a healthy adult on such a diet, routine supplementation is generally unnecessary and can even be counterproductive — fat-soluble vitamins in particular accumulate, so "more" is not safer. Treat supplements as targeted tools for specific situations, not as daily insurance. If a diet is so marginal that it needs propping up with supplements, the better fix is usually a better base diet (see <a href="/diet/protein-and-fat-requirements">protein and fat requirements</a>).
          </p>

          <h2 id="fatty-acid">Fatty-Acid / Coat Supplements</h2>
          <p>
            The most commonly used and most defensible supplement category is the fatty-acid coat supplement — typically a fish- or animal-oil product marketed for skin and coat. These are palatable, ferrets generally love them, and they can help a dull coat or dry skin, especially seasonally during a coat change. Because they are high-value and tasty, they double as effective training and bonding rewards. The caveat is calories: these oils are energy-dense, so use modest amounts and count them against the day's intake rather than adding them freely on top.
          </p>

          <h2 id="hairball">The Hairball-Paste Debate</h2>
          <p>
            Hairball / "laxative" pastes (commonly petrolatum- or malt-based) are widely sold for ferrets, who do shed and groom and can develop gastrointestinal hairball obstructions — a genuine risk, particularly during seasonal coat changes. They are palatable and many keepers use them prophylactically a few times a week during shedding season. The debate centers on petrolatum-based products: some keepers and clinicians prefer to limit them or favor alternative formulations, and there is no universal consensus. What is <em>not</em> debated is that a paste does not substitute for management — regular grooming during a coat change and prompt veterinary attention for any ferret that stops eating, strains, or vomits are the real defenses against obstruction.
          </p>

          <h2 id="vitamins">Vitamins & Minerals</h2>
          <p>
            Broad multivitamin supplementation is rarely indicated for a ferret on a complete diet and carries a real downside: oversupplementing fat-soluble vitamins (A, D, E, K) can cause toxicity, and excess vitamin A in particular is a documented concern in carnivores. Raw feeders should be especially careful here, because over-feeding liver already pushes vitamin A high (see <a href="/diet/raw-feeding-guide">raw feeding guide</a>); adding a multivitamin on top compounds the risk. Single-nutrient supplements should be used only to correct a specific, identified deficiency under veterinary guidance.
          </p>

          <h2 id="caution">Supplements That Warrant Caution</h2>
          <ul>
            <li><strong>High-dose multivitamins</strong> — risk of fat-soluble vitamin toxicity; rarely needed.</li>
            <li><strong>Sugary "vitamin" pastes and gels</strong> — many palatable pastes are sweetened, reintroducing the carbohydrate load you are trying to minimize.</li>
            <li><strong>Calcium supplements</strong> for raw feeders — calcium balance should come from correctly proportioned edible bone, not a guessed-at powder; mis-dosing either way is harmful.</li>
            <li><strong>Human supplements</strong> — formulations and concentrations are not designed for a ~1–2 lb carnivore and should not be improvised.</li>
          </ul>

          <h2 id="vet">When a Vet Recommends One</h2>
          <p>
            There are real, condition-specific reasons a veterinarian may prescribe a supplement — supporting an ill or recovering ferret, addressing a confirmed deficiency, or supporting a ferret with a chronic disease. In those cases follow the veterinary recommendation precisely, including the product and amount specified. The principle is simply that supplements should answer a defined need identified by someone who has examined the animal, not a vague wish to do something extra.
          </p>

          <h2 id="sources">Sources</h2>
          <p>
            Nutritional adequacy of complete diets and the risks of fat-soluble vitamin oversupplementation are discussed in Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and Carpenter JW, <em>Exotic Animal Formulary</em>. Hairball-obstruction risk and seasonal coat-change management are covered in the same references. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information, not individualized veterinary advice, and contains no dosing instructions. Any supplement for a specific ferret should be selected and dosed by a veterinarian familiar with ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
