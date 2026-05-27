import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'
export const metadata: Metadata = buildMetadata({ siteId: 'lizard-com', title: 'Respiratory Infections in Reptiles — Wheezing | Lizard.com', description: 'Reptile respiratory infections: wheezing, mucus from nostrils, and open-mouth breathing. Almost always caused by incorrect temperatures or humidity.', path: '/health/respiratory-infection', type: 'article' })
const schema = buildArticleSchema({ siteId: 'lizard-com', title: 'Respiratory Infections in Reptiles', description: 'Signs, causes, and treatment of respiratory infections in reptiles.', url: 'https://lizard.com/health/respiratory-infection', imageUrl: '', authorName: 'Lizard.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })
export default function RespiratoryInfectionPage() {
  return (
    <ArticleLayout siteId="lizard-com"
      hero={{ title: 'Respiratory Infections in Reptiles', subtitle: 'Respiratory infections are the most common bacterial disease in captive reptiles and almost universally linked to husbandry deficits — temperatures too low, humidity inappropriate, or inadequate thermal gradient. Treating the infection without correcting the underlying environment guarantees recurrence.', category: 'Reptile Health', authorName: 'Lizard.com Editorial', authorAvatar: '🦎', publishedAt: 'May 2025', readTime: '8 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Reptile Health', href: '/health/sick-reptile-signs' }, { name: 'Respiratory Infection', href: '/health/respiratory-infection' }]}
      schema={schema}
      sidebar={<>
        <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.07)', borderRadius: '12px', padding: '16px' }}>
          <div style={{ fontSize: '11px', fontWeight: 700, letterSpacing: '0.12em', textTransform: 'uppercase', color: 'rgba(238,240,228,0.4)', marginBottom: '12px' }}>Signs</div>
          {['Wheezing, clicking, or crackling sounds when breathing', 'Mucus from nostrils (nasal discharge)', 'Open-mouth breathing (especially snakes)', 'Head tilted upward (snakes — to drain respiratory tract)', 'Lethargy and anorexia', 'Mucus bubbles around mouth'].map(s => (
            <div key={s} style={{ padding: '5px 0', borderBottom: '1px solid rgba(255,255,255,0.06)', fontSize: '12px', color: 'rgba(238,240,228,0.6)' }}>{s}</div>
          ))}
        </div>
        <RelatedLinks title="Related Guides" links={[{ label: 'Sick Reptile Signs', href: '/health/sick-reptile-signs' }, { label: 'Temperature Guide', href: '/setup/temperature-guide' }, { label: 'Stomatitis', href: '/health/stomatitis' }]} />
        <EmailCapture variant="sidebar" siteId="lizard-com" title="Free Care Sheets" subtitle="Species guides for subscribers." source="health-respiratory" ctaText="Download Free" />
      </>}
    >
      <div className="carloOS-article">
        <h2>Why Low Temperatures Cause Respiratory Infections</h2>
        <p>Reptiles are ectothermic — their immune system function is temperature-dependent. A ball python at 75°F ambient has a significantly impaired immune response compared to the same snake at 88°F basking temperature. The bacteria that cause respiratory infections (Pseudomonas, Aeromonas, Mycoplasma, and others) are present in the reptile's environment and even in its own oral flora — they do not cause disease when the immune system is functioning at appropriate temperature. When temperatures are too low or the thermal gradient is insufficient (no warm basking spot), immune function is depressed enough that opportunistic bacteria establish in the respiratory tract.</p>
        <p>High humidity in species that require dry conditions (ball pythons in glass tanks with mesh tops exposed to high ambient humidity) promotes bacterial and fungal growth in the respiratory tissue. Conversely, inadequate humidity in tropical species causes desiccation of mucous membranes, reducing their barrier function. Both extremes from the species-appropriate range predispose to respiratory infection.</p>

        <h2>Identifying Respiratory Infection</h2>
        <p>Early signs in lizards: reduced activity, slightly open mouth at rest, subtle nasal discharge. Early signs in snakes: posture with head elevated (snakes tilt the head upward to help drain fluid from the respiratory tract), wheezing or clicking sounds during breathing — the sound is usually audible without placing your ear to the animal. Advanced signs: copious mucus discharge from nose and mouth, open-mouth breathing with effort, complete anorexia, extreme lethargy.</p>
        <p>Test immediately: verify temperatures throughout the enclosure with an infrared thermometer. Measure humidity. Assess the basking surface temperature at the point where the animal actually bastes — not just the ambient air. Suboptimal parameters tell you the likely cause; correcting them is part of treatment. Then contact a reptile veterinarian.</p>

        <h2>Treatment</h2>
        <p>Veterinary evaluation is required. The veterinarian will likely take a swab from the respiratory tract for culture and sensitivity to identify the causative organism and guide antibiotic selection. Empirical treatment begins while culture results are pending: enrofloxacin (Baytril) is a common first choice — given as an injection or oral medication, depending on severity. Severe cases may require hospitalization with nebulization (antibiotic mist delivered directly to the respiratory tract), fluid support, and assisted feeding.</p>
        <p>While treating: raise the basking temperature to the highest appropriate level for the species — this supports immune function. For snakes: 90°F warm side basking surface. Maintain appropriate humidity on the cool side while keeping the warm side accessible. The animal should be able to thermoregulate actively during treatment.</p>

        <h2>Mycoplasma in Chelonians</h2>
        <p>Tortoises and box turtles are susceptible to Mycoplasma agassizii — a specific respiratory pathogen that causes chronic upper respiratory tract disease (URTD). Signs include nasal discharge, open-mouth breathing, and conjunctivitis. Mycoplasma is not eliminated by standard antibiotics — it is managed with azithromycin or enrofloxacin that suppress it without clearing infection. Infected chelonians should not be mixed with Mycoplasma-naive populations — it is highly contagious and can devastate wild tortoise populations if captive animals are released.</p>
      </div>
    </ArticleLayout>
  )
}
