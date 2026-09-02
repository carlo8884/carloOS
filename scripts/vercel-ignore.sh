#!/usr/bin/env bash
# Vercel ignoreCommand wrapper for CarloOS monorepo.
#
# Per CSRO directive csro-dir-2026-W22-014 (Vercel build-cost reduction):
# 1. Short-circuit skip if ONLY docs/ops files changed (no app dependency change possible)
# 2. Otherwise delegate to turbo-ignore with --fallback for app-aware caching
#
# Usage in vercel.json:
#   "ignoreCommand": "bash ../../scripts/vercel-ignore.sh <app-name>"

set -uo pipefail

APP_NAME="${1:?usage: vercel-ignore.sh <app-name>}"

# Vercel sets $VERCEL_GIT_PREVIOUS_SHA for incremental pushes; fall back to HEAD^.
BASE="${VERCEL_GIT_PREVIOUS_SHA:-HEAD^}"

CHANGED=$(git diff --name-only "${BASE}" HEAD 2>/dev/null || true)
if [ -z "$CHANGED" ]; then
  exec npx turbo-ignore "$APP_NAME" --fallback="$BASE"
fi

# If every changed file matches docs/ops patterns → skip build immediately.
# Note: bash case `*` matches `/`, so `*.md` covers nested markdown anywhere.
DOCS_ONLY=true
while IFS= read -r f; do
  case "$f" in
    ops/*|*.md|README*|.gitignore|.gitattributes|.github/*|.claude/*|LICENSE*|CODEOWNERS|*.txt)
      continue
      ;;
    *)
      DOCS_ONLY=false
      break
      ;;
  esac
done <<< "$CHANGED"

if [ "$DOCS_ONLY" = true ]; then
  echo "vercel-ignore: docs/ops-only changes → skip build for ${APP_NAME}"
  exit 0
fi

# @carloOS/ui and @carloOS/config have no `build` task, so turbo-ignore's
# `^build` graph does not treat their source edits as app inputs. The five
# earning directory sites must still rebuild. Other apps stay on turbo-ignore.
EARNING_APPS="dog-com fish-com horses-com vets-co ferret-com"
SHARED_CHANGED=false
while IFS= read -r f; do
  case "$f" in
    packages/config/*|packages/ui/*)
      SHARED_CHANGED=true
      break
      ;;
  esac
done <<< "$CHANGED"

if [ "$SHARED_CHANGED" = true ]; then
  for earning in $EARNING_APPS; do
    if [ "$APP_NAME" = "$earning" ]; then
      echo "vercel-ignore: packages/config or packages/ui changed → build ${APP_NAME}"
      exit 1
    fi
  done
fi

exec npx turbo-ignore "$APP_NAME" --fallback="$BASE"
