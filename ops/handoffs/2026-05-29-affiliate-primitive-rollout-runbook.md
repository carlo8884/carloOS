---
from: monetization-architect
to: build / coo
status: pending
created: 2026-05-29
in_reply_to: "ops/handoffs/2026-05-29-architect-to-coo-bot.md (Directives 1-2)"
next_action: "Build agent: mirror /go/[vendor]/[sku]/route.ts into the 9 remaining apps and migrate ReviewCard usages to AffiliateLink."
---

## Context

The first piece of Architect Directive 2 (AffiliateLink primitive) is
landed in `packages/ui`. This runbook is the deterministic rollout
plan for getting it active across all 10 apps + replacing the existing
plaintext affiliate placements.

Same PR also lands Directive 1 prerequisite: `SkimlinksLoader`
component (drop into root layouts once `NEXT_PUBLIC_SKIMLINKS_PUBLISHER_ID`
is set in Vercel).

## Inputs

- New code (this PR):
  - `packages/ui/src/components/AffiliateLink.tsx` — primary primitive
  - `packages/ui/src/components/AffiliateDisclosure.tsx` — FTC enforcement
  - `packages/ui/src/components/SkimlinksLoader.tsx` — universal auto-monetization
  - `packages/ui/src/components/affiliate-vendors.ts` — 60+ vendor registry
  - `packages/ui/src/server/affiliate-redirect.ts` — `/go/[vendor]/[sku]` handler
  - `apps/dog-com/src/app/go/[vendor]/[sku]/route.ts` — reference impl
- Existing code touched:
  - `packages/ui/src/index.ts` — exports added; no breaking changes

## Definition of done

### Step 1 — Mirror the redirect route into the 9 remaining apps

Each app needs the same one-line file:

```bash
for app in fish-com lizard-com saddle-com vets-co horses-com \
           ferret-com ferrets-com petfood-com petfoods-com; do
  mkdir -p "apps/$app/src/app/go/[vendor]/[sku]"
  cat > "apps/$app/src/app/go/[vendor]/[sku]/route.ts" <<EOF
import { handleAffiliateRedirect } from '@carloOS/ui/server/affiliate-redirect'

export const GET = handleAffiliateRedirect('$app')
EOF
done
```

**Acceptance:** every app has a `go/[vendor]/[sku]/route.ts` referencing
the shared handler with its own siteId.

### Step 2 — Wire the SkimlinksLoader into shared layout

Drop `<SkimlinksLoader />` into `packages/ui/src/components/Footer.tsx`
(or whichever shared layout component renders on every page). Once
Carlo sets `NEXT_PUBLIC_SKIMLINKS_PUBLISHER_ID` in each Vercel project,
auto-monetization activates on every outbound link site-wide.

**Acceptance:** `<SkimlinksLoader />` renders in the shared layout; with
the env var unset it's a no-op (logs a dev warning); with the env var
set it injects the Skimlinks script.

### Step 3 — Migrate ReviewCard CTA to AffiliateLink

Currently `ReviewCard` renders a plain `<a href={ctaHref}>` for its
CTA button. Migrate to `<AffiliateLink vendor={...} sku={...} source={...}>`
when the caller provides a vendor + sku. Keep backward compat: if the
caller still passes raw `ctaHref`, render the old `<a>` (just log a
deprecation warning in dev).

**Acceptance:** existing ReviewCard usages still work (no behavior
regression); new ReviewCard usages can pass `ctaVendor` + `ctaSku` and
get full AffiliateLink behavior (event tracking, FTC enforcement,
correct rel attributes).

### Step 4 — Add `<AffiliateDisclosure>` to review/comparison page layouts

Anywhere `ReviewCard` is currently rendered (per-site
`/reviews/<slug>/page.tsx` files), wrap the page content in
`<AffiliateDisclosure variant="banner">...</AffiliateDisclosure>`.

The disclosure renders an FTC-compliant disclosure banner at the top
of the page AND sets the context flag that `AffiliateLink` requires.

If AffiliateLink renders without an AffiliateDisclosure parent, it
logs a dev warning (and behaves correctly in production but without
the FTC compliance signal — which is a bug to fix before traffic).

**Acceptance:** all existing `/reviews/*` pages render the banner;
console is clean (no dev warnings).

### Step 5 — Carlo: sign up for Skimlinks + set env vars

1. Apply at https://skimlinks.com (web form, ~5 min, auto-approved
   for content sites within 24h)
2. Once approved, copy publisher ID
3. Vercel → each project → Settings → Environment Variables → add
   `NEXT_PUBLIC_SKIMLINKS_PUBLISHER_ID=<id>` (Production scope)
4. Trigger redeploy of each project

**Acceptance:** view-source any production page; Skimlinks script tag
is present in the HTML.

### Step 6 — Carlo: apply to direct affiliate programs

Per Architect §5, sign up for the top-tier programs:

- Chewy (impact.com) — set `AFF_CHEWY_TAG` in env
- Petco (Rakuten Advertising) — set `AFF_PETCO_TAG`
- Amazon Associates — set `AFF_AMAZON_TAG` (default: `carloos-20`)
- ImpactRadius (pet insurance bundle) — Lemonade, Pumpkin, ManyPets,
  Embrace
- SmartPak Equine (Awin) — set `AFF_SMARTPAK_TAG`
- Dover Saddlery (Awin) — set `AFF_DOVER_TAG`
- Embark Vet (impact.com) — set `AFF_EMBARK_TAG`

For each, the env var name is `AFF_<VENDOR>_TAG`. Until each is set,
the redirect still works (sends users to vendor home/search) but
attribution is missing.

**Acceptance:** at least Chewy + Amazon + Skimlinks active. First
commissionable click attributed in dashboard.

## Constraints

- Trust-bar §1 + FTC disclosure carry over from Architect §6.
- `AffiliateLink` MUST be paired with `AffiliateDisclosure` in the page
  tree. Enforced in dev via context-based console warning.
- Never put private affiliate API keys in `NEXT_PUBLIC_*` env vars.
  Use `AFF_*` (server-only) for those.

## Open questions for Carlo

- Pick Skimlinks vs. Sovrn //Commerce. Defaulting to Skimlinks (larger
  merchant catalog, simpler UX). Sovrn might pay slightly higher rev
  share on a few brands. Either works; both can run in parallel if
  desired.
- Whether to enforce FTC disclosure as a build-time check (in addition
  to the runtime warning). Could add an ESLint rule that flags
  AffiliateLink usage without AffiliateDisclosure in the same file.
  Defer to V2 of the primitive.
