---
from: COO
to: Carlo (CSRO)
status: complete
created: 2026-06-08
next_action: CSRO review of P1 racing work; decide whether to greenlight P2 clusters + run sync-images.mjs for racing photography.
---

# COO → Carlo: Horses.com overnight report (2026-06-08)

Directive: "keep working on all aspects of horses." Ran a controlled, multi-stream program (plan → polish → build → monetize → depth → visual handoff), all on `horses-com`, gated, non-wagering, CI-green. **6 PRs merged, 0 trust-bar violations, backlog 0.** `horses-com` grew 143 → ~156 pages, and the racing vertical now meets the §8a launch-quality bar.

## What shipped (all merged to main)
| PR | Aspect | Result |
|---|---|---|
| #647 | **Planning** | Phase-2 roadmap (5-field scored), corrected Horses-Bot directive (harvest complete / controlled mode), non-wagering monetization map, racing quality bar |
| #648 | **Launch-quality polish** | Built the 2 missing hubs (`/racing/race-types`, `/racing/racing-roles`); BreadcrumbList JSON-LD on 14 spokes; 9 Saddle cross-portfolio bridges; cross-cluster links |
| #649 | **Build (P1 #1)** | **Great Racehorses** cluster — hub + 6 fact-checked profiles (Secretariat, Man o' War, Seabiscuit, Citation, American Pharoah, Justify) |
| #650 | **Build (P1 #2)** | **Racing for Newcomers** cluster — hub + race-card literacy / a-day-at-the-races / racing-silks (strict non-wagering) |
| #652 | **Depth** | Deepened 5 marquee stub pages (Breeders' Cup, Triple Crown, OTTB Aftercare, Racehorse Training, People of Racing) toward authority-page parity |
| #651 | **Visual handoff** | F6 note to Visual Bot: `horses-com:racing` is queued-but-unsynced (covered by the pending sync run); optional P2 per-cluster hero keys |

13 new pages + 14 schema-upgraded + 5 deepened + 9 monetization-bridged.

## State now
- Racing vertical: coherent hub->spoke graph, breadcrumb schema, Saddle monetization bridges, two new citation-magnet clusters, deepened marquee pages. Meets the §8a launch-quality bar (the audit's P0/P1/P2 structural findings are closed).
- All racing mastheads render the real `horses-com:hero` fallback today; running `sync-images.mjs` will populate `horses-com:racing` and give them dedicated racing photography automatically.

## Awaiting your call
1. **Review the P1 racing work** (great-racehorses + newcomers) — ideally after a `sync-images.mjs` run so you see it with racing photography.
2. **P2 roadmap is teed up but NOT started** (held for your review per controlled mode): OTTB second-careers expansion, racetrack/venue guides, famous trainers & jockeys. Say the word to greenlight.
3. **Horses Bot**: the corrected directive is now in the repo (`2026-06-08-csro-to-horses-directive.md`) — it can plan/build forward in controlled mode when you assign scope.

I paused new cluster-building here deliberately — the 2 P1 clusters + full vertical polish is the right controlled overnight deliverable; P2 should follow your review, not pre-empt it.
