import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Border Collie Guide — Intelligence, MDR1 Gene | Dog.com', description: 'Border Collies are the most intelligent dog breed — and the most demanding. MDR1 drug sensitivity affects the breed.', path: '/breeds/border-collie', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Border Collie Breed Guide', description: 'Intelligence requirements, MDR1 gene, Collie Eye Anomaly, and exercise for Border Collies.', url: 'https://dog.com/breeds/border-collie', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function BorderColliePage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Border Collie Breed Guide', subtitle: 'Ranked first in canine intelligence by virtually every behavioral assessment — Border Collies learn commands after fewer than 5 repetitions and obey them 95% of the time. This is not a breed for inactive households. A Border Collie without adequate mental and physical work becomes a behavioral problem in a way that few other breeds can match.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Border Collie', href: '/breeds/border-collie' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Australian Shepherd Guide', href: '/breeds/australian-shepherd', category: 'Breed Guide' }, { title: 'Siberian Husky Guide', href: '/breeds/siberian-husky', category: 'Breed Guide' }, { title: 'Dog Training Hub', href: '/training', category: 'Training' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '30–55 lbs'], ['Lifespan', '12–15 years'], ['MDR1 mutation', 'Present in breed — test before medicating'], ['Exercise', '2+ hours vigorous daily minimum'], ['Mental need', 'Extreme — a job required'], ['Herding drive', 'Intense — may herd anything moving']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Australian Shepherd', href: '/breeds/australian-shepherd' }, { label: 'Socialization Window', href: '/training/dog-socialization-window' }, { label: 'Marker Training', href: '/training/marker-training' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Border Collie vs Australian Shepherd', href: '/compare/border-collie-vs-australian-shepherd' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-border-collie" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
                <h2>What "Most Intelligent Breed" Actually Means</h2>
        <p>Border Collie intelligence in the working context is extraordinary — they can learn the names of 1,000+ objects (documented in the famous case of Chaser), read subtle human social cues, and problem-solve in ways that approach conceptual reasoning. In the household context, this intelligence creates specific challenges: they need far more mental stimulation than most breeds, they notice and respond to subtle cues owners don't realize they're giving, and they apply their problem-solving ability to things owners don't want solved (opening gates, escaping, figuring out treat-dispensing puzzles in minutes).</p>
        <p>The practical reality: an inadequately stimulated Border Collie invents work — obsessive ball-chasing (to the point of behavioral addiction), herding anything that moves (children, cats, cars), shadow-chasing, and other repetitive behaviors that are difficult to extinguish once established. These are not behavioral failures. They are the predictable output of a high-powered brain without a job to do. Border Collies belong in active households that can provide structured activity — agility, herding, obedience, disc, flyball, or any sport that channels their capability.</p>

        <BreedHealthCard name="MDR1 / ABCB1 Gene Mutation" riskLevel="high"
          description="Border Collies, like Australian Shepherds and other herding breeds, carry the MDR1 (ABCB1) mutation that causes sensitivity to multiple drugs — including ivermectin at doses above the heartworm prevention level, loperamide (Imodium), and certain anesthetic and chemotherapy agents. Affected dogs lack the P-glycoprotein pump that normally prevents these drugs from accumulating in the brain. Toxicity causes neurological signs including ataxia, blindness, coma, and potentially death at doses that are safe in non-affected dogs."
          signs={['Neurological signs after drug administration: ataxia, disorientation', 'Dilated pupils, apparent blindness', 'Tremors or seizures', 'Coma in severe cases']}
          management="DNA test before any medication with MDR1 concern (Washington State University or commercial labs). Inform every veterinarian of MDR1 status — tattoo or medical alert tag is appropriate. Full drug list at vcpl.vetmed.wsu.edu. Avoid ivermectin except at heartworm prevention doses in tested/cleared dogs." />

        <BreedHealthCard name="Collie Eye Anomaly (CEA)" riskLevel="moderate"
          description="CEA (also called Collie Eye Anomaly / Multifocal Retinal Dysplasia) is a hereditary developmental abnormality of the eye affecting the choroid — the vascular layer supporting the retina. Severity ranges from mild choroidal hypoplasia (common, often subclinical) to retinal detachment and blindness (rare). DNA test available — responsible breeders test breeding dogs. Mildly affected dogs often have normal vision throughout life; severely affected dogs may lose vision."
          signs={['Visible eye abnormality in severe cases', 'Vision loss (severe cases only)', 'Most mild cases: no clinical signs']}
          management="DNA test breeding dogs. Annual CAER (OFA eye) examination. No treatment for the underlying condition — mild cases monitored, severe cases managed for vision loss." />

        <h2>Exercise — The Weekly Minimum</h2>
        <p>Border Collies need a minimum of 2 hours of vigorous exercise daily — running, fetch, hiking at pace, or structured dog sports. A 30-minute walk is insufficient. The combination that works best: physical exercise plus a structured mental task simultaneously. Agility training accomplishes this — it exercises body and mind together. Pure physical exercise without mental engagement leaves Border Collies physically tired but mentally unsatisfied. Pure mental work (training sessions) without physical exercise leaves them physically frustrated.</p>

        <h2>The "Eye" — Herding Behavior</h2>
        <p>The Border Collie's herding instinct is expressed through "eye" — a fixed, intense stare that precedes a controlled stalk. Combined with the ability to move livestock with body position rather than barking and biting, this makes them exceptional working sheepdogs. In the household, the same behaviors apply to children, cats, bicycles, and cars. Management: redirect the herding impulse into sanctioned activities (fetch, disc, frisbee, herding trials), prevent unsupervised access to situations where the behavior creates problems, and provide appropriate outlets so the impulse has somewhere to go.</p>
      </div>
    </ArticleLayout>
  )
}
