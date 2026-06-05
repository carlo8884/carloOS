# CarloOS Phase-2 Queue — Publication → Destination tier

**Owner:** CSRO. **Updated:** 2026-06-05. Supersedes the overnight-conveyor scope now that the
**premium homepage rollout is COMPLETE** across all 5 cohort sites.
Governing law (unchanged): every item is REAL — no filler. Rank by launch-quality x revenue/asset value x
trust x speed. Cohort = Dog · Ferret · PetFood · Vets · Fish. Concentrate on cohort; non-cohort stays
competent-content tier until promoted.

---

## DONE (this arc)
- Premium image-led mobile-first homepage on ALL 5 cohort sites (Dog reference #487 → rollout #493/#494/#495/#496); top disclosure relocated to footer + in-context; real synced photography; subtle clickable attribution.
- Unsplash/Pexels TOS sweep + CI guard (no uncredited stock portfolio-wide).
- Glossaries (DefinedTermSet) + working tools/calculators on every cohort site.
- Cohort FTC disclosure audit 5/5; clinical buy-box safety microcopy; Horses/Saddle + Lizard monetization.
- Editorial-system spec ratified (#489); ArticleSourcesList component built (#490); broadened photo queries (#491).
- Photo sync run once (88 real); 37 slots re-queued with broadened queries for the next sync.

---

## NEXT PHASE — ranked (the live pull-queue)

### Track V — Visual Level 1 (publication-tier polish, $0, in lane)
- [~] Editorial-craft adoption — Dog reference articles (DropCap fix + PullQuote + ArticleSourcesList). *in flight.*
- [ ] Editorial-craft adoption — Vets, PetFood (citation-heavy), then Fish, Ferret (spec phase 2).
- [ ] Per-site typographic scale tightening (magazine headline→body jump; the spec's "one notch quiet" fix).
- [ ] Microinteractions: card hover elevation/transitions, scroll cues, image zoom on figures.
- [ ] Mobile 375px audit on the 5 new homepages + tool embeds; prep fixes for Carlo's phone spot-check.

### Track V2 — Editorial system build-out (Level 2)
- [ ] Build `EditorialStandardsSignal` (article-footer living-publication trust strip) — packages/ui.
- [ ] Build `scripts/ci/article-craft.mjs` (warning-only craft-gap audit) — COO lane.
- [ ] Adopt the per-article minimum craft bar across cohort, enforced by the audit.

### Track M — Monetization (verify-then-wire; disclosed, trust-safe)
- [~] Ferret /behavior cluster buy-boxes (D14 microcopy for comfort supplies). *in flight; verify-first.*
- [ ] Fish /health equipment (§1.5.b-safe equipment only, no Rx CTAs).
- [ ] PetFood /conditions BuyBox wiring (therapeutic-diet safety microcopy, vet-deferral).
- [ ] Horses /breeds + /disciplines buy-boxes (mirror Dog breed pattern) — non-cohort, lower priority.
- [ ] Portfolio /go-leakage re-scan after each wave.

### Track I — IR / trust
- [~] Post-premium-rollout Tier-1 re-review (validate disclosure relocation FTC-compliance). *in flight.*
- [ ] Trust-framing review of any new buy-boxes from Track M as they land.

### Track C — COO / infra
- [ ] Non-cohort hygiene (Horses, Saddle, Lizard, Petfoods, Ferrets): orphans, thin/dup, metadata.
- [ ] Prune stale agent worktrees under .claude/worktrees/; triage stale pre-session PRs (#299/#300/#328/#362/#364).
- [ ] Standing: 3 gates green + import/manifest-union verify before every merge.

### Track CARLO (gated on him — surface, don't block)
- [ ] Re-run `node scripts/sync-images.mjs --force` → fills the 37 broadened-query slots (Fish species, Ferret/Vets/PetFood hubs).
- [ ] L3 photography budget decision (>$0): Dog #1, Vets #2 — destination-tier requires real/commissioned photography.
- [ ] DNS / GA4 / email remain deferred until launch-imminent.

---

## OPERATING MODE
CSRO runs the controller rhythm continuously: dispatch parallel non-overlapping agents → verify (imports +
manifest-union + 3 gates) → merge-on-green → refill from this queue. Min ~3-5 active. Refill when it drains;
never pad to a number — if real launch-polish runs out, that IS the near-launch-ready signal, surface it.
Hard stops (escalate, never auto-act): >$0 spend, DNS/vendor, trust-bar §1 conflicts, security.
