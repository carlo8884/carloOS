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
import { SymptomTriageChecklist } from '../../../components/visual/SymptomTriageChecklist'

const URL = 'https://askthevet.com/tools/symptom-triage'

export const metadata: Metadata = buildMetadata({
  siteId: 'askthevet',
  title: 'Pet Symptom Triage Checklist — When to Call the Vet | AskTheVet.com',
  description: 'Free pet emergency triage checklist. Check the warning signs and get an ER / urgent / today / monitor verdict from published vet emergency guidance.',
  path: '/tools/symptom-triage',
})

const schema = buildHowToSchema({
  name: 'How to triage a pet emergency at home',
  description:
    'Use a published checklist of pet emergency warning signs to decide between immediate ER care, same-day vet appointment, calling the vet for guidance, or monitoring at home.',
  url: URL,
  totalTime: 'PT2M',
  steps: [
    {
      name: 'Pick the species',
      text: 'Toggle between dog and cat. Some warning signs are weighted differently for the two species.',
    },
    {
      name: 'Check every warning sign present',
      text: 'Read each listed sign and check it if your pet is showing that sign in the last 24 hours. Honest checking is more useful than minimizing.',
    },
    {
      name: 'Read the verdict',
      text: 'The verdict routes to one of four levels: emergency (ER now), urgent (same-day appointment), today (call vet for guidance), or monitor (no emergency signs flagged).',
    },
    {
      name: 'When uncertain — call the vet',
      text: 'The checklist is a triage aid, not a diagnosis. Any uncertainty about a pet\'s condition warrants a phone call to your veterinarian. They will not be annoyed by a phone call about a sick pet.',
    },
  ],
})

const FAQS = [
  {
    question: 'Is this a substitute for taking my pet to the vet?',
    answer:
      'No. The checklist is a triage aid that helps you decide how urgently your pet needs to be seen. It does not diagnose any condition, and it never recommends staying home in place of veterinary care that is actually needed. When uncertain, call your vet.',
  },
  {
    question: 'What is the "ER sign" tag on some items?',
    answer:
      'Certain warning signs warrant immediate emergency care regardless of how many other signs are present — difficulty breathing, suspected toxin ingestion, sustained or cluster seizures, severe trauma, suspected heatstroke, urinary blockage in male cats, distended painful abdomen (possible bloat / GDV), and pale or blue or yellow gums. Any one of these triggers the ER verdict.',
  },
  {
    question: 'My pet has been throwing up but seems fine. Should I worry?',
    answer:
      'A single vomiting episode in an otherwise normal pet often resolves on its own. Three or more episodes in 24 hours, vomiting + diarrhea together, vomiting + lethargy, or blood in vomit warrant a call to the vet. Persistent vomiting causes rapid dehydration, especially in young or small pets.',
  },
  {
    question: 'My dog ate chocolate. What should I do?',
    answer:
      'Treat suspected toxin ingestion as an immediate ER scenario regardless of how the pet looks. Call your vet or the ASPCA Animal Poison Control Center (888-426-4435, fee applies) on the way to the clinic. Bring the chocolate packaging — type and amount matter. Dark and baker\'s chocolate are far more toxic than milk chocolate.',
  },
  {
    question: 'When is panting normal vs. a warning sign?',
    answer:
      'Heavy panting after exercise, in a warm room, or during excitement is normal in dogs. Open-mouth breathing in cats is almost always a warning sign and should prompt an immediate vet visit. Persistent panting at rest in a dog, panting with collapse, panting + blue gums, or panting in a hot environment with weakness all warrant ER assessment.',
  },
  {
    question: 'My pet had one seizure but is now normal. Should I go to the ER?',
    answer:
      'A single seizure under a minute followed by full recovery in 10-30 minutes can be monitored if your vet is reachable for guidance the next morning. A seizure longer than a minute, two or more seizures in 24 hours, or seizures that the pet does not recover normally from warrant immediate ER assessment.',
  },
  {
    question: 'What if my vet is closed?',
    answer:
      'Most US metro areas have a 24-hour veterinary emergency hospital. The checklist\'s ER verdict means go there now, regardless of the hour. Have the phone number and address of your nearest emergency hospital saved before you need it — looking it up in a panic costs minutes.',
  },
]

