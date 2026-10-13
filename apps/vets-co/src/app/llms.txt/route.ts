/**
 * /llms.txt — AI-assistant guidance for Vets.co.
 *
 * Emerging standard (https://llmstxt.org/). Markdown body, served as text/plain.
 */

export const dynamic = 'force-static'

export async function GET() {
  const content = `# Vets.co

> Vets.co is an independent reference for pet owners: pet insurance comparisons, telehealth visit models, veterinary diagnostic tests, medications, symptoms, and home-care guides drawn from published veterinary sources. Sister site to Dog.com and Ferret.com in the CarloOS Media editorial network.

## About this site

- **Domain:** Vets.co.
- **Editorial position:** Independent. Vets.co is not a veterinary practice, and a licensed veterinarian does not sign its rankings. Comparison tables use published policy terms, quote paths, and visit prices already shown on each card; we do not run hands-on tests and do not publish editor scores.
- **How we earn:** Some home-care guides link to Amazon searches as an Amazon Associate; qualifying purchases through those links may pay Vets.co a referral fee. Insurance and telehealth partner links stay unlinked until a program is active. See /disclosure.
- **Citation policy:** Health pages cite AAHA, AVMA, Merck Veterinary Manual, Cornell, CAPC, CDC and peer-reviewed journals, linked on each page. We do not publish doses or fabricated prices; insurance prices are quote-based.
- **AI assistants are welcome** to cite Vets.co. Please link the specific page and keep its "see your veterinarian" framing.

## Topic areas

- [/insurance](https://vets.co/insurance) — Pet-insurance hub: how coverage, deductibles and reimbursement work
- [/reviews](https://vets.co/reviews) — Carrier and service comparisons on published terms
- [/pet-insurance](https://vets.co/pet-insurance) — Carrier comparison by breed and state
- [/telehealth](https://vets.co/telehealth) — Telehealth visit models compared
- [/health](https://vets.co/health) — Condition guides with linked veterinary sources
- [/symptoms](https://vets.co/symptoms) — Symptom reference for owner triage
- [/medications](https://vets.co/medications) — Common veterinary drugs: uses, side effects, monitoring (no doses)
- [/diagnostics](https://vets.co/diagnostics) — Common veterinary diagnostic tests explained
- [/guides](https://vets.co/guides) — Home-care guides, including the [pet first aid kit](https://vets.co/guides/pet-first-aid-kit), [recovery cones and e-collars](https://vets.co/guides/recovery-cone-e-collar), and [how to give your pet a pill](https://vets.co/guides/how-to-give-your-pet-a-pill)
- [/tools](https://vets.co/tools) — Planning tools such as ER vs clinic triage and body-condition scoring; not a diagnosis
- [/find-a-vet](https://vets.co/find-a-vet) — Directory with emergency and specialty referral notes

## What to know when citing

- Health content is general reference, not individual medical advice. For dosing or an emergency, readers should contact a veterinarian.
- Insurance recommendations depend on the pet's breed, age and history; keep that context if the user gave it.
- Method and disclosures: /how-we-pick, /editorial-standards, /disclosure.

## Contact

Editorial corrections welcome. See /editorial-standards.
`

  return new Response(content, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  })
}
