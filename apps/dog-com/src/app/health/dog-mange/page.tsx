import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Mange in Dogs — Sarcoptic vs Demodectic, Treatment | Dog.com', description: 'Two types of mange in dogs: sarcoptic (scabies — highly contagious to humans) and demodectic (not contagious). Different causes, presentations, and treatments.', path: '/health/dog-mange', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Mange in Dogs', description: 'Sarcoptic vs demodectic mange — causes, diagnosis, and treatment.', url: 'https://dog.com/health/dog-mange', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Mange in Dogs', description: 'Sarcoptic and demodectic mange — causes, diagnosis, and treatment.', url: 'https://dog.com/health/dog-mange', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)

export default function DogMangePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Mange in Dogs', subtitle: 'Two completely different mite species cause two completely different diseases both called "mange." Sarcoptic mange is highly contagious to other animals and humans. Demodectic mange is not contagious but indicates immune compromise. The distinction matters enormously for treatment and household management.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Mange', href: '/health/dog-mange' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Sarcoptic vs Demodectic</div>
            {[
              { label: 'Mite', sarcoptic: 'Sarcoptes scabiei', demodex: 'Demodex canis' },
              { label: 'Contagious', sarcoptic: 'YES — to humans', demodex: 'No' },
              { label: 'Zoonotic', sarcoptic: 'YES (scabies)', demodex: 'No' },
              { label: 'Pattern', sarcoptic: 'Ears, elbows, belly', demodex: 'Face, feet, generalized' },
              { label: 'Itch level', sarcoptic: 'Intense — "mange itch"', demodex: 'Variable' },
              { label: 'Cause', sarcoptic: 'External contact', demodex: 'Immune suppression' },
            ].map(row => (
              <div key={row.label} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-2xs font-bold text-brand-text-light mb-1">{row.label}</div>
                <div className="flex gap-2 text-xs">
                  <span className="text-brand-danger font-semibold">S: {row.sarcoptic}</span>
                </div>
                <div className="flex gap-2 text-xs">
                  <span className="text-brand-primary font-semibold">D: {row.demodex}</span>
                </div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Skin Allergies', href: '/health/dog-skin-allergies' }, { label: 'Best Flea & Tick', href: '/reviews/best-flea-tick-prevention' }, { label: 'Dog Ear Infections', href: '/health/dog-ear-infections' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-mange" />
        </>}
      >
        <div className="carloOS-article">
          <h2>Sarcoptic Mange (Scabies) — The Contagious One</h2>
          <p>Sarcoptic mange is caused by Sarcoptes scabiei var. canis, a mite that burrows into the superficial skin layers and causes intense allergic itching. It spreads by direct contact with infected animals — wildlife (foxes, coyotes), other infected dogs, and contaminated bedding or grooming equipment. The itching is characteristically intense — out of proportion to visible skin changes early in the disease. Dogs with sarcoptic mange often cannot stop scratching.</p>
          <p><strong>Zoonotic risk:</strong> Sarcoptic mange is transmissible to humans. Human scabies from dog-origin mites tends to be self-limiting (the dog-adapted mite cannot complete its lifecycle in human skin) but causes significant itching and skin reaction while it lasts. All people in contact with a dog diagnosed with sarcoptic mange should monitor for skin rash and itching, and consult a physician if symptoms develop.</p>
          <p><strong>Distribution:</strong> Classic presentation — intense itching beginning at the ear margins (crust on the edges of the ears), elbows, hocks, and ventral abdomen. The pinnal-pedal reflex (scratching with the hind leg when the ear margin is rubbed) is a reliable clinical indicator of sarcoptic mange. Progresses to widespread hair loss and skin thickening with chronicity.</p>
          <p><strong>Diagnosis:</strong> Skin scraping under microscope can identify mites but sensitivity is low — mites are present in small numbers and frequently not found even in confirmed cases. A positive scraping confirms mange; a negative scraping does not rule it out. In many cases, diagnosis is made by response to treatment ("therapeutic trial") — if the dog dramatically improves with antiparasitic treatment, sarcoptic mange was likely the diagnosis.</p>
          <p><strong>Treatment:</strong> Isoxazoline-class products (Bravecto, NexGard, Simparica, Credelio) are highly effective against sarcoptic mange mites — often producing dramatic improvement within 2–4 weeks. Traditional treatments (Revolution/selamectin, ivermectin) also work. All dogs in the household must be treated simultaneously. Bedding should be washed and the environment treated for mites.</p>

          <h2>Demodectic Mange — The Immune-Related One</h2>
          <p>Demodex canis is a normal inhabitant of dog skin — present in small numbers in healthy dogs without causing disease. Demodectic mange occurs when immune suppression (in puppies with immature immune systems, or in adult dogs with compromised immunity) allows the mite population to proliferate beyond the normal controlled levels.</p>
          <p><strong>Juvenile (localized) demodicosis:</strong> Small patches of hair loss, typically on the face and legs of puppies under 18 months. Often self-resolving as the immune system matures. Limited to fewer than 5 lesions. Monitor — often does not require treatment.</p>
          <p><strong>Generalized demodicosis:</strong> Extensive hair loss affecting the entire body, often with secondary bacterial infection (pyoderma). Can occur in juveniles or adults. In adult-onset generalized demodicosis — any dog over 18 months developing new generalized demodex — an underlying cause of immune suppression must be investigated: Cushing's disease, hypothyroidism, diabetes mellitus, neoplasia, immunosuppressive medications. Treating the skin without addressing the underlying cause results in treatment failure.</p>
          <p><strong>Treatment:</strong> Isoxazoline products (Bravecto, NexGard, Simparica) are highly effective — they have revolutionized demodectic mange treatment and are now the standard of care. Monthly or every-3-month dosing continues until two consecutive negative skin scrapings are achieved. Traditional treatments (amitraz dips, oral ivermectin) are still used in some cases. Secondary bacterial pyoderma requires concurrent antibiotic treatment. Treatment duration: typically 3–6 months for generalized cases.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
