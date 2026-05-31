import type { Metadata } from 'next'
import Link from 'next/link'
import {
  buildMetadata,
  buildHowToSchema,
  ArticleLayout,
  FAQAccordion,
  EmailCapture,
  TableOfContents,
  AffiliateDisclosure,
} from '@carloOS/ui'
import { SeniorWellnessChecklist } from '../../../components/visual/SeniorWellnessChecklist'

const URL = 'https://seniorpets.com/tools/senior-wellness-checkin'

export const metadata: Metadata = buildMetadata({
  siteId: 'seniorpets',
  title: 'Senior Pet Wellness Check-in Checklist | SeniorPetPharmacy',
  description: 'Owner-side senior-pet wellness checklist. Check change signs over the last 1-3 months; the count routes you to the right vet visit timing.',
  path: '/tools/senior-wellness-checkin',
})

const schema = buildHowToSchema({
  name: 'How to track senior pet wellness changes at home',
  description:
    'Use a published owner-side checklist of senior-pet change signs to track wellness over time and route to the right veterinary visit timing — schedule this week, raise at next visit, monitor, or routine annual care.',
  url: URL,
  totalTime: 'PT3M',
  steps: [
    {
      name: 'Confirm species and age',
      text: 'Dogs typically transition to senior care at 7 years old (later for small breeds, earlier for large breeds). Cats typically transition at 10 years old. Senior care visits are recommended at least twice yearly past these thresholds.',
    },
    {
      name: 'Check observed signs',
      text: 'Read each listed senior change sign and check it if your pet is showing it in the last 1-3 months. Honest checking is more useful than minimizing — early detection is the whole point.',
    },
    {
      name: 'Read the verdict',
      text: 'The verdict routes to one of four wellness-visit timings based on the count of signs present.',
    },
    {
      name: 'Bring the checklist to the vet',
      text: 'Concrete observable signs help your vet build the workup. Print the page or save the result before the visit.',
    },
    {
      name: 'Re-check quarterly',
      text: 'Senior changes accumulate over months. Quarterly re-checks catch new signs before they compound.',
    },
  ],
})

const FAQS = [
  {
    question: 'When is a pet considered "senior"?',
    answer:
      'Dogs: typically 7 years old for medium-to-large breeds; 8-10 for small breeds; 5-6 for giant breeds (Great Danes, mastiffs). Cats: typically 10 years old (the AAFP "senior" definition is 10+; "geriatric" is 15+). These are general guidelines — your vet may adjust based on your specific pet\'s health and breed.',
  },
  {
    question: 'Why twice-yearly visits for senior pets?',
    answer:
      'In senior pets, six months is the equivalent of 2-3 years in human time. Changes can develop quickly. Twice-yearly senior wellness exams catch issues like kidney disease, hyperthyroidism, dental disease, and arthritis at stages where intervention is most effective — and senior bloodwork is meaningfully more informative than once-yearly.',
  },
  {
    question: 'What is "senior bloodwork"?',
    answer:
      'A senior wellness panel typically includes: complete blood count (CBC), serum chemistry (kidney, liver, electrolytes, glucose), urinalysis, and T4 (thyroid — especially important for cats over 10). Many practices offer a discounted "senior wellness package" that includes these plus blood pressure measurement. Annual or semi-annual senior bloodwork catches diseases at sub-clinical stages.',
  },
  {
    question: 'My senior cat is drinking a lot more water. Is that an emergency?',
    answer:
      'Increased water intake (polydipsia) and increased urination (polyuria) — collectively "PU/PD" — are the two most common early signs of kidney disease, diabetes mellitus, and hyperthyroidism in senior cats. Not an emergency, but the right time for a vet visit with bloodwork rather than waiting for the annual exam. A normal cat drinks about 60-70 mL per kg of body weight per day; sustained drinking above ~100 mL/kg/day warrants assessment.',
  },
  {
    question: 'How do I track changes over time?',
    answer:
      'Re-run the checklist quarterly and save the date + count. A 3-month trajectory of "0 signs → 1 sign → 3 signs" is meaningful clinically. Photograph your senior pet from the same angle quarterly — visual change in muscle mass over the spine or rump is one of the most reliable trackable senior signs.',
  },
  {
    question: 'Is this a substitute for a vet exam?',
    answer:
      'No. The checklist is an owner-side reference tool to help you decide when to schedule the vet visit. Senior pets need hands-on examination, bloodwork, and (often) imaging that an owner cannot perform at home. The tool helps you not wait too long; it does not replace the visit itself.',
  },
]

