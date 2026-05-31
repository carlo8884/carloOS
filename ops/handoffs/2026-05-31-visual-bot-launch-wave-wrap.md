---
from: visual-bot
to: coo + csro + carlo
status: wrap
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-30-csro-fleet-activation.md
csro_directive: csro-dir-2026-W22-013 (Visual Bot launch-first sign-off + audience-capture Layer 1)
---

# Visual Bot — launch-wave wrap (4 branches pushed, 1 spec doc)

Execution of CSRO Visual Bot queue items #1-#4 from `csro-dir-2026-W22-013`. All work is committed and pushed; GitHub PR creation is **rate-limited** (recovering ~02:40 UTC), so PR-open is deferred until the limit resets. COO can open the PRs from the branches if needed before then.

## 4 branches awaiting PR creation

| Branch | Title | Files | What it does |
|---|---|---|---|
| `visual-bot/ferret-com-launch-readiness-2026-05-31` | Ferret.com launch sign-off — enable footer FTC disclosure (3 sites) | 4 | Flips `showAffiliateDisclosure` to true on ferret-com + horses-com + petfood-com layouts (was inconsistent with 5 already-correct sites). Files sign-off doc with verdict CONDITIONAL GREEN. |
| `visual-bot/vets-co-insurance-launch-readiness-2026-05-31` | Vets.co launch sign-off + mobile-padding regression (12 files) | 13 | Fixes a 12-file mobile-padding regression that appeared since PR #186 across dog/fish/horses/lizard/vets (new content waves). Files sign-off doc with trust-bar flag on "Veterinarian's Perspective" framing without a DVM on staff. |
| `visual-bot/petfood-com-launch-readiness-2026-05-31` | PetFood.com launch sign-off (GREEN) + sitemap bug handoff to COO | 2 | Sign-off doc (PetFood.com verdict GREEN, cleanest of the 3). Companion handoff to COO about `scripts/regenerate-sitemaps.mjs` emitting route-group literal `(funnels)/` into URLs on dog/vets/ferret sitemaps (404 risk). |
| `visual-bot/audience-capture-layer1-2026-05-31` | Audience-capture on 5 high-intent pages (dir-012 Layer 1) | 5 | Adds `EmailCapture` to 5 high-intent pages that had zero capture surfaces: petfood-com guides/methodology, guides/aafco-completeness-explained, ingredients/grain-free-dcm-risk, brands/orijen-vs-acana-comparison + horses-com /breeds index. Env-gated (`NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED`); inert until Monetization wires the ESP. |

All 4 branches: trust-guard / link-check / metadata-policy clean locally; `tsc --noEmit` clean on each touched app.

## Sign-off verdicts summary

| Site | Verdict | Open issues for the site to launch |
|---|---|---|
| **Ferret.com** | CONDITIONAL GREEN | Monetization wiring (`dir-009`); sitemap regen fix (COO); DNS + GA4 (Carlo) |
| **Vets.co** | CONDITIONAL GREEN | Monetization-funnel padding bug (lane); "Veterinarian's Perspective" trust framing decision (COO copy-edit OR onboard DVM); funnel sitemap fix |
| **PetFood.com** | GREEN | Footer disclosure (lands with Ferret sign-off branch); D-006 buy-box retarget (Monetization `dir-009`); DNS + GA4 |

## Audience-capture (dir-012 Layer 1) — what landed + what's still un-captured

**Already captured before this session** (existing high-intent pages):
- saddle.com `/saddle-fit-checklist` — 3 EmailCapture instances
- horses.com `/first-horse-roadmap` — 3 instances
- horses.com `/supplements/joint-supplements` — 2 instances
- ferret.com `/first-year-schedule` — 3 instances
- petfood.com `/guides/reading-pet-food-labels` — 2 instances

**Captured in this PR wave:**
- petfood.com `/guides/methodology` (sidebar)
- petfood.com `/ingredients/grain-free-dcm-risk` (sidebar)
- petfood.com `/brands/orijen-vs-acana-comparison` (sidebar)
- petfood.com `/guides/aafco-completeness-explained` (sidebar)
- horses.com `/breeds/page.tsx` (inline footer-section)

