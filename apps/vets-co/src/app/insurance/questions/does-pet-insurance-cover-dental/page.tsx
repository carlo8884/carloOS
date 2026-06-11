import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, FAQAccordion, RelatedLinks, AffiliateDisclosure, CrossPortfolioCard } from '@carloOS/ui'
import { buildArticleSchema, SchemaScript } from '@carloOS/ui'
import { ArticleByline, CalloutBox, ArticleSourcesList } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'vets-co', title: 'Does Pet Insurance Cover Dental? | Vets.co', description: 'Most accident-and-illness policies cover dental disease and injuries but not routine cleanings. Many require annual dental care to keep claims eligible.', path: '/insurance/questions/does-pet-insurance-cover-dental', type: 'article' })

const schema = buildArticleSchema({ siteId: 'vets-co', title: 'Does Pet Insurance Cover Dental?', description: 'What pet insurance covers for dental disease and injuries versus routine cleanings, and the dental-care requirements that keep claims eligible.', url: 'https://vets.co/insurance/questions/does-pet-insurance-cover-dental', imageUrl: '', authorName: 'Vets.co Editorial', publishedAt: '2026-06-11T00:00:00Z', modifiedAt: '2026-06-11T00:00:00Z' })

const FAQS = [
  { question: 'Does pet insurance cover dental cleanings?', answer: 'Not through the core policy. Routine dental cleanings are preventive care, which accident-and-illness policies exclude — the same way they exclude vaccines and annual exams. Cleanings are covered only if you add a wellness or routine-care plan, which reimburses a fixed annual allowance toward predictable care. The core policy covers dental disease and injury treatment, not the scheduled cleaning that helps prevent them.' },
  { question: 'Does pet insurance cover tooth extractions?', answer: 'Usually, yes — when the extraction treats dental disease or injury rather than routine maintenance. Extractions for a fractured tooth, advanced periodontal disease, or a tooth damaged by trauma are typically eligible under an accident-and-illness policy, subject to your deductible, reimbursement percentage, and any dental-specific clauses. Extractions performed as part of a purely preventive cleaning may be treated differently, so the reason for the procedure matters.' },
  { question: 'Why does my policy require annual dental exams?', answer: 'Many insurers make dental-illness claims contingent on evidence that you have kept up with routine dental care — typically an annual exam and sometimes a cleaning. The reasoning is that periodontal disease is largely preventable with regular care, so the insurer asks owners to do their part. If you skip recommended dental care, the insurer may reduce or deny a later dental claim on the grounds that the condition was foreseeable and neglected. Reading the dental clause before you need it avoids that surprise.' },
]

