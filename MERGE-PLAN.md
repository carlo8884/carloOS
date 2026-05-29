# Merge Plan — 7 Monetization Branches

The Monetization Architect run (2026-05-28 → 2026-05-29) produced
**7 branches** ready to land on `main`. This doc tells you the safe
merge order, the predictable conflicts, and the post-merge env vars
you need to set for revenue to actually flow.

_Last updated: 2026-05-29. Source: see [`MONETIZATION-ARCHITECT.md`](./MONETIZATION-ARCHITECT.md)._

---

## TL;DR

Merge in this order, in this many minutes:

| Order | Branch | Estimated time | Conflict? |
|---|---|---|---|
| **1** | `claude/carlo-os-monetization-ZQgKF` (architect canonical) | 5 min | No |
| **2** | `claude/affiliate-link-portfolio-rollout` | 5 min | No |
| **3** | `claude/email-sequences-7-magnets` | 2 min | No |
| **4** | `claude/askthevet-mvp` | 5 min | Yes — `packages/config/index.ts` SiteId |
| **5** | `claude/seniorpets-mvp-content` | 5 min | Yes — same file |
| **6** | `claude/dogpicture-mvp` | 5 min | Yes — same file |
| **7** | `claude/petsupplies-mvp` | 5 min | Yes — same file |

Total: ~30 minutes of focused merge work. Every conflict has a
deterministic resolution documented below.

---

## What each branch contains

### 1. `claude/carlo-os-monetization-ZQgKF` (the architect canonical)

The Monetization Architect's own branch. Contains the strategy
foundation that all other branches reference.

- 5 strategy docs: `MONETIZATION-ARCHITECT.md`, V1 Playbook, V2 Playbook,
  Quick Wins, 90-Day Plan
- `BOT-OPERATIONS.md` runbook for spawning persistent bots
- Foundation primitives in `packages/ui`: `AffiliateLink`,
  `AffiliateDisclosure`, `SkimlinksLoader`, `AdSenseLoader`, `AdSlot`,
  60+ vendor `affiliate-vendors` registry, `affiliate-redirect` server
  handler, example `/go/[vendor]/[sku]` route on dog-com
- Pet insurance hub on dog.com (9 carriers + per-carrier deep dives +
  quiz + vets-co mirror)
- DNA test affiliate hub on dog.com (Embark + Wisdom Panel + Basepaws +
  6 breed landing pages)
- Lead magnet thank-you page template at `/thanks/[magnet]`
- 4 handoff docs in `ops/handoffs/`
- This file (`MERGE-PLAN.md`)

**Why first:** every other branch references the primitives in this
branch. The other branches were branched off this one (not off `main`),
so they carry these changes forward. Landing this first means
subsequent merges only show their own diffs.

### 2. `claude/affiliate-link-portfolio-rollout` (A1)

Rolls the primitives out across all 10 existing apps. Branched off
branch #1.

- `/go/[vendor]/[sku]/route.ts` mirrored into 9 remaining apps
- `<SkimlinksLoader />` wired into shared `Footer.tsx`
- `ReviewCard` extended with `ctaVendor` / `ctaSku` props (backward
  compatible — `ctaHref` still works)
- 46 review pages wrapped in `<AffiliateDisclosure>` for FTC compliance
- `packages/ui/package.json` subpath export fix for the redirect handler
- 58 files, 274 insertions, 143 deletions

**Why second:** activates revenue infrastructure across all existing
content (327 pages). Should land before new-app branches because those
also import the rollout's package.json change.

### 3. `claude/email-sequences-7-magnets` (A4)

35 Mailchimp welcome emails (5 emails × 7 lead magnets) in
`apps/<site>/src/content/email-sequences/<tag>/`. Closes a $50-250k/yr
revenue leak the moment Mailchimp Automations are configured.

- 7 sequence directories with READMEs
- 35 Markdown emails with FTC disclosure inline
- 35 unique `/go/<vendor>/<sku>` affiliate routings

**Why third:** purely additive new files in new directories. Cannot
conflict with anything.

### 4. `claude/askthevet-mvp` (A2)

New `apps/askthevet` Next.js app. 22 routes including symptom checker,
JSON triage API, 10 SEO landing pages.

