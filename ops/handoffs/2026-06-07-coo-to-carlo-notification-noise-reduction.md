---
from: COO
to: Carlo
status: ACTION-REQUIRED (3 click-step tasks for you)
created: 2026-06-07
next_action: Carlo to apply GitHub notification settings + Gmail filter (10-15 min total)
related_pr: tbd (this commit)
---

# Vercel / GitHub notification noise reduction

## Goal

Stop your inbox from filling with `vercel[bot]` PR comment emails and routine
app-polish PR notifications, **without** losing financial, billing, usage,
domain, security, or production-failure alerts.

## What I did (repo-side, ships in this PR)

Added `"github": { "silent": true }` to every app's `vercel.json` (14 files,
all production sites + scaffolds).

**What this changes:**
- The Vercel bot **stops posting the giant PR comment** every time a deploy
  finishes ("The latest updates on your projects… 10 Skipped Deployments…").
- That comment is what triggers GitHub to email you for every PR.

**What this does NOT change (preserved on purpose):**
- ✅ Vercel deployment **status checks** still appear on PRs (green/red dots).
  Required for CI gating — kept intact.
- ✅ Vercel **production-failure alerts** still email you. Those come from
  `notifications@vercel.com` directly, not from PR comments.
- ✅ Vercel **billing, usage, and spend-cap alerts** still email you. Same
  channel — direct from Vercel.
- ✅ Vercel **domain expiration / DNS** alerts still email you.
- ✅ GitHub **security alerts** (Dependabot, secret-scanning, code-scanning)
  still email you. Different channel — not affected.
- ✅ GitHub **billing** alerts still email you.

**Reference:** Vercel docs — `github.silent` flag only suppresses PR comments
and auto-reviews. https://vercel.com/docs/projects/project-configuration#github

## What you need to do (3 click-step tasks)

### Task 1 — Set repo Watch level to "Participating and @mentions"
**~30 seconds.** Stops you being notified for every PR opened by every bot.

1. Open https://github.com/carlo8884/carloOS
2. Top-right of the page: click the **`Unwatch`** dropdown (it currently says
   "All Activity" or "Watching" or similar)
3. Choose **`Participating and @mentions`**
4. Save.

After this:
- ✅ You'll still get email when a bot @-mentions you (`@carlo8884`)
- ✅ You'll still get email when you're requested as a reviewer
- ✅ You'll still get email on PRs you opened or commented on
- ❌ You'll stop getting email for every PR opened by COO/Monetization/Visual
  bots that you weren't tagged on

### Task 2 — Turn off "Pull request reviews" and "Comments" emails for noise sources
**~1 minute.** GitHub-account-wide, not repo-specific.

1. Open https://github.com/settings/notifications
2. Under **"Subscriptions"** section:
   - **"Watching"** row: uncheck `Email`, keep `Web and Mobile` checked
   - This means: when a watched repo has activity, you see it in the GitHub
     web/mobile UI but no email arrives
3. Under **"Automatically watch repositories"**: **uncheck** (so new repos
   don't auto-add you to All Activity)
4. Save.

This is the biggest single lever. The repo-level setting from Task 1
covers carloOS specifically; this account-level setting catches everything
else.

### Task 3 — Gmail filter as belt-and-suspenders
**~3 minutes.** Catches anything that slips through.

In Gmail, click the gear → "See all settings" → "Filters and Blocked
Addresses" → "Create a new filter":

**Filter A — Mute vercel[bot] PR comments**
- From: `notifications@github.com`
- Has the words: `from:(vercel[bot])` OR body contains `vc]: #` (the Vercel
  comment signature)
- Click "Create filter" → check **"Skip the Inbox (Archive it)"** and
  **"Apply the label: github-vercel-bot"**
- ✅ Click "Also apply filter to matching conversations" to catch existing ones

**Filter B — Mute routine bot-opened PR notifications, KEEP @mentions**
- From: `notifications@github.com`
- Has the words: `subject:("(claude" OR "[bot]")` 
- Doesn't have: `@carlo8884`
- Action: Skip the Inbox + label `github-bot-prs`

**Filter C — Do NOT touch (preserved)**
Leave alone — these are the alerts you want:
- `noreply@github.com` security advisories (Dependabot, secret-scanning)
- `billing@github.com`
- `notifications@vercel.com` (production failures, billing, usage)
- `noreply@vercel.com` (domain expiry)

## What this combination achieves

| Channel | Before | After |
|---|---|---|
| Vercel bot PR comment emails | 1 per deploy × 10 apps × every PR = ~100/day during polish wave | 0 |
| Bot-opened PRs you're not @-mentioned on | 1 per PR opened | 0 (label, skip inbox) |
| Bot @-mentions of you | Email | Email ✅ (preserved) |
| PRs you opened or commented on | Email | Email ✅ (preserved) |
| Review requests assigned to you | Email | Email ✅ (preserved) |
| Vercel production-failure | Email | Email ✅ (preserved) |
| Vercel billing/usage/spend-cap | Email | Email ✅ (preserved) |
| Vercel domain expiry | Email | Email ✅ (preserved) |
| GitHub security advisories | Email | Email ✅ (preserved) |
| GitHub billing | Email | Email ✅ (preserved) |

## When the COO needs your eyes on a PR

Per your directive ("When a review is needed, give Carlo one direct stable
review URL or one PR preview URL manually"), the COO will:

1. Stop relying on `vercel[bot]` to surface preview URLs to you.
2. When something genuinely needs your review, the COO will:
   - Post a direct message in the chat session you're in with the PR URL
   - Include the exact preview URL (one, not ten) for the relevant site
   - Explain in 2-3 sentences why this needs you specifically (vs. being
     handled in-bot)
3. The COO will **not** @-mention you in PR comments to trigger email — chat
   is the channel.

## Recovery — if I muted something I shouldn't have

If you find you've missed an important alert after these changes:

- **To re-watch carloOS for all activity** (Task 1 undo): Repo → top-right
  → Watch → "All Activity"
- **To re-enable email on watched repos** (Task 2 undo): Settings →
  Notifications → Subscriptions → Watching → re-check "Email"
- **To restore Vercel PR comments** (this PR's undo): revert this PR or
  set `github.silent` to `false` per-app.

## Files changed in this PR

```
apps/askthevet/vercel.json
apps/dog-com/vercel.json
apps/dogpicture/vercel.json
apps/ferret-com/vercel.json
apps/ferrets-com/vercel.json
apps/fish-com/vercel.json
apps/hardmoneyloans/vercel.json
apps/horses-com/vercel.json
apps/lizard-com/vercel.json
apps/petfood-com/vercel.json
apps/petfoods-com/vercel.json
apps/saddle-com/vercel.json
apps/seniorpets/vercel.json
apps/vets-co/vercel.json
```

Each file gets `"github": { "silent": true }` added. No other field touched.