export default function Page() {
  return (
    <>
      <SchemaScript schema={schema} />
      <ArticleLayout siteId="vets-co"
        hero={{ title: 'Does Pet Insurance Cover Dental?', subtitle: 'Most accident-and-illness policies cover dental disease and dental injuries — extractions, fractured teeth, periodontal treatment — but not routine cleanings. Many insurers also require evidence of annual dental care to keep dental claims eligible.', category: 'Insurance Q&A', authorName: 'Vets.co Editorial', publishedAt: 'June 2026', readTime: '6 min' }}
        breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Insurance', href: '/insurance' }, { name: 'Questions', href: '/insurance/questions' }, { name: 'Dental', href: '/insurance/questions/does-pet-insurance-cover-dental' }]}
        sidebar={<>
          <div className="bg-brand-surface border border-brand-border rounded-xl p-5">
            <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-text-light mb-3">Quick Answer</div>
            {[['Dental disease/injury', 'Usually covered (A&I)'], ['Routine cleanings', 'Excluded (wellness add-on)'], ['Common condition', 'Evidence of annual dental care'], ['Read', 'The policy’s dental clause']].map(([p, d]) => (
              <div key={p} className="py-2 border-b border-brand-border last:border-0">
                <div className="text-xs font-bold text-brand-dark">{p}</div>
                <div className="text-2xs text-brand-text-light">{d}</div>
              </div>
            ))}
          </div>
          <RelatedLinks title="Related Questions" links={[{ label: 'Does insurance cover vaccines?', href: '/insurance/questions/does-pet-insurance-cover-vaccines' }, { label: 'Wellness Plans vs. Insurance', href: '/insurance/wellness-plans-vs-insurance' }, { label: 'Periodontal Disease in Pets', href: '/health/periodontal-disease-pets' }, { label: 'All insurance questions', href: '/insurance/questions' }]} />
          <CrossPortfolioCard currentSite="vets-co" contentType="health" variant="sidebar" />
        </>}
      >
        <div className="carloOS-article">
          <ArticleByline siteName="Vets.co Editorial" publishedAt="2026-06-11T00:00:00Z" updatedAt="2026-06-11T00:00:00Z" reviewedBy="Editorial team" />

          <CalloutBox variant="info" title="The short answer">
            Most accident-and-illness policies cover <strong>dental disease and dental injuries</strong> — extractions, fractured teeth, and treatment of periodontal disease — but <strong>not</strong> routine dental <strong>cleanings</strong>, which are preventive and sit in wellness-plan territory. Many insurers require evidence of annual dental exams or cleanings to keep dental-illness claims eligible, so read the dental clause.
          </CalloutBox>

          <h2>The Line Between Disease and Maintenance</h2>
          <p>Dental coverage follows the same principle as the rest of an accident-and-illness policy: the unexpected is covered, the predictable is not. Treatment for dental <em>disease</em> and <em>injury</em> — a fractured tooth, an abscess, advanced periodontal disease, a tooth knocked loose by trauma — is generally eligible, because these are the kind of unplanned problems insurance exists for. A routine dental <em>cleaning</em>, by contrast, is scheduled preventive care, and the core policy excludes it just as it excludes vaccines and the annual wellness exam.</p>
          <p>That distinction can blur at the clinic, because a cleaning sometimes reveals problems that need treatment. The reason for a given procedure usually determines how it is handled: extractions performed to treat diseased or damaged teeth tend to be covered, while work done purely as part of preventive maintenance does not. When in doubt, the diagnosis on the invoice matters as much as the procedure name.</p>

          <h2>What the Core Policy Typically Pays For</h2>
          <p>Under most accident-and-illness policies, eligible dental claims include treatment of periodontal disease, extractions of diseased or fractured teeth, repair of dental injuries, and management of oral infections — all subject to your deductible, reimbursement percentage, and annual limit. Periodontal disease is one of the most common conditions veterinarians see, so dental coverage is not a niche concern; it can account for a meaningful share of an older pet&apos;s care. Our guide on <a href="/health/periodontal-disease-pets">periodontal disease in pets</a> explains why this matters clinically.</p>

          <h2>What It Does Not Cover</h2>
          <p>Routine cleanings, polishing, and other purely preventive dental work are outside the core policy. If you want help with those predictable costs, the route is a wellness or routine-care add-on, which reimburses a capped annual allowance toward preventive care including cleanings. As with any wellness rider, whether it pays off is arithmetic — compare the premium to what you would spend on the cleanings it covers. The trade-offs are covered in our <a href="/insurance/wellness-plans-vs-insurance">wellness plans versus insurance</a> guide and in <a href="/insurance/questions/does-pet-insurance-cover-vaccines">does pet insurance cover vaccines</a>, which faces the same preventive-versus-unexpected divide.</p>

          <h2>The Dental-Care Requirement to Watch</h2>
          <p>The clause that most often trips owners up is the dental-maintenance requirement. Because periodontal disease is largely preventable, many insurers make dental-illness claims contingent on evidence that you have kept up with recommended dental care — usually an annual exam, sometimes a cleaning within a defined window. Skip that care, and a later dental claim may be reduced or denied on the grounds that the condition was foreseeable and could have been prevented. This is not universal, and the exact requirement varies, which is precisely why the dental clause is worth reading before you assume your pet&apos;s dental treatment is covered.</p>

          <h2 id="next-steps">Next Steps</h2>
          <p>Dental is one of several places where the preventive-versus-unexpected line decides coverage. Understanding it alongside the cost and worth-it questions gives you the full picture before you buy.</p>
          <AffiliateDisclosure variant="inline" siteId="vets-co" />
          <ul>
            <li>See how preventive care is handled in <a href="/insurance/questions/does-pet-insurance-cover-vaccines">does pet insurance cover vaccines</a>.</li>
            <li>Compare carriers and their dental clauses in our <a href="/reviews/best-pet-insurance">best pet insurance comparison</a>.</li>
            <li>Narrow the field with the <a href="/tools/insurance-finder">coverage finder</a>, or weigh the decision with the <a href="/tools/pet-insurance-worth-it-calculator">worth-it calculator</a>.</li>
          </ul>

          <h2>FAQ</h2>
          <FAQAccordion items={FAQS.map(f => ({ question: f.question, answer: f.answer, answerText: f.answer }))} allowMultiple />

          <ArticleSourcesList sources={[
            { label: 'A Consumer’s Guide to Pet Insurance', url: 'https://content.naic.org/cipr-topics/pet-insurance', publisher: 'NAIC' },
            { label: 'State of the Industry Report (coverage scope)', url: 'https://naphia.org/state-of-the-industry/', publisher: 'NAPHIA' },
            { label: 'Sample carrier dental-coverage and maintenance-requirement disclosures', publisher: 'General carrier policy disclosures (not an endorsement)' },
          ]} />
        </div>
      </ArticleLayout>

      <div className="px-container-sm sm:px-container pb-12">
        <CrossPortfolioCard currentSite="vets-co" contentType="health" />
      </div>
    </>
  )
}
