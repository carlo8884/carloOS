---
from: visual-bot
to: coo + csro + monetization-bot
status: visual-signoff
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-30-csro-fleet-activation.md
csro_directive: csro-dir-2026-W22-013 (Visual Bot queue item #2 — launch-first visual sign-off, Vets.co)
---

# Vets.co — Visual Bot launch-readiness sign-off

Per `csro-dir-2026-W22-013` Visual Bot queue item #2. Vets.co is Tier-2 promotion candidate per CSRO §8 (promotion gated by `csro-dir-2026-W22-007` — confirm self-serve carrier enrollment realism).

## Verdict: **CONDITIONAL GREEN** — with one trust-bar flag

Vets.co is visually launch-ready with a **mobile-padding regression fixed in this PR** and **one Monetization-lane padding issue still open**. The trust-bar flag below requires either a copy edit (by COO) or formal evidence that the framing is accurate.

## What got fixed in this PR (Visual lane)

### Mobile-padding regression — 12 files across 5 sites

PR #186 fixed the reversed `px-container sm:px-container-sm` pattern across 134 non-funnel files. Since then, new content waves re-introduced it on 12 newly-added files:

- **vets-co (5 files):** `vets/page.tsx`, `vets/[state]/page.tsx`, `vets/[state]/[city]/page.tsx`, `vets/[state]/[city]/[slug]/page.tsx`, `data/page.tsx` — **launch-critical for the vet directory hub**
- **dog-com (3):** `compare/page.tsx`, `compare/[slug]/page.tsx`, `data/page.tsx`
- **lizard-com (2):** `states/page.tsx`, `data/page.tsx`
- **fish-com (1):** `data/page.tsx`
- **horses-com (1):** `data/page.tsx`

In `tailwind.preset.ts`:
- `px-container` = **80px** (desktop)
- `px-container-sm` = **24px** (mobile)

The reversed pattern gives mobile 80px of horizontal padding (160px of a 390px viewport eaten), leaving ~230px for content. Fix is mechanical — swap the two so mobile gets 24px, desktop upgrades to 80px at `sm:`. Same `sed` swap as #186.

## Open issues

### 1. Monetization-lane funnel padding still broken (Vets.co + Dog.com — 9 files) ⚠

Same bug in `apps/{dog-com,vets-co}/src/app/(funnels)/*` (9 files including Vets.co's `pet-insurance/page.tsx`). I previously filed `ops/handoffs/2026-05-30-visual-bot-to-monetization-funnels-padding-bug.md` with the exact `sed` one-liner. **Still unfixed.** This is the actual `/pet-insurance` hub that Carlo is launching on Vets.co — fix should land before launch.

### 2. Trust-bar flag: "Veterinarian's Perspective" framing without DVM on staff ⚠

Two surfaces frame Vets.co content as veterinarian-authored without a credentialed vet attached to the work:

- **`/reviews/best-pet-insurance`** title: *"Best Pet Insurance 2025 — A Veterinarian's Perspective"*
- **`/(funnels)/pet-insurance/page.tsx`** H1: *"Why Your Vet Recommends Pet Insurance"* + opening copy: *"Veterinarians see two recurring patterns..."*

Both are byline `Vets.co Editorial`. The tools I shipped this session (e.g. PR #220 askthevet, PR #222 seniorpets) explicitly state "Editorial does not have practicing veterinarians on staff." If Vets.co adopts the same posture, these two surfaces are over-framing.

**Two acceptable resolutions:**

1. **Soften the framing** (COO copy edit — Monetization lane on the funnel, content lane on the review). Examples: "What veterinarians look for in pet insurance" → no implied authorship; "Why pet insurance matters in the exam room" → observation, not first-person clinical voice.
2. **Onboard a credentialed advisor** (DVM with explicit byline + reviewedBy in the MedicalWebPage schema) — would also benefit the broader Vets.co Tier-2 promotion case.

I am NOT editing these files in this PR — both are out of Visual lane.

## Verified-good (per launch criteria)

- ✅ **64 routes** shipped on Vets.co (vet directory, medications, symptoms, conditions, specialists, breeds, insurance hub + state/breed matrix, reviews, telehealth, diagnostics)
- ✅ **AffiliateDisclosure already enabled in `layout.tsx`** (`showAffiliateDisclosure` default true; confirmed via audit in PR #228) — Vets.co was already correct
- ✅ **Sources cited** in editorial content; carrier data drawn from public marketing pages + regulatory filings (per `insurance-carriers.ts` header comment)
- ✅ **11 insurance carriers** in registry (Pumpkin, Trupanion, ManyPets, Embrace, Lemonade, plus 6 others) — robust data layer
- ✅ **Mobile padding now clean** on all non-funnel Vets.co pages (this PR)
- ✅ **Schema** — Article + MedicalWebPage + BreadcrumbList + FAQPage JSON-LD on appropriate pages
- ✅ **Robots + sitemap** present
- ✅ **Brand typography + palette** consistent — coordinated with the clinical-authority brand brief
- ✅ **Favicon + OG (via shared template post-PR-#216) + Apple touch icon (PR #209)** all present
- ✅ **Per-site differentiation** — clinical-authority palette differs from Dog/Fish editorial; brand-coherent

## Dependencies for full launch

1. **Monetization confirms carrier-enrollment realism** (`csro-dir-2026-W22-007`) — gates real payout for the affiliate work
2. **Funnel padding fix** (Monetization lane, see open issue #1)
3. **Trust-bar framing decision** (see open issue #2)
4. **DNS pointing + GA4** (Carlo, ~20 min)

## Recommendation

Once items 1-3 above land, Vets.co insurance hub is launch-ready from the visual / structural standpoint. The data layer is robust (11 carriers, breed × state matrix, state directory). Trust-bar issue #2 is the highest-priority resolution before broad promotion — current framing risks attracting scrutiny if the site grows materially.

## Next Visual Bot queue item

Per `csro-dir-2026-W22-013` Visual Bot starting queue: **PetFood.com launch sign-off** is item #3. Will pick that up next.

🤖 Visual Bot