export default function SymptomTriagePage() {
  return (
    <ArticleLayout
      siteId="askthevet"
      hero={{
        title: 'When to Call the Vet — Symptom Triage Checklist',
        subtitle:
          'A published-source emergency triage aid. Check the warning signs present; the tool returns an ER / urgent / today / monitor verdict.',
        category: 'Decision aid',
        categoryHref: '/tools',
        publishedAt: 'May 2026',
        readTime: '3 min',
      }}
      breadcrumbs={[
        { name: 'Home', href: '/' },
        { name: 'Tools', href: '/tools' },
        { name: 'Symptom Triage' },
      ]}
      schema={schema}
      sidebar={
        <>
          <TableOfContents
            items={[
              { label: 'The triage checklist', href: '#checklist' },
              { label: 'How the verdict works', href: '#verdict' },
              { label: 'Methodology &amp; limits', href: '#methodology' },
              { label: 'Sources', href: '#sources' },
              { label: 'FAQ', href: '#faq' },
            ]}
          />
          <EmailCapture
            variant="sidebar"
            siteId="askthevet"
            title="AskTheVet — health updates"
            subtitle="Educational pet-health references."
            source="symptom-triage"
          />
        </>
      }
    >
      <div className="carloOS-article">
        <h2 id="checklist">The triage checklist</h2>
        <p>
          Honest answers help more than minimizing. Check every warning sign you can answer &quot;yes&quot; to in the last 24 hours. The verdict routes to one of four levels based on what is present.
        </p>
        <SymptomTriageChecklist />

        <h2 id="verdict">How the verdict works</h2>
        <ul>
          <li><strong>🚨 Emergency (ER now):</strong> any one of the "ER sign" red flags is present (breathing difficulty, suspected toxin, sustained or cluster seizures, severe trauma, heatstroke, urinary blockage, distended painful abdomen, pale/blue/yellow gums). Single sign → immediate ER.</li>
          <li><strong>⚠️ Urgent (same-day):</strong> two or more non-critical warning signs are present together (e.g. repeated vomiting + severe lethargy). Same-day appointment.</li>
          <li><strong>📞 Today (call vet):</strong> one non-critical warning sign is present. Call the vet today for guidance — they decide whether to bring the pet in.</li>
          <li><strong>👀 Monitor:</strong> no listed warning signs. Continue routine monitoring at home and re-run the checklist if new signs appear.</li>
        </ul>

        <h2 id="methodology">Methodology &amp; limits</h2>
        <p>
          The checklist uses warning signs published in pet-owner-facing resources from major veterinary organizations. Each sign was selected because:
        </p>
        <ul>
          <li>It is observable by an owner without medical training</li>
          <li>It appears consistently in published &quot;when to take your pet to the ER&quot; lists</li>
          <li>It is unambiguous (binary present / not present), not a judgment call</li>
        </ul>
        <p>
          The checklist does <strong>not</strong>:
        </p>
        <ul>
          <li>Diagnose any condition</li>
          <li>Replace a veterinary examination</li>
          <li>Substitute for the ASPCA Animal Poison Control hotline (888-426-4435) when an actual toxin exposure has occurred</li>
          <li>Cover every emergency — owner intuition matters, and any uncertainty warrants a phone call</li>
          <li>Account for chronic conditions (a pet on chemotherapy or with kidney disease may need vet contact at a lower threshold)</li>
        </ul>

        <h2 id="sources">Sources</h2>
        <ul>
          <li>American Veterinary Medical Association (AVMA) — Pet First Aid and Emergency Care owner resources.</li>
          <li>American College of Veterinary Emergency and Critical Care (ACVECC) — public-facing triage guidance.</li>
          <li>ASPCA Animal Poison Control Center — published list of common pet toxins and emergency response guidance (888-426-4435, $95 consultation fee in 2026).</li>
          <li>American Animal Hospital Association (AAHA) — &quot;When to take your pet to the emergency vet&quot; owner reference.</li>
          <li>Plunkett, S. J. (2013). <em>Emergency Procedures for the Small Animal Veterinarian</em>, 3rd Edition. Saunders.</li>
        </ul>
        <p className="text-sm text-brand-text-muted">
          AskTheVet.com Editorial cites these as the published basis for the warning-sign list and triage thresholds used by the checklist. The site does not have practicing veterinarians on staff; clinical decisions belong to the pet&apos;s veterinarian.
        </p>

        <h2 id="faq">FAQ</h2>
        <FAQAccordion
          items={FAQS.map((f) => ({ question: f.question, answer: f.answer, answerText: f.answer }))}
          includeSchema
          allowMultiple
        />

        <p className="mt-8 text-sm">
          For any toxin exposure, call the ASPCA Animal Poison Control Center at <strong>888-426-4435</strong> while heading to the vet. A consultation fee applies and gives you direct vet-toxicologist guidance.
        </p>

        <AffiliateDisclosure variant="inline" siteId="askthevet" />
      </div>
    </ArticleLayout>
  )
}
