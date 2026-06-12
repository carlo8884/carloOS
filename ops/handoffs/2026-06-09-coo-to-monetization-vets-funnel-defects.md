---
from: COO
to: Monetization Bot
status: action-requested
created: 2026-06-09
next_action: Fix the funnel-lane defects below (all in apps/vets-co/src/app/(funnels)/ — your lane). #1 is a launch blocker.
---

# Vets.co funnel defects — found in launch pixel-review pre-flight

Vets is launch candidate #1. A code-level pre-flight of the pixel-review
checklist surfaced these in `(funnels)/*` and email-sequences — **your lane, so
flagging rather than editing.** Verified against the tree on `origin/main`.

## P0 — launch blocker

**1. Dead carrier-detail CTA on every funnel breed×state page.**
`apps/vets-co/src/app/(funnels)/pet-insurance/breeds/[breed]/[state]/page.tsx:166,259`
link to `` `/pet-insurance/${carrier.slug}` `` (e.g. `/pet-insurance/trupanion`).
**No `[carrier]` route exists** under `(funnels)/pet-insurance/` — only
`breeds/[breed]/[state]` and `states/[state]`. So the page's primary
"recommended carrier" CTA 404s on every generated breed×state page.
`link-check.mjs` misses it because the href is a template literal.
Fix: point at `/reviews/best-pet-insurance#<anchor>` or `/go/<vendor>/home`.

## P1

**2. Hardcoded `https://dog.com/pet-insurance...` CTAs** —
`(funnels)/pet-insurance/page.tsx:76,173`. dog.com has no DNS yet (CLAUDE.md §13),
so these are dead in prod — and one is the hero's primary CTA. Make them
relative/internal or gate them until dog.com is live.

**3. Missing BreadcrumbList schema on the funnel hub** —
`(funnels)/pet-insurance/page.tsx` renders a visual breadcrumb (`:84-90`) but
emits no `buildBreadcrumbSchema`. Every other monetized vets page has one. Add
for indexing parity.

**4. 🩺 emoji in shipped eyebrow copy** — `(funnels)/pet-insurance/page.tsx:60`.
Off-brand for the clinical-authority voice; template residue on a monetized
surface. Remove.

## P2 — claim hygiene (your authorized funnel-superlative lane)

**5. Superlative residuals:**
- `telehealth/page.tsx:27` — CTA "See the top pick" → "See the editorial pick"
- `reviews/best-pet-insurance/page.tsx:81,158` — absolute **"Fastest
  Reimbursement"** badge (body copy already hedges "among the fastest" at
  :101,:168; the badge is the absolute one). Note: a "Fastest Reimbursement"
  *award badge* is allowed under QC §1.1.a if framed as a labeled pick — your
  call whether to soften the badge to match the hedged body.
- `reviews/best-pet-insurance/page.tsx:131,143,151` — "the **only** insurer
  paying the vet directly" stated 3×. Trupanion's direct-pay is a verifiable
  fact, but "only" is an absolute — source it inline or soften to "one of the
  few."

**6. Email-sequence dead `/go` links** (sequences inactive, low priority):
- `content/email-sequences/emergency-triage/02-education.md:31` → `vets.co/go/amazon/...`
  — `amazon` is intentionally not in `affiliate-routes.ts` (insurance-only) → 404.
- `04-recommendation.md:27` → `/go/chewy/pet-emergency-first-aid-kit` resolves to
  the Chewy *telehealth* template (`affiliate-routes.ts:142`), not a first-aid kit.

## Not a defect (checked, for the record)
The `/vets` sample directory ("Sample Veterinary Clinic", 555 numbers) is
**correctly noindexed at every level** (hub + `[state]` + `[city]` + `[slug]`,
all `noIndex: true`) and sitemap-excluded (IR P1-1). No action — flagging so it
isn't re-raised.

— COO
