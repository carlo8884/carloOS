import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, EmailCapture, RelatedLinks, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, buildFAQSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Mange in Dogs', url: 'https://www.merckvetmanual.com/integumentary-system/mange/overview-of-mange', publisher: 'Merck Vet Manual' },
  { label: 'CAPC: Companion Animal Parasite Council — Sarcoptic Mange and Demodex', url: 'https://capcvet.org/guidelines/external-parasites/', publisher: 'CAPC' },
  { label: 'AVMA: Mange (Sarcoptic and Demodectic) in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Mueller RS et al. A review of topical therapy for skin infections with bacteria and yeast. Vet Dermatol. 2012;23(4):330-341.', publisher: 'Vet Dermatology' },
]


export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Mange in Dogs — Sarcoptic vs Demodectic, Treatment | Dog.com', description: 'Two types of mange in dogs: sarcoptic (scabies — highly contagious to humans) and demodectic (not contagious). Different causes, presentations, and treatments.', path: '/health/dog-mange', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Mange in Dogs', description: 'Sarcoptic vs demodectic mange — causes, diagnosis, and treatment.', url: 'https://dog.com/health/dog-mange', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' ,
  citation: SOURCES,
})
const med = buildMedicalWebPageSchema({ name: 'Mange in Dogs', description: 'Sarcoptic and demodectic mange — causes, diagnosis, and treatment.', url: 'https://dog.com/health/dog-mange', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const FAQS = [
  { question: 'Can humans catch mange from dogs?', answer: 'It depends on the type. Sarcoptic mange (scabies) is transmissible to humans — dog-origin mites tend to be self-limiting in human skin but cause significant itching and rash while they last, so anyone in contact with a diagnosed dog should monitor for symptoms and consult a physician if a rash develops. Demodectic mange is not contagious to humans or to other animals — Demodex canis is a normal inhabitant of dog skin that only causes disease when immune suppression lets it proliferate.' },
  { question: 'What is the difference between sarcoptic and demodectic mange?', answer: 'Sarcoptic mange is caused by Sarcoptes scabiei, spreads by contact (wildlife, infected dogs, contaminated bedding), causes intense itching that starts at the ear margins, elbows, and belly, and is contagious to other animals and humans. Demodectic mange is caused by Demodex canis, is not contagious, tends to affect the face and feet or become generalized, and signals an immature (puppies) or compromised (adults) immune system. The distinction drives both treatment and household management.' },
  { question: 'How is mange in dogs treated?', answer: 'Isoxazoline-class products (Bravecto, NexGard, Simparica, Credelio) are highly effective against both forms and are now the standard of care — sarcoptic cases often improve dramatically within 2–4 weeks. For sarcoptic mange, all dogs in the household must be treated simultaneously and bedding washed. For generalized demodectic mange, treatment continues until two consecutive negative skin scrapings, typically 3–6 months, with antibiotics for any secondary pyoderma. Your veterinarian selects the product and schedule.' },
  { question: 'Can a negative skin scraping rule out mange?', answer: 'No. For sarcoptic mange, scraping sensitivity is low — mites are present in small numbers and frequently not found even in confirmed cases. A positive scraping confirms mange; a negative one does not rule it out. In many cases the diagnosis is made by response to treatment: if a dramatically itchy dog improves on antiparasitic therapy, sarcoptic mange was the likely cause.' },
  { question: 'Why did my adult dog suddenly develop demodectic mange?', answer: 'Adult-onset generalized demodicosis — new generalized Demodex in any dog over 18 months — is a flag that something is suppressing the immune system. The page lists the causes that must be investigated: Cushing\'s disease, hypothyroidism, diabetes mellitus, neoplasia, or immunosuppressive medications. Treating the skin without finding the underlying cause results in treatment failure, so ask your veterinarian about a workup, not just mite treatment.' },
]

const combined = combineSchemas(schema, med, buildFAQSchema({ questions: FAQS.map(f => ({ question: f.question, answer: f.answer })) }))

export default function DogMangePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Mange in Dogs', subtitle: 'Two completely different mite species cause two completely different diseases both called "mange." Sarcoptic mange is highly contagious to other animals and humans. Demodectic mange is not contagious but indicates immune compromise. The distinction matters enormously for treatment and household management.', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '9 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Mange', href: '/health/dog-mange' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Skin Allergies', href: '/health/dog-skin-allergies', category: 'Dog Health' }, { title: 'Dog Hot Spots', href: '/health/dog-hot-spots', category: 'Dog Health' }, { title: 'Pyoderma in Dogs', href: '/health/dog-pyoderma', category: 'Dog Health' }]}
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
          <RelatedLinks title="Related Guides" links={[{ label: 'Dog Skin Allergies', href: '/health/dog-skin-allergies' }, { label: 'Best Flea & Tick', href: '/reviews/best-flea-tick-prevention' }, { label: 'Dog Ear Infections', href: '/health/dog-ear-infections' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
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

          <h2 id="faq">FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} includeSchema={false} allowMultiple />

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
