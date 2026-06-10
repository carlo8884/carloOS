import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, ArticleByline, EmailCapture, RelatedLinks, TableOfContents, ReviewCard, ScoreMethodology, AffiliateDisclosure } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'ferret-com',
  title: 'Ferret Weight Management — Body Condition Guide | Ferret.com',
  description:
    'How to read a ferret’s weight: body-condition scoring, the normal seasonal weight swing, telling healthy gain from illness, and the feeding errors behind both.',
  path: '/diet/weight-management',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'ferret-com',
  title: 'Ferret Weight Management',
  description:
    'A reference on assessing and managing ferret body condition, including the normal seasonal weight swing and when weight change signals illness.',
  url: 'https://ferret.com/diet/weight-management',
  imageUrl: '',
  authorName: 'Ferret.com Editorial',
  publishedAt: '2026-06-01T00:00:00Z',
  modifiedAt: '2026-06-01T00:00:00Z',
})

const med = buildMedicalWebPageSchema({
  name: 'Ferret Weight Management',
  description:
    'Reference on body condition and weight management for domestic ferrets.',
  url: 'https://ferret.com/diet/weight-management',
  authorName: 'Ferret.com Editorial',
  lastReviewed: '2026-06-01',
})
const combined = combineSchemas(schema, med)

export default function WeightManagementPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout
        siteId="ferret-com"
        hero={{
          title: 'Ferret Weight Management',
          subtitle:
            'Ferrets gain and lose weight on a seasonal cycle that alarms new owners and is usually completely normal. The skill is telling that healthy rhythm apart from the weight changes that signal a problem — and feeding in a way that keeps a ferret lean and muscular rather than soft or wasted.',
          category: 'Diet & Nutrition',
          authorName: 'Ferret.com Editorial',
          publishedAt: 'June 2026',
          readTime: '9 min',
        }}
        breadcrumbs={[
          { name: 'Home', href: '/' },
          { name: 'Diet', href: '/diet' },
          { name: 'Weight Management', href: '/diet/weight-management' },
        ]}
        sidebar={
          <>
            <TableOfContents
              items={[
                { label: 'The Seasonal Weight Swing', href: '#seasonal' },
                { label: 'Body-Condition Scoring', href: '#bcs' },
                { label: 'The Overweight Ferret', href: '#overweight' },
                { label: 'The Underweight Ferret', href: '#underweight' },
                { label: 'When Weight Change Means Illness', href: '#illness' },
                { label: 'Weighing & Tracking', href: '#tracking' },
                { label: 'A Scale for Tracking', href: '#picks' },
                { label: 'Sources', href: '#sources' },
              ]}
            />
            <RelatedLinks
              title="Related Guides"
              links={[
                { label: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
                { label: 'Kit vs Adult Feeding', href: '/diet/kit-vs-adult-feeding' },
                { label: 'Safe Treats', href: '/diet/safe-treats' },
                { label: 'Diet & Nutrition Hub', href: '/diet' },
              ]}
            />
            <EmailCapture
              variant="sidebar"
              siteId="ferret-com"
              title="Ferret Nutrition Notes"
              subtitle="Evidence-based ferret feeding, monthly."
              source="diet-weight-management"
            />
          </>
        }
      
        relatedLinks={[
          { title: 'Ferret Diet Hub', href: '/diet' },
          { title: 'Insulinoma', href: '/health/insulinoma' },
          { title: 'Senior Ferret Nutrition', href: '/diet/senior-ferret-nutrition' },
          { title: 'Protein & Fat Requirements', href: '/diet/protein-and-fat-requirements' },
        ]}
>
        <div className="carloOS-article">
          <ArticleByline
            siteName="Ferret.com Editorial"
            publishedAt="2026-06-01"
            updatedAt="2026-06-01"
            reviewedBy="Editorial team"
          />

          <h2 id="seasonal">The Seasonal Weight Swing</h2>
          <p>
            Intact and even many altered ferrets put on a noticeable layer of fat in autumn and shed it again in spring — a normal seasonal cycle tied to coat changes and daylight. A ferret can gain a substantial fraction of its body weight heading into winter and look distinctly rounder, then slim down as the days lengthen. New owners frequently mistake the autumn version for obesity and the spring version for illness; in a ferret that is otherwise bright, active, and eating well, this swing is expected. Knowing the cycle exists prevents both needless worry and the opposite error of dismissing a genuine problem as "just the season."
          </p>

          <h2 id="bcs">Body-Condition Scoring</h2>
          <p>
            More reliable than the scale alone is hands-on body-condition assessment. A ferret in good condition feels lean and muscular: you can feel the ribs and spine with a light covering of flesh over them, the body tapers to a defined waist behind the ribs, and there is no pendulous belly. In an underweight ferret the ribs, spine, and hip bones feel sharp and prominent with little muscle. In an overweight ferret the ribs are hard to feel under fat, the waist disappears, and the belly hangs. Because coat thickness hides a lot, run your hands along the body rather than judging by sight, especially during a coat change.
          </p>

          <h2 id="overweight">The Overweight Ferret</h2>
          <p>
            True obesity — distinct from seasonal fat — usually traces to one of a few causes: too many treats (especially sugary or fatty ones, see <a href="/diet/safe-treats">safe treats</a>), too little out-of-cage activity, or a diet mismatched to a sedentary ferret. The fix is rarely dramatic restriction, which can be risky in a species prone to hypoglycemia; instead, cut out non-meat and sugary treats, increase daily exercise and play, and ensure the base diet matches the ferret's activity level. Free-feeding usually continues, because ferrets self-regulate reasonably well — the lever is treat discipline and activity, not starvation.
          </p>

          <h2 id="underweight">The Underweight Ferret</h2>
          <p>
            A genuinely thin ferret — beyond the normal spring slim-down — deserves attention. Causes range from the benign (a picky eater on a marginal diet, competition in a multi-ferret household) to the serious (dental pain making eating difficult, or systemic disease). For a ferret that is simply lean on a poor diet, upgrading to a higher-protein, higher-fat formula within the standard window often helps (see <a href="/diet/protein-and-fat-requirements">protein and fat requirements</a>). But weight loss that is rapid, ongoing, or paired with other symptoms is a reason to see a vet, not to simply add food.
          </p>

          <h2 id="illness">When Weight Change Means Illness</h2>
          <p>
            Several common ferret diseases announce themselves through weight. Progressive weight loss despite a good appetite, or weight loss with lethargy and weakness, can accompany insulinoma, adrenal disease, lymphoma, or dental disease — all of which become more common with age (see <a href="/health/aging-ferret-care">aging ferret care</a>). The red flags are weight change that is rapid, sustained, out of season, or accompanied by other signs: lethargy, hind-end weakness, drooling or pawing at the mouth, hair loss, vomiting, or changes in drinking. Any of these warrant a veterinarian familiar with ferrets rather than a dietary tweak.
          </p>

          <h2 id="tracking">Weighing & Tracking</h2>
          <p>
            A simple kitchen or small-pet scale lets you track weight in grams, which is far more sensitive than judging by eye. Weighing every week or two and noting the trend turns a vague impression into data: a steady seasonal curve looks very different from a sudden drop, and having a baseline makes it easy to flag a meaningful change early. For a senior ferret or one with a known condition, regular weighing is one of the cheapest and most useful monitoring tools an owner has.
          </p>

          <AffiliateDisclosure variant="inline" siteId="ferret-com" />

          <h2 id="picks">A Scale for Tracking</h2>
          <p>
            Tracking weight in grams is far more sensitive than judging by eye, and it turns a vague impression into a trend line that flags a meaningful change early. A small digital kitchen or pet scale with a gram readout and a tare function is all you need. Documented-spec selection, not a hands-on test.
          </p>
          <ScoreMethodology />
          <ReviewCard
            id="digital-gram-scale"
            badge="Tracking Tool"
            name="Digital Gram Scale (Kitchen / Small-Pet)"
            subtitle="Gram-precision weighing with tare — catches trends a hand cannot"
            score={8.7}
            winner
            description={
              <p>A compact digital scale that reads in grams lets you weigh a ferret every week or two and log the trend. A tare function lets you zero out a small container or towel so a wriggly ferret stays put on the platform. For a senior ferret or one with a known condition, this is one of the cheapest and most useful monitoring tools an owner has — steady seasonal curves look very different from a sudden drop.</p>
            }
            specs={[
              { label: 'Units', value: 'Grams', highlight: 'good' },
              { label: 'Tare function', value: 'Yes', highlight: 'good' },
              { label: 'Capacity', value: '5 kg+ typical' },
              { label: 'Power', value: 'Battery' },
            ]}
            pros={['Gram precision catches small trends', 'Tare helps with a moving ferret', 'Inexpensive and long-lasting', 'Doubles as a kitchen scale']}
            cons={['Small platform — pair with a container', 'Cheap units vary in accuracy']}
            price="$10–20"
            ctaText="Find a Digital Gram Scale"
            ctaHref="/go/amazon-brand/digital+gram+scale+kitchen+pet?s=diet-weight-management"
            ctaAffiliateProgram="amazon-brand"
            ctaAffiliateProduct="digital-gram-scale"
          />

          <h2 id="sources">Sources</h2>
          <p>
            Seasonal weight cycling, body-condition assessment, and the association of weight change with insulinoma, adrenal disease, lymphoma, and dental disease are covered in Quesenberry KE and Carpenter JW (eds.), <em>Ferrets, Rabbits, and Rodents: Clinical Medicine and Surgery</em> (Saunders/Elsevier), and Carpenter JW, <em>Exotic Animal Formulary</em>. Locate primary publications by title.
          </p>
          <p className="text-sm text-brand-text-light">
            This page is general information, not individualized veterinary advice. Unexplained or rapid weight change should be evaluated by a veterinarian familiar with ferrets rather than addressed by diet alone.
          </p>
        </div>
      </ArticleLayout>
    </>
  )
}
