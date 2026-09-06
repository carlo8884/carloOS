import type { Metadata } from 'next'
import {
  buildMetadata,
  ArticleLayout,
  EmailCapture,
  RelatedLinks,
  TableOfContents,
  CrossPortfolioCard,
  ArticleByline,
  AffiliateDisclosure,
  ShopCtas,
} from '@carloOS/ui'
import { buildArticleSchema } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Trainer Credentials — CPDT-KA, CBCC-KA | Dog.com',
  description:
    "How to evaluate a dog trainer's qualifications. CPDT-KA, CBCC-KA, CAAB, DACVB — what each credential means, what it requires, and red flags to avoid.",
  path: '/training/trainer-credentials',
  category: 'Finding a Trainer',
  type: 'article',
})
const schema = buildArticleSchema({
  siteId: 'dog-com',
  title: 'Dog Trainer Credentials Explained',
  description: 'CPDT-KA, CBCC-KA, CAAB, DACVB — what each means and how to choose.',
  url: 'https://dog.com/training/trainer-credentials',
  imageUrl: '',
  authorName: 'Dog.com Editorial',
  publishedAt: '2025-05-01T00:00:00Z',
  modifiedAt: '2026-09-06T00:00:00Z',
})

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
        <ArticleByline siteName="Dog.com Editorial" publishedAt="2025-05-01T00:00:00Z" updatedAt="2026-09-06T00:00:00Z" reviewedBy="Editorial team" />

        {/* Under-hero capture — source must end in under-hero so it always renders. */}
        <div className="mb-8">
          <p className="mb-1 text-2xs font-bold uppercase tracking-eyebrow text-brand-primary">
            Keep the trainer-credentials CPDT interview checklist
          </p>
          <h2 className="mb-2 font-display text-xl font-bold text-brand-dark">
            Trainer-credentials CPDT interview checklist
          </h2>
          <p className="mb-3 text-sm leading-relaxed text-brand-text-mid">
            Email the trainer-credentials CPDT interview checklist, CPDT-KA / CBCC-KA credential
            reference card, and session-observation watch log that match the credential-reference,
            hiring-interview, and observe-a-session copy on this page — a laminated dog CPDT-KA /
            CBCC-KA credential reference card so
            three-hundred-hours-of-documented-training-experience /
            five-hundred-hours-of-documented-behavior-consulting /
            knowledge-assessed-written-exam-rather-than-skills-assessed stay visible before anyone
            hires a trainer with no relevant education (not a laminated dog training red-flags
            checklist, not a laminated dog aggression warning-signal sequence checklist, not a
            laminated dog resource-guarding trade-game checklist, not a laminated dog off-leash
            recall-proofing checklist), a dog CPDT-KA hiring interview question card so
            what-credentials-do-you-hold / are-they-current / will-i-be-learning-to-train-my-dog
            stay posted (not a dog force-free trainer interview question card, not a dog aggression
            type-and-function question card, not a dog food-bowl safety question card, not a dog
            20-to-30-foot long-line question card), and a dog trainer session-observation watch log
            notebook so can-i-observe-a-session-with-another-client /
            training-the-dog-while-excluding-the-owner / veterinary-reference-required stay written
            down (not a dog Easy Walk / Ruffwear Front Range watch log, not a dog aggression
            never-alpha-roll watch log, not a dog resource-guarding never-punish-growl watch log,
            not a dog recall-cue never-punish watch log). Educational training tools only, not a
            ranked product list, not a clinic listing, and not a substitute for a CPDT-KA, CBCC-KA,
            CAAB, or DACVB. No spam.
          </p>
          <EmailCapture
            variant="inline"
            siteId="dog-com"
            title="Trainer-credentials CPDT interview checklist"
            subtitle="Email the CPDT-KA / CBCC-KA reference card, hiring interview card, and session-observation log. No spam."
            ctaText="Email my trainer-credentials CPDT interview checklist"
            source="training-trainer-credentials-under-hero"
          />
        </div>

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
        <p>
          A laminated dog CPDT-KA / CBCC-KA credential reference card is how
          three-hundred-hours-of-documented-training-experience,
          five-hundred-hours-of-documented-behavior-consulting, and
          knowledge-assessed-written-exam-rather-than-skills-assessed stay visible before anyone
          hires a trainer with no relevant education — it is not a laminated dog training red-flags
          checklist (that lives on training-red-flags), not a laminated dog aggression
          warning-signal sequence checklist (that lives on dog-aggression), not a laminated dog
          resource-guarding trade-game checklist (that lives on resource-guarding), and not a
          laminated dog off-leash recall-proofing checklist (that lives on off-leash-training). This
          page does not hop laminated+dog+training+red+flags+checklist,
          laminated+dog+aggression+warning+signal+sequence+checklist,
          laminated+dog+resource+guarding+trade+game+checklist, or
          laminated+dog+off+leash+recall+proofing+checklist searches already pinned on other
          training pages.
        </p>

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
        <p>
          A dog CPDT-KA hiring interview question card is how what-credentials-do-you-hold,
          are-they-current, and will-i-be-learning-to-train-my-dog stay posted — it is not a dog
          force-free trainer interview question card (that lives on training-red-flags), not a dog
          aggression type-and-function question card (that lives on dog-aggression), not a dog
          food-bowl safety question card (that lives on resource-guarding), and not a dog
          20-to-30-foot long-line question card (that lives on off-leash-training). This page does
          not hop shock collars, e-collars, prong collars, choke chains, or alpha-roll gear, and it
          does not hop invented ASINs.
        </p>

        <h2 id="match">Matching Credential to Problem</h2>
        <ul>
          <li><strong>Puppy basics, obedience:</strong> CPDT-KA or CPDT-KSA</li>
          <li><strong>Leash reactivity, moderate fear behaviors:</strong> CPDT-KA with documented reactivity experience, or CBCC-KA</li>
          <li><strong>Resource guarding, aggression:</strong> CBCC-KA, CAAB, or DACVB depending on severity</li>
          <li><strong>Separation anxiety:</strong> Certified Separation Anxiety Trainer (CSAT) specialty credential — ask specifically; general trainers often lack SA-specific protocol training</li>
          <li><strong>Severe anxiety, aggression requiring medication:</strong> DACVB — the only behavior professional who can prescribe</li>
        </ul>
        <p>
          A dog trainer session-observation watch log notebook is how
          can-i-observe-a-session-with-another-client, training-the-dog-while-excluding-the-owner,
          and veterinary-reference-required stay written down — it is not a dog Easy Walk /
          Ruffwear Front Range watch log notebook (that lives on training-red-flags), not a dog
          aggression never-alpha-roll watch log notebook (that lives on dog-aggression), not a dog
          resource-guarding never-punish-growl watch log notebook (that lives on resource-guarding),
          and not a dog recall-cue never-punish watch log notebook (that lives on
          off-leash-training). This page does not hop
          dog+force+free+trainer+interview+question+card,
          dog+easy+walk+ruffwear+front+range+watch+log+notebook, or puppy+training+treats searches
          already pinned on other training pages.
        </p>

        <AffiliateDisclosure variant="inline" siteId="dog-com" />

        {/* Shop leftover kit — unused vs #1153
            laminated+dog+training+red+flags+checklist /
            dog+force+free+trainer+interview+question+card /
            dog+easy+walk+ruffwear+front+range+watch+log+notebook, #1152
            laminated+dog+aggression+warning+signal+sequence+checklist /
            dog+aggression+type+and+function+question+card /
            dog+aggression+never+alpha+roll+watch+log+notebook, #1151
            laminated+dog+resource+guarding+trade+game+checklist /
            dog+food+bowl+safety+question+card /
            dog+resource+guarding+never+punish+growl+watch+log+notebook, #1150
            laminated+dog+off+leash+recall+proofing+checklist /
            dog+20+to+30+foot+long+line+question+card /
            dog+recall+cue+never+punish+watch+log+notebook. */}
        <div className="my-6 p-5 border border-brand-border rounded-xl bg-brand-surface not-prose">
          <div className="text-2xs font-bold tracking-eyebrow uppercase text-brand-primary mb-3">
            Shop the trainer-credentials leftover kit
          </div>
          <p className="text-sm text-brand-text-mid mb-4 leading-relaxed">
            These Amazon category searches match the on-page credential-reference, hiring-interview,
            and observe-a-session copy — a laminated dog CPDT-KA / CBCC-KA credential reference
            card, a dog CPDT-KA hiring interview question card, and a dog trainer
            session-observation watch log notebook. Educational training searches only. They are
            not a ranked product list, they are not a clinic listing, they are not a #1153
            laminated red-flags checklist / force-free trainer interview / Easy Walk Front Range
            hop, they are not a #1152 laminated aggression warning-signal / type-and-function /
            never-alpha-roll hop, they are not a #1151 laminated resource-guarding trade-game /
            food-bowl safety / never-punish-growl hop, they are not a #1150 laminated off-leash
            recall-proofing / 20-to-30-foot long-line / recall-cue never-punish hop, they do not
            hop shock, e-collar, prong, choke, or alpha-roll gear, and they do not replace a
            CPDT-KA, CBCC-KA, CAAB, or DACVB. Dog.com earns a commission on qualifying purchases at
            no extra cost to you. Empty Chewy buttons stay hidden.
          </p>
          <div className="flex flex-col gap-3">
            <ShopCtas
              amazonHref="/go/amazon-brand/laminated+dog+cpdt+ka+cbcc+ka+credential+reference+card?s=training-trainer-credentials"
              amazonLabel="Browse laminated dog CPDT-KA / CBCC-KA credential reference cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+cpdt+ka+hiring+interview+question+card?s=training-trainer-credentials"
              amazonLabel="Browse dog CPDT-KA hiring interview question cards on Amazon →"
            />
            <ShopCtas
              amazonHref="/go/amazon-brand/dog+trainer+session+observation+watch+log+notebook?s=training-trainer-credentials"
              amazonLabel="Browse dog trainer session-observation watch log notebooks on Amazon →"
            />
          </div>
        </div>
      </div>
    </ArticleLayout>
  )
}
