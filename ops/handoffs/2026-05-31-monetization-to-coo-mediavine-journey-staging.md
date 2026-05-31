---
from: monetization
to: coo, carlo
status: open
created: 2026-05-31
in_reply_to: ops/csro/open-directives.md#csro-dir-2026-W22-011
directive_id: csro-dir-2026-W22-011
next_action: "COO: build the <DisplayAds> shared UI primitive per the spec in §3 below. Carlo: sign up for Mediavine Journey (free, rev-share) and drop AFF_MEDIAVINE_PUBLISHER_ID into Vercel env."
---

# Monetization Bot — Mediavine Journey integration staging spec

Per `csro-dir-2026-W22-011` (CSRO 2026-05-30). Mediavine Journey threshold dropped to ≥1K monthly sessions on 2026-01-15; the 5 trafficked CarloOS sites now qualify. The directive says "Mon Bot can stage the integration while [Carlo's] confirm is pending" — this handoff is that staging.

## 1. What I shipped in-lane (this commit)

Per-site display-ad staging config files — one per qualifying site, each declaring intent + network-tier choice + approximate-traffic justification. These are inert until the COO-lane `<DisplayAds>` primitive is built and Carlo flips the env var. Safe failure mode: nothing renders if any gate is unmet.

| Site | File | Sessions/mo (Carlo 2026-05-30) | Network tier |
|---|---|---|---|
| dog.com | `apps/dog-com/src/data/display-ads.ts` | ~36,000 | mediavine-journey |
| ferret.com | `apps/ferret-com/src/data/display-ads.ts` | ~11,000 | mediavine-journey |
| fish.com | `apps/fish-com/src/data/display-ads.ts` | ~7,000 | mediavine-journey |
| petfood.com | `apps/petfood-com/src/data/display-ads.ts` | ~5,000 | mediavine-journey |
| horses.com | `apps/horses-com/src/data/display-ads.ts` | ~1,000 | mediavine-journey |

`dog-com/src/data/display-ads.ts` is the canonical commented version (network-ladder explanation, activation gates, trust-bar notes). The other 4 sites carry abbreviated comments and the same `DisplayAdConfig` interface inline (per-app Turborepo isolation — no cross-app imports).

The shape is forward-compatible: when dog.com crosses 50K sessions/mo it can upgrade to `mediavine` (the higher tier), and at 100K to `raptive`, by changing the one line in its `display-ads.ts`. No code changes required elsewhere.

## 2. What's outside my lane (the asks)

### Ask 1 — COO: build `<DisplayAds>` shared UI primitive

`packages/ui/src/components/DisplayAds.tsx` (COO lane per `bot-coordination.md §2`). Recommended API:

```tsx
import { displayAds } from '@/data/display-ads' // per-site
import { DisplayAds } from '@carloOS/ui'

// in apps/<site>/src/app/layout.tsx
<DisplayAds config={displayAds} />
```

Internal behavior:
- Read `process.env.NEXT_PUBLIC_MEDIAVINE_PUBLISHER_ID` at render. If empty OR `config.enabled === false` OR `config.network !== 'mediavine-journey'` → render nothing. Safe failure.
- Otherwise inject the Mediavine Journey script per their published install snippet (the publisher gets the snippet at signup; placeholder URL in the component until Carlo provides it).
- Accept an optional `routePatterns` deny-list (e.g. `['/health/**', '/care/insulinoma', '/disclosure']`) to suppress placement on specific routes. Ferret.com's health pages specifically need this — see the trust-bar note in `apps/ferret-com/src/data/display-ads.ts`.
- Forward-compatible: a future `'mediavine'` / `'raptive'` / `'ezoic'` / `'adsense'` branch can be added when sites cross those traffic thresholds.

Trust bar: display ads are not affiliate — no FTC disclosure required for the ads themselves. But the layout placement must not put an ad slot adjacent to medical / treatment content on the health/* clusters in a way that reads as endorsement. That's a Visual Bot polish concern as well.

### Ask 2 — Carlo: sign up + drop env var

1. Go to `mediavine.com/journey`. Sign up as a publisher. Use any of the 5 qualifying sites as the application domain. Approval is typically same-day for sites clearing the 1K threshold.
2. Mediavine issues a publisher ID and an install snippet.
3. In Vercel, for each of the 5 site projects:
   - Set `NEXT_PUBLIC_MEDIAVINE_PUBLISHER_ID = <id>` in Production + Preview envs.
   - (If Mediavine issues a different ID per site, set the site-specific one per project; otherwise reuse the same ID.)
4. Redeploy. The `<DisplayAds>` primitive should pick up the env var and start rendering ads on all 5 sites.

Estimated Carlo time: ~10 min signup + 5 min env-var set per site × 5 sites = ~35 min total.

### Ask 3 — Visual Bot (optional polish, not blocking)

Once ads are live, Visual Bot may want to coordinate placement to ensure ad slots don't disrupt magazine-baseline layout on Tier-1 sites (dog.com, vets.co, fish.com per the strategy disposition). This is post-launch polish, not a launch gate.

## 3. `<DisplayAds>` primitive — interface spec for COO

```tsx
interface DisplayAdsProps {
  /** Per-site config from apps/<site>/src/data/display-ads.ts */
  config: DisplayAdConfig
  /** Optional route patterns to deny placement on (glob-style). */
  routePatterns?: { deny?: string[] }
}

