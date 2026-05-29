/**
 * /preview/[id] — shows the generated portrait + product picker.
 *
 * The page is a server component that loads the generation row, then
 * renders an interactive `<CheckoutForm>` for product + email selection.
 *
 * Cross-portfolio promo (Architect S8 / V2 §3.6 / Directive 6): below the
 * picker we render <InsuranceCTA> routing to the dog.com pet-insurance
 * comparison page.
 */

import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { notFound } from 'next/navigation'
import { buildMetadata } from '@carloOS/ui'
import { getGeneration } from '@/lib/orders'
import { getStyle } from '@/data/styles'
import { CheckoutForm } from './CheckoutForm'
import { InsuranceCTA } from '@/components/InsuranceCTA'

interface PageProps {
  params: { id: string }
  searchParams: { canceled?: string }
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  return buildMetadata({
    siteId: 'dogpicture',
    title: 'Your portrait preview',
    description: 'Preview your AI dog portrait and choose how to print or download it.',
    path: `/preview/${params.id}`,
    type: 'website',
    noIndex: true,
  })
}

export default async function PreviewPage({ params, searchParams }: PageProps) {
  const generation = await getGeneration(params.id)
  if (!generation) notFound()

  const style = getStyle(generation.style_id)

  return (
    <div className="max-w-container mx-auto px-container-sm sm:px-10 py-12 sm:py-16">
      <nav className="text-xs text-brand-text-light mb-6">
        <Link href="/create" className="hover:text-brand-primary no-underline">
          ← Make another portrait
        </Link>
      </nav>

      {searchParams.canceled && (
        <div role="status" className="bg-amber-50 border border-amber-200 rounded-md px-4 py-3 text-sm text-amber-900 mb-6">
          Checkout canceled — your preview is still here whenever you&apos;re ready.
        </div>
      )}

      <header className="mb-8">
        <div className="text-xs uppercase tracking-eyebrow text-brand-primary font-bold mb-2">
          Preview ready
        </div>
        <h1 className="font-display font-black text-brand-text-dark text-3xl sm:text-4xl tracking-tight mb-2">
          {generation.pet_name} as a {style?.name ?? 'portrait'}
        </h1>
        <p className="text-base text-brand-text-mid">
          Looking good? Pick a format below and check out. Digital arrives in your inbox in minutes; physical orders ship in 3–7 business days.
        </p>
      </header>

      <div className="grid lg:grid-cols-[1fr_420px] gap-10">
        {/* Portrait preview */}
        <div className="space-y-4">
          <div className="aspect-square relative rounded-2xl overflow-hidden bg-brand-white border border-brand-border shadow-card">
            <Image
              src={generation.generated_url}
              alt={`${generation.pet_name} in ${style?.name ?? 'portrait'} style`}
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
              priority
            />
          </div>

          {style && (
            <div className="text-sm text-brand-text-mid bg-brand-white rounded-lg border border-brand-border p-4">
              <div className="font-display font-bold text-brand-text-dark mb-1">
                {style.name}
              </div>
              <div className="text-sm leading-relaxed">{style.tagline}.</div>
            </div>
          )}

          {/* Cross-portfolio insurance promo */}
          <InsuranceCTA vendor="lemonade" />
        </div>

        {/* Checkout form */}
        <CheckoutForm generationId={generation.id} />
      </div>
    </div>
  )
}
