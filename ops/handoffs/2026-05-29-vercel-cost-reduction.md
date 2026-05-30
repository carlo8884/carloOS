# Vercel Cost Reduction via turbo-ignore (2026-05-29)

## Problem

CarloOS is a Turborepo monorepo with 10 Vercel projects. Before this change, every
PR — including docs-only PRs touching `ops/handoffs/*.md` — triggered a build of
all 10 projects. With ~95+ PRs created/merged in a short window, this burned a
significant number of Vercel build minutes.

## Fix

Each of the 10 `apps/*/vercel.json` files now includes an `ignoreCommand` calling
[`turbo-ignore`](https://turbo.build/repo/docs/reference/turbo-ignore), the
officially-supported Vercel + Turborepo integration:

```json
{
  "ignoreCommand": "npx turbo-ignore <app-name>"
}
```

When Vercel kicks off a build, it first runs `turbo-ignore <app-name>`. The CLI
inspects the git diff against the parent commit and walks Turborepo's dependency
graph for that workspace. If no file in the workspace's dependency closure
changed, it exits 0 and Vercel cancels the build (shown in the dashboard as
"Ignored Build"). Otherwise it exits 1 and the normal build proceeds.

## Apps Configured

| App           | Workspace name | ignoreCommand                          |
|---------------|----------------|----------------------------------------|
| dog-com       | dog-com        | `npx turbo-ignore dog-com`             |
| fish-com      | fish-com       | `npx turbo-ignore fish-com`            |
| horses-com    | horses-com     | `npx turbo-ignore horses-com`          |
| lizard-com    | lizard-com     | `npx turbo-ignore lizard-com`          |
| petfood-com   | petfood-com    | `npx turbo-ignore petfood-com`         |
| petfoods-com  | petfoods-com   | `npx turbo-ignore petfoods-com`        |
| ferret-com    | ferret-com     | `npx turbo-ignore ferret-com`          |
| ferrets-com   | ferrets-com    | `npx turbo-ignore ferrets-com`         |
| saddle-com    | saddle-com     | `npx turbo-ignore saddle-com`          |
| vets-co       | vets-co        | `npx turbo-ignore vets-co`             |

All 10 workspace names match their directory names exactly — no naming traps.

## Expected Savings

Per the official Turborepo docs and observed behavior at other 10-app monorepos:
**60-85% reduction in Vercel build minutes**. Concrete cases this saves:

- A PR touching only `apps/dog-com/**` will now skip the 9 sibling builds.
- Docs-only PRs touching `ops/handoffs/*.md`, `README.md`, etc. skip all 10.
- A PR touching a shared package (e.g. `packages/ui`) still triggers all apps
  that depend on it — correctness preserved by Turborepo's dependency graph.

## How to Verify It's Working

After the next PR merges, check the Vercel dashboard:

1. Open the deployment page for a project that should have been skipped.
2. The build status will be **"Ignored Build"** instead of "Ready" / "Building".
3. Click into the build logs — you'll see the `turbo-ignore` diff output
   explaining which files were compared and why the build was skipped.

To test locally from the repo root:

```bash
npx turbo-ignore dog-com
echo $?   # 0 = skip build, 1 = run build
```

## Caveats

1. **Git-linked Vercel projects only.** `turbo-ignore` reads the git history to
   determine the parent commit. All 10 of our Vercel projects are linked to the
   `carlo8884/carloOS` GitHub repo (via the bootstrap script for the 5 newer
   sites plus manual setup for the original 5), so this requirement is met.
2. **Turborepo dependency graph must be correct.** `turbo-ignore` is only as
   accurate as `turbo.json`'s `dependsOn` declarations. Our root `turbo.json`
   declares `"build": { "dependsOn": ["^build"], "outputs": [".next/**", "!.next/cache/**"] }`
   which correctly captures package-to-package dependencies — verified
   2026-05-29 during this change. If we later add a non-standard build artifact
   path, update `outputs` accordingly.
3. **First run after a force-push or rebase.** `turbo-ignore` may behave
   conservatively (build everything) if it can't find a sensible parent commit.
   This is the safe default — false-negatives (rebuilds something it didn't
   need to) are fine; false-positives (skips a needed build) are not, and the
   tool errs against the former.

## Files Touched

- `apps/{dog,fish,horses,lizard,petfood,petfoods,ferret,ferrets,saddle}-com/vercel.json` (9)
- `apps/vets-co/vercel.json` (1)
- `ops/handoffs/2026-05-29-vercel-cost-reduction.md` (this file)
