---
from: CSRO
to: COO, Monetization Bot, Visual Bot
status: open — AMENDED 2026-05-31 (racing fork gate)
created: 2026-05-30
re: build saddle.com + horses.com toward a named strategic acquirer (Equine Network)

> **⚠️ AMENDMENT 2026-05-31 — Horses.com racing fork is GATED.** Carlo redirected the Racing Bot to produce a
> decision-grade brief on whether Horses.com becomes a racing-intelligence platform vs editorial vs hybrid
> (`2026-05-31-csro-horses-racing-fork-gate.md`). Until that resolves:
> - ⏸ **PAUSE** any *racing-specific* Horses.com direction/identity build + Layer-3 traffic work on the racing dimension.
> - ✅ **CONTINUE** Layers 1–2 (audience capture + tack commerce) on Saddle.com AND the fork-agnostic parts of
>   Horses.com — these help every possible Horses.com future and don't pre-commit the fork.
> - 🚫 **NO wagering-adjacent build** without Carlo's explicit approval + legal review (gambling-ad law).
---

# CSRO — Horse-cluster build spec (target acquirer: Equine Network)

**Why this exists:** Carlo named a real strategic buyer — **Equine Network** — for saddle.com / horses.com + the
horse cluster. Per the illiquid-market thesis (`thesis.md §0`), building these toward that buyer is the exit path.
**But** research (`strategic-acquirers.md §1a`) shows Equine Network (now CVC-controlled, ~$300M deal) pays up for
**audience + commerce + membership**, not thin SEO content. So we build to *their* value drivers.

## Reality check (CSRO mapped the apps 2026-05-30)

These are **NOT greenfield** — they're substantially built with thin traffic:
- **saddle.com:** ~55 routes (reviews, brands, fit guides, 30+ guides). Affiliate routes exist. **Traffic ~214/mo.**
- **horses.com:** ~25 routes (breeds, disciplines, health, supplements). Affiliate routes exist. **Traffic ~1,000/mo.**

**So the gap is NOT content volume. The gaps are: (1) traffic, (2) audience capture, (3) commerce depth** — exactly
the three things that convert "parked premium domain" into "asset Equine Network pays a real number for."

## The build directive — three layers, in priority order

### Layer 1 — AUDIENCE CAPTURE (highest value to the acquirer; cheapest to add) → COO + Monetization Bot
Equine Network monetizes membership/email/SVOD. An email list attached to the domain is the single most
acquirer-legible asset. The content exists; **it's not capturing anyone.**
- Add `EmailCapture` (component exists) with a real horse-owner lead magnet on the high-intent pages:
  saddle-fit, first-horse-roadmap, body-condition-scoring, vaccination/dental schedules.
- saddle.com already has a `/saddle-fit-checklist` and horses.com a `/first-horse-roadmap` — wire these as
  gated/list-building magnets (the funnel scaffolds exist per earlier work).
- Goal metric: a growing email list, reported. That's the headline an acquirer underwrites.

### Layer 2 — COMMERCE DEPTH (feeds their flywheel; we have the allow-list) → Monetization Bot
Make the affiliate/commerce real and visible, not incidental.
- saddle.com allow-list (§5): SmartPak, Dover, Riding Warehouse, Schneider, Greenhawk, Amazon (equestrian).
  horses.com: SmartPak, Dover, Schneider, Riding Warehouse, Greenhawk, Adams, Amazon.
- Apply buy-boxes (ReviewCard) on the review/guide pages that already target commercial intent
  (best-english-saddles, best-riding-helmets, best-equine-supplements, joint-supplements, etc.).
- High-AOV tack = strong commission. This is also near-term revenue on the existing (thin) traffic.

### Layer 3 — TRAFFIC GROWTH (the slow part) → COO
Existing content is thin-trafficked; grow it where intent + commerce align.
- Don't mass-produce more thin pages (suppression risk). Deepen the pages that can rank + convert: saddle fit,
  discipline equipment, supplement/joint-health (high commercial intent + recurring purchase).
- Internal-link the cluster into hubs; ensure schema/sitemap hygiene.
- **Lean on Carlo's traffic data** (`dir-006`) to see what already ranks before investing — build where there's
  a pull, not blind.

## How to frame it for the eventual Equine Network conversation (Carlo's, later)

Position saddle.com/horses.com NOT as "premium domains for sale" (illiquid, weak) but as **"audience + commerce
assets on category-defining .coms that feed your media/membership/SVOD flywheel"** — i.e., a tuck-in that plugs
into what they already do, with a list + revenue attached to the name. That's a real-number pitch, not a tuck-in-
feeder price. **No public for-sale signage** (strategic sale = relationship/NDA, Carlo-run).

## Sequencing (per the autonomy/parallel mandate)

- **Immediate cash still comes first** (Ferret/PetFood monetization — `dir-009`); the horse cluster is the
  strategic-exit track running behind it.
- Within the horse cluster: **Layer 1 (email capture) first** — highest acquirer value, lowest effort, works on
  existing thin traffic. Then Layer 2 (commerce). Layer 3 (traffic) is the ongoing grind.
- This is a `BUILD → STRATEGIC EXIT` disposition, not a content-flip.

## Lane notes

- EmailCapture wiring + funnel/list = Monetization Bot (lead magnets, email) + COO (page placement).
- Buy-boxes/affiliate = Monetization Bot.
- Content depth + internal links + schema = COO.
- Trust bar applies (FTC disclosure on commerce pages; no fabricated authority).

*CSRO owns strategy + the acquirer framing; COO/Monetization/Visual execute. Carlo runs any acquirer contact.*