interface DisplayAdConfig {
  readonly enabled: boolean
  readonly network: 'mediavine-journey' | 'mediavine' | 'raptive' | 'ezoic' | 'adsense' | null
  readonly monthlySessionsApprox: number
}
```

Render logic:

```pseudo
const publisherId = process.env.NEXT_PUBLIC_MEDIAVINE_PUBLISHER_ID
if (!config.enabled) return null
if (!publisherId) return null
if (config.network === 'mediavine-journey') return <MediavineJourneyScript id={publisherId} deny={routePatterns?.deny} />
// future: handle other network branches
return null
```

The `<MediavineJourneyScript>` internal component owns the actual `<script>` injection per Mediavine's documented install pattern. Mediavine provides a single `<script>` tag with the publisher ID; that gets placed in the `<head>` via Next.js `<Script>` component with `strategy="afterInteractive"`.

## 4. Estimated revenue impact

Per `valuation-comps.md §4` (CSRO 2026-05-30 research) and Mediavine Journey's published entry-tier RPM range ($11–15 at the floor):

| Site | Monthly sessions | Estimated monthly display RPM range | Estimated monthly display revenue |
|---|---|---|---|
| dog.com | 36,000 | $11–15 | $400–540 |
| ferret.com | 11,000 | $11–15 | $120–165 |
| fish.com | 7,000 | $11–15 | $77–105 |
| petfood.com | 5,000 | $11–15 | $55–75 |
| horses.com | 1,000 | $11–15 | $11–15 |
| **Portfolio total** | **60,000** | — | **~$660–900 / month** |

Numbers are entry-tier and conservative. Mediavine Journey upgrades to standard Mediavine at 50K sessions (per Mediavine's tier docs); RPM roughly doubles at that point. Dog.com's growth could move it into the standard Mediavine tier inside the next few months.

The revenue surface is **incremental** to affiliate revenue, not competitive with it: display ads monetize the ~98% of pageviews that never click an affiliate link.

## 5. Trust-bar coverage

- Display ads do not require FTC affiliate disclosure (they're paid ad inventory, not affiliate). The existing `/disclosure` page on each site already references "advertising revenue" generally — no copy changes required.
- The ferret.com `display-ads.ts` carries an explicit trust-bar note: health/* cluster pages should be subject to a route deny-list when the COO `<DisplayAds>` component lands, to avoid ad placement adjacent to treatment / clinical content that could read as endorsement (per QC §3.3).
- `vets.co` is **excluded** from this staging. Per `bot-coordination.md §5` the vets.co allow-list is INSURANCE ONLY — no display ads on the editorial-only-on-products site. The traffic isn't there yet anyway.

## 6. Done-when (closes `dir-011`)

- [x] Per-site `display-ads.ts` staging files committed (this PR).
- [ ] COO builds `<DisplayAds>` shared UI primitive per §3.
- [ ] COO wires `<DisplayAds config={displayAds} />` in each qualifying site's `apps/<site>/src/app/layout.tsx`.
- [ ] Carlo signs up at mediavine.com/journey.
- [ ] Carlo drops `NEXT_PUBLIC_MEDIAVINE_PUBLISHER_ID` into Vercel envs for the 5 qualifying sites.
- [ ] Redeploys verified — ads render with no UX/trust regression on at least one page per site.

After all five boxes are checked, `dir-011` closes.

## 7. Monetization Bot next-up

After this commit, my fleet-activation queue (items 1–7) is fully delivered to in-lane scope. The remaining items are out-of-lane (COO + Carlo gates above), gated on external events (IR Bot review of welcome sequences before email-capture flag flips), or diminishing-marginal-value padding (more horse-cluster guides past the 7 already shipped).

Per Carlo's standing rule, this is the honest-check point. Posting "queue empty, awaiting direction" after this push.
