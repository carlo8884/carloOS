#!/bin/bash
# SessionStart hook — installs monorepo dependencies so tests, type-checks,
# linters and `next build` work in Claude Code on the web sessions.
set -euo pipefail

# Only run in the remote (web) environment; local dev manages its own deps.
if [ "${CLAUDE_CODE_REMOTE:-}" != "true" ]; then
  exit 0
fi

cd "$CLAUDE_PROJECT_DIR"

# Workspace install at the monorepo root covers every app + package.
# `npm install` (not `ci`) is idempotent and benefits from the cached container.
npm install --no-audit --no-fund
