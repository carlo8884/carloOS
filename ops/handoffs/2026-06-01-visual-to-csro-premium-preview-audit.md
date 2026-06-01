---
from: Visual audit (run by CSRO session) → CSRO
to: CSRO / Carlo (record)
status: launch-gating
created: 2026-06-01
re: Premium-domain visual audit of the deployed previews vs the Premium Domain Launch Bar
standard: ops/csro/premium-domain-launch-bar.md
---

# Premium-domain visual audit — deployed previews (2026-06-01)

## Method + honesty note
Graded against the 7 gates in `premium-domain-launch-bar.md`. Evidence is from: (a) live
Vercel deployment state per project, (b) deployed DOM + repo homepage code, (c) the build-time
image manifest (`packages/ui/src/data/image-manifest.json`) resolving each site's hero art.
**Boundary:** this session verifies the *objective, checkable* premium signals (is the hero real
domain photography or a CSS/placeholder; is hero art shared across sites; is an interactive product
on the first screen; is the theme distinct; is the deploy current). The final *pixel-level*
"does it look premium in 2 seconds" aesthetic judgment still belongs to Visual's rendered review and
Carlo's eyes. Per the bar's own gate ("if a site looks like a content site, it fails"), grading is
**conservative — default FAIL where premium cannot be confirmed.**

## Deploy freshness (gate 7 prerequisite) — all current
All 10 sites have live Vercel projects auto-deploying from `main`; production tracks `main` within
the latest merges (CANCELED deploys are rapid-push supersedes, normal). **No stale previews.** What
you see deployed ≈ repo `main`. So the audit reflects current reality, not drift.

## Root-cause finding (the headline)
**The launch bar's own process step 1 — "Visual produces ONE premium first-screen standard" — has
not shipped.** Every priority site is therefore still on its *pre-redesign* homepage treatment:
- **6 of 8 homepages render a CSS-only / gradient hero** (no distinct domain photography on the first
  screen): horses, vets, petfood, saddle, lizard, ferret. (dog + fish render a hero photo, but
  generic stock, not a distinct owned image.)
