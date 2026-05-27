/**
 * CarloOS ScoreMethodology — collapsible disclosure of how Editor Scores are derived.
 *
 * Drop once per review page (above the first ReviewCard). Collapsed by default,
 * so it adds <40px to the page height without an interaction. Explains what an
 * Editor Score is (and isn't), what it's based on, and where to find the
 * editorial-independence policy.
 */

import Link from 'next/link'

interface ScoreMethodologyProps {
  /** Where to link the "Editorial Standards" reference. Defaults to /editorial-standards. */
  editorialStandardsHref?: string
}

export function ScoreMethodology({ editorialStandardsHref = '/editorial-standards' }: ScoreMethodologyProps) {
  return (
    <details className="bg-brand-surface border border-brand-border rounded-lg p-4 mb-8 text-sm">
      <summary className="font-bold text-brand-dark cursor-pointer select-none">
        How we score
      </summary>
      <div className="mt-4 text-brand-text-mid leading-relaxed space-y-3">
        <p>
          Editor Scores on this page are <strong>editorial assessments</strong>,
          not the output of an in-house benchmark test rig. We do not run a
          comparative laboratory; we read the data, compare the products, and
          publish our judgement. Scores are out of 10 and reflect our overall
          recommendation for the use case described.
        </p>
        <p>What goes into a score:</p>
        <ul className="pl-5 list-disc space-y-1">
          <li>Manufacturer specifications and published documentation</li>
          <li>Published third-party measurements where available (e.g. Solarmeter UVI data, water-test chemistry, dynamometer / pull-strength tests)</li>
          <li>Aggregated long-term owner, keeper, rider, and breeder reports</li>
          <li>Independent published reviews from reputable industry sources</li>
          <li>Editorial judgement about fit for the use case</li>
        </ul>
        <p>
          Where a published measurement underpins a specific number in our
          write-up (UVI output, accuracy in °F, MTBF, etc.) we attribute the
          source inline.
        </p>
        <p>
          Affiliate links never influence scores. Rankings are decided first;
          affiliate links are added afterward, and we include products that pay
          no commission when they are the right fit. The full policy lives in
          our{' '}
          <Link
            href={editorialStandardsHref}
            className="text-brand-primary hover:underline"
          >
            Editorial Standards
          </Link>
          .
        </p>
        <p className="text-brand-text-light text-xs">
          Spot something out of date or a number you can&apos;t reconcile? We
          take corrections seriously — see the editorial-standards page for the
          corrections process.
        </p>
      </div>
    </details>
  )
}
