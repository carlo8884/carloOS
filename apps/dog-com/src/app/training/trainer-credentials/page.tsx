import type { Metadata } from 'next'
import { buildMetadata, ArticleLayout, EmailCapture, RelatedLinks, TableOfContents, CrossPortfolioCard , ArticleByline } from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({ siteId: 'dog-com', title: 'Dog Trainer Credentials — CPDT-KA, CBCC-KA | Dog.com', description: 'How to evaluate a dog trainer\'s qualifications. CPDT-KA, CBCC-KA, CAAB, DACVB — what each credential means, what it requires, and red flags to avoid.', path: '/training/trainer-credentials', category: 'Finding a Trainer', type: 'article' })
const schema = buildArticleSchema({ siteId: 'dog-com', title: 'Dog Trainer Credentials Explained', description: 'CPDT-KA, CBCC-KA, CAAB, DACVB — what each means and how to choose.', url: 'https://dog.com/training/trainer-credentials', imageUrl: '', authorName: 'Dog.com Editorial', publishedAt: '2025-05-01T00:00:00Z', modifiedAt: '2025-05-01T00:00:00Z' })

const CREDENTIALS = [
  { acronym: 'CPDT-KA', full: 'Certified Professional Dog Trainer — Knowledge Assessed', issuer: 'Certification Council for Professional Dog Trainers (CCPDT)', requirements: '300 hours of documented training experience, passing a written exam, veterinary reference required. Renewal every 3 years with continuing education.', what_it_means: 'The baseline professional credential for general obedience training. Knowledge-assessed (written exam) rather than skills-assessed — demonstrates knowledge of learning theory and training techniques.', best_for: 'General obedience, puppy training, basic to intermediate behavior issues.' },
  { acronym: 'CPDT-KSA', full: 'Certified Professional Dog Trainer — Knowledge and Skills Assessed', issuer: 'CCPDT', requirements: 'All CPDT-KA requirements plus a videotaped skills assessment evaluated by CCPDT.', what_it_means: 'More rigorous than CPDT-KA — requires demonstrated applied skill, not just written knowledge. Significantly fewer trainers hold this designation.', best_for: 'General obedience with confidence that the trainer has demonstrated hands-on ability, not just theoretical knowledge.' },
  { acronym: 'CBCC-KA', full: 'Certified Behavior Consultant Canine — Knowledge Assessed', issuer: 'CCPDT', requirements: '500 hours of documented behavior consulting experience (higher bar than CPDT), exam focused on behavior modification rather than general training.', what_it_means: 'Specialized in behavior modification — appropriate for dogs with aggression, fear-based behaviors, separation anxiety, reactivity. More specialized than CPDT-KA.', best_for: 'Complex behavior problems: aggression, severe reactivity, separation anxiety, fear-based behaviors.' },
  { acronym: 'CAAB', full: 'Certified Applied Animal Behaviorist', issuer: 'Animal Behavior Society (ABS)', requirements: 'Master\'s or PhD in animal behavior or related field plus supervised experience. Academic credential, not just exam-based.', what_it_means: 'Academic behavior science credential — among the most rigorous in the field. CAABs have graduate-level education in animal behavior and learning theory.', best_for: 'Complex behavior problems, particularly those requiring scientific behavior analysis and modification.' },
  { acronym: 'DACVB', full: 'Diplomate, American College of Veterinary Behaviorists', issuer: 'American College of Veterinary Behaviorists', requirements: 'Veterinary degree + residency training in veterinary behavioral medicine + board examination.', what_it_means: 'Veterinary specialist in behavioral medicine — can prescribe medication alongside behavior modification. The most qualified professional for complex anxiety disorders, aggression with medical components, severe separation anxiety.', best_for: 'Cases requiring medication (severe separation anxiety, aggression, phobias, OCD-like behaviors), behavior problems with possible medical causes.' },
]

const RED_FLAGS = [
  { flag: '"Dominance-based" or "pack leader" methods', why: 'Dominance theory is not supported by current behavioral science. Trainers using dominance-based protocols are working from a debunked model that produces fear and aggression in dogs.' },
  { flag: 'Guarantees of results', why: 'No ethical trainer guarantees behavior outcomes — behavior change depends on consistency of implementation by the owner, the dog\'s history, and numerous other variables outside trainer control.' },
  { flag: 'Refusal to explain methods before you commit', why: 'Ethical trainers are transparent about their techniques. Reluctance to describe methods before you pay should raise concerns.' },
  { flag: 'Recommending shock collars, prong collars, or choke chains as primary training tools', why: 'The AVSAB, ASPCA, and APDT all recommend against aversive tools. Their use is associated with increased fear and aggression in the research literature.' },
  { flag: 'No credentials or references', why: 'Dog training is unregulated — anyone can call themselves a trainer. Credentials and verifiable references are the only external validation of competence.' },
  { flag: 'Training the dog while excluding the owner from participation', why: 'Behavior change requires owner consistency. A trainer who trains the dog but doesn\'t train you to continue the work is not producing lasting results.' },
]

