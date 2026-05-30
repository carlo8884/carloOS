# CSRO Open Directives

**Owner:** CSRO Bot · **ID format:** `csro-dir-YYYY-WW-NNN`
Status vocab: `open` · `acked` · `in-progress` · `done` · `blocked` · `dropped`

---

## Open

### csro-dir-2026-W22-006 → Carlo — traffic numbers + Efty URLs (new 2026-05-30)
- **Action:** (a) Share **rough monthly visits per domain** (Carlo's chosen format); (b) provide **per-domain Efty listing URLs**, at least for the Tier-C sell-domain names.
- **Why:** Rough traffic reorders build-vs-sell and flags thin names already pulling organic; Efty URLs let the sell-domain names point at their for-sale pages immediately. For-sale **mechanism is decided = Efty via discreet footer link** per `strategy-disposition.md §4` tiers (Tier A flagships show nothing). `[FACT]`
- **Deadline:** next CSRO brief.
- **Done-when:** rough traffic received + Efty URLs received.
- **Status:** open.

### csro-dir-2026-W22-008 → COO — Efty footer link component (new 2026-05-30)
- **Action:** Add a config-driven `eftyUrl` field per site (`packages/config`) + a discreet footer link in the shared Footer that renders only when set. Tier A (Dog/Fish) left unset → renders nothing. Per `strategy-disposition.md §4`.
- **Why:** Carlo runs Efty and wants a clear footer pointer to each site's listing; needs to be tier-gated so flagships never show it. `[FACT]`
- **Deadline:** when Efty URLs arrive (dir-006).
- **Done-when:** component live; URLs wired per tier.
- **Status:** open (blocked on dir-006 URLs).

### csro-dir-2026-W22-005 → COO — petsupplies scaffold disposition (new 2026-05-30)
- **Action:** petsupplies.com is Tabcom (out of CarloOS scope). Decide the `apps/petsupplies` scaffold: hand to Tabcom or decommission from this repo. Do NOT launch it under CarloOS.
- **Why:** A built CarloOS scaffold pointing at a separate-business domain is a launch liability + lane confusion. `[FACT]`
- **Deadline:** next merge wave.
- **Done-when:** scaffold removed or formally handed off; noted in STATUS.md.
- **Status:** open.

### csro-dir-2026-W22-003 → Carlo / COO
- **Action:** Provide per-domain registrar + renewal dates, starting with the 15 built domains (Dog.com/Fish.com first).
- **Why:** Renewal lapse on an offer-validated T1 asset = catastrophic, irreversible value loss. `[FACT]`
- **Deadline:** this week.
- **Done-when:** dates logged in `domain-inventory.md`.
- **Status:** open

---

## Closed

### csro-dir-2026-W22-004 → Carlo — CLOSED 2026-05-30
- **Resolution:** (a) petsupplies.com = Tabcom, out of scope (→ dir-005 for the scaffold); (b) equiteric.com → set aside (CSRO decision); (c) hardmoneyloans.com → SELL-DOMAIN (CSRO decision). All logged in `domain-inventory.md §4` + `strategy-disposition.md`.

### csro-dir-2026-W22-001 → Carlo — CLOSED 2026-05-30
- **Action was:** obtain the authoritative owned-domain list.
- **Resolution:** Carlo supplied the full **74-domain** list directly. Transcribed verbatim into `domain-inventory.md` v5 (46 pet · 13 horse/equine · 15 set-aside personal/other-business). All 74 verified present.
- **Outcome:** the portfolio is now anchored to a real source. Master inventory = `domain-inventory.md` v5.

### csro-dir-2026-W22-002 → Carlo — CLOSED 2026-05-30 (VOID — was based on fabricated input)
- **What happened:** I raised this directive to "confirm ownership" of domains (Cat.com, PetInsuranceReviews.com, a clean cluster taxonomy) that **I had fabricated** and mis-cited to a nonexistent `MONETIZATION-ARCHITECT.md §9`. The Monetization Bot and Carlo correctly flagged the hallucination.
- **Resolution:** the entire premise was void — those domains were never real inputs. Superseded by the authoritative list under dir-001.
- **Lesson (permanent):** domains enter the inventory **only by transcription from an authoritative owner source.** Never synthesize a domain list; never cite a doc section without verifying it exists.
