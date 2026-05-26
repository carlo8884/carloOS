#!/bin/bash
# CarloOS Deployment Helper
# Usage: ./scripts/deploy.sh [site] [action]
# Examples:
#   ./scripts/deploy.sh dog-com build
#   ./scripts/deploy.sh all build
#   ./scripts/deploy.sh dog-com dev
#   ./scripts/deploy.sh seed

set -e

SITE=${1:-"all"}
ACTION=${2:-"build"}
REPO_ROOT=$(cd "$(dirname "$0")/.." && pwd)

SITES=("dog-com" "vets-co" "fish-com" "saddle-com" "lizard-com")
DOMAINS=("dog.com" "vets.co" "fish.com" "saddle.com" "lizard.com")

# Color helpers
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

log_info()    { echo -e "${BLUE}[INFO]${NC} $1"; }
log_success() { echo -e "${GREEN}[OK]${NC}   $1"; }
log_warn()    { echo -e "${YELLOW}[WARN]${NC} $1"; }
log_error()   { echo -e "${RED}[ERR]${NC}  $1"; }

# ── Seed database ──────────────────────────────────────────────────────────────
if [ "$SITE" = "seed" ]; then
  log_info "Seeding database..."
  cd "$REPO_ROOT"

  if [ ! -f ".env.local" ]; then
    log_error ".env.local not found. Copy .env.example to .env.local and fill in values."
    exit 1
  fi

  log_info "Seeding species and products..."
  npx tsx scripts/seed.ts --all
  log_success "Core seed complete"

  log_info "Seeding fish species..."
  npx tsx scripts/seed-fish.ts
  log_success "Fish seed complete"

  log_info "Generating sitemap files..."
  npx tsx scripts/generate-site-files.ts
  log_success "Site files generated"

  log_success "Database seeded successfully."
  exit 0
fi

# ── Dev mode ───────────────────────────────────────────────────────────────────
if [ "$ACTION" = "dev" ]; then
  if [ "$SITE" = "all" ]; then
    log_info "Starting all sites in dev mode..."
    cd "$REPO_ROOT" && npx turbo dev
  else
    log_info "Starting $SITE in dev mode on port..."
    case "$SITE" in
      dog-com)    PORT=3000 ;;
      vets-co)    PORT=3001 ;;
      fish-com)   PORT=3002 ;;
      saddle-com) PORT=3003 ;;
      lizard-com) PORT=3004 ;;
    esac
    cd "$REPO_ROOT/apps/$SITE" && PORT=$PORT npm run dev
  fi
  exit 0
fi

# ── Build ──────────────────────────────────────────────────────────────────────
if [ "$ACTION" = "build" ]; then
  if [ "$SITE" = "all" ]; then
    log_info "Building all sites..."
    cd "$REPO_ROOT" && npx turbo build
    log_success "All sites built successfully."
  else
    log_info "Building $SITE..."
    cd "$REPO_ROOT/apps/$SITE" && npm run build
    log_success "$SITE built successfully."
  fi
  exit 0
fi

# ── Type check ────────────────────────────────────────────────────────────────
if [ "$ACTION" = "typecheck" ]; then
  log_info "Type checking all packages..."
  cd "$REPO_ROOT" && npx turbo type-check
  log_success "Type check complete."
  exit 0
fi

# ── Env check ─────────────────────────────────────────────────────────────────
if [ "$ACTION" = "env-check" ]; then
  log_info "Checking environment variables..."
  REQUIRED_VARS=("NEXT_PUBLIC_SUPABASE_URL" "NEXT_PUBLIC_SUPABASE_ANON_KEY" "SUPABASE_SERVICE_ROLE_KEY" "NEXT_PUBLIC_SITE_ID")
  MISSING=()

  ENV_FILE="$REPO_ROOT/.env.local"
  if [ ! -f "$ENV_FILE" ]; then
    log_error ".env.local not found"
    exit 1
  fi

  for var in "${REQUIRED_VARS[@]}"; do
    if ! grep -q "^$var=" "$ENV_FILE" 2>/dev/null; then
      MISSING+=("$var")
    fi
  done

  if [ ${#MISSING[@]} -eq 0 ]; then
    log_success "All required environment variables are set."
  else
    log_error "Missing required variables:"
    for var in "${MISSING[@]}"; do
      echo "    ❌ $var"
    done
    exit 1
  fi
  exit 0
fi

echo ""
echo "CarloOS Deploy Script"
echo ""
echo "Usage: ./scripts/deploy.sh [site] [action]"
echo ""
echo "Sites:   dog-com · vets-co · fish-com · saddle-com · lizard-com · all"
echo "Actions: build · dev · typecheck · env-check"
echo ""
echo "Special:"
echo "  ./scripts/deploy.sh seed    → seed Supabase database"
echo ""
echo "Examples:"
echo "  ./scripts/deploy.sh dog-com build"
echo "  ./scripts/deploy.sh all dev"
echo "  ./scripts/deploy.sh seed"