- OpenAI `gpt-4o-mini` integration with strict JSON output schema
- Falls back to mock if `OPENAI_API_KEY` absent (dev mode works)
- All 4 monetization routes wired via `AffiliateLink`

**Conflicts at merge:** adds `'askthevet'` to SiteId union and adds
its theme + siteConfig to `packages/config/index.ts`. See resolution
below.

### 5. `claude/seniorpets-mvp-content` (A3)

New `apps/seniorpets` Next.js app. 65 static pages (30 senior pet
conditions + 20 medications + 15 framework).

- Real sources cited: Cornell CVM, AAHA, AAFP, ACVIM, AVMA, IRIS Kidney,
  Merck Veterinary Manual
- DVM reviewer attribution gated behind `NEXT_PUBLIC_SHOW_REVIEWER`
  (defaults OFF — prevents false credential claims)
- `AffiliateLink` wiring: Adequan via chewyrx, Cosequin via chewy,
  Big Barker / PetSafe via amazon, Trupanion insurance

**Conflicts at merge:** adds `'seniorpets'` to SiteId union and adds
its theme + siteConfig to `packages/config/index.ts`. Also appends to
`packages/db/src/schema.sql`. See resolution below.

### 6. `claude/dogpicture-mvp` (A5)

New `apps/dogpicture` Next.js app. 16 routes for AI pet portrait
generation + Printify-fulfilled POD.

- 12 style presets (Renaissance, Watercolor, Anime, Cyberpunk, Pop Art,
  Pencil Sketch, etc.)
- Stripe Checkout integration
- Mock mode when `DOGPICTURE_LIVE_MODE != 'true'`
- Pricing scaffolded: digital $9, mug $25, T-shirt $35, canvas $59,
  blanket $69, framed print $89, digital+canvas bundle $35

**Conflicts at merge:** adds `'dogpicture'` to SiteId union and adds
its theme + siteConfig to `packages/config/index.ts`. Also appends a
`portrait_orders` schema. See resolution below.

### 7. `claude/petsupplies-mvp` (A6)

New `apps/petsupplies` Next.js app. 49 routes for NerdWallet-style pet
products comparison engine.

- 37 categories × 5+ subcategories
- 160 seeded products with structured scoring
- Comparison tool at `/compare`
- Editorial standards page

**Conflicts at merge:** adds `'petsupplies'` to SiteId union and adds
its theme + siteConfig to `packages/config/index.ts`. Also appends a
`products_v2` schema. See resolution below.

---

## Conflict resolution recipe

All 4 new-app branches modify the same 3 locations in
`packages/config/index.ts`. Each conflict is mechanical — keep all
contributions.

### Conflict pattern 1: SiteId union (line ~11)

When merging multiple branches, the SiteId union accumulates. After
all 4 new-app branches land, the union should read:

```typescript
export type SiteId =
  | 'dog-com'
  | 'vets-co'
  | 'fish-com'
  | 'saddle-com'
  | 'lizard-com'
  | 'horses-com'
  | 'petfood-com'
  | 'petfoods-com'
  | 'ferret-com'
  | 'ferrets-com'
  // New from monetization run 2026-05-29:
  | 'askthevet'
  | 'seniorpets'
  | 'dogpicture'
  | 'petsupplies'
```

**On each conflict:** accept both sides (`git checkout --theirs` if
you're rebasing onto main from a feature branch, or paste both
additions into the union if doing 3-way merge).

### Conflict pattern 2: themes object (line ~120)

The `themes` object is keyed by SiteId. Each new-app branch adds its
own theme object. After all 4 land, the object has 14 entries.

**On each conflict:** keep both branches' additions. Order within the
object doesn't matter functionally.

### Conflict pattern 3: siteConfigs object (line ~425)

Same pattern as themes — each new-app branch adds its own siteConfig
entry. After all 4 land, the object has 14 entries.

**On each conflict:** keep both branches' additions.

### Conflict pattern 4: schema.sql (database)

A3, A5, A6 all APPEND new tables to `packages/db/src/schema.sql`.
These are at different ends of the file but git may show conflicts
at the file boundary.

- A3 (seniorpets): appends conditions + medications metadata tables
  (if any)
