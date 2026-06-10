import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, CalloutBox, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Reading Ferret Food Labels — Ingredient Panels Decoded | Ferret.com',
  description:
    'How to read a ferret food label: the ingredient split, the guaranteed analysis, carbohydrate by difference, the dry-matter conversion, and red-flag ingredients.',
  path: '/diet/reading-food-labels',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Reading Ferret Food Labels',
  description:
    'A practical guide to interpreting ferret-food ingredient panels and guaranteed-analysis numbers, including the dry-matter conversion and carbohydrate by difference.',
  url: 'https://ferret.com/diet/reading-food-labels',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Reading Ferret Food Labels',
  description:
    'Reference on interpreting ferret-food ingredient panels and guaranteed analysis for an obligate carnivore.',
  url: 'https://ferret.com/diet/reading-food-labels',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function ReadingFoodLabelsPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Reading Ferret Food Labels',
          subtitle:
            "The front of a ferret-food bag is marketing; the back is where the truth is. Learning to read the ingredient split and the guaranteed analysis — and to convert those numbers to a dry-matter basis — turns you from a shopper who trusts the label's claims into one who can judge a food in under a minute at the shelf.",
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Reading Food Labels', href: '/diet/reading-food-labels' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'Why the Label Matters', href: '#why' },
                { label: 'The Ingredient List', href: '#ingredients' },
                { label: 'The Guaranteed Analysis', href: '#guaranteed' },
                { label: 'Dry-Matter Basis', href: '#dry-matter' },
                { label: 'Carbohydrate by Difference', href: '#carbs' },
                { label: 'Red-Flag Ingredients', href: '#red-flags' },
                { label: 'A Clean-Panel Example', href: '#picks' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Choosing a Ferret Kibble', href: '/diet/best-ferret-kibble' },
                { label: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
                { label: 'Transitioning Foods', href: '/diet/transitioning-foods' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-reading-labels"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
          { title: 'Best Ferret Kibble', href: '/diet/best-ferret-kibble' },
          { title: 'Supplements & Vitamins', href: '/diet/supplements-and-vitamins' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="why">Why the Label Matters</h2>
          <p>
            Ferrets are obligate carnivores with a short gut and a roughly
            three-hour transit time, which means they need a diet built almost
            entirely on animal protein and fat with very little carbohydrate.
            The front of a bag will happily call a food &quot;premium ferret
            formula&quot; while the back reveals a grain-heavy, plant-protein
            product. The label is the only objective way to judge a food, so
            learning to read it is the highest-leverage skill in ferret
            nutrition. This page pairs naturally with our{' '}
            <a href="/diet/best-ferret-kibble">guide to choosing a ferret kibble</a>.
          </p>

          <h2 id="ingredients">The Ingredient List</h2>
          <p>
            Ingredients are listed by weight before cooking, heaviest first.
            That ordering rule is the key to spotting marketing tricks.
          </p>
          <ul>
            <li>
              <strong>Animal protein should lead.</strong> The first one or two
              ingredients should be named animal proteins — chicken, turkey,
              lamb, or a named meal such as chicken meal. A generic
              &quot;meat&quot; or &quot;animal&quot; descriptor is a lower-quality
              signal.
            </li>
            <li>
              <strong>Watch for ingredient splitting.</strong> A manufacturer
              can list &quot;ground corn&quot;, &quot;corn gluten&quot;, and
              &quot;corn bran&quot; separately so that no single corn entry tops
              the list — even though the combined corn content might outweigh the
              meat. Mentally recombine split ingredients.
            </li>
            <li>
              <strong>Fresh meat versus meal.</strong> Fresh meat is heavy
              because it is mostly water, so it can sit high on the list while
              contributing less dry protein than a meal listed below it. Neither
              is automatically better; both can belong in a good food.
            </li>
            <li>
              <strong>Plant proteins are a red flag.</strong> Pea protein, corn
              gluten, and potato protein boost the crude-protein number on the
              guaranteed analysis without delivering the amino-acid profile an
              obligate carnivore needs.
            </li>
          </ul>

          <h2 id="guaranteed">The Guaranteed Analysis</h2>
          <p>
            The guaranteed analysis lists crude protein, crude fat, crude fiber,
            and moisture as percentages. These are the numbers you compare against
            the published ferret targets in our{' '}
            <a href="/diet/protein-and-fat-requirements">protein and fat requirements guide</a>.
            But there is a catch: the percentages are on an as-fed basis, which
            includes the water in the food, so two foods with different moisture
            content cannot be compared directly.
          </p>

          <h2 id="dry-matter">Dry-Matter Basis</h2>
          <p>
            To compare foods fairly, convert each nutrient to a dry-matter basis
            — what the food contains with the water removed. The method:
          </p>
          <ol>
            <li>Subtract the moisture percentage from 100 to get the dry-matter percentage.</li>
            <li>Divide the nutrient percentage by the dry-matter percentage.</li>
            <li>Multiply by 100.</li>
          </ol>
          <p>
            For example, a kibble listing 36% crude protein at 10% moisture has a
            dry-matter percentage of 90, so its dry-matter protein is
            36 ÷ 90 × 100 = 40%. The same conversion lets you compare a moist food
            against a dry one without being fooled by water weight.
          </p>
          <CalloutBox variant="tip" title="Why this matters for ferrets">
            <p>
              Ferret nutrient targets in the veterinary literature are usually
              quoted on a dry-matter basis. If you compare an as-fed label number
              directly against a dry-matter target, you will systematically
              undersell a higher-moisture food. Always convert first.
            </p>
          </CalloutBox>

          <h2 id="carbs">Carbohydrate by Difference</h2>
          <p>
            Pet-food labels almost never list carbohydrate, but you can estimate
            it. Add the percentages for protein, fat, fiber, moisture, and ash
            (ash is roughly 6-8% if not listed), then subtract the total from 100.
            What remains is the carbohydrate by difference. For an obligate
            carnivore you want this number low — ferret diets aim for carbohydrate
            well under 10% on a dry-matter basis, and lower is better. A high
            estimated carbohydrate is one of the clearest signals that a food was
            built around grain rather than meat.
          </p>

          <h2 id="red-flags">Red-Flag Ingredients</h2>
          <ul>
            <li><strong>Corn, wheat, rice, or other grains high on the list</strong> — cheap calories an obligate carnivore cannot use well.</li>
            <li><strong>Plant proteins inflating the protein number</strong> — pea, potato, and corn gluten proteins.</li>
            <li><strong>Added sugars</strong> — molasses, cane sugar, corn syrup, and fruit-derived sweeteners. Chronic sugar intake is associated with the carbohydrate load that ferret owners try to minimize.</li>
            <li><strong>Vague descriptors</strong> — &quot;meat by-products&quot; or &quot;animal digest&quot; without a named species.</li>
          </ul>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <h2 id="picks">A Clean-Panel Example</h2>
          <p>
            To see what a panel that passes all the checks above looks like, here is one commercial diet whose published ingredient list reads as named animal proteins with no grain or plant-protein filler. Included on its documented panel as a worked example, not a hands-on test — apply the same reading method to any food you consider.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="wysong-epigen-90"
            badge="Clean Panel"
            name="Wysong Epigen 90"
            subtitle="Named-meat panel, no grain, single-digit carbohydrate by difference"
            score={9.1}
            winner
            description={
              <p>A worked example of a panel that survives every check on this page: animal proteins lead, there is no grain or plant-protein concentrate splitting the list, no added sugar, and the carbohydrate-by-difference estimate lands in the single digits. Read it as a template for what a good ferret panel looks like, then hold any other bag to the same standard using the method above.</p>
            }
            specs={[
              { label: 'Leading ingredients', value: 'Named meats', highlight: 'good' },
              { label: 'Grain', value: 'None', highlight: 'good' },
              { label: 'Added sugar', value: 'None', highlight: 'good' },
              { label: 'Carbohydrate by difference', value: 'Single digits', highlight: 'good' },
            ]}
            pros={['Named-meat ingredient panel', 'No grain or plant-protein filler', 'No added sugar', 'Clear worked example of a clean label']}
            cons={['Premium price', 'Not always stocked at supermarket pet aisles']}
            price="$30–50 / 5 lb"
            ctaText="Find Wysong Epigen 90"
            ctaHref="/go/wysong/epigen-90?s=diet-reading-food-labels"
            ctaAffiliateProgram="wysong"
            ctaAffiliateProduct="epigen-90"
          />

          <h2 id="sources">Sources</h2>
          <p>
            Ferret macronutrient targets, the dry-matter conversion, and the
            carbohydrate-by-difference method are drawn from Quesenberry KE and
            Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical
            Medicine and Surgery</em> (Saunders/Elsevier), and from the{' '}
            <em>Veterinary Clinics of North America: Exotic Animal Practice</em>{' '}
            literature on ferret nutrition. Pet-food labeling conventions follow
            standard AAFCO ingredient and guaranteed-analysis rules. Locate
            primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general nutrition information, not individualized
            veterinary advice. A ferret with insulinoma or another condition
            should have diet changes supervised by a veterinarian familiar with
            ferrets.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
