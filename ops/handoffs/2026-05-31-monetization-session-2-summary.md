---
from: monetization
to: csro, coo, carlo
status: done
created: 2026-05-31
in_reply_to: ops/handoffs/2026-05-30-csro-fleet-activation.md
next_action: "CSRO: roll into next weekly portfolio ranking; close dir-009 + dir-012 line items; consider IR Bot review of the 7 new sequences before Carlo flips email-capture flag."
---

# Monetization Bot — Session 2 ship summary

Autonomous run 2 of 2 this cycle. 8 commits, branch `claude/carlo-os-monetization-ZQgKF`. Building on session 1 (commits up to f2aa39e).

## Commits this session

| # | Commit | Scope |
|---|---|---|
| 1 | `784e49f` | **Email sequences** — saddle-buyer + horse-owner umbrella welcome sequences (10 emails + 2 READMEs) |
| 2 | `8d0e1e3` | **Email sequences** — dog-owner + fish-keeper + ferret-keeper umbrella welcome sequences (15 emails + 3 READMEs) |
| 3 | `3173cf3` | **Horse-cluster Layer 2** — saddle.com /guides/horse-grooming-guide + /horse-first-aid-guide + /horse-trailer-guide monetized (6 ReviewCards) |
| 4 | `c7d0f74` | **Ferret-com infra** — amazon-brand + chewy-brand search routes added; 5 ReviewCards retrofitted from direct merchant URLs to `/go`-routed CTAs (resolves own tech debt from dir-009 closure) |
| 5 | `813427b` | **Horse-cluster Layer 2** — saddle.com /guides/bit-selection-guide monetized (2 ReviewCards: bit gauge + starter snaffle) |
| 6 | `<this commit>` | **Horse-cluster Layer 2** — saddle.com /guides/bridle-fit-guide monetized (2 ReviewCards: noseband taper gauge + anatomic bridle) + this summary |

## What changed in numbers

### Layer 1 (email / audience capture) — **PORTFOLIO-WIDE UNLOCK**

Before this session: 2 sites had any email-sequence directory; ~260 distinct `source` tags across the fleet pointed at journeys that didn't exist (silent dropoff once email-capture goes live).

After this session: 5 umbrella welcome sequences (saddle-buyer, horse-owner, dog-owner, fish-keeper, ferret-keeper) cover the 5 trafficked sites. Each is 5 emails with a 0min / 3d / 7d / 14d / 21d cadence. Each sequence has a README documenting the Mailchimp Customer Journey setup recipe and the two-tag routing pattern (specific source tag for analytics + umbrella tag for trigger).

| Site | Source tags | Existing specific sequences | Umbrella sequence | Coverage |
|---|---|---|---|---|
| dog.com | ~140 | puppy-onboarding, puppy-schedule | `dog-owner` | ~100% |
| fish.com | ~73 | aquarium-cycling, cycling-guide | `fish-keeper` | ~100% |
| saddle.com | ~20 | saddle-fit | `saddle-buyer` | ~100% |
| horses.com | ~17 | first-horse-roadmap, first-horse-90-day | `horse-owner` | ~100% |
| ferret.com | ~17 | first-year-schedule | `ferret-keeper` | ~100% |
| petfood.com | ~2 | label-reading, reading-pet-food-labels | (not needed — already 100% covered) | 100% |

**Carlo unlock:** zero today. Once `/api/subscribe` gets Mailchimp credentials and the env flag flips, all 5 umbrella sequences fire on the umbrella tags. The README per sequence is the setup recipe.

### Layer 2 (commerce) — horse-cluster expansion

Saddle.com horse-cluster guide-page monetization coverage:

| Page | Pre-session | This session | Picks added |
|---|---|---|---|
| /guides/horse-nutrition-guide | ✓ (session 1) | – | 3 |
| /guides/horse-grooming-guide | ✗ | ✓ | 2 |
| /guides/horse-first-aid-guide | ✗ | ✓ (with supportive-only CalloutBox) | 2 |
| /guides/horse-trailer-guide | ✗ | ✓ | 2 |
| /guides/bit-selection-guide | ✗ | ✓ | 2 |
| /guides/bridle-fit-guide | ✗ | ✓ | 2 |
| /guides/leather-care-guide | ✗ | **SKIPPED** — trust-bar finding (fabricated saddler voice; flagged in `2026-05-31-monetization-trust-bar-findings.md`) | – |

Horses.com /guides/saddle-fit-basics also monetized in session 1.

= 7 horse-cluster guide pages now monetized (was 1 going into the cycle), 13 ReviewCards total. All routed via SmartPak (saddle-com + horses-com allow-list per §5).

### Ferret-com infrastructure

`/go/<vendor>/<sku>` affiliate-tag substitution now works correctly for all chewy-brand search CTAs on ferret-com. Previously bypassed the registry by linking direct to merchant search URLs.

## Trust bar across all shipped content

- All bylines remain `<Site>.com Editorial — Editorial team`. No fabricated authority.
- Sources cited per email and per ReviewCard description: NRC, AAEP, AAFCO, AAHA, AVMA, SMS, MSA, ISES, FEI, Quesenberry & Carpenter, Greve & Dyson, Belock, von Peinen, McGreevy.
- No first-person clinical / craft claims.
- AffiliateDisclosure inline variant above every picks section. FTC disclosure in every email footer.
- ScoreMethodology disclosed on every picks section.
- Health pages framed with explicit "supportive supplies only, not treatment; defer to your vet" CalloutBox. No treatment / cure claims.
- trust-guard CI: PASS at every commit (0 hits across 740 TSX).

## What's open for CSRO / Carlo / IR Bot

1. **IR Bot review of 5 new welcome sequences** before Carlo flips the email-capture env flag. ~25 emails to audit. Particularly worth checking the dog-owner pet-insurance email (financial claims) and the ferret-keeper senior-medicine email (clinical content with explicit defer-to-vet framing).
2. **CSRO ranking refresh** — close dir-009 (already acked in session 1) and the horse-cluster Layer-2 portion of dir-012; mark Layer-1 as well-advanced (5 sequences done, /api/subscribe still 503 pending Carlo).
3. **Carlo decisions still open from session 1** (carried forward):
   - EleVet (CBD) on dog.com — approve+wire or remove
   - leather-care-guide saddler voice fix (COO lane)
   - Email-capture env flag flip (Mailchimp setup + `NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED`)
4. **COO** — leather-care-guide third-person rewrite (drafted in trust-bar findings handoff)
5. **IR Bot** — 2 trust-guard.mjs regex additions still pending (saddler-voice + "we reviewed" patterns)

## Monetization Bot next-up queue (when run resumes)

1. More saddle.com horse-cluster guides — horse-boot-types (223 lines, clean), western-saddle-guide, lunging-basics
2. Audit ferret-com health pages for monetization-rollout readiness (pending IR Bot review of aging-ferret-care supportive-only pattern)
3. `/go/[vendor]/[sku]` search-query SKU support → already done for amazon-brand + chewy-brand on ferret-com this session; consider adding `smartpak-brand` (would unlock /go routing for the 13 saddle/horses ReviewCards using direct SmartPak URLs, but needs verification of SmartPak's actual search URL format)
4. Mediavine Journey staging — gated on Carlo confirm for `dir-011`
5. Continue trust-bar fleet sweep if new patterns surface
6. Orphan-gap audit on lizard.com (smallest trafficked site)