export default function SeniorWellnessCheckinPage() {
  return (
    <ArticleLayout
      siteId="seniorpets"
      hero={{
        title: 'Senior Pet Wellness Check-in',
        subtitle:
          'Owner-side checklist of senior change signs. The count routes you to the right vet wellness visit timing — sourced from published senior-care references.',
        category: 'Wellness tool',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '4 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Wellness Check-in' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The checklist', href: '#checklist' },
              { label: 'How the verdict works', href: '#verdict' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="seniorpets"
            title="SeniorPets — wellness updates"
            subtitle="Senior pet care references."
            source="senior-wellness-checkin"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <h2 id="checklist">The checklist</h2>
        <p>
          Toggle to dog or cat and check every sign your senior pet is showing in the last 1-3 months. The count routes to one of four wellness-visit timings.
        </p>
        <SeniorWellnessChecklist />

        <h2 id="verdict">How the verdict works</h2>
        <ul>
          <li><strong>📅 Schedule this week (4+ signs):</strong> multiple concurrent senior changes warrant a prompt vet visit with bloodwork rather than waiting for the annual exam.</li>
          <li><strong>🩺 Bring up at next visit (2-3 signs):</strong> right time to schedule a senior wellness panel within 2-4 weeks, even before the annual.</li>
          <li><strong>👀 Mention + monitor (1 sign):</strong> raise next time you talk to the vet; re-run the checklist in 30 days.</li>
          <li><strong>✅ Routine (0 signs):</strong> annual or twice-yearly senior wellness exam is fine.</li>
        </ul>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The checklist uses owner-observable change signs published in senior-pet veterinary references. Each sign was selected because:
        </p>
        <ul>
          <li>It is observable without medical equipment</li>
          <li>It appears consistently in published senior-wellness owner guides</li>
          <li>It is unambiguous (binary present / not present)</li>
          <li>Its presence in published case-series associates with treatable underlying conditions when caught early</li>
        </ul>
        <p>
          The checklist does <strong>not</strong>:
        </p>
        <ul>
          <li>Diagnose any specific underlying condition</li>
          <li>Replace senior bloodwork — many diseases (early kidney disease, sub-clinical hyperthyroidism) are visible on bloodwork before any owner-side sign appears</li>
          <li>Account for chronic conditions already under vet care (medication changes can mask or mimic senior signs)</li>
          <li>Cover all rare presentations — owner intuition matters; any uncertainty warrants a vet call regardless of count</li>
        </ul>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>AAHA / AAFP (American Animal Hospital Association / American Association of Feline Practitioners) — Senior Care Guidelines for Dogs and Cats.</li>
          <li>Bartges, J., et al. (2012). AAHA canine life stage guidelines. <em>Journal of the American Animal Hospital Association</em>, 48(1), 1-11.</li>
          <li>Vogt, A. H., et al. (2010). AAFP-AAHA feline life stage guidelines. <em>Journal of Feline Medicine and Surgery</em>, 12(1), 43-54.</li>
          <li>AVMA pet owner resources on senior pet care and end-of-life decisions.</li>
          <li>Cornell Feline Health Center — owner-facing references on common senior cat conditions.</li>
        </ul>
        <p className="text-sm text-brand-text-muted">
          SeniorPetPharmacy cites these as the published basis for the senior change signs and wellness-visit timing thresholds used by the checklist. Site Editorial does not have practicing veterinarians on staff; clinical decisions belong to the pet&apos;s veterinarian.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          Re-run this checklist quarterly. Track the count over time — a trajectory of increasing signs is more useful than any single check-in.
        </p>

        <AffiliateDisclosure variant="inline" siteId="seniorpets" />
      </div>
    </ArticleLayout>
  )
}
