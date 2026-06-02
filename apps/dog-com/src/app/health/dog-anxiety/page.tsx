import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Anxiety — Types, Signs & Evidence-Based Treatment | Dog.com', description: 'Dog anxiety types: separation, noise phobia, and generalized. Signs, behavioral modification, and when medication makes a significant difference.', path: '/health/dog-anxiety', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Anxiety', description: 'Types, signs, and evidence-based treatment for canine anxiety.', url: 'https://dog.com/health/dog-anxiety', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Dog Anxiety', description: 'Types and treatment of anxiety in dogs.', url: 'https://dog.com/health/dog-anxiety', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function DogAnxietyPage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Dog Anxiety — Types, Signs & Treatment', subtitle: 'Anxiety is one of the most common behavioral presentations in veterinary practice — and one of the most undertreated. Many anxious dogs live in chronic distress that owners attribute to personality rather than a treatable condition. Effective treatment exists.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Dog Anxiety', href: '/health/dog-anxiety' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Separation Anxiety', href: '#separation' }, { label: 'Noise Phobia', href: '#noise' }, { label: 'Generalized Anxiety', href: '#generalized' }, { label: 'Signs', href: '#signs' }, { label: 'Treatment', href: '#treatment' }, { label: 'Medication', href: '#medication' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Separation Anxiety Training', href: '/training/separation-anxiety' }, { label: 'Trainer Credentials', href: '/training/trainer-credentials' }, { label: 'Crate Training', href: '/training/crate-training' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-anxiety" />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="signs">Recognizing Anxiety — Beyond Obvious Distress</h2>
          <p>Obvious anxiety signs (destruction, vocalization, house soiling) are recognized. Subtle chronic anxiety signs are frequently missed: yawning when not tired, lip-licking without food present, excessive panting at rest, inability to settle, hypervigilance (scanning constantly, ears up), avoidance of eye contact, whale eye (showing whites of eyes), weight loss, reduced play, and decreased interest in food. A dog that is "always on alert" or "never truly relaxes" may be experiencing chronic anxiety rather than having a high-energy personality.</p>

          <h2 id="separation">Separation Anxiety</h2>
          <p>True separation anxiety is distress specifically triggered by departure of attachment figures — not boredom or insufficient exercise. The dog is fine when people are home and distressed within minutes of departure. Diagnosis requires observation of the departure period — video the first 30 minutes after you leave. Dogs with true separation anxiety typically begin distress (panting, pacing, whining, destructive behavior at exit points) within 5–20 minutes of departure.</p>
          <p>Treatment is a graduated departure protocol: systematic desensitization to departure cues (picking up keys, putting on shoes) and very gradual extension of alone time — starting at seconds, not minutes. This process takes months and requires consistency. Medication (fluoxetine or clomipramine) is often necessary to enable the behavioral protocol to work — a severely anxious dog cannot learn while in panic. Medication alone without behavior modification rarely produces lasting improvement.</p>

          <h2 id="noise">Noise Phobia</h2>
          <p>Thunder, fireworks, and gunshots are the most common noise phobias. Noise phobia often worsens over time without treatment — each exposure sensitizes the dog further. Signs during noise events: hiding, trembling, panting, hypersalivation, destruction, escaping (noise phobia is a leading cause of dogs going missing during July 4th). Do not force the dog to "face it" — flooding anxiety without systematic desensitization makes it worse.</p>
          <p>During events: provide a safe hiding space (dogs self-select small dark spaces — a crate covered with a blanket, a closet), white noise to mask some sound, pressure wraps (Thundershirt — moderate evidence for anxiety reduction). Situational medication (trazodone, gabapentin, sileo — dexmedetomidine oromucosal gel specifically approved for noise phobia) prescribed in advance for known events can significantly reduce suffering. Ask your vet for a "noise phobia kit" before July 4th or hunting season.</p>

          <h2 id="generalized">Generalized Anxiety</h2>
          <p>Some dogs have anxiety that is not situation-specific — they are chronically vigilant, have difficulty settling, startle easily, and show anxiety across many contexts. This is often genetic and may be present from early puppyhood. Generalized anxiety in dogs is analogous to generalized anxiety disorder in humans. Daily medication (SSRIs — fluoxetine; TCAs — clomipramine; SARI — trazodone) is typically the most effective intervention, combined with behavioral modification and environmental enrichment.</p>

          <h2 id="treatment">Behavioral Modification</h2>
          <p>Counterconditioning changes the emotional response to anxiety triggers — pairing the trigger with something the dog loves (high-value food, play) to build a positive association. Systematic desensitization exposes the dog to the trigger at a level below threshold (not causing anxiety) and very gradually increases intensity. Both require identifying the exact threshold at which anxiety begins and working below it. Above-threshold exposures set back progress. A certified applied animal behaviorist (CAAB) or veterinary behaviorist (DACVB) designs and oversees the protocol for complex cases.</p>

          <h2 id="medication">When Medication Helps</h2>
          <p>Anxiety is a medical condition with neurobiological underpinnings. For moderate to severe anxiety, medication is not a shortcut or a crutch — it is a tool that reduces the neurological arousal enough to allow learning to occur. Without medication, a severely anxious dog may be unable to engage with behavioral modification at all. Daily medication (fluoxetine is <a href="https://www.fda.gov/animal-veterinary" rel="noopener" target="_blank" className="text-brand-primary hover:underline">FDA</a>-approved for separation anxiety in dogs as Reconcile) takes 4–6 weeks to reach full effect. Situational medications (trazodone, gabapentin) work within 1–2 hours for acute events. Discuss both options with your veterinarian.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
