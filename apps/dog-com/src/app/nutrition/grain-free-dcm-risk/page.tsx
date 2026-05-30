import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Grain-Free Dog Food | Dog.com',
  description: 'The FDA investigated a link between grain-free diets and dilated cardiomyopathy (DCM) in dogs. This guide explains what the data shows.',
  path: '/nutrition/grain-free-dcm-risk',
  category: 'Nutrition Science',
  type: 'article',
})

const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Grain-Free Dog Food & DCM Risk',
  description: 'What the FDA investigation into grain-free diets and DCM actually found — and what to feed instead.',
  url: 'https://dog.com/nutrition/grain-free-dcm-risk',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2025-05-01T00:00:00Z',
})

export default function GrainFreeDCMPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      hero={{
        title: 'Grain-Free Dog Food & DCM Risk — What the FDA Actually Found',
        subtitle: 'The FDA\'s investigation into dilated cardiomyopathy (DCM) and grain-free diets produced concerning findings that most dog food marketing ignores. Here\'s what the data actually shows.',
        category: 'Nutrition Science',
        authorName: 'Dog.com Editorial',
        authorAvatar: '🐾',
        publishedAt: 'May 2025',
        readTime: '9 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Nutrition', href: '/nutrition' },
        { name: 'Grain-Free & DCM', href: '/nutrition/grain-free-dcm-risk' },
      ]}
      schema={schema}
      sidebar={<>
        <RelatedLinks title="Related Guides" links={[
          { label: 'Best Dry Dog Food 2025', href: '/reviews/best-dry-dog-food' },
          { label: 'WSAVA Guidelines Explained', href: '/nutrition/wsava-explained' },
          { label: 'Find a Cardiologist', href: '/find-a-vet' },
        ]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance every Tuesday." source="nutrition-grain-free" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />

        <p className="text-lg text-brand-text-mid leading-relaxed italic mb-6">
          <strong className="not-italic">TL;DR.</strong> The FDA investigated more than 500 reports of dilated cardiomyopathy (DCM) in dogs eating grain-free diets, most with peas, lentils, or potatoes as primary ingredients. The link is an association, not proven causation — but most veterinary cardiologists now recommend avoiding high-legume grain-free formulas. Switch to a WSAVA-compliant brand (Royal Canin, Purina Pro Plan, Hill&apos;s) unless your vet directs otherwise.
        </p>

        <h2>What Is DCM?</h2>
        <p>Dilated cardiomyopathy (DCM) is a disease of the heart muscle in which the heart chambers enlarge and the heart&apos;s ability to pump blood weakens. It is one of the most serious heart diseases in dogs — large and giant breeds are predisposed, but DCM can occur in any breed. Untreated DCM leads to congestive heart failure. The condition is typically considered genetic in predisposed breeds.</p>
        <p>What made the <a href="https://www.fda.gov/animal-veterinary/animal-health-literacy/fda-investigation-potential-link-between-certain-diets-and-canine-dilated-cardiomyopathy" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FDA</a> investigation significant was the apparent emergence of DCM in breeds not historically predisposed — including Golden Retrievers, Labradors, and other medium-to-large breeds — in dogs eating grain-free diets. This suggested a dietary rather than genetic cause.</p>

        <h2>What the FDA Found</h2>
        <p>Between January 2014 and April 2019, the FDA received over 500 reports of DCM in dogs, many in breeds not genetically predisposed. The investigation identified a pattern: the majority of affected dogs were eating grain-free diets — specifically diets with high legume content (peas, lentils, chickpeas, or potatoes as primary ingredients).</p>
        <p>Key findings from the FDA investigation:</p>
        <ul>
          <li>16 brands of food were identified in 10 or more cases. All were grain-free. The top reported brands included Acana, Zignature, Taste of the Wild, 4Health, Earthborn Holistic, Blue Buffalo, Nature&apos;s Domain, Fromm, Merrick, California Natural, Natural Balance, and Orijen.</li>
          <li>Golden Retrievers were disproportionately represented — 95 Golden Retriever DCM cases reported to FDA, far more than expected given breed population</li>
          <li>A subset of affected dogs had low blood taurine levels — suggesting a taurine metabolism issue potentially related to the legume-heavy diets</li>
          <li>Some dogs recovered cardiac function when switched off grain-free diets and supplemented with taurine</li>
        </ul>

        <div style={{ background: 'rgba(200,149,42,0.06)', border: '1px solid rgba(200,149,42,0.18)', borderRadius: '10px', padding: '18px 22px', margin: '24px 0' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--brand-warning)', marginBottom: '8px' }}>Important Caveat</div>
          <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>The FDA investigation was not a controlled study — it was a passive surveillance report. It established an association between grain-free diets and DCM, not causation. The exact mechanism is not fully understood. However, the association is consistent enough that most veterinary cardiologists now recommend avoiding high-legume grain-free diets unless there is a documented medical reason to use them.</p>
        </div>

        <h2>What Mechanisms Are Proposed?</h2>
        <p>Several mechanisms have been proposed, though none are definitively proven:</p>
        <ul>
          <li><strong>Taurine deficiency:</strong> Legumes may interfere with taurine absorption or metabolism. Taurine is essential for cardiac muscle function. High-legume diets may reduce taurine bioavailability even when taurine is present in the food.</li>
          <li><strong>Inhibition of taurine synthesis:</strong> High fiber from legumes may reduce taurine synthesis or increase taurine excretion.</li>
          <li><strong>Protein source issues:</strong> Some grain-free diets use novel protein sources (lamb, venison, kangaroo) that may contain less taurine precursor amino acids than traditional protein sources like chicken.</li>
          <li><strong>Unknown compounds in legumes:</strong> Legumes contain compounds that may interfere with cardiac function through mechanisms not yet identified.</li>
        </ul>

        <h2>What to Do</h2>
        <p><strong>If your dog is currently eating a grain-free diet:</strong></p>
        <ul>
          <li>Switch to a diet meeting WSAVA guidelines — Royal Canin, Purina Pro Plan, Hill&apos;s Science Diet, or Iams are the brands most commonly recommended by board-certified veterinary nutritionists. These companies employ veterinary nutritionists, conduct feeding trials, and invest in ongoing research.</li>
          <li>Grains (rice, corn, wheat, barley, oats) in dog food are not the problem the grain-free marketing suggests. Dogs digest grain well, and there is no evidence that grains cause the health problems the grain-free marketing implies.</li>
          <li>If your dog has been eating a high-legume grain-free diet for more than a year, discuss a cardiac evaluation with your veterinarian — particularly if you own a breed with higher DCM risk (Golden Retriever, Cocker Spaniel, Labrador, Doberman).</li>
        </ul>

        <p><strong>The exception:</strong> Dogs with diagnosed grain allergies (genuinely uncommon — most dogs with food sensitivities are sensitive to protein sources, not grains) may have a medical reason for avoiding specific grains. Work with a veterinary nutritionist to find an appropriate diet rather than defaulting to a commercial grain-free product.</p>

        <h2>Should I Stop Feeding Grain-Free Dog Food?</h2>
        <p>The grain-free market was built primarily on marketing rather than nutritional science — the premise that dogs cannot digest grain or that grain-free is inherently more &quot;natural&quot; lacks scientific support. The subsequent FDA investigation revealing a potential link to serious cardiac disease is a significant concern that warrants caution.</p>
        <p>Our recommendation: choose a WSAVA-compliant food from a company that employs veterinary nutritionists and conducts feeding trials. See our <a href="/reviews/best-dry-dog-food">Best Dry Dog Food guide</a> for ranked options.</p>
      </div>
    </ArticleLayout>
  )
}
