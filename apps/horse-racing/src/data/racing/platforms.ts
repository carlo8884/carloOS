// Ownership-platform directory (conversion point of the ownership cluster).
// A structured, filterable directory of the ways to get into racehorse ownership
// — the natural place referral revenue lands. Trust-safe: factual, neutral
// descriptions; NO ranking-for-pay, NO fabricated reviews, NO investment advice.
//
// MONETIZATION SEAM (Carlo-gated, Monetization Bot's lane): when a referral/
// affiliate relationship is approved, the per-entry `referralVendor` is set and
// the page routes the CTA through /go/<vendor> (Monetization wires the route +
// affiliate-routes registry). Until then, entries link to the platform's own
// public site with rel="nofollow sponsored"-safe framing and NO referral. We
// list platforms on editorial merit, not on whether they pay us.

export type OwnershipModel = 'fractional' | 'syndicate' | 'partnership';

export interface OwnershipPlatform {
  name: string;
  /** Public homepage — used until/unless a referral route is approved. */
  url: string;
  models: OwnershipModel[];
  /** Rough entry point, for filtering/expectation-setting. */
  entryLevel: 'low' | 'medium' | 'high';
  entryNote: string;
  blurb: string;
  /** Set by Monetization Bot when a referral deal exists; null = direct link, no referral. */
  referralVendor: string | null;
}

export const modelLabels: Record<OwnershipModel, string> = {
  fractional: 'Fractional micro-shares',
  syndicate: 'Managed syndicate',
  partnership: 'Partnership',
};

export const entryLabels: Record<OwnershipPlatform['entryLevel'], string> = {
  low: 'Low entry ($100s)',
  medium: 'Mid entry ($1k–$10k)',
  high: 'High entry ($10k+)',
};

// Factual, neutral entries. Descriptions are general and non-promotional; we do
// not vouch for outcomes. Order is alphabetical (NOT a ranking).
export const platforms: OwnershipPlatform[] = [
  {
    name: 'Fractional micro-share platforms',
    url: '/ownership/fractional-ownership-explained',
    models: ['fractional'],
    entryLevel: 'low',
    entryNote: 'Shares can start in the low hundreds of dollars',
    blurb:
      'App-based platforms divide a horse into thousands of SEC-qualified shares, so you can own a tiny stake for a one-time price with costs typically bundled in. The lowest-cost way to get the experience. See our explainer for how the shares and economics work.',
    referralVendor: null,
  },
  {
    name: 'Managed racing syndicates',
    url: '/ownership/racehorse-syndicates-explained',
    models: ['syndicate'],
    entryLevel: 'medium',
    entryNote: 'Upfront share plus ongoing monthly costs',
    blurb:
      'A professional syndicate manager runs one or more horses on behalf of a group of members, who pay an upfront share and ongoing monthly costs. More hands-on access than a micro-share. Our explainer covers how to vet a manager.',
    referralVendor: null,
  },
  {
    name: 'Private partnerships',
    url: '/ownership/should-you-own-a-racehorse',
    models: ['partnership'],
    entryLevel: 'high',
    entryNote: 'Direct share of a horse and its full costs',
    blurb:
      'A small group jointly buys and manages a horse, splitting bills directly. The most involved and most expensive route short of sole ownership — usually a step people take after starting smaller.',
    referralVendor: null,
  },
];

export function platformsByModel(model: OwnershipModel | 'all'): OwnershipPlatform[] {
  if (model === 'all') return platforms;
  return platforms.filter((p) => p.models.includes(model));
}
