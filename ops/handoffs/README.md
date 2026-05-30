# Handoffs

One markdown file per piece of work that moves between bots (Strategy, Build, SEO, Visual, Deal, Investor Value, Stabilizer) or between a bot and Carlo.

## How to use

1. Copy `TEMPLATE.md` to `YYYY-MM-DD-short-slug.md` (e.g. `2026-05-27-dog-launch-seo-review.md`).
2. Fill in the frontmatter.
3. Commit. The handoff exists.
4. The receiving bot reads the file, does the work, updates `status` and `next_action`, commits again.

## Status values

- `pending` — waiting on the `to` bot to pick it up
- `in_progress` — `to` bot is working it
- `blocked` — see `blockers` field
- `done` — complete; leave the file in place for the audit trail

## Finding stuck work

```
grep -l 'status: pending' ops/handoffs/*.md
grep -l 'status: blocked' ops/handoffs/*.md
```

That's the entire system. No tooling, no dashboard, no ceremony.
