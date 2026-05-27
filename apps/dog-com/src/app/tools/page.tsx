/**
 * Dog.com Tools Hub — /tools
 *
 * Landing page for interactive calculators and decision tools.
 */

import type { Metadata } from 'next'
import Link from 'next/link'
import { buildMetadata, Breadcrumb } from '@carloOS/ui'

export const metadata: Metadata = buildMetadata({
  siteId: 'dog-com',
  title: 'Dog Tools & Calculators',
  description:
    'Interactive calculators and decision tools — food cost, daily calories, weight targets. Plain-math estimators with the formulas shown.',
  path: '/tools',
})

const TOOLS = [
  {
    href: '/tools/food-cost-calculator',
    title: 'Dog Food Cost Calculator',
    desc:
      'Daily kcal (RER × MER), cups per day, monthly + annual food spend. Tunes for puppy, senior, weight-loss, and active-working dogs.',
    badge: 'Most popular',
  },
]

export default function ToolsHubPage() {
  return (
    <>
      <Breadcrumb
        siteId="dog-com"
        items={[{ name: 'Home', href: '/' }, { name: 'Tools' }]}
      />

      <article className="px-container sm:px-container-sm py-10 max-w-5xl mx-auto">
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-brand-text mb-3">
            Dog Tools & Calculators
          </h1>
          <p className="text-lg text-brand-text-mid">
            Interactive tools backed by published formulas — see the math, not
            just the result.
          </p>
        </header>

        <ul className="grid sm:grid-cols-2 gap-5 list-none p-0 m-0">
          {TOOLS.map((t) => (
            <li key={t.href}>
              <Link
                href={t.href}
                className="block h-full border border-brand-border rounded-lg p-5 hover:border-brand-primary transition-colors"
              >
                {t.badge && (
                  <span className="inline-block text-xs uppercase tracking-wide font-bold text-brand-primary mb-2">
                    {t.badge}
                  </span>
                )}
                <h2 className="text-xl font-bold text-brand-text mb-2">{t.title}</h2>
                <p className="text-brand-text-mid text-sm">{t.desc}</p>
              </Link>
            </li>
          ))}
        </ul>

        <p className="mt-10 text-sm text-brand-text-mid">
          More tools coming: ideal-weight estimator, heartworm-region risk
          lookup, breed-size projector for puppies. Subscribe at the bottom of
          any review page for first access.
        </p>
      </article>
    </>
  )
}
