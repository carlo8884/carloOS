import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
import { ArticleByline, DropCap, CalloutBox } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'English Bulldog Breed Guide — BOAS, Heat Risk & Health | Dog.com', description: 'English Bulldogs are brachycephalic — flat-faced breathing disorders, heat intolerance, and a list of structural health issues.', path: '/breeds/bulldog', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'English Bulldog Breed Guide', description: 'BOAS, hip dysplasia, heat intolerance, and structural health issues in English Bulldogs.', url: 'https://dog.com/breeds/bulldog', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

export default function BulldogPage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'English Bulldog Breed Guide', subtitle: 'The English Bulldog\'s conformation — flat face, compacted airways, compact body, heavy skin folds — causes a cascade of health issues that are important to understand before acquiring one. They are affectionate dogs with significant veterinary costs.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Bulldog', href: '/breeds/bulldog' }]}
      schema={schema}
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '40-50 lbs'], ['Lifespan', '8-10 years (below average)'], ['Heat tolerance', 'Very low — life-threatening above 80°F'], ['Exercise', 'Low-moderate — limited by airways'], ['Veterinary costs', 'Significantly above average']].map(([k,v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[60%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Bulldog Health Deep-Dive" links={[{ label: 'Bulldog Health Issues & Screenings', href: '/breeds/bulldog/health' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'French Bulldog Health', href: '/health/french-bulldog-health' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }, { label: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide' }]} />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-bulldog" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-05-28T00:00:00Z" reviewedBy="Editorial team" />
        <div style={{ background: 'rgba(200,74,42,0.05)', border: '1px solid rgba(200,74,42,0.18)', borderRadius: '10px', padding: '16px 20px', marginBottom: '24px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', color: '#C84A2A', marginBottom: '8px' }}>Before You Buy — Be Informed</div>
          <p style={{ fontSize: '14px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>English Bulldogs have a life expectancy of 8-10 years — lower than most breeds. Many require surgical intervention for breathing (BOAS surgery), reproductive (cesarean section is nearly universal — Bulldogs cannot typically whelp naturally), and orthopedic issues. Pet insurance before the first vet visit is not optional for this breed.</p>
        </div>

        <BreedHealthCard name="Brachycephalic Obstructive Airway Syndrome (BOAS)" riskLevel="very-high" description="The flat-faced conformation compresses the airway. Stenotic nares (narrow nostrils), elongated soft palate, and hypoplastic trachea restrict airflow. Most Bulldogs have some degree of BOAS. Signs range from snoring and exercise intolerance to respiratory distress and cyanosis. Surgical correction (nares widening, soft palate resection) significantly improves quality of life and is recommended before symptoms are severe." signs={['Snoring, noisy breathing', 'Exercise intolerance in mild temperatures', 'Blue-tinged gums with exertion — EMERGENCY', 'Gagging or regurgitation']} management="Maintain lean body weight. Avoid heat and exercise above 75°F. Surgical correction by a specialist for moderate-severe cases. Air conditioning is not optional." />

        <BreedHealthCard name="Heat Stroke" riskLevel="very-high" description="Bulldogs are among the highest-risk breeds for heat stroke — the compacted airway prevents effective panting (the primary cooling mechanism). Heat stroke in a Bulldog can be fatal within minutes. Do not leave a Bulldog in a car. Do not walk a Bulldog in temperatures above 75°F. Do not allow exercise above 70°F. These are not recommendations — they are survival guidelines." signs={['Heavy panting without cooling', 'Drooling, distress', 'Blue or pale gums — EMERGENCY', 'Collapse']} management="Cool with tepid (not cold) water, ice packs to armpits and groin. Emergency vet immediately. Prevention: air-conditioned environment, no outdoor exercise above 70°F." />

        <BreedHealthCard name="Skin Fold Infections" riskLevel="high" description="Deep skin folds trap moisture and create environments for bacterial and yeast overgrowth. Particularly affects facial folds, tail fold, and vulvar fold. Regular cleaning of all folds (every 2-3 days) with Douxo S3 wipes or a similar antimicrobial wipe is maintenance. Chronic fold dermatitis may require surgical fold removal." signs={['Redness, odor from fold areas', 'Head rubbing (facial fold)', 'Scooting (tail fold)']} management="Regular cleaning every 2-3 days. Antifungal or antibiotic treatment for active infections. Surgical fold removal for chronic recurrence." />

        <h2>What to Look for in a Breeder</h2>
        <DropCap>Responsible Bulldog breeders select for health over extreme conformation — slightly wider nostrils, longer muzzle (relative to breed standard), and evidence of BOAS testing in the lines. Ask whether breeding dogs have had BOAS assessments. Ask about cesarean history. Ask about longevity in the lines. Avoid breeders who breed for the most extreme conformation — the flattest face and most wrinkled body is not the healthiest animal.</DropCap>

        <CalloutBox variant="warning" title="Heat is the leading killer">
          A Bulldog exercised at 80°F can develop fatal heat stroke within 15 minutes. Air conditioning, walks restricted to dawn and dusk in summer, and never leaving a Bulldog in a car for any length of time are not preferences — they are survival measures. The breed&apos;s compacted airway prevents the panting that cools other dogs.
        </CalloutBox>
      </div>
    </ArticleLayout>
  )
}
