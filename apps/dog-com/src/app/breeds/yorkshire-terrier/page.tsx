import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, BreedHealthCard, EmailCapture, RelatedLinks, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Yorkshire Terrier Breed Guide — Hypoglycemia | Dog.com', description: 'Yorkshire Terriers have big personalities in a fragile body. Hypoglycemia in puppies, tracheal collapse from collar pressure.', path: '/breeds/yorkshire-terrier', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Yorkshire Terrier Breed Guide', description: 'Hypoglycemia, tracheal collapse, and dental care for Yorkshire Terriers.', url: 'https://dog.com/breeds/yorkshire-terrier', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function YorkiePage() {
  return (
    <ArticleLayout siteId="dog-com"
      hero={{ title: 'Yorkshire Terrier Breed Guide', subtitle: 'Yorkies pack terrier tenacity into a 4–7 lb body. They are bold, intelligent, and affectionate — and require specific health management for their small size. Hypoglycemia in puppies, tracheal damage from collars, and severe dental disease are the primary concerns every Yorkie owner should understand from day one.', category: 'Breed Guide', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '8 min',}}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Breeds', href: '/breeds' }, { name: 'Yorkshire Terrier', href: '/breeds/yorkshire-terrier' }]}
      relatedLinks={[{ title: 'Dog Breeds Hub', href: '/breeds', category: 'Hub' }, { title: 'Shih Tzu Guide', href: '/breeds/shih-tzu', category: 'Breed Guide' }, { title: 'Dachshund Guide', href: '/breeds/dachshund', category: 'Breed Guide' }, { title: 'Best Dog Harnesses', href: '/reviews/best-dog-harnesses', category: 'Reviews' }]}
      schema={schema}
      contentType="breed"
      sidebar={<>
        <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">At a Glance</div>
          {[['Size', '4–7 lbs (standard)'], ['Lifespan', '13–16 years'], ['Hypoglycemia risk', 'High in puppies — feed every 4-6 hrs'], ['Collar', 'Harness only — no neck collar'], ['Grooming', 'Daily brushing or professional cut'], ['Dental', 'Most severe dental disease of any breed']].map(([k, v]) => (
            <div key={k} className="flex justify-between py-2 border-b border-brand-border text-xs last:border-0">
              <span className="text-brand-text-light">{k}</span><span className="font-bold text-brand-dark text-right max-w-[55%]">{v}</span>
            </div>
          ))}
        </div>
        <RelatedLinks title="Yorkie Health Deep-Dive" links={[{ label: 'Yorkshire Terrier Health Issues & Screenings', href: '/breeds/yorkshire-terrier/health' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Yorkie Feeding Guide', href: '/breeds/yorkshire-terrier/feeding' }, { label: 'Dog Dental Care', href: '/health/dog-dental-care' }, { label: 'Luxating Patella', href: '/health/dog-luxating-patella' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
        <RelatedLinks title="Breed Comparisons" links={[
          { label: 'Yorkshire Terrier vs Maltese', href: '/compare/yorkshire-terrier-vs-maltese' },
          { label: 'Pomeranian vs Yorkshire Terrier', href: '/compare/pomeranian-vs-yorkshire-terrier' },
        ]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="breed" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="breed-yorkie" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
                <BreedHealthCard name="Hypoglycemia (Low Blood Sugar)" riskLevel="very-high"
          description="Yorkie puppies under 4 months — and occasionally adults under 4 lbs — are at significant risk of hypoglycemic episodes. Their tiny body mass cannot store adequate glycogen to maintain blood glucose between meals, especially when stressed, active, or if a meal is missed. Hypoglycemic episodes: weakness, disorientation, trembling, seizure-like activity, collapse, coma, death. This is a genuine emergency."
          signs={['Weakness, wobbly gait', 'Disorientation or glazed eyes', 'Trembling', 'Seizure-like activity', 'Loss of consciousness']}
          management="Yorkie puppies must eat every 4-6 hours. Keep Karo syrup or honey accessible — rub on gums immediately if hypoglycemia is suspected, then get to a veterinarian. Do not withhold food from young Yorkies. Adults over 5 lbs and over 6 months rarely experience hypoglycemia with normal feeding schedules." />

        <BreedHealthCard name="Tracheal Collapse" riskLevel="high"
          description="The tracheal cartilage rings in toy breeds — particularly Yorkies — are often weaker than in larger dogs, predisposing them to tracheal collapse. The trachea flattens during breathing, causing a characteristic 'goose honk' cough. Neck collars exacerbate this dramatically — even light collar pressure during walks can trigger or worsen collapse. Tracheal collapse is a lifelong management issue; severe cases require medical management (bronchodilators, cough suppressants, anti-inflammatories) or surgical stenting."
          signs={['Goose honk cough — distinctive sound', 'Coughing when excited or when collar pressure applied', 'Exercise intolerance in severe cases', 'Cyanosis (blue gums) in acute severe episodes']}
          management="Harness only — never use a neck collar for any Yorkie. Avoid obesity — excess weight worsens collapse. Bronchodilators and anti-inflammatory therapy for symptomatic management. Intraluminal stent placement for severe cases by an internal medicine specialist." />

        <h2>Dental Disease — The Most Severe of Any Breed</h2>
        <p>Yorkshire Terriers consistently rank at the top of dental disease severity studies. Their 42 adult teeth erupt in a jaw significantly too small to accommodate them — rotation, overcrowding, delayed deciduous (baby) tooth retention, and abnormal wear create optimal conditions for plaque accumulation and periodontal disease. By age 3, many Yorkies have advanced periodontal disease causing pain, tooth loss, and bacterial load affecting systemic health.</p>
        <p>Prevention: daily toothbrushing from puppyhood (use a soft brush or finger brush with enzymatic toothpaste). Professional cleaning under anesthesia typically needed annually from age 2–3. VOHC-approved dental chews (Greenies, Whimzees) as daily supplement to brushing. Baby teeth (deciduous) that are not naturally shed should be extracted at the spay/neuter appointment — retained deciduous teeth are a major contributor to Yorkie dental disease.</p>

        <h2>Portosystemic Shunts</h2>
        <p>Yorkies are one of the most predisposed breeds to congenital portosystemic shunts (PSS) — abnormal blood vessel connections that bypass the liver. Signs: small body size, poor growth, post-meal neurological signs (circling, seizures, head pressing), and intermittent GI upset. Diagnosed by bile acids test (fasting and post-prandial). Surgical correction is the treatment for congenital PSS — a specialist procedure. Medical management (lactulose, low-protein diet, antibiotic therapy) can temporarily control signs but does not correct the underlying vascular anatomy.</p>

        <h2>Harness — Not Optional</h2>
        <p>Every Yorkie should wear a harness, never a neck collar, for all walking and any situation where leash pressure might be applied. The tracheal and cervical spine vulnerability in this breed makes neck collar use a real injury risk. A harness distributes pressure across the chest instead. This applies to puppies from day one — get a properly fitting harness before bringing the puppy home.</p>
      </div>
    </ArticleLayout>
  )
}
