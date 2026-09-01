# Directory packs

License-board CSVs for the five launch sites. **This folder does not invent listings.**

Chief of Staff drops the real files here. Overnight builder only ships the importer + empty-state routes.

## Required filenames

| File | Site | Expected rows (once present) |
|---|---|---|
| `ferret-national.csv` | ferret.com | 70 |
| `fish-national.csv` | fish.com | 665 |
| `dog-national.csv` | dog.com | 1368 |
| `horses-national.csv` | horses.com | 1,648 |
| `vets-co-national.csv` | vets.co | 59,741 |

## Required columns

```
display_name,city,state,category,license_number,source_url,claimed
```

- `source_url` and `license_number` are required. Rows missing either are skipped.
- Importer forces `claimed=false` (unclaimed stubs).
- Dedupe: `(license_number,state)` then `(display_name,city,state)`.
- No phone, email, or rating columns. Do not add them.
- Do not email licensees.
- TX/NY rows in the vets pack that were lookup-only stay out unless they are actually in this CSV.

## Load

```bash
npx tsx scripts/import-directory.ts
```

Load order: ferret → fish → dog → horses → vets-co (vets in one idempotent write; re-run is safe).

Output: `apps/<site>/src/data/directory-listings.json` (empty `[]` until a CSV exists).

Public surface: `/directory` (≤12 featured + search, 50/page), listing stubs at `/directory/[slug]`, and city/state landings generated from imported rows only (`/directory/tx`, `/directory/tx/austin`). Empty pack → empty-state, no invented places. Do not dump the pack on the site homepage.
