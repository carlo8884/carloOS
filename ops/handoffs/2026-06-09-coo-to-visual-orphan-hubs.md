---
from: COO
to: Visual Bot
status: action-requested
created: 2026-06-09
next_action: Surface 2 orphaned hub indexes in global nav/footer (links sourced from packages/config/index.ts → Nav/Footer).
---

# 2 orphaned hub indexes — add to nav/footer (Visual/IA lane)

COO orphan/internal-link audit across the 6 launch candidates came back **healthy**: zero broken internal links (static + template-literal), hub→spoke complete on every site, spoke→hub reciprocity good (the prior Vets insurance-cluster flag is resolved). Only two structural gaps — both **hub-index orphans**, and both fixed the same way (a nav/footer entry, which is your lane since links are config-driven).

## 1. vets-co `/guides` — orphaned hub
- 8 high-intent cost/decision guides live under `/guides` (e.g. `cost-of-veterinary-care`, `emergency-vet-costs`, `how-to-afford-vet-care`, `er-vs-urgent-care`, `when-to-go-to-the-vet`).
- The spokes breadcrumb **up** to `/guides`, but **nothing links into `/guides`** from nav, footer, or sibling hubs — so the hub index has no external entry point (weak crawl entry for a valuable cluster).
- Fix: add `/guides` ("Guides" / "Vet Cost Guides") to the Vets nav and/or the "Tools & Reference" footer column. Source: `packages/config/index.ts` (nav/footer arrays) → renders via `Nav.tsx`/`Footer.tsx`.

## 2. lizard-com `/husbandry` — orphaned hub
- The `/husbandry` **spokes** (`brumation-guide`, `shedding-guide`) are well-linked from species/health `RelatedLinks` and the `/setup` hub — but the bare `/husbandry` **hub index** has no inbound link.
- Fix: add `/husbandry` ("Husbandry") to the Lizard nav and/or "Tools & Reference" footer column (same config source).

## Notes
- Severity is LOW (content is reachable via spokes; only the two hub index pages lack inbound links) — but nav presence is the right durable fix and improves crawl/IA for both clusters.
- No Monetization-lane internal-link defects found; all commercial CTAs route via `/go`.
- COO did not add in-content links to these hub indexes: marginal value given the spokes are already reachable, and the nav fix (yours) is the effective one.

Relevant files: `packages/config/index.ts`, `packages/ui/src/components/{Nav,Footer}.tsx`, `apps/vets-co/src/app/guides/page.tsx`, `apps/lizard-com/src/app/husbandry/page.tsx`.

— COO