export default function TrainerCredentialsPage() {
  return (
    <ArticleLayout
      siteId="dog-com"
      contentType="training"
      hero={{ title: 'Dog Trainer Credentials — What They Mean', subtitle: 'Dog training is completely unregulated in the United States — anyone can hang a sign and call themselves a trainer. Understanding credentials is the only way to distinguish qualified professionals from those with no relevant education.', category: 'Finding a Trainer', authorName: 'Dog.com Editorial', authorAvatar: '🐕', publishedAt: 'May 2025', readTime: '9 min' }}
      breadcrumbs={[{ name: 'Home', href: '/' }, { name: 'Training', href: '/training' }, { name: 'Trainer Credentials', href: '/training/trainer-credentials' }]}
      relatedLinks={[{ title: 'Dog Training Hub', href: '/training', category: 'Hub' }, { title: 'Training Red Flags', href: '/training/training-red-flags', category: 'Training' }, { title: 'Positive Reinforcement', href: '/training/positive-reinforcement', category: 'Training' }, { title: 'Separation Anxiety', href: '/training/separation-anxiety', category: 'Training' }]}
      schema={schema}
      sidebar={<>
        <TableOfContents items={[{ label: 'Credentials Ranked', href: '#credentials' }, { label: 'Red Flags', href: '#red-flags' }, { label: 'Questions to Ask', href: '#questions' }, { label: 'Which Credential for Your Problem', href: '#match' }]} />
        <RelatedLinks title="Related Guides" links={[{ label: 'Separation Anxiety', href: '/training/separation-anxiety' }, { label: 'Leash Reactivity', href: '/training/leash-reactivity' }, { label: 'Resource Guarding', href: '/training/resource-guarding' }]} />
        <CrossPortfolioCard currentSite="dog-com" contentType="training" variant="sidebar" />
        <EmailCapture variant="sidebar" siteId="dog-com" title="Free Dog Training Tips" subtitle="Science-based guidance every Tuesday." source="training-credentials" />
      </>}
    >
      <div className="carloOS-article">
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2025-05-01T00:00:00Z" reviewedBy="Editorial team" />
        <h2 id="credentials">Credential Reference Guide</h2>
        {CREDENTIALS.map(c => (
          <div key={c.acronym} style={{ background: 'var(--brand-surface)', border: '1px solid var(--brand-border)', borderRadius: '12px', padding: '22px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: '12px', marginBottom: '4px', flexWrap: 'wrap' }}>
              <h3 style={{ fontFamily: 'var(--font-display)', fontWeight: 700, fontSize: '1.2rem', color: 'var(--brand-primary)', margin: 0 }}>{c.acronym}</h3>
              <span style={{ fontSize: '14px', color: 'var(--brand-text-mid)', fontStyle: 'italic' }}>{c.full}</span>
            </div>
            <div style={{ fontSize: '12px', color: 'var(--brand-text-light)', marginBottom: '10px' }}>Issued by: {c.issuer}</div>
            <div style={{ display: 'grid', gap: '8px', fontSize: '13px', color: 'var(--brand-text-mid)', lineHeight: 1.7 }}>
              <div><strong style={{ color: 'var(--brand-dark)' }}>Requirements:</strong> {c.requirements}</div>
              <div><strong style={{ color: 'var(--brand-dark)' }}>What it means:</strong> {c.what_it_means}</div>
              <div><strong style={{ color: 'var(--brand-dark)' }}>Best for:</strong> {c.best_for}</div>
            </div>
          </div>
        ))}

        <h2 id="red-flags">Red Flags to Walk Away From</h2>
        {RED_FLAGS.map(r => (
          <div key={r.flag} style={{ background: 'rgba(200,74,42,0.04)', border: '1px solid rgba(200,74,42,0.15)', borderRadius: '10px', padding: '16px 20px', marginBottom: '10px' }}>
            <div style={{ fontSize: '14px', fontWeight: 700, color: 'var(--brand-dark)', marginBottom: '6px' }}>⚠️ {r.flag}</div>
            <p style={{ fontSize: '13px', color: 'var(--brand-text-mid)', margin: 0, lineHeight: 1.65 }}>{r.why}</p>
          </div>
        ))}

        <h2 id="questions">Questions to Ask Before Hiring</h2>
        <ul>
          <li>What credentials do you hold? Are they current?</li>
          <li>Can you describe your training methodology? What tools do you use?</li>
          <li>Can I observe a session with another client before committing?</li>
          <li>How do you handle a dog that is not responding to training?</li>
          <li>Do you have references I can contact?</li>
          <li>What is your experience with my specific behavior problem?</li>
          <li>Will I be learning to train my dog, or are you training the dog for me?</li>
        </ul>
        <p>A trainer who becomes defensive, evasive, or dismissive of these questions is not the right trainer for you. Qualified professionals welcome questions about their methods and credentials.</p>

        <h2 id="match">Matching Credential to Problem</h2>
        <ul>
          <li><strong>Puppy basics, obedience:</strong> CPDT-KA or CPDT-KSA</li>
          <li><strong>Leash reactivity, moderate fear behaviors:</strong> CPDT-KA with documented reactivity experience, or CBCC-KA</li>
          <li><strong>Resource guarding, aggression:</strong> CBCC-KA, CAAB, or DACVB depending on severity</li>
          <li><strong>Separation anxiety:</strong> Certified Separation Anxiety Trainer (CSAT) specialty credential — ask specifically; general trainers often lack SA-specific protocol training</li>
          <li><strong>Severe anxiety, aggression requiring medication:</strong> DACVB — the only behavior professional who can prescribe</li>
        </ul>
      </div>
    </ArticleLayout>
  )
}
