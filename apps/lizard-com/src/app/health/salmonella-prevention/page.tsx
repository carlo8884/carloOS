import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Salmonella & Reptiles — Safe Handling | Lizard.com', description: 'All reptiles carry Salmonella naturally. Children under 5, pregnant women, elderly, and immunocompromised people are at highest risk.', path: '/health/salmonella-prevention', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Salmonella and Reptiles — Prevention Guide', description: 'CDC-recommended Salmonella prevention practices for reptile owners.', url: 'https://lizard.com/health/salmonella-prevention', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function SalmonellaPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Salmonella & Reptiles', subtitle: 'All reptiles — regardless of species, cleanliness of their enclosure, or how healthy they appear — naturally carry Salmonella bacteria in their GI tract. This is not a disease they have; it is part of their normal flora. For healthy adults, the infection risk with basic precautions is low. For at-risk groups, reptile contact requires careful management.', category: 'Reptile Health & Safety', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '7 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health/sick-reptile-signs' }, { name: 'Salmonella Prevention', href: '/health/salmonella-prevention' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(220,38,38,0.08)', border: '1px solid rgba(220,38,38,0.25)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#ef4444', marginBottom: '8px' }}>High-Risk Groups — Extra Caution</div>
          {['Children under 5 years', 'Pregnant women', 'Adults over 65', 'People with compromised immune systems', 'People on immunosuppressive medications'].map(s => (
            <div key={s} style={{ padding: '4px 0', fontSize: '12px', color: 'rgba(238,240,228,0.7)', borderBottom: '1px solid rgba(220,38,38,0.15)' }}>{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' }, { label: 'Bearded Dragon Care', href: '/species/bearded-dragon' }, { label: 'Corn Snake Care', href: '/species/corn-snake' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-salmonella" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>What Salmonella Is and How It Spreads</h2>
        <p>Salmonella is a genus of gram-negative bacteria that lives in the intestinal tracts of reptiles (and many other animals) as normal flora — without causing disease in the reptile. Transmission to humans is fecal-oral: the bacteria present in reptile feces (and on the reptile's skin, which contacts feces during normal movement) can transfer to human hands during handling, and from hands to mouth — either directly or via surfaces, food preparation areas, or food. The bacteria does not need to be visibly present to transmit — contaminated hands touching a face, a mouth, or food preparation surfaces complete the transmission chain.</p>
        <p>Salmonella in the environment can survive on surfaces for extended periods. The enclosure, substrate, water dishes, and any surface the reptile contacts can harbor the bacteria. This is why "my reptile looks clean" or "I cleaned the tank recently" does not eliminate the risk — the bacteria are a permanent feature of the reptile and its environment.</p>

        <h2>At-Risk Groups — Who Should Avoid Contact</h2>
        <p>Healthy adults with intact immune systems who practice appropriate hygiene have a low risk of symptomatic Salmonella infection. The groups at significantly elevated risk — for whom the CDC recommends avoiding contact with reptiles and reptile environments entirely:</p>
        <ul>
          <li><strong>Children under 5:</strong> Immune systems not fully mature, more likely to put hands to mouth, less reliable handwashing. The CDC specifically recommends against reptiles in households with children under 5.</li>
          <li><strong>Pregnant women:</strong> Pregnancy alters immune function. Salmonella during pregnancy can cause severe maternal illness and in some cases fetal complications.</li>
          <li><strong>Elderly individuals (65+):</strong> Age-related immune changes increase susceptibility and severity of Salmonella infection.</li>
          <li><strong>Immunocompromised individuals:</strong> Chemotherapy patients, organ transplant recipients, HIV/AIDS patients, people on long-term corticosteroids or other immunosuppressive medications. Salmonella in these individuals can cause invasive, life-threatening infection rather than self-limiting gastroenteritis.</li>
        </ul>

        <h2>CDC-Recommended Prevention Practices</h2>
        <p><strong>Handwashing — the single most important practice:</strong> Wash hands with soap and water for at least 20 seconds immediately after handling any reptile, after cleaning the enclosure, after handling any equipment from the enclosure, and before eating, drinking, or touching the face. Alcohol-based hand sanitizer is less effective against Salmonella than thorough soap-and-water handwashing — it supplements but does not replace handwashing.</p>
        <p><strong>Keep reptiles out of food preparation areas:</strong> Never allow reptiles in kitchens or areas where food is prepared, stored, or eaten. Never use the kitchen sink to bathe reptiles or clean reptile equipment — use a dedicated basin or bathtub, cleaned and disinfected afterward.</p>
        <p><strong>Dedicated cleaning equipment:</strong> Sponges, buckets, and cleaning tools used for the reptile enclosure should be dedicated to that purpose and stored separately from household cleaning equipment.</p>
        <p><strong>Do not allow reptiles to roam freely unsupervised:</strong> Free-roaming reptiles contaminate surfaces throughout the home. Supervised floor time on a dedicated reptile mat (a specific surface that is cleaned and disinfected) is a more contained approach.</p>
        <p><strong>Do not kiss reptiles or allow them near the face:</strong> This sounds obvious but is worth stating explicitly — facial contact is a direct transmission route.</p>

        <h2>Cleaning and Disinfection</h2>
        <p>Enclosure cleaning: remove the reptile to a secure temporary container. Remove and discard substrate (dispose in sealed bag). Clean all surfaces with a reptile-safe disinfectant (F10SC, Veterinary Formula Clinical Care, or diluted bleach solution at 1:32 with water — rinse thoroughly after bleach). Allow to dry completely before adding new substrate and returning the reptile. Do not use household cleaners (many contain phenols or other chemicals toxic to reptiles).</p>
      </div>
    </ArticleLayout>
  )
}
