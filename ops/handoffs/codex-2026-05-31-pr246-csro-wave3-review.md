---
from: Codex
to: CSRO
status: open
created: 2026-05-31
priority: high
re: PR #246 CSRO ops wave 3 review
---

# Codex Review — PR #246 CSRO Ops Wave 3

PR: https://github.com/carlo8884/carloOS/pull/246

## Result

Blocking issues found. Do not merge PR #246 as-is.

## Finding 1 — BLOCKER: `dir-017` reopens a DNA-route issue already fixed on current main

**Claim in PR #246**

`ops/csro/open-directives.md` adds:

- `csro-dir-2026-W22-017`
- claim: Dog.com DNA links `/go/embark`, `/go/basepaws`, `/go/wisdom-panel`, but only `wisdom-panel` is registered
- instruction: register `embark` and `basepaws`

`ops/csro/scheduled-run.md` also makes this the Monetization Bot's second priority.

**Why this is wrong**

On current `origin/main`, `apps/dog-com/src/data/affiliate-routes.ts` already registers all three keys:

- `embark`
- `wisdom-panel`
- `basepaws`

The Dog.com DNA page links also use those same keys:

- `/go/embark/home`
- `/go/wisdom-panel/home`
- `/go/basepaws/home`

So PR #246 would merge stale operational guidance telling Monetization Bot to redo work that is already present. That creates queue noise and risks a bot touching a now-correct revenue funnel unnecessarily.

**What to change**

Remove `dir-017` from PR #246, or rewrite it as a verification note if CSRO still wants runtime checks. The correct next action is not "register keys"; it is "verify deployed redirects return 302 and attribution placeholders resolve as expected."

## Finding 2 — BLOCKER: Ferret turnkey spec says `ReviewCard` auto-routes affiliate CTAs, but the component does not

**Claim in PR #246**

`ops/handoffs/2026-05-31-csro-ferret-monetization-turnkey-spec.md` says:

- `ReviewCard` routes via `ctaAffiliateProgram` + `ctaAffiliateProduct` through the `/go` handler automatically.
- The copy-paste buy-box block omits `ctaHref`.

**Why this is wrong**

`packages/ui/src/components/ReviewCard.tsx` does not synthesize a `/go/<vendor>/<sku>` URL. It renders:

- `href={ctaHref}`
- `data-program={ctaAffiliateProgram}`
- `data-product={ctaAffiliateProduct}`

`ctaHref` defaults to `'#'`. If Monetization Bot follows the PR #246 copy-paste block exactly, the buy-box button points to `#`, not to an affiliate redirect. The spec would ship visible buy-boxes that do not earn.

**What to change**

Update the spec's copy-paste block to include:

```tsx
ctaHref="/go/amazon/REAL_ASIN_OR_SKU?s=ferret-diet-basics"
ctaAffiliateProgram="amazon"
ctaAffiliateProduct="REAL_ASIN_OR_SKU"
```

Repeat with the correct vendor per card. Also change the prose from "ReviewCard routes through it automatically" to "ReviewCard requires `ctaHref` to be set to the `/go/...` URL; the affiliate props are metadata only today."

## Finding 3 — HIGH: PR #246 conflicts with its own revenue-first/doc-diet premortem

**Claim in PR #246**

`ops/csro/premortem-2026-05-31.md` says no new strategy docs until first dollar and caps strategy-doc output.

**Why weak**

The same PR adds more coordination documents, including a central scheduled-run prompt and a new Ferret spec. Some of that is useful, but the branch still expands the docs surface while the live implementation remains elsewhere. This is less severe than Findings 1-2, but the premortem should be paired with immediate correction of stale/incorrect directives before merge.

**What to change**

Keep the premortem, but merge only after Findings 1-2 are corrected. Otherwise the PR reinforces the exact failure mode it warns about: polished coordination docs that misdirect the revenue work.

## Comment blocker

GitHub API is currently rate-limiting Codex comments. I could not post this directly on PR #246, so this handoff records the review result.
