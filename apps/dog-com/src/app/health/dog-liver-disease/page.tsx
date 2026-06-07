import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, buildMedicalWebPageSchema, combineSchemas, SchemaScript } from '@carloOS/ui'
import { ArticleSourcesList } from '@carloOS/ui'
const SOURCES = [
  { label: 'Merck Veterinary Manual: Hepatic Disease in Dogs', url: 'https://www.merckvetmanual.com/digestive-system/hepatic-disease-in-small-animals/hepatic-disease-in-dogs', publisher: 'Merck Vet Manual' },
  { label: 'ACVIM: Consensus Statement on the Diagnosis and Management of Chronic Hepatitis in Dogs', url: 'https://www.acvim.org', publisher: 'ACVIM' },
  { label: 'AVMA: Liver Disease in Dogs', url: 'https://www.avma.org/resources-tools/pet-owners/petcare/common-health-conditions-dogs', publisher: 'AVMA' },
  { label: 'Center SA et al. S-adenosylmethionine (SAMe) in hepatic disease. J Vet Intern Med. 2002;16(2):131-140.', publisher: 'JVIM' },
]

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Liver Disease in Dogs — ALT, ALP, Portosystemic Shunts | Dog.com', description: 'Liver disease in dogs ranges from reversible elevation of liver enzymes to cirrhosis and portosystemic shunts.', path: '/health/dog-liver-disease', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Liver Disease in Dogs', description: 'ALT, ALP, portosystemic shunts, and dietary management for canine liver disease.', url: 'https://dog.com/health/dog-liver-disease', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
const med = buildMedicalWebPageSchema({ name: 'Liver Disease in Dogs', description: 'Canine liver disease — enzyme interpretation, portosystemic shunts, and management.', url: 'https://dog.com/health/dog-liver-disease', authorName: 'Dog.com Editorial', lastReviewed: '2025-05-01' })
const combined = combineSchemas(schema, med)
export default function DogLiverDiseasePage() {
  return (
    <>
      <SchemaScript schema={combined} />
      <ArticleLayout siteId="dog-com"
        hero={{ title: 'Liver Disease in Dogs', subtitle: 'The liver performs over 500 functions — from detoxification and protein synthesis to glucose regulation and bile production. Liver disease in dogs spans a spectrum from mildly elevated enzymes on routine bloodwork (often reversible) to advanced cirrhosis and congenital shunts (complex management challenges).', category: 'Dog Health', authorName: 'Dog.com Editorial', authorAvatar: '🐾', publishedAt: 'May 2025', readTime: '10 min',}}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Dog Health', href: '/health' }, { name: 'Liver Disease', href: '/health/dog-liver-disease' }]}
        relatedLinks={[{ title: 'Dog Health Hub', href: '/health', category: 'Hub' }, { title: 'Dog Kidney Disease', href: '/health/dog-kidney-disease', category: 'Dog Health' }, { title: 'Pancreatitis in Dogs', href: '/health/pancreatitis', category: 'Dog Health' }, { title: 'Dog Symptoms Guide', href: '/health/dog-symptoms-guide', category: 'Dog Health' }]}
        sidebar={<>
          <TableOfContents items={[{ label: 'Enzyme Interpretation', href: '#enzymes' }, { label: 'Hepatitis', href: '#hepatitis' }, { label: 'Portosystemic Shunts', href: '#shunts' }, { label: 'Cirrhosis', href: '#cirrhosis' }, { label: 'Dietary Management', href: '#diet' }]} />
          <RelatedLinks title="Related Guides" links={[{ label: 'Pancreatitis', href: '/health/pancreatitis' }, { label: "Cushing's Disease", href: '/health/cushing-disease' }, { label: 'Dog Obesity', href: '/health/dog-obesity' }, { label: 'Best Pet Insurance', href: '/reviews/best-pet-insurance' }]} />
          <CrossPortfolioCard currentSite="dog-com" contentType="health" variant="sidebar" />
          <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Health Tips" subtitle="Practical guidance weekly." source="health-liver" />
        </>}
      >
        <div className="carloOS-article">
          <h2 id="enzymes">Understanding Liver Enzyme Elevations</h2>
          <p><strong>ALT (Alanine Aminotransferase):</strong> A liver-specific enzyme released when hepatocytes are damaged or dying. Elevated ALT indicates hepatocellular injury — the degree of elevation correlates roughly (not precisely) with the extent of damage. Mildly elevated ALT (1–3× upper normal) can result from muscle damage, certain medications, and transient hepatocellular stress — not all ALT elevations indicate significant liver disease. Markedly elevated ALT (10× or more upper normal) indicates significant hepatocyte damage requiring investigation. The trend over time matters more than a single value.</p>
          <p><strong>ALP (Alkaline Phosphatase):</strong> Less liver-specific than ALT — produced by liver, bone, intestine, and adrenal cortex. In dogs, steroid-induced ALP (from endogenous cortisol in Cushing's disease or exogenous corticosteroids) can cause dramatic ALP elevation without primary liver disease. An elevated ALP in combination with other Cushing's signs (PU/PD, pot belly, panting) warrants Cushing's investigation before assuming primary liver disease. Primary biliary disease also elevates ALP significantly.</p>

          <h2 id="hepatitis">Chronic Hepatitis</h2>
          <p>Chronic hepatitis — persistent hepatocellular inflammation — is the most common liver disease diagnosis in dogs. It may be idiopathic (no identifiable cause), infectious (Leptospira, adenovirus), immune-mediated, or toxic (certain medications, blue-green algae, mushrooms). Some breeds have genetic predispositions: Bedlington Terriers (copper storage disease — copper accumulates to toxic levels in the liver), Doberman Pinschers (chronic hepatitis with copper accumulation), and Labrador Retrievers. Liver biopsy provides the definitive diagnosis and guides treatment — identifying the cause and the degree of fibrosis.</p>

          <h2 id="shunts">Portosystemic Shunts (PSS)</h2>
          <p>A portosystemic shunt is an abnormal vascular connection that allows portal blood (carrying nutrients and toxins absorbed from the intestines) to bypass the liver and enter the systemic circulation directly. The liver is bypassed — it cannot detoxify ammonia and other substances, which accumulate in the blood. Signs: neurological (hepatic encephalopathy — head pressing, circling, seizures, disorientation), poor growth in young animals, small stature, excessive salivation, and post-prandial neurological signs. Most congenital shunts are diagnosed in young dogs (less than 2 years) when they fail to thrive normally.</p>
          <p>Breed predispositions: Yorkshire Terriers, Maltese, Pugs, Miniature Schnauzers (intrahepatic shunts occur in Irish Wolfhounds, Retrievers, and other large breeds). Diagnosis: bile acids (pre- and post-prandial — the most sensitive screening test), ammonia, abdominal ultrasound, nuclear scintigraphy, or CT angiography. Treatment: surgical ligation is the goal for single extrahepatic shunts in appropriate surgical candidates — produces good outcomes in many cases. Medical management (lactulose, low-protein diet, antibiotics to reduce ammonia-producing intestinal bacteria) is used to stabilize and for cases where surgery is not possible.</p>

          <h2 id="cirrhosis">Cirrhosis and End-Stage Liver Disease</h2>
          <p>Cirrhosis — replacement of functional liver tissue with fibrous scar tissue — is the endpoint of progressive chronic liver disease. Unlike earlier stages, cirrhosis is largely irreversible. The remaining functional tissue may be insufficient for normal liver function, producing clinical signs: jaundice, ascites (fluid in the abdomen), hepatic encephalopathy, coagulopathy (inability to form clots normally — prolonged bleeding times), and the cachexia of end-stage liver failure. Management is palliative — supporting liver function, managing fluid accumulation (periodic abdominocentesis to remove ascites), and dietary management. Prognosis is poor to guarded for advanced cirrhosis.</p>

          <h2 id="diet">Dietary Management for Liver Disease</h2>
          <p>The traditional recommendation of severely protein-restricted diets for all liver disease dogs has been revised — protein restriction is appropriate for hepatic encephalopathy (where protein is a substrate for ammonia production) but not for all liver disease. Most dogs with liver disease benefit from: highly digestible protein sources (egg, cottage cheese, poultry), adequate protein to prevent muscle wasting (the liver needs amino acids for regeneration), moderate fat restriction (biliary disease specifically), and supplementation with vitamin E and SAMe (S-adenosylmethionine — hepatoprotective antioxidant) and milk thistle (silymarin). Denamarin (SAMe + silybin complex) is a widely used hepatoprotective supplement in veterinary practice — evidence for benefit in chronic hepatitis is supportive. Hill's l/d and Royal Canin Hepatic are the standard prescription liver support diets.</p>

          <ArticleSourcesList sources={SOURCES} />
        </div>
      </ArticleLayout>
    </>
  )
}
