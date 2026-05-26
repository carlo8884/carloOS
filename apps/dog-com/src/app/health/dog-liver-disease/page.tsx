import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Liver Disease in Dogs — Signs, Elevated ALT & Hepatic Diets | Dog.com', description: 'Liver disease in dogs: acute hepatitis vs chronic hepatopathy, what elevated liver enzymes mean, the diagnostic workup, and when dietary management helps.', path: '/health/dog-liver-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Liver Disease in Dogs', description: 'Acute and chronic liver disease — elevated enzymes, diagnosis, and dietary management.', url: 'https://dog.com/health/dog-liver-disease', imageUrl: '', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Liver Disease in Dogs', description: 'Acute and chronic liver disease in dogs — causes, diagnosis, and treatment.', url: 'https://dog.com/health/dog-liver-disease', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function DogLiverDiseasePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Liver Disease in Dogs', subtitle: 'The liver is the largest internal organ and performs over 500 functions — metabolism, detoxification, protein synthesis, clotting factor production, and bile production. Liver disease ranges from a mild, temporary enzyme elevation to acute fulminant hepatic failure. Understanding what elevated liver enzymes actually mean is the starting point.', category: 'Dog Health', authorName: 'Dr. Amanda Reyes, DVM, DACVIM', authorCredentials: 'Internal Medicine Specialist', authorAvatar: '👩‍⚕️', publishedAt: 'May 2025', readTime: '10 min', dvmReviewed: true }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Liver Disease', href: '/health/dog-liver-disease' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Classic Signs</div>
            {['Lethargy, reduced appetite', 'Vomiting and/or diarrhea', 'Jaundice (yellow gums/eyes/skin)', 'Abdominal distension (ascites)', 'PU/PD (drinking/urinating more)', 'Hepatic encephalopathy (confusion)', 'Dark urine, pale stools'].map(s => (
              <div key={s} className="py-1 border-b border-brand-border last:border-0 text-xs text-brand-text-mid">{s}</div>
            ))}
          </div>
          <RelatedLinks title="Related Guides" links={[{ label: "Cushing's Disease", href: '/health/cushing-disease' }, { label: 'Dog Vomiting', href: '/health/dog-vomiting' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="DVM-written guidance weekly." source="health-liver" />
        </>}
      >
        <div className="carloOS-article">
          <h2>What Elevated Liver Enzymes Actually Mean</h2>
          <p>The most commonly elevated liver enzymes on routine bloodwork are ALT (alanine aminotransferase) and ALP (alkaline phosphatase). These are not the same thing, and their elevation has different implications.</p>
          <p><strong>ALT</strong> is specific to hepatocytes (liver cells) — elevated ALT reflects liver cell damage or death. The degree of elevation is not linearly proportional to the severity of damage: mild chronic hepatitis can cause moderate ALT elevation, while acute severe hepatic necrosis can cause extremely high ALT. Context matters more than the number alone.</p>
          <p><strong>ALP</strong> is produced by multiple tissues — liver, bone, intestine, and adrenal cortex. A dog on corticosteroids will have dramatically elevated ALP from steroid induction without any liver pathology. ALP elevation is common in Cushing's disease. It can also indicate biliary disease, bone disease, or true hepatic pathology. ALP elevation requires interpretation in context — it is not a reliable standalone indicator of significant liver disease.</p>
          <p>Mildly elevated liver enzymes on an otherwise normal patient with no clinical signs are a signal to investigate further, not necessarily to panic. Many dogs have mildly elevated enzymes for years without significant liver disease. The clinical picture, trend over time, and additional diagnostics determine significance.</p>

          <h2>Causes of Liver Disease</h2>
          <p><strong>Acute hepatitis:</strong> Sudden liver inflammation from toxin ingestion (xylitol — found in sugar-free gum and some peanut butters; certain mushrooms; blue-green algae; acetaminophen; some herbal supplements), infectious causes (leptospirosis — a zoonotic bacterial disease vaccine-preventable), or idiopathic causes. Presents as sudden vomiting, lethargy, jaundice, and dramatically elevated liver enzymes.</p>
          <p><strong>Chronic hepatopathy:</strong> Progressive liver disease — chronic hepatitis (immune-mediated or idiopathic), fibrosis, cirrhosis. Develops over months to years. Breed-associated copper storage disease in Bedlington Terriers, Labrador Retrievers, Dalmatians, and West Highland White Terriers causes copper accumulation in hepatocytes with progressive damage.</p>
          <p><strong>Hepatic lipidosis:</strong> Fatty infiltration of the liver — common in obese dogs that lose weight rapidly or have prolonged anorexia. The liver becomes enlarged and pale with fat accumulation. Usually reversible with nutritional support.</p>
          <p><strong>Portosystemic shunts (PSS):</strong> Congenital or acquired abnormal blood vessel connections that bypass the liver — blood from the intestine enters the systemic circulation without hepatic processing. Common in Yorkshire Terriers, Maltese, Miniature Schnauzers. Signs include hepatic encephalopathy, stunted growth, post-meal neurological signs. Surgical correction is the treatment for congenital shunts.</p>

          <h2>Diagnostic Workup</h2>
          <p>Initial: CBC, comprehensive chemistry panel, urinalysis, fasting and post-prandial bile acids (measure liver's ability to process bile — the best functional liver test), coagulation times (the liver produces clotting factors — prolonged clotting indicates significant disease). Abdominal ultrasound evaluates liver size, echogenicity, and biliary tract. Liver biopsy — histopathology — is the definitive diagnostic tool and guides specific treatment for chronic hepatopathies.</p>

          <h2>Dietary Management</h2>
          <p>Hepatic diets (Hill's Prescription Diet l/d, Royal Canin Hepatic) are formulated for dogs with confirmed liver disease: moderate protein restriction (to reduce ammonia load in dogs with hepatic encephalopathy), high-quality easily digestible protein (egg, soy-based — reduced ammonia production compared to meat protein), high carbohydrate and moderate fat, added antioxidants (vitamin E, vitamin C), and zinc supplementation. These are prescription diets requiring veterinary guidance — they are not appropriate for all dogs with elevated liver enzymes, only those with confirmed functional hepatic disease or encephalopathy.</p>
        </div>
      </ArticleLayout>
    </>
  )
}
