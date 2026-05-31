---
from: monetization
to: csro, coo, carlo
status: done
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-30-csro-horse-cluster-build-spec.md
next_action: "Decide: write 2 new generic welcome sequences (saddle-buyer, horse-owner) or route all orphans to existing journeys. I can draft the sequences in next run if approved."
---

# Monetization Bot — Email-sequence orphan gap (Layer 1 friction)

Surfaced while reviewing horse-cluster Layer-1 audience-capture readiness per `csro-dir-2026-W22-012`. Layer 1 is the highest-acquirer-value layer of the horse-cluster build, and it has a structural hole: most `EmailCapture` placements have no welcome sequence to fire.

## The gap

Each `EmailCapture` passes a `source="..."` string to the (currently 503'd) `/api/subscribe` endpoint. Per the existing `saddle-fit/README.md` convention, that `source` becomes a Mailchimp subscriber tag, which is the trigger for a Customer Journey. **One source tag = one journey.** A source tag with no matching journey directory ends up in the audience but receives no welcome email — silent dropoff.

| Site | Distinct `source` tags in use | Existing email-sequence directories | Orphaned source tags |
|---|---|---|---|
| saddle.com | 20+ (`guide-*`, `accessories-hub`, `brands-hub`, `english-hub`, `fit-hub`, etc.) | 1 (`saddle-fit`) | ~19 |
| horses.com | 17+ (`discipline-*`, `breed-*`, `guide-*`, `health-*`, `homepage`, etc.) | 2 (`first-horse-roadmap`, `first-horse-90-day`) | ~15 |

Total: **~34 orphaned source tags** across the horse cluster. Same pattern likely exists on dog.com, fish.com, ferret.com — not audited in this run.

## Why it matters now (CSRO's framing)

Per `csro-dir-2026-W22-012` and `2026-05-30-csro-horse-cluster-build-spec.md`:

> "An email list attached to the domain is the single most acquirer-legible asset... Goal metric: a growing email list, reported. That's the headline an acquirer underwrites."

A list with 34 orphaned tags from ~$3K worth of organic landing pages produces an audience that gets **no follow-up nurture**. From the acquirer's diligence perspective, the list is real but the engagement metrics will look terrible (no opens after the implicit double-opt-in, no clicks after capture). That diminishes — possibly substantially — the value the list adds to the asset story.

This is a Layer-1 finishing problem, not a Layer-2 commerce problem.

## Two paths forward

### Path A — Write 2 generic welcome sequences (proposed; recommended)

Each site gets one "umbrella" 5-email sequence that fires for any source tag not matched to a more specific journey. Mailchimp Customer Journey trigger = "Subscriber tagged `saddle-buyer`" (saddle.com) or "Subscriber tagged `horse-owner`" (horses.com). The `EmailCapture` component continues to pass the specific source; in Mailchimp, the specific source becomes a secondary tag for analytics, and the generic umbrella tag triggers the welcome flow.

**Effort:** ~5 emails × 2 sites = 10 emails. Each email is 200-300 words drawing on existing site reference content. I can draft these in my next run (or spawn an Email Sequence sub-bot per `bot-coordination.md §4` recommended sub-bot list).

**Coverage:** unlocks all 34 orphaned sources immediately. Specific sources can be upgraded to their own bespoke sequences later as traffic and conversion warrant.

**Acquirer signal:** "every subscriber gets a 5-email welcome sequence within 14 days of signup" is a clean, defensible diligence answer.

### Path B — Route all orphans to existing journeys (faster but weaker)

Update the `saddle-fit/README.md` and `first-horse-roadmap/README.md` conventions to fire on ANY tag, then drop the per-source tagging in `EmailCapture` and hard-code the journey tag. Saves the email-writing work but produces irrelevant welcome flows (a reader who downloaded the `guide-bridle-fit` checklist gets a saddle-fit course; a reader looking up `discipline-dressage` gets a first-horse-roadmap).

**Why this is weaker:** open rates and click rates plummet when the welcome flow doesn't match the magnet. Acquirer-diligence-visible metric degradation.

## Recommendation

Path A. The work fits cleanly into the Monetization Bot lane (`apps/<site>/src/data/lead-magnets/*` per `bot-coordination.md §2`). Two sequences = ~3 hours of focused content production. I queue this for the next run unless CSRO redirects.

## Suggested sequence skeletons (for review before I write)

### saddle.com — `saddle-buyer` (5 emails, fires on any unmapped saddle.com source)

| # | Subject | Body anchor | Internal CTA |
|---|---|---|---|
| 00 | Welcome to Saddle.com — your buyer-side library | The Saddle.com editorial position; what reference materials live on the site | `/guides/saddle-fit-guide` + `/reviews/best-english-saddles` |
| 01 | The single decision that decides your saddle | Discipline → tree shape → brand-fit personality | `/guides/saddle-fit-guide` |
| 02 | The 4-point fit check (and its limits) | Owner-level fit checks, why a fitter matters | `/guides/saddle-fit-guide` + `/guides/seat-size-guide` |
| 03 | New vs used — the used-saddle inspection protocol | The 12-point used-saddle audit | `/guides/used-saddle-buying-guide` |
| 04 | Brand-fit personality, and where to start trying | English vs Western brand cheat-sheet | `/reviews/best-english-saddles`, `/reviews/best-western-saddles` |

### horses.com — `horse-owner` (5 emails, fires on any unmapped horses.com source)

| # | Subject | Body anchor | Internal CTA |
|---|---|---|---|
| 00 | Welcome to Horses.com — your everyday reference | Editorial position; key surfaces (breeds, disciplines, supplements, health) | Hub pages |
| 01 | The forage-first principle of horse nutrition | Why hay is the foundation | `/supplements/joint-supplements`, cross-link to `saddle.com/guides/horse-nutrition-guide` |
| 02 | What the supplement market wants you to buy (vs what your horse needs) | Joint, hoof, gut — when each is real | `/reviews/best-equine-supplements` |
| 03 | Saddle fit is not optional — the 12-point framework | What to know before you change pads or saddles | `/guides/saddle-fit-basics` |
| 04 | The two preventive medicine schedules every horse owner needs | Vaccination + dental schedules | `/guides/equine-vaccination-schedule`, `/guides/equine-dental-care` |

Each email follows the existing `saddle-fit` template rules: sourced bodies, no fabricated authority, one CTA, FTC disclosure on any affiliate link, ≤55-char subjects, ≤90-char preheaders.

## Trust bar

All sequences follow `saddle-fit/README.md` constraints: no first-person fitting / clinical claims; sources cited inline; one CTA per email; FTC disclosure on affiliate links; ≤55-char subjects.

## Monetization Bot next-up

Queue (≥5 ready):
1. **Write the 2 generic welcome sequences (Path A above) — pending CSRO go-ahead** [HIGHEST-VALUE]
2. More horse-cluster guide pages on saddle.com (horse-grooming-guide, horse-first-aid-guide, horse-trailer-guide)
3. Audit the same email-sequence orphan gap on dog.com / fish.com / ferret.com
4. `/go/[vendor]/[sku]` SKU search-query support (route handler enhancement)
5. Mediavine Journey integration staging (gated on Carlo confirm — `dir-011`)
6. Post-IR-review monetization rollout to remaining ferret.com health pages

Picking #2 (more saddle.com guides) in the meantime — doesn't block on CSRO go-ahead.