- A5 (dogpicture): appends `portrait_orders` table
- A6 (petsupplies): appends `products_v2` table

**On each conflict:** keep ALL appended tables. They have unique names,
won't collide at the database level. Run the new SQL in Supabase SQL
Editor after merging.

### Conflict pattern 5: packages/ui/src/index.ts

If two branches both add to the exports list, you'll see a conflict.
The fix is to keep both export lines.

---

## Post-merge env vars (Vercel)

After all 7 branches are merged to `main`, set these env vars in
**each** Vercel project to activate revenue. Items marked **🌐 all** go
on every existing project. Items marked **🎯 new** go on the new app
projects you'll create.

### Existing projects (dog-com, vets-co, fish-com, lizard-com, saddle-com)

**🌐 all** — universal monetization activation:
```
NEXT_PUBLIC_SKIMLINKS_PUBLISHER_ID=<from skimlinks.com signup>
NEXT_PUBLIC_ADSENSE_CLIENT_ID=<ca-pub-... from adsense.google.com>
NEXT_PUBLIC_ADSENSE_SLOT_IN_ARTICLE=<slot ID from AdSense dashboard>
NEXT_PUBLIC_ADSENSE_SLOT_SIDEBAR=<slot ID>
```

**🌐 all** — per-vendor affiliate tracking codes (only needed if
direct-applying to programs vs. using Skimlinks for auto-affiliation):
```
AFF_CHEWY_TAG=<from Chewy / Impact.com>
AFF_AMAZON_TAG=carloos-20   # default; replace once approved
AFF_PETCO_TAG=<from Petco / Rakuten>
AFF_SMARTPAK_TAG=<from SmartPak / Awin>
AFF_DOVER_TAG=<from Dover / Awin>
AFF_EMBARK_TAG=<from Embark / Impact.com>
```

**🌐 all** — Mailchimp wiring (existing per STATUS.md §11):
```
NEXT_PUBLIC_EMAIL_CAPTURE_ENABLED=true
MAILCHIMP_API_KEY=<from Mailchimp Account → Extras → API Keys>
MAILCHIMP_AUDIENCE_ID=<per-site audience ID>
```

### New Vercel projects to create

For each new app (askthevet, seniorpets, dogpicture, petsupplies),
create a new Vercel project pointed at the same repo with the
appropriate root directory and `NEXT_PUBLIC_SITE_ID`.

**askthevet** — needs:
```
NEXT_PUBLIC_SITE_ID=askthevet
OPENAI_API_KEY=<server-only, for triage prompt>
# all the universal env vars above
```

**seniorpets** — needs:
```
NEXT_PUBLIC_SITE_ID=seniorpets
NEXT_PUBLIC_SHOW_REVIEWER=false   # keep OFF until real DVM reviewers wired
# all the universal env vars above
# universal affiliate env vars above
```

**dogpicture** — needs:
```
NEXT_PUBLIC_SITE_ID=dogpicture
OPENAI_API_KEY=<server-only, for image gen>
STRIPE_SECRET_KEY=<from Stripe>
STRIPE_WEBHOOK_SECRET=<from Stripe webhook config>
PRINTIFY_API_KEY=<server-only, from Printify>
PRINTIFY_SHOP_ID=<from Printify>
DOGPICTURE_LIVE_MODE=true        # set 'false' to stay in mock mode
# Mailchimp env vars
```

**petsupplies** — needs:
```
NEXT_PUBLIC_SITE_ID=petsupplies
# universal env vars + affiliate tags
```

---

## Mailchimp Automations (the email leak)

Once `claude/email-sequences-7-magnets` is merged, the 35 emails are
in the repo as Markdown. They are NOT yet active in Mailchimp.

**Per STATUS.md §11, Mailchimp setup is Carlo-only.** For each of the
7 sequences:

1. Mailchimp → Automations → Create Journey
2. Trigger: "Tag added to subscriber"
3. Tag: `<site>:<magnet>` (e.g. `dog-com:puppy-schedule`)
4. Email 1 (Day 0): paste the contents of `01-welcome.md`
5. Email 2 (Day 2): paste `02-education.md`
6. Email 3 (Day 5): paste `03-story.md`
7. Email 4 (Day 9): paste `04-recommendation.md`
8. Email 5 (Day 14): paste `05-engagement.md`
9. Activate the journey