- **Only fish (and petfood, via #381's CTA) put an interactive tool on the homepage.** The rest are
  article-library homepages (hub = list of post titles), failing gate 3 ("a product on the homepage,
  not a link to one").
- **Confirmed shared hero art:** `horses-com:hero` and `saddle-com:hero` resolve to the *same*
  Unsplash photo (`photo-1553284965-83fd3e82fa5a`) — the exact "two priority sites feel
  interchangeable" defect in gate 5.

**CSRO verdict: all 8 priority sites currently FAIL the premium bar.** Not because content/trust is
weak (trust is strong; CI is green; Vets is a trust exemplar) — but because the premium first-screen
*product/visual* layer (gates 1, 3, 5, 6) does not exist yet. This matches Carlo's read exactly:
"still feels like basic content sites." Credible ≠ premium.

---

## Pass / fail per site (all FAIL premium; ranked by distance-to-pass)

| Site | Premium verdict | Closest gate strengths | Decisive misses (gates) |
|---|---|---|---|
| **Fish.com** | ❌ FAIL (closest) | Hero photo present; a calculator is referenced on the homepage | Generic aquarium stock not "tank control center" identity; tools are referenced, not embedded as the hero surface (1, 5, 6) |
| **Vets.co** | ❌ FAIL (trust exemplar) | Strongest first-screen *trust* posture in the fleet; honest no-fake-clinical hero | "Honest CSS wash" is not a distinct premium hero; estimator not on first screen; signature hubs orphaned from nav (1, 3, 6) |
| **Dog.com** | ❌ FAIL | Hero photo present | Generic stock dog (not emotional owner moment); signature tools (symptom/breed/compare) are nav links, not a homepage product (1, 3, 6) |
| **PetFood.com** | ❌ FAIL | Cost-calculator now surfaced as a hero CTA (#381) | CSS-only hero (ingredient photography pending); the scoring engine is not the hero surface; tool is a CTA link, not embedded (1, 3) |
| **Lizard.com** | ❌ FAIL | Dark-mode theme is genuinely distinct (only dark site) — partial gate 5 win | CSS-only hero (no reptile/habitat image); no tool on homepage; enclosure calc deferred (1, 3, 6) |
| **Horses.com** | ❌ FAIL + decision gate | — | CSS-only hero; **shares hero art with Saddle**; positioning undecided (general equine vs racing) blocks the whole design (1, 5, 6) |
| **Saddle.com** | ❌ FAIL | — | CSS-only hero; **shares hero art with Horses**; luxury identity not delivered; no fit-finder on homepage (1, 5, 6) |
| **Ferret.com** | ❌ FAIL | Warm niche voice in copy | CSS-only hero + known wrong-species/dog imagery defect; food-evaluator tool not on homepage; reset already briefed (#372) (1, 3, 6) |

### Top-3 defects + required redesign action per site
- **Dog.com** — (1) generic stock hero, not an emotional owner moment; (2) symptom-checker/breed-selector are nav links, not a homepage product; (3) homepage reads as a category list. **Action:** Visual — emotional real-dog hero; embed the breed-selector/symptom entry as the homepage product surface. *Product decision (CSRO/Carlo): is the "symptom checker" an interactive build or a reframed guide?*
- **Fish.com** — (1) generic aquarium stock; (2) calculators referenced not embedded; (3) no problem-diagnosis flow on first screen. **Action:** Visual — aquascape hero + embed volume/stocking/water-change calculators as the hero surface.
- **Horses.com** — (1) CSS-only hero; (2) **shared hero with Saddle**; (3) identity undecided. **Action:** CSRO/Carlo decide positioning (general vs `/racing` flagship) FIRST; then Visual builds the hero. *Blocked on decision.*
- **Vets.co** — (1) CSS-only hero; (2) estimator + condition lookup not on first screen; (3) signature hubs orphaned from nav. **Action:** Visual — texture-led clinical hero + homepage tool; **COO — wire orphaned hubs (/tools,/data,/emergency-triage-card,/medications,/symptoms,/diagnostics) into nav/footer** (separate, already-actionable, see queue).
- **PetFood.com** — (1) CSS-only hero (ingredient photography pending); (2) scoring engine not the hero; (3) tool is a CTA not embedded. **Action:** Visual — ingredient hero + make compare-two-foods the hero surface.
- **Saddle.com** — (1) CSS-only hero; (2) **shared hero with Horses**; (3) no fit-finder on homepage. **Action:** Visual — its OWN luxury tack hero (distinct from Horses) + fit-finder workflow.
- **Lizard.com** — (1) CSS-only hero; (2) no tool on homepage; (3) signature element thin. **Action:** Visual — dark habitat hero + embed UVB-distance/enclosure calculators (calc build deferred by Carlo — park).
- **Ferret.com** — (1) CSS-only + wrong-species imagery; (2) no homepage tool; (3) not warm/owner-intent on first screen. **Action:** Visual — real ferret hero + owner-intent first screen + embed food-evaluator (full reset already briefed #372).

---

## Routing

**Visual can fix directly (its lane), once the standard exists:**
- The ONE premium first-screen standard (grid/hero system/homepage-tool pattern/type-color-motion) — **this is the gating deliverable; nothing passes until it ships.**
- Per-site hero photography (real domain subjects), incl. the Ferret wrong-species fix and a **distinct Saddle hero so it stops sharing art with Horses**.
- Applying the standard to the priority 8.

**Requires CSRO / Carlo / product decision (blocks Visual):**
- **Horses.com positioning** (general equine authority vs `/racing` flagship) — gates the Horses + Saddle hero direction. CSRO recommends general-authority; **needs Carlo's acquisition call.**
- **Per-site "signature homepage product"** — which interactive tool becomes each homepage's hero surface (esp. Dog's "symptom checker": interactive build vs reframe; Lizard enclosure calc is parked).

**COO can do now (does NOT need the Visual standard):**
- Wire Vets.co's orphaned signature hubs into nav/footer + fix the `vets/[state]/[city]/[slug]` canonical-collision (from the Vets audit) — improves gate 4 (architecture-reads-as-product) independent of the hero work.

## Bottom line for Carlo
Do **not** treat any priority site as launch-ready. The blocker is singular and upstream: **Visual has
not yet produced/applied the premium first-screen standard.** Until that ships and is applied, all 8
fail gates 1/3/5/6 by construction. Sequence is unchanged from the bar: Visual standard → CSRO review
→ apply to priority 8 → re-run launch-polish + IR + advisor per site. Trust/schema/sitemap/internal-
linking work (this session's output) is real and necessary, but it is the *credibility* floor, not the
premium bar.
