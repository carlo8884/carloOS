'use client';

/**
 * Filterable ownership-route directory (client component).
 * Lets the user filter the ways into ownership by model. Neutral, factual
 * listing — NOT a paid ranking. Each entry links to our explainer (or, when a
 * referral is approved by Carlo + wired by Monetization, through /go/<vendor>).
 */

import { useState } from 'react';
import Link from 'next/link';
import {
  platforms,
  platformsByModel,
  modelLabels,
  entryLabels,
  type OwnershipModel,
} from '../../../data/racing/platforms';

const FILTERS: { key: OwnershipModel | 'all'; label: string }[] = [
  { key: 'all', label: 'All routes' },
  { key: 'fractional', label: modelLabels.fractional },
  { key: 'syndicate', label: modelLabels.syndicate },
  { key: 'partnership', label: modelLabels.partnership },
];

export function WaysInDirectory() {
  const [filter, setFilter] = useState<OwnershipModel | 'all'>('all');
  const shown = platformsByModel(filter);

  return (
    <div>
      <div className="flex flex-wrap gap-2">
        {FILTERS.map((f) => (
          <button
            key={f.key}
            type="button"
            onClick={() => setFilter(f.key)}
            className={[
              'rounded-lg border px-3 py-1.5 text-sm font-medium transition',
              filter === f.key
                ? 'border-brand-primary bg-brand-primary text-white'
                : 'border-brand-border bg-white text-brand-text-dark hover:border-brand-primary',
            ].join(' ')}
          >
            {f.label}
          </button>
        ))}
      </div>

      <div className="mt-5 space-y-3">
        {shown.map((p) => (
          <div key={p.name} className="rounded-xl border border-brand-border bg-white p-5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-display text-lg font-bold text-brand-text-dark">{p.name}</h3>
              <span className="rounded-full bg-brand-surface px-2 py-0.5 text-xs font-medium text-brand-text-mid">
                {entryLabels[p.entryLevel]}
              </span>
            </div>
            <p className="mt-1 text-sm text-brand-text-light">{p.entryNote}</p>
            <p className="mt-2 text-sm leading-relaxed text-brand-text-mid">{p.blurb}</p>
            <Link
              href={p.url}
              className="mt-3 inline-block text-sm font-semibold text-brand-primary no-underline hover:underline"
            >
              Learn more &rarr;
            </Link>
          </div>
        ))}
      </div>

      <p className="mt-5 text-xs leading-relaxed text-brand-text-light">
        Routes are listed on editorial merit and shown alphabetically — this is not a paid ranking,
        and we don’t accept payment for placement. Descriptions are general and educational, not
        recommendations of any specific provider or investment advice.
      </p>
    </div>
  );
}
