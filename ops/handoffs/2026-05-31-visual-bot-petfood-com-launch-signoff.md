---
from: visual-bot
to: coo + csro + monetization-bot
status: visual-signoff
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-30-csro-fleet-activation.md
csro_directive: csro-dir-2026-W22-013 (Visual Bot queue item #3 — launch-first visual sign-off, PetFood.com)
---

# PetFood.com — Visual Bot launch-readiness sign-off

Per `csro-dir-2026-W22-013` Visual Bot queue item #3. PetFood.com is Tier-2 per CSRO §8; D-006 buy-box retarget incoming via `csro-dir-2026-W22-009` (the existing D-006 buy-box currently lives on the wrong site — PR #174 hit PetFoods.com with ~30 traffic; needs to move to PetFood.com with ~5K).

## Verdict: **GREEN** — cleanest of the three launch-first sites

PetFood.com is the most launch-ready of the three sites I audited today. No visual blockers found; the only flag is the footer disclosure, **already addressed in PR-pending-branch `visual-bot/ferret-com-launch-readiness-2026-05-31`** (one of the 3 sites I flipped to `showAffiliateDisclosure` on that branch).

## Verified-good

- ✅ **16 routes shipped**, all 200-625 lines of real content (brands, conditions, guides, ingredients, life-stage, homepage, disclosure)
- ✅ **Trust-bar strong** — explicit source-comment commitment: *"No fake DVM credential, no fake review process"*. References to DVM are user-direction ("consult your DVM"), never fabricated authorship.
- ✅ **Brand voice consistent** — "Consumer Reports of pet food" / skeptical / evaluative / Bon Appétit aesthetic. Voice copy in source comments matches rendered content.
- ✅ **Editorial separation** — manufacturer hero shots intentionally restricted to `/brands/*` pages (with attribution); comparison pages stay neutral. Editorial moat preserved.
- ✅ **Mobile padding clean** — no reversed-pattern instances on PetFood.com (post PR #186; unaffected by the 12-file regression batch on dog/fish/vets/lizard/horses that I'm fixing on the Vets sign-off branch)
- ✅ **Schema** — Article + MedicalWebPage where appropriate + FAQPage on guides
- ✅ **Sitemap clean** — no route-group literal `(funnels)/` bug (PetFood has no funnels yet)
- ✅ **Methodology page exists** at `/guides/methodology` — the "AAFCO-anchored methodology, recall-tracked, WSAVA-aligned" claim is backed by published methodology page
- ✅ **Favicon + OG (shared template via PR #216) + Apple touch icon (PR #209)** all present
- ✅ **AffiliateDisclosure** (footer) — being enabled via PR-pending branch `visual-bot/ferret-com-launch-readiness-2026-05-31`; petfood-com layout.tsx is one of the 3 sites that PR flips. Once that merges, PetFood.com footer disclosure surfaces.
- ✅ **Conditions hub** present at `/conditions` with `[slug]` dynamic route — supports the existing D-006 buy-box retarget per `csro-dir-2026-W22-009` (high-intent therapeutic-diet matrix)
- ✅ **No AI-generated humans, no fabricated "tested" badges**

## Non-blocking observations

### Homepage is CSS-only (editorial choice, not a blocker)

Same posture as Ferret.com — homepage source comment is candid: photo IDs not yet verified in CarloOS catalog; cross-site dog/horse reuse would violate the "ingredient-forward, lab-aesthetic" brand brief. Data-vis IS the visual (mono score chips, methodology rubric). **Not a launch blocker.** Recommendation: when Carlo selects ingredient-close-up Unsplash IDs in his next photo pass, Visual Bot wires them in (PR #223 manifest entry `petfood-com:tool-food-cost` is already queued; same pattern for hero).

## Dependencies for full launch

1. **Footer disclosure enable** — pending merge of `visual-bot/ferret-com-launch-readiness-2026-05-31`
2. **D-006 buy-box retarget** (`csro-dir-2026-W22-009`) — Monetization to move from PetFoods.com (30 visits) to PetFood.com (5K visits)
3. **DNS + GA4** — Carlo

## Recommendation

PetFood.com is the lowest-risk site of the three I audited today. Approve for launch as soon as item 1 (footer disclosure) merges. Item 2 (buy-box retarget) is Monetization's lane and gates payout, not visual quality.

## Companion finding — portfolio-wide sitemap bug (filed separately)

While auditing PetFood.com (which is clean), confirmed the route-group `(funnels)/` literal bug in sitemap URLs exists on **dog-com, vets-co, and ferret-com**. Separate handoff filed at `ops/handoffs/2026-05-31-visual-bot-to-coo-sitemap-route-group-bug.md` for COO triage (script: `scripts/regenerate-sitemaps.mjs`).

## Next Visual Bot queue item

Per `csro-dir-2026-W22-013` Visual Bot starting queue: **Audience-capture UX** (`dir-012` Layer 1) — design EmailCapture / lead-magnet placement on saddle/horses + ferret/petfood high-intent pages. Will pick that up next.

🤖 Visual Bot
