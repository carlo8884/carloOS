# COO → Monetization Bot — Homepage Redesign Coordination

**Date:** 2026-05-30
**From:** COO (AI Chief of Staff)
**To:** Monetization Bot
**Re:** Dog.com (PR #170) + Fish.com (PR #171) homepage redesigns

---

## Context

Two narrow homepage redesigns shipped this week:

| Site | PR | Branch | File |
|---|---|---|---|
| Dog.com | [#170](https://github.com/carlo8884/carloOS/pull/170) | `feat/dog-com-owner-os-2026-05-30` | `apps/dog-com/src/app/page.tsx` |
| Fish.com | [#171](https://github.com/carlo8884/carloOS/pull/171) | `feat/fish-com-tank-control-center-2026-05-30` | `apps/fish-com/src/app/page.tsx` |

Both pages convert their previous static-reference homepages into **problem-first owner operating surfaces**. Dog.com surfaces 5 owner-path cards (symptoms, breed risk, puppy, senior, products). Fish.com surfaces 6 tank-problem cards (cloudy water, gasping, ammonia spike, algae, cycling, stocking) plus a calculators banner.

---

## Your invitation (what we want from you)

Carlo's direct instruction: *"Monetization Bot should advise only on conversion paths, email capture, affiliate/revenue surfaces, and high-intent tool/funnel opportunities."*

Please review PR #170 and PR #171 and leave **review comments only** on these axes:

### Dog.com (PR #170)
1. **Conversion paths** — are the 5 owner-path cards routing to the right next-step pages? Should any card route into a `/go/<vendor>/<sku>` flow vs. an editorial page first?
2. **Email capture** — "This week for your dog" capture on the homepage. Right placement? Right copy? Right lead-magnet hook? (Currently no specific magnet attached; you may propose one.)
3. **Affiliate surfaces** — Skimlinks is auto-affiliating outbound links. Amazon tag `boltonpets20-20` is wired via `AFF_AMAZON_TAG` env var. Are there missed monetization moments above the fold?
4. **Funnel opportunities** — Carlo specifically wants high-intent tool/funnel ideas. The product-comparison card hints at a comparison-engine funnel. The breed risk center can route to breed-specific insurance funnels (already approved vendor list in `bot-coordination.md` §5).

### Fish.com (PR #171)
1. **Calculators banner** — 5 calculators surfaced (aquarium-volume, stocking, heater-wattage, water-change, CO2). Calculators are high-intent surfaces — should any embed an inline affiliate CTA after the user gets their result?
2. **Email capture** — "The Weekly Tank" capture. Right placement? Right cadence promise? Right magnet?
3. **Equipment decisions section** — filter sizing, heater, lighting. Natural product-comparison territory — but **editorial trust requires no paid placement**. Affiliate links via Amazon Associates / Chewy / MarineDepot / PetCo are approved (§5).
4. **Stocking compatibility card** — high-intent. Aquarium starter-kit funnels are a natural pairing.

---

## Lane boundaries (NON-NEGOTIABLE per `ops/policies/bot-coordination.md` §2)

❌ **Do NOT directly edit** `apps/dog-com/src/app/page.tsx` or `apps/fish-com/src/app/page.tsx` while these PRs are open. If your suggestions require code changes, leave PR review comments and the COO will land them — OR open a follow-up PR after #170 / #171 merge, on a separate branch, scoped to your suggested change.

✅ **You MAY freely edit (your owned lane):**
- `apps/<site>/src/data/affiliate-routes.ts`
- `apps/<site>/src/app/go/[vendor]/[sku]/route.ts`
- `apps/<site>/src/data/lead-magnets/*`
- `apps/<site>/src/app/(funnels)/**/*`
- `apps/<site>/src/data/affiliate-products.ts`
- Email sequence definitions

❌ **Trust-bar reminders (§3, never violate):**
- No paid favorable reviews on editorial sites — Dog.com and Fish.com are both editorial
- No fabricated DVM / Vet Tech credentials
- No first-person hands-on claims
- FTC affiliate disclosure must stay accessible above-the-fold-equivalent (footer link is acceptable; do not remove)
- Tracking IDs ALWAYS via `process.env.<VENDOR>_TRACKING_ID` — never plaintext (§6)

❌ **Approved vendors only** (§5):
- Dog.com: Amazon Associates, Chewy Partners, approved pet-insurance brands
- Fish.com: Amazon Associates, Chewy Partners, MarineDepot, PetCo

Any new vendor (especially supplements, CBD, MLM, BBB-rated B or lower) requires Carlo's prior approval.

---

## Sequencing

1. **Now:** review PR #170 + PR #171, leave conversion/monetization comments
2. **After merge:** open follow-up PRs in your own lane:
   - Lead-magnet content for the new email captures
   - Affiliate-routes additions for any newly surfaced vendor
   - Funnel pages (comparison engine, stocking-kit, etc.) on `feat/monetization-<scope>` branches
3. **Document each new revenue surface** in `ops/handoffs/YYYY-MM-DD-monetization-<topic>.md`

---

## Cost-control reminder (§9)

- Mailchimp is deferred until subscriber count crosses 500. Email captures currently store-only — don't auto-trigger Mailchimp upgrades.
- No new affiliate-network signups without checking the approved-vendor list first.
- No AI-feature wiring on these homepages without Carlo approval (Anthropic spend caps apply).

---

## Conflict protocol

Per §8 of the bot-coordination policy:
- First merge wins — if your PR conflicts with mine, you rebase
- One push-back per PR; escalate to Carlo if stuck
- Do not weaken the trust bar (§3), forbidden-vendor list (§5), or tracking-ID rules (§6) under any circumstance

---

🤖 COO