Total time: ~5-10 minutes per sequence × 7 = ~45-70 minutes.

---

## Supabase schema migrations

Once branches #5-7 (the new-app branches with schema additions) are
merged to main, run the appended SQL in Supabase:

1. Supabase → SQL Editor
2. Copy the new sections from `packages/db/src/schema.sql` (the
   sections after the existing tables)
3. Run each new `create table` block

These are additive — won't affect existing tables.

---

## Domains + DNS

Each new app needs a domain pointed at its Vercel project:

| App | Domain |
|---|---|
| askthevet | askthevet.com |
| seniorpets | seniorpetpharmacy.com (primary), seniorpetmeds.com, seniorpetproducts.com, seniorpetplace.com, seniorcats.com |
| dogpicture | dogpicture.com |
| petsupplies | petsupplies.com |

For multi-domain apps (seniorpets serves 5 domains), add all 5 in the
Vercel project's Domain settings and point each to the same project.

---

## Affiliate program applications

The Monetization Architect doc (§5) lists ~100 programs. The Tier 1
applications to do first, all self-serve, all no-call:

| Program | Where to apply | Time | Approval |
|---|---|---|---|
| **Skimlinks** | skimlinks.com | 5 min | 24h auto |
| **Amazon Associates** | affiliate-program.amazon.com | 10 min | 24-48h |
| **AdSense** | adsense.google.com | 10 min | 1-7 days |
| **Chewy** | impact.com (search "Chewy") | 10 min | 1-2 weeks |
| **ImpactRadius** | impact.com | 10 min | 1-2 weeks |
| **Embark** | impact.com (search "Embark") | 5 min | 1-2 weeks |
| **Wisdom Panel** | impact.com | 5 min | 1-2 weeks |
| **SmartPak** | awin.com | 10 min | 1-2 weeks |
| **Dover Saddlery** | awin.com | 10 min | 1-2 weeks |
| **Lemonade Pet** | impact.com | 5 min | 1-2 weeks |
| **Pumpkin** | impact.com | 5 min | 1-2 weeks |
| **ManyPets** | impact.com | 5 min | 1-2 weeks |

Estimated active programs in 2 weeks: 10-12 of these. Combined with
Skimlinks auto-monetization (which covers the long tail), expected
combined affiliate revenue activation: portfolio-wide, day-1 once
approved.

---

## Step-by-step merge (web UI)

For each branch in the order above:

1. Open `https://github.com/carlo8884/carloos/pull/new/<branch>`
2. Create PR (base: `main`, head: `<branch>`)
3. If conflicts: GitHub shows them inline; use the conflict resolution
   recipes above
4. Merge (squash recommended for clean history)
5. Move to next branch — its conflicts will get smaller as you go

---

## Rollback strategy

If anything goes wrong post-merge:

- **Revert via GitHub UI:** PR → Revert button generates a revert PR
- **Vercel:** previous deployment is one click away in Deployments tab
- **Supabase:** schema changes are additive (no destructive
  migrations), so just leave the new tables in place; remove via
  `drop table` if needed
- **No data loss possible:** every change is documented; no existing
  tables modified

---

## Open questions for Carlo

These don't block merging — they're follow-up decisions:

- **Skimlinks vs. Sovrn:** defaulting to Skimlinks (larger merchant
  catalog). Both can run in parallel if desired.
- **AdSense placement density:** how many AdSlots per page? Default in
  the new components is "one in-article, one sidebar." Can be tightened
  or loosened.
- **DogPicture pricing:** $9 digital / $25-100 physical. Tunable in
  `apps/dogpicture/src/data/products.ts`.
- **Premium membership launch:** scaffolding is in place across the
  portfolio per Architect S14. Don't launch until each site crosses
  5-10k email subs (Gate C in the 90-day plan).

---

_See [`MONETIZATION-ARCHITECT.md`](./MONETIZATION-ARCHITECT.md) for the_
_canonical strategy reference. See [`BOT-OPERATIONS.md`](./BOT-OPERATIONS.md)_
_for spawning the persistent bots that will continue this work._
