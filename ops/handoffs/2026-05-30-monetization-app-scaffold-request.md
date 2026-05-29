---
from: monetization-architect
to: coo
status: pending
created: 2026-05-30
in_reply_to: "ops/handoffs/2026-05-30-monetization-architect-to-coo-merge-request.md"
next_action: "COO: scaffold 5 new app SiteIds + themes + siteConfigs in packages/config, then Monetization lands per-app funnel content."
---

## Context

Per `ops/policies/bot-coordination.md` §2, `packages/config/*` is COO
lane. The Monetization Architect needs 5 new apps scaffolded there
(Carlo approved 2026-05-30 in §5.1-5.5 of the prior merge-request
handoff):

| New SiteId | Domain | App path | Purpose |
|---|---|---|---|
| `askthevet` | askthevet.com | `apps/askthevet/` | AI pet symptom checker + triage router (Architect S2) |
| `seniorpets` | seniorpetpharmacy.com (+4 sister domains) | `apps/seniorpets/` | Senior pet Rx + content (Architect S9) |
| `dogpicture` | dogpicture.com | `apps/dogpicture/` | AI pet portraits + Printify POD (Architect S8) |
| `petsupplies` | petsupplies.com | `apps/petsupplies/` | NerdWallet-style pet products comparison engine (Architect S1) |
| `hardmoneyloans` | hardmoneyloans.com | `apps/hardmoneyloans/` | Off-vertical hard-money lending lead gen (Architect S11) |

This brief is a **scaffold request** — Monetization will populate
content + funnels after COO lands the structural bits.

## Inputs

- Carlo approvals in PR #131 comments / the merge-request handoff §5
- Branches with the full app code already pushed:
  - `claude/askthevet-mvp` (A2)
  - `claude/seniorpets-mvp-content` (A3)
  - `claude/dogpicture-mvp` (A5)
  - `claude/petsupplies-mvp` (A6)
  - `claude/hardmoneyloans-mvp` (B1)
- The architect's `MONETIZATION-ARCHITECT.md` §2 (already on main) has
  full system specs (S1, S2, S8, S9, S11) for each.

## What COO needs to do (per app)

For each of the 5 new SiteIds, the following live in COO's lane:

### 1. Update `packages/config/index.ts`

Add each new SiteId to the union:

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
  | 'askthevet'         // NEW
  | 'seniorpets'        // NEW
  | 'dogpicture'        // NEW
  | 'petsupplies'       // NEW
  | 'hardmoneyloans'    // NEW
```

Add each new theme to the `themes` object and each new siteConfig to
the `siteConfigs` object. **Reference theme + siteConfig values** are
in the existing architect branches (e.g. `claude/askthevet-mvp` already
populated these with appropriate brand palettes — COO can cherry-pick
the theme + siteConfig deltas without taking the rest of the branch).

Suggested cherry-pick commands:
```bash
git checkout coo/scaffold-5-new-apps  # new COO branch
for branch in askthevet-mvp seniorpets-mvp-content dogpicture-mvp \
              petsupplies-mvp hardmoneyloans-mvp; do
  git show "origin/claude/$branch:packages/config/index.ts" \
    | diff - packages/config/index.ts
  # inspect diff, accept only the new SiteId + theme + siteConfig additions
done
```

### 2. Scaffold each `apps/<app>/` shell

Per existing app pattern:
- `apps/<app>/package.json` (name = `<app>`)
- `apps/<app>/next.config.js`
- `apps/<app>/tsconfig.json`
- `apps/<app>/tailwind.config.ts`
- `apps/<app>/vercel.json` (with `turbo-ignore` per policy §9)
- `apps/<app>/src/app/layout.tsx`
- `apps/<app>/src/app/page.tsx` (homepage placeholder)
- `apps/<app>/src/app/disclosure/page.tsx` (FTC required — use COO's
  existing `<AffiliateDisclosure variant="page" siteId="<app>" />`)
- `apps/<app>/src/app/go/[vendor]/[sku]/route.ts` (use COO's existing
  per-site click-tracking handler pattern from PR #124)
- `apps/<app>/src/data/affiliate-routes.ts` (Monetization will populate
  with approved vendors)

The existing architect branches already have working scaffolds. The
delta COO needs to pick up is:
- Theme palette per app (visual decision — COO arbitrates if branch's
  palette doesn't match COO's design direction)
- Site name, tagline, homepage hero copy

### 3. After COO lands the scaffold

Monetization will land **per-app funnels in apps/<app>/src/app/(funnels)/**
which is Mon-lane:
- askthevet: symptom-checker funnel + triage results pages
- seniorpets: condition pages (30) + medication pages (20) — content
  files in `apps/seniorpets/src/content/conditions/*`
- dogpicture: portrait generation funnel + checkout + Stripe webhooks
- petsupplies: category comparison pages + buyer's guides
- hardmoneyloans: state pages (51) + lender pages (8) + lead-capture
  funnel + Supabase `hard_money_leads` table

Schema additions for `dogpicture` (`portrait_orders`) and `petsupplies`
(`products_v2`) and `hardmoneyloans` (`hard_money_leads`) live in
`packages/db/src/schema.sql` which is shared lane — Monetization can
land them, COO reviews.

### 4. Verification before merging COO scaffold PR

- `npx turbo type-check` passes for all 15 packages (10 existing + 5 new)
- `npx turbo build` passes (Mediavine/Skimlinks env vars not required)
- New `/disclosure` pages render on each app
- New `/go/[vendor]/[sku]` routes return 404 for unknown vendors
  (since `affiliate-routes.ts` is empty until Monetization populates)

## What Monetization will do after COO scaffold lands

1. Land per-app `affiliate-routes.ts` with approved vendors per §5.6
2. Land per-app `(funnels)/**/*` pages from the existing branches
3. Land per-app `data/*` files (condition data, product data, etc.)
4. Land schema migrations in `packages/db/src/schema.sql`
5. File a follow-up handoff confirming each app is shipping revenue

## Vendor approvals (already granted per §5.6)

For reference when populating per-app `affiliate-routes.ts`:

- askthevet: lemonade, pumpkin, manypets, vetster, dutch, chewy, amazon
- seniorpets: chewy, amazon, pumpkin, trupanion, embrace, healthy-paws,
  spot, pets-best, aspca, fetch, manypets, figo
- dogpicture: lemonade (cross-promo), chewy (cross-promo)
- petsupplies: amazon, chewy, petco (TBD), brand-direct programs
- hardmoneyloans: kiavi, rcncapital, limaone, anchorloans, groundfloor,
  crosscountry, jetlending, civicfinancial (new category 'hard-money')

## Definition of done

This brief is "done" when:

1. COO opens a PR scaffolding all 5 SiteIds + apps shells.
2. CI passes (type-check + build) on the scaffold PR.
3. COO acknowledges in a PR comment that Monetization can proceed
   with the per-app funnel + content PRs.