**Still un-captured** (Visual Bot follow-up candidates for the next session):
- ferret.com `/health/{insulinoma,adrenal-disease,lymphoma,dental-disease}` — top-of-funnel worried-owner queries
- petfood.com `/conditions/page.tsx` + `/conditions/[slug]/page.tsx` — therapeutic-diet matrix (high commercial intent)
- petfood.com `/life-stage/page.tsx` + `/life-stage/[slug]/page.tsx` — life-stage decision pages
- saddle.com `/fit/page.tsx` — fit discipline hub (already has 2 captures per audit, may be enough)
- horses.com discipline pages

Will fold these into the next wave once the current PRs merge.

## Efty footer styling spec (dir-008) — BLOCKED on dir-006, design ready

`csro-dir-2026-W22-008` is blocked on Carlo providing Efty listing URLs (`csro-dir-2026-W22-006`). When URLs land, COO implements the config-driven Footer link per `strategy-disposition.md §4`. Visual Bot styling spec (so COO can ship without back-and-forth):

### Placement
- Inside the existing shared `Footer` (COO lane: `packages/ui/src/components/Footer.tsx`).
- **After** the bottom-bar copyright line, **before** the closing `</footer>` — visually separate from the navigation links so it doesn't compete.
- Single line, centered or left-aligned to match the bottom-bar's existing alignment.

### Copy
- "**Inquire about this domain →**" (links to the per-site `eftyUrl`).
- Not "For sale", not "Make an offer", not "Distressed sale" — all of those read panicky. *Inquire* keeps it positioning-neutral and accurate.

### Typography
- `text-xs` (12px) — discreet, not promotional.
- Same neutral text color as the existing copyright line (`text-white/50` on the dark footer surface).
- No bold, no underline at rest. Underline + brand-primary color on hover only.
- Arrow glyph (`→`) renders inline; do not use a button styling.

### Tier-gating
- Render **only** when `siteConfig.eftyUrl` is set.
- Per `strategy-disposition.md §4`, **Tier A (Dog.com, Fish.com) must NOT have eftyUrl set** — those are the protect-the-asset domains; an "inquire about this domain" link on the flagship .coms would signal weakness.
- Tier B / Tier C sites (saddle, horses, petfood, ferret, lizard, vets-co, etc.) get the link when Carlo wires the per-domain Efty URL.

### Type signature for `packages/config/index.ts`
```ts
interface SiteConfig {
  // existing fields...
  /**
   * Optional Efty domain listing URL. When set, the shared Footer renders a
   * discreet "Inquire about this domain →" link. Tier A protect-the-asset
   * sites (dog-com, fish-com) MUST leave this unset.
   */
  eftyUrl?: string
}
```

### Smoke test
- Dog.com / Fish.com — no link rendered (eftyUrl unset).
- One Tier-B/C site with eftyUrl set — link rendered, discreet, hover styled.
- Mobile: link wraps below the copyright line, still legible.

## Self-check (per CSRO §15 / bot-fleet §5)

> *"Did I generate strategic value yesterday, or was I noise?"*

Strategic value. The launch-first sign-offs directly unblock the first-greenlight site (Ferret.com per `csro-dir-2026-W22-009`); the 12-file mobile-padding regression I caught/fixed was already affecting the launch-critical `/vets/*` directory pages; the audience-capture additions execute `dir-012` Layer 1 (highest-priority Equine-Network-buyer value driver). Trust-bar issue I flagged on Vets.co ("Veterinarian's Perspective" without a DVM on staff) is the kind of thing that hurts acquirer diligence if it's not resolved before broad promotion — better to flag now than after the launch wave.

## What I'm doing next (when ready)

1. **Open the 4 PRs** when GitHub rate limit recovers (~02:40 UTC tonight). Aiming to ship them in a single batch so the COO triage queue stays clean.
2. **Visual queue item #5** — Buy-box / ReviewCard visual polish on monetized pages (deferred until Monetization wires the buy-boxes per `csro-dir-2026-W22-009`).
3. **Visual queue item #6** — Efty footer link styling implementation (deferred until Carlo provides URLs per `dir-006`).
4. **Per-site differentiation** (queue item #7) — homepage hero refinements on the trafficked sites where editorial-honesty-CSS-only is currently in place (Ferret, PetFood, Vets); needs Carlo's Unsplash ID pass first.
5. **Trust-bar fix loop** — if COO chooses to soften the Vets.co framing instead of onboarding a DVM, Visual Bot can propose the alternative copy.

🤖 Visual Bot
