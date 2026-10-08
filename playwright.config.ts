import { defineConfig } from '@playwright/test'
import { AMAZON_TAG, TRUPANION_TAG } from './e2e/tags'

const sites = [
  { name: 'dog-com', port: 3100 },
  { name: 'fish-com', port: 3101 },
  { name: 'horses-com', port: 3102 },
  { name: 'vets-co', port: 3103 },
  { name: 'ferret-com', port: 3104 },
] as const

function serverEnv(): Record<string, string> {
  const env: Record<string, string> = {}
  for (const [key, value] of Object.entries(process.env)) {
    if (typeof value === 'string') env[key] = value
  }
  env.AFF_AMAZON_TAG = AMAZON_TAG
  env.AFF_AMAZON_BRAND_TAG = AMAZON_TAG
  env.AFF_TRUPANION_TAG = TRUPANION_TAG
  return env
}

const only = process.env.JOURNEY_SITE
const selected = only ? sites.filter((site) => site.name === only) : [...sites]
// Off by default so the required verify job does not run this spec until
// every site's tool → guide → hop path has passed the non-blocking job.
const toolResultSpecs = process.env.TOOL_RESULT_JOURNEYS === '1' ? ['tool-result-journeys.spec.ts'] : []

export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  forbidOnly: !!process.env.CI,
  retries: process.env.CI ? 1 : 0,
  timeout: 60_000,
  expect: { timeout: 20_000 },
  reporter: process.env.CI ? [['github'], ['list']] : 'list',
  use: {
    trace: 'retain-on-failure',
  },
  webServer: selected.map((site) => ({
    command: `npm run start -w ${site.name} -- -H 127.0.0.1 -p ${site.port}`,
    url: `http://127.0.0.1:${site.port}/`,
    reuseExistingServer: !process.env.CI,
    timeout: 180_000,
    env: serverEnv(),
  })),
  projects: selected.map((site) => ({
    name: site.name,
    testMatch: [`${site.name}.spec.ts`, 'ga4-queue.spec.ts', 'hydration.spec.ts', 'security-headers.spec.ts', 'hub-groups.spec.ts', 'attribution.spec.ts', 'journey-events.spec.ts', 'buyer-journeys.spec.ts', 'mobile-nav.spec.ts', ...toolResultSpecs],
    use: { baseURL: `http://127.0.0.1:${site.port}` },
  })),
})
