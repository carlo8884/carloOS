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
DOCS_ONLY=true
while IFS= read -r f; do
  case "$f" in
    ops/*|*.md|README*|.gitignore|.github/*|LICENSE*)
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

exec npx turbo-ignore "$APP_NAME" --fallback="$BASE"
